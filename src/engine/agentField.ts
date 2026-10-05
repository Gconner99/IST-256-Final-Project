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
  return clamp(value ?? 0.55, 0.25, 2.2);
}
export function clampFieldDamp(value?: number | null): number {
  return clamp(value ?? 0.38, 0.08, 1);
}
export function clampFieldMaxV(value?: number | null): number {
  return clamp(value ?? 1.15, 0.25, 2.2);
}
export function clampFieldScaleAmp(value?: number | null): number {
  return clamp(value ?? 0.85, 0, 2.2);
}
export function clampFieldMinScale(value?: number | null): number {
  return clamp(value ?? 0.62, 0.12, 1);
}
export function clampFieldMaxScale(value?: number | null): number {
  return clamp(value ?? 1.85, 0.6, 3.2);
}
export function clampFieldPerturb(value?: number | null): number {
  return clamp(value ?? 0.12, 0, 2);
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
  return {
    fast: clock * 2.15,
    medium: clock * 0.64 * densityEvolve,
    slow: clock * 0.78 * fieldEvolve,
    glacial: clock * 1.38 * densityEvolve,
  };
}

const EPS = 0.014;

function bump(x: number, center: number, width: number): number {
  const t = (x - center) / Math.max(1e-6, width);
  const a = Math.max(0, 1 - t * t);
  return a * a;
}

/**
 * Pack ↔ empty envelope. Fast enough that an 8s clip packs and tears more than once.
 * t=0 starts packed, like the reference.
 */
export function coverageAt(clock: number, params: AgentParams): number {
  const g = fieldClocks(clock, params.fieldEvolve, params.densityEvolve).glacial;
  const s = Math.sin(g + 1.25) + 0.32 * Math.sin(g * 1.618 + 0.4);
  let cov = 0.5 + 0.54 * Math.tanh(s * 1.85);
  cov += (0.72 - params.sparsity) * 0.16;
  return clamp(cov, 0, 1);
}

function structureKind(clock: number, params: AgentParams): number {
  const { medium, slow } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);
  const s = Math.sin(medium * 1.07 + 0.3) + 0.4 * Math.sin(slow * 0.51 + 1.2);
  return 0.5 + 0.5 * Math.tanh(s * 1.4);
}

function intoFrame(x: number, y: number): [number, number] {
  const mx = 0.47;
  const my = 0.8;
  const ax = Math.abs(x);
  const ay = Math.abs(y);
  const nx = ax > mx ? Math.sign(x) * (mx + (1 - Math.exp(-(ax - mx) * 3.2)) * 0.028) : x;
  const ny = ay > my ? Math.sign(y) * (my + (1 - Math.exp(-(ay - my) * 3.2)) * 0.04) : y;
  return [nx, ny];
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
  let u = x + a1 * 0.2 * Math.sin(y * (1.55 * s) + slow * 0.9);
  let v = y + a1 * 0.18 * Math.cos(x * (1.38 * s) + medium * 0.7);
  const stretch = Math.sin(glacial * 0.71 + 0.4) * a1 * 0.55;
  const shear = Math.sin(slow * 0.83 + 1.1) * a1 * 0.28;
  u *= 1 + stretch;
  v *= 1 - stretch * 0.82;
  u += v * shear;
  u += params.motion * deform * 0.12 * Math.sin(slow * 0.55);
  v += params.motion * deform * 0.1 * Math.cos(slow * 0.41 + 0.7);
  return [u, v];
}

function lineA(x: number, y: number, clock: number, params: AgentParams): number {
  const { slow, medium } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);
  const s = params.densityScale;
  const u = x * s;
  const v = y * s;
  return v - 0.34 * Math.sin(u * (1.95 + s * 0.35) + slow * 1.15) - 0.1 * Math.sin(u * 0.68 + medium);
}

function lineB(x: number, y: number, clock: number, params: AgentParams): number {
  const { slow, medium } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);
  const s = params.densityScale;
  const u = x * s;
  const v = y * s;
  return u - 0.3 * Math.sin(v * (1.7 + s * 0.28) + medium * 1.05) - 0.09 * Math.cos(v * 0.8 + slow * 0.6);
}

function phiLine(x: number, y: number, clock: number, params: AgentParams): number {
  const { slow, medium } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);
  const s = params.densityScale;
  return Math.sin(x * (1.55 * s) + y * 0.4 + slow * 0.7) + 0.45 * Math.cos(y * (1.25 * s) + medium * 0.5);
}

function projectToZero(x: number, y: number, fn: (x: number, y: number) => number): [number, number] {
  let px = x;
  let py = y;
  for (let i = 0; i < 5; i++) {
    const v = fn(px, py);
    const gx = (fn(px + EPS, py) - fn(px - EPS, py)) / (2 * EPS);
    const gy = (fn(px, py + EPS) - fn(px, py - EPS)) / (2 * EPS);
    const g2 = gx * gx + gy * gy + 1e-8;
    px -= (v * gx) / g2;
    py -= (v * gy) / g2;
  }
  return [px, py];
}

function islandCenters(clock: number, params: AgentParams): Array<[number, number]> {
  const c = clock * 0.52 * params.fieldEvolve;
  return [
    [0.3 * Math.sin(c + 0.2), 0.34 * Math.cos(c * 0.71 + 0.4)],
    [-0.28 * Math.cos(c * 0.83 + 1.1), 0.24 * Math.sin(c * 0.61 + 2)],
    [0.2 * Math.sin(c * 1.07 + 2.2), -0.32 * Math.cos(c * 0.55 + 0.8)],
    [-0.24 * Math.sin(c * 0.49 + 3), -0.2 * Math.cos(c * 0.91 + 1.5)],
  ];
}

function nearestIsland(x: number, y: number, clock: number, params: AgentParams): [number, number] {
  const spots = islandCenters(clock, params);
  let best = spots[0];
  let bestD = Infinity;
  for (let i = 0; i < spots.length; i++) {
    const dx = x - spots[i][0];
    const dy = y - spots[i][1];
    const d = dx * dx + dy * dy;
    if (d < bestD) {
      bestD = d;
      best = spots[i];
    }
  }
  return best;
}

function nearestRibbon(x: number, y: number, clock: number, params: AgentParams): [number, number] {
  const [ax, ay] = projectToZero(x, y, (u, v) => lineA(u, v, clock, params));
  const [bx, by] = projectToZero(x, y, (u, v) => lineB(u, v, clock, params));
  const dA = (x - ax) * (x - ax) + (y - ay) * (y - ay);
  const dB = (x - bx) * (x - bx) + (y - by) * (y - by);
  return dA < dB ? [ax, ay] : [bx, by];
}

function structureHome(x: number, y: number, clock: number, params: AgentParams): [number, number] {
  const kind = structureKind(clock, params);
  const wRibbon = bump(kind, 0.18, 0.4);
  const wIsland = bump(kind, 0.6, 0.3);
  const wContour = bump(kind, 0.92, 0.26);
  if (wIsland >= wRibbon && wIsland >= wContour && wIsland > 0.04) {
    return nearestIsland(x, y, clock, params);
  }
  if (wContour >= wRibbon && wContour > 0.04) {
    return projectToZero(x, y, (u, v) => phiLine(u, v, clock, params));
  }
  return nearestRibbon(x, y, clock, params);
}

function contractAmt(cov: number, params: AgentParams): number {
  return clamp(
    Math.pow(1 - cov, 1.12) * (0.42 + params.density * 0.32 + params.attract * 0.28) * (0.55 + params.fieldStrength * 0.4),
    0,
    1,
  );
}

function deformAmt(cov: number, params: AgentParams): number {
  return (0.1 + 0.9 * (1 - cov)) * (0.4 + params.warp * 0.45);
}

/**
 * High = on a structure. Packed coverage flattens this toward a full sheet.
 */
export function densityAt(x: number, y: number, clock: number, params: AgentParams): number {
  const cov = coverageAt(clock, params);
  const [sx, sy] = structureHome(x, y, clock, params);
  const dist = Math.hypot(x - sx, y - sy);
  const peaked = Math.exp(-(dist * dist) / (0.028 + cov * 0.14));
  const contrast = 0.7 + params.contrast * 0.8;
  const sharp = Math.tanh((peaked - 0.22) * contrast * (1.2 + (1 - cov))) * 0.5 + 0.5;
  if (cov > 0.78) {
    const fill = clamp((cov - 0.78) / 0.22, 0, 1);
    return clamp(sharp + fill * fill * (0.94 - sharp), 0, 1);
  }
  return sharp;
}

export interface FieldSample {
  x: number;
  y: number;
  z: number;
}

function mapPoint(x: number, y: number, z: number, clock: number, params: AgentParams): FieldSample {
  const cov = coverageAt(clock, params);
  const deform = deformAmt(cov, params);
  const contract = contractAmt(cov, params);
  const [wx, wy] = spaceWarp(x, y, clock, params, deform);
  const [sx, sy] = structureHome(wx, wy, clock, params);
  let px = wx + (sx - wx) * contract;
  let py = wy + (sy - wy) * contract;
  const { fast, slow } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);
  const curl = params.flow * params.curl * deform * 0.045;
  px += curl * Math.sin(wy * params.flowScale * 2.1 + slow);
  py += curl * Math.cos(wx * params.flowScale * 1.8 + slow * 0.7);
  const jig = params.perturb * 0.01 * (0.3 + deform);
  px += jig * Math.sin(x * 11 + fast);
  py += jig * Math.cos(y * 10 + fast * 0.8);
  const [fx, fy] = intoFrame(px, py);
  return {
    x: fx,
    y: fy,
    z: z * (1 - contract * 0.5) + 0.04 * Math.sin(z * 3 + clock * 0.5) * deform,
  };
}

/** Lagrangian map of a home sample. Nearby homes stay related unless they split across basins. */
export function displacementAt(x: number, y: number, z: number, clock: number, params: AgentParams): FieldSample {
  const p = mapPoint(x, y, z, clock, params);
  return { x: p.x - x, y: p.y - y, z: p.z - z };
}

export function sampleTarget(x: number, y: number, z: number, clock: number, params: AgentParams): FieldSample {
  const p = mapPoint(x, y, z, clock, params);
  return {
    x: clamp(p.x, -0.48, 0.48),
    y: clamp(p.y, -0.82, 0.82),
    z: clamp(p.z, -0.32, 0.32),
  };
}

function strainSquash(x: number, y: number, z: number, clock: number, params: AgentParams): number {
  const t0 = sampleTarget(x, y, z, clock, params);
  const tx = sampleTarget(x + EPS, y, z, clock, params);
  const ty = sampleTarget(x, y + EPS, z, clock, params);
  const jxx = (tx.x - t0.x) / EPS;
  const jyx = (tx.y - t0.y) / EPS;
  const jxy = (ty.x - t0.x) / EPS;
  const jyy = (ty.y - t0.y) / EPS;
  const sx = Math.hypot(jxx, jyx) || 1;
  const sy = Math.hypot(jxy, jyy) || 1;
  return clamp(sx / sy, 0.38, 2.6);
}

function homeOnLattice(i: number, n: number, seed: AgentSeed): [number, number, number] {
  const cols = Math.max(2, Math.round(Math.sqrt(n * 1.15)));
  const rows = Math.max(2, Math.ceil(n / cols));
  const col = i % cols;
  const row = Math.floor(i / cols);
  const jitterX = (seed.x - 0.5) * 0.7;
  const jitterY = (seed.y - 0.5) * 0.7;
  const hex = (row % 2) * 0.5;
  const x = ((col + 0.5 + hex + jitterX * 0.4) / cols - 0.5) * 0.98;
  const y = ((row + 0.5 + jitterY * 0.36) / rows - 0.5) * 1.52;
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
  const contract = contractAmt(cov, params);
  const pull = (15.5 + contract * 6) / (0.22 + params.inertia);
  const drag = Math.exp(-(0.55 + params.damp * 1.1) * dt);
  const maxV = (0.2 + params.maxV * 0.32) * (0.85 + contract * 0.7);
  const rad = params.radius * (0.22 + contract * 0.28);
  const rad2 = rad * rad;
  const { slow } = fieldClocks(clock, params.fieldEvolve, params.densityEvolve);

  for (let i = 0; i < n; i++) {
    const target = sampleTarget(field.homeX[i], field.homeY[i], field.homeZ[i], clock, params);
    let ax = (target.x - field.px[i]) * pull;
    let ay = (target.y - field.py[i]) * pull;
    let az = (target.z - field.pz[i]) * pull * 0.4;
    if (params.repel > 0.02 && contract > 0.12) {
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const dx = field.px[i] - field.px[j];
        const dy = field.py[i] - field.py[j];
        const d2 = dx * dx + dy * dy;
        if (d2 > rad2 || d2 < 1e-10) continue;
        const dist = Math.sqrt(d2);
        const u = 1 - dist / rad;
        const push = u * u * params.repel * 0.28 * contract;
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
      Math.sin(field.homeX[i] * 3.4 + field.homeY[i] * 2.6 + slow * 0.4) *
      Math.cos(field.homeY[i] * 2.1 + slow * 0.22);
    const bulk = params.minScale + (1 - cov) * (params.maxScale - params.minScale) * 0.9;
    field.scale[i] = clamp(
      bulk * (0.88 + field.bias[i] * 0.14) * (1 + params.scaleAmp * sf * 0.16 * (0.3 + contract)),
      params.minScale,
      params.maxScale,
    );
    field.squash[i] = strainSquash(field.homeX[i], field.homeY[i], field.homeZ[i], clock, params);
    field.alpha[i] = 1;
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
  const depth = Math.max(0.62, 1.02 - field.pz[i] * 0.22);
  const near = clamp(1.02 / depth, 0.78, 1.28);
  return {
    x: clamp(field.px[i] / depth, -0.48, 0.48),
    y: clamp(field.py[i] / depth, -0.82, 0.82),
    px: clamp((0.036 + size * 0.019) * near * field.scale[i], 0.02, 0.32),
    rot: (field.bias[i] - 1.05) * 0.14,
    alpha: 1,
    squash: field.squash ? field.squash[i] : 1,
  };
}

/** Nearby displacement samples should share direction. */
export function agentFieldAt(x: number, y: number, z: number, clock: number, params: AgentParams): FieldSample {
  return displacementAt(x, y, z, clock, params);
}
