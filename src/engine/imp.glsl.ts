/** Squat horned cousin of the idol. Compiled only when Form is Imp. Uses fig* helpers from DANCER_GLSL. */
export const IMP_GLSL = `
Fig impRoll(float seed, float time) {
  Fig f = figRoll(seed, time);
  f.ts = vec3(
    mix(0.22, 0.5, figH(seed + 1.2)),
    mix(0.1, 0.24, pow(figH(seed + 1.3), 0.9)),
    mix(0.16, 0.36, figH(seed + 1.4))
  );
  f.sx = mix(0.85, 1.35, figH(seed + 1.22));
  f.sz = mix(0.9, 1.28, figH(seed + 1.26));
  f.hs = mix(0.34, 0.68, pow(figH(seed + 2.3), 0.58));
  f.neck = mix(0.0, 0.14, figH(seed + 2.05));
  f.horn = 1.0;
  f.tail = 1.0;
  f.ears = 1.0;
  f.tusks = step(0.32, figH(seed + 9.1));
  f.petals = 0.0;
  f.skirt = 0.0;
  f.halo = 0.0;
  f.antenna = 0.0;
  f.pack = 0.0;
  f.orb = step(0.8, figH(seed + 5.8));
  f.blush = step(0.5, figH(seed + 0.74));
  f.extraLeg = 0.0;
  f.arms = 2.0;
  f.nEyes = figH(seed + 6.1) > 0.62 ? 1.0 : (figH(seed + 6.12) > 0.5 ? 3.0 : 2.0);
  f.eyeY = f.hs * mix(0.04, 0.22, figH(seed + 6.2));
  f.eyeZ = -f.hs * mix(0.72, 1.05, figH(seed + 6.3));
  f.eyeSpread = f.hs * mix(0.22, 0.7, figH(seed + 6.4));
  f.eyeR = f.hs * mix(0.12, 0.28, figH(seed + 6.5));
  f.eyeSq = mix(0.35, 0.85, figH(seed + 6.55));
  f.lean += 0.18;
  f.kickAmt *= 1.12;
  return f;
}
vec2 impFace(vec3 hp, Fig f) {
  float hs = f.hs;
  vec2 d = vec2(figBox(hp - vec3(0.0, hs * 0.04, -hs * 0.62), vec3(hs * 0.92, hs * 0.72, hs * 0.18)), 2.4);
  d = figMin(d, vec2(figBox(hp - vec3(0.0, hs * 0.08, -hs * 0.88), vec3(hs * 0.78, hs * 0.22, hs * 0.1)), 2.2));
  for (int i = 0; i < 3; i++) {
    if (float(i) >= f.nEyes) break;
    float xi = 0.0;
    if (f.nEyes > 1.5 && f.nEyes < 2.5) xi = float(i) < 0.5 ? -f.eyeSpread : f.eyeSpread;
    if (f.nEyes > 2.5) xi = (float(i) - 1.0) * f.eyeSpread;
    vec3 ep = hp - vec3(xi, f.eyeY, f.eyeZ);
    ep.y *= f.eyeSq;
    d = figMin(d, vec2(figBox(ep, vec3(f.eyeR * 1.35, f.eyeR * 0.42, f.eyeR * 0.55)), 5.0));
    d = figMin(d, vec2(length(ep - vec3(0.0, 0.0, -f.eyeR * 0.35)) - f.eyeR * 0.38, 5.6));
  }
  d = figMin(d, vec2(figBox(hp - vec3(0.0, -hs * 0.18, -hs * 1.05), vec3(hs * 0.42, hs * 0.12, hs * 0.28)), 7.0));
  d = figMin(d, vec2(figCap(hp, vec3(0.0, -hs * 0.08, -hs * 0.5), vec3(0.0, -hs * 0.22, -hs * 1.55), hs * 0.11), 6.0));
  if (f.ears > 0.5) {
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.55, hs * 0.35, 0.1), vec3(-hs * 1.35, hs * 1.15, 0.18), hs * 0.08), 7.5));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.55, hs * 0.32, 0.1), vec3(hs * 1.28, hs * 1.08, 0.12), hs * 0.075), 7.5));
  }
  if (f.tusks > 0.5) {
    d = figMin(d, vec2(figCap(hp, vec3(-hs * 0.22, -hs * 0.22, -hs * 0.7), vec3(-hs * 0.32, -hs * 0.7, -hs * 1.15), hs * 0.05), 8.0));
    d = figMin(d, vec2(figCap(hp, vec3(hs * 0.22, -hs * 0.22, -hs * 0.7), vec3(hs * 0.32, -hs * 0.7, -hs * 1.15), hs * 0.05), 8.0));
  }
  if (f.blush > 0.5) {
    d = figMin(d, vec2(length(hp - vec3(-hs * 0.5, -hs * 0.02, f.eyeZ * 0.55)) - hs * 0.11, 6.9));
    d = figMin(d, vec2(length(hp - vec3(hs * 0.5, -hs * 0.02, f.eyeZ * 0.55)) - hs * 0.11, 6.9));
  }
  return d;
}
vec2 impHit(vec3 p, Fig f, float seed) {
  p.x += f.slide;
  p = figRotY(p, f.facing + f.spin + f.sway);
  p = figRotZ(p, f.lean);
  p.y -= f.bob;
  p.x *= f.sx;
  p.z *= f.sz;
  vec3 belly = p - vec3(0.0, -f.ts.y * 0.15, 0.04);
  vec2 d = vec2(figBox(belly, vec3(f.ts.x * 1.15, f.ts.y, f.ts.z * 1.05)), 1.0);
  d = figMin(d, vec2(figOcta(belly * vec3(0.85, 1.15, 0.9), mix(0.28, 0.42, figH(seed + 1.5))), 1.0));
  vec3 collar = p - vec3(0.0, f.ts.y * 0.72, 0.0);
  float ruff = abs(length(collar.xz) - f.ts.x * 1.05) - 0.05;
  d = figMin(d, vec2(max(ruff, abs(collar.y) - 0.045), 6.9));
  if (f.neck > 0.04) {
    d = figMin(d, vec2(figCap(p, vec3(0.0, f.ts.y * 0.55, 0.0), vec3(0.0, f.ts.y + f.neck, 0.0), 0.07), 1.0));
  }
  vec3 hp = p - vec3(0.0, f.ts.y + mix(0.2, 0.32, figH(seed + 2.1)) + f.neck, 0.0);
  hp = figRotZ(hp, sin(f.t * 4.1) * 0.08);
  hp = figRotX(hp, cos(f.t * 3.2) * 0.05 - f.peck * 0.6);
  d = figMin(d, vec2(figBox(hp, vec3(f.hs * 1.05, f.hs * 0.92, f.hs * 0.78)), 2.0));
  d = figMin(d, vec2(figOcta(hp * vec3(1.05, 0.82, 1.1), f.hs * 1.15), 2.0));
  if (length(hp) < f.hs * 2.9) d = figMin(d, impFace(hp, f));
  float hCurl = 0.35 + 0.15 * sin(f.t * 2.2);
  d = figMin(d, vec2(figCap(hp, vec3(-f.hs * 0.28, f.hs * 0.55, 0.05), vec3(-f.hs * (0.85 + hCurl), f.hs * 1.65, 0.22), 0.055), 4.0));
  d = figMin(d, vec2(figCap(hp, vec3(f.hs * 0.28, f.hs * 0.55, 0.05), vec3(f.hs * (0.8 + hCurl), f.hs * 1.58, 0.18), 0.05), 4.0));
  float legLen = mix(0.22, 0.36, figH(seed + 3.3));
  float legR = mix(0.055, 0.1, figH(seed + 3.4));
  for (int i = 0; i < 2; i++) {
    float side = float(i) < 0.5 ? -1.0 : 1.0;
    float kick = sin(f.t * f.kickHz + float(i) * 3.14159) * f.kickAmt;
    vec3 lp = p - vec3(side * f.ts.x * 0.72, -f.ts.y * 0.72, 0.06);
    lp = figRotX(lp, 0.55 + kick);
    lp = figRotZ(lp, side * 0.22);
    d = figMin(d, vec2(figCap(lp, vec3(0.0), vec3(0.0, -legLen, 0.08), legR), 3.0));
    d = figMin(d, vec2(figBox(lp - vec3(0.0, -legLen, 0.1), vec3(0.09, 0.035, 0.14)), 3.0));
  }
  float armR = mix(0.04, 0.08, figH(seed + 4.5));
  for (int i = 0; i < 2; i++) {
    float side = float(i) < 0.5 ? -1.0 : 1.0;
    float wave = sin(f.t * mix(4.2, 7.4, figH(seed + 4.1)) + float(i) * 1.9);
    vec3 ap = p - vec3(side * f.ts.x * 1.05, f.ts.y * 0.12, 0.0);
    ap = figRotZ(ap, side * (0.85 + wave * 0.55));
    vec3 tip = vec3(side * 0.28, -0.06, 0.12);
    d = figMin(d, vec2(figCap(ap, vec3(0.0), tip, armR), 4.0));
    d = figMin(d, vec2(figBox(ap - tip, vec3(0.07, 0.04, 0.09)), 4.0));
  }
  vec3 tb = vec3(0.0, -f.ts.y * 0.35, f.ts.z * 0.55);
  vec3 tm = tb + vec3(sin(f.t * 3.4) * 0.22, 0.12, -0.32);
  vec3 te = tm + vec3(sin(f.t * 3.4 + 0.8) * 0.18, -0.08, -0.28);
  d = figMin(d, vec2(figCap(p, tb, tm, 0.055), 1.5));
  d = figMin(d, vec2(figCap(p, tm, te, 0.045), 1.5));
  d = figMin(d, vec2(figOcta(p - te, 0.09), 6.9));
  if (f.orb > 0.5) d = figMin(d, vec2(length(p - vec3(0.28, 0.02, 0.16)) - 0.09, 4.0));
  float sMin = min(f.sx, f.sz);
  d.x *= sMin;
  return d;
}
vec3 impNormal(vec3 p, Fig f, float seed) {
  float e = 0.02;
  float d0 = impHit(p, f, seed).x;
  return normalize(vec3(
    impHit(p + vec3(e, 0.0, 0.0), f, seed).x - d0,
    impHit(p + vec3(0.0, e, 0.0), f, seed).x - d0,
    impHit(p + vec3(0.0, 0.0, e), f, seed).x - d0
  ));
}
vec4 impShade(vec3 p, vec3 rd, Fig f, float seed, float matId) {
  vec3 n = impNormal(p, f, seed);
  vec3 l = normalize(vec3(0.35, 0.95, 0.55));
  float ndv = max(0.0, dot(n, -rd));
  float dif = 0.86 + 0.14 * max(0.0, dot(n, l));
  float rim = pow(1.0 - ndv, 2.4) * 0.32;
  float spec = pow(max(0.0, dot(n, normalize(l - rd))), 16.0) * 0.14;
  vec3 albedo = figPal(seed + 3.7, matId);
  vec3 col = albedo * dif + albedo * rim + vec3(spec);
  float ink = 1.0 - smoothstep(0.1, 0.36, ndv);
  col = mix(col, vec3(0.04, 0.015, 0.04), ink * 0.92);
  return vec4(col, 1.0);
}
vec4 impRender(vec2 uv, float seed, float time, float sizeMul, float count, float scatter, float echo, float move) {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 q = (uv - vec2(0.5, 0.42)) * vec2(aspect, 1.0);
  vec4 miss = vec4(0.0);
  float n = clamp(count, 1.0, 4.0);
  float spread = max(step(1.5, n), scatter);
  if (move < 0.5 && dot(q, q) > mix(0.7, 2.2, spread) && uv.y > 0.1) return miss;
  float camZ = mix(4.55, 1.72, clamp((sizeMul - 0.25) / 2.25, 0.0, 1.0));
  float camA = figH(seed + 0.5) * 0.22 - 0.11;
  vec3 ro = figRotY(vec3(0.0, 0.36, camZ), camA);
  vec3 ta = vec3(0.0, 0.22, 0.0);
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
  Fig bestF = impRoll(seed, time);
  float trailSid = seed;
  vec3 trailOff = vec3(0.0);
  float trailEnter = 0.0;
  bool trail = false;
  for (int i = 0; i < 4; i++) {
    if (i >= k) break;
    float sid = seed + float(i) * 17.31 + 0.07;
    vec3 off = figCarry(figPlace(i, n, seed, scatter), sid, time, move);
    float tEnter;
    if (!figRaySphere(ro, rd, off, 1.95, tEnter)) continue;
    Fig f = figSoften(impRoll(sid, time), move);
    float tRay = tEnter;
    vec2 hit = vec2(1e5, 0.0);
    float minD = 1e5;
    float minT = tEnter;
    float minM = 0.0;
    for (int s = 0; s < 16; s++) {
      if (s >= steps) break;
      vec3 p = ro - off + rd * tRay;
      hit = impHit(p, f, sid);
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
    } else if (!trail) {
      trail = true;
      trailSid = sid;
      trailOff = off;
      trailEnter = tEnter;
    }
  }
  if (bestH <= 0.05 && bestT <= 8.0) {
    vec3 p = ro - bestOff + rd * bestT;
    return impShade(p, rd, bestF, bestSeed, bestM);
  }
  if (echo < 0.03 || !trail) return miss;
  Fig gf = impRoll(trailSid, time - mix(0.1, 0.2, echo));
  float tRay = trailEnter;
  float minD = 1e5;
  float minM = 0.0;
  for (int s = 0; s < 6; s++) {
    vec2 hit = impHit(ro - trailOff + rd * tRay, gf, trailSid);
    if (hit.x < minD) {
      minD = hit.x;
      minM = hit.y;
    }
    if (hit.x < 0.004 || tRay > 8.0) break;
    tRay += max(hit.x * 0.85, 0.02);
  }
  if (minD > 0.06) return miss;
  vec3 albedo = figPal(trailSid + 3.7, minM);
  vec3 hsv = rgb2hsv(albedo);
  hsv.x = fract(hsv.x + 0.18);
  hsv.z = min(1.0, hsv.z * 1.06);
  return vec4(hsv2rgb(hsv) * 0.9, clamp(echo * 0.78, 0.22, 0.82));
}
`;

export const IMP_MINI_GLSL = `
Fig impWildMini(float seed, float time, Fig lead) {
  Fig f = impRoll(seed, time);
  f.t = lead.t;
  f.style = lead.style;
  f.sway = lead.sway;
  f.bob = lead.bob;
  f.spin = lead.spin;
  f.lean = lead.lean;
  f.slide = lead.slide;
  f.peck = lead.peck;
  f.kickHz = lead.kickHz;
  f.kickAmt = lead.kickAmt;
  f.facing = lead.facing;
  return f;
}
vec4 impRenderMini(vec2 uv, float seed, float time, float sizeMul, float count, float echo, float move) {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 q = (uv - vec2(0.5, 0.42)) * vec2(aspect, 1.0);
  vec4 miss = vec4(0.0);
  float n = mix(14.0, 24.0, clamp((count - 1.0) / 3.0, 0.0, 1.0));
  n = floor(n + 0.5);
  float figScale = mix(0.2, 0.34, clamp((sizeMul - 0.25) / 2.25, 0.0, 1.0));
  float camZ = 4.05;
  float camA = figH(seed + 0.5) * 0.08 - 0.04;
  vec3 ro = figRotY(vec3(0.0, 0.36, camZ), camA);
  vec3 ta = vec3(0.0, 0.22, 0.0);
  vec3 ww = normalize(ta - ro);
  vec3 uu = normalize(cross(vec3(0.0, 1.0, 0.0), ww));
  vec3 vv = cross(ww, uu);
  vec3 rd = normalize(q.x * uu + q.y * vv + 1.35 * ww);
  int k = int(n + 0.5);
  float stepF = mix(11.0, 14.0, min(uQuality, 1.0));
  if (uQuality > 1.5) stepF = 16.0;
  int steps = int(max(stepF, 10.0));
  float bestT = 9.0;
  float bestH = 1e5;
  float bestM = 0.0;
  float bestSeed = seed;
  vec3 bestOff = vec3(0.0);
  float bestSc = figScale;
  Fig lead = figSoften(impRoll(seed, time), move);
  Fig bestF = impWildMini(seed, time, lead);
  float trailSid = seed;
  vec3 trailOff = vec3(0.0);
  float trailEnter = 0.0;
  float trailSc = figScale;
  bool trail = false;
  for (int i = 0; i < 24; i++) {
    if (i >= k) break;
    float sid = seed + float(i) * 91.73 + 13.1 + figH(seed * 0.11 + float(i) + 2.3) * 47.0;
    float sc = figScale * mix(0.92, 1.1, figH(sid + 0.61));
    vec3 off = figCarry(figMiniPlace(i, n, seed, aspect), sid, time, move);
    float tEnter;
    if (!figRaySphere(ro, rd, off, 2.35 * sc, tEnter)) continue;
    Fig f = impWildMini(sid, time, lead);
    float tRay = tEnter;
    vec2 hit = vec2(1e5, 0.0);
    float minD = 1e5;
    float minT = tEnter;
    float minM = 0.0;
    for (int s = 0; s < 16; s++) {
      if (s >= steps) break;
      vec3 p = (ro - off + rd * tRay) / sc;
      hit = impHit(p, f, sid);
      hit.x *= sc;
      if (hit.x < minD) {
        minD = hit.x;
        minT = tRay;
        minM = hit.y;
      }
      if (hit.x < 0.0025 || tRay > 8.0) break;
      tRay += max(hit.x * 0.82, 0.01);
    }
    if (minD < 0.045 && minT < bestT) {
      bestT = minT;
      bestH = minD;
      bestM = minM;
      bestSeed = sid;
      bestOff = off;
      bestF = f;
      bestSc = sc;
    } else if (!trail) {
      trail = true;
      trailSid = sid;
      trailOff = off;
      trailEnter = tEnter;
      trailSc = sc;
    }
  }
  if (bestH <= 0.045 && bestT <= 8.0) {
    vec3 p = (ro - bestOff + rd * bestT) / bestSc;
    return impShade(p, rd, bestF, bestSeed, bestM);
  }
  if (echo < 0.03 || !trail) return miss;
  Fig leadGhost = impRoll(seed, time - mix(0.1, 0.2, echo));
  Fig gf = impWildMini(trailSid, time - mix(0.1, 0.2, echo), leadGhost);
  float tRay = trailEnter;
  float minD = 1e5;
  float minM = 0.0;
  for (int s = 0; s < 5; s++) {
    vec2 hit = impHit((ro - trailOff + rd * tRay) / trailSc, gf, trailSid);
    hit.x *= trailSc;
    if (hit.x < minD) {
      minD = hit.x;
      minM = hit.y;
    }
    if (hit.x < 0.003 || tRay > 8.0) break;
    tRay += max(hit.x * 0.85, 0.015);
  }
  if (minD > 0.05) return miss;
  vec3 albedo = figPal(trailSid + 3.7, minM);
  vec3 hsv = rgb2hsv(albedo);
  hsv.x = fract(hsv.x + 0.18);
  hsv.z = min(1.0, hsv.z * 1.06);
  return vec4(hsv2rgb(hsv) * 0.9, clamp(echo * 0.78, 0.22, 0.82));
}
`;
