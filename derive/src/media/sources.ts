import { uid } from "../core/ids";
import type { MediaSource } from "../core/types";

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|bmp|tiff?|avif)$/i;

export function isImageFile(file: File): boolean {
  return file.type.startsWith("image/") || IMAGE_EXT.test(file.name);
}

export async function loadReference(file: File): Promise<MediaSource> {
  if (!isImageFile(file)) throw new Error(`Not an image: ${file.name}`);
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

export function disposeSource(source: MediaSource) {
  if (source.objectUrl) URL.revokeObjectURL(source.objectUrl);
  source.bitmap = null;
}
