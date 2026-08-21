# Adding an effect

Effects are modular. To add one:

1. Create a file under `src/effects/` (or append to a category file).
2. Export an `EffectType` object:

```ts
import type { EffectType } from "../core/types";

export const myEffect: EffectType = {
  id: "my-effect",          // unique, stable
  name: "My Effect",
  category: "distort",
  description: "What it does",
  params: [
    { id: "amount", label: "Amount", kind: "float", min: 0, max: 1, step: 0.01, default: 0.3 },
    { id: "mix", label: "Mix", kind: "float", min: 0, max: 1, step: 0.01, default: 1, randomizable: false },
  ],
  extraUniforms: `
uniform float u_amount;
`,
  applyGlsl: `
vec4 apply(vec2 uv) {
  vec3 c = sampleSrc(uv).rgb;
  // ...
  return vec4(c, 1.0);
}
`,
};
```

3. Push it into the array in that category file (`COLOR_EFFECTS`, etc.).
4. Parameter `id` becomes uniform `u_<id>`. Colors become `vec3`. Bools/enums become floats.
5. The engine wraps `apply()` with mix + mask. You do not write `main()`.

Available in shaders: `uTex`, `uFeedback`, `uHistory`, `uTime`, `uFrame`, `uResolution`, `uTexel`, `uQuality`, helpers like `sampleSrc`, `luminance`, `rgb2hsv`, `vnoise`.
