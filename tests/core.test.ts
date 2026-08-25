import { describe, expect, it } from "vitest";
import { clamp, evenSize, fitEven, lerp, mulberry32 } from "../src/core/random";
import { matchAspectId, sizeForAspect, sizeFromSource, clipLoopFade } from "../src/core/exportSize";
import { evalKeyframes, mediaTime } from "../src/core/timeline";
import { createDefaultProject, defaultGeneratorSource } from "../src/core/defaults";
import { parseProject, serializeProject } from "../src/core/project";
import { ensureCritters, ensureIdol, chaosStamp, randomizeProject, randomizeScene } from "../src/core/randomize";
import { store } from "../src/core/store";
import { addSource } from "../src/ui/actions";
import { applyPreset, extractPreset } from "../src/core/presets";
import { allEffects, getEffect } from "../src/effects/registry";
import { dancerForCompile } from "../src/effects/dancer";
import { compileEffectSource } from "../src/engine/compile";
import { BOOT_GENERATOR_GLSL, GENERATOR_CRITTERS_GLSL, GENERATOR_GLSL } from "../src/engine/shaders";
import { GEN_INDEX } from "../src/engine/gl";
import type { Keyframe } from "../src/core/types";
import { buildPrompt, hexToInk, samplePaletteFromImageData, snapGenSize, stillUrl } from "../src/generate/imagine";
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
  it("starts in draft so the first picture stays light", () => {
    expect(createDefaultProject().quality).toBe("draft");
  });

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

  it("maps retired places onto the simpler set", () => {
    const p = createDefaultProject();
    p.sources[0].generator = "chapel" as never;
    const loaded = parseProject(serializeProject(p));
    expect(loaded.sources[0].generator).toBe("cave");
  });

  it("drops retired Window effects from old saves", () => {
    const p = createDefaultProject();
    p.layers[0].effects.push({
      id: "fx-window",
      typeId: "window",
      enabled: true,
      params: { shape: "circle", mix: 1 },
    });
    const loaded = parseProject(serializeProject(p));
    expect(loaded.layers[0].effects.some((fx) => fx.typeId === "window")).toBe(false);
    expect(getEffect("window")).toBeUndefined();
  });
});

describe("place buttons", () => {
  it("puts a clicked place onto the selected layer", () => {
    store.replace(createDefaultProject());
    const stars = defaultGeneratorSource("stars");
    addSource(stars, true);
    expect(store.project.layers[0].sourceId).toBe(stars.id);
    expect(store.project.sources.some((s) => s.generator === "stars")).toBe(true);
    const marsh = defaultGeneratorSource("marsh");
    addSource(marsh, true);
    expect(store.project.layers[0].sourceId).toBe(marsh.id);
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
    expect(getEffect("window")).toBeUndefined();
    expect(allEffects().some((fx) => fx.id === "window")).toBe(false);
    const critterSrc = compileEffectSource(getEffect("critters")!);
    expect(getEffect("critters")?.params.find((p) => p.id === "kit")?.default).toBe("shapes");
    expect(getEffect("critters")?.params.find((p) => p.id === "kit")?.options?.map((o) => o.value)).toEqual([
      "shapes",
      "toy pop",
      "mix",
      "votives",
      "moths",
      "charms",
      "dice",
      "fruit",
      "keys",
      "teeth",
      "tape",
      "moons",
      "saints",
      "shells",
      "bells",
      "coins",
      "stamps",
      "eyes",
      "bones",
    ]);
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
      "votiveFam",
      "mothFam",
      "charmFam",
      "candle",
      "moth",
      "charmBow",
      "diceFam",
      "fruitFam",
      "keyFam",
      "teethFam",
      "tapeFam",
      "moonFam",
      "saintFam",
      "shellFam",
      "chimeFam",
      "coinFam",
      "stampFam",
      "eyesFam",
      "bonesFam",
    ]) {
      expect(critterSrc.includes(family)).toBe(true);
    }
    const idol = getEffect("dancer")!;
    expect(idol.params.find((p) => p.id === "count")?.default).toBe(1);
    expect(Number(idol.params.find((p) => p.id === "size")?.default)).toBeCloseTo(0.12);
    expect(Number(idol.params.find((p) => p.id === "size")?.min)).toBeCloseTo(0.12);
    expect(idol.params.find((p) => p.id === "place")?.default).toBe("center");
    expect(idol.params.find((p) => p.id === "crowd")?.default).toBe("normal");
    expect(idol.params.find((p) => p.id === "move")?.default).toBe("dance");
    expect(idol.params.find((p) => p.id === "move")?.options?.map((o) => o.value)).toEqual([
      "dance",
      "drift",
      "float",
      "orbit",
    ]);
    expect(idol.params.find((p) => p.id === "grow")?.default).toBe("wild");
    expect(idol.params.find((p) => p.id === "grow")?.options?.map((o) => o.value)).toContain("crown");
    expect(idol.params.find((p) => p.id === "grow")?.options?.map((o) => o.value)).toContain("twin");
    expect(idol.params.find((p) => p.id === "grow")?.options?.map((o) => o.value)).toContain("tusks");
    expect(idol.params.find((p) => p.id === "grow")?.options?.map((o) => o.value)).toContain("arms");
    expect(idol.params.find((p) => p.id === "coat")?.default).toBe("wild");
    expect(idol.params.find((p) => p.id === "coat")?.options?.map((o) => o.value)).toEqual([
      "wild",
      "cream",
      "moss",
      "sodium",
      "night",
      "candy",
      "bruise",
      "gold",
      "xerox",
      "rust",
      "ice",
      "blood",
      "acid",
      "ink",
    ]);
    expect(idol.params.find((p) => p.id === "fold")?.default).toBe("none");
    expect(idol.params.find((p) => p.id === "fold")?.options?.map((o) => o.value)).toEqual(["none", "prism", "gate", "mirror"]);
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
    expect(idolSrc.includes("figSc")).toBe(true);
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
    expect(idolSrc.includes("f.wings")).toBe(true);
    expect(idolSrc.includes("u_grow")).toBe(true);
    expect(idolSrc.includes("u_coat")).toBe(true);
    expect(idolSrc.includes("u_fold")).toBe(true);
    expect(idolSrc.includes("figFoldUv")).toBe(true);
    expect(idolSrc.includes("f.crown")).toBe(true);
    expect(idolSrc.includes("f.twin")).toBe(true);
    expect(idolSrc.includes("f.votive")).toBe(true);
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

  it("ships a short set of background places", () => {
    expect(GEN_INDEX.stars).toBe(7);
    expect(GEN_INDEX.marsh).toBe(8);
    expect(GEN_INDEX.oil).toBe(9);
    expect(GEN_INDEX.paper).toBe(10);
    expect(GEN_INDEX.cave).toBe(11);
    expect(GEN_INDEX.lot).toBeUndefined();
    expect(GEN_INDEX.chapel).toBeUndefined();
    expect(GENERATOR_GLSL).toContain("genStars");
    expect(GENERATOR_GLSL).toContain("genMarsh");
    expect(GENERATOR_GLSL).toContain("genOil");
    expect(GENERATOR_GLSL).toContain("genPaper");
    expect(GENERATOR_GLSL).toContain("genCave");
    expect(GENERATOR_GLSL).toContain("starLayer");
    expect(GENERATOR_GLSL).toContain("reed");
    expect(GENERATOR_GLSL).not.toContain("genLot");
    expect(GENERATOR_GLSL).not.toContain("genChapel");
    expect(GENERATOR_GLSL).not.toContain("genLamp");
    expect(GENERATOR_GLSL).toContain("uMode == 7");
    expect(GENERATOR_GLSL).toContain("u_audio");
    expect(GENERATOR_GLSL).toContain("u_bass");
    expect(GENERATOR_GLSL).toContain("critterField");
    expect(GENERATOR_GLSL).not.toContain("charmFam");
    expect(GENERATOR_GLSL).not.toContain("extraKitBody");
    expect(GENERATOR_GLSL).not.toContain("diceFam");
    expect(GENERATOR_GLSL).not.toContain("fruitFam");
    expect(GENERATOR_GLSL).not.toContain("saintFam");
    expect(GENERATOR_GLSL).not.toContain("shellFam");
    expect(GENERATOR_GLSL).not.toContain("eyesFam");
    expect(GENERATOR_GLSL).not.toContain("bonesFam");
    expect(GENERATOR_GLSL).not.toContain("classicBody");
    expect(BOOT_GENERATOR_GLSL).not.toContain("genStars");
    expect(BOOT_GENERATOR_GLSL).not.toContain("critterField");
    expect(BOOT_GENERATOR_GLSL).toContain("uMode");
    expect(GENERATOR_CRITTERS_GLSL).toContain("charmFam");
    expect(GENERATOR_CRITTERS_GLSL).not.toContain("diceFam");
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
    expect(Number(idol.params.size)).toBeLessThan(0.2);
    expect(Number(idol.params.count)).toBe(1);
    expect(idol.params.place).toBe("center");
    expect(idol.params.crowd ?? "normal").toBe("normal");
    expect(idol.params.form).toBeUndefined();
  });

  it("wacky rand keeps a short stack and plants overlays", () => {
    for (const seed of [1, 7, 99, 256, 90210]) {
      let p = randomizeProject({ ...createDefaultProject(), seed, randomAmount: 1 }, "all", null, null, null, true);
      p = ensureCritters(ensureIdol(p));
      const types = p.layers[0].effects.map((e) => e.typeId);
      expect(types.length).toBeLessThanOrEqual(5);
      expect(types.some((t) => t === "dancer")).toBe(true);
      expect(types.some((t) => t === "critters")).toBe(true);
    }
  });

  it("chaos stamp rerolls overlay seeds", () => {
    const base = ensureIdol(ensureCritters(createDefaultProject()));
    const stamped = chaosStamp({ ...base, seed: 11 });
    const seedOf = (p: typeof base, typeId: string) =>
      p.layers[0].effects.find((e) => e.typeId === typeId)?.params.seed;
    expect(seedOf(stamped, "critters")).not.toEqual(seedOf(base, "critters"));
    expect(seedOf(stamped, "dancer")).not.toEqual(seedOf(base, "dancer"));
  });

  it("named scene plants a place, kit, and idol wardrobe", () => {
    for (const seed of [3, 11, 77, 256]) {
      const { project, name } = randomizeScene({ ...createDefaultProject(), seed, randomAmount: 1 });
      expect(name.length).toBeGreaterThan(2);
      const types = project.layers[0].effects.map((e) => e.typeId);
      expect(types.length).toBeLessThanOrEqual(5);
      expect(types).toContain("dancer");
      expect(types).toContain("critters");
      const idol = project.layers[0].effects.find((e) => e.typeId === "dancer")!;
      const critters = project.layers[0].effects.find((e) => e.typeId === "critters")!;
      expect(idol.params.form).toBeUndefined();
      expect(Number(idol.params.size)).toBeLessThan(0.2);
      expect(idol.params.crowd).toBe("normal");
      expect(idol.params.move).not.toBe("hold");
      expect(typeof critters.params.kit).toBe("string");
      expect(project.sources.some((s) => s.kind === "generator" && s.generator)).toBe(true);
    }
  });

  it("ships luma key and dropout", () => {
    expect(getEffect("key")?.name).toBe("Luma key");
    expect(getEffect("dropout")?.name).toBe("Dropout");
    expect(getEffect("dropout")?.temporal).toBe(true);
    const analog = compileEffectSource(getEffect("analog")!);
    expect(analog).toContain("u_audio");
    expect(analog).toContain("u_bass");
    const drop = compileEffectSource(getEffect("dropout")!);
    expect(drop).toContain("u_bass");
    expect(drop).toContain("u_audio");
    expect(drop).toContain("beat");
  });
});

describe("prompt generation", () => {
  it("turns a source palette into ink names, not a copy instruction", () => {
    const prompt = buildPrompt("foggy marsh at dusk", ["#112233", "#aacc00"], true);
    expect(prompt).toContain("foggy marsh at dusk");
    expect(prompt).toMatch(/palette of/i);
    expect(prompt).toMatch(/still photograph/i);
    expect(prompt).not.toMatch(/not a copy/i);
    expect(prompt).not.toContain("#112233");
    expect(hexToInk("#112233")).toBeTruthy();
  });

  it("skips reference language when not using a source", () => {
    const prompt = buildPrompt("red room", ["#ff0000"], false);
    expect(prompt).not.toContain("#ff0000");
    expect(prompt).toContain("red room");
    expect(prompt).toMatch(/still photograph/i);
  });

  it("snaps export sizes to Sana's 768px box", () => {
    expect(snapGenSize(960, 540)).toEqual({ width: 768, height: 432 });
    expect(snapGenSize(720, 960)).toEqual({ width: 576, height: 768 });
    expect(snapGenSize(1024, 1024)).toEqual({ width: 768, height: 768 });
    expect(snapGenSize(1280, 720)).toEqual({ width: 768, height: 432 });
  });

  it("asks Sana for a still without rewriting the prompt", () => {
    const url = stillUrl("red room", 42, 768, 432);
    expect(url).toContain("image.pollinations.ai/prompt/");
    expect(url).toContain("model=sana");
    expect(url).toContain("enhance=false");
    expect(url).not.toContain("enhance=true");
    expect(url).toContain("width=768");
    expect(url).toContain("height=432");
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

describe("clip loop", () => {
  it("fades only the last beats into the first frame", () => {
    expect(clipLoopFade(0, 24)).toBe(0);
    expect(clipLoopFade(12, 24)).toBe(0);
    expect(clipLoopFade(23, 24)).toBeGreaterThan(0.5);
    expect(clipLoopFade(23, 24)).toBeLessThanOrEqual(1);
  });
});
