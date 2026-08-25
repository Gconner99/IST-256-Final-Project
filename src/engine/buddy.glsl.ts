/** Seed-grown music mascot: idol ink/paint, lumpy silhouettes, googly eyes. */
export const BUDDY_GLSL = `
float bdH(float n) {
  vec3 p3 = fract(vec3(n, n * 1.13, n * 0.71) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 bdRot(vec2 p, float a) {
  float s = sin(a), c = cos(a);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}
float bdBox(vec2 p, vec2 b) {
  vec2 q = abs(p) - b;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
}
float bdOcta(vec2 p, float s) {
  p = abs(p);
  return (p.x + p.y - s) * 0.70710678;
}
float bdCap(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 0.0001), 0.0, 1.0);
  return length(pa - ba * h) - r;
}
vec2 bdWarp(vec2 p, float id) {
  p *= vec2(mix(0.68, 1.38, bdH(id + 1.3)), mix(0.72, 1.32, bdH(id + 2.4)));
  float a = atan(p.y, p.x);
  float n = 3.0 + floor(bdH(id + 3.1) * 5.0);
  float r = length(p);
  r *= mix(0.72, 1.28, 0.5 + 0.5 * sin(a * n + bdH(id) * 6.2831853));
  p = vec2(cos(a), sin(a)) * r;
  if (bdH(id + 0.41) > 0.55) p = bdRot(p, mix(-0.45, 0.45, bdH(id + 0.42)));
  return p;
}
float bdLump(vec2 p, float id) {
  float n = 4.0 + floor(bdH(id + 0.7) * 5.0);
  float a = atan(p.y, p.x);
  float slice = 6.2831853 / max(n, 3.0);
  float t = (a + 3.14159265) / slice + bdH(id + 8.8) * n;
  float idx = floor(t);
  float f = fract(t);
  float r0 = mix(0.38, 1.22, pow(bdH(id + idx + 4.2), 0.55));
  float r1 = mix(0.38, 1.22, pow(bdH(id + idx + 5.2), 0.55));
  float d = length(p) - mix(r0, r1, f);
  float poly = cos(floor(0.5 + a / slice) * slice - a) * length(p) - mix(r0, r1, 0.5) * 0.92;
  d = mix(d, poly, mix(0.35, 0.95, bdH(id + 9.4)));
  float octa = bdOcta(p * mix(0.78, 1.18, bdH(id + 10.1)), mix(0.52, 1.08, bdH(id + 10.2)));
  float box = bdBox(p, vec2(mix(0.38, 0.92, bdH(id + 11.1)), mix(0.32, 0.88, bdH(id + 11.2))));
  float pick = bdH(id + 0.19);
  if (pick > 0.68) d = mix(d, octa, mix(0.45, 0.92, bdH(id + 12.1)));
  else if (pick > 0.34) d = mix(d, box, mix(0.4, 0.88, bdH(id + 12.2)));
  for (int j = 0; j < 2; j++) {
    float fj = float(j);
    vec2 pt = vec2(bdH(id + 31.0 + fj), bdH(id + 44.0 + fj)) * 2.0 - 1.0;
    float lump = length(p - pt * 0.68) - mix(0.1, 0.36, bdH(id + 58.0 + fj));
    if (bdH(id + 13.0 + fj) > 0.42) d = min(d, lump);
    else if (bdH(id + 14.0 + fj) > 0.55) d = max(d, -lump);
  }
  if (bdH(id + 5.1) > 0.38) {
    vec2 bite = (vec2(bdH(id + 6.1), bdH(id + 7.1)) * 2.0 - 1.0) * 0.58;
    d = max(d, -(length(p - bite) - mix(0.12, 0.4, bdH(id + 8.1))));
  }
  return d;
}
float bdNote(vec2 p, float id) {
  float d = bdLump(p * 1.08 - vec2(-0.06, -0.16), id);
  vec2 a = vec2(mix(-0.08, 0.22, bdH(id + 1.0)), mix(-0.22, 0.08, bdH(id + 1.1)));
  vec2 b = vec2(mix(0.12, 0.48, bdH(id + 1.2)), mix(0.42, 0.92, bdH(id + 1.3)));
  d = min(d, bdCap(p, a, b, mix(0.05, 0.11, bdH(id + 2.0))));
  if (bdH(id + 2.4) > 0.45) {
    d = min(d, bdOcta(p - b * 0.92, mix(0.12, 0.24, bdH(id + 2.5))));
  }
  return d;
}
float bdGuitar(vec2 p, float id) {
  float d = bdLump(p - vec2(0.0, -0.16), id);
  d = min(d, bdLump((p - vec2(mix(-0.08, 0.12, bdH(id)), 0.32)) * mix(1.12, 1.42, bdH(id + 1.0)), id + 9.1));
  d = min(d, bdCap(p, vec2(0.0, 0.28), vec2(mix(-0.18, 0.16, bdH(id + 2.1)), mix(0.78, 1.12, bdH(id + 2.2))), mix(0.045, 0.1, bdH(id + 2.3))));
  return d;
}
float bdPiano(vec2 p, float id) {
  float d = bdLump(p * vec2(mix(0.68, 0.92, bdH(id)), mix(1.05, 1.28, bdH(id + 0.4))), id);
  d = min(d, bdBox(p - vec2(0.0, mix(0.28, 0.48, bdH(id + 1.0))), vec2(mix(0.42, 0.78, bdH(id + 1.1)), mix(0.08, 0.2, bdH(id + 1.2)))));
  for (int k = 0; k < 3; k++) {
    float x = mix(-0.42, 0.42, (float(k) + 0.5) / 3.0) + (bdH(id + float(k) * 1.7) - 0.5) * 0.12;
    d = max(d, -bdBox(p - vec2(x, 0.38), vec2(0.035, mix(0.08, 0.16, bdH(id + 3.0 + float(k))))));
  }
  d = min(d, bdCap(p, vec2(-0.62, -0.18), vec2(-0.52, -0.68), 0.06));
  d = min(d, bdCap(p, vec2(0.6, -0.16), vec2(0.5, -0.66), 0.06));
  return d;
}
float bdBoom(vec2 p, float id) {
  float d = mix(bdLump(p * vec2(0.88, 1.08), id), bdBox(p, vec2(0.72, 0.58)), mix(0.25, 0.7, bdH(id)));
  d = max(d, -(length(p - vec2(-0.28, 0.02)) - mix(0.1, 0.22, bdH(id + 1.0))));
  d = max(d, -(length(p - vec2(0.3, -0.06)) - mix(0.08, 0.2, bdH(id + 2.0))));
  d = min(d, bdBox(p - vec2(0.0, 0.58), vec2(mix(0.12, 0.28, bdH(id + 3.0)), 0.07)));
  return d;
}
float bdVinyl(vec2 p, float id) {
  float r = mix(0.62, 1.02, bdH(id + 2.0));
  float d = abs(length(p) - r * 0.58) - mix(0.14, 0.34, bdH(id + 3.0));
  d = min(d, bdLump(p * mix(1.15, 1.55, bdH(id + 3.4)), id));
  d = max(d, -(length(p) - mix(0.07, 0.2, bdH(id + 4.0))));
  float ring = abs(length(p) - r * mix(0.28, 0.48, bdH(id + 4.4))) - 0.03;
  if (bdH(id + 4.6) > 0.4) d = min(d, ring);
  return d;
}
float bdHeart(vec2 p, float id) {
  vec2 off = vec2(mix(-0.22, 0.22, bdH(id + 1.0)), mix(0.02, 0.16, bdH(id + 1.2)));
  float d = bdLump(p - off, id);
  d = min(d, bdLump(p + off * vec2(1.0, 0.35), id + 11.0));
  d = min(d, bdCap(p, off * 0.7, vec2(mix(-0.12, 0.12, bdH(id + 2.1)), mix(-0.88, -0.55, bdH(id + 2.2))), mix(0.14, 0.32, bdH(id + 2.0))));
  return d;
}
float bdBody(vec2 p, float kind, float id) {
  p = bdWarp(p, id);
  float k = mod(kind, 6.0);
  if (k < 0.5) return bdNote(p, id);
  if (k < 1.5) return bdGuitar(p, id);
  if (k < 2.5) return bdPiano(p, id);
  if (k < 3.5) return bdBoom(p, id);
  if (k < 4.5) return bdVinyl(p, id);
  return bdHeart(p, id);
}
vec3 bdPal(float id, float tone) {
  float vibe = bdH(id + 0.11);
  float hue = fract(bdH(id + tone * 1.71) * 0.92 + bdH(id) * 0.28);
  float sat = mix(0.42, 0.92, bdH(id + tone + 8.2));
  float val = mix(0.62, 0.98, bdH(id + tone + 9.1));
  if (vibe > 0.84) {
    hue = mix(0.86, 0.98, bdH(id + tone));
    sat = mix(0.48, 0.9, bdH(id + tone + 1.0));
    val = mix(0.48, 0.88, bdH(id + tone + 2.0));
  } else if (vibe > 0.68) {
    hue = mix(0.07, 0.16, bdH(id + tone));
    sat = mix(0.55, 0.95, bdH(id + tone + 1.0));
    val = mix(0.72, 0.98, bdH(id + tone + 2.0));
  } else if (vibe > 0.52) {
    hue = mix(0.22, 0.42, bdH(id + tone));
    sat = mix(0.35, 0.78, bdH(id + tone + 1.0));
    val = mix(0.42, 0.82, bdH(id + tone + 2.0));
  } else if (vibe > 0.36) {
    hue = mix(0.52, 0.74, bdH(id + tone));
    sat = mix(0.28, 0.7, bdH(id + tone + 1.0));
    val = mix(0.32, 0.72, bdH(id + tone + 2.0));
  } else if (vibe > 0.2) {
    hue = mix(0.62, 0.82, bdH(id + tone));
    sat = mix(0.55, 0.98, bdH(id + tone + 1.0));
    val = mix(0.55, 0.95, bdH(id + tone + 2.0));
  }
  if (bdH(id + 0.07) > 0.88) {
    sat = mix(0.06, 0.28, bdH(id + tone));
    val = mix(0.72, 0.98, bdH(id + tone + 1.0));
  }
  if (tone > 0.5) {
    float split = mix(0.18, 0.52, bdH(id + 0.33));
    hue = fract(hue + split);
    if (bdH(id + 0.37) > 0.55) val = mix(val * 0.55, val, bdH(id + tone));
  }
  return hsv2rgb(vec3(hue, sat, val));
}
void bdGoogly(inout vec3 col, inout float a, vec2 p, vec2 home, vec2 look, float spread, float sq) {
  vec2 eL = (p - (home + vec2(-spread, 0.0))) * mix(vec2(1.0), vec2(1.18, 0.84), sq);
  vec2 eR = (p - (home + vec2(spread, 0.0))) * mix(vec2(1.0), vec2(1.18, 0.84), sq);
  float wL = 1.0 - smoothstep(0.12, 0.15, length(eL));
  float wR = 1.0 - smoothstep(0.12, 0.15, length(eR));
  float inkL = 1.0 - smoothstep(0.145, 0.185, length(eL));
  float inkR = 1.0 - smoothstep(0.145, 0.185, length(eR));
  float pL = 1.0 - smoothstep(0.048, 0.062, length(eL - look));
  float pR = 1.0 - smoothstep(0.048, 0.062, length(eR - look));
  float gL = 1.0 - smoothstep(0.016, 0.028, length(eL - look - vec2(-0.028, 0.036)));
  float gR = 1.0 - smoothstep(0.016, 0.028, length(eR - look - vec2(-0.028, 0.036)));
  col = mix(col, vec3(0.03, 0.015, 0.05), max(inkL, inkR) * 0.92);
  col = mix(col, vec3(0.93, 0.88, 0.78), max(wL, wR));
  col = mix(col, vec3(0.04, 0.02, 0.04), max(pL, pR));
  col = mix(col, vec3(0.98, 0.95, 0.9), max(gL, gR));
  a = max(a, max(inkL, inkR));
}
vec4 buddyOne(vec2 uv, float id, float kind, vec2 pos, float sz, float time) {
  vec2 p = (uv - pos) / max(sz, 0.05);
  p = bdRot(p, 0.1 * sin(time * 1.4 + id));
  float d = bdBody(p, kind, id);
  float e = 0.028;
  vec2 n2 = vec2(bdBody(p + vec2(e, 0.0), kind, id) - d, bdBody(p + vec2(0.0, e), kind, id) - d);
  n2 = normalize(n2 + 1e-5);
  vec2 light = normalize(vec2(0.35, 0.82));
  float dif = 0.84 + 0.16 * max(0.0, dot(-n2, light));
  float faces = 4.0 + floor(bdH(id + 21.0) * 5.0);
  float ang = atan(n2.y, n2.x);
  float faceId = floor((ang + 3.14159265) / 6.2831853 * faces);
  float faceF = fract((ang + 3.14159265) / 6.2831853 * faces);
  dif *= mix(0.68, 1.06, bdH(id + faceId + 22.0));
  dif = floor(dif * 5.0 + 0.12) / 5.0;
  float crease = 1.0 - smoothstep(0.0, 0.14, min(faceF, 1.0 - faceF));
  float fill = 1.0 - smoothstep(-0.02, 0.028, d);
  float ink = (1.0 - smoothstep(-0.02, 0.07, d)) * (1.0 - smoothstep(-0.16, -0.018, d));
  float spec = pow(max(0.0, dot(-n2, normalize(light + vec2(0.0, 1.0)))), 12.0) * 0.12;
  float cells = mix(3.2, 7.4, bdH(id + 12.0));
  float cell = bdH(dot(floor(p * cells), vec2(13.1, 7.7)) + id);
  vec3 albedo = mix(bdPal(id, 0.0), bdPal(id, 1.0), step(0.52, cell));
  if (bdH(id + 0.61) > 0.62) {
    float stripe = step(0.5, fract(dot(p, vec2(mix(-0.8, 0.8, bdH(id + 15.0)), 1.0)) * mix(2.2, 4.8, bdH(id + 15.1))));
    albedo = mix(albedo, bdPal(id, 2.0), stripe * 0.85);
  }
  vec3 col = albedo * dif + vec3(spec);
  col = mix(col, albedo * 0.48, crease * 0.5);
  col = mix(col, albedo * 0.55, (1.0 - dif) * 0.32);
  col = mix(col, vec3(0.03, 0.015, 0.05), ink * 0.94);
  float grain = (bdH(dot(floor(uv * 180.0), vec2(3.1, 9.7)) + id) - 0.5) * 0.07;
  col += grain * fill;
  float a = max(fill, ink * 0.88);
  vec2 look = 0.05 * vec2(sin(time * 2.1 + id), cos(time * 1.55 + id * 1.3));
  look += 0.025 * vec2(u_bass, -u_audio);
  float sq = step(0.58, bdH(id + 0.61));
  bdGoogly(col, a, p, vec2(0.0, 0.08), look, mix(0.14, 0.22, bdH(id + 0.5)), sq);
  return vec4(col, clamp(a, 0.0, 1.0));
}
vec2 buddyPos(float id, float time, float place, float move) {
  vec2 pos = vec2(0.5, 0.5);
  if (place > 0.5) {
    pos = vec2(0.28 + 0.44 * bdH(id + 1.1), 0.36 + 0.28 * bdH(id + 2.2));
  }
  if (move < 0.5) {
    pos.x += 0.03 * sin(time * 6.0 + id) * (0.35 + u_bass);
    pos.y += 0.045 * abs(sin(time * 8.2 + id)) * (0.4 + u_bass);
  } else if (move < 1.5) {
    pos.x += 0.08 * sin(time * 0.34 + id);
    pos.y += 0.05 * sin(time * 0.27 + id * 1.3);
  } else if (move < 2.5) {
    pos.y += 0.055 * sin(time * 1.15 + id);
  } else {
    float ang = time * 0.65 + id;
    pos += vec2(cos(ang), sin(ang)) * 0.11;
  }
  return pos;
}
vec4 buddyRender(vec2 uv, float seed, float time, float sizeMul, float count, float place, float move, float kindSel) {
  vec4 acc = vec4(0.0);
  time += u_audio * 0.12;
  float n = clamp(count, 1.0, 3.0);
  for (int i = 0; i < 3; i++) {
    if (float(i) >= n) break;
    float id = seed * 0.19 + float(i) * 17.3;
    float kind = kindSel > 5.5 ? floor(bdH(id + 0.7) * 6.0) : kindSel;
    vec2 pos = buddyPos(id, time, place, move);
    float sz = mix(0.16, 0.26, bdH(id + 4.4)) * max(sizeMul, 0.08);
    vec4 b = buddyOne(uv, id, kind, pos, sz, time);
    acc.rgb = mix(acc.rgb, b.rgb, b.a);
    acc.a = max(acc.a, b.a);
  }
  return acc;
}
`;
