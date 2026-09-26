import {
  clampBoidAlign,
  clampBoidCohere,
  clampBoidRadius,
  clampBoidSep,
  clampBoidSpeed,
  clampCollageChainMorph,
  clampCollageChainSmooth,
  clampCollageChainTravel,
  clampCollageChainVary,
  clampCollageDensity,
  clampCollagePace,
  clampCollageScale,
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
  generatorForMove,
  inkForKit,
  isHeraldry,
  kitFromUnknown,
  MOVE_LABEL,
  moveFromUnknown,
  paperForKit,
  pleasingMoveForSeed,
  sceneFromGenerator,
  type CollageKit,
  type CollageMove,
} from "../engine/heraldry";
import { uid } from "./ids";
import type {
  EffectInstance,
  ExportSettings,
  FeedbackSettings,
  Layer,
  MaskSettings,
  MediaSource,
  PlaybackState,
  Project,
  Transform,
} from "./types";
import { getEffect } from "../effects/registry";
import { extractPreset } from "./presets";
import { randomizeProject } from "./randomize";

export function defaultTransform(): Transform {
  return { x: 0, y: 0, scale: 1, rotation: 0 };
}

export function defaultMask(): MaskSettings {
  return {
    type: "none",
    invert: false,
    softness: 0.12,
    rect: { x: 0.15, y: 0.15, w: 0.7, h: 0.7 },
    center: { x: 0.5, y: 0.5 },
    radius: 0.4,
    gradientAngle: 0,
    noiseScale: 4,
    imageSourceId: null,
  };
}

export function defaultFeedback(): FeedbackSettings {
  return {
    amount: 0,
    delay: 0,
    opacity: 0.65,
    scale: 1.02,
    rotation: 0,
    distortion: 0,
  };
}

export function defaultPlayback(): PlaybackState {
  return {
    playing: true,
    time: 0,
    speed: 1,
    loop: true,
    mode: "forward",
    freeze: false,
    duration: 8,
  };
}

export function defaultExportSettings(): ExportSettings {
  return {
    width: 960,
    height: 540,
    fps: 24,
    duration: 4,
    format: "png",
    quality: 0.92,
    bitrate: 8,
    filename: "phosphene",
    loopClose: true,
  };
}

const GEN_INK: Record<string, { a: string; b: string }> = {
  stars: { a: "#060814", b: "#c8d4ff" },
  marsh: { a: "#0c1410", b: "#ffb44a" },
  oil: { a: "#12081c", b: "#3dffd0" },
  paper: { a: "#e8dcc8", b: "#2a1810" },
  cave: { a: "#08060c", b: "#7aa2ff" },
  stage: { a: "#ff8ab8", b: "#7ad8ff" },
  sketch: { a: "#efe4c8", b: "#c45c66" },
  felt: { a: "#f0d4c4", b: "#7ec9c0" },
  foil: { a: "#ff7ad2", b: "#7ae8ff" },
  plush: { a: "#f09ab8", b: "#7ed8c4" },
  yarn: { a: "#f4b8d0", b: "#7ed8c4" },
  sequin: { a: "#ff6ad8", b: "#7ae8ff" },
  quilt: { a: "#f2c48a", b: "#8a6ad8" },
  cork: { a: "#c48a5a", b: "#e87890" },
  gingham: { a: "#f4e6e4", b: "#d44c66" },
  sprinkle: { a: "#ffd6e8", b: "#7ad8ff" },
  velvet: { a: "#6a2048", b: "#e878a0" },
  confetti: { a: "#ff7ab8", b: "#7ae8ff" },
  disco: { a: "#2a1038", b: "#ffd86a" },
  terrazzo: { a: "#e8d8cc", b: "#d45c78" },
  comic: { a: "#fff4a8", b: "#2a1810" },
  lattice: { a: "#1a0830", b: "#ffe14a" },
  tessera: { a: "#0a1a28", b: "#ff4ad2" },
  phase: { a: "#120814", b: "#3dffd0" },
  coil: { a: "#081018", b: "#ff6a3c" },
  prism: { a: "#201028", b: "#7ad8ff" },
  heraldry: { a: "#ffffff", b: "#c41e3a" },
  wallpaper: { a: "#ffffff", b: "#1c4db8" },
  giants: { a: "#ffffff", b: "#c41e3a" },
  shower: { a: "#ffffff", b: "#e84a8a" },
};

const KIT_LABEL: Record<CollageKit, string> = {
  sailor: "SAILOR",
  circus: "CIRCUS",
  fruit: "FRUIT",
  nature: "GROVE",
  love: "LOVE",
  space: "SPACE",
  sweet: "SWEET",
  music: "MUSIC",
  kitchen: "KITCHEN",
  weather: "SKY",
  city: "STREET",
  arcade: "ARCADE",
};

const PLACE_LABEL: Record<string, string> = {
  heraldry: "RUSH",
  wallpaper: "RUSH",
  giants: "TUNNEL",
  shower: "LATTICE",
};

export interface CollageExtras {
  kitB?: CollageKit | string | null;
  night?: boolean;
  scale?: number;
  density?: number;
  pace?: number;
  wash?: string | null;
  chainTravel?: number;
  chainMorph?: number;
  chainVary?: number;
  chainSmooth?: number;
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
}

export function collageName(move: CollageMove, kit: CollageKit, kitB?: CollageKit | null): string {
  const place = MOVE_LABEL[move];
  if (kitB && kitB !== kit) return `${place} · ${KIT_LABEL[kit]} · ${KIT_LABEL[kitB]}`;
  return `${place} · ${KIT_LABEL[kit]}`;
}

export function defaultGeneratorSource(
  kind: MediaSource["generator"] = "plasma",
  kit?: CollageKit | string | null,
  move?: CollageMove | string | null,
  extras?: CollageExtras,
): MediaSource {
  const collageKit = isHeraldry(kind) ? kitFromUnknown(kit) : undefined;
  const ink = GEN_INK[kind ?? "plasma"] ?? { a: "#140c10", b: "#f0d2b0" };
  let collageMove: CollageMove | undefined;
  if (collageKit) {
    collageMove =
      move === "mix" || move === "tour"
        ? pleasingMoveForSeed(Date.now() + Math.floor(Math.random() * 997))
        : move
          ? moveFromUnknown(move)
          : (sceneFromGenerator(kind) as CollageMove);
  }
  const generator = collageMove ? generatorForMove(collageMove) : (kind ?? "plasma");
  const place = collageMove ? MOVE_LABEL[collageMove] : PLACE_LABEL[kind ?? ""] ?? (kind ? kind.toUpperCase() : "SIGNAL");
  const kitB = collageKit && extras?.kitB ? kitFromUnknown(extras.kitB) : undefined;
  const collageKitB = kitB && collageKit && kitB !== collageKit ? kitB : undefined;
  const name = collageKit && collageMove
    ? collageName(collageMove, collageKit, collageKitB)
    : collageKit
      ? `${place} · ${KIT_LABEL[collageKit]}`
      : kind === "critters"
        ? "FLOATERS"
        : kind === "stage"
          ? "STAGE"
          : kind === "sketch"
            ? "SKETCH"
            : place;
  const wash = extras?.wash && /^#[0-9a-fA-F]{6}$/.test(extras.wash) ? extras.wash : undefined;
  return {
    id: uid("src"),
    name,
    kind: "generator",
    generator,
    colorA: wash ?? (collageKit ? paperForKit(collageKit, collageMove === "rush" ? 1 : collageMove === "tunnel" ? 5 : collageMove === "bounce" ? 7 : 11) : ink.a),
    colorB: collageKit ? inkForKit(collageKit) : ink.b,
    collageKit,
    collageKitB,
    collageMove,
    collageNight: collageKit ? !!extras?.night : undefined,
    collageScale: collageKit ? clampCollageScale(extras?.scale) : undefined,
    collageDensity: collageKit ? clampCollageDensity(extras?.density) : undefined,
    collagePace: collageKit ? clampCollagePace(extras?.pace) : undefined,
    collageChainTravel: collageKit ? clampCollageChainTravel(extras?.chainTravel) : undefined,
    collageChainMorph: collageKit ? clampCollageChainMorph(extras?.chainMorph) : undefined,
    collageChainVary: collageKit ? clampCollageChainVary(extras?.chainVary) : undefined,
    collageChainSmooth: collageKit ? clampCollageChainSmooth(extras?.chainSmooth) : undefined,
    collageSpringStrength: collageKit ? clampSpringStrength(extras?.springStrength) : undefined,
    collageSpringDamp: collageKit ? clampSpringDamp(extras?.springDamp) : undefined,
    collageSpringDist: collageKit ? clampSpringDist(extras?.springDist) : undefined,
    collageSpringElast: collageKit ? clampSpringElast(extras?.springElast) : undefined,
    collageSpringBreak: collageKit ? clampSpringBreak(extras?.springBreak) : undefined,
    collageFlowScale: collageKit ? clampFlowScale(extras?.flowScale) : undefined,
    collageFlowTurb: collageKit ? clampFlowTurb(extras?.flowTurb) : undefined,
    collageFlowEvolve: collageKit ? clampFlowEvolve(extras?.flowEvolve) : undefined,
    collageFlowForce: collageKit ? clampFlowForce(extras?.flowForce) : undefined,
    collageFlowDepth: collageKit ? clampFlowDepth(extras?.flowDepth) : undefined,
    collageBoidCohere: collageKit ? clampBoidCohere(extras?.boidCohere) : undefined,
    collageBoidSep: collageKit ? clampBoidSep(extras?.boidSep) : undefined,
    collageBoidAlign: collageKit ? clampBoidAlign(extras?.boidAlign) : undefined,
    collageBoidRadius: collageKit ? clampBoidRadius(extras?.boidRadius) : undefined,
    collageBoidSpeed: collageKit ? clampBoidSpeed(extras?.boidSpeed) : undefined,
    collagePoleCount: collageKit ? clampPoleCount(extras?.poleCount) : undefined,
    collagePoleAttract: collageKit ? clampPoleAttract(extras?.poleAttract) : undefined,
    collagePoleRepel: collageKit ? clampPoleRepel(extras?.poleRepel) : undefined,
    collagePoleSpeed: collageKit ? clampPoleSpeed(extras?.poleSpeed) : undefined,
    collagePoleFalloff: collageKit ? clampPoleFalloff(extras?.poleFalloff) : undefined,
    collagePoleSwitch: collageKit ? clampPoleSwitch(extras?.poleSwitch) : undefined,
    width: 1280,
    height: 720,
    duration: 0,
  };
}

export function makeEffectInstance(typeId: string): EffectInstance {
  const def = getEffect(typeId);
  if (!def) throw new Error(`Unknown effect: ${typeId}`);
  const params: Record<string, number | string | boolean> = {};
  for (const p of def.params) params[p.id] = p.default;
  return { id: uid("fx"), typeId, enabled: true, params };
}

export function defaultLayer(name: string, sourceId: string | null, effects: string[] = []): Layer {
  return {
    id: uid("lyr"),
    name,
    enabled: true,
    opacity: 1,
    blendMode: "normal",
    sourceId,
    transform: defaultTransform(),
    effects: effects.map(makeEffectInstance),
    mask: defaultMask(),
    feedback: defaultFeedback(),
  };
}

export function createDefaultProject(): Project {
  const field = defaultGeneratorSource("wallpaper", "sailor", "rush");
  const layer = defaultLayer("COLLAGE", field.id, []);
  const project: Project = {
    version: 1,
    app: "phosphene",
    name: "untitled",
    seed: 256,
    randomAmount: 0.82,
    quality: "preview",
    duration: 8,
    fps: 30,
    sources: [field],
    layers: [layer],
    keyframes: [],
    playback: defaultPlayback(),
    globalFeedback: { ...defaultFeedback(), amount: 0, opacity: 0.4, scale: 1 },
    exportSettings: defaultExportSettings(),
    presets: [],
  };
  const scramble = randomizeProject({ ...project, seed: 90210, randomAmount: 1 }, "all", null, null, null);
  project.presets = [
    extractPreset(project, "factory · tour"),
    extractPreset(scramble, "factory · scramble"),
  ];
  return project;
}
