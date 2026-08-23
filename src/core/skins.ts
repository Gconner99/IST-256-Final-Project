export const SKINS = [
  { id: "toy", label: "Toy pop", hint: "the original candy stickers" },
  { id: "folk", label: "Folk wood", hint: "branches, animals, forest inks" },
  { id: "tide", label: "Tide", hint: "underwater wash and sea life" },
  { id: "cloud", label: "Clouds", hint: "sky, birds, weather" },
] as const;

export type SkinId = (typeof SKINS)[number]["id"];

export const SKIN_INDEX: Record<SkinId, number> = {
  toy: 0,
  folk: 1,
  tide: 2,
  cloud: 3,
};

export function parseSkin(value: unknown): SkinId {
  return SKINS.some((s) => s.id === value) ? (value as SkinId) : "toy";
}
