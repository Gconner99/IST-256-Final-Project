import type { EffectType } from "../core/types";
import { CRITTER_GLSL } from "../engine/critters.glsl";

export const critters: EffectType = {
  id: "critters",
  name: "Weird Critters",
  category: "wacky",
  description: "Little randomly generated blob creatures wandering the frame",
  params: [
    { id: "count", label: "Critters", kind: "int", min: 1, max: 14, step: 1, default: 7 },
    { id: "size", label: "Size", kind: "float", min: 0.4, max: 2.5, step: 0.01, default: 1 },
    { id: "seed", label: "Seed", kind: "int", min: 1, max: 9999, step: 1, default: 77 },
    { id: "speed", label: "Wiggle", kind: "float", min: 0, max: 3, step: 0.01, default: 1 },
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
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
  vec4 c = critterField(uv, u_count, u_seed, uTime * u_speed, u_size);
  vec3 outc = mix(src, c.rgb, c.a * u_amount);
  return vec4(outc, 1.0);
}
`,
};

export const WACKY_EFFECTS = [critters];
