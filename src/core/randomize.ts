import { getEffect } from "../effects/registry";
import { uid } from "./ids";
import { clamp, lerp, mulberry32 } from "./random";
import type { BlendMode, EffectInstance, Layer, ParamDef, Project } from "./types";

type Mood = "lush" | "outsider" | "mix";

interface Palette {
  shadow: string;
  highlight: string;
  leak: string;
  inkA: string;
  inkB: string;
}

interface Look {
  name: string;
  mood: Mood;
  stack: string[];
  blend?: BlendMode;
}

const PALETTES: Palette[] = [
  { shadow: "#1a1024", highlight: "#f4e2c4", leak: "#ff8a5c", inkA: "#120814", inkB: "#f2d2a8" },
  { shadow: "#0d1f18", highlight: "#e8f5d0", leak: "#b6ff7a", inkA: "#07140f", inkB: "#d7f0b8" },
  { shadow: "#101428", highlight: "#c9d4ff", leak: "#7aa2ff", inkA: "#070b18", inkB: "#dce4ff" },
  { shadow: "#2a1220", highlight: "#ffd5e5", leak: "#ff6a8a", inkA: "#180810", inkB: "#ffd0dc" },
  { shadow: "#1a1208", highlight: "#ffe7b3", leak: "#ff9a3c", inkA: "#140c04", inkB: "#ffe2a8" },
  { shadow: "#041820", highlight: "#b8fff2", leak: "#3dffd0", inkA: "#031018", inkB: "#c8fff6" },
  { shadow: "#1c1010", highlight: "#ffd8c2", leak: "#ff7a4a", inkA: "#140808", inkB: "#ffc8a8" },
  { shadow: "#0a0a0a", highlight: "#f2f0e6", leak: "#ffeeaa", inkA: "#050505", inkB: "#efece0" },
  { shadow: "#1a0820", highlight: "#d0ff3d", leak: "#ff4ad2", inkA: "#100414", inkB: "#e8ff88" },
  { shadow: "#3a0018", highlight: "#ffee55", leak: "#ff3355", inkA: "#220010", inkB: "#ffe98a" },
  { shadow: "#2a0830", highlight: "#ffe66d", leak: "#ff4ad2", inkA: "#180420", inkB: "#ffd6f4" },
  { shadow: "#082428", highlight: "#7dffc4", leak: "#ff8ad4", inkA: "#041418", inkB: "#d8fff0" },
];

const LOOKS: Look[] = [
  { name: "silk garden", mood: "lush", stack: ["grade", "bloom", "grain", "warp"], blend: "normal" },
  { name: "honey dusk", mood: "lush", stack: ["grade", "duotone", "bloom", "lens"], blend: "normal" },
  { name: "lagoon", mood: "lush", stack: ["grade", "channels", "bloom", "chroma"], blend: "screen" },
  { name: "rose room", mood: "lush", stack: ["grade", "grain", "warp", "bloom"], blend: "normal" },
  { name: "holy smear", mood: "lush", stack: ["grade", "smear", "bloom", "echo"], blend: "lighten" },
  { name: "xerox folk", mood: "outsider", stack: ["posterize", "threshold", "analog", "chroma"], blend: "normal" },
  { name: "bruise print", mood: "outsider", stack: ["solarize", "channels", "warp", "analog"], blend: "difference" },
  { name: "marker night", mood: "outsider", stack: ["duotone", "posterize", "grain", "kaleido"], blend: "overlay" },
  { name: "carnival", mood: "mix", stack: ["duotone", "kaleido", "bloom", "critters"], blend: "screen" },
  { name: "field notes", mood: "mix", stack: ["grade", "posterize", "grain", "critters"], blend: "normal" },
  { name: "toy pop", mood: "mix", stack: ["duotone", "bloom", "grain", "critters"], blend: "screen" },
  { name: "flower drift", mood: "lush", stack: ["grade", "bloom", "grain", "dancer"], blend: "normal" },
  { name: "prism marsh", mood: "mix", stack: ["kaleido", "chroma", "bloom", "duotone"], blend: "overlay" },
  { name: "outsider silk", mood: "mix", stack: ["grade", "bloom", "analog", "critters"], blend: "normal" },
  { name: "candy idol", mood: "mix", stack: ["grade", "bloom", "critters", "dancer"], blend: "normal" },
  { name: "esoteric retina", mood: "mix", stack: ["grade", "bloom", "analog", "dancer"], blend: "normal" },
  { name: "plaza idol", mood: "mix", stack: ["duotone", "grain", "warp", "dancer"], blend: "normal" },
  { name: "night idol", mood: "outsider", stack: ["posterize", "chroma", "bloom", "dancer"], blend: "overlay" },
  { name: "glass morph", mood: "mix", stack: ["grade", "bloom", "warp", "solids"], blend: "normal" },
  { name: "crystal fold", mood: "outsider", stack: ["posterize", "chroma", "bloom", "solids"], blend: "screen" },
];

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
  const mixed = lerp(cur, target, Math.max(amount, 0.35));
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

function makeFx(typeId: string, seed: number, amount: number): EffectInstance {
  const def = getEffect(typeId);
  const params: Record<string, number | string | boolean> = {};
  if (def) {
    for (const p of def.params) params[p.id] = p.default;
  }
  return randomizeEffect({ id: uid("fx"), typeId, enabled: true, params }, seed, amount);
}

function applyMood(fx: EffectInstance, mood: Mood, palette: Palette, rng: () => number): EffectInstance {
  const p = { ...fx.params };
  if (fx.typeId === "grade") {
    if (mood === "lush") {
      p.saturation = 0.18 + rng() * 0.42;
      p.brightness = -0.04 + rng() * 0.16;
      p.contrast = 0.06 + rng() * 0.22;
      p.gamma = 0.82 + rng() * 0.35;
      p.hue = (rng() - 0.5) * 0.18;
      p.exposure = -0.15 + rng() * 0.4;
    } else if (mood === "outsider") {
      p.saturation = rng() > 0.5 ? -0.35 + rng() * 0.3 : 0.4 + rng() * 0.5;
      p.contrast = 0.2 + rng() * 0.55;
      p.gamma = 0.55 + rng() * 1.1;
      p.hue = (rng() - 0.5) * 0.7;
    } else {
      p.saturation = 0.05 + rng() * 0.5;
      p.contrast = 0.1 + rng() * 0.35;
      p.hue = (rng() - 0.5) * 0.35;
    }
  }
  if (fx.typeId === "duotone") {
    p.shadow = palette.shadow;
    p.highlight = palette.highlight;
    p.amount = mood === "lush" ? 0.45 + rng() * 0.4 : 0.7 + rng() * 0.3;
  }
  if (fx.typeId === "grain") {
    p.leakColor = palette.leak;
    p.leak = mood === "lush" ? 0.18 + rng() * 0.35 : rng() * 0.22;
    p.grain = mood === "lush" ? 0.12 + rng() * 0.22 : 0.2 + rng() * 0.4;
  }
  if (fx.typeId === "bloom") {
    p.amount = mood === "outsider" ? 0.15 + rng() * 0.3 : 0.4 + rng() * 0.45;
    p.halation = mood === "lush" ? 0.22 + rng() * 0.4 : rng() * 0.25;
    p.size = 1.4 + rng() * 2.2;
  }
  if (fx.typeId === "warp") {
    p.amount = mood === "lush" ? 0.012 + rng() * 0.04 : 0.04 + rng() * 0.12;
  }
  if (fx.typeId === "chroma") {
    p.amount = mood === "lush" ? 0.002 + rng() * 0.006 : 0.006 + rng() * 0.02;
  }
  if (fx.typeId === "analog") {
    p.mixScan = mood === "lush" ? rng() * 0.2 : 0.25 + rng() * 0.5;
    p.noise = mood === "lush" ? rng() * 0.1 : 0.12 + rng() * 0.35;
  }
  if (fx.typeId === "posterize") {
    p.levels = 3 + Math.floor(rng() * 6);
    p.dither = 0.08 + rng() * 0.35;
  }
  if (fx.typeId === "threshold") {
    p.mix = 0.35 + rng() * 0.45;
    p.soft = 0.04 + rng() * 0.18;
  }
  if (fx.typeId === "critters") {
    p.count = mood === "lush" ? 3 + Math.floor(rng() * 3) : 4 + Math.floor(rng() * 4);
    p.size = 0.85 + rng() * 0.7;
    p.amount = 0.7 + rng() * 0.3;
    p.speed = 0.7 + rng() * 1.3;
    p.seed = 1 + Math.floor(rng() * 9998);
    const roll = rng();
    if (mood === "lush") p.kit = roll > 0.72 ? "toy pop" : roll > 0.4 ? "mix" : "shapes";
    else p.kit = roll > 0.55 ? "toy pop" : roll > 0.22 ? "mix" : "shapes";
  }
  if (fx.typeId === "dancer") {
    p.size = 0.48 + rng() * 0.38;
    p.count = 1;
    p.crowd = "normal";
    p.place = "center";
    const mv = rng();
    if (mood === "lush") p.move = mv > 0.38 ? "float" : mv > 0.18 ? "drift" : "dance";
    else if (mood === "mix") p.move = mv > 0.52 ? "float" : mv > 0.3 ? "drift" : mv > 0.16 ? "orbit" : "dance";
    else p.move = mv > 0.78 ? "drift" : "dance";
    p.echo = 0.35 + rng() * 0.5;
    p.amount = 1;
    p.speed = p.move === "dance" ? 0.55 + rng() * 1.5 : 0.32 + rng() * 0.7;
    p.seed = 1 + Math.floor(rng() * 9998);
  }
  if (fx.typeId === "solids") {
    p.size = 0.42 + rng() * 0.28;
    p.count = 2 + Math.floor(rng() * 3);
    p.crowd = "normal";
    p.place = rng() > 0.28 ? "scatter" : "center";
    p.style = rng() > 0.62 ? "crystal" : "morph";
    const mv = rng();
    if (mood === "lush") p.move = mv > 0.4 ? "weave" : mv > 0.18 ? "float" : "orbit";
    else if (mood === "mix") p.move = mv > 0.35 ? "weave" : mv > 0.18 ? "drift" : "orbit";
    else p.move = mv > 0.5 ? "weave" : "drift";
    p.echo = 0.28 + rng() * 0.45;
    p.amount = 1;
    p.speed = 0.35 + rng() * 0.7;
    p.seed = 1 + Math.floor(rng() * 9998);
  }
  if (fx.typeId === "kaleido") {
    p.segments = mood === "lush" ? 4 + Math.floor(rng() * 4) : 5 + Math.floor(rng() * 8);
    p.zoom = 0.7 + rng() * 0.8;
  }
  if (fx.typeId === "channels") {
    p.tint = palette.leak;
    p.tintAmt = mood === "lush" ? 0.12 + rng() * 0.28 : rng() * 0.45;
  }
  return { ...fx, params: p };
}

function makeCrittersInstance(seed: number, mood: Mood = "mix"): EffectInstance {
  const rng = mulberry32(seed >>> 0);
  return applyMood(makeFx("critters", seed, 0.85), mood, PALETTES[seed % PALETTES.length], rng);
}

function makeIdolInstance(seed: number, mood: Mood = "mix"): EffectInstance {
  const rng = mulberry32(seed >>> 0);
  return applyMood(makeFx("dancer", seed, 0.85), mood, PALETTES[seed % PALETTES.length], rng);
}

function makeSolidsInstance(seed: number, mood: Mood = "mix"): EffectInstance {
  const rng = mulberry32(seed >>> 0);
  return applyMood(makeFx("solids", seed, 0.85), mood, PALETTES[seed % PALETTES.length], rng);
}

/** Drop a dancing idol onto every layer that doesn't already have one. */
export function ensureIdol(project: Project): Project {
  return {
    ...project,
    layers: project.layers.map((layer, i) => {
      if (layer.effects.some((e) => e.typeId === "dancer")) return layer;
      return { ...layer, effects: [...layer.effects, makeIdolInstance(project.seed + i * 4243, "mix")] };
    }),
  };
}

/** Drop abstract solids onto every layer that doesn't already have them. */
export function ensureSolids(project: Project): Project {
  return {
    ...project,
    layers: project.layers.map((layer, i) => {
      if (layer.effects.some((e) => e.typeId === "solids")) return layer;
      return { ...layer, effects: [...layer.effects, makeSolidsInstance(project.seed + i * 5119, "mix")] };
    }),
  };
}
export function ensureCritters(project: Project): Project {
  return {
    ...project,
    layers: project.layers.map((layer, i) => {
      if (layer.effects.some((e) => e.typeId === "critters")) return layer;
      return { ...layer, effects: [...layer.effects, makeCrittersInstance(project.seed + i * 7919, "mix")] };
    }),
  };
}

function rebuildLayer(layer: Layer, seed: number, amount: number): Layer {
  const rng = mulberry32(seed >>> 0);
  const look = LOOKS[Math.floor(rng() * LOOKS.length)];
  const palette = PALETTES[Math.floor(rng() * PALETTES.length)];
  const stack = look.stack.filter((id) => getEffect(id));
  const effects = stack.map((id, i) => applyMood(makeFx(id, seed + i * 997, amount), look.mood, palette, rng));
  if (look.name === "toy pop" || look.name === "candy idol" || look.name === "flower drift") {
    for (const fx of effects) {
      if (fx.typeId === "critters") fx.params.kit = look.name === "candy idol" ? "mix" : "toy pop";
      if (fx.typeId === "dancer") {
        fx.params.move = "float";
        fx.params.speed = 0.35 + rng() * 0.45;
      }
    }
  }
  if (look.name === "glass morph") {
    for (const fx of effects) {
      if (fx.typeId === "solids") {
        fx.params.style = "morph";
        fx.params.move = "weave";
        fx.params.place = "scatter";
        fx.params.speed = 0.4 + rng() * 0.5;
        fx.params.count = 3;
      }
    }
  }
  if (look.name === "crystal fold") {
    for (const fx of effects) {
      if (fx.typeId === "solids") {
        fx.params.style = "crystal";
        fx.params.move = rng() > 0.4 ? "orbit" : "weave";
        fx.params.speed = 0.4 + rng() * 0.55;
        fx.params.count = 2 + Math.floor(rng() * 2);
      }
    }
  }
  const feedbackAmt = look.mood === "lush" ? 0.06 + rng() * 0.16 : 0.04 + rng() * 0.28;
  return {
    ...layer,
    blendMode: look.blend ?? "normal",
    opacity: 0.88 + rng() * 0.12,
    effects,
    feedback: {
      ...layer.feedback,
      amount: feedbackAmt,
      opacity: 0.45 + rng() * 0.3,
      scale: 1.005 + rng() * 0.03,
      rotation: (rng() - 0.5) * 0.04,
      distortion: look.mood === "outsider" ? rng() * 0.4 : rng() * 0.12,
    },
  };
}

export function randomizeProject(
  project: Project,
  mode: "all" | "selected" | "param",
  selectedLayerId: string | null,
  selectedEffectId: string | null,
  selectedParamId: string | null,
): Project {
  const amount = Math.max(project.randomAmount, mode === "all" ? 0.75 : 0);
  const seed = project.seed >>> 0;
  const rng = mulberry32(seed ^ 0x9e3779b9);

  const layers = project.layers.map((layer, li) => {
    if (mode === "selected" && layer.id !== selectedLayerId) return layer;
    if (mode === "param") {
      if (layer.id !== selectedLayerId) return layer;
      return {
        ...layer,
        effects: layer.effects.map((fx) =>
          fx.id === selectedEffectId && selectedParamId
            ? randomizeEffect(fx, seed + li * 13, Math.max(amount, 0.55), selectedParamId)
            : fx,
        ),
      };
    }
    if (mode === "all") return rebuildLayer(layer, seed + li * 7919, amount);
    return randomizeLayer(layer, seed + li * 7919, amount, true, selectedEffectId);
  });

  const sources = project.sources.map((src, i) => {
    if (mode !== "all" || src.kind !== "generator") return src;
    const prng = mulberry32(seed + i * 131);
    const pal = PALETTES[Math.floor(prng() * PALETTES.length)];
    const gens = ["plasma", "noise", "gradient", "checker"] as const;
    const keep = prng() > 0.35;
    return {
      ...src,
      generator: keep ? src.generator : gens[Math.floor(prng() * gens.length)],
      colorA: pal.inkA,
      colorB: pal.inkB,
    };
  });

  const globalFeedback =
    mode === "all"
      ? {
          ...project.globalFeedback,
          amount: 0.05 + rng() * 0.22,
          opacity: 0.4 + rng() * 0.3,
          scale: 1.004 + rng() * 0.02,
          rotation: (rng() - 0.5) * 0.03,
          distortion: rng() * 0.18,
        }
      : project.globalFeedback;

  return { ...project, layers, sources, globalFeedback };
}
