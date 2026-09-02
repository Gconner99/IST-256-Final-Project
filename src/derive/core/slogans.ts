import { mulberry32, pick } from "../../core/random";
import type { DetournementMark, DetournementSettings, Unit } from "./types";

export const SLOGANS = [
  "NE TRAVAILLEZ JAMAIS",
  "SOUS LES PAVÉS, LA PLAGE",
  "THE SPECTACLE IS NOT A COLLECTION OF IMAGES",
  "LIVE WITHOUT DEAD TIME",
  "BOREDOM IS ALWAYS COUNTER-REVOLUTIONARY",
  "UNITARY URBANISM",
  "CONSTRUCTED SITUATION",
  "OUR IDEAS ARE IN EVERYONE'S HEAD",
  "FORMULARY FOR A NEW URBANISM",
  "ABOLISH ALIENATED LEISURE",
  "THE BEACH BENEATH THE STREET",
  "NO DEAD TIME",
  "PLAY AS INSURRECTION",
  "AGAINST THE SOCIETY OF THE SPECTACLE",
  "WE ARE THE BREAK IN THE CONTINUUM",
  "ON THE PASSAGE OF A FEW PERSONS",
  "THE MAP IS NOT THE TERRITORY WE WANT",
] as const;

export const STREETS = [
  "RUE DE L'AMBIANCE",
  "IMPASSE DU SPECTACLE",
  "PLACE DE LA DÉRIVE",
  "BD. DES SITUATIONS",
  "PASSAGE JOUEURS",
  "QUAI DE L'OUBLI",
  "COUR DU VIDE",
  "ALLÉE DES PLAQUES",
  "RUE DES LÈVRES ROUGES",
  "VENELLE DU HASARD",
  "RUE DE LA PLAQUE TOURNANTE",
  "IMPASSE DES UNITÉS",
  "CITÉ DU JEU",
  "AV. DE L'ATTRACTION",
  "RUE SANS MOTIF",
  "PASSAGE DES RENCONTRES",
  "PLACE DU DÉPAYSEMENT",
  "RUE DE LA CARTE NUE",
  "BD. CONSTANT",
  "IMPASSE JORN",
  "RUE SANS NOM",
  "ALLÉE DES POSSIBLES",
] as const;

export const STAMPS = [
  "I.S.",
  "1957",
  "NAKED CITY",
  "DÉTACHÉ",
  "HORS CARTE",
  "VOIE SANS BUT",
  "JEU",
  "S.I.",
] as const;

export function coordinate(rng: () => number): string {
  const lat = 48 + rng() * 1.25;
  const lon = 2 + rng() * 1.45;
  const sheet = String.fromCharCode(65 + Math.floor(rng() * 12));
  const cell = Math.floor(rng() * 88) + 1;
  return `${lat.toFixed(3)}N  ${lon.toFixed(3)}E   ${sheet}–${cell}`;
}

export function unitLabel(index: number, hub: boolean, rng: () => number): string {
  const n = String(index + 1).padStart(2, "0");
  if (hub) return `U.${n}  PLAQUE TOURNANTE`;
  if (rng() < 0.32) return `U.${n}  ${pick(STREETS, rng)}`;
  return `U.${n}`;
}

export function placeDetournement(
  units: Unit[],
  settings: DetournementSettings,
  seed: number,
): DetournementMark[] {
  const rng = mulberry32((seed ^ 0x7e87) >>> 0);
  const kinds: DetournementMark["kind"][] = [];
  if (settings.slogans) kinds.push("slogan");
  if (settings.streets) kinds.push("street");
  if (settings.coordinates) kinds.push("coordinate");
  kinds.push("stamp");
  if (kinds.length === 0) return [];

  const n = Math.round(5 + settings.density * 16);
  const marks: DetournementMark[] = [];
  for (let i = 0; i < n; i++) {
    const kind = kinds[Math.floor(rng() * kinds.length)]!;
    const text =
      kind === "slogan"
        ? pick(SLOGANS, rng)
        : kind === "street"
          ? pick(STREETS, rng)
          : kind === "coordinate"
            ? coordinate(rng)
            : pick(STAMPS, rng);
    let x = 0.08 + rng() * 0.84;
    let y = 0.08 + rng() * 0.84;
    for (let t = 0; t < 6; t++) {
      const crowded = units.some((u) => Math.hypot(u.x - x, u.y - y) < 0.1 * u.scale);
      if (!crowded) break;
      x = 0.08 + rng() * 0.84;
      y = 0.08 + rng() * 0.84;
    }
    marks.push({
      kind,
      text,
      x,
      y,
      rotation: (rng() - 0.5) * (kind === "stamp" ? 0.5 : 0.22),
      size: kind === "slogan" ? 0.7 + rng() * 0.7 : kind === "stamp" ? 0.9 + rng() * 0.5 : 0.55 + rng() * 0.4,
    });
  }
  return marks;
}
