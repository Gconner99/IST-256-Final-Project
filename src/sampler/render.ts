import { contourAt } from "./score";
import type { SamplerParams, SliceEvent } from "./types";

export interface RenderedStereo {
  sampleRate: number;
  left: Float32Array;
  right: Float32Array;
}

interface Biquad {
  b0: number;
  b1: number;
  b2: number;
  a1: number;
  a2: number;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

function makeLowpass(sampleRate: number, freq: number): Biquad {
  const nyquist = sampleRate * 0.49;
  const cut = Math.max(40, Math.min(freq, nyquist));
  const w0 = (2 * Math.PI * cut) / sampleRate;
  const alpha = Math.sin(w0) / (2 * 0.707);
  const cos = Math.cos(w0);
  const b0 = (1 - cos) / 2;
  const b1 = 1 - cos;
  const b2 = (1 - cos) / 2;
  const a0 = 1 + alpha;
  return {
    b0: b0 / a0,
    b1: b1 / a0,
    b2: b2 / a0,
    a1: (-2 * cos) / a0,
    a2: (1 - alpha) / a0,
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
  };
}

function processBiquad(f: Biquad, x: number): number {
  const y = f.b0 * x + f.b1 * f.x1 + f.b2 * f.x2 - f.a1 * f.y1 - f.a2 * f.y2;
  f.x2 = f.x1;
  f.x1 = x;
  f.y2 = f.y1;
  f.y1 = y;
  return y;
}

export function lowpassInPlace(data: Float32Array, sampleRate: number, freq: number): void {
  const f = makeLowpass(sampleRate, freq);
  for (let i = 0; i < data.length; i++) data[i] = processBiquad(f, data[i]);
}

/** Linked brick-attack limiter. Release is about 40 ms. */
export function limitInPlace(left: Float32Array, right: Float32Array, sampleRate: number, threshold: number): void {
  const release = Math.exp(-1 / (sampleRate * 0.04));
  const thr = Math.max(0.05, threshold);
  let env = 0;
  for (let i = 0; i < left.length; i++) {
    const peak = Math.max(Math.abs(left[i]), Math.abs(right[i]));
    env = peak > env ? peak : env * release + peak * (1 - release);
    const gain = env > thr ? thr / env : 1;
    left[i] *= gain;
    right[i] *= gain;
  }
}

function panGains(pan: number): { l: number; r: number } {
  const p = Math.max(-1, Math.min(1, pan));
  return {
    l: p <= 0 ? 1 : 1 - p,
    r: p >= 0 ? 1 : 1 + p,
  };
}

/**
 * Mix the score into a stereo buffer. The source is not modified.
 * Channel 0 is used for both sides when the file is mono.
 */
export function renderArrangement(
  channels: Float32Array[],
  sampleRate: number,
  events: SliceEvent[],
  params: SamplerParams,
  duration: number,
): RenderedStereo {
  const sr = sampleRate;
  const n = Math.max(1, Math.floor(duration * sr));
  const left = new Float32Array(n);
  const right = new Float32Array(n);
  const srcL = channels[0];
  if (!srcL || srcL.length === 0) return { sampleRate: sr, left, right };
  const srcR = channels[1] ?? srcL;
  const srcLen = srcL.length;

  for (const ev of events) {
    const start = Math.floor(ev.time * sr);
    const durSamples = Math.max(1, Math.floor(ev.duration * sr));
    const shape =
      ev.kind === "bed" ? params.bedCrossfade : ev.kind === "click" ? 0.0004 : params.crossfade;
    const fadeN = Math.min(Math.floor(shape * sr), Math.floor(durSamples / 2));
    const level = ev.gain * contourAt(params.contour, ev.time, duration) * params.outputGain;
    const pan = panGains(ev.pan);
    const offset = Math.floor(ev.offset * sr);
    const tau = sr * 0.0025;

    for (let i = 0; i < durSamples; i++) {
      const outI = start + i;
      if (outI < 0 || outI >= n) continue;
      const srcI = ev.reverse ? offset + (durSamples - 1 - i) : offset + i;
      if (srcI < 0 || srcI >= srcLen) continue;
      let env = 1;
      if (ev.kind === "click") {
        env = Math.exp(-i / tau);
        if (i < 6) env *= i / 6;
      } else if (fadeN > 0) {
        if (i < fadeN) env = i / fadeN;
        else if (i > durSamples - fadeN) env = (durSamples - i) / fadeN;
      }
      const sL = srcL[srcI] * env * level;
      const sR = srcR[Math.min(srcI, srcR.length - 1)] * env * level;
      left[outI] += sL * pan.l;
      right[outI] += sR * pan.r;
    }
  }

  if (params.lowpass < sr * 0.45) {
    lowpassInPlace(left, sr, params.lowpass);
    lowpassInPlace(right, sr, params.lowpass);
  }
  if (params.limiter) limitInPlace(left, right, sr, params.limitThreshold);

  return { sampleRate: sr, left, right };
}

export function roughness(data: Float32Array): number {
  if (data.length < 2) return 0;
  let acc = 0;
  for (let i = 1; i < data.length; i++) acc += Math.abs(data[i] - data[i - 1]);
  return acc / (data.length - 1);
}

export function rms(data: Float32Array): number {
  let acc = 0;
  for (let i = 0; i < data.length; i++) acc += data[i] * data[i];
  return Math.sqrt(acc / Math.max(1, data.length));
}

/** Min/max peaks for a waveform drawing. */
export function peakEnvelope(data: Float32Array, buckets: number): { min: Float32Array; max: Float32Array } {
  const count = Math.max(1, buckets);
  const min = new Float32Array(count);
  const max = new Float32Array(count);
  const span = data.length / count;
  for (let b = 0; b < count; b++) {
    const a = Math.floor(b * span);
    const z = Math.max(a + 1, Math.floor((b + 1) * span));
    let lo = 0;
    let hi = 0;
    for (let i = a; i < z && i < data.length; i++) {
      const s = data[i];
      if (s < lo) lo = s;
      if (s > hi) hi = s;
    }
    min[b] = lo;
    max[b] = hi;
  }
  return { min, max };
}
