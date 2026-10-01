#!/usr/bin/env bash
# Publica el build estático en la rama gh-pages (GitHub Pages sirve esa rama).
# Construye encima del historial existente de gh-pages, sin force-push.
set -euo pipefail
cd "$(dirname "$0")/.."

npm run build
touch out/.nojekyll   # sin esto GitHub Pages ignora la carpeta _next/

tmp=$(mktemp -d)
trap 'git worktree remove --force "$tmp" 2>/dev/null || true' EXIT

git fetch origin gh-pages
git worktree add --detach "$tmp" origin/gh-pages
find "$tmp" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -a out/. "$tmp"/
git -C "$tmp" add -A
git -C "$tmp" commit -m "Deploy CV web ($(git rev-parse --short HEAD))"
git -C "$tmp" push origin HEAD:gh-pages
