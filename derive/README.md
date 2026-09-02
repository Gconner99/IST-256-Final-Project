# Dérive

A **psychogeographic still-image instrument**. It is not Phosphene and does not share Phosphene’s UI, renderer, effects, or project files.

You drop maps, street photos, or scans. Dérive cuts them into *unités d’ambiance* (torn atmospheric fragments), scatters them in a non-Cartesian field, and draws vermillion arrows of possible passage — the method of Debord’s *The Naked City* (1957). The output is a print, not a video.

## Theory, as software

- **Dérive** — a seeded walk that chooses the next fragment by ambiance affinity (play seeks play; spectacle slides toward boredom), not by Euclidean distance.
- **Unités d’ambiance** — irregular torn polygons, each tagged attraction / repulsion / play / boredom / spectacle / void.
- **Plaques tournantes** — hub units that attract more arrows.
- **Détournement** — slogans, remixed street names, and false coordinates overprinted on the sheet.
- **Possible passages** — faint arrows for drifts not taken.

## Run

This folder is its own program. From `derive/`:

```bash
npm install
npm run dev          # http://127.0.0.1:5174
npm test
npm run build
```

Requires a browser with Canvas 2D.

## Use

1. The first load already composes a map from generated street / cadastral / contour plates.
2. **Upload images** (or drag onto the field) as visual references. They are sampled into unités.
3. **Drift** recomputes the walk. **Recompose** recuts and relayouts the field. Drag a fragment to pin it.
4. Export a high-resolution PNG or JPG (not a screenshot of the preview). Save/load `.derive.json`.

| Key | Action |
| --- | --- |
| D | Drift |
| R | Recompose |
| E | Export still |
| Ctrl/Cmd+S | Save project |
| ? | Help |

## Stack

Vite + TypeScript + Canvas 2D. No WebGL, no Phosphene imports, no extra runtime dependencies.
