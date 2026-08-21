import type { EffectType } from "../core/types";

export const grade: EffectType = {
  id: "grade",
  name: "Grade",
  category: "color",
  description: "Brightness, contrast, exposure, saturation, hue, gamma",
  params: [
    { id: "brightness", label: "Brightness", kind: "float", min: -1, max: 1, step: 0.01, default: 0 },
    { id: "contrast", label: "Contrast", kind: "float", min: -1, max: 1, step: 0.01, default: 0 },
    { id: "exposure", label: "Exposure", kind: "float", min: -2, max: 2, step: 0.01, default: 0 },
    { id: "saturation", label: "Saturation", kind: "float", min: -1, max: 1, step: 0.01, default: 0 },
    { id: "hue", label: "Hue", kind: "float", min: -1, max: 1, step: 0.01, default: 0 },
    { id: "gamma", label: "Gamma", kind: "float", min: 0.2, max: 3, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_brightness;
uniform float u_contrast;
uniform float u_exposure;
uniform float u_saturation;
uniform float u_hue;
uniform float u_gamma;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  c *= exp2(u_exposure);
  c += u_brightness;
  c = (c - 0.5) * (1.0 + u_contrast) + 0.5;
  vec3 hsv = rgb2hsv(max(c, 0.0));
  hsv.x = fract(hsv.x + u_hue * 0.5);
  hsv.y = clamp(hsv.y * (1.0 + u_saturation), 0.0, 1.5);
  c = hsv2rgb(hsv);
  c = pow(max(c, 0.0), vec3(1.0 / max(u_gamma, 0.04)));
  return vec4(c, 1.0);
}
`,
};

export const posterize: EffectType = {
  id: "posterize",
  name: "Posterize",
  category: "color",
  description: "Color quantization / poster print steps",
  params: [
    { id: "levels", label: "Levels", kind: "int", min: 2, max: 16, step: 1, default: 5 },
    { id: "dither", label: "Dither", kind: "float", min: 0, max: 1, step: 0.01, default: 0.15 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_levels;
uniform float u_dither;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  float n = (hash21(uv * uResolution) - 0.5) * u_dither * 0.15;
  float lv = max(u_levels, 2.0);
  c = floor(c * lv + n) / lv;
  return vec4(c, 1.0);
}
`,
};

export const threshold: EffectType = {
  id: "threshold",
  name: "Threshold",
  category: "color",
  description: "Hard luma cut / xerox",
  params: [
    { id: "cut", label: "Cut", kind: "float", min: 0, max: 1, step: 0.01, default: 0.45 },
    { id: "soft", label: "Soft", kind: "float", min: 0, max: 0.4, step: 0.01, default: 0.04 },
    { id: "invert", label: "Invert", kind: "bool", default: false },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_cut;
uniform float u_soft;
uniform float u_invert;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  float l = luminance(c);
  float t = smoothstep(u_cut - u_soft, u_cut + u_soft, l);
  if (u_invert > 0.5) t = 1.0 - t;
  return vec4(vec3(t), 1.0);
}
`,
};

export const duotone: EffectType = {
  id: "duotone",
  name: "Duotone",
  category: "color",
  description: "Map luma onto two inks",
  params: [
    { id: "shadow", label: "Shadow", kind: "color", default: "#1a1028" },
    { id: "highlight", label: "Highlight", kind: "color", default: "#e8ff6a" },
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform vec3 u_shadow;
uniform vec3 u_highlight;
uniform float u_amount;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  float l = luminance(c);
  vec3 d = mix(u_shadow, u_highlight, l);
  return vec4(mix(c, d, u_amount), 1.0);
}
`,
};

export const solarize: EffectType = {
  id: "solarize",
  name: "Solarize",
  category: "color",
  description: "Sabattier / invert past a threshold",
  params: [
    { id: "cut", label: "Cut", kind: "float", min: 0, max: 1, step: 0.01, default: 0.5 },
    { id: "invert", label: "Full invert", kind: "bool", default: false },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_cut;
uniform float u_invert;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  if (u_invert > 0.5) return vec4(1.0 - c, 1.0);
  vec3 s = mix(c, 1.0 - c, step(u_cut, luminance(c)));
  return vec4(s, 1.0);
}
`,
};

export const channels: EffectType = {
  id: "channels",
  name: "Channels",
  category: "color",
  description: "RGB gain and grayscale",
  params: [
    { id: "r", label: "Red", kind: "float", min: 0, max: 2, step: 0.01, default: 1 },
    { id: "g", label: "Green", kind: "float", min: 0, max: 2, step: 0.01, default: 1 },
    { id: "b", label: "Blue", kind: "float", min: 0, max: 2, step: 0.01, default: 1 },
    { id: "gray", label: "Gray", kind: "float", min: 0, max: 1, step: 0.01, default: 0 },
    { id: "tint", label: "Tint", kind: "color", default: "#ff66aa" },
    { id: "tintAmt", label: "Tint amt", kind: "float", min: 0, max: 1, step: 0.01, default: 0 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_r;
uniform float u_g;
uniform float u_b;
uniform float u_gray;
uniform vec3 u_tint;
uniform float u_tintAmt;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb * vec3(u_r, u_g, u_b);
  float l = luminance(c);
  c = mix(c, vec3(l), u_gray);
  c = mix(c, mix(c, u_tint, l * 0.8 + 0.2), u_tintAmt);
  return vec4(c, 1.0);
}
`,
};

export const COLOR_EFFECTS = [grade, posterize, threshold, duotone, solarize, channels];
