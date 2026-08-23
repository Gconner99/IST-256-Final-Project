import type { EffectType } from "../core/types";

export const windowFx: EffectType = {
  id: "window",
  name: "Window",
  category: "wacky",
  description: "A circle or square frame in the picture. Feather softens the edge. Inside is a different random place — or another photo you dropped / generated. Stamp window for a new picture and a new spot",
  params: [
    {
      id: "shape",
      label: "Shape",
      kind: "enum",
      default: "circle",
      options: [
        { value: "square", label: "Square" },
        { value: "circle", label: "Circle" },
      ],
    },
    { id: "x", label: "X", kind: "float", min: 0.08, max: 0.92, step: 0.01, default: 0.72 },
    { id: "y", label: "Y", kind: "float", min: 0.08, max: 0.92, step: 0.01, default: 0.3 },
    { id: "size", label: "Size", kind: "float", min: 0.14, max: 0.7, step: 0.01, default: 0.34 },
    { id: "feather", label: "Feather", kind: "float", min: 0, max: 0.4, step: 0.01, default: 0.1 },
    {
      id: "inside",
      label: "Inside",
      kind: "enum",
      default: "place",
      options: [
        { value: "place", label: "Random place" },
        { value: "other", label: "Other media" },
      ],
    },
    {
      id: "place",
      label: "Place",
      kind: "enum",
      default: "stars",
      options: [
        { value: "plasma", label: "Plasma" },
        { value: "noise", label: "Noise" },
        { value: "gradient", label: "Grad" },
        { value: "stars", label: "Stars" },
        { value: "marsh", label: "Marsh" },
        { value: "oil", label: "Oil" },
        { value: "paper", label: "Paper" },
        { value: "cave", label: "Cave" },
      ],
    },
    { id: "inkA", label: "Ink A", kind: "color", default: "#060814" },
    { id: "inkB", label: "Ink B", kind: "color", default: "#c8d4ff" },
    { id: "seed", label: "Seed", kind: "int", min: 1, max: 9999, step: 1, default: 404 },
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform sampler2D uInner;
uniform float u_shape;
uniform float u_x;
uniform float u_y;
uniform float u_size;
uniform float u_feather;
uniform float u_amount;

float windowMask(vec2 uv) {
  float ar = uResolution.x / max(uResolution.y, 1.0);
  vec2 p = uv - vec2(u_x, u_y);
  p.x *= ar;
  p /= max(u_size, 0.02);
  float dist;
  if (u_shape < 0.5) {
    vec2 b = abs(p) - vec2(0.5);
    dist = length(max(b, 0.0)) + min(max(b.x, b.y), 0.0);
  } else {
    dist = length(p) - 0.5;
  }
  return 1.0 - smoothstep(-u_feather, max(u_feather, 0.001), dist);
}

vec2 windowUv(vec2 uv) {
  float ar = uResolution.x / max(uResolution.y, 1.0);
  vec2 p = uv - vec2(u_x, u_y);
  p.x *= ar;
  p /= max(u_size, 0.02);
  return clamp(p + 0.5, 0.0, 1.0);
}
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec3 inn = texture(uInner, windowUv(uv)).rgb;
  float m = windowMask(uv) * u_amount;
  float ar = uResolution.x / max(uResolution.y, 1.0);
  vec2 p = uv - vec2(u_x, u_y);
  p.x *= ar;
  p /= max(u_size, 0.02);
  float dist = u_shape < 0.5
    ? length(max(abs(p) - vec2(0.5), 0.0)) + min(max(abs(p.x), abs(p.y)) - 0.5, 0.0)
    : length(p) - 0.5;
  float rim = smoothstep(0.055, 0.0, abs(dist)) * m;
  vec3 framed = mix(src, inn, m);
  framed = mix(framed, mix(inn, vec3(0.12, 0.1, 0.08), 0.55), rim * 0.45);
  return vec4(framed, 1.0);
}
`,
};
