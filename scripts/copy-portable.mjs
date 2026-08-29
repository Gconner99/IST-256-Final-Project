import { copyFileSync, existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { extname, resolve } from "node:path";

const dist = resolve("dist-portable");
const jsSrc = resolve(dist, "phosphene.js");
if (!existsSync(jsSrc)) {
  console.error("dist-portable/phosphene.js missing — run vite build --config vite.portable.ts first");
  process.exit(1);
}

const root = resolve(".");
for (const name of readdirSync(dist)) {
  const ext = extname(name).toLowerCase();
  if (ext !== ".js" && ext !== ".css") continue;
  copyFileSync(resolve(dist, name), resolve(root, name));
  console.log(`copied ${name}`);
}

let js = readFileSync(resolve(root, "phosphene.js"), "utf8");
js = js.replace(/\s*\/\/# sourceMappingURL=[^\s]+/g, "");
if (js.includes("import.meta") || /^\s*import\s/m.test(js)) {
  console.error("phosphene.js is still an ES module — Chrome cannot load it from a double-clicked html file");
  process.exit(1);
}
writeFileSync(resolve(root, "phosphene.js"), js);

const cssLink = existsSync(resolve(root, "phosphene.css"))
  ? '    <link rel="stylesheet" href="./phosphene.css" />\n'
  : "";

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="dark" />
    <title>PHOSPHENE</title>
${cssLink}    <script>
      window.__phospheneMark = false;
      setTimeout(function () {
        if (window.__phospheneMark) return;
        var n = document.getElementById("app");
        if (!n) return;
        n.textContent =
          "PHOSPHENE did not start.\\n\\nOn Windows: close this tab. In File Explorer, double-click Start Phosphene.bat.\\n\\nUnzip the WHOLE folder (html + phosphene.js together). Delete old Downloads folders named like (25).";
        n.style.cssText =
          "font:16px ui-monospace,monospace;color:#d6ff3d;padding:24px;white-space:pre-wrap;max-width:40em";
      }, 8000);
    </script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      (function () {
        var root = document.getElementById("app");
        if (!root) return;
        root.innerHTML =
          '<canvas id="boot-canvas" style="width:100%;height:100%;display:block;background:#050506"></canvas>' +
          '<p id="boot-note" style="position:absolute;left:16px;bottom:16px;margin:0;font:12px ui-monospace,monospace;color:#d6ff3d;letter-spacing:.12em">PHOSPHENE · plasma</p>';
        root.style.cssText = "position:relative;inset:0;min-height:100vh;background:#070709;margin:0";
        var canvas = document.getElementById("boot-canvas");
        if (!canvas || !canvas.getContext) return;
        var ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;
        var t0 = Date.now();
        function tick() {
          if (window.__phospheneGone) return;
          var r = canvas.parentElement.getBoundingClientRect();
          var w = Math.max(32, Math.min(280, Math.floor(r.width || 280)));
          var h = Math.max(32, Math.min(160, Math.floor(r.height || 160)));
          if (canvas.width !== w) canvas.width = w;
          if (canvas.height !== h) canvas.height = h;
          var img = ctx.createImageData(w, h);
          var d = img.data;
          var t = (Date.now() - t0) / 1000;
          for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
              var u = x / w;
              var v = y / h;
              var n = Math.sin(u * 3.3 + t * 0.14) + Math.sin(v * 2.4 - t * 0.1);
              n += Math.sin((u * 0.7 + v) * 1.5 + t * 0.06);
              n = (n / 3) * 0.5 + 0.5;
              var i = (y * w + x) * 4;
              d[i] = 20 + n * 200;
              d[i + 1] = 12 + n * 140;
              d[i + 2] = 28 + n * 90;
              d[i + 3] = 255;
            }
          }
          ctx.putImageData(img, 0, 0);
          requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        setTimeout(function () {
          var s = document.createElement("script");
          s.src = "./phosphene.js";
          s.onerror = function () {
            var note = document.getElementById("boot-note");
            if (note) note.textContent = "PHOSPHENE · missing phosphene.js — unzip the WHOLE folder";
          };
          document.body.appendChild(s);
        }, 400);
      })();
    </script>
  </body>
</html>
`;

if (html.length > 12000) {
  console.error("PHOSPHENE.html is too big — refusing to inline the engine");
  process.exit(1);
}
writeFileSync(resolve(root, "PHOSPHENE.html"), html);
console.log(`Wrote PHOSPHENE.html (${html.length} bytes)`);
