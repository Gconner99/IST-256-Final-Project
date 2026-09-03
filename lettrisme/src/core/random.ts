/** Mulberry32 — tiny seeded PRNG, stable across sessions. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v));
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function pickWeighted<T>(items: T[], weights: number[], rng: () => number): T {
  let sum = 0;
  for (const w of weights) sum += Math.max(0, w);
  if (items.length === 0) throw new Error("pickWeighted: empty");
  if (sum <= 0) return items[Math.floor(rng() * items.length)]!;
  let x = rng() * sum;
  for (let i = 0; i < items.length; i++) {
    x -= Math.max(0, weights[i] ?? 0);
    if (x <= 0) return items[i]!;
  }
  return items[items.length - 1]!;
}

export function pick<T>(items: readonly T[], rng: () => number): T {
  if (items.length === 0) throw new Error("pick: empty");
  return items[Math.floor(rng() * items.length)]!;
}
