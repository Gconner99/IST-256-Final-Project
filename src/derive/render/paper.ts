import { lerp, mulberry32 } from "../../core/random";
import type { PaperSettings, SpectacleSettings } from "../core/types";

function grainTile(seed: number, amount: number): HTMLCanvasElement {
  const tile = 160;
  const c = document.createElement("canvas");
  c.width = tile;
  c.height = tile;
  const ctx = c.getContext("2d")!;
  const img = ctx.createImageData(tile, tile);
  const rng = mulberry32(seed >>> 0);
  const a = Math.round(36 * amount);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = rng() * 255;
    img.data[i] = n;
    img.data[i + 1] = n * 0.97;
    img.data[i + 2] = n * 0.9;
    img.data[i + 3] = a;
  }
  ctx.putImageData(img, 0, 0);
  return c;
}

export function renderPaper(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  paper: PaperSettings,
  seed: number,
) {
  const cream = lerp(210, 232, 1 - paper.ground);
  const warm = lerp(188, 214, 1 - paper.ground);
  ctx.fillStyle = `rgb(${cream | 0}, ${warm | 0}, ${(warm * 0.86) | 0})`;
  ctx.fillRect(0, 0, w, h);

  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, "rgba(255,248,230,0.35)");
  g.addColorStop(1, "rgba(160,130,90,0.18)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  const rng = mulberry32((seed ^ 0x9a9e) >>> 0);
  const tile = grainTile(seed ^ 0x11, 0.55 + paper.ground * 0.4);
  const pat = ctx.createPattern(tile, "repeat");
  if (pat) {
    ctx.save();
    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = pat;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }

  const stains = Math.round(3 + paper.stains * 6);
  for (let i = 0; i < stains; i++) {
    const x = rng() * w;
    const y = rng() * h;
    const r = (0.08 + rng() * 0.18) * Math.min(w, h) * (0.5 + paper.stains);
    const stain = ctx.createRadialGradient(x, y, r * 0.1, x, y, r);
    stain.addColorStop(0, `rgba(120, 70, 30, ${0.1 + paper.stains * 0.12})`);
    stain.addColorStop(0.55, `rgba(140, 90, 40, ${0.05 + paper.stains * 0.06})`);
    stain.addColorStop(1, "rgba(140, 90, 40, 0)");
    ctx.fillStyle = stain;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }

  if (paper.fold > 0.02) {
    const x0 = w * (0.18 + rng() * 0.2);
    const x1 = w * (0.55 + rng() * 0.3);
    ctx.save();
    ctx.globalAlpha = 0.18 + paper.fold * 0.28;
    ctx.strokeStyle = "rgba(40, 28, 16, 0.45)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(x0, 0);
    ctx.lineTo(x1, h);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255, 250, 235, 0.35)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x0 + 2, 0);
    ctx.lineTo(x1 + 2, h);
    ctx.stroke();
    ctx.restore();
  }

  if (paper.gridGhost > 0.02) {
    ctx.save();
    ctx.translate(w * 0.5, h * 0.5);
    ctx.rotate(-0.035);
    ctx.translate(-w * 0.5, -h * 0.5);
    ctx.globalAlpha = 0.08 + paper.gridGhost * 0.16;
    ctx.strokeStyle = "#4a3a28";
    ctx.lineWidth = 0.8;
    const step = Math.min(w, h) / (9 + rng() * 4);
    for (let x = 0; x < w; x += step * (0.85 + rng() * 0.3)) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + (rng() - 0.5) * 8, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += step * (0.85 + rng() * 0.3)) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y + (rng() - 0.5) * 8);
      ctx.stroke();
    }
    ctx.restore();
  }

  ctx.save();
  const vig = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.35, w / 2, h / 2, Math.max(w, h) * 0.72);
  vig.addColorStop(0, "rgba(0,0,0,0)");
  vig.addColorStop(1, "rgba(40, 28, 14, 0.22)");
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, w, h);
  ctx.restore();
}

export function renderSpectacle(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  spec: SpectacleSettings,
) {
  if (!spec.enabled || spec.amount <= 0) return;
  ctx.save();
  ctx.globalCompositeOperation = "saturation";
  ctx.globalAlpha = spec.amount;
  ctx.fillStyle = "#ff2a6a";
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = "overlay";
  ctx.globalAlpha = spec.amount * 0.45;
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, "#ff4d6a");
  g.addColorStop(0.5, "#ffd23a");
  g.addColorStop(1, "#3ad0ff");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  ctx.restore();
}
