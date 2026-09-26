import { mulberry32 } from "./random";
import { groundsForKit, inkForKit, kitForSeed, type CollageKit, type MusicMove } from "../engine/heraldry";

export interface CutLook {
  kit: CollageKit;
  kitB?: CollageKit;
  move: MusicMove;
  night: boolean;
  wash: string;
  ink: string;
  scale: number;
  density: number;
  pace: number;
}

export interface CutShot {
  start: number;
  beats: number;
  look: CutLook;
}

const PHRASES: { beats: number[]; weight: number }[] = [
  { beats: [8], weight: 4 },
  { beats: [4, 4], weight: 5 },
  { beats: [8, 4], weight: 3 },
  { beats: [4, 4, 8], weight: 3 },
  { beats: [2, 2, 4], weight: 2 },
  { beats: [4, 2, 2], weight: 2 },
  { beats: [2, 6], weight: 2 },
  { beats: [6, 2], weight: 2 },
  { beats: [1, 1, 6], weight: 2 },
  { beats: [4, 1, 1, 2], weight: 1 },
  { beats: [3, 5], weight: 1 },
  { beats: [8, 2, 2, 4], weight: 2 },
];

const HIT_MOVES: MusicMove[] = ["spot", "burst", "clap", "snap", "step"];
const FLOW_MOVES: MusicMove[] = ["ripple", "swing", "wave", "halo", "bars", "zip", "moire", "pong", "liss", "grid"];
const HOLD_MOVES: MusicMove[] = ["drop", "halo", "bars", "wave", "poly", "ghost", "fall"];

function pickWeighted<T>(rng: () => number, items: { item: T; weight: number }[]): T {
  const total = items.reduce((s, it) => s + it.weight, 0);
  let roll = rng() * total;
  for (const it of items) {
    roll -= it.weight;
    if (roll <= 0) return it.item;
  }
  return items[items.length - 1].item;
}

function pickPhrase(rng: () => number): number[] {
  return pickWeighted(
    rng,
    PHRASES.map((p) => ({ item: p.beats, weight: p.weight })),
  );
}

function pickFrom<T>(rng: () => number, list: T[], avoid?: T): T {
  if (list.length === 1) return list[0];
  const pool = avoid == null ? list : list.filter((x) => x !== avoid);
  return (pool.length ? pool : list)[Math.floor(rng() * (pool.length ? pool.length : list.length)) % (pool.length || list.length)];
}

export function moveForShotLength(beats: number, rng: () => number, prev?: MusicMove): MusicMove {
  const family = beats <= 2 ? HIT_MOVES : beats <= 4 ? FLOW_MOVES : HOLD_MOVES;
  return pickFrom(rng, family, prev);
}

export function beatGrid(duration: number, bpm: number, onsets?: number[]): number[] {
  const span = Math.max(1, duration);
  const hits = (onsets ?? []).filter((t) => t >= 0 && t < span + 0.05);
  if (hits.length >= 8) {
    const out = hits[0] > 0.08 ? [0, ...hits] : [...hits];
    if (out[out.length - 1] < span) out.push(span);
    return out;
  }
  const period = 60 / Math.max(40, bpm || 120);
  const grid: number[] = [];
  for (let t = 0; t <= span + period * 0.01; t += period) grid.push(t);
  if (grid[grid.length - 1] < span) grid.push(span);
  return grid;
}

export function buildCutReel(opts: {
  seed: number;
  duration: number;
  bpm?: number;
  beats?: number[];
}): CutShot[] {
  const rng = mulberry32((opts.seed >>> 0) ^ 0xc0ffee);
  const duration = Math.max(1, opts.duration);
  const grid = beatGrid(duration, opts.bpm ?? 120, opts.beats);
  const shots: CutShot[] = [];
  let i = 0;
  let prevMove: MusicMove | undefined;
  let phraseKit: CollageKit | undefined;
  let phrase = 0;
  while (i < grid.length - 1 && grid[i] < duration) {
    const lengths = pickPhrase(rng);
    phraseKit = kitForSeed((opts.seed + phrase * 41 + Math.floor(rng() * 17)) >>> 0);
    const night = phrase % 5 === 2 || rng() > 0.82;
    const mash = rng() > 0.72 ? kitForSeed((opts.seed + phrase * 99 + 7) >>> 0) : undefined;
    const kitB = mash && mash !== phraseKit ? mash : undefined;
    const grounds = groundsForKit(phraseKit);
    for (const beats of lengths) {
      if (i >= grid.length - 1 || grid[i] >= duration) break;
      const endIdx = Math.min(grid.length - 1, i + beats);
      const start = grid[i];
      if (start >= duration) break;
      const move = moveForShotLength(endIdx - i, rng, prevMove);
      const wash = grounds[Math.floor(rng() * grounds.length) % grounds.length];
      shots.push({
        start,
        beats: endIdx - i,
        look: {
          kit: phraseKit,
          kitB,
          move,
          night,
          wash,
          ink: inkForKit(phraseKit),
          scale: 0.62 + rng() * 0.22,
          density: 0.74 + rng() * 0.28,
          pace: 0.5 + rng() * 0.26,
        },
      });
      prevMove = move;
      i = endIdx;
    }
    phrase++;
    if (phrase > 80) break;
  }
  if (!shots.length) {
    const kit = kitForSeed(opts.seed);
    shots.push({
      start: 0,
      beats: 8,
      look: {
        kit,
        move: "bars",
        night: false,
        wash: groundsForKit(kit)[0],
        ink: inkForKit(kit),
        scale: 0.78,
        density: 0.88,
        pace: 0.62,
      },
    });
  }
  return shots;
}

export function shotAtTime(reel: CutShot[], time: number): CutShot {
  if (!reel.length) {
    const kit = kitForSeed(1);
    return {
      start: 0,
      beats: 8,
      look: {
        kit,
        move: "bars",
        night: false,
        wash: groundsForKit(kit)[0],
        ink: inkForKit(kit),
        scale: 0.78,
        density: 0.88,
        pace: 0.62,
      },
    };
  }
  const last = reel[reel.length - 1];
  const end = Math.max(last.start + 0.25, reel.length > 1 ? last.start + (last.start - reel[0].start) / Math.max(1, reel.length - 1) : last.start + 2);
  const span = Math.max(end, last.start + 0.5);
  const t = ((time % span) + span) % span;
  let picked = reel[0];
  for (const shot of reel) {
    if (shot.start <= t) picked = shot;
    else break;
  }
  return picked;
}

export function cutLabel(shot: CutShot): string {
  const mash = shot.look.kitB && shot.look.kitB !== shot.look.kit ? ` · ${shot.look.kitB}` : "";
  return `cut · ${shot.look.move} · ${shot.look.kit}${mash} · ${shot.beats} beats`;
}

export function reelStats(reel: CutShot[]): { ones: number; longShare: number; maxOneRun: number; repeatMoves: number } {
  let ones = 0;
  let longBeats = 0;
  let total = 0;
  let run = 0;
  let maxOneRun = 0;
  let repeatMoves = 0;
  let prev: string | undefined;
  for (const shot of reel) {
    total += shot.beats;
    if (shot.beats <= 2) ones += 1;
    if (shot.beats >= 4) longBeats += shot.beats;
    if (shot.beats === 1) {
      run += 1;
      maxOneRun = Math.max(maxOneRun, run);
    } else {
      run = 0;
    }
    if (prev && prev === shot.look.move) repeatMoves += 1;
    prev = shot.look.move;
  }
  return { ones, longShare: total ? longBeats / total : 1, maxOneRun, repeatMoves };
}
