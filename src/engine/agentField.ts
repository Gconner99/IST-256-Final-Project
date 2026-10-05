import { clamp } from "../core/random";

export const FIELD_MOVE = "field" as const;
export type FieldMove = typeof FIELD_MOVE;

export function isFieldMove(scene?: string | null): scene is FieldMove {
  return scene === FIELD_MOVE;
}

export function clampFieldStrength(value?: number | null): number {
  return clamp(value ?? 0.95, 0.2, 2.2);
}
export function clampFieldScale(value?: number | null): number {
  return clamp(value ?? 0.9, 0.28, 2.4);
}
export function clampFieldEvolve(value?: number | null): number {
  return clamp(value ?? 0.85, 0.08, 2.2);
}
export function clampFieldDensity(value?: number | null): number {
  return clamp(value ?? 1, 0, 2.2);
}
export function clampFieldDensityScale(value?: number | null): number {
  return clamp(value ?? 0.85, 0.28, 2.4);
}
export function clampFieldDensityEvolve(value?: number | null): number {
  return clamp(value ?? 1, 0.08, 2.2);
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
  return clamp(value ?? 0.35, 0.12, 1);
}
export function clampFieldMaxScale(value?: number | null): number {
  return clamp(value ?? 1.85, 0.6, 3.2);
}
export function clampFieldPerturb(value?: number | null): number {
  return clamp(value ?? 0.22, 0, 2);
}
export function clampFieldWarp(value?: number | null): number {
  return clamp(value ?? 0.9, 0, 2.2);
}
export function clampFieldSparsity(value?: number | null): number {
  return clamp(value ?? 0.7, 0, 2);
}
export function clampFieldContrast(value?: number | null): number {
  return clamp(value ?? 1.05, 0, 2.2);
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
}

export function fieldClocks(clock: number, fieldEvolve: number, densityEvolve: number) {
  const t = clock;
  return {
    fast: t * 2.17,
    medium: t * 0.73 * densityEvolve,
    slow: t * 0.31 * fieldEvolve,
    glacial: t * 0.117 * densityEvolve,
  };
}

const EPS = 0.014;

function tanh01(v: number): number {
  return 0.5 + 0.5 * Math.tanh(v);
}

function streamPsi(x: number, y: number, slow: number, medium: number, scale: number, curl: number): number {
  const wx = x + 0.2 * Math.sin(y * 2.07 + slow * 0.81);
  const wy = y + 0.2 * Math.cos(x * 1.83 + medium * 0.67);
  const qx = wx * scale;
  const qy = wy * scale;
  return (
    Math.sin(qx + slow) * Math.cos(qy * 0.86 + slow * 0.71) +
    curl * 0.55 * Math.sin(qx * 1.618 + qy * 0.41 + medium) +
    curl * 0.38 * Math.cos(qx * 0.52 - qy * 1.27 + slow * 0.33)
  );
}

/** Slowly evolving scalar density in 0..1. High = crowded matter, low = negative space. */
export function densityAt(x: number, y: number, clock: number, params: AgentParams): number {
  const { medium, slow, glacial } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);
  const s = params.densityScale * 2.05;
  const u = x + 0.24 * Math.sin(y * 1.61 + medium * 0.77);
  const v = y + 0.24 * Math.cos(x * 1.38 + medium * 0.58);
  let d =
    Math.sin(u * s + slow * 0.69) * Math.cos(v * s * 0.82 + slow * 0.47) +
    0.5 * Math.sin(u * s * 1.618 + v * s * 0.37 + medium) +
    0.42 * Math.cos(u * s * 0.48 - v * s * 1.21 + slow * 0.29);
  const band = 1 - Math.abs(Math.sin(u * s * 0.62 + v * s * 0.18 + glacial * 0.9));
  const island = Math.sin(u * s * 0.33 + glacial * 1.13) * Math.cos(v * s * 0.41 + glacial * 0.71);
  const mix = 0.5 + 0.5 * Math.sin(glacial * 0.618 + 0.35);
  d = d * (0.55 + (1 - mix) * 0.35) + band * mix * 0.7 + island * (1 - mix) * 0.55;
  const fill = 0.5 + 0.34 * Math.sin(glacial + 0.2) + 0.16 * Math.sin(glacial * 1.618 + 1.4);
  const contrast = params.contrast * (0.4 + (1 - fill) * 1.35);
  const sparseBias = (params.sparsity - 0.35) * 0.32 + (1 - fill) * 0.48;
  d = tanh01(d * (0.45 + contrast) - sparseBias);
  return d * (1 - fill * 0.12) + fill * 0.58;
}

export interface FieldSample {
  x: number;
  y: number;
  z: number;
}

function warpHome(x: number, y: number, glacial: number, warp: number, motion: number): [number, number] {
  const stretch = Math.sin(glacial * 1.414 + 0.3) * warp * 0.55;
  const shear = Math.sin(glacial * 0.93 + 1.1) * warp * 0.36;
  const ang = glacial * 0.37 * warp;
  const ca = Math.cos(ang);
  const sa = Math.sin(ang);
  let rx = x * ca - y * sa;
  let ry = x * sa + y * ca;
  rx *= 1 + stretch;
  ry *= 1 - stretch * 0.85;
  rx += ry * shear;
  rx += motion * 0.1 * Math.sin(glacial * 0.71);
  ry += motion * 0.08 * Math.cos(glacial * 0.53 + 0.8);
  return [rx, ry];
}

/** Lagrangian displacement of a home sample. Nearby homes stay related. */
export function displacementAt(x: number, y: number, z: number, clock: number, params: AgentParams): FieldSample {
  const { fast, medium, slow, glacial } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);
  const [wx, wy] = warpHome(x, y, glacial, params.warp, params.motion);
  const flowS = params.flowScale * 2.2;
  const psi = (u: number, v: number) => streamPsi(u, v, slow, medium, flowS, params.curl);
  let dx = ((psi(wx, wy + EPS) - psi(wx, wy - EPS)) / (2 * EPS)) * params.flow * 0.15;
  let dy = -((psi(wx + EPS, wy) - psi(wx - EPS, wy)) / (2 * EPS)) * params.flow * 0.15;
  const d0 = densityAt(wx, wy, clock, params);
  const ddx = (densityAt(wx + EPS, wy, clock, params) - densityAt(wx - EPS, wy, clock, params)) / (2 * EPS);
  const ddy = (densityAt(wx, wy + EPS, clock, params) - densityAt(wx, wy - EPS, clock, params)) / (2 * EPS);
  const gN = Math.hypot(ddx, ddy) || 1;
  const gx = ddx / gN;
  const gy = ddy / gN;
  const contract = params.density * (d0 - 0.38) * 0.22;
  dx += gx * contract;
  dy += gy * contract;
  dx += -gy * params.curl * params.density * (0.35 + d0) * 0.045;
  dy += gx * params.curl * params.density * (0.35 + d0) * 0.045;
  dx += (wx - x) * params.fieldStrength * 0.55;
  dy += (wy - y) * params.fieldStrength * 0.55;
  const amp = 0.018 * params.perturb;
  dx += amp * Math.sin(x * 17.3 + y * 4.1 + fast + z * 6);
  dy += amp * Math.cos(y * 15.7 + x * 3.6 + fast * 0.81 + z * 5);
  dx += params.fieldScale * 0.04 * Math.sin(slow * 0.4 + y * 1.2);
  dy += params.fieldScale * 0.03 * Math.cos(slow * 0.33 + x * 1.1);
  return { x: dx, y: dy, z: 0.08 * Math.sin(z * 3.1 + slow * 0.6) * params.flow };
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
  const cols = Math.max(2, Math.round(Math.sqrt(n * 1.25)));
  const rows = Math.max(2, Math.ceil(n / cols));
  const col = i % cols;
  const row = Math.floor(i / cols);
  const jitterX = (seed.x - 0.5) * 0.7;
  const jitterY = (seed.y - 0.5) * 0.7;
  const x = ((col + 0.5 + jitterX * 0.35) / cols - 0.5) * 0.9;
  const y = ((row + 0.5 + jitterY * 0.35) / rows - 0.5) * 0.72;
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
  }
  return field;
}

function integrate(field: AgentField, dt: number, clock: number, params: AgentParams) {
  const n = field.n;
  const pull = 2.4 / (0.45 + params.inertia);
  const drag = Math.exp(-(0.35 + params.damp * 1.4) * dt);
  const maxV = 0.08 + params.maxV * 0.14;
  const rad = params.radius;
  const rad2 = rad * rad;
  const crowd = new Float32Array(n);

  for (let i = 0; i < n; i++) {
    const target = sampleTarget(field.homeX[i], field.homeY[i], field.homeZ[i], clock, params);
    let ax = (target.x - field.px[i]) * pull;
    let ay = (target.y - field.py[i]) * pull;
    let az = (target.z - field.pz[i]) * pull * 0.55;
    const ddx = (densityAt(field.px[i] + EPS, field.py[i], clock, params) - densityAt(field.px[i] - EPS, field.py[i], clock, params)) / (2 * EPS);
    const ddy = (densityAt(field.px[i], field.py[i] + EPS, clock, params) - densityAt(field.px[i], field.py[i] - EPS, clock, params)) / (2 * EPS);
    ax += ddx * params.attract * 0.35;
    ay += ddy * params.attract * 0.35;
    if (params.repel > 0.01) {
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const dx = field.px[i] - field.px[j];
        const dy = field.py[i] - field.py[j];
        const d2 = dx * dx + dy * dy;
        if (d2 > rad2 || d2 < 1e-10) continue;
        const d = Math.sqrt(d2);
        crowd[i] += 1;
        const u = 1 - d / rad;
        const push = u * u * params.repel * 1.8;
        ax += (dx / d) * push;
        ay += (dy / d) * push;
      }
    }
    ax += -field.px[i] * 0.08;
    ay += -field.py[i] * 0.08;
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
    const { slow, glacial } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);
    const fill = 0.5 + 0.34 * Math.sin(glacial + 0.2) + 0.16 * Math.sin(glacial * 1.618 + 1.4);
    const sf =
      Math.sin(field.homeX[i] * 4.2 + field.homeY[i] * 3.1 + slow * 0.55) *
      Math.cos(field.homeY[i] * 2.6 + slow * 0.29);
    const lonely = 1 / (0.55 + crowd[i] * 0.22);
    const bulk = 0.4 + (1 - fill) * 1.05;
    let mul = bulk * lonely * (0.7 + field.bias[i] * 0.45) * (1 + params.scaleAmp * sf * 0.5);
    mul = clamp(mul, params.minScale, params.maxScale);
    field.scale[i] = mul;
    const homeD = densityAt(field.homeX[i], field.homeY[i], clock, params);
    field.alpha[i] = clamp((homeD - 0.22 - (1 - fill) * 0.12) * 3.4, 0, 1);
    if (field.alpha[i] < 0.2) field.alpha[i] *= field.alpha[i] / 0.2;
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
  const depth = Math.max(0.5, 1.04 - field.pz[i] * 0.4);
  const near = clamp(1.05 / depth, 0.62, 1.55);
  return {
    x: clamp(field.px[i] / depth, -0.48, 0.48),
    y: clamp(field.py[i] / depth, -0.4, 0.4),
    px: clamp((0.055 + size * 0.028) * near * field.scale[i], 0.03, 0.34),
    rot: Math.atan2(field.vy[i], field.vx[i]),
    alpha: clamp(field.alpha[i] * (0.62 + near * 0.35), 0.12, 1),
  };
}

/** Nearby displacement samples should share direction. */
export function agentFieldAt(x: number, y: number, z: number, clock: number, params: AgentParams): FieldSample {
  return displacementAt(x, y, z, clock, params);
}
