import type { Renderer } from "../engine/renderer";
import { store } from "../core/store";
import { BLEND_MODES, type GeneratorType, type Layer, type ParamDef } from "../core/types";
import { runExport } from "../export/export";
import { EXPORT_ASPECTS, matchAspectId, sizeForAspect, sizeFromSource } from "../core/exportSize";
import {
  addEffect,
  addKeyframe,
  addLayer,
  bumpSeed,
  clearKeyframes,
  delPreset,
  dupPreset,
  duplicateLayer,
  freezeSelected,
  generateFromPrompt,
  importFiles,
  loadPreset,
  loadProjectFile,
  moveEffect,
  patchLayer,
  randomize,
  randomPreset,
  removeEffect,
  removeLayer,
  savePreset,
  saveProject,
  selectedEffect,
  selectedLayer,
  setParam,
  startFromScratch,
  stampCritters,
  stampIdol,
  toggleEffect,
} from "./actions";
import { EFFECT_CATEGORIES, effectsByCategory, getEffect } from "../effects/registry";
import { defaultGeneratorSource } from "../core/defaults";

let liveScrub = false;
let rendererRef: Renderer | null = null;

export function mount(root: HTMLElement, renderer: Renderer) {
  rendererRef = renderer;
  root.innerHTML = "";
  root.className = "shell";
  root.innerHTML = `
    <header class="topbar">
      <div class="brand">PHOSPHENE<small>VISUAL INSTRUMENT</small></div>
      <span class="led" id="led"></span>
      <input type="text" id="proj-name" style="width:140px" />
      <button class="btn tiny" data-act="save">Save</button>
      <button class="btn tiny" data-act="load">Load</button>
      <button class="btn tiny hot" data-act="scratch">New</button>
      <button class="btn tiny acid" data-act="export" id="top-export">Export</button>
      <input type="file" id="proj-file" accept=".json,.phos.json" hidden />
      <div class="sp"></div>
      <label class="status">SEED</label>
      <input type="number" id="seed" style="width:84px" />
      <button class="btn tiny" data-act="seed-">-</button>
      <button class="btn tiny" data-act="seed+">+</button>
      <label class="status">RND</label>
      <input type="range" id="rnd-amt" min="0" max="1" step="0.01" style="width:90px" />
      <button class="btn tiny acid" data-act="rand-all">Rand all</button>
      <label class="check" title="Drop drifting colored shapes onto every layer when you hit Rand all">
        <input type="checkbox" id="inc-critters" /> floaters
      </label>
      <label class="check" title="Drop a dancing 3D figure in the middle when you hit Rand all">
        <input type="checkbox" id="inc-idol" /> idol
      </label>
      <button class="btn tiny" data-act="rand-sel">Rand sel</button>
      <button class="btn tiny" data-act="rand-param">Rand param</button>
      <select id="quality">
        <option value="draft">Draft</option>
        <option value="preview">Preview</option>
        <option value="export">Full</option>
      </select>
      <button class="btn tiny" data-act="help">?</button>
    </header>
    <div class="workspace">
      <aside class="rail" id="rail"></aside>
      <section class="stage">
        <div class="viewport" id="view">
          <div class="hud" id="hud"></div>
          <div class="dropveil" id="veil">DROP IMAGE / VIDEO</div>
        </div>
      </section>
      <aside class="stack" id="stack"></aside>
    </div>
    <footer class="transport" id="transport"></footer>
    <div class="help" id="help">
      <div class="card">
        <h3>PHOSPHENE</h3>
        <p>A digital darkroom / video synth. Drop media, stack effects, randomize, feed the output back into itself.</p>
        <ul>
          <li><kbd>Space</kbd> play / pause</li>
          <li><kbd>R</kbd> randomize selected &nbsp; <kbd>Shift+R</kbd> new look (lush / outsider mix)</li>
          <li><kbd>K</kbd> keyframe selected parameter</li>
          <li><kbd>N</kbd> start from scratch</li>
          <li><kbd>?</kbd> this card</li>
          <li>Type a prompt on the left and click Generate to make a <em>new</em> image. Check “use source as reference” to keep the mood of your upload without copying it.</li>
          <li><strong>Rand all</strong> picks a new look each time — lush color/bloom mixed with outsider-art dirt, xerox, and drifting shapes. Keep the <em>floaters</em> box on to send one-off colored objects across the frame.</li>
          <li><strong>Idol</strong> plants a low-poly 3D creature in the middle of the frame — stamp it to grow a new one, keep the top-bar box on so Rand all includes it. Think Osamu Sato: weird dancer on a synth background.</li>
          <li>Bottom-right: pick a shape, pick <strong>2s / 4s / 8s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
        </ul>
        <p>Add a GLSL effect by implementing <code>vec4 apply(vec2 uv)</code> — see <code>src/effects/HOW_TO_ADD.md</code>.</p>
        <button class="btn acid" data-act="help">close</button>
      </div>
    </div>
  `;
  const view = root.querySelector("#view")!;
  view.append(renderer.canvas);
  renderer.canvas.id = "gl";
  bind(root);
  store.subscribe(() => {
    if (!liveScrub) paint(root);
  });
  paint(root);
}

async function runCurrentExport(clip = false) {
  if (!rendererRef) return;
  if (store.state.ui.exporting) return;
  store.setProject((p) => ({ ...p, playback: { ...p.playback, playing: false } }));
  store.patchUi({ exporting: true, status: "exporting clip…" });
  try {
    const note = await runExport(rendererRef, store.project, store.project.playback.time, (i, n) => {
      store.patchUi({ status: `export ${i + 1}/${n}`, exporting: true }, false);
    }, clip);
    store.patchUi({ exporting: false, status: typeof note === "string" && note ? note : "export done" });
  } catch (err) {
    store.patchUi({ exporting: false, status: err instanceof Error ? err.message : "export failed" });
  }
}

function bind(root: HTMLElement) {
  root.addEventListener("click", async (e) => {
    const t = (e.target as HTMLElement).closest("[data-act]") as HTMLElement | null;
    if (!t) return;
    const act = t.dataset.act!;
    const id = t.dataset.id;
    if (act === "save") saveProject();
    if (act === "load") root.querySelector<HTMLInputElement>("#proj-file")?.click();
    if (act === "scratch") startFromScratch();
    if (act === "imagine") void generateFromPrompt();
    if (act === "seed-") bumpSeed(-1);
    if (act === "seed+") bumpSeed(1);
    if (act === "rand-all") randomize("all");
    if (act === "rand-sel") randomize("selected");
    if (act === "rand-param") {
      const paramId = t.dataset.paramId;
      const layer = selectedLayer(store.project);
      const fx = selectedEffect(layer);
      if (paramId && layer && fx) {
        store.patchUi(
          { selectedParam: { layerId: layer.id, effectId: fx.id, paramId } },
          false,
        );
      }
      randomize("param");
    }
    if (act === "help") store.patchUi({ helpOpen: !store.state.ui.helpOpen });
    if (act === "import") root.querySelector<HTMLInputElement>("#media-file")?.click();
    if (act === "replace") root.querySelector<HTMLInputElement>("#replace-file")?.click();
    if (act === "freeze") void freezeSelected();
    if (act === "gen") {
      const kind = (t.dataset.kind ?? "plasma") as GeneratorType;
      const src = defaultGeneratorSource(kind);
      store.setProject((p) => ({ ...p, sources: [...p.sources, src] }));
      if (kind === "critters") {
        const lyr = selectedLayer(store.project);
        if (lyr) patchLayer(lyr.id, (l) => ({ ...l, sourceId: src.id }));
        store.patchUi({ selectedSourceId: src.id, status: "floaters on this layer" });
      } else {
        store.patchUi({ selectedSourceId: src.id, status: `generator ${kind}` });
      }
    }
    if (act === "stamp-critters") stampCritters();
    if (act === "stamp-idol") stampIdol();
    if (act === "add-layer") addLayer();
    if (act === "dup-layer" && id) duplicateLayer(id);
    if (act === "del-layer" && id) removeLayer(id);
    if (act === "sel-layer" && id) store.patchUi({ selectedLayerId: id, selectedEffectId: store.project.layers.find((l) => l.id === id)?.effects[0]?.id ?? null });
    if (act === "sel-fx" && id) store.patchUi({ selectedEffectId: id });
    if (act === "sel-src" && id) store.patchUi({ selectedSourceId: id });
    if (act === "bypass" && id) {
      const lyr = selectedLayer(store.project);
      if (lyr) toggleEffect(lyr.id, id);
    }
    if (act === "fx-up" && id) {
      const lyr = selectedLayer(store.project);
      if (lyr) moveEffect(lyr.id, id, -1);
    }
    if (act === "fx-dn" && id) {
      const lyr = selectedLayer(store.project);
      if (lyr) moveEffect(lyr.id, id, 1);
    }
    if (act === "fx-del" && id) {
      const lyr = selectedLayer(store.project);
      if (lyr) removeEffect(lyr.id, id);
    }
    if (act === "key") addKeyframe();
    if (act === "key-clear") clearKeyframes();
    if (act === "pst-save") savePreset();
    if (act === "pst-rand") randomPreset();
    if (act === "pst-load" && id) loadPreset(id);
    if (act === "pst-dup" && id) dupPreset(id);
    if (act === "pst-del" && id) delPreset(id);
    if (act === "export") void runCurrentExport();
    if (act === "clip") {
      const secs = Math.max(1, Number(t.dataset.secs || 4));
      store.setProject((p) => ({
        ...p,
        duration: Math.max(p.duration, secs),
        exportSettings: {
          ...p.exportSettings,
          duration: secs,
          format: "mp4",
          fps: 24,
          bitrate: Math.min(p.exportSettings.bitrate, 8),
        },
      }));
      store.patchUi({ status: `${secs}s clip ready — hit Export` });
    }
    if (act === "exp-aspect" && id) {
      const aspect = EXPORT_ASPECTS.find((a) => a.id === id);
      if (aspect) {
        const size = sizeForAspect(aspect.rw, aspect.rh, 1280);
        store.setProject((p) => ({
          ...p,
          exportSettings: { ...p.exportSettings, width: size.width, height: size.height },
        }));
      }
    }
    if (act === "exp-aspect-src") {
      const p = store.project;
      const layer = selectedLayer(p);
      const src = p.sources.find((s) => s.id === (layer?.sourceId ?? p.sources[0]?.id));
      const size = sizeFromSource(src?.width ?? 1280, src?.height ?? 720, 1280);
      store.setProject((pr) => ({
        ...pr,
        exportSettings: { ...pr.exportSettings, width: size.width, height: size.height },
      }));
    }
    if (act === "play") {
      store.setProject((p) => ({ ...p, playback: { ...p.playback, playing: !p.playback.playing } }));
    }
    if (act === "use-src" && id) {
      const lyr = selectedLayer(store.project);
      if (lyr) patchLayer(lyr.id, (l) => ({ ...l, sourceId: id }));
    }
  });

  root.addEventListener("change", (e) => {
    const t = e.target as HTMLInputElement | HTMLSelectElement;
    if (t.id === "proj-file" && t instanceof HTMLInputElement && t.files?.[0]) {
      void loadProjectFile(t.files[0]);
      t.value = "";
    }
    if (t.id === "media-file" && t instanceof HTMLInputElement && t.files) {
      void importFiles(t.files, false);
      t.value = "";
    }
    if (t.id === "replace-file" && t instanceof HTMLInputElement && t.files) {
      void importFiles(t.files, true);
      t.value = "";
    }
    if (t.id === "quality") store.setProject((p) => ({ ...p, quality: t.value as ProjectQuality }));
    if (t.id === "add-fx") {
      if (t.value) addEffect(t.value);
      t.value = "";
    }
    if (t.id === "blend") {
      const lyr = selectedLayer(store.project);
      if (lyr) patchLayer(lyr.id, (l) => ({ ...l, blendMode: t.value as Layer["blendMode"] }));
    }
    if (t.id === "mask-type") {
      const lyr = selectedLayer(store.project);
      if (lyr) patchLayer(lyr.id, (l) => ({ ...l, mask: { ...l.mask, type: t.value as Layer["mask"]["type"] } }));
    }
    if (t.id === "preset-sel" && t.value) loadPreset(t.value);
    if (t.id === "exp-format") store.setProject((p) => ({ ...p, exportSettings: { ...p.exportSettings, format: t.value as typeof p.exportSettings.format } }));
    if (t.id === "play-mode") store.setProject((p) => ({ ...p, playback: { ...p.playback, mode: t.value as typeof p.playback.mode } }));
    if (t.id === "inc-critters" || t.id === "inc-critters-rail") {
      store.patchUi({ includeCritters: (t as HTMLInputElement).checked });
    }
    if (t.id === "inc-idol" || t.id === "inc-idol-rail") {
      store.patchUi({ includeIdol: (t as HTMLInputElement).checked });
    }
  });

  root.addEventListener("input", (e) => {
    const t = e.target as HTMLInputElement;
    const p = store.project;
    if (t.id === "gen-prompt") store.patchUi({ prompt: t.value }, false);
    if (t.id === "gen-src") store.patchUi({ useSourceForGen: (t as HTMLInputElement).checked }, false);
    if (t.id === "inc-critters" || t.id === "inc-critters-rail") {
      store.patchUi({ includeCritters: (t as HTMLInputElement).checked });
    }
    if (t.id === "inc-idol" || t.id === "inc-idol-rail") {
      store.patchUi({ includeIdol: (t as HTMLInputElement).checked });
    }
    if (t.id === "seed") store.setProject((pr) => ({ ...pr, seed: Number(t.value) || 0 }), false);
    if (t.id === "rnd-amt") store.setProject((pr) => ({ ...pr, randomAmount: Number(t.value) }), false);
    if (t.id === "speed") store.setProject((pr) => ({ ...pr, playback: { ...pr.playback, speed: Number(t.value) } }), false);
    if (t.id === "loop") store.setProject((pr) => ({ ...pr, playback: { ...pr.playback, loop: t.checked } }), false);
    if (t.id === "freeze") store.setProject((pr) => ({ ...pr, playback: { ...pr.playback, freeze: t.checked } }), false);
    if (t.id === "time") store.setProject((pr) => ({ ...pr, playback: { ...pr.playback, time: Number(t.value) } }), false);
    if (t.id === "opacity") {
      const lyr = selectedLayer(p);
      if (lyr) patchLayer(lyr.id, (l) => ({ ...l, opacity: Number(t.value) }), false);
    }
    if (t.id === "lyr-en") {
      const lyr = selectedLayer(p);
      if (lyr) patchLayer(lyr.id, (l) => ({ ...l, enabled: t.checked }), false);
    }
    for (const key of ["amount", "delay", "opacity", "scale", "rotation", "distortion"] as const) {
      if (t.id === `fb-${key}`) {
        store.setProject((pr) => ({ ...pr, globalFeedback: { ...pr.globalFeedback, [key]: Number(t.value) } }), false);
      }
      if (t.id === `lfb-${key}`) {
        const lyr = selectedLayer(p);
        if (lyr) patchLayer(lyr.id, (l) => ({ ...l, feedback: { ...l.feedback, [key]: Number(t.value) } }), false);
      }
    }
    if (t.id.startsWith("tr-")) {
      const lyr = selectedLayer(p);
      const k = t.id.slice(3) as "x" | "y" | "scale" | "rotation";
      if (lyr && k in lyr.transform) patchLayer(lyr.id, (l) => ({ ...l, transform: { ...l.transform, [k]: Number(t.value) } }), false);
    }
    if (t.dataset.param && t.dataset.fx && t.dataset.layer) {
      liveScrub = true;
      const def = paramDef(t.dataset.fxType || "", t.dataset.param);
      const v = readParam(t, def);
      setParam(t.dataset.layer, t.dataset.fx, t.dataset.param, v, false);
      store.patchUi(
        { selectedParam: { layerId: t.dataset.layer, effectId: t.dataset.fx, paramId: t.dataset.param } },
        false,
      );
    }
    if (t.id === "exp-w") store.setProject((pr) => ({ ...pr, exportSettings: { ...pr.exportSettings, width: Number(t.value) } }), false);
    if (t.id === "exp-h") store.setProject((pr) => ({ ...pr, exportSettings: { ...pr.exportSettings, height: Number(t.value) } }), false);
    if (t.id === "exp-fps") store.setProject((pr) => ({ ...pr, exportSettings: { ...pr.exportSettings, fps: Number(t.value) } }), false);
    if (t.id === "exp-dur") store.setProject((pr) => ({ ...pr, exportSettings: { ...pr.exportSettings, duration: Number(t.value), }, duration: Number(t.value) }), false);
    if (t.id === "exp-q") store.setProject((pr) => ({ ...pr, exportSettings: { ...pr.exportSettings, quality: Number(t.value) } }), false);
    if (t.id === "exp-br") store.setProject((pr) => ({ ...pr, exportSettings: { ...pr.exportSettings, bitrate: Number(t.value) } }), false);
    if (t.id === "exp-name") store.setProject((pr) => ({ ...pr, exportSettings: { ...pr.exportSettings, filename: t.value } }), false);
  });

  root.addEventListener("pointerup", () => {
    if (liveScrub) {
      liveScrub = false;
      paint(root);
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
    if (e.code === "Space") {
      e.preventDefault();
      store.setProject((p) => ({ ...p, playback: { ...p.playback, playing: !p.playback.playing } }));
    }
    if (e.key === "r" || e.key === "R") randomize(e.shiftKey ? "all" : "selected");
    if (e.key === "k" || e.key === "K") addKeyframe();
    if (e.key === "n" || e.key === "N") {
      e.preventDefault();
      startFromScratch();
    }
    if (e.key === "?") store.patchUi({ helpOpen: !store.state.ui.helpOpen });
    if ((e.key === "s" || e.key === "S") && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      saveProject();
    }
  });
}

type ProjectQuality = "draft" | "preview" | "export";

function paramDef(typeId: string, paramId: string): ParamDef | undefined {
  return getEffect(typeId)?.params.find((p) => p.id === paramId);
}

function readParam(t: HTMLInputElement | HTMLSelectElement, def?: ParamDef): number | string | boolean {
  if (!def) return t.value;
  if (def.kind === "bool") return (t as HTMLInputElement).checked;
  if (def.kind === "color" || def.kind === "enum") return t.value;
  if (def.kind === "int") return Math.round(Number(t.value));
  return Number(t.value);
}

function paint(root: HTMLElement) {
  const { project: p, ui } = store.state;
  const name = root.querySelector<HTMLInputElement>("#proj-name");
  const seed = root.querySelector<HTMLInputElement>("#seed");
  const rnd = root.querySelector<HTMLInputElement>("#rnd-amt");
  const quality = root.querySelector<HTMLSelectElement>("#quality");
  if (name && document.activeElement !== name) name.value = p.name;
  if (seed && document.activeElement !== seed) seed.value = String(p.seed);
  if (rnd) rnd.value = String(p.randomAmount);
  if (quality) quality.value = p.quality;
  const topExp = root.querySelector<HTMLButtonElement>("#top-export");
  if (topExp) topExp.disabled = ui.exporting;
  const crit = root.querySelector<HTMLInputElement>("#inc-critters");
  if (crit) crit.checked = ui.includeCritters;
  const idol = root.querySelector<HTMLInputElement>("#inc-idol");
  if (idol) idol.checked = ui.includeIdol;
  root.querySelector("#help")?.classList.toggle("on", ui.helpOpen);
  root.querySelector("#veil")?.classList.toggle("on", ui.dropActive);
  root.querySelector("#led")?.classList.toggle("hot", p.playback.playing);

  paintRail(root.querySelector("#rail")!);
  paintStack(root.querySelector("#stack")!);
  paintTransport(root.querySelector("#transport")!);
}

function paintRail(n: HTMLElement) {
  const p = store.project;
  const ui = store.state.ui;
  n.innerHTML = `
    <div class="sec">Sources</div>
    <div class="row">
      <button class="btn tiny acid" data-act="import">Import</button>
      <button class="btn tiny" data-act="replace">Replace</button>
      <button class="btn tiny" data-act="freeze">Still frame</button>
      <input id="media-file" type="file" accept="image/*,video/*,.tif,.tiff,.mov,.webm,.mp4,.gif" multiple hidden />
      <input id="replace-file" type="file" accept="image/*,video/*,.tif,.tiff,.mov,.webm,.mp4,.gif" hidden />
    </div>
    <hr class="div" />
    <div class="sec">Generate new image</div>
    <textarea id="gen-prompt" class="prompt" placeholder="describe a new image… e.g. grainy night photo of a flooded parking lot, sodium lights">${esc(ui.prompt)}</textarea>
    <label class="check"><input type="checkbox" id="gen-src" ${ui.useSourceForGen ? "checked" : ""}/> use selected source as reference</label>
    <button class="btn tiny acid" data-act="imagine" ${ui.generating ? "disabled" : ""}>${ui.generating ? "working…" : "Generate"}</button>
    <div class="status" style="margin-top:4px">Makes a new picture from your prompt. Does not overwrite the upload.</div>
    <div class="row" style="margin-top:6px">
      <button class="btn tiny" data-act="gen" data-kind="plasma">Plasma</button>
      <button class="btn tiny" data-act="gen" data-kind="noise">Noise</button>
      <button class="btn tiny" data-act="gen" data-kind="bars">Bars</button>
      <button class="btn tiny" data-act="gen" data-kind="gradient">Grad</button>
      <button class="btn tiny" data-act="gen" data-kind="checker">Check</button>
      <button class="btn tiny acid" data-act="gen" data-kind="critters">Floaters</button>
      <button class="btn tiny acid" data-act="stamp-critters">Stamp floaters</button>
      <button class="btn tiny acid" data-act="stamp-idol">Stamp idol</button>
    </div>
    <label class="check"><input type="checkbox" id="inc-critters-rail" ${ui.includeCritters ? "checked" : ""}/> include floaters in Rand all</label>
    <label class="check"><input type="checkbox" id="inc-idol-rail" ${ui.includeIdol ? "checked" : ""}/> include idol in Rand all</label>
    <div class="status" style="margin-top:4px">Floaters drift across. An idol is a low-poly dancer with a made-up animal face — stamp to grow a new one.</div>
    <div style="margin-top:8px">
      ${p.sources.map((s) => `
        <div class="thumb ${s.id === ui.selectedSourceId ? "on" : ""}" data-act="sel-src" data-id="${s.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${esc(s.name)}</b><span>${s.kind} ${s.width}×${s.height}</span></div>
          <button class="btn tiny" data-act="use-src" data-id="${s.id}">use</button>
        </div>`).join("")}
    </div>
    <hr class="div" />
    <div class="sec">Feedback bus</div>
    ${num("fb-amount", "Amt", p.globalFeedback.amount, 0, 1, 0.01)}
    ${num("fb-delay", "Delay", p.globalFeedback.delay, 0, 15, 1)}
    ${num("fb-opacity", "Opac", p.globalFeedback.opacity, 0, 1, 0.01)}
    ${num("fb-scale", "Scale", p.globalFeedback.scale, 0.8, 1.4, 0.001)}
    ${num("fb-rotation", "Rot", p.globalFeedback.rotation, -0.2, 0.2, 0.001)}
    ${num("fb-distortion", "Dist", p.globalFeedback.distortion, 0, 2, 0.01)}
    <hr class="div" />
    <div class="sec">Presets</div>
    <div class="row">
      <button class="btn tiny" data-act="pst-save">Save</button>
      <button class="btn tiny" data-act="pst-rand">Random look</button>
    </div>
    ${p.presets.map((pst) => `
      <div class="fx ${""}" style="margin-top:6px">
        <div class="hd"><span>${esc(pst.name)}</span>
          <span>
            <button class="btn tiny" data-act="pst-load" data-id="${pst.id}">load</button>
            <button class="btn tiny" data-act="pst-dup" data-id="${pst.id}">dup</button>
            <button class="btn tiny" data-act="pst-del" data-id="${pst.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${p.presets.length === 0 ? `<div class="status">no presets yet</div>` : ""}
  `;
}

function paintStack(n: HTMLElement) {
  const p = store.project;
  const layer = selectedLayer(p);
  const fx = selectedEffect(layer);
  const groups = effectsByCategory();
  n.innerHTML = `
    <div class="sec">Layers</div>
    <div class="row"><button class="btn tiny acid" data-act="add-layer">+ layer</button></div>
    ${p.layers.map((l) => `
      <div class="layer ${l.id === layer?.id ? "on" : ""}" data-act="sel-layer" data-id="${l.id}">
        <div class="hd">
          <span class="name">${esc(l.name)}</span>
          <span>
            <button class="btn tiny" data-act="dup-layer" data-id="${l.id}">dup</button>
            <button class="btn tiny" data-act="del-layer" data-id="${l.id}">x</button>
          </span>
        </div>
      </div>`).join("")}
    ${layer ? `
      <div class="check"><input type="checkbox" id="lyr-en" ${layer.enabled ? "checked" : ""}/> enabled</div>
      ${num("opacity", "Opacity", layer.opacity, 0, 1, 0.01)}
      <div class="param"><span>Blend</span>
        <select id="blend">${BLEND_MODES.map((m) => `<option value="${m}" ${m === layer.blendMode ? "selected" : ""}>${m}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      ${num("tr-x", "X", layer.transform.x, -1, 1, 0.01)}
      ${num("tr-y", "Y", layer.transform.y, -1, 1, 0.01)}
      ${num("tr-scale", "Scale", layer.transform.scale, 0.1, 4, 0.01)}
      ${num("tr-rotation", "Rot", layer.transform.rotation, -3.14, 3.14, 0.01)}
      <div class="sec">Layer feedback</div>
      ${num("lfb-amount", "Amt", layer.feedback.amount, 0, 1, 0.01)}
      ${num("lfb-opacity", "Opac", layer.feedback.opacity, 0, 1, 0.01)}
      ${num("lfb-scale", "Scale", layer.feedback.scale, 0.8, 1.4, 0.001)}
      ${num("lfb-rotation", "Rot", layer.feedback.rotation, -0.5, 0.5, 0.001)}
      ${num("lfb-distortion", "Dist", layer.feedback.distortion, 0, 2, 0.01)}
      <div class="sec">Mask</div>
      <div class="param"><span>Type</span>
        <select id="mask-type">${["none","rect","circle","gradient","noise"].map((m) => `<option ${layer.mask.type===m?"selected":""} value="${m}">${m}</option>`).join("")}</select>
        <span></span><span></span>
      </div>
      <div class="sec">Effects</div>
      ${layer.effects.map((e, i) => `
        <div class="fx ${e.id === fx?.id ? "on" : ""} ${e.enabled ? "" : "bypass"}" draggable="true" data-fx-index="${i}">
          <div class="hd">
            <span data-act="sel-fx" data-id="${e.id}">${i + 1}. ${esc(getEffect(e.typeId)?.name ?? e.typeId)}</span>
            <span>
              <button class="btn tiny" data-act="bypass" data-id="${e.id}">${e.enabled ? "on" : "off"}</button>
              <button class="btn tiny" data-act="fx-up" data-id="${e.id}">↑</button>
              <button class="btn tiny" data-act="fx-dn" data-id="${e.id}">↓</button>
              <button class="btn tiny" data-act="fx-del" data-id="${e.id}">x</button>
            </span>
          </div>
        </div>`).join("")}
      <select id="add-fx" class="addfx">
        <option value="">+ add effect</option>
        ${EFFECT_CATEGORIES.map((cat) => {
          const list = groups[cat.id] ?? [];
          if (!list.length) return "";
          return `<optgroup label="${cat.label}">${list.map((e) => `<option value="${e.id}">${e.name}</option>`).join("")}</optgroup>`;
        }).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny acid" data-act="stamp-critters">stamp floaters</button>
        <button class="btn tiny acid" data-act="stamp-idol">stamp idol</button>
      </div>
      ${fx ? `
        <hr class="div" />
        <div class="sec">${esc(getEffect(fx.typeId)?.name ?? "params")} · ${esc(getEffect(fx.typeId)?.description ?? "")}</div>
        ${(getEffect(fx.typeId)?.params ?? []).map((param) => paramRow(layer.id, fx, param)).join("")}
        <button class="btn tiny" data-act="rand-sel">randomize this effect</button>
      ` : ""}
    ` : ""}
  `;
  n.querySelectorAll<HTMLElement>("[draggable]").forEach((row) => {
    row.addEventListener("dragstart", (ev) => {
      ev.dataTransfer?.setData("text/plain", row.getAttribute("data-fx-index") || "0");
    });
    row.addEventListener("dragover", (ev) => ev.preventDefault());
    row.addEventListener("drop", (ev) => {
      ev.preventDefault();
      const from = Number(ev.dataTransfer?.getData("text/plain"));
      const to = Number(row.getAttribute("data-fx-index"));
      if (!layer || Number.isNaN(from) || Number.isNaN(to) || from === to) return;
      patchLayer(layer.id, (l) => {
        const effects = [...l.effects];
        const [item] = effects.splice(from, 1);
        effects.splice(to, 0, item);
        return { ...l, effects };
      });
    });
  });
}

function paramRow(layerId: string, fx: { id: string; typeId: string; params: Record<string, number | string | boolean> }, param: ParamDef): string {
  const v = fx.params[param.id] ?? param.default;
  const common = `data-param="${param.id}" data-fx="${fx.id}" data-layer="${layerId}" data-fx-type="${fx.typeId}"`;
  if (param.kind === "bool") {
    return `<label class="check"><input type="checkbox" ${common} ${v ? "checked" : ""}/> ${esc(param.label)}</label>`;
  }
  if (param.kind === "color") {
    return `<div class="param"><span>${esc(param.label)}</span><input type="color" ${common} value="${esc(String(v))}"/><span></span>
      <button class="btn tiny" data-act="rand-param" data-param-id="${param.id}">↻</button></div>`;
  }
  if (param.kind === "enum") {
    return `<div class="param"><span>${esc(param.label)}</span>
      <select ${common}>${(param.options ?? []).map((o) => `<option value="${o.value}" ${o.value === v ? "selected" : ""}>${o.label}</option>`).join("")}</select>
      <span></span><button class="btn tiny" data-act="rand-param" data-param-id="${param.id}">↻</button></div>`;
  }
  return `<div class="param">
    <span>${esc(param.label)}</span>
    <input type="range" ${common} min="${param.min ?? 0}" max="${param.max ?? 1}" step="${param.step ?? 0.01}" value="${Number(v)}" />
    <input type="number" ${common} min="${param.min ?? 0}" max="${param.max ?? 1}" step="${param.step ?? 0.01}" value="${Number(Number(v).toFixed(3))}" />
    <button class="btn tiny" data-act="rand-param" data-param-id="${param.id}">↻</button>
  </div>`;
}

function paintTransport(n: HTMLElement) {
  const p = store.project;
  const pb = p.playback;
  const exp = p.exportSettings;
  const busy = store.state.ui.exporting;
  const dur = Math.max(p.duration, 0.1);
  const pct = (pb.time / dur) * 100;
  n.innerHTML = `
    <div class="t-left">
      <div class="sec">Playback</div>
      <div class="row">
        <button class="btn acid" data-act="play">${pb.playing ? "pause" : "play"}</button>
        <select id="play-mode">
          ${["forward","reverse","pingpong","random"].map((m) => `<option ${pb.mode===m?"selected":""} value="${m}">${m}</option>`).join("")}
        </select>
      </div>
      ${num("speed", "Speed", pb.speed, 0.05, 4, 0.01)}
      <div class="check"><input type="checkbox" id="loop" ${pb.loop ? "checked" : ""}/> loop
        &nbsp; <input type="checkbox" id="freeze" ${pb.freeze ? "checked" : ""}/> freeze</div>
    </div>
    <div class="t-mid">
      <div class="row">
        <span class="status" id="clock">${fmtTime(pb.time)} / ${fmtTime(dur)}</span>
        <span class="status" id="status-line">${store.state.ui.status}</span>
        <span class="sp"></span>
        <button class="btn tiny" data-act="key">Key</button>
        <button class="btn tiny" data-act="key-clear">Clear keys</button>
      </div>
      <div class="timeline" id="timeline">
        <div class="keys">
          ${p.keyframes.map((k) => `<div class="key" style="left:${(k.time / dur) * 100}%"></div>`).join("")}
        </div>
        <div class="playhead" style="left:${pct}%"></div>
      </div>
      <input class="scrub" id="time" type="range" min="0" max="${dur}" step="0.001" value="${pb.time}" />
    </div>
    <div class="t-right">
      <div class="sec">Export</div>
      <div class="row">
        <span class="status">shape</span>
        ${EXPORT_ASPECTS.map((a) => {
          const on = matchAspectId(exp.width, exp.height) === a.id;
          return `<button class="btn tiny ${on ? "acid" : ""}" data-act="exp-aspect" data-id="${a.id}">${a.label}</button>`;
        }).join("")}
        <button class="btn tiny" data-act="exp-aspect-src">match src</button>
      </div>
      <div class="row" style="margin-top:4px">
        <span class="status">size</span>
        <input id="exp-w" type="number" style="width:64px" value="${exp.width}" title="width" />
        <span>×</span>
        <input id="exp-h" type="number" style="width:64px" value="${exp.height}" title="height" />
        <select id="exp-format">
          ${["png","jpg","webm","mp4","sequence"].map((f) => `<option ${exp.format===f?"selected":""} value="${f}">${f}</option>`).join("")}
        </select>
      </div>
      <div class="row" style="margin-top:6px">
        <span class="status">length</span>
        ${[2, 4, 6, 8].map((s) => `<button class="btn tiny ${Number(exp.duration) === s ? "acid" : ""}" data-act="clip" data-secs="${s}" ${busy ? "disabled" : ""}>${s}s</button>`).join("")}
        <span class="status">sec</span>
        <input id="exp-dur" type="number" min="1" max="8" step="1" style="width:48px" value="${exp.duration}" title="seconds" />
        <span class="sp"></span>
        <button class="btn acid export" data-act="export" ${busy ? "disabled" : ""}>${busy ? "exporting…" : "Export"}</button>
      </div>
    </div>
  `;
  n.querySelector("#timeline")?.addEventListener("click", (ev) => {
    const r = (ev.currentTarget as HTMLElement).getBoundingClientRect();
    const t = ((ev as MouseEvent).clientX - r.left) / r.width * dur;
    store.setProject((pr) => ({ ...pr, playback: { ...pr.playback, time: Math.max(0, t) } }));
  });
}

function num(id: string, label: string, value: number, min: number, max: number, step: number) {
  return `<div class="param"><span>${label}</span>
    <input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" />
    <input id="${id}" type="number" min="${min}" max="${max}" step="${step}" value="${Number(value.toFixed(3))}" />
    <span></span></div>`;
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

function fmtTime(t: number) {
  const m = Math.floor(t / 60);
  const s = t - m * 60;
  return `${String(m).padStart(2, "0")}:${s.toFixed(2).padStart(5, "0")}`;
}

export function resizeCanvas(canvas: HTMLCanvasElement, host: HTMLElement) {
  if (store.state.ui.exporting) return;
  const dpr = 1;
  const r = host.getBoundingClientRect();
  const w = Math.max(16, Math.floor(r.width * dpr));
  const h = Math.max(16, Math.floor(r.height * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
}

export function tickHud(root: HTMLElement, fps: number, time: number) {
  const hud = root.querySelector("#hud");
  if (hud) hud.textContent = `PHOSPHENE  ${fmtTime(time)}  ${fps.toFixed(0)}FPS  ${store.project.quality.toUpperCase()}`;
  const dur = Math.max(store.project.duration, 0.1);
  const head = root.querySelector<HTMLElement>(".playhead");
  if (head) head.style.left = `${(time / dur) * 100}%`;
  const clock = root.querySelector("#clock");
  if (clock) clock.textContent = `${fmtTime(time)} / ${fmtTime(dur)}`;
  const slider = root.querySelector<HTMLInputElement>("#time");
  if (slider && document.activeElement !== slider) slider.value = String(time);
  const status = root.querySelector("#status-line");
  if (status) status.textContent = store.state.ui.status;
}
