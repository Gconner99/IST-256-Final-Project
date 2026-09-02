
export function asemicRow(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  rng: () => number,
  opts: { chaos: number; weight: number; scale: number },
) {
  const step = 7 + opts.scale * 10;
  ctx.beginPath();
  ctx.lineWidth = opts.weight;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  let px = x;
  let py = y;
  ctx.moveTo(px, py);
  const end = x + width;
  while (px < end) {
    const nx = px + step * (0.55 + rng() * 0.7);
    const rise = (rng() - 0.5) * (6 + opts.chaos * 16) * opts.scale;
    const ny = y + rise;
    if (rng() < 0.1 + opts.chaos * 0.18) {
      ctx.bezierCurveTo(px + 3, y - 11 * opts.scale, nx - 2, y + 12 * opts.scale, nx, ny);
    } else {
      ctx.quadraticCurveTo((px + nx) / 2, y + (rng() - 0.5) * 14 * opts.chaos, nx, ny);
    }
    px = nx;
    py = ny;
  }
  ctx.stroke();
}

export function microScriptFill(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  rng: () => number,
  density: number,
  color = "rgba(10,10,12,0.82)",
) {
  ctx.save();
  ctx.strokeStyle = color;
  const rowH = 3.2;
  const rows = Math.floor(h / rowH);
  for (let r = 0; r < rows; r++) {
    if (rng() > density) continue;
    const yy = y + 2 + r * rowH;
    asemicRow(ctx, x + 1, yy, w - 2, rng, {
      chaos: 0.25,
      weight: 0.55,
      scale: 0.28,
    });
  }
  ctx.restore();
}

export function cursiveLine(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  size: number,
  color: string,
  slant = -0.18,
) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.font = `500 ${size}px "Newsreader", "Times New Roman", serif`;
  ctx.translate(x, y);
  ctx.rotate(slant);
  ctx.fillText(text, 0, 0);
  ctx.restore();
}

export function wobbleRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  rng: () => number,
) {
  ctx.beginPath();
  const pts = [
    [x, y],
    [x + w, y],
    [x + w, y + h],
    [x, y + h],
  ];
  pts.forEach((p, i) => {
    const nx = (p[0] ?? 0) + (rng() - 0.5) * 1.4;
    const ny = (p[1] ?? 0) + (rng() - 0.5) * 1.4;
    if (i === 0) ctx.moveTo(nx, ny);
    else ctx.lineTo(nx, ny);
  });
  ctx.closePath();
  ctx.stroke();
}

export function jitter(rng: () => number, amt: number) {
  return (rng() - 0.5) * amt;
}
