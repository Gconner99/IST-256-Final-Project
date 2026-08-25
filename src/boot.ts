import { startSoftPlasma } from "./bootPlasma";

(window as unknown as { __phospheneMark: boolean }).__phospheneMark = true;

const root = document.querySelector<HTMLElement>("#app");
if (!root) throw new Error("#app missing");

root.innerHTML = `<canvas id="boot-canvas" style="width:100%;height:100%;display:block;background:#050506"></canvas>
<p id="boot-note" style="position:absolute;left:16px;bottom:16px;margin:0;font:12px ui-monospace,monospace;color:#d6ff3d;letter-spacing:.12em">PHOSPHENE · plasma</p>`;
root.style.cssText = "position:relative;inset:0;min-height:100vh;background:#070709;margin:0";

const canvas = root.querySelector<HTMLCanvasElement>("#boot-canvas")!;
const stop = startSoftPlasma(canvas);

async function load() {
  try {
    const mod = await import("./main");
    await mod.startPhosphene(stop);
  } catch (err) {
    const note = document.querySelector("#boot-note");
    if (note) note.textContent = `PHOSPHENE · plasma (engine paused) ${err instanceof Error ? err.message : ""}`;
    console.warn(err);
  }
}

requestAnimationFrame(() => requestAnimationFrame(() => void load()));
