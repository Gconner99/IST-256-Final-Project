export interface DensityField {
  cols: number;
  rows: number;
  data: Float32Array;
}

export function emptyField(cols: number, rows: number, fill = 0.45): DensityField {
  return { cols, rows, data: new Float32Array(cols * rows).fill(fill) };
}

export function sampleAt(field: DensityField, u: number, v: number): number {
  const x = Math.min(field.cols - 1, Math.max(0, u * (field.cols - 1)));
  const y = Math.min(field.rows - 1, Math.max(0, v * (field.rows - 1)));
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const x1 = Math.min(field.cols - 1, x0 + 1);
  const y1 = Math.min(field.rows - 1, y0 + 1);
  const tx = x - x0;
  const ty = y - y0;
  const a = field.data[y0 * field.cols + x0] ?? 0;
  const b = field.data[y0 * field.cols + x1] ?? 0;
  const c = field.data[y1 * field.cols + x0] ?? 0;
  const d = field.data[y1 * field.cols + x1] ?? 0;
  return a * (1 - tx) * (1 - ty) + b * tx * (1 - ty) + c * (1 - tx) * ty + d * tx * ty;
}

export function fromImage(
  source: CanvasImageSource,
  cols = 80,
  rows = 60,
  contrast = 0.65,
): DensityField {
  const canvas = document.createElement("canvas");
  canvas.width = cols;
  canvas.height = rows;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return emptyField(cols, rows);
  ctx.drawImage(source, 0, 0, cols, rows);
  const pix = ctx.getImageData(0, 0, cols, rows).data;
  const data = new Float32Array(cols * rows);
  const k = 0.5 + contrast;
  for (let i = 0; i < data.length; i++) {
    const o = i * 4;
    const lum = ((pix[o] ?? 0) * 0.3 + (pix[o + 1] ?? 0) * 0.59 + (pix[o + 2] ?? 0) * 0.11) / 255;
    const dark = 1 - lum;
    data[i] = Math.min(1, Math.max(0, Math.pow(dark, k)));
  }
  return { cols, rows, data };
}

export function radialField(cols: number, rows: number, rng: () => number): DensityField {
  const field = emptyField(cols, rows, 0);
  const cx = 0.42 + rng() * 0.16;
  const cy = 0.4 + rng() * 0.16;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const u = x / cols;
      const v = y / rows;
      const d = Math.hypot((u - cx) * 1.1, (v - cy) * 1.2);
      const n = rng() * 0.18;
      field.data[y * cols + x] = Math.min(1, Math.max(0, 1.05 - d * 1.7 + n));
    }
  }
  return field;
}

export function activeBitmap(sources: { id: string; bitmap?: CanvasImageSource | null }[], id: string | null) {
  if (!id) return sources.find((s) => s.bitmap)?.bitmap ?? null;
  return sources.find((s) => s.id === id)?.bitmap ?? null;
}
