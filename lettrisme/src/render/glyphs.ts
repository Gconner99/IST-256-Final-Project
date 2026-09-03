import { jitter } from "./asemic";

export function paintGlyph(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rng: () => number,
  color = "#161410",
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((rng() - 0.5) * 0.12);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 1.6 + rng() * 2.1;
  const kind = Math.floor(rng() * 8);
  const s = size * (0.82 + rng() * 0.28);
  if (kind === 0) letterU(ctx, s, rng);
  else if (kind === 1) letterM(ctx, s, rng);
  else if (kind === 2) letterS(ctx, s, rng);
  else if (kind === 3) letterO(ctx, s, rng);
  else if (kind === 4) letterR(ctx, s, rng);
  else if (kind === 5) letterA(ctx, s, rng);
  else if (kind === 6) ideogram(ctx, s, rng);
  else stem(ctx, s, rng);
  decorate(ctx, s, rng);
  ctx.restore();
}

function letterU(ctx: CanvasRenderingContext2D, s: number, rng: () => number) {
  ctx.beginPath();
  ctx.moveTo(-s * 0.32 + jitter(rng, 1), -s * 0.4);
  ctx.lineTo(-s * 0.3, s * 0.12);
  ctx.quadraticCurveTo(0, s * 0.48, s * 0.3, s * 0.12);
  ctx.lineTo(s * 0.32 + jitter(rng, 1), -s * 0.4);
  ctx.stroke();
}

function letterM(ctx: CanvasRenderingContext2D, s: number, rng: () => number) {
  ctx.beginPath();
  ctx.moveTo(-s * 0.38, s * 0.4);
  ctx.lineTo(-s * 0.36, -s * 0.38);
  ctx.lineTo(0 + jitter(rng, 2), s * 0.08);
  ctx.lineTo(s * 0.36, -s * 0.38);
  ctx.lineTo(s * 0.38, s * 0.4);
  ctx.stroke();
}

function letterS(ctx: CanvasRenderingContext2D, s: number, rng: () => number) {
  ctx.beginPath();
  ctx.moveTo(s * 0.3, -s * 0.32);
  ctx.bezierCurveTo(-s * 0.5, -s * 0.5, -s * 0.4, 0, 0, 0);
  ctx.bezierCurveTo(s * 0.45, 0, s * 0.4, s * 0.5, -s * 0.28, s * 0.34);
  ctx.stroke();
  if (rng() < 0.5) {
    ctx.beginPath();
    ctx.arc(0, 0, 1.4, 0, Math.PI * 2);
    ctx.fill();
  }
}

function letterO(ctx: CanvasRenderingContext2D, s: number, rng: () => number) {
  ctx.beginPath();
  ctx.ellipse(0, 0, s * 0.3, s * 0.38, rng() * 0.2, 0, Math.PI * 2);
  ctx.stroke();
  if (rng() < 0.6) {
    ctx.beginPath();
    ctx.ellipse(0, 0, s * 0.12, s * 0.16, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function letterR(ctx: CanvasRenderingContext2D, s: number, rng: () => number) {
  ctx.beginPath();
  ctx.moveTo(-s * 0.28, s * 0.42);
  ctx.lineTo(-s * 0.28, -s * 0.4);
  ctx.quadraticCurveTo(s * 0.38, -s * 0.4, s * 0.22, -s * 0.05);
  ctx.quadraticCurveTo(s * 0.05, 0.02, -s * 0.28, 0.05);
  ctx.moveTo(-s * 0.02, 0);
  ctx.lineTo(s * 0.3 + (rng() - 0.5), s * 0.42);
  ctx.stroke();
}

function letterA(ctx: CanvasRenderingContext2D, s: number, rng: () => number) {
  ctx.beginPath();
  ctx.moveTo(-s * 0.32, s * 0.4);
  ctx.lineTo(jitter(rng, 2), -s * 0.42);
  ctx.lineTo(s * 0.32, s * 0.4);
  ctx.moveTo(-s * 0.16, s * 0.08);
  ctx.lineTo(s * 0.16, s * 0.08);
  ctx.stroke();
}

function ideogram(ctx: CanvasRenderingContext2D, s: number, rng: () => number) {
  ctx.beginPath();
  ctx.rect(-s * 0.28, -s * 0.28, s * 0.56, s * 0.56);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-s * 0.28, 0);
  ctx.lineTo(s * 0.28, 0);
  if (rng() < 0.5) {
    ctx.moveTo(0, -s * 0.28);
    ctx.lineTo(0, s * 0.28);
  }
  ctx.stroke();
}

function stem(ctx: CanvasRenderingContext2D, s: number, rng: () => number) {
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.45);
  ctx.lineTo(jitter(rng, 2), s * 0.45);
  ctx.stroke();
  if (rng() < 0.7) {
    ctx.beginPath();
    ctx.moveTo(-s * 0.22, -s * 0.1);
    ctx.lineTo(s * 0.22, -s * 0.18);
    ctx.stroke();
  }
}

function decorate(ctx: CanvasRenderingContext2D, s: number, rng: () => number) {
  const n = Math.floor(rng() * 3);
  for (let i = 0; i < n; i++) {
    const x = (rng() - 0.5) * s * 0.5;
    const y = (rng() - 0.5) * s * 0.5;
    if (rng() < 0.5) {
      ctx.beginPath();
      ctx.arc(x, y, 1.1 + rng(), 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(x - 3, y);
      ctx.lineTo(x + 3, y);
      ctx.stroke();
    }
  }
}

export function glyphRow(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  size: number,
  rng: () => number,
  color: string,
  gap = 1.15,
) {
  let px = x + size * 0.55;
  while (px < x + width - size * 0.4) {
    paintGlyph(ctx, px, y, size, rng, color);
    px += size * gap * (0.85 + rng() * 0.35);
  }
}
