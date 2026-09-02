import { affinity } from "./ambiances";
import { lerp, pickWeighted } from "./random";
import type { Arrow, DriftPath, DriftSettings, Unit } from "./types";

export function transitionScore(
  from: Unit,
  to: Unit,
  settings: Pick<DriftSettings, "attraction" | "chance">,
  chanceRoll: number,
): number {
  const aff = affinity(from.ambiance, to.ambiance);
  const dist = Math.hypot(to.x - from.x, to.y - from.y);
  const geo = 1 / (0.08 + dist);
  const plaque = to.plaque ? 1.45 : 1;
  const psych = aff * settings.attraction * plaque * geo;
  return lerp(psych, chanceRoll, settings.chance);
}

export function deriveWalk(units: Unit[], settings: DriftSettings, rng: () => number): DriftPath {
  if (units.length === 0) return { unitIds: [], arrows: [] };

  const start = pickWeighted(
    units,
    units.map((u) => (u.plaque ? 2.4 : 1)),
    rng,
  );
  const ids = [start.id];
  const arrows: Arrow[] = [];
  const steps = Math.max(1, Math.round(settings.steps));

  for (let s = 0; s < steps; s++) {
    const current = units.find((u) => u.id === ids[ids.length - 1]);
    if (!current) break;
    const candidates = units.filter((u) => {
      if (u.id === current.id) return false;
      if (!settings.loops && ids.includes(u.id)) return false;
      return true;
    });
    if (candidates.length === 0) break;
    const weights = candidates.map((u) =>
      Math.max(0.001, transitionScore(current, u, settings, rng())),
    );
    const next = pickWeighted(candidates, weights, rng);
    const weight = transitionScore(current, next, settings, 0.35);
    ids.push(next.id);
    arrows.push({ fromId: current.id, toId: next.id, weight, kind: "drift" });
  }

  return { unitIds: ids, arrows };
}

/** Extra unused passages — Debord drew possible drifts, not only the one taken. */
export function possibleArrows(
  units: Unit[],
  existing: Arrow[],
  density: number,
  rng: () => number,
): Arrow[] {
  if (units.length < 2 || density <= 0) return [];
  const taken = new Set(existing.map((a) => `${a.fromId}>${a.toId}`));
  const extras: Arrow[] = [];
  const count = Math.round(units.length * density);
  let guard = 0;
  while (extras.length < count && guard < count * 8) {
    guard++;
    const from = units[Math.floor(rng() * units.length)]!;
    const to = units[Math.floor(rng() * units.length)]!;
    if (from.id === to.id) continue;
    const key = `${from.id}>${to.id}`;
    if (taken.has(key)) continue;
    const score = transitionScore(from, to, { attraction: 0.7, chance: 0.25 }, rng());
    if (score < 0.35 && rng() > 0.2) continue;
    taken.add(key);
    extras.push({ fromId: from.id, toId: to.id, weight: score, kind: "possible" });
  }
  return extras;
}

export function composePath(units: Unit[], settings: DriftSettings, density: number, rng: () => number): DriftPath {
  const walk = deriveWalk(units, settings, rng);
  return {
    unitIds: walk.unitIds,
    arrows: [...walk.arrows, ...possibleArrows(units, walk.arrows, density, rng)],
  };
}
