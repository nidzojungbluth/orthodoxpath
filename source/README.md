# OrthodoxPath – Quellcode

Hier liegt der vollständige Quellcode. Die veröffentlichte App (Hauptverzeichnis des Repos) wird daraus gebaut.

- Bauen: `node build.js` → erzeugt `dist/index.html` (Einzeldatei) und `pwa/` (Manifest, Service Worker, Icons nötig: aus dem Hauptverzeichnis kopieren bzw. `node tests/make-icons.js`).
- Serbisch-Prüfung: `node tools/sr-export.js` → CSV; nach Korrektur `node tools/sr-import.js datei.csv`.
- Tests: `node tests/content.test.js` · `node tests/e2e.js` (Playwright/Chromium) · `node tests/pwa-offline.js` (lokaler Server auf Port 8765 im Ordner `pwa/`).
- Veröffentlichen: Inhalt von `pwa/` ins Hauptverzeichnis des Repos kopieren.
- Projektdokumente: siehe `../PROJECT_STATUS.md`, `../ROADMAP.md`, `../DECISIONS.md`, `../CONTENT_SOURCES.md`.
