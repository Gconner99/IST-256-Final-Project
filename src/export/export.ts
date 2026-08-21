import JSZip from "jszip";
import {
  BufferTarget,
  Mp4OutputFormat,
  Output,
  Quality,
  VideoSample,
  VideoSampleSource,
  getFirstEncodableVideoCodec,
  type VideoCodec,
} from "mediabunny";
import type { Project } from "../core/types";
import { downloadBlob } from "../core/project";
import { evenSize, fitEven } from "../core/random";
import { mediaTime } from "../core/timeline";
import type { Renderer } from "../engine/renderer";

const CLIP_MAX = 960;
const FULL_MAX = 1920;

export function videoFrameSize(project: Project, clip = false) {
  const max = clip ? CLIP_MAX : FULL_MAX;
  return fitEven(project.exportSettings.width, project.exportSettings.height, max, max);
}

export function clipFrameSize(project: Project) {
  return videoFrameSize(project, true);
}

export async function exportStill(renderer: Renderer, project: Project, time: number): Promise<void> {
  const { width, height, format, quality, filename } = project.exportSettings;
  const mime = format === "jpg" ? "image/jpeg" : "image/png";
  const blob = await renderer.capture(project, time, evenSize(width), evenSize(height), mime, quality);
  downloadBlob(`${filename}.${format === "jpg" ? "jpg" : "png"}`, blob);
}

export async function exportImageSequence(
  renderer: Renderer,
  project: Project,
  onProgress?: (i: number, n: number) => void,
): Promise<void> {
  const { fps, duration, filename, quality } = project.exportSettings;
  const { width, height } = videoFrameSize(project, false);
  const n = Math.max(1, Math.round(duration * fps));
  const zip = new JSZip();
  const folder = zip.folder(filename) ?? zip;
  const frame = document.createElement("canvas");
  for (let i = 0; i < n; i++) {
    const t = i / fps;
    onProgress?.(i, n);
    renderer.paintFrame(project, t, width, height, frame);
    const blob = await canvasBlob(frame, "image/png", quality);
    folder.file(`${filename}_${String(i).padStart(5, "0")}.png`, await blob.arrayBuffer());
    await yieldFrame();
  }
  const out = await zip.generateAsync({ type: "blob" });
  downloadBlob(`${filename}_sequence.zip`, out);
}

export async function exportWebM(
  renderer: Renderer,
  project: Project,
  onProgress?: (i: number, n: number) => void,
  clip = false,
): Promise<void> {
  const blob = await recordCanvasVideo(renderer, project, pickWebmMime(), onProgress, clip);
  downloadBlob(`${project.exportSettings.filename}.webm`, blob);
}

export async function exportMp4(
  renderer: Renderer,
  project: Project,
  onProgress?: (i: number, n: number) => void,
  clip = false,
): Promise<string> {
  try {
    await exportMp4WebCodecs(renderer, project, onProgress, clip);
    return "mp4 clip saved";
  } catch (err) {
    const mp4Mime = pickMp4Mime();
    if (mp4Mime) {
      const blob = await recordCanvasVideo(renderer, project, mp4Mime, onProgress, clip);
      downloadBlob(`${project.exportSettings.filename}.mp4`, blob);
      return "mp4 clip saved";
    }
    await exportWebM(renderer, project, onProgress, clip);
    const why = err instanceof Error ? err.message : "MP4 encoder unavailable";
    return `MP4 not available (${why}) — saved WebM instead`;
  }
}

async function exportMp4WebCodecs(
  renderer: Renderer,
  project: Project,
  onProgress?: (i: number, n: number) => void,
  clip = false,
): Promise<void> {
  if (typeof VideoEncoder === "undefined") throw new Error("this browser has no video encoder");
  const fps = Math.min(24, Math.max(12, project.exportSettings.fps || 24));
  const duration = Math.min(8, Math.max(1, project.exportSettings.duration || 4));
  const { width, height } = videoFrameSize(project, clip);
  const quality = new Quality({ bitrate: Math.max(3, Math.min(8, project.exportSettings.bitrate)) * 1_000_000 });
  const format = new Mp4OutputFormat({ fastStart: "in-memory" });
  const prefer: VideoCodec[] = ["avc", "hevc"];
  const codec = await getFirstEncodableVideoCodec(
    prefer.filter((c) => format.getSupportedVideoCodecs().includes(c)),
    { width, height, quality },
  );
  if (!codec) throw new Error("this browser cannot encode H.264");

  const target = new BufferTarget();
  const output = new Output({ format, target });
  const videoSource = new VideoSampleSource({
    codec,
    quality,
    keyFrameInterval: 1,
  });
  output.addVideoTrack(videoSource, { frameRate: fps });
  renderer.resetTemporal();
  const frame = document.createElement("canvas");
  await output.start();
  try {
    const n = Math.max(1, Math.round(duration * fps));
    const frameDur = 1 / fps;
    for (let i = 0; i < n; i++) {
      const t = mediaTime(i / fps, duration, project.playback.mode, 1, true);
      onProgress?.(i, n);
      renderer.paintFrame(project, t, width, height, frame);
      const sample = new VideoSample(frame, { timestamp: i * frameDur, duration: frameDur });
      await videoSource.add(sample, { keyFrame: i % fps === 0 });
      sample.close();
      await yieldFrame();
    }
    await output.finalize();
  } catch (err) {
    try {
      await output.cancel();
    } catch {
      /* ignore */
    }
    throw err;
  }
  const buffer = target.buffer;
  if (!buffer || buffer.byteLength < 32) throw new Error("MP4 mux produced an empty file");
  const copy = buffer.slice(0);
  downloadBlob(`${project.exportSettings.filename}.mp4`, new Blob([copy], { type: "video/mp4" }));
}

async function recordCanvasVideo(
  renderer: Renderer,
  project: Project,
  mime: string,
  onProgress?: (i: number, n: number) => void,
  clip = false,
): Promise<Blob> {
  const fps = Math.min(24, Math.max(12, project.exportSettings.fps || 24));
  const duration = Math.min(8, Math.max(1, project.exportSettings.duration || 4));
  const { width, height } = videoFrameSize(project, clip);
  const recCanvas = document.createElement("canvas");
  recCanvas.width = width;
  recCanvas.height = height;
  const ctx = recCanvas.getContext("2d");
  if (!ctx) throw new Error("No 2d context");
  const stream = recCanvas.captureStream(0);
  const track = stream.getVideoTracks()[0] as CanvasCaptureMediaStreamTrack & { requestFrame?: () => void };
  const rec = new MediaRecorder(stream, {
    mimeType: mime,
    videoBitsPerSecond: Math.max(3, Math.min(8, project.exportSettings.bitrate)) * 1_000_000,
  });
  const chunks: Blob[] = [];
  rec.ondataavailable = (e) => {
    if (e.data.size) chunks.push(e.data);
  };
  renderer.resetTemporal();
  rec.start(200);
  const n = Math.max(1, Math.round(duration * fps));
  const frame = document.createElement("canvas");
  for (let i = 0; i < n; i++) {
    const t = mediaTime(i / fps, duration, project.playback.mode, 1, true);
    onProgress?.(i, n);
    renderer.paintFrame(project, t, width, height, frame);
    ctx.drawImage(frame, 0, 0, width, height);
    track.requestFrame?.();
    await yieldFrame();
  }
  await new Promise<void>((resolve) => {
    rec.onstop = () => resolve();
    rec.stop();
  });
  stream.getTracks().forEach((tr) => tr.stop());
  if (!chunks.length) throw new Error("recorder produced no data");
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

function yieldFrame() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

function canvasBlob(canvas: HTMLCanvasElement, mime: string, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) reject(new Error("frame capture failed"));
      else resolve(blob);
    }, mime, quality);
  });
}

export async function runExport(
  renderer: Renderer,
  project: Project,
  time: number,
  onProgress?: (i: number, n: number) => void,
  clip = false,
): Promise<string | void> {
  const fmt = project.exportSettings.format;
  if (fmt === "mp4") return exportMp4(renderer, project, onProgress, clip);
  if (fmt === "webm") return exportWebM(renderer, project, onProgress, clip);
  if (fmt === "sequence") return exportImageSequence(renderer, project, onProgress);
  return exportStill(renderer, project, time);
}
