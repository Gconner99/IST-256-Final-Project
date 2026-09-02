import type { Ambiance } from "./types";
import { AMBIANCES } from "./types";

/** How readily a dérive passes from one ambiance into another. */
export const AFFINITY: Record<Ambiance, Record<Ambiance, number>> = {
  attraction: {
    attraction: 0.85,
    play: 0.72,
    spectacle: 0.42,
    boredom: 0.18,
    void: 0.14,
    repulsion: 0.06,
  },
  repulsion: {
    void: 0.62,
    boredom: 0.5,
    repulsion: 0.4,
    spectacle: 0.22,
    play: 0.14,
    attraction: 0.08,
  },
  play: {
    play: 0.78,
    attraction: 0.66,
    spectacle: 0.46,
    void: 0.2,
    boredom: 0.14,
    repulsion: 0.1,
  },
  boredom: {
    void: 0.56,
    boredom: 0.48,
    spectacle: 0.38,
    repulsion: 0.3,
    attraction: 0.2,
    play: 0.14,
  },
  spectacle: {
    spectacle: 0.7,
    attraction: 0.52,
    play: 0.4,
    boredom: 0.34,
    void: 0.18,
    repulsion: 0.14,
  },
  void: {
    void: 0.6,
    boredom: 0.5,
    repulsion: 0.42,
    attraction: 0.16,
    spectacle: 0.18,
    play: 0.1,
  },
};

export const AMBIANCE_INK: Record<Ambiance, string> = {
  attraction: "#8a3a14",
  repulsion: "#3d4a38",
  play: "#8a2450",
  boredom: "#5a5348",
  spectacle: "#9a1c1c",
  void: "#243044",
};

export const AMBIANCE_GRADE: Record<Ambiance, string> = {
  attraction: "sepia(0.35) saturate(1.15) contrast(1.08)",
  repulsion: "grayscale(0.25) hue-rotate(70deg) saturate(0.7) contrast(1.12)",
  play: "hue-rotate(-12deg) saturate(1.25) contrast(1.05)",
  boredom: "grayscale(0.55) contrast(0.92) brightness(1.05)",
  spectacle: "saturate(1.7) contrast(1.2) hue-rotate(-6deg)",
  void: "grayscale(0.35) contrast(1.25) brightness(0.82) saturate(0.55)",
};

export function affinity(from: Ambiance, to: Ambiance): number {
  return AFFINITY[from][to];
}

export function ambianceFromRng(rng: () => number): Ambiance {
  const weights = [0.22, 0.12, 0.2, 0.14, 0.16, 0.16];
  let x = rng();
  for (let i = 0; i < AMBIANCES.length; i++) {
    x -= weights[i] ?? 0;
    if (x <= 0) return AMBIANCES[i]!;
  }
  return "void";
}

export function ambianceLabel(a: Ambiance): string {
  return a.toUpperCase();
}
