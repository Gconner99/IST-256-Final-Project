import { clamp, mulberry32 } from "../core/random";

export const FIELD_MOVE = "field" as const;
export type FieldMove = typeof FIELD_MOVE;

export function isFieldMove(scene?: string | null): scene is FieldMove {
  return scene === FIELD_MOVE;
}

/** Spread: how much of the frame open formations span. */
export function clampFieldStrength(value?: number | null): number {
  return clamp(value ?? 1.15, 0.2, 2.2);
}
export function clampFieldScale(value?: number | null): number {
  return clamp(value ?? 0.95, 0.28, 2.4);
}
/** Tempo: segments per ~2s (one bar at ~122bpm). */
export function clampFieldEvolve(value?: number | null): number {
  return clamp(value ?? 1, 0.08, 2.2);
}
/** Pack: how tightly stamps tile inside a formation. */
export function clampFieldDensity(value?: number | null): number {
  return clamp(value ?? 1.15, 0, 2.2);
}
export function clampFieldDensityScale(value?: number | null): number {
  return clamp(value ?? 0.9, 0.28, 2.4);
}
export function clampFieldDensityEvolve(value?: number | null): number {
  return clamp(value ?? 1.1, 0.08, 2.2);
}
export function clampFieldFlow(value?: number | null): number {
  return clamp(value ?? 0.85, 0, 2.2);
}
/** Swirl: how far stamps arc off the straight path between formations. */
export function clampFieldCurl(value?: number | null): number {
  return clamp(value ?? 0.4, 0, 2.2);
}
export function clampFieldFlowScale(value?: number | null): number {
  return clamp(value ?? 0.8, 0.28, 2.4);
}
export function clampFieldAttract(value?: number | null): number {
  return clamp(value ?? 0.35, 0, 2.2);
}
export function clampFieldRepel(value?: number | null): number {
  return clamp(value ?? 0.9, 0, 2.4);
}
export function clampFieldRadius(value?: number | null): number {
  return clamp(value ?? 0.055, 0.02, 0.22);
}
export function clampFieldInertia(value?: number | null): number {
  return clamp(value ?? 0.55, 0.25, 2.2);
}
/** Glide: share of each segment spent easing into the next layout. 0 is a hard cut on the bar. */
export function clampFieldDamp(value?: number | null): number {
  return clamp(value ?? 0, 0, 0.9);
}
export function clampFieldMaxV(value?: number | null): number {
  return clamp(value ?? 1.15, 0.25, 2.2);
}
export function clampFieldScaleAmp(value?: number | null): number {
  return clamp(value ?? 0.85, 0, 2.2);
}
/** Size of the dense formations (sheet, bands, lines). */
export function clampFieldMinScale(value?: number | null): number {
  return clamp(value ?? 0.62, 0.12, 1);
}
/** Size of the giant formation. */
export function clampFieldMaxScale(value?: number | null): number {
  return clamp(value ?? 1.85, 0.6, 3.2);
}
/** Shuffle: how much stamps trade places and cross paths between formations. */
export function clampFieldPerturb(value?: number | null): number {
  return clamp(value ?? 0.12, 0, 2);
}
/** Morph: how much glyph strokes bend while they hold. */
export function clampFieldWarp(value?: number | null): number {
  return clamp(value ?? 1.1, 0, 2.2);
}
/** Open share: how often the sequence stays in open formations. */
export function clampFieldSparsity(value?: number | null): number {
  return clamp(value ?? 0.85, 0, 2);
}
/** Size contrast between stamps inside one formation. */
export function clampFieldContrast(value?: number | null): number {
  return clamp(value ?? 1.25, 0, 2.2);
}
/** Drift: slow coherent breathing while a formation holds. */
export function clampFieldMotion(value?: number | null): number {
  return clamp(value ?? 0.45, 0, 2);
}

export interface AgentParams {
  fieldStrength: number;
  fieldScale: number;
  fieldEvolve: number;
  density: number;
  densityScale: number;
  densityEvolve: number;
  flow: number;
  curl: number;
  flowScale: number;
  attract: number;
  repel: number;
  radius: number;
  inertia: number;
  damp: number;
  maxV: number;
  scaleAmp: number;
  minScale: number;
  maxScale: number;
  perturb: number;
  warp: number;
  sparsity: number;
  contrast: number;
  motion: number;
}

export function agentParamsFrom(raw?: Partial<AgentParams> | null): AgentParams {
  const minScale = clampFieldMinScale(raw?.minScale);
  const maxScale = Math.max(minScale + 0.08, clampFieldMaxScale(raw?.maxScale));
  return {
    fieldStrength: clampFieldStrength(raw?.fieldStrength),
    fieldScale: clampFieldScale(raw?.fieldScale),
    fieldEvolve: clampFieldEvolve(raw?.fieldEvolve),
    density: clampFieldDensity(raw?.density),
    densityScale: clampFieldDensityScale(raw?.densityScale),
    densityEvolve: clampFieldDensityEvolve(raw?.densityEvolve),
    flow: clampFieldFlow(raw?.flow),
    curl: clampFieldCurl(raw?.curl),
    flowScale: clampFieldFlowScale(raw?.flowScale),
    attract: clampFieldAttract(raw?.attract),
    repel: clampFieldRepel(raw?.repel),
    radius: clampFieldRadius(raw?.radius),
    inertia: clampFieldInertia(raw?.inertia),
    damp: clampFieldDamp(raw?.damp),
    maxV: clampFieldMaxV(raw?.maxV),
    scaleAmp: clampFieldScaleAmp(raw?.scaleAmp),
    minScale,
    maxScale,
    perturb: clampFieldPerturb(raw?.perturb),
    warp: clampFieldWarp(raw?.warp),
    sparsity: clampFieldSparsity(raw?.sparsity),
    contrast: clampFieldContrast(raw?.contrast),
    motion: clampFieldMotion(raw?.motion),
  };
}

export interface AgentPose {
  x: number;
  y: number;
  px: number;
  rot: number;
  alpha: number;
  squash?: number;
}

export const FORMATION_KINDS = ["sheet", "bands", "bloom", "glyph", "clusters", "giants", "line"] as const;
export type FormationKind = (typeof FORMATION_KINDS)[number];
const DENSE: FormationKind[] = ["sheet", "bands", "bloom"];

export function isDenseFormation(kind: FormationKind): boolean {
  return DENSE.includes(kind);
}

/** One locked layout. Coordinates are isotropic: x in ±0.5 of frame width, y in ±hh. */
export interface Formation {
  kind: FormationKind;
  x: Float32Array;
  y: Float32Array;
  d: Float32Array;
  /** Drift amplitude while holding. Glyphs and lines bend more. */
  bend: number;
  phase: number;
}

const BASE_SEGMENT = 1.97;
/** Stamp art leaves a margin inside its square, so a slot draws larger than its spacing. */
const STAMP_PAD = 1.6;
const GOLDEN = 2.399963229728653;

/** Segment length. With a known tempo it snaps to ½, 1, or 2 bars so cuts land on the bar. */
export function fieldCycle(params: AgentParams, bpm = 0) {
  let period = BASE_SEGMENT / params.fieldEvolve;
  if (bpm > 40) {
    const bar = 240 / bpm;
    const bars = [0.5, 1, 2, 4];
    let best = bars[0];
    for (const b of bars) if (Math.abs(Math.log((b * bar) / period)) < Math.abs(Math.log((best * bar) / period))) best = b;
    period = best * bar;
  }
  return { period, glide: params.damp };
}

function smoother(u: number): number {
  return u * u * u * (u * (u * 6 - 15) + 10);
}

/**
 * Segment k morphs steadily from its first layout to its second (m), then cuts to segment k+1.
 * With glide > 0 the last share of the segment eases into the next layout (e) instead of cutting.
 */
export function formationClock(clock: number, params: AgentParams, bpm = 0) {
  const { period, glide } = fieldCycle(params, bpm);
  const c = Math.max(0, clock) / period;
  const k = Math.floor(c);
  const f = c - k;
  const body = 1 - glide;
  const raw = clamp(f / Math.max(1e-6, body), 0, 1);
  const m = raw * 0.55 + (0.5 - 0.5 * Math.cos(Math.PI * raw)) * 0.45;
  const e = glide > 0 && f > body ? smoother((f - body) / glide) : 0;
  return { k, m, e };
}

function pick<T>(rng: () => number, items: readonly T[], weights: readonly number[]): T {
  let total = 0;
  for (const w of weights) total += w;
  let r = rng() * total;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r <= 0) return items[i];
  }
  return items[items.length - 1];
}

/** Starts packed, then alternates dense sheets with open structures. Glyph → glyph reads as a morph. */
export function formationKinds(seed: number, params: AgentParams, upto: number): FormationKind[] {
  const out: FormationKind[] = ["sheet"];
  const stayOpen = clamp(0.28 + params.sparsity * 0.26, 0, 0.85);
  for (let k = 1; k <= upto; k++) {
    const rng = mulberry32(((seed >>> 0) * 31 + k * 7919 + 13) >>> 0);
    const prev = out[k - 1];
    let next: FormationKind;
    if (isDenseFormation(prev) || rng() < stayOpen) {
      next = pick(rng, ["glyph", "clusters", "giants", "line"] as const, [
        prev === "glyph" ? 0.62 : 0.4,
        prev === "clusters" ? 0.08 : 0.24,
        prev === "giants" ? 0 : 0.14,
        prev === "line" ? 0.06 : 0.22,
      ]);
    } else {
      next = pick(rng, DENSE, [0.52, 0.24, 0.24]);
    }
    out.push(next);
  }
  return out;
}

function hilbertKey(x: number, y: number): number {
  const order = 1024;
  let rx: number;
  let ry: number;
  let d = 0;
  let px = clamp(Math.floor(x * (order - 1)), 0, order - 1);
  let py = clamp(Math.floor(y * (order - 1)), 0, order - 1);
  for (let s = order / 2; s >= 1; s = Math.floor(s / 2)) {
    rx = (px & s) > 0 ? 1 : 0;
    ry = (py & s) > 0 ? 1 : 0;
    d += s * s * ((3 * rx) ^ ry);
    if (ry === 0) {
      if (rx === 1) {
        px = s - 1 - px;
        py = s - 1 - py;
      }
      const t = px;
      px = py;
      py = t;
    }
  }
  return d / (order * order);
}

interface Slots {
  x: number[];
  y: number[];
  d: number[];
}

function slots(): Slots {
  return { x: [], y: [], d: [] };
}

function push(s: Slots, x: number, y: number, d: number) {
  s.x.push(x);
  s.y.push(y);
  s.d.push(d);
}

function vary(rng: () => number, params: AgentParams): number {
  const base = 1 + (rng() - 0.5) * 0.55 * params.contrast;
  return rng() < 0.07 * params.contrast ? base * (1.5 + rng() * 0.6) : base;
}

function packMul(params: AgentParams): number {
  return 0.86 + params.density * 0.2;
}

function buildSheet(rng: () => number, n: number, hh: number, params: AgentParams, out: Slots) {
  const area = 2 * hh;
  const s = Math.sqrt(area / (n * 0.92));
  const cols = Math.max(2, Math.round(1 / s));
  const rows = Math.max(2, Math.ceil(n / cols));
  const sx = 1 / cols;
  const sy = (2 * hh) / rows;
  const cells: Array<[number, number]> = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const hex = (r % 2) * 0.5;
      const x = -0.5 + (c + 0.5 + hex * 0.6) * sx + (rng() - 0.5) * sx * 0.22;
      const y = -hh + (r + 0.5) * sy + (rng() - 0.5) * sy * 0.22;
      cells.push([x, y]);
    }
  }
  while (cells.length > n) cells.splice(Math.floor(rng() * cells.length), 1);
  const base = Math.max(sx, sy) * 1.3 * packMul(params) * (params.minScale / 0.62);
  for (const [x, y] of cells) push(out, x, y, base * vary(rng, params));
}

function buildBands(rng: () => number, n: number, hh: number, params: AgentParams, out: Slots) {
  const bands = 3 + Math.floor(rng() * 4);
  const tilt = (rng() - 0.5) * 0.5;
  const wave = 0.02 + rng() * 0.05;
  const freq = 4 + rng() * 6;
  const per = Math.ceil(n / bands);
  const rowsPer = 2;
  const cols = Math.ceil(per / rowsPer);
  const step = 1.04 / cols;
  const gap = (2 * hh) / bands;
  const d = Math.min(step * 1.25, gap * 0.48) * packMul(params) * (params.minScale / 0.62);
  let made = 0;
  for (let b = 0; b < bands && made < n; b++) {
    const cy = -hh + (b + 0.5) * gap;
    const phase = rng() * Math.PI * 2;
    for (let j = 0; j < per && made < n; j++, made++) {
      const col = Math.floor(j / rowsPer);
      const row = j % rowsPer;
      const x = -0.52 + (col + 0.5 + row * 0.5) * step;
      const y = cy + (row - 0.5) * d * 0.78 + x * tilt + Math.sin(x * freq + phase) * wave;
      push(out, x, y, d * vary(rng, params));
    }
  }
}

function buildBloom(rng: () => number, n: number, hh: number, params: AgentParams, out: Slots) {
  const twin = rng() > 0.6;
  const discs = twin ? 2 : 1;
  const R = Math.min(0.5 / discs, hh) * (0.82 + params.fieldStrength * 0.12);
  const c = R / Math.sqrt(n / discs);
  const d = c * 1.4 * packMul(params) * (params.minScale / 0.62);
  const spin = rng() * Math.PI * 2;
  for (let i = 0; i < n; i++) {
    const disc = twin ? i % 2 : 0;
    const j = twin ? Math.floor(i / 2) : i;
    const cx = twin ? (disc === 0 ? -0.25 : 0.25) : 0;
    const r = c * Math.sqrt(j + 0.5);
    const a = j * GOLDEN * (disc === 0 ? 1 : -1) + spin;
    const grow = 0.72 + 0.5 * Math.sqrt((j + 0.5) / (n / discs));
    push(out, cx + Math.cos(a) * r, Math.sin(a) * r, d * grow * vary(rng, params));
  }
}

function bezier(p: number[], u: number): [number, number, number, number] {
  const a = 1 - u;
  const x = a * a * a * p[0] + 3 * a * a * u * p[2] + 3 * a * u * u * p[4] + u * u * u * p[6];
  const y = a * a * a * p[1] + 3 * a * a * u * p[3] + 3 * a * u * u * p[5] + u * u * u * p[7];
  const tx = 3 * a * a * (p[2] - p[0]) + 6 * a * u * (p[4] - p[2]) + 3 * u * u * (p[6] - p[4]);
  const ty = 3 * a * a * (p[3] - p[1]) + 6 * a * u * (p[5] - p[3]) + 3 * u * u * (p[7] - p[5]);
  return [x, y, tx, ty];
}

function strokeLength(p: number[]): number {
  let L = 0;
  let [px, py] = bezier(p, 0);
  for (let i = 1; i <= 24; i++) {
    const [x, y] = bezier(p, i / 24);
    L += Math.hypot(x - px, y - py);
    px = x;
    py = y;
  }
  return L;
}

/** Brush strokes a few stamps thick. Stamps overlap along the stroke like the reference glyphs. */
function strokesAlong(
  rng: () => number,
  strokes: number[][],
  thickFor: (s: number) => number,
  n: number,
  size: number,
  params: AgentParams,
  out: Slots,
) {
  const lengths = strokes.map(strokeLength);
  const total = lengths.reduce((a, b) => a + b, 0) || 1;
  const d = size * packMul(params);
  let made = 0;
  for (let s = 0; s < strokes.length; s++) {
    const cnt = s === strokes.length - 1 ? n - made : Math.round((n * lengths[s]) / total);
    if (cnt <= 0) continue;
    const R = Math.max(1, Math.round(thickFor(s) / (d * 0.74)));
    const cols = Math.max(1, Math.ceil(cnt / R));
    for (let j = 0; j < cnt; j++) {
      const col = Math.floor(j / R);
      const row = j % R;
      const u = (col + 0.5 + (row % 2) * 0.35) / cols;
      const [x, y, tx, ty] = bezier(strokes[s], Math.min(1, u));
      const tl = Math.hypot(tx, ty) || 1;
      const taper = 1 - 0.55 * Math.pow(Math.abs(2 * u - 1), 3);
      const off = (row - (R - 1) / 2) * d * 0.74 * taper;
      push(out, x - (ty / tl) * off, y + (tx / tl) * off, d * (0.7 + 0.3 * taper) * vary(rng, params));
    }
    made += cnt;
  }
}

function buildGlyph(rng: () => number, n: number, hh: number, params: AgentParams, out: Slots) {
  const count = 3 + Math.floor(rng() * 3);
  const spanX = 0.4 * (0.72 + params.fieldStrength * 0.24);
  const spanY = hh * 0.92 * (0.72 + params.fieldStrength * 0.24);
  const strokes: number[][] = [];
  for (let s = 0; s < count; s++) {
    const x0 = (rng() * 2 - 1) * spanX;
    const y0 = (rng() * 2 - 1) * spanY;
    const ang = rng() * Math.PI * 2;
    const len = 0.36 + rng() * 0.4;
    const x3 = clamp(x0 + Math.cos(ang) * len, -spanX * 1.1, spanX * 1.1);
    const y3 = clamp(y0 + Math.sin(ang) * len, -spanY * 1.1, spanY * 1.1);
    const bow = (rng() - 0.5) * 0.36;
    const nx = -(y3 - y0);
    const ny = x3 - x0;
    strokes.push([
      x0,
      y0,
      x0 + (x3 - x0) * 0.33 + nx * bow,
      y0 + (y3 - y0) * 0.33 + ny * bow,
      x0 + (x3 - x0) * 0.66 + nx * bow * (rng() > 0.5 ? 1 : -0.6),
      y0 + (y3 - y0) * 0.66 + ny * bow * (rng() > 0.5 ? 1 : -0.6),
      x3,
      y3,
    ]);
  }
  const thick = strokes.map(() => 0.09 + rng() * 0.08);
  strokesAlong(rng, strokes, (s) => thick[s], n, 0.036 * (params.minScale / 0.62), params, out);
}

function buildLine(rng: () => number, n: number, hh: number, params: AgentParams, out: Slots) {
  const count = rng() > 0.55 ? 2 : 1;
  const strokes: number[][] = [];
  for (let s = 0; s < count; s++) {
    const y0 = (rng() * 2 - 1) * hh * 0.7;
    const y3 = (rng() * 2 - 1) * hh * 0.7;
    const lift = (rng() - 0.5) * hh * 2.4 * (0.6 + params.fieldStrength * 0.35);
    strokes.push([-0.46, y0, -0.16, y0 + lift, 0.16, y3 - lift, 0.46, y3]);
  }
  strokesAlong(rng, strokes, () => 0.05, n, 0.03 * (params.minScale / 0.62), params, out);
}

function buildClusters(rng: () => number, n: number, hh: number, params: AgentParams, out: Slots) {
  const K = 4 + Math.floor(rng() * 6);
  const centers: Array<[number, number]> = [];
  const minGap = 0.16;
  for (let tries = 0; centers.length < K && tries < 400; tries++) {
    const x = (rng() * 2 - 1) * 0.4;
    const y = (rng() * 2 - 1) * hh * 0.8;
    if (centers.every(([cx, cy]) => Math.hypot(cx - x, cy - y) > minGap)) centers.push([x, y]);
  }
  const weights = centers.map(() => 0.4 + rng());
  const total = weights.reduce((a, b) => a + b, 0);
  const area = 2 * hh * 0.3 * (0.6 + params.fieldStrength * 0.35);
  const d = Math.sqrt(area / n) * 1.25 * packMul(params);
  const c = d * 0.56;
  let made = 0;
  for (let k = 0; k < centers.length; k++) {
    const cnt = k === centers.length - 1 ? n - made : Math.round((n * weights[k]) / total);
    const sx = 1 + (rng() - 0.5) * 0.6;
    const spin = rng() * Math.PI * 2;
    for (let j = 0; j < cnt; j++) {
      const r = c * Math.sqrt(j + 0.5);
      const a = j * GOLDEN + spin;
      push(out, centers[k][0] + Math.cos(a) * r * sx, centers[k][1] + Math.sin(a) * r / sx, d * vary(rng, params));
    }
    made += cnt;
  }
}

function buildGiants(rng: () => number, n: number, hh: number, params: AgentParams, out: Slots) {
  const G = clamp(6 + Math.floor(rng() * 9), 3, n);
  const cols = Math.max(2, Math.round(Math.sqrt(G / (2 * hh))));
  const rows = Math.max(1, Math.ceil(G / cols));
  const sx = 0.9 / cols;
  const sy = (2 * hh * 0.86) / rows;
  const big = Math.min(sx, sy) * 0.95 * (params.maxScale / 1.85);
  const per = n / G;
  for (let g = 0; g < G; g++) {
    const c = g % cols;
    const r = Math.floor(g / cols);
    const x = -0.45 + (c + 0.5 + (r % 2) * 0.35) * sx + (rng() - 0.5) * sx * 0.55;
    const y = -hh * 0.86 + (r + 0.5) * sy + (rng() - 0.5) * sy * 0.5;
    const from = Math.round(g * per);
    const to = Math.round((g + 1) * per);
    for (let j = from; j < to; j++) push(out, x, y, j === from ? big * (0.82 + rng() * 0.3) : 0);
  }
}

const BUILDERS: Record<FormationKind, (rng: () => number, n: number, hh: number, params: AgentParams, out: Slots) => void> = {
  sheet: buildSheet,
  bands: buildBands,
  bloom: buildBloom,
  glyph: buildGlyph,
  clusters: buildClusters,
  giants: buildGiants,
  line: buildLine,
};

/** Builds one formation and orders its slots along a Hilbert curve so stamp i keeps neighbors across formations. */
export function buildFormation(kind: FormationKind, seed: number, k: number, n: number, hh: number, params: AgentParams): Formation {
  const rng = mulberry32(((seed >>> 0) ^ Math.imul(k + 1, 0x9e3779b1)) >>> 0);
  const s = slots();
  BUILDERS[kind](rng, n, hh, params, s);
  while (s.x.length < n) push(s, s.x[s.x.length - 1] ?? 0, s.y[s.y.length - 1] ?? 0, 0);
  const shuffle = params.perturb * 0.22;
  const keys = s.x.map((x, i) => {
    const h = hilbertKey(x + 0.5, (s.y[i] + hh) / Math.max(1, 2 * hh));
    return h + shuffle * (rng() - 0.5);
  });
  const order = keys.map((_, i) => i).sort((a, b) => keys[a] - keys[b]);
  const f: Formation = {
    kind,
    x: new Float32Array(n),
    y: new Float32Array(n),
    d: new Float32Array(n),
    bend: kind === "glyph" ? 0.028 * params.warp : kind === "line" ? 0.034 * params.warp : 0.006,
    phase: rng() * Math.PI * 2,
  };
  for (let i = 0; i < n; i++) {
    const j = order[i];
    f.x[i] = clamp(s.x[j], -0.5, 0.5);
    f.y[i] = clamp(s.y[j], -hh, hh);
    f.d[i] = s.d[j];
  }
  return f;
}

function hash01(i: number): number {
  const v = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return v - Math.floor(v);
}

function drift(f: Formation, i: number, clock: number, params: AgentParams, hh: number): [number, number] {
  const amp = f.bend + params.motion * 0.008;
  if (amp <= 0) return [f.x[i], f.y[i]];
  const x = f.x[i];
  const y = f.y[i];
  const t = clock * 0.9;
  return [
    x + amp * Math.sin(y * 4.2 + t + f.phase) + amp * 0.4 * Math.sin(x * 2.3 - t * 0.7),
    y + amp * Math.cos(x * 3.6 + t * 0.8 + f.phase * 1.3) * Math.min(1, hh * 2),
  ];
}

/** True when segment k barely moves, like the reference's still glyph beats. */
export function isStillSegment(seed: number, k: number, kind: FormationKind): boolean {
  if (k === 0 || isDenseFormation(kind)) return false;
  return hash01(((seed >>> 0) % 9973) * 0.731 + k * 3.17) < 0.22;
}

function morphPoint(a: Formation, b: Formation, i: number, m: number, swirl: number, clock: number, params: AgentParams, hh: number) {
  const [ax, ay] = drift(a, i, clock, params, hh);
  if (a === b || m <= 0) return { x: ax, y: ay, d: a.d[i] };
  const [bx, by] = drift(b, i, clock, params, hh);
  const dx = bx - ax;
  const dy = by - ay;
  const arc = swirl * Math.sin(Math.PI * m) * (hash01(i) > 0.5 ? 1 : -1);
  return {
    x: ax + dx * m - dy * arc,
    y: ay + dy * m + dx * arc,
    d: a.d[i] + (b.d[i] - a.d[i]) * m,
  };
}

/** Formation sequence plus cached layouts. Poses are a pure function of the clock, so scrubbing and export stay stable. */
export class FormationField {
  private sig = "";
  private kinds: FormationKind[] = [];
  private cache = new Map<number, Formation>();
  private poses: AgentPose[] = [];

  private kindOf(k: number, seed: number, params: AgentParams): FormationKind {
    if (this.kinds.length <= k) this.kinds = formationKinds(seed, params, k + 8);
    return this.kinds[k];
  }

  /** Layout v of segment k: v=0 opens the segment, v=1 is where it morphs to. */
  private layout(k: number, v: 0 | 1, seed: number, n: number, hh: number, params: AgentParams): Formation {
    const kind = this.kindOf(k, seed, params);
    const still = v === 1 && isStillSegment(seed, k, kind);
    const key = k * 2 + (still ? 0 : v);
    const hit = this.cache.get(key);
    if (hit) return hit;
    const f = buildFormation(kind, seed, key, n, hh, params);
    if (this.cache.size > 8) {
      const oldest = this.cache.keys().next().value;
      if (oldest != null) this.cache.delete(oldest);
    }
    this.cache.set(key, f);
    return f;
  }

  kindAt(clock: number, seed: number, params: AgentParams, bpm = 0): FormationKind {
    const { k } = formationClock(clock, params, bpm);
    return this.kindOf(k, seed, params);
  }

  private sync(seed: number, n: number, aspect: number, params: AgentParams) {
    const sig = `${seed}|${n}|${aspect.toFixed(3)}|${Object.values(params).map((v) => v.toFixed(3)).join(",")}`;
    if (sig !== this.sig) {
      this.sig = sig;
      this.kinds = [];
      this.cache.clear();
    }
  }

  /**
   * aspect = width / height. Output y uses the collage painter's space (±aspect/2).
   * With a song tempo, segments start on the first downbeat and cut on the bar.
   */
  posesAt(n: number, clock: number, seed: number, aspect: number, params: AgentParams, bpm = 0, beatOffset = 0): AgentPose[] {
    this.sync(seed, n, aspect, params);
    const asp = Math.max(0.2, aspect);
    const hh = 0.5 / asp;
    const local = bpm > 40 ? clock - beatOffset : clock;
    const { k, m, e } = formationClock(local, params, bpm);
    const a0 = this.layout(k, 0, seed, n, hh, params);
    const a1 = this.layout(k, 1, seed, n, hh, params);
    const next = e > 0 ? this.layout(k + 1, 0, seed, n, hh, params) : null;
    const swirl = params.curl * 0.24;
    const toPx = Math.max(1, asp);
    const toY = asp * asp;
    if (this.poses.length !== n) this.poses = Array.from({ length: n }, () => ({ x: 0, y: 0, px: 0, rot: 0, alpha: 1, squash: 1 }));
    for (let i = 0; i < n; i++) {
      let { x, y, d } = morphPoint(a0, a1, i, m, swirl * 0.5, clock, params, hh);
      if (next && e > 0) {
        const [bx, by] = drift(next, i, clock, params, hh);
        const dx = bx - x;
        const dy = by - y;
        const arc = swirl * Math.sin(Math.PI * e) * (hash01(i) > 0.5 ? 1 : -1);
        x += dx * e - dy * arc;
        y += dy * e + dx * arc;
        d += (next.d[i] - d) * e;
      }
      const pose = this.poses[i];
      pose.x = clamp(x, -0.52, 0.52);
      pose.y = clamp(y, -hh * 1.04, hh * 1.04) * toY;
      pose.px = d * toPx * STAMP_PAD;
      pose.rot = (hash01(i + 17) - 0.5) * 0.16;
      pose.alpha = d > 0.004 ? 1 : 0;
      pose.squash = 1;
    }
    return this.poses;
  }
}
