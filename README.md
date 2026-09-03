# Phosphene

A personal **visual instrument / digital darkroom** for experimental video art and digital photo art.

Not a Premiere or Photoshop clone. Phosphene is a GPU effect pipeline with a tactile, slightly weird control surface: drop in images or video, stack modular GLSL effects, randomize, feed the output back into itself, and export stills or frame-by-frame video.

## Run

**Repo:** [Gconner99/IST-256-Final-Project](https://github.com/Gconner99/IST-256-Final-Project)

Open that folder in Cursor — the repo root is the directory that contains `package.json`.

### In Cursor (click Run)

1. Open the repo folder (not a parent folder).
2. Run **Phosphene** from the Run and Debug view (play button / `F5`).
3. The first time it runs `npm install`, then starts the app and opens http://127.0.0.1:5173.

Pick **Phosphene (desktop)** in the same dropdown if you want the Electron window.

Pick **Hypergraphie** in that same dropdown (not Phosphene) for the Lettrist still-image instrument, then press play. A terminal should start Vite and the browser should open http://127.0.0.1:5174. If the dropdown has no Hypergraphie item, this branch is not checked out.

From a terminal in the repo root: `npm run hypergraphie`.

You can also use Terminal → Run Task → `phosphene: serve`.

### From a terminal

```bash
npm install
npm run dev          # browser instrument at http://127.0.0.1:5173
npm run desktop      # optional Electron shell
npm test
```

Requires a browser (or Electron) with **WebGL2**.

## MVP

- Image + video import (drag/drop, replace, freeze a video frame as a still)
- Procedural generators (plasma, noise, bars, gradient, checker) so it makes pictures with no files
- Real-time WebGL2 preview (draft / preview / full quality)
- Layers: opacity, blend modes, transform, enable, duplicate
- Modular effects stack (bypass, reorder, per-effect mix + mask)
- ~17 effects: grade, posterize, threshold, duotone, solarize, channels, warp, aberration, displace, lens, pixel-sort, cathode, emulsion, bloom, kaleidoscope, mirror/tile, transform, echo, slit-scan, stutter
- Global + per-layer **feedback bus** (amount, delay, opacity, scale, rotation, distortion)
- Basic masks (rect, circle, gradient, noise)
- Seeded randomization (all / selected / single param + amount)
- Simple keyframe automation
- JSON project files (`.phos.json`) and source-independent presets
- Export: PNG, JPG, WebM (frame-by-frame), PNG image sequence (zip)

## Architecture

```
src/
  core/        project state, timeline, presets, RNG, JSON
  engine/      WebGL2 renderer, FBOs, shader compiler
  effects/     one EffectType per look — add files, don't rewrite the app
  media/       image/video loaders
  export/      still / sequence / webm
  ui/          instrument chrome
electron/      desktop window
```

An effect is:

```ts
{
  id, name, category, params,
  extraUniforms,          // GLSL uniform decls
  applyGlsl: `vec4 apply(vec2 uv) { ... }`
}
```

The engine wraps `apply()` with mix + mask. Parameter `amount` becomes uniform `u_amount`. See `src/effects/HOW_TO_ADD.md`.

Rendering is a ping-pong FBO chain per layer, then blend-mode composite, then a global feedback ring buffer, then blit to the canvas. Export re-renders at the requested resolution (not a screen recording).

## Keys

| Key | Action |
| --- | --- |
| Space | Play / pause |
| R | Randomize selected |
| Shift+R | Randomize all |
| K | Keyframe the selected numeric param |
| Ctrl/Cmd+S | Save project JSON |
| ? | Help |

## Stack

Vite + TypeScript + WebGL2 (custom GLSL, no Three.js). Electron is an optional wrapper. This is the stack that makes dropping in a new fragment shader the smallest possible change.
