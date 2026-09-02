import { uid } from "./ids";
import type {
  ArrowSettings,
  DetournementSettings,
  DriftSettings,
  ExportSettings,
  MapGenerator,
  MediaSource,
  PaperSettings,
  Project,
  UnitSettings,
} from "./types";

export function defaultPaper(): PaperSettings {
  return {
    ground: "#e6d8be",
    ink: "#1b1612",
    stain: 0.45,
    fold: 0.28,
    grain: 0.55,
    gridGhost: 0.18,
    xerox: 0.4,
  };
}

export function defaultDrift(seed = 1957): DriftSettings {
  return {
    seed,
    steps: 8,
    chance: 0.28,
    attraction: 0.72,
    loops: false,
  };
}

export function defaultUnitSettings(): UnitSettings {
  return {
    count: 11,
    tear: 0.62,
    rotation: 0.35,
    scaleVariance: 0.55,
    minScale: 0.72,
    maxScale: 1.35,
  };
}

export function defaultArrows(): ArrowSettings {
  return {
    density: 0.45,
    thickness: 1,
    color: "#c41e1e",
    dash: 0.15,
  };
}

export function defaultDetournement(): DetournementSettings {
  return {
    density: 0.55,
    mode: "mix",
    stamps: 0.4,
  };
}

export function defaultExport(): ExportSettings {
  return {
    width: 2400,
    height: 1800,
    format: "png",
    quality: 0.92,
    filename: "derive",
  };
}

export function generatorSource(kind: MapGenerator): MediaSource {
  return {
    id: uid("src"),
    name: kind.toUpperCase(),
    kind: "generator",
    generator: kind,
    width: 1024,
    height: 1024,
  };
}

export function defaultSources(): MediaSource[] {
  const kinds: MapGenerator[] = ["street", "cadastral", "contour", "plaque"];
  return kinds.map((k) => generatorSource(k));
}

export function createDefaultProject(): Project {
  return {
    version: 1,
    app: "derive",
    name: "naked city",
    sources: defaultSources(),
    units: [],
    path: { unitIds: [], arrows: [] },
    paper: defaultPaper(),
    drift: defaultDrift(1957),
    unitSettings: defaultUnitSettings(),
    arrows: defaultArrows(),
    detournement: defaultDetournement(),
    exportSettings: defaultExport(),
  };
}
