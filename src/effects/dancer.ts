import type { EffectType } from "../core/types";
import { DANCER_GLSL, DANCER_MINI_GLSL, dancerGlslForKind } from "../engine/dancer.glsl";

const APPLY_NORMAL = `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_echo, u_move);
  float cover = f.a >= 0.95 ? 1.0 : f.a;
  vec3 placed = mix(src, f.rgb, clamp(cover * u_amount, 0.0, 1.0));
  return vec4(placed, 1.0);
}
`;

const APPLY_MINI = `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 f = figureRenderMini(uv, u_seed, uTime * u_speed, u_size, u_count, u_echo, u_move);
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
uniform float u_kind;
uniform float u_move;
uniform float u_grow;
uniform float u_coat;
uniform float u_echo;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
`;

export const dancer: EffectType = {
  id: "dancer",
  name: "Idol",
  category: "wacky",
  description: "One seed-grown low-poly character. Kind picks the current creature, or a moth, fish, bird, beetle, kettle, lamp, tape, dragon, moon, or walking block. Grow and Coat still dress whoever it is. Mini army fills the frame with tiny ones in sync",
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
      id: "kind",
      label: "Kind",
      kind: "enum",
      default: "wild",
      options: [
        { value: "wild", label: "Wild" },
        { value: "moth", label: "Moth" },
        { value: "fish", label: "Fish" },
        { value: "bird", label: "Bird" },
        { value: "beetle", label: "Beetle" },
        { value: "kettle", label: "Kettle" },
        { value: "lamp", label: "Lamp" },
        { value: "tape", label: "Tape" },
        { value: "dragon", label: "Dragon" },
        { value: "moon", label: "Moon" },
        { value: "block", label: "Block" },
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

export const IDOL_KINDS = [
  "wild",
  "moth",
  "fish",
  "bird",
  "beetle",
  "kettle",
  "lamp",
  "tape",
  "dragon",
  "moon",
  "block",
] as const;

export function dancerForCompile(mini: boolean, kind = "wild"): EffectType {
  const k = (IDOL_KINDS as readonly string[]).includes(kind) ? kind : "wild";
  const glsl = dancerGlslForKind(k);
  const defs =
    k === "wild"
      ? ""
      : `#define FIG_KIND 1
#define FIG_KIND_${k.toUpperCase()} 1
`;
  if (!mini && k === "wild") return dancer;
  return {
    ...dancer,
    extraUniforms: `${defs}${UNIFORMS}${glsl}${mini ? DANCER_MINI_GLSL : ""}`,
    applyGlsl: mini ? APPLY_MINI : APPLY_NORMAL,
  };
}
