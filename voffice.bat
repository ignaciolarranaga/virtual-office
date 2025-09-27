@echo off
set "PEAR_URL=pear://y1qitgf7dn8bcymsf7tjs7qbqtrriqffea3hh79g9erus6h6numy"

where pear >nul 2>nul
if errorlevel 1 (
  echo Pear CLI not found. Install it by running: npm install -g pear
  exit /b 1
)

pear run "%PEAR_URL%" %*
exit /b %errorlevel%
