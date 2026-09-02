import { createDefaultProject } from "./defaults";
import type { MediaSource, Project } from "./types";

export function serializeProject(project: Project): string {
  const strip = project.sources.map((s) => ({
    ...s,
    bitmap: undefined,
    objectUrl: undefined,
  }));
  return JSON.stringify({ ...project, sources: strip }, null, 2);
}

export function parseProject(json: string): Project {
  const raw = JSON.parse(json) as Partial<Project>;
  if (!raw || raw.app !== "derive") throw new Error("Not a Dérive project");
  const base = createDefaultProject();
  const sources = Array.isArray(raw.sources)
    ? raw.sources.map((s) => hydrateSource(s as MediaSource))
    : base.sources;
  return {
    ...base,
    ...raw,
    version: 1,
    app: "derive",
    sources,
    units: raw.units ?? [],
    path: raw.path ?? { unitIds: [], arrows: [] },
    paper: { ...base.paper, ...raw.paper },
    drift: { ...base.drift, ...raw.drift },
    unitSettings: { ...base.unitSettings, ...raw.unitSettings },
    arrows: { ...base.arrows, ...raw.arrows },
    detournement: { ...base.detournement, ...raw.detournement },
    exportSettings: { ...base.exportSettings, ...raw.exportSettings },
  };
}

function hydrateSource(s: MediaSource): MediaSource {
  return {
    ...s,
    bitmap: null,
    objectUrl: null,
  };
}

export function downloadText(filename: string, text: string, mime = "application/json") {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
