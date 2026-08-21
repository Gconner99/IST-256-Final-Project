import type { EffectType } from "../core/types";
import { DANCER_GLSL } from "../engine/dancer.glsl";

export const dancer: EffectType = {
  id: "dancer",
  name: "Idol",
  category: "wacky",
  description: "A seed-grown low-poly creature with a face like an animal that does not exist, dancing in the middle of the frame",
  params: [
    { id: "size", label: "Size", kind: "float", min: 0.4, max: 2.5, step: 0.01, default: 1.2 },
    { id: "seed", label: "Seed", kind: "int", min: 1, max: 9999, step: 1, default: 256 },
    { id: "speed", label: "Dance", kind: "float", min: 0, max: 3, step: 0.01, default: 1.0 },
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_size;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${DANCER_GLSL}
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size);
  vec3 placed = mix(src, f.rgb, f.a * u_amount);
  return vec4(placed, 1.0);
}
`,
};
