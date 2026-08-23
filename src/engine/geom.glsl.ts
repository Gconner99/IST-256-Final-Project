/** Morphing solids and folded crystals. Compiled only when Form is not Idol. Uses fig* helpers from DANCER_GLSL. */
export const GEOM_GLSL = `
float geomSmin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / max(k, 0.0001), 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}
float geomTorus(vec3 p, float R, float r) {
  vec2 q = vec2(length(p.xz) - R, p.y);
  return length(q) - r;
}
float geomStar(vec3 p, float s) {
  float d = figOcta(p, s);
  d = min(d, figOcta(p * vec3(0.26, 2.15, 0.26), s));
  d = min(d, figOcta(p * vec3(2.15, 0.26, 0.26), s));
  d = min(d, figOcta(p * vec3(0.26, 0.26, 2.15), s));
  return d;
}
struct Geom {
  float t, kind, twist, fold, pulse, spin, bob, sway, k, stretch;
};
Geom geomRoll(float seed, float time) {
  Geom g;
  g.t = figDanceT(seed, time + (u_audio > 0.001 ? u_audio * 0.12 : 0.0));
  g.kind = floor(figH(seed + 0.21) * 6.0);
  g.twist = mix(0.35, 1.85, figH(seed + 0.31));
  g.fold = step(0.55, figH(seed + 0.37));
  g.pulse = mix(0.9, 2.6, figH(seed + 0.41));
  g.spin = g.t * mix(1.2, 3.5, figH(seed + 0.47));
  g.bob = sin(g.t * mix(1.1, 2.6, figH(seed + 0.51))) * mix(0.04, 0.16, figH(seed + 0.53));
  g.sway = sin(g.t * 1.7) * mix(0.08, 0.28, figH(seed + 0.57));
  g.k = mix(0.06, 0.18, figH(seed + 0.61));
  g.stretch = mix(0.72, 1.35, figH(seed + 0.67));
  if (u_audio > 0.001) {
    g.pulse *= mix(1.0, 1.55, u_bass);
    g.twist += u_audio * 0.35;
    g.bob += u_bass * 0.05;
  }
  return g;
}
Geom geomSoften(Geom g, float move) {
  if (move > 1.5 && move < 2.5) {
    g.twist *= 0.35;
    g.spin *= 0.22;
    g.sway *= 0.7;
  }
  return g;
}
vec2 geomHit(vec3 p, Geom g, float seed, float form) {
  p = figRotY(p, g.spin + g.sway);
  p = figRotX(p, g.bob);
  p.y *= g.stretch;
  if (g.fold > 0.5 || form > 1.5) {
    p = abs(p);
    p = figRotZ(p, 0.6154797);
    p = abs(p);
    p -= 0.06;
    if (form > 1.5) {
      p = figRotY(p, 0.785398);
      p = abs(p) - 0.05;
    }
  }
  float tw = g.twist * p.y;
  p = figRotY(p, tw);
  float w = 0.5 + 0.5 * sin(g.t * g.pulse);
  w = clamp(w, 0.0, 1.0);
  if (u_audio > 0.001) w = mix(w, clamp(u_bass, 0.0, 1.0), 0.35);
  float kind = g.kind;
  float d0 = 1e5;
  float d1 = 1e5;
  float mat0 = 1.0;
  float mat1 = 2.0;
  if (kind < 0.5) {
    d0 = figBox(p, vec3(0.18, 0.5, 0.18));
    d1 = figOcta(p * vec3(1.0, 0.55, 1.0), mix(0.38, 0.56, figH(seed + 1.4)));
    mat1 = 4.0;
  } else if (kind < 1.5) {
    d0 = geomTorus(p, 0.38, 0.155);
    d1 = figCap(p, vec3(-0.46, -0.06, 0.0), vec3(0.46, 0.14, 0.0), 0.12);
    mat0 = 8.0;
    mat1 = 4.0;
  } else if (kind < 2.5) {
    d0 = geomStar(p, mix(0.28, 0.5, 0.5 + 0.5 * sin(g.t * 3.2)));
    d1 = figOcta(p, 0.16);
    mat0 = 4.0;
  } else if (kind < 3.5) {
    vec3 q = p;
    q.xz = abs(q.xz);
    d0 = figBox(q, vec3(0.14, 0.56, 0.14));
    d1 = figOcta(p * vec3(1.2, 0.42, 1.2), 0.42);
    mat1 = 8.0;
  } else if (kind < 4.5) {
    vec3 a = p - vec3(0.16, 0.0, 0.0);
    vec3 b = p + vec3(0.14, 0.08, 0.0);
    d0 = figBox(a, vec3(0.11, 0.36, 0.11));
    d1 = geomTorus(b, 0.22, 0.08);
    mat1 = 2.2;
  } else {
    d0 = figCap(p, vec3(-0.46, 0.0, 0.0), vec3(0.46, 0.0, 0.0), 0.065);
    d0 = min(d0, figCap(p, vec3(0.0, -0.46, 0.0), vec3(0.0, 0.46, 0.0), 0.065));
    d0 = min(d0, figCap(p, vec3(0.0, 0.0, -0.46), vec3(0.0, 0.0, 0.46), 0.065));
    d1 = geomTorus(p, 0.32, 0.075);
    mat0 = 4.0;
    mat1 = 8.0;
  }
  float d;
  float matId;
  if (form > 1.5) {
    d = min(d0, d1);
    matId = d0 < d1 ? mat0 : mat1;
    float cut = figBox(p, vec3(0.5, 0.045, 0.5));
    d = max(d, -cut * 0.92);
  } else {
    d = geomSmin(d0, d1, g.k);
    matId = mix(mat0, mat1, w);
    d = mix(d0, d, w);
  }
  return vec2(d, matId);
}
vec3 geomNormal(vec3 p, Geom g, float seed, float form) {
  float e = 0.02;
  float d0 = geomHit(p, g, seed, form).x;
  return normalize(vec3(
    geomHit(p + vec3(e, 0.0, 0.0), g, seed, form).x - d0,
    geomHit(p + vec3(0.0, e, 0.0), g, seed, form).x - d0,
    geomHit(p + vec3(0.0, 0.0, e), g, seed, form).x - d0
  ));
}
vec4 geomShade(vec3 p, vec3 rd, Geom g, float seed, float matId, float form) {
  vec3 n = geomNormal(p, g, seed, form);
  vec3 l = normalize(vec3(0.35, 0.95, 0.55));
  float ndv = max(0.0, dot(n, -rd));
  float dif = 0.82 + 0.18 * max(0.0, dot(n, l));
  float rim = pow(1.0 - ndv, 2.2) * mix(0.22, 0.4, step(1.5, form));
  float spec = pow(max(0.0, dot(n, normalize(l - rd))), mix(14.0, 28.0, step(1.5, form))) * mix(0.12, 0.28, step(1.5, form));
  vec3 albedo = figPal(seed + form * 9.1, matId);
  if (form > 1.5) {
    albedo = mix(albedo, vec3(0.85, 0.95, 1.0), 0.18);
  }
  vec3 col = albedo * dif + albedo * rim + vec3(spec);
  float ink = 1.0 - smoothstep(0.08, mix(0.34, 0.22, step(1.5, form)), ndv);
  col = mix(col, vec3(0.03, 0.015, 0.05), ink * 0.9);
  return vec4(col, 1.0);
}
vec3 geomTrace(vec3 ro, vec3 rd, vec3 off, Geom g, float sid, float form, int steps, float tEnter, float sc) {
  float tRay = tEnter;
  float minD = 1e5;
  float minT = tEnter;
  float minM = 0.0;
  float s = max(sc, 0.08);
  for (int i = 0; i < 8; i++) {
    if (i >= steps) break;
    vec2 hit = geomHit((ro - off + rd * tRay) / s, g, sid, form);
    hit.x *= s;
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
vec4 geomStreakTint(vec4 sh, float g, float streak) {
  vec3 hsv = rgb2hsv(sh.rgb);
  hsv.x = fract(hsv.x + 0.07 * g);
  hsv.z = min(1.0, hsv.z * mix(0.7, 0.94, streak));
  float ga = streak * (0.52 / max(g, 1.0));
  return vec4(hsv2rgb(hsv), clamp(ga, 0.0, 0.85));
}
vec4 geomGhosts(vec3 ro, vec3 rd, float seed, float time, float n, float scatter, float move, float form, float streak, int k) {
  vec4 acc = vec4(0.0);
  if (streak < 0.04) return acc;
  int gn = uQuality > 1.5 ? 3 : (uQuality > 0.5 ? 2 : 1);
  for (int g = 3; g >= 1; g--) {
    if (g > gn) continue;
    float delay = (0.05 + 0.11 * streak) * float(g);
    float gt = time - delay;
    for (int i = 0; i < 4; i++) {
      if (i >= k) break;
      float sid = seed + float(i) * 17.31 + 0.07;
      vec3 off = figCarry(figPlace(i, n, seed, scatter), sid, gt, move);
      float tEnter;
      if (!figRaySphere(ro, rd, off, 1.72, tEnter)) continue;
      Geom gg = geomSoften(geomRoll(sid, gt), move);
      vec3 tr = geomTrace(ro, rd, off, gg, sid, form, 5, tEnter, 1.0);
      if (tr.y > 0.055) continue;
      vec3 p = ro - off + rd * tr.x;
      vec4 tint = geomStreakTint(geomShade(p, rd, gg, sid, tr.z, form), float(g), streak);
      acc.rgb += (1.0 - acc.a) * tint.rgb * tint.a;
      acc.a += (1.0 - acc.a) * tint.a;
    }
  }
  return acc;
}
vec4 geomRender(vec2 uv, float seed, float time, float sizeMul, float count, float scatter, float echo, float move, float form, float streak) {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 q = (uv - vec2(0.5, 0.42)) * vec2(aspect, 1.0);
  vec4 miss = vec4(0.0);
  float n = clamp(count, 1.0, 4.0);
  float spread = max(step(1.5, n), scatter);
  if (move < 0.5 && dot(q, q) > mix(0.7, 2.2, spread) && uv.y > 0.1) return miss;
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
  Geom bestG = geomRoll(seed, time);
  float echoSid = seed;
  vec3 echoOff = vec3(0.0);
  float echoEnter = 0.0;
  bool echoHit = false;
  for (int i = 0; i < 4; i++) {
    if (i >= k) break;
    float sid = seed + float(i) * 17.31 + 0.07;
    vec3 off = figCarry(figPlace(i, n, seed, scatter), sid, time, move);
    float tEnter;
    if (!figRaySphere(ro, rd, off, 1.72, tEnter)) continue;
    Geom g = geomSoften(geomRoll(sid, time), move);
    float tRay = tEnter;
    vec2 hit = vec2(1e5, 0.0);
    float minD = 1e5;
    float minT = tEnter;
    float minM = 0.0;
    for (int s = 0; s < 16; s++) {
      if (s >= steps) break;
      vec3 p = ro - off + rd * tRay;
      hit = geomHit(p, g, sid, form);
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
      bestG = g;
    } else if (!echoHit) {
      echoHit = true;
      echoSid = sid;
      echoOff = off;
      echoEnter = tEnter;
    }
  }
  vec4 ghosts = geomGhosts(ro, rd, seed, time, n, spread, move, form, streak, k);
  if (bestH <= 0.05 && bestT <= 8.0) {
    vec3 p = ro - bestOff + rd * bestT;
    vec4 live = geomShade(p, rd, bestG, bestSeed, bestM, form);
    ghosts.rgb += (1.0 - ghosts.a) * live.rgb;
    ghosts.a += (1.0 - ghosts.a);
    return ghosts;
  }
  if (ghosts.a > 0.03) return ghosts;
  if (echo < 0.03 || !echoHit) return miss;
  Geom gf = geomRoll(echoSid, time - mix(0.1, 0.2, echo));
  float tRay = echoEnter;
  float minD = 1e5;
  float minM = 0.0;
  for (int s = 0; s < 6; s++) {
    vec2 hit = geomHit(ro - echoOff + rd * tRay, gf, echoSid, form);
    if (hit.x < minD) {
      minD = hit.x;
      minM = hit.y;
    }
    if (hit.x < 0.004 || tRay > 8.0) break;
    tRay += max(hit.x * 0.85, 0.02);
  }
  if (minD > 0.06) return miss;
  vec3 albedo = figPal(echoSid, minM);
  vec3 hsv = rgb2hsv(albedo);
  hsv.x = fract(hsv.x + 0.16);
  hsv.z = min(1.0, hsv.z * 1.06);
  return vec4(hsv2rgb(hsv) * 0.9, clamp(echo * 0.78, 0.22, 0.82));
}
`;

export const GEOM_MINI_GLSL = `
Geom geomWildMini(float seed, float time, Geom lead) {
  Geom g = geomRoll(seed, time);
  g.t = lead.t;
  g.pulse = lead.pulse;
  g.spin = lead.spin;
  g.bob = lead.bob;
  g.sway = lead.sway;
  g.twist = lead.twist;
  return g;
}
vec3 geomMiniPlace(int i, float n, float seed, float aspect) {
  float cols = max(ceil(sqrt(n * max(aspect, 1.15))), 3.0);
  float rows = max(ceil(n / cols), 3.0);
  float fi = float(i);
  float col = mod(fi, cols);
  float row = floor(fi / cols);
  float inRow = cols;
  if (row >= rows - 0.5) inRow = max(n - row * cols, 1.0);
  float u = (col + 0.5) / inRow * 2.0 - 1.0;
  float v = (row + 0.5) / rows * 2.0 - 1.0;
  if (mod(row, 2.0) > 0.5) u += 0.38 / cols;
  u += mix(-0.03, 0.03, figH(seed + fi * 3.7 + 0.4));
  v += mix(-0.028, 0.028, figH(seed + fi * 2.1 + 1.2));
  u = clamp(u, -0.97, 0.97);
  v = clamp(v, -0.95, 0.95);
  float z = mix(-0.18, 0.18, figH(seed + fi * 4.4 + 2.8));
  return vec3(u * 2.52, v * 1.48 + 0.04, z);
}
vec4 geomRenderMini(vec2 uv, float seed, float time, float sizeMul, float count, float echo, float move, float form, float streak) {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 q = (uv - vec2(0.5, 0.42)) * vec2(aspect, 1.0);
  vec4 miss = vec4(0.0);
  float n = mix(14.0, 24.0, clamp((count - 1.0) / 3.0, 0.0, 1.0));
  n = floor(n + 0.5);
  float figScale = mix(0.2, 0.34, clamp((sizeMul - 0.25) / 2.25, 0.0, 1.0));
  float camZ = 4.05;
  float camA = figH(seed + 0.5) * 0.08 - 0.04;
  vec3 ro = figRotY(vec3(0.0, 0.42, camZ), camA);
  vec3 ta = vec3(0.0, 0.32, 0.0);
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
  Geom lead = geomSoften(geomRoll(seed, time), move);
  Geom bestG = geomWildMini(seed, time, lead);
  float echoSid = seed;
  vec3 echoOff = vec3(0.0);
  float echoEnter = 0.0;
  float echoSc = figScale;
  bool echoHit = false;
  vec4 ghosts = vec4(0.0);
  bool wantStreak = streak > 0.18 && uQuality > 0.45;
  for (int i = 0; i < 24; i++) {
    if (i >= k) break;
    float sid = seed + float(i) * 91.73 + 13.1 + figH(seed * 0.11 + float(i) + 2.3) * 47.0;
    float sc = figScale * mix(0.92, 1.1, figH(sid + 0.61));
    vec3 off = figCarry(geomMiniPlace(i, n, seed, aspect), sid, time, move);
    float tEnter;
    if (!figRaySphere(ro, rd, off, 2.2 * sc, tEnter)) continue;
    Geom g = geomWildMini(sid, time, lead);
    float tRay = tEnter;
    vec2 hit = vec2(1e5, 0.0);
    float minD = 1e5;
    float minT = tEnter;
    float minM = 0.0;
    for (int s = 0; s < 16; s++) {
      if (s >= steps) break;
      vec3 p = (ro - off + rd * tRay) / sc;
      hit = geomHit(p, g, sid, form);
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
      bestG = g;
      bestSc = sc;
    } else if (!echoHit) {
      echoHit = true;
      echoSid = sid;
      echoOff = off;
      echoEnter = tEnter;
      echoSc = sc;
    }
    if (wantStreak && i < 10 && ghosts.a < 0.7) {
      float gt = time - 0.12 * streak;
      vec3 goff = figCarry(geomMiniPlace(i, n, seed, aspect), sid, gt, move);
      float gEnter;
      if (figRaySphere(ro, rd, goff, 2.2 * sc, gEnter)) {
        Geom gg = geomWildMini(sid, gt, lead);
        vec3 tr = geomTrace(ro, rd, goff, gg, sid, form, 4, gEnter, sc);
        if (tr.y < 0.05) {
          vec3 gp = (ro - goff + rd * tr.x) / sc;
          vec4 tint = geomStreakTint(geomShade(gp, rd, gg, sid, tr.z, form), 1.0, streak);
          ghosts.rgb += (1.0 - ghosts.a) * tint.rgb * tint.a * 0.85;
          ghosts.a += (1.0 - ghosts.a) * tint.a * 0.85;
        }
      }
    }
  }
  if (bestH <= 0.045 && bestT <= 8.0) {
    vec3 p = (ro - bestOff + rd * bestT) / bestSc;
    vec4 live = geomShade(p, rd, bestG, bestSeed, bestM, form);
    ghosts.rgb += (1.0 - ghosts.a) * live.rgb;
    ghosts.a += (1.0 - ghosts.a);
    return ghosts;
  }
  if (ghosts.a > 0.03) return ghosts;
  if (echo < 0.03 || !echoHit) return miss;
  Geom leadGhost = geomRoll(seed, time - mix(0.1, 0.2, echo));
  Geom gf = geomWildMini(echoSid, time - mix(0.1, 0.2, echo), leadGhost);
  float tRay = echoEnter;
  float minD = 1e5;
  float minM = 0.0;
  for (int s = 0; s < 5; s++) {
    vec2 hit = geomHit((ro - echoOff + rd * tRay) / echoSc, gf, echoSid, form);
    hit.x *= echoSc;
    if (hit.x < minD) {
      minD = hit.x;
      minM = hit.y;
    }
    if (hit.x < 0.003 || tRay > 8.0) break;
    tRay += max(hit.x * 0.85, 0.015);
  }
  if (minD > 0.05) return miss;
  vec3 albedo = figPal(echoSid, minM);
  vec3 hsv = rgb2hsv(albedo);
  hsv.x = fract(hsv.x + 0.16);
  hsv.z = min(1.0, hsv.z * 1.06);
  return vec4(hsv2rgb(hsv) * 0.9, clamp(echo * 0.78, 0.22, 0.82));
}
`;
