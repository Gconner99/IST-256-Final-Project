/** Flying colored shapes — shared by the generator and overlay effect. */
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
float shapeSdf(vec2 p, float kind) {
  float d;
  if (kind < 0.5) {
    d = length(p) - 0.92;
  } else if (kind < 1.5) {
    d = abs(length(p) - 0.7) - 0.16;
  } else if (kind < 2.5) {
    d = (abs(p.x) + abs(p.y)) * 0.78 - 0.9;
  } else if (kind < 3.5) {
    d = crCap(p, vec2(-0.62, 0.0), vec2(0.62, 0.0), 0.38);
  } else if (kind < 4.5) {
    vec2 q = vec2(abs(p.x), p.y);
    d = max(q.x * 0.92 + q.y * 0.55 - 0.62, -q.y - 0.72);
  } else if (kind < 5.5) {
    vec2 q = abs(p);
    d = min((q.x + q.y) * 0.72 - 0.62, max(q.x, q.y) - 0.26);
  } else if (kind < 6.5) {
    float a = length(p - vec2(0.32, 0.0)) - 0.82;
    float b = length(p + vec2(0.32, 0.0)) - 0.82;
    d = max(a, b);
  } else {
    vec2 q = vec2(abs(p.x), p.y);
    d = min(
      crCap(q, vec2(0.0, 0.62), vec2(0.72, -0.42), 0.14),
      crCap(q, vec2(0.0, 0.18), vec2(0.5, -0.58), 0.12)
    );
  }
  return d;
}
vec4 critterOne(vec2 uv, float id, float time, float sizeMul) {
  float h1 = crHash(vec2(id, 0.13));
  float h2 = crHash(vec2(id, 2.77));
  float h3 = crHash(vec2(id, 8.14));
  float h4 = crHash(vec2(id, 19.2));
  float kind = floor(h4 * 8.0);
  float dir = h1 > 0.5 ? 1.0 : -1.0;
  vec2 vel = vec2(dir * (0.07 + h2 * 0.13), (h3 - 0.5) * 0.07);
  vec2 start = vec2(h1, mix(0.16, 0.84, h2));
  vec2 pos = start + vel * time;
  pos.y += 0.16 * sin(time * (0.55 + h3 * 0.7) + id);
  pos = fract(pos);
  float heading = atan(vel.y + 0.16 * cos(time * (0.55 + h3 * 0.7) + id) * (0.55 + h3 * 0.7), vel.x);
  float spin = heading + time * (h2 - 0.5) * 1.4;
  float sz = (0.05 + h3 * 0.075) * max(sizeMul, 0.2) * (1.0 + 0.1 * sin(time * 2.0 + id));
  vec3 fillCol = crHsv(vec3(fract(h1 * 2.4 + 0.04), 0.68 + h2 * 0.3, 0.78 + h3 * 0.22));
  vec3 rimCol = crHsv(vec3(fract(h1 * 2.4 + 0.16), 0.4, 1.0));
  vec3 accCol = vec3(0.0);
  float accA = 0.0;
  for (int k = 0; k < 3; k++) {
    float fk = float(k);
    vec2 tp = fract(pos - vel * fk * 0.7);
    vec2 d = uv - tp;
    d -= round(d);
    vec2 p = crRot(d, spin) / (sz * (1.0 - fk * 0.1));
    float sd = shapeSdf(p, kind);
    float fill = 1.0 - smoothstep(-0.02, 0.16, sd);
    float rim = 1.0 - smoothstep(0.0, 0.2, abs(sd + 0.02));
    float glow = exp(-max(sd, 0.0) * 4.2) * 0.5;
    float hl = fill * (1.0 - smoothstep(0.4, 0.0, length(p - vec2(-0.22, -0.28))));
    vec3 col = mix(fillCol, rimCol, rim * 0.65);
    col = mix(col, vec3(1.0), hl * 0.32);
    float a = max(fill, glow * 0.55) * (1.0 - fk * 0.34);
    accCol = mix(accCol, col, a);
    accA = max(accA, a);
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
