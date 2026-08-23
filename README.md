# Phosphene

A personal **visual instrument / digital darkroom** for experimental video art and digital photo art.

Not a Premiere or Photoshop clone. Phosphene is a GPU effect pipeline with a tactile, slightly weird control surface: drop in images or video, stack modular GLSL effects, randomize, feed the output back into itself, and export stills or frame-by-frame video.

## If you don’t write code

Do **not** open the files inside Cursor.

On Windows, open the folder in **File Explorer** and double-click **`Start Phosphene.bat`**. A command window flashes, then Chrome or Edge opens — that browser window is the program.

Read `START HERE.txt` if you get stuck.

## Run (developers)

Open the folder that contains `package.json`.

### In Cursor (click Run)

1. Open the repo folder (not a parent folder).
2. Run **Phosphene** from the Run and Debug view (play button / `F5`).
3. The first time it runs `npm install`, then starts the app and opens http://127.0.0.1:5173.

Pick **Phosphene (desktop)** in the same dropdown if you want the Electron window.

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
- **Soundtrack**: drop an MP3 / wav / ogg / m4a. Playback follows the song; idols and floaters move with the mix. Exported clips are visual-only for now.
- Procedural generators (plasma, noise, bars, gradient, checker, **floaters**) so it makes pictures with no files
- Real-time WebGL2 preview (draft / preview / full quality)
- Layers: opacity, blend modes, transform, enable, duplicate
- Modular effects stack (bypass, reorder, per-effect mix + mask)
- ~20 effects including **Floaters**, **Idol**, **Solids**, **Ribbons**, and **Orbs** (toggle each beside the idols)
- Global + per-layer **feedback bus** (amount, delay, opacity, scale, rotation, distortion)
- Basic masks (rect, circle, gradient, noise)
- Seeded randomization (all / selected / single param + amount), with an option to include floaters
- Simple keyframe automation
- JSON project files (`.phos.json`) and source-independent presets
- Export: PNG, JPG, **short MP4 clips** (pauses the live view and encodes a small 960×540 clip), WebM, PNG image sequence (zip)

## Architecture

```
src/
  core/        project state, timeline, presets, RNG, JSON
  engine/      WebGL2 renderer, FBOs, shader compiler
  effects/     one EffectType per look — add files, don't rewrite the app
  media/       image/video/audio loaders
  export/      still / sequence / webm / mp4 clips
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
