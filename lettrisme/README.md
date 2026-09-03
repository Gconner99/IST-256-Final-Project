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

## Run

Same as Phosphene: open the **repo root** in Cursor, then Run and Debug → **Hypergraphie** (play / `F5` after picking it). That installs dependencies the first time and opens http://127.0.0.1:5174.

```bash
npm run hypergraphie     # from the repo root
# or
cd lettrisme && npm install && npm run dev
npm test
npm run build
```

## Stack

Vite + TypeScript + Canvas 2D. No Phosphene imports. No extra runtime dependencies.
