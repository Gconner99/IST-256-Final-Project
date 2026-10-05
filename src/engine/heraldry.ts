import { clamp, mulberry32 } from "../core/random";
import type { GeneratorType } from "../core/types";
import {
  agentParamsFrom,
  PatternField,
  isFieldMove,
  type AgentPose,
} from "./agentField";
import {
  isSimMove,
  simParamsFrom,
  simPose,
  stepFieldSim,
  type FieldSim,
} from "./fieldSim";
import {
  applyHuntPose,
  cameraFromUnknown,
  huntParamsFrom,
  huntView,
  stepHunt,
  type HuntState,
  type HuntView,
} from "./docSearch";

export {
  CAMERA_BEHAVIORS,
  CAMERA_FEELS,
  HUNT_SELECTS,
  applyHuntPose,
  cameraFromUnknown,
  clampHuntFocusError,
  clampHuntFocusSpeed,
  clampHuntFollowMax,
  clampHuntFollowMin,
  clampHuntPrecision,
  clampHuntReactMax,
  clampHuntReactMin,
  clampHuntSnap,
  clampHuntTight,
  clampHuntVariation,
  clampHuntWideMax,
  clampHuntWideMin,
  clampHuntZoom,
  feelFromUnknown,
  huntParamsFrom,
  huntSelectFromUnknown,
  huntSalience,
  pickHuntSubject,
  stepHunt,
} from "./docSearch";
export type { CameraBehavior, CameraFeel, HuntSelect, HuntPhase, HuntStamp, HuntView } from "./docSearch";

export {
  clampFieldAttract,
  clampFieldContrast,
  clampFieldCurl,
  clampFieldDamp,
  clampFieldDensity,
  clampFieldDensityEvolve,
  clampFieldDensityScale,
  clampFieldEvolve,
  clampFieldFlow,
  clampFieldFlowScale,
  clampFieldInertia,
  clampFieldMaxScale,
  clampFieldMaxV,
  clampFieldMinScale,
  clampFieldMotion,
  clampFieldPerturb,
  clampFieldRadius,
  clampFieldRepel,
  clampFieldScale,
  clampFieldScaleAmp,
  clampFieldSparsity,
  clampFieldStrength,
  clampFieldWarp,
  clampFieldPattern,
  FIELD_PATTERNS,
  FIELD_PATTERN_LABEL,
  isFieldMove,
  FIELD_MOVE,
} from "./agentField";
export type { FieldPattern, FieldPatternChoice } from "./agentField";
export {
  clampBoidAlign,
  clampBoidCohere,
  clampBoidRadius,
  clampBoidSep,
  clampBoidSpeed,
  clampFlowDepth,
  clampFlowEvolve,
  clampFlowForce,
  clampFlowScale,
  clampFlowTurb,
  clampPoleAttract,
  clampPoleCount,
  clampPoleFalloff,
  clampPoleRepel,
  clampPoleSpeed,
  clampPoleSwitch,
  clampSpringBreak,
  clampSpringDamp,
  clampSpringDist,
  clampSpringElast,
  clampSpringStrength,
  isSimMove,
  SIM_MOVES,
} from "./fieldSim";

export const HERALDRY_ROOMS: GeneratorType[] = ["heraldry", "wallpaper", "giants", "shower"];
export const COLLAGE_KITS = ["sailor", "circus", "fruit", "nature", "love", "space", "sweet", "music", "kitchen", "weather", "city", "arcade", "haunt", "sport", "school"] as const;
export type CollageKit = (typeof COLLAGE_KITS)[number];

export const COLLAGE_MOVES = [
  "rush",
  "tunnel",
  "bloom",
  "spiral",
  "helix",
  "prism",
  "gyre",
  "well",
  "hall",
  "drift",
  "braid",
  "sway",
  "bounce",
  "flip",
  "glow",
  "flash",
  "hop",
  "kick",
  "jelly",
  "tide",
  "rings",
  "loom",
  "petal",
  "flock",
  "wheel",
  "silk",
  "bars",
  "ripple",
  "swing",
  "burst",
  "halo",
  "wave",
  "drop",
  "spot",
  "pong",
  "step",
  "moire",
  "grid",
  "zip",
  "ghost",
  "poly",
  "fall",
  "liss",
  "snap",
  "chain",
  "spring",
  "flow",
  "boids",
  "poles",
  "field",
] as const;
export type CollageMove = (typeof COLLAGE_MOVES)[number];
export type HeraldryScene = CollageMove | "tour" | "lattice";

export const MUSIC_MOVES = [
  "bars",
  "ripple",
  "swing",
  "burst",
  "halo",
  "wave",
  "drop",
  "spot",
  "pong",
  "step",
  "moire",
  "grid",
  "zip",
  "ghost",
  "poly",
  "fall",
  "liss",
  "snap",
] as const;
export type MusicMove = (typeof MUSIC_MOVES)[number];

export function isMusicMove(scene?: string | null): scene is MusicMove {
  return !!scene && (MUSIC_MOVES as readonly string[]).includes(scene);
}

export const MOVE_LABEL: Record<CollageMove, string> = {
  rush: "RUSH",
  tunnel: "TUNNEL",
  bloom: "BLOOM",
  spiral: "SPIRAL",
  helix: "HELIX",
  prism: "PRISM",
  gyre: "GYRE",
  well: "WELL",
  hall: "HALL",
  drift: "DRIFT",
  braid: "BRAID",
  sway: "SWAY",
  bounce: "BOUNCE",
  flip: "FLIP",
  glow: "GLOW",
  flash: "FLASH",
  hop: "HOP",
  kick: "KICK",
  jelly: "JELLY",
  tide: "TIDE",
  rings: "RINGS",
  loom: "LOOM",
  petal: "PETAL",
  flock: "FLOCK",
  wheel: "WHEEL",
  silk: "SILK",
  bars: "BARS",
  ripple: "RIPPLE",
  swing: "SWING",
  burst: "BURST",
  halo: "HALO",
  wave: "WAVE",
  drop: "DROP",
  spot: "SPOT",
  pong: "PONG",
  step: "STEP",
  moire: "MOIRE",
  grid: "GRID",
  zip: "ZIP",
  ghost: "GHOST",
  poly: "POLY",
  fall: "FALL",
  liss: "LISS",
  snap: "SNAP",
  chain: "CHAIN",
  spring: "SPRING",
  flow: "FLOW",
  boids: "BOIDS",
  poles: "POLES",
  field: "FIELD",
};

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

/** 3D fly-throughs — stamps travel in depth and fill a big screen. */
export const FLY_MOVES = [
  "rush",
  "tunnel",
  "bloom",
  "spiral",
  "helix",
  "prism",
  "gyre",
  "well",
  "hall",
  "drift",
  "braid",
  "sway",
] as const;
export type FlyMove = (typeof FLY_MOVES)[number];

export function isFlyMove(scene?: string | null): scene is FlyMove {
  return !!scene && (FLY_MOVES as readonly string[]).includes(scene);
}

/** Moves that stay readable when the randomizer rolls them. */
export const PLEASING_MOVES = [
  "rush",
  "tunnel",
  "bloom",
  "spiral",
  "helix",
  "prism",
  "gyre",
  "well",
  "hall",
  "drift",
  "braid",
  "sway",
  "tide",
  "rings",
  "loom",
  "petal",
  "flock",
  "wheel",
  "silk",
  "bars",
  "ripple",
  "swing",
  "burst",
  "halo",
  "wave",
  "drop",
  "spot",
  "pong",
  "step",
  "moire",
  "grid",
  "zip",
  "ghost",
  "poly",
  "fall",
  "liss",
  "snap",
  "chain",
  "spring",
  "flow",
  "boids",
  "poles",
  "field",
] as const;
export type PleasingMove = (typeof PLEASING_MOVES)[number];

export function isPleasingMove(scene?: string | null): scene is PleasingMove {
  return !!scene && (PLEASING_MOVES as readonly string[]).includes(scene);
}

export function pleasingMoveForSeed(seed: number): CollageMove {
  return PLEASING_MOVES[(seed >>> 0) % PLEASING_MOVES.length];
}

export function clampCollagePace(value?: number | null): number {
  return clamp(value ?? 1, 0.35, 1.2);
}

export function clampCollageChainTravel(value?: number | null): number {
  return clamp(value ?? 1, 0.2, 2.2);
}

export function clampCollageChainMorph(value?: number | null): number {
  return clamp(value ?? 0.7, 0.12, 2);
}

export function clampCollageChainVary(value?: number | null): number {
  return clamp(value ?? 1, 0.2, 2);
}

export function clampCollageChainSmooth(value?: number | null): number {
  return clamp(value ?? 0.72, 0.12, 1);
}

export const ANIMAL_CHAINS = ["off", "dragon", "dog", "ferret", "caterpillar", "zebra"] as const;
export type AnimalChain = (typeof ANIMAL_CHAINS)[number];
export type AnimalChainOn = Exclude<AnimalChain, "off">;
export type AnimalRole = "head" | "body" | "tail" | "leg" | "nub";

export const ANIMAL_LABEL: Record<AnimalChain, string> = {
  off: "Off",
  dragon: "Dragon",
  dog: "Dog",
  ferret: "Ferret",
  caterpillar: "Caterpillar",
  zebra: "Zebra",
};

export function animalFromUnknown(value?: string | null): AnimalChain {
  return ANIMAL_CHAINS.includes(value as AnimalChain) ? (value as AnimalChain) : "off";
}

export function animalChainSpineCount(density?: number | null): number {
  return Math.max(11, Math.min(18, Math.round(14 * clamp(density ?? 1, 0.35, 2))));
}

export function animalChainRoles(animal: AnimalChain, spine: number): AnimalRole[] {
  if (animal === "off" || spine < 2) return [];
  return Array.from({ length: spine }, (_, i) => (i === 0 ? "head" : i === spine - 1 ? "tail" : "body"));
}

export function animalChainAppendages(
  animal: AnimalChain,
  spine: number,
): { role: "leg" | "nub"; attach: number; side: number }[] {
  if (animal === "off" || spine < 4) return [];
  if (animal === "caterpillar") {
    const out: { role: "nub"; attach: number; side: number }[] = [];
    for (let i = 1; i < spine - 1; i++) {
      out.push({ role: "nub", attach: i, side: -1 });
      out.push({ role: "nub", attach: i, side: 1 });
    }
    return out;
  }
  const fore = Math.max(1, Math.round((spine - 1) * 0.22));
  const hind = Math.max(fore + 2, Math.round((spine - 1) * 0.62));
  return [
    { role: "leg", attach: fore, side: -1 },
    { role: "leg", attach: fore, side: 1 },
    { role: "leg", attach: hind, side: -1 },
    { role: "leg", attach: hind, side: 1 },
  ];
}

export function animalChainLayout(animal: AnimalChain, density = 1) {
  const spine = animal === "off" ? 0 : animalChainSpineCount(density);
  return {
    spine,
    roles: animalChainRoles(animal, spine),
    appendages: animalChainAppendages(animal, spine),
  };
}

export interface ChainPoint {
  x: number;
  y: number;
  z: number;
}

/** Freeform 3D ribbon. Integer harmonics keep the loop continuous while amplitudes, axes, and attitude keep changing. */
export function chainPath(s: number, morphT: number, vary: number, smooth: number): ChainPoint {
  const u = wrap01(s) * Math.PI * 2;
  const v = clamp(vary, 0.2, 2);
  const sm = clamp(smooth, 0.12, 1);
  const live = 1 - sm;
  const slow = morphT * 0.68;
  const mid = morphT * (0.95 + live * 0.55);
  const fast = morphT * (0.45 + live * 1.55);
  const breath = (base: number, gain: number, phase: number) =>
    (base + gain * v) * (0.42 + 0.58 * (0.5 + 0.5 * Math.sin(phase)));
  const stretchX = 0.84 + 0.22 * Math.sin(slow + 0.4);
  const stretchY = 0.8 + 0.24 * Math.cos(slow * 0.87 + 1.1);
  const stretchZ = 0.7 + 0.32 * Math.sin(slow * 0.61 + 2.2);
  const a1 = (0.2 + 0.12 * v) * stretchX;
  const a2 = breath(0.04, 0.07, mid + 0.3) * (0.4 + sm * 0.6);
  const a3 = breath(0.02, 0.08, fast + 1.4) * (0.18 + live * 0.95);
  const a4 = breath(0.01, 0.06, fast * 1.3 + 0.8) * live;
  const a5 = breath(0.006, 0.035, mid * 1.6 + 2.1) * live * live;
  const b1 = (0.17 + 0.11 * v) * stretchY;
  const b2 = breath(0.035, 0.065, mid + 1.7) * (0.4 + sm * 0.6);
  const b3 = breath(0.02, 0.07, fast + 0.6) * (0.18 + live * 0.95);
  const b4 = breath(0.01, 0.055, fast * 1.2 + 2.4) * live;
  const b5 = breath(0.006, 0.03, mid * 1.4 + 0.5) * live * live;
  const c1 = (0.13 + 0.11 * v) * stretchZ;
  const c2 = breath(0.04, 0.08, mid + 2.0) * (0.45 + sm * 0.55);
  const c3 = breath(0.02, 0.07, fast + 1.9) * (0.18 + live * 0.95);
  const c4 = breath(0.012, 0.055, fast * 0.9 + 0.2) * live;
  let x =
    Math.cos(u + slow * 0.18) * a1 +
    Math.cos(2 * u + mid * 0.14 + 0.7) * a2 +
    Math.sin(3 * u + slow * 0.11 + 1.2) * a3 +
    Math.cos(4 * u + fast * 0.09 + 0.4) * a4 +
    Math.sin(5 * u + mid * 0.16 + 2.2) * a5;
  let y =
    Math.sin(u + slow * 0.15 + 0.5) * b1 +
    Math.sin(2 * u + mid * 0.19 + 1.4) * b2 +
    Math.cos(3 * u + slow * 0.09 + 0.3) * b3 +
    Math.sin(4 * u + fast * 0.12 + 1.8) * b4 +
    Math.cos(5 * u + mid * 0.08 + 0.9) * b5;
  let z =
    Math.sin(u + slow * 0.12 + 1.1) * c1 +
    Math.cos(2 * u + mid * 0.17 + 0.6) * c2 +
    Math.sin(3 * u + fast * 0.1 + 2.5) * c3 +
    Math.cos(4 * u + slow * 0.13 + 1.6) * c4;
  const fold = Math.sin(2 * u + mid * 0.22) * live * 0.12 * v;
  z += fold;
  const yaw = slow * 0.19 + Math.sin(mid * 0.27) * 0.55;
  const pitch = Math.sin(slow * 0.29 + 0.8) * (0.28 + 0.18 * v);
  const roll = Math.cos(slow * 0.23 + 1.5) * (0.2 + live * 0.4);
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const x1 = x * cy - z * sy;
  const z1 = x * sy + z * cy;
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  const y1 = y * cp - z1 * sp;
  const z2 = y * sp + z1 * cp;
  const cr = Math.cos(roll);
  const sr = Math.sin(roll);
  const x2 = x1 * cr - y1 * sr;
  const y2 = x1 * sr + y1 * cr;
  return {
    x: x2 + Math.sin(slow * 0.47) * 0.06 * v,
    y: y2 + Math.cos(slow * 0.39 + 1.3) * 0.05 * v,
    z: z2 + Math.sin(mid * 0.21 + 0.6) * 0.07 * v,
  };
}

export function tempoHz(bpm: number, subdiv = 1): number {
  return (bpm > 40 ? bpm / 60 : 2) * subdiv;
}

export function tempoPhase(clock: number, bpm: number, subdiv = 1, offset = 0): number {
  return wrap01((clock - offset) * tempoHz(bpm, subdiv));
}

export function tempoTick(clock: number, bpm: number, subdiv = 1, offset = 0): number {
  const c = Math.cos(tempoPhase(clock, bpm, subdiv, offset) * Math.PI * 2);
  return c > 0 ? c * c : 0;
}

export function stepIndex(clock: number, bpm: number, subdiv = 1, offset = 0): number {
  return Math.floor(Math.max(0, clock - offset) * tempoHz(bpm, subdiv));
}

export function generatorForMove(move: CollageMove): GeneratorType {
  if (move === "rush") return "wallpaper";
  if (move === "tunnel") return "giants";
  if (move === "bounce") return "shower";
  return "heraldry";
}

export function sceneFromGenerator(kind?: string | null, move?: string | null): HeraldryScene {
  if (move && COLLAGE_MOVES.includes(move as CollageMove)) return move as CollageMove;
  if (kind === "wallpaper") return "rush";
  if (kind === "giants") return "tunnel";
  if (kind === "shower") return "bounce";
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
  "#d8c078",
  "#ff4a9a",
  "#7cff6a",
  "#7ad8ff",
  "#ff6a28",
  "#c47aff",
  "#3dffd0",
  "#e87838",
  "#4ad8a8",
  "#8a6ad8",
  "#c48a4a",
  "#4a78ff",
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
  kitchen: "#e85a2a",
  weather: "#4aa8e8",
  city: "#f0c020",
  arcade: "#7cff6a",
  haunt: "#9a6cff",
  sport: "#ff7a1a",
  school: "#3a6ad8",
};

export function kitButtonLabel(kit: CollageKit): string {
  if (kit === "nature") return "Grove";
  if (kit === "weather") return "Sky";
  if (kit === "city") return "Street";
  return kit[0].toUpperCase() + kit.slice(1);
}

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
  | "speaker"
  | "crab"
  | "helm"
  | "lighthouse"
  | "compass"
  | "popcorn"
  | "cane"
  | "mask"
  | "apple"
  | "banana"
  | "grape"
  | "rabbit"
  | "snail"
  | "fern"
  | "rose"
  | "diamond"
  | "candle"
  | "alien"
  | "asteroid"
  | "telescope"
  | "cookie"
  | "waffle"
  | "guitar"
  | "drum"
  | "piano"
  | "clef"
  | "kettle"
  | "mug"
  | "whisk"
  | "toast"
  | "egg"
  | "spoon"
  | "chili"
  | "bottle"
  | "rain"
  | "flake"
  | "wind"
  | "rainbow"
  | "thermo"
  | "taxi"
  | "hydrant"
  | "bike"
  | "lamp"
  | "signal"
  | "bus"
  | "stick"
  | "dice"
  | "coin"
  | "pawn"
  | "cart"
  | "flag"
  | "buoy"
  | "hook"
  | "porthole"
  | "oar"
  | "hoop"
  | "unicycle"
  | "lion"
  | "topper"
  | "orange"
  | "peach"
  | "berry"
  | "melon"
  | "pineapple"
  | "pine"
  | "hedgehog"
  | "nest"
  | "toadstool"
  | "locket"
  | "dove"
  | "kiss"
  | "rover"
  | "spark"
  | "astro"
  | "pretzel"
  | "sundae"
  | "choco"
  | "sax"
  | "trumpet"
  | "amp"
  | "fork"
  | "pan"
  | "chefhat"
  | "tornado"
  | "subway"
  | "mailbox"
  | "skyline"
  | "ghostie"
  | "pixel"
  | "joystick"
  | "shroomup"
  | "invader"
  | "skull"
  | "bat"
  | "pumpkin"
  | "tomb"
  | "cauldron"
  | "web"
  | "trophy"
  | "whistle"
  | "jersey"
  | "skate"
  | "goal"
  | "pencil"
  | "book"
  | "globe"
  | "backpack"
  | "ruler"
  | "bell"
  | "aBody"
  | "aLeg"
  | "aNub"
  | "aDragHead"
  | "aDragTail"
  | "aDogHead"
  | "aDogTail"
  | "aFerrHead"
  | "aFerrTail"
  | "aCatpHead"
  | "aCatpTail"
  | "aZebrHead"
  | "aZebrTail";

type Pattern = "plain" | "polka" | "hoop" | "half" | "bar" | "stripe";

const KIT_PAPER: Record<CollageKit, Kind[]> = {
  sailor: ["fish", "anchor", "wave", "shell", "starfish", "boat", "tail", "swallow", "crab", "helm", "lighthouse", "compass", "buoy", "hook", "porthole", "oar"],
  circus: ["elephant", "tent", "ball", "bow", "horse", "balloon", "ticket", "figure", "popcorn", "cane", "mask", "dice", "flag", "hoop", "unicycle", "lion", "topper"],
  fruit: ["pear", "lemon", "cherry", "flower", "apple", "banana", "grape", "chili", "orange", "peach", "berry", "melon", "pineapple"],
  nature: ["tree", "deer", "fox", "owl", "mushroom", "leaf", "acorn", "cone", "mountain", "moth", "bird", "rabbit", "snail", "fern", "pine", "hedgehog", "nest", "toadstool"],
  love: ["heart", "wingfig", "swan", "cat", "crown", "key", "ring", "envelope", "potion", "rose", "diamond", "candle", "locket", "dove", "kiss"],
  space: ["rocket", "planet", "saturn", "ufo", "comet", "satellite", "star", "alien", "asteroid", "telescope", "rover", "spark", "astro"],
  sweet: ["lolly", "coneice", "cupcake", "donut", "candy", "cookie", "waffle", "pretzel", "sundae", "choco"],
  music: ["note", "vinyl", "headphone", "mic", "speaker", "guitar", "drum", "piano", "clef", "sax", "trumpet", "amp"],
  kitchen: ["kettle", "mug", "whisk", "toast", "egg", "spoon", "bottle", "fork", "pan", "chefhat"],
  weather: ["rain", "flake", "wind", "rainbow", "thermo", "cloud", "bolt", "sun", "umbrella", "drop", "moon", "tornado"],
  city: ["taxi", "hydrant", "bike", "lamp", "signal", "bus", "house", "subway", "mailbox", "skyline"],
  arcade: ["stick", "coin", "pawn", "cart", "ghostie", "pixel", "joystick", "shroomup", "invader"],
  haunt: ["skull", "bat", "pumpkin", "tomb", "cauldron", "web"],
  sport: ["trophy", "whistle", "jersey", "skate", "goal"],
  school: ["pencil", "book", "globe", "backpack", "ruler", "bell"],
};

const KIT_GIANTS: Record<CollageKit, Kind[]> = {
  sailor: ["fish", "boat", "tail", "swallow", "anchor", "lighthouse", "helm", "buoy"],
  circus: ["elephant", "tent", "horse", "balloon", "figure", "mask", "lion"],
  fruit: ["pear", "lemon", "apple", "banana", "melon", "pineapple"],
  nature: ["tree", "deer", "owl", "fox", "mountain", "rabbit", "pine"],
  love: ["heart", "wingfig", "swan", "cat", "rose", "dove"],
  space: ["rocket", "saturn", "ufo", "planet", "comet", "alien", "astro"],
  sweet: ["lolly", "cupcake", "donut", "coneice", "waffle", "sundae"],
  music: ["vinyl", "headphone", "speaker", "guitar", "piano", "sax"],
  kitchen: ["kettle", "toast", "bottle", "pan", "chefhat"],
  weather: ["rainbow", "umbrella", "cloud", "sun", "tornado"],
  city: ["taxi", "bus", "house", "lamp", "skyline"],
  arcade: ["stick", "cart", "pawn", "invader", "ghostie"],
  haunt: ["skull", "pumpkin", "tomb", "cauldron", "bat"],
  sport: ["trophy", "jersey", "goal", "skate"],
  school: ["globe", "backpack", "book", "bell"],
};

const KIT_SHOWER: Record<CollageKit, Kind[]> = {
  sailor: ["starfish", "shell", "fish", "anchor", "crab", "compass", "hook"],
  circus: ["ball", "balloon", "bow", "ticket", "popcorn", "cane", "dice"],
  fruit: ["cherry", "lemon", "grape", "apple", "berry", "chili"],
  nature: ["leaf", "acorn", "moth", "bird", "snail", "fern", "hedgehog"],
  love: ["heart", "key", "ring", "diamond", "candle", "kiss"],
  space: ["star", "spark", "comet", "satellite", "planet", "asteroid"],
  sweet: ["candy", "lolly", "donut", "cookie", "pretzel", "choco"],
  music: ["note", "vinyl", "mic", "clef", "drum", "trumpet"],
  kitchen: ["spoon", "egg", "mug", "fork", "whisk"],
  weather: ["flake", "drop", "rain", "bolt", "moon"],
  city: ["hydrant", "bike", "mailbox", "signal", "lamp"],
  arcade: ["coin", "pawn", "pixel", "joystick", "shroomup"],
  haunt: ["bat", "web", "skull", "pumpkin"],
  sport: ["whistle", "skate", "trophy", "goal"],
  school: ["pencil", "ruler", "bell", "book"],
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
  kitB?: string | null;
  move?: string | null;
  paper: string;
  ink: string;
  audio: number;
  bass: number;
  beat: number;
  bpm: number;
  /** Seconds from t=0 to the first downbeat. Music moves count from here. */
  beatOffset?: number;
  night?: boolean;
  scale?: number;
  density?: number;
  pace?: number;
  chainTravel?: number;
  chainMorph?: number;
  chainVary?: number;
  chainSmooth?: number;
  chainAnimal?: string | null;
  springStrength?: number;
  springDamp?: number;
  springDist?: number;
  springElast?: number;
  springBreak?: number;
  flowScale?: number;
  flowTurb?: number;
  flowEvolve?: number;
  flowForce?: number;
  flowDepth?: number;
  boidCohere?: number;
  boidSep?: number;
  boidAlign?: number;
  boidRadius?: number;
  boidSpeed?: number;
  poleCount?: number;
  poleAttract?: number;
  poleRepel?: number;
  poleSpeed?: number;
  poleFalloff?: number;
  poleSwitch?: number;
  fieldStrength?: number;
  fieldScale?: number;
  fieldEvolve?: number;
  fieldDensity?: number;
  fieldDensityScale?: number;
  fieldDensityEvolve?: number;
  fieldFlow?: number;
  fieldCurl?: number;
  fieldFlowScale?: number;
  fieldAttract?: number;
  fieldRepel?: number;
  fieldRadius?: number;
  fieldInertia?: number;
  fieldDamp?: number;
  fieldMaxV?: number;
  fieldScaleAmp?: number;
  fieldMinScale?: number;
  fieldMaxScale?: number;
  fieldPerturb?: number;
  fieldWarp?: number;
  fieldSparsity?: number;
  fieldContrast?: number;
  fieldMotion?: number;
  fieldPattern?: string;
  camera?: string | null;
  cameraFeel?: string | null;
  huntWideMin?: number;
  huntWideMax?: number;
  huntFollowMin?: number;
  huntFollowMax?: number;
  huntSnap?: number;
  huntZoom?: number;
  huntTight?: number;
  huntReactMin?: number;
  huntReactMax?: number;
  huntPrecision?: number;
  huntSelect?: string | null;
  huntFocus?: boolean;
  huntFocusSpeed?: number;
  huntFocusError?: number;
  huntVariation?: number;
}

const STAMP = 256;

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

export function dropSlam(beat: number): number {
  return beat > 0.5 ? clamp((beat - 0.5) / 0.5, 0, 1) : 0;
}

export function spotIndex(time: number, bpm: number, count: number, offset = 0): number {
  const n = Math.max(1, count);
  const tempo = bpm > 40 ? bpm / 60 : 2;
  const hit = Math.floor(Math.max(0, time - offset) * tempo);
  return ((hit * 11 + 5) >>> 0) % n;
}

export function clampCollageScale(value?: number | null): number {
  return clamp(value ?? 1, 0.5, 2);
}

export function clampCollageDensity(value?: number | null): number {
  return clamp(value ?? 1, 0.35, 2);
}

export function buildField(seed: number, bias: string, kit: CollageKit = "sailor", kitB?: CollageKit | null): Particle[] {
  const rng = mulberry32(seed >>> 0);
  const n = 240;
  const mash = kitB && kitB !== kit ? kitB : null;
  const out: Particle[] = [];
  for (let i = 0; i < n; i++) {
    const sceneHint: HeraldryScene = i < 70 ? "lattice" : i < 130 ? "tunnel" : "rush";
    const drawer = mash && (i & 1) ? mash : kit;
    out.push({
      x: rng(),
      y: rng(),
      z: rng(),
      rot: (rng() - 0.5) * 0.55,
      size: 0.55 + rng() * 0.9,
      vx: (rng() - 0.5) * 0.06,
      vy: (rng() - 0.35) * 0.08,
      vr: (rng() - 0.5) * 0.25,
      charge: makeCharge(rng, sceneHint, bias, drawer),
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
  } else if (c.pattern === "stripe") {
    ctx.save();
    ctx.rotate(-0.48);
    for (let i = -6; i < 7; i++) {
      ctx.fillRect(-s, i * r * 0.3 - r * 0.07, s * 2, r * 0.13);
    }
    ctx.restore();
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

function crabPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, r * 0.08, r * 0.55, r * 0.4, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.95, -r * 0.55);
  ctx.quadraticCurveTo(-r * 0.55, -r * 0.15, -r * 0.35, r * 0.05);
  ctx.quadraticCurveTo(-r * 0.85, r * 0.15, -r * 0.95, -r * 0.55);
  ctx.closePath();
  ctx.moveTo(r * 0.95, -r * 0.55);
  ctx.quadraticCurveTo(r * 0.55, -r * 0.15, r * 0.35, r * 0.05);
  ctx.quadraticCurveTo(r * 0.85, r * 0.15, r * 0.95, -r * 0.55);
  ctx.closePath();
}

function helmPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, r * 0.08, r * 0.72, Math.PI * 0.12, Math.PI - 0.12, true);
  ctx.lineTo(-r * 0.95, r * 0.55);
  ctx.lineTo(-r * 0.55, r * 0.35);
  ctx.lineTo(r * 0.55, r * 0.35);
  ctx.lineTo(r * 0.95, r * 0.55);
  ctx.closePath();
}

function lighthousePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.22, r);
  ctx.lineTo(-r * 0.12, -r * 0.15);
  ctx.lineTo(-r * 0.32, -r * 0.15);
  ctx.lineTo(-r * 0.32, -r * 0.45);
  ctx.lineTo(r * 0.32, -r * 0.45);
  ctx.lineTo(r * 0.32, -r * 0.15);
  ctx.lineTo(r * 0.12, -r * 0.15);
  ctx.lineTo(r * 0.22, r);
  ctx.closePath();
  ctx.moveTo(0, -r * 0.95);
  ctx.lineTo(r * 0.22, -r * 0.45);
  ctx.lineTo(-r * 0.22, -r * 0.45);
  ctx.closePath();
}

function compassPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, 0, r * 0.88, 0, Math.PI * 2);
  ctx.moveTo(0, -r * 0.78);
  ctx.lineTo(r * 0.16, 0);
  ctx.lineTo(0, r * 0.78);
  ctx.lineTo(-r * 0.16, 0);
  ctx.closePath();
  ctx.moveTo(-r * 0.78, 0);
  ctx.lineTo(0, r * 0.16);
  ctx.lineTo(r * 0.78, 0);
  ctx.lineTo(0, -r * 0.16);
  ctx.closePath();
}

function popcornPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.55, r * 0.15);
  ctx.lineTo(-r * 0.42, r * 0.95);
  ctx.lineTo(r * 0.42, r * 0.95);
  ctx.lineTo(r * 0.55, r * 0.15);
  ctx.closePath();
  ctx.moveTo(-r * 0.35, r * 0.12);
  ctx.arc(-r * 0.22, -r * 0.15, r * 0.28, 0, Math.PI * 2);
  ctx.moveTo(r * 0.12, -r * 0.05);
  ctx.arc(r * 0.22, -r * 0.12, r * 0.26, 0, Math.PI * 2);
  ctx.moveTo(0, -r * 0.45);
  ctx.arc(0, -r * 0.42, r * 0.24, 0, Math.PI * 2);
}

function canePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, -r * 0.45, r * 0.38, Math.PI * 0.15, Math.PI, true);
  ctx.lineTo(-r * 0.38, r * 0.95);
  ctx.lineTo(-r * 0.12, r * 0.95);
  ctx.lineTo(-r * 0.12, -r * 0.45);
  ctx.arc(0, -r * 0.45, r * 0.12, Math.PI, Math.PI * 0.15, false);
  ctx.closePath();
}

function maskPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, 0, r * 0.9, r * 0.62, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.42, -r * 0.08);
  ctx.ellipse(-r * 0.28, -r * 0.05, r * 0.18, r * 0.14, 0, 0, Math.PI * 2);
  ctx.moveTo(r * 0.42, -r * 0.08);
  ctx.ellipse(r * 0.28, -r * 0.05, r * 0.18, r * 0.14, 0, 0, Math.PI * 2);
}

function applePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(-r * 0.22, r * 0.08, r * 0.55, 0, Math.PI * 2);
  ctx.moveTo(r * 0.75, r * 0.08);
  ctx.arc(r * 0.22, r * 0.08, r * 0.55, 0, Math.PI * 2);
  ctx.moveTo(0, -r * 0.35);
  ctx.quadraticCurveTo(r * 0.22, -r * 0.95, r * 0.08, -r);
  ctx.quadraticCurveTo(-r * 0.05, -r * 0.55, 0, -r * 0.35);
  ctx.closePath();
}

function bananaPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.85, r * 0.35);
  ctx.quadraticCurveTo(-r * 0.15, -r * 0.85, r * 0.85, -r * 0.15);
  ctx.quadraticCurveTo(r * 0.95, r * 0.25, r * 0.55, r * 0.15);
  ctx.quadraticCurveTo(-r * 0.05, -r * 0.25, -r * 0.65, r * 0.55);
  ctx.closePath();
}

function grapePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(-r * 0.22, r * 0.35, r * 0.28, 0, Math.PI * 2);
  ctx.moveTo(r * 0.45, r * 0.35);
  ctx.arc(r * 0.18, r * 0.32, r * 0.26, 0, Math.PI * 2);
  ctx.moveTo(r * 0.12, r * 0.08);
  ctx.arc(0, r * 0.02, r * 0.28, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.05, -r * 0.35);
  ctx.arc(-r * 0.08, -r * 0.32, r * 0.24, 0, Math.PI * 2);
  ctx.moveTo(r * 0.28, -r * 0.28);
  ctx.arc(r * 0.2, -r * 0.22, r * 0.22, 0, Math.PI * 2);
}

function rabbitPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(-r * 0.22, -r * 0.55, r * 0.16, r * 0.48, -0.2, 0, Math.PI * 2);
  ctx.ellipse(r * 0.22, -r * 0.55, r * 0.16, r * 0.48, 0.2, 0, Math.PI * 2);
  ctx.moveTo(r * 0.48, r * 0.15);
  ctx.arc(0, r * 0.18, r * 0.48, 0, Math.PI * 2);
}

function snailPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(r * 0.12, 0, r * 0.55, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.35, r * 0.35);
  ctx.quadraticCurveTo(-r * 0.85, r * 0.15, -r * 0.75, -r * 0.35);
  ctx.quadraticCurveTo(-r * 0.35, r * 0.05, -r * 0.15, r * 0.22);
  ctx.closePath();
}

function fernPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, r);
  ctx.quadraticCurveTo(r * 0.15, 0, 0, -r);
  ctx.quadraticCurveTo(-r * 0.15, 0, 0, r);
  ctx.closePath();
  ctx.moveTo(-r * 0.55, r * 0.15);
  ctx.ellipse(-r * 0.28, r * 0.2, r * 0.32, r * 0.16, -0.4, 0, Math.PI * 2);
  ctx.moveTo(r * 0.55, -r * 0.05);
  ctx.ellipse(r * 0.28, -r * 0.02, r * 0.3, r * 0.15, 0.4, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.42, -r * 0.35);
  ctx.ellipse(-r * 0.2, -r * 0.28, r * 0.26, r * 0.13, -0.5, 0, Math.PI * 2);
}

function rosePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, -r * 0.08, r * 0.42, 0, Math.PI * 2);
  ctx.moveTo(r * 0.55, -r * 0.25);
  ctx.arc(r * 0.22, -r * 0.22, r * 0.32, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.15, r * 0.15);
  ctx.arc(-r * 0.18, 0, r * 0.32, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.08, r * 0.15);
  ctx.rect(-r * 0.08, r * 0.15, r * 0.16, r * 0.75);
}

function diamondPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, -r);
  ctx.lineTo(r * 0.72, 0);
  ctx.lineTo(0, r);
  ctx.lineTo(-r * 0.72, 0);
  ctx.closePath();
}

function candlePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.22, -r * 0.15, r * 0.44, r * 1.05);
  ctx.moveTo(0, -r * 0.95);
  ctx.quadraticCurveTo(r * 0.28, -r * 0.55, 0, -r * 0.15);
  ctx.quadraticCurveTo(-r * 0.22, -r * 0.55, 0, -r * 0.95);
  ctx.closePath();
}

function alienPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, -r * 0.05, r * 0.62, r * 0.78, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.38, -r * 0.15);
  ctx.ellipse(-r * 0.22, -r * 0.08, r * 0.2, r * 0.28, -0.3, 0, Math.PI * 2);
  ctx.moveTo(r * 0.38, -r * 0.15);
  ctx.ellipse(r * 0.22, -r * 0.08, r * 0.2, r * 0.28, 0.3, 0, Math.PI * 2);
}

function asteroidPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, -r * 0.85);
  ctx.lineTo(r * 0.62, -r * 0.45);
  ctx.lineTo(r * 0.85, r * 0.15);
  ctx.lineTo(r * 0.35, r * 0.82);
  ctx.lineTo(-r * 0.45, r * 0.72);
  ctx.lineTo(-r * 0.88, r * 0.05);
  ctx.lineTo(-r * 0.55, -r * 0.55);
  ctx.closePath();
}

function telescopePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.85, r * 0.35);
  ctx.lineTo(-r * 0.55, r * 0.55);
  ctx.lineTo(r * 0.75, -r * 0.35);
  ctx.lineTo(r * 0.95, -r * 0.55);
  ctx.lineTo(r * 0.75, -r * 0.75);
  ctx.lineTo(-r * 0.85, r * 0.15);
  ctx.closePath();
  ctx.moveTo(-r * 0.15, r * 0.55);
  ctx.rect(-r * 0.22, r * 0.15, r * 0.16, r * 0.7);
}

function cookiePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, 0, r * 0.82, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.22, -r * 0.22);
  ctx.arc(-r * 0.22, -r * 0.22, r * 0.1, 0, Math.PI * 2);
  ctx.moveTo(r * 0.28, r * 0.12);
  ctx.arc(r * 0.28, r * 0.12, r * 0.08, 0, Math.PI * 2);
  ctx.moveTo(r * 0.05, -r * 0.38);
  ctx.arc(r * 0.05, -r * 0.38, r * 0.07, 0, Math.PI * 2);
}

function wafflePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, -r * 0.9);
  ctx.lineTo(r * 0.9, 0);
  ctx.lineTo(0, r * 0.9);
  ctx.lineTo(-r * 0.9, 0);
  ctx.closePath();
}

function guitarPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, r * 0.42, r * 0.42, r * 0.48, 0, 0, Math.PI * 2);
  ctx.moveTo(r * 0.28, -r * 0.05);
  ctx.ellipse(0, r * 0.02, r * 0.28, r * 0.22, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.08, -r * 0.15);
  ctx.rect(-r * 0.08, -r * 0.95, r * 0.16, r * 0.9);
}

function drumPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, -r * 0.35, r * 0.72, r * 0.28, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.72, -r * 0.35);
  ctx.lineTo(-r * 0.72, r * 0.45);
  ctx.ellipse(0, r * 0.45, r * 0.72, r * 0.28, 0, Math.PI, 0, true);
  ctx.lineTo(r * 0.72, -r * 0.35);
  ctx.closePath();
}

function pianoPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.95, -r * 0.35, r * 1.9, r * 0.85);
  ctx.moveTo(-r * 0.55, -r * 0.35);
  ctx.rect(-r * 0.62, -r * 0.35, r * 0.18, r * 0.42);
  ctx.moveTo(-r * 0.12, -r * 0.35);
  ctx.rect(-r * 0.18, -r * 0.35, r * 0.18, r * 0.42);
  ctx.moveTo(r * 0.32, -r * 0.35);
  ctx.rect(r * 0.26, -r * 0.35, r * 0.18, r * 0.42);
}

function clefPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(r * 0.12, r * 0.85);
  ctx.bezierCurveTo(-r * 0.85, r * 0.35, -r * 0.55, -r * 0.85, r * 0.25, -r * 0.75);
  ctx.bezierCurveTo(r * 0.85, -r * 0.65, r * 0.55, r * 0.15, -r * 0.05, r * 0.05);
  ctx.bezierCurveTo(-r * 0.45, 0, -r * 0.15, -r * 0.35, r * 0.15, -r * 0.15);
  ctx.lineTo(r * 0.12, r * 0.85);
  ctx.closePath();
  ctx.moveTo(r * 0.22, r * 0.72);
  ctx.arc(r * 0.08, r * 0.72, r * 0.16, 0, Math.PI * 2);
}

function kettlePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.55, r * 0.15);
  ctx.quadraticCurveTo(-r * 0.62, -r * 0.55, 0, -r * 0.58);
  ctx.quadraticCurveTo(r * 0.62, -r * 0.55, r * 0.5, r * 0.15);
  ctx.lineTo(r * 0.48, r * 0.72);
  ctx.lineTo(-r * 0.52, r * 0.72);
  ctx.closePath();
  ctx.moveTo(r * 0.48, -r * 0.12);
  ctx.quadraticCurveTo(r * 0.95, -r * 0.05, r * 0.82, r * 0.32);
  ctx.lineTo(r * 0.62, r * 0.22);
  ctx.quadraticCurveTo(r * 0.72, 0, r * 0.48, 0);
  ctx.closePath();
  ctx.moveTo(-r * 0.12, -r * 0.55);
  ctx.lineTo(-r * 0.08, -r * 0.88);
  ctx.lineTo(r * 0.18, -r * 0.88);
  ctx.lineTo(r * 0.14, -r * 0.55);
  ctx.closePath();
}

function mugPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.55, -r * 0.55);
  ctx.lineTo(r * 0.42, -r * 0.55);
  ctx.lineTo(r * 0.48, r * 0.72);
  ctx.lineTo(-r * 0.6, r * 0.72);
  ctx.closePath();
  ctx.moveTo(r * 0.42, -r * 0.22);
  ctx.quadraticCurveTo(r * 0.95, -r * 0.15, r * 0.92, r * 0.28);
  ctx.quadraticCurveTo(r * 0.88, r * 0.52, r * 0.45, r * 0.42);
  ctx.lineTo(r * 0.42, r * 0.22);
  ctx.quadraticCurveTo(r * 0.7, r * 0.28, r * 0.72, 0.05 * r);
  ctx.quadraticCurveTo(r * 0.7, -r * 0.12, r * 0.42, -r * 0.08);
  ctx.closePath();
}

function whiskPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.08, r * 0.95);
  ctx.lineTo(r * 0.08, r * 0.95);
  ctx.lineTo(r * 0.06, r * 0.05);
  ctx.lineTo(-r * 0.06, r * 0.05);
  ctx.closePath();
  ctx.ellipse(0, -r * 0.42, r * 0.42, r * 0.52, 0, 0, Math.PI * 2);
}

function toastPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.72, -r * 0.15);
  ctx.quadraticCurveTo(-r * 0.7, -r * 0.85, -r * 0.2, -r * 0.75);
  ctx.quadraticCurveTo(0, -r * 0.98, r * 0.22, -r * 0.75);
  ctx.quadraticCurveTo(r * 0.72, -r * 0.85, r * 0.7, -r * 0.12);
  ctx.lineTo(r * 0.68, r * 0.78);
  ctx.lineTo(-r * 0.7, r * 0.78);
  ctx.closePath();
}

function eggPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, r * 0.08, r * 0.58, r * 0.82, 0, 0, Math.PI * 2);
}

function spoonPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, -r * 0.55, r * 0.38, r * 0.42, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.1, -r * 0.15);
  ctx.lineTo(r * 0.1, -r * 0.15);
  ctx.lineTo(r * 0.08, r * 0.95);
  ctx.lineTo(-r * 0.08, r * 0.95);
  ctx.closePath();
}

function chiliPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(r * 0.15, -r * 0.85);
  ctx.quadraticCurveTo(r * 0.95, -r * 0.15, r * 0.35, r * 0.85);
  ctx.quadraticCurveTo(-r * 0.15, r * 0.35, r * 0.05, -r * 0.15);
  ctx.quadraticCurveTo(-r * 0.55, r * 0.15, -r * 0.75, r * 0.72);
  ctx.quadraticCurveTo(-r * 0.95, 0, r * 0.15, -r * 0.85);
  ctx.closePath();
}

function bottlePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.18, -r * 0.95);
  ctx.lineTo(r * 0.18, -r * 0.95);
  ctx.lineTo(r * 0.22, -r * 0.45);
  ctx.lineTo(r * 0.48, -r * 0.22);
  ctx.lineTo(r * 0.48, r * 0.88);
  ctx.lineTo(-r * 0.48, r * 0.88);
  ctx.lineTo(-r * 0.48, -r * 0.22);
  ctx.lineTo(-r * 0.22, -r * 0.45);
  ctx.closePath();
}

function rainPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.55, -r * 0.15);
  ctx.quadraticCurveTo(-r * 0.15, -r * 0.95, r * 0.45, -r * 0.35);
  ctx.quadraticCurveTo(r * 0.85, -r * 0.15, r * 0.55, r * 0.15);
  ctx.quadraticCurveTo(-r * 0.05, r * 0.05, -r * 0.55, -r * 0.15);
  ctx.closePath();
  ctx.moveTo(-r * 0.28, r * 0.22);
  ctx.lineTo(-r * 0.18, r * 0.72);
  ctx.lineTo(-r * 0.02, r * 0.22);
  ctx.closePath();
  ctx.moveTo(r * 0.08, r * 0.28);
  ctx.lineTo(r * 0.2, r * 0.85);
  ctx.lineTo(r * 0.32, r * 0.28);
  ctx.closePath();
}

function flakePath(ctx: CanvasRenderingContext2D, r: number) {
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(a) * r * 0.9, Math.sin(a) * r * 0.9);
    ctx.lineTo(Math.cos(a + 0.18) * r * 0.35, Math.sin(a + 0.18) * r * 0.35);
    ctx.closePath();
  }
}

function windPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.95, -r * 0.35);
  ctx.quadraticCurveTo(0, -r * 0.7, r * 0.55, -r * 0.22);
  ctx.quadraticCurveTo(r * 0.95, 0, r * 0.45, r * 0.08);
  ctx.quadraticCurveTo(-r * 0.15, -r * 0.28, -r * 0.95, -r * 0.08);
  ctx.closePath();
  ctx.moveTo(-r * 0.85, r * 0.28);
  ctx.quadraticCurveTo(0, r * 0.05, r * 0.72, r * 0.42);
  ctx.quadraticCurveTo(r * 0.15, r * 0.62, -r * 0.85, r * 0.55);
  ctx.closePath();
}

function rainbowPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.95, r * 0.55);
  ctx.quadraticCurveTo(0, -r * 1.05, r * 0.95, r * 0.55);
  ctx.lineTo(r * 0.62, r * 0.55);
  ctx.quadraticCurveTo(0, -r * 0.45, -r * 0.62, r * 0.55);
  ctx.closePath();
}

function thermoPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.16, -r * 0.95);
  ctx.lineTo(r * 0.16, -r * 0.95);
  ctx.lineTo(r * 0.16, r * 0.28);
  ctx.arc(0, r * 0.52, r * 0.38, -Math.PI * 0.35, Math.PI * 1.35, false);
  ctx.lineTo(-r * 0.16, r * 0.28);
  ctx.closePath();
}

function taxiPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.92, r * 0.12);
  ctx.lineTo(-r * 0.55, -r * 0.22);
  ctx.lineTo(-r * 0.15, -r * 0.55);
  ctx.lineTo(r * 0.35, -r * 0.55);
  ctx.lineTo(r * 0.72, -r * 0.12);
  ctx.lineTo(r * 0.95, r * 0.12);
  ctx.lineTo(r * 0.95, r * 0.45);
  ctx.lineTo(-r * 0.92, r * 0.45);
  ctx.closePath();
  ctx.arc(-r * 0.48, r * 0.62, r * 0.22, 0, Math.PI * 2);
  ctx.moveTo(r * 0.72, r * 0.62);
  ctx.arc(r * 0.48, r * 0.62, r * 0.22, 0, Math.PI * 2);
}

function hydrantPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.28, -r * 0.55);
  ctx.lineTo(r * 0.28, -r * 0.55);
  ctx.lineTo(r * 0.32, r * 0.55);
  ctx.lineTo(-r * 0.32, r * 0.55);
  ctx.closePath();
  ctx.moveTo(-r * 0.55, -r * 0.15);
  ctx.lineTo(r * 0.55, -r * 0.15);
  ctx.lineTo(r * 0.55, r * 0.12);
  ctx.lineTo(-r * 0.55, r * 0.12);
  ctx.closePath();
  ctx.moveTo(-r * 0.42, r * 0.55);
  ctx.lineTo(r * 0.42, r * 0.55);
  ctx.lineTo(r * 0.42, r * 0.82);
  ctx.lineTo(-r * 0.42, r * 0.82);
  ctx.closePath();
}

function bikePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(-r * 0.48, r * 0.35, r * 0.38, 0, Math.PI * 2);
  ctx.moveTo(r * 0.82, r * 0.35);
  ctx.arc(r * 0.48, r * 0.35, r * 0.38, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.48, r * 0.35);
  ctx.lineTo(0, r * 0.22);
  ctx.lineTo(r * 0.48, r * 0.35);
  ctx.lineTo(r * 0.12, -r * 0.35);
  ctx.lineTo(-r * 0.22, -r * 0.15);
  ctx.closePath();
}

function lampPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.08, r * 0.95);
  ctx.lineTo(r * 0.08, r * 0.95);
  ctx.lineTo(r * 0.06, r * 0.05);
  ctx.lineTo(-r * 0.06, r * 0.05);
  ctx.closePath();
  ctx.moveTo(-r * 0.42, r * 0.08);
  ctx.lineTo(0, -r * 0.85);
  ctx.lineTo(r * 0.42, r * 0.08);
  ctx.closePath();
}

function signalPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.32, -r * 0.95);
  ctx.lineTo(r * 0.32, -r * 0.95);
  ctx.lineTo(r * 0.32, r * 0.55);
  ctx.lineTo(-r * 0.32, r * 0.55);
  ctx.closePath();
  ctx.arc(0, -r * 0.55, r * 0.16, 0, Math.PI * 2);
  ctx.moveTo(r * 0.16, -r * 0.05);
  ctx.arc(0, -r * 0.05, r * 0.16, 0, Math.PI * 2);
  ctx.moveTo(r * 0.16, r * 0.42);
  ctx.arc(0, r * 0.28, r * 0.16, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.08, r * 0.55);
  ctx.lineTo(r * 0.08, r * 0.55);
  ctx.lineTo(r * 0.08, r * 0.95);
  ctx.lineTo(-r * 0.08, r * 0.95);
  ctx.closePath();
}

function busPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.95, -r * 0.35);
  ctx.lineTo(r * 0.72, -r * 0.35);
  ctx.lineTo(r * 0.95, 0);
  ctx.lineTo(r * 0.95, r * 0.42);
  ctx.lineTo(-r * 0.95, r * 0.42);
  ctx.closePath();
  ctx.arc(-r * 0.48, r * 0.62, r * 0.2, 0, Math.PI * 2);
  ctx.moveTo(r * 0.62, r * 0.62);
  ctx.arc(r * 0.42, r * 0.62, r * 0.2, 0, Math.PI * 2);
}

function stickPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.22, -r * 0.15);
  ctx.lineTo(r * 0.22, -r * 0.15);
  ctx.lineTo(r * 0.18, r * 0.95);
  ctx.lineTo(-r * 0.18, r * 0.95);
  ctx.closePath();
  ctx.arc(-r * 0.42, -r * 0.42, r * 0.32, 0, Math.PI * 2);
  ctx.moveTo(r * 0.74, -r * 0.42);
  ctx.arc(r * 0.42, -r * 0.42, r * 0.32, 0, Math.PI * 2);
}

function dicePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.55, -r * 0.15);
  ctx.lineTo(0, -r * 0.72);
  ctx.lineTo(r * 0.75, -r * 0.22);
  ctx.lineTo(r * 0.75, r * 0.48);
  ctx.lineTo(0, r * 0.88);
  ctx.lineTo(-r * 0.55, r * 0.42);
  ctx.closePath();
}

function coinPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, 0, r * 0.82, 0, Math.PI * 2);
  ctx.moveTo(r * 0.42, 0);
  ctx.arc(0, 0, r * 0.42, 0, Math.PI * 2);
}

function pawnPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, -r * 0.55, r * 0.28, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.22, -r * 0.28);
  ctx.lineTo(r * 0.22, -r * 0.28);
  ctx.lineTo(r * 0.32, r * 0.35);
  ctx.lineTo(r * 0.62, r * 0.85);
  ctx.lineTo(-r * 0.62, r * 0.85);
  ctx.lineTo(-r * 0.32, r * 0.35);
  ctx.closePath();
}

function cartPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.85, r * 0.05);
  ctx.lineTo(r * 0.72, r * 0.05);
  ctx.lineTo(r * 0.55, r * 0.48);
  ctx.lineTo(-r * 0.72, r * 0.48);
  ctx.closePath();
  ctx.arc(-r * 0.38, r * 0.68, r * 0.18, 0, Math.PI * 2);
  ctx.moveTo(r * 0.48, r * 0.68);
  ctx.arc(r * 0.28, r * 0.68, r * 0.18, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.05, r * 0.02);
  ctx.lineTo(r * 0.08, -r * 0.75);
  ctx.lineTo(r * 0.42, -r * 0.55);
  ctx.lineTo(r * 0.28, r * 0.02);
  ctx.closePath();
}

function flagPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.55, -r * 0.95);
  ctx.lineTo(-r * 0.38, -r * 0.95);
  ctx.lineTo(-r * 0.38, r * 0.95);
  ctx.lineTo(-r * 0.55, r * 0.95);
  ctx.closePath();
  ctx.moveTo(-r * 0.35, -r * 0.88);
  ctx.lineTo(r * 0.85, -r * 0.45);
  ctx.lineTo(-r * 0.35, -r * 0.05);
  ctx.closePath();
}

function buoyPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, 0, r * 0.42, r * 0.85, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.42, -r * 0.08);
  ctx.rect(-r * 0.48, -r * 0.18, r * 0.96, r * 0.22);
}

function hookPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.12, -r * 0.95);
  ctx.lineTo(r * 0.12, -r * 0.95);
  ctx.lineTo(r * 0.1, r * 0.15);
  ctx.quadraticCurveTo(r * 0.55, r * 0.85, -r * 0.15, r * 0.82);
  ctx.quadraticCurveTo(r * 0.22, r * 0.55, r * 0.08, r * 0.18);
  ctx.lineTo(-r * 0.1, r * 0.18);
  ctx.closePath();
}

function portholePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, 0, r * 0.85, 0, Math.PI * 2);
  ctx.moveTo(r * 0.55, 0);
  ctx.arc(0, 0, r * 0.55, 0, Math.PI * 2, true);
}

function oarPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.12, -r * 0.95);
  ctx.lineTo(r * 0.12, -r * 0.95);
  ctx.lineTo(r * 0.1, r * 0.15);
  ctx.lineTo(r * 0.42, r * 0.85);
  ctx.lineTo(-r * 0.42, r * 0.85);
  ctx.lineTo(-r * 0.1, r * 0.15);
  ctx.closePath();
}

function hoopPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, 0, r * 0.88, 0, Math.PI * 2);
  ctx.moveTo(r * 0.58, 0);
  ctx.arc(0, 0, r * 0.58, 0, Math.PI * 2, true);
}

function unicyclePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, r * 0.35, r * 0.55, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.08, r * 0.35);
  ctx.rect(-r * 0.08, -r * 0.75, r * 0.16, r * 0.85);
  ctx.moveTo(-r * 0.42, -r * 0.82);
  ctx.rect(-r * 0.42, -r * 0.95, r * 0.84, r * 0.18);
}

function lionPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, 0, r * 0.72, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.85, -r * 0.35);
  ctx.arc(-r * 0.55, -r * 0.55, r * 0.32, 0, Math.PI * 2);
  ctx.moveTo(r * 0.85, -r * 0.35);
  ctx.arc(r * 0.55, -r * 0.55, r * 0.32, 0, Math.PI * 2);
}

function topperPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.42, -r * 0.85, r * 0.84, r * 0.7);
  ctx.moveTo(-r * 0.72, -r * 0.12);
  ctx.rect(-r * 0.78, -r * 0.18, r * 1.56, r * 0.22);
}

function orangePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, r * 0.06, r * 0.78, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.08, -r * 0.85);
  ctx.quadraticCurveTo(0, -r * 0.55, r * 0.22, -r * 0.72);
  ctx.quadraticCurveTo(0.05 * r, -r * 0.95, -r * 0.08, -r * 0.85);
}

function peachPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(-r * 0.12, r * 0.08, r * 0.58, r * 0.7, -0.2, 0, Math.PI * 2);
  ctx.moveTo(r * 0.55, 0);
  ctx.ellipse(r * 0.12, r * 0.08, r * 0.52, r * 0.66, 0.2, 0, Math.PI * 2);
}

function berryPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(-r * 0.22, r * 0.12, r * 0.38, 0, Math.PI * 2);
  ctx.moveTo(r * 0.42, r * 0.18);
  ctx.arc(r * 0.18, r * 0.18, r * 0.36, 0, Math.PI * 2);
  ctx.moveTo(0.08 * r, -r * 0.28);
  ctx.arc(0, -r * 0.22, r * 0.34, 0, Math.PI * 2);
}

function melonPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.9, r * 0.35);
  ctx.quadraticCurveTo(0, -r * 1.05, r * 0.9, r * 0.35);
  ctx.quadraticCurveTo(0, r * 0.85, -r * 0.9, r * 0.35);
  ctx.closePath();
}

function pineapplePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, r * 0.28, r * 0.48, r * 0.62, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.22, -r * 0.28);
  ctx.lineTo(0, -r * 0.95);
  ctx.lineTo(r * 0.22, -r * 0.28);
  ctx.closePath();
}

function pinePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, -r * 0.95);
  ctx.lineTo(r * 0.62, -r * 0.15);
  ctx.lineTo(r * 0.28, -r * 0.15);
  ctx.lineTo(r * 0.78, r * 0.42);
  ctx.lineTo(r * 0.16, r * 0.42);
  ctx.lineTo(r * 0.16, r * 0.92);
  ctx.lineTo(-r * 0.16, r * 0.92);
  ctx.lineTo(-r * 0.16, r * 0.42);
  ctx.lineTo(-r * 0.78, r * 0.42);
  ctx.lineTo(-r * 0.28, -r * 0.15);
  ctx.lineTo(-r * 0.62, -r * 0.15);
  ctx.closePath();
}

function hedgehogPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, r * 0.18, r * 0.72, r * 0.48, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.15, -r * 0.15);
  ctx.lineTo(-r * 0.05, -r * 0.85);
  ctx.lineTo(r * 0.22, -r * 0.15);
  ctx.closePath();
  ctx.moveTo(r * 0.15, -r * 0.05);
  ctx.lineTo(r * 0.42, -r * 0.72);
  ctx.lineTo(r * 0.52, 0);
  ctx.closePath();
}

function nestPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, r * 0.22, r * 0.82, r * 0.38, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.22, -r * 0.05);
  ctx.ellipse(-r * 0.12, -r * 0.08, r * 0.22, r * 0.28, 0, 0, Math.PI * 2);
  ctx.moveTo(r * 0.32, 0);
  ctx.ellipse(r * 0.16, -r * 0.02, r * 0.2, r * 0.26, 0, 0, Math.PI * 2);
}

function toadstoolPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, -r * 0.15, r * 0.82, r * 0.42, 0, Math.PI, 0, true);
  ctx.lineTo(r * 0.82, -r * 0.05);
  ctx.lineTo(-r * 0.82, -r * 0.05);
  ctx.closePath();
  ctx.moveTo(-r * 0.22, -r * 0.02);
  ctx.rect(-r * 0.22, -r * 0.02, r * 0.44, r * 0.88);
}

function locketPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, r * 0.18, r * 0.55, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.12, -r * 0.35);
  ctx.rect(-r * 0.1, -r * 0.95, r * 0.2, r * 0.55);
}

function dovePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.85, r * 0.15);
  ctx.quadraticCurveTo(-r * 0.15, -r * 0.85, r * 0.75, -r * 0.05);
  ctx.quadraticCurveTo(r * 0.15, r * 0.15, -r * 0.15, r * 0.35);
  ctx.quadraticCurveTo(-r * 0.55, r * 0.55, -r * 0.85, r * 0.15);
  ctx.closePath();
}

function kissPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.75, 0);
  ctx.quadraticCurveTo(-r * 0.25, -r * 0.55, 0, 0);
  ctx.quadraticCurveTo(r * 0.25, r * 0.55, r * 0.75, 0);
  ctx.quadraticCurveTo(r * 0.25, -r * 0.55, 0, 0);
  ctx.quadraticCurveTo(-r * 0.25, r * 0.55, -r * 0.75, 0);
  ctx.closePath();
}

function roverPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.55, -r * 0.22, r * 1.1, r * 0.48);
  ctx.moveTo(-r * 0.55, r * 0.42);
  ctx.arc(-r * 0.42, r * 0.52, r * 0.22, 0, Math.PI * 2);
  ctx.moveTo(r * 0.62, r * 0.42);
  ctx.arc(r * 0.42, r * 0.52, r * 0.22, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.08, -r * 0.22);
  ctx.rect(-r * 0.08, -r * 0.75, r * 0.16, r * 0.55);
}

function sparkPath(ctx: CanvasRenderingContext2D, r: number) {
  starPath(ctx, r * 0.72, 4, 0.32);
}

function astroPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, -r * 0.15, r * 0.55, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.42, r * 0.35);
  ctx.rect(-r * 0.42, r * 0.22, r * 0.84, r * 0.62);
}

function pretzelPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.65, r * 0.15);
  ctx.bezierCurveTo(-r * 0.95, -r * 0.75, r * 0.15, -r * 0.95, r * 0.15, 0);
  ctx.bezierCurveTo(r * 0.15, r * 0.85, -r * 0.85, r * 0.65, -r * 0.25, r * 0.05);
  ctx.bezierCurveTo(r * 0.85, -r * 0.55, r * 0.95, r * 0.75, r * 0.25, r * 0.35);
  ctx.bezierCurveTo(-r * 0.35, 0, -r * 0.15, -r * 0.35, -r * 0.65, r * 0.15);
  ctx.closePath();
}

function sundaePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.55, r * 0.15);
  ctx.lineTo(-r * 0.35, r * 0.88);
  ctx.lineTo(r * 0.35, r * 0.88);
  ctx.lineTo(r * 0.55, r * 0.15);
  ctx.closePath();
  ctx.moveTo(0, -r * 0.15);
  ctx.arc(0, -r * 0.05, r * 0.42, 0, Math.PI * 2);
}

function chocoPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.7, -r * 0.55, r * 1.4, r * 1.1);
  ctx.moveTo(-r * 0.7, 0);
  ctx.lineTo(r * 0.7, 0);
  ctx.moveTo(0, -r * 0.55);
  ctx.lineTo(0, r * 0.55);
}

function saxPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.75, -r * 0.55);
  ctx.quadraticCurveTo(-r * 0.15, -r * 0.95, r * 0.55, -r * 0.15);
  ctx.quadraticCurveTo(r * 0.85, r * 0.45, r * 0.15, r * 0.75);
  ctx.quadraticCurveTo(-r * 0.45, r * 0.55, -r * 0.25, 0);
  ctx.quadraticCurveTo(-r * 0.85, -r * 0.05, -r * 0.75, -r * 0.55);
  ctx.closePath();
}

function trumpetPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.95, -r * 0.12);
  ctx.lineTo(r * 0.25, -r * 0.12);
  ctx.lineTo(r * 0.95, -r * 0.45);
  ctx.lineTo(r * 0.95, r * 0.45);
  ctx.lineTo(r * 0.25, r * 0.12);
  ctx.lineTo(-r * 0.95, r * 0.12);
  ctx.closePath();
}

function ampPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.72, -r * 0.75, r * 1.44, r * 1.5);
  ctx.moveTo(0, 0);
  ctx.arc(0, 0.05 * r, r * 0.38, 0, Math.PI * 2);
}

function forkPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.12, r * 0.95);
  ctx.lineTo(r * 0.12, r * 0.95);
  ctx.lineTo(r * 0.1, r * 0.05);
  ctx.lineTo(r * 0.42, -r * 0.85);
  ctx.lineTo(r * 0.22, -r * 0.85);
  ctx.lineTo(0.08 * r, -r * 0.15);
  ctx.lineTo(-r * 0.08, -r * 0.15);
  ctx.lineTo(-r * 0.22, -r * 0.85);
  ctx.lineTo(-r * 0.42, -r * 0.85);
  ctx.lineTo(-r * 0.1, r * 0.05);
  ctx.closePath();
}

function panPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(-r * 0.15, 0, r * 0.62, 0, Math.PI * 2);
  ctx.moveTo(r * 0.42, -r * 0.12);
  ctx.rect(r * 0.38, -r * 0.12, r * 0.58, r * 0.24);
}

function chefhatPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, -r * 0.25, r * 0.72, r * 0.48, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.42, r * 0.15);
  ctx.rect(-r * 0.42, r * 0.05, r * 0.84, r * 0.55);
}

function tornadoPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.72, -r * 0.75);
  ctx.lineTo(r * 0.72, -r * 0.75);
  ctx.lineTo(r * 0.28, r * 0.15);
  ctx.lineTo(r * 0.12, r * 0.92);
  ctx.lineTo(-r * 0.12, r * 0.92);
  ctx.lineTo(-r * 0.28, r * 0.15);
  ctx.closePath();
}

function subwayPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.9, -r * 0.42, r * 1.8, r * 0.72);
  ctx.moveTo(-r * 0.7, r * 0.42);
  ctx.arc(-r * 0.55, r * 0.52, r * 0.2, 0, Math.PI * 2);
  ctx.moveTo(r * 0.7, r * 0.42);
  ctx.arc(r * 0.55, r * 0.52, r * 0.2, 0, Math.PI * 2);
}

function mailboxPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.62, -r * 0.35, r * 1.24, r * 0.7);
  ctx.moveTo(-r * 0.08, r * 0.35);
  ctx.rect(-r * 0.08, r * 0.32, r * 0.16, r * 0.58);
}

function skylinePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.9, r * 0.05, r * 0.38, r * 0.7);
  ctx.moveTo(-r * 0.42, -r * 0.45);
  ctx.rect(-r * 0.42, -r * 0.45, r * 0.32, r * 1.2);
  ctx.moveTo(0.02 * r, -r * 0.15);
  ctx.rect(0, -r * 0.15, r * 0.42, r * 0.9);
  ctx.moveTo(r * 0.52, r * 0.15);
  ctx.rect(r * 0.52, r * 0.15, r * 0.32, r * 0.6);
}

function ghostiePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.62, r * 0.15);
  ctx.quadraticCurveTo(-r * 0.62, -r * 0.85, 0, -r * 0.85);
  ctx.quadraticCurveTo(r * 0.62, -r * 0.85, r * 0.62, r * 0.15);
  ctx.lineTo(r * 0.38, r * 0.75);
  ctx.lineTo(0.12 * r, r * 0.35);
  ctx.lineTo(-r * 0.12, r * 0.75);
  ctx.lineTo(-r * 0.38, r * 0.35);
  ctx.closePath();
}

function pixelPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.55, -r * 0.55, r * 0.5, r * 0.5);
  ctx.moveTo(r * 0.05, -r * 0.25);
  ctx.rect(0.05 * r, -r * 0.25, r * 0.5, r * 0.5);
  ctx.moveTo(-r * 0.25, r * 0.15);
  ctx.rect(-r * 0.25, r * 0.15, r * 0.5, r * 0.5);
}

function joystickPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.7, r * 0.15, r * 1.4, r * 0.55);
  ctx.moveTo(-r * 0.1, r * 0.15);
  ctx.rect(-r * 0.1, -r * 0.55, r * 0.2, r * 0.75);
  ctx.moveTo(0, -r * 0.72);
  ctx.arc(0, -r * 0.72, r * 0.22, 0, Math.PI * 2);
}

function shroomupPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, -r * 0.15, r * 0.78, r * 0.42, 0, Math.PI, 0, true);
  ctx.lineTo(r * 0.78, 0);
  ctx.lineTo(-r * 0.78, 0);
  ctx.closePath();
  ctx.moveTo(-r * 0.28, 0);
  ctx.rect(-r * 0.28, 0, r * 0.56, r * 0.72);
}

function invaderPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.55, -r * 0.35, r * 1.1, r * 0.55);
  ctx.moveTo(-r * 0.72, -r * 0.55);
  ctx.rect(-r * 0.72, -r * 0.55, r * 0.22, r * 0.22);
  ctx.moveTo(r * 0.5, -r * 0.55);
  ctx.rect(r * 0.5, -r * 0.55, r * 0.22, r * 0.22);
  ctx.moveTo(-r * 0.42, r * 0.28);
  ctx.rect(-r * 0.42, r * 0.28, r * 0.22, r * 0.35);
  ctx.moveTo(r * 0.2, r * 0.28);
  ctx.rect(r * 0.2, r * 0.28, r * 0.22, r * 0.35);
}

function skullPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, -r * 0.12, r * 0.62, r * 0.7, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.32, r * 0.55);
  ctx.rect(-r * 0.32, r * 0.48, r * 0.64, r * 0.32);
}

function batPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.95, r * 0.15);
  ctx.quadraticCurveTo(-r * 0.45, -r * 0.85, 0, -r * 0.05);
  ctx.quadraticCurveTo(r * 0.45, -r * 0.85, r * 0.95, r * 0.15);
  ctx.quadraticCurveTo(r * 0.25, r * 0.35, 0, r * 0.12);
  ctx.quadraticCurveTo(-r * 0.25, r * 0.35, -r * 0.95, r * 0.15);
  ctx.closePath();
}

function pumpkinPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(0, r * 0.12, r * 0.82, r * 0.68, 0, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.08, -r * 0.55);
  ctx.rect(-r * 0.08, -r * 0.88, r * 0.16, r * 0.35);
}

function tombPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.55, r * 0.85);
  ctx.lineTo(-r * 0.55, -r * 0.15);
  ctx.quadraticCurveTo(-r * 0.55, -r * 0.85, 0, -r * 0.85);
  ctx.quadraticCurveTo(r * 0.55, -r * 0.85, r * 0.55, -r * 0.15);
  ctx.lineTo(r * 0.55, r * 0.85);
  ctx.closePath();
}

function cauldronPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.72, -r * 0.05);
  ctx.quadraticCurveTo(-r * 0.85, r * 0.95, 0, r * 0.85);
  ctx.quadraticCurveTo(r * 0.85, r * 0.95, r * 0.72, -r * 0.05);
  ctx.closePath();
  ctx.moveTo(-r * 0.78, -r * 0.22);
  ctx.rect(-r * 0.78, -r * 0.28, r * 1.56, r * 0.22);
}

function webPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(0, -r);
  ctx.lineTo(r * 0.85, r * 0.55);
  ctx.lineTo(-r * 0.85, r * 0.55);
  ctx.closePath();
}

function trophyPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.42, -r * 0.55);
  ctx.quadraticCurveTo(-r * 0.72, 0, -r * 0.22, r * 0.28);
  ctx.lineTo(r * 0.22, r * 0.28);
  ctx.quadraticCurveTo(r * 0.72, 0, r * 0.42, -r * 0.55);
  ctx.closePath();
  ctx.moveTo(-r * 0.18, r * 0.28);
  ctx.rect(-r * 0.18, r * 0.28, r * 0.36, r * 0.28);
  ctx.moveTo(-r * 0.38, r * 0.55);
  ctx.rect(-r * 0.38, r * 0.72, r * 0.76, r * 0.18);
}

function whistlePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.ellipse(-r * 0.15, 0, r * 0.48, r * 0.38, 0, 0, Math.PI * 2);
  ctx.moveTo(r * 0.28, -r * 0.12);
  ctx.rect(r * 0.22, -r * 0.12, r * 0.58, r * 0.24);
}

function jerseyPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.85, -r * 0.55);
  ctx.lineTo(-r * 0.28, -r * 0.35);
  ctx.lineTo(r * 0.28, -r * 0.35);
  ctx.lineTo(r * 0.85, -r * 0.55);
  ctx.lineTo(r * 0.72, r * 0.85);
  ctx.lineTo(-r * 0.72, r * 0.85);
  ctx.closePath();
}

function skatePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.85, -r * 0.15);
  ctx.lineTo(r * 0.75, -r * 0.35);
  ctx.lineTo(r * 0.85, r * 0.05);
  ctx.lineTo(-r * 0.75, r * 0.25);
  ctx.closePath();
  ctx.moveTo(-r * 0.35, r * 0.22);
  ctx.arc(-r * 0.35, r * 0.42, r * 0.18, 0, Math.PI * 2);
  ctx.moveTo(r * 0.42, r * 0.08);
  ctx.arc(r * 0.42, r * 0.28, r * 0.18, 0, Math.PI * 2);
}

function goalPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.85, r * 0.75);
  ctx.lineTo(-r * 0.85, -r * 0.55);
  ctx.lineTo(r * 0.85, -r * 0.55);
  ctx.lineTo(r * 0.85, r * 0.75);
  ctx.lineTo(r * 0.65, r * 0.75);
  ctx.lineTo(r * 0.65, -r * 0.35);
  ctx.lineTo(-r * 0.65, -r * 0.35);
  ctx.lineTo(-r * 0.65, r * 0.75);
  ctx.closePath();
}

function pencilPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.18, r * 0.85);
  ctx.lineTo(r * 0.18, r * 0.85);
  ctx.lineTo(r * 0.18, -r * 0.45);
  ctx.lineTo(0, -r * 0.95);
  ctx.lineTo(-r * 0.18, -r * 0.45);
  ctx.closePath();
}

function bookPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.05, -r * 0.75);
  ctx.lineTo(-r * 0.78, -r * 0.55);
  ctx.lineTo(-r * 0.78, r * 0.75);
  ctx.lineTo(-r * 0.05, r * 0.55);
  ctx.closePath();
  ctx.moveTo(r * 0.05, -r * 0.75);
  ctx.lineTo(r * 0.78, -r * 0.55);
  ctx.lineTo(r * 0.78, r * 0.75);
  ctx.lineTo(r * 0.05, r * 0.55);
  ctx.closePath();
}

function globePath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(0, -r * 0.08, r * 0.68, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.18, r * 0.58);
  ctx.rect(-r * 0.18, r * 0.55, r * 0.36, r * 0.32);
}

function backpackPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.55, -r * 0.45, r * 1.1, r * 1.15);
  ctx.moveTo(-r * 0.38, -r * 0.72);
  ctx.rect(-r * 0.38, -r * 0.72, r * 0.76, r * 0.32);
}

function rulerPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.rect(-r * 0.85, -r * 0.22, r * 1.7, r * 0.44);
}

function bellPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.55, r * 0.15);
  ctx.quadraticCurveTo(-r * 0.55, -r * 0.85, 0, -r * 0.85);
  ctx.quadraticCurveTo(r * 0.55, -r * 0.85, r * 0.55, r * 0.15);
  ctx.closePath();
  ctx.moveTo(-r * 0.08, r * 0.15);
  ctx.arc(0, r * 0.32, r * 0.16, 0, Math.PI * 2);
}

function aBodyPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.7, 0);
  ctx.quadraticCurveTo(-r * 0.58, -r * 0.58, 0, -r * 0.52);
  ctx.quadraticCurveTo(r * 0.58, -r * 0.58, r * 0.7, 0);
  ctx.quadraticCurveTo(r * 0.58, r * 0.58, 0, r * 0.52);
  ctx.quadraticCurveTo(-r * 0.58, r * 0.58, -r * 0.7, 0);
  ctx.closePath();
}

function aDragHeadPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.82, 0);
  ctx.quadraticCurveTo(-r * 0.45, -r * 0.55, r * 0.08, -r * 0.32);
  ctx.lineTo(r * 0.98, -r * 0.12);
  ctx.lineTo(r * 0.62, r * 0.06);
  ctx.lineTo(r * 0.88, r * 0.38);
  ctx.lineTo(r * 0.22, r * 0.22);
  ctx.quadraticCurveTo(-r * 0.2, r * 0.52, -r * 0.82, 0);
  ctx.closePath();
  ctx.moveTo(-r * 0.02, -r * 0.3);
  ctx.lineTo(r * 0.18, -r * 0.98);
  ctx.lineTo(r * 0.38, -r * 0.22);
  ctx.closePath();
  ctx.moveTo(-r * 0.38, -r * 0.28);
  ctx.lineTo(-r * 0.18, -r * 0.88);
  ctx.lineTo(r * 0.08, -r * 0.2);
  ctx.closePath();
}

function aDogHeadPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.42, r * 0.18);
  ctx.quadraticCurveTo(-r * 0.35, -r * 0.28, r * 0.22, -r * 0.2);
  ctx.quadraticCurveTo(r * 0.62, -r * 0.06, r * 0.95, r * 0.16);
  ctx.quadraticCurveTo(r * 0.9, r * 0.42, r * 0.4, r * 0.42);
  ctx.quadraticCurveTo(0, r * 0.5, -r * 0.42, r * 0.18);
  ctx.closePath();
  ctx.moveTo(-r * 0.12, -r * 0.08);
  ctx.quadraticCurveTo(-r * 0.85, -r * 0.42, -r * 0.98, r * 0.42);
  ctx.quadraticCurveTo(-r * 0.48, r * 0.48, 0, r * 0.08);
  ctx.closePath();
  ctx.moveTo(r * 0.12, -r * 0.16);
  ctx.quadraticCurveTo(-r * 0.22, -r * 0.95, -r * 0.72, -r * 0.22);
  ctx.quadraticCurveTo(r * 0.02, -r * 0.22, r * 0.22, 0.02 * r);
  ctx.closePath();
}

function aFerrHeadPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.72, r * 0.08);
  ctx.quadraticCurveTo(-r * 0.52, -r * 0.4, -r * 0.02, -r * 0.3);
  ctx.quadraticCurveTo(r * 0.48, -r * 0.1, r * 0.98, r * 0.08);
  ctx.quadraticCurveTo(r * 0.48, r * 0.26, 0, r * 0.3);
  ctx.quadraticCurveTo(-r * 0.48, r * 0.4, -r * 0.72, r * 0.08);
  ctx.closePath();
  ctx.moveTo(-r * 0.22, -r * 0.26);
  ctx.lineTo(-r * 0.32, -r * 0.7);
  ctx.lineTo(0, -r * 0.26);
  ctx.closePath();
  ctx.moveTo(r * 0.06, -r * 0.2);
  ctx.lineTo(r * 0.04, -r * 0.6);
  ctx.lineTo(r * 0.24, -r * 0.16);
  ctx.closePath();
}

function aCatpHeadPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.arc(r * 0.06, r * 0.08, r * 0.62, 0, Math.PI * 2);
  ctx.moveTo(-r * 0.04, -r * 0.46);
  ctx.quadraticCurveTo(-r * 0.32, -r * 0.95, -r * 0.55, -r * 0.52);
  ctx.quadraticCurveTo(-r * 0.2, -r * 0.6, r * 0.02, -r * 0.38);
  ctx.closePath();
  ctx.moveTo(r * 0.28, -r * 0.46);
  ctx.quadraticCurveTo(r * 0.42, -r * 0.98, r * 0.68, -r * 0.5);
  ctx.quadraticCurveTo(r * 0.38, -r * 0.56, r * 0.22, -r * 0.36);
  ctx.closePath();
}

function aZebrHeadPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.58, r * 0.1);
  ctx.quadraticCurveTo(-r * 0.4, -r * 0.42, r * 0.12, -r * 0.22);
  ctx.quadraticCurveTo(r * 0.58, 0, r * 0.98, r * 0.16);
  ctx.quadraticCurveTo(r * 0.55, r * 0.4, r * 0.08, r * 0.38);
  ctx.quadraticCurveTo(-r * 0.38, r * 0.38, -r * 0.58, r * 0.1);
  ctx.closePath();
  ctx.moveTo(-r * 0.08, -r * 0.2);
  ctx.lineTo(-r * 0.22, -r * 0.95);
  ctx.lineTo(r * 0.14, -r * 0.18);
  ctx.closePath();
  ctx.moveTo(r * 0.16, -r * 0.14);
  ctx.lineTo(r * 0.22, -r * 0.88);
  ctx.lineTo(r * 0.42, -r * 0.1);
  ctx.closePath();
}

function aDragTailPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(r * 0.92, -r * 0.16);
  ctx.quadraticCurveTo(r * 0.15, -r * 0.3, -r * 0.32, -r * 0.1);
  ctx.lineTo(-r * 0.95, -r * 0.42);
  ctx.lineTo(-r * 0.52, 0);
  ctx.lineTo(-r * 0.95, r * 0.42);
  ctx.lineTo(-r * 0.32, r * 0.1);
  ctx.quadraticCurveTo(r * 0.15, r * 0.3, r * 0.92, r * 0.16);
  ctx.closePath();
}

function aDogTailPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(r * 0.88, -r * 0.1);
  ctx.quadraticCurveTo(r * 0.18, -r * 0.55, -r * 0.35, -r * 0.52);
  ctx.quadraticCurveTo(-r * 0.95, -r * 0.12, -r * 0.52, r * 0.22);
  ctx.quadraticCurveTo(-r * 0.12, r * 0.4, r * 0.48, r * 0.12);
  ctx.quadraticCurveTo(r * 0.75, r * 0.04, r * 0.88, r * 0.1);
  ctx.closePath();
}

function aFerrTailPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(r * 0.95, -r * 0.2);
  ctx.quadraticCurveTo(r * 0.12, -r * 0.48, -r * 0.55, -r * 0.2);
  ctx.quadraticCurveTo(-r * 0.98, 0, -r * 0.55, r * 0.2);
  ctx.quadraticCurveTo(r * 0.12, r * 0.48, r * 0.95, r * 0.2);
  ctx.closePath();
}

function aCatpTailPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(r * 0.88, 0);
  ctx.quadraticCurveTo(r * 0.68, -r * 0.5, r * 0.08, -r * 0.46);
  ctx.quadraticCurveTo(-r * 0.52, -r * 0.52, -r * 0.82, -r * 0.06);
  ctx.lineTo(-r * 0.98, -r * 0.4);
  ctx.lineTo(-r * 0.68, 0);
  ctx.lineTo(-r * 0.98, r * 0.4);
  ctx.lineTo(-r * 0.82, r * 0.06);
  ctx.quadraticCurveTo(-r * 0.52, r * 0.52, r * 0.08, r * 0.46);
  ctx.quadraticCurveTo(r * 0.68, r * 0.5, r * 0.88, 0);
  ctx.closePath();
}

function aZebrTailPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(r * 0.92, -r * 0.08);
  ctx.quadraticCurveTo(r * 0.18, -r * 0.16, -r * 0.22, -r * 0.06);
  ctx.lineTo(-r * 0.85, -r * 0.4);
  ctx.lineTo(-r * 0.52, 0);
  ctx.lineTo(-r * 0.9, r * 0.36);
  ctx.lineTo(-r * 0.22, r * 0.08);
  ctx.quadraticCurveTo(r * 0.18, r * 0.16, r * 0.92, r * 0.08);
  ctx.closePath();
}

function aLegPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.95, -r * 0.2);
  ctx.quadraticCurveTo(-r * 0.15, r * 0.28, r * 0.28, -r * 0.12);
  ctx.quadraticCurveTo(r * 0.68, -r * 0.38, r * 0.98, r * 0.28);
  ctx.quadraticCurveTo(r * 0.48, r * 0.52, r * 0.08, r * 0.22);
  ctx.quadraticCurveTo(-r * 0.38, r * 0.62, -r * 0.92, r * 0.24);
  ctx.closePath();
}

function aNubPath(ctx: CanvasRenderingContext2D, r: number) {
  ctx.moveTo(-r * 0.68, -r * 0.2);
  ctx.quadraticCurveTo(r * 0.12, -r * 0.52, r * 0.85, 0);
  ctx.quadraticCurveTo(r * 0.12, r * 0.52, -r * 0.68, r * 0.2);
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
    case "crab":
      crabPath(ctx, r);
      break;
    case "helm":
      helmPath(ctx, r);
      break;
    case "lighthouse":
      lighthousePath(ctx, r);
      break;
    case "compass":
      compassPath(ctx, r);
      break;
    case "popcorn":
      popcornPath(ctx, r);
      break;
    case "cane":
      canePath(ctx, r);
      break;
    case "mask":
      maskPath(ctx, r);
      break;
    case "apple":
      applePath(ctx, r);
      break;
    case "banana":
      bananaPath(ctx, r);
      break;
    case "grape":
      grapePath(ctx, r);
      break;
    case "rabbit":
      rabbitPath(ctx, r);
      break;
    case "snail":
      snailPath(ctx, r);
      break;
    case "fern":
      fernPath(ctx, r);
      break;
    case "rose":
      rosePath(ctx, r);
      break;
    case "diamond":
      diamondPath(ctx, r);
      break;
    case "candle":
      candlePath(ctx, r);
      break;
    case "alien":
      alienPath(ctx, r);
      break;
    case "asteroid":
      asteroidPath(ctx, r);
      break;
    case "telescope":
      telescopePath(ctx, r);
      break;
    case "cookie":
      cookiePath(ctx, r);
      break;
    case "waffle":
      wafflePath(ctx, r);
      break;
    case "guitar":
      guitarPath(ctx, r);
      break;
    case "drum":
      drumPath(ctx, r);
      break;
    case "piano":
      pianoPath(ctx, r);
      break;
    case "clef":
      clefPath(ctx, r);
      break;
    case "kettle":
      kettlePath(ctx, r);
      break;
    case "mug":
      mugPath(ctx, r);
      break;
    case "whisk":
      whiskPath(ctx, r);
      break;
    case "toast":
      toastPath(ctx, r);
      break;
    case "egg":
      eggPath(ctx, r);
      break;
    case "spoon":
      spoonPath(ctx, r);
      break;
    case "chili":
      chiliPath(ctx, r);
      break;
    case "bottle":
      bottlePath(ctx, r);
      break;
    case "rain":
      rainPath(ctx, r);
      break;
    case "flake":
      flakePath(ctx, r);
      break;
    case "wind":
      windPath(ctx, r);
      break;
    case "rainbow":
      rainbowPath(ctx, r);
      break;
    case "thermo":
      thermoPath(ctx, r);
      break;
    case "taxi":
      taxiPath(ctx, r);
      break;
    case "hydrant":
      hydrantPath(ctx, r);
      break;
    case "bike":
      bikePath(ctx, r);
      break;
    case "lamp":
      lampPath(ctx, r);
      break;
    case "signal":
      signalPath(ctx, r);
      break;
    case "bus":
      busPath(ctx, r);
      break;
    case "stick":
      stickPath(ctx, r);
      break;
    case "dice":
      dicePath(ctx, r);
      break;
    case "coin":
      coinPath(ctx, r);
      break;
    case "pawn":
      pawnPath(ctx, r);
      break;
    case "cart":
      cartPath(ctx, r);
      break;
    case "flag":
      flagPath(ctx, r);
      break;
    case "buoy":
      buoyPath(ctx, r);
      break;
    case "hook":
      hookPath(ctx, r);
      break;
    case "porthole":
      portholePath(ctx, r);
      break;
    case "oar":
      oarPath(ctx, r);
      break;
    case "hoop":
      hoopPath(ctx, r);
      break;
    case "unicycle":
      unicyclePath(ctx, r);
      break;
    case "lion":
      lionPath(ctx, r);
      break;
    case "topper":
      topperPath(ctx, r);
      break;
    case "orange":
      orangePath(ctx, r);
      break;
    case "peach":
      peachPath(ctx, r);
      break;
    case "berry":
      berryPath(ctx, r);
      break;
    case "melon":
      melonPath(ctx, r);
      break;
    case "pineapple":
      pineapplePath(ctx, r);
      break;
    case "pine":
      pinePath(ctx, r);
      break;
    case "hedgehog":
      hedgehogPath(ctx, r);
      break;
    case "nest":
      nestPath(ctx, r);
      break;
    case "toadstool":
      toadstoolPath(ctx, r);
      break;
    case "locket":
      locketPath(ctx, r);
      break;
    case "dove":
      dovePath(ctx, r);
      break;
    case "kiss":
      kissPath(ctx, r);
      break;
    case "rover":
      roverPath(ctx, r);
      break;
    case "spark":
      sparkPath(ctx, r);
      break;
    case "astro":
      astroPath(ctx, r);
      break;
    case "pretzel":
      pretzelPath(ctx, r);
      break;
    case "sundae":
      sundaePath(ctx, r);
      break;
    case "choco":
      chocoPath(ctx, r);
      break;
    case "sax":
      saxPath(ctx, r);
      break;
    case "trumpet":
      trumpetPath(ctx, r);
      break;
    case "amp":
      ampPath(ctx, r);
      break;
    case "fork":
      forkPath(ctx, r);
      break;
    case "pan":
      panPath(ctx, r);
      break;
    case "chefhat":
      chefhatPath(ctx, r);
      break;
    case "tornado":
      tornadoPath(ctx, r);
      break;
    case "subway":
      subwayPath(ctx, r);
      break;
    case "mailbox":
      mailboxPath(ctx, r);
      break;
    case "skyline":
      skylinePath(ctx, r);
      break;
    case "ghostie":
      ghostiePath(ctx, r);
      break;
    case "pixel":
      pixelPath(ctx, r);
      break;
    case "joystick":
      joystickPath(ctx, r);
      break;
    case "shroomup":
      shroomupPath(ctx, r);
      break;
    case "invader":
      invaderPath(ctx, r);
      break;
    case "skull":
      skullPath(ctx, r);
      break;
    case "bat":
      batPath(ctx, r);
      break;
    case "pumpkin":
      pumpkinPath(ctx, r);
      break;
    case "tomb":
      tombPath(ctx, r);
      break;
    case "cauldron":
      cauldronPath(ctx, r);
      break;
    case "web":
      webPath(ctx, r);
      break;
    case "trophy":
      trophyPath(ctx, r);
      break;
    case "whistle":
      whistlePath(ctx, r);
      break;
    case "jersey":
      jerseyPath(ctx, r);
      break;
    case "skate":
      skatePath(ctx, r);
      break;
    case "goal":
      goalPath(ctx, r);
      break;
    case "pencil":
      pencilPath(ctx, r);
      break;
    case "book":
      bookPath(ctx, r);
      break;
    case "globe":
      globePath(ctx, r);
      break;
    case "backpack":
      backpackPath(ctx, r);
      break;
    case "ruler":
      rulerPath(ctx, r);
      break;
    case "bell":
      bellPath(ctx, r);
      break;
    case "aBody":
      aBodyPath(ctx, r);
      break;
    case "aLeg":
      aLegPath(ctx, r);
      break;
    case "aNub":
      aNubPath(ctx, r);
      break;
    case "aDragHead":
      aDragHeadPath(ctx, r);
      break;
    case "aDragTail":
      aDragTailPath(ctx, r);
      break;
    case "aDogHead":
      aDogHeadPath(ctx, r);
      break;
    case "aDogTail":
      aDogTailPath(ctx, r);
      break;
    case "aFerrHead":
      aFerrHeadPath(ctx, r);
      break;
    case "aFerrTail":
      aFerrTailPath(ctx, r);
      break;
    case "aCatpHead":
      aCatpHeadPath(ctx, r);
      break;
    case "aCatpTail":
      aCatpTailPath(ctx, r);
      break;
    case "aZebrHead":
      aZebrHeadPath(ctx, r);
      break;
    case "aZebrTail":
      aZebrTailPath(ctx, r);
      break;
    default:
      housePath(ctx, r);
      break;
  }
}

function drawAnimalMarks(ctx: CanvasRenderingContext2D, c: Charge, r: number) {
  const eye = (x: number, y: number, rad: number) => {
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.fill();
  };
  ctx.fillStyle = luma(c.a) > 0.55 ? "#141414" : "#f6f1e6";
  if (c.kind === "aDragHead") eye(r * 0.18, -r * 0.04, r * 0.08);
  if (c.kind === "aDogHead") eye(r * 0.28, 0, r * 0.075);
  if (c.kind === "aFerrHead") eye(r * 0.08, -r * 0.02, r * 0.055);
  if (c.kind === "aCatpHead") {
    eye(-r * 0.08, r * 0.02, r * 0.07);
    eye(r * 0.22, r * 0.02, r * 0.07);
  }
  if (c.kind === "aZebrHead") eye(r * 0.12, -r * 0.02, r * 0.06);
  if (c.kind === "aBody" && c.pattern === "bar") {
    ctx.beginPath();
    ctx.moveTo(0, -r * 0.16);
    ctx.lineTo(r * 0.14, 0);
    ctx.lineTo(0, r * 0.16);
    ctx.lineTo(-r * 0.14, 0);
    ctx.closePath();
    ctx.fill();
  }
}

function drawSilhouette(ctx: CanvasRenderingContext2D, c: Charge, r: number) {
  const path = () => drawKind(ctx, c.kind, r);
  if (c.mirror) {
    ctx.save();
    ctx.scale(-1, 1);
    fillPattern(ctx, path, c, r);
    drawAnimalMarks(ctx, c, r);
    ctx.restore();
    return;
  }
  fillPattern(ctx, path, c, r);
  drawAnimalMarks(ctx, c, r);
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

const ANIMAL_INK: Record<AnimalChainOn, { a: string; b: string; pattern: Pattern }> = {
  dragon: { a: "#2a7a38", b: "#e8b830", pattern: "bar" },
  dog: { a: "#c9922e", b: "#f2d98a", pattern: "half" },
  ferret: { a: "#c49a62", b: "#f0e2c4", pattern: "half" },
  caterpillar: { a: "#5aa84a", b: "#e8c840", pattern: "hoop" },
  zebra: { a: "#f4f4f4", b: "#141414", pattern: "stripe" },
};

function animalCharge(animal: AnimalChainOn, role: AnimalRole): Charge {
  const ink = ANIMAL_INK[animal];
  const kind: Kind =
    role === "body"
      ? "aBody"
      : role === "leg"
        ? "aLeg"
        : role === "nub"
          ? "aNub"
          : role === "head"
            ? animal === "dragon"
              ? "aDragHead"
              : animal === "dog"
                ? "aDogHead"
                : animal === "ferret"
                  ? "aFerrHead"
                  : animal === "caterpillar"
                    ? "aCatpHead"
                    : "aZebrHead"
            : animal === "dragon"
              ? "aDragTail"
              : animal === "dog"
                ? "aDogTail"
                : animal === "ferret"
                  ? "aFerrTail"
                  : animal === "caterpillar"
                    ? "aCatpTail"
                    : "aZebrTail";
  return {
    kind,
    pattern: role === "leg" || role === "nub" ? "plain" : ink.pattern,
    a: ink.a,
    b: ink.b,
    mirror: false,
  };
}

function wrapAngle(a: number): number {
  return Math.atan2(Math.sin(a), Math.cos(a));
}

function projectChainPoint(s: number, morphT: number, vary: number, smooth: number, spacing: number, size: number) {
  const pt = chainPath(s, morphT, vary, smooth);
  const nxt = chainPath(wrap01(s + spacing), morphT, vary, smooth);
  const depth = Math.max(0.42, 1.05 - pt.z * 0.55);
  const nd = Math.max(0.42, 1.05 - nxt.z * 0.55);
  const x = pt.x / depth;
  const y = pt.y / depth;
  const rot = Math.atan2(nxt.y / nd - y, nxt.x / nd - x);
  const near = clamp(1.12 / depth, 0.55, 1.85);
  return {
    x,
    y,
    rot,
    ux: Math.cos(rot),
    uy: Math.sin(rot),
    nx: -Math.sin(rot),
    ny: Math.cos(rot),
    px: clamp((0.072 + size * 0.028) * near, 0.05, 0.24),
    alpha: clamp(0.52 + near * 0.42, 0.5, 1),
  };
}

function paintAnimalChain(
  draw: (charge: Charge, pose: Pose) => void,
  animal: AnimalChainOn,
  clock: number,
  chain: ChainOpts,
  density: number,
) {
  const n = animalChainSpineCount(density);
  const spacing = 0.72 / n;
  const plump = animal === "caterpillar" ? 1.08 : 1;
  const spines: ReturnType<typeof projectChainPoint>[] = [];
  for (let i = 0; i < n; i++) {
    const s = wrap01(clock * chain.travel * 0.14 - i * spacing);
    const morphT = clock * chain.morph;
    const size = i === 0 ? 1.05 : i === n - 1 ? 0.78 : 0.48 * plump;
    spines.push(projectChainPoint(s, morphT, chain.vary, chain.smooth, spacing, size));
  }
  for (const app of animalChainAppendages(animal, n)) {
    const now = spines[app.attach];
    const lag = app.role === "nub" ? 0.07 : 0.13;
    const thenS = wrap01((clock - lag) * chain.travel * 0.14 - app.attach * spacing);
    const then = projectChainPoint(thenS, (clock - lag) * chain.morph, chain.vary, chain.smooth, spacing, 0.55);
    const vx = now.x - then.x;
    const vy = now.y - then.y;
    const hang = app.role === "nub" ? 0.038 : 0.09;
    const trail = app.role === "nub" ? 0.32 : 0.7;
    const grav = app.role === "nub" ? 0.008 : 0.024;
    const x = now.x + now.nx * app.side * hang - vx * trail;
    const y = now.y + now.ny * app.side * hang - vy * trail + grav;
    draw(animalCharge(animal, app.role), {
      x,
      y,
      px: clamp(now.px * (app.role === "nub" ? 0.55 : 0.92), 0.04, 0.18),
      rot: Math.atan2(y - now.y, x - now.x),
      alpha: now.alpha * 0.94,
    });
  }
  for (let i = n - 1; i >= 0; i--) {
    const role: AnimalRole = i === 0 ? "head" : i === n - 1 ? "tail" : "body";
    let x = spines[i].x;
    let y = spines[i].y;
    let rot = spines[i].rot;
    if (role === "tail") {
      const thenS = wrap01((clock - 0.14) * chain.travel * 0.14 - (n - 1) * spacing);
      const then = projectChainPoint(thenS, (clock - 0.14) * chain.morph, chain.vary, chain.smooth, spacing, 0.78);
      const vx = spines[i].x - then.x;
      const vy = spines[i].y - then.y;
      x -= vx * 0.55;
      y -= vy * 0.55;
      rot += wrapAngle(spines[i].rot - then.rot) * 0.85;
    }
    draw(animalCharge(animal, role), {
      x,
      y,
      px: spines[i].px * (role === "head" ? 1.28 : role === "tail" ? 1.18 : 1),
      rot,
      alpha: spines[i].alpha,
    });
  }
}

export class HeraldryField {
  private canvas = typeof document !== "undefined" ? document.createElement("canvas") : (null as unknown as HTMLCanvasElement);
  private stamps = new Map<string, HTMLCanvasElement>();
  private particles: Particle[] = [];
  private sim: FieldSim | null = null;
  private agents: PatternField | null = null;
  private fieldPoses: AgentPose[] = [];
  private hunt: HuntState | null = null;
  private builtSeed = -1;
  private builtInk = "";
  private builtKit: CollageKit = "sailor";
  private builtKitB = "";

  private stamp(c: Charge): HTMLCanvasElement {
    const key = chargeKey(c);
    let g = this.stamps.get(key);
    if (!g) {
      g = makeStamp(c);
      this.stamps.set(key, g);
    }
    return g;
  }

  private ensure(seed: number, ink: string, kit: CollageKit, kitB?: CollageKit | null) {
    const mash = kitB && kitB !== kit ? kitB : "";
    if (
      this.builtSeed === seed &&
      this.builtInk === ink &&
      this.builtKit === kit &&
      this.builtKitB === mash &&
      this.particles.length
    ) {
      return;
    }
    this.particles = buildField(seed, ink, kit, mash || null);
    this.stamps.clear();
    this.sim = null;
    this.agents = null;
    this.hunt = null;
    this.builtSeed = seed;
    this.builtInk = ink;
    this.builtKit = kit;
    this.builtKitB = mash;
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
    const kitB = opts.kitB ? kitFromUnknown(opts.kitB) : null;
    const paper = hexOk(opts.paper, paperForKit(kit, opts.seed));
    const ink = hexOk(opts.ink, KIT_INK[kit]);
    this.ensure(opts.seed >>> 0, ink, kit, kitB);

    const scene = sceneFromGenerator(opts.generator, opts.move);
    const audio = clamp(opts.audio, 0, 1);
    const bass = clamp(opts.bass, 0, 1);
    const beat = clamp(opts.beat, 0, 1);
    const bpm = opts.bpm > 40 ? opts.bpm : 0;
    const scale = clampCollageScale(opts.scale);
    const density = clampCollageDensity(opts.density);
    const pace = clampCollagePace(opts.pace);
    const chain = {
      travel: clampCollageChainTravel(opts.chainTravel),
      morph: clampCollageChainMorph(opts.chainMorph),
      vary: clampCollageChainVary(opts.chainVary),
      smooth: clampCollageChainSmooth(opts.chainSmooth),
    };
    const animal = animalFromUnknown(opts.chainAnimal);
    paintGround(ctx, w, h, paper, kit, opts.time, opts.seed, beat, bass, !!opts.night, ink);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    const beatOffset = opts.beatOffset ?? 0;
    const rawClock = opts.time;
    const clock =
      isMusicMove(scene) && bpm > 40 && beatOffset > 0.001 ? Math.max(0, rawClock - beatOffset) : rawClock;
    const t = clock * pace;
    const aspect = w / Math.max(h, 1);
    const baseCount =
      scene === "bounce" || scene === "flip" || scene === "hop" || scene === "kick" || scene === "jelly"
        ? 36
        : scene === "drop"
          ? 40
          : scene === "spot"
            ? 36
            : scene === "tide" ||
                scene === "rings" ||
                scene === "loom" ||
                scene === "petal" ||
                scene === "flock" ||
                scene === "wheel" ||
                scene === "silk" ||
                isMusicMove(scene)
              ? 48
              : scene === "glow" || scene === "flash"
                ? 28
                : scene === "prism"
                  ? 64
                  : scene === "helix" || scene === "braid"
                    ? 130
                    : scene === "tunnel" || scene === "well"
                      ? 120
                      : scene === "hall"
                        ? 148
                        : scene === "bloom" || scene === "gyre" || scene === "drift" || scene === "sway"
                        ? 140
                        : scene === "chain"
                          ? 40
                          : isFieldMove(scene)
                            ? 360
                            : isSimMove(scene)
                            ? 42
                            : this.particles.length;
    const count = isFieldMove(scene)
      ? Math.max(40, Math.min(560, Math.round(baseCount * density)))
      : Math.max(8, Math.min(this.particles.length, Math.round(baseCount * density)));
    const prisms = scene === "prism" ? 3 : 1;
    if (isFieldMove(scene)) {
      const params = agentParamsFrom({
        fieldStrength: opts.fieldStrength,
        fieldScale: opts.fieldScale,
        fieldEvolve: opts.fieldEvolve,
        density: opts.fieldDensity,
        densityScale: opts.fieldDensityScale,
        densityEvolve: opts.fieldDensityEvolve,
        flow: opts.fieldFlow,
        curl: opts.fieldCurl,
        flowScale: opts.fieldFlowScale,
        attract: opts.fieldAttract,
        repel: opts.fieldRepel,
        radius: opts.fieldRadius,
        inertia: opts.fieldInertia,
        damp: opts.fieldDamp,
        maxV: opts.fieldMaxV,
        scaleAmp: opts.fieldScaleAmp,
        minScale: opts.fieldMinScale,
        maxScale: opts.fieldMaxScale,
        perturb: opts.fieldPerturb,
        warp: opts.fieldWarp,
        sparsity: opts.fieldSparsity,
        contrast: opts.fieldContrast,
        motion: opts.fieldMotion,
      });
      this.agents = this.agents ?? new PatternField();
      this.fieldPoses = this.agents.posesAt(count, clock, opts.seed >>> 0, aspect, params, bpm, beatOffset, opts.fieldPattern ?? "auto");
      this.sim = null;
    } else if (isSimMove(scene)) {
      this.agents = null;
      const params = simParamsFrom({
        springStrength: opts.springStrength,
        springDamp: opts.springDamp,
        springDist: opts.springDist,
        springElast: opts.springElast,
        springBreak: opts.springBreak,
        flowScale: opts.flowScale,
        flowTurb: opts.flowTurb,
        flowEvolve: opts.flowEvolve,
        flowForce: opts.flowForce,
        flowDepth: opts.flowDepth,
        boidCohere: opts.boidCohere,
        boidSep: opts.boidSep,
        boidAlign: opts.boidAlign,
        boidRadius: opts.boidRadius,
        boidSpeed: opts.boidSpeed,
        poleCount: opts.poleCount,
        poleAttract: opts.poleAttract,
        poleRepel: opts.poleRepel,
        poleSpeed: opts.poleSpeed,
        poleFalloff: opts.poleFalloff,
        poleSwitch: opts.poleSwitch,
      });
      this.sim = stepFieldSim(
        this.sim,
        scene,
        this.particles.slice(0, count),
        clock,
        params,
      );
    } else {
      this.agents = null;
      this.sim = null;
    }

    const cap =
      scene === "spot" ? 0.34 :
      isFieldMove(scene) ? 0.5 :
      isFlyMove(scene) || scene === "chain"
        ? 0.26
        : 0.22;
    const blitStamp = (stamp: HTMLCanvasElement, pose: Pose, view?: HuntView) => {
      const framed = view ? { ...pose, ...applyHuntPose(pose, view) } : pose;
      const dim = Math.min(framed.px * scale, view ? 0.72 : cap) * Math.min(w, h);
      if (dim < 5) return;
      const sx = (0.5 + framed.x) * w;
      const sy = (0.5 + framed.y / aspect) * h;
      for (let pr = 0; pr < prisms; pr++) {
        ctx.save();
        const ox = prisms > 1 ? (pr - 1) * dim * 0.09 : 0;
        const oy = prisms > 1 ? (pr === 2 ? dim * 0.06 : pr === 0 ? -dim * 0.03 : 0) : 0;
        if (sx + ox < -dim || sy + oy < -dim || sx + ox > w + dim || sy + oy > h + dim) {
          ctx.restore();
          continue;
        }
        ctx.translate(sx + ox, sy + oy);
        ctx.rotate(framed.rot + (prisms > 1 ? pr * 0.1 : 0));
        if (pose.flip != null) ctx.scale(pose.flip, 1);
        if (pose.squash) ctx.scale(pose.squash, 1 / Math.max(0.35, pose.squash));
        if (pose.glow) {
          ctx.globalAlpha = pose.alpha * 0.32 * pose.glow;
          ctx.fillStyle = pose.tint ?? ink;
          ctx.beginPath();
          ctx.arc(0, 0, dim * (0.4 + pose.glow * 0.16), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = pose.alpha * (prisms > 1 ? 0.72 : 1);
        ctx.drawImage(stamp, -dim / 2, -dim / 2, dim, dim);
        ctx.restore();
      }
    };

    const drawn: { stamp: HTMLCanvasElement; pose: Pose }[] = [];
    const record = (stamp: HTMLCanvasElement, pose: Pose) => {
      drawn.push({ stamp, pose });
    };
    if (scene === "chain" && animal !== "off") {
      paintAnimalChain((charge, pose) => record(this.stamp(charge), pose), animal, clock, chain, density);
    } else {
      for (let i = 0; i < count; i++) {
        const fieldPose = isFieldMove(scene) && this.agents ? this.fieldPoses[i] ?? null : null;
        const p = this.particles[(fieldPose?.charge ?? i) % this.particles.length];
        let pose: Pose | null = isFieldMove(scene) && this.agents
          ? fieldPose
          : isSimMove(scene) && this.sim
            ? simPose(this.sim, i, p.size)
            : poseParticle(p, i, scene, t, audio, bass, beat, bpm, count, clock, chain);
        if (!pose) continue;
        if (pose.alpha < 0.04) continue;
        if (isFieldMove(scene) && beat > 0.02) {
          pose = {
            ...pose,
            glow: beat * 0.38,
            squash: (pose.squash ?? 1) * (1 - beat * 0.045),
            px: pose.px * (1 + beat * 0.07),
          };
        }
        record(this.stamp(p.charge), pose);
      }
    }

    let view: HuntView | undefined;
    if (cameraFromUnknown(opts.camera) === "hunt") {
      const huntOpts = huntParamsFrom({
        huntWideMin: opts.huntWideMin,
        huntWideMax: opts.huntWideMax,
        huntFollowMin: opts.huntFollowMin,
        huntFollowMax: opts.huntFollowMax,
        huntSnap: opts.huntSnap,
        huntZoom: opts.huntZoom,
        huntTight: opts.huntTight,
        huntReactMin: opts.huntReactMin,
        huntReactMax: opts.huntReactMax,
        huntPrecision: opts.huntPrecision,
        huntSelect: opts.huntSelect,
        huntFocus: opts.huntFocus,
        huntFocusSpeed: opts.huntFocusSpeed,
        huntFocusError: opts.huntFocusError,
        huntVariation: opts.huntVariation,
        cameraFeel: opts.cameraFeel,
      });
      this.hunt = stepHunt(
        this.hunt,
        drawn.map((item, id) => ({ id, x: item.pose.x, y: item.pose.y, px: item.pose.px })),
        clock,
        huntOpts,
        opts.seed >>> 0,
      );
      view = huntView(this.hunt, huntOpts);
      if (view.focus > 0.03) ctx.filter = `blur(${(1.1 + view.focus * 2.4).toFixed(2)}px)`;
    } else {
      this.hunt = null;
    }

    for (const item of drawn) blitStamp(item.stamp, item.pose, view);
    ctx.filter = "none";

    if (
      (scene === "bars" ||
        scene === "ripple" ||
        scene === "swing" ||
        scene === "burst" ||
        scene === "halo" ||
        scene === "wave") &&
      beat > 0.04
    ) {
      ctx.save();
      ctx.translate(w * 0.5, h * 0.5);
      ctx.strokeStyle = mixHex(ink, "#fff4d8", 0.72);
      ctx.globalAlpha = 0.18 + beat * 0.42;
      ctx.lineWidth = 2.6 + beat * 6;
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(w, h) * (0.16 + beat * 0.2), 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 0.1 + beat * 0.22;
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(w, h) * (0.3 + beat * 0.18), 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    return this.canvas;
  }
}

function wrap01(v: number): number {
  return ((v % 1) + 1) % 1;
}

function rot2(x: number, y: number, ang: number): { x: number; y: number } {
  const c = Math.cos(ang);
  const s = Math.sin(ang);
  return { x: x * c - y * s, y: x * s + y * c };
}

/** Perspective z in [0,1] → camera depth. Travel is independent of the beat. */
function flyDepth(z01: number, near = 0.28, span = 2.55): { depth: number; fade: number } | null {
  const depth = near + wrap01(z01) * span;
  const far = near + span;
  const fade = clamp((far - depth) / 0.3, 0, 1) * clamp((depth - near) / 0.1, 0, 1);
  if (fade <= 0.001) return null;
  return { depth, fade };
}

interface Pose {
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

function reflect01(v: number): number {
  const u = wrap01(v);
  return u < 0.5 ? u * 2 : 2 - u * 2;
}

function screenBounce(v: number): number {
  return reflect01(v) - 0.5;
}

interface ChainOpts {
  travel: number;
  morph: number;
  vary: number;
  smooth: number;
}

function poseParticle(
  p: Particle,
  i: number,
  scene: HeraldryScene,
  t: number,
  audio: number,
  bass: number,
  beat: number,
  bpm: number,
  count = 48,
  clock = t,
  chain?: ChainOpts,
): Pose | null {
  const music = isMusicMove(scene);
  const tick = tempoTick(clock, bpm);
  const punch = clamp(Math.max(beat * (music ? 0.48 : 0.85), tick * (music ? 0.72 : 0.22)), 0, 1);
  if (scene === "bounce") {
    const sx = 0.11 + Math.abs(p.vx) * 2.4;
    const sy = 0.09 + Math.abs(p.vy) * 2.1;
    return {
      x: screenBounce(p.x + sx * t),
      y: screenBounce(p.y + sy * t * 0.92),
      px: clamp((0.1 + p.size * 0.07) * (1 + punch * 0.22), 0.08, 0.28),
      glow: punch * 0.45,
      rot: p.rot + p.vr * t * 1.6,
      alpha: 1,
    };
  }
  if (scene === "flip") {
    const spin = t * (2.2 + audio * 0.25) + i * 0.55;
    const flip = Math.cos(spin);
    return {
      x: screenBounce(p.x + p.vx * t * 0.45),
      y: screenBounce(p.y + p.vy * t * 0.38),
      px: clamp((0.12 + p.size * 0.06) * (1 + punch * 0.18), 0.08, 0.26),
      glow: punch * 0.35,
      rot: p.rot + Math.sin(spin) * 0.15,
      alpha: clamp(0.28 + Math.abs(flip) * 0.72, 0.2, 1),
      flip,
    };
  }
  if (scene === "glow") {
    const pulse = 0.45 + 0.55 * Math.sin(t * 2.4 + i * 0.7);
    const lit = clamp(pulse * 0.4 + punch * 0.55 + bass * 0.18, 0, 1);
    return {
      x: (p.x - 0.5) * 0.86 + Math.sin(t * 0.55 + p.y * 7) * 0.07,
      y: (p.y - 0.5) * 0.74 + Math.cos(t * 0.48 + p.x * 6) * 0.06,
      px: clamp((0.1 + p.size * 0.08) * (0.9 + lit * 0.16), 0.07, 0.24),
      rot: p.rot + t * 0.12 * p.vr,
      alpha: clamp(0.5 + lit * 0.45, 0.35, 1),
      glow: lit,
    };
  }
  if (scene === "flash") {
    const blink = 0.7 + 0.3 * Math.sin(t * 5.2 + i) + punch * 0.12;
    const tint = TINCTURES[(Math.floor(t * 3.2 + i * 3) >>> 0) % TINCTURES.length];
    return {
      x: screenBounce(p.x + p.vx * t * 0.32),
      y: screenBounce(p.y + p.vy * t * 0.28),
      px: clamp((0.11 + p.size * 0.07) * (1 + punch * 0.18), 0.08, 0.26),
      rot: p.rot + t * 0.4 * p.vr,
      alpha: clamp(blink, 0.4, 1),
      glow: 0.16 + punch * 0.45,
      tint,
    };
  }
  if (scene === "hop") {
    const rate = bpm > 40 ? bpm / 60 : 0.85;
    const phase = wrap01(t * rate + p.z);
    const hop = Math.abs(Math.sin(phase * Math.PI)) * (0.72 + punch * 0.45) + punch * 0.14;
    const flip = Math.cos(phase * Math.PI * 2);
    return {
      x: screenBounce(p.x + (0.1 + Math.abs(p.vx) * 1.8) * t),
      y: screenBounce(p.y) * 0.62 - hop * 0.2,
      px: clamp(0.1 + p.size * 0.07 + hop * 0.02, 0.08, 0.22),
      rot: p.rot + hop * 0.55,
      alpha: 1,
      flip,
    };
  }
  if (scene === "kick") {
    const sx = 0.1 + Math.abs(p.vx) * 2.1;
    const sy = 0.08 + Math.abs(p.vy) * 1.8;
    return {
      x: screenBounce(p.x + sx * t),
      y: screenBounce(p.y + sy * t),
      px: clamp((0.1 + p.size * 0.07) * (1 + punch * 0.28), 0.08, 0.28),
      rot: p.rot + p.vr * t,
      alpha: 1,
      glow: punch * 0.7,
    };
  }
  if (scene === "jelly") {
    const wobble = 1 + Math.sin(t * 5.2 + i) * 0.08 + punch * 0.2;
    return {
      x: screenBounce(p.x + p.vx * t * 0.5),
      y: screenBounce(p.y + p.vy * t * 0.42),
      px: clamp(0.12 + p.size * 0.07, 0.08, 0.24),
      rot: p.rot + Math.sin(t * 3 + i) * 0.2,
      alpha: 1,
      squash: wobble,
    };
  }
  if (scene === "tide") {
    const cols = 8;
    const rows = 6;
    const col = i % cols;
    const row = Math.floor(i / cols) % rows;
    const u = (col + 0.5) / cols - 0.5;
    const v = (row + 0.5) / rows - 0.5;
    const wave = Math.sin(t * 1.7 + row * 0.72 + col * 0.18);
    return {
      x: u * 0.9 + wave * 0.07,
      y: v * 0.74 + Math.sin(t * 0.82 + row * 0.9) * 0.035,
      px: clamp(0.085 + p.size * 0.045 + punch * 0.05, 0.06, 0.2),
      rot: p.rot + wave * 0.22,
      alpha: 1,
      glow: punch * 0.5,
    };
  }
  if (scene === "rings") {
    const rings = 4;
    const ring = i % rings;
    const slot = Math.floor(i / rings);
    const n = 12;
    const dir = ring & 1 ? -1 : 1;
    const ang = (slot / n) * Math.PI * 2 + t * (0.48 + ring * 0.08) * dir;
    const rad = 0.14 + ring * 0.11;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad * 0.88,
      px: clamp(0.07 + p.size * 0.035 + punch * 0.05, 0.05, 0.18),
      rot: ang + p.rot * 0.25,
      alpha: 0.96,
      glow: punch * 0.48,
    };
  }
  if (scene === "loom") {
    const a = t * 1.05 + p.x * Math.PI * 2;
    const b = t * 1.45 + p.y * Math.PI * 2;
    return {
      x: Math.sin(a) * 0.4 + Math.sin(b * 0.5) * 0.06,
      y: Math.sin(a * 2 + p.z * Math.PI) * 0.3,
      px: clamp(0.08 + p.size * 0.045 + punch * 0.05, 0.06, 0.2),
      rot: a * 0.18 + p.rot,
      alpha: 1,
      glow: punch * 0.48,
    };
  }
  if (scene === "petal") {
    const petals = 6;
    const petal = i % petals;
    const step = Math.floor(i / petals) / 8;
    const ang = (petal / petals) * Math.PI * 2 + t * 0.34;
    const breath = 0.8 + 0.2 * Math.sin(t * 1.25);
    const rad = (0.1 + step * 0.32) * breath;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad * 0.9,
      px: clamp(0.075 + p.size * 0.04 + punch * 0.05, 0.055, 0.2),
      rot: ang + Math.PI * 0.5,
      alpha: clamp(0.42 + breath * 0.55, 0.4, 1),
      glow: punch * 0.5,
    };
  }
  if (scene === "flock") {
    const lane = i % 5;
    const s = wrap01(p.z + t * (0.18 + lane * 0.02));
    const ang = s * Math.PI * 2 + lane * 0.32;
    const rad = 0.2 + Math.sin(ang * 2 + lane) * 0.1 + lane * 0.028;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang * 0.86) * rad * 0.7,
      px: clamp(0.075 + p.size * 0.04 + punch * 0.05, 0.055, 0.19),
      rot: ang + Math.PI * 0.5,
      alpha: 1,
      glow: punch * 0.48,
    };
  }
  if (scene === "wheel") {
    const rings = 3;
    const ring = i % rings;
    const slot = Math.floor(i / rings);
    const n = 14;
    const ang = (slot / n) * Math.PI * 2 + t * 0.58 * (ring === 1 ? -1 : 1);
    const rad = 0.2 + ring * 0.12;
    const near = 0.5 + 0.5 * Math.sin(ang);
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad * 0.72,
      px: clamp((0.075 + p.size * 0.035) * (0.78 + near * 0.28) + punch * 0.05, 0.05, 0.22),
      rot: ang,
      alpha: clamp(0.5 + near * 0.45, 0.45, 1),
      glow: punch * 0.48,
    };
  }
  if (scene === "silk") {
    const lane = i % 4;
    const dir = lane < 2 ? 1 : -1;
    const s = wrap01(p.x + t * 0.14 * dir + lane * 0.08);
    const y = (lane / 3 - 0.5) * 0.52 + Math.sin(s * Math.PI * 3 + lane) * 0.055;
    return {
      x: s - 0.5,
      y,
      px: clamp(0.07 + p.size * 0.038 + punch * 0.05, 0.05, 0.18),
      rot: Math.cos(s * Math.PI * 3) * 0.28 + p.rot * 0.15,
      alpha: 0.94,
      glow: punch * 0.45,
    };
  }
  if (scene === "bars") {
    const cols = 8;
    const rows = 6;
    const col = i % cols;
    const row = Math.floor(i / cols) % rows;
    const u = (col + 0.5) / cols - 0.5;
    const drive = 0.32 + 0.68 * (0.5 + 0.5 * Math.sin(t * 2.15 + col * 0.85 + p.z));
    const hgt = clamp(drive * (0.42 + audio * 0.22 + bass * 0.2 + tick * 0.28), 0.18, 1);
    const y = 0.42 - (row / Math.max(rows - 1, 1)) * hgt * 0.82;
    return {
      x: u * 0.86,
      y,
      px: clamp(0.075 + p.size * 0.03 + punch * 0.03, 0.055, 0.18),
      rot: p.rot * 0.2,
      alpha: clamp(0.45 + (1 - row / rows) * 0.5 + punch * 0.15, 0.4, 1),
      glow: punch * 0.55,
      squash: 1 - punch * 0.08,
    };
  }
  if (scene === "ripple") {
    const rings = 3;
    const ring = i % rings;
    const slot = Math.floor(i / rings);
    const n = 16;
    const s = wrap01(t * 0.32);
    const rad = 0.15 + ring * 0.145 + s * 0.16 + tick * 0.05;
    const ang = (slot / n) * Math.PI * 2 + t * 0.1;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad * 0.88,
      px: clamp(0.062 + p.size * 0.024 + punch * 0.02, 0.048, 0.13),
      rot: ang + p.rot * 0.2,
      alpha: clamp(0.96 - ring * 0.08, 0.6, 1),
      glow: punch * 0.45,
    };
  }
  if (scene === "swing") {
    const cols = 6;
    const rows = 8;
    const col = i % cols;
    const row = Math.floor(i / cols) % rows;
    const rate = bpm > 40 ? (bpm / 60) * Math.PI * 2 : 5.4;
    const dir = col & 1 ? -1 : 1;
    const theta = Math.sin(t * rate + col * 0.85) * 0.82 * dir;
    const len = 0.07 + row * 0.072;
    const originX = (col / Math.max(cols - 1, 1) - 0.5) * 0.9;
    return {
      x: originX + Math.sin(theta) * len,
      y: -0.44 + Math.cos(theta) * len,
      px: clamp(0.07 + p.size * 0.03 + punch * 0.028, 0.05, 0.16),
      rot: theta,
      alpha: 1,
      glow: punch * 0.4,
    };
  }
  if (scene === "burst") {
    const rings = 3;
    const ring = i % rings;
    const slot = Math.floor(i / rings);
    const n = 16;
    const ang = (slot / n) * Math.PI * 2 + t * 0.2 * (ring === 1 ? -1 : 1);
    const rad = (0.14 + ring * 0.13) * (1 + tick * 0.42);
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad * 0.9,
      px: clamp((0.08 + p.size * 0.035) * (1 + punch * 0.22), 0.055, 0.22),
      rot: ang + p.rot * 0.2,
      alpha: clamp(0.55 + punch * 0.4, 0.45, 1),
      glow: punch * 0.75,
      squash: 1 + punch * 0.14,
    };
  }
  if (scene === "halo") {
    const rings = 2;
    const ring = i % rings;
    const slot = Math.floor(i / rings);
    const n = 24;
    const ang = (slot / n) * Math.PI * 2 + t * 0.26 * (ring ? -1 : 1);
    const breath = 0.84 + 0.16 * Math.sin(t * 1.15) + punch * 0.2;
    const rad = (0.26 + ring * 0.14) * breath;
    const lit = clamp(0.28 + punch * 0.65 + bass * 0.15, 0, 1);
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad * 0.9,
      px: clamp(0.07 + p.size * 0.032 + lit * 0.04, 0.05, 0.18),
      rot: ang + Math.PI * 0.5,
      alpha: clamp(0.5 + lit * 0.45, 0.4, 1),
      glow: lit,
    };
  }
  if (scene === "wave") {
    const cols = 16;
    const rows = 3;
    const col = i % cols;
    const row = Math.floor(i / cols) % rows;
    const u = (col + 0.5) / cols - 0.5;
    const amp = 0.09 + audio * 0.05 + tick * 0.08;
    const phase = u * Math.PI * 3.4 + t * 2.15 + row * 0.55;
    return {
      x: u * 0.92,
      y: (row - 1) * 0.2 + Math.sin(phase) * amp,
      px: clamp(0.065 + p.size * 0.03 + punch * 0.026, 0.05, 0.15),
      rot: Math.cos(phase) * 0.32,
      alpha: 1,
      glow: punch * 0.45,
    };
  }
  if (scene === "drop") {
    const slam = dropSlam(beat);
    const hop = slam * slam;
    return {
      x: p.x - 0.5,
      y: p.y - 0.5 - hop * 0.07,
      px: clamp((0.1 + p.size * 0.075) * (1 + slam * 0.9), 0.07, 0.44),
      glow: slam * 0.95,
      rot: p.rot,
      alpha: 1,
      squash: 1 - slam * 0.2,
    };
  }
  if (scene === "spot") {
    const n = Math.max(8, count);
    const star = spotIndex(clock, bpm, n);
    const mine = i === star;
    const slam = mine ? clamp(Math.max(beat, punch), 0, 1) : 0;
    const ang = (i / n) * Math.PI * 2;
    const rad = 0.3;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad * 0.78,
      px: clamp((mine ? 0.2 : 0.068) + p.size * 0.028 + slam * 0.24, 0.05, 0.5),
      glow: slam * 0.98,
      rot: p.rot * 0.35,
      alpha: mine ? 1 : 0.52,
      squash: 1 - slam * 0.14,
    };
  }
  if (scene === "pong") {
    const hz = tempoHz(bpm);
    const x = screenBounce(p.x + (0.16 + Math.abs(p.vx) * 0.5) * clock * hz);
    const y = screenBounce(p.y + (0.13 + Math.abs(p.vy) * 0.42) * clock * hz * 0.9);
    const edge = Math.min(0.5 - Math.abs(x), 0.5 - Math.abs(y));
    return {
      x,
      y,
      px: clamp(0.08 + p.size * 0.04 + punch * 0.02, 0.06, 0.18),
      glow: (edge < 0.065 ? 0.55 : 0) + punch * 0.28,
      rot: p.rot + p.vr * t * 0.7,
      alpha: 1,
    };
  }
  if (scene === "step") {
    const n = 16;
    const ticks = stepIndex(clock, bpm, 2);
    const ring = Math.floor(i / n) % 2;
    const ang = ((i % n) / n + ticks / n) * Math.PI * 2 * (ring ? -1 : 1);
    const rad = 0.26 + ring * 0.12;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad * 0.8,
      px: clamp(0.07 + p.size * 0.03 + punch * 0.02, 0.05, 0.16),
      rot: ang,
      alpha: 1,
      glow: punch * 0.55,
    };
  }
  if (scene === "moire") {
    const ring = i & 1;
    const slot = Math.floor(i / 2) % 18;
    const ang = (slot / 18) * Math.PI * 2 + t * (ring ? -0.78 : 0.62);
    const rad = 0.2 + ring * 0.13 + tick * 0.035;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad * 0.86,
      px: clamp(0.065 + p.size * 0.028 + punch * 0.018, 0.048, 0.14),
      rot: ang + p.rot * 0.2,
      alpha: ring ? 0.78 : 1,
      glow: punch * 0.4,
    };
  }
  if (scene === "grid") {
    const cols = 8;
    const rows = 6;
    const col = i % cols;
    const row = Math.floor(i / cols) % rows;
    const dir = row & 1 ? 1 : -1;
    const s = wrap01((col + 0.5) / cols + clock * tempoHz(bpm) * 0.28 * dir);
    return {
      x: (s - 0.5) * 0.92,
      y: ((row + 0.5) / rows - 0.5) * 0.78,
      px: clamp(0.07 + p.size * 0.03 + punch * 0.02, 0.05, 0.15),
      rot: p.rot * 0.2,
      alpha: 1,
      glow: punch * 0.42,
    };
  }
  if (scene === "zip") {
    const band = i % 3;
    const dir = band === 1 ? -1 : 1;
    const hitch = 1 - tick * 0.16;
    const s = wrap01(p.x + clock * tempoHz(bpm) * 0.34 * dir * hitch + band * 0.12);
    return {
      x: (s - 0.5) * 0.94,
      y: (band / 2 - 0.5) * 0.52,
      px: clamp(0.07 + p.size * 0.032 + punch * 0.02, 0.05, 0.15),
      rot: p.rot * 0.18,
      alpha: 1,
      glow: punch * 0.4,
    };
  }
  if (scene === "ghost") {
    const live = (i & 1) === 0;
    const delay = live ? 0 : 1 / tempoHz(bpm);
    const ang = p.x * Math.PI * 2 + (clock - delay) * tempoHz(bpm) * 1.35;
    const rad = 0.3 + Math.sin((clock - delay) * 1.1 + p.y * 6) * 0.05;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang * 0.92) * rad * 0.72,
      px: clamp(0.075 + p.size * 0.032, 0.055, 0.16),
      rot: ang + Math.PI * 0.5,
      alpha: live ? 1 : 0.34,
      glow: live ? punch * 0.5 : 0.12,
    };
  }
  if (scene === "poly") {
    const ring = i & 1;
    const n = ring ? 8 : 12;
    const slot = Math.floor(i / 2) % n;
    const cycles = ring ? 3 : 4;
    const ang = (slot / n) * Math.PI * 2 + clock * tempoHz(bpm) * (cycles / 4) * (ring ? -1 : 1);
    const rad = 0.2 + ring * 0.15;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad * 0.84,
      px: clamp(0.068 + p.size * 0.03 + punch * 0.018, 0.05, 0.15),
      rot: ang,
      alpha: 1,
      glow: punch * 0.45,
    };
  }
  if (scene === "fall") {
    const phase = wrap01(p.z + clock * tempoHz(bpm, 0.5));
    const u = reflect01(phase);
    const drop = u * u;
    const land = u > 0.82 ? (u - 0.82) / 0.18 : 0;
    return {
      x: (p.x - 0.5) * 0.88,
      y: -0.42 + drop * 0.86,
      px: clamp(0.075 + p.size * 0.035 + punch * 0.02, 0.055, 0.17),
      rot: p.rot + drop * 0.4,
      alpha: 1,
      glow: punch * 0.4,
      squash: 1 - land * 0.28,
    };
  }
  if (scene === "liss") {
    const hz = tempoHz(bpm);
    const a = clock * hz * Math.PI * 2 * 1.5 + p.x * 6.2;
    const b = clock * hz * Math.PI * 2 + p.y * 5.4;
    return {
      x: Math.sin(a) * 0.4,
      y: Math.sin(b) * 0.32,
      px: clamp(0.07 + p.size * 0.032 + punch * 0.02, 0.05, 0.16),
      rot: a * 0.15 + p.rot,
      alpha: 1,
      glow: punch * 0.42,
    };
  }
  if (scene === "snap") {
    const side = stepIndex(clock, bpm, 1) & 1 ? 1 : -1;
    const row = Math.floor(i / 8) % 5;
    const col = i % 8;
    return {
      x: side * (0.2 + (col / 7) * 0.1),
      y: (row / 4 - 0.5) * 0.72,
      px: clamp(0.072 + p.size * 0.03 + punch * 0.025, 0.05, 0.16),
      rot: p.rot * 0.2 + side * 0.08,
      alpha: 1,
      glow: punch * 0.6,
      squash: 1 - punch * 0.1,
    };
  }
  if (scene === "chain") {
    const travel = chain?.travel ?? 1;
    const morph = chain?.morph ?? 0.7;
    const vary = chain?.vary ?? 1;
    const smooth = chain?.smooth ?? 0.72;
    const n = Math.max(8, count);
    const spacing = 0.62 / n;
    const s = wrap01(clock * travel * 0.14 - i * spacing);
    const morphT = clock * morph;
    const pt = chainPath(s, morphT, vary, smooth);
    const nxt = chainPath(wrap01(s + spacing), morphT, vary, smooth);
    const depth = Math.max(0.42, 1.05 - pt.z * 0.55);
    const nd = Math.max(0.42, 1.05 - nxt.z * 0.55);
    const x = pt.x / depth;
    const y = pt.y / depth;
    const rot = Math.atan2(nxt.y / nd - y, nxt.x / nd - x);
    const near = clamp(1.12 / depth, 0.55, 1.85);
    return {
      x,
      y,
      px: clamp((0.072 + p.size * 0.028) * near, 0.05, 0.24),
      rot,
      alpha: clamp(0.52 + near * 0.42, 0.5, 1),
    };
  }
  if (scene === "tunnel") {
    const z = wrap01(p.z - t * (0.4 + audio * 0.22 + bass * 0.1));
    const depth = 0.3 + z * 2.45;
    if (depth < 0.34 || depth > 2.65) return null;
    const ang = p.x * Math.PI * 2 + t * 0.14 + p.rot * 0.3;
    const rad = (0.16 + p.y * 0.58) / depth;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad,
      px: clamp((0.2 * p.size * (0.95 + bass * 0.1 + punch * 0.26)) / depth, 0.04, 0.5),
      glow: punch * 0.42,
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
    const u = wrap01(p.z - t * (0.34 + bass * 0.12));
    const grow = u * u;
    const ang = p.x * Math.PI * 2 + t * 0.1 + p.rot;
    return {
      x: Math.cos(ang) * grow * 0.92,
      y: Math.sin(ang) * grow * 0.92,
      px: clamp(0.05 + grow * 0.32 * p.size * (1 + audio * 0.06 + punch * 0.24), 0.04, 0.48),
      glow: punch * 0.4,
      rot: p.rot + u * 0.4,
      alpha: clamp(1.05 - grow, 0, 1) * clamp(u / 0.08, 0, 1),
    };
  }
  if (scene === "spiral") {
    const z = wrap01(p.z - t * (0.4 + audio * 0.2 + bass * 0.08));
    const depth = 0.28 + z * 2.6;
    if (depth < 0.32 || depth > 2.75) return null;
    const ang = p.x * Math.PI * 2 + 2.15 / depth + t * 0.1;
    const rad = (0.1 + p.y * 0.38) / depth;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad,
      px: clamp((0.2 * p.size * (0.94 + bass * 0.1 + punch * 0.26)) / depth, 0.04, 0.52),
      glow: punch * 0.4,
      rot: p.rot + ang * 0.15,
      alpha: clamp((2.75 - depth) / 0.28, 0, 1) * clamp((depth - 0.28) / 0.1, 0, 1),
    };
  }
  if (scene === "helix") {
    const z = wrap01(p.z - t * (0.46 + audio * 0.22 + bass * 0.08));
    const depth = 0.26 + z * 2.7;
    if (depth < 0.3 || depth > 2.85) return null;
    const strand = i & 1 ? Math.PI : 0;
    const ang = t * (1.7 + 1.35 / depth) + p.x * Math.PI * 2 + strand;
    const rad = (0.11 + p.y * 0.26) / depth;
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad * 0.92,
      px: clamp((0.22 * p.size * (0.93 + bass * 0.1 + punch * 0.26)) / depth, 0.04, 0.54),
      glow: punch * 0.4,
      rot: ang + p.rot,
      alpha: clamp((2.85 - depth) / 0.28, 0, 1) * clamp((depth - 0.26) / 0.1, 0, 1),
    };
  }
  if (scene === "prism") {
    const z = wrap01(p.z - t * (0.42 + audio * 0.2 + bass * 0.08));
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
      px: clamp((0.2 * p.size * (0.94 + bass * 0.1 + punch * 0.26)) / depth, 0.04, 0.52),
      glow: punch * 0.4,
      rot: p.rot + spin,
      alpha: clamp((2.7 - depth) / 0.26, 0, 1) * clamp((depth - 0.28) / 0.1, 0, 1),
    };
  }
  if (scene === "gyre") {
    const fly = flyDepth(p.z - t * 0.4, 0.28, 2.6);
    if (!fly) return null;
    const { depth, fade } = fly;
    const orbit = t * 0.2 + p.x * Math.PI * 2;
    const rad = 0.22 + p.y * 0.5;
    const cx = Math.cos(orbit) * rad;
    const cy = Math.sin(orbit * 0.93) * rad * 0.86;
    const spun = rot2(cx, cy, t * 0.12);
    return {
      x: spun.x / depth,
      y: spun.y / depth + Math.sin(t * 0.16) * 0.05,
      px: clamp((0.22 * p.size * (0.93 + bass * 0.1 + punch * 0.26)) / depth, 0.04, 0.55),
      glow: punch * 0.42,
      rot: p.rot + orbit * 0.2 + p.vr * t * 0.08,
      alpha: fade,
    };
  }
  if (scene === "well") {
    const fly = flyDepth(p.z - t * 0.4, 0.26, 2.65);
    if (!fly) return null;
    const { depth, fade } = fly;
    const ang = p.x * Math.PI * 2 + t * 0.16 + 2.6 * Math.log(depth + 0.18);
    const rad = (0.2 + (i % 8) * 0.028) / Math.pow(depth, 0.82);
    return {
      x: Math.cos(ang) * rad,
      y: Math.sin(ang) * rad,
      px: clamp((0.21 * p.size * (0.93 + bass * 0.1 + punch * 0.26)) / depth, 0.04, 0.54),
      glow: punch * 0.42,
      rot: p.rot + ang * 0.2,
      alpha: fade,
    };
  }
  if (scene === "hall") {
    const fly = flyDepth(p.z - t * 0.42, 0.3, 2.5);
    if (!fly) return null;
    const { depth, fade } = fly;
    const wall = i % 4;
    const along = wrap01(p.x * 0.72 + p.y * 0.28) - 0.5;
    const bow = 0.05 / depth;
    let x = 0;
    let y = 0;
    if (wall === 0) {
      x = -0.52 / depth - bow;
      y = along / depth;
    } else if (wall === 1) {
      x = 0.52 / depth + bow;
      y = along / depth;
    } else if (wall === 2) {
      x = along / depth;
      y = -0.4 / depth - bow;
    } else {
      x = along / depth;
      y = 0.4 / depth + bow;
    }
    const twist = rot2(x, y, 0.42 / depth + t * 0.08);
    return {
      x: twist.x,
      y: twist.y,
      px: clamp((0.2 * p.size * (0.93 + bass * 0.1 + punch * 0.26)) / depth, 0.04, 0.5),
      glow: punch * 0.4,
      rot: p.rot + p.vr * t * 0.1,
      alpha: fade,
    };
  }
  if (scene === "drift") {
    const fly = flyDepth(p.z - t * 0.4, 0.28, 2.58);
    if (!fly) return null;
    const { depth, fade } = fly;
    const layer = i % 5;
    const dir = layer * 1.256;
    const slide = t * 0.09;
    const x0 = wrap01(p.x + Math.cos(dir) * slide) - 0.5;
    const y0 = wrap01(p.y + Math.sin(dir) * slide * 0.72) - 0.5;
    return {
      x: x0 / depth,
      y: y0 / depth,
      px: clamp((0.21 * p.size * (0.93 + bass * 0.1 + punch * 0.26)) / depth, 0.04, 0.52),
      glow: punch * 0.42,
      rot: p.rot + p.vr * t * 0.1,
      alpha: fade,
    };
  }
  if (scene === "braid") {
    const fly = flyDepth(p.z - t * 0.44, 0.26, 2.68);
    if (!fly) return null;
    const { depth, fade } = fly;
    const strand = i % 3;
    const ang = t * 1.12 + p.x * Math.PI * 2 + (strand * Math.PI * 2) / 3 + 0.95 / depth;
    const rad = (0.13 + p.y * 0.2) / depth;
    const lean = Math.sin(t * 0.2 + strand * 2.1) * 0.07;
    return {
      x: Math.cos(ang) * rad + lean,
      y: Math.sin(ang) * rad * 0.9,
      px: clamp((0.22 * p.size * (0.93 + bass * 0.1 + punch * 0.26)) / depth, 0.04, 0.54),
      glow: punch * 0.4,
      rot: ang + p.rot,
      alpha: fade,
    };
  }
  if (scene === "sway") {
    const fly = flyDepth(p.z - t * 0.46, 0.26, 2.7);
    if (!fly) return null;
    const { depth, fade } = fly;
    const yaw = Math.sin(t * 0.19) * 0.48;
    const pitch = Math.cos(t * 0.13) * 0.3;
    const roll = Math.sin(t * 0.07) * 0.32;
    const x0 = wrap01(p.x + p.vx * t * 0.03) - 0.5;
    const y0 = wrap01(p.y + p.vy * t * 0.02) - 0.5;
    const spun = rot2(x0, y0, roll);
    const look = 1 / depth - 0.38;
    return {
      x: spun.x / depth + yaw * look,
      y: spun.y / depth + pitch * look,
      px: clamp((0.24 * p.size * (0.92 + bass * 0.1 + punch * 0.28)) / depth, 0.04, 0.58),
      glow: punch * 0.46,
      rot: p.rot + p.vr * t * 0.12 + roll * 0.4,
      alpha: fade,
    };
  }
  const z = wrap01(p.z - t * (0.46 + audio * 0.24 + bass * 0.1));
  const depth = 0.26 + z * 2.7;
  if (depth < 0.3 || depth > 2.85) return null;
  const x = (wrap01(p.x + p.vx * t * 0.03) - 0.5) / depth;
  const y = (wrap01(p.y + p.vy * t * 0.02) - 0.5) / depth;
  return {
    x,
    y,
    px: clamp((0.24 * p.size * (0.92 + bass * 0.1 + punch * 0.28)) / depth, 0.04, 0.6),
    glow: punch * 0.48,
    rot: p.rot + p.vr * t * 0.12,
    alpha: clamp((2.85 - depth) / 0.3, 0, 1) * clamp((depth - 0.26) / 0.1, 0, 1),
  };
}

const KIT_GROUNDS: Record<CollageKit, string[]> = {
  sailor: ["#0b2a4a", "#123c5c", "#f0e2c4", "#0e4d5c", "#1a1a2e", "#c98a4a", "#7aa0b8", "#16324a", "#e8c9a0", "#2a4a6a", "#083040", "#d4b878", "#4a6a88", "#0a1828", "#b86838", "#c8d8e8"],
  circus: ["#1a0614", "#ff2f86", "#2a0a18", "#f5d76e", "#101010", "#ff6a3c", "#3a1028", "#f4c48a", "#7a1028", "#2a0810", "#ff8ab0", "#180410", "#e8a040", "#4a0818", "#ffd6a0", "#0c0408"],
  fruit: ["#fff1b8", "#ff8a4c", "#7ec8e3", "#2d1b0e", "#f4efe0", "#d44c3a", "#f2c86a", "#3a2818", "#ffb080", "#8a3a18", "#ffe8a0", "#4a3020", "#f07040", "#1a1008", "#c8e8d0", "#e85828"],
  nature: ["#1a3324", "#3d5c3a", "#e8f0d8", "#243028", "#6b8f71", "#c4a06a", "#2a4030", "#8a6a38", "#d8e8c8", "#405028", "#0c1810", "#b8d090", "#547848", "#e8d8b0", "#14241c", "#9ab878"],
  love: ["#3a1028", "#f4c4d4", "#2a0818", "#8b1e4a", "#1a0a14", "#f0a0b8", "#5a1838", "#e8d0c4", "#c45c78", "#241018", "#ffe0e8", "#4a1028", "#d87890", "#14080c", "#f8c8d4", "#6a2840"],
  space: ["#070b22", "#12183a", "#0a1028", "#1a1040", "#000000", "#2a1848", "#0c2038", "#3a2860", "#101828", "#1a2848", "#080c1c", "#4a38a0", "#7aa2ff", "#141030", "#c8d4ff", "#2a3068"],
  sweet: ["#ffe4f0", "#ff6aa8", "#fff0d8", "#3a1020", "#ffd6e8", "#f4b4c8", "#ffc08a", "#2a1018", "#e87890", "#f8e0d0", "#ffb0c8", "#180810", "#ff8ab8", "#fff8ec", "#c46078", "#ffd0c0"],
  music: ["#120814", "#2a1038", "#0d0d0d", "#1a0820", "#241028", "#3a2048", "#181028", "#4a1838", "#0a0a12", "#2a1828", "#080610", "#6a3088", "#ffd86a", "#1c0c24", "#e8b0d0", "#101018"],
  kitchen: ["#3a1410", "#f2d2a0", "#c44a28", "#1a100c", "#e8b86a", "#8a2a18", "#f4e8d0", "#2a1810", "#d87838", "#5a2818", "#140c08", "#ffc080", "#a03818", "#efe0c4", "#4a2010", "#e86030"],
  weather: ["#7ec8e8", "#1a3048", "#f0d878", "#0e1a28", "#c8dce8", "#4a6a88", "#ffe8a8", "#243848", "#8ab4d0", "#2a4058", "#0a1420", "#b8d0e0", "#5a88a8", "#fff4c8", "#183040", "#e8c860"],
  city: ["#1a1a1a", "#f0c020", "#3a2018", "#0c0c10", "#c45c38", "#2a2a30", "#e8d090", "#141820", "#8a8a90", "#4a3020", "#080808", "#ffd86a", "#5a5a60", "#d8c070", "#202028", "#e87840"],
  arcade: ["#140818", "#7cff6a", "#2a1038", "#0a0a12", "#ff4ad4", "#1a0828", "#f0d86a", "#241040", "#4a1860", "#101018", "#080510", "#00e8d0", "#ff6ae8", "#1c0c30", "#c8ff88", "#3a1868"],
  haunt: ["#140818", "#2a1038", "#1a0820", "#0a0612", "#4a1860", "#9a6cff", "#241028", "#6a3088", "#101018", "#3a1848", "#080410", "#c49aff", "#5a2080", "#180c20", "#e8c8ff", "#2a1040"],
  sport: ["#1a1008", "#ff7a1a", "#2a180c", "#0c0a08", "#f0c020", "#c44a18", "#3a2010", "#e8a040", "#181008", "#8a3810", "#100804", "#ffc060", "#e86018", "#24140c", "#fff0a8", "#4a280c"],
  school: ["#102038", "#3a6ad8", "#f0e2c4", "#0c1424", "#d44c4c", "#2a3858", "#e8d090", "#183050", "#8aa0c8", "#241820", "#081018", "#c8d4e8", "#4a78c8", "#1a2438", "#f4e8d0", "#c45c5c"],
};

export function groundsForKit(kit: CollageKit): readonly string[] {
  return KIT_GROUNDS[kit];
}

function mixHex(a: string, b: string, t: number): string {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  if (Number.isNaN(pa) || Number.isNaN(pb)) return a;
  const u = clamp(t, 0, 1);
  const ch = (shift: number) => Math.round((((pa >> shift) & 255) * (1 - u) + ((pb >> shift) & 255) * u));
  const n = (ch(16) << 16) | (ch(8) << 8) | ch(0);
  return `#${n.toString(16).padStart(6, "0")}`;
}

function paintGround(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  paper: string,
  kit: CollageKit,
  time: number,
  seed: number,
  beat = 0,
  bass = 0,
  night = false,
  ink = KIT_INK[kit],
) {
  const rng = mulberry32((seed + 4) >>> 0);
  const wash = pick(rng, KIT_GROUNDS[kit]);
  const wash2 = pick(rng, KIT_GROUNDS[kit]);
  const wash3 = pick(rng, KIT_GROUNDS[kit]);
  const ground = night ? mixHex(paper, "#08060a", 0.68) : paper;
  ctx.fillStyle = ground;
  ctx.fillRect(0, 0, w, h);
  const lin = ctx.createLinearGradient(0, 0, w, h);
  if (night) {
    const neon = mixHex(ink, "#ffd8a8", 0.3);
    const breathe = 0.16 + bass * 0.4 + beat * 0.06;
    lin.addColorStop(0, mixHex(ground, neon, breathe * 0.55));
    lin.addColorStop(0.48, mixHex(ground, wash, 0.2));
    lin.addColorStop(1, mixHex(ground, wash2, 0.24));
  } else {
    lin.addColorStop(0, mixHex(paper, wash, 0.38));
    lin.addColorStop(0.45, mixHex(paper, wash3, 0.28));
    lin.addColorStop(1, mixHex(paper, wash2, 0.42));
  }
  ctx.fillStyle = lin;
  ctx.fillRect(0, 0, w, h);
  const cx = w * (0.5 + Math.sin(time * 0.17) * 0.08);
  const cy = h * (0.46 + Math.cos(time * 0.13) * 0.06);
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.72);
  if (night) {
    const neon = mixHex(ink, "#ffd8a8", 0.28);
    g.addColorStop(0, mixHex(ground, neon, 0.22 + bass * 0.38 + beat * 0.05));
    g.addColorStop(1, ground);
  } else {
    g.addColorStop(0, mixHex(paper, wash, 0.42 + beat * 0.1));
    g.addColorStop(1, paper);
  }
  ctx.fillStyle = g;
  ctx.globalAlpha = night ? 0.92 : 0.88;
  ctx.fillRect(0, 0, w, h);
  ctx.globalAlpha = 1;
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
