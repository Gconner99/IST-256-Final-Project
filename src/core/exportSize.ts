import { clamp, evenSize } from "./random";

/** Longest side for easy 720p clips. */
export const EXPORT_EASY_LONG = 1280;
/** Longest side for full HD. Clips still encode in a few seconds. */
export const EXPORT_FULL_LONG = 1920;
export const EXPORT_FPS_MAX = 30;
export const EXPORT_BITRATE_MIN = 8;
export const EXPORT_BITRATE_MAX = 16;
export const EXPORT_STILL_QUALITY = 0.97;

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

export function encodeFps(fps: number): number {
  return Math.min(EXPORT_FPS_MAX, Math.max(12, Math.round(fps || 30)));
}

export function encodeDuration(duration: number): number {
  return Math.min(32, Math.max(1, duration || 4));
}

/** Bitrate in Mbps. 720p stays near the request; 1080p steps up so it does not crush. */
export function encodeBitrateMbps(bitrate: number, width: number, height: number): number {
  const requested = clamp(bitrate || 12, EXPORT_BITRATE_MIN, EXPORT_BITRATE_MAX);
  const scale = (width * height) / (EXPORT_EASY_LONG * 720);
  return Math.min(20, Math.max(EXPORT_BITRATE_MIN, Math.round(requested * Math.max(1, scale))));
}
