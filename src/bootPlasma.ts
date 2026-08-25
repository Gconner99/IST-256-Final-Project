/** Software plasma — no WebGL. Paints even if the GPU driver is angry. */
export function startSoftPlasma(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return () => undefined;
  let alive = true;
  let t0 = performance.now();

  const fit = () => {
    const r = canvas.parentElement?.getBoundingClientRect();
    const w = Math.max(32, Math.min(280, Math.floor(r?.width || 280)));
    const h = Math.max(32, Math.min(160, Math.floor(r?.height || 160)));
    if (canvas.width !== w) canvas.width = w;
    if (canvas.height !== h) canvas.height = h;
  };

  const tick = (now: number) => {
    if (!alive || !ctx) return;
    fit();
    const w = canvas.width;
    const h = canvas.height;
    const img = ctx.createImageData(w, h);
    const d = img.data;
    const t = (now - t0) / 1000;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const u = x / w;
        const v = y / h;
        let n = Math.sin(u * 3.3 + t * 0.14) + Math.sin(v * 2.4 - t * 0.1);
        n += Math.sin((u * 0.7 + v) * 1.5 + t * 0.06);
        n = n / 3 * 0.5 + 0.5;
        const i = (y * w + x) * 4;
        d[i] = 20 + n * 200;
        d[i + 1] = 12 + n * 140;
        d[i + 2] = 28 + n * 90;
        d[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    requestAnimationFrame(tick);
  };

  fit();
  requestAnimationFrame(tick);
  return () => {
    alive = false;
  };
}
