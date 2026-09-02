import { clamp, lerp, mulberry32 } from "../../core/random";
import type { DeriveSource, MapKind } from "./types";

function hash2(x: number, y: number, seed: number): number {
  let n = seed | 0;
  n = Math.imul(n ^ Math.imul(x | 0, 374761393), 668265263);
  n = Math.imul(n ^ Math.imul(y | 0, 1274126177), 2246822519);
  n = (n ^ (n >>> 15)) >>> 0;
  return n / 4294967296;
}

function valueNoise(x: number, y: number, seed: number): number {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const fx = x - x0;
  const fy = y - y0;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  return lerp(
    lerp(hash2(x0, y0, seed), hash2(x0 + 1, y0, seed), sx),
    lerp(hash2(x0, y0 + 1, seed), hash2(x0 + 1, y0 + 1, seed), sx),
    sy,
  );
}

function fbm(x: number, y: number, seed: number, octaves = 5): number {
  let v = 0;
  let a = 0.5;
  let f = 1;
  let n = 0;
  for (let i = 0; i < octaves; i++) {
    v += valueNoise(x * f, y * f, seed + i * 19) * a;
    n += a;
    a *= 0.5;
    f *= 2;
  }
  return v / n;
}

function makeCanvas(w: number, h: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return c;
}

export function defaultProceduralSources(seed: number): DeriveSource[] {
  const kinds: { id: MapKind; name: string }[] = [
    { id: "street", name: "Plan des rues" },
    { id: "contour", name: "Courbes de niveau" },
    { id: "cadastral", name: "Cadastre" },
    { id: "terrain", name: "Relief" },
  ];
  return kinds.map((k, i) => ({
    id: `src_${k.id}`,
    name: k.name,
    kind: "procedural" as const,
    mapKind: k.id,
    mapSeed: (seed + i * 7919) >>> 0,
    width: 1024,
    height: 1024,
    bitmap: null,
  }));
}

export function renderProceduralMap(kind: MapKind, seed: number, w = 1024, h = 1024): HTMLCanvasElement {
  const canvas = makeCanvas(w, h);
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;
  if (kind === "street") drawStreet(ctx, w, h, seed);
  else if (kind === "contour") drawContour(ctx, w, h, seed);
  else if (kind === "cadastral") drawCadastral(ctx, w, h, seed);
  else drawTerrain(ctx, w, h, seed);
  return canvas;
}

export function materializeSource(src: DeriveSource): DeriveSource {
  if (src.kind === "procedural" && !src.bitmap && src.mapKind) {
    return { ...src, bitmap: renderProceduralMap(src.mapKind, src.mapSeed ?? 0, src.width, src.height) };
  }
  return src;
}

function drawStreet(ctx: CanvasRenderingContext2D, w: number, h: number, seed: number) {
  const rng = mulberry32(seed >>> 0);
  ctx.fillStyle = "#d8c9a4";
  ctx.fillRect(0, 0, w, h);
  const cols = 9 + Math.floor(rng() * 4);
  const rows = 9 + Math.floor(rng() * 4);
  const xs: number[] = [0];
  const ys: number[] = [0];
  for (let i = 1; i < cols; i++) xs.push(xs[i - 1]! + (w / cols) * (0.65 + rng() * 0.7));
  for (let i = 1; i < rows; i++) ys.push(ys[i - 1]! + (h / rows) * (0.65 + rng() * 0.7));
  xs.push(w);
  ys.push(h);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const x0 = xs[i]!;
      const y0 = ys[j]!;
      const x1 = xs[i + 1]!;
      const y1 = ys[j + 1]!;
      const t = rng();
      ctx.fillStyle = t < 0.12 ? "#9aaa88" : t < 0.22 ? "#c4b08a" : t < 0.4 ? "#e0c8a8" : "#d2c09a";
      ctx.fillRect(x0 + 3, y0 + 3, x1 - x0 - 6, y1 - y0 - 6);
      if (rng() < 0.18) {
        ctx.save();
        ctx.strokeStyle = "rgba(90,70,40,0.25)";
        ctx.lineWidth = 1;
        for (let s = x0; s < x1; s += 7) {
          ctx.beginPath();
          ctx.moveTo(s, y0);
          ctx.lineTo(s + (y1 - y0) * 0.15, y1);
          ctx.stroke();
        }
        ctx.restore();
      }
    }
  }
  const riverY = h * (0.35 + rng() * 0.3);
  ctx.beginPath();
  ctx.moveTo(0, riverY);
  for (let x = 0; x <= w; x += 20) {
    ctx.lineTo(x, riverY + Math.sin(x * 0.01 + rng() * 0.2) * 28 + (rng() - 0.5) * 8);
  }
  ctx.strokeStyle = "#7a8a92";
  ctx.lineWidth = 22 + rng() * 16;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.strokeStyle = "#9aadb4";
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.strokeStyle = "#2a2418";
  ctx.lineCap = "butt";
  for (let i = 0; i < xs.length; i++) {
    ctx.lineWidth = 2 + rng() * 5;
    ctx.beginPath();
    ctx.moveTo(xs[i]!, 0);
    let x = xs[i]!;
    for (let y = 0; y <= h; y += 40) {
      x += (rng() - 0.5) * 10;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  for (let j = 0; j < ys.length; j++) {
    ctx.lineWidth = 2 + rng() * 4;
    ctx.beginPath();
    ctx.moveTo(0, ys[j]!);
    let y = ys[j]!;
    for (let x = 0; x <= w; x += 40) {
      y += (rng() - 0.5) * 10;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  ctx.strokeStyle = "#1a1810";
  for (let d = 0; d < 3 + Math.floor(rng() * 3); d++) {
    ctx.lineWidth = 5 + rng() * 4;
    ctx.beginPath();
    ctx.moveTo(rng() * w * 0.3, rng() * h);
    ctx.lineTo(w * 0.6 + rng() * w * 0.4, rng() * h);
    ctx.stroke();
  }
  ctx.fillStyle = "#2a2418";
  ctx.font = "11px 'IBM Plex Mono', monospace";
  for (let k = 0; k < 18; k++) {
    ctx.save();
    ctx.translate(rng() * w, rng() * h);
    ctx.rotate((rng() - 0.5) * 0.8);
    ctx.fillText(`R.${Math.floor(rng() * 90 + 10)}`, 0, 0);
    ctx.restore();
  }
}

function drawContour(ctx: CanvasRenderingContext2D, w: number, h: number, seed: number) {
  ctx.fillStyle = "#e6d7b8";
  ctx.fillRect(0, 0, w, h);
  const levels = [0.28, 0.36, 0.44, 0.52, 0.6, 0.68, 0.76, 0.84];
  const step = 6;
  ctx.lineWidth = 1.15;
  for (const level of levels) {
    ctx.strokeStyle = level > 0.7 ? "#6a3a18" : "#8a6a3a";
    ctx.beginPath();
    for (let y = 0; y < h; y += step) {
      for (let x = 0; x < w; x += step) {
        const v00 = fbm(x / 140, y / 140, seed);
        const v10 = fbm((x + step) / 140, y / 140, seed);
        const v01 = fbm(x / 140, (y + step) / 140, seed);
        const v11 = fbm((x + step) / 140, (y + step) / 140, seed);
        const c =
          (v00 > level ? 1 : 0) + (v10 > level ? 2 : 0) + (v11 > level ? 4 : 0) + (v01 > level ? 8 : 0);
        if (c === 0 || c === 15) continue;
        const edge = (t: number, a0: number, a1: number) => ((level - a0) / (a1 - a0 + 1e-9)) * t;
        const top = { x: x + edge(step, v00, v10), y };
        const right = { x: x + step, y: y + edge(step, v10, v11) };
        const bot = { x: x + edge(step, v01, v11), y: y + step };
        const left = { x, y: y + edge(step, v00, v01) };
        const pairs: [{ x: number; y: number }, { x: number; y: number }][] = [];
        if (c === 1 || c === 14) pairs.push([left, top]);
        else if (c === 2 || c === 13) pairs.push([top, right]);
        else if (c === 4 || c === 11) pairs.push([right, bot]);
        else if (c === 8 || c === 7) pairs.push([bot, left]);
        else if (c === 3 || c === 12) pairs.push([left, right]);
        else if (c === 6 || c === 9) pairs.push([top, bot]);
        else if (c === 5) {
          pairs.push([left, top]);
          pairs.push([right, bot]);
        } else if (c === 10) {
          pairs.push([top, right]);
          pairs.push([bot, left]);
        }
        for (const [p, q] of pairs) {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
        }
      }
    }
    ctx.stroke();
  }
  const rng = mulberry32((seed ^ 0x55) >>> 0);
  ctx.fillStyle = "#5a3a18";
  ctx.font = "10px 'IBM Plex Mono', monospace";
  for (let i = 0; i < 12; i++) {
    const x = rng() * w;
    const y = rng() * h;
    ctx.fillText(`△ ${Math.round(40 + fbm(x / 140, y / 140, seed) * 180)}`, x, y);
  }
}

function drawCadastral(ctx: CanvasRenderingContext2D, w: number, h: number, seed: number) {
  const rng = mulberry32(seed >>> 0);
  ctx.fillStyle = "#efe4c8";
  ctx.fillRect(0, 0, w, h);
  type Rect = { x: number; y: number; w: number; h: number; depth: number };
  const stack: Rect[] = [{ x: 8, y: 8, w: w - 16, h: h - 16, depth: 0 }];
  const lots: Rect[] = [];
  while (stack.length) {
    const r = stack.pop()!;
    if (r.w < 70 || r.h < 70 || r.depth > 5 || (r.depth > 2 && rng() < 0.35)) {
      lots.push(r);
      continue;
    }
    if (r.w > r.h) {
      const cut = r.w * (0.32 + rng() * 0.36);
      stack.push({ x: r.x, y: r.y, w: cut, h: r.h, depth: r.depth + 1 });
      stack.push({ x: r.x + cut, y: r.y, w: r.w - cut, h: r.h, depth: r.depth + 1 });
    } else {
      const cut = r.h * (0.32 + rng() * 0.36);
      stack.push({ x: r.x, y: r.y, w: r.w, h: cut, depth: r.depth + 1 });
      stack.push({ x: r.x, y: r.y + cut, w: r.w, h: r.h - cut, depth: r.depth + 1 });
    }
  }
  const fills = ["#f3d9b0", "#e8cfc0", "#efe6c4", "#d9c8a4", "#f0ddd0", "#e4d8b8"];
  ctx.strokeStyle = "#2a2018";
  ctx.lineWidth = 1.6;
  ctx.font = "10px 'IBM Plex Mono', monospace";
  lots.forEach((r, i) => {
    ctx.fillStyle = fills[Math.floor(rng() * fills.length)]!;
    ctx.fillRect(r.x, r.y, r.w, r.h);
    ctx.strokeRect(r.x, r.y, r.w, r.h);
    if (r.w > 48 && r.h > 28) {
      ctx.fillStyle = "#3a2a18";
      ctx.fillText(String(100 + i), r.x + 6, r.y + 14);
    }
    if (rng() < 0.2) {
      ctx.save();
      ctx.strokeStyle = "rgba(90,50,30,0.2)";
      ctx.lineWidth = 1;
      for (let s = 0; s < r.w + r.h; s += 6) {
        ctx.beginPath();
        ctx.moveTo(r.x + s, r.y);
        ctx.lineTo(r.x, r.y + s);
        ctx.stroke();
      }
      ctx.restore();
    }
  });
}

function drawTerrain(ctx: CanvasRenderingContext2D, w: number, h: number, seed: number) {
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const e = fbm(x / 180, y / 180, seed, 6);
      const i = (y * w + x) * 4;
      let r: number;
      let g: number;
      let b: number;
      if (e < 0.38) {
        r = 110 + e * 40;
        g = 120 + e * 50;
        b = 118;
      } else if (e < 0.55) {
        r = 90 + e * 80;
        g = 120 + e * 70;
        b = 70;
      } else if (e < 0.72) {
        r = 140 + e * 40;
        g = 130 + e * 20;
        b = 80;
      } else {
        r = 200 - e * 20;
        g = 190 - e * 30;
        b = 160;
      }
      img.data[i] = r;
      img.data[i + 1] = g;
      img.data[i + 2] = b;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  ctx.strokeStyle = "#3a5a6a";
  ctx.lineWidth = 5;
  ctx.beginPath();
  let rx = 0;
  let ry = h * 0.2 + fbm(0, 1, seed) * h * 0.6;
  ctx.moveTo(rx, ry);
  while (rx < w) {
    rx += 8;
    ry = clamp(ry + (fbm(rx / 180, ry / 180, seed) - 0.5) * 10 + (fbm(rx / 90, 2, seed + 3) - 0.5) * 6, 0, h);
    ctx.lineTo(rx, ry);
  }
  ctx.stroke();
  ctx.strokeStyle = "#6a8a96";
  ctx.lineWidth = 2;
  ctx.stroke();
  const rng = mulberry32((seed ^ 0x77) >>> 0);
  ctx.strokeStyle = "#3a2a18";
  ctx.lineWidth = 1.4;
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(rng() * w, rng() * h);
    ctx.quadraticCurveTo(rng() * w, rng() * h, rng() * w, rng() * h);
    ctx.stroke();
  }
}

export function mapKindLabel(kind: MapKind): string {
  if (kind === "street") return "Street grid";
  if (kind === "contour") return "Contour";
  if (kind === "cadastral") return "Cadastral";
  return "Terrain";
}
