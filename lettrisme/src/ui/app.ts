import { downloadText, parseProject, serializeProject } from "../core/project";
import { store } from "../core/store";
import type { DateMode, Plate, Project } from "../core/types";
import { PLATES } from "../core/types";
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
  root.className = "shell";
  root.innerHTML = `
    <header class="topbar">
      <div class="brand">HYPERGRAPHIE<small>LETTRISME · ISOU</small></div>
      <input type="text" id="proj-name" style="width:180px" />
      <button class="btn tiny" data-act="save">Save</button>
      <button class="btn tiny" data-act="load">Load</button>
      <input type="file" id="proj-file" accept=".json,.lettr.json" hidden />
      <div class="sp"></div>
      <label class="status">SEED</label>
      <input type="number" id="seed" style="width:84px" />
      <button class="btn tiny" data-act="seed-">-</button>
      <button class="btn tiny" data-act="seed+">+</button>
      <button class="btn tiny acid" data-act="redraw">Print</button>
      <button class="btn tiny" data-act="help">?</button>
    </header>
    <div class="workspace">
      <aside class="rail" id="rail"></aside>
      <section class="stage">
        <div class="viewport" id="view">
          <div class="hud" id="hud"></div>
          <div class="dropveil" id="veil">DROP A PHOTO / SCAN</div>
        </div>
      </section>
      <aside class="stack" id="stack"></aside>
    </div>
    <footer class="transport" id="transport"></footer>
    <div class="help" id="help">
      <div class="card">
        <h3>HYPERGRAPHIE</h3>
        <p>A still-image instrument after Isidore Isou and Lettrism. Letters are plastic matter, not messages. Hypergraphy (métagraphie) treats the sign as drawing: asemic script, invented glyphs, grids that behave like manuscripts, ink masses filled with micro-writing.</p>
        <ul>
          <li><b>Scriptorium</b> — a photograph (or a generated plate) overwritten with black / blue / red handwriting. Density follows the darks of the image.</li>
          <li><b>Alphabet</b> — a grid of hybrid glyphs, letters that are also pictograms.</li>
          <li><b>Réseau</b> — an ochre dripping network with a packed hypergraphic core.</li>
          <li><b>Tache</b> — a manuscript field under a navy blot, with readable phrases knocked out in white.</li>
          <li><b>Masse</b> — blue bars and a central mass filled with micro-script, looped over with a pale gesture.</li>
        </ul>
        <p>Upload your own photos as the base or the density map. This program is not Phosphene and is not a dérive map-maker.</p>
        <p><kbd>P</kbd> reprint &nbsp; <kbd>E</kbd> export &nbsp; <kbd>?</kbd> this card</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `;
  view = root.querySelector("#view")!;
  view.append(canvas);
  bind(root);
  store.subscribe(() => {
    if (!liveScrub) paintChrome(root);
    redraw();
  });
  paintChrome(root);
  resize();
  redraw();
}

export function resize() {
  if (view) resizeCanvas(canvas, view);
}

export function redraw() {
  paintField(ctx, store.project, canvas.width, canvas.height);
  const hud = document.querySelector("#hud");
  if (hud) {
    const p = store.project;
    hud.textContent = `HYPERGRAPHIE  ${p.plate.toUpperCase()}  SEED ${p.seed}`;
  }
}

function bind(root: HTMLElement) {
  root.addEventListener("click", async (e) => {
    const t = (e.target as HTMLElement).closest("[data-act]") as HTMLElement | null;
    if (!t) return;
    const act = t.dataset.act!;
    const id = t.dataset.id;
    if (act === "save") {
      downloadText(`${store.project.name || "hypergraphie"}.lettr.json`, serializeProject(store.project));
      store.patchUi({ status: "project saved" });
    }
    if (act === "load") root.querySelector<HTMLInputElement>("#proj-file")?.click();
    if (act === "seed-") store.setProject((p) => ({ ...p, seed: p.seed - 1 }));
    if (act === "seed+") store.setProject((p) => ({ ...p, seed: p.seed + 1 }));
    if (act === "redraw") {
      store.patchUi({ status: "printed" });
      redraw();
    }
    if (act === "help") store.patchUi({ helpOpen: !store.state.ui.helpOpen });
    if (act === "import") root.querySelector<HTMLInputElement>("#ref-file")?.click();
    if (act === "plate" && t.dataset.plate) {
      store.setProject((p) => ({ ...p, plate: t.dataset.plate as Plate }));
    }
    if (act === "sel-src" && id) {
      store.patchUi({ selectedSourceId: id });
      store.setProject((p) => ({ ...p, activeSourceId: id }));
    }
    if (act === "del-src" && id) {
      store.setProject((p) => {
        const src = p.sources.find((s) => s.id === id);
        if (src) disposeSource(src);
        const sources = p.sources.filter((s) => s.id !== id);
        return { ...p, sources, activeSourceId: p.activeSourceId === id ? sources[0]?.id ?? null : p.activeSourceId };
      });
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
    const el = e.target as HTMLInputElement | HTMLSelectElement;
    if (el.id === "proj-file" && el instanceof HTMLInputElement && el.files?.[0]) {
      void el.files[0].text().then((text) => {
        store.replace(parseProject(text));
        store.patchUi({ status: "loaded — re-drop photos" });
      });
      el.value = "";
    }
    if (el.id === "ref-file" && el instanceof HTMLInputElement && el.files) {
      void importFiles(el.files);
      el.value = "";
    }
    if (el.id === "date-mode") {
      store.setProject((p) => ({ ...p, caption: { ...p.caption, dateMode: el.value as DateMode } }));
    }
    if (el.id === "exp-format") {
      store.setProject((p) => ({
        ...p,
        exportSettings: { ...p.exportSettings, format: el.value as "png" | "jpg" },
      }));
    }
  });

  root.addEventListener("input", (e) => {
    const t = e.target as HTMLInputElement;
    liveScrub = true;
    if (t.id === "proj-name") store.setProject((p) => ({ ...p, name: t.value }), false);
    if (t.id === "seed") store.setProject((p) => ({ ...p, seed: Number(t.value) || 0 }), false);
    patchNum(t, "density", (p, v) => ({ ...p, ink: { ...p.ink, density: v } }));
    patchNum(t, "chaos", (p, v) => ({ ...p, ink: { ...p.ink, chaos: v } }));
    patchNum(t, "scale", (p, v) => ({ ...p, ink: { ...p.ink, scale: v } }));
    patchNum(t, "photoMix", (p, v) => ({ ...p, ink: { ...p.ink, photoMix: v } }));
    patchNum(t, "contrast", (p, v) => ({ ...p, ink: { ...p.ink, contrast: v } }));
    patchNum(t, "black", (p, v) => ({ ...p, ink: { ...p.ink, black: v } }));
    patchNum(t, "blue", (p, v) => ({ ...p, ink: { ...p.ink, blue: v } }));
    patchNum(t, "red", (p, v) => ({ ...p, ink: { ...p.ink, red: v } }));
    patchNum(t, "margin", (p, v) => ({ ...p, paper: { ...p.paper, margin: v } }));
    patchNum(t, "grain", (p, v) => ({ ...p, paper: { ...p.paper, grain: v } }));
    if (t.id === "ground") store.setProject((p) => ({ ...p, paper: { ...p.paper, ground: t.value } }), false);
    if (t.id === "show-cap") store.setProject((p) => ({ ...p, caption: { ...p.caption, show: t.checked } }), false);
    if (t.id === "sign") store.setProject((p) => ({ ...p, caption: { ...p.caption, sign: t.checked } }), false);
    if (t.id === "custom-cap") store.setProject((p) => ({ ...p, caption: { ...p.caption, custom: t.value } }), false);
    patchNum(t, "edition", (p, v) => ({ ...p, caption: { ...p.caption, edition: v } }));
    patchNum(t, "editionOf", (p, v) => ({ ...p, caption: { ...p.caption, editionOf: v } }));
    patchNum(t, "exp-w", (p, v) => ({ ...p, exportSettings: { ...p.exportSettings, width: v } }));
    patchNum(t, "exp-h", (p, v) => ({ ...p, exportSettings: { ...p.exportSettings, height: v } }));
    if (t.id === "exp-name") store.setProject((p) => ({ ...p, exportSettings: { ...p.exportSettings, filename: t.value } }), false);
    redraw();
  });

  root.addEventListener("pointerup", () => {
    if (liveScrub) {
      liveScrub = false;
      paintChrome(root);
      redraw();
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
    if (e.key === "p" || e.key === "P") redraw();
    if (e.key === "e" || e.key === "E") void exportStill(store.project);
    if (e.key === "?") store.patchUi({ helpOpen: !store.state.ui.helpOpen });
    if ((e.key === "s" || e.key === "S") && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      downloadText(`${store.project.name || "hypergraphie"}.lettr.json`, serializeProject(store.project));
    }
  });
}

function patchNum(t: HTMLInputElement, id: string, mut: (p: Project, v: number) => Project) {
  if (t.id !== id) return;
  store.setProject((p) => mut(p, Number(t.value)), false);
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
  store.setProject((p) => ({
    ...p,
    sources: [...p.sources, ...loaded],
    activeSourceId: loaded[0]?.id ?? p.activeSourceId,
  }));
  store.patchUi({ status: `added ${loaded.length} reference${loaded.length > 1 ? "s" : ""}` });
}

function paintChrome(root: HTMLElement) {
  const { project: p, ui } = store.state;
  const name = root.querySelector<HTMLInputElement>("#proj-name");
  const seed = root.querySelector<HTMLInputElement>("#seed");
  if (name && document.activeElement !== name) name.value = p.name;
  if (seed && document.activeElement !== seed) seed.value = String(p.seed);
  root.querySelector("#help")?.classList.toggle("on", ui.helpOpen);
  root.querySelector("#veil")?.classList.toggle("on", ui.dropActive);
  paintRail(root.querySelector("#rail")!);
  paintStack(root.querySelector("#stack")!);
  paintTransport(root.querySelector("#transport")!);
}

function paintRail(n: HTMLElement) {
  const p = store.project;
  n.innerHTML = `
    <div class="sec">Plates</div>
    <div class="row">
      ${PLATES.map((pl) => `
        <button class="btn tiny ${p.plate === pl.id ? "on" : ""}" data-act="plate" data-plate="${pl.id}" title="${pl.hint}">${pl.label}</button>
      `).join("")}
    </div>
    <p class="status" style="margin:8px 0">${PLATES.find((pl) => pl.id === p.plate)?.hint ?? ""}</p>
    <hr class="div" />
    <div class="sec">Visual references</div>
    <div class="row">
      <button class="btn tiny acid" data-act="import">Upload photo</button>
      <input id="ref-file" type="file" accept="image/*" multiple hidden />
    </div>
    <p class="status" style="margin:8px 0">Used as the photographic base (Scriptorium) and as a density map for the ink.</p>
    <div style="margin-top:8px">
      ${p.sources.map((s) => `
        <div class="thumb ${s.id === p.activeSourceId ? "on" : ""}" data-act="sel-src" data-id="${s.id}">
          <div class="sw"></div>
          <div class="meta"><b>${esc(s.name)}</b><span>${s.width}×${s.height}</span></div>
          <button class="btn tiny" data-act="del-src" data-id="${s.id}">x</button>
        </div>`).join("")}
      ${p.sources.length === 0 ? `<div class="status">no photo — a generated plate is used</div>` : ""}
    </div>
  `;
}

function paintStack(n: HTMLElement) {
  const p = store.project;
  n.innerHTML = `
    <div class="sec">Ink</div>
    ${num("density", "Density", p.ink.density, 0.15, 1, 0.01)}
    ${num("chaos", "Chaos", p.ink.chaos, 0, 1, 0.01)}
    ${num("scale", "Scale", p.ink.scale, 0.25, 1.4, 0.01)}
    ${num("photoMix", "Photo", p.ink.photoMix, 0, 1, 0.01)}
    ${num("contrast", "Contrast", p.ink.contrast, 0, 1, 0.01)}
    ${num("black", "Black", p.ink.black, 0, 1, 0.01)}
    ${num("blue", "Blue", p.ink.blue, 0, 1, 0.01)}
    ${num("red", "Red", p.ink.red, 0, 1, 0.01)}
    <hr class="div" />
    <div class="sec">Paper</div>
    <div class="param"><span>Ground</span><input id="ground" type="color" value="${esc(p.paper.ground)}" /><span></span></div>
    ${num("margin", "Margin", p.paper.margin, 0.04, 0.22, 0.01)}
    ${num("grain", "Grain", p.paper.grain, 0, 1, 0.01)}
    <hr class="div" />
    <div class="sec">Caption</div>
    <label class="check"><input type="checkbox" id="show-cap" ${p.caption.show ? "checked" : ""}/> show date</label>
    <label class="check"><input type="checkbox" id="sign" ${p.caption.sign ? "checked" : ""}/> sign</label>
    <div class="param"><span>Date</span>
      <select id="date-mode">${["seed","now","custom"].map((m) => `<option value="${m}" ${p.caption.dateMode===m?"selected":""}>${m}</option>`).join("")}</select>
      <span></span>
    </div>
    <div class="param"><span>Custom</span><input id="custom-cap" type="text" value="${esc(p.caption.custom)}" /><span></span></div>
    ${num("edition", "No.", p.caption.edition, 1, 200, 1)}
    ${num("editionOf", "Of", p.caption.editionOf, 1, 200, 1)}
  `;
}

function paintTransport(n: HTMLElement) {
  const exp = store.project.exportSettings;
  n.innerHTML = `
    <div class="t-left">
      <div class="sec">Plate</div>
      <div class="status">${store.project.plate} · seed ${store.project.seed}</div>
    </div>
    <div class="t-mid">
      <span class="status" id="status-line">${store.state.ui.status}</span>
      <p class="status" style="margin:8px 0 0">The letter is not read. It is laid down as ink.</p>
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
        <input id="exp-name" type="text" style="width:100px" value="${esc(exp.filename)}" />
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
