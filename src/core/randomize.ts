import { getEffect } from "../effects/registry";
import { uid } from "./ids";
import { clamp, lerp, mulberry32 } from "./random";
import type { EffectInstance, Layer, ParamDef, Project } from "./types";

function randForParam(rng: () => number, def: ParamDef, current: number | string | boolean, amount: number) {
  if (def.randomizable === false) return current;
  if (def.kind === "bool") {
    if (amount < 0.15) return current;
    return rng() > 0.5;
  }
  if (def.kind === "enum" && def.options?.length) {
    if (amount < 0.2) return current;
    return def.options[Math.floor(rng() * def.options.length)].value;
  }
  if (def.kind === "color" && typeof current === "string") {
    const jitter = (hex: string) => {
      const n = parseInt(hex.slice(1), 16);
      const r = (n >> 16) & 255;
      const g = (n >> 8) & 255;
      const b = n & 255;
      const j = (v: number) => clamp(Math.round(lerp(v, rng() * 255, amount)), 0, 255);
      return `#${[j(r), j(g), j(b)].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
    };
    return jitter(current.startsWith("#") ? current : "#888888");
  }
  const min = def.min ?? 0;
  const max = def.max ?? 1;
  const cur = typeof current === "number" ? current : Number(def.default);
  const target = min + rng() * (max - min);
  const mixed = lerp(cur, target, amount);
  if (def.kind === "int") return Math.round(mixed);
  return mixed;
}

export function randomizeEffect(
  fx: EffectInstance,
  seed: number,
  amount: number,
  onlyParamId?: string,
): EffectInstance {
  const def = getEffect(fx.typeId);
  if (!def) return fx;
  const rng = mulberry32(seed);
  const params = { ...fx.params };
  for (const p of def.params) {
    if (onlyParamId && p.id !== onlyParamId) continue;
    params[p.id] = randForParam(rng, p, params[p.id] ?? p.default, clamp(amount, 0, 1));
  }
  return { ...fx, params };
}

export function randomizeLayer(layer: Layer, seed: number, amount: number, selectedOnly = false, selectedEffectId?: string | null): Layer {
  const effects = layer.effects.map((fx, i) => {
    if (selectedOnly && selectedEffectId && fx.id !== selectedEffectId) return fx;
    return randomizeEffect(fx, seed + i * 997, amount);
  });
  return { ...layer, effects };
}

function makeCrittersInstance(seed: number): EffectInstance {
  const def = getEffect("critters");
  const params: Record<string, number | string | boolean> = {};
  if (def) {
    for (const p of def.params) params[p.id] = p.default;
  }
  const rng = mulberry32(seed >>> 0);
  params.seed = 1 + Math.floor(rng() * 9998);
  params.count = 3 + Math.floor(rng() * 10);
  params.size = 0.65 + rng() * 1.3;
  params.speed = 0.35 + rng() * 1.9;
  params.amount = 0.75 + rng() * 0.25;
  return { id: uid("fx"), typeId: "critters", enabled: true, params };
}

/** Drop a critter overlay onto every layer that doesn't already have one. */
export function ensureCritters(project: Project): Project {
  return {
    ...project,
    layers: project.layers.map((layer, i) => {
      if (layer.effects.some((e) => e.typeId === "critters")) return layer;
      return { ...layer, effects: [...layer.effects, makeCrittersInstance(project.seed + i * 7919)] };
    }),
  };
}

export function randomizeProject(
  project: Project,
  mode: "all" | "selected" | "param",
  selectedLayerId: string | null,
  selectedEffectId: string | null,
  selectedParamId: string | null,
): Project {
  const amount = project.randomAmount;
  const seed = project.seed >>> 0;
  const layers = project.layers.map((layer, li) => {
    if (mode === "selected" && layer.id !== selectedLayerId) return layer;
    if (mode === "param") {
      if (layer.id !== selectedLayerId) return layer;
      return {
        ...layer,
        effects: layer.effects.map((fx) =>
          fx.id === selectedEffectId && selectedParamId
            ? randomizeEffect(fx, seed + li * 13, amount, selectedParamId)
            : fx,
        ),
      };
    }
    const selectedOnly = mode === "selected";
    return randomizeLayer(layer, seed + li * 7919, amount, selectedOnly, selectedEffectId);
  });
  return { ...project, layers };
}
