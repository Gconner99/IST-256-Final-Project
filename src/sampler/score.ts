import { mulberry32 } from "../core/random";
import type { SamplerParams, SliceEvent } from "./types";

function logUniform(rng: () => number, min: number, max: number): number {
  const lo = Math.max(0.001, Math.min(min, max));
  const hi = Math.max(lo, max);
  if (hi <= lo * 1.0001) return lo;
  return lo * Math.pow(hi / lo, rng());
}

/** Loudness shape across the arrangement. 1 is unity. */
export function contourAt(contour: SamplerParams["contour"], time: number, duration: number): number {
  const x = duration <= 0 ? 0 : Math.min(1, Math.max(0, time / duration));
  switch (contour) {
    case "flat":
    case "still":
      return 1;
    case "swell": {
      const mid = Math.sin(Math.PI * x);
      return 0.42 + 0.58 * mid;
    }
    case "fade":
      if (x < 0.72) return 1;
      return 1 - ((x - 0.72) / 0.28) * 0.88;
    case "dropout":
      if (x < 0.8) return 1;
      {
        const k = (x - 0.8) / 0.2;
        return Math.max(0, 1 - k * k);
      }
    default:
      return 1;
  }
}

/**
 * Build a deterministic chop. The bed walks through the source.
 * Scraps pick a new region almost every hit. A small repeat chance
 * holds the previous scrap once, which is as often as the record does.
 */
export function buildScore(
  sourceDuration: number,
  arrangementDuration: number,
  params: SamplerParams,
  seed: number,
): SliceEvent[] {
  const duration = Math.max(0, sourceDuration);
  const total = Math.max(0, arrangementDuration);
  if (duration < 0.01 || total < 0.01) return [];

  const rng = mulberry32(seed >>> 0);
  const events: SliceEvent[] = [];
  const maxOffset = Math.max(0, duration - 0.005);

  let cursor = rng() * Math.min(duration * 0.2, maxOffset);
  let t = 0;
  while (t < total - 0.0005) {
    const remain = total - t;
    let len = params.bedMin + rng() * Math.max(0, params.bedMax - params.bedMin);
    if (rng() < params.bedJump) cursor = rng() * maxOffset;
    if (cursor > maxOffset) cursor = 0;
    const available = Math.max(0.005, duration - cursor);
    const played = Math.min(len, available, remain);
    if (played < 0.004) break;
    const pan = (rng() * 2 - 1) * params.bedWidth;
    events.push({
      kind: "bed",
      time: t,
      duration: played,
      offset: cursor,
      reverse: false,
      gain: params.bedGain,
      pan,
    });
    cursor += played;
    if (cursor >= duration - 0.03) cursor = rng() * Math.min(duration * 0.5, maxOffset);
    t += played;
  }

  if (params.shredRate > 0 && params.shredGain > 0) {
    let prev: { offset: number; duration: number } | null = null;
    let st = 0;
    let guard = 0;
    const cap = Math.ceil(total * params.shredRate * 4) + 8;
    while (st < total && guard < cap) {
      guard += 1;
      const u = Math.max(rng(), 1e-6);
      st += Math.max(0.004, -Math.log(u) / params.shredRate);
      if (st >= total) break;
      const repeat = prev !== null && rng() < params.repeat;
      let scrapLen = logUniform(rng, params.shredMin, params.shredMax);
      let offset: number;
      if (repeat && prev) {
        scrapLen = prev.duration;
        offset = prev.offset;
      } else {
        scrapLen = Math.min(scrapLen, duration);
        offset = rng() * Math.max(0, duration - scrapLen);
        prev = { offset, duration: scrapLen };
      }
      const played = Math.min(scrapLen, duration - offset, total - st);
      if (played < 0.003) continue;
      events.push({
        kind: "shred",
        time: st,
        duration: played,
        offset,
        reverse: rng() < params.reverse,
        gain: params.shredGain,
        pan: (rng() * 2 - 1) * params.shredWidth,
      });
    }
  }

  if (params.clickRate > 0 && params.clickGain > 0) {
    let ct = 0;
    let guard = 0;
    const cap = Math.ceil(total * params.clickRate * 4) + 8;
    while (ct < total && guard < cap) {
      guard += 1;
      const u = Math.max(rng(), 1e-6);
      ct += Math.max(0.008, -Math.log(u) / params.clickRate);
      if (ct >= total) break;
      const clickLen = Math.min(0.004 + rng() * 0.012, duration);
      const offset = rng() * Math.max(0, duration - clickLen);
      events.push({
        kind: "click",
        time: ct,
        duration: clickLen,
        offset,
        reverse: false,
        gain: params.clickGain,
        pan: (rng() * 2 - 1) * Math.min(1, params.shredWidth + 0.35),
      });
    }
  }

  events.sort((a, b) => a.time - b.time);
  return events;
}
