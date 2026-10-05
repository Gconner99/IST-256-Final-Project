import "./sampler.css";
import { PRESET_ORDER, PRESETS, cloneParams, type PresetId } from "./presets";
import { peakEnvelope, renderArrangement, type RenderedStereo } from "./render";
import { buildScore } from "./score";
import type { SamplerParams, SliceEvent } from "./types";
import { encodeWav } from "./wav";

interface Clip {
  id: string;
  name: string;
  sampleRate: number;
  duration: number;
  channels: Float32Array[];
}

const SLIDERS: {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  read: (value: number, params: SamplerParams) => void;
  write: (params: SamplerParams) => number;
  format: (value: number) => string;
}[] = [
  {
    key: "shredRate",
    label: "Scraps / sec",
    min: 0,
    max: 24,
    step: 0.1,
    read: (value, params) => {
      params.shredRate = value;
    },
    write: (params) => params.shredRate,
    format: (value) => value.toFixed(1),
  },
  {
    key: "scrap",
    label: "Scrap length",
    min: 8,
    max: 220,
    step: 1,
    read: (value, params) => {
      params.shredMax = value / 1000;
      params.shredMin = Math.max(0.005, params.shredMax * 0.3);
    },
    write: (params) => params.shredMax * 1000,
    format: (value) => `${Math.round(value)} ms`,
  },
  {
    key: "bed",
    label: "Bed length",
    min: 0.3,
    max: 6,
    step: 0.05,
    read: (value, params) => {
      params.bedMax = value;
      params.bedMin = Math.max(0.2, value * 0.45);
    },
    write: (params) => params.bedMax,
    format: (value) => `${value.toFixed(2)} s`,
  },
  {
    key: "clicks",
    label: "Clicks / sec",
    min: 0,
    max: 10,
    step: 0.1,
    read: (value, params) => {
      params.clickRate = value;
    },
    write: (params) => params.clickRate,
    format: (value) => value.toFixed(1),
  },
  {
    key: "tone",
    label: "Tone",
    min: 800,
    max: 16000,
    step: 10,
    read: (value, params) => {
      params.lowpass = value;
    },
    write: (params) => params.lowpass,
    format: (value) => (value >= 1000 ? `${(value / 1000).toFixed(1)} kHz` : `${Math.round(value)} Hz`),
  },
  {
    key: "width",
    label: "Stereo",
    min: 0,
    max: 1,
    step: 0.01,
    read: (value, params) => {
      params.shredWidth = value;
      params.bedWidth = value * 0.35;
    },
    write: (params) => params.shredWidth,
    format: (value) => (value < 0.05 ? "mono" : value > 0.85 ? "wide" : value.toFixed(2)),
  },
  {
    key: "repeat",
    label: "Repeat",
    min: 0,
    max: 0.4,
    step: 0.01,
    read: (value, params) => {
      params.repeat = value;
    },
    write: (params) => params.repeat,
    format: (value) => `${Math.round(value * 100)}%`,
  },
  {
    key: "reverse",
    label: "Reverse",
    min: 0,
    max: 0.5,
    step: 0.01,
    read: (value, params) => {
      params.reverse = value;
    },
    write: (params) => params.reverse,
    format: (value) => `${Math.round(value * 100)}%`,
  },
  {
    key: "level",
    label: "Level",
    min: 0.05,
    max: 1.3,
    step: 0.01,
    read: (value, params) => {
      params.outputGain = value;
    },
    write: (params) => params.outputGain,
    format: (value) => `${Math.round(20 * Math.log10(value))} dB`,
  },
];

const app = document.querySelector("#app");
if (!app) throw new Error("Missing #app");

app.innerHTML = `
  <div class="app">
    <header class="top">
      <div>
        <p class="eyebrow">local sampler</p>
        <h1>Muraille</h1>
      </div>
      <p class="lede">Drop a clip. A long bed keeps it recognizable, and short scraps jump around it. The wav stays on this computer.</p>
      <a class="back" href="./index.html">Phosphene</a>
    </header>
    <div class="layout">
      <section class="stage">
        <div class="drop" id="drop">
          <strong>Drop audio</strong>
          <p>mp3, wav, flac, ogg — one clip or a few.</p>
          <button class="ghost" id="browse" type="button">Choose files</button>
          <input id="file" type="file" accept="audio/*,.mp3,.wav,.flac,.ogg,.m4a,.aac" multiple hidden />
        </div>
        <ul class="clips" id="clips"></ul>
        <div class="wave-label"><span>Source</span><span id="source-meta"></span></div>
        <div class="wave"><canvas id="source-wave"></canvas></div>
        <div class="wave-label"><span>Chop</span><span id="chop-meta"></span></div>
        <div class="wave"><canvas id="chop-wave"></canvas><canvas id="playhead"></canvas></div>
        <div class="transport">
          <button class="play" id="play" type="button" disabled>Play</button>
          <button id="rechop" type="button" disabled>Rechop</button>
          <button id="export" type="button" disabled>Export wav</button>
          <label class="check"><input id="loop" type="checkbox" checked /> Loop</label>
          <span class="clock" id="clock">0:00</span>
          <span class="stats" id="stats"></span>
        </div>
        <label class="length"><span>Length</span><input id="length" type="range" min="1" max="30" step="0.1" value="8" disabled /><b id="length-read">8.0 s</b></label>
      </section>
      <aside class="panel">
        <div class="presets" id="presets"></div>
        <p class="hint" id="hint">Dorées keeps the tune in front. Scraps are the cut.</p>
        <div id="sliders"></div>
        <div class="row-controls">
          <label>Shape <select id="contour">
            <option value="swell">Swell</option>
            <option value="flat">Flat</option>
            <option value="fade">End fade</option>
            <option value="dropout">Dropout</option>
            <option value="still">Still</option>
          </select></label>
          <label class="check"><input id="limiter" type="checkbox" checked /> Limit</label>
        </div>
        <p class="status" id="status" role="status">Waiting for a clip.</p>
        <p class="keys">Space play · R rechop · E export</p>
      </aside>
    </div>
  </div>
`;

const $ = <T extends Element>(selector: string) => {
  const node = app.querySelector(selector);
  if (!node) throw new Error(`Missing ${selector}`);
  return node as T;
};

const drop = $<HTMLDivElement>("#drop");
const fileInput = $<HTMLInputElement>("#file");
const clipList = $<HTMLUListElement>("#clips");
const sourceCanvas = $<HTMLCanvasElement>("#source-wave");
const chopCanvas = $<HTMLCanvasElement>("#chop-wave");
const playCanvas = $<HTMLCanvasElement>("#playhead");
const playButton = $<HTMLButtonElement>("#play");
const rechopButton = $<HTMLButtonElement>("#rechop");
const exportButton = $<HTMLButtonElement>("#export");
const loopInput = $<HTMLInputElement>("#loop");
const clock = $<HTMLSpanElement>("#clock");
const stats = $<HTMLSpanElement>("#stats");
const lengthInput = $<HTMLInputElement>("#length");
const lengthRead = $<HTMLElement>("#length-read");
const contourSelect = $<HTMLSelectElement>("#contour");
const limiterInput = $<HTMLInputElement>("#limiter");
const status = $<HTMLParagraphElement>("#status");
const hint = $<HTMLParagraphElement>("#hint");
const sourceMeta = $<HTMLSpanElement>("#source-meta");
const chopMeta = $<HTMLSpanElement>("#chop-meta");
const presetRow = $<HTMLDivElement>("#presets");
const sliderHost = $<HTMLDivElement>("#sliders");

const HINTS: Record<string, string> = {
  dorees: "Dorées keeps the tune in front. Scraps are an accent, and the middle swells.",
  doki: "Doki is the shred. Tiny scraps, wide stereo, and the end falls away.",
  perdre: "Perdre is crushed and clicky, with the bed shoved toward the sides.",
  lexo: "Lexo uses longer scraps, a dark tone, and a flat loud contour.",
  muraille: "Muraille is the quiet one. No chops, mono, about 12 dB down.",
};

let clips: Clip[] = [];
let activeId: string | null = null;
let params: SamplerParams = cloneParams(PRESETS.dorees);
let baseId: PresetId = "dorees";
let dirty = false;
let seed = 1;
let arrangement = 8;
let score: SliceEvent[] = [];
let rendered: RenderedStereo | null = null;
let renderToken = 0;
let rebuildTimer = 0;
let applying = false;

let audio: AudioContext | null = null;
let voice: AudioBufferSourceNode | null = null;
let playing = false;
let startedAt = 0;

const sliderInputs = new Map<string, HTMLInputElement>();
const sliderReads = new Map<string, HTMLElement>();

for (const spec of SLIDERS) {
  const label = document.createElement("label");
  label.className = "slider";
  const name = document.createElement("span");
  name.textContent = spec.label;
  const read = document.createElement("b");
  const input = document.createElement("input");
  input.type = "range";
  input.min = String(spec.min);
  input.max = String(spec.max);
  input.step = String(spec.step);
  input.setAttribute("aria-label", spec.label);
  label.append(name, read, input);
  sliderHost.append(label);
  sliderInputs.set(spec.key, input);
  sliderReads.set(spec.key, read);
  input.addEventListener("input", () => {
    if (applying) return;
    dirty = true;
    readSliders();
    paintPresetButtons();
    scheduleRebuild();
  });
}

for (const id of PRESET_ORDER) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = PRESETS[id].name;
  button.dataset.preset = id;
  button.addEventListener("click", () => applyPreset(id));
  presetRow.append(button);
}

contourSelect.addEventListener("change", () => {
  if (applying) return;
  params.contour = contourSelect.value as SamplerParams["contour"];
  dirty = true;
  paintPresetButtons();
  scheduleRebuild();
});

limiterInput.addEventListener("change", () => {
  if (applying) return;
  params.limiter = limiterInput.checked;
  dirty = true;
  paintPresetButtons();
  scheduleRebuild();
});

lengthInput.addEventListener("input", () => {
  arrangement = Number(lengthInput.value);
  lengthRead.textContent = `${arrangement.toFixed(1)} s`;
  scheduleRebuild();
});

$<HTMLButtonElement>("#browse").addEventListener("click", () => fileInput.click());
drop.addEventListener("click", (event) => {
  if ((event.target as HTMLElement).id === "browse") return;
  fileInput.click();
});
fileInput.addEventListener("change", () => {
  if (fileInput.files) void addFiles(fileInput.files);
  fileInput.value = "";
});

let dragDepth = 0;
window.addEventListener("dragenter", (event) => {
  if (!event.dataTransfer?.types.includes("Files")) return;
  dragDepth += 1;
  document.body.classList.add("drag");
});
window.addEventListener("dragleave", () => {
  dragDepth = Math.max(0, dragDepth - 1);
  if (dragDepth === 0) document.body.classList.remove("drag");
});
window.addEventListener("dragover", (event) => {
  if (event.dataTransfer?.types.includes("Files")) event.preventDefault();
});
window.addEventListener("drop", (event) => {
  dragDepth = 0;
  document.body.classList.remove("drag");
  if (!event.dataTransfer?.files.length) return;
  event.preventDefault();
  void addFiles(event.dataTransfer.files);
});

playButton.addEventListener("click", () => void togglePlay());
rechopButton.addEventListener("click", () => rechop());
exportButton.addEventListener("click", () => exportWav());

window.addEventListener("keydown", (event) => {
  const target = event.target as HTMLElement | null;
  if (target && (target.tagName === "SELECT" || (target.tagName === "INPUT" && (target as HTMLInputElement).type !== "range"))) return;
  if (event.code === "Space") {
    event.preventDefault();
    void togglePlay();
  } else if (event.key === "r" || event.key === "R") {
    rechop();
  } else if (event.key === "e" || event.key === "E") {
    exportWav();
  }
});

function activeClip(): Clip | null {
  return clips.find((clip) => clip.id === activeId) ?? null;
}

function context(): AudioContext {
  if (!audio) {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audio = new Ctx();
  }
  return audio;
}

function applyPreset(id: PresetId) {
  params = cloneParams(PRESETS[id]);
  baseId = id;
  dirty = false;
  applying = true;
  syncControls();
  applying = false;
  paintPresetButtons();
  hint.textContent = HINTS[id];
  void rebuild();
}

function syncControls() {
  for (const spec of SLIDERS) {
    const input = sliderInputs.get(spec.key);
    const read = sliderReads.get(spec.key);
    if (!input || !read) continue;
    const value = spec.write(params);
    input.value = String(value);
    read.textContent = spec.format(value);
  }
  contourSelect.value = params.contour;
  limiterInput.checked = params.limiter;
}

function readSliders() {
  for (const spec of SLIDERS) {
    const input = sliderInputs.get(spec.key);
    const read = sliderReads.get(spec.key);
    if (!input || !read) continue;
    const value = Number(input.value);
    spec.read(value, params);
    read.textContent = spec.format(value);
  }
}

function paintPresetButtons() {
  for (const button of presetRow.querySelectorAll("button")) {
    const id = button.dataset.preset;
    button.setAttribute("aria-pressed", !dirty && id === baseId ? "true" : "false");
  }
}

function formatClock(seconds: number): string {
  const safe = Math.max(0, seconds);
  const mins = Math.floor(safe / 60);
  const secs = Math.floor(safe % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function setBusy(busy: boolean) {
  const ready = !busy && activeClip() !== null;
  playButton.disabled = !ready;
  rechopButton.disabled = !ready;
  exportButton.disabled = !ready;
  lengthInput.disabled = !activeClip();
}

async function addFiles(list: FileList) {
  const files = [...list].filter((file) => file.type.startsWith("audio/") || /\.(mp3|wav|flac|ogg|m4a|aac)$/i.test(file.name));
  if (!files.length) {
    status.textContent = "That file is not audio the browser can read.";
    return;
  }
  status.textContent = files.length === 1 ? "Reading…" : `Reading ${files.length} files…`;
  const ctx = context();
  for (const file of files) {
    try {
      const decoded = await ctx.decodeAudioData(await file.arrayBuffer());
      const channels: Float32Array[] = [];
      for (let c = 0; c < decoded.numberOfChannels; c++) {
        channels.push(new Float32Array(decoded.getChannelData(c)));
      }
      clips.push({
        id: crypto.randomUUID(),
        name: file.name,
        sampleRate: decoded.sampleRate,
        duration: decoded.duration,
        channels,
      });
      activeId = clips[clips.length - 1].id;
    } catch {
      status.textContent = `Could not decode ${file.name}.`;
    }
  }
  selectClip(activeId);
}

function selectClip(id: string | null) {
  activeId = id;
  const clip = activeClip();
  paintClips();
  if (!clip) {
    arrangement = 8;
    rendered = null;
    score = [];
    sourceMeta.textContent = "";
    chopMeta.textContent = "";
    stats.textContent = "";
    status.textContent = "Waiting for a clip.";
    setBusy(false);
    stopPlayback();
    draw();
    return;
  }
  const max = Math.max(0.4, clip.duration);
  lengthInput.min = String(Math.min(1, max));
  lengthInput.max = String(max);
  arrangement = max;
  lengthInput.value = String(max);
  lengthInput.disabled = false;
  lengthRead.textContent = `${arrangement.toFixed(1)} s`;
  sourceMeta.textContent = `${formatClock(clip.duration)} · ${clip.sampleRate} Hz`;
  void rebuild();
}

function paintClips() {
  document.body.classList.toggle("has-clips", clips.length > 0);
  clipList.innerHTML = "";
  for (const clip of clips) {
    const item = document.createElement("li");
    if (clip.id === activeId) item.className = "on";
    const name = document.createElement("button");
    name.type = "button";
    name.className = "name";
    name.textContent = clip.name;
    name.title = clip.name;
    name.addEventListener("click", () => selectClip(clip.id));
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "x";
    remove.textContent = "remove";
    remove.setAttribute("aria-label", `Remove ${clip.name}`);
    remove.addEventListener("click", () => {
      clips = clips.filter((entry) => entry.id !== clip.id);
      if (activeId === clip.id) activeId = clips[0]?.id ?? null;
      selectClip(activeId);
    });
    item.append(name, remove);
    clipList.append(item);
  }
}

function scheduleRebuild() {
  window.clearTimeout(rebuildTimer);
  rebuildTimer = window.setTimeout(() => void rebuild(), 50);
}

async function rebuild() {
  const clip = activeClip();
  const token = ++renderToken;
  if (!clip) return;
  setBusy(true);
  status.textContent = "Cutting…";
  await new Promise((resolve) => requestAnimationFrame(() => resolve(undefined)));
  if (token !== renderToken) return;
  const wasPlaying = playing;
  stopPlayback();
  score = buildScore(clip.duration, arrangement, params, seed);
  rendered = renderArrangement(clip.channels, clip.sampleRate, score, params, arrangement);
  if (token !== renderToken) return;
  const shreds = score.filter((event) => event.kind === "shred").length;
  const beds = score.filter((event) => event.kind === "bed").length;
  const clicks = score.filter((event) => event.kind === "click").length;
  const edited = dirty ? ", edited" : "";
  stats.textContent = `${beds} bed · ${shreds} scraps · ${clicks} clicks`;
  chopMeta.textContent = `chop ${seed}${edited}`;
  status.textContent = `${PRESETS[baseId].name}${edited}. Audio stays in this browser.`;
  setBusy(false);
  draw();
  if (wasPlaying) void startPlayback();
}

function rechop() {
  if (!activeClip()) return;
  seed = (seed + 1) >>> 0;
  void rebuild();
}

function draw() {
  const clip = activeClip();
  drawPeaks(sourceCanvas, clip ? peakEnvelope(clip.channels[0], sourceCanvas.clientWidth || 640) : null, "rgba(244,239,228,0.9)", null);
  drawPeaks(
    chopCanvas,
    rendered ? peakEnvelope(rendered.left, chopCanvas.clientWidth || 640) : null,
    "rgba(244,239,228,0.92)",
    score,
  );
  drawPlayhead();
}

function drawPeaks(
  canvas: HTMLCanvasElement,
  peaks: { min: Float32Array; max: Float32Array } | null,
  color: string,
  events: SliceEvent[] | null,
) {
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const width = Math.max(1, Math.floor(rect.width * dpr));
  const height = Math.max(1, Math.floor(rect.height * dpr));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  if (events && arrangement > 0) {
    for (const event of events) {
      const x = (event.time / arrangement) * width;
      const w = Math.max(1, (event.duration / arrangement) * width);
      if (event.kind === "bed") {
        ctx.fillStyle = "rgba(244,239,228,0.13)";
        ctx.fillRect(x, height * 0.18, w, height * 0.64);
      } else if (event.kind === "shred") {
        ctx.fillStyle = "rgba(16,24,32,0.45)";
        ctx.fillRect(x, height * 0.08, Math.max(1, w), height * 0.84);
      } else {
        ctx.fillStyle = "rgba(244,239,228,0.85)";
        ctx.fillRect(x, 2, 1.5 * dpr, height * 0.12);
      }
    }
  }
  if (!peaks) return;
  ctx.beginPath();
  const mid = height / 2;
  for (let i = 0; i < peaks.max.length; i++) {
    const x = (i / peaks.max.length) * width;
    ctx.lineTo(x, mid - peaks.max[i] * mid * 0.92);
  }
  for (let i = peaks.min.length - 1; i >= 0; i--) {
    const x = (i / peaks.min.length) * width;
    ctx.lineTo(x, mid - peaks.min[i] * mid * 0.92);
  }
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawPlayhead() {
  const rect = playCanvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const width = Math.max(1, Math.floor(rect.width * dpr));
  const height = Math.max(1, Math.floor(rect.height * dpr));
  if (playCanvas.width !== width || playCanvas.height !== height) {
    playCanvas.width = width;
    playCanvas.height = height;
  }
  const ctx = playCanvas.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  if (!playing || arrangement <= 0) return;
  const elapsed = (audio?.currentTime ?? startedAt) - startedAt;
  const time = loopInput.checked ? elapsed % arrangement : Math.min(arrangement, elapsed);
  clock.textContent = `${formatClock(time)} / ${formatClock(arrangement)}`;
  const x = (time / arrangement) * width;
  ctx.fillStyle = "#f4efe4";
  ctx.fillRect(x, 0, Math.max(1, dpr), height);
  if (playing) requestAnimationFrame(drawPlayhead);
}

function stopPlayback() {
  playing = false;
  const current = voice;
  voice = null;
  if (current) {
    current.onended = null;
    try {
      current.stop();
    } catch {
      /* already stopped */
    }
    current.disconnect();
  }
  playButton.textContent = "Play";
  clock.textContent = `0:00 / ${formatClock(arrangement)}`;
  const ctx = playCanvas.getContext("2d");
  if (ctx) ctx.clearRect(0, 0, playCanvas.width, playCanvas.height);
}

async function startPlayback() {
  if (!rendered) return;
  const ctx = context();
  await ctx.resume();
  stopPlayback();
  let buffer: AudioBuffer;
  try {
    buffer = ctx.createBuffer(2, rendered.left.length, rendered.sampleRate);
  } catch {
    status.textContent = "This browser could not play that sample rate. Export still works.";
    return;
  }
  const left = new Float32Array(rendered.left.length);
  const right = new Float32Array(rendered.right.length);
  left.set(rendered.left);
  right.set(rendered.right);
  buffer.copyToChannel(left, 0);
  buffer.copyToChannel(right, 1);
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = loopInput.checked;
  source.connect(ctx.destination);
  source.onended = () => {
    if (voice !== source) return;
    playing = false;
    playButton.textContent = "Play";
  };
  voice = source;
  startedAt = ctx.currentTime;
  source.start();
  playing = true;
  playButton.textContent = "Stop";
  requestAnimationFrame(drawPlayhead);
}

async function togglePlay() {
  if (!rendered) return;
  if (playing) stopPlayback();
  else await startPlayback();
}

function exportWav() {
  const clip = activeClip();
  if (!rendered || !clip) return;
  const bytes = encodeWav([rendered.left, rendered.right], rendered.sampleRate);
  const wav = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
  const blob = new Blob([wav], { type: "audio/wav" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const safe = clip.name.replace(/\.[^.]+$/, "").replace(/[^\w.-]+/g, "_").slice(0, 48);
  link.href = url;
  link.download = `muraille-${params.id}-${safe || "clip"}.wav`;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 2000);
  status.textContent = `Saved ${link.download}.`;
}

new ResizeObserver(() => draw()).observe(chopCanvas.parentElement ?? chopCanvas);

syncControls();
paintPresetButtons();
setBusy(false);
draw();
