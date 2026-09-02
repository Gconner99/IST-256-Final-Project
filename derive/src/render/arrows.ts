import type { Project, Unit } from "../core/types";

export function paintArrows(ctx: CanvasRenderingContext2D, project: Project, w: number, h: number) {
  const byId = new Map(project.units.map((u) => [u.id, u]));
  for (const arrow of project.path.arrows) {
    const from = byId.get(arrow.fromId);
    const to = byId.get(arrow.toId);
    if (!from || !to) continue;
    drawArrow(ctx, from, to, w, h, project, arrow.kind === "possible");
  }
}

function drawArrow(
  ctx: CanvasRenderingContext2D,
  from: Unit,
  to: Unit,
  w: number,
  h: number,
  project: Project,
  ghost: boolean,
) {
  const x1 = from.x * w;
  const y1 = from.y * h;
  const x2 = to.x * w;
  const y2 = to.y * h;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const startPad = 28 * from.scale;
  const endPad = 30 * to.scale;
  const ax = x1 + ux * startPad;
  const ay = y1 + uy * startPad;
  const bx = x2 - ux * endPad;
  const by = y2 - uy * endPad;
  const mx = (ax + bx) / 2 + uy * 18;
  const my = (ay + by) / 2 - ux * 18;

  ctx.save();
  ctx.strokeStyle = project.arrows.color;
  ctx.fillStyle = project.arrows.color;
  ctx.globalAlpha = ghost ? 0.32 : 0.92;
  ctx.lineWidth = (ghost ? 1.4 : 3.1) * project.arrows.thickness;
  ctx.lineCap = "round";
  if (ghost || project.arrows.dash > 0.2) {
    ctx.setLineDash([7, 6 * project.arrows.dash + 2]);
  }
  ctx.beginPath();
  ctx.moveTo(ax, ay);
  ctx.quadraticCurveTo(mx, my, bx, by);
  ctx.stroke();
  ctx.setLineDash([]);

  const angle = Math.atan2(by - my, bx - mx);
  const size = ghost ? 8 : 12 * project.arrows.thickness;
  ctx.beginPath();
  ctx.moveTo(bx, by);
  ctx.lineTo(
    bx - Math.cos(angle - 0.4) * size,
    by - Math.sin(angle - 0.4) * size,
  );
  ctx.lineTo(
    bx - Math.cos(angle + 0.4) * size,
    by - Math.sin(angle + 0.4) * size,
  );
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
