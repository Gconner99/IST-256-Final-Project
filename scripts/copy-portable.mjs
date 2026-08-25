import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const src = resolve("dist/index.html");
const dest = resolve("PHOSPHENE.html");
if (!existsSync(src)) {
  console.error("dist/index.html missing — run vite build --mode portable first");
  process.exit(1);
}
copyFileSync(src, dest);
console.log(`Wrote ${dest}`);
