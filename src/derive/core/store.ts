import { createDefaultProject, rebuildComposition } from "./project";
import type { DeriveProject, DeriveState, DeriveUi } from "./types";

type Listener = () => void;

function defaultUi(): DeriveUi {
  return {
    selectedUnitId: null,
    selectedSourceId: null,
    dropActive: false,
    helpOpen: false,
    status: "ready",
    draggingUnitId: null,
  };
}

export class DeriveStore {
  state: DeriveState;
  private listeners = new Set<Listener>();

  constructor(project: DeriveProject = rebuildComposition(createDefaultProject(), "recompose")) {
    this.state = { project, ui: defaultUi() };
  }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private emit() {
    for (const fn of this.listeners) fn();
  }

  setProject(mut: (p: DeriveProject) => DeriveProject, emit = true) {
    this.state = { ...this.state, project: mut(this.state.project) };
    if (emit) this.emit();
  }

  setUi(mut: (u: DeriveUi) => DeriveUi) {
    this.state = { ...this.state, ui: mut(this.state.ui) };
    this.emit();
  }

  patchUi(partial: Partial<DeriveUi>, emit = true) {
    this.state = { ...this.state, ui: { ...this.state.ui, ...partial } };
    if (emit) this.emit();
  }

  replace(project: DeriveProject) {
    this.state = { project, ui: { ...defaultUi(), status: this.state.ui.status } };
    this.emit();
  }

  get project(): DeriveProject {
    return this.state.project;
  }
}

export const store = new DeriveStore();
