@echo off
title PHOSPHENE
cd /d "%~dp0"
echo.
echo   PHOSPHENE
echo   Opening a private Chrome/Edge window — not in Cursor.
echo.

if not exist "PHOSPHENE.html" (
  echo   Could not find PHOSPHENE.html
  echo   Unzip the whole folder first, then double-click this file
  echo   from File Explorer, not from inside Cursor.
  echo.
  pause
  exit /b 1
)
if not exist "phosphene.js" (
  echo   Could not find phosphene.js — unzip the WHOLE folder, not just the html.
  echo   Delete old Downloads folders named like "... (25)" and download a new ZIP.
  echo.
  pause
  exit /b 1
)

set "PAGE=%cd%\PHOSPHENE.html"
set "PROFILE=%TEMP%\phosphene-gpu"

if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
  start "" "%LocalAppData%\Google\Chrome\Application\chrome.exe" --user-data-dir="%PROFILE%" --no-first-run --no-default-browser-check --allow-file-access-from-files --new-window "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --user-data-dir="%PROFILE%" --no-first-run --no-default-browser-check --allow-file-access-from-files --new-window "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" --user-data-dir="%PROFILE%" --no-first-run --no-default-browser-check --allow-file-access-from-files --new-window "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" --user-data-dir="%TEMP%\phosphene-gpu-edge" --no-first-run --no-default-browser-check --allow-file-access-from-files --new-window "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" --user-data-dir="%TEMP%\phosphene-gpu-edge" --no-first-run --no-default-browser-check --allow-file-access-from-files --new-window "%PAGE%"
  goto :ok
)
if exist "%LocalAppData%\Microsoft\WindowsApps\msedge.exe" (
  start "" "%LocalAppData%\Microsoft\WindowsApps\msedge.exe" --user-data-dir="%TEMP%\phosphene-gpu-edge" --no-first-run --no-default-browser-check --allow-file-access-from-files --new-window "%PAGE%"
  goto :ok
)

echo   Could not find Chrome or Edge on this computer.
echo.
echo   In File Explorer: right-click PHOSPHENE.html
echo   Open with  -^>  Microsoft Edge   (or Google Chrome)
echo.
pause
exit /b 1

:ok
echo   A new Phosphene browser window should pop up now.
echo   This window will close.
timeout /t 2 >nul
