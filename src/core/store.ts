import { createDefaultProject } from "./defaults";
import type { AppState, AppUi, Project } from "./types";

type Listener = () => void;

function defaultUi(project: Project): AppUi {
  return {
    selectedLayerId: project.layers[0]?.id ?? null,
    selectedEffectId: project.layers[0]?.effects[0]?.id ?? null,
    selectedSourceId: project.sources[0]?.id ?? null,
    selectedParam: null,
    dropActive: false,
    helpOpen: false,
    status: "ready",
    fps: 0,
    prompt: "",
    useSourceForGen: true,
    generating: false,
    includeCritters: true,
    includeIdol: true,
    includeBuddy: false,
    exporting: false,
  };
}

export class Store {
  state: AppState;
  private listeners = new Set<Listener>();

  constructor(project: Project = createDefaultProject()) {
    this.state = { project, ui: defaultUi(project) };
  }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private emit() {
    for (const fn of this.listeners) fn();
  }

  setProject(mut: (p: Project) => Project, emit = true) {
    this.state = { ...this.state, project: mut(this.state.project) };
    if (emit) this.emit();
  }

  setUi(mut: (u: AppUi) => AppUi) {
    this.state = { ...this.state, ui: mut(this.state.ui) };
    this.emit();
  }

  patchUi(partial: Partial<AppUi>, emit = true) {
    this.state = { ...this.state, ui: { ...this.state.ui, ...partial } };
    if (emit) this.emit();
  }

  replace(project: Project) {
    this.state = { project, ui: { ...defaultUi(project), status: this.state.ui.status } };
    this.emit();
  }

  get project(): Project {
    return this.state.project;
  }
}

export const store = new Store();
