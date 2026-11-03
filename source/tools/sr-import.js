/* Spielt Korrekturen aus der Prüf-CSV ein (Spalte „Korrektur“ ausgefüllt). Ersetzt den alten Text exakt in den Quelldateien.
   Aufruf: node tools/sr-import.js datei.csv [--dry]   Danach: node build.js und Tests ausführen. */
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const [file, flag] = process.argv.slice(2); if (!file) { console.error("CSV-Datei angeben"); process.exit(1); }
function parse(t) { t = t.replace(/^﻿/, ""); const rows = []; let row = [], f = "", inq = false;
  for (let i = 0; i < t.length; i++) { const c = t[i];
    if (inq) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else inq = false; } else f += c; }
    else if (c === '"') inq = true; else if (c === ";" || c === ",") { row.push(f); f = ""; } else if (c === "\n" || c === "\r") { if (c === "\r" && t[i + 1] === "\n") i++; row.push(f); f = ""; if (row.some(x => x !== "")) rows.push(row); row = []; } else f += c; }
  if (f || row.length) { row.push(f); rows.push(row); } return rows; }
const rows = parse(fs.readFileSync(file, "utf8")); const head = rows.shift();
const iSr = head.indexOf("Serbisch"), iFix = head.indexOf("Korrektur");
const files = ["src/i18n.js", "src/calendar.js", ...fs.readdirSync(path.join(root, "src/content")).map(f => "src/content/" + f)];
const src = {}; files.forEach(f => src[f] = fs.readFileSync(path.join(root, f), "utf8"));
let ok = 0, missing = [];
rows.forEach(r => { const old = r[iSr], neu = (r[iFix] || "").trim(); if (!neu || neu === old) return;
  const a = JSON.stringify(old), b = JSON.stringify(neu); let hit = false;
  files.forEach(f => { if (src[f].includes(a)) { src[f] = src[f].split(a).join(b); hit = true; } });
  if (hit) ok++; else missing.push(old.slice(0, 60)); });
if (flag !== "--dry") files.forEach(f => fs.writeFileSync(path.join(root, f), src[f]));
console.log(ok + " Korrekturen " + (flag === "--dry" ? "gefunden (Probelauf)" : "eingespielt") + "; nicht gefunden: " + missing.length);
missing.slice(0, 20).forEach(m => console.log("  – " + m));
