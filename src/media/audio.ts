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
    await ctx.resume().catch(() => undefined);
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

  const duration = await new Promise<number>((resolve, reject) => {
    audio.addEventListener(
      "loadedmetadata",
      () => resolve(Number.isFinite(audio.duration) ? audio.duration : 0),
      { once: true },
    );
    audio.addEventListener("error", () => reject(new Error(`Audio failed: ${file.name}`)), { once: true });
  });

  hookElement(audio);
  await resumeAudio();

  let pcm: AudioBuffer | null = null;
  const ctx = busCtx();
  if (ctx) {
    try {
      const raw = await file.arrayBuffer();
      pcm = await ctx.decodeAudioData(raw.slice(0));
    } catch {
      pcm = null;
    }
  }

  return {
    id: uid("src"),
    name: file.name,
    kind: "audio",
    fileName: file.name,
    mime: file.type || "audio/mpeg",
    width: 0,
    height: 0,
    duration,
    audio,
    pcm,
    objectUrl: url,
  };
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

export function sampleAudio(source: MediaSource | undefined, time: number): { energy: number; bass: number } {
  let energy = 0;
  let bass = 0;
  if (source?.kind === "audio" && source.pcm && source.pcm.duration > 0) {
    const s = sampleLevelsFromSamples(source.pcm.getChannelData(0), source.pcm.sampleRate, source.pcm.duration, time);
    energy = s.energy;
    bass = s.bass;
  } else if (source?.kind === "audio") {
    const live = analyserLevels();
    if (live) {
      energy = live.energy;
      bass = live.bass;
    }
  }
  const follow = source?.kind === "audio" ? 0.28 : 0.18;
  energyEma += (energy - energyEma) * follow;
  bassEma += (bass - bassEma) * Math.min(follow, 0.22);
  if (!source && energyEma < 0.002) energyEma = 0;
  if (!source && bassEma < 0.002) bassEma = 0;
  return { energy: energyEma, bass: bassEma };
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
