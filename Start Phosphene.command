#!/bin/bash
cd "$(dirname "$0")"
echo
echo "  PHOSPHENE"
echo "  Opening in Chrome, Edge, or Safari — not in Cursor."
echo "  Leave this window open while you use Phosphene."
echo

if [ ! -f "PHOSPHENE.html" ]; then
  echo "  Could not find PHOSPHENE.html"
  echo "  Unzip the whole folder, then double-click this file in Finder,"
  echo "  not from inside Cursor."
  read -r -p "  Press Return to close..."
  exit 1
fi
if [ ! -f "boot.js" ]; then
  echo "  Could not find boot.js — unzip the WHOLE folder, not just the html."
  read -r -p "  Press Return to close..."
  exit 1
fi

PORT=8765
PAGE_FILE="$PWD/PHOSPHENE.html"
URL="http://127.0.0.1:${PORT}/PHOSPHENE.html"
FLAGS=(--disable-gpu --use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader --allow-file-access-from-files)

open_browser() {
  local target="$1"
  if [ -d "/Applications/Google Chrome.app" ]; then
    open -na "Google Chrome" --args "${FLAGS[@]}" "$target"
    return 0
  fi
  if [ -d "/Applications/Microsoft Edge.app" ]; then
    open -na "Microsoft Edge" --args "${FLAGS[@]}" "$target"
    return 0
  fi
  if [ -d "/Applications/Safari.app" ]; then
    open -a Safari "$target"
    return 0
  fi
  return 1
}

PY=""
if command -v python3 >/dev/null 2>&1; then
  PY=python3
elif command -v python >/dev/null 2>&1; then
  PY=python
fi

if [ -n "$PY" ]; then
  echo "  PHOSPHENE is at $URL"
  echo "  Close this window when you are done."
  echo
  ( sleep 0.4; open_browser "$URL" ) &
  exec "$PY" -m http.server "$PORT" --bind 127.0.0.1
fi

echo "  No Python — opening the html file directly."
if open_browser "$PAGE_FILE"; then
  exit 0
fi

echo "  Could not find Chrome, Edge, or Safari."
echo "  In Finder: right-click PHOSPHENE.html → Open With → Google Chrome"
read -r -p "  Press Return to close..."
exit 1
