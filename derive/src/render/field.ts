import type { Project } from "../core/types";
import { paintArrows } from "./arrows";
import { paintUnits } from "./collage";
import { paintPaper } from "./paper";
import { paintType } from "./type";

export function paintField(
  ctx: CanvasRenderingContext2D,
  project: Project,
  w: number,
  h: number,
  selectedId: string | null,
  preview = false,
) {
  ctx.clearRect(0, 0, w, h);
  paintPaper(ctx, w, h, project.paper, project.drift.seed, preview);
  paintUnits(ctx, project, w, h, selectedId);
  paintArrows(ctx, project, w, h);
  paintType(ctx, project, w, h);
}

export function resizeCanvas(canvas: HTMLCanvasElement, host: HTMLElement) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const r = host.getBoundingClientRect();
  const w = Math.max(16, Math.floor(r.width * dpr));
  const h = Math.max(16, Math.floor(r.height * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
}
