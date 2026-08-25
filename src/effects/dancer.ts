import type { EffectType } from "../core/types";
import { DANCER_GLSL, DANCER_MINI_GLSL } from "../engine/dancer.glsl";

const APPLY_NORMAL = `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(figFoldUv(uv), u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`;

const APPLY_MINI = `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(figFoldUv(uv), u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`;

const UNIFORMS = `
uniform float u_count;
uniform float u_size;
uniform float u_crowd;
uniform float u_place;
uniform float u_move;
uniform float u_grow;
uniform float u_coat;
uniform float u_fold;
uniform float u_echo;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
vec2 figFoldUv(vec2 uv) {
  if (u_fold < 0.5) return uv;
  if (u_fold > 2.5) {
    uv.x = 0.5 - abs(uv.x - 0.5);
    return uv;
  }
  vec2 c = vec2(0.5, 0.42);
  vec2 p = uv - c;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  p.x *= aspect;
  float a = atan(p.y, p.x);
  float r = length(p);
  float segs = u_fold < 1.5 ? 6.0 : 2.0;
  float slice = 6.2831853 / segs;
  a = mod(a, slice);
  a = abs(a - slice * 0.5);
  p = vec2(cos(a), sin(a)) * r;
  p.x /= aspect;
  return p + c;
}
`;

export const dancer: EffectType = {
  id: "dancer",
  name: "Idol",
  category: "wacky",
  description: "One seed-grown low-poly creature with a face like an animal that does not exist. Grow dresses this body. Coat tints the paint. Fold fans the creature into a cheap kaleido saint. Drop an MP3 and they dance to it. Mini army fills the frame with tiny ones in sync",
  params: [
    { id: "count", label: "Count", kind: "int", min: 1, max: 4, step: 1, default: 1 },
    { id: "size", label: "Size", kind: "float", min: 0.12, max: 2.5, step: 0.01, default: 0.12 },
    {
      id: "crowd",
      label: "Crowd",
      kind: "enum",
      default: "normal",
      randomizable: false,
      options: [
        { value: "normal", label: "Normal" },
        { value: "mini", label: "Mini army" },
      ],
    },
    {
      id: "place",
      label: "Place",
      kind: "enum",
      default: "center",
      options: [
        { value: "center", label: "Center" },
        { value: "scatter", label: "Scatter + depth" },
      ],
    },
    {
      id: "move",
      label: "Move",
      kind: "enum",
      default: "dance",
      options: [
        { value: "dance", label: "Dance" },
        { value: "drift", label: "Drift" },
        { value: "float", label: "Float" },
        { value: "orbit", label: "Orbit" },
      ],
    },
    {
      id: "grow",
      label: "Grow",
      kind: "enum",
      default: "wild",
      options: [
        { value: "wild", label: "Wild" },
        { value: "petals", label: "Petals" },
        { value: "halo", label: "Halo" },
        { value: "antenna", label: "Antenna" },
        { value: "skirt", label: "Skirt" },
        { value: "quiet", label: "Quiet" },
        { value: "crown", label: "Crown" },
        { value: "eyes", label: "Extra eyes" },
        { value: "votive", label: "Votive" },
        { value: "bow", label: "Bow" },
        { value: "twin", label: "Twin face" },
        { value: "neck", label: "Long neck" },
        { value: "pack", label: "Pack" },
        { value: "horns", label: "Horns" },
        { value: "wings", label: "Wings" },
        { value: "tail", label: "Tail" },
        { value: "collar", label: "Collar" },
        { value: "tusks", label: "Tusks" },
        { value: "arms", label: "Extra arms" },
      ],
    },
    {
      id: "coat",
      label: "Coat",
      kind: "enum",
      default: "wild",
      options: [
        { value: "wild", label: "Wild" },
        { value: "cream", label: "Cream" },
        { value: "moss", label: "Moss" },
        { value: "sodium", label: "Sodium" },
        { value: "night", label: "Night" },
        { value: "candy", label: "Candy" },
        { value: "bruise", label: "Bruise" },
        { value: "gold", label: "Gold leaf" },
        { value: "xerox", label: "Xerox pink" },
        { value: "rust", label: "Rust" },
        { value: "ice", label: "Ice" },
        { value: "blood", label: "Blood" },
        { value: "acid", label: "Acid" },
        { value: "ink", label: "Ink" },
      ],
    },
    {
      id: "fold",
      label: "Fold",
      kind: "enum",
      default: "none",
      randomizable: false,
      options: [
        { value: "none", label: "None" },
        { value: "prism", label: "Prism" },
        { value: "gate", label: "Gate" },
        { value: "mirror", label: "Mirror" },
      ],
    },
    { id: "echo", label: "Echo", kind: "float", min: 0, max: 1, step: 0.01, default: 0.5 },
    { id: "seed", label: "Seed", kind: "int", min: 1, max: 9999, step: 1, default: 256 },
    { id: "speed", label: "Dance", kind: "float", min: 0, max: 3, step: 0.01, default: 1.0 },
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `${UNIFORMS}${DANCER_GLSL}`,
  applyGlsl: APPLY_NORMAL,
};

export function dancerForCompile(mini: boolean): EffectType {
  if (!mini) return dancer;
  return {
    ...dancer,
    extraUniforms: `${UNIFORMS}${DANCER_GLSL}${DANCER_MINI_GLSL}`,
    applyGlsl: APPLY_MINI,
  };
}
