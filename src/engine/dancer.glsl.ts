/** Sato-like low-poly idol: seed-grown figure dancing in frame center. */
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
vec2 figureFace(vec3 hp, float seed, float hs) {
  vec2 d = vec2(1e5, 0.0);
  float nEyes = 1.0 + floor(figH(seed + 6.1) * 3.0);
  float eyeY = hs * mix(-0.04, 0.14, figH(seed + 6.2));
  float eyeZ = -hs * mix(0.52, 0.98, figH(seed + 6.3));
  float eyeSpread = hs * mix(0.16, 0.58, figH(seed + 6.4));
  float eyeR = hs * mix(0.11, 0.3, figH(seed + 6.5));
  float squash = mix(0.5, 1.55, figH(seed + 6.55));
  for (int i = 0; i < 3; i++) {
    if (float(i) >= nEyes) break;
    float xi = 0.0;
    if (nEyes > 1.5 && nEyes < 2.5) xi = float(i) < 0.5 ? -eyeSpread : eyeSpread;
    if (nEyes > 2.5) xi = (float(i) - 1.0) * eyeSpread;
    float yi = eyeY;
    if (nEyes > 2.5 && abs(float(i) - 1.0) < 0.2) yi += hs * mix(0.1, 0.28, figH(seed + 6.6));
    vec3 ep = hp - vec3(xi, yi, eyeZ);
    ep.y *= squash;
    d = figMin(d, vec2(length(ep) - eyeR, 5.0));
    d = figMin(d, vec2(length(ep - vec3(mix(-0.04, 0.04, figH(seed + 6.72)) * hs, mix(-0.03, 0.03, figH(seed + 6.73)) * hs, -eyeR * 0.42)) - eyeR * mix(0.28, 0.58, figH(seed + 6.7)), 5.6));
  }
  float mouth = figH(seed + 7.0);
  if (mouth < 0.3) {
    vec3 sn = hp - vec3(0.0, hs * mix(-0.1, 0.04, figH(seed + 7.1)), -hs * mix(0.75, 1.4, figH(seed + 7.2)));
    d = figMin(d, vec2(figBox(sn, vec3(hs * mix(0.1, 0.3, figH(seed + 7.3)), hs * mix(0.07, 0.2, figH(seed + 7.4)), hs * mix(0.16, 0.42, figH(seed + 7.5)))), 6.0));
    d = figMin(d, vec2(length(sn - vec3(0.0, hs * 0.07, -hs * 0.22)) - hs * mix(0.05, 0.1, figH(seed + 7.6)), 6.5));
  } else if (mouth < 0.55) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -hs * 0.04, -hs * 0.35), vec3(0.0, hs * mix(-0.16, 0.1, figH(seed + 7.7)), -hs * mix(1.05, 1.85, figH(seed + 7.8))), hs * mix(0.035, 0.11, figH(seed + 7.9))), 7.0));
  } else if (mouth < 0.78) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -hs * 0.08, -hs * 0.45), vec3(hs * (figH(seed + 8.05) * 0.5 - 0.25), -hs * mix(0.25, 0.7, figH(seed + 8.1)), -hs * mix(0.9, 1.5, figH(seed + 8.12))), hs * mix(0.05, 0.1, figH(seed + 8.13))), 6.0));
  } else {
    d = figMin(d, vec2(figBox(hp - vec3(0.0, -hs * 0.14, -hs * 0.72), vec3(hs * mix(0.16, 0.34, figH(seed + 8.2)), hs * mix(0.035, 0.08, figH(seed + 8.21)), hs * 0.12)), 7.0));
  }
  if (figH(seed + 8.3) > 0.2) {
    for (int i = 0; i < 2; i++) {
      float side = float(i) < 0.5 ? -1.0 : 1.0;
      vec3 earA = vec3(side * hs * 0.42, hs * 0.5, hs * 0.05);
      vec3 earB = vec3(side * hs * mix(0.5, 1.15, figH(seed + 8.4)), hs * mix(0.65, 1.5, figH(seed + 8.5)), hs * mix(-0.15, 0.28, figH(seed + 8.6)));
      if (figH(seed + 8.7) > 0.62) d = figMin(d, vec2(figBox(hp - earB, vec3(hs * 0.07, hs * mix(0.12, 0.22, figH(seed + 8.8)), hs * 0.04)), 7.5));
      else d = figMin(d, vec2(figCap(hp, earA, earB, hs * mix(0.035, 0.11, figH(seed + 8.9))), 7.5));
    }
  }
  if (figH(seed + 9.1) > 0.52) {
    for (int i = 0; i < 2; i++) {
      float side = float(i) < 0.5 ? -1.0 : 1.0;
      d = figMin(d, vec2(figCap(hp, vec3(side * hs * 0.14, -hs * 0.16, -hs * 0.5), vec3(side * hs * mix(0.12, 0.28, figH(seed + 9.2)), -hs * mix(0.32, 0.55, figH(seed + 9.3)), -hs * mix(0.7, 1.05, figH(seed + 9.4))), hs * 0.032), 8.0));
    }
  }
  return d;
}
vec2 figureMap(vec3 p, float seed, float t) {
  t = figDanceT(seed, t);
  float style = figDanceStyle(seed);
  float sway = sin(t * 3.4) * mix(0.08, 0.28, figH(seed + 0.31));
  float bob = abs(sin(t * 6.6)) * mix(0.02, 0.12, figH(seed + 0.37));
  float spin = t * mix(-0.35, 0.35, figH(seed + 0.43));
  float lean = 0.0;
  float slide = 0.0;
  float peck = 0.0;
  if (style < 0.5) {
    sway = sin(t * 3.4) * mix(0.08, 0.28, figH(seed + 0.31));
  } else if (style < 1.5) {
    bob = abs(sin(t * 9.4)) * 0.045;
    sway = sin(t * 8.2) * 0.1;
    peck = 0.85 * max(0.0, sin(t * 10.5));
    spin *= 0.25;
  } else if (style < 2.5) {
    spin = t * mix(2.2, 4.6, figH(seed + 0.44));
    sway = sin(t * 1.15) * 0.42;
    bob = abs(sin(t * 3.1)) * 0.07;
  } else if (style < 3.5) {
    lean = 1.08 + 0.14 * sin(t * 2.4);
    bob = -0.2 + 0.05 * sin(t * 1.6);
    spin = t * 0.18;
  } else if (style < 4.5) {
    bob = 0.24 * max(0.0, sin(t * 5.9));
    sway = sin(t * 5.9) * 0.08;
  } else if (style < 5.5) {
    slide = sin(t * 1.85) * 0.4;
    sway = -0.2 * sign(cos(t * 1.85) + 0.0001);
    bob = abs(sin(t * 8.4)) * 0.03;
    spin *= 0.15;
  } else if (style < 6.5) {
    bob = abs(sin(t * 12.5)) * 0.055;
    sway = sin(t * 25.0) * 0.05;
    spin *= 0.2;
  } else {
    sway = sin(t * 5.6) * 0.48;
    bob = sin(t * 8.3) * 0.1;
    p = figRotX(p, sin(t * 6.1) * 0.32);
  }
  p.x += slide;
  p = figRotY(p, spin + sway);
  p = figRotZ(p, lean);
  p.y -= bob;
  p.x *= mix(0.72, 1.38, figH(seed + 1.22));
  p.z *= mix(0.78, 1.28, figH(seed + 1.26));
  float torsoKind = figH(seed + 1.1);
  vec3 ts = vec3(
    mix(0.14, 0.36, figH(seed + 1.2)),
    mix(0.18, 0.48, figH(seed + 1.3)),
    mix(0.1, 0.26, figH(seed + 1.4))
  );
  vec2 d;
  if (torsoKind < 0.34) d = vec2(figBox(p, ts), 1.0);
  else if (torsoKind < 0.68) d = vec2(figOcta(p * vec3(1.0, 0.75, 1.1), mix(0.28, 0.48, figH(seed + 1.5))), 1.0);
  else d = vec2(figCap(p, vec3(0.0, ts.y * 0.55, 0.0), vec3(0.0, -ts.y * 0.7, 0.0), ts.x * 0.72), 1.0);
  float neck = mix(0.0, 0.4, pow(figH(seed + 2.05), 1.45));
  if (neck > 0.07) {
    d = figMin(d, vec2(figCap(p, vec3(0.0, ts.y * 0.65, 0.0), vec3(0.0, ts.y + neck, 0.0), mix(0.035, 0.08, figH(seed + 2.06))), 1.0));
  }
  vec3 hp = p - vec3(0.0, ts.y + mix(0.16, 0.28, figH(seed + 2.1)) + neck, 0.0);
  hp = figRotZ(hp, sin(t * 4.1) * 0.28);
  hp = figRotX(hp, cos(t * 3.2) * 0.12 - peck);
  float headKind = figH(seed + 2.2);
  float hs = mix(0.1, 0.36, pow(figH(seed + 2.3), 0.82));
  if (figH(seed + 2.35) > 0.84) hs *= 1.5;
  if (headKind < 0.3) d = figMin(d, vec2(figOcta(hp, hs * 1.35), 2.0));
  else if (headKind < 0.6) d = figMin(d, vec2(figBox(hp, vec3(hs, hs * 1.05, hs * 0.85)), 2.0));
  else if (headKind < 0.82) {
    d = figMin(d, vec2(figOcta(hp - vec3(hs * 0.55, 0.0, 0.0), hs), 2.0));
    d = figMin(d, vec2(figOcta(hp + vec3(hs * 0.55, 0.0, 0.0), hs * 0.92), 2.2));
  } else {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -hs * 0.2, 0.0), vec3(0.0, hs * 1.4, 0.0), hs * 0.45), 2.0));
  }
  d = figMin(d, figureFace(hp, seed, hs));
  if (figH(seed + 2.8) > 0.55) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, hs * 0.6, 0.0), vec3(0.0, hs * 1.7, 0.0), mix(0.03, 0.08, figH(seed + 2.9))), 4.0));
  }
  float kickHz = mix(4.4, 6.2, figH(seed + 3.1));
  float kickAmt = mix(0.25, 0.7, figH(seed + 3.2));
  if (style > 0.5 && style < 1.5) { kickHz = mix(7.2, 10.5, figH(seed + 3.1)); kickAmt = mix(0.35, 0.85, figH(seed + 3.2)); }
  if (style > 2.5 && style < 3.5) { kickHz = mix(0.9, 2.0, figH(seed + 3.1)); kickAmt = mix(0.55, 0.95, figH(seed + 3.2)); }
  if (style > 5.5 && style < 6.5) { kickHz = mix(9.0, 14.0, figH(seed + 3.1)); kickAmt = mix(0.15, 0.4, figH(seed + 3.2)); }
  if (style > 4.5 && style < 5.5) { kickAmt *= 0.35; }
  for (int i = 0; i < 2; i++) {
    float side = float(i) < 0.5 ? -1.0 : 1.0;
    float kick = sin(t * kickHz + float(i) * 3.14159) * kickAmt;
    vec3 lp = p - vec3(side * ts.x * 0.55, -ts.y * 0.55, 0.0);
    lp = figRotX(lp, 0.25 + kick);
    lp = figRotZ(lp, side * 0.12);
    d = figMin(d, vec2(figCap(lp, vec3(0.0), vec3(0.0, -mix(0.34, 0.52, figH(seed + 3.3)), 0.02), mix(0.045, 0.09, figH(seed + 3.4))), 3.0));
    d = figMin(d, vec2(figBox(lp - vec3(0.0, -mix(0.34, 0.52, figH(seed + 3.3)), 0.04), vec3(0.07, 0.04, 0.11)), 3.0));
  }
  if (figH(seed + 3.7) > 0.76) {
    float kickM = sin(t * (kickHz * 0.85 + 0.7)) * kickAmt * 0.85;
    vec3 lp = p - vec3(0.0, -ts.y * 0.52, 0.1);
    lp = figRotX(lp, 0.18 + kickM);
    d = figMin(d, vec2(figCap(lp, vec3(0.0), vec3(0.0, -mix(0.3, 0.48, figH(seed + 3.8)), 0.02), mix(0.04, 0.08, figH(seed + 3.9))), 3.0));
  }
  float arms = figH(seed + 4.0) > 0.62 ? 4.0 : 2.0;
  if (style > 1.5 && style < 2.5) arms = 4.0;
  for (int i = 0; i < 4; i++) {
    if (float(i) >= arms) break;
    float side = mod(float(i), 2.0) < 0.5 ? -1.0 : 1.0;
    float row = float(i) < 2.0 ? 0.0 : 1.0;
    float waveHz = mix(3.6, 7.0, figH(seed + 4.1 + float(i)));
    if (style > 0.5 && style < 1.5) waveHz *= 1.45;
    if (style > 5.5 && style < 6.5) waveHz *= 1.7;
    if (style > 2.5 && style < 3.5) waveHz *= 0.35;
    float wave = sin(t * waveHz + float(i) * 1.7);
    vec3 ap = p - vec3(side * ts.x * 0.85, ts.y * mix(0.15, 0.55, row), 0.0);
    ap = figRotZ(ap, side * (0.4 + wave * mix(0.4, 1.1, figH(seed + 4.2))));
    ap = figRotY(ap, wave * 0.35);
    vec3 tip = vec3(side * mix(0.28, 0.52, figH(seed + 4.3)), mix(-0.05, 0.22, figH(seed + 4.4 + float(i))), 0.0);
    if (style > 2.5 && style < 3.5) tip.y += 0.28;
    d = figMin(d, vec2(figCap(ap, vec3(0.0), tip, mix(0.035, 0.075, figH(seed + 4.5))), 4.0));
    d = figMin(d, vec2(figOcta(ap - tip, mix(0.05, 0.1, figH(seed + 4.6))), 4.0));
  }
  if (figH(seed + 5.1) > 0.78) {
    d = figMin(d, vec2(figBox(p - vec3(0.0, 0.0, ts.z + 0.08), vec3(0.12, 0.12, 0.08)), 1.5));
  }
  if (figH(seed + 5.4) > 0.52) {
    vec3 tb = vec3(0.0, -ts.y * 0.42, ts.z * 0.4);
    vec3 te = tb + vec3(sin(t * 3.7) * 0.24, mix(-0.18, 0.38, figH(seed + 5.5)), -mix(0.2, 0.58, figH(seed + 5.6)));
    if (figH(seed + 5.65) > 0.55) te.y = abs(te.y) + 0.12;
    d = figMin(d, vec2(figCap(p, tb, te, mix(0.03, 0.075, figH(seed + 5.7))), 1.5));
  }
  if (figH(seed + 5.8) > 0.7) {
    vec3 orb = vec3(mix(-0.42, 0.42, figH(seed + 5.9)), mix(-0.05, 0.32, figH(seed + 5.95)), 0.12);
    d = figMin(d, vec2(length(p - orb) - mix(0.06, 0.14, figH(seed + 5.96)), 4.0));
  }
  return d;
}
vec3 figNormal(vec3 p, float seed, float t) {
  vec2 e = vec2(0.012, 0.0);
  vec3 n = normalize(vec3(
    figureMap(p + e.xyy, seed, t).x - figureMap(p - e.xyy, seed, t).x,
    figureMap(p + e.yxy, seed, t).x - figureMap(p - e.yxy, seed, t).x,
    figureMap(p + e.yyx, seed, t).x - figureMap(p - e.yyx, seed, t).x
  ));
  n = normalize(sign(n) * pow(abs(n) + 0.0001, vec3(0.35)));
  return n;
}
vec3 figPal(float seed, float matId) {
  float hue = fract(figH(seed + matId * 1.71) * 0.92 + figH(seed) * 0.15);
  float sat = mix(0.5, 1.0, figH(seed + matId + 8.2));
  float val = mix(0.55, 1.0, figH(seed + matId + 9.1));
  if (figH(seed + 0.07) > 0.86) {
    sat = mix(0.0, 0.18, figH(seed + matId));
    val = mix(0.12, 0.95, figH(seed + matId + 1.0));
  }
  if (matId > 4.9 && matId < 5.4) {
    hue = fract(hue + 0.08);
    sat = mix(0.15, 0.7, figH(seed + 11.2));
    val = mix(0.82, 1.0, figH(seed + 11.3));
  }
  if (matId > 5.4 && matId < 5.9) {
    sat = mix(0.0, 0.55, figH(seed + 11.4));
    val = mix(0.02, 0.18, figH(seed + 11.5));
  }
  if (matId > 6.4 && matId < 6.8) {
    sat = mix(0.1, 0.5, figH(seed + 11.6));
    val = mix(0.08, 0.28, figH(seed + 11.7));
  }
  if (matId > 6.8 && matId < 7.3) {
    hue = fract(hue + 0.12);
    sat = mix(0.55, 1.0, figH(seed + 11.8));
    val = mix(0.45, 0.95, figH(seed + 11.9));
  }
  if (matId > 7.8) {
    sat = mix(0.0, 0.22, figH(seed + 12.1));
    val = mix(0.75, 1.0, figH(seed + 12.2));
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
vec4 figureShade(vec3 p, vec3 rd, float seed, float time, float matId) {
  vec3 n = figNormal(p, seed, time);
  vec3 l = normalize(vec3(0.45, 0.85, 0.4));
  float dif = max(0.18, dot(n, l));
  float rim = pow(1.0 - max(0.0, dot(n, -rd)), 2.2);
  float spec = pow(max(0.0, dot(n, normalize(l - rd))), 12.0) * 0.35;
  vec3 albedo = figPal(seed, matId);
  vec3 col = albedo * dif + albedo * rim * 0.45 + vec3(spec);
  float outline = smoothstep(0.35, 0.02, abs(dot(n, -rd)));
  col = mix(col, albedo * 0.12, outline * 0.85);
  return vec4(col, 1.0);
}
vec4 figureRender(vec2 uv, float seed, float time, float sizeMul, float count) {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 q = (uv - vec2(0.5, 0.40)) * vec2(aspect, 1.0);
  vec4 miss = vec4(0.0);
  float shadow = smoothstep(0.22, 0.02, length((uv - vec2(0.5, 0.78)) * vec2(1.6, 3.2)));
  miss.rgb = vec3(0.0);
  miss.a = shadow * 0.35;
  float n = clamp(count, 1.0, 4.0);
  if (dot(q, q) > mix(0.62, 1.85, step(1.5, n)) && uv.y > 0.22) return miss;
  float camZ = mix(4.55, 1.72, clamp((sizeMul - 0.25) / 2.25, 0.0, 1.0));
  float camA = figH(seed + 0.5) * 0.5 - 0.25;
  if (figH(seed + 0.55) > 0.6) camA += time * mix(-0.25, 0.25, figH(seed + 0.56));
  vec3 ro = figRotY(vec3(0.0, 0.5, camZ), camA);
  vec3 ta = vec3(0.0, 0.16, 0.0);
  vec3 ww = normalize(ta - ro);
  vec3 uu = normalize(cross(vec3(0.0, 1.0, 0.0), ww));
  vec3 vv = cross(ww, uu);
  vec3 rd = normalize(q.x * uu + q.y * vv + 1.35 * ww);
  int k = int(n + 0.5);
  float stepF = mix(16.0, 28.0, uQuality);
  if (n > 1.5) stepF *= 0.78;
  if (n > 2.5) stepF *= 0.85;
  int steps = int(max(stepF, 12.0));
  float bestT = 9.0;
  float bestH = 1e5;
  float bestM = 0.0;
  float bestSeed = seed;
  vec3 bestOff = vec3(0.0);
  for (int i = 0; i < 4; i++) {
    if (i >= k) break;
    float sid = seed + float(i) * 17.31 + 0.07;
    vec3 off = figCrowdOff(i, n, seed);
    float tRay = 0.0;
    vec2 hit = vec2(1e5, 0.0);
    for (int s = 0; s < 28; s++) {
      if (s >= steps) break;
      vec3 p = ro - off + rd * tRay;
      hit = figureMap(p, sid, time);
      if (hit.x < 0.002 || tRay > 8.0) break;
      tRay += hit.x;
    }
    if (hit.x < 0.03 && tRay < 8.0 && tRay < bestT) {
      bestT = tRay;
      bestH = hit.x;
      bestM = hit.y;
      bestSeed = sid;
      bestOff = off;
    }
  }
  if (bestH > 0.03 || bestT > 8.0) return miss;
  vec3 p = ro - bestOff + rd * bestT;
  return figureShade(p, rd, bestSeed, time, bestM);
}
`;
