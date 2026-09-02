import "./styles.css";
import { materializeSource } from "./core/maps";
import { store } from "./core/store";
import { mount } from "./ui/app";

store.setProject((p) => ({ ...p, sources: p.sources.map(materializeSource) }), false);

const rootEl = document.querySelector<HTMLElement>("#app");
if (!rootEl) throw new Error("#app missing");
mount(rootEl);
