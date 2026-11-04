/* Prüft Vollständigkeit und Konsistenz der Inhalte und Übersetzungen. Aufruf: node tests/content.test.js */
const { UI, translit } = require("../src/i18n.js");
const { BIBLE } = require("../src/content/bible.js");
const { OVERVIEWS } = require("../src/content/overviews.js");
const CAL = require("../src/calendar.js");
const { PLANS, NT_BOOKS, KATHISMATA } = require("../src/content/plans.js");
const { LITURGY_STEPS, LITURGY_PARTS } = require("../src/content/liturgysteps.js");
const { ICONS_LEX } = require("../src/content/icons.js");
const { COURSES, THEOLOGY, CREED } = require("../src/content/theology.js");
const { FATHERS, SAINTS, LINKS } = require("../src/content/saints.js");
const { BOOK_CATEGORIES, BOOKS, GLOSSARY, DECKS, EXTRA_CARDS } = require("../src/content/library.js");
const { PRAYER_TEXTS, PRAYER_RULES, PRAYER_CATS } = require("../src/content/prayers.js");

let fails = 0, checks = 0;
const ok = (cond, msg) => { checks++; if (!cond) { fails++; console.log("FAIL:", msg); } };
const warnings = [];

// 1. UI-Schlüssel in beiden Sprachen
const kd = Object.keys(UI.de), ks = Object.keys(UI.sr);
kd.forEach(k => ok(UI.sr[k], "UI.sr fehlt: " + k));
ks.forEach(k => ok(UI.de[k], "UI.de fehlt: " + k));

// 2. Jedes {de,sr}-Objekt vollständig; serbische Texte ohne versehentliche lateinische Wörter
const ALLOWED_LATIN = /\b(NPNF|ANF|BKV|CCEL|OrthodoxPath|SPC|JavaScript|I{1,3}V?|IV|VI|II\/\d+|I\/\d+)\b/g;
function walk(o, p) {
  if (Array.isArray(o)) return o.forEach((x, i) => walk(x, p + "[" + i + "]"));
  if (o && typeof o === "object") {
    if ("de" in o || "sr" in o) {
      ok(typeof o.de === "string" && o.de.trim(), "de leer: " + p);
      ok(typeof o.sr === "string" && o.sr.trim(), "sr leer: " + p);
      if (typeof o.sr === "string") {
        const rest = o.sr.replace(ALLOWED_LATIN, "");
        if (/[A-Za-z]{2,}/.test(rest)) warnings.push(p + ": " + rest.match(/[A-Za-z]{2,}/g).join(","));
      }
    }
    Object.keys(o).forEach(k => walk(o[k], p + "." + k));
  }
}
walk({ PRAYER_CATS, OVERVIEWS, PRAYER_TEXTS, BIBLE, COURSES, THEOLOGY, CREED, FATHERS, SAINTS, LINKS, BOOK_CATEGORIES, BOOKS, DECKS }, "root");

// 3. Tabellen (Arrays) mit DE/SR-Spalten
BIBLE.books.forEach(b => ok(b.length === 4 && b[2] && b[3], "Buch unvollständig: " + b[0]));
GLOSSARY.forEach(g => ok(g.length === 5 && g.every(Boolean), "Glossar unvollständig: " + g[0]));
EXTRA_CARDS.forEach((c, i) => ok(c.length === 5 && c.every(Boolean) && DECKS.some(d => d.id === c[0]), "Karte unvollständig: " + i));

// 4. Quiz-Konsistenz und eindeutige IDs
const ids = new Set();
[...BIBLE.lessons, ...THEOLOGY].forEach(l => {
  ok(!ids.has(l.id), "doppelte ID " + l.id); ids.add(l.id);
  ok(/^[a-z0-9-]+$/.test(l.id), "ID nicht ASCII: " + l.id);
  (l.quiz || []).forEach((q, i) => ok(q.correct >= 0 && q.correct < q.options.length, `Quiz ${l.id}#${i} correct ungültig`));
  ok((l.quiz || []).length >= 1, "kein Quiz: " + l.id);
  ok((l.questions || []).length >= 1, "keine Verständnisfragen: " + l.id);
});
BIBLE.lessons.forEach(l => {
  ["intro", "context", "reading", "summary", "interp", "christ", "links", "fathers", "questions", "practice", "review"].forEach(f => ok(l[f], `Bibellektion ${l.id} ohne ${f}`));
  ok(l.questions.length >= 3 && l.questions.length <= 5, `Bibellektion ${l.id}: 3–5 Verständnisfragen`);
  ok(BIBLE.books.some(b => b[0] === l.book), "unbekanntes Buch " + l.book);
});
THEOLOGY.forEach(l => ok(COURSES.some(c => c.id === l.course), "unbekannter Kurs " + l.course));
ok(THEOLOGY.filter(l => l.course === "P").length >= 9, "Paisios-Kurs hat weniger als 9 Module");
ok(FATHERS.length === 10, "Kurs B: 10 Kirchenväter erwartet");

// 4b. Heilige in Kurs C: Fragen und Quiz
const sids = new Set();
SAINTS.forEach(s => {
  ok(!sids.has(s.id), "doppelte Heiligen-ID " + s.id); sids.add(s.id);
  ok(s.quiz && s.quiz.length >= 3, "Heiliger ohne 3 Quizfragen: " + s.id);
  ok(s.questions && s.questions.length >= 2, "Heiliger ohne 2 Verständnisfragen: " + s.id);
  (s.quiz || []).forEach((q, i) => ok(q.correct >= 0 && q.correct < q.options.length, `Quiz ${s.id}#${i} correct ungültig`));
});
ok(SAINTS.length >= 20, "mindestens 20 Heilige");
ok(CAL.saintsOn(Date.UTC(2026, 10, 24), "julian").includes("s-stefan"), "24.11. hl. Stefan Dečanski (julianisch)");
ok(CAL.feastsOn(Date.UTC(2026, 11, 19), "julian").some(f => f.saint === "s-nicholas"), "19.12. Nikoljdan mit Heiligenprofil");
CAL.SAINT_DAYS.forEach(([id]) => ok(FATHERS.some(f => f.id === id) || SAINTS.some(s => s.id === id), "Kalender: unbekannter Heiliger " + id));
CAL.CAL_FEASTS.forEach(f => { if (f.lesson) ok([...BIBLE.lessons, ...THEOLOGY].some(l => l.id === f.lesson), "Kalender: Lektion fehlt " + f.lesson); if (f.saint) ok(SAINTS.some(s => s.id === f.saint), "Kalender: Heiliger fehlt " + f.saint); });
FATHERS.forEach(f => {
  ok(f.quiz && f.quiz.length >= 3, "Kirchenvater ohne 3 Quizfragen: " + f.id);
  ok(f.questions && f.questions.length >= 2, "Kirchenvater ohne 2 Verständnisfragen: " + f.id);
  (f.quiz || []).forEach((q, i) => ok(q.correct >= 0 && q.correct < q.options.length, `Quiz ${f.id}#${i} correct ungültig`));
});

// 5. Links
[...FATHERS, ...SAINTS].forEach(p => (p.read || []).forEach(k => ok(LINKS[k], `Link ${k} fehlt (${p.id})`)));
BOOKS.forEach(b => { ok(!b.link || LINKS[b.link], "Buchlink fehlt " + b.id); ok(BOOK_CATEGORIES.some(c => c.id === b.cat), "Kategorie fehlt " + b.id); ok(!b.full || b.link, "Volltext ohne Link " + b.id); });
Object.values(LINKS).forEach(l => ok(/^https:\/\//.test(l.url), "kein https: " + l.url));

// 6. Transliteration
const tcases = [["Љубав", "Ljubav"], ["ЉУБАВ", "LJUBAV"], ["Његош", "Njegoš"], ["Ђорђе", "Đorđe"], ["џамија", "džamija"], ["Свети Сава", "Sveti Sava"], ["ћирилица", "ćirilica"], ["Џ", "Dž"]];
tcases.forEach(([a, b]) => ok(translit(a) === b, `translit(${a}) = ${translit(a)} ≠ ${b}`));
ok(/[А-Яа-яЂђЈјЉљЊњЋћЏџ]/.test(translit(UI.sr.welcomeText)) === false, "Lateinische Variante enthält noch Kyrillisch");

// 6b. Keine gemischten Schriften in einem Wort (z. B. lateinisches „a“ in kyrillischem Wort)
const mixed = JSON.stringify({ UI, BIBLE, THEOLOGY, CREED, FATHERS, SAINTS, BOOKS, GLOSSARY, EXTRA_CARDS }).replace(/\\[nrt"]/g, " ").match(/[\u0400-\u04FF]+[A-Za-z]+|[A-Za-z]+[\u0400-\u04FF]+/g);
ok(!mixed, "gemischte Schrift: " + (mixed || []).slice(0, 5).join(", "));
ok(BIBLE.lessons.length >= 62, "mindestens 62 Bibellektionen");

// 6c. Kirchenkalender
const iso = ms => new Date(ms).toISOString().slice(0, 10);
[[2024, "2024-05-05"], [2025, "2025-04-20"], [2026, "2026-04-12"], [2027, "2027-05-02"], [2028, "2028-04-16"], [2030, "2030-04-28"]]
  .forEach(([y, d]) => ok(iso(CAL.orthodoxPascha(y)) === d, `Ostern ${y}: ${iso(CAL.orthodoxPascha(y))} ≠ ${d}`));
ok(CAL.fastInfo(Date.UTC(2026, 3, 15)).kind === "free", "Lichte Woche 2026 fastenfrei");
ok(CAL.fastInfo(Date.UTC(2026, 2, 4)).kind === "lent", "4.3.2026 in der Großen Fastenzeit");
ok(CAL.fastInfo(Date.UTC(2026, 11, 1)).kind === "nativity", "1.12.2026 im Weihnachtsfasten");
ok(CAL.fastInfo(Date.UTC(2026, 7, 20)).kind === "dormition", "20.8.2026 im Entschlafungsfasten");
ok(CAL.fastInfo(Date.UTC(2026, 9, 28)).kind === "wedfri", "Mittwoch 28.10.2026 Fasttag");
ok(CAL.fastInfo(Date.UTC(2026, 9, 29)).kind === "none", "Donnerstag 29.10.2026 kein Fasttag");
ok(CAL.fastInfo(Date.UTC(2027, 0, 8)).kind === "free", "8.1.2027 fastenfrei (Weihnachtszeit)");
ok(CAL.feastsOn(Date.UTC(2027, 0, 7)).some(f => f.id === "nativity"), "7.1. Weihnachten");
ok(iso(CAL.feastsOfYear(2026, "revised").find(f => f.id === "nativity").t) === "2026-12-25", "neujulianisch: Weihnachten am 25.12.");
ok(iso(CAL.feastsOfYear(2027, "julian").find(f => f.id === "nativity").t) === "2027-01-07", "julianisch: Weihnachten am 7.1.");
ok(CAL.fastInfo(Date.UTC(2026, 10, 20), "revised").kind === "nativity", "neujulianisch: 20.11. im Weihnachtsfasten");
ok(CAL.fastInfo(Date.UTC(2026, 10, 20), "julian").kind !== "nativity", "julianisch: 20.11. noch kein Weihnachtsfasten");
ok(CAL.fastInfo(Date.UTC(2027, 0, 2), "revised").kind === "free", "neujulianisch: 2.1. fastenfrei");
ok(CAL.saintsOn(Date.UTC(2027, 0, 27), "julian").includes("s-sava"), "27.1. hl. Sava (julianisch)");
ok(CAL.saintsOn(Date.UTC(2027, 0, 14), "revised").includes("s-sava"), "14.1. hl. Sava (neujulianisch)");
ok(iso(CAL.feastsOfYear(2027).find(f => f.id === "forgiveness").t) === iso(CAL.orthodoxPascha(2027) - 49 * 86400000), "Sonntag der Vergebung = Ostern − 49");
CAL.CAL_FEASTS.forEach(f => ok(!f.mean || (f.mean.de && f.mean.sr), "Bedeutung unvollständig " + f.id));
Object.keys(CAL.CAL_FASTS).forEach(k => ok(CAL.CAL_FAST_RULES[k] && CAL.CAL_FAST_RULES[k].de && CAL.CAL_FAST_RULES[k].sr, "Fastenregel fehlt " + k));
ok(CAL.nextGreatFeast(Date.UTC(2026, 9, 31)).id === "entry", "nach 31.10.2026 nächstes großes Fest: Einführung in den Tempel");
CAL.CAL_FEASTS.forEach(f => ok(f.name.de && f.name.sr, "Festname fehlt " + f.id));
Object.entries(CAL.CAL_FASTS).forEach(([k, v]) => ok(v.de && v.sr, "Fastenname fehlt " + k));

// 6d. Gebete
Object.values(PRAYER_RULES).forEach(list => list.forEach(id => ok(id === "creed" || id === "ps50" || PRAYER_TEXTS[id], "Gebet fehlt: " + id)));
PRAYER_CATS.forEach(c => c.items.forEach(it => { const id = Array.isArray(it) ? it[0] : it; ok(id === "ps50" || PRAYER_TEXTS[id], "Kategorie " + c.id + ": Gebet fehlt " + id); if (Array.isArray(it)) ok(it[1] && it[2], "Kategorie-Hinweis unvollständig " + c.id); }));
Object.entries(PRAYER_TEXTS).forEach(([id, p]) => ok(!p.kind || ["bible", "suggest"].includes(p.kind), "unbekannte Gebetsart " + id));
const mixedP = JSON.stringify(PRAYER_TEXTS).replace(/\\[nrt"]/g, " ").match(/[\u0400-\u04FF]+[A-Za-z]+|[A-Za-z]+[\u0400-\u04FF]+/g);
ok(!mixedP, "gemischte Schrift in Gebeten: " + (mixedP || []).join(","));

// 6e. Jedes Bibelbuch hat Lektion oder Überblick
const withLesson = new Set(BIBLE.lessons.map(l => l.book));
BIBLE.books.forEach(b => ok(withLesson.has(b[0]) || OVERVIEWS.some(o => o.book === b[0]), "Buch ohne Lektion und Überblick: " + b[0]));
OVERVIEWS.forEach(o => {
  ok(BIBLE.books.some(b => b[0] === o.book), "Überblick für unbekanntes Buch " + o.book);
  ok(o.quiz.length >= 2 && o.keys.length >= 2, "Überblick unvollständig " + o.book);
  o.quiz.forEach((q, i) => ok(q.options.length >= 2, `Überblick-Quiz ${o.book}#${i}`));
});
const mixedO = JSON.stringify(OVERVIEWS).replace(/\\[nrt"]/g, " ").match(/[\u0400-\u04FF]+[A-Za-z]+|[A-Za-z]+[\u0400-\u04FF]+/g);
ok(!mixedO, "gemischte Schrift in Überblicken: " + (mixedO || []).join(","));

// 6f. Lesepläne
ok(NT_BOOKS.length === 27, "27 Bücher im Neuen Testament");
ok(NT_BOOKS.reduce((s, b) => s + b[2], 0) === 260, "260 Kapitel im Neuen Testament");
ok(PLANS.find(p => p.id === "gospels").days.length === 89, "Evangelienplan: 89 Lesungen");
ok(KATHISMATA.length === 20 && KATHISMATA[0][0] === 1 && KATHISMATA[19][1] === 150, "20 Kathismen, Psalm 1–150");
KATHISMATA.forEach((k, i) => { if (i) ok(k[0] === KATHISMATA[i - 1][1] + 1, "Kathismen lückenlos " + (i + 1)); });
walk({ PLANS, LITURGY_STEPS, LITURGY_PARTS, ICONS_LEX }, "plans");
ICONS_LEX.forEach(i => { ok(i.look && i.mean, "Ikone unvollständig " + i.id); if (i.lesson) ok([...BIBLE.lessons, ...THEOLOGY].some(l => l.id === i.lesson), "Ikone: Lektion fehlt " + i.lesson); });
ok(LITURGY_STEPS.length === 16 && LITURGY_STEPS.every(s => s.what && s.mean && s.do && LITURGY_PARTS[s.part]), "Liturgie: 16 vollständige Schritte");

// 7. Keine Inhalte aus ausgeschlossenen Quellen als Lehrgrundlage
const all = JSON.stringify({ BIBLE, THEOLOGY, FATHERS, SAINTS, BOOKS });
ok(!/Katechismus der Katholischen Kirche|Augsburger Bekenntnis|Heidelberger Katechismus|newadvent/i.test(all), "ausgeschlossene Quelle gefunden");

// Gebete vor/nach der Kommunion: jedes hat eine Herkunftsangabe
{ const P = require("../src/content/prayers.js"); const cat = P.PRAYER_CATS.find(c => c.id === "communion");
  ok(cat, "Kategorie Kommunion vorhanden");
  (cat ? cat.items : []).map(i => Array.isArray(i) ? i[0] : i).filter(id => P.PRAYER_TEXTS[id] && id !== "glorythee").forEach(id => ok(P.PRAYER_TEXTS[id].source && P.PRAYER_TEXTS[id].source.de && P.PRAYER_TEXTS[id].source.sr, "Gebet ohne Herkunft: " + id)); }
// Die zwölf großen Feste: vollständig, mit Kalendereintrag und gültigen Lektionen
{ const { GREAT_FEASTS } = require("../src/content/feasts.js");
  ok(GREAT_FEASTS.length === 12, "12 große Feste");
  GREAT_FEASTS.forEach(g => { ok(CAL.CAL_FEASTS.some(f => f.id === g.id && f.great), "Großes Fest nicht im Kalender: " + g.id);
    ["icon", "mean", "gospel", "epistle"].forEach(k => ok(g[k] && g[k].de && g[k].sr, `Fest ${g.id} ohne ${k}`));
    g.lessons.forEach(l => ok([...BIBLE.lessons, ...THEOLOGY].some(x => x.id === l), "Fest verweist auf fehlende Lektion " + l)); });
  walk({ GREAT_FEASTS }, "feasts"); }
// Werkzeuge für die serbische Prüfung: Export erzeugt Zeilen, Probelauf ohne Korrekturen ändert nichts
{ const cp = require("child_process"), os = require("os"), pth = require("path"); const tmp = pth.join(os.tmpdir(), "op-sr-test.csv");
  const out = cp.execFileSync("node", [pth.join(__dirname, "../tools/sr-export.js"), tmp]).toString();
  ok(/\d{4,} serbische Texte/.test(out), "Serbisch-Export erzeugt Tabelle");
  const dry = cp.execFileSync("node", [pth.join(__dirname, "../tools/sr-import.js"), tmp, "--dry"]).toString();
  ok(dry.startsWith("0 Korrekturen"), "Serbisch-Import ohne Korrekturen ändert nichts"); }

console.log(`\n${checks} Prüfungen, ${fails} Fehler.`);
if (warnings.length) { console.log(`\nHinweise – lateinische Zeichen in serbischen Texten (${warnings.length}), bitte prüfen:`); warnings.forEach(w => console.log("  " + w)); }
process.exit(fails ? 1 : 0);
