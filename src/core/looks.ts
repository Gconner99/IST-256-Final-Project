/** Picture grades. One final pass on the video — not program chrome, not sticker packs. */

export const LOOKS = [
  { id: "toy", label: "Toy pop" },
  { id: "aero", label: "Aero" },
  { id: "chrome", label: "Chrome" },
  { id: "tape", label: "Tape" },
  { id: "mall", label: "Mall" },
] as const;

export type SkinId = (typeof LOOKS)[number]["id"];

export const DEFAULT_SKIN: SkinId = "toy";

export const SKIN_INDEX: Record<SkinId, number> = {
  toy: 0,
  aero: 1,
  chrome: 2,
  tape: 3,
  mall: 4,
};

const LOOK_KEY = "phosphene-look";
const KNOWN = new Set<string>(LOOKS.map((l) => l.id));

export function parseSkin(value: unknown): SkinId {
  return typeof value === "string" && KNOWN.has(value) ? (value as SkinId) : DEFAULT_SKIN;
}

export function lookLabel(id: SkinId): string {
  return LOOKS.find((l) => l.id === id)?.label ?? "Toy pop";
}

export function lastLook(): SkinId {
  try {
    return parseSkin(globalThis.localStorage?.getItem(LOOK_KEY));
  } catch {
    return DEFAULT_SKIN;
  }
}

export function rememberLook(id: SkinId): void {
  try {
    globalThis.localStorage?.setItem(LOOK_KEY, id);
  } catch {
    /* private mode / node */
  }
}
