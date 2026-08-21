/** Shared SDF critters — kept cheap enough for live preview. */
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
float crEllipse(vec2 p, vec2 r) {
  return length(p / max(r, vec2(0.001))) - 1.0;
}
float crCap(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 0.0001), 0.0, 1.0);
  return length(pa - ba * h) - r;
}
vec4 critterOne(vec2 uv, float id, float time, float sizeMul) {
  float h1 = crHash(vec2(id, 0.13));
  float h2 = crHash(vec2(id, 2.77));
  float h3 = crHash(vec2(id, 8.14));
  float h4 = crHash(vec2(id, 19.2));
  vec2 pos = vec2(h1, h2);
  pos += 0.06 * vec2(sin(time * (0.5 + h3) + id), cos(time * (0.4 + h1) + id * 1.7));
  float ang = (h3 - 0.5) * 1.6 + sin(time * (1.1 + h2) + id) * 0.5;
  float sz = (0.05 + h2 * 0.09) * max(sizeMul, 0.15);
  vec2 p = crRot(uv - pos, ang) / sz;
  vec2 bodyR = h4 < 0.33 ? vec2(1.12, 0.8) : h4 < 0.66 ? vec2(0.88, 1.16) : vec2(0.58, 1.38);
  vec3 bodyCol = crHsv(vec3(fract(h1 * 3.7 + 0.02), 0.58 + h2 * 0.4, 0.7 + h3 * 0.28));
  vec3 belly = crHsv(vec3(fract(h1 * 3.7 + 0.46), 0.32, 0.96));
  vec3 accent = crHsv(vec3(fract(h4 * 2.1 + 0.18), 0.88, 1.0));

  float body = 1.0 - smoothstep(-0.02, 0.14, crEllipse(p, bodyR));
  float head = 1.0 - smoothstep(-0.02, 0.12, crEllipse(p - vec2(0.0, -bodyR.y * 0.7), vec2(0.5 + h3 * 0.14, 0.46)));
  float lump = 1.0 - smoothstep(-0.02, 0.12, crEllipse(p - vec2((h3 - 0.5) * 0.7, 0.15), vec2(0.34, 0.3)));

  float nLegs = 2.0 + floor(h1 * 4.0);
  float legs = 0.0;
  for (int li = 0; li < 6; li++) {
    if (float(li) >= nLegs) break;
    float fl = float(li);
    float side = fl < nLegs * 0.5 ? -1.0 : 1.0;
    vec2 hip = vec2(side * 0.36, 0.05 + mod(fl, 3.0) * 0.22);
    float wag = sin(time * 6.5 + fl * 1.9 + id) * 0.38;
    vec2 foot = hip + vec2(side * (0.55 + wag), 0.55);
    legs = max(legs, 1.0 - smoothstep(0.0, 0.09, crCap(p, hip, foot, 0.06)));
  }

  vec2 b1 = vec2(-0.38, -bodyR.y * 0.78 - 0.62) + 0.1 * vec2(sin(time * 5.0 + id), cos(time * 4.0));
  vec2 b2 = vec2(0.38, -bodyR.y * 0.78 - 0.62) + 0.1 * vec2(sin(time * 5.0 + id + 2.0), cos(time * 4.2));
  float ant = max(
    1.0 - smoothstep(0.0, 0.07, crCap(p, vec2(-0.16, -bodyR.y * 0.78 - 0.2), b1, 0.04)),
    1.0 - smoothstep(0.0, 0.07, crCap(p, vec2(0.16, -bodyR.y * 0.78 - 0.2), b2, 0.04))
  );
  float bulbs = max(1.0 - smoothstep(0.11, 0.03, length(p - b1)), 1.0 - smoothstep(0.11, 0.03, length(p - b2)));

  float nEyes = 1.0 + floor(h2 * 3.0);
  float eyeW = 0.0;
  float pupil = 0.0;
  for (int ei = 0; ei < 4; ei++) {
    if (float(ei) >= nEyes) break;
    float fe = float(ei);
    vec2 ep = vec2((fe - (nEyes - 1.0) * 0.5) * 0.28, -bodyR.y * 0.7);
    eyeW = max(eyeW, 1.0 - smoothstep(0.16, 0.07, length((p - ep) * vec2(1.0, 1.15))));
    vec2 look = 0.045 * vec2(sin(time * 1.6 + id), cos(time * 1.3 + fe));
    pupil = max(pupil, 1.0 - smoothstep(0.07, 0.025, length(p - ep - look)));
  }

  float grin = (1.0 - smoothstep(0.05, 0.0, abs(p.y + bodyR.y * 0.32) - 0.035))
    * (1.0 - smoothstep(0.32, 0.14, abs(p.x)));
  float tooth = grin * step(0.5, fract(p.x * 14.0));
  float hat = 0.0;
  if (h4 > 0.58) {
    hat = max(
      1.0 - smoothstep(0.0, 0.08, crEllipse(p - vec2(0.0, -bodyR.y * 0.9 - 0.2), vec2(0.42, 0.11))),
      1.0 - smoothstep(0.0, 0.08, crCap(p, vec2(0.0, -bodyR.y * 0.9 - 0.2), vec2(0.0, -bodyR.y * 0.9 - 0.48), 0.07))
    );
  }
  float tongue = 0.0;
  if (h3 > 0.62) {
    tongue = 1.0 - smoothstep(0.0, 0.08, crCap(p, vec2(0.0, bodyR.y * 0.25), vec2(0.1 * sin(time * 6.0 + id), 0.52), 0.06));
  }

  float fill = max(max(body, head), max(lump, legs));
  fill = max(fill, max(ant, hat));
  fill = max(fill, tongue);
  vec3 col = mix(bodyCol, belly, head * 0.55);
  col = mix(col, vec3(1.0, 0.96, 0.82), eyeW);
  col = mix(col, vec3(0.07, 0.04, 0.09), pupil);
  col = mix(col, accent, bulbs);
  col = mix(col, vec3(0.15, 0.05, 0.08), grin);
  col = mix(col, vec3(1.0, 0.95, 0.9), tooth);
  col = mix(col, vec3(1.0, 0.28, 0.45), tongue);
  col = mix(col, accent, hat * 0.85);
  return vec4(col, clamp(fill, 0.0, 1.0));
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
