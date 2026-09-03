import { mulberry32 } from "../core/random";
import type { PaperSettings } from "../core/types";

export function paintGround(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  paper: PaperSettings,
  seed: number,
) {
  ctx.fillStyle = paper.ground;
  ctx.fillRect(0, 0, w, h);
  if (paper.grain < 0.02) return;
  const rng = mulberry32(seed ^ 0x0a0e);
  const gw = Math.max(64, Math.floor(w / 4));
  const gh = Math.max(64, Math.floor(h / 4));
  const grain = document.createElement("canvas");
  grain.width = gw;
  grain.height = gh;
  const gctx = grain.getContext("2d");
  if (!gctx) return;
  const img = gctx.createImageData(gw, gh);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = 128 + (rng() - 0.5) * paper.grain * 40;
    d[i] = n;
    d[i + 1] = n - 2;
    d[i + 2] = n - 6;
    d[i + 3] = 28 + paper.grain * 40;
  }
  gctx.putImageData(img, 0, 0);
  ctx.save();
  ctx.globalCompositeOperation = "multiply";
  ctx.drawImage(grain, 0, 0, w, h);
  ctx.restore();
}

export function plateRect(w: number, h: number, margin: number) {
  const m = Math.min(w, h) * Math.max(0, margin);
  return { x: m, y: m, w: Math.max(1, w - m * 2), h: Math.max(1, h - m * 2) };
}
