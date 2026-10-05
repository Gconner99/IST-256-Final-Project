import { clamp, mulberry32 } from "../core/random";

export const FIELD_MOVE = "field" as const;
export type FieldMove = typeof FIELD_MOVE;

export function isFieldMove(scene?: string | null): scene is FieldMove {
  return scene === FIELD_MOVE;
}

/** Spread: how far the pattern reaches, and how many rings or wave crests it has. */
export function clampFieldStrength(value?: number | null): number {
  return clamp(value ?? 1.15, 0.2, 2.2);
}
export function clampFieldScale(value?: number | null): number {
  return clamp(value ?? 0.95, 0.28, 2.4);
}
/** Tempo: loops per 6s. */
export function clampFieldEvolve(value?: number | null): number {
  return clamp(value ?? 1, 0.08, 2.2);
}
/** Pack: how much neighboring stamps overlap. */
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
/** Swirl: twist — spiral arm wind, ring counter-spin, wave curl. */
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
/** Unused since Field became one seamless loop; kept so saved projects still load. */
export function clampFieldDamp(value?: number | null): number {
  return clamp(value ?? 0, 0, 0.9);
}
export function clampFieldMaxV(value?: number | null): number {
  return clamp(value ?? 1.15, 0.25, 2.2);
}
export function clampFieldScaleAmp(value?: number | null): number {
  return clamp(value ?? 0.85, 0, 2.2);
}
/** Stamp size. */
export function clampFieldMinScale(value?: number | null): number {
  return clamp(value ?? 0.62, 0.12, 1);
}
/** Size of the occasional hero stamp. */
export function clampFieldMaxScale(value?: number | null): number {
  return clamp(value ?? 1.85, 0.6, 3.2);
}
/** Shuffle: 0 keeps icons on the pattern's repeat; higher mixes in random icons. */
export function clampFieldPerturb(value?: number | null): number {
  return clamp(value ?? 0.12, 0, 2);
}
/** Breathe: how much the pattern swells and the shapes bend. */
export function clampFieldWarp(value?: number | null): number {
  return clamp(value ?? 1.1, 0, 2.2);
}
/** Symmetry: lobes, folds, and petals. */
export function clampFieldSparsity(value?: number | null): number {
  return clamp(value ?? 0.85, 0, 2);
}
/** Size contrast between stamps. */
export function clampFieldContrast(value?: number | null): number {
  return clamp(value ?? 1.25, 0, 2.2);
}
/** Ripple: wave height running through the pattern. */
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
  flip?: number;
  /** Which kit stamp to draw. Patterns repeat icons on purpose; defaults to the slot index. */
  charge?: number;
  /** Next kit stamp while morphing. Painter crossfades charge → chargeB. */
  chargeB?: number;
  morph?: number;
}

/** Stamp art leaves a margin inside its square, so a slot draws larger than its spacing. */
const STAMP_PAD = 1.6;
const GOLDEN = 2.399963229728653;
const TAU = Math.PI * 2;
/** Seconds per loop at Tempo 1. */
const BASE_LOOP = 6;

export const FIELD_PATTERNS = [
  "sunflower",
  "rings",
  "spiro",
  "ripple",
  "march",
  "kaleido",
  "shapeshift",
  "vortex",
  "orbit",
  "weave",
  "fan",
  "braid",
  "tiles",
  "petal",
  "coil",
  "traffic",
  "cascade",
  "circuit",
  "chevron",
  "checker",
  "shear",
  "scan",
  "snake",
] as const;
export type FieldPattern = (typeof FIELD_PATTERNS)[number];
export type FieldPatternChoice = FieldPattern | "auto";

export const FIELD_PATTERN_LABEL: Record<FieldPatternChoice, string> = {
  auto: "Auto",
  sunflower: "Sunflower",
  rings: "Rings",
  spiro: "Spirograph",
  ripple: "Ripple",
  march: "March",
  kaleido: "Kaleido",
  shapeshift: "Shapeshift",
  vortex: "Vortex",
  orbit: "Orbit",
  weave: "Weave",
  fan: "Fan",
  braid: "Braid",
  tiles: "Tiles",
  petal: "Petal",
  coil: "Coil",
  traffic: "Traffic",
  cascade: "Cascade",
  circuit: "Circuit",
  chevron: "Chevron",
  checker: "Checker",
  shear: "Shear",
  scan: "Scan",
  snake: "Snake",
};

export function clampFieldPattern(value?: string | null): FieldPatternChoice {
  return (FIELD_PATTERNS as readonly string[]).includes(value ?? "") ? (value as FieldPattern) : "auto";
}

/** Auto picks one pattern per seed; it holds for the whole clip. */
export function resolveFieldPattern(choice: FieldPatternChoice | string | null | undefined, seed: number): FieldPattern {
  const c = clampFieldPattern(choice);
  if (c !== "auto") return c;
  return FIELD_PATTERNS[(Math.imul((seed >>> 0) ^ 0x5bd1e995, 2654435761) >>> 0) % FIELD_PATTERNS.length];
}

/** Loop length in seconds. With a song tempo it snaps to whole bars so the loop lands on the downbeat. */
export function fieldLoop(params: AgentParams, bpm = 0): number {
  let loop = BASE_LOOP / params.fieldEvolve;
  if (bpm > 40) {
    const bar = 240 / bpm;
    let best = 1;
    for (const b of [1, 2, 4, 8, 16, 32]) {
      if (Math.abs(Math.log((b * bar) / loop)) < Math.abs(Math.log((best * bar) / loop))) best = b;
    }
    loop = best * bar;
  }
  return loop;
}

/** 0..1 through the loop. Every pattern is periodic in this, so the clip never cuts. */
export function loopPhase(clock: number, params: AgentParams, bpm = 0, beatOffset = 0): number {
  const local = bpm > 40 ? clock - beatOffset : clock;
  const c = local / fieldLoop(params, bpm);
  return c - Math.floor(c);
}

export const FORMATION_KINDS = ["sheet", "bands", "bloom", "glyph", "clusters", "giants", "line"] as const;
export type FormationKind = (typeof FORMATION_KINDS)[number];
const DENSE: FormationKind[] = ["sheet", "bands", "bloom"];
const OPEN: FormationKind[] = ["glyph", "clusters", "line", "giants"];

export function isDenseFormation(kind: FormationKind): boolean {
  return DENSE.includes(kind);
}

/** One still layout used by Shapeshift. Coordinates are isotropic: x in ±0.5 of frame width, y in ±hh. */
export interface Formation {
  kind: FormationKind;
  x: Float32Array;
  y: Float32Array;
  d: Float32Array;
  /** Drift amplitude while holding. Glyphs and lines bend more. */
  bend: number;
  phase: number;
}

function smoother(u: number): number {
  return u * u * u * (u * (u * 6 - 15) + 10);
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

/** Shapeshift's three shapes: one packed, two open, visited in a ring. */
export function shapeshiftKinds(seed: number): FormationKind[] {
  const rng = mulberry32(((seed >>> 0) * 31 + 7) >>> 0);
  const dense = pick(rng, DENSE, [0.5, 0.25, 0.25]);
  const w = [0.4, 0.3, 0.15, 0.15];
  const a = pick(rng, OPEN, w);
  const b = pick(rng, OPEN, w.map((v, i) => (OPEN[i] === a ? 0 : v)));
  return [dense, a, b];
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
  const base = Math.max(sx, sy) * 1.1 * packMul(params) * (params.minScale / 0.62);
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

function sizeScale(p: AgentParams): number {
  return p.minScale / 0.62;
}

/** Per-stamp size spread plus the occasional hero stamp. */
function sizeMul(i: number, p: AgentParams): number {
  const base = 1 + (hash01(i * 3.1 + 7) - 0.5) * 0.5 * p.contrast;
  const hero = hash01(i * 5.7 + 3) < 0.035 * p.contrast ? (p.maxScale / 1.85) * (1.5 + hash01(i * 2.3 + 1) * 0.5) : 1;
  return base * hero;
}

/** Shuffle 0 keeps icons on the pattern's own repeat; higher trades in random icons. */
function chargeFor(i: number, patterned: number, p: AgentParams): number {
  return hash01(i * 9.13 + 1) < p.perturb * 0.5 ? i : patterned;
}

function tilt(i: number): number {
  return (hash01(i + 17) - 0.5) * 0.14;
}

/** Symmetry: lobes, folds, and petal count. */
function folds(p: AgentParams): number {
  return Math.round(clamp(3 + p.sparsity * 2.4, 3, 9));
}

type Emit = (i: number, x: number, y: number, d: number, rot: number, charge: number, flip?: number, chargeB?: number, morph?: number) => void;

interface LoopCtx {
  n: number;
  hh: number;
  /** Half diagonal of the frame. */
  R: number;
  u: number;
  th: number;
  seed: number;
  p: AgentParams;
}

/** Phyllotaxis disc. The divergence angle swings around golden, so the spiral arms twist and re-form. */
function sunflower(c: LoopCtx, emit: Emit) {
  const { n, R, th, p, seed } = c;
  const rad = R * (0.62 + p.fieldStrength * 0.36);
  const step = rad / Math.sqrt(n);
  const d0 = step * 2.1 * packMul(p) * sizeScale(p);
  const div = GOLDEN + p.curl * 0.006 * Math.sin(th);
  const spin = seed % 2 ? th : -th;
  const arms = [8, 13, 21][seed % 3];
  for (let j = 0; j < n; j++) {
    const q = (j + 0.5) / n;
    const wave = Math.sin(th * 2 - q * TAU * 1.5);
    const r = step * Math.sqrt(j + 0.5) * (1 + p.warp * 0.06 * wave);
    const a = j * div + spin;
    const d = d0 * (0.55 + 0.75 * Math.sqrt(q)) * (1 + p.motion * 0.35 * wave) * sizeMul(j, p);
    emit(j, Math.cos(a) * r, Math.sin(a) * r, d, tilt(j), chargeFor(j, j % arms, p));
  }
}

/** Concentric rings turning in alternate directions, with a pulse rolling outward. */
function rings(c: LoopCtx, emit: Emit) {
  const { n, R, th, p, seed } = c;
  const K = Math.round(clamp(4 + p.fieldStrength * 3.5, 3, 12));
  const rad = R * 1.02;
  const radii = Array.from({ length: K }, (_, k) => (rad * (k + 0.75)) / (K + 0.25));
  const sum = radii.reduce((a, b) => a + b, 0);
  const ringGap = rad / K;
  const d0 = Math.min((TAU * sum) / n, ringGap) * 1.25 * packMul(p) * sizeScale(p);
  const F = folds(p);
  const off = hash01(seed % 997) * TAU;
  let i = 0;
  for (let k = 0; k < K && i < n; k++) {
    const cnt = k === K - 1 ? n - i : Math.max(3, Math.round((n * radii[k]) / sum));
    const dir = k % 2 ? 1 : -1;
    const turns = 1 + Math.round(p.curl * 2 * (1 - k / K));
    const pulse = Math.sin(th - k * 0.8);
    const rk = radii[k] * (1 + p.warp * 0.045 * pulse);
    for (let s = 0; s < cnt && i < n; s++, i++) {
      const a = (s / cnt) * TAU + dir * turns * th + k * off;
      const r = rk + p.motion * ringGap * 0.35 * Math.sin(F * a - th * 2);
      const d = d0 * (1 + p.motion * 0.2 * pulse) * sizeMul(i, p);
      emit(i, Math.cos(a) * r, Math.sin(a) * r, d, tilt(i), chargeFor(i, k * 2 + (s % 2), p));
    }
  }
}

/** Nested spirograph loops; stamps march around them like beads on a wire. */
function spiro(c: LoopCtx, emit: Emit) {
  const { n, hh, th, u, p } = c;
  const F = folds(p);
  const kk = clamp(0.42 + p.warp * 0.1 * Math.sin(th), 0.1, 0.8);
  const ry = Math.min(hh * 0.94, 0.47);
  const rx = Math.min(0.47, ry * 1.75);
  const scales = [1, 0.56].map((s) => s * (0.7 + p.fieldStrength * 0.26));
  const total = scales.reduce((a, b) => a + b, 0);
  const rows = 2;
  const at = (t: number, sc: number): [number, number] => [
    ((Math.cos(t) + kk * Math.cos((F - 1) * t)) / (1 + kk)) * rx * sc,
    ((Math.sin(t) - kk * Math.sin((F - 1) * t)) / (1 + kk)) * ry * sc,
  ];
  let i = 0;
  for (let s = 0; s < scales.length && i < n; s++) {
    const sc = scales[s];
    const cnt = s === scales.length - 1 ? n - i : Math.round((n * sc) / total);
    const cols = Math.max(1, Math.ceil(cnt / rows));
    let per = 0;
    let [px, py] = at(0, sc);
    for (let q = 1; q <= 96; q++) {
      const [x, y] = at((q / 96) * TAU, sc);
      per += Math.hypot(x - px, y - py);
      px = x;
      py = y;
    }
    const d = Math.min(0.09, (per / cols) * 1.35 * packMul(p) * sizeScale(p));
    const dir = s % 2 ? -1 : 1;
    for (let m = 0; m < cnt && i < n; m++, i++) {
      const col = Math.floor(m / rows);
      const row = m % rows;
      const f = (col + row * 0.5) / cols + dir * u;
      const t = (f - Math.floor(f)) * TAU + s * 0.7;
      const [x, y] = at(t, sc);
      const [x2, y2] = at(t + 0.002, sc);
      const tl = Math.hypot(x2 - x, y2 - y) || 1;
      const off = (row - 0.5) * d * 0.8 * (1 + p.curl * 0.6 * Math.sin(F * t + th * 2));
      emit(i, x - ((y2 - y) / tl) * off, y + ((x2 - x) / tl) * off, d * sizeMul(i, p), tilt(i), chargeFor(i, s * 3 + (col % 3), p));
    }
  }
}

/** A packed lattice with waves rolling through it: from the center, across, or two interfering sources. */
function ripple(c: LoopCtx, emit: Emit) {
  const { n, hh, R, th, p, seed } = c;
  const W = 1.1;
  const H = 2 * hh * 1.1;
  const s = Math.sqrt((W * H) / n);
  const cols = Math.max(2, Math.round(W / s));
  const rows = Math.max(2, Math.ceil(n / cols));
  const sx = W / cols;
  const sy = H / rows;
  const d0 = Math.max(sx, sy) * 1.05 * packMul(p) * sizeScale(p);
  const mode = seed % 3;
  const ang = hash01(seed % 991) * TAU;
  const sources: Array<[number, number]> = mode === 2 ? [[-0.24, 0], [0.24, 0]] : [[0, 0]];
  const k = (TAU * (2 + p.fieldStrength * 1.3)) / R;
  const A = Math.min(sx, sy) * (0.25 + p.motion * 0.9) / sources.length;
  const swirl = p.curl * 0.8;
  let i = 0;
  for (let r = 0; r < rows && i < n; r++) {
    for (let q = 0; q < cols && i < n; q++, i++) {
      const x0 = -W / 2 + (q + 0.25 + (r % 2) * 0.5) * sx;
      const y0 = -H / 2 + (r + 0.5) * sy;
      let dx = 0;
      let dy = 0;
      let crest = 0;
      const add = (dist: number, gx: number, gy: number) => {
        const ph = k * dist - th * 2;
        const sn = Math.sin(ph);
        const cs = Math.cos(ph);
        dx += A * (sn * gx - swirl * cs * gy);
        dy += A * (sn * gy + swirl * cs * gx);
        crest += sn / sources.length;
      };
      if (mode === 1) add(x0 * Math.cos(ang) + y0 * Math.sin(ang), Math.cos(ang), Math.sin(ang));
      else {
        for (const [cx, cy] of sources) {
          const ex = x0 - cx;
          const ey = y0 - cy;
          const dd = Math.hypot(ex, ey) || 1e-6;
          add(dd, ex / dd, ey / dd);
        }
      }
      const d = d0 * (1 + 0.4 * p.warp * crest) * sizeMul(i, p);
      emit(i, x0 + dx, y0 + dy, d, tilt(i), chargeFor(i, ((r + q) % 3) + 3 * (r % 2), p));
    }
  }
}

/** Rows marching in alternate directions, wrapping off-screen, with a wave riding along them. */
function march(c: LoopCtx, emit: Emit) {
  const { n, hh, u, th, p, seed } = c;
  const H = 2 * hh * 1.04;
  const s0 = Math.sqrt((1.1 * H) / n);
  const rows = Math.max(2, Math.round(H / s0));
  const cols = Math.max(3, Math.ceil(n / rows));
  const sy = H / rows;
  const margin = sy * 1.1 * packMul(p) * sizeScale(p) * STAMP_PAD * 0.6 + 0.02;
  const Wt = Math.max(cols * s0, 1 + 2 * margin);
  const d0 = Math.min(sy, Wt / cols) * 1.1 * packMul(p) * sizeScale(p);
  const lean = p.curl * 0.25 * (seed % 2 ? 1 : -1);
  let i = 0;
  for (let r = 0; r < rows && i < n; r++) {
    const dir = r % 2 ? 1 : -1;
    const y0 = -H / 2 + (r + 0.5) * sy;
    for (let q = 0; q < cols && i < n; q++, i++) {
      const f = (q + 0.5) / cols + dir * u;
      const x = (f - Math.floor(f) - 0.5) * Wt;
      const wave = Math.sin((x / Wt) * TAU * 2 + th * 2 + r * 0.6);
      const y = y0 + wave * sy * 0.45 * p.motion + x * lean;
      const d = d0 * (1 + p.warp * 0.18 * Math.sin((x / Wt) * TAU * 3 - th * 3)) * sizeMul(i, p);
      emit(i, x, y, d, tilt(i), chargeFor(i, r * 2 + (q % 2), p));
    }
  }
}

/** Mirrored wedges like a kaleidoscope: stamps bloom out of the center and the whole star turns. */
function kaleido(c: LoopCtx, emit: Emit) {
  const { n, R, u, th, p, seed } = c;
  const F = folds(p) + 1;
  const wedge = Math.PI / F;
  const M = Math.max(1, Math.floor(n / (2 * F)));
  const rad = R * (0.6 + p.fieldStrength * 0.18);
  const spin = (TAU / F) * u * (seed % 2 ? 1 : -1);
  const d0 = rad * Math.sqrt(wedge / (2 * M)) * 1.2 * packMul(p) * sizeScale(p);
  let i = 0;
  for (let m = 0; m < M; m++) {
    const f = hash01(m * 1.7 + 0.3) + u;
    const rr = f - Math.floor(f);
    const rho = Math.sqrt(rr) * rad;
    const sway = Math.sin(hash01(m * 4.1 + 2) * TAU + th + rr * 5);
    const a = wedge * (0.5 + 0.42 * sway) + p.curl * rr * 1.6;
    const fade = smoother(clamp(rr / 0.06, 0, 1)) * smoother(clamp((1 - rr) / 0.08, 0, 1));
    const d = d0 * (0.5 + 0.9 * rr) * fade * (1 + p.motion * 0.3 * Math.sin(th * 2 + m)) * sizeMul(m, p);
    for (let w = 0; w < F; w++) {
      const psi = w * 2 * wedge + spin;
      const aA = psi + a;
      const aB = psi - a;
      const rot = aA + Math.PI / 2;
      emit(i++, Math.cos(aA) * rho, Math.sin(aA) * rho, d, rot, m);
      emit(i++, Math.cos(aB) * rho, Math.sin(aB) * rho, d, 2 * psi - rot + Math.PI, m, -1);
    }
  }
}

/** Inscribed radius so polar patterns fill the frame without spilling off the short side. */
function disc(c: LoopCtx): number {
  return Math.min(0.48, c.hh * 0.98);
}

/** Logarithmic whirlpool: inner stamps spin faster, arms wind with Swirl. */
function vortex(c: LoopCtx, emit: Emit) {
  const { n, th, p, seed } = c;
  const rad = disc(c) * (0.86 + p.fieldStrength * 0.14);
  const step = rad / Math.sqrt(n);
  const d0 = step * 2 * packMul(p) * sizeScale(p);
  const wind = 0.8 + p.curl * 1.6;
  const spin = seed % 2 ? 1 : -1;
  for (let j = 0; j < n; j++) {
    const q = (j + 0.5) / n;
    const r = step * Math.sqrt(j + 0.5) * (1 + p.warp * 0.05 * Math.sin(th * 2 - q * 4));
    const omega = 1.15 / (0.18 + r / Math.max(1e-4, rad));
    const a = j * GOLDEN + spin * (th * omega + wind * Math.log(1 + r * 6));
    const d = d0 * (0.55 + 0.8 * Math.sqrt(q)) * (1 + p.motion * 0.28 * Math.sin(th * 2 + q * 5)) * sizeMul(j, p);
    emit(j, Math.cos(a) * r, Math.sin(a) * r, d, tilt(j), chargeFor(j, j % 13, p));
  }
}

/** Nested orbits turning opposite ways, a little pulse on the radius. */
function orbit(c: LoopCtx, emit: Emit) {
  const { n, th, p, seed } = c;
  const rad = disc(c);
  const K = Math.round(clamp(3 + p.fieldStrength * 2.2, 3, 8));
  const weights = Array.from({ length: K }, (_, k) => k + 1.2);
  const sum = weights.reduce((a, b) => a + b, 0);
  let i = 0;
  for (let k = 0; k < K && i < n; k++) {
    const cnt = k === K - 1 ? n - i : Math.max(4, Math.round((n * weights[k]) / sum));
    const rk = rad * ((k + 0.85) / (K + 0.2));
    const dir = (k + seed) % 2 ? 1 : -1;
    const speed = 1 + k * 0.28 * (0.5 + p.curl * 0.5);
    const pulse = 1 + p.motion * 0.06 * Math.sin(th * 2 + k);
    const d = (TAU * rk / cnt) * 2.6 * packMul(p) * sizeScale(p);
    for (let s = 0; s < cnt && i < n; s++, i++) {
      const a = (s / cnt) * TAU + dir * speed * th;
      const r = rk * pulse;
      emit(i, Math.cos(a) * r, Math.sin(a) * r, d * sizeMul(i, p), tilt(i), chargeFor(i, k * 2 + (s % 2), p));
    }
  }
}

/** Two sliding lattices, wrap happening off-screen so the weave never jumps. */
function weave(c: LoopCtx, emit: Emit) {
  const { n, hh, u, th, p } = c;
  const half = Math.floor(n / 2);
  const W = 1.18;
  const H = 2 * hh * 1.18;
  const cols = Math.max(3, Math.round(Math.sqrt(half * W / H)));
  const rows = Math.max(2, Math.ceil(half / cols));
  const sx = W / cols;
  const sy = H / rows;
  const d0 = Math.min(sx, sy) * 1.05 * packMul(p) * sizeScale(p);
  const wave = p.motion * 0.22;
  let i = 0;
  const lay = (count: number, horizontal: boolean) => {
    for (let m = 0; m < count && i < n; m++, i++) {
      const col = m % cols;
      const row = Math.floor(m / cols);
      const fx = (col + 0.5) / cols + (horizontal ? u : 0);
      const fy = (row + 0.5) / rows + (horizontal ? 0 : u);
      const x = (fx - Math.floor(fx) - 0.5) * W;
      const y = (fy - Math.floor(fy) - 0.5) * H;
      const wob = wave * Math.sin((horizontal ? y : x) * 8 + th * 2);
      emit(i, x + (horizontal ? 0 : wob * sx), y + (horizontal ? wob * sy : 0), d0 * sizeMul(i, p), tilt(i), chargeFor(i, (horizontal ? 0 : 4) + (col + row) % 3, p));
    }
  };
  lay(half, true);
  lay(n - half, false);
}

/** Radial spokes spinning like a fan, a few stamps thick. */
function fan(c: LoopCtx, emit: Emit) {
  const { n, th, p, seed } = c;
  const F = folds(p);
  const rad = disc(c);
  const thick = 4;
  const along = Math.max(3, Math.floor(n / (F * thick)));
  const d0 = Math.min(rad / along, (TAU * rad) / (F * along)) * 1.55 * packMul(p) * sizeScale(p);
  const spin = (seed % 2 ? 1 : -1) * th;
  let i = 0;
  for (let s = 0; s < F; s++) {
    for (let m = 0; m < along; m++) {
      for (let row = 0; row < thick && i < n; row++, i++) {
        const q = (m + 0.5 + (row % 2) * 0.35) / along;
        const flutter = p.motion * 0.1 * Math.sin(th * 3 + s + q * 4);
        const a = (s / F) * TAU + spin + flutter + p.curl * 0.2 * q;
        const r = q * rad * (1 + p.warp * 0.04 * Math.sin(th * 2 + s));
        const taper = 0.45 + 0.55 * q;
        const off = (row - (thick - 1) / 2) * d0 * 0.72 * taper;
        emit(
          i,
          Math.cos(a) * r - Math.sin(a) * off,
          Math.sin(a) * r + Math.cos(a) * off,
          d0 * taper * sizeMul(i, p),
          a + Math.PI / 2,
          chargeFor(i, s, p),
        );
      }
    }
  }
}

/** Three ribbons weaving, wrapping off the sides. */
function braid(c: LoopCtx, emit: Emit) {
  const { n, hh, u, th, p } = c;
  const strands = 3;
  const per = Math.ceil(n / strands);
  const A = hh * 0.62 * (0.7 + p.fieldStrength * 0.28);
  const freq = 2 + Math.round(p.warp * 1.2);
  const d0 = 0.042 * packMul(p) * sizeScale(p);
  const margin = d0 * STAMP_PAD * 0.7 + 0.03;
  const Wt = 1 + 2 * margin;
  let i = 0;
  for (let s = 0; s < strands; s++) {
    const phase = (s / strands) * TAU;
    for (let j = 0; j < per && i < n; j++, i++) {
      const f = (j + 0.5) / per + u;
      const x = (f - Math.floor(f) - 0.5) * Wt;
      const t = (j + 0.5) / per;
      const y = A * Math.sin(TAU * freq * t + phase + p.curl * 0.4 * Math.sin(th)) + p.motion * hh * 0.08 * Math.sin(th * 2 + s);
      emit(i, x, y, d0 * sizeMul(i, p), tilt(i), chargeFor(i, s * 2 + (j % 2), p));
    }
  }
}

/** Hex tiles, each stamp circling its cell — a packed floor of little orbits. */
function tiles(c: LoopCtx, emit: Emit) {
  const { n, hh, th, p } = c;
  const W = 1.04;
  const H = 2 * hh * 1.04;
  const s = Math.sqrt((W * H) / n);
  const cols = Math.max(2, Math.round(W / s));
  const rows = Math.max(2, Math.ceil(n / cols));
  const sx = W / cols;
  const sy = H / rows;
  const d0 = Math.max(sx, sy) * 0.92 * packMul(p) * sizeScale(p);
  const orbit = Math.min(sx, sy) * (0.28 + p.motion * 0.32);
  let i = 0;
  for (let r = 0; r < rows && i < n; r++) {
    for (let q = 0; q < cols && i < n; q++, i++) {
      const cx = -W / 2 + (q + 0.25 + (r % 2) * 0.5) * sx;
      const cy = -H / 2 + (r + 0.5) * sy;
      const dir = (r + q) % 2 ? 1 : -1;
      const a = dir * th + hash01(i) * TAU;
      const d = d0 * (1 + p.warp * 0.12 * Math.sin(th * 2 + i)) * sizeMul(i, p);
      emit(i, cx + Math.cos(a) * orbit, cy + Math.sin(a) * orbit, d, tilt(i), chargeFor(i, (r + q) % 5, p));
    }
  }
}

/** A spinning rose / flower. Petal count follows Symmetry. */
function petal(c: LoopCtx, emit: Emit) {
  const { n, th, p, seed } = c;
  const F = folds(p);
  const rad = disc(c);
  const spin = (seed % 2 ? 1 : -1) * th;
  const breath = 0.88 + 0.12 * Math.sin(th * 2) * p.warp;
  const d0 = (rad * Math.sqrt(TAU / n)) * 1.15 * packMul(p) * sizeScale(p);
  for (let j = 0; j < n; j++) {
    const a0 = (j / n) * TAU;
    const a = a0 + spin;
    const rose = 0.22 + 0.78 * Math.abs(Math.cos(F * a0));
    const r = rad * rose * breath * (1 + p.motion * 0.06 * Math.sin(F * a0 + th));
    const d = d0 * (0.55 + 0.7 * rose) * sizeMul(j, p);
    emit(j, Math.cos(a) * r, Math.sin(a) * r, d, a + Math.PI / 2, chargeFor(j, Math.floor(((a0 * F) / TAU) % F), p));
  }
}

/** Dual Archimedean coils rotating in place. */
function coil(c: LoopCtx, emit: Emit) {
  const { n, th, p, seed } = c;
  const rad = disc(c);
  const turns = 2.2 + p.fieldStrength * 1.1;
  const maxT = turns * TAU;
  const spin = (seed % 2 ? 1 : -1) * th;
  const d0 = (rad / Math.sqrt(n)) * 2 * packMul(p) * sizeScale(p);
  const twins = 2;
  for (let j = 0; j < n; j++) {
    const arm = j % twins;
    const k = Math.floor(j / twins);
    const t = ((k + 0.5) / Math.ceil(n / twins)) * maxT;
    const r = rad * (t / maxT);
    const a = t + spin + arm * Math.PI + p.curl * 0.4 * Math.sin(th);
    const d = d0 * (0.5 + 0.85 * (t / maxT)) * (1 + p.motion * 0.2 * Math.sin(th * 2 + arm)) * sizeMul(j, p);
    emit(j, Math.cos(a) * r, Math.sin(a) * r, d, a + Math.PI / 2, chargeFor(j, arm * 3 + (k % 3), p));
  }
}

function frac(v: number): number {
  return v - Math.floor(v);
}

function wrapSpan(f: number, span: number): number {
  return (frac(f) - 0.5) * span;
}

/** Clockwise rectangle perimeter, t in [0,1). Starts at the top-left corner. */
function rectAt(t: number, hw: number, hh: number): [number, number] {
  const w = 2 * hw;
  const h = 2 * hh;
  let s = frac(t) * 2 * (w + h);
  if (s < w) return [-hw + s, -hh];
  s -= w;
  if (s < h) return [hw, -hh + s];
  s -= h;
  if (s < w) return [hw - s, hh];
  s -= w;
  return [-hw, hh - s];
}

/** City grid: stamps locked to east-west streets or north-south avenues, wrapping off-screen. */
function traffic(c: LoopCtx, emit: Emit) {
  const { n, hh, u, p } = c;
  const streets = Math.floor(n / 2);
  const W = 1.2;
  const H = 2 * hh * 1.2;
  const rows = Math.max(3, Math.round(Math.sqrt(streets * H / W)));
  const cols = Math.max(3, Math.ceil(streets / rows));
  const sx = W / cols;
  const sy = H / rows;
  const d0 = Math.min(sx, sy) * 1.05 * packMul(p) * sizeScale(p);
  let i = 0;
  for (let r = 0; r < rows && i < streets; r++) {
    const y = -H / 2 + (r + 0.5) * sy;
    const dir = r % 2 ? 1 : -1;
    const speed = 1 + (r % 3) * 0.35 * p.curl;
    for (let q = 0; q < cols && i < streets; q++, i++) {
      emit(i, wrapSpan((q + 0.5) / cols + dir * speed * u, W), y, d0 * sizeMul(i, p), 0, chargeFor(i, r, p));
    }
  }
  const avenues = n - i;
  const aCols = Math.max(3, Math.round(Math.sqrt(avenues * W / H)));
  const aRows = Math.max(3, Math.ceil(avenues / aCols));
  const ax = W / aCols;
  const ay = H / aRows;
  const d1 = Math.min(ax, ay) * 1.05 * packMul(p) * sizeScale(p);
  for (let q = 0; q < aCols && i < n; q++) {
    const x = -W / 2 + (q + 0.5) * ax;
    const dir = q % 2 ? 1 : -1;
    const speed = 1 + (q % 3) * 0.35 * p.curl;
    for (let r = 0; r < aRows && i < n; r++, i++) {
      emit(i, x, wrapSpan((r + 0.5) / aRows + dir * speed * u, H), d1 * sizeMul(i, p), 0, chargeFor(i, 8 + q, p));
    }
  }
}

/** Columns falling on a vertical grid, wrapping off the top and bottom. */
function cascade(c: LoopCtx, emit: Emit) {
  const { n, hh, u, p, seed } = c;
  const W = 1.04;
  const H = 2 * hh * 1.22;
  const s0 = Math.sqrt((W * H) / n);
  const cols = Math.max(2, Math.round(W / s0));
  const rows = Math.max(3, Math.ceil(n / cols));
  const sx = W / cols;
  const sy = H / rows;
  const d0 = Math.min(sx, sy) * 1.08 * packMul(p) * sizeScale(p);
  const flip = seed % 2 ? 1 : -1;
  let i = 0;
  for (let q = 0; q < cols && i < n; q++) {
    const x = -W / 2 + (q + 0.5) * sx;
    const dir = (q % 2 ? 1 : -1) * flip;
    const speed = 1 + (q % 4) * 0.25 * p.curl;
    for (let r = 0; r < rows && i < n; r++, i++) {
      emit(i, x, wrapSpan((r + 0.5) / rows + dir * speed * u, H), d0 * sizeMul(i, p), 0, chargeFor(i, q, p));
    }
  }
}

/** Concentric frame-shaped rectangles. Stamps march the perimeter, turning only at right angles. */
function circuit(c: LoopCtx, emit: Emit) {
  const { n, hh, u, p, seed } = c;
  const K = Math.round(clamp(3 + p.fieldStrength * 2.4, 3, 8));
  const hw0 = 0.48;
  const hh0 = hh * 0.96;
  const perims = Array.from({ length: K }, (_, k) => {
    const t = (k + 0.7) / (K + 0.15);
    return 2 * (2 * hw0 * t + 2 * hh0 * t);
  });
  const sum = perims.reduce((a, b) => a + b, 0);
  const d0 = Math.min(hw0, hh0) / K * 1.35 * packMul(p) * sizeScale(p);
  const flip = seed % 2 ? 1 : -1;
  let i = 0;
  for (let k = 0; k < K && i < n; k++) {
    const t = (k + 0.7) / (K + 0.15);
    const hw = hw0 * t;
    const hy = hh0 * t;
    const cnt = k === K - 1 ? n - i : Math.max(8, Math.round((n * perims[k]) / sum));
    const dir = ((k + seed) % 2 ? 1 : -1) * flip;
    const speed = 1 + k * 0.2 * p.curl;
    for (let s = 0; s < cnt && i < n; s++, i++) {
      const [x, y] = rectAt((s + 0.5) / cnt + dir * speed * u, hw, hy);
      emit(i, x, y, d0 * sizeMul(i, p), 0, chargeFor(i, k, p));
    }
  }
}

/** Parallel 45° bands sliding along the diagonal, wrapping off-screen. */
function chevron(c: LoopCtx, emit: Emit) {
  const { n, hh, u, p, seed } = c;
  const B = Math.round(clamp(4 + p.fieldStrength * 3, 4, 11));
  const span = Math.hypot(1, 2 * hh) + 0.28;
  const gap = (Math.min(1, 2 * hh) * 1.15) / B;
  const along = Math.max(4, Math.ceil(n / B));
  const d0 = Math.min(span / along, gap) * 1.2 * packMul(p) * sizeScale(p);
  const flip = seed % 2 ? 1 : -1;
  const inv = Math.SQRT1_2;
  let i = 0;
  for (let b = 0; b < B && i < n; b++) {
    const v = (b - (B - 1) / 2) * gap;
    const dir = (b % 2 ? 1 : -1) * flip;
    const speed = 1 + (b % 3) * 0.3 * p.curl;
    for (let s = 0; s < along && i < n; s++, i++) {
      const uax = wrapSpan((s + 0.5) / along + dir * speed * u, span);
      const x = (uax + v) * inv;
      const y = (uax - v) * inv;
      emit(i, x, y, d0 * sizeMul(i, p), 0, chargeFor(i, b, p));
    }
  }
}

/** Checkerboard lattice: one color slides east-west, the other north-south. */
function checker(c: LoopCtx, emit: Emit) {
  const { n, hh, u, p, seed } = c;
  const W = 1.22;
  const H = 2 * hh * 1.22;
  const s = Math.sqrt((W * H) / n);
  const cols = Math.max(4, Math.round(W / s));
  const rows = Math.max(4, Math.ceil(n / cols));
  const sx = W / cols;
  const sy = H / rows;
  const d0 = Math.min(sx, sy) * 0.98 * packMul(p) * sizeScale(p);
  const flip = seed % 2 ? 1 : -1;
  let i = 0;
  for (let r = 0; r < rows && i < n; r++) {
    for (let q = 0; q < cols && i < n; q++, i++) {
      const cx = -W / 2 + (q + 0.5) * sx;
      const cy = -H / 2 + (r + 0.5) * sy;
      const even = (r + q) % 2 === 0;
      const dir = flip * (even ? 1 : -1);
      const x = even ? wrapSpan((q + 0.5) / cols + dir * u, W) : cx;
      const y = even ? cy : wrapSpan((r + 0.5) / rows + dir * u, H);
      emit(i, x, y, d0 * sizeMul(i, p), 0, chargeFor(i, even ? q % 3 : 3 + (r % 3), p));
    }
  }
}

/** Square lattice, each row a belt at a different constant speed. */
function shear(c: LoopCtx, emit: Emit) {
  const { n, hh, u, p, seed } = c;
  const W = 1.22;
  const H = 2 * hh * 1.04;
  const s = Math.sqrt((W * H) / n);
  const cols = Math.max(4, Math.round(W / s));
  const rows = Math.max(3, Math.ceil(n / cols));
  const sx = W / cols;
  const sy = H / rows;
  const d0 = Math.min(sx, sy) * 1.05 * packMul(p) * sizeScale(p);
  const flip = seed % 2 ? 1 : -1;
  let i = 0;
  for (let r = 0; r < rows && i < n; r++) {
    const y = -H / 2 + (r + 0.5) * sy;
    const speed = flip * (1 + r * (0.35 + p.curl * 0.4));
    for (let q = 0; q < cols && i < n; q++, i++) {
      emit(i, wrapSpan((q + 0.5) / cols + speed * u, W), y, d0 * sizeMul(i, p), 0, chargeFor(i, r % 4, p));
    }
  }
}

/** Plotter scan: a serpentine of straight rows, closing off-screen so the loop never jumps. */
function scan(c: LoopCtx, emit: Emit) {
  const { n, hh, u, p } = c;
  const rows = Math.max(4, Math.round(clamp(5 + p.fieldStrength * 3, 4, 12)));
  const d0 = (2 * hh) / rows * 0.95 * packMul(p) * sizeScale(p);
  const margin = d0 * STAMP_PAD * 0.7 + 0.04;
  const Wt = 1 + 2 * margin;
  const yTop = -hh * 0.96;
  const yBot = hh * 0.96;
  const sy = (yBot - yTop) / Math.max(1, rows - 1);
  const pts: number[] = [];
  const push = (x: number, y: number) => {
    pts.push(x, y);
  };
  for (let r = 0; r < rows; r++) {
    const y = yTop + r * sy;
    if (r % 2 === 0) {
      push(-Wt / 2, y);
      push(Wt / 2, y);
    } else {
      push(Wt / 2, y);
      push(-Wt / 2, y);
    }
  }
  push(-Wt / 2, yBot + margin);
  push(-Wt / 2, yTop - margin);
  const segs = pts.length / 2 - 1;
  const len: number[] = [];
  let total = 0;
  for (let s = 0; s < segs; s++) {
    const dx = pts[2 * (s + 1)] - pts[2 * s];
    const dy = pts[2 * (s + 1) + 1] - pts[2 * s + 1];
    const L = Math.hypot(dx, dy);
    len.push(L);
    total += L;
  }
  total = total || 1;
  for (let i = 0; i < n; i++) {
    let dist = frac((i + 0.5) / n + u * 0.55) * total;
    let s = 0;
    while (s < segs - 1 && dist > len[s]) {
      dist -= len[s];
      s++;
    }
    const f = dist / Math.max(1e-6, len[s]);
    const x = pts[2 * s] + (pts[2 * (s + 1)] - pts[2 * s]) * f;
    const y = pts[2 * s + 1] + (pts[2 * (s + 1) + 1] - pts[2 * s + 1]) * f;
    emit(i, x, y, d0 * sizeMul(i, p), 0, chargeFor(i, s % 5, p));
  }
}

/** Triangle-wave bounce: unfold a billiard path so it reflects off the box, like the DVD screensaver. */
function unfoldPing(s: number, lo: number, hi: number): { v: number; dir: number } {
  const span = hi - lo;
  if (span <= 1e-6) return { v: lo, dir: 1 };
  const w = 2 * span;
  let t = ((s - lo) % w + w) % w;
  if (t <= span) return { v: lo + t, dir: 1 };
  return { v: hi - (t - span), dir: -1 };
}

/**
 * A fat snake of stamps follows a DVD-screensaver billiard around the frame.
 * Every stamp crossfades into a different kit icon as it travels.
 */
function snake(c: LoopCtx, emit: Emit) {
  const { n, hh, u, p, seed } = c;
  const pad = 0.06 * sizeScale(p);
  const hw = Math.max(0.2, 0.5 - pad);
  const hy = Math.max(0.12, hh - pad);
  const spanX = 2 * hw;
  const spanY = 2 * hy;
  const kx = 2;
  const ky = 2 + (Math.round(p.curl * 1.4) % 3);
  const x0 = (hash01(seed) - 0.5) * spanX * 0.25;
  const y0 = (hash01(seed + 2) - 0.5) * spanY * 0.25;
  const vx = 2 * kx * spanX;
  const vy = 2 * ky * spanY * (seed % 2 ? 1 : -1);
  const nLen = Math.hypot(vx, vy) || 1;
  const nx = -vy / nLen;
  const ny = vx / nLen;
  const snakes = 2;
  const thick = Math.max(3, Math.round(3 + p.density * 2.2));
  const along = Math.max(6, Math.floor(n / (snakes * thick)));
  const trail = clamp(0.58 + p.fieldStrength * 0.22, 0.42, 0.92);
  const d0 = Math.min(nLen * trail / along, hy * 0.42) * 1.05 * packMul(p) * sizeScale(p);
  const rate = 2.4 + p.warp * 3.6;
  const at = (uu: number, off: number) => {
    const px = unfoldPing(x0 + vx * uu + nx * off, -hw, hw);
    const py = unfoldPing(y0 + vy * uu + ny * off, -hy, hy);
    return { x: px.v, y: py.v };
  };
  let i = 0;
  for (let s = 0; s < snakes; s++) {
    const lag = s * 0.5;
    for (let k = 0; k < along; k++) {
      for (let row = 0; row < thick && i < n; row++, i++) {
        const off = (row - (thick - 1) / 2) * d0 * 0.76;
        const pos = at(u - (k / along) * trail + lag, off);
        const phase = rate * u + (k / along) * 1.35 + hash01(i * 3.1) * p.perturb * 2.2;
        const f = phase - Math.floor(phase);
        const a = Math.floor(phase);
        const m = smoother(clamp((f - 0.58) / 0.32, 0, 1));
        const chargeA = a * 13 + i + s * 7;
        emit(i, pos.x, pos.y, d0 * sizeMul(i, p), 0, chargeA, 1, chargeA + 13, m);
      }
    }
  }
}

function drift(f: Formation, i: number, ang: number, params: AgentParams, hh: number): [number, number] {
  const amp = f.bend + params.motion * 0.008;
  if (amp <= 0) return [f.x[i], f.y[i]];
  const x = f.x[i];
  const y = f.y[i];
  return [
    x + amp * Math.sin(y * 4.2 + ang + f.phase) + amp * 0.4 * Math.sin(x * 2.3 - ang),
    y + amp * Math.cos(x * 3.6 + ang + f.phase * 1.3) * Math.min(1, hh * 2),
  ];
}

/** Three shapes visited in a ring: hold, then morph to the next, and back around to the first. */
function shapeshift(c: LoopCtx, shapes: Formation[], emit: Emit) {
  const { n, hh, u, th, p } = c;
  const seg = Math.min(2, Math.floor(u * 3));
  const e = smoother(clamp((u * 3 - seg - 0.3) / 0.7, 0, 1));
  const a = shapes[seg];
  const b = shapes[(seg + 1) % 3];
  const swirl = p.curl * 0.24;
  for (let i = 0; i < n; i++) {
    const [ax, ay] = drift(a, i, th * 2, p, hh);
    const [bx, by] = drift(b, i, th * 2, p, hh);
    const dx = bx - ax;
    const dy = by - ay;
    const arc = swirl * Math.sin(Math.PI * e) * (hash01(i) > 0.5 ? 1 : -1);
    emit(i, ax + dx * e - dy * arc, ay + dy * e + dx * arc, a.d[i] + (b.d[i] - a.d[i]) * e, tilt(i), i);
  }
}

/** One locked pattern looping seamlessly. Poses are a pure function of the clock, so scrubbing and export stay stable. */
export class PatternField {
  private sig = "";
  private shapes: Formation[] = [];
  private poses: AgentPose[] = [];

  /**
   * aspect = width / height. Output y uses the collage painter's space (±aspect/2).
   * With a song tempo, the loop starts on the first downbeat and spans whole bars.
   */
  posesAt(
    n: number,
    clock: number,
    seed: number,
    aspect: number,
    params: AgentParams,
    bpm = 0,
    beatOffset = 0,
    choice: FieldPatternChoice | string = "auto",
  ): AgentPose[] {
    const asp = Math.max(0.2, aspect);
    const hh = 0.5 / asp;
    const pattern = resolveFieldPattern(choice, seed);
    const u = loopPhase(clock, params, bpm, beatOffset);
    const ctx: LoopCtx = { n, hh, R: Math.hypot(0.5, hh), u, th: u * TAU, seed: seed >>> 0, p: params };
    if (this.poses.length !== n) this.poses = Array.from({ length: n }, () => ({ x: 0, y: 0, px: 0, rot: 0, alpha: 0, squash: 1 }));
    for (const pose of this.poses) pose.alpha = 0;
    const toPx = Math.max(1, asp);
    const toY = asp * asp;
    const emit: Emit = (i, x, y, d, rot, charge, flip = 1, chargeB, morph = 0) => {
      const pose = this.poses[i];
      if (!pose) return;
      pose.x = x;
      pose.y = y * toY;
      pose.px = Math.max(0, d) * toPx * STAMP_PAD;
      pose.rot = rot;
      pose.alpha = d > 0.004 ? 1 : 0;
      pose.squash = 1;
      pose.flip = flip;
      pose.charge = charge;
      pose.chargeB = chargeB;
      pose.morph = morph;
    };
    if (pattern === "sunflower") sunflower(ctx, emit);
    else if (pattern === "rings") rings(ctx, emit);
    else if (pattern === "spiro") spiro(ctx, emit);
    else if (pattern === "ripple") ripple(ctx, emit);
    else if (pattern === "march") march(ctx, emit);
    else if (pattern === "kaleido") kaleido(ctx, emit);
    else if (pattern === "vortex") vortex(ctx, emit);
    else if (pattern === "orbit") orbit(ctx, emit);
    else if (pattern === "weave") weave(ctx, emit);
    else if (pattern === "fan") fan(ctx, emit);
    else if (pattern === "braid") braid(ctx, emit);
    else if (pattern === "tiles") tiles(ctx, emit);
    else if (pattern === "petal") petal(ctx, emit);
    else if (pattern === "coil") coil(ctx, emit);
    else if (pattern === "traffic") traffic(ctx, emit);
    else if (pattern === "cascade") cascade(ctx, emit);
    else if (pattern === "circuit") circuit(ctx, emit);
    else if (pattern === "chevron") chevron(ctx, emit);
    else if (pattern === "checker") checker(ctx, emit);
    else if (pattern === "shear") shear(ctx, emit);
    else if (pattern === "scan") scan(ctx, emit);
    else if (pattern === "snake") snake(ctx, emit);
    else {
      const sig = `${seed}|${n}|${asp.toFixed(3)}|${Object.values(params).map((v) => v.toFixed(3)).join(",")}`;
      if (sig !== this.sig) {
        this.sig = sig;
        this.shapes = shapeshiftKinds(seed).map((kind, k) => buildFormation(kind, seed, k, n, hh, params));
      }
      shapeshift(ctx, this.shapes, emit);
    }
    return this.poses;
  }
}
