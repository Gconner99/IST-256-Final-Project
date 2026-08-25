import type { EffectType } from "../core/types";

export const warp: EffectType = {
  id: "warp",
  name: "Wave Warp",
  category: "distort",
  description: "Sine-wave displacement / liquid glass",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 0.4, step: 0.001, default: 0.05 },
    { id: "freq", label: "Freq", kind: "float", min: 0.5, max: 40, step: 0.1, default: 8 },
    { id: "speed", label: "Speed", kind: "float", min: 0, max: 4, step: 0.01, default: 0.7 },
    { id: "angle", label: "Angle", kind: "float", min: 0, max: 6.283, step: 0.01, default: 0 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_freq;
uniform float u_speed;
uniform float u_angle;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec2 dir = vec2(cos(u_angle), sin(u_angle));
  vec2 n = vec2(-dir.y, dir.x);
  float w = sin(dot(uv, dir) * u_freq * 6.28318 + uTime * u_speed * 4.0);
  uv += n * w * u_amount;
  return sampleSrc(uv);
}
`,
};

export const chroma: EffectType = {
  id: "chroma",
  name: "Aberration",
  category: "distort",
  description: "RGB channel displacement",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 0.08, step: 0.0005, default: 0.008 },
    { id: "angle", label: "Angle", kind: "float", min: 0, max: 6.283, step: 0.01, default: 0 },
    { id: "radial", label: "Radial", kind: "float", min: 0, max: 1, step: 0.01, default: 0.4 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_angle;
uniform float u_radial;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec2 dir = vec2(cos(u_angle), sin(u_angle));
  vec2 fromC = uv - 0.5;
  vec2 off = mix(dir, normalize(fromC + 1e-5), u_radial) * u_amount;
  float r = sampleSrc(uv + off).r;
  float g = sampleSrc(uv).g;
  float b = sampleSrc(uv - off).b;
  return vec4(r, g, b, 1.0);
}
`,
};

export const displace: EffectType = {
  id: "displace",
  name: "Displace",
  category: "distort",
  description: "Noise / random pixel displacement",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 0.3, step: 0.001, default: 0.04 },
    { id: "scale", label: "Scale", kind: "float", min: 0.5, max: 30, step: 0.1, default: 5 },
    { id: "speed", label: "Speed", kind: "float", min: 0, max: 3, step: 0.01, default: 0.2 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_scale;
uniform float u_speed;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  float n1 = vnoise(uv * u_scale + uTime * u_speed);
  float n2 = vnoise(uv * u_scale + 17.0 - uTime * u_speed * 0.7);
  uv += (vec2(n1, n2) - 0.5) * u_amount * 2.0;
  return sampleSrc(uv);
}
`,
};

export const lens: EffectType = {
  id: "lens",
  name: "Lens",
  category: "distort",
  description: "Barrel / pincushion",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: -1, max: 1, step: 0.01, default: 0.25 },
    { id: "zoom", label: "Zoom", kind: "float", min: 0.5, max: 2, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_zoom;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec2 p = (uv - 0.5) / max(u_zoom, 0.05);
  float r2 = dot(p, p);
  p *= 1.0 + u_amount * r2;
  return sampleSrc(p + 0.5);
}
`,
};

export const smear: EffectType = {
  id: "smear",
  name: "Pixel Sort",
  category: "distort",
  description: "Luma-driven smear / approximate pixel sort",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.35 },
    { id: "threshold", label: "Threshold", kind: "float", min: 0, max: 1, step: 0.01, default: 0.35 },
    { id: "angle", label: "Angle", kind: "float", min: 0, max: 6.283, step: 0.01, default: 0 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_threshold;
uniform float u_angle;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec2 dir = vec2(cos(u_angle), sin(u_angle));
  vec3 acc = vec3(0.0);
  float wsum = 0.0;
  float steps = uQuality < 0.5 ? 3.0 : 5.0;
  for (int i = 0; i < 5; i++) {
    if (float(i) >= steps) break;
    float fi = float(i);
    vec2 p = uv + dir * (fi / max(steps, 1.0)) * u_amount * 0.35;
    vec3 s = sampleSrc(p).rgb;
    float l = luminance(s);
    float w = step(u_threshold, l) * (1.0 - fi / max(steps, 1.0));
    acc += s * w;
    wsum += w;
  }
  vec3 src = sampleSrc(uv).rgb;
  if (wsum < 0.001) return vec4(src, 1.0);
  return vec4(mix(src, acc / wsum, u_amount), 1.0);
}
`,
};

export const DISTORT_EFFECTS = [warp, chroma, displace, lens, smear];
