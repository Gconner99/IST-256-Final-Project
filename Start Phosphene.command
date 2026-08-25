#!/bin/bash
cd "$(dirname "$0")"
echo
echo "  PHOSPHENE"
echo "  Opening in Chrome, Edge, or Safari — not in Cursor."
echo

if [ ! -f "PHOSPHENE.html" ]; then
  echo "  Could not find PHOSPHENE.html"
  echo "  Unzip the whole folder, then double-click this file in Finder,"
  echo "  not from inside Cursor."
  read -r -p "  Press Return to close..."
  exit 1
fi

PAGE="$PWD/PHOSPHENE.html"

if [ -d "/Applications/Google Chrome.app" ]; then
  open -na "Google Chrome" --args --allow-file-access-from-files "$PAGE"
  exit 0
fi
if [ -d "/Applications/Microsoft Edge.app" ]; then
  open -na "Microsoft Edge" --args --allow-file-access-from-files "$PAGE"
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
