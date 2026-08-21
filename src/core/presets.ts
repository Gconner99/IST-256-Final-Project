import { uid } from "./ids";
import type { Preset, PresetPayload, Project } from "./types";
import { mulberry32 } from "./random";

export function extractPreset(project: Project, name: string): Preset {
  const data: PresetPayload = {
    seed: project.seed,
    duration: project.duration,
    fps: project.fps,
    layers: project.layers.map((l) => ({
      ...l,
      sourceId: null,
      effects: l.effects.map((fx) => ({ ...fx, params: { ...fx.params } })),
      transform: { ...l.transform },
      mask: { ...l.mask, rect: { ...l.mask.rect }, center: { ...l.mask.center } },
      feedback: { ...l.feedback },
    })),
    keyframes: project.keyframes.map((k) => ({ ...k })),
    playback: {
      speed: project.playback.speed,
      loop: project.playback.loop,
      mode: project.playback.mode,
    },
    globalFeedback: { ...project.globalFeedback },
  };
  return {
    id: uid("pst"),
    name,
    createdAt: Date.now(),
    seed: project.seed,
    data,
  };
}

export function applyPreset(project: Project, preset: Preset): Project {
  const data = preset.data;
  const sourceIds = project.sources.map((s) => s.id);
  const layers = data.layers.map((layer, i) => ({
    ...layer,
    id: layer.id,
    sourceId: layer.sourceId && sourceIds.includes(layer.sourceId) ? layer.sourceId : sourceIds[Math.min(i, sourceIds.length - 1)] ?? null,
  }));
  return {
    ...project,
    seed: data.seed,
    duration: data.duration,
    fps: data.fps,
    layers,
    keyframes: data.keyframes,
    playback: { ...project.playback, ...data.playback },
    globalFeedback: { ...data.globalFeedback },
  };
}

export function pickRandomPreset(presets: Preset[], seed: number): Preset | null {
  if (presets.length === 0) return null;
  const rng = mulberry32(seed);
  return presets[Math.floor(rng() * presets.length)];
}

export function duplicatePreset(preset: Preset): Preset {
  return {
    ...preset,
    id: uid("pst"),
    name: `${preset.name} copy`,
    createdAt: Date.now(),
    data: JSON.parse(JSON.stringify(preset.data)) as PresetPayload,
  };
}
