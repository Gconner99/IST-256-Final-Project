import { bumpSeed, recompose, rewalk } from "../core/compose";
import { generatorSource } from "../core/defaults";
import { hitUnit } from "../core/layout";
import { downloadText, parseProject, serializeProject } from "../core/project";
import { store } from "../core/store";
import type { DetournementMode, MapGenerator, Project, Unit } from "../core/types";
import { MAP_GENERATORS } from "../core/types";
import { disposeSource, loadReference } from "../media/sources";
import { exportStill } from "../render/export";
import { paintField, resizeCanvas } from "../render/field";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let view: HTMLElement;
let liveScrub = false;

export function mount(root: HTMLElement, field: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  canvas = field;
  ctx = context;
  root.innerHTML = "";
  root.className = "shell";
  root.innerHTML = `
    <header class="topbar">
      <div class="brand">DÉRIVE<small>PSYCHOGEOGRAPHIC PRINT</small></div>
      <input type="text" id="proj-name" style="width:150px" />
      <button class="btn tiny" data-act="save">Save</button>
      <button class="btn tiny" data-act="load">Load</button>
      <input type="file" id="proj-file" accept=".json,.derive.json" hidden />
      <div class="sp"></div>
      <label class="status">SEED</label>
      <input type="number" id="seed" style="width:84px" />
      <button class="btn tiny" data-act="seed-">-</button>
      <button class="btn tiny" data-act="seed+">+</button>
      <button class="btn tiny acid" data-act="drift">Drift</button>
      <button class="btn tiny" data-act="recompose">Recompose</button>
      <button class="btn tiny" data-act="help">?</button>
    </header>
    <div class="workspace">
      <aside class="rail" id="rail"></aside>
      <section class="stage">
        <div class="viewport" id="view">
          <div class="hud" id="hud"></div>
          <div class="dropveil" id="veil">DROP VISUAL REFERENCES</div>
        </div>
      </section>
      <aside class="stack" id="stack"></aside>
    </div>
    <footer class="transport" id="transport"></footer>
    <div class="help" id="help">
      <div class="card">
        <h3>DÉRIVE</h3>
        <p>A still-image instrument for psychogeographic maps. Debord called the dérive a drift: you drop the usual reasons for moving and let the terrain’s attractions pull you. This program does that to pictures.</p>
        <ul>
          <li>Upload maps, street photos, scans — they become <b>unités d’ambiance</b>, torn atmospheric fragments.</li>
          <li><b>Drift</b> walks those units by affinity (play seeks play; spectacle slides toward boredom), not by distance. Red arrows are the path. Fainter arrows are unused possible passages — the method of <i>The Naked City</i> (1957).</li>
          <li>Plaques tournantes are hubs. Détournement hijacks slogans, street names, and false coordinates onto the print.</li>
          <li><kbd>D</kbd> drift &nbsp; <kbd>R</kbd> recompose &nbsp; <kbd>E</kbd> export &nbsp; <kbd>?</kbd> this card</li>
        </ul>
        <p>Phosphene is a separate program. Dérive does not share its pipeline, UI, or project files.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `;
  view = root.querySelector("#view")!;
  view.append(canvas);
  canvas.id = "field";
  bind(root);
  store.subscribe(() => {
    if (!liveScrub) paintChrome(root);
    redraw(liveScrub);
  });
  paintChrome(root);
  resize();
  redraw(false);
}

export function resize() {
  if (!view) return;
  resizeCanvas(canvas, view);
}

export function redraw(preview = false) {
  paintField(ctx, store.project, canvas.width, canvas.height, store.state.ui.selectedUnitId, preview);
  const hud = document.querySelector("#hud");
  if (hud) {
    const p = store.project;
    hud.textContent = `DÉRIVE  ${p.units.length} UNITÉS  ${p.path.arrows.length} VOIES  SEED ${p.drift.seed}`;
  }
}

function bind(root: HTMLElement) {
  root.addEventListener("click", async (e) => {
    const t = (e.target as HTMLElement).closest("[data-act]") as HTMLElement | null;
    if (!t) return;
    const act = t.dataset.act!;
    const id = t.dataset.id;
    if (act === "save") {
      downloadText(`${store.project.name || "derive"}.derive.json`, serializeProject(store.project));
      store.patchUi({ status: "project saved" });
    }
    if (act === "load") root.querySelector<HTMLInputElement>("#proj-file")?.click();
    if (act === "seed-") store.replace(bumpSeed(store.project, -1));
    if (act === "seed+") store.replace(bumpSeed(store.project, 1));
    if (act === "drift") {
      store.replace(rewalk(store.project));
      store.patchUi({ status: "new dérive" });
    }
    if (act === "recompose") {
      store.replace(recompose(store.project));
      store.patchUi({ status: "field recomposed" });
    }
    if (act === "help") store.patchUi({ helpOpen: !store.state.ui.helpOpen });
    if (act === "import") root.querySelector<HTMLInputElement>("#ref-file")?.click();
    if (act === "gen" && t.dataset.kind) {
      const kind = t.dataset.kind as MapGenerator;
      store.setProject((p) =>
        recompose({ ...p, sources: [...p.sources, generatorSource(kind)] }),
      );
    }
    if (act === "del-src" && id) {
      store.setProject((p) => {
        const src = p.sources.find((s) => s.id === id);
        if (src) disposeSource(src);
        return recompose({ ...p, sources: p.sources.filter((s) => s.id !== id) });
      });
    }
    if (act === "sel-src" && id) store.patchUi({ selectedSourceId: id });
    if (act === "sel-unit" && id) store.patchUi({ selectedUnitId: id });
    if (act === "pin-unit" && id) {
      store.setProject((p) => ({
        ...p,
        units: p.units.map((u) => (u.id === id ? { ...u, pinned: !u.pinned } : u)),
      }));
    }
    if (act === "export") {
      store.patchUi({ status: "exporting…" });
      try {
        await exportStill(store.project);
        store.patchUi({ status: "export done" });
      } catch (err) {
        store.patchUi({ status: err instanceof Error ? err.message : "export failed" });
      }
    }
  });

  root.addEventListener("change", (e) => {
    const t = e.target as HTMLInputElement | HTMLSelectElement;
    if (t.id === "proj-file" && t instanceof HTMLInputElement && t.files?.[0]) {
      void t.files[0].text().then((text) => {
        store.replace(recompose(parseProject(text)));
        store.patchUi({ status: "project loaded — re-drop image references" });
      });
      t.value = "";
    }
    if (t.id === "ref-file" && t instanceof HTMLInputElement && t.files) {
      void importFiles(t.files);
      t.value = "";
    }
    if (t.id === "det-mode") {
      store.setProject((p) => ({
        ...p,
        detournement: { ...p.detournement, mode: t.value as DetournementMode },
      }));
    }
    if (t.id === "exp-format") {
      store.setProject((p) => ({
        ...p,
        exportSettings: { ...p.exportSettings, format: t.value as "png" | "jpg" },
      }));
    }
  });

  root.addEventListener("input", (e) => {
    const t = e.target as HTMLInputElement;
    liveScrub = true;
    if (t.id === "proj-name") store.setProject((p) => ({ ...p, name: t.value }), false);
    if (t.id === "seed") {
      store.replace(recompose({ ...store.project, drift: { ...store.project.drift, seed: Number(t.value) || 0 } }));
    }
    patchNum(t, "steps", (p, v) => ({ ...p, drift: { ...p.drift, steps: v } }), true);
    patchNum(t, "chance", (p, v) => ({ ...p, drift: { ...p.drift, chance: v } }), true);
    patchNum(t, "attraction", (p, v) => ({ ...p, drift: { ...p.drift, attraction: v } }), true);
    patchNum(t, "count", (p, v) => ({ ...p, unitSettings: { ...p.unitSettings, count: v } }), "compose");
    patchNum(t, "tear", (p, v) => ({ ...p, unitSettings: { ...p.unitSettings, tear: v } }), "compose");
    patchNum(t, "rotation", (p, v) => ({ ...p, unitSettings: { ...p.unitSettings, rotation: v } }), "compose");
    patchNum(t, "scaleVar", (p, v) => ({ ...p, unitSettings: { ...p.unitSettings, scaleVariance: v } }), "compose");
    patchNum(t, "density", (p, v) => ({ ...p, arrows: { ...p.arrows, density: v } }), true);
    patchNum(t, "thickness", (p, v) => ({ ...p, arrows: { ...p.arrows, thickness: v } }), false);
    patchNum(t, "dash", (p, v) => ({ ...p, arrows: { ...p.arrows, dash: v } }), false);
    patchNum(t, "det-density", (p, v) => ({ ...p, detournement: { ...p.detournement, density: v } }), false);
    patchNum(t, "stamps", (p, v) => ({ ...p, detournement: { ...p.detournement, stamps: v } }), false);
    patchNum(t, "stain", (p, v) => ({ ...p, paper: { ...p.paper, stain: v } }), false);
    patchNum(t, "fold", (p, v) => ({ ...p, paper: { ...p.paper, fold: v } }), false);
    patchNum(t, "grain", (p, v) => ({ ...p, paper: { ...p.paper, grain: v } }), false);
    patchNum(t, "grid", (p, v) => ({ ...p, paper: { ...p.paper, gridGhost: v } }), false);
    patchNum(t, "xerox", (p, v) => ({ ...p, paper: { ...p.paper, xerox: v } }), false);
    if (t.id === "ground") store.setProject((p) => ({ ...p, paper: { ...p.paper, ground: t.value } }), false);
    if (t.id === "arrow-color") store.setProject((p) => ({ ...p, arrows: { ...p.arrows, color: t.value } }), false);
    if (t.id === "loops") {
      store.replace(rewalk({ ...store.project, drift: { ...store.project.drift, loops: t.checked } }));
    }
    patchNum(t, "exp-w", (p, v) => ({ ...p, exportSettings: { ...p.exportSettings, width: v } }), false);
    patchNum(t, "exp-h", (p, v) => ({ ...p, exportSettings: { ...p.exportSettings, height: v } }), false);
    if (t.id === "exp-name") store.setProject((p) => ({ ...p, exportSettings: { ...p.exportSettings, filename: t.value } }), false);
    redraw(true);
  });

  root.addEventListener("pointerup", () => {
    if (liveScrub) {
      liveScrub = false;
      paintChrome(root);
      redraw(false);
    }
  });

  window.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (!store.state.ui.dropActive) store.patchUi({ dropActive: true });
  });
  window.addEventListener("dragleave", (e) => {
    if (e.target === document.body) store.patchUi({ dropActive: false });
  });
  window.addEventListener("drop", (e) => {
    e.preventDefault();
    store.patchUi({ dropActive: false });
    if (e.dataTransfer?.files?.length) void importFiles(e.dataTransfer.files);
  });

  window.addEventListener("keydown", (e) => {
    const tag = (e.target as HTMLElement).tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (e.key === "d" || e.key === "D") store.replace(rewalk(store.project));
    if (e.key === "r" || e.key === "R") store.replace(recompose(store.project));
    if (e.key === "e" || e.key === "E") {
      void exportStill(store.project);
    }
    if (e.key === "?") store.patchUi({ helpOpen: !store.state.ui.helpOpen });
    if ((e.key === "s" || e.key === "S") && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      downloadText(`${store.project.name || "derive"}.derive.json`, serializeProject(store.project));
    }
  });

  canvas.addEventListener("pointerdown", (e) => {
    const { x, y } = fieldPos(e);
    const hit = hitUnit(store.project.units, x, y);
    if (!hit) {
      store.patchUi({ selectedUnitId: null, draggingUnitId: null });
      return;
    }
    store.patchUi({ selectedUnitId: hit.id, draggingUnitId: hit.id });
    canvas.classList.add("grabbing");
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener("pointermove", (e) => {
    const id = store.state.ui.draggingUnitId;
    if (!id) return;
    const { x, y } = fieldPos(e);
    store.setProject((p) => ({
      ...p,
      units: p.units.map((u) => (u.id === id ? { ...u, x, y, pinned: true } : u)),
    }), false);
    redraw(true);
  });
  canvas.addEventListener("pointerup", () => {
    if (store.state.ui.draggingUnitId) {
      store.patchUi({ draggingUnitId: null });
      canvas.classList.remove("grabbing");
      redraw(false);
    }
  });
}

function fieldPos(e: PointerEvent) {
  const r = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - r.left) / r.width,
    y: (e.clientY - r.top) / r.height,
  };
}

function patchNum(
  t: HTMLInputElement,
  id: string,
  mut: (p: Project, v: number) => Project,
  after: boolean | "compose",
) {
  if (t.id !== id) return;
  const v = Number(t.value);
  if (after === "compose") store.replace(recompose(mut(store.project, v)));
  else if (after) store.replace(rewalk(mut(store.project, v)));
  else store.setProject((p) => mut(p, v), false);
}

async function importFiles(files: FileList) {
  const loaded: Awaited<ReturnType<typeof loadReference>>[] = [];
  for (const file of [...files]) {
    try {
      loaded.push(await loadReference(file));
    } catch (err) {
      store.patchUi({ status: err instanceof Error ? err.message : "import failed" });
    }
  }
  if (!loaded.length) return;
  store.setProject((p) => recompose({ ...p, sources: [...p.sources, ...loaded] }));
  store.patchUi({ status: `added ${loaded.length} reference${loaded.length > 1 ? "s" : ""}` });
}

function paintChrome(root: HTMLElement) {
  const { project: p, ui } = store.state;
  const name = root.querySelector<HTMLInputElement>("#proj-name");
  const seed = root.querySelector<HTMLInputElement>("#seed");
  if (name && document.activeElement !== name) name.value = p.name;
  if (seed && document.activeElement !== seed) seed.value = String(p.drift.seed);
  root.querySelector("#help")?.classList.toggle("on", ui.helpOpen);
  root.querySelector("#veil")?.classList.toggle("on", ui.dropActive);
  paintRail(root.querySelector("#rail")!);
  paintStack(root.querySelector("#stack")!);
  paintTransport(root.querySelector("#transport")!);
}

function paintRail(n: HTMLElement) {
  const p = store.project;
  const ui = store.state.ui;
  n.innerHTML = `
    <div class="sec">Visual references</div>
    <div class="row">
      <button class="btn tiny acid" data-act="import">Upload images</button>
      <input id="ref-file" type="file" accept="image/*" multiple hidden />
    </div>
    <p class="status" style="margin:8px 0">Maps, photos, scans. They are cut into unités d’ambiance.</p>
    <div class="sec">Generated maps</div>
    <div class="row">
      ${MAP_GENERATORS.map((g) => `<button class="btn tiny" data-act="gen" data-kind="${g.id}">${g.label}</button>`).join("")}
    </div>
    <div style="margin-top:8px">
      ${p.sources.map((s) => `
        <div class="thumb ${s.id === ui.selectedSourceId ? "on" : ""}" data-act="sel-src" data-id="${s.id}">
          <div class="sw"></div>
          <div class="meta"><b>${esc(s.name)}</b><span>${s.kind}${s.width ? ` ${s.width}×${s.height}` : ""}</span></div>
          <button class="btn tiny" data-act="del-src" data-id="${s.id}">x</button>
        </div>`).join("")}
    </div>
  `;
}

function paintStack(n: HTMLElement) {
  const p = store.project;
  const selected = p.units.find((u) => u.id === store.state.ui.selectedUnitId) ?? null;
  n.innerHTML = `
    <div class="sec">Drift</div>
    ${num("steps", "Steps", p.drift.steps, 2, 24, 1)}
    ${num("attraction", "Attraction", p.drift.attraction, 0, 1, 0.01)}
    ${num("chance", "Chance", p.drift.chance, 0, 1, 0.01)}
    <label class="check"><input type="checkbox" id="loops" ${p.drift.loops ? "checked" : ""}/> allow loops</label>
    <hr class="div" />
    <div class="sec">Unités</div>
    ${num("count", "Count", p.unitSettings.count, 4, 22, 1)}
    ${num("tear", "Tear", p.unitSettings.tear, 0, 1, 0.01)}
    ${num("rotation", "Twist", p.unitSettings.rotation, 0, 1, 0.01)}
    ${num("scaleVar", "Scale var", p.unitSettings.scaleVariance, 0, 1, 0.01)}
    <hr class="div" />
    <div class="sec">Arrows</div>
    ${num("density", "Possible", p.arrows.density, 0, 1.5, 0.01)}
    ${num("thickness", "Weight", p.arrows.thickness, 0.4, 2.2, 0.01)}
    ${num("dash", "Dash", p.arrows.dash, 0, 1, 0.01)}
    <div class="param"><span>Color</span><input id="arrow-color" type="color" value="${esc(p.arrows.color)}" /><span></span></div>
    <hr class="div" />
    <div class="sec">Détournement</div>
    <div class="param"><span>Voice</span>
      <select id="det-mode">${["mix","slogans","streets","coordinates"].map((m) => `<option value="${m}" ${p.detournement.mode===m?"selected":""}>${m}</option>`).join("")}</select>
      <span></span>
    </div>
    ${num("det-density", "Text", p.detournement.density, 0, 1.5, 0.01)}
    ${num("stamps", "Stamps", p.detournement.stamps, 0, 1, 0.01)}
    <hr class="div" />
    <div class="sec">Paper</div>
    <div class="param"><span>Ground</span><input id="ground" type="color" value="${esc(p.paper.ground)}" /><span></span></div>
    ${num("stain", "Stain", p.paper.stain, 0, 1, 0.01)}
    ${num("fold", "Fold", p.paper.fold, 0, 1, 0.01)}
    ${num("grain", "Grain", p.paper.grain, 0, 1, 0.01)}
    ${num("grid", "Grid ghost", p.paper.gridGhost, 0, 1, 0.01)}
    ${num("xerox", "Xerox", p.paper.xerox, 0, 1, 0.01)}
    <hr class="div" />
    <div class="sec">Selected unité</div>
    ${selected ? unitCard(selected) : `<div class="status">click a fragment on the field</div>`}
  `;
}

function unitCard(u: Unit): string {
  return `<div class="unit on">
    <div class="hd"><span>${esc(u.label)}</span><span class="amb">${u.ambiance}</span></div>
    <div class="status">${u.plaque ? "plaque tournante" : "atmospheric unit"} ${u.pinned ? "· pinned" : ""}</div>
    <button class="btn tiny" data-act="pin-unit" data-id="${u.id}">${u.pinned ? "unpin" : "pin"}</button>
  </div>`;
}

function paintTransport(n: HTMLElement) {
  const p = store.project;
  const exp = p.exportSettings;
  n.innerHTML = `
    <div class="t-left">
      <div class="sec">Situation</div>
      <div class="status">${p.units.filter((u) => u.plaque).length} plaques · ${p.path.unitIds.length} steps in the last drift</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="status-line">${store.state.ui.status}</span>
      </div>
      <p class="status" style="margin:8px 0 0">Drop images onto the field. Drag a unit to pin it. Distance on this map is not metres — it is affinity.</p>
    </div>
    <div class="t-right">
      <div class="sec">Export still</div>
      <div class="row">
        <input id="exp-w" type="number" style="width:70px" value="${exp.width}" />
        <span>×</span>
        <input id="exp-h" type="number" style="width:70px" value="${exp.height}" />
        <select id="exp-format">
          ${["png","jpg"].map((f) => `<option ${exp.format===f?"selected":""} value="${f}">${f}</option>`).join("")}
        </select>
      </div>
      <div class="row" style="margin-top:4px">
        <input id="exp-name" type="text" style="width:90px" value="${esc(exp.filename)}" />
        <button class="btn tiny acid" data-act="export">Export</button>
      </div>
    </div>
  `;
}

function num(id: string, label: string, value: number, min: number, max: number, step: number) {
  return `<div class="param"><span>${label}</span>
    <input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" />
    <input id="${id}" type="number" min="${min}" max="${max}" step="${step}" value="${Number(value.toFixed(3))}" /></div>`;
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
