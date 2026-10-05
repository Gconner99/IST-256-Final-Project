export type Contour = "swell" | "flat" | "fade" | "dropout" | "still";

export type SliceKind = "bed" | "shred" | "click";

/** One placed scrap in the arrangement. Times are in seconds. */
export interface SliceEvent {
  kind: SliceKind;
  time: number;
  duration: number;
  offset: number;
  reverse: boolean;
  gain: number;
  pan: number;
}

/**
 * Chop settings measured from Mani.
 * A long bed keeps the source recognizable. Scraps jump to new regions.
 * Exact frozen repeats stay rare. Muraille turns the chopper off.
 */
export interface SamplerParams {
  id: string;
  name: string;
  shredRate: number;
  shredMin: number;
  shredMax: number;
  repeat: number;
  reverse: number;
  shredGain: number;
  shredWidth: number;
  bedMin: number;
  bedMax: number;
  bedGain: number;
  bedWidth: number;
  /** Chance a bed slice jumps somewhere else instead of walking forward. */
  bedJump: number;
  clickRate: number;
  clickGain: number;
  lowpass: number;
  limiter: boolean;
  /** Lower threshold crushes harder. Ignored when the limiter is off. */
  limitThreshold: number;
  outputGain: number;
  contour: Contour;
  /** Fade on a scrap, in seconds. */
  crossfade: number;
  bedCrossfade: number;
}

export interface StereoBuffer {
  sampleRate: number;
  channels: Float32Array[];
}
