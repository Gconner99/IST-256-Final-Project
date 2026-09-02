import { mulberry32, pickWeighted } from "../../core/random";
import { affinity } from "./ambiances";
import type { DriftSettings, Passage, Unit } from "./types";

export function psychogeographicDistance(a: Unit, b: Unit): number {
  const euclid = Math.hypot(a.x - b.x, a.y - b.y);
  const mismatch = a.ambiance === b.ambiance ? 0.15 : 1 - affinity(a.ambiance, b.ambiance);
  const hub = (a.hub ? 0.72 : 1) * (b.hub ? 0.68 : 1);
  return euclid * (0.45 + mismatch) * hub;
}

export function transitionScore(from: Unit, to: Unit, attraction: number): number {
  const aff = affinity(from.ambiance, to.ambiance);
  const dist = psychogeographicDistance(from, to);
  const near = 1 / (0.08 + dist);
  const hub = to.hub ? 1.45 : 1;
  const psych = aff * near * hub;
  return attraction * psych + (1 - attraction) * 0.35;
}

export function walkDerive(units: Unit[], drift: DriftSettings, arrowDensity: number): Passage[] {
  if (units.length < 2) return [];
  const rng = mulberry32((drift.seed ^ (drift.steps * 4099) ^ Math.round(drift.attraction * 10000)) >>> 0);
  const hubs = units.filter((u) => u.hub);
  let current =
    hubs.length && rng() < 0.7 ? hubs[Math.floor(rng() * hubs.length)]! : units[Math.floor(rng() * units.length)]!;
  const passages: Passage[] = [];
  const seen = new Set<string>();
  const steps = Math.max(1, Math.min(drift.steps, units.length * 4));

  for (let i = 0; i < steps; i++) {
    const candidates = units.filter((u) => u.id !== current.id);
    const weights = candidates.map((u) => {
      const base = transitionScore(current, u, drift.attraction);
      const revisit = seen.has(u.id) ? 0.35 : 1;
      return Math.max(0.001, base * revisit);
    });
    const next = pickWeighted(candidates, weights, rng);
    passages.push({
      fromId: current.id,
      toId: next.id,
      weight: transitionScore(current, next, drift.attraction),
      kind: "drift",
      bend: (rng() - 0.5) * 2,
    });
    seen.add(current.id);
    current = next;
  }

  const extraN = Math.round(hubs.length * (0.6 + arrowDensity * 2.4) + arrowDensity * 4);
  for (let i = 0; i < extraN; i++) {
    const from = (hubs.length ? hubs : units)[Math.floor(rng() * (hubs.length || units.length))]!;
    const others = units.filter((u) => u.id !== from.id);
    const weights = others.map((u) => transitionScore(from, u, Math.max(0.35, drift.attraction)));
    const to = pickWeighted(others, weights, rng);
    if (passages.some((p) => p.fromId === from.id && p.toId === to.id)) continue;
    passages.push({
      fromId: from.id,
      toId: to.id,
      weight: transitionScore(from, to, drift.attraction) * 0.7,
      kind: "possible",
      bend: (rng() - 0.5) * 2,
    });
  }
  return passages;
}
