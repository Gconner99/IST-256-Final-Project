import { mulberry32, pick } from "./random";
import type { InkSettings, PaperSettings, Plate, Project } from "./types";
import { PLATES } from "./types";

const GROUNDS = [
  "#f3ead8", "#e8e0c8", "#f5f0e8", "#ddd4b8",
  "#e8dfe8", "#d4e4e8", "#e8e4d4", "#1a1410",
  "#080c14", "#1c1420",
] as const;

function randInk(rng: () => number, wack: number): InkSettings {
  const w = 0.45 + wack * 0.55;
  const r = () => {
    const base = rng();
    return base < 0.5 ? base * w * 0.6 : 1 - (1 - base) * w * 0.6;
  };
  return {
    density: 0.3 + r() * 0.7,
    chaos: r(),
    scale: 0.2 + r() * 1.6,
    photoMix: 0.3 + rng() * 0.7,
    contrast: rng(),
    black: rng() < 0.15 * wack ? 0 : 0.4 + r() * 0.6,
    blue: rng() < 0.2 ? 0 : r(),
    red: rng() < 0.2 ? 0 : r(),
  };
}

function randPaper(rng: () => number, wack: number): PaperSettings {
  return {
    ground: pick(GROUNDS, rng),
    margin: 0,
    grain: rng() * (0.3 + wack * 0.7),
  };
}

export function randomizeProject(project: Project, wack = 0.5): Project {
  const rng = mulberry32((Math.random() * 0xffffffff) >>> 0);
  const plate = pick(PLATES.map((p) => p.id) as Plate[], rng);
  return {
    ...project,
    seed: Math.floor(rng() * 0xffffff),
    plate,
    ink: randInk(rng, wack),
    paper: randPaper(rng, wack),
  };
}
