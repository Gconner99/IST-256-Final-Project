import { CRITTER_GLSL } from "./critters.glsl";

export const VERT_SRC = `#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`;

export const COMMON_GLSL = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;

uniform sampler2D uTex;
uniform sampler2D uFeedback;
uniform sampler2D uHistory;
uniform sampler2D uMask;
uniform vec2 uResolution;
uniform float uTime;
uniform float uFrame;
uniform float u_mix;
uniform float uQuality;
uniform float u_audio;
uniform float u_bass;
uniform vec2 uTexel;

uniform int u_maskType;
uniform int u_maskInvert;
uniform float u_maskSoftness;
uniform vec4 u_maskRect;
uniform vec2 u_maskCenter;
uniform float u_maskRadius;
uniform float u_maskGradientAngle;
uniform float u_maskNoiseScale;

uniform vec2 u_translate;
uniform float u_scale;
uniform float u_rotation;

float luminance(vec3 c) {
  return dot(c, vec3(0.2126, 0.7152, 0.0722));
}

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec2 rotate2(vec2 p, float a) {
  float s = sin(a);
  float c = cos(a);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}

vec2 toUv(vec2 uv) {
  vec2 p = uv - 0.5;
  p = rotate2(p, u_rotation);
  p /= max(u_scale, 0.001);
  p -= u_translate;
  return p + 0.5;
}

float computeMask(vec2 uv) {
  float m = 1.0;
  if (u_maskType == 1) {
    vec2 d = abs(uv - (u_maskRect.xy + u_maskRect.zw * 0.5)) - u_maskRect.zw * 0.5;
    float sd = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
    m = 1.0 - smoothstep(0.0, max(u_maskSoftness, 0.0001), sd);
  } else if (u_maskType == 2) {
    float d = length(uv - u_maskCenter) - u_maskRadius;
    m = 1.0 - smoothstep(0.0, max(u_maskSoftness, 0.0001), d);
  } else if (u_maskType == 3) {
    vec2 dir = vec2(cos(u_maskGradientAngle), sin(u_maskGradientAngle));
    float g = dot(uv - 0.5, dir) + 0.5;
    m = smoothstep(0.0, 1.0, mix(g, 1.0 - g, step(0.5, u_maskSoftness)));
  } else if (u_maskType == 4) {
    m = vnoise(uv * u_maskNoiseScale + uTime * 0.15);
    m = smoothstep(0.3, 0.7 + u_maskSoftness, m);
  } else if (u_maskType == 5) {
    m = texture(uMask, uv).r;
  }
  if (u_maskInvert == 1) m = 1.0 - m;
  return clamp(m, 0.0, 1.0);
}

vec4 sampleSrc(vec2 uv) {
  return texture(uTex, clamp(uv, 0.0, 1.0));
}
`;

export const FOOTER_GLSL = `
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`;

export const COMPOSITE_GLSL = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uBase;
uniform sampler2D uLayer;
uniform float uOpacity;
uniform int uBlend;
uniform vec2 uResolution;

vec3 overlay(vec3 b, vec3 s) {
  return mix(2.0 * b * s, 1.0 - 2.0 * (1.0 - b) * (1.0 - s), step(0.5, b));
}

void main() {
  vec4 base = texture(uBase, vUv);
  vec4 over = texture(uLayer, vUv);
  float a = over.a * uOpacity;
  vec3 s = over.rgb;
  vec3 b = base.rgb;
  vec3 c = s;
  if (uBlend == 1) c = b + s;
  else if (uBlend == 2) c = 1.0 - (1.0 - b) * (1.0 - s);
  else if (uBlend == 3) c = b * s;
  else if (uBlend == 4) c = overlay(b, s);
  else if (uBlend == 5) c = abs(b - s);
  else if (uBlend == 6) c = b + s - 2.0 * b * s;
  else if (uBlend == 7) c = max(b, s);
  else if (uBlend == 8) c = min(b, s);
  else c = s;
  fragColor = vec4(mix(b, c, a), 1.0);
}
`;

export const BLIT_GLSL = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform float uVignette;
void main() {
  vec4 c = texture(uTex, vUv);
  float d = length(vUv - 0.5);
  float vig = 1.0 - smoothstep(0.55, 1.05, d) * uVignette;
  fragColor = vec4(c.rgb * vig, 1.0);
}
`;

export const FEEDBACK_GLSL = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform sampler2D uFeedback;
uniform float uAmount;
uniform float uOpacity;
uniform float uScale;
uniform float uRotation;
uniform float uDistortion;
uniform float uTime;

vec2 rot(vec2 p, float a) {
  float s = sin(a); float c = cos(a);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}

void main() {
  vec4 src = texture(uTex, vUv);
  vec2 p = vUv - 0.5;
  p = rot(p, uRotation);
  p /= max(uScale, 0.001);
  p += 0.5;
  p += vec2(
    sin(vUv.y * 18.0 + uTime) * uDistortion * 0.04,
    cos(vUv.x * 14.0 - uTime * 0.7) * uDistortion * 0.04
  );
  vec4 fb = texture(uFeedback, clamp(p, 0.0, 1.0));
  vec3 mixed = mix(src.rgb, fb.rgb, uAmount * uOpacity);
  fragColor = vec4(mixed, 1.0);
}
`;

export const GENERATOR_GLSL = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform int uMode;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScale;
uniform float uSeed;
uniform float u_audio;
uniform float u_bass;
${CRITTER_GLSL}
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    s += a * vnoise(p);
    p = p * 2.07 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return s;
}
float starLayer(vec2 uv, float dens, float size, float t) {
  vec2 gv = fract(uv) - 0.5;
  vec2 id = floor(uv);
  float n = hash21(id + uSeed);
  float tw = 0.82 + 0.18 * sin(t * (0.28 + n * 0.7) + n * 18.0);
  vec2 jitter = vec2(hash21(id + 2.1), hash21(id + 7.7)) - 0.5;
  vec2 q = gv + jitter * 0.32;
  float d = length(q);
  float live = step(1.0 - dens, n);
  float core = smoothstep(size * tw, 0.0, d) * live * tw;
  float halo = smoothstep(size * 3.6 * tw, 0.0, d) * step(1.0 - dens * 0.88, n) * 0.2 * tw;
  float spark = max(0.0, 1.0 - abs(q.x) * 88.0) * max(0.0, 1.0 - abs(q.y) * 16.0);
  spark *= step(1.0 - dens * 0.28, n) * 0.28 * tw;
  return core + halo + spark;
}
vec3 genStars(vec2 uv) {
  float sky = smoothstep(-0.08, 1.08, uv.y);
  vec3 zenith = mix(uColorA, vec3(0.025, 0.035, 0.07), 0.42);
  vec3 horizon = mix(uColorA, mix(uColorB, vec3(0.46, 0.3, 0.22), 0.32), 0.26);
  vec3 col = mix(horizon, zenith, sky);
  float band = exp(-pow((uv.y - 0.4) * 3.1, 2.0)) * fbm(uv * vec2(2.05, 0.62) + uSeed * 0.02);
  col = mix(col, mix(uColorB, vec3(0.58, 0.52, 0.76), 0.38) * 0.2, band * 0.62);
  float neb = fbm((uv - 0.5) * vec2(1.55, 1.02) * 1.12 + uTime * 0.0035 + uSeed * 0.01);
  col = mix(col, mix(uColorA, uColorB, 0.4) * 0.34, smoothstep(0.48, 0.86, neb) * 0.3);
  float sc = max(uScale, 1.0);
  col += vec3(0.76, 0.83, 0.97) * starLayer(uv * 26.0 * sc + uSeed, 0.1, 0.0075, uTime + u_audio * 0.3);
  col += vec3(0.93, 0.9, 0.86) * starLayer(uv * 11.0 * sc - uSeed * 0.2, 0.038, 0.015, uTime * 0.55 + u_bass * 0.2) * 0.72;
  col += vec3(1.0, 0.93, 0.8) * starLayer(uv * 5.1 * sc + vec2(uSeed * 0.13, -uSeed * 0.07), 0.015, 0.026, uTime * 0.32) * 0.48;
  float vig = smoothstep(1.22, 0.16, length((uv - 0.5) * vec2(1.1, 1.0)));
  return col * (0.9 + 0.1 * vig);
}
vec3 genMarsh(vec2 uv) {
  float y = clamp(uv.y, 0.0, 1.0);
  vec3 dusk = mix(mix(uColorB, vec3(0.74, 0.44, 0.22), 0.42), mix(uColorA, vec3(0.07, 0.065, 0.09), 0.45), pow(y, 0.7));
  float haze = fbm(vec2(uv.x * 1.02 + uTime * (0.008 + u_audio * 0.012), y * 1.7));
  vec3 col = mix(dusk, mix(uColorB, vec3(0.52, 0.3, 0.16), 0.28), smoothstep(0.24, 0.72, haze) * (1.0 - y) * 0.34);
  float hz = exp(-pow((y - 0.24) * 5.1, 2.0));
  col += mix(uColorB, vec3(1.0, 0.64, 0.3), 0.38) * hz * 0.18;
  vec2 lp = vec2(0.2 + 0.6 * hash21(vec2(uSeed, 2.2)), 0.21);
  col += vec3(1.0, 0.66, 0.3) * exp(-length((uv - lp) * vec2(1.55, 2.35)) * 6.6) * (0.14 + u_bass * 0.16);
  float reedX = uv.x * 18.0 + uSeed * 0.12;
  float reedId = floor(reedX);
  float reedF = fract(reedX) - 0.5;
  float plant = step(0.34, hash21(vec2(reedId, 9.3)));
  float h = 0.07 + 0.18 * hash21(vec2(reedId, uSeed));
  float sway = 0.02 * sin(uTime * 0.48 + reedId * 0.65);
  float reed = 1.0 - smoothstep(0.005, 0.018, abs(reedF - sway * y));
  reed *= 1.0 - smoothstep(h, h + 0.08, y);
  reed *= step(y, 0.36) * plant * (0.5 + 0.5 * hash21(vec2(reedId, 4.1)));
  col = mix(col, mix(uColorA, vec3(0.05, 0.07, 0.045), 0.55) * 0.32, reed * 0.68);
  float ground = 1.0 - smoothstep(0.0, 0.22, y);
  vec3 refl = mix(dusk, mix(uColorB, vec3(0.68, 0.4, 0.2), 0.28), 0.32);
  float rip = 0.5 + 0.5 * sin(uv.x * 22.0 + uTime * 0.62 + fbm(uv * 5.2) * 3.2);
  vec3 water = mix(uColorA * 0.18, refl * 0.4, 0.52 + 0.16 * rip);
  col = mix(col, water, ground * 0.92);
  return col;
}
vec3 genOil(vec2 uv) {
  vec2 p = uv * max(uScale * 0.46, 1.08);
  p += 0.38 * vec2(fbm(p + uTime * (0.007 + u_audio * 0.01)), fbm(p + vec2(3.1, 1.4) - uTime * (0.005 + u_audio * 0.008)));
  float n = fbm(p * 1.02);
  float n2 = fbm(p * 2.05 + 8.0);
  float vein = smoothstep(0.4, 0.54, n) - smoothstep(0.54, 0.74, n);
  vec3 sheen = mix(uColorB, vec3(uColorB.g, uColorB.b, uColorB.r), n2);
  sheen = mix(sheen, vec3(uColorB.b, uColorB.r, uColorB.g) * 0.82 + vec3(0.07, 0.04, 0.09), n * 0.32);
  vec3 col = mix(uColorA, sheen, smoothstep(0.22, 0.78, n));
  col = mix(col, sheen * 0.82 + vec3(0.1, 0.07, 0.035), vein * 0.4);
  col += sheen * pow(max(n2 - 0.56, 0.0), 2.15) * 0.2;
  return col * (0.94 + 0.06 * fbm(uv * 2.2));
}
vec3 genPaper(vec2 uv) {
  vec3 cream = mix(vec3(0.935, 0.885, 0.785), uColorA, 0.07);
  float laid = 0.5 + 0.5 * sin(uv.y * 68.0 + fbm(uv * 2.8) * 1.25);
  cream *= 0.975 + 0.025 * laid;
  float fiber = fbm(uv * vec2(46.0, 16.0) * max(uScale, 1.0) + uSeed);
  cream *= 0.965 + 0.07 * fiber;
  float stain = smoothstep(0.72, 0.95, fbm(uv * 1.65 + uSeed * 0.16));
  cream = mix(cream, mix(uColorB, vec3(0.48, 0.34, 0.23), 0.48), stain * 0.1);
  float fleck = step(0.993, hash21(floor(uv * 86.0) + uSeed));
  cream = mix(cream, mix(uColorB, vec3(0.4, 0.28, 0.18), 0.4), fleck * 0.28);
  float deckle = pow(max(abs(uv.x - 0.5) * 1.96, abs(uv.y - 0.5) * 1.98), 11.0);
  cream = mix(cream, cream * 0.84, deckle * 0.3);
  float edge = pow(length(uv - 0.5) * 1.02, 2.7) * 0.06;
  return clamp(cream - edge, 0.0, 1.0);
}
vec3 genCave(vec2 uv) {
  vec2 p = uv * vec2(1.5, 1.24) * max(uScale * 0.25, 0.72);
  float rock = fbm(p + uSeed * 0.04);
  float fill = fbm(p * 2.2 + rock * 1.35);
  vec3 col = mix(mix(uColorA, vec3(0.048, 0.042, 0.052), 0.42), vec3(0.038, 0.036, 0.042), rock);
  col = mix(col, uColorB * 0.085, fill * 0.2);
  col += uColorB * pow(max(fill - 0.6, 0.0), 2.4) * 0.16;
  float glow = exp(-pow((uv.y - 0.07) * 3.05, 2.0)) * (0.2 + 0.12 * rock);
  col += mix(uColorB, vec3(0.34, 0.42, 0.68), 0.32) * glow * (0.52 + u_bass * 0.16);
  float rim = pow(max(uv.x, 1.0 - uv.x), 3.9) * (0.2 + 0.18 * rock);
  col += uColorB * rim * 0.12;
  float sx = uv.x * 10.0 + uSeed * 0.18;
  float sid = floor(sx);
  float sf = fract(sx) - 0.5;
  float fromTop = 1.0 - uv.y;
  float sh = 0.11 + 0.3 * pow(hash21(vec2(sid, uSeed + 3.0)), 1.5);
  float stal = 1.0 - smoothstep(0.028, 0.12, abs(sf) + fromTop * 0.11);
  stal *= 1.0 - smoothstep(sh, sh + 0.11, fromTop);
  stal *= step(0.22, hash21(vec2(sid, 6.4)));
  col = mix(col, mix(uColorA, vec3(0.028, 0.028, 0.032), 0.5) * 0.26, stal * 0.8);
  float vig = smoothstep(1.08, 0.18, length((uv - 0.5) * vec2(1.16, 1.0)));
  return col * (0.74 + 0.26 * vig);
}

void main() {
  vec2 uv = vUv;
  vec3 col = vec3(0.0);
  if (uMode == 0) {
    vec2 p = uv + 0.12 * (fbm(uv * 1.8 + uTime * 0.04) - 0.5);
    float n = sin(p.x * uScale * 0.5 + uTime * 0.12) + sin(p.y * uScale * 0.36 - uTime * 0.08);
    n += sin((p.x * 0.65 + p.y) * uScale * 0.22 + uTime * 0.05);
    n = n / 3.0 * 0.5 + 0.5;
    n = mix(n, fbm(p * 1.4 + uTime * 0.03), 0.28);
    col = mix(uColorA, uColorB, smoothstep(0.18, 0.82, n));
    col *= 0.88 + 0.12 * smoothstep(1.08, 0.2, length(uv - 0.5));
  } else if (uMode == 1) {
    float g = fbm(uv * uScale * 4.2 + vec2(floor(uTime * 0.8)));
    float speckle = hash21(floor(uv * uScale * 48.0) + floor(uTime * 2.0));
    col = mix(uColorA, uColorB, mix(0.38, 0.62, g));
    col = mix(col, mix(uColorA, uColorB, speckle), 0.18);
  } else if (uMode == 2) {
    float x = uv.x;
    if (x < 1.0/7.0) col = vec3(1.0);
    else if (x < 2.0/7.0) col = vec3(1.0, 1.0, 0.0);
    else if (x < 3.0/7.0) col = vec3(0.0, 1.0, 1.0);
    else if (x < 4.0/7.0) col = vec3(0.0, 1.0, 0.0);
    else if (x < 5.0/7.0) col = vec3(1.0, 0.0, 1.0);
    else if (x < 6.0/7.0) col = vec3(1.0, 0.0, 0.0);
    else col = vec3(0.0, 0.0, 1.0);
  } else if (uMode == 3) {
    float g = uv.x * 0.72 + uv.y * 0.28;
    g += (fbm(uv * 1.6 + uSeed * 0.05) - 0.5) * 0.12;
    col = mix(uColorA, uColorB, smoothstep(0.05, 0.95, g));
  } else if (uMode == 4) {
    col = uColorA;
  } else if (uMode == 5) {
    vec2 c = floor(uv * uScale);
    col = mix(uColorA, uColorB, mod(c.x + c.y, 2.0));
  } else if (uMode == 6) {
    vec3 bg = mix(uColorA * 0.45, uColorB * 0.18, uv.y);
    vec4 cr = critterField(uv, max(uScale, 5.0), uSeed, uTime, 1.15, 2.0);
    col = mix(bg, cr.rgb, cr.a);
    col += cr.rgb * cr.a * 0.18;
  } else if (uMode == 7) {
    col = genStars(uv);
  } else if (uMode == 8) {
    col = genMarsh(uv);
  } else if (uMode == 9) {
    col = genOil(uv);
  } else if (uMode == 10) {
    col = genPaper(uv);
  } else {
    col = genCave(uv);
  }
  fragColor = vec4(col, 1.0);
}
`;

export const COPY_GLSL = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`;

export const TEXTURE_GLSL = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform vec2 uTranslate;
uniform float uScale;
uniform float uRotation;
uniform vec2 uFit;

vec2 rot(vec2 p, float a) {
  float s = sin(a); float c = cos(a);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}

void main() {
  vec2 p = (vUv - 0.5) / uFit;
  p = rot(p, uRotation);
  p /= max(uScale, 0.001);
  p -= uTranslate;
  p += 0.5;
  if (p.x < 0.0 || p.x > 1.0 || p.y < 0.0 || p.y > 1.0) {
    fragColor = vec4(0.0);
    return;
  }
  fragColor = texture(uTex, p);
}
`;
