import { clamp, lerp, mulberry32 } from "../core/random";

export const CAMERA_BEHAVIORS = ["fixed", "hunt"] as const;
export type CameraBehavior = (typeof CAMERA_BEHAVIORS)[number];

export const CAMERA_FEELS = ["perfect", "handheld"] as const;
export type CameraFeel = (typeof CAMERA_FEELS)[number];

export const HUNT_SELECTS = ["random", "reactive", "mixed"] as const;
export type HuntSelect = (typeof HUNT_SELECTS)[number];

export type HuntPhase = "wide" | "notice" | "snap" | "track" | "return";
export type HuntPlan = "basic" | "medium" | "retarget" | "abort" | "linger" | "nudge";

export function cameraFromUnknown(value?: string | null): CameraBehavior {
  return CAMERA_BEHAVIORS.includes(value as CameraBehavior) ? (value as CameraBehavior) : "fixed";
}

export function feelFromUnknown(value?: string | null): CameraFeel {
  return CAMERA_FEELS.includes(value as CameraFeel) ? (value as CameraFeel) : "perfect";
}

export function huntSelectFromUnknown(value?: string | null): HuntSelect {
  return HUNT_SELECTS.includes(value as HuntSelect) ? (value as HuntSelect) : "mixed";
}

export function clampHuntWideMin(value?: number | null): number {
  return clamp(value ?? 2, 0.4, 12);
}
export function clampHuntWideMax(value?: number | null): number {
  return clamp(value ?? 6, 0.6, 16);
}
export function clampHuntFollowMin(value?: number | null): number {
  return clamp(value ?? 2, 0.4, 12);
}
export function clampHuntFollowMax(value?: number | null): number {
  return clamp(value ?? 5, 0.6, 16);
}
export function clampHuntSnap(value?: number | null): number {
  return clamp(value ?? 1, 0.35, 2.4);
}
export function clampHuntZoom(value?: number | null): number {
  return clamp(value ?? 1, 0.35, 2.4);
}
export function clampHuntTight(value?: number | null): number {
  return clamp(value ?? 0.7, 0.12, 1);
}
export function clampHuntReactMin(value?: number | null): number {
  return clamp(value ?? 0.16, 0.04, 1.4);
}
export function clampHuntReactMax(value?: number | null): number {
  return clamp(value ?? 0.42, 0.08, 2);
}
export function clampHuntPrecision(value?: number | null): number {
  return clamp(value ?? 0.72, 0, 1);
}
export function clampHuntFocusSpeed(value?: number | null): number {
  return clamp(value ?? 0.85, 0.15, 2.2);
}
export function clampHuntFocusError(value?: number | null): number {
  return clamp(value ?? 0.55, 0, 1.6);
}
export function clampHuntVariation(value?: number | null): number {
  return clamp(value ?? 0.35, 0, 1);
}

export interface HuntParams {
  wideMin: number;
  wideMax: number;
  followMin: number;
  followMax: number;
  snap: number;
  zoom: number;
  tight: number;
  reactMin: number;
  reactMax: number;
  precision: number;
  select: HuntSelect;
  focusOn: boolean;
  focusSpeed: number;
  focusError: number;
  variation: number;
  feel: CameraFeel;
}

export function huntParamsFrom(raw?: Partial<{
  huntWideMin?: number | null;
  huntWideMax?: number | null;
  huntFollowMin?: number | null;
  huntFollowMax?: number | null;
  huntSnap?: number | null;
  huntZoom?: number | null;
  huntTight?: number | null;
  huntReactMin?: number | null;
  huntReactMax?: number | null;
  huntPrecision?: number | null;
  huntSelect?: string | null;
  huntFocus?: boolean | null;
  huntFocusSpeed?: number | null;
  huntFocusError?: number | null;
  huntVariation?: number | null;
  cameraFeel?: string | null;
}>): HuntParams {
  let wideMin = clampHuntWideMin(raw?.huntWideMin);
  let wideMax = clampHuntWideMax(raw?.huntWideMax);
  if (wideMax < wideMin) [wideMin, wideMax] = [wideMax, wideMin];
  let followMin = clampHuntFollowMin(raw?.huntFollowMin);
  let followMax = clampHuntFollowMax(raw?.huntFollowMax);
  if (followMax < followMin) [followMin, followMax] = [followMax, followMin];
  let reactMin = clampHuntReactMin(raw?.huntReactMin);
  let reactMax = clampHuntReactMax(raw?.huntReactMax);
  if (reactMax < reactMin) [reactMin, reactMax] = [reactMax, reactMin];
  return {
    wideMin,
    wideMax,
    followMin,
    followMax,
    snap: clampHuntSnap(raw?.huntSnap),
    zoom: clampHuntZoom(raw?.huntZoom),
    tight: clampHuntTight(raw?.huntTight),
    reactMin,
    reactMax,
    precision: clampHuntPrecision(raw?.huntPrecision),
    select: huntSelectFromUnknown(raw?.huntSelect),
    focusOn: !!raw?.huntFocus,
    focusSpeed: clampHuntFocusSpeed(raw?.huntFocusSpeed),
    focusError: clampHuntFocusError(raw?.huntFocusError),
    variation: clampHuntVariation(raw?.huntVariation),
    feel: feelFromUnknown(raw?.cameraFeel),
  };
}

export interface HuntStamp {
  id: number;
  x: number;
  y: number;
  px: number;
}

export interface HuntView {
  x: number;
  y: number;
  zoom: number;
  rot: number;
  focus: number;
}

export interface HuntState {
  phase: HuntPhase;
  clock: number;
  phaseUntil: number;
  reactUntil: number;
  subject: number;
  lastSubject: number;
  lookX: number;
  lookY: number;
  zoom: number;
  rot: number;
  velX: number;
  velY: number;
  velZ: number;
  velR: number;
  errX: number;
  errY: number;
  heldFocus: number;
  plan: HuntPlan;
  mediumDone: boolean;
  nudged: boolean;
  retargeted: boolean;
  handX: number;
  handY: number;
  handR: number;
  lag: number;
  cycle: number;
  trackStart: number;
  prev: { id: number; x: number; y: number; px: number }[];
}

export function initHuntState(clock = 0, wideFor = 3): HuntState {
  return {
    phase: "wide",
    clock,
    phaseUntil: clock + wideFor,
    reactUntil: 0,
    subject: -1,
    lastSubject: -1,
    lookX: 0,
    lookY: 0,
    zoom: 1,
    rot: 0,
    velX: 0,
    velY: 0,
    velZ: 0,
    velR: 0,
    errX: 0,
    errY: 0,
    heldFocus: 1,
    plan: "basic",
    mediumDone: false,
    nudged: false,
    retargeted: false,
    handX: 0,
    handY: 0,
    handR: 0,
    lag: 0,
    cycle: 0,
    trackStart: 0,
    prev: [],
  };
}

function range(rng: () => number, a: number, b: number): number {
  return a + rng() * Math.max(0, b - a);
}

function hypot(x: number, y: number): number {
  return Math.hypot(x, y);
}

export function huntSalience(
  stamp: HuntStamp,
  prev: { x: number; y: number; px: number } | undefined,
  group: { cx: number; cy: number; spread: number },
  dt: number,
): number {
  const vx = prev ? (stamp.x - prev.x) / Math.max(dt, 1 / 60) : 0;
  const vy = prev ? (stamp.y - prev.y) / Math.max(dt, 1 / 60) : 0;
  const speed = hypot(vx, vy);
  const grow = prev ? (stamp.px - prev.px) / Math.max(dt, 1 / 60) : 0;
  const toward = Math.max(0, grow);
  const prevSpeed = prev ? hypot(prev.x - stamp.x, prev.y - stamp.y) : 0;
  const accel = Math.max(0, speed - prevSpeed / Math.max(dt, 1 / 60));
  const turn = prev ? Math.abs(Math.atan2(vy, vx) - Math.atan2(stamp.y - prev.y, stamp.x - prev.x)) : 0;
  const isolated = hypot(stamp.x - group.cx, stamp.y - group.cy) / Math.max(group.spread, 0.08);
  const extreme = Math.max(Math.abs(stamp.x), Math.abs(stamp.y));
  const crossing = Math.min(1, speed * 1.6);
  return (
    speed * 1.15 +
    accel * 0.9 +
    turn * 0.35 +
    toward * 3.2 +
    clamp(isolated - 0.7, 0, 2) * 0.55 +
    clamp(extreme - 0.28, 0, 1) * 0.7 +
    crossing * 0.4
  );
}

export function pickHuntSubject(
  stamps: HuntStamp[],
  prevId: number,
  mode: HuntSelect,
  rng: () => number,
  prev: { id: number; x: number; y: number; px: number }[],
  dt: number,
): number {
  if (stamps.length === 0) return -1;
  if (stamps.length === 1) return stamps[0].id;
  const cx = stamps.reduce((s, p) => s + p.x, 0) / stamps.length;
  const cy = stamps.reduce((s, p) => s + p.y, 0) / stamps.length;
  const spread =
    stamps.reduce((s, p) => s + hypot(p.x - cx, p.y - cy), 0) / stamps.length || 0.2;
  const prevMap = new Map(prev.map((p) => [p.id, p]));
  const weights = stamps.map((stamp) => {
    if (stamp.id === prevId && stamps.length > 1) return 0;
    const sal = huntSalience(stamp, prevMap.get(stamp.id), { cx, cy, spread }, dt);
    if (mode === "random") return 1;
    if (mode === "reactive") return 0.12 + sal;
    return 0.55 + sal;
  });
  const sum = weights.reduce((s, w) => s + w, 0);
  if (sum <= 0) {
    const fallback = stamps.find((s) => s.id !== prevId) ?? stamps[0];
    return fallback.id;
  }
  let pick = rng() * sum;
  for (let i = 0; i < stamps.length; i++) {
    pick -= weights[i];
    if (pick <= 0) return stamps[i].id;
  }
  return stamps[stamps.length - 1].id;
}

function rollPlan(variation: number, rng: () => number): HuntPlan {
  if (rng() > variation * 0.72) return "basic";
  const roll = rng();
  if (roll < 0.22) return "medium";
  if (roll < 0.42) return "retarget";
  if (roll < 0.6) return "abort";
  if (roll < 0.8) return "linger";
  return "nudge";
}

function closeZoomFor(stamp: HuntStamp | undefined, zoom: number, medium = false): number {
  const px = stamp?.px ?? 0.08;
  const tight = 0.2 / Math.max(px, 0.045);
  const close = clamp(1.2 + zoom * 0.95 * clamp(tight, 0.65, 2.1), 1.25, 4.1);
  return medium ? lerp(1, close, 0.42) : close;
}

function findStamp(stamps: HuntStamp[], id: number): HuntStamp | undefined {
  return stamps.find((s) => s.id === id);
}

function centroid(stamps: HuntStamp[]): { x: number; y: number } {
  if (!stamps.length) return { x: 0, y: 0 };
  let x = 0;
  let y = 0;
  for (const s of stamps) {
    x += s.x;
    y += s.y;
  }
  return { x: x / stamps.length, y: y / stamps.length };
}

function springToward(
  state: HuntState,
  tx: number,
  ty: number,
  tz: number,
  tr: number,
  dt: number,
  stiffness: number,
  damp: number,
) {
  state.velX += (tx - state.lookX) * stiffness - state.velX * damp;
  state.velY += (ty - state.lookY) * stiffness - state.velY * damp;
  state.velZ += (tz - state.zoom) * stiffness - state.velZ * damp;
  state.velR += (tr - state.rot) * stiffness * 0.65 - state.velR * damp;
  state.lookX += state.velX * dt;
  state.lookY += state.velY * dt;
  state.zoom += state.velZ * dt;
  state.rot += state.velR * dt;
}

export function stepHunt(
  prev: HuntState | null,
  stamps: HuntStamp[],
  clock: number,
  params: HuntParams,
  seed: number,
): HuntState {
  const rng = mulberry32((seed + Math.floor(clock * 1000) * 17 + (prev?.cycle ?? 0) * 131) >>> 0);
  let state = prev ?? initHuntState(clock, range(rng, params.wideMin, params.wideMax));
  const rawDt = clock - state.clock;
  if (rawDt < -0.02 || rawDt > 1.2) {
    state = initHuntState(clock, range(rng, params.wideMin, params.wideMax));
  }
  const dt = clamp(clock - state.clock, 1 / 90, 0.08);
  state.clock = clock;
  const group = centroid(stamps);
  const subject = findStamp(stamps, state.subject);
  const prevSub = state.prev.find((p) => p.id === state.subject);
  if (subject && prevSub) {
    const jerk = hypot(subject.x - prevSub.x, subject.y - prevSub.y) / dt;
    if (jerk > 0.55) state.lag = Math.max(state.lag, (1 - params.precision) * 0.16);
  }
  state.lag = Math.max(0, state.lag - dt * (1.4 + params.precision * 2));
  state.errX *= Math.exp(-dt * (1.1 + params.precision * 2.6));
  state.errY *= Math.exp(-dt * (1.1 + params.precision * 2.6));

  const reactRng = mulberry32((seed + state.cycle * 9973 + 11) >>> 0);
  const planRng = mulberry32((seed + state.cycle * 7919 + 3) >>> 0);

  const enterNotice = (nextId: number, reactScale = 1) => {
    state.lastSubject = state.subject;
    state.subject = nextId;
    state.phase = "notice";
    state.reactUntil = clock + range(reactRng, params.reactMin, params.reactMax) * reactScale;
    const mag = (1 - params.precision) * 0.11 * (0.45 + reactRng());
    const ang = reactRng() * Math.PI * 2;
    state.errX = Math.cos(ang) * mag;
    state.errY = Math.sin(ang) * mag;
  };

  if (state.phase === "wide" && clock >= state.phaseUntil && stamps.length) {
    const id = pickHuntSubject(stamps, state.lastSubject, params.select, reactRng, state.prev, dt);
    state.plan = rollPlan(params.variation, planRng);
    state.mediumDone = false;
    state.nudged = false;
    state.retargeted = false;
    if (state.plan === "linger") {
      state.phaseUntil = clock + range(planRng, params.wideMin, params.wideMax) * (1.15 + planRng() * 0.7);
      state.plan = "basic";
    } else {
      enterNotice(id);
    }
  } else if (state.phase === "notice" && clock >= state.reactUntil) {
    state.phase = "snap";
    state.phaseUntil = clock + clamp(0.28 / params.snap, 0.12, 0.85);
  } else if (state.phase === "snap" && clock >= state.phaseUntil) {
    if (state.plan === "medium" && !state.mediumDone) {
      state.mediumDone = true;
      state.phase = "notice";
      state.reactUntil = clock + range(reactRng, params.reactMin, params.reactMax) * 0.55;
    } else {
      state.phase = "track";
      state.trackStart = clock;
      const follow = range(planRng, params.followMin, params.followMax);
      state.phaseUntil = clock + (state.plan === "abort" ? follow * (0.28 + planRng() * 0.28) : follow);
    }
  } else if (state.phase === "track") {
    const tracked = Math.max(0.01, state.phaseUntil - state.trackStart);
    if (
      state.plan === "retarget" &&
      !state.retargeted &&
      stamps.length > 1 &&
      clock >= state.trackStart + tracked * 0.42
    ) {
      const next = pickHuntSubject(stamps, state.subject, params.select, reactRng, state.prev, dt);
      if (next !== state.subject && next >= 0) {
        state.retargeted = true;
        state.plan = "basic";
        enterNotice(next, 0.55);
      }
    } else if (state.plan === "nudge" && !state.nudged && clock > state.phaseUntil - 0.8) {
      state.nudged = true;
    }
    if (state.phase === "track" && clock >= state.phaseUntil) {
      state.phase = "return";
      state.phaseUntil = clock + clamp(0.32 / params.snap, 0.14, 0.9);
      state.lastSubject = state.subject;
    }
  } else if (state.phase === "return" && clock >= state.phaseUntil) {
    state.phase = "wide";
    state.subject = -1;
    state.cycle += 1;
    state.phaseUntil = clock + range(planRng, params.wideMin, params.wideMax);
    state.plan = "basic";
  }

  const live = findStamp(stamps, state.subject) ?? subject;
  const wideZoom = 1;
  let aimX = group.x * 0.22;
  let aimY = group.y * 0.22;
  let aimZ = wideZoom;
  let aimR = 0;
  if (live && (state.phase === "notice" || state.phase === "snap" || state.phase === "track")) {
    aimX = live.x + state.errX;
    aimY = live.y + state.errY;
    const medium = state.phase === "snap" && state.plan === "medium" && !state.mediumDone;
    aimZ = state.phase === "notice" ? lerp(state.zoom, 1.04, 0.15) : closeZoomFor(live, params.zoom, medium);
    if (state.nudged && state.phase === "track") aimZ *= 1.12;
    aimR = Math.atan2(aimY - state.lookY, aimX - state.lookX) * 0.045;
  } else if (state.phase === "return") {
    aimX = group.x * 0.18;
    aimY = group.y * 0.18;
    aimZ = wideZoom;
    aimR = 0;
  }

  const snapBoost = state.phase === "snap" || state.phase === "return" ? 1.15 + params.snap * 1.35 : 1;
  const noticeSoft = state.phase === "notice" ? 0.38 : 1;
  const lagMul = 1 - clamp(state.lag * 2.4, 0, 0.55);
  const stiffness =
    (0.08 + params.tight * 0.22) * (0.45 + params.precision * 0.7) * snapBoost * noticeSoft * lagMul;
  const damp = 0.18 + params.precision * 0.22 + params.tight * 0.12;
  springToward(state, aimX, aimY, aimZ, aimR, dt, stiffness, damp);

  const desiredFocus = clamp(state.zoom, 1, 4.2);
  if (!params.focusOn) {
    state.heldFocus = desiredFocus;
  } else {
    const pull = 1 - Math.exp(-dt * (0.35 + params.focusSpeed * 1.8));
    state.heldFocus = lerp(state.heldFocus, desiredFocus, pull);
  }

  if (params.feel === "handheld") {
    const kick = hypot(state.velX, state.velY) + Math.abs(state.velZ) * 0.08;
    state.handX = lerp(state.handX, -state.velX * 0.05 - kick * 0.01, 1 - Math.exp(-dt * 3.2));
    state.handY = lerp(state.handY, -state.velY * 0.05, 1 - Math.exp(-dt * 3.2));
    state.handR = lerp(state.handR, -state.velR * 0.4, 1 - Math.exp(-dt * 2.6));
  } else {
    state.handX = lerp(state.handX, 0, 1 - Math.exp(-dt * 8));
    state.handY = lerp(state.handY, 0, 1 - Math.exp(-dt * 8));
    state.handR = lerp(state.handR, 0, 1 - Math.exp(-dt * 8));
  }

  state.prev = stamps.map((s) => ({ id: s.id, x: s.x, y: s.y, px: s.px }));
  return state;
}

export function huntView(state: HuntState, params: HuntParams): HuntView {
  const desiredFocus = clamp(state.zoom, 1, 4.2);
  const focus = params.focusOn ? clamp(Math.abs(state.heldFocus - desiredFocus) * params.focusError * 0.9, 0, 1) : 0;
  return {
    x: state.lookX + (params.feel === "handheld" ? state.handX : 0),
    y: state.lookY + (params.feel === "handheld" ? state.handY : 0),
    zoom: clamp(state.zoom, 1, 4.4),
    rot: state.rot + (params.feel === "handheld" ? state.handR : 0),
    focus,
  };
}

export function applyHuntPose(
  pose: { x: number; y: number; px: number; rot: number },
  view: HuntView,
): { x: number; y: number; px: number; rot: number } {
  return {
    x: (pose.x - view.x) * view.zoom,
    y: (pose.y - view.y) * view.zoom,
    px: pose.px * view.zoom,
    rot: pose.rot + view.rot,
  };
}
