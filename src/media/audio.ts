import { uid } from "../core/ids";
import type { MediaSource, PlaybackState, Project } from "../core/types";

const AUDIO_EXT = /\.(mp3|wav|ogg|oga|m4a|aac|flac|opus)$/i;

export function isAudioFile(file: { name: string; type?: string }): boolean {
  return (file.type ?? "").startsWith("audio/") || AUDIO_EXT.test(file.name);
}

export function getSoundtrack(project: Project): MediaSource | undefined {
  return project.sources.find((s) => s.kind === "audio");
}

let bus: AudioContext | null = null;
let analyser: AnalyserNode | null = null;
let freq: Uint8Array | null = null;
const hooked = new WeakSet<HTMLAudioElement>();
let energyEma = 0;
let bassEma = 0;
let beatHold = 0;

function busCtx(): AudioContext | null {
  const AC =
    globalThis.AudioContext ||
    (globalThis as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  if (!bus) {
    bus = new AC();
    analyser = bus.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.72;
    analyser.connect(bus.destination);
    freq = new Uint8Array(analyser.frequencyBinCount);
  }
  return bus;
}

export async function resumeAudio(): Promise<void> {
  const ctx = busCtx();
  if (ctx && ctx.state === "suspended") {
    await Promise.race([
      ctx.resume().catch(() => undefined),
      new Promise<void>((resolve) => setTimeout(resolve, 400)),
    ]);
  }
}

function hookElement(el: HTMLAudioElement) {
  const ctx = busCtx();
  if (!ctx || !analyser || hooked.has(el)) return;
  try {
    const node = ctx.createMediaElementSource(el);
    node.connect(analyser);
    hooked.add(el);
  } catch {
    hooked.add(el);
  }
}

export async function loadAudio(file: File): Promise<MediaSource> {
  const url = URL.createObjectURL(file);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.crossOrigin = "anonymous";
  audio.loop = true;
  audio.preload = "auto";

  hookElement(audio);
  void resumeAudio();

  let pcm: AudioBuffer | null = null;
  const ctx = busCtx();
  if (ctx) {
    try {
      const raw = await file.arrayBuffer();
      const decoded = ctx.decodeAudioData(raw.slice(0)).catch(() => null);
      pcm = await Promise.race([
        decoded,
        new Promise<null>((resolve) => setTimeout(() => resolve(null), 4000)),
      ]);
    } catch {
      pcm = null;
    }
  }

  const duration = await Promise.race([
    new Promise<number>((resolve) => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        resolve(audio.duration);
        return;
      }
      audio.addEventListener(
        "loadedmetadata",
        () => resolve(Number.isFinite(audio.duration) ? audio.duration : pcm?.duration ?? 0),
        { once: true },
      );
      audio.addEventListener("error", () => resolve(pcm?.duration ?? 0), { once: true });
    }),
    new Promise<number>((resolve) => setTimeout(() => resolve(pcm?.duration ?? 0), 2500)),
  ]);

  const beats = pcm ? detectBeats(pcm.getChannelData(0), pcm.sampleRate) : [];
  return {
    id: uid("src"),
    name: file.name,
    kind: "audio",
    fileName: file.name,
    mime: file.type || "audio/mpeg",
    width: 0,
    height: 0,
    duration: duration || pcm?.duration || 0,
    audio,
    pcm,
    beats,
    bpm: estimateBpm(beats),
    objectUrl: url,
  };
}

/** Energy-flux onsets. Cheap enough to run once when an MP3 loads. */
export function detectBeats(ch: Float32Array, sampleRate: number): number[] {
  if (ch.length < sampleRate * 0.4 || sampleRate < 1) return [];
  const hop = Math.max(256, Math.floor(sampleRate * 0.012));
  const win = hop * 2;
  const n = Math.floor((ch.length - win) / hop);
  if (n < 16) return [];
  const energy = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const a = i * hop;
    let e = 0;
    for (let k = 0; k < win; k += 2) {
      const s = ch[a + k];
      e += s * s;
    }
    energy[i] = Math.sqrt(e / (win * 0.5));
  }
  const look = Math.max(10, Math.floor(0.32 / (hop / sampleRate)));
  const minGap = 0.3;
  const beats: number[] = [];
  let last = -99;
  for (let i = look; i < n; i++) {
    let mean = 0;
    let peak = 0;
    for (let j = i - look; j < i; j++) {
      mean += energy[j];
      if (energy[j] > peak) peak = energy[j];
    }
    mean /= look;
    const flux = energy[i] - energy[i - 1];
    const hot = energy[i] > mean * 1.48 && energy[i] > peak * 0.82 && flux > 0.006;
    if (!hot) continue;
    const t = (i * hop) / sampleRate;
    if (t - last < minGap) continue;
    beats.push(t);
    last = t;
  }
  return beats;
}

export function estimateBpm(beats: number[]): number {
  if (beats.length < 4) return 0;
  const gaps: number[] = [];
  for (let i = 1; i < beats.length; i++) {
    const g = beats[i] - beats[i - 1];
    if (g >= 0.28 && g <= 0.8) gaps.push(g);
  }
  if (gaps.length < 3) return 0;
  gaps.sort((a, b) => a - b);
  const mid = gaps[Math.floor(gaps.length / 2)];
  return clampNum(Math.round(60 / mid), 70, 170);
}

/** Soft raised pulse on an onset. Long enough to feel, never a hard click. */
export function beatEnvelope(beats: number[], time: number, decay = 0.2): number {
  if (!beats.length) return 0;
  let lo = 0;
  let hi = beats.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (beats[mid] <= time) lo = mid;
    else hi = mid - 1;
  }
  const at = beats[lo];
  if (at > time) return 0;
  const dt = time - at;
  if (dt > decay * 3.2) return 0;
  return Math.exp(-dt / decay);
}

function clampNum(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

/** RMS of a short window plus a cheap downsampled "bass" window. */
export function sampleLevelsFromSamples(
  ch: Float32Array,
  sampleRate: number,
  duration: number,
  time: number,
): { energy: number; bass: number } {
  if (ch.length < 8 || sampleRate < 1 || duration <= 0) return { energy: 0, bass: 0 };
  const wrapped = ((time % duration) + duration) % duration;
  const i = Math.floor(wrapped * sampleRate);
  const shortN = Math.max(64, Math.floor(sampleRate * 0.046));
  const a = Math.max(0, Math.min(ch.length - 1, i));
  const b = Math.max(a + 1, Math.min(ch.length, i + shortN));
  let e = 0;
  for (let k = a; k < b; k++) e += ch[k] * ch[k];
  const energy = Math.min(1, Math.sqrt(e / (b - a)) * 3.4);
  const win = Math.max(shortN, Math.floor(sampleRate * 0.09));
  const c = Math.min(ch.length, i + win);
  let low = 0;
  let n = 0;
  for (let k = a; k < c; k += 8) {
    low += ch[k] * ch[k];
    n++;
  }
  const bass = Math.min(1, Math.sqrt(low / Math.max(1, n)) * 4.2);
  return { energy, bass };
}

function analyserLevels(): { energy: number; bass: number } | null {
  if (!analyser || !freq) return null;
  analyser.getByteFrequencyData(freq as Uint8Array<ArrayBuffer>);
  let sum = 0;
  let low = 0;
  const n = freq.length;
  const lowN = Math.max(4, Math.floor(n * 0.12));
  for (let i = 0; i < n; i++) {
    const v = freq[i] / 255;
    sum += v;
    if (i < lowN) low += v;
  }
  return { energy: sum / n, bass: low / lowN };
}

export function sampleAudio(
  source: MediaSource | undefined,
  time: number,
): { energy: number; bass: number; beat: number } {
  let energy = 0;
  let bass = 0;
  let beat = 0;
  if (source?.kind === "audio" && source.pcm && source.pcm.duration > 0) {
    const dur = source.pcm.duration;
    const wrapped = ((time % dur) + dur) % dur;
    const s = sampleLevelsFromSamples(source.pcm.getChannelData(0), source.pcm.sampleRate, dur, wrapped);
    energy = s.energy;
    bass = s.bass;
    const hits = source.beats ?? [];
    beat = hits.length ? beatEnvelope(hits, wrapped) : clampNum((energy - 0.16) * 0.55, 0, 0.45);
  } else if (source?.kind === "audio") {
    const live = analyserLevels();
    if (live) {
      energy = live.energy;
      bass = live.bass;
      beat = clampNum((energy - 0.16) * 0.45, 0, 0.4);
    }
  }
  beatHold += (beat - beatHold) * 0.22;
  const follow = source?.kind === "audio" ? 0.22 : 0.14;
  energyEma += (energy - energyEma) * follow;
  bassEma += (bass - bassEma) * Math.min(follow, 0.16);
  if (!source && energyEma < 0.002) energyEma = 0;
  if (!source && bassEma < 0.002) bassEma = 0;
  if (!source) beatHold = 0;
  return { energy: energyEma, bass: bassEma, beat: beatHold };
}

export function applyTransport(
  el: HTMLAudioElement | null | undefined,
  playback: Pick<PlaybackState, "playing" | "time" | "loop" | "freeze" | "speed">,
): void {
  if (!el) return;
  el.loop = playback.loop;
  el.playbackRate = Math.max(0.25, Math.min(4, playback.speed || 1));
  const wantPlay = playback.playing && !playback.freeze;
  if (!wantPlay) {
    if (!el.paused) el.pause();
    if (Number.isFinite(playback.time) && Math.abs(el.currentTime - playback.time) > 0.08) {
      try {
        el.currentTime = Math.max(0, playback.time);
      } catch {
        /* ignore seek until metadata is ready */
      }
    }
    return;
  }
  if (Number.isFinite(playback.time) && Math.abs(el.currentTime - playback.time) > 0.35) {
    try {
      el.currentTime = Math.max(0, playback.time);
    } catch {
      /* ignore */
    }
  }
  if (el.paused) void el.play().catch(() => undefined);
}
