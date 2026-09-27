import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  publicDir: false,
  build: {
    outDir: "dist-portable",
    emptyOutDir: true,
    sourcemap: false,
    cssCodeSplit: false,
    target: "es2022",
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "Phosphene",
      formats: ["iife"],
      fileName: () => "phosphene.js",
    },
    rollupOptions: {
      output: {
        assetFileNames: "phosphene[extname]",
      },
    },
  },
});
