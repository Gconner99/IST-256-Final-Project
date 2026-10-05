import { clamp } from "../core/random";

export const FIELD_MOVE = "field" as const;
export type FieldMove = typeof FIELD_MOVE;

export function isFieldMove(scene?: string | null): scene is FieldMove {
  return scene === FIELD_MOVE;
}

export function clampFieldStrength(value?: number | null): number {
  return clamp(value ?? 1.15, 0.2, 2.2);
}
export function clampFieldScale(value?: number | null): number {
  return clamp(value ?? 0.95, 0.28, 2.4);
}
export function clampFieldEvolve(value?: number | null): number {
  return clamp(value ?? 1, 0.08, 2.2);
}
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
export function clampFieldCurl(value?: number | null): number {
  return clamp(value ?? 0.9, 0, 2.2);
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
  return clamp(value ?? 0.85, 0.25, 2.2);
}
export function clampFieldDamp(value?: number | null): number {
  return clamp(value ?? 0.42, 0.08, 1);
}
export function clampFieldMaxV(value?: number | null): number {
  return clamp(value ?? 0.8, 0.25, 2.2);
}
export function clampFieldScaleAmp(value?: number | null): number {
  return clamp(value ?? 0.85, 0, 2.2);
}
export function clampFieldMinScale(value?: number | null): number {
  return clamp(value ?? 0.34, 0.12, 1);
}
export function clampFieldMaxScale(value?: number | null): number {
  return clamp(value ?? 2.35, 0.6, 3.2);
}
export function clampFieldPerturb(value?: number | null): number {
  return clamp(value ?? 0.18, 0, 2);
}
export function clampFieldWarp(value?: number | null): number {
  return clamp(value ?? 1.1, 0, 2.2);
}
export function clampFieldSparsity(value?: number | null): number {
  return clamp(value ?? 0.85, 0, 2);
}
export function clampFieldContrast(value?: number | null): number {
  return clamp(value ?? 1.25, 0, 2.2);
}
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

export interface AgentSeed {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
}

export interface AgentPose {
  x: number;
  y: number;
  px: number;
  rot: number;
  alpha: number;
  squash?: number;
}

export interface AgentField {
  n: number;
  lastClock: number;
  phase: number;
  homeX: Float32Array;
  homeY: Float32Array;
  homeZ: Float32Array;
  px: Float32Array;
  py: Float32Array;
  pz: Float32Array;
  vx: Float32Array;
  vy: Float32Array;
  vz: Float32Array;
  bias: Float32Array;
  scale: Float32Array;
  alpha: Float32Array;
  squash: Float32Array;
}

export function fieldClocks(clock: number, fieldEvolve: number, densityEvolve: number) {
  const t = clock;
  return {
    fast: t * 2.43,
    medium: t * 0.61 * densityEvolve,
    slow: t * 0.27 * fieldEvolve,
    glacial: t * 0.205 * densityEvolve,
  };
}

const EPS = 0.012;

function smooth01(v: number): number {
  const x = clamp(v, 0, 1);
  return x * x * (3 - 2 * x);
}

function bump(x: number, center: number, width: number): number {
  const t = (x - center) / Math.max(1e-6, width);
  const a = Math.max(0, 1 - t * t);
  return a * a;
}

/**
 * How much of the frame should be filled. Lingers near packed sheet and
 * open ground so the picture actually spends time as each.
 */
export function coverageAt(clock: number, params: AgentParams): number {
  const g = fieldClocks(clock, params.fieldEvolve, params.densityEvolve).glacial;
  const s =
    Math.sin(g + 0.35) +
    0.42 * Math.sin(g * 1.618 + 1.6) +
    0.18 * Math.sin(g * 0.414 + 2.2);
  let cov = 0.5 + 0.58 * Math.tanh(s * 1.25);
  cov += (0.75 - params.sparsity) * 0.22;
  return clamp(cov, 0, 1);
}

/** Which spatial family dominates: bands, islands, ribbons, contours. */
function structureKind(clock: number, params: AgentParams): number {
  const { glacial, slow } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);
  const s = Math.sin(glacial * 0.73 + 0.2) + 0.38 * Math.sin(slow * 0.31 + 1.4);
  return 0.5 + 0.5 * Math.tanh(s * 1.65);
}

function deformAmp(cov: number, params: AgentParams): number {
  return (0.1 + 0.9 * Math.pow(1 - cov, 1.08)) * (0.42 + params.fieldStrength * 0.72);
}

function spaceWarp(
  x: number,
  y: number,
  clock: number,
  params: AgentParams,
  deform: number,
): [number, number] {
  const { slow, glacial, medium } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);
  const s = params.fieldScale;
  const a1 = params.warp * deform;
  let u = x + a1 * 0.22 * Math.sin(y * (1.72 * s) + glacial * 0.71);
  let v = y + a1 * 0.2 * Math.cos(x * (1.48 * s) + glacial * 0.53);
  u += a1 * 0.1 * Math.sin(u * (2.18 * s) + v * 0.85 + slow * 0.8);
  v += a1 * 0.09 * Math.cos(u * 0.74 + v * (2.05 * s) + medium * 0.6);
  const stretch = Math.sin(glacial * 1.414 + 0.3) * a1 * 0.48;
  const shear = Math.sin(glacial * 0.93 + 1.1) * a1 * 0.32;
  const ang = glacial * 0.19 * a1;
  const ca = Math.cos(ang);
  const sa = Math.sin(ang);
  let rx = u * ca - v * sa;
  let ry = u * sa + v * ca;
  rx *= 1 + stretch;
  ry *= 1 - stretch * 0.86;
  rx += ry * shear;
  rx += params.motion * deform * 0.15 * Math.sin(glacial * 0.71);
  ry += params.motion * deform * 0.12 * Math.cos(glacial * 0.53 + 0.8);
  return intoFrame(rx, ry);
}

function intoFrame(x: number, y: number): [number, number] {
  const mx = 0.47;
  const my = 0.39;
  const ax = Math.abs(x);
  const ay = Math.abs(y);
  const nx = ax > mx ? Math.sign(x) * (mx + (1 - Math.exp(-(ax - mx) * 3.2)) * 0.028) : x;
  const ny = ay > my ? Math.sign(y) * (my + (1 - Math.exp(-(ay - my) * 3.2)) * 0.024) : y;
  return [nx, ny];
}

function streamPsi(x: number, y: number, slow: number, medium: number, scale: number, curl: number): number {
  const wx = x + 0.16 * Math.sin(y * 2.07 + slow * 0.81);
  const wy = y + 0.16 * Math.cos(x * 1.83 + medium * 0.67);
  const qx = wx * scale;
  const qy = wy * scale;
  return (
    Math.sin(qx + slow) * Math.cos(qy * 0.86 + slow * 0.71) +
    curl * 0.55 * Math.sin(qx * 1.618 + qy * 0.41 + medium) +
    curl * 0.38 * Math.cos(qx * 0.52 - qy * 1.27 + slow * 0.33)
  );
}

function ridgeWidth(cov: number): number {
  return 0.0048 + Math.pow(cov, 1.38) * 0.24;
}

function islandSigma(cov: number): number {
  return 0.026 + Math.pow(cov, 1.25) * 0.16;
}

function densityRaw(x: number, y: number, clock: number, params: AgentParams, cov: number): number {
  const { medium, slow, glacial } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);
  const s = params.densityScale;
  const kind = structureKind(clock, params);
  const u = x * s + 0.2 * Math.sin(y * 1.62 * s + medium * 0.55);
  const v = y * s + 0.18 * Math.cos(x * 1.38 * s + slow * 0.42);
  const width = ridgeWidth(cov);
  const lineA = v - 0.3 * Math.sin(u * (2.05 + s * 0.35) + slow) - 0.1 * Math.sin(u * 0.72 + glacial);
  const lineB = u - 0.26 * Math.sin(v * (1.82 + s * 0.28) + medium * 0.8) - 0.09 * Math.cos(v * 0.88 + glacial * 0.6);
  const lineC = (u + v) * 0.72 - 0.22 * Math.sin((u - v) * 1.55 + slow * 0.77);
  const bands = Math.exp(-(lineA * lineA) / width);
  const cross = Math.exp(-(lineB * lineB) / (width * 1.12));
  const diag = Math.exp(-(lineC * lineC) / (width * 0.9));
  const phi = Math.sin(u * (1.35 + s * 0.4) + slow * 0.48) + 0.32 * Math.cos(v * 1.15 + glacial * 0.55);
  const contourW = 0.006 + cov * 0.03;
  const contour = Math.exp(-(phi * phi) / contourW);
  const sig = islandSigma(cov);
  let islands = 0;
  for (let k = 0; k < 4; k++) {
    const cx = 0.3 * Math.sin(glacial * (0.68 + k * 0.19) + k * 2.05);
    const cy = 0.26 * Math.cos(glacial * (0.51 + k * 0.14) + k * 1.62);
    const amp = 0.55 + 0.45 * Math.sin(slow * 0.41 + k * 1.3);
    const dx = u / s - cx;
    const dy = v / s - cy;
    islands += amp * Math.exp(-0.5 * (dx * dx + dy * dy) / (sig * sig));
  }
  islands = clamp(islands, 0, 1);
  let holes = 0;
  const hx = 0.22 * Math.sin(glacial * 0.81 + 2.4);
  const hy = 0.18 * Math.cos(glacial * 0.67 + 0.9);
  holes += Math.exp(-((x - hx) * (x - hx) + (y - hy) * (y - hy)) / (0.012 + cov * 0.05));
  const hx2 = -0.18 * Math.cos(glacial * 0.54 + 1.1);
  const hy2 = 0.2 * Math.sin(slow * 0.36 + 0.4);
  holes += 0.75 * Math.exp(-((x - hx2) * (x - hx2) + (y - hy2) * (y - hy2)) / (0.01 + cov * 0.04));

  const wBand = bump(kind, 0.16, 0.34) * (0.4 + cov * 0.7) + cov * 0.22 + (1 - cov) * 0.12;
  const wIsland = bump(kind, 0.84, 0.32) * (0.25 + cov * 0.5 + (1 - cov) * 0.4);
  const wRibbon = bump(kind, 0.48, 0.3) * (0.3 + (1 - cov) * 0.85) + (1 - cov) * 0.18;
  const wContour = bump(1 - cov, 0.88, 0.24) * (0.45 + (1 - kind) * 0.6);
  const peaked =
    bands * (0.55 * wBand + 0.2 * wRibbon) +
    cross * (0.35 * wBand + 0.45 * wRibbon) +
    diag * (0.25 * wRibbon + 0.2 * wBand) +
    islands * wIsland * (0.55 + cov * 0.35) +
    contour * wContour * (0.7 + (1 - cov) * 0.9);
  const punched = Math.max(0, peaked - holes * (0.25 + cov * 0.55));
  return clamp(punched * (0.55 + params.density * 0.4), 0, 1);
}

/** High = matter. Low = negative space. Thickness follows coverage. */
export function densityAt(x: number, y: number, clock: number, params: AgentParams): number {
  const cov = coverageAt(clock, params);
  const peaked = densityRaw(x, y, clock, params, cov);
  const contrast = 0.55 + params.contrast * (0.55 + (1 - cov) * 1.15);
  const sharp = Math.tanh((peaked - (0.18 + (1 - cov) * 0.08)) * contrast) * 0.5 + 0.5;
  if (cov > 0.8) {
    const fill = clamp((cov - 0.8) / 0.2, 0, 1);
    return clamp(sharp + fill * fill * (0.93 - sharp), 0, 1);
  }
  return sharp;
}

export interface FieldSample {
  x: number;
  y: number;
  z: number;
}

function curlOffset(
  x: number,
  y: number,
  clock: number,
  params: AgentParams,
  deform: number,
): [number, number, number] {
  const { fast, medium, slow } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);
  const flowS = params.flowScale * 2.05;
  const psi = (u: number, v: number) => streamPsi(u, v, slow, medium, flowS, params.curl);
  const curlAmp = params.flow * (0.012 + deform * 0.11);
  let dx = ((psi(x, y + EPS) - psi(x, y - EPS)) / (2 * EPS)) * curlAmp;
  let dy = -((psi(x + EPS, y) - psi(x - EPS, y)) / (2 * EPS)) * curlAmp;
  const amp = 0.01 * params.perturb * (0.4 + deform);
  dx += amp * Math.sin(x * 15.3 + y * 4.1 + fast);
  dy += amp * Math.cos(y * 13.7 + x * 3.6 + fast * 0.81);
  return [dx, dy, 0.05 * Math.sin(x * 2.4 + y * 1.8 + slow * 0.6) * params.flow * deform];
}

/**
 * Lagrangian displacement of a home sample. Nearby homes stay related.
 * No gathering onto ridges — the density field selects who is visible.
 */
export function displacementAt(x: number, y: number, z: number, clock: number, params: AgentParams): FieldSample {
  const cov = coverageAt(clock, params);
  const deform = deformAmp(cov, params);
  const [wx, wy] = spaceWarp(x, y, clock, params, deform);
  const [cx, cy, cz] = curlOffset(wx, wy, clock, params, deform);
  const [px, py] = intoFrame(wx + cx, wy + cy);
  return {
    x: px - x,
    y: py - y,
    z: cz * 0.8 + 0.03 * Math.sin(z * 3.1 + clock * 0.4) * deform,
  };
}

export function sampleTarget(x: number, y: number, z: number, clock: number, params: AgentParams): FieldSample {
  const d = displacementAt(x, y, z, clock, params);
  return {
    x: clamp(x + d.x, -0.48, 0.48),
    y: clamp(y + d.y, -0.4, 0.4),
    z: clamp(z + d.z, -0.32, 0.32),
  };
}

function homeOnLattice(i: number, n: number, seed: AgentSeed): [number, number, number] {
  const cols = Math.max(2, Math.round(Math.sqrt(n * 1.35)));
  const rows = Math.max(2, Math.ceil(n / cols));
  const col = i % cols;
  const row = Math.floor(i / cols);
  const jitterX = (seed.x - 0.5) * 0.7;
  const jitterY = (seed.y - 0.5) * 0.7;
  const x = ((col + 0.5 + jitterX * 0.22) / cols - 0.5) * 0.98;
  const y = ((row + 0.5 + jitterY * 0.22) / rows - 0.5) * 0.9;
  const z = (seed.z - 0.5) * 0.28;
  return [x, y, z];
}

export function initAgentField(seeds: AgentSeed[], clock: number): AgentField {
  const n = seeds.length;
  const field: AgentField = {
    n,
    lastClock: clock,
    phase: clock,
    homeX: new Float32Array(n),
    homeY: new Float32Array(n),
    homeZ: new Float32Array(n),
    px: new Float32Array(n),
    py: new Float32Array(n),
    pz: new Float32Array(n),
    vx: new Float32Array(n),
    vy: new Float32Array(n),
    vz: new Float32Array(n),
    bias: new Float32Array(n),
    scale: new Float32Array(n),
    alpha: new Float32Array(n),
    squash: new Float32Array(n),
  };
  for (let i = 0; i < n; i++) {
    const [x, y, z] = homeOnLattice(i, n, seeds[i]);
    field.homeX[i] = x;
    field.homeY[i] = y;
    field.homeZ[i] = z;
    field.px[i] = x;
    field.py[i] = y;
    field.pz[i] = z;
    field.vx[i] = (seeds[i].vx - 0.5) * 0.02;
    field.vy[i] = (seeds[i].vy - 0.5) * 0.02;
    field.vz[i] = 0;
    field.bias[i] = 0.72 + seeds[i].z * 0.7;
    field.scale[i] = 1;
    field.alpha[i] = 1;
    field.squash[i] = 1;
  }
  return field;
}

function integrate(field: AgentField, dt: number, clock: number, params: AgentParams) {
  const n = field.n;
  const cov = coverageAt(clock, params);
  const deform = Math.pow(1 - cov, 1.05);
  const pull = (7.4 + deform * 1.8) / (0.32 + params.inertia);
  const drag = Math.exp(-(0.45 + params.damp * 1.2) * dt);
  const maxV = (0.12 + params.maxV * 0.22) * (0.7 + deform * 0.85);
  const rad = params.radius * (0.35 + deform * 0.55);
  const rad2 = rad * rad;
  const { slow, glacial } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);
  const stretch = Math.sin(glacial * 1.414 + 0.3) * params.warp * (0.12 + deform * 0.7);
  const globalSquash = clamp(1 + stretch * 0.42, 0.58, 1.65);
  const thresh = 0.18 + params.sparsity * 0.1 + (1 - cov) * 0.26 - params.attract * 0.05;
  const sharp = 2.2 + params.contrast * (2 + (1 - cov) * 2.2);

  const live: number[] = [];
  for (let i = 0; i < n; i++) {
    const d = densityAt(field.homeX[i], field.homeY[i], clock, params);
    let alpha = smooth01((d - thresh) * sharp);
    if (cov > 0.68) alpha = Math.max(alpha, smooth01((cov - 0.68) * 7.5));
    if (cov < 0.1) alpha *= alpha;
    field.alpha[i] = alpha;
    if (alpha > 0.12) live.push(i);
  }

  for (let i = 0; i < n; i++) {
    const target = sampleTarget(field.homeX[i], field.homeY[i], field.homeZ[i], clock, params);
    let ax = (target.x - field.px[i]) * pull;
    let ay = (target.y - field.py[i]) * pull;
    let az = (target.z - field.pz[i]) * pull * 0.45;
    if (params.repel > 0.01 && field.alpha[i] > 0.12) {
      for (let k = 0; k < live.length; k++) {
        const j = live[k];
        if (i === j) continue;
        const dx = field.px[i] - field.px[j];
        const dy = field.py[i] - field.py[j];
        const d2 = dx * dx + dy * dy;
        if (d2 > rad2 || d2 < 1e-10) continue;
        const dist = Math.sqrt(d2);
        const u = 1 - dist / rad;
        const push = u * u * params.repel * 0.55;
        ax += (dx / dist) * push;
        ay += (dy / dist) * push;
      }
    }
    field.vx[i] = (field.vx[i] + ax * dt) * drag;
    field.vy[i] = (field.vy[i] + ay * dt) * drag;
    field.vz[i] = (field.vz[i] + az * dt) * drag;
    const sp = Math.hypot(field.vx[i], field.vy[i], field.vz[i]) || 1;
    if (sp > maxV) {
      const s = maxV / sp;
      field.vx[i] *= s;
      field.vy[i] *= s;
      field.vz[i] *= s;
    }
    field.px[i] += field.vx[i] * dt;
    field.py[i] += field.vy[i] * dt;
    field.pz[i] += field.vz[i] * dt;
    const sf =
      Math.sin(field.homeX[i] * 4.2 + field.homeY[i] * 3.1 + slow * 0.55) *
      Math.cos(field.homeY[i] * 2.6 + slow * 0.29);
    const bulk = params.minScale + (1 - cov) * (params.maxScale - params.minScale) * 0.92;
    let mul =
      bulk *
      (0.82 + field.bias[i] * 0.22) *
      (1 + params.scaleAmp * sf * 0.22 * (0.35 + deform));
    mul = clamp(mul, params.minScale, params.maxScale);
    field.scale[i] = mul;
    field.squash[i] = globalSquash;
  }
}

export function stepAgentField(
  prev: AgentField | null,
  seeds: AgentSeed[],
  clock: number,
  params: AgentParams,
): AgentField {
  const n = seeds.length;
  let field = prev;
  if (!field || field.n !== n || clock - (field.lastClock ?? 0) > 1.6) {
    field = initAgentField(seeds, clock);
  }
  if (!field.squash || field.squash.length !== n) {
    field.squash = new Float32Array(n);
    field.squash.fill(1);
  }
  let dt = clock - field.lastClock;
  if (dt < -0.04) {
    const looped = field.lastClock > 2 && clock < 0.8;
    if (looped) dt = Math.min(0.05, 1 / 30);
    else {
      field = initAgentField(seeds, clock);
      dt = 0;
    }
  }
  if (dt <= 1e-5) {
    integrate(field, 0, field.phase, params);
    field.lastClock = clock;
    return field;
  }
  dt = Math.min(dt, 0.05);
  const steps = dt > 0.028 ? 2 : 1;
  const slice = dt / steps;
  for (let s = 0; s < steps; s++) {
    field.phase += slice;
    integrate(field, slice, field.phase, params);
  }
  field.lastClock = clock;
  return field;
}

export function agentPose(field: AgentField, i: number, size: number): AgentPose | null {
  if (i < 0 || i >= field.n) return null;
  const depth = Math.max(0.52, 1.03 - field.pz[i] * 0.35);
  const near = clamp(1.04 / depth, 0.7, 1.4);
  const speed = Math.hypot(field.vx[i], field.vy[i]);
  const rot = speed > 0.01 ? Math.atan2(field.vy[i], field.vx[i]) : field.homeX[i] * 2.4 + field.bias[i];
  return {
    x: clamp(field.px[i] / depth, -0.48, 0.48),
    y: clamp(field.py[i] / depth, -0.4, 0.4),
    px: clamp((0.034 + size * 0.018) * near * field.scale[i], 0.018, 0.34),
    rot,
    alpha: clamp(field.alpha[i], 0, 1),
    squash: field.squash ? field.squash[i] : 1,
  };
}

/** Nearby displacement samples should share direction. */
export function agentFieldAt(x: number, y: number, z: number, clock: number, params: AgentParams): FieldSample {
  return displacementAt(x, y, z, clock, params);
}
