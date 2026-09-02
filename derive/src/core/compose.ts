import { composePath } from "./derive";
import { layoutUnits } from "./layout";
import { mulberry32 } from "./random";
import type { Project, Unit } from "./types";
import { generateUnits } from "./units";

function rngFor(project: Project, salt: number): () => number {
  return mulberry32((project.drift.seed + salt * 997) >>> 0);
}

export function recompose(project: Project): Project {
  const pinned = project.units.filter((u) => u.pinned);
  const wanted = Math.max(3, Math.round(project.unitSettings.count));
  const fresh = Math.max(0, wanted - pinned.length);
  const generated =
    fresh > 0
      ? generateUnits(project.sources, { ...project.unitSettings, count: fresh }, rngFor(project, 1))
      : [];
  const kept: Unit[] = [...pinned, ...generated];
  const placed = layoutUnits(kept, rngFor(project, 2));
  const path = composePath(placed, project.drift, project.arrows.density, rngFor(project, 3));
  return { ...project, units: placed, path };
}

export function rewalk(project: Project): Project {
  const path = composePath(project.units, project.drift, project.arrows.density, rngFor(project, 11));
  return { ...project, path };
}

export function bumpSeed(project: Project, delta: number): Project {
  const next = {
    ...project,
    drift: { ...project.drift, seed: (project.drift.seed + delta) | 0 },
  };
  return recompose(next);
}
