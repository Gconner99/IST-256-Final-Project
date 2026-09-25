import { clamp, mulberry32 } from "../core/random";
import type { GeneratorType } from "../core/types";

export const HERALDRY_ROOMS: GeneratorType[] = ["heraldry", "wallpaper", "giants", "shower"];
export const COLLAGE_KITS = ["sailor", "circus", "fruit", "nature", "love"] as const;
export type CollageKit = (typeof COLLAGE_KITS)[number];

export type HeraldryScene = "tour" | "wallpaper" | "sparse" | "giants" | "shower";

export function isHeraldry(kind?: string | null): boolean {
  return kind === "heraldry" || kind === "wallpaper" || kind === "giants" || kind === "shower";
}

export function kitFromUnknown(value?: string | null): CollageKit {
  return COLLAGE_KITS.includes(value as CollageKit) ? (value as CollageKit) : "sailor";
}

export function sceneFromGenerator(kind?: string | null): HeraldryScene {
  if (kind === "wallpaper") return "wallpaper";
  if (kind === "giants") return "giants";
  if (kind === "shower") return "shower";
  return "tour";
}

/** Clip-like tour: dense paper → sparse → poster giants → confetti rain. */
export function sceneAt(time: number, duration: number, locked: HeraldryScene): HeraldryScene {
  if (locked !== "tour") return locked;
  const span = Math.max(duration, 8);
  const u = (((time % span) + span) % span) / span;
  if (u < 0.29) return "wallpaper";
  if (u < 0.58) return "sparse";
  if (u < 0.82) return "giants";
  return "shower";
}

const TINCTURES = [
  "#c41e3a",
  "#1c4db8",
  "#f0c020",
  "#1a8a3a",
  "#141414",
  "#f4f4f4",
  "#7a2ea0",
  "#e84a8a",
  "#2aa8a0",
  "#f26a20",
  "#6a7ad8",
  "#2a2a2a",
];

const KIT_INK: Record<CollageKit, string> = {
  sailor: "#1c4db8",
  circus: "#ff2f86",
  fruit: "#f0c020",
  nature: "#1a8a3a",
  love: "#e84a8a",
};

type Kind =
  | "star"
  | "heart"
  | "moon"
  | "figure"
  | "fish"
  | "anchor"
  | "wave"
  | "shell"
  | "starfish"
  | "boat"
  | "tail"
  | "swallow"
  | "elephant"
  | "tent"
  | "ball"
  | "bow"
  | "horse"
  | "balloon"
  | "ticket"
  | "pear"
  | "lemon"
  | "cherry"
  | "leaf"
  | "mushroom"
  | "flower"
  | "sun"
  | "cloud"
  | "bolt"
  | "umbrella"
  | "bird"
  | "tree"
  | "deer"
  | "fox"
  | "owl"
  | "acorn"
  | "cone"
  | "mountain"
  | "drop"
  | "moth"
  | "wingfig"
  | "swan"
  | "cat"
  | "crown"
  | "key"
  | "ring"
  | "envelope"
  | "potion"
  | "house";

type Pattern = "plain" | "checky" | "barry" | "paly" | "quarterly" | "bendy" | "saltire" | "fess" | "pale" | "split";

const KIT_PAPER: Record<CollageKit, Kind[]> = {
  sailor: ["fish", "anchor", "wave", "shell", "starfish", "boat", "tail", "swallow", "star", "moon"],
  circus: ["elephant", "tent", "ball", "bow", "horse", "balloon", "ticket", "moon", "star", "figure"],
  fruit: ["pear", "lemon", "cherry", "leaf", "mushroom", "flower", "sun", "cloud", "bolt", "umbrella", "bird"],
  nature: ["tree", "deer", "fox", "owl", "mushroom", "leaf", "acorn", "cone", "mountain", "drop", "moth", "bird"],
  love: ["heart", "wingfig", "swan", "cat", "crown", "moon", "star", "key", "ring", "envelope", "bow", "potion", "house"],
};

const KIT_GIANTS: Record<CollageKit, Kind[]> = {
  sailor: ["fish", "boat", "tail", "swallow", "anchor"],
  circus: ["elephant", "tent", "horse", "balloon", "figure"],
  fruit: ["pear", "lemon", "mushroom", "sun", "umbrella"],
  nature: ["tree", "deer", "owl", "fox", "mountain"],
  love: ["heart", "wingfig", "swan", "cat", "house"],
};

const KIT_SHOWER: Record<CollageKit, Kind[]> = {
  sailor: ["starfish", "shell", "star", "fish", "anchor"],
  circus: ["ball", "star", "balloon", "bow", "ticket"],
  fruit: ["cherry", "leaf", "star", "drop", "lemon"],
  nature: ["leaf", "acorn", "drop", "moth", "bird"],
  love: ["heart", "star", "key", "moon", "ring"],
};

const BODIES = new Set<Kind>([
  "fish",
  "elephant",
  "horse",
  "deer",
  "fox",
  "owl",
  "swan",
  "cat",
  "swallow",
  "bird",
  "moth",
  "wingfig",
  "figure",
  "boat",
  "tree",
  "tail",
]);

interface Charge {
  kind: Kind;
  pattern: Pattern;
  a: string;
  b: string;
  mirror: boolean;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  rot: number;
  size: number;
  vx: number;
  vy: number;
  vr: number;
  charge: Charge;
}

export interface HeraldryPaintOpts {
  width: number;
  height: number;
  time: number;
  duration: number;
  seed: number;
  generator?: string | null;
  kit?: string | null;
  paper: string;
  ink: string;
  audio: number;
  bass: number;
}

const STAMP = 144;

function hexOk(s: string | undefined, fallback: string): string {
  if (!s) return fallback;
  return /^#[0-9a-fA-F]{6}$/.test(s) ? s : fallback;
}

function pick<T>(rng: () => number, list: T[]): T {
  return list[Math.floor(rng() * list.length) % list.length];
}

function mixInk(rng: () => number, bias: string): string {
  if (rng() < 0.32) return bias;
  return pick(rng, TINCTURES);
}

export function kindsForKit(kit: CollageKit, scene: HeraldryScene = "wallpaper"): Kind[] {
  if (scene === "giants") return KIT_GIANTS[kit];
  if (scene === "shower") return KIT_SHOWER[kit];
  return KIT_PAPER[kit];
}

function makeCharge(rng: () => number, scene: HeraldryScene, bias: string, kit: CollageKit): Charge {
  const pool = kindsForKit(kit, scene === "sparse" ? "wallpaper" : scene);
  let kind = pick(rng, pool);
  if (scene === "shower" && rng() < 0.4) kind = pick(rng, KIT_SHOWER[kit]);
  if (scene === "giants" && rng() < 0.28) kind = pick(rng, KIT_GIANTS[kit]);
  const a = mixInk(rng, bias);
  let b = mixInk(rng, bias);
  if (b === a) b = pick(rng, TINCTURES);
  const patterned = BODIES.has(kind)
    ? rng() < 0.28
    : rng() < 0.82;
  return {
    kind,
    pattern: patterned
      ? pick(rng, ["checky", "barry", "paly", "quarterly", "bendy", "fess", "pale", "split"] as Pattern[])
      : "plain",
    a,
    b,
    mirror: rng() > 0.5,
  };
}

export function buildField(seed: number, bias: string, kit: CollageKit = "sailor"): Particle[] {
  const rng = mulberry32(seed >>> 0);
  const n = 240;
  const out: Particle[] = [];
  for (let i = 0; i < n; i++) {
    const sceneHint: HeraldryScene = i < 70 ? "shower" : i < 130 ? "giants" : "wallpaper";
    out.push({
      x: rng(),
      y: rng(),
      z: rng(),
      rot: (rng() - 0.5) * 0.55,
      size: 0.55 + rng() * 0.9,
      vx: (rng() - 0.5) * 0.06,
      vy: (rng() - 0.35) * 0.08,
      vr: (rng() - 0.5) * 0.25,
      charge: makeCharge(rng, sceneHint, bias, kit),
    });
  }
  return out;
}

function chargeKey(c: Charge): string {
  return `${c.kind}|${c.pattern}|${c.a}|${c.b}|${c.mirror ? 1 : 0}`;
}

function fillPattern(ctx: CanvasRenderingContext2D, path: () => void, c: Charge, r: number) {
  ctx.save();
  ctx.beginPath();
  path();
  ctx.clip();
  const a = c.a;
  const b = c.b;
  const s = r * 2.4;
  ctx.fillStyle = a;
  ctx.fillRect(-s, -s, s * 2, s * 2);
  ctx.fillStyle = b;
  const cell = r * 0.42;
  if (c.pattern === "plain") {
    /* already filled */
  } else if (c.pattern === "checky") {
    for (let y = -4; y < 5; y++) {
      for (let x = -4; x < 5; x++) {
        if (((x + y) & 1) === 0) ctx.fillRect(x * cell, y * cell, cell + 0.5, cell + 0.5);
      }
    }
  } else if (c.pattern === "barry") {
    const h = r * 0.28;
    for (let i = -6; i < 7; i += 2) ctx.fillRect(-s, i * h, s * 2, h);
  } else if (c.pattern === "paly") {
    const w = r * 0.28;
    for (let i = -6; i < 7; i += 2) ctx.fillRect(i * w, -s, w, s * 2);
  } else if (c.pattern === "quarterly") {
    ctx.fillRect(0, -s, s, s);
    ctx.fillRect(-s, 0, s, s);
  } else if (c.pattern === "bendy") {
    ctx.save();
    ctx.rotate(0.7);
    const w = r * 0.3;
    for (let i = -8; i < 9; i += 2) ctx.fillRect(i * w, -s, w, s * 2);
    ctx.restore();
  } else if (c.pattern === "saltire") {
    ctx.save();
    ctx.lineWidth = r * 0.38;
    ctx.strokeStyle = b;
    ctx.beginPath();
    ctx.moveTo(-r, -r);
    ctx.lineTo(r, r);
    ctx.moveTo(r, -r);
    ctx.lineTo(-r, r);
    ctx.stroke();
    ctx.restore();
  } else if (c.pattern === "fess") {
    ctx.fillRect(-s, -r * 0.22, s * 2, r * 0.44);
  } else if (c.pattern === "pale") {
    ctx.fillRect(-r * 0.22, -s, r * 0.44, s * 2);
  } else if (c.pattern === "split") {
    ctx.fillRect(0, -s, s, s * 2);
  }
  ctx.restore();
  ctx.save();
  ctx.beginPath();
  path();
  ctx.lineJoin = "round";
  ctx.lineWidth = Math.max(1, r * 0.03);
  ctx.strokeStyle = "#111111";
  ctx.stroke();
  ctx.restore();
}

function starPath(ctx: CanvasRenderingContext2D, r: number, n: number, inner = 0.42) {
  for (let i = 0; i < n * 2; i++) {
    const rad = i % 2 === 0 ? r : r * inner;
    const a = (i * Math.PI) / n - Math.PI / 2;
    const x = Math.cos(a) * rad;
    const y = Math.sin(a) * rad;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function heartPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, r * 0.82);
  ctx.bezierCurveTo(r * 0.95, r * 0.18, r * 0.85, -r * 0.55, 0, -r * 0.22);
  ctx.bezierCurveTo(-r * 0.85, -r * 0.55, -r * 0.95, r * 0.18, 0, r * 0.82);
  ctx.closePath();
}

function moonPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, 0, r, 0.55, Math.PI * 2 - 0.55);
  ctx.arc(r * 0.38, -r * 0.08, r * 0.72, Math.PI * 0.85, -Math.PI * 0.55, true);
  ctx.closePath();
}

function figurePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, -r * 0.62, r * 0.22, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.28, -r * 0.32);
  ctx.lineTo(r * 0.28, -r * 0.32);
  ctx.lineTo(r * 0.34, r * 0.18);
  ctx.lineTo(r * 0.2, r * 0.18);
  ctx.lineTo(r * 0.32, r * 0.95);
  ctx.lineTo(r * 0.08, r * 0.95);
  ctx.lineTo(0, r * 0.22);
  ctx.lineTo(-r * 0.08, r * 0.95);
  ctx.lineTo(-r * 0.32, r * 0.95);
  ctx.lineTo(-r * 0.2, r * 0.18);
  ctx.lineTo(-r * 0.34, r * 0.18);
  ctx.closePath();
}

function fishPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(-r * 0.08, 0, r * 0.7, r * 0.42, 0, 0, Math.PI * 2);
  ctx.moveTo(r * 0.55, 0);
  ctx.lineTo(r * 0.98, -r * 0.42);
  ctx.lineTo(r * 0.78, 0);
  ctx.lineTo(r * 0.98, r * 0.42);
  ctx.closePath();
}

function anchorPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.18, -r * 0.95);
  ctx.lineTo(r * 0.18, -r * 0.95);
  ctx.lineTo(r * 0.18, -r * 0.55);
  ctx.lineTo(r * 0.42, -r * 0.55);
  ctx.lineTo(r * 0.42, -r * 0.28);
  ctx.lineTo(r * 0.18, -r * 0.28);
  ctx.lineTo(r * 0.18, r * 0.35);
  ctx.quadraticCurveTo(r * 0.72, r * 0.22, r * 0.85, r * 0.7);
  ctx.lineTo(r * 0.55, r * 0.82);
  ctx.quadraticCurveTo(r * 0.35, r * 0.5, 0, r * 0.62);
  ctx.quadraticCurveTo(-r * 0.35, r * 0.5, -r * 0.55, r * 0.82);
  ctx.lineTo(-r * 0.85, r * 0.7);
  ctx.quadraticCurveTo(-r * 0.72, r * 0.22, -r * 0.18, r * 0.35);
  ctx.lineTo(-r * 0.18, -r * 0.28);
  ctx.lineTo(-r * 0.42, -r * 0.28);
  ctx.lineTo(-r * 0.42, -r * 0.55);
  ctx.lineTo(-r * 0.18, -r * 0.55);
  ctx.closePath();
}

function wavePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r, r * 0.15);
  ctx.quadraticCurveTo(-r * 0.66, -r * 0.55, -r * 0.33, r * 0.1);
  ctx.quadraticCurveTo(0, r * 0.7, r * 0.33, r * 0.1);
  ctx.quadraticCurveTo(r * 0.66, -r * 0.55, r, r * 0.15);
  ctx.lineTo(r, r * 0.55);
  ctx.quadraticCurveTo(r * 0.5, r * 0.2, 0, r * 0.55);
  ctx.quadraticCurveTo(-r * 0.5, r * 0.85, -r, r * 0.55);
  ctx.closePath();
}

function shellPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, r * 0.85);
  for (let i = 0; i <= 7; i++) {
    const a = -Math.PI * 0.95 + (i / 7) * Math.PI * 1.9;
    const rad = i % 2 === 0 ? r : r * 0.72;
    ctx.lineTo(Math.sin(a) * rad, -Math.cos(a) * rad * 0.85);
  }
  ctx.closePath();
}

function boatPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.95, r * 0.15);
  ctx.lineTo(r * 0.95, r * 0.15);
  ctx.lineTo(r * 0.62, r * 0.72);
  ctx.lineTo(-r * 0.62, r * 0.72);
  ctx.closePath();
  ctx.moveTo(0, r * 0.12);
  ctx.lineTo(0, -r * 0.95);
  ctx.lineTo(r * 0.62, r * 0.05);
  ctx.closePath();
}

function tailPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.15, -r * 0.9);
  ctx.quadraticCurveTo(r * 0.85, -r * 0.4, r * 0.35, r * 0.15);
  ctx.quadraticCurveTo(r * 0.95, r * 0.55, r * 0.15, r * 0.95);
  ctx.quadraticCurveTo(r * 0.05, r * 0.2, -r * 0.55, r * 0.05);
  ctx.quadraticCurveTo(-r * 0.95, -r * 0.55, -r * 0.15, -r * 0.9);
  ctx.closePath();
}

function swallowPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.9, r * 0.15);
  ctx.quadraticCurveTo(-r * 0.1, -r * 0.15, r * 0.55, -r * 0.08);
  ctx.lineTo(r * 0.95, -r * 0.42);
  ctx.lineTo(r * 0.7, 0);
  ctx.lineTo(r * 0.95, r * 0.42);
  ctx.lineTo(r * 0.5, r * 0.12);
  ctx.quadraticCurveTo(-r * 0.05, r * 0.55, -r * 0.55, r * 0.85);
  ctx.lineTo(-r * 0.35, r * 0.2);
  ctx.closePath();
}

function elephantPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.7, r * 0.15);
  ctx.quadraticCurveTo(-r * 0.75, -r * 0.55, -r * 0.15, -r * 0.62);
  ctx.quadraticCurveTo(r * 0.45, -r * 0.7, r * 0.55, -r * 0.15);
  ctx.lineTo(r * 0.95, r * 0.35);
  ctx.lineTo(r * 0.72, r * 0.48);
  ctx.lineTo(r * 0.42, r * 0.05);
  ctx.lineTo(r * 0.35, r * 0.85);
  ctx.lineTo(r * 0.12, r * 0.85);
  ctx.lineTo(r * 0.08, r * 0.2);
  ctx.lineTo(-r * 0.15, r * 0.85);
  ctx.lineTo(-r * 0.38, r * 0.85);
  ctx.lineTo(-r * 0.32, r * 0.2);
  ctx.lineTo(-r * 0.7, r * 0.2);
  ctx.closePath();
  ctx.moveTo(-r * 0.05, -r * 0.55);
  ctx.quadraticCurveTo(-r * 0.55, -r * 0.95, -r * 0.85, -r * 0.35);
  ctx.quadraticCurveTo(-r * 0.35, -r * 0.45, -r * 0.05, -r * 0.35);
  ctx.closePath();
}

function tentPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, -r);
  ctx.lineTo(r * 0.95, r * 0.85);
  ctx.lineTo(-r * 0.95, r * 0.85);
  ctx.closePath();
  ctx.moveTo(0, -r);
  ctx.lineTo(r * 0.22, -r * 0.85);
  ctx.lineTo(r * 0.08, -r * 0.55);
  ctx.closePath();
}

function ballPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, 0, r * 0.92, 0, Math.PI * 2);
}

function bowPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-r * 0.15, -r * 0.7, -r * 0.95, -r * 0.55, -r * 0.85, 0);
  ctx.bezierCurveTo(-r * 0.95, r * 0.55, -r * 0.15, r * 0.7, 0, 0);
  ctx.bezierCurveTo(r * 0.15, -r * 0.7, r * 0.95, -r * 0.55, r * 0.85, 0);
  ctx.bezierCurveTo(r * 0.95, r * 0.55, r * 0.15, r * 0.7, 0, 0);
  ctx.closePath();
}

function horsePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.85, r * 0.15);
  ctx.quadraticCurveTo(-r * 0.2, -r * 0.55, r * 0.35, -r * 0.2);
  ctx.lineTo(r * 0.82, -r * 0.55);
  ctx.lineTo(r * 0.95, -r * 0.32);
  ctx.lineTo(r * 0.55, 0.05 * r);
  ctx.quadraticCurveTo(r * 0.7, r * 0.35, r * 0.2, r * 0.28);
  ctx.lineTo(r * 0.28, r * 0.85);
  ctx.lineTo(r * 0.08, r * 0.85);
  ctx.lineTo(0, r * 0.3);
  ctx.lineTo(-r * 0.15, r * 0.85);
  ctx.lineTo(-r * 0.35, r * 0.85);
  ctx.lineTo(-r * 0.28, r * 0.28);
  ctx.lineTo(-r * 0.7, r * 0.22);
  ctx.lineTo(-r * 0.78, r * 0.75);
  ctx.lineTo(-r * 0.98, r * 0.72);
  ctx.closePath();
}

function balloonPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, -r * 0.2, r * 0.62, r * 0.72, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.08, r * 0.48);
  ctx.lineTo(0, r * 0.62);
  ctx.lineTo(r * 0.08, r * 0.48);
  ctx.lineTo(0, r * 0.95);
  ctx.lineTo(-r * 0.02, r * 0.95);
  ctx.closePath();
}

function ticketPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.95, -r * 0.48);
  ctx.lineTo(r * 0.95, -r * 0.48);
  ctx.arc(r * 0.95, 0, r * 0.16, -Math.PI / 2, Math.PI / 2);
  ctx.lineTo(-r * 0.95, r * 0.48);
  ctx.arc(-r * 0.95, 0, r * 0.16, Math.PI / 2, -Math.PI / 2);
  ctx.closePath();
}

function pearPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, r * 0.95);
  ctx.bezierCurveTo(r * 0.75, r * 0.7, r * 0.7, 0, r * 0.32, -r * 0.35);
  ctx.quadraticCurveTo(r * 0.18, -r * 0.75, 0, -r * 0.85);
  ctx.quadraticCurveTo(-r * 0.18, -r * 0.75, -r * 0.32, -r * 0.35);
  ctx.bezierCurveTo(-r * 0.7, 0, -r * 0.75, r * 0.7, 0, r * 0.95);
  ctx.closePath();
}

function lemonPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.95, 0);
  ctx.quadraticCurveTo(-r * 0.5, -r * 0.72, 0, -r * 0.55);
  ctx.quadraticCurveTo(r * 0.5, -r * 0.72, r * 0.95, 0);
  ctx.quadraticCurveTo(r * 0.5, r * 0.72, 0, r * 0.55);
  ctx.quadraticCurveTo(-r * 0.5, r * 0.72, -r * 0.95, 0);
  ctx.closePath();
}

function cherryPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(-r * 0.32, r * 0.28, r * 0.4, 0, Math.PI * 2);
  ctx.moveTo(r * 0.55, r * 0.22);
  ctx.arc(r * 0.32, r * 0.22, r * 0.38, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.2, -r * 0.05);
  ctx.quadraticCurveTo(0, -r * 0.85, r * 0.15, -r * 0.95);
  ctx.quadraticCurveTo(r * 0.05, -r * 0.4, r * 0.22, -r * 0.08);
  ctx.lineTo(r * 0.12, 0);
  ctx.quadraticCurveTo(0, -r * 0.55, -r * 0.28, -r * 0.02);
  ctx.closePath();
}

function leafPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, r);
  ctx.bezierCurveTo(r * 0.95, r * 0.25, r * 0.7, -r * 0.7, 0, -r);
  ctx.bezierCurveTo(-r * 0.7, -r * 0.7, -r * 0.95, r * 0.25, 0, r);
  ctx.closePath();
}

function mushroomPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.95, 0);
  ctx.quadraticCurveTo(-r * 0.2, -r, r * 0.95, 0);
  ctx.lineTo(r * 0.55, r * 0.12);
  ctx.lineTo(r * 0.28, r * 0.95);
  ctx.lineTo(-r * 0.28, r * 0.95);
  ctx.lineTo(-r * 0.55, r * 0.12);
  ctx.closePath();
}

function flowerPath(ctx: CanvasRenderingContext2D, r: number) {
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
    ctx.ellipse(Math.cos(a) * r * 0.45, Math.sin(a) * r * 0.45, r * 0.32, r * 0.22, a, 0, Math.PI * 2);
  }
  ctx.moveTo(r * 0.22, 0);
  ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2);
}

function sunPath(ctx: CanvasRenderingContext2D, r: number) {
  starPath(ctx, r, 8, 0.55);
}

function cloudPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(-r * 0.42, r * 0.08, r * 0.42, 0, Math.PI * 2);
  ctx.moveTo(r * 0.55, r * 0.12);
  ctx.arc(r * 0.32, r * 0.05, r * 0.4, 0, Math.PI * 2);
  ctx.moveTo(r * 0.15, -r * 0.2);
  ctx.arc(0, -r * 0.18, r * 0.48, 0, Math.PI * 2);
}

function boltPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(r * 0.15, -r);
  ctx.lineTo(-r * 0.15, -r * 0.05);
  ctx.lineTo(r * 0.08, -r * 0.05);
  ctx.lineTo(-r * 0.2, r);
  ctx.lineTo(r * 0.35, r * 0.08);
  ctx.lineTo(r * 0.08, r * 0.08);
  ctx.closePath();
}

function umbrellaPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r, r * 0.05);
  ctx.quadraticCurveTo(0, -r * 1.05, r, r * 0.05);
  ctx.quadraticCurveTo(r * 0.5, -r * 0.05, 0, r * 0.12);
  ctx.quadraticCurveTo(-r * 0.5, -r * 0.05, -r, r * 0.05);
  ctx.closePath();
  ctx.moveTo(-r * 0.04, r * 0.08);
  ctx.lineTo(r * 0.04, r * 0.08);
  ctx.lineTo(r * 0.04, r * 0.72);
  ctx.quadraticCurveTo(r * 0.28, r * 0.95, r * 0.02, r * 0.95);
  ctx.lineTo(-r * 0.02, r * 0.82);
  ctx.quadraticCurveTo(r * 0.12, r * 0.82, -r * 0.04, r * 0.7);
  ctx.closePath();
}

function birdPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.95, r * 0.15);
  ctx.quadraticCurveTo(-r * 0.2, -r * 0.35, r * 0.35, 0);
  ctx.lineTo(r * 0.85, -r * 0.35);
  ctx.lineTo(r * 0.55, r * 0.08);
  ctx.quadraticCurveTo(r * 0.15, r * 0.55, -r * 0.35, r * 0.45);
  ctx.closePath();
}

function treePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.18, r * 0.25);
  ctx.lineTo(-r * 0.22, r);
  ctx.lineTo(r * 0.22, r);
  ctx.lineTo(r * 0.18, r * 0.25);
  ctx.closePath();
  ctx.moveTo(0, -r);
  ctx.arc(-r * 0.28, -r * 0.15, r * 0.48, 0, Math.PI * 2);
  ctx.moveTo(r * 0.55, -r * 0.05);
  ctx.arc(r * 0.28, -r * 0.08, r * 0.45, 0, Math.PI * 2);
  ctx.moveTo(r * 0.2, -r * 0.45);
  ctx.arc(0, -r * 0.42, r * 0.5, 0, Math.PI * 2);
}

function deerPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.7, r * 0.2);
  ctx.quadraticCurveTo(-r * 0.2, -r * 0.25, r * 0.2, -r * 0.05);
  ctx.lineTo(r * 0.55, -r * 0.35);
  ctx.lineTo(r * 0.72, -r * 0.85);
  ctx.lineTo(r * 0.55, -r * 0.85);
  ctx.lineTo(r * 0.42, -r * 0.48);
  ctx.lineTo(r * 0.28, -r * 0.78);
  ctx.lineTo(r * 0.12, -r * 0.72);
  ctx.lineTo(r * 0.28, -r * 0.28);
  ctx.lineTo(r * 0.55, 0);
  ctx.lineTo(r * 0.35, r * 0.85);
  ctx.lineTo(r * 0.15, r * 0.85);
  ctx.lineTo(r * 0.08, r * 0.25);
  ctx.lineTo(-r * 0.15, r * 0.85);
  ctx.lineTo(-r * 0.35, r * 0.85);
  ctx.lineTo(-r * 0.22, r * 0.22);
  ctx.lineTo(-r * 0.7, r * 0.22);
  ctx.closePath();
}

function foxPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.35, r * 0.15);
  ctx.quadraticCurveTo(-r * 0.15, -r * 0.55, r * 0.45, -r * 0.15);
  ctx.lineTo(r * 0.85, -r * 0.55);
  ctx.lineTo(r * 0.95, -r * 0.22);
  ctx.lineTo(r * 0.55, r * 0.08);
  ctx.lineTo(r * 0.35, r * 0.85);
  ctx.lineTo(r * 0.12, r * 0.85);
  ctx.lineTo(0.05 * r, r * 0.28);
  ctx.lineTo(-r * 0.15, r * 0.85);
  ctx.lineTo(-r * 0.38, r * 0.85);
  ctx.lineTo(-r * 0.22, r * 0.22);
  ctx.quadraticCurveTo(-r * 0.85, r * 0.55, -r * 0.95, -r * 0.15);
  ctx.quadraticCurveTo(-r * 0.55, r * 0.15, -r * 0.35, r * 0.15);
  ctx.closePath();
}

function owlPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.55, -r * 0.35);
  ctx.lineTo(-r * 0.42, -r * 0.85);
  ctx.lineTo(-r * 0.12, -r * 0.55);
  ctx.lineTo(r * 0.12, -r * 0.55);
  ctx.lineTo(r * 0.42, -r * 0.85);
  ctx.lineTo(r * 0.55, -r * 0.35);
  ctx.quadraticCurveTo(r * 0.85, r * 0.55, 0, r * 0.95);
  ctx.quadraticCurveTo(-r * 0.85, r * 0.55, -r * 0.55, -r * 0.35);
  ctx.closePath();
}

function acornPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.7, -r * 0.15);
  ctx.quadraticCurveTo(0, -r * 0.85, r * 0.7, -r * 0.15);
  ctx.lineTo(r * 0.7, r * 0.08);
  ctx.lineTo(-r * 0.7, r * 0.08);
  ctx.closePath();
  ctx.moveTo(-r * 0.52, r * 0.05);
  ctx.quadraticCurveTo(0, r * 1.15, r * 0.52, r * 0.05);
  ctx.closePath();
}

function conePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, -r);
  ctx.lineTo(r * 0.72, r * 0.85);
  ctx.lineTo(-r * 0.72, r * 0.85);
  ctx.closePath();
}

function mountainPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r, r * 0.75);
  ctx.lineTo(-r * 0.35, -r * 0.35);
  ctx.lineTo(0, r * 0.15);
  ctx.lineTo(r * 0.45, -r * 0.85);
  ctx.lineTo(r, r * 0.75);
  ctx.closePath();
}

function dropPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, -r);
  ctx.bezierCurveTo(r * 0.75, -r * 0.15, r * 0.7, r * 0.75, 0, r);
  ctx.bezierCurveTo(-r * 0.7, r * 0.75, -r * 0.75, -r * 0.15, 0, -r);
  ctx.closePath();
}

function mothPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(-r * 0.45, -r * 0.05, r * 0.55, r * 0.72, -0.35, 0, Math.PI * 2);
  ctx.ellipse(r * 0.45, -r * 0.05, r * 0.55, r * 0.72, 0.35, 0, Math.PI * 2);
  ctx.moveTo(r * 0.12, r * 0.35);
  ctx.ellipse(0, r * 0.2, r * 0.12, r * 0.55, 0, 0, Math.PI * 2);
}

function wingfigPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(-r * 0.62, -r * 0.05, r * 0.42, r * 0.7, -0.4, 0, Math.PI * 2);
  ctx.ellipse(r * 0.62, -r * 0.05, r * 0.42, r * 0.7, 0.4, 0, Math.PI * 2);
  figurePath(ctx, r * 0.72);
}

function swanPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(r * 0.05, r * 0.28, r * 0.7, r * 0.42, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.15, r * 0.05);
  ctx.quadraticCurveTo(-r * 0.55, -r * 0.85, r * 0.15, -r * 0.75);
  ctx.quadraticCurveTo(-r * 0.15, -r * 0.35, r * 0.05, 0);
  ctx.closePath();
}

function catPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, r * 0.22, r * 0.58, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.42, -r * 0.55);
  ctx.lineTo(-r * 0.55, -r * 0.95);
  ctx.lineTo(-r * 0.12, -r * 0.55);
  ctx.lineTo(r * 0.12, -r * 0.55);
  ctx.lineTo(r * 0.55, -r * 0.95);
  ctx.lineTo(r * 0.42, -r * 0.55);
  ctx.closePath();
  ctx.moveTo(r * 0.85, r * 0.55);
  ctx.quadraticCurveTo(r * 0.95, -r * 0.15, r * 0.35, r * 0.15);
  ctx.quadraticCurveTo(r * 0.75, r * 0.85, r * 0.85, r * 0.55);
  ctx.closePath();
}

function crownPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.95, r * 0.45);
  ctx.lineTo(-r * 0.95, -r * 0.05);
  ctx.lineTo(-r * 0.45, r * 0.15);
  ctx.lineTo(0, -r * 0.85);
  ctx.lineTo(r * 0.45, r * 0.15);
  ctx.lineTo(r * 0.95, -r * 0.05);
  ctx.lineTo(r * 0.95, r * 0.45);
  ctx.closePath();
}

function keyPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(-r * 0.45, 0, r * 0.42, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.05, -r * 0.12);
  ctx.lineTo(r * 0.95, -r * 0.12);
  ctx.lineTo(r * 0.95, r * 0.12);
  ctx.lineTo(r * 0.55, r * 0.12);
  ctx.lineTo(r * 0.55, r * 0.42);
  ctx.lineTo(r * 0.32, r * 0.42);
  ctx.lineTo(r * 0.32, r * 0.12);
  ctx.lineTo(-r * 0.05, r * 0.12);
  ctx.closePath();
}

function ringPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, 0, r * 0.92, 0, Math.PI * 2);
  ctx.arc(0, 0, r * 0.52, 0, Math.PI * 2, true);
}

function envelopePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.95, -r * 0.55, r * 1.9, r * 1.15);
  ctx.moveTo(-r * 0.95, -r * 0.55);
  ctx.lineTo(0, r * 0.15);
  ctx.lineTo(r * 0.95, -r * 0.55);
  ctx.closePath();
}

function potionPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.22, -r);
  ctx.lineTo(r * 0.22, -r);
  ctx.lineTo(r * 0.22, -r * 0.45);
  ctx.quadraticCurveTo(r * 0.85, -r * 0.15, r * 0.72, r * 0.85);
  ctx.lineTo(-r * 0.72, r * 0.85);
  ctx.quadraticCurveTo(-r * 0.85, -r * 0.15, -r * 0.22, -r * 0.45);
  ctx.closePath();
}

function housePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, -r);
  ctx.lineTo(r * 0.95, -r * 0.15);
  ctx.lineTo(r * 0.7, -r * 0.15);
  ctx.lineTo(r * 0.7, r * 0.9);
  ctx.lineTo(-r * 0.7, r * 0.9);
  ctx.lineTo(-r * 0.7, -r * 0.15);
  ctx.lineTo(-r * 0.95, -r * 0.15);
  ctx.closePath();
}

function drawKind(ctx: CanvasRenderingContext2D, kind: Kind, r: number) {
  ctx.beginPath();
  switch (kind) {
    case "star":
    case "starfish":
      starPath(ctx, r, kind === "starfish" ? 5 : 5, kind === "starfish" ? 0.42 : 0.4);
      break;
    case "heart":
      heartPath(ctx, r);
      break;
    case "moon":
      moonPath(ctx, r);
      break;
    case "figure":
      figurePath(ctx, r);
      break;
    case "fish":
      fishPath(ctx, r);
      break;
    case "anchor":
      anchorPath(ctx, r);
      break;
    case "wave":
      wavePath(ctx, r);
      break;
    case "shell":
      shellPath(ctx, r);
      break;
    case "boat":
      boatPath(ctx, r);
      break;
    case "tail":
      tailPath(ctx, r);
      break;
    case "swallow":
      swallowPath(ctx, r);
      break;
    case "elephant":
      elephantPath(ctx, r);
      break;
    case "tent":
      tentPath(ctx, r);
      break;
    case "ball":
      ballPath(ctx, r);
      break;
    case "bow":
      bowPath(ctx, r);
      break;
    case "horse":
      horsePath(ctx, r);
      break;
    case "balloon":
      balloonPath(ctx, r);
      break;
    case "ticket":
      ticketPath(ctx, r);
      break;
    case "pear":
      pearPath(ctx, r);
      break;
    case "lemon":
      lemonPath(ctx, r);
      break;
    case "cherry":
      cherryPath(ctx, r);
      break;
    case "leaf":
      leafPath(ctx, r);
      break;
    case "mushroom":
      mushroomPath(ctx, r);
      break;
    case "flower":
      flowerPath(ctx, r);
      break;
    case "sun":
      sunPath(ctx, r);
      break;
    case "cloud":
      cloudPath(ctx, r);
      break;
    case "bolt":
      boltPath(ctx, r);
      break;
    case "umbrella":
      umbrellaPath(ctx, r);
      break;
    case "bird":
      birdPath(ctx, r);
      break;
    case "tree":
      treePath(ctx, r);
      break;
    case "deer":
      deerPath(ctx, r);
      break;
    case "fox":
      foxPath(ctx, r);
      break;
    case "owl":
      owlPath(ctx, r);
      break;
    case "acorn":
      acornPath(ctx, r);
      break;
    case "cone":
      conePath(ctx, r);
      break;
    case "mountain":
      mountainPath(ctx, r);
      break;
    case "drop":
      dropPath(ctx, r);
      break;
    case "moth":
      mothPath(ctx, r);
      break;
    case "wingfig":
      wingfigPath(ctx, r);
      break;
    case "swan":
      swanPath(ctx, r);
      break;
    case "cat":
      catPath(ctx, r);
      break;
    case "crown":
      crownPath(ctx, r);
      break;
    case "key":
      keyPath(ctx, r);
      break;
    case "ring":
      ringPath(ctx, r);
      break;
    case "envelope":
      envelopePath(ctx, r);
      break;
    case "potion":
      potionPath(ctx, r);
      break;
    default:
      housePath(ctx, r);
      break;
  }
}

function drawSilhouette(ctx: CanvasRenderingContext2D, c: Charge, r: number) {
  const path = () => drawKind(ctx, c.kind, r);
  if (c.mirror) {
    ctx.save();
    ctx.scale(-1, 1);
    fillPattern(ctx, path, c, r);
    ctx.restore();
    return;
  }
  fillPattern(ctx, path, c, r);
}

function makeStamp(c: Charge): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = STAMP;
  canvas.height = STAMP;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;
  ctx.translate(STAMP / 2, STAMP / 2);
  drawSilhouette(ctx, c, STAMP * 0.38);
  return canvas;
}

export class HeraldryField {
  private canvas = typeof document !== "undefined" ? document.createElement("canvas") : (null as unknown as HTMLCanvasElement);
  private stamps = new Map<string, HTMLCanvasElement>();
  private particles: Particle[] = [];
  private builtSeed = -1;
  private builtInk = "";
  private builtKit: CollageKit = "sailor";

  private stamp(c: Charge): HTMLCanvasElement {
    const key = chargeKey(c);
    let g = this.stamps.get(key);
    if (!g) {
      g = makeStamp(c);
      this.stamps.set(key, g);
    }
    return g;
  }

  private ensure(seed: number, ink: string, kit: CollageKit) {
    if (this.builtSeed === seed && this.builtInk === ink && this.builtKit === kit && this.particles.length) return;
    this.particles = buildField(seed, ink, kit);
    this.stamps.clear();
    this.builtSeed = seed;
    this.builtInk = ink;
    this.builtKit = kit;
  }

  paint(opts: HeraldryPaintOpts): HTMLCanvasElement {
    const w = Math.max(16, Math.floor(opts.width));
    const h = Math.max(16, Math.floor(opts.height));
    if (!this.canvas) this.canvas = document.createElement("canvas");
    if (this.canvas.width !== w) this.canvas.width = w;
    if (this.canvas.height !== h) this.canvas.height = h;
    const ctx = this.canvas.getContext("2d", { alpha: false });
    if (!ctx) return this.canvas;

    const paper = hexOk(opts.paper, "#ffffff");
    const kit = kitFromUnknown(opts.kit);
    const ink = hexOk(opts.ink, KIT_INK[kit]);
    this.ensure(opts.seed >>> 0, ink, kit);

    ctx.fillStyle = paper;
    ctx.fillRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const locked = sceneFromGenerator(opts.generator);
    const scene = sceneAt(opts.time, opts.duration, locked);
    const audio = clamp(opts.audio, 0, 1);
    const bass = clamp(opts.bass, 0, 1);
    const t = opts.time;
    const aspect = w / Math.max(h, 1);

    let camX = t * 0.22 + Math.sin(t * 0.37) * 0.08;
    let camY = t * 0.11 + Math.cos(t * 0.29) * 0.05;
    let camZ = t * 0.55;
    if (scene === "wallpaper") {
      camX = t * (0.55 + audio * 0.45);
      camY = t * 0.28 + Math.sin(t * 0.9) * 0.03;
      camZ = 0;
    } else if (scene === "sparse") {
      camX = t * 0.28;
      camY = t * 0.12 + Math.sin(t * 0.4) * 0.03;
      camZ = t * 0.22;
    } else if (scene === "giants") {
      camX = Math.sin(t * 0.18) * 0.08;
      camY = t * 0.035 + bass * 0.01;
      camZ = 0;
    } else {
      camX = Math.sin(t * 0.2) * 0.04;
      camY = t * (0.22 + audio * 0.18);
      camZ = 0;
    }

    const minZ = scene === "wallpaper" ? 0.62 : 0.7;
    const maxZ = scene === "wallpaper" ? 2.4 : 2.0;
    const confetti = new Set(KIT_SHOWER[kit]);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      if (scene === "giants" && i % 5 !== 0) continue;
      if (scene === "sparse" && i % 2 === 0) continue;

      let x: number;
      let y: number;
      let px: number;
      if (scene === "wallpaper") {
        x = ((p.x - camX) % 1 + 1) % 1 - 0.5;
        y = ((p.y - camY) % 1 + 1) % 1 - 0.5;
        px = 0.062 + p.size * 0.028 + bass * 0.01;
      } else if (scene === "sparse") {
        const z = ((p.z - camZ) % 1 + 1) % 1;
        const depth = minZ + z * (maxZ - minZ);
        if (depth < 0.55 || depth > maxZ * 0.96) continue;
        x = ((p.x - camX) % 1 + 1) % 1 - 0.5;
        y = ((p.y - camY) % 1 + 1) % 1 - 0.5;
        x = x / depth;
        y = y / depth;
        px = clamp((0.28 * p.size * (0.9 + bass * 0.12)) / depth, 0.05, 0.2);
      } else if (scene === "giants") {
        x = ((p.x + p.vx * t * 0.12 - camX) % 1 + 1) % 1 - 0.5;
        y = ((p.y + p.vy * t * 0.08 - camY) % 1 + 1) % 1 - 0.5;
        if (Math.abs(x) > 0.55 || Math.abs(y) > 0.55) continue;
        px = clamp(0.26 * p.size * (1.05 + audio * 0.06), 0.18, 0.34);
      } else {
        x = ((p.x + Math.sin(t * 0.4 + p.z * 9) * 0.02 - camX) % 1 + 1) % 1 - 0.5;
        y = ((p.y + t * (0.12 + p.vy * 0.4) - camY) % 1 + 1) % 1 - 0.5;
        px = 0.095 * p.size * (0.75 + (confetti.has(p.charge.kind) ? 0.2 : 0));
      }

      if ((scene === "wallpaper" || scene === "sparse") && BODIES.has(p.charge.kind)) px *= 0.78;

      const dim = px * Math.min(w, h);
      if (dim < 4) continue;
      const rot = p.rot + p.vr * t * (scene === "giants" ? 0.35 : scene === "shower" ? 0.15 : 0.08);
      const stamp = this.stamp(p.charge);
      const wrap = scene === "wallpaper" || scene === "shower" ? [-1, 0, 1] : [0];
      for (const ox of wrap) {
        for (const oy of wrap) {
          const sx = (0.5 + x + ox) * w;
          const sy = (0.5 + (y + oy) / aspect) * h;
          if (sx < -dim || sy < -dim || sx > w + dim || sy > h + dim) continue;
          ctx.save();
          ctx.translate(sx, sy);
          ctx.rotate(rot);
          ctx.drawImage(stamp, -dim / 2, -dim / 2, dim, dim);
          ctx.restore();
        }
      }
    }

    return this.canvas;
  }
}

export function paperForSeed(seed: number): string {
  const rng = mulberry32((seed + 17) >>> 0);
  if (rng() < 0.82) return "#ffffff";
  return pick(rng, ["#fff8ee", "#f6f1e4", "#ffffff", "#f3f6ff"]);
}

export function inkForSeed(seed: number, fallback = "#c41e3a"): string {
  const rng = mulberry32((seed + 91) >>> 0);
  return rng() < 0.35 ? fallback : pick(rng, TINCTURES);
}

export function inkForKit(kit: CollageKit): string {
  return KIT_INK[kit];
}

export function kitForSeed(seed: number): CollageKit {
  return COLLAGE_KITS[(seed >>> 0) % COLLAGE_KITS.length];
}
