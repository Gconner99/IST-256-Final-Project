import type { DeriveProject, Passage, Point, Unit } from "../core/types";

const VERMILLION = "#c41e1e";
const VERMILLION_INK = "#8a1414";

export function renderArrows(ctx: CanvasRenderingContext2D, w: number, h: number, project: DeriveProject) {
  const byId = new Map(project.units.map((u) => [u.id, u]));
  const thick = 2.2 + project.arrows.thickness * 5.5;
  for (const p of project.passages) {
    const a = byId.get(p.fromId);
    const b = byId.get(p.toId);
    if (!a || !b) continue;
    drawPassage(ctx, w, h, a, b, p, thick, project.arrows.curve);
  }
}

function drawPassage(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  a: Unit,
  b: Unit,
  p: Passage,
  thickness: number,
  curve: number,
) {
  const p0: Point = { x: a.x * w, y: a.y * h };
  const p2: Point = { x: b.x * w, y: b.y * h };
  const dx = p2.x - p0.x;
  const dy = p2.y - p0.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const bulge = curve * len * 0.32 * p.bend;
  const p1: Point = { x: (p0.x + p2.x) / 2 + nx * bulge, y: (p0.y + p2.y) / 2 + ny * bulge };
  const tEnd = 0.86;
  const end = bezier(p0, p1, p2, tEnd);
  const tan = bezierTan(p0, p1, p2, tEnd);

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.quadraticCurveTo(p1.x, p1.y, end.x, end.y);
  ctx.strokeStyle = p.kind === "possible" ? VERMILLION_INK : VERMILLION;
  ctx.globalAlpha = p.kind === "possible" ? 0.72 : 0.92;
  ctx.lineWidth = p.kind === "possible" ? thickness * 0.72 : thickness;
  ctx.lineCap = "butt";
  ctx.lineJoin = "miter";
  ctx.stroke();

  const head = 7 + thickness * 1.6;
  const ang = Math.atan2(tan.y, tan.x);
  ctx.beginPath();
  ctx.moveTo(end.x + Math.cos(ang) * head, end.y + Math.sin(ang) * head);
  ctx.lineTo(end.x + Math.cos(ang + 2.55) * head * 0.72, end.y + Math.sin(ang + 2.55) * head * 0.72);
  ctx.lineTo(end.x + Math.cos(ang - 2.55) * head * 0.72, end.y + Math.sin(ang - 2.55) * head * 0.72);
  ctx.closePath();
  ctx.fillStyle = p.kind === "possible" ? VERMILLION_INK : VERMILLION;
  ctx.fill();
  ctx.restore();
}

function bezier(p0: Point, p1: Point, p2: Point, t: number): Point {
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
  };
}

function bezierTan(p0: Point, p1: Point, p2: Point, t: number): Point {
  return {
    x: 2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x),
    y: 2 * (1 - t) * (p1.y - p0.y) + 2 * t * (p2.y - p1.y),
  };
}
