import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const src = resolve("dist/index.html");
const dest = resolve("PHOSPHENE.html");
if (!existsSync(src)) {
  console.error("dist/index.html missing — run vite build --mode portable first");
  process.exit(1);
}

let html = readFileSync(src, "utf8");
html = html.replace(/\s*\/\/# sourceMappingURL=[^\s<]+/g, "");

const scripts = [];
html = html.replace(/<script(?:\s[^>]*)?>[\s\S]*?<\/script>/gi, (block) => {
  scripts.push(block.replace(/<script type="module">/i, "<script>"));
  return "";
});

if (scripts.length === 0) {
  console.error("no script tags found in dist/index.html");
  process.exit(1);
}

const close = html.lastIndexOf("</body>");
if (close < 0) {
  console.error("no </body> in dist/index.html");
  process.exit(1);
}

html = `${html.slice(0, close)}    ${scripts.join("\n    ")}\n  </body>${html.slice(close + 7)}`;
writeFileSync(dest, html);
console.log(`Wrote ${dest}`);
