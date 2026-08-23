/** Faceted candy orbs that bounce. Compiled only into the Orbs effect. Uses fig* helpers from DANCER_GLSL. */
export const ORBS_GLSL = `
vec2 orbHit(vec3 p, float seed, float style) {
  if (style < 0.5) {
    float d = length(p) - mix(0.36, 0.46, figH(seed + 1.1));
    vec3 q = abs(p);
    d = mix(d, figOcta(q, 0.48), 0.42);
    d = min(d, length(p - vec3(0.22, 0.18, 0.12)) - 0.12);
    return vec2(d, 4.0);
  }
  if (style < 1.5) {
    vec3 q = abs(p);
    q = figRotY(q, 0.785398);
    q = abs(q) - 0.04;
    q = figRotZ(q, 0.61548);
    q = abs(q);
    return vec2(figOcta(q, mix(0.42, 0.54, figH(seed + 1.3))), 8.0);
  }
  float d = figOcta(p, 0.3);
  d = min(d, figOcta(p * vec3(0.24, 1.85, 0.24), 0.4));
  d = min(d, figOcta(p * vec3(1.85, 0.24, 0.24), 0.4));
  d = min(d, figOcta(p * vec3(0.24, 0.24, 1.85), 0.4));
  return vec2(d, 2.0);
}
vec3 orbHop(vec3 home, float sid, float time, float move, float bounce) {
  vec3 off = figCarry(home, sid, time, move);
  float hz = mix(2.5, 4.6, figH(sid + 0.71));
  float hop = abs(sin(time * hz + sid * 2.1));
  off.y += hop * hop * bounce * mix(0.38, 1.08, figH(sid + 0.73));
  off.x += sin(time * hz * 0.5 + sid) * bounce * 0.08;
  return off;
}
vec3 orbNormal(vec3 p, float seed, float style) {
  float e = 0.018;
  float d0 = orbHit(p, seed, style).x;
  return normalize(vec3(
    orbHit(p + vec3(e, 0.0, 0.0), seed, style).x - d0,
    orbHit(p + vec3(0.0, e, 0.0), seed, style).x - d0,
    orbHit(p + vec3(0.0, 0.0, e), seed, style).x - d0
  ));
}
vec4 orbShade(vec3 p, vec3 rd, float seed, float style, float matId) {
  vec3 n = orbNormal(p, seed, style);
  vec3 l = normalize(vec3(0.32, 0.98, 0.48));
  float ndv = max(0.0, dot(n, -rd));
  float dif = 0.78 + 0.22 * max(0.0, dot(n, l));
  float rim = pow(1.0 - ndv, 2.4) * mix(0.28, 0.46, step(1.5, style));
  float spec = pow(max(0.0, dot(n, normalize(l - rd))), mix(16.0, 36.0, step(0.5, style))) * mix(0.18, 0.4, step(0.5, style));
  vec3 albedo = figPal(seed + style * 11.0, matId);
  if (style < 0.5) albedo = mix(albedo, vec3(1.0, 0.78, 0.92), 0.16);
  vec3 col = albedo * dif + albedo * rim + vec3(spec);
  float ink = 1.0 - smoothstep(0.08, mix(0.36, 0.22, step(1.5, style)), ndv);
  col = mix(col, vec3(0.05, 0.02, 0.06), ink * 0.86);
  return vec4(col, 1.0);
}
vec3 orbTrace(vec3 ro, vec3 rd, vec3 off, float sid, float style, int steps, float tEnter) {
  float tRay = tEnter;
  float minD = 1e5;
  float minT = tEnter;
  float minM = 0.0;
  for (int i = 0; i < 16; i++) {
    if (i >= steps) break;
    vec2 hit = orbHit(ro - off + rd * tRay, sid, style);
    if (hit.x < minD) {
      minD = hit.x;
      minT = tRay;
      minM = hit.y;
    }
    if (hit.x < 0.003 || tRay > 8.0) break;
    tRay += max(hit.x * 0.82, 0.012);
  }
  return vec3(minT, minD, minM);
}
vec4 orbGhosts(vec3 ro, vec3 rd, float seed, float time, float n, float scatter, float move, float style, float bounce, float streak, int k) {
  vec4 acc = vec4(0.0);
  if (streak < 0.04) return acc;
  int gn = uQuality > 1.5 ? 3 : (uQuality > 0.5 ? 2 : 1);
  for (int g = 3; g >= 1; g--) {
    if (g > gn) continue;
    float delay = (0.045 + 0.1 * streak) * float(g);
    float gt = time - delay;
    for (int i = 0; i < 4; i++) {
      if (i >= k) break;
      float sid = seed + float(i) * 23.7 + 0.19;
      vec3 off = orbHop(figPlace(i, n, seed, scatter), sid, gt, move, bounce);
      float tEnter;
      if (!figRaySphere(ro, rd, off, 1.15, tEnter)) continue;
      vec3 tr = orbTrace(ro, rd, off, sid, style, 5, tEnter);
      if (tr.y > 0.05) continue;
      vec4 sh = orbShade(ro - off + rd * tr.x, rd, sid, style, tr.z);
      vec3 hsv = rgb2hsv(sh.rgb);
      hsv.x = fract(hsv.x + 0.08 * float(g));
      hsv.z *= mix(0.7, 0.95, streak);
      float ga = streak * (0.55 / float(g));
      acc.rgb += (1.0 - acc.a) * hsv2rgb(hsv) * ga;
      acc.a += (1.0 - acc.a) * ga;
    }
  }
  return acc;
}
vec4 orbRender(vec2 uv, float seed, float time, float sizeMul, float count, float scatter, float echo, float move, float style, float bounce, float streak) {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 q = (uv - vec2(0.5, 0.42)) * vec2(aspect, 1.0);
  vec4 miss = vec4(0.0);
  float n = clamp(count, 1.0, 4.0);
  float spread = max(step(1.5, n), scatter);
  if (move < 0.5 && dot(q, q) > mix(0.7, 2.2, spread) && uv.y > 0.1) return miss;
  float camZ = mix(4.5, 1.7, clamp((sizeMul - 0.25) / 2.25, 0.0, 1.0));
  float camA = figH(seed + 0.5) * 0.18 - 0.09;
  vec3 ro = figRotY(vec3(0.0, 0.38, camZ), camA);
  vec3 ta = vec3(0.0, 0.22, 0.0);
  vec3 ww = normalize(ta - ro);
  vec3 uu = normalize(cross(vec3(0.0, 1.0, 0.0), ww));
  vec3 vv = cross(ww, uu);
  vec3 rd = normalize(q.x * uu + q.y * vv + 1.35 * ww);
  int k = int(n + 0.5);
  float stepF = mix(9.0, 13.0, min(uQuality, 1.0));
  if (uQuality > 1.5) stepF = 15.0;
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
    float sid = seed + float(i) * 23.7 + 0.19;
    vec3 off = orbHop(figPlace(i, n, seed, scatter), sid, time, move, bounce);
    float tEnter;
    if (!figRaySphere(ro, rd, off, 1.15, tEnter)) continue;
    vec3 tr = orbTrace(ro, rd, off, sid, style, steps, tEnter);
    if (tr.y < 0.05 && tr.x < bestT) {
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
  vec4 ghosts = orbGhosts(ro, rd, seed, time, n, spread, move, style, bounce, streak, k);
  if (bestH <= 0.05 && bestT <= 8.0) {
    vec4 live = orbShade(ro - bestOff + rd * bestT, rd, bestSeed, style, bestM);
    ghosts.rgb += (1.0 - ghosts.a) * live.rgb;
    ghosts.a += (1.0 - ghosts.a);
    return ghosts;
  }
  if (ghosts.a > 0.03) return ghosts;
  if (echo < 0.03 || !echoHit) return miss;
  vec3 tr = orbTrace(ro, rd, echoOff, echoSid, style, 6, echoEnter);
  if (tr.y > 0.06) return miss;
  vec3 albedo = figPal(echoSid, tr.z);
  vec3 hsv = rgb2hsv(albedo);
  hsv.x = fract(hsv.x + 0.14);
  return vec4(hsv2rgb(hsv) * 0.9, clamp(echo * 0.76, 0.2, 0.8));
}
`;
