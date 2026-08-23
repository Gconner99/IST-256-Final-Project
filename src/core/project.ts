import type { GeneratorType, MediaSource, Project } from "./types";

const PLACE_FALLBACK: Record<string, GeneratorType> = {
  lot: "marsh",
  xerox: "paper",
  tank: "oil",
  chapel: "cave",
  lamp: "stars",
};

const RUNTIME_KEYS = new Set(["bitmap", "video", "audio", "pcm", "objectUrl", "frozenFrame"]);

export function serializeProject(project: Project): string {
  const clean: Project = JSON.parse(
    JSON.stringify(project, (key, value) => {
      if (RUNTIME_KEYS.has(key)) return undefined;
      return value;
    }),
  );
  return JSON.stringify(clean, null, 2);
}

export function parseProject(json: string): Project {
  const data = JSON.parse(json) as Project;
  if (!data || data.app !== "phosphene" || data.version !== 1) {
    throw new Error("Not a Phosphene v1 project file");
  }
  data.sources = (data.sources ?? []).map((s) => stripRuntime(s));
  data.layers = data.layers ?? [];
  data.keyframes = data.keyframes ?? [];
  data.presets = data.presets ?? [];
  if (data.exportSettings && data.exportSettings.loopClose === undefined) {
    data.exportSettings.loopClose = true;
  }
  data.sources = data.sources.map((s) => {
    const next = PLACE_FALLBACK[s.generator ?? ""];
    return next ? { ...s, generator: next } : s;
  });
  return data;
}

export function stripRuntime(source: MediaSource): MediaSource {
  return {
    ...source,
    bitmap: null,
    video: null,
    audio: null,
    pcm: null,
    objectUrl: null,
    frozenFrame: null,
  };
}

export function downloadText(filename: string, text: string): void {
  const blob = new Blob([text], { type: "application/json" });
  downloadBlob(filename, blob);
}

export function downloadBlob(filename: string, blob: Blob): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export function collectMediaNames(project: Project): string[] {
  return project.sources
    .filter((s) => s.kind !== "generator")
    .map((s) => s.fileName || s.name);
}
