import type { Renderer } from "../engine/renderer";
import { store } from "../core/store";
import { BLEND_MODES, type GeneratorType, type Layer, type MediaSource, type ParamDef } from "../core/types";
import { runExport } from "../export/export";
import { EXPORT_ASPECTS, matchAspectId, sizeForAspect, sizeFromSource } from "../core/exportSize";
import {
  addEffect,
  addKeyframe,
  addLayer,
  addSource,
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
  reprintFrame,
  stampChaos,
  stampCritters,
  stampIdol,
  toggleEffect,
} from "./actions";
import { resumeAudio } from "../media/audio";
import { EFFECT_CATEGORIES, effectsByCategory, getEffect } from "../effects/registry";
import { collageName, defaultGeneratorSource } from "../core/defaults";
import {
  COLLAGE_KITS,
  clampCollageDensity,
  clampCollagePace,
  clampCollageScale,
  groundsForKit,
  isHeraldry,
  kitFromUnknown,
  moveFromUnknown,
  type CollageKit,
  type CollageMove,
} from "../engine/heraldry";

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
      <input id="audio-file" type="file" accept="audio/*,.mp3,.wav,.ogg,.m4a,.aac,.flac" hidden />
      <div class="sp"></div>
      <label class="status">SEED</label>
      <input type="number" id="seed" style="width:84px" />
      <button class="btn tiny" data-act="seed-">-</button>
      <button class="btn tiny" data-act="seed+">+</button>
      <label class="status">RND</label>
      <input type="range" id="rnd-amt" min="0" max="1" step="0.01" style="width:90px" />
      <button class="btn tiny acid" data-act="rand-all">Rand all</button>
      <button class="btn tiny hot" data-act="rand-wacky" title="A new kit, ground color, and camera move">Rand wacky</button>
      <button class="btn tiny ${store.project.cutEdit?.enabled ? "acid" : ""}" data-act="cut-edit" title="Cut to the beat through music-reactive looks">Cut edit</button>
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
          <div class="dropveil" id="veil">DROP IMAGE / VIDEO / MP3</div>
        </div>
      </section>
      <aside class="stack" id="stack"></aside>
    </div>
    <footer class="transport" id="transport"></footer>
    <div class="help" id="help">
      <div class="card">
        <h3>PHOSPHENE</h3>
        <p>A collage machine. Stamp kits fly at the camera or ride a locked pattern on a warm ground. Each kit has a wider drawer of shapes now. Rush is the fly-at-the-lens. Tide / rings / loom / petal / flock / wheel / silk are the slow looping patterns. Bars / ripple / swing / burst / halo / clap / wave / drop / spot are the music moves — they stay on a smooth path and punch scale, glow, and bounce on the beat. Drop holds still until a chorus hit. Spot lights one stamp each hit. Drop an MP3 and the stamps pop on the beat without jumping off their path.</p>
        <ul>
          <li><kbd>Space</kbd> play / pause</li>
          <li><kbd>R</kbd> randomize selected &nbsp; <kbd>Shift+R</kbd> new look &nbsp; <kbd>Shift+W</kbd> wackier look</li>
          <li><kbd>K</kbd> keyframe selected parameter</li>
          <li><kbd>N</kbd> start from scratch</li>
          <li><kbd>?</kbd> this card</li>
          <li>Type a prompt on the left and click Generate to make a <em>new</em> image. Check “use source as reference” to keep the mood of your upload without copying it. Drop an MP3 the same way — it becomes the soundtrack, not the picture.</li>
          <li><strong>Rand all</strong> / <strong>Rand wacky</strong> rolls a new kit, ground, and one locked move. Rolls stay small and slower now — no giant stamps, no frantic bounce/flip/flash.</li>
          <li><strong>Cut edit</strong> is the other randomizer. It listens to the MP3 and cuts on the beat through music-reactive looks. Some shots hold a bar or two. Some are two quick hits that settle. It should feel edited, not shuffled.</li>
          <li><strong>Print frame</strong> turns the live picture into a still.</li>
          <li><strong>Kits</strong> — Sailor, Circus, Fruit, Grove, Love, Space, Sweet, Music. Move buttons keep the current kit.</li>
          <li><strong>Mash</strong> — mix a second kit’s stamps onto the same ground. <strong>Wash</strong> taps a kit color without rolling a new move. <strong>Night</strong> is a darker club wash that breathes on bass.</li>
          <li><strong>Size / Storm</strong> — few giants or a sticker storm.</li>
          <li><strong>Soundtrack</strong> — hit <em>MP3</em> or drop a clip (mp3/wav/ogg/m4a). It does not replace your picture. Playback starts and the stamps breathe on the beat without jumping off their path. Export an MP4 while a song is loaded and the clip keeps the music (aligned from the start of the clip). Stills and PNG sequences stay silent. Check <em>close loop</em> so the last beats fade into the first frame.</li>
          <li>Bottom-right: pick a shape, pick <strong>2s / 4s / 8s / 16s / 32s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
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
    if (act === "rand-wacky") randomize("all", true);
    if (act === "cut-edit") {
      const on = !store.project.cutEdit?.enabled;
      store.setProject((p) => ({
        ...p,
        cutEdit: { enabled: on, seed: ((p.cutEdit?.seed ?? p.seed) + 1 + (Date.now() & 255)) >>> 0 },
      }));
      store.patchUi({
        status: on
          ? store.project.sources.some((s) => s.kind === "audio")
            ? "cut edit · on the beat"
            : "cut edit · 120bpm grid — drop an MP3 to lock to the song"
          : "cut edit off",
      });
    }
    if (act === "stamp-chaos") stampChaos();
    if (act === "reprint") {
      if (rendererRef) void reprintFrame(rendererRef);
    }
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
    if (act === "import-audio") root.querySelector<HTMLInputElement>("#audio-file")?.click();
    if (act === "replace") root.querySelector<HTMLInputElement>("#replace-file")?.click();
    if (act === "freeze") void freezeSelected();
    if (act === "gen") {
      const kind = (t.dataset.kind ?? "plasma") as GeneratorType;
      const collage = selectedCollageSource();
      const kit = (t.dataset.kit as CollageKit | undefined) ?? (isHeraldry(kind) ? kitFromUnknown(collage?.collageKit) : undefined);
      const move = (t.dataset.move as CollageMove | "mix" | undefined) ?? (isHeraldry(kind) ? moveFromUnknown(collage?.collageMove) : undefined);
      const keepWash = !kit || !collage?.collageKit || kit === collage.collageKit;
      const src = defaultGeneratorSource(kind, kit, move, extrasFrom(collage, keepWash));
      addSource(src, true);
      store.patchUi({
        status: src.collageMove
          ? `place · ${src.collageMove} · ${src.collageKit ?? ""}${src.collageKitB ? ` · ${src.collageKitB}` : ""}`
          : src.collageKit
            ? `place · ${kind} · ${src.collageKit}`
            : kind === "critters"
              ? "floaters on this layer"
              : `place · ${kind}`,
      });
    }
    if (act === "mash") {
      const kitB = (t.dataset.kit as CollageKit | undefined) ?? "love";
      const current = selectedCollageSource();
      if (!current) {
        const src = defaultGeneratorSource("wallpaper", "sailor", "rush", { kitB });
        addSource(src, true);
        store.patchUi({ status: `mash · sailor · ${kitB}` });
      } else {
        const nextB = current.collageKitB === kitB || current.collageKit === kitB ? undefined : kitB;
        patchCollage(
          (s) => renameCollage({ ...s, collageKitB: nextB }),
          nextB ? `mash · ${current.collageKit ?? "kit"} · ${nextB}` : "mash off",
        );
      }
    }
    if (act === "wash") {
      const hex = t.dataset.hex;
      if (hex) {
        if (!patchCollage((s) => ({ ...s, colorA: hex }), `wash · ${hex}`)) {
          addSource(defaultGeneratorSource("wallpaper", "sailor", "rush", { wash: hex }), true);
          store.patchUi({ status: `wash · ${hex}` });
        }
      }
    }
    if (act === "night") {
      const current = selectedCollageSource();
      const next = !current?.collageNight;
      if (!patchCollage((s) => ({ ...s, collageNight: next }), next ? "night wash" : "day wash")) {
        addSource(defaultGeneratorSource("wallpaper", "sailor", "rush", { night: true }), true);
        store.patchUi({ status: "night wash" });
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
      const pic = src?.kind === "audio"
        ? p.sources.find((s) => s.kind !== "audio")
        : src;
      const size = sizeFromSource(pic?.width ?? 1280, pic?.height ?? 720, 1280);
      store.setProject((pr) => ({
        ...pr,
        exportSettings: { ...pr.exportSettings, width: size.width, height: size.height },
      }));
    }
    if (act === "play") {
      void resumeAudio();
      store.setProject((p) => ({ ...p, playback: { ...p.playback, playing: !p.playback.playing } }));
    }
    if (act === "use-src" && id) {
      const picked = store.project.sources.find((s) => s.id === id);
      if (picked?.kind === "audio") return;
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
    if (t.id === "audio-file" && t instanceof HTMLInputElement && t.files) {
      void importFiles(t.files, false);
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
    if (t.id === "loop-close") store.setProject((pr) => ({ ...pr, exportSettings: { ...pr.exportSettings, loopClose: t.checked } }), false);
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
    if (t.id === "collage-scale") {
      patchCollage((s) => ({ ...s, collageScale: clampCollageScale(Number(t.value)) }), undefined, true);
    }
    if (t.id === "collage-density") {
      patchCollage((s) => ({ ...s, collageDensity: clampCollageDensity(Number(t.value)) }), undefined, true);
    }
    if (t.id === "collage-pace") {
      patchCollage((s) => ({ ...s, collagePace: clampCollagePace(Number(t.value)) }), undefined, true);
    }
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
      void resumeAudio();
      store.setProject((p) => ({ ...p, playback: { ...p.playback, playing: !p.playback.playing } }));
    }
    if (e.key === "r" || e.key === "R") randomize(e.shiftKey ? "all" : "selected");
    if ((e.key === "w" || e.key === "W") && e.shiftKey) randomize("all", true);
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
  root.querySelectorAll<HTMLElement>('[data-act="cut-edit"]').forEach((el) => {
    el.classList.toggle("acid", !!p.cutEdit?.enabled);
  });

  paintRail(root.querySelector("#rail")!);
  paintStack(root.querySelector("#stack")!);
  paintTransport(root.querySelector("#transport")!);
}

function paintRail(n: HTMLElement) {
  const p = store.project;
  const ui = store.state.ui;
  const collage =
    p.sources.find((s) => s.id === ui.selectedSourceId && isHeraldry(s.generator)) ??
    p.sources.find((s) => isHeraldry(s.generator));
  n.innerHTML = `
    <div class="sec">Sources</div>
    <div class="row">
      <button class="btn tiny acid" data-act="import">Import</button>
      <button class="btn tiny hot" data-act="import-audio" title="Upload an MP3. Playback starts and the collage hits the beat.">MP3</button>
      <button class="btn tiny" data-act="replace">Replace</button>
      <button class="btn tiny" data-act="freeze">Still frame</button>
      <button class="btn tiny" data-act="reprint">Print frame</button>
      <input id="media-file" type="file" accept="image/*,video/*,audio/*,.tif,.tiff,.mov,.webm,.mp4,.gif,.mp3,.wav,.ogg,.m4a,.aac,.flac" multiple hidden />
      <input id="replace-file" type="file" accept="image/*,video/*,audio/*,.tif,.tiff,.mov,.webm,.mp4,.gif,.mp3,.wav,.ogg,.m4a,.aac,.flac" hidden />
    </div>
    <hr class="div" />
    <div class="sec">Generate new image</div>
    <textarea id="gen-prompt" class="prompt" placeholder="describe a new image… e.g. grainy night photo of a flooded parking lot, sodium lights">${esc(ui.prompt)}</textarea>
    <label class="check"><input type="checkbox" id="gen-src" ${ui.useSourceForGen ? "checked" : ""}/> use selected source as reference</label>
    <button class="btn tiny acid" data-act="imagine" ${ui.generating ? "disabled" : ""}>${ui.generating ? "working…" : "Generate"}</button>
    <button class="btn tiny" data-act="imagine" ${ui.generating || !ui.prompt.trim() ? "disabled" : ""}>Again</button>
    <div class="status" style="margin-top:4px">Usually a few seconds. Again rolls a new seed. Does not overwrite the upload.</div>
    <div class="row" style="margin-top:6px">
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="sailor">Sailor</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="circus">Circus</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="fruit">Fruit</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="nature">Grove</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="love">Love</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="space">Space</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="sweet">Sweet</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="music">Music</button>
    </div>
    <div class="sec">Mash</div>
    <div class="row">
      ${COLLAGE_KITS.map((k) => {
        const on = collage?.collageKitB === k;
        const label = k === "nature" ? "Grove" : k[0].toUpperCase() + k.slice(1);
        return `<button class="btn tiny ${on ? "acid" : ""}" data-act="mash" data-kit="${k}">${label}</button>`;
      }).join("")}
    </div>
    <div class="sec">Wash</div>
    <div class="row">
      ${groundsForKit(kitFromUnknown(collage?.collageKit)).map((hex) => {
        const on = (collage?.colorA ?? "").toLowerCase() === hex.toLowerCase();
        return `<button class="wash-chip ${on ? "on" : ""}" data-act="wash" data-hex="${hex}" style="background:${hex}" title="${hex}"></button>`;
      }).join("")}
      <button class="btn tiny ${collage?.collageNight ? "acid" : ""}" data-act="night">Night</button>
    </div>
    <div class="sec">Stamp</div>
    <div class="param"><span>Size</span>
      <input id="collage-scale" type="range" min="0.5" max="2" step="0.05" value="${clampCollageScale(collage?.collageScale)}" />
      <input id="collage-scale" type="number" min="0.5" max="2" step="0.05" value="${clampCollageScale(collage?.collageScale).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Storm</span>
      <input id="collage-density" type="range" min="0.35" max="2" step="0.05" value="${clampCollageDensity(collage?.collageDensity)}" />
      <input id="collage-density" type="number" min="0.35" max="2" step="0.05" value="${clampCollageDensity(collage?.collageDensity).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Pace</span>
      <input id="collage-pace" type="range" min="0.35" max="1.2" step="0.05" value="${clampCollagePace(collage?.collagePace)}" />
      <input id="collage-pace" type="number" min="0.35" max="1.2" step="0.05" value="${clampCollagePace(collage?.collagePace).toFixed(2)}" />
      <span></span></div>
    <div class="sec">Move</div>
    <div class="row">
      <button class="btn tiny" data-act="gen" data-kind="wallpaper" data-move="rush">Rush</button>
      <button class="btn tiny" data-act="gen" data-kind="giants" data-move="tunnel">Tunnel</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="spiral">Spiral</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="helix">Helix</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="tide">Tide</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="rings">Rings</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="loom">Loom</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="petal">Petal</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="flock">Flock</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="wheel">Wheel</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="silk">Silk</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="mix">Mix</button>
    </div>
    <div class="sec">Music</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="bars">Bars</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="ripple">Ripple</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="swing">Swing</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="burst">Burst</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="halo">Halo</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="clap">Clap</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="wave">Wave</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="drop">Drop</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="spot">Spot</button>
    </div>
    <div class="row">
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="bounce">Bounce</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="glow">Glow</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="kick">Kick</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="jelly">Jelly</button>
    </div>
    <div class="row">
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="flip">Flip</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="flash">Flash</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="hop">Hop</button>
      <button class="btn tiny hot" data-act="rand-wacky">Rand wacky</button>
      <button class="btn tiny ${p.cutEdit?.enabled ? "acid" : ""}" data-act="cut-edit">Cut edit</button>
    </div>
    <div class="status" style="margin-top:4px">Each clip keeps one move. Rand all stays smaller and slower. Cut edit cuts music-reactive looks on the beat — longer holds, then a couple of quick hits, never a shuffle. Drop an MP3 first if you want it locked to the song.</div>
    <div style="margin-top:8px">
      ${p.sources.map((s) => {
        const meta = s.kind === "audio"
          ? `beat-sync · ${fmtTime(s.duration || 0)}${s.bpm && s.bpm > 40 ? ` · ${s.bpm}bpm` : ""}`
          : `${s.kind} ${s.width}×${s.height}`;
        const useBtn = s.kind === "audio"
          ? `<span class="status">beat</span>`
          : `<button class="btn tiny" data-act="use-src" data-id="${s.id}">use</button>`;
        return `
        <div class="thumb ${s.id === ui.selectedSourceId ? "on" : ""}" data-act="sel-src" data-id="${s.id}">
          <div class="sw" style="background:linear-gradient(135deg,#2a1830,#c8ff3d33)"></div>
          <div class="meta"><b>${esc(s.name)}</b><span>${meta}</span></div>
          ${useBtn}
        </div>`;
      }).join("")}
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
          const list = (groups[cat.id] ?? []).filter((e) => e.id !== "dancer");
          if (!list.length) return "";
          return `<optgroup label="${cat.label}">${list.map((e) => `<option value="${e.id}">${e.name}</option>`).join("")}</optgroup>`;
        }).join("")}
      </select>
      <div class="row" style="margin-top:4px">
        <button class="btn tiny hot" data-act="stamp-chaos">stamp chaos</button>
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
        ${[2, 4, 6, 8, 16, 32].map((s) => `<button class="btn tiny ${Number(exp.duration) === s ? "acid" : ""}" data-act="clip" data-secs="${s}" ${busy ? "disabled" : ""}>${s}s</button>`).join("")}
        <span class="status">sec</span>
        <input id="exp-dur" type="number" min="1" max="32" step="1" style="width:48px" value="${exp.duration}" title="seconds" />
        <label class="check"><input type="checkbox" id="loop-close" ${exp.loopClose !== false ? "checked" : ""}/> close loop</label>
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

function selectedCollageSource(): MediaSource | undefined {
  const p = store.project;
  const picked = p.sources.find((s) => s.id === store.state.ui.selectedSourceId);
  if (picked && isHeraldry(picked.generator)) return picked;
  const layer = selectedLayer(p);
  const fromLayer = p.sources.find((s) => s.id === layer?.sourceId);
  if (fromLayer && isHeraldry(fromLayer.generator)) return fromLayer;
  return p.sources.find((s) => isHeraldry(s.generator));
}

function extrasFrom(src?: MediaSource, keepWash = true) {
  if (!src) return undefined;
  return {
    kitB: src.collageKitB,
    night: src.collageNight,
    scale: src.collageScale,
    density: src.collageDensity,
    pace: src.collagePace,
    wash: keepWash ? src.colorA : undefined,
  };
}

function renameCollage(src: MediaSource): MediaSource {
  if (!src.collageKit || !src.collageMove) return src;
  return { ...src, name: collageName(src.collageMove, src.collageKit, src.collageKitB) };
}

function patchCollage(mut: (src: MediaSource) => MediaSource, status?: string, live = false): boolean {
  const current = selectedCollageSource();
  if (!current) return false;
  store.setProject(
    (p) => ({
      ...p,
      sources: p.sources.map((s) => (s.id === current.id ? mut(s) : s)),
    }),
    !live,
  );
  if (status) store.patchUi({ status }, !live);
  return true;
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
