import { AMBIANCE_GRADE, AMBIANCE_INK, AMBIANCE_WASH } from "../core/ambiances";
import type { DeriveProject, Unit } from "../core/types";
import { sourceSize, unitWorldPolygon } from "../core/units";

export function renderUnits(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  project: DeriveProject,
  selectedId: string | null,
) {
  const bitmaps = new Map<string, CanvasImageSource>();
  for (const s of project.sources) {
    if (s.bitmap) bitmaps.set(s.id, s.bitmap);
  }
  for (const unit of project.units) {
    drawUnit(ctx, w, h, unit, bitmaps.get(unit.sourceId), unit.id === selectedId);
  }
}

function drawUnit(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  unit: Unit,
  bitmap: CanvasImageSource | undefined,
  selected: boolean,
) {
  const world = unitWorldPolygon(unit, w, h);
  if (world.length < 3) return;

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(world[0]!.x + 5, world[0]!.y + 7);
  for (let i = 1; i < world.length; i++) ctx.lineTo(world[i]!.x + 5, world[i]!.y + 7);
  ctx.closePath();
  ctx.fillStyle = "rgba(20, 12, 8, 0.28)";
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(world[0]!.x, world[0]!.y);
  for (let i = 1; i < world.length; i++) ctx.lineTo(world[i]!.x, world[i]!.y);
  ctx.closePath();
  ctx.save();
  ctx.fillStyle = "#efe4c4";
  ctx.lineWidth = Math.max(4, Math.min(w, h) * 0.006);
  ctx.strokeStyle = "#efe4c4";
  ctx.lineJoin = "round";
  ctx.stroke();
  ctx.fill();
  ctx.clip();

  if (bitmap) {
    const { w: sw, h: sh } = sourceSize(bitmap);
    const minX = Math.min(...world.map((p) => p.x));
    const minY = Math.min(...world.map((p) => p.y));
    const maxX = Math.max(...world.map((p) => p.x));
    const maxY = Math.max(...world.map((p) => p.y));
    ctx.filter = AMBIANCE_GRADE[unit.ambiance];
    ctx.drawImage(bitmap, unit.srcX * sw, unit.srcY * sh, unit.srcW * sw, unit.srcH * sh, minX, minY, maxX - minX, maxY - minY);
    ctx.filter = "none";
  } else {
    ctx.fillStyle = "#c8b896";
    ctx.fill();
    ctx.fillStyle = "#5a4a38";
    ctx.font = `${Math.max(10, Math.min(w, h) * 0.012)}px "IBM Plex Mono", monospace`;
    ctx.fillText("MEDIA MISSING", world[0]!.x, world[0]!.y);
  }

  ctx.fillStyle = AMBIANCE_WASH[unit.ambiance];
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(world[0]!.x, world[0]!.y);
  for (let i = 1; i < world.length; i++) ctx.lineTo(world[i]!.x, world[i]!.y);
  ctx.closePath();
  ctx.strokeStyle = selected ? "#c41e1e" : AMBIANCE_INK[unit.ambiance];
  ctx.lineWidth = selected ? 2.4 : 1.15;
  ctx.stroke();
  ctx.restore();

  const cx = unit.x * w;
  const cy = unit.y * h;
  const size = Math.min(w, h) * 0.012 * (0.85 + unit.scale * 0.2);
  ctx.save();
  ctx.font = `${size}px "IBM Plex Mono", monospace`;
  ctx.fillStyle = "#2a1c14";
  ctx.textAlign = "center";
  ctx.fillText(unit.hub ? "⊕" : unit.id.replace("u_", "U."), cx, cy + unit.scale * Math.min(w, h) * 0.09);
  if (unit.hub) {
    ctx.strokeStyle = "#c41e1e";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(cx, cy, Math.min(w, h) * 0.018, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}
