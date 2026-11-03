/* Exportiert alle serbischen Texte (kyrillisch) mit deutschem Gegenstück als CSV zur Prüfung durch Muttersprachler.
   Aufruf: node tools/sr-export.js [ausgabe.csv]   → Spalten: Nr; Bereich; Deutsch; Serbisch; Korrektur; Anmerkung */
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const mods = {
  "Oberfläche": () => ({ UI: require(root + "/src/i18n.js").UI.sr, DE: require(root + "/src/i18n.js").UI.de }),
  "Gebete": () => require(root + "/src/content/prayers.js"),
  "Kalender": () => require(root + "/src/calendar.js"),
  "Theologie": () => require(root + "/src/content/theology.js"),
  "Liturgie": () => require(root + "/src/content/liturgysteps.js"),
  "Ikonen": () => require(root + "/src/content/icons.js"),
  "Heilige": () => require(root + "/src/content/saints.js"),
  "Bibel": () => require(root + "/src/content/bible.js"),
  "Überblicke": () => require(root + "/src/content/overviews.js"),
  "Bibliothek": () => require(root + "/src/content/library.js"),
  "Lesepläne": () => require(root + "/src/content/plans.js")
};
const CYR = /[Ѐ-ӿ]/;
const rows = [], seen = new Set();
function add(area, de, sr) { if (typeof sr !== "string" || !CYR.test(sr) || seen.has(sr)) return; seen.add(sr); rows.push([area, de || "", sr]); }
function walk(area, v) {
  if (Array.isArray(v)) { v.forEach((x, i) => { if (typeof x === "string" && CYR.test(x)) add(area, typeof v[i - 1] === "string" && !CYR.test(v[i - 1]) ? v[i - 1] : "", x); else walk(area, x); }); return; }
  if (v && typeof v === "object") {
    if (typeof v.sr === "string") add(area, typeof v.de === "string" ? v.de : "", v.sr);
    Object.keys(v).forEach(k => { if (k !== "sr" && k !== "de") walk(area, v[k]); });
  }
}
for (const [area, load] of Object.entries(mods)) {
  const m = load();
  if (area === "Oberfläche") { Object.keys(m.UI).forEach(k => add(area, m.DE[k], m.UI[k])); continue; }
  walk(area, m);
}
const q = s => '"' + String(s).replace(/"/g, '""') + '"';
const csv = "﻿" + ["Nr", "Bereich", "Deutsch", "Serbisch", "Korrektur", "Anmerkung"].map(q).join(";") + "\n" +
  rows.map((r, i) => [i + 1, r[0], r[1], r[2], "", ""].map(q).join(";")).join("\n") + "\n";
const out = process.argv[2] || path.join(root, "serbisch-pruefung.csv");
fs.writeFileSync(out, csv);
console.log(rows.length + " serbische Texte → " + out);
