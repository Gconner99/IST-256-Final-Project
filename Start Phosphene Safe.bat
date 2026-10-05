@echo off
title PHOSPHENE SAFE
cd /d "%~dp0"
echo.
echo   PHOSPHENE  (safe / softer picture)
echo   Only use this if the normal Start Phosphene.bat crashes Chrome.
echo.

if not exist "PHOSPHENE.html" goto :missing
if not exist "phosphene.js" goto :missingjs

set "PAGE=%cd%\PHOSPHENE.html"
set "PROFILE=%TEMP%\phosphene-safe"

if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
  start "" "%LocalAppData%\Google\Chrome\Application\chrome.exe" --user-data-dir="%PROFILE%" --no-first-run --no-default-browser-check --disable-gpu --use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader --allow-file-access-from-files --new-window "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --user-data-dir="%PROFILE%" --no-first-run --no-default-browser-check --disable-gpu --use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader --allow-file-access-from-files --new-window "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" --user-data-dir="%TEMP%\phosphene-safe-edge" --no-first-run --no-default-browser-check --disable-gpu --use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader --allow-file-access-from-files --new-window "%PAGE%"
  goto :ok
)

echo   Could not find Chrome or Edge.
pause
exit /b 1

:missing
echo   Could not find PHOSPHENE.html
pause
exit /b 1
:missingjs
echo   Could not find phosphene.js — unzip the WHOLE folder.
pause
exit /b 1
:ok
echo   A new Phosphene window should pop up now.
timeout /t 2 >nul
