import type { CaptionSettings, ExportSettings, InkSettings, PaperSettings, Project } from "./types";

export function defaultInk(): InkSettings {
  return {
    density: 0.72,
    chaos: 0.48,
    scale: 0.7,
    photoMix: 0.7,
    contrast: 0.65,
    black: 0.9,
    blue: 0.7,
    red: 0.45,
  };
}

export function defaultPaper(): PaperSettings {
  return {
    ground: "#f3ead8",
    margin: 0.12,
    grain: 0.28,
  };
}

export function defaultCaption(): CaptionSettings {
  return {
    show: true,
    dateMode: "seed",
    custom: "",
    edition: 1,
    editionOf: 20,
    sign: true,
  };
}

export function defaultExport(): ExportSettings {
  return {
    width: 2400,
    height: 3000,
    format: "png",
    quality: 0.92,
    filename: "hypergraphie",
  };
}

export function createDefaultProject(): Project {
  return {
    version: 1,
    app: "hypergraphie",
    name: "six heures moins vingt-cinq",
    plate: "scriptorium",
    seed: 1973,
    sources: [],
    activeSourceId: null,
    ink: defaultInk(),
    paper: defaultPaper(),
    caption: defaultCaption(),
    exportSettings: defaultExport(),
  };
}
