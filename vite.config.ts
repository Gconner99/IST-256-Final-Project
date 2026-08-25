import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "./",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    cssCodeSplit: false,
    assetsDir: ".",
    modulePreload: false,
    target: "es2022",
    rollupOptions: {
      output: {
        entryFileNames: "boot.js",
        chunkFileNames: "[name].js",
        assetFileNames: "phosphene[extname]",
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    setupFiles: ["tests/setup.ts"],
  },
});
