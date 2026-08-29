import { evenSize } from "./random";

export const EXPORT_ASPECTS = [
  { id: "16:9", label: "16:9", rw: 16, rh: 9 },
  { id: "4:3", label: "4:3", rw: 4, rh: 3 },
  { id: "3:4", label: "3:4", rw: 3, rh: 4 },
  { id: "1:1", label: "1:1", rw: 1, rh: 1 },
  { id: "9:16", label: "9:16", rw: 9, rh: 16 },
  { id: "5:4", label: "5:4", rw: 5, rh: 4 },
  { id: "4:5", label: "4:5", rw: 4, rh: 5 },
  { id: "21:9", label: "21:9", rw: 21, rh: 9 },
] as const;

export type ExportAspectId = (typeof EXPORT_ASPECTS)[number]["id"];

/** Build an even H.264-safe size for a ratio, longest side = longSide. */
export function sizeForAspect(rw: number, rh: number, longSide = 1280): { width: number; height: number } {
  const scale = longSide / Math.max(rw, rh, 0.0001);
  return { width: evenSize(rw * scale), height: evenSize(rh * scale) };
}

export function matchAspectId(width: number, height: number): ExportAspectId {
  const r = width / Math.max(height, 1);
  let best: ExportAspectId = "16:9";
  let bestD = Infinity;
  for (const a of EXPORT_ASPECTS) {
    const d = Math.abs(r - a.rw / a.rh);
    if (d < bestD) {
      bestD = d;
      best = a.id;
    }
  }
  return best;
}

/** Keep the source's shape, scaled to a longest side. */
export function sizeFromSource(width: number, height: number, longSide = 1280): { width: number; height: number } {
  if (width < 2 || height < 2) return sizeForAspect(16, 9, longSide);
  const long = Math.max(width, height);
  const s = longSide / long;
  return { width: evenSize(width * s), height: evenSize(height * s) };
}

/** Last 12% of a looping clip fades into frame 0 so the piece can repeat. */
export function clipLoopFade(i: number, n: number): number {
  if (n < 8) return 0;
  const span = Math.max(2, Math.round(n * 0.12));
  const start = n - span;
  if (i < start) return 0;
  return (i - start + 1) / span;
}
