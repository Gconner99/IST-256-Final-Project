/** Folk / tide / cloud sticker kits. Compiled only into those skin variants. */

export const FOLK_STICKER_GLSL = `
float folkBranch(vec2 p, float id) {
  float d = crCap(p, vec2(-0.95, -0.18), vec2(0.95, 0.12), mix(0.055, 0.1, crHash(vec2(id, 1.0))));
  d = min(d, crCap(p, vec2(0.08, 0.06), vec2(0.52, 0.88), 0.05));
  d = min(d, crCap(p, vec2(-0.12, -0.02), vec2(-0.58, 0.78), 0.045));
  d = min(d, crCap(p, vec2(0.42, 0.1), vec2(0.85, -0.42), 0.04));
  d = min(d, crCap(p, vec2(-0.35, 0.02), vec2(-0.82, -0.55), 0.038));
  return d;
}
float folkLeaf(vec2 p, float id) {
  p.y += 0.08;
  float d = length(p * vec2(1.4, 0.7)) - mix(0.5, 0.78, crHash(vec2(id, 1.0)));
  d = min(d, crCap(p, vec2(0.0, -0.82), vec2(0.0, 0.62), 0.035));
  return d;
}
float folkDeer(vec2 p, float id) {
  float d = crBox2(p - vec2(0.06, 0.02), vec2(0.4, 0.18));
  d = min(d, length(p - vec2(0.46, 0.22)) - 0.15);
  d = min(d, length(p - vec2(-0.36, 0.26)) - 0.13);
  d = min(d, length(p - vec2(-0.58, 0.48)) - 0.11);
  d = min(d, crCap(p, vec2(-0.62, 0.56), vec2(-0.78, 1.02), 0.03));
  d = min(d, crCap(p, vec2(-0.62, 0.56), vec2(-0.4, 0.98), 0.028));
  d = min(d, crCap(p, vec2(-0.22, -0.08), vec2(-0.2, -0.88), 0.04));
  d = min(d, crCap(p, vec2(0.28, -0.08), vec2(0.32, -0.88), 0.04));
  d = min(d, crCap(p, vec2(0.08, -0.08), vec2(0.02, -0.72), 0.032));
  return d;
}
float folkBird(vec2 p, float id) {
  float d = length(p * vec2(1.15, 1.45)) - mix(0.28, 0.4, crHash(vec2(id, 1.0)));
  d = min(d, crCap(p, vec2(-0.05, 0.05), vec2(-0.85, 0.42), 0.05));
  d = min(d, crCap(p, vec2(-0.05, 0.0), vec2(-0.78, -0.38), 0.045));
  d = min(d, crCap(p, vec2(0.28, 0.05), vec2(0.62, 0.08), 0.04));
  d = min(d, length(p - vec2(0.38, 0.18)) - 0.12);
  return d;
}
float folkMush(vec2 p, float id) {
  float d = crCap(p, vec2(0.0, -0.88), vec2(0.0, 0.02), mix(0.09, 0.15, crHash(vec2(id, 1.0))));
  vec2 capP = (p - vec2(0.0, 0.22)) * vec2(0.7, 1.2);
  float cap = length(capP) - mix(0.48, 0.64, crHash(vec2(id, 2.0)));
  cap = max(cap, -(p.y - 0.02));
  d = min(d, cap);
  return d;
}
float folkAcorn(vec2 p, float id) {
  float d = length((p - vec2(0.0, -0.12)) * vec2(1.15, 0.9)) - mix(0.38, 0.5, crHash(vec2(id, 1.0)));
  d = min(d, crBox2(p - vec2(0.0, 0.32), vec2(0.42, 0.16)));
  d = min(d, crCap(p, vec2(0.0, 0.46), vec2(0.0, 0.82), 0.04));
  return d;
}
float folkMoth(vec2 p, float id) {
  float d = length(p * vec2(1.6, 0.7) - vec2(-0.55, 0.0)) - mix(0.38, 0.52, crHash(vec2(id, 1.0)));
  d = min(d, length(p * vec2(1.6, 0.7) - vec2(0.55, 0.0)) - mix(0.38, 0.52, crHash(vec2(id, 2.0))));
  d = min(d, crCap(p, vec2(0.0, -0.35), vec2(0.0, 0.4), 0.06));
  return d;
}
float folkRabbit(vec2 p, float id) {
  float d = length(p - vec2(0.0, -0.15)) - mix(0.38, 0.5, crHash(vec2(id, 1.0)));
  d = min(d, length(p - vec2(-0.22, 0.42)) - 0.16);
  d = min(d, crCap(p, vec2(-0.28, 0.5), vec2(-0.42, 1.05), 0.07));
  d = min(d, crCap(p, vec2(-0.12, 0.5), vec2(-0.08, 0.98), 0.06));
  d = min(d, length(p - vec2(0.28, -0.42)) - 0.12);
  return d;
}
float folkPine(vec2 p, float id) {
  float d = crCap(p, vec2(0.0, -1.0), vec2(0.0, -0.25), 0.07);
  d = min(d, length((p - vec2(0.0, -0.05)) * vec2(0.85, 1.55)) - 0.52);
  d = min(d, length((p - vec2(0.0, 0.32)) * vec2(0.95, 1.45)) - 0.38);
  d = min(d, length((p - vec2(0.0, 0.62)) * vec2(1.05, 1.35)) - 0.24);
  return d;
}
float folkFam(vec2 p, float id, float fam) {
  float k = mod(fam, 9.0);
  if (k < 0.5) return folkBranch(p, id);
  if (k < 1.5) return folkLeaf(p, id);
  if (k < 2.5) return folkDeer(p, id);
  if (k < 3.5) return folkBird(p, id);
  if (k < 4.5) return folkMush(p, id);
  if (k < 5.5) return folkAcorn(p, id);
  if (k < 6.5) return folkMoth(p, id);
  if (k < 7.5) return folkRabbit(p, id);
  return folkPine(p, id);
}
float stickerFam(vec2 p, float id, float fam) {
  return folkFam(p, id, fam);
}
`;

export const TIDE_STICKER_GLSL = `
float tideFish(vec2 p, float id) {
  float d = length(p * vec2(0.7, 1.25)) - mix(0.42, 0.58, crHash(vec2(id, 1.0)));
  d = min(d, length(p - vec2(0.42, 0.08)) - 0.12);
  vec2 t = p - vec2(-0.55, 0.0);
  d = min(d, max(abs(t.x) - 0.18, abs(t.y) - 0.22 - t.x * 0.4));
  return d;
}
float tideKelp(vec2 p, float id) {
  float w = 0.12 * sin(p.y * 6.0 + crHash(vec2(id, 1.0)) * 6.0);
  float d = crCap(p, vec2(-0.05 + w, -1.0), vec2(0.08 - w, 1.0), mix(0.05, 0.09, crHash(vec2(id, 2.0))));
  d = min(d, crCap(p, vec2(0.1, -0.2), vec2(0.55, 0.15), 0.04));
  d = min(d, crCap(p, vec2(-0.12, 0.35), vec2(-0.55, 0.55), 0.035));
  return d;
}
float tideShell(vec2 p, float id) {
  float d = length(p * vec2(1.0, 1.25)) - mix(0.55, 0.75, crHash(vec2(id, 1.0)));
  d = max(d, -(length(p * vec2(1.0, 1.25)) - mix(0.28, 0.4, crHash(vec2(id, 2.0)))));
  d = min(d, crCap(p, vec2(0.0, 0.0), vec2(0.0, 0.7), 0.045));
  return d;
}
float tideBubbles(vec2 p, float id) {
  float d = length(p - vec2(-0.15, -0.2)) - mix(0.28, 0.4, crHash(vec2(id, 1.0)));
  d = min(d, length(p - vec2(0.35, 0.15)) - mix(0.16, 0.26, crHash(vec2(id, 2.0))));
  d = min(d, length(p - vec2(0.05, 0.55)) - mix(0.1, 0.18, crHash(vec2(id, 3.0))));
  return d;
}
float tideStar(vec2 p, float id) {
  float d = length(p) - 0.18;
  for (int i = 0; i < 5; i++) {
    float a = float(i) * 1.256637 + crHash(vec2(id, 1.0)) * 0.3;
    vec2 tip = vec2(cos(a), sin(a)) * mix(0.7, 1.0, crHash(vec2(id, 2.0 + float(i))));
    d = min(d, crCap(p, vec2(0.0), tip, 0.08));
  }
  return d;
}
float tideJelly(vec2 p, float id) {
  float d = length((p - vec2(0.0, 0.28)) * vec2(0.85, 1.2)) - mix(0.38, 0.52, crHash(vec2(id, 1.0)));
  d = max(d, p.y - 0.55);
  d = min(d, crCap(p, vec2(-0.18, 0.05), vec2(-0.22, -0.85), 0.035));
  d = min(d, crCap(p, vec2(0.0, 0.05), vec2(0.04, -0.92), 0.03));
  d = min(d, crCap(p, vec2(0.2, 0.05), vec2(0.28, -0.8), 0.032));
  return d;
}
float tideHorse(vec2 p, float id) {
  float d = crCap(p, vec2(0.05, -0.7), vec2(-0.05, 0.15), 0.09);
  d = min(d, crCap(p, vec2(-0.05, 0.15), vec2(-0.42, 0.55), 0.07));
  d = min(d, length(p - vec2(-0.5, 0.62)) - 0.14);
  d = min(d, crCap(p, vec2(-0.05, -0.15), vec2(0.45, 0.05), 0.04));
  return d;
}
float tideCoral(vec2 p, float id) {
  float d = length(p) - 0.18;
  for (int i = 0; i < 5; i++) {
    float a = float(i) * 1.15 + crHash(vec2(id, float(i))) * 0.4;
    vec2 tip = vec2(cos(a), sin(a)) * mix(0.45, 0.95, crHash(vec2(id, 8.0 + float(i))));
    d = min(d, crCap(p, vec2(0.0), tip, mix(0.05, 0.1, crHash(vec2(id, 12.0 + float(i))))));
    d = min(d, length(p - tip) - 0.12);
  }
  return d;
}
float tideWave(vec2 p, float id) {
  float d = crCap(p, vec2(-0.9, -0.1), vec2(0.2, 0.15), 0.08);
  d = min(d, crCap(p, vec2(0.15, 0.15), vec2(0.7, -0.05), 0.07));
  d = min(d, crCap(p, vec2(0.55, 0.25), vec2(0.85, 0.55), 0.06));
  d = min(d, length(p - vec2(-0.15, -0.35)) - mix(0.12, 0.2, crHash(vec2(id, 1.0))));
  return d;
}
float tideFam(vec2 p, float id, float fam) {
  float k = mod(fam, 9.0);
  if (k < 0.5) return tideFish(p, id);
  if (k < 1.5) return tideKelp(p, id);
  if (k < 2.5) return tideShell(p, id);
  if (k < 3.5) return tideBubbles(p, id);
  if (k < 4.5) return tideStar(p, id);
  if (k < 5.5) return tideJelly(p, id);
  if (k < 6.5) return tideHorse(p, id);
  if (k < 7.5) return tideCoral(p, id);
  return tideWave(p, id);
}
float stickerFam(vec2 p, float id, float fam) {
  return tideFam(p, id, fam);
}
`;

export const CLOUD_STICKER_GLSL = `
float cloudBird(vec2 p, float id) {
  float d = crCap(p, vec2(-0.85, 0.15), vec2(0.0, -0.05), 0.055);
  d = min(d, crCap(p, vec2(0.0, -0.05), vec2(0.85, 0.2), 0.055));
  d = min(d, length(p - vec2(0.05, 0.0)) - 0.1);
  return d;
}
float cloudKite(vec2 p, float id) {
  float d = abs(p.x) + abs(p.y) - mix(0.55, 0.75, crHash(vec2(id, 1.0)));
  d = min(d, crCap(p, vec2(0.0, -0.55), vec2(0.15, -1.05), 0.03));
  d = min(d, crCap(p, vec2(0.12, -0.85), vec2(0.42, -0.95), 0.025));
  return d;
}
float cloudBalloon(vec2 p, float id) {
  float d = length((p - vec2(0.0, 0.22)) * vec2(1.05, 0.85)) - mix(0.42, 0.58, crHash(vec2(id, 1.0)));
  d = min(d, crCap(p, vec2(0.0, -0.32), vec2(0.08, -0.95), 0.025));
  d = min(d, crBox2(p - vec2(0.0, -0.28), vec2(0.08, 0.06)));
  return d;
}
float cloudDrop(vec2 p, float id) {
  p.y += 0.1;
  float d = length(p - vec2(0.0, -0.22)) - mix(0.28, 0.4, crHash(vec2(id, 1.0)));
  d = min(d, length((p - vec2(0.0, 0.28)) * vec2(1.6, 0.7)) - 0.22);
  return d;
}
float cloudSun(vec2 p, float id) {
  float d = length(p) - mix(0.32, 0.44, crHash(vec2(id, 1.0)));
  for (int i = 0; i < 8; i++) {
    float a = float(i) * 0.785398;
    vec2 tip = vec2(cos(a), sin(a)) * 0.92;
    d = min(d, crCap(p, tip * 0.52, tip, 0.04));
  }
  return d;
}
float cloudFam(vec2 p, float id, float fam) {
  float k = mod(fam, 9.0);
  if (k < 0.5) return cloud(p, id);
  if (k < 1.5) return cloudBird(p, id);
  if (k < 2.5) return cloudKite(p, id);
  if (k < 3.5) return cloudBalloon(p, id);
  if (k < 4.5) return crescent(p, id);
  if (k < 5.5) return sparkle(p, id);
  if (k < 6.5) return cloudDrop(p, id);
  if (k < 7.5) return cloudSun(p, id);
  return cloud(p * 0.85 + vec2(0.1, 0.0), id + 3.1);
}
float stickerFam(vec2 p, float id, float fam) {
  return cloudFam(p, id, fam);
}
`;
