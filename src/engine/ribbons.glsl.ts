/** Twisting 3D tapes. Compiled only into the Ribbons effect. Uses fig* helpers from DANCER_GLSL. */
export const RIBBONS_GLSL = `
float ribTorus(vec3 p, float R, float r) {
  vec2 q = vec2(length(p.xz) - R, p.y);
  return length(q) - r;
}
vec2 ribHit(vec3 p, float seed, float t, float style, float curl) {
  float twist = mix(0.7, 2.9, figH(seed + 0.31)) * curl;
  p = figRotY(p, t * mix(0.9, 2.4, figH(seed + 0.47)));
  p = figRotX(p, sin(t * 1.55 + seed) * mix(0.12, 0.38, figH(seed + 0.51)));
  p.y *= mix(0.85, 1.25, figH(seed + 0.55));
  if (style < 0.5) {
    vec3 q = figRotY(p, p.y * twist);
    float d = figBox(q, vec3(0.155, 1.28, 0.038));
    d = min(d, figBox(figRotY(p, p.y * twist * 0.55) - vec3(0.0, 0.0, 0.07), vec3(0.05, 1.08, 0.028)));
    return vec2(d, 4.0);
  }
  if (style < 1.5) {
    float d = ribTorus(p.xzy, mix(0.52, 0.72, figH(seed + 1.1)), mix(0.055, 0.1, figH(seed + 1.2)));
    vec3 flap = figRotY(p, t * 1.1) - vec3(0.62, 0.0, 0.0);
    d = min(d, figBox(flap, vec3(0.1, 0.035, 0.26)));
    return vec2(d, 8.0);
  }
  float a = p.y * twist;
  vec3 h = figRotY(p, a) - vec3(mix(0.22, 0.38, figH(seed + 1.4)), 0.0, 0.0);
  float d = figCap(h, vec3(0.0, -1.2, 0.0), vec3(0.0, 1.2, 0.0), mix(0.07, 0.11, figH(seed + 1.5)));
  d = min(d, ribTorus(p, 0.3, 0.045));
  d = min(d, figOcta(figRotY(p, a * 0.5) - vec3(0.0, 0.85, 0.0), 0.14));
  return vec2(d, 2.0);
}
vec3 ribNormal(vec3 p, float seed, float t, float style, float curl) {
  float e = 0.02;
  float d0 = ribHit(p, seed, t, style, curl).x;
  return normalize(vec3(
    ribHit(p + vec3(e, 0.0, 0.0), seed, t, style, curl).x - d0,
    ribHit(p + vec3(0.0, e, 0.0), seed, t, style, curl).x - d0,
    ribHit(p + vec3(0.0, 0.0, e), seed, t, style, curl).x - d0
  ));
}
vec4 ribShade(vec3 p, vec3 rd, float seed, float t, float style, float curl, float matId) {
  vec3 n = ribNormal(p, seed, t, style, curl);
  vec3 l = normalize(vec3(0.4, 0.92, 0.5));
  float ndv = max(0.0, dot(n, -rd));
  float dif = 0.8 + 0.2 * max(0.0, dot(n, l));
  float rim = pow(1.0 - ndv, 2.0) * 0.38;
  float spec = pow(max(0.0, dot(n, normalize(l - rd))), 18.0) * 0.2;
  vec3 albedo = figPal(seed + style * 7.3, matId);
  vec3 col = albedo * dif + albedo * rim + vec3(spec);
  float ink = 1.0 - smoothstep(0.07, 0.3, ndv);
  col = mix(col, vec3(0.04, 0.02, 0.06), ink * 0.88);
  return vec4(col, 1.0);
}
vec3 ribTrace(vec3 ro, vec3 rd, vec3 off, float sid, float t, float style, float curl, int steps, float tEnter) {
  float tRay = tEnter;
  float minD = 1e5;
  float minT = tEnter;
  float minM = 0.0;
  for (int i = 0; i < 16; i++) {
    if (i >= steps) break;
    vec2 hit = ribHit(ro - off + rd * tRay, sid, t, style, curl);
    if (hit.x < minD) {
      minD = hit.x;
      minT = tRay;
      minM = hit.y;
    }
    if (hit.x < 0.003 || tRay > 8.0) break;
    tRay += max(hit.x * 0.8, 0.014);
  }
  return vec3(minT, minD, minM);
}
vec4 ribGhosts(vec3 ro, vec3 rd, float seed, float time, float n, float scatter, float move, float style, float curl, float streak, int k) {
  vec4 acc = vec4(0.0);
  if (streak < 0.04) return acc;
  int gn = uQuality > 1.5 ? 3 : (uQuality > 0.5 ? 2 : 1);
  for (int g = 3; g >= 1; g--) {
    if (g > gn) continue;
    float delay = (0.055 + 0.11 * streak) * float(g);
    float gt = time - delay;
    for (int i = 0; i < 4; i++) {
      if (i >= k) break;
      float sid = seed + float(i) * 19.11 + 0.13;
      vec3 off = figCarry(figPlace(i, n, seed, scatter), sid, gt, move);
      float tEnter;
      if (!figRaySphere(ro, rd, off, 2.15, tEnter)) continue;
      vec3 tr = ribTrace(ro, rd, off, sid, gt, style, curl, 5, tEnter);
      if (tr.y > 0.06) continue;
      vec4 sh = ribShade(ro - off + rd * tr.x, rd, sid, gt, style, curl, tr.z);
      vec3 hsv = rgb2hsv(sh.rgb);
      hsv.x = fract(hsv.x + 0.09 * float(g));
      hsv.z *= mix(0.72, 0.94, streak);
      float ga = streak * (0.5 / float(g));
      acc.rgb += (1.0 - acc.a) * hsv2rgb(hsv) * ga;
      acc.a += (1.0 - acc.a) * ga;
    }
  }
  return acc;
}
vec4 ribbonRender(vec2 uv, float seed, float time, float sizeMul, float count, float scatter, float echo, float move, float style, float curl, float streak) {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 q = (uv - vec2(0.5, 0.42)) * vec2(aspect, 1.0);
  vec4 miss = vec4(0.0);
  float n = clamp(count, 1.0, 4.0);
  float spread = max(step(1.5, n), scatter);
  if (move < 0.5 && dot(q, q) > mix(0.85, 2.4, spread) && uv.y > 0.1) return miss;
  float camZ = mix(4.7, 1.85, clamp((sizeMul - 0.25) / 2.25, 0.0, 1.0));
  float camA = figH(seed + 0.5) * 0.2 - 0.1;
  vec3 ro = figRotY(vec3(0.0, 0.4, camZ), camA);
  vec3 ta = vec3(0.0, 0.28, 0.0);
  vec3 ww = normalize(ta - ro);
  vec3 uu = normalize(cross(vec3(0.0, 1.0, 0.0), ww));
  vec3 vv = cross(ww, uu);
  vec3 rd = normalize(q.x * uu + q.y * vv + 1.32 * ww);
  int k = int(n + 0.5);
  float stepF = mix(10.0, 14.0, min(uQuality, 1.0));
  if (uQuality > 1.5) stepF = 16.0;
  if (n > 2.5) stepF -= 2.0;
  int steps = int(max(stepF, 8.0));
  float bestT = 9.0;
  float bestH = 1e5;
  float bestM = 0.0;
  float bestSeed = seed;
  vec3 bestOff = vec3(0.0);
  float echoSid = seed;
  vec3 echoOff = vec3(0.0);
  float echoEnter = 0.0;
  bool echoHit = false;
  for (int i = 0; i < 4; i++) {
    if (i >= k) break;
    float sid = seed + float(i) * 19.11 + 0.13;
    vec3 off = figCarry(figPlace(i, n, seed, scatter), sid, time, move);
    float tEnter;
    if (!figRaySphere(ro, rd, off, 2.15, tEnter)) continue;
    vec3 tr = ribTrace(ro, rd, off, sid, time, style, curl, steps, tEnter);
    if (tr.y < 0.055 && tr.x < bestT) {
      bestT = tr.x;
      bestH = tr.y;
      bestM = tr.z;
      bestSeed = sid;
      bestOff = off;
    } else if (!echoHit) {
      echoHit = true;
      echoSid = sid;
      echoOff = off;
      echoEnter = tEnter;
    }
  }
  vec4 ghosts = ribGhosts(ro, rd, seed, time, n, spread, move, style, curl, streak, k);
  if (bestH <= 0.055 && bestT <= 8.0) {
    vec4 live = ribShade(ro - bestOff + rd * bestT, rd, bestSeed, time, style, curl, bestM);
    ghosts.rgb += (1.0 - ghosts.a) * live.rgb;
    ghosts.a += (1.0 - ghosts.a);
    return ghosts;
  }
  if (ghosts.a > 0.03) return ghosts;
  if (echo < 0.03 || !echoHit) return miss;
  vec3 tr = ribTrace(ro, rd, echoOff, echoSid, time - mix(0.1, 0.2, echo), style, curl, 6, echoEnter);
  if (tr.y > 0.07) return miss;
  vec3 albedo = figPal(echoSid, tr.z);
  vec3 hsv = rgb2hsv(albedo);
  hsv.x = fract(hsv.x + 0.18);
  return vec4(hsv2rgb(hsv) * 0.88, clamp(echo * 0.74, 0.2, 0.8));
}
`;
