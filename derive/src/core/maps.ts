import type { MapGenerator } from "./types";
import { mulberry32 } from "./random";

export interface MapSpec {
  kind: MapGenerator;
  seed: number;
  width: number;
  height: number;
}

function strokeGrid(
  ctx: CanvasRenderingContext2D,
  spec: MapSpec,
  rng: () => number,
  color: string,
) {
  const { width: w, height: h } = spec;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  const cols = 6 + Math.floor(rng() * 8);
  const rows = 5 + Math.floor(rng() * 7);
  let x = 0;
  for (let i = 0; i <= cols; i++) {
    x += (w / cols) * (0.7 + rng() * 0.6);
    ctx.beginPath();
    ctx.moveTo(x, 0);
    let y = 0;
    while (y < h) {
      y += 12 + rng() * 28;
      ctx.lineTo(x + (rng() - 0.5) * 10, y);
    }
    ctx.stroke();
  }
  let y = 0;
  for (let j = 0; j <= rows; j++) {
    y += (h / rows) * (0.7 + rng() * 0.6);
    ctx.beginPath();
    ctx.moveTo(0, y);
    let xx = 0;
    while (xx < w) {
      xx += 14 + rng() * 26;
      ctx.lineTo(xx, y + (rng() - 0.5) * 10);
    }
    ctx.stroke();
  }
}

function parcels(ctx: CanvasRenderingContext2D, spec: MapSpec, rng: () => number) {
  const { width: w, height: h } = spec;
  ctx.strokeStyle = "rgba(28, 24, 18, 0.55)";
  ctx.lineWidth = 0.8;
  const n = 40 + Math.floor(rng() * 50);
  for (let i = 0; i < n; i++) {
    const x = rng() * w;
    const y = rng() * h;
    const rw = 18 + rng() * 70;
    const rh = 14 + rng() * 56;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rng() - 0.5) * 0.15);
    ctx.strokeRect(0, 0, rw, rh);
    if (rng() < 0.35) {
      ctx.fillStyle = `rgba(40, 32, 22, ${0.04 + rng() * 0.08})`;
      ctx.fillRect(0, 0, rw, rh);
    }
    ctx.restore();
  }
}

function contours(ctx: CanvasRenderingContext2D, spec: MapSpec, rng: () => number) {
  const { width: w, height: h } = spec;
  ctx.strokeStyle = "rgba(32, 40, 36, 0.45)";
  ctx.lineWidth = 0.9;
  const rings = 10 + Math.floor(rng() * 8);
  for (let r = 0; r < rings; r++) {
    const cx = w * (0.25 + rng() * 0.5);
    const cy = h * (0.25 + rng() * 0.5);
    const rad = 30 + r * 18 + rng() * 20;
    ctx.beginPath();
    const steps = 36;
    for (let i = 0; i <= steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      const j = 1 + (rng() - 0.5) * 0.12;
      const x = cx + Math.cos(a) * rad * j;
      const y = cy + Math.sin(a) * rad * 0.72 * j;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}

function terrainWash(ctx: CanvasRenderingContext2D, spec: MapSpec, rng: () => number) {
  const { width: w, height: h } = spec;
  for (let i = 0; i < 80; i++) {
    const x = rng() * w;
    const y = rng() * h;
    const rad = 20 + rng() * 90;
    const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
    const tone = 90 + Math.floor(rng() * 80);
    g.addColorStop(0, `rgba(${tone},${tone - 10},${tone - 20},0.16)`);
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  }
}

function rivers(ctx: CanvasRenderingContext2D, spec: MapSpec, rng: () => number) {
  const { width: w, height: h } = spec;
  ctx.strokeStyle = "rgba(40, 55, 70, 0.45)";
  ctx.lineWidth = 2.4;
  ctx.beginPath();
  let x = rng() * w * 0.3;
  let y = rng() * h;
  ctx.moveTo(x, y);
  for (let i = 0; i < 14; i++) {
    x += 40 + rng() * 70;
    y += (rng() - 0.5) * 50;
    ctx.lineTo(x, y);
  }
  ctx.stroke();
}

export function renderMap(canvas: HTMLCanvasElement, spec: MapSpec): HTMLCanvasElement {
  canvas.width = spec.width;
  canvas.height = spec.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2d context required");
  const rng = mulberry32(spec.seed ^ hashKind(spec.kind));

  ctx.fillStyle = paperTone(spec.kind, rng);
  ctx.fillRect(0, 0, spec.width, spec.height);

  terrainWash(ctx, spec, rng);

  if (spec.kind === "street" || spec.kind === "plaque") {
    strokeGrid(ctx, spec, rng, "rgba(24, 20, 16, 0.55)");
    rivers(ctx, spec, rng);
    if (spec.kind === "plaque") {
      ctx.strokeStyle = "rgba(140, 28, 28, 0.25)";
      ctx.lineWidth = 6;
      ctx.strokeRect(20, 20, spec.width - 40, spec.height - 40);
      parcels(ctx, spec, rng);
    }
  }
  if (spec.kind === "cadastral") {
    parcels(ctx, spec, rng);
    strokeGrid(ctx, spec, rng, "rgba(24, 20, 16, 0.2)");
  }
  if (spec.kind === "contour") {
    contours(ctx, spec, rng);
    rivers(ctx, spec, rng);
  }
  if (spec.kind === "terrain") {
    contours(ctx, spec, rng);
    terrainWash(ctx, spec, rng);
  }

  return canvas;
}

function paperTone(kind: MapGenerator, rng: () => number): string {
  const base = {
    street: [214, 202, 176],
    cadastral: [220, 210, 190],
    contour: [200, 208, 196],
    terrain: [196, 188, 168],
    plaque: [210, 196, 172],
  }[kind];
  const j = () => Math.floor((rng() - 0.5) * 12);
  return `rgb(${base[0] + j()},${base[1] + j()},${base[2] + j()})`;
}

function hashKind(kind: MapGenerator): number {
  const table: Record<MapGenerator, number> = {
    street: 0x51ee,
    cadastral: 0xcad5,
    contour: 0xc047,
    terrain: 0x7eaa,
    plaque: 0x91a4,
  };
  return table[kind];
}

const cache = new Map<string, HTMLCanvasElement>();

export function mapCanvas(kind: MapGenerator, seed: number, size = 1024): HTMLCanvasElement {
  const key = `${kind}:${seed}:${size}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const canvas = document.createElement("canvas");
  renderMap(canvas, { kind, seed, width: size, height: size });
  cache.set(key, canvas);
  return canvas;
}

export function clearMapCache() {
  cache.clear();
}
