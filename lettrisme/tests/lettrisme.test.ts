import { describe, expect, it } from "vitest";
import { createDefaultProject } from "../src/core/defaults";
import { datedCaption, PHRASES, paragraph } from "../src/core/phrases";
import { parseProject, serializeProject } from "../src/core/project";
import { mulberry32 } from "../src/core/random";
import { PLATES } from "../src/core/types";
import { emptyField, sampleAt } from "../src/render/density";

describe("project files", () => {
  it("round-trips without bitmaps", () => {
    const p = createDefaultProject();
    p.sources = [
      {
        id: "s1",
        name: "ref.jpg",
        kind: "image",
        width: 100,
        height: 80,
        bitmap: {} as ImageBitmap,
      },
    ];
    const json = serializeProject(p);
    const loaded = parseProject(json);
    expect(loaded.app).toBe("hypergraphie");
    expect(loaded.sources[0]?.bitmap).toBeNull();
    expect(json).not.toContain("bitmap");
    expect(loaded.plate).toBe("scriptorium");
  });

  it("rejects unknown files", () => {
    expect(() => parseProject("{}")).toThrow(/Not a Hypergraphie/);
    expect(() => parseProject('{"app":"phosphene"}')).toThrow(/Not a Hypergraphie/);
    expect(() => parseProject('{"app":"derive"}')).toThrow(/Not a Hypergraphie/);
  });
});

describe("plates + phrases", () => {
  it("ships the five Isou plates", () => {
    expect(PLATES.map((p) => p.id)).toEqual([
      "scriptorium",
      "alphabet",
      "reseau",
      "tache",
      "masse",
    ]);
  });

  it("has a lettrist phrase catalog", () => {
    expect(PHRASES.length).toBeGreaterThan(5);
    expect(paragraph(mulberry32(3), 4)).toHaveLength(4);
  });

  it("dates captions deterministically", () => {
    expect(datedCaption(mulberry32(1973))).toEqual(datedCaption(mulberry32(1973)));
  });
});

describe("density field", () => {
  it("samples bilinearly", () => {
    const field = emptyField(2, 2, 0);
    field.data[0] = 0;
    field.data[1] = 1;
    field.data[2] = 0;
    field.data[3] = 1;
    expect(sampleAt(field, 0, 0)).toBeCloseTo(0);
    expect(sampleAt(field, 1, 0)).toBeCloseTo(1);
    expect(sampleAt(field, 0.5, 0)).toBeCloseTo(0.5);
  });
});
