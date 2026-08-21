/** Sato-like low-poly idol: seed-grown figure, cheap to march, solid to look at. */
export const DANCER_GLSL = `
float figH(float n) {
  vec3 p3 = fract(vec3(n, n * 1.13, n * 0.71) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 figRotX(vec3 p, float a) {
  float s = sin(a), c = cos(a);
  return vec3(p.x, c * p.y - s * p.z, s * p.y + c * p.z);
}
vec3 figRotY(vec3 p, float a) {
  float s = sin(a), c = cos(a);
  return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
}
vec3 figRotZ(vec3 p, float a) {
  float s = sin(a), c = cos(a);
  return vec3(c * p.x - s * p.y, s * p.x + c * p.y, p.z);
}
float figBox(vec3 p, vec3 b) {
  vec3 q = abs(p) - b;
  return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
}
float figOcta(vec3 p, float s) {
  p = abs(p);
  return (p.x + p.y + p.z - s) * 0.57735027;
}
float figCap(vec3 p, vec3 a, vec3 b, float r) {
  vec3 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 0.0001), 0.0, 1.0);
  return length(pa - ba * h) - r;
}
vec2 figMin(vec2 a, vec2 b) { return a.x < b.x ? a : b; }
float figDanceStyle(float seed) {
  return floor(figH(seed + 0.11) * 8.0);
}
float figDanceT(float seed, float t) {
  float style = figDanceStyle(seed);
  if (style > 5.5 && style < 6.5) {
    float fps = mix(8.0, 14.0, figH(seed + 0.19));
    return floor(t * fps) / fps;
  }
  if (figH(seed + 0.17) > 0.82) {
    float fps = mix(5.0, 11.0, figH(seed + 0.19));
    return floor(t * fps) / fps;
  }
  return t;
}
struct Fig {
  float t, style, facing, sway, bob, spin, lean, slide, peck;
  float sx, sz, torsoKind, neck, hs, headKind, horn;
  float kickHz, kickAmt, extraLeg, arms, pack, tail, orb;
  float nEyes, eyeY, eyeZ, eyeSpread, eyeR, eyeSq, mouth, ears, tusks;
  vec3 ts;
};
Fig figRoll(float seed, float time) {
  Fig f;
  f.t = figDanceT(seed, time);
  f.style = figDanceStyle(seed);
  f.facing = mix(-0.28, 0.28, figH(seed + 0.48));
  f.sway = sin(f.t * 3.4) * mix(0.06, 0.16, figH(seed + 0.31));
  f.bob = abs(sin(f.t * 6.6)) * mix(0.02, 0.12, figH(seed + 0.37));
  f.spin = 0.0;
  f.lean = 0.0;
  f.slide = 0.0;
  f.peck = 0.0;
  if (f.style < 0.5) {
    f.sway = sin(f.t * 3.4) * mix(0.06, 0.16, figH(seed + 0.31));
  } else if (f.style < 1.5) {
    f.bob = abs(sin(f.t * 9.4)) * 0.045;
    f.sway = sin(f.t * 8.2) * 0.08;
    f.peck = 0.7 * max(0.0, sin(f.t * 10.5));
  } else if (f.style < 2.5) {
    f.spin = f.t * mix(1.6, 3.2, figH(seed + 0.44));
    f.sway = sin(f.t * 1.15) * 0.22;
    f.bob = abs(sin(f.t * 3.1)) * 0.07;
  } else if (f.style < 3.5) {
    f.lean = 0.85 + 0.12 * sin(f.t * 2.4);
    f.bob = -0.18 + 0.05 * sin(f.t * 1.6);
  } else if (f.style < 4.5) {
    f.bob = 0.24 * max(0.0, sin(f.t * 5.9));
    f.sway = sin(f.t * 5.9) * 0.06;
  } else if (f.style < 5.5) {
    f.slide = sin(f.t * 1.85) * 0.4;
    f.sway = -0.16 * sign(cos(f.t * 1.85) + 0.0001);
    f.bob = abs(sin(f.t * 8.4)) * 0.03;
  } else if (f.style < 6.5) {
    f.bob = abs(sin(f.t * 12.5)) * 0.055;
    f.sway = sin(f.t * 25.0) * 0.04;
  } else {
    f.sway = sin(f.t * 5.6) * 0.28;
    f.bob = sin(f.t * 8.3) * 0.1;
  }
  f.sx = mix(0.78, 1.28, figH(seed + 1.22));
  f.sz = mix(0.82, 1.22, figH(seed + 1.26));
  f.torsoKind = figH(seed + 1.1);
  f.ts = vec3(
    mix(0.14, 0.36, figH(seed + 1.2)),
    mix(0.18, 0.48, figH(seed + 1.3)),
    mix(0.1, 0.26, figH(seed + 1.4))
  );
  f.neck = mix(0.0, 0.4, pow(figH(seed + 2.05), 1.45));
  f.headKind = figH(seed + 2.2);
  f.hs = mix(0.2, 0.46, pow(figH(seed + 2.3), 0.75));
  if (figH(seed + 2.35) > 0.84) f.hs *= 1.35;
  f.horn = step(0.55, figH(seed + 2.8));
  f.kickHz = mix(4.4, 6.2, figH(seed + 3.1));
  f.kickAmt = mix(0.25, 0.7, figH(seed + 3.2));
  if (f.style > 0.5 && f.style < 1.5) { f.kickHz = mix(7.2, 10.5, figH(seed + 3.1)); f.kickAmt = mix(0.35, 0.85, figH(seed + 3.2)); }
  if (f.style > 2.5 && f.style < 3.5) { f.kickHz = mix(0.9, 2.0, figH(seed + 3.1)); f.kickAmt = mix(0.55, 0.95, figH(seed + 3.2)); }
  if (f.style > 5.5 && f.style < 6.5) { f.kickHz = mix(9.0, 14.0, figH(seed + 3.1)); f.kickAmt = mix(0.15, 0.4, figH(seed + 3.2)); }
  if (f.style > 4.5 && f.style < 5.5) f.kickAmt *= 0.35;
  f.extraLeg = step(0.76, figH(seed + 3.7));
  f.arms = figH(seed + 4.0) > 0.62 ? 4.0 : 2.0;
  if (f.style > 1.5 && f.style < 2.5) f.arms = 4.0;
  if (uQuality < 0.5) { f.arms = 2.0; f.extraLeg = 0.0; }
  f.pack = step(0.78, figH(seed + 5.1));
  f.tail = step(0.52, figH(seed + 5.4));
  f.orb = step(0.7, figH(seed + 5.8));
  f.nEyes = 1.0 + floor(figH(seed + 6.1) * 3.0);
  f.eyeY = f.hs * mix(0.02, 0.2, figH(seed + 6.2));
  f.eyeZ = -f.hs * mix(0.88, 1.28, figH(seed + 6.3));
  f.eyeSpread = f.hs * mix(0.24, 0.7, figH(seed + 6.4));
  f.eyeR = f.hs * mix(0.22, 0.48, figH(seed + 6.5));
  f.eyeSq = mix(0.55, 1.4, figH(seed + 6.55));
  f.mouth = figH(seed + 7.0);
  f.ears = step(0.12, figH(seed + 8.3));
  f.tusks = step(0.42, figH(seed + 9.1));
  return f;
}
vec2 figureFaceF(vec3 hp, Fig f) {
  float hs = f.hs;
  vec2 d = vec2(figBox(hp - vec3(0.0, hs * 0.02, -hs * 0.82), vec3(hs * 0.72, hs * 0.62, hs * 0.14)), 2.4);
  for (int i = 0; i < 3; i++) {
    if (float(i) >= f.nEyes) break;
    float xi = 0.0;
    if (f.nEyes > 1.5 && f.nEyes < 2.5) xi = float(i) < 0.5 ? -f.eyeSpread : f.eyeSpread;
    if (f.nEyes > 2.5) xi = (float(i) - 1.0) * f.eyeSpread;
    vec3 ep = hp - vec3(xi, f.eyeY, f.eyeZ);
    ep.y *= f.eyeSq;
    d = figMin(d, vec2(length(ep) - f.eyeR, 5.0));
    d = figMin(d, vec2(length(ep - vec3(0.0, 0.0, -f.eyeR * 0.5)) - f.eyeR * 0.45, 5.6));
  }
  if (f.mouth < 0.3) {
    vec3 sn = hp - vec3(0.0, hs * -0.02, -hs * 1.35);
    d = figMin(d, vec2(figBox(sn, vec3(hs * 0.28, hs * 0.16, hs * 0.38)), 6.0));
  } else if (f.mouth < 0.55) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -hs * 0.02, -hs * 0.4), vec3(0.0, 0.0, -hs * 1.7), hs * 0.09), 7.0));
  } else if (f.mouth < 0.78) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -hs * 0.06, -hs * 0.5), vec3(hs * 0.12, -hs * 0.4, -hs * 1.5), hs * 0.1), 6.0));
  } else {
    d = figMin(d, vec2(figBox(hp - vec3(0.0, -hs * 0.12, -hs * 0.95), vec3(hs * 0.32, hs * 0.08, hs * 0.18)), 7.0));
  }
  if (f.ears > 0.5) {
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.48, hs * 0.55, 0.08), vec3(-hs * 0.95, hs * 1.1, 0.1), hs * 0.08), 7.5));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.48, hs * 0.55, 0.08), vec3(hs * 0.95, hs * 1.1, 0.1), hs * 0.08), 7.5));
  }
  if (f.tusks > 0.5) {
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.16, -hs * 0.14, -hs * 0.62), vec3(-hs * 0.22, -hs * 0.48, -hs * 1.1), hs * 0.042), 8.0));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.16, -hs * 0.14, -hs * 0.62), vec3(hs * 0.22, -hs * 0.48, -hs * 1.1), hs * 0.042), 8.0));
  }
  return d;
}
vec2 figureFace(vec3 hp, float seed, float hs) {
  Fig f = figRoll(seed, 0.0);
  f.hs = hs;
  return figureFaceF(hp, f);
}
vec2 figureHit(vec3 p, Fig f, float seed) {
  if (f.style > 6.5) p = figRotX(p, sin(f.t * 6.1) * 0.22);
  p.x += f.slide;
  p = figRotY(p, f.facing + f.spin + f.sway);
  p = figRotZ(p, f.lean);
  p.y -= f.bob;
  p.x *= f.sx;
  p.z *= f.sz;
  vec2 d;
  if (f.torsoKind < 0.34) d = vec2(figBox(p, f.ts), 1.0);
  else if (f.torsoKind < 0.68) d = vec2(figOcta(p * vec3(1.0, 0.75, 1.1), mix(0.28, 0.48, figH(seed + 1.5))), 1.0);
  else d = vec2(figCap(p, vec3(0.0, f.ts.y * 0.55, 0.0), vec3(0.0, -f.ts.y * 0.7, 0.0), f.ts.x * 0.72), 1.0);
  if (f.neck > 0.07) {
    d = figMin(d, vec2(figCap(p, vec3(0.0, f.ts.y * 0.65, 0.0), vec3(0.0, f.ts.y + f.neck, 0.0), 0.055), 1.0));
  }
  vec3 hp = p - vec3(0.0, f.ts.y + mix(0.16, 0.28, figH(seed + 2.1)) + f.neck, 0.0);
  hp = figRotZ(hp, sin(f.t * 4.1) * 0.1);
  hp = figRotX(hp, cos(f.t * 3.2) * 0.06 - f.peck);
  if (f.headKind < 0.3) d = figMin(d, vec2(figOcta(hp, f.hs * 1.35), 2.0));
  else if (f.headKind < 0.6) d = figMin(d, vec2(figBox(hp, vec3(f.hs, f.hs * 1.05, f.hs * 0.85)), 2.0));
  else if (f.headKind < 0.82) {
    d = figMin(d, vec2(figOcta(hp - vec3(f.hs * 0.55, 0.0, 0.0), f.hs), 2.0));
    d = figMin(d, vec2(figOcta(hp + vec3(f.hs * 0.55, 0.0, 0.0), f.hs * 0.92), 2.2));
  } else {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -f.hs * 0.2, 0.0), vec3(0.0, f.hs * 1.4, 0.0), f.hs * 0.45), 2.0));
  }
  if (length(hp) < f.hs * 2.8) d = figMin(d, figureFaceF(hp, f));
  if (f.horn > 0.5) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, f.hs * 0.6, 0.0), vec3(0.0, f.hs * 1.7, 0.0), 0.055), 4.0));
  }
  float legLen = mix(0.34, 0.52, figH(seed + 3.3));
  float legR = mix(0.045, 0.09, figH(seed + 3.4));
  for (int i = 0; i < 2; i++) {
    float side = float(i) < 0.5 ? -1.0 : 1.0;
    float kick = sin(f.t * f.kickHz + float(i) * 3.14159) * f.kickAmt;
    vec3 lp = p - vec3(side * f.ts.x * 0.55, -f.ts.y * 0.55, 0.0);
    lp = figRotX(lp, 0.25 + kick);
    lp = figRotZ(lp, side * 0.12);
    d = figMin(d, vec2(figCap(lp, vec3(0.0), vec3(0.0, -legLen, 0.02), legR), 3.0));
    d = figMin(d, vec2(figBox(lp - vec3(0.0, -legLen, 0.04), vec3(0.07, 0.04, 0.11)), 3.0));
  }
  if (f.extraLeg > 0.5) {
    vec3 lp = p - vec3(0.0, -f.ts.y * 0.52, 0.1);
    lp = figRotX(lp, 0.18 + sin(f.t * (f.kickHz * 0.85 + 0.7)) * f.kickAmt * 0.85);
    d = figMin(d, vec2(figCap(lp, vec3(0.0), vec3(0.0, -0.4, 0.02), 0.06), 3.0));
  }
  float armR = mix(0.035, 0.075, figH(seed + 4.5));
  for (int i = 0; i < 4; i++) {
    if (float(i) >= f.arms) break;
    float side = mod(float(i), 2.0) < 0.5 ? -1.0 : 1.0;
    float row = float(i) < 2.0 ? 0.0 : 1.0;
    float wave = sin(f.t * mix(3.6, 7.0, figH(seed + 4.1)) + float(i) * 1.7);
    vec3 ap = p - vec3(side * f.ts.x * 0.85, f.ts.y * mix(0.15, 0.55, row), 0.0);
    ap = figRotZ(ap, side * (0.4 + wave * 0.75));
    vec3 tip = vec3(side * 0.4, 0.08, 0.0);
    if (f.style > 2.5 && f.style < 3.5) tip.y += 0.28;
    d = figMin(d, vec2(figCap(ap, vec3(0.0), tip, armR), 4.0));
    d = figMin(d, vec2(figOcta(ap - tip, 0.075), 4.0));
  }
  if (f.pack > 0.5) d = figMin(d, vec2(figBox(p - vec3(0.0, 0.0, f.ts.z + 0.08), vec3(0.12, 0.12, 0.08)), 1.5));
  if (f.tail > 0.5) {
    vec3 tb = vec3(0.0, -f.ts.y * 0.42, f.ts.z * 0.4);
    vec3 te = tb + vec3(sin(f.t * 3.7) * 0.24, 0.05, -0.4);
    d = figMin(d, vec2(figCap(p, tb, te, 0.05), 1.5));
  }
  if (f.orb > 0.5) d = figMin(d, vec2(length(p - vec3(0.32, 0.12, 0.12)) - 0.1, 4.0));
  float sMin = min(f.sx, f.sz);
  d.x *= sMin;
  return d;
}
vec2 figureMap(vec3 p, float seed, float t) {
  return figureHit(p, figRoll(seed, t), seed);
}
vec3 figNormal(vec3 p, Fig f, float seed) {
  float e = 0.02;
  float d0 = figureHit(p, f, seed).x;
  return normalize(vec3(
    figureHit(p + vec3(e, 0.0, 0.0), f, seed).x - d0,
    figureHit(p + vec3(0.0, e, 0.0), f, seed).x - d0,
    figureHit(p + vec3(0.0, 0.0, e), f, seed).x - d0
  ));
}
vec3 figPal(float seed, float matId) {
  float hue = fract(figH(seed + matId * 1.71) * 0.92 + figH(seed) * 0.15);
  float sat = mix(0.55, 1.0, figH(seed + matId + 8.2));
  float val = mix(0.7, 1.0, figH(seed + matId + 9.1));
  if (figH(seed + 0.07) > 0.86) {
    sat = mix(0.0, 0.18, figH(seed + matId));
    val = mix(0.35, 0.95, figH(seed + matId + 1.0));
  }
  if (matId > 4.9 && matId < 5.4) {
    hue = fract(hue + 0.08);
    sat = mix(0.2, 0.7, figH(seed + 11.2));
    val = mix(0.88, 1.0, figH(seed + 11.3));
  }
  if (matId > 5.4 && matId < 5.9) {
    sat = mix(0.0, 0.45, figH(seed + 11.4));
    val = mix(0.04, 0.16, figH(seed + 11.5));
  }
  if (matId > 6.4 && matId < 6.8) {
    sat = mix(0.15, 0.55, figH(seed + 11.6));
    val = mix(0.2, 0.4, figH(seed + 11.7));
  }
  if (matId > 6.8 && matId < 7.3) {
    hue = fract(hue + 0.12);
    sat = mix(0.55, 1.0, figH(seed + 11.8));
    val = mix(0.55, 0.95, figH(seed + 11.9));
  }
  if (matId > 7.8) {
    sat = mix(0.0, 0.22, figH(seed + 12.1));
    val = mix(0.8, 1.0, figH(seed + 12.2));
  }
  return hsv2rgb(vec3(hue, sat, val));
}
vec3 figCrowdOff(int i, float n, float seed) {
  if (n < 1.5) return vec3(0.0);
  if (n < 2.5) return vec3((float(i) * 2.0 - 1.0) * 0.78, 0.02, 0.06 * float(i));
  float a = (float(i) + 0.18) / n * 6.2831853;
  float r = mix(0.62, 1.08, figH(seed + float(i) * 4.7 + 2.2));
  return vec3(cos(a) * r, 0.0, sin(a) * r * 0.38);
}
vec3 figPlace(int i, float n, float seed, float scatter) {
  vec3 crowd = figCrowdOff(i, n, seed);
  crowd.z += (figH(seed + float(i) * 3.3 + 8.8) - 0.5) * 0.16;
  vec3 rnd = vec3(
    (figH(seed + float(i) * 11.7 + 1.1) * 2.0 - 1.0) * 1.48,
    (figH(seed + float(i) * 11.7 + 2.4) * 2.0 - 1.0) * 0.64,
    mix(-1.35, 0.95, figH(seed + float(i) * 11.7 + 3.9))
  );
  return mix(crowd, rnd, clamp(scatter, 0.0, 1.0));
}
vec4 figureShade(vec3 p, vec3 rd, Fig f, float seed, float matId) {
  vec3 n = figNormal(p, f, seed);
  vec3 l = normalize(vec3(0.45, 0.85, 0.4));
  float dif = 0.68 + 0.32 * max(0.0, dot(n, l));
  float rim = pow(1.0 - max(0.0, dot(n, -rd)), 3.0) * 0.16;
  float spec = pow(max(0.0, dot(n, normalize(l - rd))), 14.0) * 0.18;
  vec3 albedo = figPal(seed, matId);
  vec3 col = albedo * dif + albedo * rim + vec3(spec);
  float outline = smoothstep(0.18, 0.02, abs(dot(n, -rd)));
  col = mix(col, albedo * 0.55, outline * 0.28);
  return vec4(col, 1.0);
}
bool figRaySphere(vec3 ro, vec3 rd, vec3 c, float r, out float tEnter) {
  vec3 oc = ro - c;
  float b = dot(oc, rd);
  float h = b * b - dot(oc, oc) + r * r;
  tEnter = 0.0;
  if (h < 0.0) return false;
  tEnter = max(0.0, -b - sqrt(h));
  return tEnter < 8.0;
}
vec4 figureRender(vec2 uv, float seed, float time, float sizeMul, float count, float scatter) {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 q = (uv - vec2(0.5, 0.42)) * vec2(aspect, 1.0);
  vec4 miss = vec4(0.0);
  float n = clamp(count, 1.0, 4.0);
  float spread = max(step(1.5, n), scatter);
  if (dot(q, q) > mix(0.7, 2.2, spread) && uv.y > 0.1) return miss;
  float camZ = mix(4.55, 1.72, clamp((sizeMul - 0.25) / 2.25, 0.0, 1.0));
  float camA = figH(seed + 0.5) * 0.22 - 0.11;
  vec3 ro = figRotY(vec3(0.0, 0.42, camZ), camA);
  vec3 ta = vec3(0.0, 0.32, 0.0);
  vec3 ww = normalize(ta - ro);
  vec3 uu = normalize(cross(vec3(0.0, 1.0, 0.0), ww));
  vec3 vv = cross(ww, uu);
  vec3 rd = normalize(q.x * uu + q.y * vv + 1.35 * ww);
  int k = int(n + 0.5);
  float stepF = mix(10.0, 14.0, min(uQuality, 1.0));
  if (uQuality > 1.5) stepF = 16.0;
  if (n > 1.5) stepF -= 2.0;
  if (n > 2.5) stepF -= 2.0;
  int steps = int(max(stepF, 8.0));
  float bestT = 9.0;
  float bestH = 1e5;
  float bestM = 0.0;
  float bestSeed = seed;
  vec3 bestOff = vec3(0.0);
  Fig bestF = figRoll(seed, time);
  for (int i = 0; i < 4; i++) {
    if (i >= k) break;
    float sid = seed + float(i) * 17.31 + 0.07;
    vec3 off = figPlace(i, n, seed, scatter);
    float tEnter;
    if (!figRaySphere(ro, rd, off, 1.55, tEnter)) continue;
    Fig f = figRoll(sid, time);
    float tRay = tEnter;
    vec2 hit = vec2(1e5, 0.0);
    float minD = 1e5;
    float minT = tEnter;
    float minM = 0.0;
    for (int s = 0; s < 16; s++) {
      if (s >= steps) break;
      vec3 p = ro - off + rd * tRay;
      hit = figureHit(p, f, sid);
      if (hit.x < minD) {
        minD = hit.x;
        minT = tRay;
        minM = hit.y;
      }
      if (hit.x < 0.003 || tRay > 8.0) break;
      tRay += max(hit.x * 0.82, 0.012);
    }
    if (minD < 0.05 && minT < bestT) {
      bestT = minT;
      bestH = minD;
      bestM = minM;
      bestSeed = sid;
      bestOff = off;
      bestF = f;
    }
  }
  if (bestH > 0.05 || bestT > 8.0) return miss;
  vec3 p = ro - bestOff + rd * bestT;
  return figureShade(p, rd, bestF, bestSeed, bestM);
}
`;
