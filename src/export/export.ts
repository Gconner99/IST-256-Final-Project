import JSZip from "jszip";
import type { Project } from "../core/types";
import { downloadBlob } from "../core/project";
import { mediaTime } from "../core/timeline";
import type { Renderer } from "../engine/renderer";

export async function exportStill(renderer: Renderer, project: Project, time: number): Promise<void> {
  const { width, height, format, quality, filename } = project.exportSettings;
  const mime = format === "jpg" ? "image/jpeg" : "image/png";
  const blob = await renderer.capture(project, time, width, height, mime, quality);
  downloadBlob(`${filename}.${format === "jpg" ? "jpg" : "png"}`, blob);
}

export async function exportImageSequence(
  renderer: Renderer,
  project: Project,
  onProgress?: (i: number, n: number) => void,
): Promise<void> {
  const { width, height, fps, duration, filename, quality } = project.exportSettings;
  const n = Math.max(1, Math.round(duration * fps));
  const zip = new JSZip();
  const folder = zip.folder(filename) ?? zip;
  for (let i = 0; i < n; i++) {
    const t = i / fps;
    onProgress?.(i, n);
    const blob = await renderer.capture(project, t, width, height, "image/png", quality);
    const buf = await blob.arrayBuffer();
    folder.file(`${filename}_${String(i).padStart(5, "0")}.png`, buf);
  }
  const out = await zip.generateAsync({ type: "blob" });
  downloadBlob(`${filename}_sequence.zip`, out);
}

export async function exportWebM(
  renderer: Renderer,
  project: Project,
  onProgress?: (i: number, n: number) => void,
): Promise<void> {
  const { width, height, fps, duration, filename, quality } = project.exportSettings;
  const recCanvas = document.createElement("canvas");
  recCanvas.width = width;
  recCanvas.height = height;
  const ctx = recCanvas.getContext("2d");
  if (!ctx) throw new Error("No 2d context");
  const stream = recCanvas.captureStream(0);
  const track = stream.getVideoTracks()[0] as CanvasCaptureMediaStreamTrack & { requestFrame?: () => void };
  const mime = pickWebmMime();
  const rec = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: Math.max(2, project.exportSettings.bitrate) * 1_000_000 });
  const chunks: Blob[] = [];
  rec.ondataavailable = (e) => {
    if (e.data.size) chunks.push(e.data);
  };
  rec.start();
  const n = Math.max(1, Math.round(duration * fps));
  for (let i = 0; i < n; i++) {
    const t = mediaTime(i / fps, duration, project.playback.mode, 1, true);
    onProgress?.(i, n);
    const blob = await renderer.capture(project, t, width, height, "image/png", quality);
    const bmp = await createImageBitmap(blob);
    ctx.drawImage(bmp, 0, 0, width, height);
    bmp.close();
    track.requestFrame?.();
    await wait(Math.max(8, 1000 / fps));
  }
  await new Promise<void>((resolve) => {
    rec.onstop = () => resolve();
    rec.stop();
  });
  stream.getTracks().forEach((t) => t.stop());
  const out = new Blob(chunks, { type: mime });
  downloadBlob(`${filename}.webm`, out);
}

function pickWebmMime(): string {
  const opts = ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
  return opts.find((m) => typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(m)) ?? "video/webm";
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function runExport(
  renderer: Renderer,
  project: Project,
  time: number,
  onProgress?: (i: number, n: number) => void,
) {
  const fmt = project.exportSettings.format;
  if (fmt === "webm") return exportWebM(renderer, project, onProgress);
  if (fmt === "sequence") return exportImageSequence(renderer, project, onProgress);
  return exportStill(renderer, project, time);
}
