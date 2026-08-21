/** Build a generation prompt. If palette colors are given, the model is asked for a new image inspired by them — not a copy of the upload. */
export function buildPrompt(userPrompt: string, palette: string[] = [], useSource = false): string {
  const base = userPrompt.trim() || "experimental photographic still, cinematic light, analog film";
  if (!useSource || palette.length === 0) {
    return `${base}. Original artwork, not a collage of existing photos.`;
  }
  const colors = palette.join(", ");
  return `${base}. Create a NEW original image inspired by a reference still whose palette is ${colors}. Keep a similar mood, lighting, and composition, but invent new subject matter and details. Not a copy, not a filter on the original. Experimental photographic / video-art still.`;
}

export function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0")).join("")}`;
}

export function samplePaletteFromImageData(data: Uint8ClampedArray, width: number, height: number, count = 4): string[] {
  const points = [
    [0.2, 0.2],
    [0.8, 0.2],
    [0.5, 0.5],
    [0.2, 0.8],
    [0.8, 0.8],
  ].slice(0, count);
  const seen = new Set<string>();
  const out: string[] = [];
  for (const [ux, uy] of points) {
    const x = Math.min(width - 1, Math.floor(ux * width));
    const y = Math.min(height - 1, Math.floor(uy * height));
    const i = (y * width + x) * 4;
    const hex = rgbToHex(data[i], data[i + 1], data[i + 2]);
    if (!seen.has(hex)) {
      seen.add(hex);
      out.push(hex);
    }
  }
  return out;
}

export function samplePalette(source: CanvasImageSource): string[] {
  const canvas = document.createElement("canvas");
  canvas.width = 24;
  canvas.height = 24;
  const ctx = canvas.getContext("2d");
  if (!ctx) return [];
  try {
    ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
  } catch {
    return [];
  }
  const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
  return samplePaletteFromImageData(img.data, canvas.width, canvas.height);
}

export async function generateStill(opts: {
  prompt: string;
  seed: number;
  width?: number;
  height?: number;
}): Promise<Blob> {
  const width = Math.max(256, Math.min(1280, opts.width ?? 1024));
  const height = Math.max(256, Math.min(1280, opts.height ?? 1024));
  const url =
    `https://image.pollinations.ai/prompt/${encodeURIComponent(opts.prompt)}` +
    `?width=${width}&height=${height}&nologo=true&enhance=true&seed=${opts.seed >>> 0}&model=flux`;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 90_000);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) throw new Error(`Generation failed (${res.status}). Try a shorter prompt.`);
    const blob = await res.blob();
    if (!blob.type.startsWith("image/") && blob.size < 1000) {
      throw new Error("Generation returned no image. Try again.");
    }
    return blob;
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error("Generation timed out. Check your connection and try again.");
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}
