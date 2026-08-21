import { uid } from "../core/ids";
import { store } from "../core/store";
import { defaultLayer, makeEffectInstance } from "../core/defaults";
import { applyPreset, duplicatePreset, extractPreset, pickRandomPreset } from "../core/presets";
import { downloadText, parseProject, serializeProject } from "../core/project";
import { randomizeProject } from "../core/randomize";
import type { EffectInstance, Keyframe, Layer, MediaSource, Project } from "../core/types";
import { freezeVideoFrame, loadMediaFile } from "../media/sources";

export function selectedLayer(p: Project): Layer | undefined {
  const id = store.state.ui.selectedLayerId;
  return p.layers.find((l) => l.id === id) ?? p.layers[0];
}

export function selectedEffect(layer?: Layer): EffectInstance | undefined {
  if (!layer) return;
  const id = store.state.ui.selectedEffectId;
  return layer.effects.find((e) => e.id === id) ?? layer.effects[0];
}

export function patchLayer(layerId: string, mut: (l: Layer) => Layer, emit = true) {
  store.setProject((p) => ({
    ...p,
    layers: p.layers.map((l) => (l.id === layerId ? mut(l) : l)),
  }), emit);
}

export function addSource(source: MediaSource, assignToSelected = true) {
  store.setProject((p) => {
    const layers = assignToSelected
      ? p.layers.map((l) => (l.id === store.state.ui.selectedLayerId ? { ...l, sourceId: source.id } : l))
      : p.layers;
    return { ...p, sources: [...p.sources, source], layers };
  });
  store.patchUi({ selectedSourceId: source.id, status: `loaded ${source.name}` });
}

export async function importFiles(files: FileList | File[], replace = false) {
  for (const file of Array.from(files)) {
    try {
      const src = await loadMediaFile(file);
      if (replace) {
        const sel = store.state.ui.selectedSourceId;
        store.setProject((p) => ({
          ...p,
          sources: p.sources.map((s) => (s.id === sel ? { ...src, id: s.id } : s)),
        }));
        store.patchUi({ status: `replaced ${file.name}` });
      } else {
        addSource(src, true);
      }
    } catch (err) {
      store.patchUi({ status: err instanceof Error ? err.message : "import failed" });
    }
  }
}

export function addLayer() {
  store.setProject((p) => {
    const src = p.sources[0]?.id ?? null;
    const layer = defaultLayer(`L${p.layers.length + 1}`, src, ["grade"]);
    return { ...p, layers: [...p.layers, layer] };
  });
  const last = store.project.layers.at(-1);
  store.patchUi({ selectedLayerId: last?.id ?? null, selectedEffectId: last?.effects[0]?.id ?? null });
}

export function duplicateLayer(id: string) {
  store.setProject((p) => {
    const src = p.layers.find((l) => l.id === id);
    if (!src) return p;
    const copy: Layer = JSON.parse(JSON.stringify(src));
    copy.id = uid("lyr");
    copy.name = `${src.name}*`;
    copy.effects = copy.effects.map((e) => ({ ...e, id: uid("fx") }));
    const i = p.layers.findIndex((l) => l.id === id);
    const layers = [...p.layers];
    layers.splice(i + 1, 0, copy);
    return { ...p, layers };
  });
}

export function removeLayer(id: string) {
  store.setProject((p) => ({ ...p, layers: p.layers.filter((l) => l.id !== id) }));
}

export function addEffect(typeId: string) {
  const layer = selectedLayer(store.project);
  if (!layer) return;
  const fx = makeEffectInstance(typeId);
  patchLayer(layer.id, (l) => ({ ...l, effects: [...l.effects, fx] }));
  store.patchUi({ selectedEffectId: fx.id });
}

export function removeEffect(layerId: string, fxId: string) {
  patchLayer(layerId, (l) => ({ ...l, effects: l.effects.filter((e) => e.id !== fxId) }));
}

export function moveEffect(layerId: string, fxId: string, dir: -1 | 1) {
  patchLayer(layerId, (l) => {
    const i = l.effects.findIndex((e) => e.id === fxId);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= l.effects.length) return l;
    const effects = [...l.effects];
    const [item] = effects.splice(i, 1);
    effects.splice(j, 0, item);
    return { ...l, effects };
  });
}

export function toggleEffect(layerId: string, fxId: string) {
  patchLayer(layerId, (l) => ({
    ...l,
    effects: l.effects.map((e) => (e.id === fxId ? { ...e, enabled: !e.enabled } : e)),
  }));
}

export function setParam(layerId: string, fxId: string, paramId: string, value: number | string | boolean, emit = true) {
  patchLayer(
    layerId,
    (l) => ({
      ...l,
      effects: l.effects.map((e) =>
        e.id === fxId ? { ...e, params: { ...e.params, [paramId]: value } } : e,
      ),
    }),
    emit,
  );
}

export function randomize(mode: "all" | "selected" | "param") {
  const ui = store.state.ui;
  store.setProject((p) => randomizeProject(p, mode, ui.selectedLayerId, ui.selectedEffectId, ui.selectedParam?.paramId ?? null));
  store.patchUi({ status: `randomized (${mode}) seed ${store.project.seed}` });
}

export function bumpSeed(n: number) {
  store.setProject((p) => ({ ...p, seed: (p.seed + n) >>> 0 }));
}

export function saveProject() {
  downloadText(`${store.project.name || "phosphene"}.phos.json`, serializeProject(store.project));
  store.patchUi({ status: "project downloaded" });
}

export async function loadProjectFile(file: File) {
  const text = await file.text();
  const project = parseProject(text);
  store.replace(project);
  store.patchUi({ status: "project loaded — re-drop media if needed" });
}

export function savePreset() {
  const name = prompt("Preset name", `look ${store.project.presets.length + 1}`);
  if (!name) return;
  const preset = extractPreset(store.project, name);
  store.setProject((p) => ({ ...p, presets: [...p.presets, preset] }));
}

export function loadPreset(id: string) {
  const preset = store.project.presets.find((x) => x.id === id);
  if (!preset) return;
  store.setProject((p) => applyPreset(p, preset));
  store.patchUi({ status: `preset ${preset.name}` });
}

export function randomPreset() {
  const pick = pickRandomPreset(store.project.presets, store.project.seed + Date.now());
  if (!pick) {
    store.patchUi({ status: "no presets saved" });
    return;
  }
  loadPreset(pick.id);
}

export function dupPreset(id: string) {
  const preset = store.project.presets.find((x) => x.id === id);
  if (!preset) return;
  store.setProject((p) => ({ ...p, presets: [...p.presets, duplicatePreset(preset)] }));
}

export function delPreset(id: string) {
  store.setProject((p) => ({ ...p, presets: p.presets.filter((x) => x.id !== id) }));
}

export function addKeyframe() {
  const ui = store.state.ui;
  const layer = selectedLayer(store.project);
  const fx = selectedEffect(layer);
  const paramId = ui.selectedParam?.paramId;
  if (!layer || !fx || !paramId) {
    store.patchUi({ status: "select a numeric parameter first" });
    return;
  }
  const val = fx.params[paramId];
  if (typeof val !== "number") {
    store.patchUi({ status: "keyframes are numeric" });
    return;
  }
  const kf: Keyframe = {
    id: uid("kf"),
    time: store.project.playback.time,
    layerId: layer.id,
    target: "effect",
    effectId: fx.id,
    paramId,
    value: val,
    easing: "smooth",
  };
  store.setProject((p) => ({ ...p, keyframes: [...p.keyframes, kf] }));
  store.patchUi({ status: `key ${paramId} @ ${kf.time.toFixed(2)}s` });
}

export function clearKeyframes() {
  store.setProject((p) => ({ ...p, keyframes: [] }));
}

export async function freezeSelected() {
  const src = store.project.sources.find((s) => s.id === store.state.ui.selectedSourceId);
  if (!src) return;
  const still = await freezeVideoFrame(src);
  if (still) addSource(still, true);
}
