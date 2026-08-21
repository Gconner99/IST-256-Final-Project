import type { EffectType } from "../core/types";

export const echo: EffectType = {
  id: "echo",
  name: "Echo / Trails",
  category: "temporal",
  description: "Blend with previous frames",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.45 },
    { id: "decay", label: "Decay", kind: "float", min: 0, max: 1, step: 0.01, default: 0.7 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_decay;
`,
  temporal: true,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec3 hist = texture(uHistory, uv).rgb;
  vec3 fb = texture(uFeedback, uv).rgb;
  vec3 trail = mix(hist, fb, u_decay);
  return vec4(mix(src, trail, u_amount), 1.0);
}
`,
};

export const slitscan: EffectType = {
  id: "slitscan",
  name: "Slit-scan",
  category: "temporal",
  description: "Temporal slit / streak from history",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.6 },
    { id: "width", label: "Slit", kind: "float", min: 0.002, max: 0.2, step: 0.001, default: 0.03 },
    { id: "axis", label: "Axis", kind: "enum", default: "x", options: [{ value: "x", label: "Vertical slit" }, { value: "y", label: "Horizontal slit" }] },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_width;
uniform float u_axis;
`,
  temporal: true,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec3 hist = texture(uHistory, uv).rgb;
  float coord = mix(uv.x, uv.y, step(0.5, u_axis));
  float slit = 0.5 + 0.4 * sin(uTime * 0.4);
  float w = smoothstep(u_width, 0.0, abs(coord - slit));
  vec3 outc = mix(hist, src, w);
  return vec4(mix(src, outc, u_amount), 1.0);
}
`,
};

export const stutter: EffectType = {
  id: "stutter",
  name: "Stutter",
  category: "temporal",
  description: "Hold / skip frames from history",
  params: [
    { id: "rate", label: "Hold", kind: "float", min: 0, max: 1, step: 0.01, default: 0.35 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_rate;
`,
  temporal: true,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec3 hist = texture(uHistory, uv).rgb;
  float hold = step(u_rate, fract(uTime * 4.0 + hash21(vec2(floor(uTime * (1.0 + u_rate * 8.0)), 2.2))));
  return vec4(mix(hist, src, hold), 1.0);
}
`,
};

export const TEMPORAL_EFFECTS = [echo, slitscan, stutter];
