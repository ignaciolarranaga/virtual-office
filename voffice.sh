#!/usr/bin/env bash
set -euo pipefail

PEAR_URL="pear://y1qitgf7dn8bcymsf7tjs7qbqtrriqffea3hh79g9erus6h6numy"

if ! command -v pear >/dev/null 2>&1; then
  echo "Pear CLI not found. Install it by running: npm install -g pear" >&2
  exit 1
fi

pear run "${PEAR_URL}" "$@"
