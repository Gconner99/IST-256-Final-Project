import { clamp, mulberry32 } from "../../core/random";
import type { Unit } from "./types";

/** Non-Cartesian placement: golden spiral, then a psychogeographic swirl. */
export function placeUnits(units: Unit[], seed: number): Unit[] {
  const rng = mulberry32((seed ^ 0x1a70) >>> 0);
  const placed = units.map((u, i) => {
    if (u.pinned) return u;
    const t = (i + rng() * 0.35) / Math.max(units.length, 1);
    const angle = i * 2.399963229728653 + rng() * 0.55;
    const radius = Math.sqrt(t) * 0.4 + rng() * 0.05;
    let x = 0.5 + Math.cos(angle) * radius * 1.18;
    let y = 0.5 + Math.sin(angle) * radius * 0.9;
    const dx = x - 0.5;
    const dy = y - 0.5;
    const r = Math.hypot(dx, dy);
    const a = Math.atan2(dy, dx) + r * 1.15 + (rng() - 0.5) * 0.35;
    x = clamp(0.5 + Math.cos(a) * r, 0.13, 0.87);
    y = clamp(0.5 + Math.sin(a) * r * 0.86, 0.15, 0.85);
    return { ...u, x, y };
  });
  return separate(placed, seed);
}

function separate(units: Unit[], seed: number): Unit[] {
  const rng = mulberry32((seed ^ 0x5e9) >>> 0);
  const out = units.map((u) => ({ ...u }));
  for (let iter = 0; iter < 18; iter++) {
    for (let i = 0; i < out.length; i++) {
      const a = out[i]!;
      if (a.pinned) continue;
      let fx = 0;
      let fy = 0;
      for (let j = 0; j < out.length; j++) {
        if (i === j) continue;
        const b = out[j]!;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.hypot(dx, dy) || 0.0001;
        const min = 0.085 * (a.scale + b.scale) * 0.55;
        if (d < min) {
          const push = ((min - d) / min) * 0.018;
          fx += (dx / d) * push;
          fy += (dy / d) * push;
        }
      }
      a.x = clamp(a.x + fx + (rng() - 0.5) * 0.001, 0.11, 0.89);
      a.y = clamp(a.y + fy + (rng() - 0.5) * 0.001, 0.13, 0.87);
    }
  }
  return out;
}
