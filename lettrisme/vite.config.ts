import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "./",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    target: "es2022",
  },
  server: {
    port: 5174,
    host: "127.0.0.1",
    open: true,
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
  },
});
