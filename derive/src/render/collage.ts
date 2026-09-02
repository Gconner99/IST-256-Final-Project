import { AMBIANCE_GRADE } from "../core/ambiances";
import { mapCanvas } from "../core/maps";
import type { MediaSource, Project, Unit } from "../core/types";

function drawable(source: MediaSource | undefined, seed: number): CanvasImageSource | null {
  if (!source) return null;
  if (source.bitmap) return source.bitmap;
  if (source.kind === "generator" && source.generator) {
    return mapCanvas(source.generator, seed + source.id.length * 13);
  }
  return null;
}

function bbox(unit: Unit) {
  let minX = 1;
  let minY = 1;
  let maxX = 0;
  let maxY = 0;
  for (const p of unit.crop) {
    minX = Math.min(minX, p.x);
    minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x);
    maxY = Math.max(maxY, p.y);
  }
  return { minX, minY, maxX, maxY, w: maxX - minX, h: maxY - minY };
}

export function paintUnits(
  ctx: CanvasRenderingContext2D,
  project: Project,
  w: number,
  h: number,
  selectedId: string | null,
) {
  const sources = new Map(project.sources.map((s) => [s.id, s]));
  for (const unit of project.units) {
    const src = sources.get(unit.sourceId);
    const img = drawable(src, project.drift.seed);
    if (!img) continue;
    const box = bbox(unit);
    const iw = "width" in img ? Number(img.width) : src?.width ?? 1024;
    const ih = "height" in img ? Number(img.height) : src?.height ?? 1024;
    const destW = Math.min(w, h) * 0.28 * unit.scale;
    const destH = destW * (box.h / Math.max(0.08, box.w));
    const cx = unit.x * w;
    const cy = unit.y * h;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(unit.rotation);

    ctx.save();
    ctx.shadowColor = "rgba(20, 12, 8, 0.45)";
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 6;
    pathCrop(ctx, unit, destW, destH, box);
    ctx.fillStyle = project.paper.ground;
    ctx.fill();
    ctx.restore();

    ctx.save();
    pathCrop(ctx, unit, destW, destH, box);
    ctx.clip();
    ctx.filter = AMBIANCE_GRADE[unit.ambiance];
    ctx.drawImage(
      img,
      box.minX * iw,
      box.minY * ih,
      box.w * iw,
      box.h * ih,
      -destW / 2,
      -destH / 2,
      destW,
      destH,
    );
    ctx.filter = "none";
    if (project.paper.xerox > 0.01) {
      ctx.globalCompositeOperation = "multiply";
      ctx.globalAlpha = project.paper.xerox * 0.22;
      ctx.fillStyle = "#2a241c";
      ctx.fillRect(-destW / 2, -destH / 2, destW, destH);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
    }
    ctx.restore();

    ctx.lineWidth = unit.plaque ? 2.2 : 1.1;
    ctx.strokeStyle = unit.plaque ? project.arrows.color : "rgba(20,16,12,0.75)";
    pathCrop(ctx, unit, destW, destH, box);
    ctx.stroke();

    if (selectedId === unit.id) {
      ctx.setLineDash([4, 3]);
      ctx.strokeStyle = project.arrows.color;
      ctx.lineWidth = 1.4;
      ctx.strokeRect(-destW / 2 - 6, -destH / 2 - 6, destW + 12, destH + 12);
      ctx.setLineDash([]);
    }
    ctx.restore();
  }
}

function pathCrop(
  ctx: CanvasRenderingContext2D,
  unit: Unit,
  destW: number,
  destH: number,
  box: { minX: number; minY: number; w: number; h: number },
) {
  ctx.beginPath();
  unit.crop.forEach((p, i) => {
    const x = ((p.x - box.minX) / Math.max(0.001, box.w) - 0.5) * destW;
    const y = ((p.y - box.minY) / Math.max(0.001, box.h) - 0.5) * destH;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
}
