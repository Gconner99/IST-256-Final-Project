import type { EffectType } from "../core/types";
import { DANCER_GLSL } from "../engine/dancer.glsl";

export const dancer: EffectType = {
  id: "dancer",
  name: "Idol",
  category: "wacky",
  description: "One seed-grown low-poly creature with a face like an animal that does not exist. Mini army fills the frame with tiny ones dancing in sync. Echo leaves a hue-shifted afterimage",
  params: [
    { id: "count", label: "Count", kind: "int", min: 1, max: 4, step: 1, default: 1 },
    { id: "size", label: "Size", kind: "float", min: 0.25, max: 2.5, step: 0.01, default: 0.65 },
    {
      id: "crowd",
      label: "Crowd",
      kind: "enum",
      default: "normal",
      randomizable: false,
      options: [
        { value: "normal", label: "Normal" },
        { value: "mini", label: "Mini army" },
      ],
    },
    {
      id: "place",
      label: "Place",
      kind: "enum",
      default: "center",
      options: [
        { value: "center", label: "Center" },
        { value: "scatter", label: "Scatter + depth" },
      ],
    },
    { id: "echo", label: "Echo", kind: "float", min: 0, max: 1, step: 0.01, default: 0.5 },
    { id: "seed", label: "Seed", kind: "int", min: 1, max: 9999, step: 1, default: 256 },
    { id: "speed", label: "Dance", kind: "float", min: 0, max: 3, step: 0.01, default: 1.0 },
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_count;
uniform float u_size;
uniform float u_crowd;
uniform float u_place;
uniform float u_echo;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${DANCER_GLSL}
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_crowd);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,
};
