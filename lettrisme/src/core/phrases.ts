import { pick } from "./random";

export const PHRASES = [
  "LA LETTRE COMME MATIÈRE PLASTIQUE",
  "HYPERGRAPHIE",
  "MÉTAGRAPHIE",
  "LE SIGNE AVANT LE SENS",
  "POÉSIE INFINIMENT RICHE",
  "L'ALPHABET DÉPASSÉ",
  "ÉCRITURE PURE",
  "LA PARTICULE LETTRIQUE",
  "RIEN QUE LA LETTRE",
  "LE MOT DISSOUS DANS LE SIGNE",
] as const;

export const MONTHS_FR = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
] as const;

export function datedCaption(rng: () => number): string {
  const h = Math.floor(rng() * 23);
  const m = Math.floor(rng() * 60);
  const day = 1 + Math.floor(rng() * 28);
  const month = pick(MONTHS_FR, rng);
  const year = 1946 + Math.floor(rng() * 42);
  const hourWord = h === 0 ? "minuit" : `${h} heure${h > 1 ? "s" : ""}`;
  return `${hourWord} ${String(m).padStart(2, "0")}  ${day} ${month} ${year}`;
}

export function nowCaption(now = new Date()): string {
  const month = MONTHS_FR[now.getMonth()] ?? "janvier";
  return `${now.getHours()} heures ${String(now.getMinutes()).padStart(2, "0")}  ${now.getDate()} ${month} ${now.getFullYear()}`;
}

export function paragraph(rng: () => number, lines = 6): string[] {
  const out: string[] = [];
  for (let i = 0; i < lines; i++) out.push(pick(PHRASES, rng));
  return out;
}
