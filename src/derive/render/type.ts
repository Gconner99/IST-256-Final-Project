import { mulberry32 } from "../../core/random";
import type { DeriveProject, DetournementMark } from "../core/types";

export function renderType(ctx: CanvasRenderingContext2D, w: number, h: number, project: DeriveProject) {
  const rng = mulberry32((project.seed ^ 0x71c) >>> 0);
  drawTitle(ctx, w, h, project.name);
  drawLegend(ctx, w, h);
  drawTicks(ctx, w, h, rng);
  for (const mark of project.marks) drawMark(ctx, w, h, mark);
}

function drawTitle(ctx: CanvasRenderingContext2D, w: number, h: number, name: string) {
  ctx.save();
  ctx.fillStyle = "#2a1c14";
  ctx.font = `700 ${Math.max(16, w * 0.022)}px Syne, "IBM Plex Mono", sans-serif`;
  ctx.textAlign = "left";
  ctx.fillText("GUIDE PSYCHOGÉOGRAPHIQUE", w * 0.055, h * 0.055);
  ctx.font = `${Math.max(10, w * 0.011)}px "IBM Plex Mono", monospace`;
  ctx.fillStyle = "#c41e1e";
  ctx.fillText(name.toUpperCase(), w * 0.055, h * 0.078);
  ctx.restore();
}

function drawLegend(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const x = w * 0.055;
  const y = h * 0.86;
  const bw = w * 0.22;
  const bh = h * 0.095;
  ctx.save();
  ctx.fillStyle = "rgba(236, 224, 196, 0.78)";
  ctx.strokeStyle = "#2a1c14";
  ctx.lineWidth = 1;
  ctx.fillRect(x, y, bw, bh);
  ctx.strokeRect(x, y, bw, bh);
  ctx.font = `${Math.max(8, w * 0.009)}px "IBM Plex Mono", monospace`;
  ctx.fillStyle = "#2a1c14";
  ctx.fillText("LÉGENDE  (DÉTOURNÉE)", x + 8, y + bh * 0.28);
  ctx.fillStyle = "#c41e1e";
  ctx.fillText("→  passage possible", x + 8, y + bh * 0.5);
  ctx.fillStyle = "#2a1c14";
  ctx.fillText("■  unité d'ambiance    ⊕  plaque", x + 8, y + bh * 0.7);
  ctx.font = `${Math.max(7, w * 0.0075)}px "IBM Plex Mono", monospace`;
  ctx.fillStyle = "#6a5a48";
  ctx.fillText("distances are not distances", x + 8, y + bh * 0.9);
  ctx.restore();
}

function drawTicks(ctx: CanvasRenderingContext2D, w: number, h: number, rng: () => number) {
  ctx.save();
  ctx.strokeStyle = "#4a3a28";
  ctx.fillStyle = "#4a3a28";
  ctx.globalAlpha = 0.45;
  ctx.lineWidth = 1;
  ctx.font = `${Math.max(7, w * 0.007)}px "IBM Plex Mono", monospace`;
  const n = 11;
  for (let i = 0; i < n; i++) {
    const x = w * (0.08 + (i / (n - 1)) * 0.84);
    const len = 4 + rng() * 7;
    ctx.beginPath();
    ctx.moveTo(x, h * 0.012);
    ctx.lineTo(x, h * 0.012 + len);
    ctx.stroke();
    if (i % 2 === 0) ctx.fillText(String(Math.floor(rng() * 90)), x - 6, h * 0.012 + len + 9);
  }
  for (let i = 0; i < 8; i++) {
    const y = h * (0.12 + (i / 7) * 0.7);
    ctx.beginPath();
    ctx.moveTo(w * 0.012, y);
    ctx.lineTo(w * 0.012 + 5 + rng() * 6, y);
    ctx.stroke();
  }
  ctx.restore();
}

function drawMark(ctx: CanvasRenderingContext2D, w: number, h: number, mark: DetournementMark) {
  const x = mark.x * w;
  const y = mark.y * h;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(mark.rotation);
  if (mark.kind === "stamp") {
    const r = Math.min(w, h) * 0.028 * mark.size;
    ctx.strokeStyle = "#c41e1e";
    ctx.globalAlpha = 0.7;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.font = `${Math.max(8, r * 0.42)}px "IBM Plex Mono", monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#c41e1e";
    ctx.fillText(mark.text, 0, 0);
  } else {
    const size = Math.max(8, Math.min(w, h) * 0.011 * mark.size);
    ctx.font = `${mark.kind === "slogan" ? 600 : 400} ${size}px "IBM Plex Mono", monospace`;
    ctx.fillStyle = mark.kind === "slogan" ? "#2a1c14" : "#5a4a38";
    ctx.globalAlpha = mark.kind === "slogan" ? 0.72 : 0.55;
    ctx.textAlign = "center";
    ctx.fillText(mark.text, 0, 0);
  }
  ctx.restore();
}
