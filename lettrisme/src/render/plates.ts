import { paragraph } from "../core/phrases";
import type { Project } from "../core/types";
import { asemicRow, cursiveLine, microScriptFill, wobbleRect } from "./asemic";
import { activeBitmap, fromImage, radialField, sampleAt, type DensityField } from "./density";
import { glyphRow, paintGlyph } from "./glyphs";
import { plateRect } from "./paper";
import { paintPhotoPlate } from "./photo";

function densityFor(project: Project, rng: () => number): DensityField {
  const bmp = activeBitmap(project.sources, project.activeSourceId);
  if (bmp) return fromImage(bmp, 80, 60, project.ink.contrast);
  return radialField(64, 48, rng);
}

export function paintScriptorium(
  ctx: CanvasRenderingContext2D,
  project: Project,
  w: number,
  h: number,
  rng: () => number,
) {
  const r = plateRect(w, h, project.paper.margin);
  paintPhotoPlate(ctx, project, r.x, r.y, r.w, r.h);
  const field = densityFor(project, rng);
  const rows = Math.floor((28 + project.ink.density * 36) * (0.85 + project.ink.scale * 0.3));
  const layers: { color: string; amt: number; weight: number }[] = [
    { color: `rgba(12,10,10,${0.55 + project.ink.black * 0.4})`, amt: project.ink.black, weight: 1.15 },
    { color: `rgba(20,70,180,${0.45 + project.ink.blue * 0.4})`, amt: project.ink.blue, weight: 1.05 },
    { color: `rgba(190,25,20,${0.4 + project.ink.red * 0.4})`, amt: project.ink.red, weight: 0.95 },
  ];
  for (const layer of layers) {
    if (layer.amt < 0.05) continue;
    ctx.strokeStyle = layer.color;
    for (let i = 0; i < rows; i++) {
      const v = (i + 0.5) / rows;
      const y = r.y + 8 + v * (r.h - 16);
      const u = rng();
      const dens = sampleAt(field, 0.2 + u * 0.6, v);
      if (rng() > project.ink.density * layer.amt * (0.35 + dens * 0.9)) continue;
      const x0 = r.x + 6 + rng() * 10;
      const width = r.w * (0.55 + rng() * 0.42);
      asemicRow(ctx, x0, y + (rng() - 0.5) * 4, width, rng, {
        chaos: project.ink.chaos,
        weight: layer.weight,
        scale: 0.55 + project.ink.scale * 0.7,
      });
    }
  }
  ctx.save();
  ctx.strokeStyle = "rgba(20,16,12,0.55)";
  ctx.lineWidth = 0.8;
  wobbleRect(ctx, r.x, r.y, r.w, r.h, rng);
  ctx.restore();
}

export function paintAlphabet(
  ctx: CanvasRenderingContext2D,
  project: Project,
  w: number,
  h: number,
  rng: () => number,
) {
  const r = plateRect(w, h, project.paper.margin * 0.9);
  ctx.save();
  ctx.strokeStyle = "rgba(30,24,18,0.18)";
  ctx.lineWidth = 0.5;
  const step = Math.min(r.w, r.h) / 22;
  for (let x = r.x; x <= r.x + r.w; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, r.y);
    ctx.lineTo(x, r.y + r.h);
    ctx.stroke();
  }
  for (let y = r.y; y <= r.y + r.h; y += step) {
    ctx.beginPath();
    ctx.moveTo(r.x, y);
    ctx.lineTo(r.x + r.w, y);
    ctx.stroke();
  }
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = "#1a1612";
  ctx.lineWidth = 1.2;
  wobbleRect(ctx, r.x, r.y, r.w, r.h, rng);
  ctx.restore();
  const rows = 8 + Math.round(project.ink.density * 3);
  const cols = 6 + Math.round(project.ink.scale * 3);
  const cellW = r.w / cols;
  const cellH = r.h / rows;
  const size = Math.min(cellW, cellH) * 0.32 * (0.8 + project.ink.scale * 0.5);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (rng() > 0.92 + project.ink.density * 0.07) continue;
      paintGlyph(
        ctx,
        r.x + (col + 0.5) * cellW + (rng() - 0.5) * 4,
        r.y + (row + 0.5) * cellH + (rng() - 0.5) * 3,
        size,
        rng,
        "#161410",
      );
    }
  }
}

export function paintReseau(
  ctx: CanvasRenderingContext2D,
  project: Project,
  w: number,
  h: number,
  rng: () => number,
) {
  const r = plateRect(w, h, project.paper.margin * 0.75);
  const ochre = "#b8892a";
  const dark = "#5a3d12";
  const cols = 7 + Math.floor(project.ink.density * 8);
  const rows = 6 + Math.floor(project.ink.density * 7);
  const xs: number[] = [];
  const ys: number[] = [];
  let x = r.x + r.w * 0.04;
  for (let i = 0; i <= cols; i++) {
    xs.push(x);
    x += (r.w / cols) * (0.55 + rng() * 0.8);
  }
  let y = r.y + r.h * 0.06;
  for (let j = 0; j <= rows; j++) {
    ys.push(y);
    y += (r.h / rows) * (0.5 + rng() * 0.85);
  }
  ctx.save();
  ctx.strokeStyle = ochre;
  ctx.lineCap = "round";
  for (const yy of ys) {
    ctx.lineWidth = 1.2 + rng() * 2.4;
    ctx.beginPath();
    ctx.moveTo(r.x, yy + (rng() - 0.5) * 6);
    for (const xx of xs) {
      ctx.lineTo(xx, yy + (rng() - 0.5) * 8);
    }
    ctx.stroke();
    const drips = 4 + Math.floor(rng() * 8);
    for (let d = 0; d < drips; d++) {
      const dx = r.x + rng() * r.w;
      const len = 8 + rng() * 40 * (0.4 + project.ink.chaos);
      ctx.lineWidth = 0.8 + rng();
      ctx.beginPath();
      ctx.moveTo(dx, yy);
      ctx.lineTo(dx + (rng() - 0.5) * 3, yy + len);
      ctx.stroke();
    }
  }
  ctx.strokeStyle = dark;
  for (const xx of xs) {
    ctx.lineWidth = 1 + rng() * 2;
    ctx.globalAlpha = 0.75;
    ctx.beginPath();
    ctx.moveTo(xx + (rng() - 0.5) * 5, r.y);
    ctx.lineTo(xx + (rng() - 0.5) * 8, r.y + r.h);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  ctx.restore();

  const cx = r.x + r.w * (0.4 + rng() * 0.2);
  const cy = r.y + r.h * (0.38 + rng() * 0.16);
  const rad = Math.min(r.w, r.h) * (0.14 + project.ink.density * 0.1);
  ctx.save();
  ctx.fillStyle = ochre;
  ctx.beginPath();
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    const rr = rad * (0.7 + rng() * 0.6);
    const px = cx + Math.cos(a) * rr;
    const py = cy + Math.sin(a) * rr * 0.85;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.globalAlpha = 0.92;
  ctx.fill();
  ctx.clip();
  ctx.globalAlpha = 1;
  for (let i = 0; i < 40; i++) {
    paintGlyph(ctx, cx + (rng() - 0.5) * rad * 1.6, cy + (rng() - 0.5) * rad * 1.4, 7 + rng() * 6, rng, dark);
  }
  ctx.restore();
}

export function paintTache(
  ctx: CanvasRenderingContext2D,
  project: Project,
  w: number,
  h: number,
  rng: () => number,
) {
  const r = plateRect(w, h, project.paper.margin * 0.85);
  const size = 9 + project.ink.scale * 7;
  const rowH = size * 1.35;
  for (let y = r.y + size; y < r.y + r.h - 4; y += rowH) {
    glyphRow(ctx, r.x + 4, y, r.w - 8, size * 0.55, rng, "rgba(22,18,14,0.82)", 1.2);
  }
  const cx = r.x + r.w * 0.5;
  const cy = r.y + r.h * 0.5;
  ctx.save();
  ctx.fillStyle = "#152038";
  ctx.beginPath();
  const arms = 26 + Math.floor(project.ink.chaos * 16);
  for (let i = 0; i < arms; i++) {
    const a = (i / arms) * Math.PI * 2;
    const reach = (0.22 + rng() * 0.28 + (rng() < 0.2 ? 0.18 : 0)) * Math.min(r.w, r.h);
    const px = cx + Math.cos(a) * reach * (0.7 + project.ink.density * 0.5);
    const py = cy + Math.sin(a) * reach;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.quadraticCurveTo(cx + Math.cos(a) * reach * 0.4, cy + Math.sin(a) * reach * 0.4, px, py);
  }
  ctx.closePath();
  ctx.fill();
  const lines = paragraph(rng, 7);
  const tx = cx - r.w * 0.18;
  const ty = cy - r.h * 0.16;
  lines.forEach((line, i) => {
    cursiveLine(ctx, line.toLowerCase(), tx, ty + i * 16, 11, "#f4eee2", -0.02);
  });
  cursiveLine(ctx, paragraph(rng, 1)[0] ?? "hypergraphie", cx + r.w * 0.02, cy + r.h * 0.12, 12, "#f4eee2", -0.03);
  ctx.restore();
}

export function paintMasse(
  ctx: CanvasRenderingContext2D,
  project: Project,
  w: number,
  h: number,
  rng: () => number,
) {
  const r = plateRect(w, h, project.paper.margin * 0.8);
  const blue = "#2f6db5";
  const pale = "#6ea4d8";
  const bars: { x: number; y: number; w: number; h: number }[] = [];
  const nH = 3 + Math.floor(rng() * 3);
  const nV = 3 + Math.floor(rng() * 3);
  for (let i = 0; i < nH; i++) {
    bars.push({
      x: r.x + rng() * r.w * 0.15,
      y: r.y + rng() * r.h,
      w: r.w * (0.35 + rng() * 0.55),
      h: 14 + rng() * 22,
    });
  }
  for (let i = 0; i < nV; i++) {
    bars.push({
      x: r.x + rng() * r.w,
      y: r.y + rng() * r.h * 0.2,
      w: 14 + rng() * 20,
      h: r.h * (0.4 + rng() * 0.55),
    });
  }
  const blob = {
    x: r.x + r.w * 0.28,
    y: r.y + r.h * 0.18,
    w: r.w * (0.5 + rng() * 0.2),
    h: r.h * (0.52 + rng() * 0.18),
  };

  const fillScript = (draw: () => void) => {
    ctx.save();
    ctx.beginPath();
    draw();
    ctx.fillStyle = blue;
    ctx.fill();
    ctx.clip();
    microScriptFill(ctx, r.x, r.y, r.w, r.h, rng, 0.85 + project.ink.density * 0.15);
    ctx.restore();
  };

  for (const b of bars) {
    fillScript(() => {
      ctx.rect(b.x, b.y, b.w, b.h);
    });
  }
  fillScript(() => {
    ctx.moveTo(blob.x + blob.w * 0.2, blob.y);
    ctx.bezierCurveTo(blob.x + blob.w, blob.y, blob.x + blob.w, blob.y + blob.h * 0.5, blob.x + blob.w * 0.85, blob.y + blob.h);
    ctx.bezierCurveTo(blob.x + blob.w * 0.4, blob.y + blob.h * 1.05, blob.x, blob.y + blob.h * 0.7, blob.x + blob.w * 0.1, blob.y + blob.h * 0.3);
    ctx.closePath();
  });

  ctx.save();
  ctx.strokeStyle = pale;
  ctx.lineWidth = 2.2;
  ctx.globalAlpha = 0.85;
  ctx.beginPath();
  let px = blob.x + blob.w * 0.3;
  let py = blob.y + blob.h * 0.3;
  ctx.moveTo(px, py);
  for (let i = 0; i < 18 + project.ink.chaos * 12; i++) {
    const nx = blob.x + rng() * blob.w;
    const ny = blob.y + rng() * blob.h;
    ctx.quadraticCurveTo(px + (rng() - 0.5) * 40, py + (rng() - 0.5) * 40, nx, ny);
    px = nx;
    py = ny;
  }
  ctx.stroke();
  ctx.restore();
}
