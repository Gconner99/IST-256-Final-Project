export type Ambiance =
  | "attraction"
  | "repulsion"
  | "play"
  | "boredom"
  | "spectacle"
  | "void";

export type MapKind = "street" | "contour" | "cadastral" | "terrain";
export type SourceKind = "image" | "procedural";
export type PassageKind = "drift" | "possible";
export type MarkKind = "slogan" | "street" | "coordinate" | "stamp";

export interface Point {
  x: number;
  y: number;
}

export interface DeriveSource {
  id: string;
  name: string;
  kind: SourceKind;
  mapKind?: MapKind;
  mapSeed?: number;
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
  hub: boolean;
  polygon: Point[];
  srcX: number;
  srcY: number;
  srcW: number;
  srcH: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  pinned: boolean;
  label: string;
}

export interface Passage {
  fromId: string;
  toId: string;
  weight: number;
  kind: PassageKind;
  bend: number;
}

export interface DetournementMark {
  kind: MarkKind;
  text: string;
  x: number;
  y: number;
  rotation: number;
  size: number;
}

export interface DriftSettings {
  seed: number;
  steps: number;
  attraction: number;
}

export interface UnitSettings {
  count: number;
  tear: number;
  rotation: number;
  scaleVariance: number;
}

export interface ArrowSettings {
  density: number;
  thickness: number;
  curve: number;
}

export interface DetournementSettings {
  density: number;
  slogans: boolean;
  streets: boolean;
  coordinates: boolean;
}

export interface PaperSettings {
  ground: number;
  stains: number;
  fold: number;
  gridGhost: number;
}

export interface AmbianceWeights {
  attraction: number;
  repulsion: number;
  play: number;
  boredom: number;
  spectacle: number;
  void: number;
}

export interface SpectacleSettings {
  enabled: boolean;
  amount: number;
}

export interface ExportSettings {
  width: number;
  height: number;
  format: "png" | "jpg";
  quality: number;
  filename: string;
}

export interface DeriveProject {
  version: 1;
  app: "derive";
  name: string;
  seed: number;
  sources: DeriveSource[];
  units: Unit[];
  passages: Passage[];
  marks: DetournementMark[];
  drift: DriftSettings;
  unitsCfg: UnitSettings;
  arrows: ArrowSettings;
  detournement: DetournementSettings;
  paper: PaperSettings;
  ambiances: AmbianceWeights;
  spectacle: SpectacleSettings;
  exportSettings: ExportSettings;
}

export interface DeriveUi {
  selectedUnitId: string | null;
  selectedSourceId: string | null;
  dropActive: boolean;
  helpOpen: boolean;
  status: string;
  draggingUnitId: string | null;
}

export interface DeriveState {
  project: DeriveProject;
  ui: DeriveUi;
}

export const AMBIANCES: Ambiance[] = [
  "attraction",
  "repulsion",
  "play",
  "boredom",
  "spectacle",
  "void",
];

export const MAP_KINDS: { id: MapKind; label: string }[] = [
  { id: "street", label: "Street grid" },
  { id: "contour", label: "Contour" },
  { id: "cadastral", label: "Cadastral" },
  { id: "terrain", label: "Terrain" },
];
