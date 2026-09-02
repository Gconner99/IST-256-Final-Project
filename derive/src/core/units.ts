import { ambianceFromRng } from "./ambiances";
import { clamp, pick } from "./random";
import { unitLabel } from "./slogans";
import type { MediaSource, Point, Unit, UnitSettings } from "./types";
import { uid } from "./ids";

export function irregularPoly(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  verts: number,
  tear: number,
  rng: () => number,
): Point[] {
  const pts: Point[] = [];
  const n = Math.max(5, Math.round(verts));
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + (rng() - 0.5) * 0.35;
    let jag = 1 - tear * rng() * 0.42;
    if (rng() < tear * 0.18) jag *= 0.55;
    pts.push({
      x: clamp(cx + Math.cos(a) * rx * jag, 0.02, 0.98),
      y: clamp(cy + Math.sin(a) * ry * jag, 0.02, 0.98),
    });
  }
  return pts;
}

export function polygonCentroid(pts: Point[]): Point {
  let x = 0;
  let y = 0;
  for (const p of pts) {
    x += p.x;
    y += p.y;
  }
  const n = Math.max(1, pts.length);
  return { x: x / n, y: y / n };
}

export function generateUnits(
  sources: MediaSource[],
  settings: UnitSettings,
  seedRng: () => number,
): Unit[] {
  if (sources.length === 0) return [];
  const units: Unit[] = [];
  const count = Math.max(3, Math.round(settings.count));
  const plaqueCount = Math.max(1, Math.round(count * 0.18));
  const plaqueSlots = new Set<number>();
  while (plaqueSlots.size < plaqueCount) {
    plaqueSlots.add(Math.floor(seedRng() * count));
  }

  for (let i = 0; i < count; i++) {
    const src = pick(sources, seedRng);
    const rx = 0.1 + seedRng() * 0.16;
    const ry = 0.1 + seedRng() * 0.14;
    const cx = clamp(0.18 + seedRng() * 0.64, rx + 0.04, 1 - rx - 0.04);
    const cy = clamp(0.18 + seedRng() * 0.64, ry + 0.04, 1 - ry - 0.04);
    const verts = 6 + Math.floor(seedRng() * 6);
    const crop = irregularPoly(cx, cy, rx, ry, verts, settings.tear, seedRng);
    const plaque = plaqueSlots.has(i);
    const mid = (settings.minScale + settings.maxScale) / 2;
    const spread = settings.scaleVariance * (settings.maxScale - settings.minScale) * 0.5;
    const scale = clamp(mid + (seedRng() - 0.5) * 2 * spread, settings.minScale, settings.maxScale);
    units.push({
      id: uid("u"),
      sourceId: src.id,
      ambiance: ambianceFromRng(seedRng),
      plaque,
      crop,
      cropCenter: polygonCentroid(crop),
      x: 0.5,
      y: 0.5,
      scale,
      rotation: (seedRng() - 0.5) * settings.rotation * Math.PI,
      pinned: false,
      label: unitLabel(i, plaque, seedRng),
    });
  }
  return units;
}
