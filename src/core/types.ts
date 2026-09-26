export type QualityMode = "draft" | "preview" | "export";
export type SourceKind = "image" | "video" | "generator" | "audio";
export type GeneratorType =
  | "plasma"
  | "noise"
  | "bars"
  | "gradient"
  | "solid"
  | "checker"
  | "critters"
  | "stars"
  | "marsh"
  | "oil"
  | "paper"
  | "cave"
  | "stage"
  | "sketch"
  | "felt"
  | "foil"
  | "plush"
  | "yarn"
  | "sequin"
  | "quilt"
  | "cork"
  | "gingham"
  | "sprinkle"
  | "velvet"
  | "confetti"
  | "disco"
  | "terrazzo"
  | "comic"
  | "lattice"
  | "tessera"
  | "phase"
  | "coil"
  | "prism"
  | "heraldry"
  | "wallpaper"
  | "giants"
  | "shower";
export type BlendMode =
  | "normal"
  | "add"
  | "screen"
  | "multiply"
  | "overlay"
  | "difference"
  | "exclusion"
  | "lighten"
  | "darken";
export type PlaybackMode = "forward" | "reverse" | "pingpong" | "random";
export type MaskType = "none" | "rect" | "circle" | "gradient" | "noise" | "image";
export type EffectCategory = "color" | "distort" | "analog" | "geometric" | "temporal" | "wacky";
export type ParamKind = "float" | "int" | "bool" | "color" | "enum";
export type Easing = "linear" | "smooth";

export interface EnumOption {
  value: string;
  label: string;
}

export interface ParamDef {
  id: string;
  label: string;
  kind: ParamKind;
  min?: number;
  max?: number;
  step?: number;
  default: number | string | boolean;
  options?: EnumOption[];
  randomizable?: boolean;
}

export interface EffectType {
  id: string;
  name: string;
  category: EffectCategory;
  description: string;
  params: ParamDef[];
  /** GLSL implementing `vec4 apply(vec2 uv)` */
  applyGlsl: string;
  extraUniforms?: string;
  temporal?: boolean;
}

export interface EffectInstance {
  id: string;
  typeId: string;
  enabled: boolean;
  params: Record<string, number | string | boolean>;
}

export interface Transform {
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export interface MaskSettings {
  type: MaskType;
  invert: boolean;
  softness: number;
  rect: { x: number; y: number; w: number; h: number };
  center: { x: number; y: number };
  radius: number;
  gradientAngle: number;
  noiseScale: number;
  imageSourceId: string | null;
}

export interface FeedbackSettings {
  amount: number;
  delay: number;
  opacity: number;
  scale: number;
  rotation: number;
  distortion: number;
}

export interface Layer {
  id: string;
  name: string;
  enabled: boolean;
  opacity: number;
  blendMode: BlendMode;
  sourceId: string | null;
  transform: Transform;
  effects: EffectInstance[];
  mask: MaskSettings;
  feedback: FeedbackSettings;
}

export interface MediaSource {
  id: string;
  name: string;
  kind: SourceKind;
  generator?: GeneratorType;
  fileName?: string;
  mime?: string;
  width: number;
  height: number;
  duration: number;
  /** Runtime only — not serialized. */
  bitmap?: ImageBitmap | HTMLImageElement | null;
  video?: HTMLVideoElement | null;
  audio?: HTMLAudioElement | null;
  pcm?: AudioBuffer | null;
  /** Onset times in seconds, computed from the MP3. Runtime only. */
  beats?: number[];
  /** Estimated tempo from those onsets. */
  bpm?: number;
  objectUrl?: string | null;
  frozenFrame?: ImageBitmap | null;
  /** Optional generator inks. */
  colorA?: string;
  colorB?: string;
  /** Collage stamp drawer. */
  collageKit?: "sailor" | "circus" | "fruit" | "nature" | "love" | "space" | "sweet" | "music";
  /** Second kit mixed into odd stamps. */
  collageKitB?: "sailor" | "circus" | "fruit" | "nature" | "love" | "space" | "sweet" | "music";
  /** Dark club wash that breathes on bass. */
  collageNight?: boolean;
  /** Stamp size multiplier. */
  collageScale?: number;
  /** Stamp count multiplier. */
  collageDensity?: number;
  /** Motion rate. Lower is calmer. */
  collagePace?: number;
  /** Chain: how quickly stamps travel along the freeform path. */
  collageChainTravel?: number;
  /** Chain: how quickly the path changes shape. */
  collageChainMorph?: number;
  /** Chain: how dramatically the path bends and stretches. */
  collageChainVary?: number;
  /** Chain: how fluid versus active those shape changes are. */
  collageChainSmooth?: number;
  /** Locked camera move for this clip. */
  collageMove?:
    | "rush"
    | "tunnel"
    | "bloom"
    | "spiral"
    | "helix"
    | "prism"
    | "bounce"
    | "flip"
    | "glow"
    | "flash"
    | "hop"
    | "kick"
    | "jelly"
    | "tide"
    | "rings"
    | "loom"
    | "petal"
    | "flock"
    | "wheel"
    | "silk"
    | "bars"
    | "ripple"
    | "swing"
    | "burst"
    | "halo"
    | "clap"
    | "wave"
    | "drop"
    | "spot"
    | "pong"
    | "step"
    | "moire"
    | "grid"
    | "zip"
    | "ghost"
    | "poly"
    | "fall"
    | "liss"
    | "snap"
    | "chain";
}

export interface Keyframe {
  id: string;
  time: number;
  layerId: string;
  target: "effect" | "layer" | "feedback" | "playback";
  effectId?: string;
  paramId: string;
  value: number;
  easing: Easing;
}

export interface PlaybackState {
  playing: boolean;
  time: number;
  speed: number;
  loop: boolean;
  mode: PlaybackMode;
  freeze: boolean;
  duration: number;
}

export interface ExportSettings {
  width: number;
  height: number;
  fps: number;
  duration: number;
  format: "png" | "jpg" | "webm" | "mp4" | "sequence";
  quality: number;
  bitrate: number;
  filename: string;
  /** Crossfade the last beats of a clip into the first frame so it loops. */
  loopClose: boolean;
}

export interface Preset {
  id: string;
  name: string;
  createdAt: number;
  seed: number;
  /** Source-independent layer/effect/animation snapshot. */
  data: PresetPayload;
}

export interface PresetPayload {
  seed: number;
  duration: number;
  fps: number;
  layers: Layer[];
  keyframes: Keyframe[];
  playback: Pick<PlaybackState, "speed" | "loop" | "mode">;
  globalFeedback: FeedbackSettings;
}

export interface Project {
  version: 1;
  app: "phosphene";
  name: string;
  seed: number;
  randomAmount: number;
  quality: QualityMode;
  duration: number;
  fps: number;
  sources: MediaSource[];
  layers: Layer[];
  keyframes: Keyframe[];
  playback: PlaybackState;
  globalFeedback: FeedbackSettings;
  exportSettings: ExportSettings;
  presets: Preset[];
  /** Auto-cut reel of music-reactive looks, snapped to the beat. */
  cutEdit?: { enabled: boolean; seed: number };
}

export interface AppUi {
  selectedLayerId: string | null;
  selectedEffectId: string | null;
  selectedSourceId: string | null;
  selectedParam: { layerId: string; effectId: string | null; paramId: string } | null;
  dropActive: boolean;
  helpOpen: boolean;
  status: string;
  fps: number;
  prompt: string;
  useSourceForGen: boolean;
  generating: boolean;
  includeCritters: boolean;
  includeIdol: boolean;
  exporting: boolean;
}

export interface AppState {
  project: Project;
  ui: AppUi;
}

export const BLEND_MODES: BlendMode[] = [
  "normal",
  "add",
  "screen",
  "multiply",
  "overlay",
  "difference",
  "exclusion",
  "lighten",
  "darken",
];

export const QUALITY_SCALES: Record<QualityMode, number> = {
  draft: 0.5,
  preview: 1,
  export: 1,
};
