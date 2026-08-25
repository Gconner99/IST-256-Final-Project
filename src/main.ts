import "./styles/app.css";
import { store } from "./core/store";
import { mediaTime, resolvePlaybackSpeed } from "./core/timeline";
import type { Renderer } from "./engine/renderer";
import { applyTransport, getSoundtrack } from "./media/audio";
import { seekVideo } from "./media/sources";
import { mount, resizeCanvas, tickHud } from "./ui/app";
import { registerWacky } from "./effects/registry";

export async function startPhosphene(stopBoot: () => void) {
  const rootEl = document.querySelector<HTMLElement>("#app");
  if (!rootEl) throw new Error("#app missing");
  const root: HTMLElement = rootEl;

  const { WACKY_EFFECTS } = await import("./effects/wacky");
  registerWacky(WACKY_EFFECTS);

  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

  const canvas = document.createElement("canvas");
  let renderer: Renderer;
  try {
    const mod = await import("./engine/renderer");
    renderer = new mod.Renderer(canvas);
  } catch (err) {
    const note = document.querySelector("#boot-note");
    if (note) {
      note.textContent = `PHOSPHENE · plasma · ${err instanceof Error ? err.message : "WebGL failed"}`;
    }
    return;
  }

  stopBoot();
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
    const track = getSoundtrack(p);
    if (!exporting && p.playback.playing && !p.playback.freeze) {
      if (track?.audio && p.playback.mode === "forward") {
        applyTransport(track.audio, p.playback);
        const at = track.audio.currentTime;
        if (Number.isFinite(at)) {
          store.setProject((pr) => ({ ...pr, playback: { ...pr.playback, time: at } }), false);
        }
      } else {
        let t = p.playback.time + dt * speed;
        const dur = Math.max(p.duration, 0.001);
        if (p.playback.loop) t = ((t % dur) + dur) % dur;
        else t = Math.min(t, dur);
        store.setProject((pr) => ({ ...pr, playback: { ...pr.playback, time: t } }), false);
        if (track?.audio) applyTransport(track.audio, { ...p.playback, playing: false, time: t });
      }
    } else if (track?.audio) {
      applyTransport(track.audio, { ...p.playback, playing: false });
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
}
