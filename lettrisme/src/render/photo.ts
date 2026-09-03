import { mulberry32 } from "../core/random";
import type { Project } from "../core/types";
import { activeBitmap } from "./density";

export function paintPhotoPlate(
  ctx: CanvasRenderingContext2D,
  project: Project,
  x: number,
  y: number,
  w: number,
  h: number,
) {
  const bmp = activeBitmap(project.sources, project.activeSourceId);
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();
  if (bmp) {
    const iw = "width" in bmp ? Number(bmp.width) : w;
    const ih = "height" in bmp ? Number(bmp.height) : h;
    const scale = Math.max(w / iw, h / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    ctx.filter = `grayscale(1) contrast(${1 + project.ink.contrast}) brightness(${1.05 - project.ink.contrast * 0.15})`;
    ctx.globalAlpha = project.ink.photoMix;
    ctx.drawImage(bmp, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
    ctx.filter = "none";
    ctx.globalAlpha = 1;
  } else {
    syntheticPhoto(ctx, x, y, w, h, project.seed);
  }
  ctx.restore();
}

function syntheticPhoto(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  seed: number,
) {
  const rng = mulberry32(seed ^ 0xf070);
  const g = ctx.createLinearGradient(x, y, x + w, y + h);
  g.addColorStop(0, "#d8d2c6");
  g.addColorStop(1, "#6a655c");
  ctx.fillStyle = g;
  ctx.fillRect(x, y, w, h);
  for (let i = 0; i < 18; i++) {
    ctx.fillStyle = `rgba(20,18,14,${0.08 + rng() * 0.28})`;
    ctx.fillRect(x + rng() * w, y + rng() * h, 20 + rng() * w * 0.35, 8 + rng() * h * 0.2);
  }
  ctx.fillStyle = "rgba(250,248,240,0.35)";
  ctx.fillRect(x, y, w, h * 0.28);
}
