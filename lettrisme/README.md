# Hypergraphie

A **still-image instrument** after **Isidore Isou** and Lettrism. It is not Phosphene, and it is not a Situationist map-maker.

Isou treated the letter as plastic matter. Hypergraphy (métagraphie) lets signs become drawing: asemic handwriting, invented glyphs, manuscripts that cannot be read, ink masses stuffed with micro-script.

## Plates

| Plate | After |
| --- | --- |
| **Scriptorium** | Photograph overwritten with black / blue / red asemic script (1973) |
| **Alphabet** | Grid of hybrid glyphs on graph paper |
| **Réseau** | Ochre dripping network with a packed letter-core |
| **Tache** | Glyph manuscript under a navy blot; white phrases knocked out |
| **Masse** | Blue bars and mass filled with micro-writing, pale loops on top |

Upload a photo: it becomes the Scriptorium base and a density map for the ink.

2. In the dropdown at the top, pick **Hypergraphie** (not Phosphene).
3. Hit the green play button (or `F5`).
4. Your browser should open http://127.0.0.1:5174. If it does not, open that URL yourself.

You must have this branch open (the Hypergraphie PR). If **Hypergraphie** is not in the dropdown, you are on `master` — check out `cursor/derive-situationist-maps-f5ab` first.

From a terminal in the repo root:

```bash
npm run hypergraphie
```

Then open http://127.0.0.1:5174.

## Stack

Vite + TypeScript + Canvas 2D. No Phosphene imports. No extra runtime dependencies.
