import { uid } from "../core/ids";
import type { MediaSource, PlaybackMode } from "../core/types";
import { isAudioFile, loadAudio } from "./audio";

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i;
const VIDEO_EXT = /\.(mp4|mov|webm|mkv|m4v|avi|ogv)$/i;

export function isVideoFile(file: File): boolean {
  return file.type.startsWith("video/") || VIDEO_EXT.test(file.name);
}

export function isImageFile(file: File): boolean {
  return file.type.startsWith("image/") || IMAGE_EXT.test(file.name);
}

export async function loadMediaFile(file: File): Promise<MediaSource> {
  if (isVideoFile(file)) return loadVideo(file);
  if (isImageFile(file)) return loadImage(file);
  if (isAudioFile(file)) return loadAudio(file);
  throw new Error(`Unsupported media: ${file.name}`);
}

export async function loadImageFromBlob(blob: Blob, name: string): Promise<MediaSource> {
  const file = new File([blob], name, { type: blob.type || "image/jpeg" });
  return loadImage(file);
}

async function loadImage(file: File): Promise<MediaSource> {
  const url = URL.createObjectURL(file);
  try {
    const bitmap = await createImageBitmap(file);
    return {
      id: uid("src"),
      name: file.name,
      kind: "image",
      fileName: file.name,
      mime: file.type,
      width: bitmap.width,
      height: bitmap.height,
      duration: 0,
      bitmap,
      objectUrl: url,
    };
  } catch {
    const img = await loadHtmlImage(url);
    return {
      id: uid("src"),
      name: file.name,
      kind: "image",
      fileName: file.name,
      mime: file.type,
      width: img.naturalWidth,
      height: img.naturalHeight,
      duration: 0,
      bitmap: img,
      objectUrl: url,
    };
  }
}

function loadHtmlImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Image failed to load"));
    img.src = url;
  });
}

function loadVideo(file: File): Promise<MediaSource> {
  const url = URL.createObjectURL(file);
  const video = document.createElement("video");
  video.src = url;
  video.crossOrigin = "anonymous";
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.preload = "auto";
  return new Promise((resolve, reject) => {
    const onReady = () => {
      resolve({
        id: uid("src"),
        name: file.name,
        kind: "video",
        fileName: file.name,
        mime: file.type || "video/mp4",
        width: video.videoWidth || 1280,
        height: video.videoHeight || 720,
        duration: Number.isFinite(video.duration) ? video.duration : 0,
        video,
        objectUrl: url,
      });
    };
    video.addEventListener("loadedmetadata", onReady, { once: true });
    video.addEventListener("error", () => reject(new Error(`Video failed: ${file.name}`)), {
      once: true,
    });
  });
}

export async function freezeVideoFrame(source: MediaSource): Promise<MediaSource | null> {
  if (source.kind !== "video" || !source.video) return null;
  const video = source.video;
  const bitmap = await createImageBitmap(video);
  return {
    id: uid("src"),
    name: `${source.name} @ ${video.currentTime.toFixed(2)}s`,
    kind: "image",
    fileName: source.fileName,
    mime: "image/png",
    width: bitmap.width,
    height: bitmap.height,
    duration: 0,
    bitmap,
    frozenFrame: bitmap,
  };
}

export function disposeSource(source: MediaSource) {
  if (source.objectUrl) URL.revokeObjectURL(source.objectUrl);
  source.video?.pause();
  source.audio?.pause();
  source.bitmap = null;
  source.video = null;
  source.audio = null;
  source.pcm = null;
  source.frozenFrame = null;
}

export function seekVideo(
  source: MediaSource,
  time: number,
  playback?: { playing?: boolean; freeze?: boolean; mode?: PlaybackMode; speed?: number },
) {
  if (source.kind !== "video" || !source.video) return;
  const video = source.video;
  const d = video.duration;
  if (!Number.isFinite(d) || d <= 0) return;
  const t = ((time % d) + d) % d;
  const playing = !!playback?.playing && !playback?.freeze;
  const forward = (playback?.mode ?? "forward") === "forward";
  const speed = playback?.speed ?? 1;
  const native = playing && forward && speed > 0.92 && speed < 1.08;
  const drift = Math.abs(video.currentTime - t);

  if (!playing) {
    if (!video.paused) video.pause();
    if (drift > 1 / 30) {
      try {
        video.currentTime = t;
      } catch {
        /* ignore seek until metadata is ready */
      }
    }
    return;
  }

  if (native) {
    if (video.playbackRate !== 1) video.playbackRate = 1;
    if (video.paused) void video.play().catch(() => undefined);
    if (drift > 0.35) {
      try {
        video.currentTime = t;
      } catch {
        /* ignore */
      }
    }
    return;
  }

  if (!video.paused) video.pause();
  const rate = Math.max(0.25, Math.min(4, Math.abs(speed) || 1));
  if (video.playbackRate !== rate) video.playbackRate = rate;
  if (drift > 1 / 30) {
    try {
      video.currentTime = t;
    } catch {
      /* ignore */
    }
  }
}
