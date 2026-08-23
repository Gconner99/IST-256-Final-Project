import type { EffectType } from "../core/types";
import { DANCER_GLSL } from "../engine/dancer.glsl";
import { ORBS_GLSL } from "../engine/orbs.glsl";

export const orbs: EffectType = {
  id: "orbs",
  name: "Orbs",
  category: "wacky",
  description: "Faceted candy spheres that bounce through the frame — smooth sweets, folded crystals, or spiked stars. Bounce sets the hop. Trail is on by default. Toggle beside Solids",
  params: [
    { id: "count", label: "Count", kind: "int", min: 1, max: 4, step: 1, default: 4 },
    { id: "size", label: "Size", kind: "float", min: 0.25, max: 2.5, step: 0.01, default: 0.48 },
    {
      id: "style",
      label: "Style",
      kind: "enum",
      default: "candy",
      options: [
        { value: "candy", label: "Candy" },
        { value: "crystal", label: "Crystal" },
        { value: "spike", label: "Spike" },
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
    { id: "bounce", label: "Bounce", kind: "float", min: 0, max: 1.5, step: 0.01, default: 0.78 },
    { id: "echo", label: "Echo", kind: "float", min: 0, max: 1, step: 0.01, default: 0.32 },
    { id: "trail", label: "Trail", kind: "float", min: 0, max: 1, step: 0.01, default: 0.78 },
    { id: "seed", label: "Seed", kind: "int", min: 1, max: 9999, step: 1, default: 909 },
    { id: "speed", label: "Path", kind: "float", min: 0, max: 3, step: 0.01, default: 1.55 },
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_count;
uniform float u_size;
uniform float u_style;
uniform float u_place;
uniform float u_move;
uniform float u_bounce;
uniform float u_echo;
uniform float u_trail;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${DANCER_GLSL}
${ORBS_GLSL}
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = orbRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move, u_style, u_bounce, u_trail);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`,
};
