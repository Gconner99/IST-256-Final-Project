import type { EffectType } from "../core/types";
import { DANCER_GLSL } from "../engine/dancer.glsl";
import { GEOM_GLSL, GEOM_MINI_GLSL } from "../engine/geom.glsl";

const APPLY_NORMAL = `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  float form = u_style < 0.5 ? 1.0 : 2.0;
  vec4 f = geomRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move, form);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`;

const APPLY_MINI = `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  float form = u_style < 0.5 ? 1.0 : 2.0;
  vec4 f = geomRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move, form);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`;

const UNIFORMS = `
uniform float u_count;
uniform float u_size;
uniform float u_style;
uniform float u_crowd;
uniform float u_place;
uniform float u_move;
uniform float u_echo;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
`;

export const solids: EffectType = {
  id: "solids",
  name: "Solids",
  category: "wacky",
  description: "Abstract 3D shapes in the same low-poly world as the idols — boxes, stars, rings, and crystals that weave around the frame. Toggle on or off beside Idol. Style picks melting morphs or folded facets",
  params: [
    { id: "count", label: "Count", kind: "int", min: 1, max: 4, step: 1, default: 3 },
    { id: "size", label: "Size", kind: "float", min: 0.25, max: 2.5, step: 0.01, default: 0.52 },
    {
      id: "style",
      label: "Style",
      kind: "enum",
      default: "morph",
      options: [
        { value: "morph", label: "Morph" },
        { value: "crystal", label: "Crystal" },
      ],
    },
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
    { id: "echo", label: "Echo", kind: "float", min: 0, max: 1, step: 0.01, default: 0.45 },
    { id: "seed", label: "Seed", kind: "int", min: 1, max: 9999, step: 1, default: 411 },
    { id: "speed", label: "Path", kind: "float", min: 0, max: 3, step: 0.01, default: 0.55 },
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `${UNIFORMS}${DANCER_GLSL}${GEOM_GLSL}`,
  applyGlsl: APPLY_NORMAL,
};

export function solidsForCompile(mini: boolean): EffectType {
  if (!mini) return solids;
  return {
    ...solids,
    extraUniforms: `${UNIFORMS}${DANCER_GLSL}${GEOM_GLSL}${GEOM_MINI_GLSL}`,
    applyGlsl: APPLY_MINI,
  };
}
