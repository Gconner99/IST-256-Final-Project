import type { EffectType } from "../core/types";

export const analog: EffectType = {
  id: "analog",
  name: "Cathode",
  category: "analog",
  description: "Scanlines, tracking, VHS jitter, flicker",
  params: [
    { id: "mixScan", label: "Scanlines", kind: "float", min: 0, max: 1, step: 0.01, default: 0.4 },
    { id: "tracking", label: "Tracking", kind: "float", min: 0, max: 1, step: 0.01, default: 0.15 },
    { id: "noise", label: "Tape noise", kind: "float", min: 0, max: 1, step: 0.01, default: 0.12 },
    { id: "flicker", label: "Flicker", kind: "float", min: 0, max: 1, step: 0.01, default: 0.08 },
    { id: "weave", label: "Gate weave", kind: "float", min: 0, max: 1, step: 0.01, default: 0.1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_mixScan;
uniform float u_tracking;
uniform float u_noise;
uniform float u_flicker;
uniform float u_weave;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec2 p = uv;
  p.x += sin(uv.y * 40.0 + uTime * 8.0) * u_weave * (0.01 + u_bass * 0.008);
  float band = step(0.97 - u_bass * 0.08, hash21(vec2(floor(uTime * 9.0), 3.2)));
  p.x += band * (hash21(vec2(uv.y * 80.0, uTime)) - 0.5) * u_tracking * 0.12;
  vec3 c = sampleSrc(p).rgb;
  float scan = sin(uv.y * uResolution.y * 3.14159);
  c *= 1.0 - u_mixScan * 0.35 * (0.5 + 0.5 * scan);
  float n = hash21(uv * uResolution + uTime * 12.0);
  c += (n - 0.5) * u_noise * 0.35;
  c *= 1.0 + (hash21(vec2(uTime, 9.1)) - 0.5) * u_flicker * (0.4 + u_audio * 0.35);
  return vec4(c, 1.0);
}
`,
};

export const grain: EffectType = {
  id: "grain",
  name: "Emulsion",
  category: "analog",
  description: "Film grain, dust, scratches, light leaks",
  params: [
    { id: "grain", label: "Grain", kind: "float", min: 0, max: 1, step: 0.01, default: 0.25 },
    { id: "dust", label: "Dust", kind: "float", min: 0, max: 1, step: 0.01, default: 0.1 },
    { id: "scratches", label: "Scratches", kind: "float", min: 0, max: 1, step: 0.01, default: 0.08 },
    { id: "leak", label: "Light leak", kind: "float", min: 0, max: 1, step: 0.01, default: 0.15 },
    { id: "leakColor", label: "Leak color", kind: "color", default: "#ff6a2a" },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_grain;
uniform float u_dust;
uniform float u_scratches;
uniform float u_leak;
uniform vec3 u_leakColor;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  float g = hash21(uv * uResolution + uTime * 60.0);
  c += (g - 0.5) * u_grain * 0.35;
  float d = step(0.997 - u_dust * 0.01, hash21(floor(uv * uResolution * 0.35) + floor(uTime * 3.0)));
  c += d * 0.7;
  float sc = hash21(vec2(uv.x * 0.15, floor(uTime * 2.0)));
  float line = smoothstep(0.002, 0.0, abs(uv.x - sc));
  c += line * u_scratches * 0.6;
  float leak = pow(max(uv.x * 0.4 + uv.y * 0.2, 0.0), 2.2) + pow(max(1.0 - uv.x, 0.0), 4.0) * 0.5;
  c = mix(c, c + u_leakColor * leak, u_leak);
  return vec4(c, 1.0);
}
`,
};

export const bloom: EffectType = {
  id: "bloom",
  name: "Bloom",
  category: "analog",
  description: "Glow / halation around brights",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.45 },
    { id: "threshold", label: "Threshold", kind: "float", min: 0, max: 1, step: 0.01, default: 0.55 },
    { id: "size", label: "Size", kind: "float", min: 0.5, max: 8, step: 0.1, default: 2.5 },
    { id: "halation", label: "Halation", kind: "float", min: 0, max: 1, step: 0.01, default: 0.25 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
uniform float u_threshold;
uniform float u_size;
uniform float u_halation;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  float s = u_size;
  vec3 acc = src;
  acc += sampleSrc(uv + vec2(uTexel.x * s, 0.0)).rgb;
  acc += sampleSrc(uv - vec2(uTexel.x * s, 0.0)).rgb;
  acc += sampleSrc(uv + vec2(0.0, uTexel.y * s)).rgb;
  acc += sampleSrc(uv - vec2(0.0, uTexel.y * s)).rgb;
  vec3 glow = acc / 5.0;
  float l = luminance(glow);
  glow *= step(u_threshold, l);
  vec3 halo = vec3(glow.r, glow.g * 0.6, glow.b * 0.45) * u_halation;
  vec3 outc = src + glow * u_amount * (1.0 + u_audio * 0.35) + halo;
  return vec4(outc, 1.0);
}
`,
};

export const ANALOG_EFFECTS = [analog, grain, bloom];
