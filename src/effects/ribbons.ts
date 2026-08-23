import type { EffectType } from "../core/types";
import { DANCER_GLSL } from "../engine/dancer.glsl";
import { RIBBONS_GLSL } from "../engine/ribbons.glsl";

export const ribbons: EffectType = {
  id: "ribbons",
  name: "Ribbons",
  category: "wacky",
  description: "Twisting 3D tapes — long flags, looping belts, and helix ribbons that weave through the frame. Curl tightens the twist. Trail leaves a delayed comet. Toggle beside Solids",
  params: [
    { id: "count", label: "Count", kind: "int", min: 1, max: 4, step: 1, default: 2 },
    { id: "size", label: "Size", kind: "float", min: 0.25, max: 2.5, step: 0.01, default: 0.62 },
    {
      id: "style",
      label: "Style",
      kind: "enum",
      default: "tape",
      options: [
        { value: "tape", label: "Tape" },
        { value: "loop", label: "Loop" },
        { value: "helix", label: "Helix" },
      ],
    },
    {
      id: "place",
      label: "Place",
      kind: "enum",
      default: "scatter",
      options: [
        { value: "center", label: "Center" },
        { value: "scatter", label: "Scatter + depth" },
      ],
    },
    {
      id: "move",
      label: "Move",
      kind: "enum",
      default: "weave",
      options: [
        { value: "dance", label: "Spin" },
        { value: "drift", label: "Drift" },
        { value: "float", label: "Float" },
        { value: "orbit", label: "Orbit" },
        { value: "weave", label: "Weave" },
      ],
    },
    { id: "curl", label: "Curl", kind: "float", min: 0, max: 2, step: 0.01, default: 1.05 },
    { id: "echo", label: "Echo", kind: "float", min: 0, max: 1, step: 0.01, default: 0.38 },
    { id: "trail", label: "Trail", kind: "float", min: 0, max: 1, step: 0.01, default: 0.58 },
    { id: "seed", label: "Seed", kind: "int", min: 1, max: 9999, step: 1, default: 808 },
    { id: "speed", label: "Path", kind: "float", min: 0, max: 3, step: 0.01, default: 1.35 },
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_count;
uniform float u_size;
uniform float u_style;
uniform float u_place;
uniform float u_move;
uniform float u_curl;
uniform float u_echo;
uniform float u_trail;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${DANCER_GLSL}
${RIBBONS_GLSL}
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = ribbonRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move, u_style, u_curl, u_trail);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,
};
