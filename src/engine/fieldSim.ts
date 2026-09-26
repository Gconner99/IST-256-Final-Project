import { clamp } from "../core/random";

export const SIM_MOVES = ["spring", "flow", "boids", "poles"] as const;
export type SimMove = (typeof SIM_MOVES)[number];

export function isSimMove(scene?: string | null): scene is SimMove {
  return !!scene && (SIM_MOVES as readonly string[]).includes(scene);
}

export function clampSpringStrength(value?: number | null): number {
  return clamp(value ?? 1, 0.2, 2.2);
}
export function clampSpringDamp(value?: number | null): number {
  return clamp(value ?? 0.55, 0.08, 1);
}
export function clampSpringDist(value?: number | null): number {
  return clamp(value ?? 0.34, 0.12, 0.72);
}
export function clampSpringElast(value?: number | null): number {
  return clamp(value ?? 1, 0.2, 2.2);
}
export function clampSpringBreak(value?: number | null): number {
  return clamp(value ?? 2.1, 1.15, 3.6);
}

export function clampFlowScale(value?: number | null): number {
  return clamp(value ?? 1, 0.28, 2.4);
}
export function clampFlowTurb(value?: number | null): number {
  return clamp(value ?? 0.8, 0, 2);
}
export function clampFlowEvolve(value?: number | null): number {
  return clamp(value ?? 0.7, 0.08, 2.2);
}
export function clampFlowForce(value?: number | null): number {
  return clamp(value ?? 1, 0.2, 2.2);
}
export function clampFlowDepth(value?: number | null): number {
  return clamp(value ?? 0.7, 0, 1.6);
}

export function clampBoidCohere(value?: number | null): number {
  return clamp(value ?? 1, 0.1, 2.2);
}
export function clampBoidSep(value?: number | null): number {
  return clamp(value ?? 1, 0.15, 2.4);
}
export function clampBoidAlign(value?: number | null): number {
  return clamp(value ?? 1, 0.1, 2.2);
}
export function clampBoidRadius(value?: number | null): number {
  return clamp(value ?? 0.22, 0.08, 0.55);
}
export function clampBoidSpeed(value?: number | null): number {
  return clamp(value ?? 1, 0.25, 2.2);
}

export function clampPoleCount(value?: number | null): number {
  return clamp(Math.round(value ?? 3), 1, 5);
}
export function clampPoleAttract(value?: number | null): number {
  return clamp(value ?? 1, 0.15, 2.2);
}
export function clampPoleRepel(value?: number | null): number {
  return clamp(value ?? 0.85, 0.1, 2.2);
}
export function clampPoleSpeed(value?: number | null): number {
  return clamp(value ?? 0.8, 0.12, 2.2);
}
export function clampPoleFalloff(value?: number | null): number {
  return clamp(value ?? 1.4, 0.6, 2.8);
}
export function clampPoleSwitch(value?: number | null): number {
  return clamp(value ?? 0.45, 0, 2);
}

export interface SimParams {
  springStrength: number;
  springDamp: number;
  springDist: number;
  springElast: number;
  springBreak: number;
  flowScale: number;
  flowTurb: number;
  flowEvolve: number;
  flowForce: number;
  flowDepth: number;
  boidCohere: number;
  boidSep: number;
  boidAlign: number;
  boidRadius: number;
  boidSpeed: number;
  poleCount: number;
  poleAttract: number;
  poleRepel: number;
  poleSpeed: number;
  poleFalloff: number;
  poleSwitch: number;
}

export function simParamsFrom(raw?: Partial<SimParams> | null): SimParams {
  return {
    springStrength: clampSpringStrength(raw?.springStrength),
    springDamp: clampSpringDamp(raw?.springDamp),
    springDist: clampSpringDist(raw?.springDist),
    springElast: clampSpringElast(raw?.springElast),
    springBreak: clampSpringBreak(raw?.springBreak),
    flowScale: clampFlowScale(raw?.flowScale),
    flowTurb: clampFlowTurb(raw?.flowTurb),
    flowEvolve: clampFlowEvolve(raw?.flowEvolve),
    flowForce: clampFlowForce(raw?.flowForce),
    flowDepth: clampFlowDepth(raw?.flowDepth),
    boidCohere: clampBoidCohere(raw?.boidCohere),
    boidSep: clampBoidSep(raw?.boidSep),
    boidAlign: clampBoidAlign(raw?.boidAlign),
    boidRadius: clampBoidRadius(raw?.boidRadius),
    boidSpeed: clampBoidSpeed(raw?.boidSpeed),
    poleCount: clampPoleCount(raw?.poleCount),
    poleAttract: clampPoleAttract(raw?.poleAttract),
    poleRepel: clampPoleRepel(raw?.poleRepel),
    poleSpeed: clampPoleSpeed(raw?.poleSpeed),
    poleFalloff: clampPoleFalloff(raw?.poleFalloff),
    poleSwitch: clampPoleSwitch(raw?.poleSwitch),
  };
}

export interface SimLink {
  a: number;
  b: number;
  rest: number;
  on: boolean;
}

export interface FieldSim {
  move: SimMove;
  n: number;
  lastClock: number;
  px: Float32Array;
  py: Float32Array;
  pz: Float32Array;
  vx: Float32Array;
  vy: Float32Array;
  vz: Float32Array;
  homeX: Float32Array;
  homeY: Float32Array;
  homeZ: Float32Array;
  links: SimLink[];
  linkKey: string;
}

export interface SimSeed {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
}

export interface SimPose {
  x: number;
  y: number;
  px: number;
  rot: number;
  alpha: number;
  flip?: number;
  glow?: number;
  squash?: number;
  tint?: string;
}

export function flowAt(
  x: number,
  y: number,
  z: number,
  t: number,
  scale: number,
  turb: number,
  depth: number,
): [number, number, number] {
  const s = scale * 3.15;
  const e = t;
  const t2 = turb;
  let vx =
    Math.sin(y * s + e * 1.07 + z * 0.35) +
    Math.cos(z * s * 0.7 + e * 0.62) * 0.45 +
    t2 * 0.55 * Math.sin(y * s * 2.15 + x * s * 0.4 + e * 1.73);
  let vy =
    Math.cos(x * s + e * 0.91 + z * 0.28) +
    Math.sin(z * s * 0.65 + e * 0.48) * 0.42 +
    t2 * 0.55 * Math.cos(x * s * 2.28 + y * s * 0.35 + e * 1.41);
  let vz =
    (Math.sin(x * s * 0.82 + y * s * 0.74 + e * 0.57) + t2 * 0.4 * Math.cos(x * s * 1.6 + e * 1.1)) * depth;
  const n = Math.hypot(vx, vy, vz) || 1;
  return [vx / n, vy / n, vz / n];
}

export function poleState(i: number, clock: number, speed: number, flip: number): { x: number; y: number; z: number; sign: number } {
  const w = speed * (0.42 + i * 0.15);
  const x = Math.sin(clock * w + i * 1.3) * 0.34 + Math.sin(clock * w * 0.37 + i) * 0.08;
  const y = Math.cos(clock * w * 0.86 + i * 1.9) * 0.28 + Math.cos(clock * w * 0.29 + i * 0.7) * 0.07;
  const z = Math.sin(clock * w * 0.51 + i * 2.2) * 0.2;
  const phase = clock * flip * (0.55 + i * 0.18) + i * 1.1;
  const sign = flip <= 0.02 ? (i & 1 ? -1 : 1) : Math.sin(phase) >= 0 ? 1 : -1;
  return { x, y, z, sign };
}

function seedPos(p: SimSeed): [number, number, number] {
  return [(p.x - 0.5) * 0.78, (p.y - 0.5) * 0.64, (p.z - 0.5) * 0.52];
}

export function initFieldSim(move: SimMove, seeds: SimSeed[], clock: number, params: SimParams): FieldSim {
  const n = seeds.length;
  const sim: FieldSim = {
    move,
    n,
    lastClock: clock,
    px: new Float32Array(n),
    py: new Float32Array(n),
    pz: new Float32Array(n),
    vx: new Float32Array(n),
    vy: new Float32Array(n),
    vz: new Float32Array(n),
    homeX: new Float32Array(n),
    homeY: new Float32Array(n),
    homeZ: new Float32Array(n),
    links: [],
    linkKey: "",
  };
  for (let i = 0; i < n; i++) {
    const [x, y, z] = seedPos(seeds[i]);
    sim.px[i] = x;
    sim.py[i] = y;
    sim.pz[i] = z;
    sim.homeX[i] = x;
    sim.homeY[i] = y;
    sim.homeZ[i] = z;
    sim.vx[i] = (seeds[i].vx - 0.5) * 0.08;
    sim.vy[i] = (seeds[i].vy - 0.5) * 0.08;
    sim.vz[i] = 0;
  }
  if (move === "spring") rebuildLinks(sim, params.springDist);
  return sim;
}

export function rebuildLinks(sim: FieldSim, dist: number, maxN = 5): SimLink[] {
  const n = sim.n;
  const links: SimLink[] = [];
  const seen = new Set<string>();
  for (let i = 0; i < n; i++) {
    const cand: { j: number; d: number }[] = [];
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const d = Math.hypot(sim.px[i] - sim.px[j], sim.py[i] - sim.py[j], sim.pz[i] - sim.pz[j]);
      if (d < dist) cand.push({ j, d });
    }
    cand.sort((a, b) => a.d - b.d);
    for (let k = 0; k < Math.min(maxN, cand.length); k++) {
      const j = cand[k].j;
      const a = Math.min(i, j);
      const b = Math.max(i, j);
      const key = `${a}:${b}`;
      if (seen.has(key)) continue;
      seen.add(key);
      links.push({ a, b, rest: Math.max(0.04, cand[k].d), on: true });
    }
  }
  sim.links = links;
  sim.linkKey = `${n}|${dist.toFixed(3)}`;
  return links;
}

function softBound(p: number, v: number, lim: number): [number, number] {
  if (p > lim) return [lim - (p - lim) * 0.15, v * -0.35];
  if (p < -lim) return [-lim - (p + lim) * 0.15, v * -0.35];
  return [p, v];
}

function stepSpring(sim: FieldSim, dt: number, clock: number, params: SimParams) {
  const n = sim.n;
  const key = `${n}|${params.springDist.toFixed(3)}`;
  if (sim.linkKey !== key) rebuildLinks(sim, params.springDist);
  const k = params.springStrength * (1.15 + (2.2 - params.springElast) * 0.55);
  const damp = params.springDamp / (0.42 + params.springElast * 0.5);
  const breakAt = params.springBreak;
  const tugX = Math.sin(clock * 0.55) * 0.28 + Math.sin(clock * 0.19) * 0.1;
  const tugY = Math.cos(clock * 0.47 + 0.8) * 0.22;
  const tugZ = Math.sin(clock * 0.31 + 1.2) * 0.12;
  for (const link of sim.links) {
    const dx = sim.px[link.b] - sim.px[link.a];
    const dy = sim.py[link.b] - sim.py[link.a];
    const dz = sim.pz[link.b] - sim.pz[link.a];
    const dist = Math.hypot(dx, dy, dz) || 1e-5;
    if (link.on && dist > link.rest * breakAt) {
      link.on = false;
      continue;
    }
    if (!link.on && dist < params.springDist * 0.92) link.on = true;
    if (!link.on) continue;
    const stretch = dist - link.rest;
    const f = k * stretch;
    const nx = dx / dist;
    const ny = dy / dist;
    const nz = dz / dist;
    sim.vx[link.a] += nx * f * dt;
    sim.vy[link.a] += ny * f * dt;
    sim.vz[link.a] += nz * f * dt;
    sim.vx[link.b] -= nx * f * dt;
    sim.vy[link.b] -= ny * f * dt;
    sim.vz[link.b] -= nz * f * dt;
  }
  const drag = Math.exp(-damp * 7 * dt);
  for (let i = 0; i < n; i++) {
    const hx = sim.homeX[i] - sim.px[i];
    const hy = sim.homeY[i] - sim.py[i];
    const hz = sim.homeZ[i] - sim.pz[i];
    sim.vx[i] += hx * 0.35 * dt;
    sim.vy[i] += hy * 0.35 * dt;
    sim.vz[i] += hz * 0.35 * dt;
    const td = Math.hypot(sim.px[i] - tugX, sim.py[i] - tugY, sim.pz[i] - tugZ);
    if (td < 0.24) {
      const u = (0.24 - td) / 0.24;
      sim.vx[i] += (tugX - sim.px[i]) * u * 1.8 * dt;
      sim.vy[i] += (tugY - sim.py[i]) * u * 1.8 * dt;
      sim.vz[i] += (tugZ - sim.pz[i]) * u * 1.1 * dt;
    }
    sim.vx[i] *= drag;
    sim.vy[i] *= drag;
    sim.vz[i] *= drag;
    sim.px[i] += sim.vx[i] * dt;
    sim.py[i] += sim.vy[i] * dt;
    sim.pz[i] += sim.vz[i] * dt;
    [sim.px[i], sim.vx[i]] = softBound(sim.px[i], sim.vx[i], 0.5);
    [sim.py[i], sim.vy[i]] = softBound(sim.py[i], sim.vy[i], 0.42);
    [sim.pz[i], sim.vz[i]] = softBound(sim.pz[i], sim.vz[i], 0.36);
  }
}

function stepFlow(sim: FieldSim, dt: number, clock: number, params: SimParams) {
  const t = clock * params.flowEvolve;
  const force = params.flowForce * 0.95;
  for (let i = 0; i < sim.n; i++) {
    const [fx, fy, fz] = flowAt(sim.px[i], sim.py[i], sim.pz[i], t, params.flowScale, params.flowTurb, params.flowDepth);
    sim.vx[i] += fx * force * dt;
    sim.vy[i] += fy * force * dt;
    sim.vz[i] += fz * force * dt;
    sim.vx[i] *= 0.9;
    sim.vy[i] *= 0.9;
    sim.vz[i] *= 0.9;
    sim.px[i] += sim.vx[i] * dt * 0.85;
    sim.py[i] += sim.vy[i] * dt * 0.85;
    sim.pz[i] += sim.vz[i] * dt * 0.7;
    [sim.px[i], sim.vx[i]] = softBound(sim.px[i], sim.vx[i], 0.5);
    [sim.py[i], sim.vy[i]] = softBound(sim.py[i], sim.vy[i], 0.42);
    [sim.pz[i], sim.vz[i]] = softBound(sim.pz[i], sim.vz[i], 0.34);
  }
}

function stepBoids(sim: FieldSim, dt: number, params: SimParams) {
  const n = sim.n;
  const r = params.boidRadius;
  const r2 = r * r;
  const maxV = 0.18 + params.boidSpeed * 0.28;
  const ax = new Float32Array(n);
  const ay = new Float32Array(n);
  const az = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    let cx = 0;
    let cy = 0;
    let cz = 0;
    let sx = 0;
    let sy = 0;
    let sz = 0;
    let lx = 0;
    let ly = 0;
    let lz = 0;
    let seen = 0;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const dx = sim.px[j] - sim.px[i];
      const dy = sim.py[j] - sim.py[i];
      const dz = sim.pz[j] - sim.pz[i];
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 > r2 || d2 < 1e-8) continue;
      seen++;
      cx += sim.px[j];
      cy += sim.py[j];
      cz += sim.pz[j];
      lx += sim.vx[j];
      ly += sim.vy[j];
      lz += sim.vz[j];
      const d = Math.sqrt(d2);
      const push = (r - d) / r;
      sx -= (dx / d) * push;
      sy -= (dy / d) * push;
      sz -= (dz / d) * push;
    }
    if (seen) {
      ax[i] += (cx / seen - sim.px[i]) * params.boidCohere * 1.15;
      ay[i] += (cy / seen - sim.py[i]) * params.boidCohere * 1.15;
      az[i] += (cz / seen - sim.pz[i]) * params.boidCohere * 1.15;
      ax[i] += sx * params.boidSep * 1.8;
      ay[i] += sy * params.boidSep * 1.8;
      az[i] += sz * params.boidSep * 1.8;
      ax[i] += (lx / seen - sim.vx[i]) * params.boidAlign * 1.35;
      ay[i] += (ly / seen - sim.vy[i]) * params.boidAlign * 1.35;
      az[i] += (lz / seen - sim.vz[i]) * params.boidAlign * 1.35;
    }
    ax[i] += -sim.px[i] * 0.22;
    ay[i] += -sim.py[i] * 0.22;
    az[i] += -sim.pz[i] * 0.18;
  }
  for (let i = 0; i < n; i++) {
    sim.vx[i] += ax[i] * dt;
    sim.vy[i] += ay[i] * dt;
    sim.vz[i] += az[i] * dt;
    const sp = Math.hypot(sim.vx[i], sim.vy[i], sim.vz[i]) || 1;
    if (sp > maxV) {
      const s = maxV / sp;
      sim.vx[i] *= s;
      sim.vy[i] *= s;
      sim.vz[i] *= s;
    }
    sim.px[i] += sim.vx[i] * dt;
    sim.py[i] += sim.vy[i] * dt;
    sim.pz[i] += sim.vz[i] * dt;
    [sim.px[i], sim.vx[i]] = softBound(sim.px[i], sim.vx[i], 0.5);
    [sim.py[i], sim.vy[i]] = softBound(sim.py[i], sim.vy[i], 0.42);
    [sim.pz[i], sim.vz[i]] = softBound(sim.pz[i], sim.vz[i], 0.34);
  }
}

function stepPoles(sim: FieldSim, dt: number, clock: number, params: SimParams) {
  const poles = [];
  for (let i = 0; i < params.poleCount; i++) poles.push(poleState(i, clock, params.poleSpeed, params.poleSwitch));
  const fall = params.poleFalloff;
  for (let i = 0; i < sim.n; i++) {
    let fx = 0;
    let fy = 0;
    let fz = 0;
    for (const p of poles) {
      const dx = p.x - sim.px[i];
      const dy = p.y - sim.py[i];
      const dz = p.z - sim.pz[i];
      const d = Math.hypot(dx, dy, dz) || 1e-4;
      const mag = (p.sign > 0 ? params.poleAttract : params.poleRepel) / (d ** fall + 0.018);
      const s = p.sign > 0 ? 1 : -1;
      fx += (dx / d) * mag * s;
      fy += (dy / d) * mag * s;
      fz += (dz / d) * mag * s * 0.72;
    }
    sim.vx[i] += fx * dt;
    sim.vy[i] += fy * dt;
    sim.vz[i] += fz * dt;
    sim.vx[i] *= 0.9;
    sim.vy[i] *= 0.9;
    sim.vz[i] *= 0.9;
    sim.px[i] += sim.vx[i] * dt * 0.9;
    sim.py[i] += sim.vy[i] * dt * 0.9;
    sim.pz[i] += sim.vz[i] * dt * 0.7;
    [sim.px[i], sim.vx[i]] = softBound(sim.px[i], sim.vx[i], 0.5);
    [sim.py[i], sim.vy[i]] = softBound(sim.py[i], sim.vy[i], 0.42);
    [sim.pz[i], sim.vz[i]] = softBound(sim.pz[i], sim.vz[i], 0.34);
  }
}

export function stepFieldSim(
  prev: FieldSim | null,
  move: SimMove,
  seeds: SimSeed[],
  clock: number,
  params: SimParams,
): FieldSim {
  const n = seeds.length;
  let sim = prev;
  if (!sim || sim.move !== move || sim.n !== n || clock < sim.lastClock - 0.04 || clock - sim.lastClock > 1.6) {
    sim = initFieldSim(move, seeds, clock, params);
  }
  let dt = clock - sim.lastClock;
  if (dt <= 1e-5) return sim;
  dt = Math.min(dt, 0.05);
  const steps = dt > 0.028 ? 2 : 1;
  const slice = dt / steps;
  for (let s = 0; s < steps; s++) {
    if (move === "spring") stepSpring(sim, slice, clock, params);
    else if (move === "flow") stepFlow(sim, slice, clock, params);
    else if (move === "boids") stepBoids(sim, slice, params);
    else stepPoles(sim, slice, clock, params);
  }
  sim.lastClock = clock;
  return sim;
}

export function simPose(sim: FieldSim, i: number, size: number): SimPose | null {
  if (i < 0 || i >= sim.n) return null;
  const depth = Math.max(0.46, 1.06 - sim.pz[i] * 0.52);
  const near = clamp(1.1 / depth, 0.55, 1.7);
  return {
    x: sim.px[i] / depth,
    y: sim.py[i] / depth,
    px: clamp((0.07 + size * 0.03) * near, 0.05, 0.22),
    rot: Math.atan2(sim.vy[i], sim.vx[i]),
    alpha: clamp(0.55 + near * 0.4, 0.5, 1),
  };
}
