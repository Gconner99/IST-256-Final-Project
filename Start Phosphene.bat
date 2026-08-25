@echo off
title PHOSPHENE
cd /d "%~dp0"
echo.
echo   PHOSPHENE
echo   Opening in Chrome or Edge — not in Cursor.
echo.

if not exist "PHOSPHENE.html" (
  echo   Could not find PHOSPHENE.html
  echo   Unzip the whole folder first, then double-click this file
  echo   from File Explorer, not from inside Cursor.
  echo.
  pause
  exit /b 1
)

set "PAGE=%cd%\PHOSPHENE.html"

if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
  start "" "%LocalAppData%\Google\Chrome\Application\chrome.exe" --new-window --allow-file-access-from-files "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --new-window --allow-file-access-from-files "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" --new-window --allow-file-access-from-files "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" --new-window --allow-file-access-from-files "%PAGE%"
  goto :ok
)
if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" --new-window --allow-file-access-from-files "%PAGE%"
  goto :ok
)
if exist "%LocalAppData%\Microsoft\WindowsApps\msedge.exe" (
  start "" "%LocalAppData%\Microsoft\WindowsApps\msedge.exe" --new-window --allow-file-access-from-files "%PAGE%"
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
echo   Browser should pop up now. This window will close.
timeout /t 2 >nul
