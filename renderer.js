import{g as I,s as Q,a as W,r as J}from"./main.js";import{a as Z,b as j}from"./dancer.js";import"./boot.js";const ee=`#version 300 es
precision highp float;
const vec2 POS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
out vec2 vUv;
void main() {
  vec2 p = POS[gl_VertexID];
  gl_Position = vec4(p, 0.0, 1.0);
  vUv = p * 0.5 + 0.5;
}
`,te=`#version 300 es
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
`,oe=`
void main() {
  vec4 src = texture(uTex, vUv);
  vec4 dst = apply(vUv);
  float m = computeMask(vUv) * u_mix;
  fragColor = mix(src, dst, clamp(m, 0.0, 1.0));
}
`,D=`#version 300 es
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
`,G=`#version 300 es
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
`,N=`#version 300 es
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
`,ie=`#version 300 es
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
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
void main() {
  vec2 uv = vUv;
  vec3 col = vec3(0.0);
  int mode = uMode;
  if (mode > 5) mode = 0;
  if (mode == 0) {
    float n = sin(uv.x * uScale * 0.55 + uTime * 0.14) + sin(uv.y * uScale * 0.4 - uTime * 0.1);
    n += sin((uv.x * 0.7 + uv.y) * uScale * 0.25 + uTime * 0.06);
    n = n / 3.0 * 0.5 + 0.5;
    col = mix(uColorA, uColorB, smoothstep(0.22, 0.78, n));
    col *= 0.9 + 0.1 * smoothstep(1.05, 0.22, length(uv - 0.5));
  } else if (mode == 1) {
    float n = hash21(floor(uv * uScale * 36.0) + floor(uTime * 1.5));
    col = mix(uColorA, uColorB, mix(0.35, 0.65, n));
  } else if (mode == 2) {
    float x = uv.x;
    if (x < 1.0/7.0) col = vec3(1.0);
    else if (x < 2.0/7.0) col = vec3(1.0, 1.0, 0.0);
    else if (x < 3.0/7.0) col = vec3(0.0, 1.0, 1.0);
    else if (x < 4.0/7.0) col = vec3(0.0, 1.0, 0.0);
    else if (x < 5.0/7.0) col = vec3(1.0, 0.0, 1.0);
    else if (x < 6.0/7.0) col = vec3(1.0, 0.0, 0.0);
    else col = vec3(0.0, 0.0, 1.0);
  } else if (mode == 3) {
    col = mix(uColorA, uColorB, uv.x);
  } else if (mode == 4) {
    col = uColorA;
  } else {
    vec2 c = floor(uv * uScale);
    col = mix(uColorA, uColorB, mod(c.x + c.y, 2.0));
  }
  fragColor = vec4(col, 1.0);
}
`,re=`
vec4 critterField(vec2 uv, float count, float seed, float time, float sizeMul, float kit) {
  return vec4(0.0);
}
`,$=r=>`#version 300 es
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
${r}
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
  float tw = 0.88 + 0.12 * sin(t * (0.35 + n * 0.9) + n * 18.0);
  vec2 jitter = vec2(hash21(id + 2.1), hash21(id + 7.7)) - 0.5;
  float d = length(gv + jitter * 0.28);
  return smoothstep(size * tw, 0.0, d) * step(1.0 - dens, n) * tw;
}
vec3 genStars(vec2 uv) {
  float sky = smoothstep(0.0, 1.0, uv.y);
  vec3 col = mix(uColorA, mix(uColorA, uColorB, 0.12), sky * 0.65);
  float neb = fbm((uv - 0.5) * vec2(1.5, 1.0) * 1.3 + uTime * 0.006 + uSeed * 0.01);
  col = mix(col, mix(uColorA, uColorB, 0.28) * 0.4, smoothstep(0.48, 0.82, neb) * 0.28);
  float sc = max(uScale, 1.0);
  col += vec3(0.80, 0.84, 0.92) * starLayer(uv * 20.0 * sc + uSeed, 0.1, 0.011, uTime + u_audio * 0.45);
  col += vec3(0.93, 0.91, 0.86) * starLayer(uv * 8.5 * sc - uSeed * 0.2, 0.035, 0.02, uTime * 0.6 + u_bass * 0.3) * 0.55;
  float vig = smoothstep(1.15, 0.2, length((uv - 0.5) * vec2(1.15, 1.0)));
  return col * (0.9 + 0.1 * vig);
}
vec3 genMarsh(vec2 uv) {
  float dusk = pow(clamp(uv.y, 0.0, 1.0), 0.85);
  vec3 sky = mix(mix(uColorB, vec3(0.58, 0.36, 0.16), 0.4), uColorA, dusk);
  float fog = fbm(vec2(uv.x * 1.15 + uTime * (0.012 + u_audio * 0.02), uv.y * 2.2));
  float mist = smoothstep(0.2, 0.72, fog) * (1.0 - uv.y) * 0.5;
  vec3 col = mix(sky, mix(uColorB, vec3(0.5, 0.3, 0.12), 0.35), mist);
  float hz = exp(-pow((uv.y - 0.2) * 6.5, 2.0));
  col += mix(uColorB, vec3(0.85, 0.52, 0.2), 0.35) * hz * 0.18;
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    vec2 lp = vec2(hash21(vec2(uSeed, fi + 1.3)), 0.16 + hash21(vec2(fi, uSeed + 4.0)) * 0.12);
    float d = length((uv - lp) * vec2(1.5, 2.6));
    col += vec3(0.9, 0.58, 0.2) * exp(-d * 8.0) * (0.22 + u_bass * 0.28);
  }
  float reedX = uv.x * 38.0;
  float reedId = floor(reedX);
  float reedF = fract(reedX) - 0.5;
  float h = 0.1 + 0.22 * hash21(vec2(reedId, uSeed));
  float sway = 0.012 * sin(uTime * 0.7 + reedId);
  float reed = 1.0 - smoothstep(0.01, 0.028, abs(reedF - sway * uv.y));
  reed *= 1.0 - smoothstep(h, h + 0.05, uv.y);
  col = mix(col, uColorA * 0.22, reed * step(uv.y, 0.4) * 0.85);
  float ground = 1.0 - smoothstep(0.0, 0.16, uv.y);
  vec3 water = mix(uColorA * 0.22, col * 0.32, 0.45);
  col = mix(col, water, ground * 0.88);
  return col;
}
vec3 genOil(vec2 uv) {
  vec2 p = uv * max(uScale * 0.5, 1.15);
  p += 0.32 * vec2(fbm(p + uTime * (0.01 + u_audio * 0.015)), fbm(p + vec2(3.1, 1.4) - uTime * (0.008 + u_audio * 0.01)));
  float n = fbm(p * 1.1);
  float vein = smoothstep(0.44, 0.56, n) - smoothstep(0.56, 0.7, n);
  vec3 col = mix(uColorA, uColorB, smoothstep(0.28, 0.72, n));
  col = mix(col, mix(uColorA, uColorB, 0.45) * 0.78, vein * 0.28);
  return col * (0.94 + 0.06 * fbm(uv * 2.8));
}
vec3 genPaper(vec2 uv) {
  vec3 paper = mix(vec3(0.91, 0.87, 0.79), uColorA, 0.1);
  float fiber = fbm(uv * 34.0 * max(uScale, 1.0));
  paper *= 0.95 + 0.07 * fiber;
  float stain = smoothstep(0.74, 0.96, fbm(uv * 1.9 + uSeed * 0.18));
  paper = mix(paper, mix(uColorB, vec3(0.46, 0.33, 0.22), 0.55), stain * 0.14);
  paper -= pow(abs(sin(uv.x * 3.14159 + 0.15)), 14.0) * 0.035;
  float edge = pow(length(uv - 0.5) * 1.04, 2.3) * 0.09;
  return clamp(paper - edge, 0.0, 1.0);
}
vec3 genCave(vec2 uv) {
  vec2 p = uv * vec2(1.7, 1.35) * max(uScale * 0.28, 0.8);
  float rock = fbm(p + uSeed * 0.04);
  float fill = fbm(p * 2.6 + rock);
  vec3 col = mix(uColorA * 0.5, vec3(0.055, 0.05, 0.06), rock);
  col = mix(col, uColorB * 0.07, fill * 0.18);
  float rim = pow(max(uv.x, 1.0 - uv.x), 3.4) * (0.3 + 0.2 * rock);
  col += uColorB * rim * (0.18 + u_bass * 0.16);
  float sx = uv.x * 16.0;
  float sid = floor(sx);
  float sf = fract(sx) - 0.5;
  float fromTop = 1.0 - uv.y;
  float sh = 0.1 + 0.36 * pow(hash21(vec2(sid, uSeed + 3.0)), 1.35);
  float stal = 1.0 - smoothstep(0.018, 0.08, abs(sf) + fromTop * 0.12);
  stal *= 1.0 - smoothstep(sh, sh + 0.06, fromTop);
  col = mix(col, uColorA * 0.18, stal * 0.9);
  float vig = smoothstep(0.92, 0.22, length((uv - 0.5) * vec2(1.22, 1.0)));
  return col * vig;
}

void main() {
  vec2 uv = vUv;
  vec3 col = vec3(0.0);
  if (uMode == 0) {
    float n = sin(uv.x * uScale * 0.55 + uTime * 0.14) + sin(uv.y * uScale * 0.4 - uTime * 0.1);
    n += sin((uv.x * 0.7 + uv.y) * uScale * 0.25 + uTime * 0.06);
    n = n / 3.0 * 0.5 + 0.5;
    col = mix(uColorA, uColorB, smoothstep(0.22, 0.78, n));
    col *= 0.9 + 0.1 * smoothstep(1.05, 0.22, length(uv - 0.5));
  } else if (uMode == 1) {
    float n = hash21(floor(uv * uScale * 36.0) + floor(uTime * 1.5));
    col = mix(uColorA, uColorB, mix(0.35, 0.65, n));
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
`,O=$(re);function se(r){return $(r)}const X=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
void main() {
  fragColor = texture(uTex, vUv);
}
`,z=`#version 300 es
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
`;class C extends Error{}function ae(r){const e=r.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1,premultipliedAlpha:!1});if(!e)throw new C("WebGL2 is required for Phosphene.");return e}function q(r,e,t){const o=r.createShader(e);if(!o)throw new C("Unable to create shader");if(r.shaderSource(o,t),r.compileShader(o),!r.getShaderParameter(o,r.COMPILE_STATUS)){const i=r.getShaderInfoLog(o)??"shader compile failed";throw r.deleteShader(o),new C(i)}return o}class h{gl;prog;uniforms=new Map;constructor(e,t,o=ee){this.gl=e;const i=q(e,e.VERTEX_SHADER,o),s=q(e,e.FRAGMENT_SHADER,t),a=e.createProgram();if(!a)throw new C("Unable to create program");if(e.attachShader(a,i),e.attachShader(a,s),e.linkProgram(a),e.deleteShader(i),e.deleteShader(s),!e.getProgramParameter(a,e.LINK_STATUS)){const u=e.getProgramInfoLog(a)??"link failed";throw e.deleteProgram(a),new C(u)}this.prog=a}use(){this.gl.useProgram(this.prog)}loc(e){return this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.prog,e)),this.uniforms.get(e)??null}i(e,t){const o=this.loc(e);o&&this.gl.uniform1i(o,t)}f(e,t){const o=this.loc(e);o&&this.gl.uniform1f(o,t)}v2(e,t,o){const i=this.loc(e);i&&this.gl.uniform2f(i,t,o)}v3(e,t,o,i){const s=this.loc(e);s&&this.gl.uniform3f(s,t,o,i)}v4(e,t,o,i,s){const a=this.loc(e);a&&this.gl.uniform4f(a,t,o,i,s)}dispose(){this.gl.deleteProgram(this.prog)}}function M(r){const e=r.createTexture();if(!e)throw new C("Unable to create texture");return r.bindTexture(r.TEXTURE_2D,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),e}function ne(r,e,t){r.bindTexture(r.TEXTURE_2D,e),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)}function ue(r,e,t,o){r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t,o,0,r.RGBA,r.UNSIGNED_BYTE,null)}class S{constructor(e){this.gl=e;const t=e.createFramebuffer();if(!t)throw new C("Unable to create framebuffer");this.fbo=t,this.tex=M(e),this.resize(1,1)}fbo;tex;w=1;h=1;resize(e,t){e=Math.max(1,Math.floor(e)),t=Math.max(1,Math.floor(t)),!(e===this.w&&t===this.h)&&(this.w=e,this.h=t,ue(this.gl,this.tex,e,t),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.tex,0))}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo),this.gl.viewport(0,0,this.w,this.h)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.tex)}}function d(r,e,t){r.activeTexture(r.TEXTURE0+e),r.bindTexture(r.TEXTURE_2D,t)}function _(r){r.drawArrays(r.TRIANGLES,0,3)}const le={normal:0,add:1,screen:2,multiply:3,overlay:4,difference:5,exclusion:6,lighten:7,darken:8},ce={none:0,rect:1,circle:2,gradient:3,noise:4,image:5},K={plasma:0,noise:1,bars:2,gradient:3,solid:4,checker:5,critters:6,stars:7,marsh:8,oil:9,paper:10,cave:11};function fe(r){return`${te}
${r.extraUniforms??""}
${r.applyGlsl}
${oe}`}function me(r,e){return new h(r,fe(e))}function B(r){const e=r.replace("#",""),t=parseInt(e.length===3?e.split("").map(o=>o+o).join(""):e,16);return Number.isNaN(t)?[1,1,1]:[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}const he=se(Z),R=2;function H(r,e,t){return new ImageData(r,e,t)}function ve(r,e,t){const o=r.find(s=>s.id===e);if(!o?.options)return Number(t)||0;const i=o.options.findIndex(s=>s.value===t);return i<0?0:i}class xe{gl;canvas;ping=null;pong=null;composite=null;post=null;ring=[];ringIndex=0;layerHist=new Map;sourceTex=new Map;audioEnergy=0;audioBass=0;effectProg=new Map;copy=null;blit=null;compositeProg=null;feedbackProg=null;generatorProg;generatorFull=null;generatorCritters=null;compileQueued=new Set;compileJobs=[];compileBusy=!1;eagerCompile=!1;textureProg=null;black=null;lastError=null;width=1;height=1;constructor(e){this.canvas=e,this.gl=ae(e),this.generatorProg=new h(this.gl,ie)}scheduleCompile(e,t){this.compileQueued.has(e)||(this.compileQueued.add(e),this.compileJobs.push(t),this.pumpCompile())}pumpCompile(){if(this.compileBusy||this.compileJobs.length===0)return;this.compileBusy=!0;const e=this.compileJobs.shift();requestAnimationFrame(()=>{try{e()}catch(t){this.lastError=t instanceof Error?t.message:String(t),console.warn(this.lastError)}this.compileBusy=!1,this.pumpCompile()})}buildEffect(e,t,o){const i=e==="dancer"&&t?j():I(e);if(!i)return null;try{const s=me(this.gl,i);return this.effectProg.set(o,s),s}catch(s){return this.lastError=`${o}: ${s instanceof Error?s.message:String(s)}`,console.warn(this.lastError),null}}compileType(e,t=!1,o=!1){const i=e!=="dancer"?e:t?"dancer:mini":"dancer",s=this.effectProg.get(i);return s||(o||this.eagerCompile?this.buildEffect(e,t,i):(this.scheduleCompile(i,()=>{this.effectProg.has(i)||this.buildEffect(e,t,i)}),this.effectProg.get(i)??null))}progForGenerator(e,t=!1){const o=t||this.eagerCompile;if(e===6){if(this.generatorCritters)return this.generatorCritters;const i=()=>{this.generatorCritters??=new h(this.gl,he)};return o?(i(),this.generatorCritters):(this.scheduleCompile("gen:critters",i),this.generatorProg)}return e>=7?this.generatorFull?this.generatorFull:o?(this.generatorFull=new h(this.gl,O),this.generatorFull):(this.scheduleCompile("gen:places",()=>{this.generatorFull||(this.generatorFull=new h(this.gl,O))}),this.generatorProg):this.generatorProg}progFor(e,t=!1){return e.typeId!=="dancer"?this.compileType(e.typeId,!1,t):this.compileType("dancer",e.params.crowd==="mini",t)}needsPipeline(e){if(e.globalFeedback.amount>.001)return!0;const t=e.layers.filter(s=>s.enabled);if(t.length!==1)return!0;const o=t[0];if(o.feedback.amount>.001||o.effects.some(s=>s.enabled))return!0;const i=e.sources.find(s=>s.id===o.sourceId);return!!(i&&i.kind!=="generator"&&i.kind!=="audio")}pipelineReady(){return!!(this.ping&&this.pong&&this.composite&&this.post&&this.ring.length>=R&&this.copy&&this.blit&&this.compositeProg&&this.feedbackProg&&this.textureProg&&this.black)}allocBuffers(){if(this.ping)return;const e=this.gl;this.ping=new S(e),this.pong=new S(e),this.composite=new S(e),this.post=new S(e),this.ring=[];for(let t=0;t<R;t++)this.ring.push(new S(e));this.black=M(e),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),this.width>1&&this.ensureSize(this.width,this.height)}warmPipeline(){if(this.eagerCompile){this.allocBuffers(),this.copy??=new h(this.gl,X),this.blit??=new h(this.gl,G),this.compositeProg??=new h(this.gl,D),this.feedbackProg??=new h(this.gl,N),this.textureProg??=new h(this.gl,z);return}this.scheduleCompile("pipe:fbo",()=>this.allocBuffers()),this.scheduleCompile("pipe:copy",()=>{this.copy??=new h(this.gl,X)}),this.scheduleCompile("pipe:blit",()=>{this.blit??=new h(this.gl,G)}),this.scheduleCompile("pipe:comp",()=>{this.compositeProg??=new h(this.gl,D)}),this.scheduleCompile("pipe:fb",()=>{this.feedbackProg??=new h(this.gl,N)}),this.scheduleCompile("pipe:tex",()=>{this.textureProg??=new h(this.gl,z)})}drawLite(e,t){const o=this.gl,i=e.layers.find(n=>n.enabled)??e.layers[0],s=i?e.sources.find(n=>n.id===i.sourceId):null,a=s&&s.kind!=="audio"?s:{generator:"plasma"};o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,this.canvas.width,this.canvas.height);const u=K[a.generator??"plasma"]??0,c=this.progForGenerator(u);c.use(),c.i("uMode",u),c.f("uTime",t);const f=a.colorA?B(a.colorA):[.07,.04,.1],m=a.colorB?B(a.colorB):[.92,.78,.55];c.v3("uColorA",f[0],f[1],f[2]),c.v3("uColorB",m[0],m[1],m[2]),c.f("uScale",6),c.f("uSeed",e.seed),c.f("u_audio",this.audioEnergy),c.f("u_bass",this.audioBass),_(o)}resetTemporal(){const e=this.gl;for(const t of[...this.ring,...this.layerHist.values()])t.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);this.ringIndex=0}ensureSize(e,t){if(e===this.width&&t===this.height)return;this.width=e,this.height=t;const o=[this.ping,this.pong,this.composite,this.post,...this.ring,...this.layerHist.values()].filter(i=>!!i);for(const i of o)i.resize(e,t)}histFor(e){let t=this.layerHist.get(e);return t||(t=new S(this.gl),t.resize(this.width,this.height),this.layerHist.set(e,t)),t}uploadSource(e){let t=this.sourceTex.get(e.id);t||(t=M(this.gl),this.sourceTex.set(e.id,t));const o=e.frozenFrame||e.bitmap||e.video;return o&&ne(this.gl,t,o),t}blitTo(e,t){const o=this.gl,i=this.copy;i&&(e.bind(),i.use(),d(o,0,t),i.i("uTex",0),_(o))}drawGenerator(e,t,o,i=77){const s=this.gl,a=K[t.generator??"plasma"]??0,u=this.progForGenerator(a);e.bind(),u.use(),u.i("uMode",a),u.f("uTime",o);const c=t.colorA?B(t.colorA):[.07,.04,.1],f=t.colorB?B(t.colorB):[.92,.78,.55];u.v3("uColorA",c[0],c[1],c[2]),u.v3("uColorB",f[0],f[1],f[2]),u.f("uScale",6),u.f("uSeed",i),u.f("u_audio",this.audioEnergy),u.f("u_bass",this.audioBass),_(s)}drawTexture(e,t,o){const i=this.gl,s=this.textureProg;s&&(e.bind(),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),s.use(),d(i,0,t),s.i("uTex",0),s.v2("uTranslate",o.transform.x,o.transform.y),s.f("uScale",o.transform.scale),s.f("uRotation",o.transform.rotation),s.v2("uFit",1,1),_(i))}applyEffect(e,t,o,i,s,a,u,c,f){const m=I(o.typeId),n=this.progFor(o);if(!m||!n){this.blitTo(e,t);return}const g=this.gl;e.bind(),n.use(),d(g,0,t),d(g,1,c),d(g,2,f),n.i("uTex",0),n.i("uFeedback",1),n.i("uHistory",2),n.i("uMask",3),n.v2("uResolution",e.w,e.h),n.v2("uTexel",1/e.w,1/e.h),n.f("uTime",s),n.f("uFrame",a),n.f("uQuality",u==="draft"?0:u==="preview"?1:2),n.f("u_audio",this.audioEnergy),n.f("u_bass",this.audioBass),n.v2("u_translate",i.transform.x,i.transform.y),n.f("u_scale",i.transform.scale),n.f("u_rotation",i.transform.rotation);const l=i.mask;n.i("u_maskType",ce[l.type]??0),n.i("u_maskInvert",l.invert?1:0),n.f("u_maskSoftness",l.softness),n.v4("u_maskRect",l.rect.x,l.rect.y,l.rect.w,l.rect.h),n.v2("u_maskCenter",l.center.x,l.center.y),n.f("u_maskRadius",l.radius),n.f("u_maskGradientAngle",l.gradientAngle),n.f("u_maskNoiseScale",l.noiseScale);let k=1;for(const x of m.params){const T=o.params[x.id]??x.default,p=`u_${x.id}`;if(x.kind==="color"&&typeof T=="string"){const[F,U,A]=B(T);n.v3(p,F,U,A)}else x.kind==="bool"?n.f(p,T?1:0):x.kind==="enum"?n.f(p,ve(m.params,x.id,T)):n.f(p,Number(T));x.id==="mix"&&(k=Number(T))}n.f("u_mix",k),_(g)}render(e,t,o){const i=this.gl,s=o?.quality??e.quality;this.eagerCompile=s==="export";const a=Q(W(e),t);if(this.audioEnergy=a.energy,this.audioBass=a.bass,this.eagerCompile&&this.warmPipeline(),!this.eagerCompile&&!this.needsPipeline(e)){this.drawLite(e,t);return}if(!this.pipelineReady()){this.drawLite(e,t),this.warmPipeline();return}const u=this.ping,c=this.pong,f=this.composite,m=this.post,n=this.blit,g=this.compositeProg,l=this.feedbackProg,k=s==="draft"?.5:1,x=Math.max(16,Math.floor((o?.width??this.canvas.width)*k)),T=Math.max(16,Math.floor((o?.height??this.canvas.height)*k));this.ensureSize(x,T),f.bind(),i.clearColor(.02,.02,.03,1),i.clear(i.COLOR_BUFFER_BIT);const p=e.globalFeedback,F=Math.max(0,Math.min(R-1,Math.round(p.delay))),U=(this.ringIndex-1-F+R*8)%R,A=this.ring[U].tex,V=Math.floor(t*e.fps);for(const L of e.layers){if(!L.enabled)continue;const v=J(e,L,t),y=e.sources.find(b=>b.id===v.sourceId)??null;if(!y||y.kind==="generator"||y.kind==="audio"){const b=y&&y.kind!=="audio"?y:{generator:"plasma"};this.drawGenerator(u,b,t,e.seed)}else{const b=this.uploadSource(y);this.drawTexture(u,b,v)}let E=u,w=c;const P=this.histFor(v.id);for(const b of v.effects){if(!b.enabled)continue;this.applyEffect(w,E.tex,b,v,t,V,s,A,P.tex);const Y=E;E=w,w=Y}if(v.feedback.amount>.001){w.bind(),l.use(),d(i,0,E.tex),d(i,1,P.tex),l.i("uTex",0),l.i("uFeedback",1),l.f("uAmount",v.feedback.amount),l.f("uOpacity",v.feedback.opacity),l.f("uScale",v.feedback.scale),l.f("uRotation",v.feedback.rotation),l.f("uDistortion",v.feedback.distortion),l.f("uTime",t),_(i);const b=E;E=w,w=b}this.blitTo(m,f.tex),f.bind(),g.use(),d(i,0,m.tex),d(i,1,E.tex),g.i("uBase",0),g.i("uLayer",1),g.f("uOpacity",v.opacity),g.i("uBlend",le[v.blendMode]??0),g.v2("uResolution",x,T),_(i),this.blitTo(P,E.tex)}p.amount>.001&&(m.bind(),l.use(),d(i,0,f.tex),d(i,1,A),l.i("uTex",0),l.i("uFeedback",1),l.f("uAmount",p.amount),l.f("uOpacity",p.opacity),l.f("uScale",p.scale),l.f("uRotation",p.rotation),l.f("uDistortion",p.distortion),l.f("uTime",t),_(i),this.blitTo(f,m.tex)),this.blitTo(this.ring[this.ringIndex],f.tex),this.ringIndex=(this.ringIndex+1)%R,i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,this.canvas.width,this.canvas.height),n.use(),d(i,0,f.tex),n.i("uTex",0),n.f("uVignette",o?.vignette??.25),_(i)}capture(e,t,o,i,s="image/png",a=.92){const u=this.paintFrame(e,t,o,i);return new Promise((c,f)=>{u.toBlob(m=>{m?c(m):f(new Error("Export failed"))},s,a)})}paintFrame(e,t,o,i,s){const a=s??document.createElement("canvas");a.width!==o&&(a.width=o),a.height!==i&&(a.height=i);const u=a.getContext("2d",{alpha:!1});if(!u)throw new Error("No 2d context");this.render(e,t,{width:o,height:i,quality:"export",vignette:0}),this.gl.finish();const c=this.readPixels(this.width,this.height);if(this.width===o&&this.height===i)u.putImageData(H(c,o,i),0,0);else{const f=document.createElement("canvas");f.width=this.width,f.height=this.height,f.getContext("2d")?.putImageData(H(c,this.width,this.height),0,0),u.drawImage(f,0,0,o,i)}return a}readPixels(e,t){const o=this.gl,i=new Uint8Array(e*t*4),s=this.composite?.fbo;if(!s)throw new Error("No frame to read");o.bindFramebuffer(o.FRAMEBUFFER,s),o.readPixels(0,0,e,t,o.RGBA,o.UNSIGNED_BYTE,i),o.bindFramebuffer(o.FRAMEBUFFER,null);const a=new Uint8ClampedArray(new ArrayBuffer(i.length)),u=e*4;for(let c=0;c<t;c++)a.set(i.subarray((t-1-c)*u,(t-c)*u),c*u);return a}}export{xe as Renderer};
