export type Plate = "scriptorium" | "alphabet" | "reseau" | "tache" | "masse";
export type SourceKind = "image";
export type DateMode = "seed" | "now" | "custom";

export interface MediaSource {
  id: string;
  name: string;
  kind: SourceKind;
  fileName?: string;
  mime?: string;
  width: number;
  height: number;
  bitmap?: CanvasImageSource | null;
  objectUrl?: string | null;
}

export interface InkSettings {
  density: number;
  chaos: number;
  scale: number;
  photoMix: number;
  contrast: number;
  black: number;
  blue: number;
  red: number;
}

export interface PaperSettings {
  ground: string;
  margin: number;
  grain: number;
}

export interface CaptionSettings {
  show: boolean;
  dateMode: DateMode;
  custom: string;
  edition: number;
  editionOf: number;
  sign: boolean;
}

export interface ExportSettings {
  width: number;
  height: number;
  format: "png" | "jpg";
  quality: number;
  filename: string;
}

export interface Project {
  version: 1;
  app: "hypergraphie";
  name: string;
  plate: Plate;
  seed: number;
  sources: MediaSource[];
  activeSourceId: string | null;
  ink: InkSettings;
  paper: PaperSettings;
  caption: CaptionSettings;
  exportSettings: ExportSettings;
}

export interface AppUi {
  selectedSourceId: string | null;
  dropActive: boolean;
  helpOpen: boolean;
  status: string;
}

export interface AppState {
  project: Project;
  ui: AppUi;
}

export const PLATES: { id: Plate; label: string; hint: string }[] = [
  { id: "scriptorium", label: "Scriptorium", hint: "photo + asemic script" },
  { id: "alphabet", label: "Alphabet", hint: "invented glyph grid" },
  { id: "reseau", label: "Réseau", hint: "ochre dripping network" },
  { id: "tache", label: "Tache", hint: "manuscript + navy blot" },
  { id: "masse", label: "Masse", hint: "blue mass + micro-script" },
];
