import type { EffectType } from "../core/types";
import { CRITTER_GLSL } from "../engine/critters.glsl";
import { dancer } from "./dancer";

export const critters: EffectType = {
  id: "critters",
  name: "Floaters",
  category: "wacky",
  description: "Drifting stickers. Kit picks lumpy families, toy-pop music icons, chapel votives, moths, or small charms",
  params: [
    {
      id: "kit",
      label: "Kit",
      kind: "enum",
      default: "shapes",
      options: [
        { value: "shapes", label: "Shapes" },
        { value: "toy pop", label: "Toy pop" },
        { value: "mix", label: "Shapes + toy pop" },
        { value: "votives", label: "Votives" },
        { value: "moths", label: "Moths" },
        { value: "charms", label: "Charms" },
      ],
    },
    { id: "count", label: "Shapes", kind: "int", min: 1, max: 8, step: 1, default: 5 },
    { id: "size", label: "Size", kind: "float", min: 0.4, max: 2.5, step: 0.01, default: 1.1 },
    { id: "seed", label: "Seed", kind: "int", min: 1, max: 9999, step: 1, default: 77 },
    { id: "speed", label: "Drift", kind: "float", min: 0, max: 3, step: 0.01, default: 1.15 },
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_kit;
uniform float u_count;
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${CRITTER_GLSL}
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size, u_kit);
  vec3 placed = mix(src, c.rgb, c.a * u_amount);
  vec3 screen = 1.0 - (1.0 - src) * (1.0 - c.rgb);
  vec3 outc = mix(placed, mix(placed, screen, 0.4), c.a * u_amount);
  return vec4(outc, 1.0);
}
`,
};

export const WACKY_EFFECTS = [critters, dancer];
