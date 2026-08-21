#!/bin/bash
cd "$(dirname "$0")"
if [ ! -f "PHOSPHENE.html" ]; then
  echo "Could not find PHOSPHENE.html in this folder."
  echo "Unzip the whole folder first, then try again."
  read -r -p "Press Return to close..."
  exit 1
fi
if command -v open >/dev/null 2>&1; then
  open "PHOSPHENE.html"
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open "PHOSPHENE.html"
else
  echo "Open PHOSPHENE.html in Chrome or Edge."
fi
