import { mulberry32 } from "../core/random";
import type { Project } from "../core/types";
import { paintMargin } from "./margin";
import { paintGround } from "./paper";
import { paintAlphabet, paintMasse, paintReseau, paintScriptorium, paintTache } from "./plates";

export function paintField(ctx: CanvasRenderingContext2D, project: Project, w: number, h: number) {
  const rng = mulberry32(project.seed >>> 0);
  paintGround(ctx, w, h, project.paper, project.seed);
  if (project.plate === "scriptorium") paintScriptorium(ctx, project, w, h, rng);
  else if (project.plate === "alphabet") paintAlphabet(ctx, project, w, h, rng);
  else if (project.plate === "reseau") paintReseau(ctx, project, w, h, rng);
  else if (project.plate === "tache") paintTache(ctx, project, w, h, rng);
  else paintMasse(ctx, project, w, h, rng);
  paintMargin(ctx, project, w, h, rng);
}

export function resizeCanvas(canvas: HTMLCanvasElement, host: HTMLElement) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const r = host.getBoundingClientRect();
  const w = Math.max(16, Math.floor(r.width * dpr));
  const h = Math.max(16, Math.floor(r.height * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
}
