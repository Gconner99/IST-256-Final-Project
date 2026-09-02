import { downloadBlob } from "../../core/project";
import type { DeriveProject } from "../core/types";
import { renderArrows } from "./arrows";
import { renderUnits } from "./collage";
import { renderPaper, renderSpectacle } from "./paper";
import { renderType } from "./type";

export function renderComposition(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  project: DeriveProject,
  selectedId: string | null = null,
) {
  ctx.save();
  ctx.clearRect(0, 0, w, h);
  renderPaper(ctx, w, h, project.paper, project.seed);
  renderUnits(ctx, w, h, project, selectedId);
  renderArrows(ctx, w, h, project);
  renderType(ctx, w, h, project);
  renderSpectacle(ctx, w, h, project.spectacle);
  ctx.restore();
}

export async function exportStill(project: DeriveProject): Promise<void> {
  const { width, height, format, quality, filename } = project.exportSettings;
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(64, width);
  canvas.height = Math.max(64, height);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("No 2d context");
  renderComposition(ctx, canvas.width, canvas.height, project, null);
  const mime = format === "jpg" ? "image/jpeg" : "image/png";
  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("export failed"))), mime, quality);
  });
  downloadBlob(`${filename}.${format === "jpg" ? "jpg" : "png"}`, blob);
}
