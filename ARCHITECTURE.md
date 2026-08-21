# Phosphene architecture

## Why this stack

The instrument needs GPU effects, custom GLSL, real-time preview, and a desktop shell — without locking future experiments to a host app's plugin API.

- **WebGL2** is the render backend. Every look is a fragment shader. Adding a new algorithm is adding a file that implements `vec4 apply(vec2 uv)`.
- **Vite + TypeScript** keep the UI and engine reloadable while you invent looks.
- **Electron** (optional) is only a window and file chrome. The whole instrument also runs in a browser.

Alternatives (openFrameworks, Processing, TouchDesigner) are heavier to extend with a custom parameter/layer/preset system. Three.js would add a scene graph we do not need.

## Data flow

```
sources (image | video | generator)
    → layer transform
    → effect stack (ping-pong FBOs, optional temporal history)
    → layer feedback
    → composite (blend modes)
    → global feedback ring (delay / scale / rotation / distortion)
    → preview blit  or  export capture
```

UI never draws pixels. It mutates a JSON-shaped `Project`. The renderer evaluates keyframes at the current time and draws.

## Modules

| Module | Responsibility |
| --- | --- |
| `core/types.ts` | Project / layer / param schema |
| `core/store.ts` | Single store; `setProject(mut, emit)` so sliders can be silent |
| `core/timeline.ts` | Playhead mapping + keyframe lerp |
| `core/randomize.ts` | Seeded parameter walks |
| `core/project.ts` | `.phos.json` (runtime bitmaps stripped) |
| `core/presets.ts` | Source-independent looks |
| `engine/gl.ts` | Programs, FBOs, textures |
| `engine/shaders.ts` | Shared GLSL header, blit, composite, feedback, generators |
| `engine/compile.ts` | Wrap an effect's `apply()` |
| `engine/renderer.ts` | Frame graph |
| `effects/*` | The library. Category arrays are the registry. |
| `media/sources.ts` | File → ImageBitmap / HTMLVideoElement |
| `export/export.ts` | Frame-accurate stills, zip sequences, WebM via captured frames |
| `ui/` | Compact instrument chrome |

## Quality modes

- **draft** — 0.5× internal FBO size, fewer shader taps
- **preview** — canvas resolution
- **export / full** — requested width × height, no preview vignette

`uQuality` is passed into effects so expensive loops (bloom, pixel sort) can shorten themselves in draft.

## Adding an effect

1. Write an `EffectType` in `src/effects/<category>.ts`.
2. Push it onto that file's exported array.
3. UI, randomize, project save, and the GPU path pick it up from the registry.

No renderer changes. No UI widget code unless you invent a new param kind.

## Project file

JSON, `version: 1`, `app: "phosphene"`. Media is referenced by filename, not embedded. Re-drop files after load in the browser. Electron can later collect a `media/` folder beside the JSON without changing the schema.
