import { mulberry32 } from "./random";

export type ComboMood = "lush" | "outsider" | "mix";

export interface EffectCombo {
  name: string;
  mood: ComboMood;
  /** Wacky rolls only pick these thicker recipes. */
  wacky?: boolean;
  /** Apply order, inner to outer. No dancer. Paper effects that keep occupancy readable. */
  stack: readonly string[];
}

/**
 * Effects that smash the occupancy field. They stay in the add menu for manual use
 * but Rand all never plants them.
 */
export const RAND_EFFECT_BAN = [
  "kaleido",
  "mirror",
  "spin",
  "warp",
  "displace",
  "smear",
  "lens",
  "analog",
  "dropout",
  "stutter",
  "slitscan",
  "solarize",
  "threshold",
  "key",
  "channels",
  "critters",
  "dancer",
] as const;

/**
 * Designed stacks. Geometry stays; one light, one ink, one paper treatment.
 * Speeds share a pulse so lamp / cycle / echo breathe with occupancy.
 */
export const EFFECT_COMBOS: readonly EffectCombo[] = [
  { name: "quiet glow", mood: "lush", stack: ["grade", "bloom", "grain"] },
  { name: "two-ink lamp", mood: "mix", stack: ["duotone", "bloom", "grain"] },
  { name: "print hold", mood: "outsider", stack: ["posterize", "bloom", "grain"] },
  { name: "iris field", mood: "lush", stack: ["vignette", "bloom", "grain"] },
  { name: "hue lamp", mood: "mix", stack: ["cycle", "bloom", "grain"] },
  { name: "wet ink", mood: "lush", stack: ["bleed", "bloom", "grain"] },
  { name: "sticker lift", mood: "mix", stack: ["relief", "bloom", "grain"] },
  { name: "misprint", mood: "outsider", stack: ["misprint", "bloom", "grade"] },
  { name: "paper haze", mood: "lush", stack: ["haze", "bloom", "grain"] },
  { name: "afterimage", mood: "lush", stack: ["echo", "bloom", "grain"] },
  { name: "soft prism", mood: "lush", stack: ["chroma", "bloom", "grade"] },
  { name: "night iris", mood: "mix", stack: ["vignette", "duotone", "bloom"] },
  { name: "cream lamp", mood: "lush", stack: ["lamp", "bloom", "grain"] },
  { name: "ink wash", mood: "mix", stack: ["duotone", "bloom"] },
  { name: "grade bloom", mood: "lush", stack: ["grade", "bloom"] },
  { name: "foil lift", mood: "mix", stack: ["relief", "duotone", "bloom"] },
  { name: "slow cycle", mood: "mix", stack: ["cycle", "haze", "bloom"] },
  { name: "wet two-ink", mood: "mix", stack: ["bleed", "duotone", "bloom"] },
  { name: "lamp iris", mood: "lush", stack: ["lamp", "vignette", "bloom"] },
  { name: "emulsion hold", mood: "outsider", stack: ["posterize", "grain", "bloom"] },

  { name: "chapel iris", mood: "lush", wacky: true, stack: ["vignette", "bloom", "grain", "cycle"] },
  { name: "wet chapel", mood: "lush", wacky: true, stack: ["bleed", "bloom", "grade", "grain"] },
  { name: "double foil", mood: "mix", wacky: true, stack: ["misprint", "duotone", "bloom", "grain"] },
  { name: "night relief", mood: "outsider", wacky: true, stack: ["relief", "haze", "bloom", "grain"] },
  { name: "lamp trail", mood: "lush", wacky: true, stack: ["echo", "lamp", "bloom", "grain"] },
  { name: "print haze", mood: "outsider", wacky: true, stack: ["posterize", "haze", "bloom", "grain"] },
  { name: "prism iris", mood: "mix", wacky: true, stack: ["chroma", "vignette", "bloom", "grade"] },
  { name: "cream misprint", mood: "mix", wacky: true, stack: ["misprint", "lamp", "bloom", "grain"] },
  { name: "outsider silk", mood: "outsider", wacky: true, stack: ["cycle", "relief", "bloom", "grain"] },
  { name: "moth paper", mood: "mix", wacky: true, stack: ["duotone", "vignette", "bloom", "grain"] },
  { name: "wet night", mood: "mix", wacky: true, stack: ["bleed", "vignette", "duotone", "bloom"] },
  { name: "warm hold", mood: "lush", wacky: true, stack: ["lamp", "haze", "bloom", "grain"] },
];

export function combosFor(wacky: boolean): EffectCombo[] {
  return EFFECT_COMBOS.filter((c) => !!c.wacky === wacky);
}

export function pickEffectCombo(seed: number, wacky: boolean): EffectCombo {
  const pool = combosFor(wacky);
  const rng = mulberry32(seed >>> 0);
  return pool[Math.floor(rng() * pool.length)] ?? EFFECT_COMBOS[0];
}

/** Shared slow clock. Lamp, cycle, and echo all read this. */
export function comboPulse(seed: number): number {
  const rng = mulberry32((seed ^ 0x51ed) >>> 0);
  return 0.28 + rng() * 0.4;
}

export function comboAngle(seed: number): number {
  const rng = mulberry32((seed ^ 0xa11e) >>> 0);
  return rng() * Math.PI * 2;
}

/** ~one breathe per 6s occupancy loop. */
export function comboLampSpeed(pulse: number): number {
  return 0.72 + pulse * 0.55;
}
