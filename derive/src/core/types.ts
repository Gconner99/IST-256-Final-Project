export type Ambiance =
  | "attraction"
  | "repulsion"
  | "play"
  | "boredom"
  | "spectacle"
  | "void";

export type MapGenerator = "street" | "cadastral" | "contour" | "terrain" | "plaque";
export type SourceKind = "image" | "generator";
export type ArrowKind = "drift" | "possible";
export type DetournementMode = "slogans" | "streets" | "coordinates" | "mix";

export interface Point {
  x: number;
  y: number;
}

export interface MediaSource {
  id: string;
  name: string;
  kind: SourceKind;
  generator?: MapGenerator;
  fileName?: string;
  mime?: string;
  width: number;
  height: number;
  /** Runtime only — not serialized. */
  bitmap?: CanvasImageSource | null;
  objectUrl?: string | null;
}

export interface Unit {
  id: string;
  sourceId: string;
  ambiance: Ambiance;
  plaque: boolean;
  crop: Point[];
  cropCenter: Point;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  pinned: boolean;
  label: string;
}

export interface Arrow {
  fromId: string;
  toId: string;
  weight: number;
  kind: ArrowKind;
}

export interface DriftPath {
  unitIds: string[];
  arrows: Arrow[];
}

export interface PaperSettings {
  ground: string;
  ink: string;
  stain: number;
  fold: number;
  grain: number;
  gridGhost: number;
  xerox: number;
}

export interface DriftSettings {
  seed: number;
  steps: number;
  chance: number;
  attraction: number;
  loops: boolean;
}

export interface UnitSettings {
  count: number;
  tear: number;
  rotation: number;
  scaleVariance: number;
  minScale: number;
  maxScale: number;
}

export interface ArrowSettings {
  density: number;
  thickness: number;
  color: string;
  dash: number;
}

export interface DetournementSettings {
  density: number;
  mode: DetournementMode;
  stamps: number;
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
  app: "derive";
  name: string;
  sources: MediaSource[];
  units: Unit[];
  path: DriftPath;
  paper: PaperSettings;
  drift: DriftSettings;
  unitSettings: UnitSettings;
  arrows: ArrowSettings;
  detournement: DetournementSettings;
  exportSettings: ExportSettings;
}

export interface AppUi {
  selectedUnitId: string | null;
  selectedSourceId: string | null;
  dropActive: boolean;
  helpOpen: boolean;
  status: string;
  draggingUnitId: string | null;
}

export interface AppState {
  project: Project;
  ui: AppUi;
}

export const AMBIANCES: Ambiance[] = [
  "attraction",
  "repulsion",
  "play",
  "boredom",
  "spectacle",
  "void",
];

export const MAP_GENERATORS: { id: MapGenerator; label: string }[] = [
  { id: "street", label: "Street" },
  { id: "cadastral", label: "Cadastral" },
  { id: "contour", label: "Contour" },
  { id: "terrain", label: "Terrain" },
  { id: "plaque", label: "Plaque" },
];
