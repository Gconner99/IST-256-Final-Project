@echo off
title PHOSPHENE
cd /d "%~dp0"
echo.
echo   PHOSPHENE
echo   Opening in Chrome or Edge — not in Cursor.
echo   Leave this window open while you use Phosphene.
echo   Close it when you are done.
echo.

if not exist "PHOSPHENE.html" (
  echo   Could not find PHOSPHENE.html
  echo   Unzip the whole folder first, then double-click this file
  echo   from File Explorer, not from inside Cursor.
  echo.
  pause
  exit /b 1
)
if not exist "boot.js" (
  echo   Could not find boot.js — unzip the WHOLE folder, not just the html.
  echo   Delete old Downloads folders named like "... (25)" and download a new ZIP.
  echo.
  pause
  exit /b 1
)

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\serve-phosphene.ps1"
if errorlevel 1 goto :filefallback
exit /b 0

:filefallback
echo.
echo   Local page failed — opening the html file directly.
echo.
set "PAGE=%cd%\PHOSPHENE.html"
set "FLAGS=--new-window --disable-gpu --use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader --allow-file-access-from-files"

if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
  start "" "%LocalAppData%\Google\Chrome\Application\chrome.exe" %FLAGS% "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" %FLAGS% "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" %FLAGS% "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" %FLAGS% "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" %FLAGS% "%PAGE%"
  goto :ok
)
if exist "%LocalAppData%\Microsoft\WindowsApps\msedge.exe" (
  start "" "%LocalAppData%\Microsoft\WindowsApps\msedge.exe" %FLAGS% "%PAGE%"
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
echo   Browser should pop up now. Leave this window open.
pause
