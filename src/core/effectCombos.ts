import { mulberry32 } from "./random";

export type ComboMood = "lush" | "outsider" | "mix";

export interface EffectCombo {
  name: string;
  mood: ComboMood;
  /** Wacky rolls only pick these thicker recipes. */
  wacky?: boolean;
  /** Apply order, inner to outer. No dancer. One job per layer. */
  stack: readonly string[];
}

/**
 * Designed stacks. Each recipe has one motion, one color lock, and one atmosphere,
 * sharing a pulse later so they breathe together instead of fighting.
 */
export const EFFECT_COMBOS: readonly EffectCombo[] = [
  { name: "quiet glow", mood: "lush", stack: ["grade", "bloom", "grain"] },
  { name: "two-ink lamp", mood: "mix", stack: ["duotone", "bloom", "grain"] },
  { name: "soft prism", mood: "lush", stack: ["chroma", "bloom", "grade"] },
  { name: "breathing paper", mood: "lush", stack: ["warp", "bloom", "grain"] },
  { name: "print hold", mood: "outsider", stack: ["posterize", "bloom", "grain"] },
  { name: "xerox halo", mood: "outsider", stack: ["threshold", "bloom", "grain"] },
  { name: "afterimage", mood: "lush", stack: ["echo", "bloom", "grade"] },
  { name: "mirror chapel", mood: "mix", stack: ["mirror", "bloom", "grain"] },
  { name: "slow mandala", mood: "mix", stack: ["kaleido", "bloom", "grade"] },
  { name: "oil glass", mood: "lush", stack: ["lens", "bloom", "grain"] },
  { name: "tape still", mood: "outsider", stack: ["analog", "bloom", "duotone"] },
  { name: "channel dusk", mood: "mix", stack: ["channels", "bloom", "grain"] },
  { name: "displace tide", mood: "lush", stack: ["displace", "bloom", "grade"] },
  { name: "stutter icon", mood: "mix", stack: ["stutter", "bloom", "grade"] },
  { name: "solar lamp", mood: "outsider", stack: ["solarize", "bloom", "grain"] },
  { name: "smear ghost", mood: "lush", stack: ["smear", "bloom", "grade"] },
  { name: "key punch", mood: "mix", stack: ["key", "bloom", "grain"] },
  { name: "chroma lens", mood: "mix", stack: ["chroma", "lens", "bloom"] },
  { name: "grade bloom", mood: "lush", stack: ["grade", "bloom"] },
  { name: "ink wash", mood: "mix", stack: ["duotone", "bloom"] },

  { name: "carnival still", mood: "mix", wacky: true, stack: ["duotone", "bloom", "grain", "critters"] },
  { name: "tv chapel", mood: "outsider", wacky: true, stack: ["analog", "chroma", "bloom", "duotone"] },
  { name: "kaleido smear", mood: "mix", wacky: true, stack: ["kaleido", "smear", "bloom", "grade"] },
  { name: "dropout tape", mood: "outsider", wacky: true, stack: ["analog", "dropout", "bloom", "grain"] },
  { name: "warp echo", mood: "lush", wacky: true, stack: ["warp", "echo", "bloom", "grain"] },
  { name: "mirror echo", mood: "mix", wacky: true, stack: ["mirror", "echo", "bloom", "duotone"] },
  { name: "foil print", mood: "outsider", wacky: true, stack: ["posterize", "duotone", "bloom", "analog"] },
  { name: "spin prism", mood: "mix", wacky: true, stack: ["spin", "chroma", "bloom", "grade"] },
  { name: "ghost trail", mood: "lush", wacky: true, stack: ["smear", "echo", "bloom", "grade", "grain"] },
  { name: "mandala lamp", mood: "mix", wacky: true, stack: ["kaleido", "bloom", "duotone", "grain"] },
  { name: "outsider silk", mood: "outsider", wacky: true, stack: ["warp", "analog", "bloom", "grade"] },
  { name: "moth lamp", mood: "mix", wacky: true, stack: ["solarize", "bloom", "grain", "critters"] },
];

export function combosFor(wacky: boolean): EffectCombo[] {
  return EFFECT_COMBOS.filter((c) => !!c.wacky === wacky);
}

export function pickEffectCombo(seed: number, wacky: boolean): EffectCombo {
  const pool = combosFor(wacky);
  const rng = mulberry32(seed >>> 0);
  return pool[Math.floor(rng() * pool.length)] ?? EFFECT_COMBOS[0];
}

/** Shared slow clock. Warp, echo, analog flicker, and critters all read this. */
export function comboPulse(seed: number): number {
  const rng = mulberry32((seed ^ 0x51ed) >>> 0);
  return 0.28 + rng() * 0.4;
}

export function comboAngle(seed: number): number {
  const rng = mulberry32((seed ^ 0xa11e) >>> 0);
  return rng() * Math.PI * 2;
}
