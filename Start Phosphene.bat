@echo off
cd /d "%~dp0"
if not exist "PHOSPHENE.html" (
  echo Could not find PHOSPHENE.html in this folder.
  echo Unzip the whole folder first, then try again.
  pause
  exit /b 1
)
start "" "PHOSPHENE.html"
