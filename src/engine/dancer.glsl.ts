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
float figDanceT(float seed, float t) {
  float style = figH(seed + 0.11);
  if (style > 0.72) {
    float fps = mix(5.0, 11.0, figH(seed + 0.19));
    return floor(t * fps) / fps;
  }
  return t;
}
vec2 figureMap(vec3 p, float seed, float t) {
  t = figDanceT(seed, t);
  float s = 1.0;
  float sway = sin(t * 3.4) * mix(0.08, 0.28, figH(seed + 0.31));
  float bob = abs(sin(t * 6.6)) * mix(0.02, 0.12, figH(seed + 0.37));
  float spin = t * mix(-1.6, 1.6, figH(seed + 0.43));
  p = figRotY(p, spin + sway);
  p.y -= bob;
  float torsoKind = figH(seed + 1.1);
  vec3 ts = vec3(
    mix(0.16, 0.32, figH(seed + 1.2)),
    mix(0.22, 0.42, figH(seed + 1.3)),
    mix(0.12, 0.24, figH(seed + 1.4))
  );
  vec2 d;
  if (torsoKind < 0.34) d = vec2(figBox(p, ts), 1.0);
  else if (torsoKind < 0.68) d = vec2(figOcta(p * vec3(1.0, 0.75, 1.1), mix(0.28, 0.48, figH(seed + 1.5))), 1.0);
  else d = vec2(figCap(p, vec3(0.0, ts.y * 0.55, 0.0), vec3(0.0, -ts.y * 0.7, 0.0), ts.x * 0.72), 1.0);
  vec3 hp = p - vec3(0.0, ts.y + mix(0.16, 0.28, figH(seed + 2.1)), 0.0);
  hp = figRotZ(hp, sin(t * 4.1) * 0.28);
  hp = figRotX(hp, cos(t * 3.2) * 0.12);
  float headKind = figH(seed + 2.2);
  float hs = mix(0.14, 0.26, figH(seed + 2.3));
  if (headKind < 0.3) d = figMin(d, vec2(figOcta(hp, hs * 1.35), 2.0));
  else if (headKind < 0.6) d = figMin(d, vec2(figBox(hp, vec3(hs, hs * 1.05, hs * 0.85)), 2.0));
  else if (headKind < 0.82) {
    d = figMin(d, vec2(figOcta(hp - vec3(hs * 0.55, 0.0, 0.0), hs), 2.0));
    d = figMin(d, vec2(figOcta(hp + vec3(hs * 0.55, 0.0, 0.0), hs * 0.92), 2.2));
  } else {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, -hs * 0.2, 0.0), vec3(0.0, hs * 1.4, 0.0), hs * 0.45), 2.0));
  }
  vec3 eyeOff = vec3(hs * 0.32, hs * 0.08, -hs * 0.7);
  d = figMin(d, vec2(length(hp - eyeOff) - hs * 0.13, 5.0));
  d = figMin(d, vec2(length(hp - vec3(-eyeOff.x, eyeOff.y, eyeOff.z)) - hs * 0.13, 5.0));
  if (figH(seed + 2.8) > 0.55) {
    d = figMin(d, vec2(figCap(hp, vec3(0.0, hs * 0.6, 0.0), vec3(0.0, hs * 1.7, 0.0), mix(0.03, 0.08, figH(seed + 2.9))), 4.0));
  }
  for (int i = 0; i < 2; i++) {
    float side = float(i) < 0.5 ? -1.0 : 1.0;
    float kick = sin(t * mix(4.4, 6.2, figH(seed + 3.1)) + float(i) * 3.14159) * mix(0.25, 0.7, figH(seed + 3.2));
    vec3 lp = p - vec3(side * ts.x * 0.55, -ts.y * 0.55, 0.0);
    lp = figRotX(lp, 0.25 + kick);
    lp = figRotZ(lp, side * 0.12);
    d = figMin(d, vec2(figCap(lp, vec3(0.0), vec3(0.0, -mix(0.34, 0.52, figH(seed + 3.3)), 0.02), mix(0.045, 0.09, figH(seed + 3.4))), 3.0));
    d = figMin(d, vec2(figBox(lp - vec3(0.0, -mix(0.34, 0.52, figH(seed + 3.3)), 0.04), vec3(0.07, 0.04, 0.11)), 3.0));
  }
  float arms = figH(seed + 4.0) > 0.62 ? 4.0 : 2.0;
  for (int i = 0; i < 4; i++) {
    if (float(i) >= arms) break;
    float side = mod(float(i), 2.0) < 0.5 ? -1.0 : 1.0;
    float row = float(i) < 2.0 ? 0.0 : 1.0;
    float wave = sin(t * mix(3.6, 7.0, figH(seed + 4.1 + float(i))) + float(i) * 1.7);
    vec3 ap = p - vec3(side * ts.x * 0.85, ts.y * mix(0.15, 0.55, row) , 0.0);
    ap = figRotZ(ap, side * (0.4 + wave * mix(0.4, 1.1, figH(seed + 4.2))));
    ap = figRotY(ap, wave * 0.35);
    vec3 tip = vec3(side * mix(0.28, 0.52, figH(seed + 4.3)), mix(-0.05, 0.22, figH(seed + 4.4 + float(i))), 0.0);
    d = figMin(d, vec2(figCap(ap, vec3(0.0), tip, mix(0.035, 0.075, figH(seed + 4.5))), 4.0));
    d = figMin(d, vec2(figOcta(ap - tip, mix(0.05, 0.1, figH(seed + 4.6))), 4.0));
  }
  if (figH(seed + 5.1) > 0.78) {
    d = figMin(d, vec2(figBox(p - vec3(0.0, 0.0, ts.z + 0.08), vec3(0.12, 0.12, 0.08)), 1.5));
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
  if (matId > 4.5) {
    sat = mix(0.0, 0.25, figH(seed + 11.0));
    val = mix(0.05, 0.2, figH(seed + 12.0));
  }
  return hsv2rgb(vec3(hue, sat, val));
}
vec4 figureRender(vec2 uv, float seed, float time, float sizeMul) {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 q = (uv - vec2(0.5, 0.40)) * vec2(aspect, 1.0);
  vec4 miss = vec4(0.0);
  float shadow = smoothstep(0.18, 0.02, length((uv - vec2(0.5, 0.78)) * vec2(1.6, 3.2)));
  miss.rgb = vec3(0.0);
  miss.a = shadow * 0.35;
  if (dot(q, q) > 0.62 && uv.y > 0.22) return miss;
  float camZ = mix(3.15, 1.55, clamp((sizeMul - 0.4) / 2.1, 0.0, 1.0));
  float camA = figH(seed + 0.5) * 0.5 - 0.25;
  if (figH(seed + 0.55) > 0.6) camA += time * mix(-0.25, 0.25, figH(seed + 0.56));
  vec3 ro = figRotY(vec3(0.0, 0.42, camZ), camA);
  vec3 ta = vec3(0.0, 0.05, 0.0);
  vec3 ww = normalize(ta - ro);
  vec3 uu = normalize(cross(vec3(0.0, 1.0, 0.0), ww));
  vec3 vv = cross(ww, uu);
  vec3 rd = normalize(q.x * uu + q.y * vv + 1.35 * ww);
  float tRay = 0.0;
  vec2 hit = vec2(1e5, 0.0);
  float steps = mix(16.0, 28.0, uQuality);
  for (int i = 0; i < 28; i++) {
    if (float(i) >= steps) break;
    vec3 p = ro + rd * tRay;
    hit = figureMap(p, seed, time);
    if (hit.x < 0.002 || tRay > 8.0) break;
    tRay += hit.x;
  }
  if (hit.x > 0.03 || tRay > 8.0) return miss;
  vec3 p = ro + rd * tRay;
  vec3 n = figNormal(p, seed, time);
  vec3 l = normalize(vec3(0.45, 0.85, 0.4));
  float dif = max(0.18, dot(n, l));
  float rim = pow(1.0 - max(0.0, dot(n, -rd)), 2.2);
  float spec = pow(max(0.0, dot(n, normalize(l - rd))), 12.0) * 0.35;
  vec3 albedo = figPal(seed, hit.y);
  vec3 col = albedo * dif + albedo * rim * 0.45 + vec3(spec);
  float outline = smoothstep(0.35, 0.02, abs(dot(n, -rd)));
  col = mix(col, albedo * 0.12, outline * 0.85);
  float a = 1.0;
  return vec4(col, a);
}
`;
