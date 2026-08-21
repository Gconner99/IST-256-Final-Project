/** Unreal objects grown from random points — mixed families, colors, and paths. */
export const CRITTER_GLSL = `
float crHash(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
vec2 crRot(vec2 p, float a) {
  float s = sin(a), c = cos(a);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}
vec3 crHsv(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float crCap(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 0.0001), 0.0, 1.0);
  return length(pa - ba * h) - r;
}
vec2 crPt(float id, float k) {
  return vec2(crHash(vec2(id, k)), crHash(vec2(id, k + 17.0))) * 2.0 - 1.0;
}
float vertexR(float id, float idx) {
  float h = crHash(vec2(id * 0.19 + 0.07, idx + 4.2));
  return mix(0.04, 2.05, pow(h, 0.42));
}
float polarPoly(vec2 p, float id, float n) {
  float a = atan(p.y, p.x);
  float slice = 6.2831853 / max(n, 3.0);
  float t = (a + 3.14159265) / slice + crHash(vec2(id, 8.8)) * n;
  float idx = floor(t);
  float f = fract(t);
  float i0 = mod(idx, n);
  float i1 = mod(idx + 1.0, n);
  float r = mix(vertexR(id, i0), vertexR(id, i1), f);
  return length(p) - r;
}
float classicBody(vec2 p, float id) {
  float n = 3.0 + floor(crHash(vec2(id, 0.7)) * 7.0);
  float d = polarPoly(p, id, n);
  for (int j = 0; j < 3; j++) {
    float fj = float(j);
    vec2 pt = vec2(
      crHash(vec2(id, 31.0 + fj)),
      crHash(vec2(id, 44.0 + fj))
    ) * 2.0 - 1.0;
    pt *= 0.95;
    float rad = mix(0.08, 0.72, crHash(vec2(id, 58.0 + fj)));
    d = min(d, length(p - pt) - rad);
  }
  vec2 a = vec2(crHash(vec2(id, 70.0)), crHash(vec2(id, 71.0))) * 2.0 - 1.0;
  vec2 b = vec2(crHash(vec2(id, 72.0)), crHash(vec2(id, 73.0))) * 2.0 - 1.0;
  d = min(d, crCap(p, a * 0.9, b * 0.9, mix(0.04, 0.26, crHash(vec2(id, 74.0)))));
  float style = crHash(vec2(id, 9.9));
  if (style > 0.62) {
    float inner = polarPoly(p * mix(1.4, 2.2, crHash(vec2(id, 11.0))), id + 17.3, max(n - 1.0, 3.0));
    d = max(d, -inner - mix(0.02, 0.12, crHash(vec2(id, 12.0))));
  } else if (style > 0.38) {
    d = abs(d) - mix(0.05, 0.14, crHash(vec2(id, 13.0)));
  }
  return d;
}
float constellation(vec2 p, float id) {
  float d = 1e5;
  vec2 prev = vec2(0.0);
  float n = 3.0 + floor(crHash(vec2(id, 0.4)) * 5.0);
  for (int i = 0; i < 8; i++) {
    if (float(i) >= n) break;
    vec2 pt = crPt(id, 20.0 + float(i)) * mix(0.55, 1.15, crHash(vec2(id, 21.0 + float(i))));
    d = min(d, length(p - pt) - mix(0.05, 0.38, crHash(vec2(id, 80.0 + float(i)))));
    if (i > 0) d = min(d, crCap(p, prev, pt, mix(0.02, 0.14, crHash(vec2(id, 90.0 + float(i))))));
    prev = pt;
  }
  return d;
}
float spikes(vec2 p, float id) {
  float d = length(p) - mix(0.06, 0.48, crHash(vec2(id, 3.3)));
  float n = 4.0 + floor(crHash(vec2(id, 4.4)) * 8.0);
  for (int i = 0; i < 12; i++) {
    if (float(i) >= n) break;
    float ang = (float(i) / n) * 6.2831853 + crHash(vec2(id, float(i))) * 0.7;
    vec2 tip = vec2(cos(ang), sin(ang)) * mix(0.35, 1.85, crHash(vec2(id, 15.0 + float(i))));
    d = min(d, crCap(p, vec2(0.0), tip, mix(0.02, 0.16, crHash(vec2(id, 25.0 + float(i))))));
  }
  return d;
}
float cloud(vec2 p, float id) {
  float d = 1e5;
  for (int i = 0; i < 7; i++) {
    vec2 pt = crPt(id, 5.0 + float(i)) * mix(0.4, 0.95, crHash(vec2(id, 6.0 + float(i))));
    d = min(d, length(p - pt) - mix(0.12, 0.82, crHash(vec2(id, 40.0 + float(i)))));
  }
  return d;
}
float crescent(vec2 p, float id) {
  vec2 c0 = crPt(id, 1.0) * 0.22;
  float r0 = mix(0.55, 1.45, crHash(vec2(id, 2.0)));
  vec2 c1 = c0 + crPt(id, 3.0) * mix(0.28, 0.95, crHash(vec2(id, 4.0)));
  float r1 = r0 * mix(0.42, 0.96, crHash(vec2(id, 5.0)));
  return max(length(p - c0) - r0, -(length(p - c1) - r1));
}
float scribble(vec2 p, float id) {
  float d = 1e5;
  vec2 prev = crPt(id, 0.0) * 0.95;
  for (int i = 1; i < 7; i++) {
    vec2 pt = crPt(id, float(i) * 3.1) * mix(0.55, 1.2, crHash(vec2(id, float(i))));
    d = min(d, crCap(p, prev, pt, mix(0.035, 0.24, crHash(vec2(id, 10.0 + float(i))))));
    prev = pt;
  }
  return d;
}
float twins(vec2 p, float id) {
  vec2 off = crPt(id, 6.0) * mix(0.28, 0.72, crHash(vec2(id, 6.5)));
  float n = 3.0 + floor(crHash(vec2(id, 7.0)) * 5.0);
  float d = polarPoly(p - off, id, n);
  d = min(d, polarPoly(p + off, id + 9.1, n + 1.0));
  d = min(d, crCap(p, off, -off, mix(0.03, 0.2, crHash(vec2(id, 8.0)))));
  return d;
}
float saw(vec2 p, float id) {
  float n = 6.0 + floor(crHash(vec2(id, 1.2)) * 8.0);
  float a = atan(p.y, p.x);
  float slice = 6.2831853 / n;
  float t = (a + 3.14159265) / slice;
  float idx = floor(t);
  float f = fract(t);
  float longR = mix(0.7, 1.75, crHash(vec2(id, 2.2)));
  float shortR = mix(0.06, 0.5, crHash(vec2(id, 3.2)));
  float r0 = mix(shortR, longR, step(0.5, mod(idx, 2.0)));
  r0 *= mix(0.62, 1.35, crHash(vec2(id, idx + 0.2)));
  float r1 = mix(shortR, longR, step(0.5, mod(idx + 1.0, 2.0)));
  r1 *= mix(0.62, 1.35, crHash(vec2(id, idx + 1.2)));
  return length(p) - mix(r0, r1, f);
}
float ring(vec2 p, float id) {
  float r = mix(0.32, 1.2, crHash(vec2(id, 2.1)));
  float w = mix(0.05, 0.34, crHash(vec2(id, 3.1)));
  float d = abs(length(p) - r) - w;
  vec2 bite = crPt(id, 4.1) * r;
  if (crHash(vec2(id, 5.1)) > 0.35) {
    d = max(d, -(length(p - bite) - mix(0.14, 0.62, crHash(vec2(id, 6.1)))));
  }
  return d;
}
float weirdBody(vec2 p, float id) {
  p *= vec2(mix(0.18, 2.55, crHash(vec2(id, 1.3))), mix(0.18, 2.55, crHash(vec2(id, 2.4))));
  p.x += p.y * (crHash(vec2(id, 2.8)) * 1.6 - 0.8);
  p = crRot(p, length(p) * (crHash(vec2(id, 2.9)) * 2.4 - 1.2));
  float fam = min(floor(crHash(vec2(id, 0.31)) * 9.0), 8.0);
  float d = 1e5;
  if (fam < 0.5) d = classicBody(p, id);
  else if (fam < 1.5) d = constellation(p, id);
  else if (fam < 2.5) d = spikes(p, id);
  else if (fam < 3.5) d = cloud(p, id);
  else if (fam < 4.5) d = crescent(p, id);
  else if (fam < 5.5) d = scribble(p, id);
  else if (fam < 6.5) d = twins(p, id);
  else if (fam < 7.5) d = saw(p, id);
  else d = ring(p, id);
  float extra = crHash(vec2(id, 19.2));
  if (extra > 0.68) {
    d = min(d, length(p - crPt(id, 88.0) * 0.75) - mix(0.06, 0.48, crHash(vec2(id, 88.5))));
  }
  if (extra < 0.22) {
    d = max(d, -(length(p - crPt(id, 91.0) * 0.55) - mix(0.12, 0.58, crHash(vec2(id, 91.5)))));
  }
  if (crHash(vec2(id, 19.8)) > 0.84) {
    d = abs(d) - mix(0.03, 0.16, crHash(vec2(id, 20.1)));
  }
  return d;
}
vec3 crFill(float id) {
  float hue = crHash(vec2(id, 0.41));
  float mode = crHash(vec2(id, 0.74));
  float sat = 0.75;
  float val = 0.85;
  if (mode < 0.12) {
    sat = mix(0.0, 0.16, crHash(vec2(id, 0.52)));
    val = mix(0.12, 0.98, crHash(vec2(id, 0.63)));
  } else if (mode < 0.26) {
    sat = mix(0.1, 0.38, crHash(vec2(id, 0.52)));
    val = mix(0.78, 1.0, crHash(vec2(id, 0.63)));
  } else if (mode < 0.4) {
    sat = mix(0.88, 1.0, crHash(vec2(id, 0.52)));
    val = mix(0.82, 1.0, crHash(vec2(id, 0.63)));
  } else if (mode < 0.54) {
    sat = mix(0.5, 0.95, crHash(vec2(id, 0.52)));
    val = mix(0.1, 0.4, crHash(vec2(id, 0.63)));
  } else if (mode < 0.68) {
    sat = mix(0.28, 0.68, crHash(vec2(id, 0.52)));
    val = mix(0.28, 0.68, crHash(vec2(id, 0.63)));
  } else {
    sat = mix(0.62, 1.0, crHash(vec2(id, 0.52)));
    val = mix(0.62, 1.0, crHash(vec2(id, 0.63)));
  }
  return crHsv(vec3(hue, sat, val));
}
vec3 crRim(float id, vec3 fill) {
  float mode = crHash(vec2(id, 0.81));
  if (mode < 0.22) return crHsv(vec3(fract(crHash(vec2(id, 0.41)) + 0.5), 0.9, 1.0));
  if (mode < 0.4) return vec3(1.0);
  if (mode < 0.55) return fill * mix(0.12, 0.4, crHash(vec2(id, 0.82)));
  if (mode < 0.72) return crHsv(vec3(fract(crHash(vec2(id, 0.41)) + 0.12), 0.35, 1.0));
  return crHsv(vec3(crHash(vec2(id, 0.93)), mix(0.15, 1.0, crHash(vec2(id, 0.95))), mix(0.35, 1.0, crHash(vec2(id, 0.97)))));
}
float crWrapMode(float id) {
  float mot = min(floor(crHash(vec2(id, 0.05)) * 8.0), 7.0);
  return mot < 5.5 ? 1.0 : 0.0;
}
vec2 crMotion(float id, float time) {
  float h1 = crHash(vec2(id, 0.13));
  float h2 = crHash(vec2(id, 2.77));
  float h3 = crHash(vec2(id, 8.14));
  float dir = h1 > 0.5 ? 1.0 : -1.0;
  float spd = mix(0.22, 2.7, crHash(vec2(id, 0.09)));
  float t = time * spd;
  float mot = min(floor(crHash(vec2(id, 0.05)) * 8.0), 7.0);
  if (mot < 0.5) {
    vec2 vel = vec2(dir * mix(0.04, 0.22, h2), (h3 - 0.5) * mix(0.04, 0.18, crHash(vec2(id, 0.16))));
    vec2 pos = vec2(h1, mix(0.08, 0.92, h2)) + vel * t;
    pos.y += mix(0.06, 0.32, h3) * sin(t * mix(0.35, 1.6, h2) + id);
    return fract(pos);
  }
  if (mot < 1.5) {
    return fract(vec2(mix(0.06, 0.94, h1), h2 + dir * t * mix(0.05, 0.18, h3)));
  }
  if (mot < 2.5) {
    vec2 c = vec2(mix(0.16, 0.84, h1), mix(0.16, 0.84, h2));
    float r = mix(0.05, 0.44, h3);
    float a = t * mix(0.35, 2.4, crHash(vec2(id, 0.11))) * dir + id;
    float sq = mix(0.3, 1.45, crHash(vec2(id, 0.12)));
    return c + vec2(cos(a), sin(a) * sq) * r;
  }
  if (mot < 3.5) {
    vec2 pos;
    pos.x = fract(h1 + dir * t * mix(0.04, 0.16, h2));
    pos.y = clamp(mix(0.1, 0.9, h2) + mix(0.1, 0.34, h3) * sin(t * mix(1.4, 3.6, h3) + id), 0.03, 0.97);
    return pos;
  }
  if (mot < 4.5) {
    float burst = 0.15 + pow(0.5 + 0.5 * sin(t * mix(0.5, 1.4, h2) + id), 5.0) * 1.7;
    vec2 vel = vec2(dir * mix(0.05, 0.2, h2), (h3 - 0.5) * 0.14) * burst;
    return fract(vec2(h1, mix(0.1, 0.9, h2)) + vel * t);
  }
  if (mot < 5.5) {
    vec2 vel = vec2(dir * mix(0.03, 0.16, h2), (h3 > 0.5 ? 1.0 : -1.0) * mix(0.025, 0.14, h3));
    return fract(vec2(h1, h2) + vel * t);
  }
  if (mot < 6.5) {
    float tri = 1.0 - abs(fract(h2 + t * mix(0.04, 0.14, h3)) * 2.0 - 1.0);
    return vec2(mix(0.08, 0.92, h1), mix(0.1, 0.9, tri));
  }
  vec2 home = vec2(mix(0.12, 0.88, h1), mix(0.12, 0.88, h2));
  return home + mix(0.02, 0.09, h3) * vec2(sin(t * 0.55 + id), cos(t * 0.41 + id * 1.3));
}
vec4 critterOne(vec2 uv, float id, float time, float sizeMul) {
  float h2 = crHash(vec2(id, 2.77));
  float h3 = crHash(vec2(id, 8.14));
  vec2 pos = crMotion(id, time);
  vec2 prev = crMotion(id, time - 0.1);
  vec2 vel = pos - prev;
  float wrap = crWrapMode(id);
  if (wrap > 0.5) vel -= round(vel);
  float heading = atan(vel.y, vel.x + 0.0001);
  float spinKind = crHash(vec2(id, 11.1));
  float spinRate = mix(-4.2, 4.2, crHash(vec2(id, 12.1)));
  float spin = heading + time * spinRate * 0.25;
  if (spinKind > 0.38 && spinKind < 0.72) spin = time * spinRate;
  if (spinKind >= 0.72) spin = heading * (spinKind > 0.88 ? -1.0 : 1.0) + crHash(vec2(id, 13.0)) * 6.2831853;
  float sz = mix(0.016, 0.3, pow(h3, 0.55)) * max(sizeMul, 0.2);
  sz *= 1.0 + mix(0.04, 0.28, crHash(vec2(id, 14.2))) * sin(time * mix(0.8, 3.2, h2) + id);
  vec3 fillCol = crFill(id);
  vec3 rimCol = crRim(id, fillCol);
  vec3 accCol = vec3(0.0);
  float accA = 0.0;
  float trails = 1.0 + floor(crHash(vec2(id, 15.5)) * 3.0);
  float glowAmt = mix(0.15, 0.7, crHash(vec2(id, 16.1)));
  for (int k = 0; k < 3; k++) {
    float fk = float(k);
    if (fk < trails) {
      vec2 tp = pos - vel * fk * mix(0.45, 1.1, crHash(vec2(id, 17.0)));
      if (wrap > 0.5) tp = fract(tp);
      vec2 dlt = uv - tp;
      if (wrap > 0.5) dlt -= round(dlt);
      vec2 p = crRot(dlt, spin) / (sz * (1.0 - fk * 0.08));
      float sd = weirdBody(p, id);
      float fill = 1.0 - smoothstep(-0.02, 0.14, sd);
      float rim = 1.0 - smoothstep(0.0, 0.18, abs(sd + 0.02));
      float glow = exp(-max(sd, 0.0) * 3.6) * glowAmt;
      float hl = fill * (1.0 - smoothstep(0.45, 0.0, length(p - vec2(-0.2, -0.25))));
      vec3 col = mix(fillCol, rimCol, rim * mix(0.35, 0.85, crHash(vec2(id, 18.0))));
      col = mix(col, vec3(1.0), hl * mix(0.08, 0.45, crHash(vec2(id, 18.4))));
      float a = max(fill, glow * 0.5) * (1.0 - fk * 0.34);
      accCol = mix(accCol, col, a);
      accA = max(accA, a);
    }
  }
  return vec4(accCol, clamp(accA, 0.0, 1.0));
}
vec4 critterField(vec2 uv, float count, float seed, float time, float sizeMul) {
  vec4 acc = vec4(0.0);
  for (int i = 0; i < 8; i++) {
    if (float(i) >= count) break;
    vec4 d = critterOne(uv, float(i) * 13.17 + seed * 19.0, time, sizeMul);
    acc.rgb = mix(acc.rgb, d.rgb, d.a);
    acc.a = max(acc.a, d.a);
  }
  return acc;
}
`;
