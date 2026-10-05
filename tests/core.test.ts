import { describe, expect, it } from "vitest";
import { clamp, evenSize, fitEven, lerp, mulberry32 } from "../src/core/random";
import { matchAspectId, sizeForAspect, sizeFromSource, clipLoopFade, encodeBitrateMbps, encodeFps, encodeDuration, EXPORT_FULL_LONG } from "../src/core/exportSize";
import { evalKeyframes, mediaTime } from "../src/core/timeline";
import { createDefaultProject, defaultGeneratorSource } from "../src/core/defaults";
import { parseProject, serializeProject } from "../src/core/project";
import { ensureCritters, ensureIdol, chaosStamp, randomizeFieldSource, randomizeProject, FIELD_ROOMS } from "../src/core/randomize";
import { beatGrid, beatIndexAt, buildCutReel, reelStats, shotAtTime } from "../src/core/cutEdit";
import { COLOR_PACKS, packFromUnknown, groundsForLook, inkForLook, EFFECT_PALETTES } from "../src/core/colorPacks";
import { ANIMAL_CHAINS, animalChainLayout, animalFromUnknown, applyHuntPose, buildField, cameraFromUnknown, chainPath, clampCollageChainMorph, clampCollageChainSmooth, clampCollageChainTravel, clampCollageChainVary, clampCollageDensity, clampCollagePace, clampCollageScale, clampHuntWideMax, clampHuntWideMin, clampPoleCount, clampSpringStrength, COLLAGE_KITS, COLLAGE_MOVES, dropSlam, groundsForKit, huntParamsFrom, huntSelectFromUnknown, isFieldMove, isFlyMove, isHeraldry, isMusicMove, isPleasingMove, isSimMove, kindsForKit, pickHuntSubject, sceneAt, sceneFromGenerator, spotIndex, stepHunt, stepIndex, tempoTick, HERALDRY_ROOMS } from "../src/engine/heraldry";
import { flowAt, initFieldSim, poleState, rebuildLinks, simParamsFrom, stepFieldSim } from "../src/engine/fieldSim";
import { agentParamsFrom, buildFormation, FIELD_PATTERNS, fieldLoop, FORMATION_KINDS, PatternField, resolveFieldPattern } from "../src/engine/agentField";
import { store } from "../src/core/store";
import { addSource } from "../src/ui/actions";
import { applyPreset, extractPreset } from "../src/core/presets";
import { allEffects, getEffect } from "../src/effects/registry";
import { dancerForCompile } from "../src/effects/dancer";
import { compileEffectSource } from "../src/engine/compile";
import { BOOT_GENERATOR_GLSL, COMIC_GENERATOR_GLSL, CONFETTI_GENERATOR_GLSL, CORK_GENERATOR_GLSL, DISCO_GENERATOR_GLSL, FELT_GENERATOR_GLSL, FIELDS_GLSL, FOIL_GENERATOR_GLSL, GENERATOR_GLSL, GINGHAM_GENERATOR_GLSL, PLUSH_GENERATOR_GLSL, QUILT_GENERATOR_GLSL, SEQUIN_GENERATOR_GLSL, SKETCH_GENERATOR_GLSL, SPRINKLE_GENERATOR_GLSL, STAGE_GENERATOR_GLSL, TERRAZZO_GENERATOR_GLSL, VELVET_GENERATOR_GLSL, YARN_GENERATOR_GLSL } from "../src/engine/shaders";
import { GEN_INDEX } from "../src/engine/gl";
import type { Keyframe } from "../src/core/types";
import { buildPrompt, hexToInk, samplePaletteFromImageData, snapGenSize, stillUrl } from "../src/generate/imagine";
import { beatEnvelope, copyWrappedChannel, detectBeats, downbeatOffset, estimateBpm, estimateTempo, isAudioFile, lockBeatsToGrid, sampleLevelsFromSamples, soundtrackExportOrigin, tempoPulse } from "../src/media/audio";
import { setSoundtrack } from "../src/ui/actions";
import { seekVideo } from "../src/media/sources";

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

  it("builds a full-HD 16:9 frame", () => {
    expect(sizeForAspect(16, 9, EXPORT_FULL_LONG)).toEqual({ width: 1920, height: 1080 });
  });

  it("encodes 30 fps and scales bitrate for 1080p", () => {
    expect(encodeFps(24)).toBe(24);
    expect(encodeFps(60)).toBe(30);
    expect(encodeDuration(40)).toBe(32);
    expect(encodeBitrateMbps(12, 1280, 720)).toBe(12);
    expect(encodeBitrateMbps(12, 1920, 1080)).toBeGreaterThanOrEqual(16);
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

  it("drops retired Buddy effects from old saves", () => {
    const p = createDefaultProject();
    p.layers[0].effects.push({
      id: "fx-buddy",
      typeId: "buddy",
      enabled: true,
      params: { kind: "mix", mix: 1 },
    });
    const loaded = parseProject(serializeProject(p));
    expect(loaded.layers[0].effects.some((fx) => fx.typeId === "buddy")).toBe(false);
  });

  it("drops retired Idol effects from old saves", () => {
    const p = createDefaultProject();
    p.layers[0].effects.push({
      id: "fx-idol",
      typeId: "dancer",
      enabled: true,
      params: { size: 0.12, mix: 1 },
    });
    const loaded = parseProject(serializeProject(p));
    expect(loaded.layers[0].effects.some((fx) => fx.typeId === "dancer")).toBe(false);
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
    const stage = defaultGeneratorSource("stage");
    addSource(stage, true);
    expect(store.project.layers[0].sourceId).toBe(stage.id);
    expect(stage.name).toBe("STAGE");
    expect(stage.generator).toBe("stage");
    const sketch = defaultGeneratorSource("sketch");
    addSource(sketch, true);
    expect(store.project.layers[0].sourceId).toBe(sketch.id);
    expect(sketch.name).toBe("SKETCH");
    expect(sketch.generator).toBe("sketch");
    const felt = defaultGeneratorSource("felt");
    addSource(felt, true);
    expect(store.project.layers[0].sourceId).toBe(felt.id);
    expect(felt.name).toBe("FELT");
    const foil = defaultGeneratorSource("foil");
    addSource(foil, true);
    expect(foil.generator).toBe("foil");
    const plush = defaultGeneratorSource("plush");
    addSource(plush, true);
    expect(plush.name).toBe("PLUSH");
    const yarn = defaultGeneratorSource("yarn");
    addSource(yarn, true);
    expect(yarn.name).toBe("YARN");
    const sequin = defaultGeneratorSource("sequin");
    addSource(sequin, true);
    expect(sequin.generator).toBe("sequin");
    const quilt = defaultGeneratorSource("quilt");
    addSource(quilt, true);
    expect(quilt.name).toBe("QUILT");
    const cork = defaultGeneratorSource("cork");
    addSource(cork, true);
    expect(cork.name).toBe("CORK");
    const gingham = defaultGeneratorSource("gingham");
    addSource(gingham, true);
    expect(gingham.generator).toBe("gingham");
    const sprinkle = defaultGeneratorSource("sprinkle");
    addSource(sprinkle, true);
    expect(sprinkle.name).toBe("SPRINKLE");
    const velvet = defaultGeneratorSource("velvet");
    addSource(velvet, true);
    expect(velvet.name).toBe("VELVET");
    const confetti = defaultGeneratorSource("confetti");
    addSource(confetti, true);
    expect(confetti.name).toBe("CONFETTI");
    const disco = defaultGeneratorSource("disco");
    addSource(disco, true);
    expect(disco.generator).toBe("disco");
    const terrazzo = defaultGeneratorSource("terrazzo");
    addSource(terrazzo, true);
    expect(terrazzo.name).toBe("TERRAZZO");
    const comic = defaultGeneratorSource("comic");
    addSource(comic, true);
    expect(comic.generator).toBe("comic");
    const lattice = defaultGeneratorSource("lattice");
    addSource(lattice, true);
    expect(lattice.generator).toBe("lattice");
    expect(lattice.name).toBe("LATTICE");
    expect(defaultGeneratorSource("tessera").generator).toBe("tessera");
    expect(defaultGeneratorSource("phase").generator).toBe("phase");
    expect(defaultGeneratorSource("coil").generator).toBe("coil");
    expect(defaultGeneratorSource("prism").generator).toBe("prism");
    const tour = defaultGeneratorSource("heraldry");
    addSource(tour, true);
    expect(tour.generator).toBe("wallpaper");
    expect(tour.name).toBe("RUSH · SAILOR");
    expect(tour.collageMove).toBe("rush");
    expect(tour.colorA).toMatch(/^#[0-9a-f]{6}$/i);
    expect(tour.colorA).not.toBe("#ffffff");
    expect(tour.collageKit).toBe("sailor");
    expect(defaultGeneratorSource("wallpaper", "love").name).toBe("RUSH · LOVE");
    expect(defaultGeneratorSource("giants", "circus").name).toBe("TUNNEL · CIRCUS");
    expect(defaultGeneratorSource("shower", "nature").name).toBe("BOUNCE · GROVE");
    expect(defaultGeneratorSource("heraldry", "fruit", "spiral").collageKit).toBe("fruit");
    expect(defaultGeneratorSource("heraldry", "space", "spiral").name).toBe("SPIRAL · SPACE");
    expect(defaultGeneratorSource("heraldry", "sweet", "bounce").name).toBe("BOUNCE · SWEET");
    expect(defaultGeneratorSource("heraldry", "music", "flash").name).toBe("FLASH · MUSIC");
    expect(defaultGeneratorSource("heraldry", "circus", "helix").name).toBe("HELIX · CIRCUS");
    expect(defaultGeneratorSource("heraldry", "space", "gyre").name).toBe("GYRE · SPACE");
    expect(defaultGeneratorSource("heraldry", "love", "well").name).toBe("WELL · LOVE");
    expect(defaultGeneratorSource("heraldry", "sailor", "hall").name).toBe("HALL · SAILOR");
    expect(defaultGeneratorSource("heraldry", "fruit", "drift").name).toBe("DRIFT · FRUIT");
    expect(defaultGeneratorSource("heraldry", "music", "braid").name).toBe("BRAID · MUSIC");
    expect(defaultGeneratorSource("heraldry", "arcade", "sway").name).toBe("SWAY · ARCADE");
    expect(defaultGeneratorSource("heraldry", "love", "glow").name).toBe("GLOW · LOVE");
    expect(defaultGeneratorSource("heraldry", "music", "hop").name).toBe("HOP · MUSIC");
    expect(defaultGeneratorSource("heraldry", "music", "kick").name).toBe("KICK · MUSIC");
    expect(defaultGeneratorSource("heraldry", "sweet", "jelly").name).toBe("JELLY · SWEET");
    expect(defaultGeneratorSource("heraldry", "sailor", "tide").name).toBe("TIDE · SAILOR");
    expect(defaultGeneratorSource("heraldry", "love", "rings").name).toBe("RINGS · LOVE");
    expect(defaultGeneratorSource("heraldry", "fruit", "loom").name).toBe("LOOM · FRUIT");
    expect(defaultGeneratorSource("heraldry", "nature", "petal").name).toBe("PETAL · GROVE");
    expect(defaultGeneratorSource("heraldry", "space", "flock").name).toBe("FLOCK · SPACE");
    expect(defaultGeneratorSource("heraldry", "circus", "wheel").name).toBe("WHEEL · CIRCUS");
    expect(defaultGeneratorSource("heraldry", "music", "silk").name).toBe("SILK · MUSIC");
    expect(defaultGeneratorSource("heraldry", "music", "bars").name).toBe("BARS · MUSIC");
    expect(defaultGeneratorSource("heraldry", "circus", "ripple").name).toBe("RIPPLE · CIRCUS");
    expect(defaultGeneratorSource("heraldry", "love", "swing").name).toBe("SWING · LOVE");
    expect(defaultGeneratorSource("heraldry", "space", "burst").name).toBe("BURST · SPACE");
    expect(defaultGeneratorSource("heraldry", "sweet", "halo").name).toBe("HALO · SWEET");
    expect(defaultGeneratorSource("heraldry", "fruit", "wave").name).toBe("WAVE · FRUIT");
    expect(defaultGeneratorSource("heraldry", "sailor", "drop").name).toBe("DROP · SAILOR");
    expect(defaultGeneratorSource("heraldry", "love", "spot").name).toBe("SPOT · LOVE");
    expect(defaultGeneratorSource("heraldry", "circus", "pong").name).toBe("PONG · CIRCUS");
    expect(defaultGeneratorSource("heraldry", "space", "step").name).toBe("STEP · SPACE");
    expect(defaultGeneratorSource("heraldry", "love", "moire").name).toBe("MOIRE · LOVE");
    expect(defaultGeneratorSource("heraldry", "sailor", "grid").name).toBe("GRID · SAILOR");
    expect(defaultGeneratorSource("heraldry", "music", "zip").name).toBe("ZIP · MUSIC");
    expect(defaultGeneratorSource("heraldry", "sweet", "ghost").name).toBe("GHOST · SWEET");
    expect(defaultGeneratorSource("heraldry", "fruit", "poly").name).toBe("POLY · FRUIT");
    expect(defaultGeneratorSource("heraldry", "nature", "fall").name).toBe("FALL · GROVE");
    expect(defaultGeneratorSource("heraldry", "space", "liss").name).toBe("LISS · SPACE");
    expect(defaultGeneratorSource("heraldry", "love", "snap").name).toBe("SNAP · LOVE");
    expect(defaultGeneratorSource("heraldry", "space", "chain").name).toBe("CHAIN · SPACE");
    expect(defaultGeneratorSource("heraldry", "sailor", "rush").collageCamera).toBe("fixed");
    expect(defaultGeneratorSource("heraldry", "sailor", "rush", { camera: "hunt", huntSelect: "mixed" }).collageCamera).toBe("hunt");
    expect(defaultGeneratorSource("heraldry", "sailor", "rush", { camera: "hunt", huntSelect: "mixed" }).collageHuntSelect).toBe("mixed");
    expect(defaultGeneratorSource("heraldry", "space", "chain").collageChainAnimal).toBe("off");
    expect(defaultGeneratorSource("heraldry", "sailor", "chain", { chainAnimal: "dog" }).collageChainAnimal).toBe("dog");
    expect(defaultGeneratorSource("heraldry", "sailor", "chain", { chainAnimal: "dog" }).name).toBe("CHAIN · DOG · SAILOR");
    expect(defaultGeneratorSource("heraldry", "sailor", "rush", { chainAnimal: "dragon" }).name).toBe("RUSH · SAILOR");
    expect(defaultGeneratorSource("heraldry", "kitchen", "spring").name).toBe("SPRING · KITCHEN");
    expect(defaultGeneratorSource("heraldry", "weather", "flow").name).toBe("FLOW · SKY");
    expect(defaultGeneratorSource("heraldry", "city", "boids").name).toBe("BOIDS · STREET");
    expect(defaultGeneratorSource("heraldry", "arcade", "poles").name).toBe("POLES · ARCADE");
    expect(defaultGeneratorSource("heraldry", "sailor", "spring", { springStrength: 1.7 }).collageSpringStrength).toBeCloseTo(1.7);
    expect(defaultGeneratorSource("heraldry", "sailor", "chain", { chainTravel: 1.8, chainMorph: 0.2, chainVary: 1.6, chainSmooth: 0.3 }).collageChainTravel).toBeCloseTo(1.8);
    expect(defaultGeneratorSource("heraldry", "sailor", "chain", { chainTravel: 1.8, chainMorph: 0.2, chainVary: 1.6, chainSmooth: 0.3 }).collageChainMorph).toBeCloseTo(0.2);
    expect(defaultGeneratorSource("heraldry", "sailor", "chain", { chainTravel: 1.8, chainMorph: 0.2, chainVary: 1.6, chainSmooth: 0.3 }).collageChainVary).toBeCloseTo(1.6);
    expect(defaultGeneratorSource("heraldry", "sailor", "chain", { chainTravel: 1.8, chainMorph: 0.2, chainVary: 1.6, chainSmooth: 0.3 }).collageChainSmooth).toBeCloseTo(0.3);
    expect(defaultGeneratorSource("heraldry", "love", "spot", { kitB: "music" }).name).toBe("SPOT · LOVE · MUSIC");
    expect(defaultGeneratorSource("heraldry", "love", "spot", { kitB: "love" }).name).toBe("SPOT · LOVE");
    expect(defaultGeneratorSource("heraldry", "music", "bars", { night: true, scale: 1.4, density: 0.5 }).collageNight).toBe(true);
    expect(defaultGeneratorSource("heraldry", "music", "bars", { night: true, scale: 1.4, density: 0.5 }).collageScale).toBeCloseTo(1.4);
    expect(defaultGeneratorSource("heraldry", "music", "bars", { night: true, scale: 1.4, density: 0.5 }).collageDensity).toBeCloseTo(0.5);
  });
});

describe("effects registry", () => {
  it("ships a usable MVP library", () => {
    expect(allEffects().length).toBeGreaterThanOrEqual(15);
    for (const id of ["grade", "warp", "chroma", "analog", "kaleido", "echo", "bloom", "smear", "critters", "dancer", "halftone", "riso", "hatch", "holo", "crackle", "nap"]) {
      expect(getEffect(id)).toBeTruthy();
    }
    expect(getEffect("halftone")?.category).toBe("texture");
    expect(getEffect("riso")?.name).toBe("Riso");
    expect(getEffect("hatch")?.name).toBe("Etching");
    expect(getEffect("holo")?.name).toBe("Holo Foil");
    expect(getEffect("crackle")?.name).toBe("Crackle");
    expect(getEffect("nap")?.name).toBe("Velvet Nap");
    expect(getEffect("critters")?.category).toBe("wacky");
    expect(getEffect("critters")?.name).toBe("Floaters");
    expect(getEffect("dancer")?.name).toBe("Idol");
    expect(getEffect("buddy")).toBeUndefined();
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
      "musicPiano",
      "musicGuitar",
      "musicTrumpet",
      "musicDrum",
      "musicSax",
      "musicBoombox",
      "musicEighth",
      "u_kit",
      "musicFam",
      "votiveFam",
      "mothFam",
      "charmFam",
      "candle",
      "moth",
      "charmBow",
    ]) {
      expect(critterSrc.includes(family)).toBe(true);
    }
    expect(critterSrc.includes("nFam = 16.0")).toBe(true);
    const idol = getEffect("dancer")!;
    expect(idol.params.find((p) => p.id === "count")?.default).toBe(1);
    expect(Number(idol.params.find((p) => p.id === "size")?.default)).toBeCloseTo(0.12);
    expect(Number(idol.params.find((p) => p.id === "size")?.min)).toBeCloseTo(0.12);
    expect(idol.params.find((p) => p.id === "place")?.default).toBe("center");
    expect(idol.params.find((p) => p.id === "crowd")?.default).toBe("normal");
    expect(idol.params.find((p) => p.id === "move")?.default).toBe("dance");
    expect(idol.params.find((p) => p.id === "grow")?.default).toBe("wild");
    expect(idol.params.find((p) => p.id === "grow")?.options?.map((o) => o.value)).toEqual([
      "wild",
      "petals",
      "halo",
      "antenna",
      "skirt",
      "wings",
      "horns",
      "crystal",
      "puff",
      "spikes",
      "sprout",
      "quiet",
    ]);
    expect(idol.params.find((p) => p.id === "coat")?.default).toBe("wild");
    expect(idol.params.find((p) => p.id === "coat")?.options?.map((o) => o.value)).toEqual([
      "wild",
      "cream",
      "moss",
      "sodium",
      "night",
      "candy",
      "jelly",
      "grape",
      "ice",
      "lava",
      "slime",
      "gold",
      "ink",
      "soda",
      "banana",
      "berry",
      "mint",
      "cobalt",
    ]);
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
    expect(idolSrc.includes("floor(figH(seed + 0.11) * 8.0)")).toBe(true);
    expect(idolSrc.includes("f.spin = f.t * mix(1.2, 2.4")).toBe(true);
    expect(idolSrc.includes("f.lean = 1.05 + 0.18")).toBe(true);
    expect(idolSrc.includes("p = figRotY(p, f.facing + f.spin + f.sway)")).toBe(true);
    expect(idolSrc.includes("f.facing = mix(-0.28, 0.28")).toBe(true);
    expect(idolSrc.includes("f.eyeZ = f.hs")).toBe(true);
    expect(idolSrc.includes("camA")).toBe(true);
    expect(idolSrc.includes("u_place")).toBe(true);
    expect(idolSrc.includes("u_crowd")).toBe(true);
    expect(idolSrc.includes("figRaySphere")).toBe(true);
    expect(idolSrc.includes("figureHit")).toBe(true);
    expect(idolSrc.includes("u_echo")).toBe(true);
    expect(idolSrc.includes("f.petals")).toBe(true);
    expect(idolSrc.includes("f.wings")).toBe(true);
    expect(idolSrc.includes("u_grow")).toBe(true);
    expect(idolSrc.includes("u_coat")).toBe(true);
    expect(idolSrc.includes("f.skirt")).toBe(true);
    expect(idolSrc.includes("f.antenna")).toBe(true);
    expect(idolSrc.includes("f.halo")).toBe(true);
    expect(idolSrc.includes("f.blush")).toBe(true);
    expect(idolSrc.includes("f.crest")).toBe(true);
    expect(idolSrc.includes("f.crystal")).toBe(true);
    expect(idolSrc.includes("f.puff")).toBe(true);
    expect(idolSrc.includes("f.spikes")).toBe(true);
    expect(idolSrc.includes("f.sprout")).toBe(true);
    expect(idolSrc.includes("if (u_grow < 0.5)")).toBe(true);
    expect(idolSrc.includes("figFacet")).toBe(true);
    expect(idolSrc.includes("floor(n * 3.2")).toBe(true);
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
    expect(GEN_INDEX.stage).toBe(12);
    expect(GEN_INDEX.sketch).toBe(13);
    expect(GEN_INDEX.felt).toBe(14);
    expect(GEN_INDEX.foil).toBe(15);
    expect(GEN_INDEX.plush).toBe(16);
    expect(GEN_INDEX.yarn).toBe(17);
    expect(GEN_INDEX.sequin).toBe(18);
    expect(GEN_INDEX.quilt).toBe(19);
    expect(GEN_INDEX.cork).toBe(20);
    expect(GEN_INDEX.gingham).toBe(21);
    expect(GEN_INDEX.sprinkle).toBe(22);
    expect(GEN_INDEX.velvet).toBe(23);
    expect(GEN_INDEX.confetti).toBe(24);
    expect(GEN_INDEX.disco).toBe(25);
    expect(GEN_INDEX.terrazzo).toBe(26);
    expect(GEN_INDEX.comic).toBe(27);
    expect(GEN_INDEX.lattice).toBe(28);
    expect(GEN_INDEX.tessera).toBe(29);
    expect(GEN_INDEX.phase).toBe(30);
    expect(GEN_INDEX.coil).toBe(31);
    expect(GEN_INDEX.prism).toBe(32);
    expect(GEN_INDEX.heraldry).toBe(33);
    expect(GEN_INDEX.wallpaper).toBe(34);
    expect(GEN_INDEX.giants).toBe(35);
    expect(GEN_INDEX.shower).toBe(36);
    expect(GEN_INDEX.lot).toBeUndefined();
    expect(GEN_INDEX.chapel).toBeUndefined();
    expect(GENERATOR_GLSL).toContain("genStars");
    expect(GENERATOR_GLSL).toContain("genMarsh");
    expect(GENERATOR_GLSL).toContain("genOil");
    expect(GENERATOR_GLSL).toContain("genPaper");
    expect(GENERATOR_GLSL).toContain("genCave");
    expect(GENERATOR_GLSL).not.toContain("genStage");
    expect(GENERATOR_GLSL).not.toContain("genFelt");
    expect(STAGE_GENERATOR_GLSL).toContain("stamp");
    expect(STAGE_GENERATOR_GLSL).toContain("guitar");
    expect(STAGE_GENERATOR_GLSL).not.toContain("musicNote");
    expect(SKETCH_GENERATOR_GLSL).toContain("fiber");
    expect(SKETCH_GENERATOR_GLSL).toContain("tape");
    expect(FELT_GENERATOR_GLSL).toContain("wool");
    expect(FOIL_GENERATOR_GLSL).toContain("crinkle");
    expect(PLUSH_GENERATOR_GLSL).toContain("tuft");
    expect(YARN_GENERATOR_GLSL).toContain("knit");
    expect(SEQUIN_GENERATOR_GLSL).toContain("sequin");
    expect(QUILT_GENERATOR_GLSL).toContain("quilt");
    expect(CORK_GENERATOR_GLSL).toContain("pore");
    expect(GINGHAM_GENERATOR_GLSL).toContain("gingham");
    expect(SPRINKLE_GENERATOR_GLSL).toContain("sprinkle");
    expect(VELVET_GENERATOR_GLSL).toContain("crush");
    expect(CONFETTI_GENERATOR_GLSL).toContain("confetti");
    expect(DISCO_GENERATOR_GLSL).toContain("mirrorTile");
    expect(TERRAZZO_GENERATOR_GLSL).toContain("chip");
    expect(COMIC_GENERATOR_GLSL).toContain("halftone");
    expect(FIELDS_GLSL).toContain("hexCell");
    expect(FIELDS_GLSL).toContain("tileFlip");
    expect(FIELDS_GLSL).toContain("phaseBeat");
    expect(FIELDS_GLSL).toContain("coilRing");
    expect(FIELDS_GLSL).toContain("facetEdge");
    expect(GENERATOR_GLSL).not.toContain("hexCell");
    expect(GENERATOR_GLSL).not.toContain("tileFlip");
    expect(GENERATOR_GLSL).not.toContain("phaseBeat");
    expect(GENERATOR_GLSL).not.toContain("genSketch");
    expect(GENERATOR_GLSL).not.toContain("genYarn");
    expect(GENERATOR_GLSL).not.toContain("genCork");
    expect(GENERATOR_GLSL).not.toContain("genConfetti");
    expect(BOOT_GENERATOR_GLSL).not.toContain("fiber");
    expect(BOOT_GENERATOR_GLSL).not.toContain("wool");
    expect(BOOT_GENERATOR_GLSL).not.toContain("crinkle");
    expect(BOOT_GENERATOR_GLSL).not.toContain("tuft");
    expect(BOOT_GENERATOR_GLSL).not.toContain("knit");
    expect(BOOT_GENERATOR_GLSL).not.toContain("sequin");
    expect(BOOT_GENERATOR_GLSL).not.toContain("quilt");
    expect(BOOT_GENERATOR_GLSL).not.toContain("pore");
    expect(BOOT_GENERATOR_GLSL).not.toContain("gingham");
    expect(BOOT_GENERATOR_GLSL).not.toContain("sprinkle");
    expect(BOOT_GENERATOR_GLSL).not.toContain("crush");
    expect(BOOT_GENERATOR_GLSL).not.toContain("confetti");
    expect(BOOT_GENERATOR_GLSL).not.toContain("mirrorTile");
    expect(BOOT_GENERATOR_GLSL).not.toContain("halftone");
    expect(BOOT_GENERATOR_GLSL).not.toContain("hexCell");
    expect(BOOT_GENERATOR_GLSL).not.toContain("tileFlip");
    expect(BOOT_GENERATOR_GLSL).not.toContain("coilRing");
    expect(GENERATOR_GLSL).toContain("musicPiano");
    expect(GENERATOR_GLSL).toContain("starLayer");
    expect(GENERATOR_GLSL).toContain("reed");
    expect(GENERATOR_GLSL).not.toContain("genLot");
    expect(GENERATOR_GLSL).not.toContain("genChapel");
    expect(GENERATOR_GLSL).not.toContain("genLamp");
    expect(GENERATOR_GLSL).toContain("uMode == 7");
    expect(GENERATOR_GLSL).toContain("u_audio");
    expect(GENERATOR_GLSL).toContain("u_bass");
    expect(BOOT_GENERATOR_GLSL).not.toContain("genStars");
    expect(BOOT_GENERATOR_GLSL).not.toContain("genStage");
    expect(BOOT_GENERATOR_GLSL).not.toContain("musicPiano");
    expect(BOOT_GENERATOR_GLSL).not.toContain("critterField");
    expect(BOOT_GENERATOR_GLSL).toContain("uMode");
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
    expect(a.sources[0].generator).toEqual(b.sources[0].generator);
    expect(a.sources[0].colorA).toEqual(b.sources[0].colorA);
    expect(a.sources[0].colorB).toEqual(b.sources[0].colorB);
    expect(a.layers[0].effects.map((e) => ({ typeId: e.typeId, enabled: e.enabled, params: e.params }))).toEqual(
      b.layers[0].effects.map((e) => ({ typeId: e.typeId, enabled: e.enabled, params: e.params })),
    );
  });

  it("extract/apply preset restores effect params without requiring sources", () => {
    const p = randomizeProject(createDefaultProject(), "all", null, null, null);
    const preset = extractPreset(p, "look");
    const blank = createDefaultProject();
    const applied = applyPreset(blank, preset);
    expect(applied.layers[0].effects.map((e) => e.typeId)).toEqual(p.layers[0].effects.map((e) => e.typeId));
    expect(applied.layers[0].effects.map((e) => e.params)).toEqual(p.layers[0].effects.map((e) => e.params));
    expect(applied.globalFeedback.amount).toBe(p.globalFeedback.amount);
  });

  it("rebuilds a different look when the seed changes", () => {
    const a = randomizeProject({ ...createDefaultProject(), seed: 3, randomAmount: 1 }, "all", null, null, null);
    const b = randomizeProject({ ...createDefaultProject(), seed: 99, randomAmount: 1 }, "all", null, null, null);
    const sig = (p: ReturnType<typeof createDefaultProject>) =>
      `${p.sources[0].generator}|${p.sources[0].colorA}|${p.sources[0].colorB}|${p.layers[0].effects.map((e) => e.typeId).join(",")}`;
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

  it("wacky rand keeps a short stack and plants a collage, not an idol", () => {
    const panel = new Set(allEffects().map((e) => e.id).filter((id) => id !== "dancer"));
    for (const seed of [1, 7, 99, 256, 90210]) {
      const p = randomizeProject({ ...createDefaultProject(), seed, randomAmount: 1 }, "all", null, null, null, true);
      const types = p.layers[0].effects.map((e) => e.typeId);
      expect(types.length).toBeGreaterThanOrEqual(3);
      expect(types.length).toBeLessThanOrEqual(5);
      expect(new Set(types).size).toBe(types.length);
      expect(types).not.toContain("dancer");
      expect(types.every((id) => panel.has(id))).toBe(true);
      expect(FIELD_ROOMS).toContain(p.sources[0].generator);
      expect(HERALDRY_ROOMS).toContain(p.sources[0].generator);
      expect(isHeraldry(p.sources[0].generator)).toBe(true);
    }
  });

  it("rand all skips the effect stack when includeEffects is off", () => {
    for (const seed of [1, 7, 99, 256]) {
      const p = randomizeProject({ ...createDefaultProject(), seed, randomAmount: 1 }, "all", null, null, null, false, false);
      expect(p.layers[0].effects).toEqual([]);
      expect(isHeraldry(p.sources[0].generator)).toBe(true);
    }
    const wackyOff = randomizeProject({ ...createDefaultProject(), seed: 77, randomAmount: 1 }, "all", null, null, null, true, false);
    expect(wackyOff.layers[0].effects).toEqual([]);
  });

  it("rand all plants a short right-panel stack, never an idol", () => {
    const panel = new Set(allEffects().map((e) => e.id).filter((id) => id !== "dancer"));
    const seen = new Set<string>();
    for (const seed of [1, 7, 99, 256, 90210, 404, 777]) {
      const p = randomizeProject({ ...createDefaultProject(), seed, randomAmount: 1 }, "all", null, null, null);
      const types = p.layers[0].effects.map((e) => e.typeId);
      expect(types.length).toBeGreaterThanOrEqual(2);
      expect(types.length).toBeLessThanOrEqual(4);
      expect(new Set(types).size).toBe(types.length);
      expect(types).not.toContain("dancer");
      expect(types.every((id) => panel.has(id))).toBe(true);
      types.forEach((id) => seen.add(id));
    }
    expect(seen.size).toBeGreaterThan(4);
  });

  it("random collage rolls stay small, slow, and pleasing", () => {
    const chaotic = new Set(["bounce", "flip", "glow", "flash", "hop", "kick", "jelly"]);
    for (const seed of [1, 7, 99, 256, 90210, 404, 777]) {
      const p = randomizeProject({ ...createDefaultProject(), seed, randomAmount: 1 }, "all", null, null, null, true);
      const src = p.sources[0];
      expect(isPleasingMove(src.collageMove)).toBe(true);
      expect(chaotic.has(src.collageMove ?? "")).toBe(false);
      expect(src.collageScale ?? 1).toBeLessThanOrEqual(0.9);
      expect(src.collageDensity ?? 1).toBeLessThanOrEqual(1.1);
      expect(src.collagePace ?? 1).toBeLessThanOrEqual(0.95);
      expect(src.collagePace ?? 1).toBeGreaterThanOrEqual(0.7);
    }
  });

  it("randomizeFieldSource rerolls Field sliders and keeps kit, wash, and camera", () => {
    const base = defaultGeneratorSource("heraldry", "sailor", "rush", {
      kitB: "circus",
      wash: "#aabbcc",
      colorPack: "candy",
      scale: 0.7,
      density: 0.8,
      pace: 0.75,
      camera: "hunt",
      night: true,
      fieldStrength: 0.4,
      fieldWarp: 0.3,
    });
    const a = randomizeFieldSource(base, 42);
    const b = randomizeFieldSource(base, 42);
    const c = randomizeFieldSource(base, 99);
    expect(a.collageMove).toBe("field");
    expect(a.generator).toBe("heraldry");
    expect(a.collageKit).toBe("sailor");
    expect(a.collageKitB).toBe("circus");
    expect(a.colorA).toBe(base.colorA);
    expect(a.colorB).toBe(base.colorB);
    expect(a.collageColorPack).toBe(base.collageColorPack);
    expect(a.collageScale).toBe(base.collageScale);
    expect(a.collageDensity).toBe(base.collageDensity);
    expect(a.collagePace).toBe(base.collagePace);
    expect(a.collageCamera).toBe("hunt");
    expect(a.collageNight).toBe(true);
    expect(a.collageFieldPattern).toEqual(b.collageFieldPattern);
    expect(FIELD_PATTERNS).toContain(a.collageFieldPattern);
    expect(a.collageFieldStrength).toEqual(b.collageFieldStrength);
    expect(a.collageFieldWarp).toEqual(b.collageFieldWarp);
    expect(a.collageFieldMinScale ?? 0).toBeLessThan((a.collageFieldMaxScale ?? 0) - 0.07);
    expect(
      a.collageFieldStrength !== c.collageFieldStrength
        || a.collageFieldWarp !== c.collageFieldWarp
        || a.collageFieldDensityEvolve !== c.collageFieldDensityEvolve,
    ).toBe(true);
  });

  it("rand all rolls Field sliders when the move is field", () => {
    const p = randomizeProject({ ...createDefaultProject(), seed: 42, randomAmount: 1 }, "all", null, null, null, false, false);
    expect(p.sources[0].collageMove).toBe("field");
    expect(p.sources[0].collageFieldStrength).toBeGreaterThan(0.6);
    expect(p.sources[0].collageFieldWarp).toBeGreaterThan(0.5);
    expect(p.sources[0].collageFieldMinScale ?? 0).toBeLessThan((p.sources[0].collageFieldMaxScale ?? 0) - 0.07);
    const again = randomizeProject({ ...createDefaultProject(), seed: 42, randomAmount: 1 }, "all", null, null, null, false, false);
    expect(again.sources[0].collageFieldStrength).toBe(p.sources[0].collageFieldStrength);
    expect(again.sources[0].collageFieldContrast).toBe(p.sources[0].collageFieldContrast);
  });

  it("cut edit reel feels authored, not shuffled", () => {
    const onsets = Array.from({ length: 64 }, (_, i) => i * 0.5);
    const reel = buildCutReel({ seed: 90210, duration: 32, bpm: 120, beats: onsets });
    expect(reel.length).toBeGreaterThan(4);
    const stats = reelStats(reel);
    expect(stats.maxOneRun).toBeLessThanOrEqual(2);
    expect(stats.repeatMoves).toBe(0);
    expect(stats.longShare).toBeGreaterThan(0.55);
    for (const shot of reel) {
      expect(isMusicMove(shot.look.move)).toBe(true);
      expect(shot.look.scale).toBeLessThanOrEqual(0.9);
      expect(shot.look.pace).toBeLessThanOrEqual(0.8);
      expect(shot.beats).toBeGreaterThanOrEqual(2);
      expect(shot.startBeat % 2).toBe(0);
    }
    expect(shotAtTime(reel, 0).start).toBe(reel[0].start);
    expect(shotAtTime(reel, reel[1].start + 0.01).look.move).toBe(reel[1].look.move);
    const again = buildCutReel({ seed: 90210, duration: 32, bpm: 120, beats: onsets });
    expect(again.map((s) => s.look.move)).toEqual(reel.map((s) => s.look.move));
  });

  it("clamps collage pace", () => {
    expect(clampCollagePace(9)).toBe(1.2);
    expect(clampCollagePace(0.1)).toBe(0.35);
  });

  it("chaos stamp rerolls overlay seeds", () => {
    const base = ensureIdol(ensureCritters(createDefaultProject()));
    const stamped = chaosStamp({ ...base, seed: 11 });
    const seedOf = (p: typeof base, typeId: string) =>
      p.layers[0].effects.find((e) => e.typeId === typeId)?.params.seed;
    expect(seedOf(stamped, "critters")).not.toEqual(seedOf(base, "critters"));
    expect(seedOf(stamped, "dancer")).not.toEqual(seedOf(base, "dancer"));
  });

  it("ships luma key and dropout", () => {
    expect(getEffect("key")?.name).toBe("Luma key");
    expect(getEffect("dropout")?.name).toBe("Dropout");
    expect(getEffect("dropout")?.temporal).toBe(true);
    const analog = compileEffectSource(getEffect("analog")!);
    expect(analog).toContain("u_audio");
    expect(analog).toContain("u_bass");
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

describe("video transport", () => {
  function fakeVideo(
    overrides: Partial<{ duration: number; currentTime: number; paused: boolean; playbackRate: number }> = {},
  ) {
    const video = {
      duration: 10,
      currentTime: 1,
      paused: true,
      playbackRate: 1,
      pause() {
        video.paused = true;
      },
      play() {
        video.paused = false;
        return Promise.resolve();
      },
      ...overrides,
    };
    return video;
  }

  it("lets a forward clip play instead of seeking every frame", () => {
    const video = fakeVideo({ paused: false, currentTime: 1 });
    seekVideo({ kind: "video", video } as never, 1.05, {
      playing: true,
      freeze: false,
      mode: "forward",
      speed: 1,
    });
    expect(video.currentTime).toBe(1);
    expect(video.paused).toBe(false);
  });

  it("seeks when paused", () => {
    const video = fakeVideo({ paused: false, currentTime: 1 });
    seekVideo({ kind: "video", video } as never, 4, {
      playing: false,
      freeze: false,
      mode: "forward",
      speed: 1,
    });
    expect(video.paused).toBe(true);
    expect(video.currentTime).toBe(4);
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

  it("finds regular onsets and estimates tempo", () => {
    const sr = 44100;
    const seconds = 6;
    const bpm = 120;
    const ch = new Float32Array(sr * seconds);
    const gap = 60 / bpm;
    for (let t = 0.4; t < seconds - 0.15; t += gap) {
      const i = Math.floor(t * sr);
      for (let k = 0; k < 180 && i + k < ch.length; k++) ch[i + k] = (1 - k / 180) * 0.95;
    }
    const beats = detectBeats(ch, sr);
    expect(beats.length).toBeGreaterThan(6);
    expect(beats[0]).toBeGreaterThan(0.2);
    const tempo = estimateBpm(beats);
    expect(tempo).toBeGreaterThanOrEqual(100);
    expect(tempo).toBeLessThanOrEqual(140);
    expect(beatEnvelope([1], 1)).toBeGreaterThan(0.9);
    expect(beatEnvelope([1], 1.08)).toBeGreaterThan(0.55);
    expect(beatEnvelope([1], 1.7)).toBeLessThan(0.08);
    expect(tempoPulse(0, 120)).toBeGreaterThan(0.9);
    expect(tempoPulse(0.5, 120)).toBeGreaterThan(0.9);
    expect(tempoPulse(0.12, 120)).toBeLessThan(0.5);
    expect(tempoPulse(0.2, 0)).toBe(0);
    expect(tempoPulse(0.4, 120, 0.13, 0.4)).toBeGreaterThan(0.9);
    expect(tempoPulse(0.9, 120, 0.13, 0.4)).toBeGreaterThan(0.9);
    expect(tempoPulse(0, 120, 0.13, 0.4)).toBeLessThan(0.25);
  });

  it("locks a late first downbeat and ignores extra 8th-note onsets", () => {
    const quarters: number[] = [];
    for (let t = 0.4; t < 8; t += 0.5) quarters.push(t);
    const tempo = estimateTempo(quarters, 8);
    expect(tempo.bpm).toBeGreaterThanOrEqual(110);
    expect(tempo.bpm).toBeLessThanOrEqual(130);
    expect(tempo.offset).toBeCloseTo(0.4, 1);
    const locked = lockBeatsToGrid(quarters, tempo.bpm, tempo.offset, 8);
    expect(locked[0]).toBeCloseTo(0.4, 1);
    expect(locked[1] - locked[0]).toBeCloseTo(0.5, 5);
    const eighths: number[] = [];
    for (let t = 0.4; t < 8; t += 0.25) eighths.push(t + (t % 0.5 === 0 ? 0 : 0.012));
    const grid = beatGrid(8, 120, eighths, 0.4);
    expect(grid[0]).toBeCloseTo(0.4, 5);
    expect(grid[1]).toBeCloseTo(0.9, 5);
    const gaps = grid.slice(1, -1).map((t, i) => t - grid[i]);
    const mid = [...gaps].sort((a, b) => a - b)[Math.floor(gaps.length / 2)];
    expect(mid).toBeCloseTo(0.5, 5);
    const reel = buildCutReel({ seed: 77, duration: 8, bpm: 120, beats: eighths, offset: 0.4 });
    expect(reel[0].start).toBeCloseTo(0.4, 5);
    for (const shot of reel.slice(0, -1)) {
      expect(shot.startBeat % 2).toBe(0);
      const phase = (((shot.start - 0.4) % 0.5) + 0.5) % 0.5;
      expect(Math.min(phase, 0.5 - phase)).toBeLessThan(0.001);
    }
    expect(shotAtTime(reel, 0.39, 8, 120, 0.4).look.move).toBe(reel[0].look.move);
    if (reel[1]) expect(shotAtTime(reel, reel[1].start, 8, 120, 0.4).look.move).toBe(reel[1].look.move);
    expect(beatIndexAt(0.4, 120, 0.4)).toBe(0);
    expect(beatIndexAt(2.4, 120, 0.4)).toBe(4);
  });

  it("picks the loud kick as the downbeat, not the snare", () => {
    const sr = 8000;
    const seconds = 8;
    const ch = new Float32Array(sr * seconds);
    for (let t = 0.4; t < seconds - 0.05; t += 0.5) {
      const beat = Math.round((t - 0.4) / 0.5) % 4;
      const amp = beat === 0 ? 1 : beat === 2 ? 0.5 : 0.18;
      const i = Math.floor(t * sr);
      for (let k = 0; k < 120 && i + k < ch.length; k++) ch[i + k] = (1 - k / 120) * amp;
    }
    const off = downbeatOffset(ch, sr, 120, 0.9, seconds);
    expect(off).toBeCloseTo(0.4, 1);
  });

  it("starts playback when an mp3 is attached", () => {
    store.replace(createDefaultProject());
    store.setProject((p) => ({ ...p, playback: { ...p.playback, playing: false, time: 2 } }));
    setSoundtrack({
      id: "src_audio",
      name: "clip.mp3",
      kind: "audio",
      width: 0,
      height: 0,
      duration: 12,
      beats: [0.5, 1, 1.5, 2],
      bpm: 120,
    });
    expect(store.project.playback.playing).toBe(true);
    expect(store.project.playback.time).toBe(0);
    expect(store.project.duration).toBeGreaterThanOrEqual(12);
    expect(store.state.ui.status).toMatch(/beat-sync/i);
    expect(store.project.sources.some((s) => s.kind === "audio" && s.bpm === 120)).toBe(true);
    const json = serializeProject(store.project);
    expect(json).not.toContain("\"beats\"");
    expect(json).not.toContain("\"bpm\"");
  });

  it("wraps a short song to fill the exported clip and fades the tail", () => {
    const src = new Float32Array([1, -1, 0.5]);
    const dst = new Float32Array(9);
    copyWrappedChannel(src, dst, 0);
    expect(Array.from(dst)).toEqual([1, -1, 0.5, 1, -1, 0.5, 1, -1, 0.5]);
    const faded = new Float32Array(10);
    copyWrappedChannel(new Float32Array(10).fill(1), faded, 0.2);
    expect(faded[0]).toBe(1);
    expect(faded[7]).toBe(1);
    expect(faded[8]).toBeCloseTo(0.5, 5);
    expect(faded[9]).toBeCloseTo(0, 5);
  });

  it("starts a soundtrack slice from a later playhead and wraps", () => {
    const src = new Float32Array([10, 20, 30, 40, 50]);
    const dst = new Float32Array(4);
    copyWrappedChannel(src, dst, 0, 3);
    expect(Array.from(dst)).toEqual([40, 50, 10, 20]);
    const faded = new Float32Array(5);
    copyWrappedChannel(src, faded, 0.2, 4);
    expect(Array.from(faded.slice(0, 4))).toEqual([50, 10, 20, 30]);
    expect(faded[4]).toBeCloseTo(0, 5);
  });

  it("uses the live playhead as the soundtrack export origin", () => {
    const p = createDefaultProject();
    expect(soundtrackExportOrigin(p)).toBe(0);
    p.sources.push({
      id: "src_audio",
      name: "clip.mp3",
      kind: "audio",
      width: 0,
      height: 0,
      duration: 180,
    });
    p.playback.time = 47.25;
    expect(soundtrackExportOrigin(p)).toBe(47.25);
    expect(47.25 + mediaTime(0, 8, "forward", 1, true)).toBeCloseTo(47.25);
    expect(47.25 + mediaTime(2, 8, "forward", 1, true)).toBeCloseTo(49.25);
    p.playback.time = Number.NaN;
    expect(soundtrackExportOrigin(p)).toBe(0);
    p.playback.time = 12;
    p.sources = p.sources.filter((s) => s.kind !== "audio");
    expect(soundtrackExportOrigin(p)).toBe(0);
  });
});

describe("heraldry collage", () => {
  it("locks one move for the whole clip", () => {
    expect(sceneFromGenerator("heraldry")).toBe("rush");
    expect(sceneFromGenerator("wallpaper")).toBe("rush");
    expect(sceneFromGenerator("giants")).toBe("tunnel");
    expect(sceneFromGenerator("shower")).toBe("bounce");
    expect(sceneFromGenerator("heraldry", "spiral")).toBe("spiral");
    expect(sceneFromGenerator("heraldry", "bounce")).toBe("bounce");
    expect(sceneFromGenerator("heraldry", "flip")).toBe("flip");
    expect(sceneFromGenerator("heraldry", "glow")).toBe("glow");
    expect(sceneFromGenerator("heraldry", "flash")).toBe("flash");
    expect(sceneFromGenerator("heraldry", "hop")).toBe("hop");
    expect(sceneFromGenerator("heraldry", "kick")).toBe("kick");
    expect(sceneFromGenerator("heraldry", "jelly")).toBe("jelly");
    expect(sceneFromGenerator("heraldry", "tide")).toBe("tide");
    expect(sceneFromGenerator("heraldry", "rings")).toBe("rings");
    expect(sceneFromGenerator("heraldry", "loom")).toBe("loom");
    expect(sceneFromGenerator("heraldry", "petal")).toBe("petal");
    expect(sceneFromGenerator("heraldry", "flock")).toBe("flock");
    expect(sceneFromGenerator("heraldry", "wheel")).toBe("wheel");
    expect(sceneFromGenerator("heraldry", "silk")).toBe("silk");
    expect(sceneFromGenerator("heraldry", "bars")).toBe("bars");
    expect(sceneFromGenerator("heraldry", "ripple")).toBe("ripple");
    expect(sceneFromGenerator("heraldry", "swing")).toBe("swing");
    expect(sceneFromGenerator("heraldry", "burst")).toBe("burst");
    expect(sceneFromGenerator("heraldry", "halo")).toBe("halo");
    expect(sceneFromGenerator("heraldry", "wave")).toBe("wave");
    expect(sceneFromGenerator("heraldry", "drop")).toBe("drop");
    expect(sceneFromGenerator("heraldry", "spot")).toBe("spot");
    expect(sceneFromGenerator("heraldry", "pong")).toBe("pong");
    expect(sceneFromGenerator("heraldry", "step")).toBe("step");
    expect(sceneFromGenerator("heraldry", "moire")).toBe("moire");
    expect(sceneFromGenerator("heraldry", "grid")).toBe("grid");
    expect(sceneFromGenerator("heraldry", "zip")).toBe("zip");
    expect(sceneFromGenerator("heraldry", "ghost")).toBe("ghost");
    expect(sceneFromGenerator("heraldry", "poly")).toBe("poly");
    expect(sceneFromGenerator("heraldry", "fall")).toBe("fall");
    expect(sceneFromGenerator("heraldry", "liss")).toBe("liss");
    expect(sceneFromGenerator("heraldry", "snap")).toBe("snap");
    expect(sceneFromGenerator("heraldry", "chain")).toBe("chain");
    expect(sceneFromGenerator("heraldry", "spring")).toBe("spring");
    expect(sceneFromGenerator("heraldry", "flow")).toBe("flow");
    expect(sceneFromGenerator("heraldry", "boids")).toBe("boids");
    expect(sceneFromGenerator("heraldry", "poles")).toBe("poles");
    expect(sceneFromGenerator("heraldry", "field")).toBe("field");
    expect(sceneFromGenerator("heraldry", "helix")).toBe("helix");
    expect(sceneFromGenerator("heraldry", "prism")).toBe("prism");
    expect(sceneFromGenerator("heraldry", "gyre")).toBe("gyre");
    expect(sceneFromGenerator("heraldry", "well")).toBe("well");
    expect(sceneFromGenerator("heraldry", "hall")).toBe("hall");
    expect(sceneFromGenerator("heraldry", "drift")).toBe("drift");
    expect(sceneFromGenerator("heraldry", "braid")).toBe("braid");
    expect(sceneFromGenerator("heraldry", "sway")).toBe("sway");
    expect(sceneAt(0.2, 8, "tour")).toBe("rush");
    expect(sceneAt(3.0, 8, "tour")).toBe("rush");
    expect(sceneAt(5.5, 8, "bounce")).toBe("bounce");
    expect(sceneAt(7.2, 8, "bloom")).toBe("bloom");
    expect(sceneAt(1, 8, "rush")).toBe("rush");
    expect(sceneAt(2, 8, "helix")).toBe("helix");
    expect(COLLAGE_MOVES).toEqual([
      "rush",
      "tunnel",
      "bloom",
      "spiral",
      "helix",
      "prism",
      "gyre",
      "well",
      "hall",
      "drift",
      "braid",
      "sway",
      "bounce",
      "flip",
      "glow",
      "flash",
      "hop",
      "kick",
      "jelly",
      "tide",
      "rings",
      "loom",
      "petal",
      "flock",
      "wheel",
      "silk",
      "bars",
      "ripple",
      "swing",
      "burst",
      "halo",
      "wave",
      "drop",
      "spot",
      "pong",
      "step",
      "moire",
      "grid",
      "zip",
      "ghost",
      "poly",
      "fall",
      "liss",
      "snap",
      "chain",
      "spring",
      "flow",
      "boids",
      "poles",
      "field",
    ]);
    expect(isMusicMove("bars")).toBe(true);
    expect(isMusicMove("wave")).toBe(true);
    expect(isMusicMove("drop")).toBe(true);
    expect(isMusicMove("spot")).toBe(true);
    expect(isMusicMove("pong")).toBe(true);
    expect(isMusicMove("step")).toBe(true);
    expect(isMusicMove("moire")).toBe(true);
    expect(isMusicMove("snap")).toBe(true);
    expect(isMusicMove("clap")).toBe(false);
    expect(isPleasingMove("clap")).toBe(false);
    expect(COLLAGE_MOVES.includes("clap" as (typeof COLLAGE_MOVES)[number])).toBe(false);
    expect(isMusicMove("chain")).toBe(false);
    expect(isPleasingMove("chain")).toBe(true);
    expect(isSimMove("spring")).toBe(true);
    expect(isSimMove("flow")).toBe(true);
    expect(isSimMove("boids")).toBe(true);
    expect(isSimMove("poles")).toBe(true);
    expect(isSimMove("rush")).toBe(false);
    expect(isFieldMove("field")).toBe(true);
    expect(isFieldMove("flow")).toBe(false);
    expect(isPleasingMove("field")).toBe(true);
    expect(isMusicMove("field")).toBe(false);
    expect(isMusicMove("boids")).toBe(false);
    expect(isPleasingMove("poles")).toBe(true);
    expect(isMusicMove("rush")).toBe(false);
    expect(isMusicMove("silk")).toBe(false);
    expect(isFlyMove("rush")).toBe(true);
    expect(isFlyMove("gyre")).toBe(true);
    expect(isFlyMove("well")).toBe(true);
    expect(isFlyMove("hall")).toBe(true);
    expect(isFlyMove("drift")).toBe(true);
    expect(isFlyMove("braid")).toBe(true);
    expect(isFlyMove("sway")).toBe(true);
    expect(isFlyMove("tide")).toBe(false);
    expect(isPleasingMove("gyre")).toBe(true);
    expect(isPleasingMove("helix")).toBe(true);
    expect(dropSlam(0.2)).toBe(0);
    expect(dropSlam(0.5)).toBe(0);
    expect(dropSlam(1)).toBe(1);
    expect(dropSlam(0.75)).toBeCloseTo(0.5);
    expect(spotIndex(0, 120, 36)).toBe(spotIndex(0.4, 120, 36));
    expect(spotIndex(0, 120, 36)).not.toBe(spotIndex(0.6, 120, 36));
    expect(spotIndex(0.4, 120, 36, 0.4)).toBe(spotIndex(0, 120, 36));
    expect(spotIndex(0.91, 120, 36, 0.4)).not.toBe(spotIndex(0.4, 120, 36, 0.4));
    expect(stepIndex(0.4, 120, 1, 0.4)).toBe(0);
    expect(stepIndex(0.91, 120, 1, 0.4)).toBe(1);
    expect(clampCollageScale(9)).toBe(2);
    expect(clampCollageDensity(0.1)).toBe(0.35);
    expect(clampCollageChainTravel(9)).toBe(2.2);
    expect(clampCollageChainTravel(0)).toBe(0.2);
    expect(clampCollageChainMorph(undefined)).toBeCloseTo(0.7);
    expect(clampCollageChainVary(0)).toBe(0.2);
    expect(clampCollageChainSmooth(2)).toBe(1);
    expect(clampSpringStrength(9)).toBe(2.2);
    expect(clampPoleCount(8)).toBe(5);
    expect(agentParamsFrom({ fieldStrength: 9 }).fieldStrength).toBe(2.2);
    expect(agentParamsFrom({ minScale: 0.9, maxScale: 0.5 }).maxScale).toBeGreaterThan(
      agentParamsFrom({ minScale: 0.9, maxScale: 0.5 }).minScale,
    );
    const a = chainPath(0.12, 0.4, 1, 0.72);
    const b = chainPath(0.13, 0.4, 1, 0.72);
    const c = chainPath(0.12, 1.8, 1.6, 0.2);
    const wrap = chainPath(0, 0.4, 1, 0.72);
    const wrapEnd = chainPath(1, 0.4, 1, 0.72);
    expect(Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z)).toBeLessThan(0.12);
    expect(Math.hypot(wrap.x - wrapEnd.x, wrap.y - wrapEnd.y, wrap.z - wrapEnd.z)).toBeLessThan(1e-9);
    expect(Math.hypot(a.x - c.x, a.y - c.y, a.z - c.z)).toBeGreaterThan(0.02);
    expect(ANIMAL_CHAINS).toEqual(["off", "dragon", "dog", "ferret", "caterpillar", "zebra"]);
    expect(animalFromUnknown(undefined)).toBe("off");
    expect(animalFromUnknown("zebra")).toBe("zebra");
    expect(animalFromUnknown("wolf")).toBe("off");
    expect(COLLAGE_MOVES.includes("dragon" as (typeof COLLAGE_MOVES)[number])).toBe(false);
    const zebra = animalChainLayout("zebra");
    expect(zebra.roles[0]).toBe("head");
    expect(zebra.roles[zebra.roles.length - 1]).toBe("tail");
    expect(zebra.roles.slice(1, -1).every((role) => role === "body")).toBe(true);
    expect(zebra.appendages.filter((part) => part.role === "leg")).toHaveLength(4);
    expect(zebra.appendages[0].attach).toBeLessThan(zebra.appendages[2].attach);
    const catp = animalChainLayout("caterpillar");
    expect(catp.appendages.every((part) => part.role === "nub")).toBe(true);
    expect(catp.appendages.length).toBeGreaterThan(4);
    expect(animalChainLayout("off").roles).toEqual([]);
    expect(kindsForKit("sailor")).not.toContain("aBody");
    expect(tempoTick(0, 120)).toBeCloseTo(1, 5);
    expect(tempoTick(0.25, 120)).toBe(0);
    expect(stepIndex(0, 120, 2)).toBe(0);
    expect(stepIndex(0.26, 120, 2)).toBe(1);
  });

  it("builds a seeded field of unique charges", () => {
    const a = buildField(256, "#c41e3a", "sailor");
    const b = buildField(256, "#c41e3a", "sailor");
    const c = buildField(99, "#c41e3a", "sailor");
    expect(a.length).toBe(240);
    expect(a).toEqual(b);
    expect(a[0]).not.toEqual(c[0]);
    expect(new Set(a.map((p) => p.charge.kind)).size).toBeGreaterThan(3);
    const mashed = buildField(256, "#c41e3a", "sailor", "love");
    expect(mashed.length).toBe(240);
    expect(mashed[0].charge).toEqual(a[0].charge);
    expect(mashed.some((p, i) => (i & 1) === 1 && p.charge.kind !== a[i].charge.kind)).toBe(true);
  });

  it("gives each kit its own stamp drawer", () => {
    expect(COLLAGE_KITS).toEqual(["sailor", "circus", "fruit", "nature", "love", "space", "sweet", "music", "kitchen", "weather", "city", "arcade", "haunt", "sport", "school"]);
    expect(kindsForKit("sailor")).toContain("fish");
    expect(kindsForKit("sailor")).toContain("crab");
    expect(kindsForKit("sailor")).toContain("buoy");
    expect(kindsForKit("sailor")).not.toContain("elephant");
    expect(kindsForKit("sailor")).not.toContain("star");
    expect(kindsForKit("circus")).toContain("tent");
    expect(kindsForKit("circus")).toContain("mask");
    expect(kindsForKit("circus")).toContain("lion");
    expect(kindsForKit("fruit")).toContain("pear");
    expect(kindsForKit("fruit")).toContain("banana");
    expect(kindsForKit("fruit")).toContain("pineapple");
    expect(kindsForKit("nature")).toContain("deer");
    expect(kindsForKit("nature")).toContain("rabbit");
    expect(kindsForKit("nature")).toContain("pine");
    expect(kindsForKit("love")).toContain("heart");
    expect(kindsForKit("love")).toContain("rose");
    expect(kindsForKit("love")).toContain("dove");
    expect(kindsForKit("love", "lattice")).toContain("key");
    expect(kindsForKit("space")).toContain("rocket");
    expect(kindsForKit("space")).toContain("alien");
    expect(kindsForKit("space")).toContain("astro");
    expect(kindsForKit("sweet")).toContain("donut");
    expect(kindsForKit("sweet")).toContain("waffle");
    expect(kindsForKit("sweet")).toContain("pretzel");
    expect(kindsForKit("music")).toContain("vinyl");
    expect(kindsForKit("music")).toContain("guitar");
    expect(kindsForKit("music")).toContain("sax");
    expect(kindsForKit("kitchen")).toContain("kettle");
    expect(kindsForKit("kitchen")).toContain("chefhat");
    expect(kindsForKit("weather")).toContain("rainbow");
    expect(kindsForKit("weather")).toContain("tornado");
    expect(kindsForKit("city")).toContain("taxi");
    expect(kindsForKit("city")).toContain("skyline");
    expect(kindsForKit("arcade")).toContain("stick");
    expect(kindsForKit("arcade")).toContain("invader");
    expect(kindsForKit("haunt")).toContain("skull");
    expect(kindsForKit("sport")).toContain("trophy");
    expect(kindsForKit("school")).toContain("pencil");
    expect(kindsForKit("fruit")).toContain("chili");
    expect(kindsForKit("nature")).not.toContain("flake");
    expect(kindsForKit("circus")).toContain("dice");
    expect(kindsForKit("sailor").length).toBeGreaterThanOrEqual(14);
    expect(kindsForKit("music").length).toBeGreaterThanOrEqual(10);
    const sailor = new Set(buildField(7, "#1c4db8", "sailor").map((p) => p.charge.kind));
    const love = new Set(buildField(7, "#e84a8a", "love").map((p) => p.charge.kind));
    expect([...sailor].some((k) => !love.has(k))).toBe(true);
    expect([...sailor].every((k) => !love.has(k))).toBe(true);
    for (let i = 0; i < COLLAGE_KITS.length; i++) {
      for (let j = i + 1; j < COLLAGE_KITS.length; j++) {
        const a = new Set(kindsForKit(COLLAGE_KITS[i]));
        const b = kindsForKit(COLLAGE_KITS[j]);
        expect(b.some((k) => a.has(k))).toBe(false);
      }
    }
    const sailorField = buildField(7, "#1c4db8", "sailor").map((p) => p.charge.kind);
    const circusField = buildField(7, "#ff2f86", "circus").map((p) => p.charge.kind);
    expect(sailorField.every((k, i) => k !== circusField[i])).toBe(true);
  });

  it("gives each kit a wider wash of ground colors", () => {
    for (const kit of COLLAGE_KITS) {
      const grounds = groundsForKit(kit);
      expect(grounds.length).toBeGreaterThanOrEqual(14);
      expect(new Set(grounds).size).toBe(grounds.length);
      for (const hex of grounds) expect(hex).toMatch(/^#[0-9a-f]{6}$/i);
    }
    expect(groundsForKit("sailor")).toContain("#c98a4a");
    expect(groundsForKit("love")).toContain("#f0a0b8");
  });

  it("ships named color packs that work on any kit", () => {
    expect(COLOR_PACKS.length).toBeGreaterThanOrEqual(18);
    expect(packFromUnknown("ember")).toBe("ember");
    expect(packFromUnknown("nope")).toBe("kit");
    expect(EFFECT_PALETTES.length).toBeGreaterThanOrEqual(24);
    const kitWash = groundsForLook("sailor", "kit");
    const brine = groundsForLook("sailor", "brine");
    expect(brine).not.toEqual(kitWash);
    expect(new Set(brine).size).toBe(brine.length);
    expect(inkForLook("sailor", "neon")).toBe("#7cff6a");
    expect(inkForLook("love", "kit")).toBe(inkForLook("love"));
    for (const pack of COLOR_PACKS) {
      const grounds = groundsForLook("circus", pack);
      expect(grounds.length).toBeGreaterThanOrEqual(10);
      expect(new Set(grounds).size).toBe(grounds.length);
    }
  });

  it("defaults to an HD easy export", () => {
    const p = createDefaultProject();
    expect(p.exportSettings).toMatchObject({ width: 1280, height: 720, fps: 30, bitrate: 12, quality: 0.97 });
  });

  it("starts on a colored-ground sailor tour", () => {
    const p = createDefaultProject();
    expect(p.sources[0].generator).toBe("wallpaper");
    expect(p.sources[0].collageKit).toBe("sailor");
    expect(p.sources[0].collageMove).toBe("rush");
    expect(p.sources[0].colorA).toMatch(/^#[0-9a-f]{6}$/i);
    expect(p.sources[0].colorA).not.toBe("#ffffff");
    expect(p.layers[0].effects).toHaveLength(0);
    expect(isHeraldry("heraldry")).toBe(true);
    expect(isHeraldry("plasma")).toBe(false);
  });
});

describe("field sim", () => {
  const seeds = Array.from({ length: 16 }, (_, i) => ({
    x: (i % 4) / 4,
    y: Math.floor(i / 4) / 4,
    z: (i * 0.13) % 1,
    vx: 0.4,
    vy: 0.6,
  }));

  it("keeps flow samples unit-length and locally coherent", () => {
    const a = flowAt(0.1, 0.05, 0, 0.4, 1, 0.6, 0.7);
    const b = flowAt(0.12, 0.06, 0, 0.4, 1, 0.6, 0.7);
    expect(Math.hypot(...a)).toBeCloseTo(1, 5);
    expect(a[0] * b[0] + a[1] * b[1] + a[2] * b[2]).toBeGreaterThan(0.7);
  });

  it("connects nearby spring neighbors and can break a stretched link", () => {
    const sim = initFieldSim("spring", seeds, 0, simParamsFrom());
    const links = rebuildLinks(sim, 0.4);
    expect(links.length).toBeGreaterThan(8);
    expect(links.every((l) => l.on && l.rest > 0)).toBe(true);
    const far = stepFieldSim(sim, "spring", seeds, 0.2, simParamsFrom({ springBreak: 1.2, springStrength: 0.3 }));
    expect(far.n).toBe(16);
  });

  it("moves a flock and flips pole polarity", () => {
    const boids = stepFieldSim(null, "boids", seeds, 0.3, simParamsFrom({ boidSpeed: 1.4 }));
    const moved = Math.hypot(boids.px[0] - seeds[0].x + 0.5, boids.py[0] - seeds[0].y + 0.5);
    expect(boids.n).toBe(16);
    expect(Number.isFinite(moved)).toBe(true);
    const a = poleState(0, 0, 0.8, 1);
    const b = poleState(0, 6, 0.8, 1);
    expect(a.sign).not.toBe(b.sign);
  });
});

describe("pattern field", () => {
  const aspect = 16 / 9;
  const hh = 0.5 / aspect;
  type P = { x: number; y: number; px: number; alpha: number; charge?: number };
  const snap = (field: PatternField, t: number, pattern: string, params = agentParamsFrom(), bpm = 0, offset = 0): P[] =>
    field.posesAt(300, t, 3, aspect, params, bpm, offset, pattern).map((p) => ({ ...p }));
  const onScreen = (p: P) => p.alpha > 0.5 && p.px > 0.01 && Math.abs(p.x) < 0.5 && Math.abs(p.y / (aspect * aspect)) < hh;

  it("every Shapeshift shape places every stamp inside the frame", () => {
    const params = agentParamsFrom();
    for (const kind of FORMATION_KINDS) {
      const f = buildFormation(kind, 7, 3, 300, hh, params);
      for (let i = 0; i < 300; i++) {
        expect(Math.abs(f.x[i])).toBeLessThanOrEqual(0.5);
        expect(Math.abs(f.y[i])).toBeLessThanOrEqual(hh + 1e-6);
        expect(Number.isFinite(f.d[i])).toBe(true);
      }
    }
  });

  it("auto holds one pattern per seed and explicit picks win", () => {
    expect(resolveFieldPattern("auto", 5)).toBe(resolveFieldPattern(undefined, 5));
    expect(resolveFieldPattern("rings", 5)).toBe("rings");
    expect(new Set(Array.from({ length: 40 }, (_, s) => resolveFieldPattern("auto", s))).size).toBeGreaterThan(4);
  });

  for (const pattern of FIELD_PATTERNS) {
    it(`${pattern} loops seamlessly, never cuts, and fills the frame`, () => {
      const params = agentParamsFrom();
      const field = new PatternField();
      const loop = fieldLoop(params);
      const a = snap(field, 0.37, pattern);
      const b = snap(field, 0.37 + loop * 3, pattern);
      for (let i = 0; i < a.length; i++) {
        expect(b[i].x).toBeCloseTo(a[i].x, 4);
        expect(b[i].y).toBeCloseTo(a[i].y, 4);
        expect(b[i].px).toBeCloseTo(a[i].px, 4);
      }
      let prev = snap(field, 0, pattern);
      let jump = 0;
      let moved = 0;
      let visible = 999;
      for (let t = 1 / 30; t <= loop + 1e-6; t += 1 / 30) {
        const cur = snap(field, t, pattern);
        visible = Math.min(visible, cur.filter(onScreen).length);
        for (let i = 0; i < cur.length; i++) {
          if (!onScreen(prev[i]) || !onScreen(cur[i])) continue;
          const d = Math.hypot(cur[i].x - prev[i].x, (cur[i].y - prev[i].y) / (aspect * aspect));
          jump = Math.max(jump, d);
          moved += d;
        }
        prev = cur;
      }
      expect(jump).toBeLessThan(0.06);
      expect(moved / 300).toBeGreaterThan(0.08);
      expect(visible).toBeGreaterThan(pattern === "snake" ? 6 : 120);
    });
  }

  it("repeats icons on the pattern unless Shuffle mixes them", () => {
    const field = new PatternField();
    const tidy = snap(field, 1, "rings", agentParamsFrom({ perturb: 0 }));
    expect(new Set(tidy.map((p) => p.charge)).size).toBeLessThan(40);
    const mixed = snap(field, 1, "rings", agentParamsFrom({ perturb: 2 }));
    expect(new Set(mixed.map((p) => p.charge)).size).toBeGreaterThan(200);
  });

  it("spans whole bars of the song tempo", () => {
    const params = agentParamsFrom();
    const bar = 2;
    const loop = fieldLoop(params, 120);
    expect(Math.abs(loop / bar - Math.round(loop / bar))).toBeLessThan(1e-9);
    expect(fieldLoop(agentParamsFrom({ fieldEvolve: 2 }), 120)).toBeLessThan(loop);
  });

  it("snake fills morphing silhouettes and swaps every icon", () => {
    const params = agentParamsFrom({ warp: 1.2 });
    const field = new PatternField();
    const a = field.posesAt(240, 0.4, 3, aspect, params, 0, 0, "snake").map((p) => ({ ...p }));
    const b = field.posesAt(240, 0.4 + fieldLoop(params) * 0.35, 3, aspect, params, 0, 0, "snake").map((p) => ({ ...p }));
    expect(a.some((p) => (p.morph ?? 0) > 0.05 && (p.morph ?? 0) < 0.95)).toBe(true);
    expect(a.filter((p, i) => p.charge !== b[i].charge).length).toBeGreaterThan(40);
    const vis = (poses: { alpha: number; px: number; x: number; y: number }[]) => poses.filter((p) => p.alpha > 0.5 && p.px > 0.02);
    const field2 = new PatternField();
    const period = fieldLoop(params);
    let hi = 0;
    let lo = 999;
    for (let k = 0; k < 8; k++) {
      const nVis = vis(field2.posesAt(300, k * period * 0.12, 3, aspect, params, 0, 0, "snake")).length;
      hi = Math.max(hi, nVis);
      lo = Math.min(lo, nVis);
    }
    expect(hi).toBeGreaterThan(lo * 1.4);
    const K = 7;
    const at = (idx: number) => vis(field2.posesAt(300, period * ((idx + 0.12) / K), 3, aspect, params, 0, 0, "snake"));
    const giants = at(5);
    expect(giants.length).toBeGreaterThan(6);
    expect(giants.length).toBeLessThan(40);
    expect(giants.filter((p) => p.px > 0.12).length).toBeGreaterThan(4);
    const glyph = at(6);
    const xs = glyph.map((p) => p.x);
    const ys = glyph.map((p) => p.y / (aspect * aspect));
    expect(Math.max(...xs) - Math.min(...xs)).toBeGreaterThan(0.55);
    expect(glyph.length).toBeGreaterThan(40);
    expect(Math.max(...ys) - Math.min(...ys) > 0.12 || Math.max(...xs) - Math.min(...xs) > 0.7).toBe(true);
  });

  it("is a pure function of time so scrubbing back matches", () => {
    const field = new PatternField();
    const a = snap(field, 4.2, "shapeshift");
    snap(field, 9.7, "shapeshift");
    const b = snap(new PatternField(), 4.2, "shapeshift");
    for (let i = 0; i < a.length; i++) {
      expect(b[i].x).toBeCloseTo(a[i].x, 6);
      expect(b[i].y).toBeCloseTo(a[i].y, 6);
    }
  });
});

describe("documentary search", () => {
  it("is a camera option, not a collage move", () => {
    expect(cameraFromUnknown(undefined)).toBe("fixed");
    expect(cameraFromUnknown("hunt")).toBe("hunt");
    expect(cameraFromUnknown("drone")).toBe("fixed");
    expect(huntSelectFromUnknown(undefined)).toBe("mixed");
    expect(COLLAGE_MOVES.includes("hunt" as (typeof COLLAGE_MOVES)[number])).toBe(false);
    expect(clampHuntWideMin(0)).toBe(0.4);
    expect(clampHuntWideMax(99)).toBe(16);
    const swapped = huntParamsFrom({ huntWideMin: 8, huntWideMax: 2, huntFollowMin: 7, huntFollowMax: 1 });
    expect(swapped.wideMin).toBeLessThanOrEqual(swapped.wideMax);
    expect(swapped.followMin).toBeLessThanOrEqual(swapped.followMax);
    expect(swapped.select).toBe("mixed");
  });

  it("never picks the same subject twice in a row", () => {
    const stamps = [
      { id: 0, x: 0, y: 0, px: 0.1 },
      { id: 1, x: 0.2, y: 0, px: 0.1 },
      { id: 2, x: -0.2, y: 0.1, px: 0.1 },
    ];
    const rng = () => 0.01;
    for (let i = 0; i < 8; i++) {
      const pick = pickHuntSubject(stamps, 1, "random", rng, [], 1 / 30);
      expect(pick).not.toBe(1);
    }
  });

  it("weights reactive picks toward fast movers", () => {
    const stamps = [
      { id: 0, x: 0, y: 0, px: 0.1 },
      { id: 1, x: 0.4, y: 0, px: 0.1 },
    ];
    const prev = [
      { id: 0, x: 0, y: 0, px: 0.1 },
      { id: 1, x: 0.05, y: 0, px: 0.1 },
    ];
    const counts = { 0: 0, 1: 0 };
    for (let i = 0; i < 80; i++) {
      const pick = pickHuntSubject(stamps, -1, "reactive", () => (i + 0.5) / 80, prev, 1 / 30);
      counts[pick as 0 | 1] += 1;
    }
    expect(counts[1]).toBeGreaterThan(counts[0]);
  });

  it("watches wide, then notices, snaps, and tracks", () => {
    const stamps = (t: number) => [
      { id: 0, x: Math.sin(t) * 0.2, y: 0, px: 0.08 },
      { id: 1, x: 0.15, y: Math.cos(t) * 0.12, px: 0.08 },
    ];
    const params = huntParamsFrom({
      huntWideMin: 0.4,
      huntWideMax: 0.4,
      huntFollowMin: 1.2,
      huntFollowMax: 1.2,
      huntReactMin: 0.12,
      huntReactMax: 0.12,
      huntSnap: 2,
      huntSelect: "random",
      huntVariation: 0,
    });
    let state = stepHunt(null, stamps(0), 0, params, 7);
    expect(state.phase).toBe("wide");
    state = stepHunt(state, stamps(0.5), 0.5, params, 7);
    expect(state.phase).toBe("notice");
    expect(state.subject).toBeGreaterThanOrEqual(0);
    const first = state.subject;
    state = stepHunt(state, stamps(0.7), 0.7, params, 7);
    expect(["notice", "snap"]).toContain(state.phase);
    state = stepHunt(state, stamps(1.0), 1.0, params, 7);
    expect(["snap", "track"]).toContain(state.phase);
    const identity = applyHuntPose({ x: 0.1, y: -0.05, px: 0.08, rot: 0.2 }, { x: 0, y: 0, zoom: 1, rot: 0, focus: 0 });
    expect(identity.x).toBeCloseTo(0.1);
    expect(identity.px).toBeCloseTo(0.08);
    expect(first).not.toBe(-1);
  });
});

describe("clip loop", () => {
  it("does not fade the tail unless close loop is on", () => {
    expect(createDefaultProject().exportSettings.loopClose).toBe(false);
    expect(clipLoopFade(0, 24)).toBe(0);
    expect(clipLoopFade(12, 24)).toBe(0);
    expect(clipLoopFade(23, 24)).toBeGreaterThan(0.5);
    expect(clipLoopFade(23, 24)).toBeLessThanOrEqual(1);
  });
});
