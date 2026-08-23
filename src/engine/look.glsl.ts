/** Final-pass picture grades. Cheap, one compile, no floater/idol shader variants. */

export const SKIN_GLSL = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform vec2 uResolution;
uniform float uTime;
uniform int uSkin;

float luma(vec3 c) {
  return dot(c, vec3(0.2126, 0.7152, 0.0722));
}

vec3 sampleBlur(vec2 uv, float px) {
  vec2 t = px / max(uResolution, vec2(1.0));
  vec3 a = texture(uTex, uv + vec2(t.x, 0.0)).rgb;
  vec3 b = texture(uTex, uv - vec2(t.x, 0.0)).rgb;
  vec3 c = texture(uTex, uv + vec2(0.0, t.y)).rgb;
  vec3 d = texture(uTex, uv - vec2(0.0, t.y)).rgb;
  return (a + b + c + d) * 0.25;
}

vec3 gradeAero(vec3 col, vec2 uv) {
  vec3 blur = sampleBlur(uv, 3.6);
  float l = luma(col);
  vec3 sky = vec3(0.52, 0.86, 0.96);
  col = mix(col, col * vec3(0.72, 1.08, 1.18) + sky * 0.14, 0.58);
  col += blur * 0.3;
  float spec = smoothstep(0.58, 0.94, l);
  col += vec3(0.82, 0.96, 1.0) * spec * 0.38;
  float cau = sin(uv.x * 18.0 + uTime * 0.7) * sin(uv.y * 14.0 - uTime * 0.5);
  col += vec3(0.12, 0.55, 0.72) * cau * 0.07 * (0.35 + l);
  float edge = smoothstep(0.32, 1.05, length(uv - 0.5));
  col = mix(col, sky, edge * 0.24);
  return col;
}

vec3 gradeChrome(vec3 col, vec2 uv) {
  vec2 px = 1.6 / max(uResolution, vec2(1.0));
  float r = texture(uTex, uv + vec2(px.x, 0.0)).r;
  float b = texture(uTex, uv - vec2(px.x, 0.0)).b;
  col = vec3(r, col.g, b);
  float l = luma(col);
  col = pow(max(col, 0.0), vec3(0.82));
  col = (col - 0.5) * 1.38 + 0.46;
  vec3 irid = mix(vec3(0.12, 0.92, 1.0), vec3(1.0, 0.18, 0.82), smoothstep(0.12, 0.88, l));
  col = mix(col, col * irid + irid * 0.1, 0.46);
  col += vec3(0.78, 0.88, 1.0) * pow(max(l, 0.0), 7.0) * 0.7;
  return col;
}

vec3 gradeTape(vec3 col, vec2 uv) {
  float row = floor(uv.y * uResolution.y * 0.5);
  float jitter = (fract(sin(row * 17.13 + uTime * 3.1) * 43758.5) - 0.5) * 0.0032;
  vec2 u = uv + vec2(jitter, 0.0);
  vec3 smeared = texture(uTex, u).rgb;
  vec3 blur = sampleBlur(u, 2.2);
  col = mix(smeared, blur, 0.24);
  col = vec3(
    dot(col, vec3(0.42, 0.46, 0.14)),
    dot(col, vec3(0.28, 0.4, 0.12)),
    dot(col, vec3(0.12, 0.2, 0.16))
  );
  col *= vec3(1.28, 0.94, 0.42);
  col = (col - 0.07) * 1.16 + 0.05;
  float scan = 0.86 + 0.14 * sin(uv.y * uResolution.y * 3.14159);
  col *= scan;
  col += vec3(1.0, 0.68, 0.18) * pow(max(luma(col), 0.0), 3.6) * 0.28;
  float vig = 1.0 - smoothstep(0.38, 1.05, length(uv - 0.5)) * 0.48;
  col *= vig;
  return col;
}

vec3 gradeMall(vec3 col, vec2 uv) {
  vec2 px = 2.1 / max(uResolution, vec2(1.0));
  vec3 split = vec3(
    texture(uTex, uv + vec2(px.x, 0.0)).r,
    col.g,
    texture(uTex, uv - vec2(px.x, 0.0)).b
  );
  col = mix(col, split, 0.58);
  float l = luma(col);
  vec3 shadow = vec3(0.48, 0.1, 0.58);
  vec3 mid = vec3(0.18, 0.86, 0.8);
  vec3 hi = vec3(1.0, 0.7, 0.84);
  vec3 wash = mix(shadow, mix(mid, hi, smoothstep(0.38, 0.92, l)), smoothstep(0.04, 0.55, l));
  col = mix(col, col * wash * 1.18 + wash * 0.14, 0.58);
  float line = step(0.972, fract(uv.y * 88.0 + uTime * 0.18));
  col += vec3(0.95, 0.4, 0.82) * line * 0.1;
  return col;
}

void main() {
  vec4 src = texture(uTex, vUv);
  vec3 col = src.rgb;
  if (uSkin == 1) col = gradeAero(col, vUv);
  else if (uSkin == 2) col = gradeChrome(col, vUv);
  else if (uSkin == 3) col = gradeTape(col, vUv);
  else if (uSkin == 4) col = gradeMall(col, vUv);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;
