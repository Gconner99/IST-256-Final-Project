#!/bin/bash
cd "$(dirname "$0")"
echo
echo "  PHOSPHENE"
echo "  Opening a private Chrome/Edge window — not in Cursor."
echo

if [ ! -f "PHOSPHENE.html" ]; then
  echo "  Could not find PHOSPHENE.html"
  echo "  Unzip the whole folder, then double-click this file in Finder,"
  echo "  not from inside Cursor."
  read -r -p "  Press Return to close..."
  exit 1
fi
if [ ! -f "phosphene.js" ]; then
  echo "  Could not find phosphene.js — unzip the WHOLE folder, not just the html."
  read -r -p "  Press Return to close..."
  exit 1
fi

PAGE="$PWD/PHOSPHENE.html"
PROFILE="${TMPDIR:-/tmp}/phosphene-chrome"
FLAGS=(--user-data-dir="$PROFILE" --no-first-run --disable-gpu --use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader --allow-file-access-from-files)

if [ -d "/Applications/Google Chrome.app" ]; then
  open -na "Google Chrome" --args "${FLAGS[@]}" "$PAGE"
  exit 0
fi
if [ -d "/Applications/Microsoft Edge.app" ]; then
  open -na "Microsoft Edge" --args "${FLAGS[@]}" "$PAGE"
  exit 0
fi
if [ -d "/Applications/Safari.app" ]; then
  open -a Safari "$PAGE"
  exit 0
fi

echo "  Could not find Chrome, Edge, or Safari."
echo "  In Finder: right-click PHOSPHENE.html → Open With → Google Chrome"
read -r -p "  Press Return to close..."
exit 1
