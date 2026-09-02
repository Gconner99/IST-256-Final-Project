import { clamp } from "./random";
import type { Unit } from "./types";

export interface LayoutSettings {
  gap: number;
  iterations: number;
}

const DEFAULT_LAYOUT: LayoutSettings = { gap: 0.11, iterations: 48 };

/** Scatter unités in a non-Cartesian field. Plaques sit nearer the turning-plate. */
export function layoutUnits(units: Unit[], rng: () => number, settings: LayoutSettings = DEFAULT_LAYOUT): Unit[] {
  const placed = units.map((u, i) => {
    if (u.pinned) return { ...u };
    const ring = u.plaque ? 0.16 + rng() * 0.18 : 0.22 + rng() * 0.32;
    const a = rng() * Math.PI * 2 + i * 0.37;
    const wobble = (rng() - 0.5) * 0.08;
    return {
      ...u,
      x: clamp(0.5 + Math.cos(a) * ring + wobble, 0.12, 0.88),
      y: clamp(0.5 + Math.sin(a) * ring * 0.82 + wobble * 0.6, 0.14, 0.86),
    };
  });

  for (let iter = 0; iter < settings.iterations; iter++) {
    for (let i = 0; i < placed.length; i++) {
      const a = placed[i]!;
      if (a.pinned) continue;
      for (let j = i + 1; j < placed.length; j++) {
        const b = placed[j]!;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.hypot(dx, dy) || 0.0001;
        const min = settings.gap * (0.75 + (a.scale + b.scale) * 0.2);
        if (d < min) {
          const push = ((min - d) / min) * 0.035;
          const nx = dx / d;
          const ny = dy / d;
          if (!a.pinned) {
            a.x = clamp(a.x + nx * push, 0.1, 0.9);
            a.y = clamp(a.y + ny * push, 0.12, 0.88);
          }
          if (!b.pinned) {
            b.x = clamp(b.x - nx * push, 0.1, 0.9);
            b.y = clamp(b.y - ny * push, 0.12, 0.88);
          }
        }
      }
    }
  }
  return placed;
}

export function hitUnit(units: Unit[], x: number, y: number): Unit | null {
  let best: Unit | null = null;
  let bestD = Infinity;
  for (const u of units) {
    const d = Math.hypot(u.x - x, u.y - y);
    const r = 0.045 + u.scale * 0.06;
    if (d < r && d < bestD) {
      best = u;
      bestD = d;
    }
  }
  return best;
}
