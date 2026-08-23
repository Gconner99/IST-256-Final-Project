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
  float tw = 0.45 + 0.55 * sin(t * (1.5 + n * 8.0) + n * 20.0 + u_audio * 4.0);
  vec2 jitter = vec2(hash21(id + 2.1), hash21(id + 7.7)) - 0.5;
  float d = length(gv + jitter * 0.35);
  float m = smoothstep(size * tw, 0.0, d) * step(1.0 - dens, n);
  float spike = 0.0;
  if (n > 0.97) {
    spike = (1.0 - smoothstep(0.0, 0.18, abs(gv.x))) * (1.0 - smoothstep(0.0, 0.035, abs(gv.y)));
    spike += (1.0 - smoothstep(0.0, 0.18, abs(gv.y))) * (1.0 - smoothstep(0.0, 0.035, abs(gv.x)));
    spike *= tw * 0.55;
  }
  return m + spike * step(1.0 - dens * 0.4, n);
}
vec3 genStars(vec2 uv) {
  vec2 p = (uv - 0.5) * vec2(1.7, 1.0);
  float neb = fbm(p * 2.2 + uTime * 0.03 + uSeed * 0.01);
  vec3 col = mix(uColorA * 0.35, uColorB * 0.22, neb);
  col += vec3(0.08, 0.04, 0.14) * pow(neb, 3.0);
  float band = exp(-pow((uv.y - 0.42 + 0.08 * sin(uv.x * 3.0)) * 4.5, 2.0));
  col += mix(uColorA, uColorB, 0.6) * band * 0.18 * neb;
  float sc = max(uScale, 1.0);
  col += vec3(0.75, 0.82, 1.0) * starLayer(uv * 28.0 * sc + uSeed, 0.22, 0.018, uTime);
  col += vec3(1.0, 0.95, 0.85) * starLayer(uv * 12.0 * sc - uSeed * 0.3, 0.08, 0.035, uTime * 0.7);
  col += vec3(0.6, 0.7, 1.0) * starLayer(uv * 52.0 * sc + 9.1, 0.35, 0.01, uTime * 1.3) * 0.65;
  return col;
}
vec3 genMarsh(vec2 uv) {
  float dusk = smoothstep(0.15, 0.85, uv.y);
  vec3 sky = mix(uColorB * 0.55, uColorA, dusk);
  sky = mix(sky, vec3(0.55, 0.18, 0.08), 0.22 * (1.0 - dusk));
  float fog1 = fbm(vec2(uv.x * 1.8 + uTime * 0.04, uv.y * 3.2));
  float fog2 = fbm(vec2(uv.x * 3.1 - uTime * 0.07, uv.y * 5.0 + 4.0));
  float mist = mix(fog1, fog2, 0.45) * (1.0 - uv.y);
  vec3 col = mix(sky, vec3(0.72, 0.42, 0.12) * (0.55 + 0.45 * u_bass), mist * 0.65);
  for (int i = 0; i < 4; i++) {
    float fi = float(i);
    float lx = hash21(vec2(uSeed, fi + 1.3));
    float ly = 0.18 + hash21(vec2(fi, uSeed + 4.0)) * 0.22;
    float d = length((uv - vec2(lx, ly)) * vec2(1.4, 2.4));
    float glow = exp(-d * mix(6.0, 4.0, u_audio)) * (0.55 + 0.45 * sin(uTime * 1.7 + fi));
    col += vec3(1.0, 0.62, 0.18) * glow * 0.7;
  }
  float reedX = uv.x * 42.0;
  float reedId = floor(reedX);
  float reedF = fract(reedX) - 0.5;
  float h = 0.12 + 0.28 * hash21(vec2(reedId, uSeed));
  float sway = 0.02 * sin(uTime * 1.3 + reedId);
  float reed = 1.0 - smoothstep(0.012, 0.03, abs(reedF - sway * uv.y));
  reed *= 1.0 - smoothstep(h, h + 0.04, uv.y);
  col = mix(col, uColorA * 0.25, reed * step(uv.y, 0.48));
  float ground = 1.0 - smoothstep(0.0, 0.22, uv.y);
  col = mix(col, col.bgr * 0.35 + vec3(0.08, 0.06, 0.03), ground * 0.7);
  return col;
}
vec3 genOil(vec2 uv) {
  vec2 p = uv * max(uScale, 1.5);
  p += vec2(fbm(p + uTime * 0.05), fbm(p + vec2(4.2, 1.1) - uTime * 0.04));
  float n = fbm(p * 1.6);
  float n2 = fbm(p * 2.8 + n * 2.0);
  float ang = atan(n2 - 0.5, n - 0.5);
  vec3 irid = 0.5 + 0.5 * cos(ang * 5.0 + vec3(0.0, 2.1, 4.2) + uTime * 0.2);
  vec3 col = mix(uColorA, uColorB, n);
  col = mix(col, irid, 0.45 + 0.2 * n2);
  col += irid * pow(n2, 4.0) * 0.35;
  float swirl = sin((uv.x + n) * 12.0 + uTime * 0.6);
  col = mix(col, col.gbr, 0.12 + 0.12 * swirl);
  return col;
}
vec3 genPaper(vec2 uv) {
  vec3 paper = mix(vec3(0.89, 0.84, 0.74), uColorA, 0.18);
  float fiber = fbm(uv * 48.0 * max(uScale, 1.0));
  paper *= 0.86 + 0.18 * fiber;
  float stain = smoothstep(0.62, 0.92, fbm(uv * 2.4 + uSeed * 0.2));
  paper = mix(paper, mix(uColorB, vec3(0.42, 0.28, 0.16), 0.5), stain * 0.28);
  float speck = step(0.984, hash21(floor(uv * 280.0) + uSeed));
  paper = mix(paper, vec3(0.08, 0.06, 0.05), speck);
  float fold = abs(sin(uv.x * 3.14159 * 2.0 + 0.4 * fbm(uv * 6.0)));
  paper *= 1.0 - 0.08 * pow(1.0 - fold, 8.0);
  float xerox = 0.04 * (hash21(vec2(floor(uv.y * 220.0), uSeed + floor(uTime * 2.0))) - 0.5);
  paper += xerox;
  float edge = pow(length(uv - 0.5) * 1.15, 2.4) * 0.18;
  paper -= edge;
  return clamp(paper, 0.0, 1.0);
}
vec3 genCave(vec2 uv) {
  vec2 p = uv * vec2(2.2, 1.6) * max(uScale * 0.35, 0.8);
  float rock = fbm(p + uSeed * 0.05);
  float rock2 = fbm(p * 2.4 + rock);
  vec3 col = mix(uColorA * 0.4, vec3(0.07, 0.06, 0.08), rock);
  col = mix(col, uColorB * 0.15, rock2 * 0.35);
  float rim = pow(max(uv.x, 1.0 - uv.x), 2.6);
  col += uColorB * rim * 0.45 * (0.5 + 0.5 * rock2);
  float sx = uv.x * 18.0;
  float sid = floor(sx);
  float sf = fract(sx) - 0.5;
  float fromTop = 1.0 - uv.y;
  float sh = 0.08 + 0.42 * pow(hash21(vec2(sid, uSeed + 3.0)), 1.4);
  float stal = 1.0 - smoothstep(0.02, 0.09, abs(sf) + fromTop * 0.12);
  stal *= 1.0 - smoothstep(sh, sh + 0.05, fromTop);
  col = mix(col, uColorA * 0.15, stal);
  float wet = pow(max(0.0, rock2 - 0.62), 2.0);
  col += vec3(0.35, 0.4, 0.5) * wet * 0.5;
  float vig = smoothstep(0.95, 0.25, length((uv - 0.5) * vec2(1.3, 1.0)));
  col *= vig;
  col += uColorB * 0.08 * u_bass * (1.0 - uv.y);
  return col;
}

void main() {
  vec2 uv = vUv;
  vec3 col = vec3(0.0);
  if (uMode == 0) {
    float n = sin(uv.x * uScale + uTime) + sin(uv.y * uScale * 0.7 - uTime * 1.3);
    n += sin((uv.x + uv.y) * uScale * 0.5 + uTime * 0.4);
    n = n / 3.0 * 0.5 + 0.5;
    col = mix(uColorA, uColorB, n);
    col += 0.12 * vec3(sin(n * 9.0), cos(n * 6.0), sin(n * 4.0 + 1.0));
  } else if (uMode == 1) {
    float n = hash21(floor(uv * uScale * 40.0) + floor(uTime * 12.0));
    col = mix(uColorA, uColorB, n);
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
    col = mix(uColorA, uColorB, uv.x);
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
