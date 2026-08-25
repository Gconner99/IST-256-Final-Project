/** One big toy-pop mascot (note, guitar, piano…) with googly eyes. 2D, cheap. */
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
float bdCap(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 0.0001), 0.0, 1.0);
  return length(pa - ba * h) - r;
}
float bdNote(vec2 p) {
  float d = length((p - vec2(-0.18, -0.32)) * vec2(1.35, 1.0)) - 0.36;
  d = min(d, bdCap(p, vec2(0.12, -0.26), vec2(0.18, 0.72), 0.07));
  d = min(d, bdCap(p, vec2(0.18, 0.72), vec2(0.58, 0.38), 0.07));
  return d;
}
float bdGuitar(vec2 p) {
  float d = length(p - vec2(0.0, -0.18)) - 0.48;
  d = min(d, length(p - vec2(0.0, 0.16)) - 0.34);
  d = min(d, bdCap(p, vec2(0.0, 0.38), vec2(0.0, 0.98), 0.07));
  d = min(d, bdBox(p - vec2(0.0, 1.08), vec2(0.14, 0.08)));
  d = max(d, -(length(p - vec2(0.0, -0.14)) - 0.1));
  return d;
}
float bdPiano(vec2 p) {
  float d = bdBox(p - vec2(0.0, -0.06), vec2(0.92, 0.38));
  d = min(d, bdBox(p - vec2(-0.08, 0.46), vec2(0.62, 0.14)));
  d = min(d, bdBox(p - vec2(-0.72, -0.58), vec2(0.07, 0.18)));
  d = min(d, bdBox(p - vec2(0.72, -0.58), vec2(0.07, 0.18)));
  return d;
}
float bdBoom(vec2 p) {
  float d = bdBox(p, vec2(0.82, 0.48));
  d = min(d, bdBox(p - vec2(0.0, 0.58), vec2(0.28, 0.07)));
  d = min(d, abs(length(p - vec2(-0.34, 0.0)) - 0.24) - 0.07);
  d = min(d, abs(length(p - vec2(0.34, 0.0)) - 0.24) - 0.07);
  return d;
}
float bdVinyl(vec2 p) {
  float d = length(p) - 0.92;
  d = max(d, -(length(p) - 0.12));
  d = min(d, abs(length(p) - 0.42) - 0.1);
  return d;
}
float bdHeart(vec2 p) {
  p.y -= 0.08;
  float d = length(p - vec2(-0.32, 0.28)) - 0.4;
  d = min(d, length(p - vec2(0.32, 0.28)) - 0.4);
  d = min(d, bdCap(p, vec2(-0.58, 0.06), vec2(0.0, -0.82), 0.28));
  d = min(d, bdCap(p, vec2(0.58, 0.06), vec2(0.0, -0.82), 0.28));
  return d;
}
float bdBody(vec2 p, float kind) {
  float k = mod(kind, 6.0);
  if (k < 0.5) return bdNote(p);
  if (k < 1.5) return bdGuitar(p);
  if (k < 2.5) return bdPiano(p);
  if (k < 3.5) return bdBoom(p);
  if (k < 4.5) return bdVinyl(p);
  return bdHeart(p);
}
vec2 bdEyeHome(float kind) {
  float k = mod(kind, 6.0);
  if (k < 0.5) return vec2(-0.16, -0.28);
  if (k < 1.5) return vec2(0.0, -0.12);
  if (k < 2.5) return vec2(0.0, 0.04);
  if (k < 3.5) return vec2(0.0, 0.06);
  if (k < 4.5) return vec2(0.0, 0.08);
  return vec2(0.0, 0.18);
}
vec3 bdCandy(float id, float kind) {
  float h = bdH(id + kind * 0.17 + 0.41);
  vec3 a = vec3(1.0, 0.42, 0.62);
  vec3 b = vec3(0.4, 0.82, 1.0);
  vec3 c = vec3(1.0, 0.86, 0.32);
  vec3 d = vec3(0.62, 0.45, 0.95);
  if (h < 0.25) return a;
  if (h < 0.5) return b;
  if (h < 0.75) return c;
  return d;
}
void bdGoogly(inout vec3 col, inout float a, vec2 p, vec2 home, vec2 look, float spread) {
  vec2 eL = p - (home + vec2(-spread, 0.0));
  vec2 eR = p - (home + vec2(spread, 0.0));
  float wL = 1.0 - smoothstep(0.13, 0.155, length(eL * vec2(0.88, 1.05)));
  float wR = 1.0 - smoothstep(0.13, 0.155, length(eR * vec2(0.88, 1.05)));
  float pL = 1.0 - smoothstep(0.05, 0.065, length(eL - look));
  float pR = 1.0 - smoothstep(0.05, 0.065, length(eR - look));
  float gL = 1.0 - smoothstep(0.018, 0.03, length(eL - look - vec2(-0.03, 0.04)));
  float gR = 1.0 - smoothstep(0.018, 0.03, length(eR - look - vec2(-0.03, 0.04)));
  col = mix(col, vec3(1.0), max(wL, wR));
  col = mix(col, vec3(0.08, 0.05, 0.12), max(pL, pR));
  col = mix(col, vec3(1.0), max(gL, gR));
  a = max(a, max(wL, wR));
}
vec4 buddyOne(vec2 uv, float id, float kind, vec2 pos, float sz, float time) {
  vec2 p = (uv - pos) / max(sz, 0.05);
  p = bdRot(p, 0.14 * sin(time * 1.6 + id));
  float d = bdBody(p, kind);
  float fill = 1.0 - smoothstep(-0.02, 0.045, d);
  float rim = 1.0 - smoothstep(0.0, 0.12, abs(d + 0.01));
  vec3 fillCol = bdCandy(id, kind);
  vec3 col = mix(fillCol, fillCol * 0.72, rim * 0.55);
  col = mix(col, vec3(1.0), fill * (1.0 - smoothstep(0.5, 0.05, length(p - vec2(-0.22, -0.28)))) * 0.28);
  float a = fill;
  vec2 look = 0.055 * vec2(sin(time * 2.4 + id), cos(time * 1.7 + id * 1.3));
  look += 0.03 * vec2(u_bass, u_audio) * vec2(1.0, -0.4);
  bdGoogly(col, a, p, bdEyeHome(kind), look, 0.17);
  float blush = 1.0 - smoothstep(0.07, 0.11, length(p - bdEyeHome(kind) - vec2(-0.2, -0.16)));
  blush = max(blush, 1.0 - smoothstep(0.07, 0.11, length(p - bdEyeHome(kind) - vec2(0.2, -0.16))));
  col = mix(col, vec3(1.0, 0.55, 0.7), blush * fill * 0.35);
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
