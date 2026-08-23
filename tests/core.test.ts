import { describe, expect, it } from "vitest";
import { clamp, evenSize, fitEven, lerp, mulberry32 } from "../src/core/random";
import { matchAspectId, sizeForAspect, sizeFromSource } from "../src/core/exportSize";
import { evalKeyframes, mediaTime } from "../src/core/timeline";
import { createDefaultProject } from "../src/core/defaults";
import { parseProject, serializeProject } from "../src/core/project";
import { ensureCritters, ensureIdol, randomizeProject } from "../src/core/randomize";
import { applyPreset, extractPreset } from "../src/core/presets";
import { allEffects, getEffect } from "../src/effects/registry";
import { dancerForCompile } from "../src/effects/dancer";
import { compileEffectSource } from "../src/engine/compile";
import { GENERATOR_GLSL } from "../src/engine/shaders";
import { GEN_INDEX } from "../src/engine/gl";
import type { Keyframe } from "../src/core/types";
import { buildPrompt, samplePaletteFromImageData } from "../src/generate/imagine";
import { isAudioFile, sampleLevelsFromSamples } from "../src/media/audio";

describe("seeded random", () => {
  it("is reproducible", () => {
    const a = mulberry32(256);
    const b = mulberry32(256);
    expect([a(), a(), a()]).toEqual([b(), b(), b()]);
  });

  it("clamp and lerp", () => {
    expect(clamp(5, 0, 1)).toBe(1);
    expect(lerp(0, 10, 0.25)).toBe(2.5);
  });

  it("evenSize rounds to even H.264-safe dimensions", () => {
    expect(evenSize(1280)).toBe(1280);
    expect(evenSize(1281)).toBe(1280);
    expect(evenSize(1)).toBe(16);
  });

  it("fitEven shrinks to an even box", () => {
    const s = fitEven(1920, 1080, 960, 540);
    expect(s.width).toBe(960);
    expect(s.height).toBe(540);
    expect(s.width % 2).toBe(0);
    expect(s.height % 2).toBe(0);
  });

  it("fitEven keeps a tall frame tall", () => {
    const s = fitEven(720, 960, 960, 960);
    expect(s.width).toBe(720);
    expect(s.height).toBe(960);
  });
});

describe("export aspect sizes", () => {
  it("builds even 16:9, 4:3, and 3:4 frames", () => {
    const wide = sizeForAspect(16, 9, 1280);
    expect(wide).toEqual({ width: 1280, height: 720 });
    const photo = sizeForAspect(4, 3, 1280);
    expect(photo.width / photo.height).toBeCloseTo(4 / 3, 2);
    expect(photo.width % 2).toBe(0);
    expect(photo.height % 2).toBe(0);
    const tall = sizeForAspect(3, 4, 1280);
    expect(tall.width).toBe(960);
    expect(tall.height).toBe(1280);
    expect(matchAspectId(tall.width, tall.height)).toBe("3:4");
  });

  it("matches a source's shape", () => {
    const s = sizeFromSource(1080, 1920, 1280);
    expect(s.height).toBe(1280);
    expect(s.width).toBe(720);
    expect(matchAspectId(s.width, s.height)).toBe("9:16");
  });
});

describe("timeline", () => {
  it("loops forward time", () => {
    expect(mediaTime(12, 10, "forward", 1, true)).toBeCloseTo(2);
  });

  it("ping-pongs", () => {
    expect(mediaTime(2, 10, "pingpong", 1, true)).toBeCloseTo(2);
    expect(mediaTime(12, 10, "pingpong", 1, true)).toBeCloseTo(8);
  });

  it("interpolates keyframes", () => {
    const keys: Keyframe[] = [
      { id: "a", time: 0, layerId: "l", target: "effect", paramId: "hue", value: 0, easing: "linear" },
      { id: "b", time: 2, layerId: "l", target: "effect", paramId: "hue", value: 10, easing: "linear" },
    ];
    expect(evalKeyframes(keys, 1, 0)).toBeCloseTo(5);
    expect(evalKeyframes([], 1, 3)).toBe(3);
  });
});

describe("project files", () => {
  it("round-trips JSON without runtime media", () => {
    const p = createDefaultProject();
    p.sources[0].bitmap = {} as ImageBitmap;
    p.sources.push({
      id: "aud",
      name: "song.mp3",
      kind: "audio",
      width: 0,
      height: 0,
      duration: 12,
      audio: {} as HTMLAudioElement,
      pcm: {} as AudioBuffer,
    });
    const json = serializeProject(p);
    const loaded = parseProject(json);
    expect(loaded.app).toBe("phosphene");
    expect(loaded.layers).toHaveLength(1);
    expect(loaded.sources[0].bitmap).toBeNull();
    expect(loaded.sources[1].kind).toBe("audio");
    expect(loaded.sources[1].audio).toBeNull();
    expect(loaded.sources[1].pcm).toBeNull();
    expect(json).not.toContain("bitmap");
    expect(json).not.toContain('"audio":');
    expect(json).not.toContain('"pcm":');
  });

  it("rejects unknown files", () => {
    expect(() => parseProject("{}")).toThrow(/Not a Phosphene/);
  });
});

describe("effects registry", () => {
  it("ships a usable MVP library", () => {
    expect(allEffects().length).toBeGreaterThanOrEqual(15);
    for (const id of ["grade", "warp", "chroma", "analog", "kaleido", "echo", "bloom", "smear", "critters", "dancer"]) {
      expect(getEffect(id)).toBeTruthy();
    }
    expect(getEffect("critters")?.category).toBe("wacky");
    expect(getEffect("critters")?.name).toBe("Floaters");
    expect(getEffect("dancer")?.name).toBe("Idol");
    const critterSrc = compileEffectSource(getEffect("critters")!);
    expect(getEffect("critters")?.params.find((p) => p.id === "kit")?.default).toBe("shapes");
    for (const family of [
      "classicBody",
      "constellation",
      "spikes",
      "cloud",
      "crescent",
      "scribble",
      "twins",
      "saw",
      "ring",
      "famSlot",
      "floaterId",
      "musicNote",
      "vinyl",
      "cassette",
      "headphones",
      "heart",
      "sparkle",
      "mic",
      "speaker",
      "clef",
      "u_kit",
      "musicFam",
    ]) {
      expect(critterSrc.includes(family)).toBe(true);
    }
    const idol = getEffect("dancer")!;
    expect(idol.params.find((p) => p.id === "count")?.default).toBe(1);
    expect(Number(idol.params.find((p) => p.id === "size")?.default)).toBeLessThan(0.45);
    expect(idol.params.find((p) => p.id === "place")?.default).toBe("center");
    expect(idol.params.find((p) => p.id === "crowd")?.default).toBe("normal");
    expect(idol.params.find((p) => p.id === "move")?.default).toBe("dance");
    expect(idol.params.find((p) => p.id === "form")).toBeUndefined();
    expect(Number(idol.params.find((p) => p.id === "echo")?.default)).toBeGreaterThan(0.3);
    const idolSrc = compileEffectSource(idol);
    expect(idolSrc.includes("figureMap")).toBe(true);
    expect(idolSrc.includes("figureFace")).toBe(true);
    expect(idolSrc.includes("figureRender")).toBe(true);
    expect(idolSrc.includes("figureRenderMini")).toBe(false);
    expect(idolSrc.includes("geomRender")).toBe(false);
    expect(idolSrc.includes("geomRenderMini")).toBe(false);
    expect(idolSrc.includes("impRender")).toBe(false);
    expect(idolSrc.includes("impHit")).toBe(false);
    expect(idolSrc.includes("figTravel")).toBe(true);
    expect(idolSrc.includes("figCarry")).toBe(true);
    expect(idolSrc.includes("u_move")).toBe(true);
    expect(idolSrc.includes("figCrowdOff")).toBe(true);
    expect(idolSrc.includes("figPlace")).toBe(true);
    expect(idolSrc.includes("figDanceStyle")).toBe(true);
    expect(idolSrc.includes("u_place")).toBe(true);
    expect(idolSrc.includes("u_crowd")).toBe(true);
    expect(idolSrc.includes("figRaySphere")).toBe(true);
    expect(idolSrc.includes("figureHit")).toBe(true);
    expect(idolSrc.includes("u_echo")).toBe(true);
    expect(idolSrc.includes("f.petals")).toBe(true);
    expect(idolSrc.includes("f.skirt")).toBe(true);
    expect(idolSrc.includes("f.antenna")).toBe(true);
    expect(idolSrc.includes("f.halo")).toBe(true);
    expect(idolSrc.includes("f.blush")).toBe(true);
    expect(idolSrc.includes("u_audio")).toBe(true);
    expect(idolSrc.includes("u_bass")).toBe(true);
    const miniSrc = compileEffectSource(dancerForCompile(true));
    expect(miniSrc.includes("figureRenderMini")).toBe(true);
    expect(miniSrc.includes("figWildMini")).toBe(true);
    expect(miniSrc.includes("figMiniPlace")).toBe(true);
    expect(miniSrc.includes("geomRender")).toBe(false);
    expect(miniSrc.includes("impRender")).toBe(false);
  });

  it("ships extra background generators", () => {
    expect(GEN_INDEX.stars).toBe(7);
    expect(GEN_INDEX.marsh).toBe(8);
    expect(GEN_INDEX.oil).toBe(9);
    expect(GEN_INDEX.paper).toBe(10);
    expect(GEN_INDEX.cave).toBe(11);
    expect(GENERATOR_GLSL).toContain("genStars");
    expect(GENERATOR_GLSL).toContain("genMarsh");
    expect(GENERATOR_GLSL).toContain("genOil");
    expect(GENERATOR_GLSL).toContain("genPaper");
    expect(GENERATOR_GLSL).toContain("genCave");
    expect(GENERATOR_GLSL).toContain("uMode == 7");
    expect(GENERATOR_GLSL).toContain("uMode == 10");
  });

  it("compiles each effect into a wrapped apply() shader", () => {
    for (const fx of allEffects()) {
      const src = compileEffectSource(fx);
      expect(src).toContain("vec4 apply(vec2 uv)");
      expect(src).toContain("void main()");
    }
  });
});

describe("randomize + presets", () => {
  it("same seed produces the same parameter set", () => {
    const a = randomizeProject(createDefaultProject(), "all", null, null, null);
    const b = randomizeProject(createDefaultProject(), "all", null, null, null);
    expect(a.layers[0].effects[0].params).toEqual(b.layers[0].effects[0].params);
  });

  it("extract/apply preset restores effect params without requiring sources", () => {
    const p = randomizeProject(createDefaultProject(), "all", null, null, null);
    const preset = extractPreset(p, "look");
    const blank = createDefaultProject();
    const applied = applyPreset(blank, preset);
    expect(applied.layers[0].effects.map((e) => e.typeId)).toEqual(p.layers[0].effects.map((e) => e.typeId));
    expect(applied.layers[0].effects[0].params).toEqual(p.layers[0].effects[0].params);
    expect(applied.globalFeedback.amount).toBe(p.globalFeedback.amount);
  });

  it("rebuilds a different look when the seed changes", () => {
    const a = randomizeProject({ ...createDefaultProject(), seed: 3, randomAmount: 1 }, "all", null, null, null);
    const b = randomizeProject({ ...createDefaultProject(), seed: 99, randomAmount: 1 }, "all", null, null, null);
    const sig = (p: ReturnType<typeof createDefaultProject>) =>
      `${p.layers[0].effects.map((e) => e.typeId).join(",")}|${JSON.stringify(p.layers[0].effects.map((e) => e.params))}`;
    expect(sig(a)).not.toEqual(sig(b));
  });

  it("can stamp critters onto layers that lack them", () => {
    const p = createDefaultProject();
    expect(p.layers[0].effects.some((e) => e.typeId === "critters")).toBe(false);
    const withC = ensureCritters(p);
    expect(withC.layers[0].effects.some((e) => e.typeId === "critters")).toBe(true);
    expect(ensureCritters(withC).layers[0].effects.filter((e) => e.typeId === "critters")).toHaveLength(1);
  });

  it("can stamp an idol onto layers that lack them", () => {
    const p = createDefaultProject();
    expect(p.layers[0].effects.some((e) => e.typeId === "dancer")).toBe(false);
    const withI = ensureIdol(p);
    expect(withI.layers[0].effects.some((e) => e.typeId === "dancer")).toBe(true);
    expect(ensureIdol(withI).layers[0].effects.filter((e) => e.typeId === "dancer")).toHaveLength(1);
    const idol = withI.layers[0].effects.find((e) => e.typeId === "dancer")!;
    expect(Number(idol.params.size)).toBeLessThan(0.55);
    expect(Number(idol.params.count)).toBe(1);
    expect(idol.params.place).toBe("center");
    expect(idol.params.crowd ?? "normal").toBe("normal");
    expect(idol.params.form).toBeUndefined();
  });
});

describe("prompt generation", () => {
  it("asks for a new image, not a copy, when a source palette is provided", () => {
    const prompt = buildPrompt("foggy marsh at dusk", ["#112233", "#aacc00"], true);
    expect(prompt).toContain("foggy marsh at dusk");
    expect(prompt).toMatch(/NEW original/i);
    expect(prompt).toContain("#112233");
    expect(prompt).toMatch(/not a copy/i);
  });

  it("skips reference language when not using a source", () => {
    const prompt = buildPrompt("red room", ["#ff0000"], false);
    expect(prompt).not.toContain("#ff0000");
    expect(prompt).toContain("red room");
  });

  it("samples distinct palette swatches from pixels", () => {
    const data = new Uint8ClampedArray(24 * 24 * 4);
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 10;
      data[i + 1] = 20;
      data[i + 2] = 30;
      data[i + 3] = 255;
    }
    const palette = samplePaletteFromImageData(data, 24, 24);
    expect(palette[0]).toBe("#0a141e");
    expect(palette.length).toBeGreaterThan(0);
  });
});

describe("soundtrack", () => {
  it("detects audio files by type or extension", () => {
    expect(isAudioFile({ name: "song.mp3", type: "audio/mpeg" })).toBe(true);
    expect(isAudioFile({ name: "mix.WAV", type: "" })).toBe(true);
    expect(isAudioFile({ name: "pic.png", type: "image/png" })).toBe(false);
    expect(isAudioFile({ name: "clip.mp4", type: "video/mp4" })).toBe(false);
  });

  it("reads energy from a loud sample window", () => {
    const sr = 44100;
    const ch = new Float32Array(sr);
    for (let i = 0; i < ch.length; i++) ch[i] = Math.sin((i / sr) * Math.PI * 2 * 80) * 0.8;
    const loud = sampleLevelsFromSamples(ch, sr, 1, 0.1);
    const quiet = sampleLevelsFromSamples(new Float32Array(sr), sr, 1, 0.1);
    expect(loud.energy).toBeGreaterThan(0.2);
    expect(loud.bass).toBeGreaterThan(0.1);
    expect(quiet.energy).toBeLessThan(0.05);
  });
});
