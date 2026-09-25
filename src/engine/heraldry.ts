import { clamp, mulberry32 } from "../core/random";
import type { GeneratorType } from "../core/types";

export const HERALDRY_ROOMS: GeneratorType[] = ["heraldry", "wallpaper", "giants", "shower"];
export const COLLAGE_KITS = ["sailor", "circus", "fruit", "nature", "love", "space", "sweet", "music"] as const;
export type CollageKit = (typeof COLLAGE_KITS)[number];

export const COLLAGE_MOVES = [
  "rush",
  "tunnel",
  "lattice",
  "bloom",
  "spiral",
  "lanes",
  "pulse",
  "kaleido",
  "vortex",
  "ripple",
  "orbit",
  "helix",
  "weave",
  "twist",
  "burst",
  "echo",
  "prism",
] as const;
export type CollageMove = (typeof COLLAGE_MOVES)[number];
export type HeraldryScene = CollageMove | "tour";

export const MOVE_LABEL: Record<CollageMove, string> = {
  rush: "RUSH",
  tunnel: "TUNNEL",
  lattice: "LATTICE",
  bloom: "BLOOM",
  spiral: "SPIRAL",
  lanes: "LANES",
  pulse: "PULSE",
  kaleido: "KALEIDO",
  vortex: "VORTEX",
  ripple: "RIPPLE",
  orbit: "ORBIT",
  helix: "HELIX",
  weave: "WEAVE",
  twist: "TWIST",
  burst: "BURST",
  echo: "ECHO",
  prism: "PRISM",
};

export const COLLAGE_PAPERS = [
  "flat",
  "notebook",
  "graph",
  "legal",
  "marble",
  "dots",
  "kraft",
  "chalk",
  "folder",
  "sticky",
  "doodle",
] as const;
export type CollagePaper = (typeof COLLAGE_PAPERS)[number];

export const PAPER_LABEL: Record<CollagePaper, string> = {
  flat: "FLAT",
  notebook: "NOTE",
  graph: "GRAPH",
  legal: "LEGAL",
  marble: "MARBLE",
  dots: "DOTS",
  kraft: "KRAFT",
  chalk: "CHALK",
  folder: "FOLDER",
  sticky: "STICKY",
  doodle: "DOODLE",
};

export function paperFromUnknown(value?: string | null): CollagePaper {
  return COLLAGE_PAPERS.includes(value as CollagePaper) ? (value as CollagePaper) : "flat";
}

export function paperStyleForSeed(seed: number): CollagePaper {
  return COLLAGE_PAPERS[(seed >>> 0) % COLLAGE_PAPERS.length];
}

export function isHeraldry(kind?: string | null): boolean {
  return kind === "heraldry" || kind === "wallpaper" || kind === "giants" || kind === "shower";
}

export function kitFromUnknown(value?: string | null): CollageKit {
  return COLLAGE_KITS.includes(value as CollageKit) ? (value as CollageKit) : "sailor";
}

export function moveFromUnknown(value?: string | null): CollageMove {
  return COLLAGE_MOVES.includes(value as CollageMove) ? (value as CollageMove) : "rush";
}

export function moveForSeed(seed: number): CollageMove {
  return COLLAGE_MOVES[(seed >>> 0) % COLLAGE_MOVES.length];
}

export function generatorForMove(move: CollageMove): GeneratorType {
  if (move === "rush") return "wallpaper";
  if (move === "tunnel") return "giants";
  if (move === "lattice") return "shower";
  return "heraldry";
}

export function sceneFromGenerator(kind?: string | null, move?: string | null): HeraldryScene {
  if (move && COLLAGE_MOVES.includes(move as CollageMove)) return move as CollageMove;
  if (kind === "wallpaper") return "rush";
  if (kind === "giants") return "tunnel";
  if (kind === "shower") return "lattice";
  return "rush";
}

/** A clip keeps one move. Tour is an alias for rush (the toward-camera fly). */
export function sceneAt(_time: number, _duration: number, locked: HeraldryScene): HeraldryScene {
  return locked === "tour" ? "rush" : locked;
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
  space: "#7ad8ff",
  sweet: "#ff6aa8",
  music: "#ffd86a",
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
  | "house"
  | "rocket"
  | "planet"
  | "saturn"
  | "ufo"
  | "comet"
  | "satellite"
  | "lolly"
  | "coneice"
  | "cupcake"
  | "donut"
  | "candy"
  | "note"
  | "vinyl"
  | "headphone"
  | "mic"
  | "speaker";

type Pattern = "plain" | "polka" | "hoop" | "half" | "bar";

const KIT_PAPER: Record<CollageKit, Kind[]> = {
  sailor: ["fish", "anchor", "wave", "shell", "starfish", "boat", "tail", "swallow", "star", "moon"],
  circus: ["elephant", "tent", "ball", "bow", "horse", "balloon", "ticket", "moon", "star", "figure"],
  fruit: ["pear", "lemon", "cherry", "leaf", "mushroom", "flower", "sun", "cloud", "bolt", "umbrella", "bird"],
  nature: ["tree", "deer", "fox", "owl", "mushroom", "leaf", "acorn", "cone", "mountain", "drop", "moth", "bird"],
  love: ["heart", "wingfig", "swan", "cat", "crown", "moon", "star", "key", "ring", "envelope", "bow", "potion", "house"],
  space: ["rocket", "planet", "saturn", "ufo", "comet", "satellite", "star", "moon"],
  sweet: ["lolly", "coneice", "cupcake", "donut", "candy", "cherry", "heart"],
  music: ["note", "vinyl", "headphone", "mic", "speaker", "star", "heart"],
};

const KIT_GIANTS: Record<CollageKit, Kind[]> = {
  sailor: ["fish", "boat", "tail", "swallow", "anchor"],
  circus: ["elephant", "tent", "horse", "balloon", "figure"],
  fruit: ["pear", "lemon", "mushroom", "sun", "umbrella"],
  nature: ["tree", "deer", "owl", "fox", "mountain"],
  love: ["heart", "wingfig", "swan", "cat", "house"],
  space: ["rocket", "saturn", "ufo", "planet", "comet"],
  sweet: ["lolly", "cupcake", "donut", "coneice", "candy"],
  music: ["vinyl", "headphone", "speaker", "note", "mic"],
};

const KIT_SHOWER: Record<CollageKit, Kind[]> = {
  sailor: ["starfish", "shell", "star", "fish", "anchor"],
  circus: ["ball", "star", "balloon", "bow", "ticket"],
  fruit: ["cherry", "leaf", "star", "drop", "lemon"],
  nature: ["leaf", "acorn", "drop", "moth", "bird"],
  love: ["heart", "star", "key", "moon", "ring"],
  space: ["star", "moon", "comet", "satellite", "planet"],
  sweet: ["candy", "heart", "lolly", "cherry", "donut"],
  music: ["note", "star", "heart", "vinyl", "mic"],
};

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
  move?: string | null;
  paperStyle?: string | null;
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

export function kindsForKit(kit: CollageKit, scene: HeraldryScene = "rush"): Kind[] {
  if (scene === "tunnel") return KIT_GIANTS[kit];
  if (scene === "lattice") return KIT_SHOWER[kit];
  return KIT_PAPER[kit];
}

function makeCharge(rng: () => number, scene: HeraldryScene, bias: string, kit: CollageKit): Charge {
  const pool = kindsForKit(kit, scene === "bloom" ? "rush" : scene);
  let kind = pick(rng, pool);
  if (scene === "lattice" && rng() < 0.4) kind = pick(rng, KIT_SHOWER[kit]);
  if (scene === "tunnel" && rng() < 0.28) kind = pick(rng, KIT_GIANTS[kit]);
  const a = mixInk(rng, bias);
  let b = mixInk(rng, bias);
  if (b === a) b = pick(rng, TINCTURES);
  return {
    kind,
    pattern: rng() < 0.58 ? "plain" : pick(rng, ["polka", "hoop", "half", "bar"] as Pattern[]),
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
    const sceneHint: HeraldryScene = i < 70 ? "lattice" : i < 130 ? "tunnel" : "rush";
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

function luma(hex: string): number {
  const n = parseInt(hex.slice(1), 16);
  if (Number.isNaN(n)) return 0.5;
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (0.22 * r + 0.7 * g + 0.08 * b) / 255;
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
  if (c.pattern === "polka") {
    const cell = r * 0.38;
    for (let y = -4; y < 5; y++) {
      for (let x = -4; x < 5; x++) {
        ctx.beginPath();
        ctx.arc((x + 0.5 * (y & 1)) * cell, y * cell, cell * 0.22, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  } else if (c.pattern === "hoop") {
    ctx.strokeStyle = b;
    ctx.lineWidth = r * 0.14;
    for (let i = 1; i <= 3; i++) {
      ctx.beginPath();
      ctx.arc(0, 0, r * (0.28 * i), 0, Math.PI * 2);
      ctx.stroke();
    }
  } else if (c.pattern === "half") {
    ctx.fillRect(0, -s, s, s * 2);
  } else if (c.pattern === "bar") {
    ctx.fillRect(-s, -r * 0.18, s * 2, r * 0.36);
  }
  ctx.restore();
  ctx.save();
  ctx.beginPath();
  path();
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = Math.max(1.6, r * 0.07);
  ctx.strokeStyle = luma(c.a) > 0.55 ? "#141414" : "#f6f1e6";
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

function rocketPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, -r);
  ctx.lineTo(r * 0.32, -r * 0.15);
  ctx.lineTo(r * 0.32, r * 0.45);
  ctx.lineTo(r * 0.55, r * 0.82);
  ctx.lineTo(r * 0.18, r * 0.55);
  ctx.lineTo(0, r * 0.95);
  ctx.lineTo(-r * 0.18, r * 0.55);
  ctx.lineTo(-r * 0.55, r * 0.82);
  ctx.lineTo(-r * 0.32, r * 0.45);
  ctx.lineTo(-r * 0.32, -r * 0.15);
  ctx.closePath();
}

function planetPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, 0, r * 0.72, 0, Math.PI * 2);
}

function saturnPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, 0, r * 0.95, r * 0.22, -0.25, 0, Math.PI * 2);
  ctx.moveTo(r * 0.55, 0);
  ctx.arc(0, 0, r * 0.48, 0, Math.PI * 2);
}

function ufoPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, r * 0.12, r * 0.9, r * 0.28, 0, 0, Math.PI * 2);
  ctx.moveTo(r * 0.38, -r * 0.08);
  ctx.ellipse(0, -r * 0.18, r * 0.4, r * 0.32, 0, Math.PI, 0, true);
}

function cometPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(r * 0.35, -r * 0.28, r * 0.32, 0, Math.PI * 2);
  ctx.moveTo(r * 0.1, -r * 0.1);
  ctx.lineTo(-r * 0.9, r * 0.75);
  ctx.lineTo(-r * 0.15, r * 0.05);
  ctx.closePath();
}

function satellitePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.22, -r * 0.22, r * 0.44, r * 0.44);
  ctx.moveTo(-r * 0.9, -r * 0.12);
  ctx.rect(-r * 0.9, -r * 0.12, r * 0.62, r * 0.24);
  ctx.moveTo(r * 0.28, -r * 0.12);
  ctx.rect(r * 0.28, -r * 0.12, r * 0.62, r * 0.24);
}

function lollyPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, -r * 0.28, r * 0.52, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.08, r * 0.2);
  ctx.rect(-r * 0.08, r * 0.18, r * 0.16, r * 0.72);
}

function coneicePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, -r * 0.35, r * 0.42, Math.PI, 0);
  ctx.lineTo(r * 0.38, -r * 0.15);
  ctx.lineTo(0, r * 0.95);
  ctx.lineTo(-r * 0.38, -r * 0.15);
  ctx.closePath();
}

function cupcakePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.55, r * 0.05);
  ctx.lineTo(-r * 0.38, r * 0.85);
  ctx.lineTo(r * 0.38, r * 0.85);
  ctx.lineTo(r * 0.55, r * 0.05);
  ctx.closePath();
  ctx.moveTo(r * 0.55, r * 0.02);
  ctx.arc(0, -r * 0.05, r * 0.55, 0.15, Math.PI - 0.15, true);
}

function donutPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, 0, r * 0.78, 0, Math.PI * 2);
  ctx.moveTo(r * 0.28, 0);
  ctx.arc(0, 0, r * 0.28, 0, Math.PI * 2, true);
}

function candyPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, 0, r * 0.38, r * 0.48, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.38, -r * 0.15);
  ctx.lineTo(-r * 0.9, -r * 0.55);
  ctx.lineTo(-r * 0.9, r * 0.55);
  ctx.lineTo(-r * 0.38, r * 0.15);
  ctx.moveTo(r * 0.38, -r * 0.15);
  ctx.lineTo(r * 0.9, -r * 0.55);
  ctx.lineTo(r * 0.9, r * 0.55);
  ctx.lineTo(r * 0.38, r * 0.15);
}

function notePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(-r * 0.28, r * 0.48, r * 0.32, r * 0.22, -0.3, 0, Math.PI * 2);
  ctx.moveTo(r * 0.02, r * 0.42);
  ctx.rect(0.0, -r * 0.75, r * 0.12, r * 1.2);
  ctx.moveTo(r * 0.12, -r * 0.75);
  ctx.bezierCurveTo(r * 0.7, -r * 0.95, r * 0.75, -r * 0.15, r * 0.12, -r * 0.08);
  ctx.lineTo(r * 0.12, -r * 0.75);
}

function vinylPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, 0, r * 0.82, 0, Math.PI * 2);
  ctx.moveTo(r * 0.18, 0);
  ctx.arc(0, 0, r * 0.18, 0, Math.PI * 2, true);
}

function headphonePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, -r * 0.05, r * 0.7, Math.PI, 0);
  ctx.moveTo(-r * 0.78, -r * 0.05);
  ctx.rect(-r * 0.92, -r * 0.12, r * 0.32, r * 0.7);
  ctx.moveTo(r * 0.6, -r * 0.05);
  ctx.rect(r * 0.6, -r * 0.12, r * 0.32, r * 0.7);
}

function micPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, -r * 0.35, r * 0.32, r * 0.48, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.1, r * 0.12);
  ctx.rect(-r * 0.1, r * 0.1, r * 0.2, r * 0.55);
  ctx.moveTo(-r * 0.32, r * 0.65);
  ctx.rect(-r * 0.32, r * 0.65, r * 0.64, r * 0.16);
}

function speakerPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.55, -r * 0.85, r * 1.1, r * 1.7);
  ctx.moveTo(r * 0.32, -r * 0.28);
  ctx.arc(0, -r * 0.28, r * 0.32, 0, Math.PI * 2);
  ctx.moveTo(r * 0.22, r * 0.42);
  ctx.arc(0, r * 0.42, r * 0.22, 0, Math.PI * 2);
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
    case "rocket":
      rocketPath(ctx, r);
      break;
    case "planet":
      planetPath(ctx, r);
      break;
    case "saturn":
      saturnPath(ctx, r);
      break;
    case "ufo":
      ufoPath(ctx, r);
      break;
    case "comet":
      cometPath(ctx, r);
      break;
    case "satellite":
      satellitePath(ctx, r);
      break;
    case "lolly":
      lollyPath(ctx, r);
      break;
    case "coneice":
      coneicePath(ctx, r);
      break;
    case "cupcake":
      cupcakePath(ctx, r);
      break;
    case "donut":
      donutPath(ctx, r);
      break;
    case "candy":
      candyPath(ctx, r);
      break;
    case "note":
      notePath(ctx, r);
      break;
    case "vinyl":
      vinylPath(ctx, r);
      break;
    case "headphone":
      headphonePath(ctx, r);
      break;
    case "mic":
      micPath(ctx, r);
      break;
    case "speaker":
      speakerPath(ctx, r);
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

    const kit = kitFromUnknown(opts.kit);
    const paper = hexOk(opts.paper, paperForKit(kit, opts.seed));
    const ink = hexOk(opts.ink, KIT_INK[kit]);
    this.ensure(opts.seed >>> 0, ink, kit);

    const style = paperFromUnknown(opts.paperStyle);
    paintGround(ctx, w, h, paper, kit, opts.time, opts.seed, style);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const scene = sceneFromGenerator(opts.generator, opts.move);
    const audio = clamp(opts.audio, 0, 1);
    const bass = clamp(opts.bass, 0, 1);
    const t = opts.time;
    const aspect = w / Math.max(h, 1);
    const count =
      scene === "lattice"
        ? 48
        : scene === "kaleido"
          ? 36
          : scene === "echo"
            ? 70
            : scene === "prism"
              ? 78
              : scene === "lanes"
                ? 90
                : scene === "pulse"
                  ? 72
                  : scene === "weave"
                    ? 110
                    : scene === "helix"
                      ? 130
                      : scene === "tunnel"
                        ? 120
                        : scene === "bloom" || scene === "burst"
                          ? 140
                          : this.particles.length;
    const folds = scene === "kaleido" ? 6 : 1;
    const echoes = scene === "echo" ? 3 : 1;
    const prisms = scene === "prism" ? 3 : 1;
    const handPaper = style === "notebook" || style === "legal" || style === "doodle" || style === "sticky" || style === "folder";

    for (let i = 0; i < count; i++) {
      const p = this.particles[i];
      const stamp = this.stamp(p.charge);
      for (let e = 0; e < echoes; e++) {
        const pose = poseParticle(p, i, scene, t - e * 0.16, audio, bass);
        if (!pose) continue;
        const dim = pose.px * Math.min(w, h);
        if (dim < 5) continue;
        const sx = (0.5 + pose.x) * w;
        const sy = (0.5 + pose.y / aspect) * h;
        const wobble = handPaper ? Math.sin(t * 2.1 + i * 0.7) * 0.05 : 0;
        for (let k = 0; k < folds; k++) {
          for (let pr = 0; pr < prisms; pr++) {
            ctx.save();
            if (folds > 1) {
              ctx.translate(w * 0.5, h * 0.5);
              ctx.rotate((k * Math.PI * 2) / folds);
              ctx.translate(-w * 0.5, -h * 0.5);
            }
            const ox = prisms > 1 ? (pr - 1) * dim * 0.09 : 0;
            const oy = prisms > 1 ? (pr === 2 ? dim * 0.06 : pr === 0 ? -dim * 0.03 : 0) : 0;
            if (sx + ox < -dim || sy + oy < -dim || sx + ox > w + dim || sy + oy > h + dim) {
              ctx.restore();
              continue;
            }
            if (prisms > 1) ctx.filter = `hue-rotate(${pr * 120}deg) saturate(1.35)`;
            ctx.globalAlpha = pose.alpha * (echoes > 1 ? 1 - e * 0.32 : prisms > 1 ? 0.72 : 1);
            ctx.translate(sx + ox, sy + oy);
            ctx.rotate(pose.rot + wobble + (prisms > 1 ? pr * 0.1 : 0));
            ctx.drawImage(stamp, -dim / 2, -dim / 2, dim, dim);
            ctx.restore();
          }
        }
      }
    }
    if (style !== "flat") paintGrain(ctx, w, h, opts.seed, style);

    return this.canvas;
  }
}

function wrap01(v: number): number {
  return ((v % 1) + 1) % 1;
}

function poseParticle(
  p: Particle,
  i: number,
  scene: HeraldryScene,
  t: number,
  audio: number,
  bass: number,
): { x: number; y: number; px: number; rot: number; alpha: number } | null {
  if (scene === "tunnel") {
    const z = wrap01(p.z - t * (0.4 + audio * 0.5 + bass * 0.22));
    const depth = 0.3 + z * 2.45;
    if (depth < 0.34 || depth > 2.65) return null;
    const ang = p.x * Math.PI * 2 + t * 0.14 + p.rot * 0.3;
    const rad = (0.16 + p.y * 0.58) / depth;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad,
      px: clamp((0.2 * p.size * (0.95 + bass * 0.15)) / depth, 0.04, 0.5),
      rot: p.rot + p.vr * t * 0.2,
      alpha: clamp((2.65 - depth) / 0.28, 0, 1) * clamp((depth - 0.3) / 0.1, 0, 1),
    };
  }
  if (scene === "lattice") {
    const cols = 8;
    const rows = 6;
    const gx = ((i % cols) + 0.5) / cols - 0.5;
    const gy = (Math.floor(i / cols) + 0.5) / rows - 0.5;
    const z = wrap01(t * (0.2 + audio * 0.12) + p.z * 0.02);
    const depth = 0.32 + (1 - z) * 2.2;
    return {
      x: gx / (depth * 0.62),
      y: gy / (depth * 0.62),
      px: clamp((0.16 * p.size) / depth, 0.05, 0.42),
      rot: p.rot * 0.25,
      alpha: clamp((2.4 - depth) / 0.25, 0, 1),
    };
  }
  if (scene === "bloom") {
    const u = wrap01(p.z - t * (0.34 + bass * 0.28));
    const grow = u * u;
    const ang = p.x * Math.PI * 2 + t * 0.1 + p.rot;
    return {
      x: Math.cos(ang) * grow * 0.92,
      y: Math.sin(ang) * grow * 0.92,
      px: clamp(0.05 + grow * 0.32 * p.size * (1 + audio * 0.12), 0.04, 0.48),
      rot: p.rot + u * 0.4,
      alpha: clamp(1.05 - grow, 0, 1) * clamp(u / 0.08, 0, 1),
    };
  }
  if (scene === "spiral") {
    const z = wrap01(p.z - t * (0.4 + audio * 0.48 + bass * 0.2));
    const depth = 0.28 + z * 2.6;
    if (depth < 0.32 || depth > 2.75) return null;
    const ang = p.x * Math.PI * 2 + 2.15 / depth + t * 0.1;
    const rad = (0.1 + p.y * 0.38) / depth;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad,
      px: clamp((0.2 * p.size * (0.94 + bass * 0.14)) / depth, 0.04, 0.52),
      rot: p.rot + ang * 0.15,
      alpha: clamp((2.75 - depth) / 0.28, 0, 1) * clamp((depth - 0.28) / 0.1, 0, 1),
    };
  }
  if (scene === "lanes") {
    const lanes = 6;
    const lane = (Math.floor(p.x * lanes) + 0.5) / lanes - 0.5;
    const z = wrap01(p.z - t * (0.44 + audio * 0.42 + bass * 0.18) + p.y * 0.04);
    const depth = 0.28 + z * 2.55;
    if (depth < 0.32 || depth > 2.7) return null;
    return {
      x: lane / (depth * 0.82),
      y: (wrap01(p.y) - 0.5) / depth,
      px: clamp((0.2 * p.size * (0.95 + bass * 0.12)) / depth, 0.045, 0.48),
      rot: p.rot * 0.35,
      alpha: clamp((2.7 - depth) / 0.26, 0, 1) * clamp((depth - 0.28) / 0.1, 0, 1),
    };
  }
  if (scene === "pulse") {
    const z = wrap01(t * (0.17 + audio * 0.1 + bass * 0.06));
    const depth = 0.4 + (1 - z) * 1.95;
    return {
      x: (p.x - 0.5) / (depth * 0.68),
      y: (p.y - 0.5) / (depth * 0.68),
      px: clamp((0.15 * p.size) / depth, 0.05, 0.4),
      rot: p.rot * 0.2,
      alpha: clamp((2.3 - depth) / 0.22, 0, 1),
    };
  }
  if (scene === "kaleido") {
    const z = wrap01(p.z - t * (0.38 + audio * 0.4 + bass * 0.16));
    const depth = 0.3 + z * 2.35;
    if (depth < 0.34 || depth > 2.55) return null;
    const ang = p.x * (Math.PI / 3);
    const rad = (0.08 + p.y * 0.55) / depth;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad,
      px: clamp((0.18 * p.size) / depth, 0.04, 0.46),
      rot: p.rot + t * 0.2,
      alpha: clamp((2.55 - depth) / 0.24, 0, 1) * clamp((depth - 0.3) / 0.1, 0, 1),
    };
  }
  if (scene === "vortex") {
    const z = wrap01(p.z - t * (0.5 + audio * 0.55 + bass * 0.24));
    const depth = 0.24 + z * 2.75;
    if (depth < 0.28 || depth > 2.9) return null;
    const spin = t * (0.8 + (2.2 / depth)) + p.x * Math.PI * 2;
    const rad = (0.06 + p.y * 0.5) / (depth * depth * 0.55 + 0.35);
    return {
      x: Math.cos(spin) * rad,
      y: Math.sin(spin) * rad * 0.86,
      px: clamp((0.26 * p.size * (0.9 + bass * 0.2)) / depth, 0.04, 0.64),
      rot: spin + p.rot,
      alpha: clamp((2.9 - depth) / 0.3, 0, 1) * clamp((depth - 0.24) / 0.1, 0, 1),
    };
  }
  if (scene === "ripple") {
    const z = wrap01(p.z - t * (0.4 + audio * 0.42 + bass * 0.18));
    const depth = 0.28 + z * 2.55;
    if (depth < 0.32 || depth > 2.7) return null;
    let x = (wrap01(p.x) - 0.5) / depth;
    let y = (wrap01(p.y) - 0.5) / depth;
    const rad = Math.hypot(x, y) + 0.0001;
    const wave = Math.sin(rad * 16 - t * 6.2 + bass * 2) * (0.07 / depth);
    x += (x / rad) * wave;
    y += (y / rad) * wave;
    return {
      x,
      y,
      px: clamp((0.22 * p.size) / depth, 0.04, 0.5),
      rot: p.rot + wave * 2,
      alpha: clamp((2.7 - depth) / 0.26, 0, 1) * clamp((depth - 0.28) / 0.1, 0, 1),
    };
  }
  if (scene === "orbit") {
    const z = wrap01(p.z - t * (0.36 + audio * 0.4 + bass * 0.16));
    const depth = 0.3 + z * 2.4;
    if (depth < 0.34 || depth > 2.6) return null;
    const ang = t * (1.15 + (1.4 / depth)) + p.x * Math.PI * 2;
    const rad = (0.18 + p.y * 0.42) / depth;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad,
      px: clamp((0.2 * p.size * (0.94 + bass * 0.12)) / depth, 0.04, 0.5),
      rot: ang + p.rot,
      alpha: clamp((2.6 - depth) / 0.24, 0, 1) * clamp((depth - 0.3) / 0.1, 0, 1),
    };
  }
  if (scene === "helix") {
    const z = wrap01(p.z - t * (0.46 + audio * 0.5 + bass * 0.2));
    const depth = 0.26 + z * 2.7;
    if (depth < 0.3 || depth > 2.85) return null;
    const strand = i & 1 ? Math.PI : 0;
    const ang = t * (1.7 + 1.35 / depth) + p.x * Math.PI * 2 + strand;
    const rad = (0.11 + p.y * 0.26) / depth;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad * 0.92,
      px: clamp((0.22 * p.size * (0.93 + bass * 0.16)) / depth, 0.04, 0.56),
      rot: ang + p.rot,
      alpha: clamp((2.85 - depth) / 0.28, 0, 1) * clamp((depth - 0.26) / 0.1, 0, 1),
    };
  }
  if (scene === "weave") {
    const z = wrap01(p.z - t * (0.42 + audio * 0.48 + bass * 0.18));
    const depth = 0.28 + z * 2.55;
    if (depth < 0.32 || depth > 2.7) return null;
    const a = t * (1.55 + audio * 0.4) + p.x * Math.PI * 2;
    return {
      x: (Math.sin(a) * 0.46 + Math.sin(a * 0.5 + p.y) * 0.08) / depth,
      y: (Math.sin(a * 2 + p.y * Math.PI) * 0.34) / depth,
      px: clamp((0.2 * p.size * (0.94 + bass * 0.14)) / depth, 0.04, 0.5),
      rot: p.rot + a * 0.2,
      alpha: clamp((2.7 - depth) / 0.26, 0, 1) * clamp((depth - 0.28) / 0.1, 0, 1),
    };
  }
  if (scene === "twist") {
    const z = wrap01(p.z - t * (0.44 + audio * 0.5 + bass * 0.2));
    const depth = 0.26 + z * 2.7;
    if (depth < 0.3 || depth > 2.85) return null;
    const x0 = wrap01(p.x) - 0.5;
    const y0 = wrap01(p.y) - 0.5;
    const twist = 2.6 / depth + t * 0.42 + bass * 0.35;
    const c = Math.cos(twist);
    const s = Math.sin(twist);
    return {
      x: (x0 * c - y0 * s) / depth,
      y: (x0 * s + y0 * c) / depth,
      px: clamp((0.23 * p.size * (0.92 + bass * 0.16)) / depth, 0.04, 0.58),
      rot: p.rot + twist,
      alpha: clamp((2.85 - depth) / 0.28, 0, 1) * clamp((depth - 0.26) / 0.1, 0, 1),
    };
  }
  if (scene === "burst") {
    const u = wrap01(p.z - t * (0.4 + audio * 0.38 + bass * 0.28));
    const grow = Math.pow(u, 0.62);
    const ang = p.x * Math.PI * 2 + p.rot + t * 0.08;
    const rush = 0.08 + grow * 1.15;
    return {
      x: Math.cos(ang) * rush * 0.78,
      y: Math.sin(ang) * rush * 0.78,
      px: clamp(0.04 + grow * 0.4 * p.size * (1 + bass * 0.2), 0.04, 0.6),
      rot: p.rot + grow * 1.4,
      alpha: clamp(1.08 - grow, 0, 1) * clamp(u / 0.07, 0, 1),
    };
  }
  if (scene === "echo") {
    const z = wrap01(p.z - t * (0.4 + audio * 0.5 + bass * 0.2));
    const depth = 0.28 + z * 2.6;
    if (depth < 0.32 || depth > 2.75) return null;
    return {
      x: (wrap01(p.x + p.vx * t * 0.02) - 0.5) / depth,
      y: (wrap01(p.y + p.vy * t * 0.015) - 0.5) / depth,
      px: clamp((0.22 * p.size * (0.93 + bass * 0.15)) / depth, 0.04, 0.54),
      rot: p.rot + p.vr * t * 0.1,
      alpha: clamp((2.75 - depth) / 0.28, 0, 1) * clamp((depth - 0.28) / 0.1, 0, 1),
    };
  }
  if (scene === "prism") {
    const z = wrap01(p.z - t * (0.42 + audio * 0.48 + bass * 0.18));
    const depth = 0.28 + z * 2.55;
    if (depth < 0.32 || depth > 2.7) return null;
    const spin = t * 0.22 + p.rot * 0.4;
    const x0 = wrap01(p.x) - 0.5;
    const y0 = wrap01(p.y) - 0.5;
    const c = Math.cos(spin);
    const s = Math.sin(spin);
    return {
      x: (x0 * c - y0 * s) / depth,
      y: (x0 * s + y0 * c) / depth,
      px: clamp((0.2 * p.size * (0.94 + bass * 0.14)) / depth, 0.04, 0.52),
      rot: p.rot + spin,
      alpha: clamp((2.7 - depth) / 0.26, 0, 1) * clamp((depth - 0.28) / 0.1, 0, 1),
    };
  }
  const z = wrap01(p.z - t * (0.46 + audio * 0.58 + bass * 0.28));
  const depth = 0.26 + z * 2.7;
  if (depth < 0.3 || depth > 2.85) return null;
  const x = (wrap01(p.x + p.vx * t * 0.03) - 0.5) / depth;
  const y = (wrap01(p.y + p.vy * t * 0.02) - 0.5) / depth;
  return {
    x,
    y,
    px: clamp((0.24 * p.size * (0.92 + bass * 0.18)) / depth, 0.04, 0.62),
    rot: p.rot + p.vr * t * 0.12,
    alpha: clamp((2.85 - depth) / 0.3, 0, 1) * clamp((depth - 0.26) / 0.1, 0, 1),
  };
}

const KIT_GROUNDS: Record<CollageKit, string[]> = {
  sailor: ["#0b2a4a", "#123c5c", "#f0e2c4", "#0e4d5c", "#1a1a2e"],
  circus: ["#1a0614", "#ff2f86", "#2a0a18", "#f5d76e", "#101010"],
  fruit: ["#fff1b8", "#ff8a4c", "#7ec8e3", "#2d1b0e", "#f4efe0"],
  nature: ["#1a3324", "#3d5c3a", "#e8f0d8", "#243028", "#6b8f71"],
  love: ["#3a1028", "#f4c4d4", "#2a0818", "#8b1e4a", "#1a0a14"],
  space: ["#070b22", "#12183a", "#0a1028", "#1a1040", "#000000"],
  sweet: ["#ffe4f0", "#ff6aa8", "#fff0d8", "#3a1020", "#ffd6e8"],
  music: ["#120814", "#2a1038", "#0d0d0d", "#1a0820", "#241028"],
};

function mixHex(a: string, b: string, t: number): string {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  if (Number.isNaN(pa) || Number.isNaN(pb)) return a;
  const u = clamp(t, 0, 1);
  const ch = (shift: number) => Math.round((((pa >> shift) & 255) * (1 - u) + ((pb >> shift) & 255) * u));
  const n = (ch(16) << 16) | (ch(8) << 8) | ch(0);
  return `#${n.toString(16).padStart(6, "0")}`;
}

const TEXTURE_BASE: Record<CollagePaper, string> = {
  flat: "#ffffff",
  notebook: "#f3edd8",
  graph: "#eef6ee",
  legal: "#f6e79a",
  marble: "#121212",
  dots: "#f6f1e4",
  kraft: "#c9a36a",
  chalk: "#1c2e22",
  folder: "#e8c878",
  sticky: "#fff176",
  doodle: "#f3edd8",
};

export function paperForStyle(style: CollagePaper, kit: CollageKit, seed = 0): string {
  if (style === "flat") return paperForKit(kit, seed);
  return TEXTURE_BASE[style];
}

function paintGround(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  paper: string,
  kit: CollageKit,
  time: number,
  seed: number,
  style: CollagePaper,
) {
  if (style === "notebook" || style === "doodle") {
    ctx.fillStyle = "#f3edd8";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#d45c66";
    ctx.lineWidth = Math.max(1.5, w * 0.003);
    ctx.beginPath();
    ctx.moveTo(w * 0.12, 0);
    ctx.lineTo(w * 0.12, h);
    ctx.stroke();
    ctx.strokeStyle = "#8eb0d8";
    ctx.lineWidth = 1;
    const step = Math.max(16, h / 24);
    for (let y = step * 1.4; y < h; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.fillStyle = "#c9c2b0";
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(w * 0.045, h * (0.18 + i * 0.2), Math.max(4, w * 0.012), 0, Math.PI * 2);
      ctx.fill();
    }
    if (style === "doodle") paintDoodles(ctx, w, h, seed);
    return;
  }
  if (style === "graph") {
    ctx.fillStyle = "#eef6ee";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#b7d3c2";
    ctx.lineWidth = 1;
    const step = Math.max(14, Math.min(w, h) / 28);
    for (let x = 0; x <= w; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y <= h; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    return;
  }
  if (style === "legal") {
    ctx.fillStyle = "#f6e79a";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#c45c66";
    ctx.lineWidth = Math.max(1.5, w * 0.003);
    ctx.beginPath();
    ctx.moveTo(w * 0.1, 0);
    ctx.lineTo(w * 0.1, h);
    ctx.stroke();
    ctx.strokeStyle = "#d2b56a";
    ctx.lineWidth = 1;
    const step = Math.max(16, h / 22);
    for (let y = step; y < h; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    return;
  }
  if (style === "marble") {
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, w, h);
    const rng = mulberry32((seed + 44) >>> 0);
    for (let i = 0; i < 90; i++) {
      ctx.fillStyle = `rgba(245,245,245,${0.04 + rng() * 0.12})`;
      ctx.beginPath();
      ctx.ellipse(rng() * w, rng() * h, 8 + rng() * 70, 4 + rng() * 22, rng() * 6, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "#f4f0e4";
    ctx.fillRect(w * 0.28, h * 0.38, w * 0.44, h * 0.22);
    return;
  }
  if (style === "dots") {
    ctx.fillStyle = "#f6f1e4";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#c8c0b0";
    const step = Math.max(12, Math.min(w, h) / 32);
    for (let y = step; y < h; y += step) {
      for (let x = step; x < w; x += step) {
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    return;
  }
  if (style === "kraft") {
    ctx.fillStyle = "#c9a36a";
    ctx.fillRect(0, 0, w, h);
    const wash = ctx.createLinearGradient(0, 0, w, h);
    wash.addColorStop(0, "#d4b27a");
    wash.addColorStop(1, "#b89058");
    ctx.fillStyle = wash;
    ctx.globalAlpha = 0.45;
    ctx.fillRect(0, 0, w, h);
    ctx.globalAlpha = 1;
    const rng = mulberry32((seed + 71) >>> 0);
    ctx.strokeStyle = "rgba(90, 60, 28, 0.18)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 48; i++) {
      ctx.beginPath();
      ctx.moveTo(rng() * w, rng() * h);
      ctx.lineTo(rng() * w, rng() * h);
      ctx.stroke();
    }
    return;
  }
  if (style === "chalk") {
    ctx.fillStyle = "#1c2e22";
    ctx.fillRect(0, 0, w, h);
    const rng = mulberry32((seed + 88) >>> 0);
    ctx.fillStyle = "rgba(220, 230, 210, 0.06)";
    for (let i = 0; i < 70; i++) {
      ctx.fillRect(rng() * w, rng() * h, 8 + rng() * 40, 2 + rng() * 8);
    }
    ctx.fillStyle = "rgba(245, 245, 230, 0.16)";
    for (let i = 0; i < 160; i++) {
      ctx.fillRect(rng() * w, rng() * h, 1, 1);
    }
    ctx.strokeStyle = "rgba(230, 230, 210, 0.08)";
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.04, h * 0.05, w * 0.92, h * 0.9);
    return;
  }
  if (style === "folder") {
    ctx.fillStyle = "#e8c878";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#d4b05e";
    ctx.fillRect(w * 0.08, 0, w * 0.28, h * 0.08);
    ctx.strokeStyle = "rgba(140, 100, 40, 0.28)";
    ctx.lineWidth = Math.max(1.5, w * 0.004);
    ctx.beginPath();
    ctx.moveTo(w * 0.5, 0);
    ctx.lineTo(w * 0.5, h);
    ctx.stroke();
    ctx.fillStyle = "rgba(90, 60, 20, 0.08)";
    ctx.fillRect(0, 0, w * 0.04, h);
    ctx.fillRect(w * 0.96, 0, w * 0.04, h);
    return;
  }
  if (style === "sticky") {
    ctx.fillStyle = "#c8b84a";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#fff176";
    ctx.fillRect(0, 0, w * 0.97, h * 0.96);
    const hi = ctx.createLinearGradient(0, 0, 0, h * 0.18);
    hi.addColorStop(0, "rgba(255, 255, 220, 0.7)");
    hi.addColorStop(1, "rgba(255, 241, 118, 0)");
    ctx.fillStyle = hi;
    ctx.fillRect(0, 0, w * 0.97, h * 0.18);
    ctx.fillStyle = "#efe04e";
    ctx.beginPath();
    ctx.moveTo(w * 0.86, h * 0.96);
    ctx.lineTo(w * 0.97, h * 0.96);
    ctx.lineTo(w * 0.97, h * 0.82);
    ctx.closePath();
    ctx.fill();
    return;
  }
  ctx.fillStyle = paper;
  ctx.fillRect(0, 0, w, h);
  const wash = pick(mulberry32((seed + 4) >>> 0), KIT_GROUNDS[kit]);
  const cx = w * (0.5 + Math.sin(time * 0.17) * 0.08);
  const cy = h * (0.46 + Math.cos(time * 0.13) * 0.06);
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.72);
  g.addColorStop(0, mixHex(paper, wash, 0.45));
  g.addColorStop(1, paper);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
}

function paintDoodles(ctx: CanvasRenderingContext2D, w: number, h: number, seed: number) {
  const rng = mulberry32((seed + 404) >>> 0);
  ctx.save();
  ctx.strokeStyle = "rgba(70, 64, 56, 0.38)";
  ctx.fillStyle = "rgba(70, 64, 56, 0.22)";
  ctx.lineWidth = Math.max(1.1, w * 0.0018);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  const margin = w * 0.11;
  for (let i = 0; i < 14; i++) {
    const inMargin = i < 9;
    const x = inMargin ? rng() * margin * 0.82 + w * 0.01 : rng() * w * 0.86 + w * 0.14;
    const y = rng() * h * 0.9 + h * 0.04;
    const s = (inMargin ? 10 : 16) + rng() * 18;
    const kind = Math.floor(rng() * 6);
    ctx.beginPath();
    if (kind === 0) {
      for (let k = 0; k < 10; k++) {
        const rad = k % 2 === 0 ? s : s * 0.42;
        const a = (k * Math.PI) / 5 - Math.PI / 2;
        const px = x + Math.cos(a) * rad;
        const py = y + Math.sin(a) * rad;
        if (k === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
    } else if (kind === 1) {
      ctx.moveTo(x, y + s * 0.45);
      ctx.bezierCurveTo(x + s * 0.55, y - s * 0.1, x + s * 0.35, y - s * 0.55, x, y - s * 0.1);
      ctx.bezierCurveTo(x - s * 0.35, y - s * 0.55, x - s * 0.55, y - s * 0.1, x, y + s * 0.45);
      ctx.stroke();
    } else if (kind === 2) {
      ctx.moveTo(x, y);
      for (let k = 1; k < 7; k++) ctx.lineTo(x + k * s * 0.18, y + ((k & 1) ? s * 0.35 : 0));
      ctx.stroke();
    } else if (kind === 3) {
      ctx.arc(x, y, s * 0.28, 0, Math.PI * 1.7);
      ctx.moveTo(x + s * 0.22, y - s * 0.08);
      ctx.lineTo(x + s * 0.5, y - s * 0.22);
      ctx.stroke();
    } else if (kind === 4) {
      ctx.moveTo(x - s * 0.4, y);
      ctx.lineTo(x + s * 0.15, y);
      ctx.lineTo(x + s * 0.02, y - s * 0.18);
      ctx.moveTo(x + s * 0.15, y);
      ctx.lineTo(x + s * 0.02, y + s * 0.18);
      ctx.stroke();
    } else {
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x + s, y - s, x - s, y + s * 0.2, x + s * 0.2, y + s * 0.4);
      ctx.stroke();
    }
  }
  ctx.restore();
}

function paintGrain(ctx: CanvasRenderingContext2D, w: number, h: number, seed: number, style: CollagePaper) {
  const rng = mulberry32((seed + 211) >>> 0);
  const n = style === "marble" || style === "chalk" ? 80 : style === "kraft" ? 280 : 220;
  ctx.save();
  ctx.globalAlpha = style === "marble" || style === "chalk" ? 0.08 : style === "kraft" ? 0.09 : 0.055;
  ctx.fillStyle = style === "marble" || style === "chalk" ? "#ffffff" : "#2a2418";
  for (let i = 0; i < n; i++) {
    ctx.fillRect(rng() * w, rng() * h, 1 + rng() * 1.5, 1 + rng() * 1.5);
  }
  ctx.restore();
}

export function paperForKit(kit: CollageKit, seed = 0): string {
  const rng = mulberry32((seed + 17) >>> 0);
  return pick(rng, KIT_GROUNDS[kit]);
}

export function paperForSeed(seed: number, kit?: CollageKit): string {
  if (kit) return paperForKit(kit, seed);
  const rng = mulberry32((seed + 17) >>> 0);
  return pick(rng, KIT_GROUNDS[COLLAGE_KITS[Math.floor(rng() * COLLAGE_KITS.length)]]);
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
