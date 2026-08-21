import { describe, expect, it } from "vitest";
import { clamp, lerp, mulberry32 } from "../src/core/random";
import { evalKeyframes, mediaTime } from "../src/core/timeline";
import { createDefaultProject } from "../src/core/defaults";
import { parseProject, serializeProject } from "../src/core/project";
import { randomizeProject } from "../src/core/randomize";
import { applyPreset, extractPreset } from "../src/core/presets";
import { allEffects, getEffect } from "../src/effects/registry";
import { compileEffectSource } from "../src/engine/compile";
import type { Keyframe } from "../src/core/types";

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
    const json = serializeProject(p);
    const loaded = parseProject(json);
    expect(loaded.app).toBe("phosphene");
    expect(loaded.layers).toHaveLength(1);
    expect(loaded.sources[0].bitmap).toBeNull();
    expect(json).not.toContain("bitmap");
  });

  it("rejects unknown files", () => {
    expect(() => parseProject("{}")).toThrow(/Not a Phosphene/);
  });
});

describe("effects registry", () => {
  it("ships a usable MVP library", () => {
    expect(allEffects().length).toBeGreaterThanOrEqual(15);
    for (const id of ["grade", "warp", "chroma", "analog", "kaleido", "echo", "bloom", "smear"]) {
      expect(getEffect(id)).toBeTruthy();
    }
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
});
