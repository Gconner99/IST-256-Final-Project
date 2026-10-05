import type { EffectType } from "../core/types";

export const halftone: EffectType = {
  id: "halftone",
  name: "Dot Screen",
  category: "texture",
  description: "Ben-Day / newsprint dots that turn the collage into a printed sheet",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.72 },
    { id: "scale", label: "Scale", kind: "float", min: 0.35, max: 2.4, step: 0.01, default: 1 },
    { id: "contrast", label: "Ink", kind: "float", min: 0, max: 1, step: 0.01, default: 0.42 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_scale;
uniform float u_contrast;
`,
  applyGlsl: `
vec2 _htRot(vec2 p, float a) {
  float s = sin(a);
  float c = cos(a);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}
float _htDot(vec2 uv, float ang, float luma, float cell) {
  vec2 g = _htRot((uv - 0.5) * uResolution.y / max(cell, 2.0), ang);
  float d = length(fract(g) - 0.5);
  float r = mix(0.08, 0.62, clamp(luma, 0.0, 1.0));
  return 1.0 - smoothstep(r, r + 0.08, d);
}
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  float l = luminance(src);
  float cell = mix(14.0, 5.5, clamp(u_scale, 0.35, 2.4) * 0.5);
  float k = _htDot(uv, 0.785398, pow(l, 0.85), cell);
  float m = _htDot(uv, 0.261799, src.r * 0.55 + src.b * 0.2, cell * 1.08);
  float y = _htDot(uv, 0.0, src.g * 0.4 + src.r * 0.35, cell * 0.96);
  vec3 paper = vec3(0.93, 0.9, 0.84);
  vec3 ink = mix(vec3(0.08, 0.07, 0.1), src * 0.55, 0.35 + u_contrast * 0.4);
  vec3 printc = paper;
  printc = mix(printc, ink, k * (0.55 + u_contrast * 0.4));
  printc = mix(printc, vec3(0.72, 0.12, 0.42), m * 0.38);
  printc = mix(printc, vec3(0.9, 0.72, 0.12), y * 0.28);
  printc *= 0.96 + 0.04 * hash21(floor(uv * uResolution / cell));
  vec3 outc = mix(src, printc, u_amount);
  return vec4(outc, 1.0);
}
`,
};

export const riso: EffectType = {
  id: "riso",
  name: "Riso",
  category: "texture",
  description: "Two-ink risograph: pulp, misregister, fluorescent layers",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.8 },
    { id: "shift", label: "Misregister", kind: "float", min: 0, max: 1, step: 0.01, default: 0.35 },
    { id: "pulp", label: "Pulp", kind: "float", min: 0, max: 1, step: 0.01, default: 0.4 },
    { id: "inkA", label: "Ink A", kind: "color", default: "#ff4ad2" },
    { id: "inkB", label: "Ink B", kind: "color", default: "#2ee0c0" },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_shift;
uniform float u_pulp;
uniform vec3 u_inkA;
uniform vec3 u_inkB;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec2 off = vec2(u_shift * 0.007, -u_shift * 0.0045);
  vec3 a = sampleSrc(uv + off).rgb;
  vec3 b = sampleSrc(uv - off).rgb;
  float la = luminance(a);
  float lb = luminance(b);
  float pulp = vnoise(uv * 38.0 + 4.0) * 0.55 + vnoise(uv * 110.0) * 0.45;
  pulp = mix(1.0, 0.82 + pulp * 0.28, u_pulp);
  vec3 paper = vec3(0.96, 0.93, 0.86) * pulp;
  float layerA = smoothstep(0.62, 0.28, la);
  float layerB = smoothstep(0.7, 0.32, lb);
  layerA *= 0.88 + 0.12 * hash21(uv * uResolution + vec2(2.0, uTime * 0.0));
  vec3 printc = paper;
  printc = mix(printc, mix(paper, u_inkA, 0.92), layerA);
  printc = mix(printc, mix(printc, u_inkB, 0.78), layerB * 0.85);
  printc = mix(printc, u_inkA * u_inkB * 1.4, layerA * layerB * 0.35);
  vec3 src = sampleSrc(uv).rgb;
  vec3 outc = mix(src, printc, u_amount);
  return vec4(outc, 1.0);
}
`,
};

export const hatch: EffectType = {
  id: "hatch",
  name: "Etching",
  category: "texture",
  description: "Copperplate crosshatch that densifies in the darks",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.7 },
    { id: "density", label: "Density", kind: "float", min: 0.2, max: 1.6, step: 0.01, default: 0.7 },
    { id: "thick", label: "Bite", kind: "float", min: 0, max: 1, step: 0.01, default: 0.45 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_density;
uniform float u_thick;
`,
  applyGlsl: `
float _hatchLine(vec2 uv, float ang, float freq, float thick) {
  float s = sin(ang);
  float c = cos(ang);
  float u = uv.x * c + uv.y * s;
  float wiggle = (vnoise(uv * 18.0) - 0.5) * 0.012;
  float g = abs(fract(u * freq + wiggle) - 0.5);
  return 1.0 - smoothstep(0.0, thick, g);
}
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  float l = luminance(src);
  float dark = 1.0 - smoothstep(0.12, 0.88, l);
  float freq = mix(22.0, 54.0, clamp(u_density, 0.2, 1.6) / 1.6);
  float thick = mix(0.09, 0.028, u_thick);
  float h1 = _hatchLine(uv, 0.7, freq, thick);
  float h2 = _hatchLine(uv, -0.55, freq * 1.08, thick * 0.9);
  float h3 = _hatchLine(uv, 1.35, freq * 0.72, thick * 1.15);
  float ink = h1 * smoothstep(0.15, 0.55, dark);
  ink = max(ink, h2 * smoothstep(0.4, 0.82, dark));
  ink = max(ink, h3 * smoothstep(0.7, 0.95, dark));
  vec3 plate = mix(vec3(0.93, 0.9, 0.84), src * 0.35, 0.18);
  plate = mix(plate, vec3(0.12, 0.1, 0.14), clamp(ink, 0.0, 1.0));
  vec3 outc = mix(src, plate, u_amount);
  return vec4(outc, 1.0);
}
`,
};

export const holo: EffectType = {
  id: "holo",
  name: "Holo Foil",
  category: "texture",
  description: "Iridescent foil: spectral streaks and glitter on the brights",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.58 },
    { id: "shift", label: "Shift", kind: "float", min: 0, max: 1, step: 0.01, default: 0.55 },
    { id: "glitter", label: "Glitter", kind: "float", min: 0, max: 1, step: 0.01, default: 0.4 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_shift;
uniform float u_glitter;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  float l = luminance(src);
  vec2 p = uv - 0.5;
  float ang = atan(p.y, p.x);
  float foil = sin(uv.x * 42.0 + uv.y * 18.0 + uTime * 0.35 + l * 6.0);
  foil = foil * 0.5 + 0.5;
  float hue = fract(0.08 + foil * 0.7 + ang * 0.12 + u_shift * 0.45 + uTime * 0.03);
  vec3 rainbow = hsv2rgb(vec3(hue, 0.72, 1.0));
  float mask = smoothstep(0.32, 0.78, l) * (0.55 + 0.45 * foil);
  mask = pow(mask, 0.85);
  float spark = step(0.97 - u_glitter * 0.04, hash21(floor(uv * uResolution * 0.55) + floor(uTime * 9.0)));
  vec3 gild = src + rainbow * mask * (0.55 + u_audio * 0.2) + rainbow * spark * u_glitter * 0.85;
  gild = mix(gild, rainbow, mask * 0.18);
  vec3 outc = mix(src, gild, u_amount);
  return vec4(outc, 1.0);
}
`,
};

export const crackle: EffectType = {
  id: "crackle",
  name: "Crackle",
  category: "texture",
  description: "Glaze crazing: fine cracks and a slight ceramic warp",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.62 },
    { id: "scale", label: "Scale", kind: "float", min: 0.4, max: 2.2, step: 0.01, default: 1.1 },
    { id: "warp", label: "Warp", kind: "float", min: 0, max: 1, step: 0.01, default: 0.28 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_scale;
uniform float u_warp;
`,
  applyGlsl: `
vec2 _crackleF(vec2 p) {
  vec2 n = floor(p);
  vec2 f = fract(p);
  float d1 = 8.0;
  float d2 = 8.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 g = vec2(float(x), float(y));
      vec2 o = vec2(hash21(n + g), hash21(n + g + 17.2));
      float d = length(g + o - f);
      if (d < d1) { d2 = d1; d1 = d; }
      else d2 = min(d2, d);
    }
  }
  return vec2(d1, d2);
}
vec4 apply(vec2 uv) {
  vec2 cell = uv * mix(7.0, 18.0, clamp(u_scale, 0.4, 2.2) / 2.2);
  vec2 F = _crackleF(cell);
  float ridge = 1.0 - smoothstep(0.0, 0.06, abs(F.y - F.x));
  vec2 n = vec2(vnoise(uv * 9.0), vnoise(uv * 9.0 + 4.0)) - 0.5;
  vec3 src = sampleSrc(uv + n * u_warp * 0.012).rgb;
  vec3 glaze = src * (0.92 + 0.08 * F.x);
  glaze = mix(glaze, glaze * vec3(0.22, 0.16, 0.14), ridge * 0.82);
  glaze += ridge * 0.04;
  vec3 outc = mix(src, glaze, u_amount);
  return vec4(outc, 1.0);
}
`,
};

export const nap: EffectType = {
  id: "nap",
  name: "Velvet Nap",
  category: "texture",
  description: "Velvet nap: tiny fibers and a directional sheen",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.6 },
    { id: "nap", label: "Nap", kind: "float", min: 0, max: 1, step: 0.01, default: 0.55 },
    { id: "sheen", label: "Sheen", kind: "float", min: 0, max: 1, step: 0.01, default: 0.48 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_nap;
uniform float u_sheen;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec2 dir = normalize(vec2(0.82, 0.57));
  float along = dot(uv, dir);
  float fiber = vnoise(vec2(along * 90.0, (uv.x * dir.y - uv.y * dir.x) * 220.0));
  fiber = mix(fiber, vnoise(uv * 70.0 + vec2(along * 12.0, 0.0)), 0.45);
  float nap = (fiber - 0.5) * u_nap;
  float view = pow(clamp(0.55 + along * 0.7, 0.0, 1.0), 1.6);
  vec3 pile = src * (0.78 + nap * 0.35);
  pile = mix(pile, pile * vec3(0.55, 0.22, 0.4), 0.08);
  pile += src * view * u_sheen * 0.55;
  pile += vec3(1.0, 0.86, 0.94) * pow(view, 4.0) * u_sheen * 0.22;
  vec3 outc = mix(src, pile, u_amount);
  return vec4(outc, 1.0);
}
`,
};

export const TEXTURE_EFFECTS = [halftone, riso, hatch, holo, crackle, nap];
