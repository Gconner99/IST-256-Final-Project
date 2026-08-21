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
    width: 1280,
    height: 720,
    fps: 30,
    duration: 8,
    format: "png",
    quality: 0.92,
    bitrate: 12,
    filename: "phosphene",
  };
}

export function defaultGeneratorSource(kind: MediaSource["generator"] = "plasma"): MediaSource {
  return {
    id: uid("src"),
    name: kind ? kind.toUpperCase() : "SIGNAL",
    kind: "generator",
    generator: kind ?? "plasma",
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
  const layer = defaultLayer("SIGNAL", plasma.id, ["grade", "warp", "chroma", "analog"]);
  layer.effects.forEach((fx) => {
    if (fx.typeId === "warp") {
      fx.params.amount = 0.06;
      fx.params.freq = 6;
    }
    if (fx.typeId === "analog") {
      fx.params.mixScan = 0.25;
    }
    if (fx.typeId === "chroma") {
      fx.params.amount = 0.004;
    }
  });
  const project: Project = {
    version: 1,
    app: "phosphene",
    name: "untitled",
    seed: 256,
    randomAmount: 0.55,
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
