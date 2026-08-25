import { copyFileSync, existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { extname, resolve } from "node:path";

const dist = resolve("dist");
const htmlSrc = resolve(dist, "index.html");
const bootSrc = resolve(dist, "boot.js");
if (!existsSync(htmlSrc) || !existsSync(bootSrc)) {
  console.error("dist/index.html or dist/boot.js missing — run vite build first");
  process.exit(1);
}

const root = resolve(".");
const copied = [];
for (const name of readdirSync(dist)) {
  const ext = extname(name).toLowerCase();
  if (ext !== ".js" && ext !== ".css") continue;
  copyFileSync(resolve(dist, name), resolve(root, name));
  copied.push(name);
  console.log(`copied ${name}`);
}

let html = readFileSync(htmlSrc, "utf8");
html = html.replace(/\s*\/\/# sourceMappingURL=[^\s<]+/g, "");
html = html.replace(/<link rel="modulepreload"[^>]*>/gi, "");
html = html.replace(/\s+crossorigin(?:="[^"]*")?/gi, "");
html = html.replace(/\s+integrity="[^"]*"/gi, "");
html = html.replace(/(src|href)="\/(?!\/)/g, '$1="./');

const extras = [];
html = html.replace(/<script(?:\s[^>]*)?>[\s\S]*?<\/script>/gi, (block) => {
  extras.push(block);
  return "";
});

if (extras.length === 0) {
  console.error("no script tags in dist/index.html");
  process.exit(1);
}

const inline = extras.filter((s) => !/\ssrc=/i.test(s)).join("\n");
if (inline.length > 8000) {
  console.error("refusing to ship inlined JS — Chrome dies on a single giant html file");
  process.exit(1);
}

if (!extras.some((s) => /boot\.js/.test(s))) {
  console.error("boot.js is not referenced from the html");
  process.exit(1);
}

const close = html.lastIndexOf("</body>");
if (close < 0) {
  console.error("no </body>");
  process.exit(1);
}

const note = "<!-- Open with Start Phosphene.bat from File Explorer. Needs boot.js next to this file. -->\n";
html = `${note}${html.slice(0, close)}    ${extras.join("\n    ")}\n  </body>${html.slice(close + 7)}`;
const out = resolve(root, "PHOSPHENE.html");
writeFileSync(out, html);
console.log(`Wrote PHOSPHENE.html (${html.length} bytes) + ${copied.join(", ")}`);
