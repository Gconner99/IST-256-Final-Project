import type { EffectType } from "../core/types";
import { BUDDY_GLSL } from "../engine/buddy.glsl";

export const buddy: EffectType = {
  id: "buddy",
  name: "Buddy",
  category: "wacky",
  description: "A seed-grown music mascot with idol ink and faceted paint. Kind leans note, guitar, piano, boombox, vinyl, or heart — lumpy and a bit wrong. Mix rolls a new one. Googly eyes. Drop an MP3 and they bounce to the bass",
  params: [
    {
      id: "kind",
      label: "Kind",
      kind: "enum",
      default: "mix",
      options: [
        { value: "note", label: "Note" },
        { value: "guitar", label: "Guitar" },
        { value: "piano", label: "Piano" },
        { value: "boombox", label: "Boombox" },
        { value: "vinyl", label: "Vinyl" },
        { value: "heart", label: "Heart" },
        { value: "mix", label: "Mix" },
      ],
    },
    { id: "count", label: "Count", kind: "int", min: 1, max: 3, step: 1, default: 1 },
    { id: "size", label: "Size", kind: "float", min: 0.1, max: 0.7, step: 0.01, default: 0.22 },
    {
      id: "place",
      label: "Place",
      kind: "enum",
      default: "center",
      options: [
        { value: "center", label: "Center" },
        { value: "scatter", label: "Scatter" },
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
    { id: "seed", label: "Seed", kind: "int", min: 1, max: 9999, step: 1, default: 256 },
    { id: "speed", label: "Dance", kind: "float", min: 0, max: 3, step: 0.01, default: 1.0 },
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 1 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_kind;
uniform float u_count;
uniform float u_size;
uniform float u_place;
uniform float u_move;
uniform float u_seed;
uniform float u_speed;
uniform float u_amount;
${BUDDY_GLSL}
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 src = sampleSrc(uv).rgb;
  vec4 b = buddyRender(uv, u_seed, uTime * u_speed, u_size, u_count, u_place, u_move, u_kind);
  vec3 placed = mix(src, b.rgb, b.a * u_amount);
  return vec4(placed, 1.0);
}
`,
};
