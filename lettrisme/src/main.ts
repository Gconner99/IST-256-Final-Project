import "./styles.css";
import { mount, redraw, resize } from "./ui/app";

const rootEl = document.querySelector<HTMLElement>("#app");
if (!rootEl) throw new Error("#app missing");

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
if (!ctx) {
  rootEl.innerHTML = `<div style="padding:24px;font-family:serif;color:#ece4d4">
    <h1>HYPERGRAPHIE</h1>
    <p>A 2D canvas is required.</p>
  </div>`;
  throw new Error("2d context missing");
}

mount(rootEl, canvas, ctx);
const view = document.querySelector<HTMLElement>("#view");
if (view) {
  const ro = new ResizeObserver(() => {
    resize();
    redraw();
  });
  ro.observe(view);
}
