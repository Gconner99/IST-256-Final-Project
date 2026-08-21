/// <reference types="vite/client" />

interface Window {
  phospheneDesktop?: {
    saveFile: (opts: {
      defaultPath?: string;
      data: ArrayBuffer | string;
      encoding?: "utf8" | "binary";
    }) => Promise<string | null>;
    openFile: () => Promise<{ name: string; data: ArrayBuffer } | null>;
    chooseDirectory: () => Promise<string | null>;
  };
}
