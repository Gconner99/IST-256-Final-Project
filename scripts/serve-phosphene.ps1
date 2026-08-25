param(
  [int]$Port = 8765,
  [string]$Root = (Get-Location).Path
)

$ErrorActionPreference = "Stop"
$rootFull = ([IO.Path]::GetFullPath($Root)).TrimEnd("\", "/") + [IO.Path]::DirectorySeparatorChar

function Get-Mime([string]$ext) {
  switch ($ext.ToLowerInvariant()) {
    ".html" { "text/html; charset=utf-8" }
    ".js" { "text/javascript; charset=utf-8" }
    ".mjs" { "text/javascript; charset=utf-8" }
    ".css" { "text/css; charset=utf-8" }
    ".json" { "application/json" }
    ".png" { "image/png" }
    ".jpg" { "image/jpeg" }
    ".jpeg" { "image/jpeg" }
    ".svg" { "image/svg+xml" }
    ".wasm" { "application/wasm" }
    ".ico" { "image/x-icon" }
    default { "application/octet-stream" }
  }
}

function Find-Port([int]$start) {
  for ($p = $start; $p -lt $start + 12; $p++) {
    $listener = New-Object System.Net.HttpListener
    $prefix = "http://127.0.0.1:$p/"
    $listener.Prefixes.Add($prefix)
    try {
      $listener.Start()
      return @{ Listener = $listener; Port = $p; Prefix = $prefix }
    } catch {
      try { $listener.Close() } catch { }
    }
  }
  throw "Could not listen on 127.0.0.1 starting at $start"
}

function Open-Browser([string]$url) {
  $flags = @(
    "--new-window",
    "--disable-gpu",
    "--use-gl=angle",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader",
    "--allow-file-access-from-files",
    $url
  )
  $candidates = @(
    "$env:LocalAppData\Google\Chrome\Application\chrome.exe",
    "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
    "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
    "$env:LocalAppData\Microsoft\WindowsApps\msedge.exe"
  )
  foreach ($exe in $candidates) {
    if ($exe -and (Test-Path $exe)) {
      Start-Process -FilePath $exe -ArgumentList $flags | Out-Null
      return $true
    }
  }
  Start-Process $url | Out-Null
  return $false
}

$bind = Find-Port $Port
$listener = $bind.Listener
$page = "$($bind.Prefix)PHOSPHENE.html"
Write-Host ""
Write-Host "  PHOSPHENE is at $page"
Write-Host "  Leave this window open while you use it."
Write-Host "  Close this window when you are done."
Write-Host ""
[void](Open-Browser $page)

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  try {
    $rel = [Uri]::UnescapeDataString($ctx.Request.Url.LocalPath.TrimStart("/"))
    if ([string]::IsNullOrWhiteSpace($rel)) { $rel = "PHOSPHENE.html" }
    $full = [IO.Path]::GetFullPath((Join-Path $Root $rel))
    if (-not $full.StartsWith($rootFull, [StringComparison]::OrdinalIgnoreCase)) {
      $ctx.Response.StatusCode = 403
      $ctx.Response.Close()
      continue
    }
    if (Test-Path $full -PathType Container) {
      $full = Join-Path $full "PHOSPHENE.html"
    }
    if (-not (Test-Path $full -PathType Leaf)) {
      $ctx.Response.StatusCode = 404
      $bytes = [Text.Encoding]::UTF8.GetBytes("not found")
      $ctx.Response.ContentType = "text/plain; charset=utf-8"
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      $ctx.Response.Close()
      continue
    }
    $bytes = [IO.File]::ReadAllBytes($full)
    $ctx.Response.StatusCode = 200
    $ctx.Response.ContentType = Get-Mime ([IO.Path]::GetExtension($full))
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.Headers.Add("Cache-Control", "no-cache")
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $ctx.Response.Close()
  } catch {
    try {
      $ctx.Response.StatusCode = 500
      $ctx.Response.Close()
    } catch { }
  }
}
