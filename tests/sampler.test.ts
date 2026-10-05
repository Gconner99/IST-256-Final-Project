import { describe, expect, it } from "vitest";
import { PRESETS, PRESET_ORDER } from "../src/sampler/presets";
import { buildScore, contourAt } from "../src/sampler/score";
import { limitInPlace, lowpassInPlace, renderArrangement, rms, roughness } from "../src/sampler/render";
import { encodeWav } from "../src/sampler/wav";

function sine(seconds: number, freq: number, sampleRate = 44100, amp = 0.8): Float32Array[] {
  const n = Math.floor(sampleRate * seconds);
  const data = new Float32Array(n);
  for (let i = 0; i < n; i++) data[i] = Math.sin((2 * Math.PI * freq * i) / sampleRate) * amp;
  return [data];
}

describe("muraille presets", () => {
  it("ships the five measured settings", () => {
    expect(PRESET_ORDER).toEqual(["dorees", "doki", "perdre", "lexo", "muraille"]);
    expect(PRESETS.doki.shredRate).toBeGreaterThan(PRESETS.dorees.shredRate);
    expect(PRESETS.dorees.shredRate).toBeGreaterThan(PRESETS.muraille.shredRate);
    expect(PRESETS.muraille.shredRate).toBe(0);
    expect(PRESETS.muraille.clickRate).toBe(0);
    expect(PRESETS.muraille.limiter).toBe(false);
    expect(PRESETS.perdre.clickRate).toBeGreaterThan(PRESETS.dorees.clickRate);
    expect(PRESETS.lexo.lowpass).toBeLessThan(PRESETS.dorees.lowpass);
    expect(PRESETS.muraille.outputGain).toBeCloseTo(0.25);
  });
});

describe("chop score", () => {
  it("is deterministic and tiles a bed across the arrangement", () => {
    const a = buildScore(30, 8, PRESETS.dorees, 7);
    const b = buildScore(30, 8, PRESETS.dorees, 7);
    expect(a).toEqual(b);
    expect(buildScore(30, 8, PRESETS.dorees, 8)).not.toEqual(a);

    const beds = a.filter((event) => event.kind === "bed");
    expect(beds.length).toBeGreaterThan(2);
    expect(beds[0].time).toBeCloseTo(0, 3);
    let covered = 0;
    for (const bed of beds) {
      expect(bed.time).toBeLessThanOrEqual(covered + 0.002);
      expect(bed.offset).toBeGreaterThanOrEqual(0);
      expect(bed.offset + bed.duration).toBeLessThanOrEqual(30.01);
      covered = bed.time + bed.duration;
    }
    expect(covered).toBeGreaterThanOrEqual(8 - 0.002);
  });

  it("keeps scraps inside the measured length range and leaves muraille uncut", () => {
    const doki = buildScore(20, 4, PRESETS.doki, 3);
    const shreds = doki.filter((event) => event.kind === "shred");
    expect(shreds.length).toBeGreaterThan(40);
    expect(shreds.length).toBeLessThan(160);
    for (const scrap of shreds) {
      expect(scrap.duration).toBeGreaterThanOrEqual(0.003);
      expect(scrap.duration).toBeLessThanOrEqual(PRESETS.doki.shredMax + 1e-3);
      if (4 - scrap.time > PRESETS.doki.shredMax) {
        expect(scrap.duration).toBeGreaterThanOrEqual(PRESETS.doki.shredMin - 1e-4);
      }
    }
    const repeats = shreds.filter((scrap, index) => index > 0 && scrap.offset === shreds[index - 1].offset);
    expect(repeats.length / shreds.length).toBeLessThan(0.2);

    const calm = buildScore(20, 12, PRESETS.muraille, 1);
    expect(calm.every((event) => event.kind === "bed")).toBe(true);
    expect(calm.some((event) => Math.abs(event.pan) > 0.001)).toBe(false);
  });

  it("shapes loudness the way the record does", () => {
    expect(contourAt("flat", 1, 10)).toBe(1);
    expect(contourAt("still", 4, 10)).toBe(1);
    expect(contourAt("swell", 5, 10)).toBeGreaterThan(contourAt("swell", 0, 10));
    expect(contourAt("fade", 9.5, 10)).toBeLessThan(contourAt("fade", 1, 10));
    expect(contourAt("dropout", 9.8, 10)).toBeLessThan(contourAt("dropout", 2, 10));
    expect(contourAt("dropout", 10, 10)).toBeCloseTo(0);
  });
});

describe("render and wav", () => {
  it("chops a smooth tone into something rougher than the quiet preset", () => {
    const source = sine(3, 220);
    const calmScore = buildScore(3, 1.5, PRESETS.muraille, 5);
    const cutScore = buildScore(3, 1.5, PRESETS.doki, 5);
    const calm = renderArrangement(source, 44100, calmScore, PRESETS.muraille, 1.5);
    const cut = renderArrangement(source, 44100, cutScore, PRESETS.doki, 1.5);
    expect(rms(calm.left)).toBeGreaterThan(0.01);
    expect(rms(calm.left)).toBeLessThan(rms(cut.left));
    expect(roughness(cut.left)).toBeGreaterThan(roughness(calm.left) * 1.5);
    for (const data of [calm.left, calm.right, cut.left, cut.right]) {
      for (let i = 0; i < data.length; i += 100) expect(Number.isFinite(data[i])).toBe(true);
    }
  });

  it("rolls off highs and holds peaks down", () => {
    const sr = 44100;
    const low = sine(0.2, 200, sr, 0.5)[0];
    const high = sine(0.2, 8000, sr, 0.5)[0];
    lowpassInPlace(low, sr, 1000);
    lowpassInPlace(high, sr, 1000);
    expect(rms(high)).toBeLessThan(rms(low) * 0.35);

    const hotL = sine(0.3, 180, sr, 1.4)[0];
    const hotR = hotL.slice();
    limitInPlace(hotL, hotR, sr, 0.5);
    let peak = 0;
    for (let i = 0; i < hotL.length; i++) peak = Math.max(peak, Math.abs(hotL[i]), Math.abs(hotR[i]));
    expect(peak).toBeLessThan(0.72);
    expect(peak).toBeGreaterThan(0.2);
  });

  it("writes a stereo wav header", () => {
    const left = new Float32Array([0, 0.5, -1, 2]);
    const right = new Float32Array([0, -0.5, 1, -2]);
    const wav = encodeWav([left, right], 44100);
    const view = new DataView(wav.buffer, wav.byteOffset, wav.byteLength);
    expect(String.fromCharCode(wav[0], wav[1], wav[2], wav[3])).toBe("RIFF");
    expect(String.fromCharCode(wav[8], wav[9], wav[10], wav[11])).toBe("WAVE");
    expect(view.getUint16(20, true)).toBe(1);
    expect(view.getUint16(22, true)).toBe(2);
    expect(view.getUint32(24, true)).toBe(44100);
    expect(wav.byteLength).toBe(44 + 4 * 4);
    expect(view.getInt16(44 + 6, true)).toBeLessThan(0);
    expect(view.getInt16(44 + 12, true)).toBe(32767);
  });
});
