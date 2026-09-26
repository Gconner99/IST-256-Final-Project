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

/** H.264 needs even frame sizes. */
export function evenSize(n: number, min = 16): number {
  return Math.max(min, Math.round(n) & ~1);
}

/** Shrink a frame size to fit a box while staying even. */
export function fitEven(width: number, height: number, maxW: number, maxH: number) {
  const s = Math.min(1, maxW / Math.max(width, 1), maxH / Math.max(height, 1));
  return { width: evenSize(width * s), height: evenSize(height * s) };
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function smoothstep(t: number): number {
  const x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
}
