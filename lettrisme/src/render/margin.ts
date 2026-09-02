import { datedCaption, nowCaption } from "../core/phrases";
import type { Project } from "../core/types";
import { cursiveLine } from "./asemic";

export function paintMargin(
  ctx: CanvasRenderingContext2D,
  project: Project,
  w: number,
  h: number,
  rng: () => number,
) {
  if (!project.caption.show) return;
  const cap =
    project.caption.dateMode === "custom" && project.caption.custom
      ? project.caption.custom
      : project.caption.dateMode === "now"
        ? nowCaption()
        : datedCaption(rng);
  const ink = project.plate === "scriptorium" ? "#b42318" : "#1a1612";
  cursiveLine(ctx, cap, w * 0.08, h - h * 0.045, Math.max(13, w * 0.014), ink, -0.04);
  if (project.caption.sign) {
    cursiveLine(ctx, "Isidore Isou", w * 0.72, h - h * 0.05, Math.max(14, w * 0.016), ink, -0.06);
    ctx.save();
    ctx.fillStyle = ink;
    ctx.font = `500 ${Math.max(11, w * 0.011)}px "IBM Plex Mono", monospace`;
    ctx.fillText(String(project.seed).slice(-2), w * 0.78, h - h * 0.028);
    ctx.restore();
  }
  if (project.plate === "alphabet" || project.plate === "tache") {
    ctx.save();
    ctx.fillStyle = "#3a342c";
    ctx.font = `400 ${Math.max(11, w * 0.012)}px "IBM Plex Mono", monospace`;
    ctx.fillText(`${project.caption.edition}/${project.caption.editionOf}`, w * 0.08, h - h * 0.028);
    ctx.restore();
  }
}
