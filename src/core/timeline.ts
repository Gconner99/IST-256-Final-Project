import { clamp, lerp, smoothstep } from "./random";
import type { Keyframe, Layer, PlaybackMode, Project } from "./types";

export function mediaTime(
  playhead: number,
  duration: number,
  mode: PlaybackMode,
  speed: number,
  loop: boolean,
): number {
  if (duration <= 0) return 0;
  const t = playhead * Math.max(0.01, speed);
  if (mode === "random") {
    const frame = Math.floor(Math.abs(Math.sin(t * 12.9898) * 43758.5453));
    return (frame % Math.max(1, Math.floor(duration * 1000))) / 1000;
  }
  let u = t;
  if (mode === "reverse") u = -t;
  if (mode === "pingpong") {
    const cycle = duration * 2;
    const m = ((u % cycle) + cycle) % cycle;
    return m <= duration ? m : cycle - m;
  }
  if (loop) {
    const m = ((u % duration) + duration) % duration;
    return m;
  }
  return clamp(u, 0, duration);
}

export function keyframesFor(
  keys: Keyframe[],
  layerId: string,
  target: Keyframe["target"],
  paramId: string,
  effectId?: string,
): Keyframe[] {
  return keys
    .filter(
      (k) =>
        k.layerId === layerId &&
        k.target === target &&
        k.paramId === paramId &&
        (target !== "effect" || k.effectId === effectId),
    )
    .sort((a, b) => a.time - b.time);
}

export function evalKeyframes(keys: Keyframe[], time: number, fallback: number): number {
  if (keys.length === 0) return fallback;
  if (time <= keys[0].time) return keys[0].value;
  const last = keys[keys.length - 1];
  if (time >= last.time) return last.value;
  for (let i = 0; i < keys.length - 1; i++) {
    const a = keys[i];
    const b = keys[i + 1];
    if (time >= a.time && time <= b.time) {
      const span = b.time - a.time || 1;
      let t = (time - a.time) / span;
      if (b.easing === "smooth" || a.easing === "smooth") t = smoothstep(t);
      return lerp(a.value, b.value, t);
    }
  }
  return fallback;
}

export function resolveNumeric(
  project: Project,
  layerId: string,
  target: Keyframe["target"],
  paramId: string,
  fallback: number,
  time: number,
  effectId?: string,
): number {
  const keys = keyframesFor(project.keyframes, layerId, target, paramId, effectId);
  return evalKeyframes(keys, time, fallback);
}

export function resolvedLayerParams(project: Project, layer: Layer, time: number): Layer {
  const clone: Layer = {
    ...layer,
    transform: { ...layer.transform },
    mask: { ...layer.mask, rect: { ...layer.mask.rect }, center: { ...layer.mask.center } },
    feedback: { ...layer.feedback },
    effects: layer.effects.map((fx) => ({ ...fx, params: { ...fx.params } })),
  };
  clone.opacity = resolveNumeric(project, layer.id, "layer", "opacity", layer.opacity, time);
  clone.transform.x = resolveNumeric(project, layer.id, "layer", "x", layer.transform.x, time);
  clone.transform.y = resolveNumeric(project, layer.id, "layer", "y", layer.transform.y, time);
  clone.transform.scale = resolveNumeric(project, layer.id, "layer", "scale", layer.transform.scale, time);
  clone.transform.rotation = resolveNumeric(
    project,
    layer.id,
    "layer",
    "rotation",
    layer.transform.rotation,
    time,
  );
  for (const key of Object.keys(clone.feedback) as (keyof Layer["feedback"])[]) {
    clone.feedback[key] = resolveNumeric(
      project,
      layer.id,
      "feedback",
      key,
      layer.feedback[key],
      time,
    );
  }
  for (const fx of clone.effects) {
    for (const [pid, val] of Object.entries(fx.params)) {
      if (typeof val === "number") {
        fx.params[pid] = resolveNumeric(project, layer.id, "effect", pid, val, time, fx.id);
      }
    }
  }
  return clone;
}

export function resolvePlaybackSpeed(project: Project, time: number): number {
  const layerId = project.layers[0]?.id ?? "";
  return resolveNumeric(project, layerId, "playback", "speed", project.playback.speed, time);
}
