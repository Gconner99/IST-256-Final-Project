import { downloadBlob, downloadText } from "../../core/project";
import { defaultAmbianceWeights } from "./ambiances";
import { walkDerive } from "./derive";
import { defaultProceduralSources } from "./maps";
import { placeDetournement } from "./slogans";
import type { DeriveProject, DeriveSource } from "./types";
import { assembleUnits } from "./units";

const RUNTIME_KEYS = new Set(["bitmap", "objectUrl"]);

export function createDefaultProject(seed = 1957): DeriveProject {
  return {
    version: 1,
    app: "derive",
    name: "guide psychogéographique",
    seed,
    sources: defaultProceduralSources(seed),
    units: [],
    passages: [],
    marks: [],
    drift: { seed, steps: 18, attraction: 0.72 },
    unitsCfg: { count: 20, tear: 0.68, rotation: 0.38, scaleVariance: 0.42 },
    arrows: { density: 0.55, thickness: 0.72, curve: 0.42 },
    detournement: { density: 0.55, slogans: true, streets: true, coordinates: true },
    paper: { ground: 0.55, stains: 0.58, fold: 0.4, gridGhost: 0.34 },
    ambiances: defaultAmbianceWeights(),
    spectacle: { enabled: false, amount: 0.45 },
    exportSettings: { width: 2400, height: 1800, format: "png", quality: 0.92, filename: "derive" },
  };
}

export function rebuildComposition(project: DeriveProject, mode: "recompose" | "drift"): DeriveProject {
  const units =
    mode === "drift" && project.units.length > 0 ? project.units : assembleUnits(project, mode === "recompose");
  const drift = { ...project.drift, seed: project.seed };
  const passages = walkDerive(units, drift, project.arrows.density);
  const marks = placeDetournement(units, project.detournement, project.seed);
  return { ...project, drift, units, passages, marks };
}

export function serializeProject(project: DeriveProject): string {
  const clean: DeriveProject = JSON.parse(
    JSON.stringify(project, (key, value) => {
      if (RUNTIME_KEYS.has(key)) return undefined;
      return value;
    }),
  );
  return JSON.stringify(clean, null, 2);
}

export function parseProject(json: string): DeriveProject {
  const data = JSON.parse(json) as DeriveProject;
  if (!data || data.app !== "derive" || data.version !== 1) {
    throw new Error("Not a Dérive v1 project file");
  }
  data.sources = (data.sources ?? []).map((s) => stripRuntime(s));
  data.units = data.units ?? [];
  data.passages = data.passages ?? [];
  data.marks = data.marks ?? [];
  return data;
}

export function stripRuntime(source: DeriveSource): DeriveSource {
  return { ...source, bitmap: null, objectUrl: null };
}

export function collectMediaNames(project: DeriveProject): string[] {
  return project.sources.filter((s) => s.kind === "image").map((s) => s.fileName || s.name);
}

export { downloadBlob, downloadText };
