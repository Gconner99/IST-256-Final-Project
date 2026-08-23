import { evenSize } from "../core/random";

/**
 * Anonymous Pollinations currently only serves Sana (flux / zimage / turbo all
 * remap to it). Sana is fast at ≤768px; larger frames and `enhance=true` are
 * what made Generate feel broken (30–90s hangs, mangled prompts).
 */
export const GEN_MAX_SIDE = 768;
export const GEN_MODEL = "sana";

const INKS: { name: string; r: number; g: number; b: number }[] = [
  { name: "near-black", r: 12, g: 10, b: 12 },
  { name: "charcoal", r: 40, g: 38, b: 42 },
  { name: "warm cream", r: 232, g: 220, b: 192 },
  { name: "paper white", r: 240, g: 236, b: 228 },
  { name: "sodium amber", r: 220, g: 140, b: 48 },
  { name: "rust", r: 160, g: 64, b: 40 },
  { name: "deep teal", r: 20, g: 64, b: 72 },
  { name: "forest green", r: 36, g: 72, b: 40 },
  { name: "moss", r: 88, g: 120, b: 64 },
  { name: "sky blue", r: 140, g: 176, b: 220 },
  { name: "navy", r: 24, g: 36, b: 72 },
  { name: "dusty rose", r: 196, g: 120, b: 132 },
  { name: "magenta", r: 200, g: 48, b: 120 },
  { name: "gold", r: 212, g: 176, b: 64 },
  { name: "olive", r: 96, g: 100, b: 48 },
];

/** Fit the export frame into Sana's 768px box, even on both axes. */
export function snapGenSize(width = 768, height = 768): { width: number; height: number } {
  const w = Math.max(1, width);
  const h = Math.max(1, height);
  const s = GEN_MAX_SIDE / Math.max(w, h);
  return { width: evenSize(w * s, 256), height: evenSize(h * s, 256) };
}

export function hexToInk(hex: string): string {
  const raw = hex.startsWith("#") ? hex.slice(1) : hex;
  const n = parseInt(raw.length === 3 ? raw.split("").map((c) => c + c).join("") : raw, 16);
  if (Number.isNaN(n)) return "muted earth";
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  let best = INKS[0];
  let dist = 1e9;
  for (const ink of INKS) {
    const d = (r - ink.r) ** 2 + (g - ink.g) ** 2 + (b - ink.b) ** 2;
    if (d < dist) {
      dist = d;
      best = ink;
    }
  }
  return best.name;
}

/** Visual prompt for the image model. Keep it photographic — instruction-speak makes worse stills. */
export function buildPrompt(userPrompt: string, palette: string[] = [], useSource = false): string {
  const base = userPrompt.trim() || "experimental photographic still, cinematic light, analog film";
  const craft = "still photograph, analog film grain, cinematic lighting, sharp detail";
  if (!useSource || palette.length === 0) return `${base}, ${craft}`;
  const inks = palette.map(hexToInk).filter((n, i, a) => a.indexOf(n) === i).slice(0, 4);
  return `${base}, palette of ${inks.join(", ")}, ${craft}`;
}

export function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0")).join("")}`;
}

export function samplePaletteFromImageData(data: Uint8ClampedArray, width: number, height: number, count = 4): string[] {
  const seen: { hex: string; r: number; g: number; b: number }[] = [];
  for (let gy = 0; gy < 3; gy++) {
    for (let gx = 0; gx < 3; gx++) {
      const x = Math.min(width - 1, Math.floor(((gx + 0.5) / 3) * width));
      const y = Math.min(height - 1, Math.floor(((gy + 0.5) / 3) * height));
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const hex = rgbToHex(r, g, b);
      const dup = seen.some((s) => (s.r - r) ** 2 + (s.g - g) ** 2 + (s.b - b) ** 2 < 1400);
      if (!dup) seen.push({ hex, r, g, b });
    }
  }
  return seen.slice(0, count).map((s) => s.hex);
}

export function samplePalette(source: CanvasImageSource): string[] {
  const canvas = document.createElement("canvas");
  canvas.width = 48;
  canvas.height = 48;
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

function looksLikeImage(bytes: Uint8Array, type: string): boolean {
  if (bytes.length < 24) return false;
  if (bytes[0] === 0xff && bytes[1] === 0xd8) return true; // JPEG
  if (bytes[0] === 0x89 && bytes[1] === 0x50) return true; // PNG
  if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[8] === 0x57) return true; // WEBP
  return type.startsWith("image/") && bytes.length > 4000;
}

export function stillUrl(prompt: string, seed: number, width: number, height: number, model = GEN_MODEL): string {
  const text = prompt.length > 400 ? prompt.slice(0, 400) : prompt;
  const query =
    `width=${width}&height=${height}&nologo=true&enhance=false&private=true` +
    `&seed=${seed >>> 0}&model=${encodeURIComponent(model)}`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(text)}?${query}`;
}

async function fetchStill(url: string, ms: number): Promise<Blob> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: { Accept: "image/*" } });
    if (!res.ok) {
      if (res.status === 429 || res.status >= 500) {
        throw new Error(`busy:${res.status}`);
      }
      throw new Error(`Generation failed (${res.status}). Try a shorter prompt.`);
    }
    const buf = await res.arrayBuffer();
    const bytes = new Uint8Array(buf);
    const type = res.headers.get("content-type") || "";
    if (!looksLikeImage(bytes, type)) {
      throw new Error("Generation returned no image. Try again.");
    }
    const mime = type.startsWith("image/") ? type.split(";")[0] : "image/jpeg";
    return new Blob([buf], { type: mime });
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error("Generation timed out. Check your connection and try again.");
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

export async function generateStill(opts: {
  prompt: string;
  seed: number;
  width?: number;
  height?: number;
  onStatus?: (msg: string) => void;
}): Promise<Blob> {
  const { width, height } = snapGenSize(opts.width ?? 768, opts.height ?? 768);
  const prompt = opts.prompt.trim() || "experimental photographic still, cinematic light, analog film";
  let last: Error | null = null;
  for (let attempt = 0; attempt < 2; attempt++) {
    opts.onStatus?.(attempt === 0 ? "generating new image…" : "still working, trying once more…");
    try {
      return await fetchStill(stillUrl(prompt, opts.seed + attempt * 7919, width, height), attempt === 0 ? 22_000 : 30_000);
    } catch (err) {
      last = err instanceof Error ? err : new Error(String(err));
    }
  }
  const msg = last?.message.startsWith("busy:")
    ? "The image service was busy. Try again in a moment."
    : last?.message;
  throw new Error(msg || "Generation failed. Try a shorter prompt.");
}
