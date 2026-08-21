import "./styles/app.css";
import { store } from "./core/store";
import { mediaTime, resolvePlaybackSpeed } from "./core/timeline";
import { Renderer } from "./engine/renderer";
import { seekVideo } from "./media/sources";
import { mount, resizeCanvas, tickHud } from "./ui/app";

const rootEl = document.querySelector<HTMLElement>("#app");
if (!rootEl) throw new Error("#app missing");
const root: HTMLElement = rootEl;

const canvas = document.createElement("canvas");
let renderer: Renderer;
try {
  renderer = new Renderer(canvas);
} catch (err) {
  root.innerHTML = `<div style="padding:24px;font-family:monospace;color:#d6ff3d">
    <h1>PHOSPHENE</h1>
    <p>WebGL2 is required. ${err instanceof Error ? err.message : String(err)}</p>
  </div>`;
  throw err;
}

mount(root, renderer);

const view = document.querySelector<HTMLElement>("#view")!;
const ro = new ResizeObserver(() => resizeCanvas(canvas, view));
ro.observe(view);
resizeCanvas(canvas, view);

let last = performance.now();
let fpsEma = 60;
let frames = 0;
let fpsLast = performance.now();

function frame(now: number) {
  const dt = Math.min(0.08, (now - last) / 1000);
  last = now;
  const exporting = store.state.ui.exporting;
  const p = store.project;
  const speed = resolvePlaybackSpeed(p, p.playback.time);
  if (!exporting && p.playback.playing && !p.playback.freeze) {
    let t = p.playback.time + dt * speed;
    const dur = Math.max(p.duration, 0.001);
    if (p.playback.loop) t = ((t % dur) + dur) % dur;
    else t = Math.min(t, dur);
    store.setProject((pr) => ({ ...pr, playback: { ...pr.playback, time: t } }), false);
  }

  for (const src of store.project.sources) {
    if (src.kind === "video" && src.video && !store.project.playback.freeze) {
      const vt = mediaTime(
        store.project.playback.time,
        src.duration || src.video.duration || 1,
        store.project.playback.mode,
        1,
        store.project.playback.loop,
      );
      seekVideo(src, vt);
    }
  }

  if (!exporting) {
    try {
      renderer.render(store.project, store.project.playback.time);
    } catch (err) {
      store.patchUi({ status: err instanceof Error ? err.message : "render error" }, false);
    }
  }

  frames++;
  if (now - fpsLast > 400) {
    fpsEma = (frames * 1000) / (now - fpsLast);
    fpsLast = now;
    frames = 0;
  }
  tickHud(root, fpsEma, store.project.playback.time);
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
