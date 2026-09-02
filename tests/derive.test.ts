import { describe, expect, it } from "vitest";
import { affinity, pickAmbiance } from "../src/derive/core/ambiances";
import { transitionScore, walkDerive } from "../src/derive/core/derive";
import { placeUnits } from "../src/derive/core/layout";
import { createDefaultProject, parseProject, rebuildComposition, serializeProject } from "../src/derive/core/project";
import { SLOGANS, STAMPS, STREETS } from "../src/derive/core/slogans";
import { generateUnits } from "../src/derive/core/units";

describe("seeded dérive walk", () => {
  it("is reproducible for the same seed and settings", () => {
    const project = rebuildComposition(createDefaultProject(1957), "recompose");
    const a = walkDerive(project.units, project.drift, project.arrows.density);
    const b = walkDerive(project.units, project.drift, project.arrows.density);
    expect(a).toEqual(b);
    expect(a.length).toBeGreaterThan(2);
    expect(a.some((p) => p.kind === "drift")).toBe(true);
  });

  it("changes when the seed changes", () => {
    const p = rebuildComposition(createDefaultProject(1957), "recompose");
    const q = rebuildComposition(createDefaultProject(1958), "recompose");
    expect(walkDerive(p.units, p.drift, p.arrows.density)).not.toEqual(
      walkDerive(q.units, q.drift, q.arrows.density),
    );
  });
});

describe("ambiance affinity", () => {
  it("prefers play from attraction and void from spectacle", () => {
    expect(affinity("attraction", "play")).toBeGreaterThan(affinity("attraction", "repulsion"));
    expect(affinity("spectacle", "void")).toBeGreaterThan(affinity("spectacle", "spectacle"));
    expect(affinity("void", "attraction")).toBeGreaterThan(affinity("void", "spectacle"));
  });

  it("scores transitions using affinity and hub pull", () => {
    const project = rebuildComposition(createDefaultProject(12), "recompose");
    const from = project.units[0]!;
    const to = { ...project.units[1]!, hub: true, ambiance: "play" as const };
    const away = { ...project.units[1]!, hub: false, ambiance: "repulsion" as const, x: from.x + 0.8, y: from.y };
    expect(transitionScore(from, to, 0.9)).toBeGreaterThan(transitionScore(from, away, 0.9));
  });

  it("picks ambiances from weights", () => {
    const rng = () => 0.01;
    expect(pickAmbiance({ attraction: 1, repulsion: 0, play: 0, boredom: 0, spectacle: 0, void: 0 }, rng)).toBe(
      "attraction",
    );
  });
});

describe("project JSON", () => {
  it("round-trips without runtime bitmaps", () => {
    const p = rebuildComposition(createDefaultProject(1957), "recompose");
    p.sources[0]!.bitmap = {} as ImageBitmap;
    const json = serializeProject(p);
    const loaded = parseProject(json);
    expect(loaded.app).toBe("derive");
    expect(loaded.version).toBe(1);
    expect(loaded.units).toHaveLength(p.units.length);
    expect(loaded.passages).toHaveLength(p.passages.length);
    expect(loaded.sources[0]!.bitmap).toBeNull();
    expect(json).not.toContain("bitmap");
    expect(json).not.toContain("objectUrl");
  });

  it("rejects unknown files", () => {
    expect(() => parseProject("{}")).toThrow(/Not a Dérive/);
  });
});

describe("layout and units", () => {
  it("generates the same units and placement for the same seed", () => {
    const cfg = createDefaultProject(42);
    const a = placeUnits(generateUnits(cfg.sources, cfg.unitsCfg, cfg.ambiances, 42), 42);
    const b = placeUnits(generateUnits(cfg.sources, cfg.unitsCfg, cfg.ambiances, 42), 42);
    expect(a).toEqual(b);
    expect(a.length).toBe(cfg.unitsCfg.count);
    expect(a.every((u) => u.polygon.length >= 5)).toBe(true);
    expect(a.some((u) => u.hub)).toBe(true);
  });
});

describe("détournement catalog", () => {
  it("ships slogans, streets, and stamps", () => {
    expect(SLOGANS.length).toBeGreaterThan(8);
    expect(STREETS.length).toBeGreaterThan(8);
    expect(STAMPS.length).toBeGreaterThan(3);
    expect(SLOGANS).toContain("NE TRAVAILLEZ JAMAIS");
    expect(SLOGANS).toContain("SOUS LES PAVÉS, LA PLAGE");
  });
});
