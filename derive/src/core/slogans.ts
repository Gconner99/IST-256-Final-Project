import { pick } from "./random";
import type { DetournementMode } from "./types";

export const SLOGANS = [
  "NE TRAVAILLEZ JAMAIS",
  "SOUS LES PAVÉS, LA PLAGE",
  "THE SPECTACLE IS NOT A COLLECTION OF IMAGES",
  "LIVE WITHOUT DEAD TIME",
  "UNITARY URBANISM",
  "CONSTRUCTED SITUATION",
  "OUR IDEAS ARE IN EVERYONE'S HEAD",
  "FORMULARY FOR A NEW URBANISM",
  "ON THE PASSAGE OF A FEW PERSONS THROUGH A RATHER BRIEF UNITY OF TIME",
  "ABOLISH ALIENATED LEISURE",
  "THE BEACH BENEATH THE STREET",
  "NO DEAD TIME",
  "PLAY AS INSURRECTION",
  "AGAINST THE SOCIETY OF THE SPECTACLE",
  "WE ARE THE BREAK IN THE CONTINUUM",
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
  "CITE DU JEU",
  "AV. DE L'ATTRACTION",
  "RUE SANS MOTIF",
  "PASSAGE DES RENCONTRES",
  "PLACE DU DÉPAYSEMENT",
  "RUE DE LA CARTE NUE",
  "BD. CONSTANT",
  "IMPASSE JORN",
] as const;

export function coordinate(rng: () => number): string {
  const lat = 48 + rng() * 1.2;
  const lon = 2 + rng() * 1.4;
  const sheet = String.fromCharCode(65 + Math.floor(rng() * 12));
  const cell = Math.floor(rng() * 88) + 1;
  return `${lat.toFixed(3)}N  ${lon.toFixed(3)}E   ${sheet}-${cell}`;
}

export function detournedText(mode: DetournementMode, rng: () => number): string {
  if (mode === "slogans") return pick(SLOGANS, rng);
  if (mode === "streets") return pick(STREETS, rng);
  if (mode === "coordinates") return coordinate(rng);
  const roll = rng();
  if (roll < 0.4) return pick(SLOGANS, rng);
  if (roll < 0.75) return pick(STREETS, rng);
  return coordinate(rng);
}

export function unitLabel(index: number, plaque: boolean, rng: () => number): string {
  const n = String(index + 1).padStart(2, "0");
  if (plaque) return `U.${n}  PLAQUE TOURNANTE`;
  if (rng() < 0.35) return `U.${n}  ${pick(STREETS, rng)}`;
  return `U.${n}`;
}

export const STAMPS = [
  "I.S.",
  "1957",
  "NAKED CITY",
  "DÉTACHE",
  "HORS CARTE",
  "VOIE SANS BUT",
  "JEU",
] as const;
