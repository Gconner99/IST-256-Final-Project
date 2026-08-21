import type { EffectType } from "../core/types";

export const kaleido: EffectType = {
  id: "kaleido",
  name: "Kaleidoscope",
  category: "geometric",
  description: "Radial mirror segments",
  params: [
    { id: "segments", label: "Segments", kind: "int", min: 2, max: 16, step: 1, default: 6 },
    { id: "offset", label: "Offset", kind: "float", min: 0, max: 6.283, step: 0.01, default: 0 },
    { id: "zoom", label: "Zoom", kind: "float", min: 0.4, max: 2.5, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_segments;
uniform float u_offset;
uniform float u_zoom;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec2 p = (uv - 0.5) / max(u_zoom, 0.05);
  float a = atan(p.y, p.x) + u_offset;
  float r = length(p);
  float seg = max(u_segments, 2.0);
  float tau = 6.2831853;
  a = mod(a, tau / seg);
  a = abs(a - tau / seg * 0.5);
  vec2 q = vec2(cos(a), sin(a)) * r + 0.5;
  return sampleSrc(q);
}
`,
};

export const mirror: EffectType = {
  id: "mirror",
  name: "Mirror / Tile",
  category: "geometric",
  description: "Mirror axes and repeat",
  params: [
    { id: "axis", label: "Axis", kind: "enum", default: "x", options: [
      { value: "x", label: "X" }, { value: "y", label: "Y" }, { value: "xy", label: "XY" }, { value: "none", label: "Off" }
    ]},
    { id: "tiles", label: "Tiles", kind: "float", min: 1, max: 8, step: 0.1, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_axis;
uniform float u_tiles;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec2 q = fract(uv * max(u_tiles, 1.0));
  if (u_axis < 0.5) q.x = abs(q.x * 2.0 - 1.0);
  else if (u_axis < 1.5) q.y = abs(q.y * 2.0 - 1.0);
  else if (u_axis < 2.5) q = abs(q * 2.0 - 1.0);
  return sampleSrc(q);
}
`,
};

export const spin: EffectType = {
  id: "spin",
  name: "Transform",
  category: "geometric",
  description: "Rotate / scale / stretch / crop",
  params: [
    { id: "rotate", label: "Rotate", kind: "float", min: -3.1416, max: 3.1416, step: 0.01, default: 0 },
    { id: "scale", label: "Scale", kind: "float", min: 0.2, max: 4, step: 0.01, default: 1 },
    { id: "stretch", label: "Stretch", kind: "float", min: 0.2, max: 3, step: 0.01, default: 1 },
    { id: "crop", label: "Crop", kind: "float", min: 0, max: 0.45, step: 0.01, default: 0 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_rotate;
uniform float u_scale;
uniform float u_stretch;
uniform float u_crop;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec2 p = uv - 0.5;
  p.x *= u_stretch;
  p = rotate2(p, u_rotate);
  p /= max(u_scale, 0.05);
  p += 0.5;
  vec3 c = sampleSrc(p).rgb;
  vec2 b = smoothstep(u_crop, u_crop + 0.02, uv) * smoothstep(u_crop, u_crop + 0.02, 1.0 - uv);
  c *= b.x * b.y;
  return vec4(c, 1.0);
}
`,
};

export const GEOMETRIC_EFFECTS = [kaleido, mirror, spin];
