import { clamp, mulberry32 } from "../../core/random";
import { pickAmbiance } from "./ambiances";
import { placeUnits } from "./layout";
import { unitLabel } from "./slogans";
import type { AmbianceWeights, DeriveProject, DeriveSource, Point, Unit, UnitSettings } from "./types";

export function tornPolygon(rng: () => number, tear: number): Point[] {
  const n = 6 + Math.floor(rng() * 5);
  const pts: Point[] = [];
  for (let i = 0; i < n; i++) {
    const base = (i / n) * Math.PI * 2;
    const a = base + (rng() - 0.5) * 0.45 * tear;
    const r = 0.68 + rng() * 0.32 * (0.35 + tear);
    pts.push({ x: Math.cos(a) * r, y: Math.sin(a) * r });
    if (tear > 0.35 && rng() < tear * 0.85) {
      const a2 = base + ((Math.PI * 2) / n) * (0.28 + rng() * 0.4);
      const r2 = r * (0.48 + rng() * 0.28);
      pts.push({ x: Math.cos(a2) * r2, y: Math.sin(a2) * r2 });
    }
  }
  return pts;
}

export function generateUnits(
  sources: DeriveSource[],
  cfg: UnitSettings,
  weights: AmbianceWeights,
  seed: number,
): Unit[] {
  if (sources.length === 0 || cfg.count <= 0) return [];
  const rng = mulberry32((seed ^ 0xa11ce) >>> 0);
  const units: Unit[] = [];
  for (let i = 0; i < cfg.count; i++) {
    const src = sources[Math.floor(rng() * sources.length)]!;
    const ambiance = pickAmbiance(weights, rng);
    const hub = rng() < 0.1 + (ambiance === "attraction" || ambiance === "play" ? 0.1 : 0.02);
    const cropW = 0.26 + rng() * 0.44;
    const cropH = 0.26 + rng() * 0.44;
    const scale = clamp((hub ? 1.22 : 1) * (1 + (rng() - 0.5) * 2 * cfg.scaleVariance), 0.55, 1.75);
    units.push({
      id: `u_${String(i).padStart(2, "0")}`,
      sourceId: src.id,
      ambiance,
      hub,
      polygon: tornPolygon(rng, cfg.tear),
      srcX: rng() * (1 - cropW),
      srcY: rng() * (1 - cropH),
      srcW: cropW,
      srcH: cropH,
      x: 0.5,
      y: 0.5,
      scale,
      rotation: (rng() - 0.5) * Math.PI * cfg.rotation,
      pinned: false,
      label: unitLabel(i, hub, rng),
    });
  }
  return units;
}

export function assembleUnits(project: DeriveProject, keepPinned: boolean): Unit[] {
  const pinned = keepPinned ? project.units.filter((u) => u.pinned) : [];
  const needed = Math.max(0, project.unitsCfg.count - pinned.length);
  const generated = generateUnits(
    project.sources,
    { ...project.unitsCfg, count: needed },
    project.ambiances,
    project.seed,
  );
  const used = new Set(pinned.map((u) => u.id));
  let n = 0;
  const remapped = generated.map((u) => {
    while (used.has(`u_${String(n).padStart(2, "0")}`)) n += 1;
    const id = `u_${String(n).padStart(2, "0")}`;
    used.add(id);
    n += 1;
    return { ...u, id };
  });
  return placeUnits([...pinned, ...remapped], project.seed);
}

export function pointInPolygon(pt: Point, poly: Point[]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i]!;
    const b = poly[j]!;
    const intersect =
      a.y > pt.y !== b.y > pt.y && pt.x < ((b.x - a.x) * (pt.y - a.y)) / (b.y - a.y + 1e-9) + a.x;
    if (intersect) inside = !inside;
  }
  return inside;
}

export function unitWorldPolygon(unit: Unit, w: number, h: number): Point[] {
  const cx = unit.x * w;
  const cy = unit.y * h;
  const size = Math.min(w, h) * 0.155 * unit.scale;
  const cos = Math.cos(unit.rotation);
  const sin = Math.sin(unit.rotation);
  return unit.polygon.map((p) => ({
    x: cx + (p.x * cos - p.y * sin) * size,
    y: cy + (p.x * sin + p.y * cos) * size,
  }));
}

export function hitUnit(units: Unit[], x: number, y: number, w: number, h: number): Unit | null {
  for (let i = units.length - 1; i >= 0; i--) {
    const u = units[i]!;
    if (pointInPolygon({ x, y }, unitWorldPolygon(u, w, h))) return u;
  }
  return null;
}

export function sourceSize(img: CanvasImageSource): { w: number; h: number } {
  if ("width" in img && "height" in img) {
    return { w: Number(img.width) || 1, h: Number(img.height) || 1 };
  }
  return { w: 1, h: 1 };
}
