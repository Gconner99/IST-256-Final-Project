import type { EffectType } from "../core/types";

/** Darken the edges so the occupancy field sits in a lamp. Stamps stay planted. */
export const vignette: EffectType = {
  id: "vignette",
  name: "Iris",
  category: "analog",
  description: "Darken the edges / focus the sheet",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.55 },
    { id: "inner", label: "Inner", kind: "float", min: 0, max: 0.8, step: 0.01, default: 0.28 },
    { id: "soft", label: "Soft", kind: "float", min: 0.1, max: 1.2, step: 0.01, default: 0.55 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_inner;
uniform float u_soft;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  float r = length(uv - 0.5) * 1.41421356;
  float v = smoothstep(u_inner, u_inner + max(u_soft, 0.05), r);
  return vec4(src * (1.0 - u_amount * v), 1.0);
}
`,
};

/** Slow exposure breathe locked to the occupancy loop. */
export const lamp: EffectType = {
  id: "lamp",
  name: "Lamp",
  category: "analog",
  description: "Slow exposure pulse — the paper breathes",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.35 },
    { id: "speed", label: "Speed", kind: "float", min: 0.2, max: 2.2, step: 0.01, default: 1.05 },
    { id: "warmth", label: "Warmth", kind: "float", min: 0, max: 1, step: 0.01, default: 0.25 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_speed;
uniform float u_warmth;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  float wave = 0.5 + 0.5 * sin(uTime * u_speed);
  float lift = (wave - 0.5) * u_amount * 0.55;
  src *= 1.0 + lift;
  src += vec3(0.12, 0.07, 0.02) * wave * u_amount * u_warmth;
  return vec4(src, 1.0);
}
`,
};

/** Slow hue drift. Geometry stays; ink color breathes. */
export const cycle: EffectType = {
  id: "cycle",
  name: "Hue cycle",
  category: "color",
  description: "Slow hue breathe — ink color drifts, stamps stay",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.22 },
    { id: "speed", label: "Speed", kind: "float", min: 0.2, max: 2.2, step: 0.01, default: 1.05 },
    { id: "shift", label: "Shift", kind: "float", min: 0, max: 1, step: 0.01, default: 0 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_speed;
uniform float u_shift;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  vec3 hsv = rgb2hsv(max(c, 0.0));
  hsv.x = fract(hsv.x + u_shift * 0.5 + u_amount * 0.18 * sin(uTime * u_speed));
  return vec4(hsv2rgb(hsv), 1.0);
}
`,
};

/** Screen-print misregister. Tiny offset duplicate, stamps still readable. */
export const misprint: EffectType = {
  id: "misprint",
  name: "Misprint",
  category: "analog",
  description: "Offset double print / slight misregister",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.38 },
    { id: "offset", label: "Offset", kind: "float", min: 0, max: 0.04, step: 0.0005, default: 0.008 },
    { id: "angle", label: "Angle", kind: "float", min: 0, max: 6.283, step: 0.01, default: 0.2 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_offset;
uniform float u_angle;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec2 dir = vec2(cos(u_angle), sin(u_angle)) * u_offset;
  vec3 a = sampleSrc(uv).rgb;
  vec3 b = sampleSrc(uv + dir).rgb;
  vec3 plate = max(a, b * 0.88 + a * 0.12);
  return vec4(mix(a, plate, u_amount), 1.0);
}
`,
};

/** Wet-ink edge bleed. Softens stamp rims without moving them. */
export const bleed: EffectType = {
  id: "bleed",
  name: "Bleed",
  category: "analog",
  description: "Wet ink / edge soak into the paper",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.4 },
    { id: "size", label: "Size", kind: "float", min: 0.6, max: 4, step: 0.05, default: 1.8 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_size;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec3 acc = vec3(0.0);
  float wsum = 0.0;
  float taps = mix(2.0, 4.0, uQuality);
  for (float y = -3.0; y <= 3.0; y++) {
    for (float x = -3.0; x <= 3.0; x++) {
      if (abs(x) + abs(y) > taps) continue;
      vec2 o = vec2(x, y) * uTexel * u_size * 2.4;
      float w = 1.0 / (1.0 + length(vec2(x, y)));
      acc += sampleSrc(uv + o).rgb * w;
      wsum += w;
    }
  }
  vec3 blur = acc / max(wsum, 1e-5);
  float edge = abs(luminance(src) - luminance(blur));
  vec3 outc = mix(src, blur, u_amount * (0.28 + edge * 1.4));
  return vec4(outc, 1.0);
}
`,
};

/** Sticker emboss so charges lift off the paper. */
export const relief: EffectType = {
  id: "relief",
  name: "Relief",
  category: "analog",
  description: "Emboss / sticker lift off the paper",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.4 },
    { id: "angle", label: "Angle", kind: "float", min: 0, max: 6.283, step: 0.01, default: 0.7 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_angle;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec2 dir = vec2(cos(u_angle), sin(u_angle)) * uTexel * 2.2;
  float l0 = luminance(src);
  float l1 = luminance(sampleSrc(uv + dir).rgb);
  float d = (l0 - l1) * u_amount * 1.35;
  return vec4(clamp(src + vec3(d), 0.0, 1.0), 1.0);
}
`,
};

/** Soft atmospheric lift. Occupancy stays sharp. */
export const haze: EffectType = {
  id: "haze",
  name: "Haze",
  category: "color",
  description: "Lift shadows into a tinted fog",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.32 },
    { id: "lift", label: "Lift", kind: "float", min: 0, max: 0.4, step: 0.01, default: 0.08 },
    { id: "tint", label: "Tint", kind: "color", default: "#c8b4a0" },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_lift;
uniform vec3 u_tint;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  float l = luminance(src);
  vec3 fog = mix(src, u_tint, (1.0 - l) * 0.55) + u_lift;
  return vec4(mix(src, fog, u_amount), 1.0);
}
`,
};

export const PAPER_EFFECTS: EffectType[] = [vignette, lamp, cycle, misprint, bleed, relief, haze];
