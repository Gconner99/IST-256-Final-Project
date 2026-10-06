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
export function clampFieldRadius(value?: number | null): number {
  return clamp(value ?? 0.055, 0.02, 0.22);
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
/** Trance: one slider for Tempo + Breathe + Pack. */
export function clampFieldTrance(value?: number | null): number {
  return clamp(value ?? 1, 0, 2);
}

/** Map Trance onto the three sliders it owns. Size Contrast stays independent. */
export function fieldFromTrance(trance?: number | null): {
  collageFieldTrance: number;
  collageFieldEvolve: number;
  collageFieldWarp: number;
  collageFieldDensity: number;
} {
  const t = clampFieldTrance(trance);
  const u = t / 2;
  return {
    collageFieldTrance: t,
    collageFieldEvolve: clampFieldEvolve(0.5 + u * 0.45),
    collageFieldWarp: clampFieldWarp(0.4 + u * 0.95),
    collageFieldDensity: clampFieldDensity(1.2 + u * 0.6),
  };
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
  radius: number;
  scaleAmp: number;
  minScale: number;
  maxScale: number;
  perturb: number;
  warp: number;
  sparsity: number;
  contrast: number;
  motion: number;
  trance: number;
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
    radius: clampFieldRadius(raw?.radius),
    scaleAmp: clampFieldScaleAmp(raw?.scaleAmp),
    minScale,
    maxScale,
    perturb: clampFieldPerturb(raw?.perturb),
    warp: clampFieldWarp(raw?.warp),
    sparsity: clampFieldSparsity(raw?.sparsity),
    contrast: clampFieldContrast(raw?.contrast),
    motion: clampFieldMotion(raw?.motion),
    trance: clampFieldTrance(raw?.trance),
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
  "orbit",
  "traffic",
  "cascade",
  "checker",
  "scan",
  "snake",
] as const;
export type FieldPattern = (typeof FIELD_PATTERNS)[number];
export type FieldPatternChoice = FieldPattern | "auto";

export const FIELD_PATTERN_LABEL: Record<FieldPatternChoice, string> = {
  auto: "Auto",
  sunflower: "Sunflower",
  orbit: "Orbit",
  traffic: "Traffic",
  cascade: "Cascade",
  checker: "Checker",
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

function packMul(params: AgentParams): number {
  return 0.86 + params.density * 0.2;
}

/** First quarter of the loop: pack swells, then rests. Positions do not travel. */
function packBreath(u: number, p: AgentParams): number {
  const gate = u < 0.25 ? Math.sin((u / 0.25) * Math.PI) : 0;
  return 1 + 0.07 * p.warp * gate;
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

function smoother(u: number): number {
  return u * u * u * (u * (u * 6 - 15) + 10);
}

function frac(v: number): number {
  return v - Math.floor(v);
}

function wrapSpan(f: number, span: number): number {
  return (frac(f) - 0.5) * span;
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

/** Inscribed radius so polar patterns fill the frame without spilling off the short side. */
function disc(c: LoopCtx): number {
  return Math.min(0.48, c.hh * 0.98);
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

function sdBox(x: number, y: number, cx: number, cy: number, hx: number, hy: number): number {
  const dx = Math.abs(x - cx) - hx;
  const dy = Math.abs(y - cy) - hy;
  return Math.min(Math.max(dx, dy), 0) + Math.hypot(Math.max(dx, 0), Math.max(dy, 0));
}

function sdCapsule(x: number, y: number, ax: number, ay: number, bx: number, by: number, r: number): number {
  const px = x - ax;
  const py = y - ay;
  const ex = bx - ax;
  const ey = by - ay;
  const t = clamp((px * ex + py * ey) / (ex * ex + ey * ey || 1e-8), 0, 1);
  return Math.hypot(px - ex * t, py - ey * t) - r;
}

function sdPoly(x: number, y: number, pts: number[], r: number): number {
  let d = 1e9;
  for (let i = 0; i < pts.length - 2; i += 2) {
    d = Math.min(d, sdCapsule(x, y, pts[i], pts[i + 1], pts[i + 2], pts[i + 3], r));
  }
  return d;
}

function occFrom(d: number, soft = 0.04): number {
  return smoother(clamp(0.5 - d / (soft * 2), 0, 1));
}

function ping01(u: number): number {
  const t = ((u % 1) + 1) % 1;
  return t < 0.5 ? t * 4 - 1 : 3 - t * 4;
}

interface GiantSite {
  x: number;
  y: number;
  r: number;
}

type SnakeMode = "pack" | "stick" | "giant";

interface SnakeSil {
  occ: (x: number, y: number) => number;
  /** Radius of a DVD-crawling void punched through a packed sheet. 0 = none. */
  hole: number;
  mode: SnakeMode;
  nStick: number;
  stickR: number;
  crawl: number;
  giants: GiantSite[] | null;
}

/** Lattice stickers that fill the frame, jittered so they read as overlapping stamps. */
function snakeLattice(n: number, hh: number, seed: number): { x: number; y: number }[] {
  const s = Math.sqrt((2 * hh) / Math.max(1, n));
  const cols = Math.max(2, Math.round(1 / s));
  const rows = Math.max(2, Math.ceil(n / cols));
  const sx = 1 / cols;
  const sy = (2 * hh) / rows;
  const out: { x: number; y: number }[] = [];
  let i = 0;
  for (let r = 0; r < rows && i < n; r++) {
    const hex = (r % 2) * 0.5;
    for (let c = 0; c < cols && i < n; c++, i++) {
      const jx = (hash01(i * 1.71 + seed) - 0.5) * sx * 0.46;
      const jy = (hash01(i * 2.93 + seed) - 0.5) * sy * 0.46;
      out.push({
        x: clamp(-0.5 + (c + 0.5 + hex * 0.55) * sx + jx, -0.5, 0.5),
        y: clamp(-hh + (r + 0.5) * sy + jy, -hh, hh),
      });
    }
  }
  return out;
}

function pickGiant(pts: { x: number; y: number }[], sites: GiantSite[], used: boolean[]): { i: number; x: number; y: number; r: number }[] {
  const hits: { i: number; x: number; y: number; r: number }[] = [];
  for (const site of sites) {
    let best = -1;
    let bestD = 1e9;
    for (let i = 0; i < pts.length; i++) {
      if (used[i]) continue;
      const d = Math.hypot(pts[i].x - site.x, pts[i].y - site.y);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    }
    if (best >= 0) {
      used[best] = true;
      hits.push({ i: best, x: site.x, y: site.y, r: site.r });
    }
  }
  return hits;
}

function punchHole(occ: number, x: number, y: number, u: number, hw: number, hy: number, r: number): number {
  if (r <= 0) return occ;
  const hx = ping01(u * 2) * hw * 0.34;
  const hyy = ping01(u * 2 + 0.31) * hy * 0.34;
  const hd = Math.hypot(x - hx, y - hyy) - r;
  return occ * smoother(clamp(hd / 0.045, 0, 1));
}

function pickStick(pts: { x: number; y: number }[], occ: (x: number, y: number) => number, nWant: number, minDist: number): number[] {
  const scored = pts
    .map((p, i) => ({ i, o: occ(p.x, p.y), a: Math.atan2(p.y, p.x) }))
    .filter((s) => s.o > 0.38)
    .sort((a, b) => a.a - b.a || b.o - a.o);
  const chosen: number[] = [];
  for (const s of scored) {
    if (chosen.length >= nWant) break;
    const p = pts[s.i];
    let ok = true;
    for (const j of chosen) {
      if (Math.hypot(p.x - pts[j].x, p.y - pts[j].y) < minDist) {
        ok = false;
        break;
      }
    }
    if (ok) chosen.push(s.i);
  }
  return chosen;
}

/** Held looks in Snake. Fewer than the old 7-look smear. */
export const SNAKE_LOOKS = 5;
/** Fraction of each look that stays put before the occupancy morph. */
export const SNAKE_HOLD = 0.7;

/**
 * Heraldic silhouettes: packed sheet with a bigger crawling hole,
 * packed C, a frame of large stickers, giants, glyph.
 */
function snakeSils(seed: number, hh: number, p: AgentParams): SnakeSil[] {
  const rng = mulberry32((seed >>> 0) ^ 0x9e3779b1);
  const hw = 0.47 * (0.86 + p.fieldStrength * 0.12);
  const hy = hh * 0.93 * (0.86 + p.fieldStrength * 0.12);
  const thick = 0.062 + p.density * 0.01;
  const holeSide = rng() > 0.5 ? 1 : -1;
  const pack = (occ: (x: number, y: number) => number, hole = 0): SnakeSil => ({
    occ, hole, mode: "pack", nStick: 0, stickR: 0, crawl: 0, giants: null,
  });
  const flock = (sites: GiantSite[], crawl: number, occ: (x: number, y: number) => number): SnakeSil => ({
    occ, hole: 0, mode: "stick", nStick: sites.length, stickR: 0, crawl, giants: sites,
  });

  const sheet = pack((x, y) => occFrom(sdBox(x, y, 0, 0, hw, hy), 0.045), 0.4 + rng() * 0.08);

  const holeY = (rng() - 0.45) * hy * 0.28;
  const cee = pack((x, y) => {
    const body = sdBox(x, y, 0, 0, hw, hy);
    const voidBox = sdBox(x, y, holeSide * hw * 0.38, holeY, hw * 0.55, hy * 0.48);
    return occFrom(Math.max(body, -voidBox), 0.03);
  });

  const frameSites: GiantSite[] = [];
  const pushRing = (n: number, sx: number, sy: number, rad: number) => {
    const PW = 2 * sx;
    const PH = 2 * sy;
    const peri = 2 * PW + 2 * PH;
    for (let k = 0; k < n; k++) {
      let s = ((k + 0.5) / n) * peri;
      let x: number;
      let y: number;
      if (s < PW) {
        x = -sx + s;
        y = -sy;
      } else if (s < PW + PH) {
        x = sx;
        y = -sy + (s - PW);
      } else if (s < 2 * PW + PH) {
        x = sx - (s - PW - PH);
        y = sy;
      } else {
        x = -sx;
        y = sy - (s - 2 * PW - PH);
      }
      if (holeSide > 0 && x > sx * 0.25 && Math.abs(y) < sy * 0.48) continue;
      if (holeSide < 0 && x < -sx * 0.25 && Math.abs(y) < sy * 0.48) continue;
      frameSites.push({
        x: x + (rng() - 0.5) * 0.05,
        y: y + (rng() - 0.5) * 0.05,
        r: rad + rng() * 0.025,
      });
    }
  };
  pushRing(48, hw * 0.94, hy * 0.94, 0.1);
  pushRing(36, hw * 0.72, hy * 0.72, 0.088);
  const frame = flock(frameSites, 0.02, (x, y) => {
    const outer = sdBox(x, y, 0, 0, hw, hy);
    const inner = sdBox(x, y, 0, 0, hw * 0.5, hy * 0.42);
    return occFrom(Math.max(outer, -inner), 0.05);
  });

  const Ng = 8 + Math.floor(rng() * 4);
  const gCols = 3;
  const gRows = Math.ceil(Ng / gCols);
  const giants: GiantSite[] = [];
  for (let k = 0; k < Ng; k++) {
    const gc = k % gCols;
    const gr = Math.floor(k / gCols);
    giants.push({
      x: -hw * 0.7 + (gc + 0.5) * (1.4 * hw) / gCols + (rng() - 0.5) * hw * 0.16,
      y: -hy * 0.7 + (gr + 0.5) * (1.4 * hy) / gRows + (rng() - 0.5) * hy * 0.16,
      r: 0.155 + rng() * 0.07,
    });
  }
  const giantSil: SnakeSil = { occ: () => 0, hole: 0, mode: "giant", nStick: 0, stickR: 0, crawl: 0.05, giants };

  const glyphKind = Math.floor(rng() * 3);
  let glyphPts: number[];
  if (glyphKind === 0) {
    glyphPts = [-hw * 0.92, -hy * 0.28, -hw * 0.05, -hy * 0.22, hw * 0.08, hy * 0.08, -hw * 0.02, hy * 0.88, hw * 0.22, hy * 0.12, hw * 0.88, -hy * 0.55];
  } else if (glyphKind === 1) {
    glyphPts = [-hw * 0.9, hy * 0.42, hw * 0.55, hy * 0.48, hw * 0.52, hy * 0.88, hw * 0.52, -hy * 0.88, hw * 0.55, -hy * 0.42, -hw * 0.9, -hy * 0.48];
  } else {
    glyphPts = [-hw * 0.85, hy * 0.15, -hw * 0.15, hy * 0.72, hw * 0.35, hy * 0.55, hw * 0.15, 0, hw * 0.72, -hy * 0.35, hw * 0.2, -hy * 0.82, -hw * 0.55, -hy * 0.55];
  }
  const glyph = pack((x, y) => occFrom(sdPoly(x, y, glyphPts, thick * 1.2), 0.04));

  return [sheet, cee, frame, giantSil, glyph];
}

/**
 * Packed wallpaper with a crawling void, then a C, a sticker frame,
 * giants, and a glyph. Looks hold, then occupancy eases. Icons blink.
 */
function snake(c: LoopCtx, emit: Emit) {
  const { n, hh, u, p, seed } = c;
  const sils = snakeSils(seed, hh, p);
  const hw = 0.47 * (0.86 + p.fieldStrength * 0.12);
  const hy = hh * 0.93 * (0.86 + p.fieldStrength * 0.12);
  const K = sils.length;
  const t = u * K;
  const seg = Math.min(K - 1, Math.floor(t));
  const frac = t - seg;
  const m = smoother(clamp((frac - SNAKE_HOLD) / (1 - SNAKE_HOLD), 0, 1));
  const A = sils[seg];
  const B = sils[(seg + 1) % K];
  const pts = snakeLattice(n, hh, seed);
  const crawl = (0.05 + A.crawl * (1 - m) + B.crawl * m) * (0.5 + p.motion * 0.55);
  const crawlX = ping01(u * 2) * crawl;
  const crawlY = ping01(u * 2 + 0.33) * crawl * (hy / Math.max(1e-6, hw));
  const sample = (sil: SnakeSil, x: number, y: number) => punchHole(sil.occ(x, y), x, y, u, hw, hy, sil.hole);
  const usedA = new Array<boolean>(n).fill(false);
  const usedB = new Array<boolean>(n).fill(false);
  const gA = A.giants ? pickGiant(pts, A.giants, usedA) : [];
  const gB = B.giants ? pickGiant(pts, B.giants, usedB) : [];
  const giantA = new Map(gA.map((g) => [g.i, g]));
  const giantB = new Map(gB.map((g) => [g.i, g]));
  const stickA = A.mode === "stick" && !A.giants ? new Set(pickStick(pts, A.occ, A.nStick, Math.max(0.05, A.stickR * 0.72))) : null;
  const stickB = B.mode === "stick" && !B.giants ? new Set(pickStick(pts, B.occ, B.nStick, Math.max(0.05, B.stickR * 0.72))) : null;
  const spacing = Math.sqrt((2 * hh) / Math.max(1, n));
  const packD = spacing * 1.58 * packMul(p) * sizeScale(p);
  const rate = 1.35 + p.warp * 2.1;
  for (let i = 0; i < n; i++) {
    const lx = pts[i].x;
    const ly = pts[i].y;
    const oA = A.mode === "pack" ? sample(A, lx, ly) : 0;
    const oB = B.mode === "pack" ? sample(B, lx, ly) : 0;
    const occ = oA * (1 - m) + oB * m;
    let x = clamp(lx + crawlX, -0.5, 0.5);
    let y = clamp(ly + crawlY, -hh, hh);
    let d = packD * occ;
    if (stickA?.has(i)) d = Math.max(d, A.stickR * (1 - m));
    if (stickB?.has(i)) d = Math.max(d, B.stickR * m);
    const ga = giantA.get(i);
    const gb = giantB.get(i);
    if (ga || gb) {
      const site = gb ?? ga;
      if (site) {
        const blend = ga && gb ? 1 : gb ? m : 1 - m;
        x = clamp(lx + crawlX + (site.x - lx) * blend, -0.5, 0.5);
        y = clamp(ly + crawlY + (site.y - ly) * blend, -hh, hh);
        d = Math.max(d, site.r * (p.maxScale / 1.85) * blend);
      }
    }
    const isStick = !!(stickA?.has(i) || stickB?.has(i));
    if (occ < 0.32 && !isStick && !ga && !gb) d = 0;
    const phase = rate * u + hash01(i * 3.1) * (0.35 + p.perturb * 2.2);
    const pf = phase - Math.floor(phase);
    const morph = pf > 0.92 ? 1 : 0;
    const chargeA = Math.floor(phase) * 13 + i;
    const hero = ga || gb || isStick;
    const sized = d * (hero ? Math.max(0.9, sizeMul(i, p)) : sizeMul(i, p));
    emit(i, x, y, sized, 0, chargeA, 1, chargeA + 13, morph);
  }
}

/** One locked pattern looping seamlessly. Poses are a pure function of the clock, so scrubbing and export stay stable. */
export class PatternField {
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
    const breath = packBreath(u, params);
    const emit: Emit = (i, x, y, d, rot, charge, flip = 1, chargeB, morph = 0) => {
      const pose = this.poses[i];
      if (!pose) return;
      pose.x = x;
      pose.y = y * toY;
      pose.px = Math.max(0, d * breath) * toPx * STAMP_PAD;
      pose.rot = rot;
      pose.alpha = d > 0.004 ? 1 : 0;
      pose.squash = 1;
      pose.flip = flip;
      pose.charge = charge;
      pose.chargeB = chargeB;
      pose.morph = morph;
    };
    if (pattern === "sunflower") sunflower(ctx, emit);
    else if (pattern === "orbit") orbit(ctx, emit);
    else if (pattern === "traffic") traffic(ctx, emit);
    else if (pattern === "cascade") cascade(ctx, emit);
    else if (pattern === "checker") checker(ctx, emit);
    else if (pattern === "scan") scan(ctx, emit);
    else if (pattern === "snake") snake(ctx, emit);
    else sunflower(ctx, emit);
    return this.poses;
  }
}
