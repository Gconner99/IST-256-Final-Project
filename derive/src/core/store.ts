import { recompose } from "./compose";
import { createDefaultProject } from "./defaults";
import type { AppState, AppUi, Project } from "./types";

type Listener = () => void;

function defaultUi(): AppUi {
  return {
    selectedUnitId: null,
    selectedSourceId: null,
    dropActive: false,
    helpOpen: false,
    status: "drop references · or drift the generated maps",
    draggingUnitId: null,
  };
}

class Store {
  state: AppState = {
    project: recompose(createDefaultProject()),
    ui: defaultUi(),
  };
  private listeners = new Set<Listener>();

  get project(): Project {
    return this.state.project;
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

  patchUi(partial: Partial<AppUi>, emit = true) {
    this.state = { ...this.state, ui: { ...this.state.ui, ...partial } };
    if (emit) this.emit();
  }

  replace(project: Project) {
    this.state = { ...this.state, project };
    this.emit();
  }
}

export const store = new Store();
