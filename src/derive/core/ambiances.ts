import { pickWeighted } from "../../core/random";
import { AMBIANCES, type Ambiance, type AmbianceWeights } from "./types";

/** Emotional adjacency — how readily a dérive passes from one unité into another. */
export const AFFINITY: Record<Ambiance, Record<Ambiance, number>> = {
  attraction: {
    attraction: 0.55,
    repulsion: 0.08,
    play: 0.88,
    boredom: 0.18,
    spectacle: 0.42,
    void: 0.22,
  },
  repulsion: {
    attraction: 0.12,
    repulsion: 0.28,
    play: 0.16,
    boredom: 0.48,
    spectacle: 0.3,
    void: 0.78,
  },
  play: {
    attraction: 0.82,
    repulsion: 0.14,
    play: 0.5,
    boredom: 0.12,
    spectacle: 0.64,
    void: 0.2,
  },
  boredom: {
    attraction: 0.36,
    repulsion: 0.4,
    play: 0.7,
    boredom: 0.32,
    spectacle: 0.74,
    void: 0.52,
  },
  spectacle: {
    attraction: 0.28,
    repulsion: 0.46,
    play: 0.38,
    boredom: 0.24,
    spectacle: 0.16,
    void: 0.9,
  },
  void: {
    attraction: 0.72,
    repulsion: 0.34,
    play: 0.58,
    boredom: 0.4,
    spectacle: 0.12,
    void: 0.18,
  },
};

export const AMBIANCE_INK: Record<Ambiance, string> = {
  attraction: "#8a2a14",
  repulsion: "#2c3a48",
  play: "#8a3a12",
  boredom: "#5a5348",
  spectacle: "#9a1428",
  void: "#1e2430",
};

export const AMBIANCE_WASH: Record<Ambiance, string> = {
  attraction: "rgba(160, 48, 28, 0.14)",
  repulsion: "rgba(40, 60, 90, 0.16)",
  play: "rgba(190, 110, 36, 0.14)",
  boredom: "rgba(90, 88, 78, 0.2)",
  spectacle: "rgba(210, 24, 70, 0.2)",
  void: "rgba(18, 20, 24, 0.28)",
};

export const AMBIANCE_GRADE: Record<Ambiance, string> = {
  attraction: "sepia(0.32) saturate(1.12) contrast(1.1)",
  repulsion: "grayscale(0.28) hue-rotate(80deg) saturate(0.65) contrast(1.14)",
  play: "hue-rotate(-8deg) saturate(1.2) contrast(1.06)",
  boredom: "grayscale(0.52) contrast(0.94) brightness(1.04)",
  spectacle: "saturate(1.75) contrast(1.22) hue-rotate(-8deg)",
  void: "grayscale(0.4) contrast(1.28) brightness(0.8) saturate(0.5)",
};

export const AMBIANCE_LABEL: Record<Ambiance, string> = {
  attraction: "ATTRACTION",
  repulsion: "RÉPULSION",
  play: "JEU",
  boredom: "ENNUI",
  spectacle: "SPECTACLE",
  void: "VIDE",
};

export function affinity(from: Ambiance, to: Ambiance): number {
  return AFFINITY[from][to];
}

export function pickAmbiance(weights: AmbianceWeights, rng: () => number): Ambiance {
  return pickWeighted(AMBIANCES, AMBIANCES.map((a) => weights[a]), rng);
}

export function defaultAmbianceWeights(): AmbianceWeights {
  return {
    attraction: 0.24,
    repulsion: 0.12,
    play: 0.2,
    boredom: 0.12,
    spectacle: 0.16,
    void: 0.16,
  };
}
