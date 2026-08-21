@echo off
setlocal
title PHOSPHENE
cd /d "%~dp0"

echo.
echo   PHOSPHENE
echo   Starting on this computer. Nothing is uploaded anywhere.
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo   Node.js is not installed yet. That is a free one-time install.
  echo.
  echo   1. Open https://nodejs.org
  echo   2. Download the LTS / Recommended version
  echo   3. Install it, then double-click this file again
  echo.
  pause
  start "" "https://nodejs.org"
  exit /b 1
)

echo   First launch can take a minute...
call npm install
if errorlevel 1 (
  echo.
  echo   Install failed. Make sure Node.js installed correctly, then try again.
  pause
  exit /b 1
)

echo   Opening Phosphene...
call npm run desktop
if errorlevel 1 (
  echo.
  echo   Phosphene closed with an error. See the lines above.
  pause
)
