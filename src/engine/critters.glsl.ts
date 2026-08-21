/** Shared SDF critter drawing — used by the generator and the overlay effect. */
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
  float h5 = crHash(vec2(id, 41.6));
  vec2 pos = vec2(h1, h2);
  pos += 0.07 * vec2(sin(time * (0.5 + h3) + id), cos(time * (0.4 + h1) + id * 1.7));
  float ang = (h3 - 0.5) * 1.8 + sin(time * (1.1 + h2) + id) * 0.55;
  float sz = (0.04 + h2 * 0.11) * max(sizeMul, 0.15);
  vec2 p = crRot(uv - pos, ang) / sz;

  float kind = floor(h5 * 3.0);
  vec2 bodyR = kind < 0.5 ? vec2(1.15, 0.78) : kind < 1.5 ? vec2(0.88, 1.18) : vec2(0.52, 1.48);
  vec3 bodyCol = crHsv(vec3(fract(h1 * 3.7 + 0.02), 0.62 + h2 * 0.38, 0.68 + h3 * 0.32));
  vec3 belly = crHsv(vec3(fract(h1 * 3.7 + 0.46), 0.35 + h4 * 0.3, 0.96));
  vec3 accent = crHsv(vec3(fract(h4 * 2.1 + 0.18), 0.9, 1.0));
  vec3 dark = vec3(0.07, 0.04, 0.09);

  float body = 1.0 - smoothstep(-0.02, 0.14, crEllipse(p, bodyR));
  float head = 1.0 - smoothstep(-0.02, 0.12, crEllipse(p - vec2(0.0, -bodyR.y * 0.72), vec2(0.52 + h3 * 0.18, 0.48)));
  float lumps = 0.0;
  for (int bi = 0; bi < 4; bi++) {
    float fb = float(bi);
    vec2 bp = vec2((crHash(vec2(id, fb + 9.0)) - 0.5) * 1.2, (crHash(vec2(id, fb + 13.0)) - 0.35) * 1.4);
    lumps = max(lumps, 1.0 - smoothstep(-0.02, 0.12, crEllipse(p - bp, vec2(0.28 + h2 * 0.2, 0.24 + h1 * 0.18))));
  }

  float nLegs = kind > 1.5 ? 6.0 + floor(h1 * 2.0) : (kind < 0.5 ? 2.0 + floor(h1 * 2.0) : 3.0 + floor(h1 * 5.0));
  float legs = 0.0;
  for (int li = 0; li < 8; li++) {
    if (float(li) >= nLegs) break;
    float fl = float(li);
    float side = fl < nLegs * 0.5 ? -1.0 : 1.0;
    float k = mod(fl, 4.0);
    vec2 hip = vec2(side * (0.32 + bodyR.x * 0.12), 0.02 + k * 0.24);
    float wag = sin(time * (6.0 + h4 * 4.0) + fl * 1.9 + id) * (0.35 + h3 * 0.35);
    vec2 foot = hip + vec2(side * (0.55 + wag), 0.55 + 0.18 * sin(time * 5.0 + fl + id));
    legs = max(legs, 1.0 - smoothstep(0.0, 0.09, crCap(p, hip, foot, 0.055 + h2 * 0.04)));
  }

  float tents = 0.0;
  if (kind < 0.5 || h4 > 0.6) {
    for (int ti = 0; ti < 4; ti++) {
      float ft = float(ti);
      float side = ft < 2.0 ? -1.0 : 1.0;
      vec2 root = vec2(side * 0.2, -bodyR.y * 0.55);
      vec2 tip = root + vec2(
        side * (0.45 + 0.2 * sin(time * 3.0 + ft + id)),
        -0.55 + 0.22 * cos(time * 4.2 + ft * 2.0)
      );
      tents = max(tents, 1.0 - smoothstep(0.0, 0.08, crCap(p, root, tip, 0.04)));
      tents = max(tents, 1.0 - smoothstep(0.12, 0.03, length(p - tip)));
    }
  }

  vec2 a1 = vec2(-0.16, -bodyR.y * 0.78 - 0.28);
  vec2 a2 = vec2(0.16, -bodyR.y * 0.78 - 0.28);
  vec2 b1 = vec2(-0.4, -bodyR.y * 0.78 - 0.72) + vec2(sin(time * 5.0 + id), cos(time * 4.0)) * 0.14;
  vec2 b2 = vec2(0.4, -bodyR.y * 0.78 - 0.72) + vec2(sin(time * 5.0 + id + 2.0), cos(time * 4.2)) * 0.14;
  float ant = max(
    1.0 - smoothstep(0.0, 0.07, crCap(p, a1, b1, 0.04)),
    1.0 - smoothstep(0.0, 0.07, crCap(p, a2, b2, 0.04))
  );
  float bulbs = max(
    1.0 - smoothstep(0.12, 0.03, length(p - b1)),
    1.0 - smoothstep(0.12, 0.03, length(p - b2))
  );
  if (h3 > 0.72) {
    vec2 b3 = vec2(0.0, -bodyR.y * 0.78 - 0.85) + 0.1 * vec2(sin(time * 3.3 + id), 0.0);
    ant = max(ant, 1.0 - smoothstep(0.0, 0.07, crCap(p, vec2(0.0, a1.y), b3, 0.035)));
    bulbs = max(bulbs, 1.0 - smoothstep(0.11, 0.03, length(p - b3)));
  }

  float nEyes = 1.0 + floor(h2 * 5.0);
  float eyeW = 0.0;
  float pupil = 0.0;
  for (int ei = 0; ei < 6; ei++) {
    if (float(ei) >= nEyes) break;
    float fe = float(ei);
    vec2 ep = vec2((fe - (nEyes - 1.0) * 0.5) * (0.22 + h1 * 0.12), -bodyR.y * 0.72 + crHash(vec2(id, fe + 4.0)) * 0.14);
    float er = 0.13 + crHash(vec2(id, fe + 21.0)) * 0.08;
    eyeW = max(eyeW, 1.0 - smoothstep(er, er * 0.45, length((p - ep) * vec2(1.0, 1.15))));
    vec2 look = 0.05 * vec2(sin(time * 1.6 + id + fe), cos(time * 1.3 + fe * 1.7));
    pupil = max(pupil, 1.0 - smoothstep(er * 0.45, er * 0.18, length(p - ep - look)));
  }

  float grin = (1.0 - smoothstep(0.05, 0.0, abs(p.y + bodyR.y * 0.35) - 0.04))
    * (1.0 - smoothstep(0.34, 0.14, abs(p.x)));
  float tooth = grin * step(0.5, fract(p.x * 16.0 + time * 0.25));
  float tongue = 0.0;
  if (h4 > 0.45) {
    vec2 t0 = vec2(0.0, bodyR.y * 0.28);
    vec2 t1 = vec2(0.12 * sin(time * 6.0 + id), 0.55 + 0.1 * sin(time * 8.0 + id));
    tongue = 1.0 - smoothstep(0.0, 0.08, crCap(p, t0, t1, 0.07));
  }

  float tail = 0.0;
  if (h1 > 0.28) {
    vec2 tA = vec2(0.0, bodyR.y * 0.85);
    vec2 tB = vec2(0.35 * sin(time * 2.4 + id), bodyR.y * 0.85 + 0.7);
    tail = max(
      1.0 - smoothstep(0.0, 0.1, crCap(p, tA, tB, 0.08)),
      1.0 - smoothstep(0.16, 0.04, length(p - tB))
    );
  }

  float wings = 0.0;
  if (h2 > 0.62) {
    float flap = 0.2 * sin(time * 14.0 + id);
    wings = max(
      1.0 - smoothstep(-0.02, 0.1, crEllipse(p - vec2(-0.85, -0.1 + flap), vec2(0.55, 0.22))),
      1.0 - smoothstep(-0.02, 0.1, crEllipse(p - vec2(0.85, -0.1 - flap), vec2(0.55, 0.22)))
    );
  }

  float horns = 0.0;
  if (h5 > 0.55) {
    horns = max(
      1.0 - smoothstep(0.0, 0.08, crCap(p, vec2(-0.18, -bodyR.y * 0.9), vec2(-0.32, -bodyR.y * 0.9 - 0.42), 0.05)),
      1.0 - smoothstep(0.0, 0.08, crCap(p, vec2(0.18, -bodyR.y * 0.9), vec2(0.32, -bodyR.y * 0.9 - 0.42), 0.05))
    );
  }

  float hat = 0.0;
  if (h4 > 0.58) {
    hat = max(
      1.0 - smoothstep(0.0, 0.08, crEllipse(p - vec2(0.0, -bodyR.y * 0.9 - 0.22), vec2(0.48, 0.12))),
      1.0 - smoothstep(0.0, 0.08, crCap(p, vec2(0.0, -bodyR.y * 0.9 - 0.22), vec2(0.0, -bodyR.y * 0.9 - 0.52), 0.075))
    );
  }

  float spots = 0.0;
  for (int si = 0; si < 6; si++) {
    vec2 sp = vec2(crHash(vec2(id, float(si) + 50.0)) - 0.5, crHash(vec2(id, float(si) + 70.0)) - 0.45) * 1.4;
    spots = max(spots, 1.0 - smoothstep(0.16, 0.05, length(p - sp)));
  }
  spots *= body;

  float fill = max(max(body, head), max(lumps, legs));
  fill = max(fill, max(max(ant, hat), max(tents, tail)));
  fill = max(fill, max(wings, horns));
  fill = max(fill, tongue);
  vec3 col = bodyCol;
  col = mix(col, belly, head * 0.55 + body * 0.2);
  col = mix(col, accent * 0.7, spots * 0.85);
  col = mix(col, accent * 0.55 + vec3(0.9, 0.95, 1.0) * 0.45, wings * 0.75);
  col = mix(col, vec3(1.0, 0.96, 0.82), eyeW);
  col = mix(col, dark, pupil);
  col = mix(col, accent, bulbs);
  col = mix(col, vec3(0.15, 0.05, 0.08), grin);
  col = mix(col, vec3(1.0, 0.95, 0.9), tooth);
  col = mix(col, vec3(1.0, 0.25, 0.45), tongue);
  col = mix(col, accent, hat * 0.85);
  col = mix(col, mix(accent, dark, 0.3), horns * 0.8);
  float a = clamp(fill, 0.0, 1.0);
  return vec4(col, a);
}
vec4 critterField(vec2 uv, float count, float seed, float time, float sizeMul) {
  vec4 acc = vec4(0.0);
  for (int i = 0; i < 14; i++) {
    if (float(i) >= count) break;
    vec4 d = critterOne(uv, float(i) * 13.17 + seed * 19.0, time, sizeMul);
    acc.rgb = mix(acc.rgb, d.rgb, d.a);
    acc.a = max(acc.a, d.a);
  }
  return acc;
}
`;
