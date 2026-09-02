import { mulberry32 } from "../core/random";
import type { PaperSettings } from "../core/types";

export function paintPaper(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  paper: PaperSettings,
  seed: number,
  preview = false,
) {
  const rng = mulberry32(seed ^ 0x0a0e);
  ctx.fillStyle = paper.ground;
  ctx.fillRect(0, 0, w, h);

  const wash = ctx.createLinearGradient(0, 0, w, h);
  wash.addColorStop(0, "rgba(255,248,230,0.18)");
  wash.addColorStop(0.5, "rgba(0,0,0,0)");
  wash.addColorStop(1, "rgba(80,50,20,0.08)");
  ctx.fillStyle = wash;
  ctx.fillRect(0, 0, w, h);

  if (paper.stain > 0.01) {
    for (let i = 0; i < 14 * paper.stain + 2; i++) {
      const x = rng() * w;
      const y = rng() * h;
      const r = (40 + rng() * 180) * (0.5 + paper.stain);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(90, 55, 20, ${0.04 + rng() * 0.08 * paper.stain})`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
  }

  if (paper.fold > 0.01) {
    ctx.save();
    ctx.globalAlpha = 0.12 * paper.fold;
    ctx.strokeStyle = paper.ink;
    ctx.lineWidth = 1;
    for (let i = 0; i < 3; i++) {
      const x = w * (0.2 + rng() * 0.6);
      ctx.beginPath();
      ctx.moveTo(x + (rng() - 0.5) * 40, 0);
      ctx.lineTo(x + (rng() - 0.5) * 80, h);
      ctx.stroke();
    }
    ctx.restore();
  }

  if (paper.gridGhost > 0.01) {
    ctx.save();
    ctx.globalAlpha = paper.gridGhost * 0.35;
    ctx.strokeStyle = paper.ink;
    ctx.lineWidth = 0.6;
    const step = Math.min(w, h) / 16;
    for (let x = step; x < w; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = step; y < h; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  if (paper.grain > 0.01 && !preview) {
    const img = ctx.getImageData(0, 0, w, h);
    const d = img.data;
    const amount = paper.grain * 22;
    for (let i = 0; i < d.length; i += 4) {
      const n = (rng() - 0.5) * amount;
      d[i] = clampByte((d[i] ?? 0) + n);
      d[i + 1] = clampByte((d[i + 1] ?? 0) + n);
      d[i + 2] = clampByte((d[i + 2] ?? 0) + n);
    }
    ctx.putImageData(img, 0, 0);
  }
}

function clampByte(v: number): number {
  return v < 0 ? 0 : v > 255 ? 255 : v;
}
