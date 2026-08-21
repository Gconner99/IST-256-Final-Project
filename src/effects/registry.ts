import type { EffectType } from "../core/types";
import { COLOR_EFFECTS } from "./color";
import { DISTORT_EFFECTS } from "./distort";
import { ANALOG_EFFECTS } from "./analog";
import { GEOMETRIC_EFFECTS } from "./geometric";
import { TEMPORAL_EFFECTS } from "./temporal";

const ALL: EffectType[] = [
  ...COLOR_EFFECTS,
  ...DISTORT_EFFECTS,
  ...ANALOG_EFFECTS,
  ...GEOMETRIC_EFFECTS,
  ...TEMPORAL_EFFECTS,
];

const BY_ID = new Map(ALL.map((e) => [e.id, e]));

export function allEffects(): EffectType[] {
  return ALL;
}

export function getEffect(id: string): EffectType | undefined {
  return BY_ID.get(id);
}

export function effectsByCategory() {
  const groups: Record<string, EffectType[]> = {};
  for (const e of ALL) {
    (groups[e.category] ??= []).push(e);
  }
  return groups;
}

export const EFFECT_CATEGORIES: { id: string; label: string }[] = [
  { id: "color", label: "Color" },
  { id: "distort", label: "Distort" },
  { id: "analog", label: "Analog" },
  { id: "geometric", label: "Geometry" },
  { id: "temporal", label: "Time" },
];
