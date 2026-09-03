import { createDefaultProject } from "./defaults";
import type { MediaSource, Project } from "./types";

export function serializeProject(project: Project): string {
  const sources = project.sources.map((s) => ({
    ...s,
    bitmap: undefined,
    objectUrl: undefined,
  }));
  return JSON.stringify({ ...project, sources }, null, 2);
}

export function parseProject(json: string): Project {
  const raw = JSON.parse(json) as Partial<Project>;
  if (!raw || raw.app !== "hypergraphie") throw new Error("Not a Hypergraphie project");
  const base = createDefaultProject();
  const sources = Array.isArray(raw.sources)
    ? raw.sources.map((s) => hydrateSource(s as MediaSource))
    : [];
  return {
    ...base,
    ...raw,
    version: 1,
    app: "hypergraphie",
    sources,
    ink: { ...base.ink, ...raw.ink },
    paper: { ...base.paper, ...raw.paper },
    caption: { ...base.caption, ...raw.caption },
    exportSettings: { ...base.exportSettings, ...raw.exportSettings },
  };
}

function hydrateSource(s: MediaSource): MediaSource {
  return { ...s, bitmap: null, objectUrl: null };
}

export function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
