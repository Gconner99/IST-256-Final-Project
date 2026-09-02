import { AMBIANCE_INK } from "../core/ambiances";
import { mulberry32 } from "../core/random";
import { detournedText, STAMPS } from "../core/slogans";
import type { Project, Unit } from "../core/types";

export function paintType(
  ctx: CanvasRenderingContext2D,
  project: Project,
  w: number,
  h: number,
) {
  const rng = mulberry32((project.drift.seed + 404) >>> 0);
  const ink = project.paper.ink;

  ctx.save();
  ctx.fillStyle = ink;
  ctx.font = `700 ${Math.max(22, w * 0.028)}px Newsreader, serif`;
  ctx.fillText("GUIDE PSYCHOGÉOGRAPHIQUE", 28, 42);
  ctx.font = "500 13px 'IBM Plex Mono', monospace";
  ctx.globalAlpha = 0.7;
  ctx.fillText(`${project.name.toUpperCase()}   ·   SEED ${project.drift.seed}   ·   I.S. / DÉRIVE`, 28, 64);
  ctx.globalAlpha = 1;

  ctx.font = "500 10px 'IBM Plex Mono', monospace";
  ctx.globalAlpha = 0.55;
  ctx.fillText("UNITÉS D'AMBIANCE — PASSAGES POSSIBLES — CARTE DÉTOURNÉE", 28, h - 22);
  ctx.restore();

  paintLegend(ctx, project, w, h);

  for (const unit of project.units) {
    paintUnitCaption(ctx, unit, w, h);
  }

  const texts = Math.round(4 * project.detournement.density);
  ctx.save();
  ctx.fillStyle = ink;
  for (let i = 0; i < texts; i++) {
    const t = detournedText(project.detournement.mode, rng);
    const x = 40 + rng() * (w - 220);
    const y = 90 + rng() * (h - 140);
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rng() - 0.5) * 0.18);
    ctx.globalAlpha = 0.28 + rng() * 0.35;
    ctx.font = `${rng() < 0.4 ? 700 : 500} ${11 + Math.floor(rng() * 7)}px 'IBM Plex Mono', monospace`;
    ctx.fillText(t, 0, 0);
    ctx.restore();
  }
  ctx.restore();

  const stamps = Math.round(5 * project.detournement.stamps);
  for (let i = 0; i < stamps; i++) {
    paintStamp(ctx, STAMPS[Math.floor(rng() * STAMPS.length)]!, rng, w, h, project.arrows.color);
  }
}

function paintUnitCaption(ctx: CanvasRenderingContext2D, unit: Unit, w: number, h: number) {
  ctx.save();
  ctx.fillStyle = AMBIANCE_INK[unit.ambiance];
  ctx.font = "500 9px 'IBM Plex Mono', monospace";
  ctx.fillText(unit.label, unit.x * w - 24, unit.y * h + 52 * unit.scale);
  ctx.globalAlpha = 0.7;
  ctx.fillText(unit.ambiance, unit.x * w - 24, unit.y * h + 64 * unit.scale);
  ctx.restore();
}

function paintLegend(ctx: CanvasRenderingContext2D, project: Project, w: number, h: number) {
  const x = w - 220;
  const y = h - 150;
  ctx.save();
  ctx.globalAlpha = 0.85;
  ctx.fillStyle = "rgba(230, 216, 190, 0.55)";
  ctx.strokeStyle = project.paper.ink;
  ctx.lineWidth = 0.8;
  ctx.fillRect(x, y, 192, 118);
  ctx.strokeRect(x, y, 192, 118);
  ctx.fillStyle = project.paper.ink;
  ctx.font = "600 9px 'IBM Plex Mono', monospace";
  ctx.fillText("LÉGENDE (FAUSSE)", x + 10, y + 16);
  ctx.font = "500 9px 'IBM Plex Mono', monospace";
  const lines = [
    "→  dérive taken",
    "⇢  passage possible",
    "□ plaque tournante",
    "distance ≠ metres",
    `${project.units.length} unités / ${project.path.arrows.length} voies`,
  ];
  lines.forEach((line, i) => ctx.fillText(line, x + 10, y + 36 + i * 14));
  ctx.restore();
}

function paintStamp(
  ctx: CanvasRenderingContext2D,
  text: string,
  rng: () => number,
  w: number,
  h: number,
  color: string,
) {
  ctx.save();
  ctx.translate(80 + rng() * (w - 160), 80 + rng() * (h - 160));
  ctx.rotate((rng() - 0.5) * 0.6);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.35;
  ctx.lineWidth = 1.6;
  ctx.strokeRect(-36, -12, 72 + text.length * 2, 24);
  ctx.font = "700 10px 'IBM Plex Mono', monospace";
  ctx.fillText(text, -28, 4);
  ctx.restore();
}
