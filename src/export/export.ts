import JSZip from "jszip";
import {
  BufferTarget,
  CanvasSource,
  Mp4OutputFormat,
  Output,
  Quality,
  getFirstEncodableVideoCodec,
  type VideoCodec,
} from "mediabunny";
import type { Project } from "../core/types";
import { downloadBlob } from "../core/project";
import { evenSize } from "../core/random";
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
  const blob = await recordCanvasVideo(renderer, project, pickWebmMime(), onProgress);
  downloadBlob(`${project.exportSettings.filename}.webm`, blob);
}

export async function exportMp4(
  renderer: Renderer,
  project: Project,
  onProgress?: (i: number, n: number) => void,
): Promise<string> {
  try {
    await exportMp4WebCodecs(renderer, project, onProgress);
    return "mp4 clip saved";
  } catch (err) {
    const mp4Mime = pickMp4Mime();
    if (mp4Mime) {
      const blob = await recordCanvasVideo(renderer, project, mp4Mime, onProgress);
      downloadBlob(`${project.exportSettings.filename}.mp4`, blob);
      return "mp4 clip saved";
    }
    await exportWebM(renderer, project, onProgress);
    const why = err instanceof Error ? err.message : "MP4 encoder unavailable";
    return `MP4 not available (${why}) — saved WebM instead`;
  }
}

async function exportMp4WebCodecs(
  renderer: Renderer,
  project: Project,
  onProgress?: (i: number, n: number) => void,
): Promise<void> {
  const { fps, duration, filename, bitrate } = project.exportSettings;
  const width = evenSize(project.exportSettings.width);
  const height = evenSize(project.exportSettings.height);
  const quality = new Quality({ bitrate: Math.max(2, bitrate) * 1_000_000 });
  const format = new Mp4OutputFormat({ fastStart: "in-memory" });
  const prefer: VideoCodec[] = ["avc", "hevc", "vp9", "av1"];
  const codec = await getFirstEncodableVideoCodec(
    prefer.filter((c) => format.getSupportedVideoCodecs().includes(c)),
    { width, height, quality },
  );
  if (!codec) throw new Error("this browser cannot encode MP4");

  const target = new BufferTarget();
  const output = new Output({ format, target });
  const canvas = renderer.canvas;
  const prevW = canvas.width;
  const prevH = canvas.height;
  canvas.width = width;
  canvas.height = height;
  const videoSource = new CanvasSource(canvas, {
    codec,
    quality,
    keyFrameInterval: 1,
  });
  output.addVideoTrack(videoSource, { frameRate: fps });
  renderer.resetTemporal();
  try {
    await output.start();
    const n = Math.max(1, Math.round(duration * fps));
    const frameDur = 1 / fps;
    for (let i = 0; i < n; i++) {
      const t = mediaTime(i / fps, duration, project.playback.mode, 1, true);
      onProgress?.(i, n);
      renderer.render(project, t, { width, height, quality: "export", vignette: 0 });
      await videoSource.add(i * frameDur, frameDur, { keyFrame: i % fps === 0 });
    }
    await output.finalize();
  } finally {
    canvas.width = prevW;
    canvas.height = prevH;
  }
  const buffer = target.buffer;
  if (!buffer) throw new Error("MP4 mux failed");
  downloadBlob(`${filename}.mp4`, new Blob([buffer], { type: "video/mp4" }));
}

async function recordCanvasVideo(
  renderer: Renderer,
  project: Project,
  mime: string,
  onProgress?: (i: number, n: number) => void,
): Promise<Blob> {
  const { fps, duration, quality } = project.exportSettings;
  const width = evenSize(project.exportSettings.width);
  const height = evenSize(project.exportSettings.height);
  const recCanvas = document.createElement("canvas");
  recCanvas.width = width;
  recCanvas.height = height;
  const ctx = recCanvas.getContext("2d");
  if (!ctx) throw new Error("No 2d context");
  const stream = recCanvas.captureStream(0);
  const track = stream.getVideoTracks()[0] as CanvasCaptureMediaStreamTrack & { requestFrame?: () => void };
  const rec = new MediaRecorder(stream, {
    mimeType: mime,
    videoBitsPerSecond: Math.max(2, project.exportSettings.bitrate) * 1_000_000,
  });
  const chunks: Blob[] = [];
  rec.ondataavailable = (e) => {
    if (e.data.size) chunks.push(e.data);
  };
  renderer.resetTemporal();
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
  stream.getTracks().forEach((tr) => tr.stop());
  return new Blob(chunks, { type: mime });
}

function pickWebmMime(): string {
  const opts = ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
  return opts.find((m) => typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(m)) ?? "video/webm";
}

function pickMp4Mime(): string | null {
  if (typeof MediaRecorder === "undefined") return null;
  const opts = ["video/mp4;codecs=avc1.42E01E", "video/mp4;codecs=avc1", "video/mp4"];
  return opts.find((m) => MediaRecorder.isTypeSupported(m)) ?? null;
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function runExport(
  renderer: Renderer,
  project: Project,
  time: number,
  onProgress?: (i: number, n: number) => void,
): Promise<string | void> {
  const fmt = project.exportSettings.format;
  if (fmt === "mp4") return exportMp4(renderer, project, onProgress);
  if (fmt === "webm") return exportWebM(renderer, project, onProgress);
  if (fmt === "sequence") return exportImageSequence(renderer, project, onProgress);
  return exportStill(renderer, project, time);
}
