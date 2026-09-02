import { uid } from "../../core/ids";
import { AMBIANCE_LABEL } from "../core/ambiances";
import { materializeSource, renderProceduralMap } from "../core/maps";
import { downloadText, parseProject, rebuildComposition, serializeProject } from "../core/project";
import { store } from "../core/store";
import type { Ambiance, DeriveSource, MapKind } from "../core/types";
import { AMBIANCES, MAP_KINDS } from "../core/types";
import { hitUnit } from "../core/units";
import { exportStill, renderComposition } from "../render/export";

const ASPECT = 4 / 3;
let field: HTMLCanvasElement | null = null;
let liveScrub = false;
let dragId: string | null = null;
let dragMoved = false;
let needsCompose: "recompose" | "drift" | "marks" | null = null;

export function mount(root: HTMLElement) {
  root.innerHTML = "";
  root.className = "shell";
  root.innerHTML = `
    <header class="topbar">
      <div class="brand">DÉRIVE<small>PSYCHOGEOGRAPHIC INSTRUMENT</small></div>
      <span class="led" id="led"></span>
      <input type="text" id="proj-name" style="width:170px" />
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
      <a class="xlink" href="./">PHOSPHENE</a>
    </header>
    <div class="workspace">
      <aside class="rail" id="rail"></aside>
      <section class="stage">
        <div class="viewport" id="view">
          <div class="hud" id="hud"></div>
          <div class="dropveil" id="veil">DROP MAPS / STREET PHOTOS</div>
        </div>
      </section>
      <aside class="stack" id="stack"></aside>
    </div>
    <footer class="transport" id="transport"></footer>
    <div class="help" id="help">
      <div class="card">
        <h3>DÉRIVE</h3>
        <p>You are not editing a photo. You are performing a drift through image-space. Drop maps or street pictures — or generate them — and the program tears them into atmospheric fragments, then walks between those fragments by attraction rather than by distance.</p>
        <h4>UNITÉ D'AMBIANCE</h4>
        <p>An irregular torn island cut from a source. Each one carries a mood: attraction, repulsion, play, boredom, spectacle, void. Color and edge follow the mood. A <em>plaque tournante</em> is a hub — more arrows leave it.</p>
        <h4>DÉRIVE</h4>
        <p>A seeded walk that chooses the next island by psychogeographic pull, not Euclidean nearness. The walk becomes the vermillion arrow network, after Debord’s <em>The Naked City</em> (1957).</p>
        <h4>DÉTOURNEMENT</h4>
        <p>Hijacked language: remixed street names, Situationist slogans, coordinates that do not measure. The legend is slightly wrong on purpose.</p>
        <h4>THE SPECTACLE</h4>
        <p>An optional oversaturated veil — the glossy image of the world. Strip it off when you want the paper back.</p>
        <ul>
          <li><kbd>D</kbd> drift &nbsp; <kbd>R</kbd> recompose &nbsp; <kbd>?</kbd> this card</li>
          <li><kbd>Ctrl/Cmd+S</kbd> save &nbsp; click a unit to inspect &nbsp; drag to pin</li>
        </ul>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `;

  field = document.createElement("canvas");
  field.className = "field";
  root.querySelector("#view")!.append(field);
  bind(root);
  store.subscribe(() => {
    if (!liveScrub) paint(root);
    requestField();
  });
  paint(root);
  sizeField();
  requestField();
  window.addEventListener("resize", () => {
    sizeField();
    requestField();
  });
}

function bind(root: HTMLElement) {
  root.addEventListener("click", async (e) => {
    const t = (e.target as HTMLElement).closest("[data-act]") as HTMLElement | null;
    if (!t) return;
    const act = t.dataset.act!;
    const id = t.dataset.id;
    if (act === "save") saveProject();
    if (act === "load") root.querySelector<HTMLInputElement>("#proj-file")?.click();
    if (act === "seed-") bumpSeed(-1);
    if (act === "seed+") bumpSeed(1);
    if (act === "drift") applyCompose("drift");
    if (act === "recompose") applyCompose("recompose");
    if (act === "help") store.patchUi({ helpOpen: !store.state.ui.helpOpen });
    if (act === "import") root.querySelector<HTMLInputElement>("#media-file")?.click();
    if (act === "gen" && t.dataset.kind) addProcedural(t.dataset.kind as MapKind);
    if (act === "sel-src" && id) store.patchUi({ selectedSourceId: id });
    if (act === "del-src" && id) removeSource(id);
    if (act === "unpin") unpinAll();
    if (act === "pin-toggle" && id) togglePin(id);
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
      void loadProjectFile(t.files[0]);
      t.value = "";
    }
    if (t.id === "media-file" && t instanceof HTMLInputElement && t.files) {
      void importFiles(t.files);
      t.value = "";
    }
    if (t.id === "exp-format") {
      store.setProject((p) => ({ ...p, exportSettings: { ...p.exportSettings, format: t.value as "png" | "jpg" } }));
    }
    if (t.id === "spec-on") {
      store.setProject((p) => ({ ...p, spectacle: { ...p.spectacle, enabled: (t as HTMLInputElement).checked } }));
    }
    if (t.id === "dt-slogans" || t.id === "dt-streets" || t.id === "dt-coords") {
      const key = t.id === "dt-slogans" ? "slogans" : t.id === "dt-streets" ? "streets" : "coordinates";
      store.setProject((p) => ({
        ...p,
        detournement: { ...p.detournement, [key]: (t as HTMLInputElement).checked },
      }));
      applyCompose("marks");
    }
  });

  root.addEventListener("input", (e) => {
    const t = e.target as HTMLInputElement;
    if (t.id === "proj-name") store.setProject((p) => ({ ...p, name: t.value }), false);
    if (t.id === "seed") {
      const seed = Number(t.value) || 0;
      store.setProject((p) => ({ ...p, seed, drift: { ...p.drift, seed } }), false);
      needsCompose = "recompose";
    }
    if (t.id === "steps") {
      store.setProject((p) => ({ ...p, drift: { ...p.drift, steps: Number(t.value) } }), false);
      needsCompose = "drift";
    }
    if (t.id === "attraction") {
      store.setProject((p) => ({ ...p, drift: { ...p.drift, attraction: Number(t.value) } }), false);
      needsCompose = "drift";
    }
    if (t.id === "ucount") {
      store.setProject((p) => ({ ...p, unitsCfg: { ...p.unitsCfg, count: Number(t.value) } }), false);
      needsCompose = "recompose";
    }
    if (t.id === "tear") {
      store.setProject((p) => ({ ...p, unitsCfg: { ...p.unitsCfg, tear: Number(t.value) } }), false);
      needsCompose = "recompose";
    }
    if (t.id === "urot") {
      store.setProject((p) => ({ ...p, unitsCfg: { ...p.unitsCfg, rotation: Number(t.value) } }), false);
      needsCompose = "recompose";
    }
    if (t.id === "uscale") {
      store.setProject((p) => ({ ...p, unitsCfg: { ...p.unitsCfg, scaleVariance: Number(t.value) } }), false);
      needsCompose = "recompose";
    }
    if (t.id === "adensity") {
      store.setProject((p) => ({ ...p, arrows: { ...p.arrows, density: Number(t.value) } }), false);
      needsCompose = "drift";
    }
    if (t.id === "athick") store.setProject((p) => ({ ...p, arrows: { ...p.arrows, thickness: Number(t.value) } }), false);
    if (t.id === "acurve") store.setProject((p) => ({ ...p, arrows: { ...p.arrows, curve: Number(t.value) } }), false);
    if (t.id === "dtdens") {
      store.setProject((p) => ({ ...p, detournement: { ...p.detournement, density: Number(t.value) } }), false);
      needsCompose = "marks";
    }
    if (t.id === "pground") store.setProject((p) => ({ ...p, paper: { ...p.paper, ground: Number(t.value) } }), false);
    if (t.id === "pstains") store.setProject((p) => ({ ...p, paper: { ...p.paper, stains: Number(t.value) } }), false);
    if (t.id === "pfold") store.setProject((p) => ({ ...p, paper: { ...p.paper, fold: Number(t.value) } }), false);
    if (t.id === "pgrid") store.setProject((p) => ({ ...p, paper: { ...p.paper, gridGhost: Number(t.value) } }), false);
    if (t.id === "spec-amt") store.setProject((p) => ({ ...p, spectacle: { ...p.spectacle, amount: Number(t.value) } }), false);
    if (t.id.startsWith("amb-")) {
      const key = t.id.slice(4) as Ambiance;
      store.setProject((p) => ({ ...p, ambiances: { ...p.ambiances, [key]: Number(t.value) } }), false);
      needsCompose = "recompose";
    }
    if (t.id === "exp-w") store.setProject((p) => ({ ...p, exportSettings: { ...p.exportSettings, width: Number(t.value) } }), false);
    if (t.id === "exp-h") store.setProject((p) => ({ ...p, exportSettings: { ...p.exportSettings, height: Number(t.value) } }), false);
    if (t.id === "exp-q") store.setProject((p) => ({ ...p, exportSettings: { ...p.exportSettings, quality: Number(t.value) } }), false);
    if (t.id === "exp-name") store.setProject((p) => ({ ...p, exportSettings: { ...p.exportSettings, filename: t.value } }), false);
    liveScrub = true;
    requestField();
  });

  root.addEventListener("pointerup", () => {
    if (liveScrub) {
      liveScrub = false;
      if (needsCompose) {
        const mode = needsCompose;
        needsCompose = null;
        applyCompose(mode);
      } else {
        paint(root);
      }
    }
  });

  field?.addEventListener("pointerdown", (e) => {
    if (!field) return;
    const pt = canvasPoint(field, e);
    const hit = hitUnit(store.project.units, pt.x, pt.y, field.width, field.height);
    if (!hit) {
      store.patchUi({ selectedUnitId: null });
      return;
    }
    dragId = hit.id;
    dragMoved = false;
    store.patchUi({ selectedUnitId: hit.id, draggingUnitId: hit.id });
    field.setPointerCapture(e.pointerId);
  });
  field?.addEventListener("pointermove", (e) => {
    if (!dragId || !field) return;
    const pt = canvasPoint(field, e);
    dragMoved = true;
    store.setProject((p) => ({
      ...p,
      units: p.units.map((u) =>
        u.id === dragId ? { ...u, x: pt.x / field!.width, y: pt.y / field!.height, pinned: true } : u,
      ),
    }), false);
    requestField();
  });
  field?.addEventListener("pointerup", () => {
    if (dragId) {
      store.patchUi({
        draggingUnitId: null,
        status: dragMoved ? `pinned ${dragId}` : `unité ${dragId}`,
      });
    }
    dragId = null;
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
    if (e.key === "d" || e.key === "D") applyCompose("drift");
    if (e.key === "r" || e.key === "R") applyCompose("recompose");
    if (e.key === "?") store.patchUi({ helpOpen: !store.state.ui.helpOpen });
    if ((e.key === "s" || e.key === "S") && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      saveProject();
    }
  });
}

function applyCompose(mode: "recompose" | "drift" | "marks") {
  store.setProject((p) => {
    if (mode === "marks") {
      const next = rebuildComposition(p, "drift");
      return { ...next, units: p.units, passages: p.passages };
    }
    return rebuildComposition(p, mode);
  });
  store.patchUi({ status: mode === "recompose" ? "recomposed" : mode === "drift" ? "drifted" : "détourned" });
}

function bumpSeed(delta: number) {
  store.setProject((p) => {
    const seed = p.seed + delta;
    return rebuildComposition({ ...p, seed, drift: { ...p.drift, seed } }, "recompose");
  });
}

function addProcedural(kind: MapKind) {
  const seed = (store.project.seed + store.project.sources.length * 7919) >>> 0;
  const src: DeriveSource = materializeSource({
    id: uid("src"),
    name: MAP_KINDS.find((m) => m.id === kind)?.label ?? kind,
    kind: "procedural",
    mapKind: kind,
    mapSeed: seed,
    width: 1024,
    height: 1024,
    bitmap: null,
  });
  store.setProject((p) => rebuildComposition({ ...p, sources: [...p.sources, src] }, "recompose"));
  store.patchUi({ selectedSourceId: src.id, status: `added ${src.name}` });
}

function removeSource(id: string) {
  store.setProject((p) => rebuildComposition({ ...p, sources: p.sources.filter((s) => s.id !== id) }, "recompose"));
}

function unpinAll() {
  store.setProject((p) => ({ ...p, units: p.units.map((u) => ({ ...u, pinned: false })) }));
  store.patchUi({ status: "unpinned" });
}

function togglePin(id: string) {
  store.setProject((p) => ({
    ...p,
    units: p.units.map((u) => (u.id === id ? { ...u, pinned: !u.pinned } : u)),
  }));
}

function saveProject() {
  downloadText(`${store.project.name.replace(/\s+/g, "-")}.derive.json`, serializeProject(store.project));
  store.patchUi({ status: "saved" });
}

async function loadProjectFile(file: File) {
  try {
    const loaded = parseProject(await file.text());
    loaded.sources = loaded.sources.map((s) => materializeSource(s));
    store.replace(loaded.units.length ? loaded : rebuildComposition(loaded, "recompose"));
    store.patchUi({ status: "loaded — re-drop image files if any are missing" });
  } catch (err) {
    store.patchUi({ status: err instanceof Error ? err.message : "load failed" });
  }
}

async function importFiles(files: FileList | File[]) {
  const images: DeriveSource[] = [];
  for (const file of Array.from(files)) {
    if (!file.type.startsWith("image/") && !/\.(png|jpe?g|gif|webp|bmp)$/i.test(file.name)) continue;
    try {
      const bitmap = await createImageBitmap(file);
      images.push({
        id: uid("src"),
        name: file.name,
        kind: "image",
        fileName: file.name,
        mime: file.type,
        width: bitmap.width,
        height: bitmap.height,
        bitmap,
      });
    } catch {
      store.patchUi({ status: `failed ${file.name}` });
    }
  }
  if (!images.length) return;
  store.setProject((p) => rebuildComposition({ ...p, sources: [...p.sources, ...images] }, "recompose"));
  store.patchUi({ selectedSourceId: images[0]!.id, status: `added ${images.length} image(s)` });
}

function paint(root: HTMLElement) {
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
  const hud = root.querySelector("#hud");
  if (hud) hud.textContent = `DÉRIVE  SEED ${p.seed}  ${p.units.length} UNITÉS  ${p.passages.length} PASSAGES`;
}

function paintRail(n: HTMLElement) {
  const p = store.project;
  const ui = store.state.ui;
  n.innerHTML = `
    <div class="sec">Sources</div>
    <div class="row">
      <button class="btn tiny acid" data-act="import">Drop / import</button>
      <input id="media-file" type="file" accept="image/*" multiple hidden />
    </div>
    <div class="row" style="margin-top:6px">
      ${MAP_KINDS.map((m) => `<button class="btn tiny" data-act="gen" data-kind="${m.id}">${m.label}</button>`).join("")}
    </div>
    <div style="margin-top:8px">
      ${p.sources.map((s) => `
        <div class="thumb ${s.id === ui.selectedSourceId ? "on" : ""}" data-act="sel-src" data-id="${s.id}">
          <div class="sw" id="sw-${s.id}"></div>
          <div class="meta"><b>${esc(s.name)}</b><span>${s.kind} ${s.width}×${s.height}</span></div>
          <button class="btn tiny" data-act="del-src" data-id="${s.id}">x</button>
        </div>`).join("")}
    </div>
    <div class="status">${p.sources.length === 0 ? "generate a map to begin" : "procedural maps work with zero files"}</div>
  `;
  for (const s of p.sources) {
    const sw = n.querySelector(`#sw-${s.id}`);
    if (!sw) continue;
    if (s.bitmap && "width" in s.bitmap) {
      const c = document.createElement("canvas");
      c.width = 88;
      c.height = 56;
      const cctx = c.getContext("2d");
      if (cctx) cctx.drawImage(s.bitmap, 0, 0, 88, 56);
      sw.append(c);
    } else if (s.mapKind) {
      sw.append(renderProceduralMap(s.mapKind, s.mapSeed ?? 0, 88, 56));
    }
  }
}

function paintStack(n: HTMLElement) {
  const p = store.project;
  const sel = p.units.find((u) => u.id === store.state.ui.selectedUnitId);
  n.innerHTML = `
    ${sel ? `
      <div class="inspect">
        <div class="sec">Unité</div>
        <div><b>${esc(sel.label)}</b></div>
        <div class="amb">${AMBIANCE_LABEL[sel.ambiance]} ${sel.hub ? " · PLAQUE TOURNANTE" : ""}</div>
        <div class="status">${sel.pinned ? "pinned" : "adrift"} · ${esc(p.sources.find((s) => s.id === sel.sourceId)?.name ?? sel.sourceId)}</div>
        <div class="row" style="margin-top:6px">
          <button class="btn tiny" data-act="pin-toggle" data-id="${sel.id}">${sel.pinned ? "unpin" : "pin"}</button>
        </div>
      </div>
    ` : ""}
    <div class="sec">Drift</div>
    ${num("steps", "Steps", p.drift.steps, 2, 48, 1)}
    ${num("attraction", "Attraction", p.drift.attraction, 0, 1, 0.01)}
    <div class="status">attraction vs chance</div>
    <hr class="div" />
    <div class="sec">Units</div>
    ${num("ucount", "Count", p.unitsCfg.count, 4, 40, 1)}
    ${num("tear", "Tear", p.unitsCfg.tear, 0, 1, 0.01)}
    ${num("urot", "Rotation", p.unitsCfg.rotation, 0, 1, 0.01)}
    ${num("uscale", "Scale var", p.unitsCfg.scaleVariance, 0, 1, 0.01)}
    <div class="row"><button class="btn tiny" data-act="unpin">Unpin all</button></div>
    <hr class="div" />
    <div class="sec">Arrows</div>
    ${num("adensity", "Density", p.arrows.density, 0, 1, 0.01)}
    ${num("athick", "Thickness", p.arrows.thickness, 0, 1, 0.01)}
    ${num("acurve", "Curve", p.arrows.curve, 0, 1, 0.01)}
    <hr class="div" />
    <div class="sec">Détournement</div>
    ${num("dtdens", "Density", p.detournement.density, 0, 1, 0.01)}
    <label class="check"><input type="checkbox" id="dt-slogans" ${p.detournement.slogans ? "checked" : ""}/> slogans</label>
    <label class="check"><input type="checkbox" id="dt-streets" ${p.detournement.streets ? "checked" : ""}/> streets</label>
    <label class="check"><input type="checkbox" id="dt-coords" ${p.detournement.coordinates ? "checked" : ""}/> coordinates</label>
    <hr class="div" />
    <div class="sec">Paper</div>
    ${num("pground", "Ground", p.paper.ground, 0, 1, 0.01)}
    ${num("pstains", "Stains", p.paper.stains, 0, 1, 0.01)}
    ${num("pfold", "Fold", p.paper.fold, 0, 1, 0.01)}
    ${num("pgrid", "Grid ghost", p.paper.gridGhost, 0, 1, 0.01)}
    <hr class="div" />
    <div class="sec">Ambiances</div>
    ${AMBIANCES.map((a) => num(`amb-${a}`, AMBIANCE_LABEL[a], p.ambiances[a], 0, 1, 0.01)).join("")}
    <hr class="div" />
    <div class="sec">The Spectacle</div>
    <label class="check"><input type="checkbox" id="spec-on" ${p.spectacle.enabled ? "checked" : ""}/> oversaturated veil</label>
    ${num("spec-amt", "Amount", p.spectacle.amount, 0, 1, 0.01)}
  `;
}

function paintTransport(n: HTMLElement) {
  const p = store.project;
  const exp = p.exportSettings;
  n.innerHTML = `
    <div class="t-left">
      <div class="sec">Field</div>
      <div class="status">${p.units.filter((u) => u.hub).length} plaques tournantes</div>
      <div class="status">${p.units.filter((u) => u.pinned).length} pinned</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="status-line">${esc(store.state.ui.status)}</span>
        <span class="sp"></span>
        <button class="btn tiny acid" data-act="drift">Drift</button>
        <button class="btn tiny" data-act="recompose">Recompose</button>
      </div>
      <div class="status" style="margin-top:8px">same seed + settings + sources → same composition</div>
    </div>
    <div class="t-right">
      <div class="sec">Export still</div>
      <div class="row">
        <input id="exp-w" type="number" style="width:70px" value="${exp.width}" />
        <span>×</span>
        <input id="exp-h" type="number" style="width:70px" value="${exp.height}" />
        <select id="exp-format">
          ${["png", "jpg"].map((f) => `<option ${exp.format === f ? "selected" : ""} value="${f}">${f}</option>`).join("")}
        </select>
      </div>
      <div class="row" style="margin-top:4px">
        <input id="exp-name" type="text" style="width:90px" value="${esc(exp.filename)}" />
        <input id="exp-q" type="number" min="0.1" max="1" step="0.01" style="width:54px" value="${exp.quality}" />
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

function canvasPoint(canvas: HTMLCanvasElement, e: PointerEvent) {
  const r = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - r.left) * (canvas.width / r.width),
    y: (e.clientY - r.top) * (canvas.height / r.height),
  };
}

function sizeField() {
  if (!field) return;
  const host = field.parentElement;
  if (!host) return;
  const r = host.getBoundingClientRect();
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  let cw = r.width - 24;
  let ch = cw / ASPECT;
  if (ch > r.height - 24) {
    ch = r.height - 24;
    cw = ch * ASPECT;
  }
  field.style.width = `${Math.max(16, cw)}px`;
  field.style.height = `${Math.max(16, ch)}px`;
  field.width = Math.max(16, Math.floor(cw * dpr));
  field.height = Math.max(16, Math.floor(ch * dpr));
}

let raf = 0;
function requestField() {
  if (raf) return;
  raf = requestAnimationFrame(() => {
    raf = 0;
    drawField();
  });
}

function drawField() {
  if (!field) return;
  const ctx = field.getContext("2d");
  if (!ctx) return;
  if (field.width < 8 || field.height < 8) sizeField();
  renderComposition(ctx, field.width, field.height, store.project, store.state.ui.selectedUnitId);
}
