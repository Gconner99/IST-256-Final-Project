/** Instrument clothes. This is chrome only — not the old sticker-pack skins. */

export const LOOKS = [
  { id: "toy", label: "Toy pop" },
  { id: "aero", label: "Aero" },
  { id: "chrome", label: "Chrome" },
  { id: "tape", label: "Tape" },
  { id: "mall", label: "Mall" },
] as const;

export type SkinId = (typeof LOOKS)[number]["id"];

export const DEFAULT_SKIN: SkinId = "toy";

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

export function applyLook(id: SkinId): void {
  const skin = parseSkin(id);
  rememberLook(skin);
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  if (html.dataset.look !== skin) html.dataset.look = skin;
}
