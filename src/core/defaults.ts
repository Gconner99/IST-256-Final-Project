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
};

export function defaultGeneratorSource(kind: MediaSource["generator"] = "plasma"): MediaSource {
  const ink = GEN_INK[kind ?? "plasma"] ?? { a: "#140c10", b: "#f0d2b0" };
  return {
    id: uid("src"),
    name: kind === "critters" ? "FLOATERS" : kind === "stage" ? "STAGE" : kind === "sketch" ? "SKETCH" : kind ? kind.toUpperCase() : "SIGNAL",
    kind: "generator",
    generator: kind ?? "plasma",
    colorA: ink.a,
    colorB: ink.b,
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
  const plasma = defaultGeneratorSource("plasma");
  const layer = defaultLayer("SIGNAL", plasma.id, ["grade", "bloom", "grain"]);
  layer.effects.forEach((fx) => {
    if (fx.typeId === "grade") {
      fx.params.saturation = 0.22;
      fx.params.contrast = 0.12;
      fx.params.gamma = 0.92;
    }
    if (fx.typeId === "bloom") {
      fx.params.amount = 0.42;
      fx.params.halation = 0.28;
    }
    if (fx.typeId === "grain") {
      fx.params.grain = 0.16;
      fx.params.leak = 0.2;
    }
  });
  const project: Project = {
    version: 1,
    app: "phosphene",
    name: "untitled",
    seed: 256,
    randomAmount: 0.82,
    quality: "preview",
    duration: 8,
    fps: 30,
    sources: [plasma],
    layers: [layer],
    keyframes: [],
    playback: defaultPlayback(),
    globalFeedback: { ...defaultFeedback(), amount: 0.18, opacity: 0.55, scale: 1.01 },
    exportSettings: defaultExportSettings(),
    presets: [],
  };
  const scramble = randomizeProject({ ...project, seed: 90210, randomAmount: 1 }, "all", null, null, null);
  project.presets = [
    extractPreset(project, "factory · signal"),
    extractPreset(scramble, "factory · scramble"),
  ];
  return project;
}
