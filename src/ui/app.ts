import type { Renderer } from "../engine/renderer";
import { store } from "../core/store";
import { BLEND_MODES, type GeneratorType, type Layer, type MediaSource, type ParamDef } from "../core/types";
import { runExport } from "../export/export";
import { EXPORT_ASPECTS, EXPORT_EASY_LONG, EXPORT_FULL_LONG, matchAspectId, sizeForAspect, sizeFromSource } from "../core/exportSize";
import { COLOR_PACK_LABEL, COLOR_PACKS, groundsForLook, inkForLook, packFromUnknown } from "../core/colorPacks";
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
  importFiles,
  loadPreset,
  loadProjectFile,
  moveEffect,
  patchLayer,
  randomize,
  randomizeField,
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
  clampBoidAlign,
  clampBoidCohere,
  clampBoidRadius,
  clampBoidSep,
  clampBoidSpeed,
  clampCollageChainMorph,
  clampCollageChainSmooth,
  clampCollageChainTravel,
  clampCollageChainVary,
  clampCollageDensity,
  clampCollagePace,
  clampCollageScale,
  clampFlowDepth,
  clampFlowEvolve,
  clampFlowForce,
  clampFlowScale,
  clampFlowTurb,
  clampFieldContrast,
  clampFieldCurl,
  clampFieldDensity,
  clampFieldDensityEvolve,
  clampFieldDensityScale,
  clampFieldEvolve,
  clampFieldFlow,
  clampFieldFlowScale,
  clampFieldMaxScale,
  clampFieldMinScale,
  clampFieldMotion,
  clampFieldPerturb,
  clampFieldRadius,
  clampFieldScale,
  clampFieldScaleAmp,
  clampFieldSparsity,
  clampFieldPattern,
  FIELD_PATTERN_LABEL,
  clampFieldStrength,
  clampFieldTrance,
  clampFieldWarp,
  clampFieldHold,
  clampFieldBlink,
  clampFieldCast,
  clampCollageLook,
  fieldFromTrance,
  fieldFromCast,
  clampPoleAttract,
  clampPoleCount,
  clampPoleFalloff,
  clampPoleRepel,
  clampPoleSpeed,
  clampPoleSwitch,
  clampSpringBreak,
  clampSpringDamp,
  clampSpringDist,
  clampSpringElast,
  clampSpringStrength,
  isHeraldry,
  kitButtonLabel,
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
      <label class="check" title="When on, Rand all / Rand wacky plant a short stack from the right-panel effects. When off, the roll stays a clean collage.">
        <input type="checkbox" id="inc-fx" /> effects
      </label>
      <button class="btn tiny acid" data-act="rand-all">Rand all</button>
      <button class="btn tiny hot" data-act="rand-wacky" title="A new kit, ground, and move. Effects only if the effects box is on.">Rand wacky</button>
      <button class="btn tiny ${store.project.cutEdit?.enabled ? "acid" : ""}" data-act="cut-edit" title="Cut to the beat through music-reactive looks">Cut edit</button>
      <button class="btn tiny" data-act="rand-sel">Rand sel</button>
      <button class="btn tiny" data-act="rand-param">Rand param</button>
      <button class="btn tiny" data-act="look" data-look="hypnotic" title="Flat paper, two inks, held occupancy looks.">Hypnotic</button>
      <button class="btn tiny" data-act="look" data-look="classic" title="Washes, full inks, the previous Snake motion.">Classic</button>
      <button class="btn tiny" data-act="rand-field" title="Reroll Field sliders only. Keeps kit, mash, wash, size, and pace.">Rand field</button>
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
        <p>A collage machine. <strong>Hypnotic</strong> is the flat two-ink poster look: occupancy holds each silhouette, then eases; icons blink. <strong>Classic</strong> is the previous washed, full-ink Field — more glyphs, drifting ground, and Snake’s older 7-look crossfade. Look lives in the top bar and the left rail. Poster desk hides fly-throughs; Club shows them. Field locks one stamp pattern and loops it seamlessly. Trance ties Tempo, Breathe, and Pack. Music punches glow, not the path.</p>
        <ul>
          <li><kbd>Space</kbd> play / pause</li>
          <li><kbd>R</kbd> randomize selected &nbsp; <kbd>Shift+R</kbd> new look &nbsp; <kbd>Shift+W</kbd> wackier look</li>
          <li><kbd>K</kbd> keyframe selected parameter</li>
          <li><kbd>N</kbd> start from scratch</li>
          <li><kbd>?</kbd> this card</li>
          <li>Drop an MP3 the same way as a picture — it becomes the soundtrack, not the picture.</li>
          <li><strong>Rand all</strong> / <strong>Rand wacky</strong> rolls a new kit, ground, and one locked move. Check <em>effects</em> (top bar, or under Effects on the right) if you also want a short stack from the right panel. Uncheck it for a clean collage. Wacky rolls a thicker stack when effects are on. No dancer. Rolls stay small and slower. When the rolled move is Field, the Field sliders roll too.</li>
          <li><strong>Hypnotic / Classic</strong> — top bar and left rail. Hypnotic is the flat two-ink poster Field. Classic restores the previous washed, full-ink look and Snake’s older motion. <strong>Poster / Club</strong> hides or shows fly-throughs, Matter, and music.</li>
          <li><strong>Ink flip</strong> swaps paper and ink. <strong>Trio</strong> locks the kit to three glyphs. <strong>Sheet / Giants</strong> writes stamp size: a packed wallpaper or a few huge stickers.</li>
          <li><strong>Snake / Stripe / Arch</strong> are occupancy loops — looks hold, then ease. <strong>Hold</strong> is how long each look stays. <strong>Blink</strong> snaps icons; lower it to ease them.</li>
          <li><strong>Rand field</strong> picks a new looping pattern and rerolls sliders for the active look. Kit, mash, wash, size, and pace stay. Switches the clip to Field if it is on another move. On Poster, Rand all stays on Field.</li>
          <li><strong>Cut edit</strong> is the other randomizer. Drop an MP3 first. It finds the first downbeat (the kick, not the snare) and cuts on that metronome — bars and half-bars, not stray 8th notes. Snap / step / spot flip on the same frames as the drums. Some shots hold a bar or two. Some are two-beat fills that land back on 1.</li>
          <li><strong>Print frame</strong> turns the live picture into a still.</li>
          <li><strong>Kits</strong> — Sailor, Circus, Fruit, Grove, Love, Space, Sweet, Music, Kitchen, Sky, Street, Arcade, Haunt, Sport, School. Each pack is its own stamp set — switching a kit replaces every icon. Move buttons keep the current kit.</li>
          <li><strong>Mash</strong> — mix a second kit’s stamps onto the same ground. <strong>Color</strong> packs (Brine, Candy, Ember, Neon…) recast washes and inks across any kit. <strong>Wash</strong> taps a color from the active pack. <strong>Night</strong> is a darker club wash that breathes on bass.</li>
          <li><strong>Size / Storm</strong> — few giants or a sticker storm.</li>
          <li><strong>Soundtrack</strong> — hit <em>MP3</em> or drop a clip (mp3/wav/ogg/m4a). It does not replace your picture. Playback starts and the stamps breathe on the beat without jumping off their path. Export an MP4 while a song is playing and the clip keeps that part of the song — the window you are hearing, with the visuals already synced to it. Export from the start of the track if you rewind first. Stills and PNG sequences stay silent. Clips loop as-is. Check <em>close loop</em> only if you want the last beats to dissolve into the first frame.</li>
          <li>Bottom-right: pick a shape, tap <strong>720</strong> or <strong>1080</strong>, pick <strong>2s / 4s / 8s / 16s / 32s</strong>, then hit the green <strong>Export</strong> button (also in the top bar). Clips save at 30 fps in HD so they stay sharp without a long wait. The live preview pauses while a clip cooks. Chrome or Edge can do MP4; if a browser can’t, it saves WebM instead.</li>
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
    if (act === "rand-field") randomizeField();
    if (act === "desk") {
      const desk = t.dataset.desk === "club" ? "club" : "poster";
      store.patchUi({ desk, status: desk === "poster" ? "desk · poster" : "desk · club" });
    }
    if (act === "look") {
      const next = clampCollageLook(t.dataset.look);
      if (!patchCollage((s) => ({ ...s, collageLook: next, collageTwoInk: next !== "classic" }), `look · ${next}`)) {
        store.patchUi({ status: `look · ${next}` });
      }
    }
    if (act === "two-ink") {
      const current = selectedCollageSource();
      const next = !(current?.collageTwoInk !== false);
      if (!patchCollage((s) => ({ ...s, collageTwoInk: next }), next ? "two ink" : "full inks")) {
        store.patchUi({ status: "two ink" });
      }
    }
    if (act === "ink-flip") {
      if (!patchCollage((s) => ({ ...s, colorA: s.colorB, colorB: s.colorA }), "ink flip")) {
        store.patchUi({ status: "ink flip" });
      }
    }
    if (act === "trio") {
      const current = selectedCollageSource();
      const next = !current?.collageTrio;
      if (!patchCollage((s) => ({ ...s, collageTrio: next }), next ? "trio" : "full kit")) {
        store.patchUi({ status: "trio" });
      }
    }
    if (act === "field-cast") {
      const next = clampFieldCast(t.dataset.cast);
      if (!patchCollage((s) => ({ ...s, ...fieldFromCast(next) }), `cast · ${next}`)) {
        store.patchUi({ status: `cast · ${next}` });
      }
    }
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
    if (act === "color-pack") {
      const pack = packFromUnknown(t.dataset.pack);
      const current = selectedCollageSource();
      if (!current) {
        const src = defaultGeneratorSource("wallpaper", "sailor", "rush", { colorPack: pack });
        addSource(src, true);
        store.patchUi({ status: `color · ${COLOR_PACK_LABEL[pack]}` });
      } else {
        const kit = kitFromUnknown(current.collageKit);
        const grounds = groundsForLook(kit, pack);
        const live = (current.colorA ?? "").toLowerCase();
        const keep = grounds.some((hex) => hex.toLowerCase() === live);
        patchCollage(
          (s) => ({
            ...s,
            collageColorPack: pack,
            colorA: keep ? s.colorA : grounds[0],
            colorB: inkForLook(kit, pack),
          }),
          `color · ${COLOR_PACK_LABEL[pack]}`,
        );
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
    if (act === "field-pattern") {
      const next = clampFieldPattern(t.dataset.pattern);
      patchCollage((s) => ({ ...s, collageFieldPattern: next }), `field · ${FIELD_PATTERN_LABEL[next]}`);
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
          fps: 30,
          bitrate: Math.max(p.exportSettings.bitrate, 12),
        },
      }));
      store.patchUi({ status: `${secs}s clip ready — hit Export` });
    }
    if (act === "exp-aspect" && id) {
      const aspect = EXPORT_ASPECTS.find((a) => a.id === id);
      if (aspect) {
        const long = Math.max(store.project.exportSettings.width, store.project.exportSettings.height, EXPORT_EASY_LONG);
        const size = sizeForAspect(aspect.rw, aspect.rh, Math.min(EXPORT_FULL_LONG, Math.max(EXPORT_EASY_LONG, long)));
        store.setProject((p) => ({
          ...p,
          exportSettings: { ...p.exportSettings, width: size.width, height: size.height },
        }));
      }
    }
    if (act === "exp-size") {
      const long = Number(t.dataset.long || EXPORT_EASY_LONG);
      const p = store.project;
      const size = sizeFromSource(p.exportSettings.width, p.exportSettings.height, long);
      store.setProject((pr) => ({
        ...pr,
        exportSettings: { ...pr.exportSettings, width: size.width, height: size.height, bitrate: long >= EXPORT_FULL_LONG ? Math.max(pr.exportSettings.bitrate, 12) : pr.exportSettings.bitrate },
      }));
    }
    if (act === "exp-aspect-src") {
      const p = store.project;
      const layer = selectedLayer(p);
      const src = p.sources.find((s) => s.id === (layer?.sourceId ?? p.sources[0]?.id));
      const pic = src?.kind === "audio"
        ? p.sources.find((s) => s.kind !== "audio")
        : src;
      const long = Math.max(p.exportSettings.width, p.exportSettings.height, EXPORT_EASY_LONG);
      const size = sizeFromSource(pic?.width ?? 1280, pic?.height ?? 720, Math.min(EXPORT_FULL_LONG, long));
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
    if (t.id === "inc-fx" || t.id === "inc-fx-stack") {
      store.patchUi({ includeEffects: (t as HTMLInputElement).checked });
    }
  });

  root.addEventListener("input", (e) => {
    const t = e.target as HTMLInputElement;
    const p = store.project;
    if (t.id === "inc-critters" || t.id === "inc-critters-rail") {
      store.patchUi({ includeCritters: (t as HTMLInputElement).checked });
    }
    if (t.id === "inc-idol" || t.id === "inc-idol-rail") {
      store.patchUi({ includeIdol: (t as HTMLInputElement).checked });
    }
    if (t.id === "inc-fx" || t.id === "inc-fx-stack") {
      store.patchUi({ includeEffects: (t as HTMLInputElement).checked });
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
    if (t.id === "collage-chain-travel") {
      patchCollage((s) => ({ ...s, collageChainTravel: clampCollageChainTravel(Number(t.value)) }), undefined, true);
    }
    if (t.id === "collage-chain-morph") {
      patchCollage((s) => ({ ...s, collageChainMorph: clampCollageChainMorph(Number(t.value)) }), undefined, true);
    }
    if (t.id === "collage-chain-vary") {
      patchCollage((s) => ({ ...s, collageChainVary: clampCollageChainVary(Number(t.value)) }), undefined, true);
    }
    if (t.id === "collage-chain-smooth") {
      patchCollage((s) => ({ ...s, collageChainSmooth: clampCollageChainSmooth(Number(t.value)) }), undefined, true);
    }
    if (t.id === "collage-spring-strength") patchCollage((s) => ({ ...s, collageSpringStrength: clampSpringStrength(Number(t.value)) }), undefined, true);
    if (t.id === "collage-spring-damp") patchCollage((s) => ({ ...s, collageSpringDamp: clampSpringDamp(Number(t.value)) }), undefined, true);
    if (t.id === "collage-spring-dist") patchCollage((s) => ({ ...s, collageSpringDist: clampSpringDist(Number(t.value)) }), undefined, true);
    if (t.id === "collage-spring-elast") patchCollage((s) => ({ ...s, collageSpringElast: clampSpringElast(Number(t.value)) }), undefined, true);
    if (t.id === "collage-spring-break") patchCollage((s) => ({ ...s, collageSpringBreak: clampSpringBreak(Number(t.value)) }), undefined, true);
    if (t.id === "collage-flow-scale") patchCollage((s) => ({ ...s, collageFlowScale: clampFlowScale(Number(t.value)) }), undefined, true);
    if (t.id === "collage-flow-turb") patchCollage((s) => ({ ...s, collageFlowTurb: clampFlowTurb(Number(t.value)) }), undefined, true);
    if (t.id === "collage-flow-evolve") patchCollage((s) => ({ ...s, collageFlowEvolve: clampFlowEvolve(Number(t.value)) }), undefined, true);
    if (t.id === "collage-flow-force") patchCollage((s) => ({ ...s, collageFlowForce: clampFlowForce(Number(t.value)) }), undefined, true);
    if (t.id === "collage-flow-depth") patchCollage((s) => ({ ...s, collageFlowDepth: clampFlowDepth(Number(t.value)) }), undefined, true);
    if (t.id === "collage-boid-cohere") patchCollage((s) => ({ ...s, collageBoidCohere: clampBoidCohere(Number(t.value)) }), undefined, true);
    if (t.id === "collage-boid-sep") patchCollage((s) => ({ ...s, collageBoidSep: clampBoidSep(Number(t.value)) }), undefined, true);
    if (t.id === "collage-boid-align") patchCollage((s) => ({ ...s, collageBoidAlign: clampBoidAlign(Number(t.value)) }), undefined, true);
    if (t.id === "collage-boid-radius") patchCollage((s) => ({ ...s, collageBoidRadius: clampBoidRadius(Number(t.value)) }), undefined, true);
    if (t.id === "collage-boid-speed") patchCollage((s) => ({ ...s, collageBoidSpeed: clampBoidSpeed(Number(t.value)) }), undefined, true);
    if (t.id === "collage-pole-count") patchCollage((s) => ({ ...s, collagePoleCount: clampPoleCount(Number(t.value)) }), undefined, true);
    if (t.id === "collage-pole-attract") patchCollage((s) => ({ ...s, collagePoleAttract: clampPoleAttract(Number(t.value)) }), undefined, true);
    if (t.id === "collage-pole-repel") patchCollage((s) => ({ ...s, collagePoleRepel: clampPoleRepel(Number(t.value)) }), undefined, true);
    if (t.id === "collage-pole-speed") patchCollage((s) => ({ ...s, collagePoleSpeed: clampPoleSpeed(Number(t.value)) }), undefined, true);
    if (t.id === "collage-pole-falloff") patchCollage((s) => ({ ...s, collagePoleFalloff: clampPoleFalloff(Number(t.value)) }), undefined, true);
    if (t.id === "collage-pole-switch") patchCollage((s) => ({ ...s, collagePoleSwitch: clampPoleSwitch(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-strength") patchCollage((s) => ({ ...s, collageFieldStrength: clampFieldStrength(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-scale") patchCollage((s) => ({ ...s, collageFieldScale: clampFieldScale(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-trance") patchCollage((s) => ({ ...s, ...fieldFromTrance(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-hold") patchCollage((s) => ({ ...s, collageFieldHold: clampFieldHold(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-blink") patchCollage((s) => ({ ...s, collageFieldBlink: clampFieldBlink(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-evolve") patchCollage((s) => ({ ...s, collageFieldEvolve: clampFieldEvolve(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-density") patchCollage((s) => ({ ...s, collageFieldDensity: clampFieldDensity(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-density-scale") patchCollage((s) => ({ ...s, collageFieldDensityScale: clampFieldDensityScale(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-density-evolve") patchCollage((s) => ({ ...s, collageFieldDensityEvolve: clampFieldDensityEvolve(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-flow") patchCollage((s) => ({ ...s, collageFieldFlow: clampFieldFlow(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-curl") patchCollage((s) => ({ ...s, collageFieldCurl: clampFieldCurl(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-flow-scale") patchCollage((s) => ({ ...s, collageFieldFlowScale: clampFieldFlowScale(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-radius") patchCollage((s) => ({ ...s, collageFieldRadius: clampFieldRadius(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-scale-amp") patchCollage((s) => ({ ...s, collageFieldScaleAmp: clampFieldScaleAmp(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-min-scale") patchCollage((s) => ({ ...s, collageFieldMinScale: clampFieldMinScale(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-max-scale") patchCollage((s) => ({ ...s, collageFieldMaxScale: clampFieldMaxScale(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-perturb") patchCollage((s) => ({ ...s, collageFieldPerturb: clampFieldPerturb(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-warp") patchCollage((s) => ({ ...s, collageFieldWarp: clampFieldWarp(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-sparsity") patchCollage((s) => ({ ...s, collageFieldSparsity: clampFieldSparsity(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-contrast") patchCollage((s) => ({ ...s, collageFieldContrast: clampFieldContrast(Number(t.value)) }), undefined, true);
    if (t.id === "collage-field-motion") patchCollage((s) => ({ ...s, collageFieldMotion: clampFieldMotion(Number(t.value)) }), undefined, true);
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
  const fxInc = root.querySelector<HTMLInputElement>("#inc-fx");
  if (fxInc) fxInc.checked = ui.includeEffects;
  const fxIncStack = root.querySelector<HTMLInputElement>("#inc-fx-stack");
  if (fxIncStack) fxIncStack.checked = ui.includeEffects;
  root.querySelector("#help")?.classList.toggle("on", ui.helpOpen);
  root.querySelector("#veil")?.classList.toggle("on", ui.dropActive);
  root.querySelector("#led")?.classList.toggle("hot", p.playback.playing);
  root.querySelectorAll<HTMLElement>('[data-act="cut-edit"]').forEach((el) => {
    el.classList.toggle("acid", !!p.cutEdit?.enabled);
  });
  const look = clampCollageLook(selectedCollageSource()?.collageLook);
  root.querySelectorAll<HTMLElement>('[data-act="look"]').forEach((el) => {
    el.classList.toggle("acid", clampCollageLook(el.dataset.look) === look);
  });
  paintRail(root.querySelector("#rail")!);
  paintStack(root.querySelector("#stack")!);
  paintTransport(root.querySelector("#transport")!);
}

function paintRail(n: HTMLElement) {
  const p = store.project;
  const ui = store.state.ui;
  const club = ui.desk === "club";
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
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="kitchen">Kitchen</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="weather">Sky</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="city">Street</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="arcade">Arcade</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="haunt">Haunt</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="sport">Sport</button>
      <button class="btn tiny acid" data-act="gen" data-kind="wallpaper" data-kit="school">School</button>
    </div>
    <div class="sec">Mash</div>
    <div class="row">
      ${COLLAGE_KITS.map((k) => {
        const on = collage?.collageKitB === k;
        return `<button class="btn tiny ${on ? "acid" : ""}" data-act="mash" data-kit="${k}">${kitButtonLabel(k)}</button>`;
      }).join("")}
    </div>
    <div class="sec">Color</div>
    <div class="row">
      ${COLOR_PACKS.map((pack) => {
        const on = packFromUnknown(collage?.collageColorPack) === pack;
        return `<button class="btn tiny ${on ? "acid" : ""}" data-act="color-pack" data-pack="${pack}">${COLOR_PACK_LABEL[pack]}</button>`;
      }).join("")}
    </div>
    <div class="sec">Wash</div>
    <div class="row">
      ${groundsForLook(kitFromUnknown(collage?.collageKit), collage?.collageColorPack).map((hex) => {
        const on = (collage?.colorA ?? "").toLowerCase() === hex.toLowerCase();
        return `<button class="wash-chip ${on ? "on" : ""}" data-act="wash" data-hex="${hex}" style="background:${hex}" title="${hex}"></button>`;
      }).join("")}
      <button class="btn tiny ${collage?.collageNight ? "acid" : ""}" data-act="night">Night</button>
      <button class="btn tiny ${collage?.collageTwoInk !== false ? "acid" : ""}" data-act="two-ink" title="Paper plus one or two inks.">Two ink</button>
      <button class="btn tiny" data-act="ink-flip" title="Swap paper and ink.">Ink flip</button>
      <button class="btn tiny ${collage?.collageTrio ? "acid" : ""}" data-act="trio" title="Lock the kit to three glyphs.">Trio</button>
    </div>
    <div class="sec">Look</div>
    <div class="row">
      <button class="btn tiny ${clampCollageLook(collage?.collageLook) !== "classic" ? "acid" : ""}" data-act="look" data-look="hypnotic" title="Flat paper, two inks, held Snake looks.">Hypnotic</button>
      <button class="btn tiny ${clampCollageLook(collage?.collageLook) === "classic" ? "acid" : ""}" data-act="look" data-look="classic" title="Washes, full inks, the previous Snake motion.">Classic</button>
    </div>
    <div class="sec">Desk</div>
    <div class="row">
      <button class="btn tiny ${ui.desk !== "club" ? "acid" : ""}" data-act="desk" data-desk="poster" title="Hides fly-throughs, Matter, and music.">Poster</button>
      <button class="btn tiny ${ui.desk === "club" ? "acid" : ""}" data-act="desk" data-desk="club" title="Show fly-throughs, Matter, and music moves.">Club</button>
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
    ${
      club
        ? `<div class="sec">Move</div>
    <div class="row">
      <button class="btn tiny" data-act="gen" data-kind="wallpaper" data-move="rush">Rush</button>
      <button class="btn tiny" data-act="gen" data-kind="giants" data-move="tunnel">Tunnel</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="spiral">Spiral</button>
      <button class="btn tiny" data-act="gen" data-kind="heraldry" data-move="helix">Helix</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="bloom">Bloom</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="prism">Prism</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="gyre">Gyre</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="well">Well</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="hall">Hall</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="drift">Drift</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="braid">Braid</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="sway">Sway</button>
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
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="chain">Chain</button>
    </div>`
        : ""
    }
    ${
      collage?.collageMove === "chain"
        ? `<div class="sec">Chain</div>
    <div class="param"><span>Movement Speed</span>
      <input id="collage-chain-travel" type="range" min="0.2" max="2.2" step="0.05" value="${clampCollageChainTravel(collage?.collageChainTravel)}" />
      <input id="collage-chain-travel" type="number" min="0.2" max="2.2" step="0.05" value="${clampCollageChainTravel(collage?.collageChainTravel).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Change Speed</span>
      <input id="collage-chain-morph" type="range" min="0.12" max="2" step="0.05" value="${clampCollageChainMorph(collage?.collageChainMorph)}" />
      <input id="collage-chain-morph" type="number" min="0.12" max="2" step="0.05" value="${clampCollageChainMorph(collage?.collageChainMorph).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Variation</span>
      <input id="collage-chain-vary" type="range" min="0.2" max="2" step="0.05" value="${clampCollageChainVary(collage?.collageChainVary)}" />
      <input id="collage-chain-vary" type="number" min="0.2" max="2" step="0.05" value="${clampCollageChainVary(collage?.collageChainVary).toFixed(2)}" />
      <span></span></div>
    <div class="param"><span>Shape Smoothness</span>
      <input id="collage-chain-smooth" type="range" min="0.12" max="1" step="0.02" value="${clampCollageChainSmooth(collage?.collageChainSmooth)}" />
      <input id="collage-chain-smooth" type="number" min="0.12" max="1" step="0.02" value="${clampCollageChainSmooth(collage?.collageChainSmooth).toFixed(2)}" />
      <span></span></div>
`
        : ""
    }
    <div class="sec">Field</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="field">Field</button>
      <button class="btn tiny" data-act="rand-field" title="Reroll Field sliders only. Keeps kit, mash, wash, size, and pace.">Rand field</button>
    </div>
    ${
      collage?.collageMove === "field"
        ? `<div class="sec">Pattern</div>
    <div class="row">
      ${(["auto", "sunflower", "orbit", "traffic", "cascade", "checker", "scan", "snake", "stripe", "arch"] as const).map((id) => {
        const on = clampFieldPattern(collage.collageFieldPattern) === id;
        return `<button class="btn tiny ${on ? "acid" : ""}" data-act="field-pattern" data-pattern="${id}">${FIELD_PATTERN_LABEL[id]}</button>`;
      }).join("")}
    </div>
    <div class="row">
      <button class="btn tiny ${collage.collageFieldCast === "sheet" ? "acid" : ""}" data-act="field-cast" data-cast="sheet" title="Packed wallpaper sizes.">Sheet</button>
      <button class="btn tiny ${collage.collageFieldCast === "giants" ? "acid" : ""}" data-act="field-cast" data-cast="giants" title="A few huge stickers.">Giants</button>
    </div>
    ${num("collage-field-trance", "Trance", clampFieldTrance(collage.collageFieldTrance), 0, 2, 0.05)}
    ${num("collage-field-hold", "Hold", clampFieldHold(collage.collageFieldHold), 0.2, 0.9, 0.02)}
    ${num("collage-field-blink", "Blink", clampFieldBlink(collage.collageFieldBlink), 0, 1, 0.05)}
    ${num("collage-field-evolve", "Tempo", clampFieldEvolve(collage.collageFieldEvolve), 0.08, 2.2, 0.05)}
    ${num("collage-field-strength", "Spread", clampFieldStrength(collage.collageFieldStrength), 0.2, 2.2, 0.05)}
    ${num("collage-field-density", "Pack", clampFieldDensity(collage.collageFieldDensity), 0, 2.2, 0.05)}
    ${num("collage-field-sparsity", "Symmetry", clampFieldSparsity(collage.collageFieldSparsity), 0, 2, 0.05)}
    ${num("collage-field-perturb", "Shuffle", clampFieldPerturb(collage.collageFieldPerturb), 0, 2, 0.05)}
    ${num("collage-field-curl", "Swirl", clampFieldCurl(collage.collageFieldCurl), 0, 2.2, 0.05)}
    ${num("collage-field-warp", "Breathe", clampFieldWarp(collage.collageFieldWarp), 0, 2.2, 0.05)}
    ${num("collage-field-motion", "Ripple", clampFieldMotion(collage.collageFieldMotion), 0, 2, 0.05)}
    ${num("collage-field-contrast", "Size Contrast", clampFieldContrast(collage.collageFieldContrast), 0, 2.2, 0.05)}
    ${num("collage-field-min-scale", "Stamp Size", clampFieldMinScale(collage.collageFieldMinScale), 0.12, 1, 0.02)}
    ${num("collage-field-max-scale", "Hero Size", clampFieldMaxScale(collage.collageFieldMaxScale), 0.6, 3.2, 0.05)}`
        : ""
    }
    ${
      club
        ? `<div class="sec">Matter</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="spring">Spring</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="flow">Flow</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="boids">Boids</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="poles">Poles</button>
    </div>`
        : ""
    }
    ${
      collage?.collageMove === "spring"
        ? `<div class="sec">Spring</div>
    ${num("collage-spring-strength", "Spring Strength", clampSpringStrength(collage.collageSpringStrength), 0.2, 2.2, 0.05)}
    ${num("collage-spring-damp", "Damping", clampSpringDamp(collage.collageSpringDamp), 0.08, 1, 0.02)}
    ${num("collage-spring-dist", "Connection Distance", clampSpringDist(collage.collageSpringDist), 0.12, 0.72, 0.02)}
    ${num("collage-spring-elast", "Elasticity", clampSpringElast(collage.collageSpringElast), 0.2, 2.2, 0.05)}
    ${num("collage-spring-break", "Break / Reconnect", clampSpringBreak(collage.collageSpringBreak), 1.15, 3.6, 0.05)}`
        : collage?.collageMove === "flow"
          ? `<div class="sec">Flow</div>
    ${num("collage-flow-scale", "Field Scale", clampFlowScale(collage.collageFlowScale), 0.28, 2.4, 0.05)}
    ${num("collage-flow-turb", "Turbulence", clampFlowTurb(collage.collageFlowTurb), 0, 2, 0.05)}
    ${num("collage-flow-evolve", "Evolution Speed", clampFlowEvolve(collage.collageFlowEvolve), 0.08, 2.2, 0.05)}
    ${num("collage-flow-force", "Force", clampFlowForce(collage.collageFlowForce), 0.2, 2.2, 0.05)}
    ${num("collage-flow-depth", "Depth Influence", clampFlowDepth(collage.collageFlowDepth), 0, 1.6, 0.05)}`
          : collage?.collageMove === "boids"
            ? `<div class="sec">Boids</div>
    ${num("collage-boid-cohere", "Cohesion", clampBoidCohere(collage.collageBoidCohere), 0.1, 2.2, 0.05)}
    ${num("collage-boid-sep", "Separation", clampBoidSep(collage.collageBoidSep), 0.15, 2.4, 0.05)}
    ${num("collage-boid-align", "Alignment", clampBoidAlign(collage.collageBoidAlign), 0.1, 2.2, 0.05)}
    ${num("collage-boid-radius", "Perception Radius", clampBoidRadius(collage.collageBoidRadius), 0.08, 0.55, 0.01)}
    ${num("collage-boid-speed", "Speed", clampBoidSpeed(collage.collageBoidSpeed), 0.25, 2.2, 0.05)}`
            : collage?.collageMove === "poles"
              ? `<div class="sec">Poles</div>
    ${num("collage-pole-count", "Pole Count", clampPoleCount(collage.collagePoleCount), 1, 5, 1)}
    ${num("collage-pole-attract", "Attraction", clampPoleAttract(collage.collagePoleAttract), 0.15, 2.2, 0.05)}
    ${num("collage-pole-repel", "Repulsion", clampPoleRepel(collage.collagePoleRepel), 0.1, 2.2, 0.05)}
    ${num("collage-pole-speed", "Pole Speed", clampPoleSpeed(collage.collagePoleSpeed), 0.12, 2.2, 0.05)}
    ${num("collage-pole-falloff", "Falloff", clampPoleFalloff(collage.collagePoleFalloff), 0.6, 2.8, 0.05)}
    ${num("collage-pole-switch", "Polarity Switching", clampPoleSwitch(collage.collagePoleSwitch), 0, 2, 0.05)}`
              : ""
    }
    ${
      club
        ? `<div class="sec">Music</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="bars">Bars</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="ripple">Ripple</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="swing">Swing</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="burst">Burst</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="halo">Halo</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="wave">Wave</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="drop">Drop</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="spot">Spot</button>
    </div>
    <div class="sec">Drum / illusion</div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="pong">Pong</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="fall">Fall</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="snap">Snap</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="step">Step</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="moire">Moire</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="poly">Poly</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="grid">Grid</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="zip">Zip</button>
    </div>
    <div class="row">
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="liss">Liss</button>
      <button class="btn tiny acid" data-act="gen" data-kind="heraldry" data-move="ghost">Ghost</button>
    </div>`
        : ""
    }
    <div class="row">
      <button class="btn tiny hot" data-act="rand-wacky">Rand wacky</button>
      <button class="btn tiny ${p.cutEdit?.enabled ? "acid" : ""}" data-act="cut-edit">Cut edit</button>
    </div>
    <div class="status" style="margin-top:4px">${
      club
        ? "Club desk. Fly-throughs, Matter, and music are here. Field still loops one pattern. Music punches glow, not the path."
        : "Poster desk. Hypnotic is the flat two-ink Field. Classic is the previous washed look. Switch to Club for fly-throughs."
    }</div>
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
      <div class="check"><input type="checkbox" id="inc-fx-stack" ${store.state.ui.includeEffects ? "checked" : ""}/> include in randomizer</div>
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
        ${(() => {
          const long = Math.max(exp.width, exp.height);
          return `<button class="btn tiny ${long <= EXPORT_EASY_LONG ? "acid" : ""}" data-act="exp-size" data-long="${EXPORT_EASY_LONG}">720</button>
        <button class="btn tiny ${long > EXPORT_EASY_LONG ? "acid" : ""}" data-act="exp-size" data-long="${EXPORT_FULL_LONG}">1080</button>`;
        })()}
        <select id="exp-format">
          ${["png","jpg","webm","mp4","sequence"].map((f) => `<option ${exp.format===f?"selected":""} value="${f}">${f}</option>`).join("")}
        </select>
      </div>
      <div class="row" style="margin-top:6px">
        <span class="status">length</span>
        ${[2, 4, 6, 8, 16, 32].map((s) => `<button class="btn tiny ${Number(exp.duration) === s ? "acid" : ""}" data-act="clip" data-secs="${s}" ${busy ? "disabled" : ""}>${s}s</button>`).join("")}
        <span class="status">sec</span>
        <input id="exp-dur" type="number" min="1" max="32" step="1" style="width:48px" value="${exp.duration}" title="seconds" />
        <label class="check"><input type="checkbox" id="loop-close" ${exp.loopClose ? "checked" : ""}/> close loop</label>
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
    colorPack: src.collageColorPack,
    scale: src.collageScale,
    density: src.collageDensity,
    pace: src.collagePace,
    chainTravel: src.collageChainTravel,
    chainMorph: src.collageChainMorph,
    chainVary: src.collageChainVary,
    chainSmooth: src.collageChainSmooth,
    springStrength: src.collageSpringStrength,
    springDamp: src.collageSpringDamp,
    springDist: src.collageSpringDist,
    springElast: src.collageSpringElast,
    springBreak: src.collageSpringBreak,
    flowScale: src.collageFlowScale,
    flowTurb: src.collageFlowTurb,
    flowEvolve: src.collageFlowEvolve,
    flowForce: src.collageFlowForce,
    flowDepth: src.collageFlowDepth,
    boidCohere: src.collageBoidCohere,
    boidSep: src.collageBoidSep,
    boidAlign: src.collageBoidAlign,
    boidRadius: src.collageBoidRadius,
    boidSpeed: src.collageBoidSpeed,
    poleCount: src.collagePoleCount,
    poleAttract: src.collagePoleAttract,
    poleRepel: src.collagePoleRepel,
    poleSpeed: src.collagePoleSpeed,
    poleFalloff: src.collagePoleFalloff,
    poleSwitch: src.collagePoleSwitch,
    fieldStrength: src.collageFieldStrength,
    fieldScale: src.collageFieldScale,
    fieldEvolve: src.collageFieldEvolve,
    fieldDensity: src.collageFieldDensity,
    fieldDensityScale: src.collageFieldDensityScale,
    fieldDensityEvolve: src.collageFieldDensityEvolve,
    fieldFlow: src.collageFieldFlow,
    fieldCurl: src.collageFieldCurl,
    fieldFlowScale: src.collageFieldFlowScale,
    fieldRadius: src.collageFieldRadius,
    fieldScaleAmp: src.collageFieldScaleAmp,
    fieldMinScale: src.collageFieldMinScale,
    fieldMaxScale: src.collageFieldMaxScale,
    fieldPerturb: src.collageFieldPerturb,
    fieldWarp: src.collageFieldWarp,
    fieldSparsity: src.collageFieldSparsity,
    fieldContrast: src.collageFieldContrast,
    fieldMotion: src.collageFieldMotion,
    fieldPattern: src.collageFieldPattern,
    fieldTrance: src.collageFieldTrance,
    fieldHold: src.collageFieldHold,
    fieldBlink: src.collageFieldBlink,
    fieldCast: src.collageFieldCast,
    trio: src.collageTrio,
    twoInk: src.collageTwoInk,
    look: src.collageLook,
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
