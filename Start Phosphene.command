#!/bin/bash
cd "$(dirname "$0")"
echo
echo "  PHOSPHENE"
echo "  Starting on this computer. Nothing is uploaded anywhere."
echo

if ! command -v node >/dev/null 2>&1; then
  echo "  Node.js is not installed yet. That is a free one-time install."
  echo
  echo "  1. Open https://nodejs.org"
  echo "  2. Download the LTS / Recommended version"
  echo "  3. Install it, then double-click this file again"
  echo
  if command -v open >/dev/null 2>&1; then
    open "https://nodejs.org"
  fi
  read -r -p "  Press Return to close this window..."
  exit 1
fi

echo "  First launch can take a minute..."
if ! npm install; then
  echo
  echo "  Install failed. Make sure Node.js installed correctly, then try again."
  read -r -p "  Press Return to close this window..."
  exit 1
fi

echo "  Opening Phosphene..."
npm run desktop
status=$?
if [ "$status" -ne 0 ]; then
  echo
  echo "  Phosphene closed with an error. See the lines above."
  read -r -p "  Press Return to close this window..."
  exit "$status"
fi
