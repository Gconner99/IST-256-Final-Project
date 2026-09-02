import type { Project } from "../core/types";
import { paintField } from "./field";

export async function exportStill(project: Project): Promise<void> {
  const { width, height, format, quality, filename } = project.exportSettings;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2d context required");
  paintField(ctx, project, width, height, null, false);
  const mime = format === "jpg" ? "image/jpeg" : "image/png";
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, mime, quality));
  if (!blob) throw new Error("export failed");
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename || "derive"}.${format}`;
  a.click();
  URL.revokeObjectURL(url);
}
