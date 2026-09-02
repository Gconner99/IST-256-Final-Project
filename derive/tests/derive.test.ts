import { describe, expect, it } from "vitest";
import { affinity } from "../src/core/ambiances";
import { composePath, deriveWalk, transitionScore } from "../src/core/derive";
import { recompose, rewalk } from "../src/core/compose";
import { createDefaultProject } from "../src/core/defaults";
import { layoutUnits } from "../src/core/layout";
import { parseProject, serializeProject } from "../src/core/project";
import { mulberry32 } from "../src/core/random";
import { SLOGANS, STAMPS, STREETS, detournedText } from "../src/core/slogans";
import type { Unit } from "../src/core/types";
import { generateUnits } from "../src/core/units";

function sampleUnits(): Unit[] {
  return [
    unit("a", "attraction", 0.3, 0.4, true),
    unit("b", "play", 0.6, 0.35, false),
    unit("c", "spectacle", 0.7, 0.7, false),
    unit("d", "void", 0.25, 0.75, false),
    unit("e", "boredom", 0.5, 0.55, false),
  ];
}

function unit(id: string, ambiance: Unit["ambiance"], x: number, y: number, plaque: boolean): Unit {
  return {
    id,
    sourceId: "s",
    ambiance,
    plaque,
    crop: [
      { x: 0.2, y: 0.2 },
      { x: 0.4, y: 0.2 },
      { x: 0.4, y: 0.4 },
      { x: 0.2, y: 0.4 },
    ],
    cropCenter: { x: 0.3, y: 0.3 },
    x,
    y,
    scale: 1,
    rotation: 0,
    pinned: false,
    label: id,
  };
}

describe("seeded dérive", () => {
  it("walks the same path for the same seed", () => {
    const settings = { seed: 1957, steps: 6, chance: 0.2, attraction: 0.8, loops: false };
    const a = deriveWalk(sampleUnits(), settings, mulberry32(1957));
    const b = deriveWalk(sampleUnits(), settings, mulberry32(1957));
    expect(a.unitIds).toEqual(b.unitIds);
    expect(a.arrows).toEqual(b.arrows);
    expect(a.unitIds.length).toBeGreaterThan(2);
  });

  it("different seeds diverge", () => {
    const settings = { seed: 1, steps: 6, chance: 0.5, attraction: 0.5, loops: true };
    const a = deriveWalk(sampleUnits(), settings, mulberry32(1));
    const b = deriveWalk(sampleUnits(), settings, mulberry32(99));
    expect(a.unitIds.join()).not.toEqual(b.unitIds.join());
  });
});

describe("ambiance affinity", () => {
  it("play prefers play and attraction over void", () => {
    expect(affinity("play", "play")).toBeGreaterThan(affinity("play", "void"));
    expect(affinity("attraction", "play")).toBeGreaterThan(affinity("attraction", "repulsion"));
  });

  it("scores plaques higher than equal non-hubs", () => {
    const from = unit("a", "play", 0.4, 0.4, false);
    const hub = unit("h", "play", 0.5, 0.5, true);
    const plain = unit("p", "play", 0.5, 0.5, false);
    const s = { attraction: 1, chance: 0 };
    expect(transitionScore(from, hub, s, 0)).toBeGreaterThan(transitionScore(from, plain, s, 0));
  });
});

describe("project files", () => {
  it("round-trips JSON without runtime bitmaps", () => {
    const p = recompose(createDefaultProject());
    p.sources[0]!.bitmap = {} as ImageBitmap;
    const json = serializeProject(p);
    const loaded = parseProject(json);
    expect(loaded.app).toBe("derive");
    expect(loaded.units.length).toBe(p.units.length);
    expect(loaded.sources[0]!.bitmap).toBeNull();
    expect(json).not.toContain("bitmap");
  });

  it("rejects unknown files", () => {
    expect(() => parseProject("{}")).toThrow(/Not a Dérive/);
    expect(() => parseProject('{"app":"phosphene"}')).toThrow(/Not a Dérive/);
  });
});

describe("units + layout", () => {
  it("same seed yields the same crop geometry", () => {
    const project = createDefaultProject();
    const a = generateUnits(project.sources, project.unitSettings, mulberry32(12));
    const b = generateUnits(project.sources, project.unitSettings, mulberry32(12));
    expect(a.map((u) => u.crop)).toEqual(b.map((u) => u.crop));
    expect(a.map((u) => u.ambiance)).toEqual(b.map((u) => u.ambiance));
  });

  it("layout is deterministic and keeps pinned units", () => {
    const raw = generateUnits(createDefaultProject().sources, createDefaultProject().unitSettings, mulberry32(3));
    raw[0]!.pinned = true;
    raw[0]!.x = 0.11;
    raw[0]!.y = 0.22;
    const a = layoutUnits(raw, mulberry32(4));
    const b = layoutUnits(raw, mulberry32(4));
    expect(a.map((u) => [u.x, u.y])).toEqual(b.map((u) => [u.x, u.y]));
    expect(a[0]!.x).toBeCloseTo(0.11);
    expect(a[0]!.y).toBeCloseTo(0.22);
  });

  it("rewalk keeps units and changes only the path when chance is high", () => {
    const p = recompose(createDefaultProject());
    const q = rewalk({ ...p, drift: { ...p.drift, chance: 1, seed: p.drift.seed + 3 } });
    expect(q.units).toEqual(p.units);
    expect(q.path.arrows.length).toBeGreaterThan(0);
  });
});

describe("détournement catalog", () => {
  it("has slogans, streets, and stamps", () => {
    expect(SLOGANS.length).toBeGreaterThan(5);
    expect(STREETS.length).toBeGreaterThan(5);
    expect(STAMPS.length).toBeGreaterThan(3);
  });

  it("mix mode returns a string", () => {
    const rng = mulberry32(8);
    expect(detournedText("mix", rng).length).toBeGreaterThan(2);
    expect(composePath(sampleUnits(), { seed: 1, steps: 3, chance: 0, attraction: 1, loops: false }, 0.5, mulberry32(2)).arrows.length).toBeGreaterThan(0);
  });
});
