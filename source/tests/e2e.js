/* Ende-zu-Ende-Test im simulierten iPhone-Viewport (Chromium, nicht echtes Safari).
   Aufruf: node tests/e2e.js [pfad/zu/index.html] */
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");
const file = "file://" + path.resolve(process.argv[2] || path.join(__dirname, "../dist/index.html"));
const shots = path.join(__dirname, "shots"); fs.mkdirSync(shots, { recursive: true });

let fails = 0, checks = 0;
const ok = (c, m) => { checks++; if (!c) { fails++; console.log("FAIL:", m); } else console.log("ok  ", m); };

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ acceptDownloads: true,
    viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1"
  });
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort()); // offline-artig testen
  const page = await ctx.newPage();
  const errors = [], missing = [];
  page.on("pageerror", e => errors.push(e.message));
  page.on("console", m => { if (m.text().includes("missing ui key")) missing.push(m.text()); if (m.type() === "error" && !m.text().includes("net::")) errors.push(m.text()); });

  await page.goto(file);
  // Onboarding
  ok(await page.locator("text=Српски (ћирилица)").isVisible(), "Sprachauswahl beim ersten Start sichtbar");
  await page.click("[data-lang=de]");
  ok(await page.locator("text=Diese App ersetzt keinen Priester").first().isVisible(), "Hinweis: ersetzt keinen Priester");
  await page.click("#onbstart");
  ok(await page.locator("text=Heutige Lektion").isVisible(), "Startseite mit heutiger Lektion");
  await page.screenshot({ path: path.join(shots, "de-home.png") });

  const routes = ["home", "liturgy", "icons", "plans", "plan-gospels", "plan-psalter", "calendar", "prayers", "prayercat-fear", "prayercat-departed", "prayercat-meal", "prayercat-communion", "prayercat-confession", "book-gal", "book-macc", "book-mk", "book-dan", "quiz-ov-dan", "bible", "theology", "course-A", "course-P", "course-D", "course-L", "course-M", "lesson-my-baptism", "lesson-my-eucharist", "lesson-my-unction", "quiz-my-marriage", "lesson-li-liturgy", "lesson-li-feasts", "lesson-li-fasting", "lesson-li-calendar", "lesson-li-slava", "lesson-bib-mk1", "lesson-bib-jn1", "lesson-bib-mt6", "lesson-bib-lk1", "lesson-bib-lk24", "lesson-bib-jn20", "lesson-bib-gen1", "lesson-bib-gen3", "quiz-bib-gen3", "lesson-bib-ex12", "lesson-bib-isa53", "lesson-bib-jn19", "lesson-bib-acts2", "lesson-bib-acts9", "lesson-bib-rom6", "lesson-bib-1cor13", "lesson-bib-ps22", "lesson-bib-rev21", "lesson-bib-jon", "lesson-bib-dan3", "lesson-bib-job", "lesson-bib-heb11", "lesson-bib-jas", "lesson-bib-phil2", "lesson-bib-gal5", "lesson-bib-elijah", "lesson-bib-ezek37", "lesson-bib-macc7", "quiz-bib-macc7", "lesson-bib-eph6", "lesson-bib-thess4", "lesson-bib-prov9", "quiz-bib-prov9", "lesson-bib-col3", "lesson-bib-deut6", "quiz-bib-deut6", "lesson-bib-gen22", "lesson-bib-ex3", "quiz-bib-ex3", "lesson-bib-jer31", "lesson-bib-tob", "quiz-bib-tob", "lesson-bib-sir2", "lesson-bib-wis3", "quiz-bib-wis3", "lesson-bib-josh3", "lesson-bib-1tim2", "lesson-bib-lev19", "quiz-bib-lev19", "book-past", "lesson-bib-num21", "lesson-bib-2chr6", "lesson-bib-neh8", "lesson-bib-bar3", "lesson-bib-esd4", "quiz-bib-esd4", "book-esd", "book-num", "lesson-bib-mt25", "lesson-bib-jn6", "lesson-bib-rom8", "lesson-bib-isa6", "quiz-bib-isa6", "lesson-bib-acts15", "lesson-bib-ps103", "lesson-bib-lk10", "lesson-bib-jn17", "quiz-bib-jn17", "lesson-bib-lk2", "lesson-bib-mt16", "lesson-bib-heb4", "lesson-bib-gen28", "lesson-bib-ex20", "quiz-bib-ex20", "book-tob", "glossary", "book-eph", "book-prov", "book-job", "quiz-bib-rev21", "lesson-th-trinity", "lesson-pa-life", "lesson-dg-creed", "creed", "saints", "person-f-athanasius", "person-s-paisios", "person-s-sava", "person-s-simeon", "person-s-vasilije", "person-s-justin", "person-s-maryegypt", "person-s-luke", "person-s-nicholas", "person-s-george", "person-s-demetrios", "person-s-petka", "person-s-stefan", "person-s-andrew", "person-s-spyridon", "person-s-catherine", "person-s-prokopije", "person-s-antony", "person-s-arsenije", "person-s-ignatius", "person-s-rila", "quiz-s-ignatius", "quiz-s-antony", "quiz-s-prokopije", "lesson-li-three", "quiz-li-three", "quiz-s-stefan", "quiz-s-petka", "quiz-s-luke", "quiz-s-paisios", "quiz-s-justin", "quiz-f-maximus", "quiz-f-chrysostom", "books", "cards", "review", "progress", "notes", "glossary", "ask", "prefs", "more", "quiz-bib-mk1"];
  for (const lang of ["de", "sr-cyr", "sr-lat"]) {
    await page.evaluate(l => { const s = JSON.parse(localStorage.getItem("orthodoxpath_v1")); s.lang = l; localStorage.setItem("orthodoxpath_v1", JSON.stringify(s)); }, lang);
    await page.reload();
    for (const r of routes) {
      await page.evaluate(h => { location.hash = h; }, r);
      await page.waitForTimeout(40);
      const info = await page.evaluate(() => ({
        text: document.body.innerText, overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        err: !!document.querySelector(".card") && document.body.innerText.includes("Ein Fehler ist aufgetreten")
      }));
      if (info.overflow) ok(false, `${lang} #${r}: horizontales Überlaufen`);
      if (info.err) ok(false, `${lang} #${r}: Fehleranzeige`);
      if (lang === "sr-lat") {
        const cyr = info.text.replace(/Српски \(ћирилица\)|Ћирилица|СР·Ћ/g, "").match(/[А-Яа-яЂђЈјЉљЊњЋћЏџ]+/g);
        if (cyr) ok(false, `${lang} #${r}: kyrillische Reste in Latinica: ${cyr.slice(0, 5).join(" ")}`);
      }
      if (lang === "sr-cyr") {
        const germanWords = info.text.match(/\b(und|der|die|das|Lektion|Zurück|Einstellungen|Heilige)\b/g);
        if (germanWords) ok(false, `${lang} #${r}: deutsche Wörter in Serbisch: ${germanWords.slice(0, 5).join(" ")}`);
      }
    }
    ok(true, `${lang}: ${routes.length} Ansichten gerendert`);
    await page.evaluate(() => { location.hash = "lesson-bib-mk1"; });
    await page.waitForTimeout(50);
    await page.screenshot({ path: path.join(shots, `${lang}-lesson.png`) });
  }
  ok(missing.length === 0, "keine fehlenden Übersetzungsschlüssel " + (missing[0] || ""));

  // zurück auf Deutsch für Funktionstests
  await page.evaluate(() => { const s = JSON.parse(localStorage.getItem("orthodoxpath_v1")); s.lang = "de"; localStorage.setItem("orthodoxpath_v1", JSON.stringify(s)); location.hash = "lesson-bib-mk1"; });
  await page.reload();
  await page.click("#donebtn");
  ok(await page.evaluate(() => !!window.__OP.state.done["bib-mk1"]), "Lektion als abgeschlossen markiert");
  // Verständnisfrage
  await page.locator("[data-toggle-answer]").first().click();
  ok(await page.locator(".answer").first().isVisible(), "Musterantwort einblendbar");
  // Bibelstelle speichern
  await page.locator("[data-verse]").first().click();
  ok(await page.evaluate(() => window.__OP.state.verses.length === 1), "Bibelstelle gespeichert");

  // Quiz komplett durchspielen
  await page.evaluate(() => { location.hash = "quiz-bib-mk1"; });
  for (let i = 0; i < 4; i++) { await page.locator("[data-opt]").first().click(); await page.click("#qznext"); }
  ok(await page.locator("text=Ergebnis").isVisible(), "Quiz-Ergebnis angezeigt");
  ok(await page.evaluate(() => window.__OP.state.quiz["bib-mk1"].total === 4), "Quiz-Ergebnis gespeichert");

  // Heiligen-Quiz durchspielen
  await page.evaluate(() => { location.hash = "quiz-s-justin"; });
  for (let i = 0; i < 3; i++) { await page.locator("[data-opt]").first().click(); await page.click("#qznext"); }
  ok(await page.evaluate(() => window.__OP.state.quiz["s-justin"] && window.__OP.state.quiz["s-justin"].total === 3), "Heiligen-Quiz gespeichert");
  await page.click("text=Zurück");
  ok(await page.locator("text=Hl. Justin von Ćelije").first().isVisible(), "Zurück vom Heiligen-Quiz führt zum Profil");

  // Gebetsbuch: Favorit und Gebetsanliegen
  await page.evaluate(() => { location.hash = "prayercat-fear"; });
  await page.locator("[data-pfav]").first().click();
  ok(await page.evaluate(() => window.__OP.state.prayerFavs.length === 1), "Gebet als Favorit gespeichert");
  await page.evaluate(() => { location.hash = "prayers"; });
  await page.click("[data-ptab=mine]");
  await page.fill("#intent", "Für meine Familie");
  await page.click("#intentform button[type=submit]");
  ok(await page.evaluate(() => window.__OP.state.intentions.length === 1 && window.__OP.state.intentions[0].text === "Für meine Familie"), "Gebetsanliegen hinzugefügt");
  await page.click("[data-idone]");
  ok(await page.evaluate(() => window.__OP.state.intentions[0].done === true), "Gebetsanliegen als erledigt markiert");
  ok(await page.locator("text=Gespeicherte Gebete").isVisible(), "Mein Gebetsbuch zeigt gespeicherte Gebete");

  // Startseite: Heute gebetet, Wochenübersicht
  await page.evaluate(() => { location.hash = "home"; });
  await page.click("#prayedbtn");
  ok(await page.evaluate(() => window.__OP.state.prayed.length === 1), "„Heute gebetet“ vermerkt");
  ok(await page.locator(".wd.on").count() >= 1, "Wochenübersicht zeigt aktiven Tag");
  // Kalender umschalten
  await page.evaluate(() => { location.hash = "calendar"; });
  await page.click("[data-cal=revised]");
  ok(await page.evaluate(() => window.__OP.state.calendar === "revised"), "Kalender auf neujulianisch umgeschaltet");
  await page.click("[data-cal=julian]");
  // Fragenhilfe: Hinweis auf den Priester
  await page.evaluate(() => { location.hash = "ask"; });
  await page.fill("#q", "Wie bereite ich mich auf die Beichte vor?");
  await page.click("#askform button[type=submit]");
  ok(await page.locator("text=orthodoxen Priester").first().isVisible(), "Fragenhilfe verweist auf den Priester");

  // Leseplan
  await page.evaluate(() => { location.hash = "plan-gospels"; });
  await page.locator(".hero [data-day]").click();
  ok(await page.evaluate(() => window.__OP.state.plans.gospels.done.length === 1), "Leseplan: Lesung als gelesen markiert");
  ok(await page.locator("text=Matthäus 2").first().isVisible(), "Leseplan zeigt nächste Lesung");

  // Lernkarten
  await page.evaluate(() => { location.hash = "cards"; });
  await page.click("#startrev");
  await page.click("#flipbtn");
  await page.screenshot({ path: path.join(shots, "de-card.png") });
  await page.click("[data-rate='2']");
  await page.click("#flipbtn"); await page.click("[data-rate='0']");
  const st = await page.evaluate(() => window.__OP.state.cards);
  const vals = Object.values(st);
  ok(vals.length === 2, "zwei Karten bewertet");
  ok(vals.some(v => v.int === 1 && v.reps === 1), "„Gut“ plant Wiederholung in 1 Tag");
  ok(vals.some(v => v.lapses === 1), "„Nochmal“ zählt Fehler");

  // Notiz anlegen, verschlüsseln, sperren, entsperren
  await page.evaluate(() => { location.hash = "notes"; });
  await page.click("[data-newnote]");
  await page.fill("#nt", "Testnotiz"); await page.fill("#nb", "Geheimer Inhalt"); await page.click("#nsave");
  ok(await page.locator("text=Geheimer Inhalt").isVisible(), "Notiz gespeichert und angezeigt");
  await page.evaluate(() => { try { Object.defineProperty(navigator, "share", { value: undefined, configurable: true }); Object.defineProperty(navigator, "clipboard", { value: { writeText: () => Promise.reject(new Error("x")) }, configurable: true }); } catch (e) {} });
  await page.click("#notesexp"); await page.waitForTimeout(150);
  const exp = await page.inputValue("#expbox");
  ok(exp.includes("Testnotiz") && exp.includes("Geheimer Inhalt"), "Notizen-Export liefert Text");
  await page.evaluate(() => { location.hash = "prefs"; });
  await page.fill("#p1", "test123"); await page.fill("#p2", "test123"); await page.click("#encon");
  await page.waitForTimeout(800);
  const raw = await page.evaluate(() => localStorage.getItem("orthodoxpath_v1"));
  ok(!raw.includes("Geheimer Inhalt") && raw.includes('"ct"'), "Notizen verschlüsselt gespeichert (kein Klartext)");
  await page.reload();
  await page.evaluate(() => { location.hash = "notes"; });
  ok(await page.locator("#unlock").isVisible(), "Notizbuch nach Neuladen gesperrt");
  await page.fill("#pw", "falsch"); await page.click("#unlock"); await page.waitForTimeout(800);
  ok(await page.locator("text=Falsches Passwort").isVisible(), "falsches Passwort abgelehnt");
  await page.fill("#pw", "test123"); await page.click("#unlock"); await page.waitForTimeout(800);
  ok(await page.locator("text=Geheimer Inhalt").isVisible(), "mit richtigem Passwort entsperrt");

  // Fortschritt bleibt nach Neuladen erhalten
  await page.reload();
  const s2 = await page.evaluate(() => window.__OP.state);
  ok(s2.done["bib-mk1"] && s2.quiz["bib-mk1"] && Object.keys(s2.cards).length === 2, "Fortschritt nach Neuladen erhalten");
  ok(s2.activity.length === 1, "Lernserie: heutiger Tag erfasst");

  // Suche (keine KI)
  const res1 = await page.evaluate(() => window.__OP.runSearch("Theosis"));
  ok(res1.includes("#lesson-th-theosis"), "Suche „Theosis“ findet Lektion");
  const res2 = await page.evaluate(() => window.__OP.runSearch("исповест"));
  ok(res2.some(h => h.includes("th-repentance") || h.includes("pa-confession")), "Suche kyrillisch „исповест“ findet Beichte");
  const res3 = await page.evaluate(() => window.__OP.runSearch("obozenje"));
  ok(res3.length > 0, "Suche lateinisch ohne Diakritika „obozenje“ findet Treffer");
  // Lektionsnavigation und „Zuletzt geöffnet“
  await page.evaluate(() => { location.hash = "lesson-bib-jn1"; }); await page.waitForTimeout(250);
  const nav = await page.$$eval(".lnav a", as => as.map(a => a.getAttribute("href")));
  ok(nav.length === 2 && nav.every(h => h.startsWith("#lesson-bib-")), "Lektion hat Vor-/Zurück-Navigation");
  await page.evaluate(() => { location.hash = "home"; }); await page.waitForTimeout(250);
  ok(await page.$('a.item[href="#lesson-bib-jn1"]') !== null, "Startseite zeigt „Zuletzt geöffnet“");
  await page.evaluate(() => { location.hash = "prefs"; }); await page.waitForTimeout(250);
  ok(await page.$("#copylink") !== null, "Anleitung für Gebetserinnerungen vorhanden");
  // Bibliothek-Suche
  await page.evaluate(() => { location.hash = "books"; }); await page.waitForTimeout(250);
  const b0 = await page.$$eval(".bookcard:not([hidden])", e => e.length);
  await page.fill("#bookq", "eusebius"); await page.waitForTimeout(150);
  const b1 = await page.$$eval(".bookcard:not([hidden])", e => e.length);
  ok(b0 > 20 && b1 >= 1 && b1 < b0, "Bibliothek-Suche filtert (" + b0 + " → " + b1 + ")");
  // Bibelschule: Anordnung nach Büchern
  await page.evaluate(() => { location.hash = "bible"; }); await page.waitForTimeout(200);
  await page.click('[data-bview="books"]'); await page.waitForTimeout(200);
  const grouped = await page.$$eval("main .sh", e => e.length);
  const nLess = await page.$$eval('main a.item[href^="#lesson-bib-"]', e => e.length);
  ok(grouped >= 8 && nLess >= 53, "Bibelschule nach Büchern gruppiert (" + grouped + " Gruppen, " + nLess + " Lektionen)");
  await page.click('[data-bview="path"]'); await page.waitForTimeout(150);
  // Kalender: Monatsübersicht, Tag wählen, Kalenderdatei
  await page.evaluate(() => { location.hash = "calendar"; }); await page.waitForTimeout(250);
  const cells = await page.$$eval(".mc[data-day]", e => e.length);
  ok(cells >= 28 && cells <= 31, "Monatsübersicht zeigt " + cells + " Tage");
  await page.click('[data-mnav="1"]'); await page.waitForTimeout(150);
  const cells2 = await page.$$eval(".mc[data-day]", e => e.length);
  ok(cells2 >= 28, "Monat weiterblättern");
  await page.click(".mc[data-day]"); await page.waitForTimeout(150);
  ok(await page.$(".mdetail") !== null, "Tagesdetails nach Antippen");
  const ics = await page.evaluate(() => window.__OP.icsFor([{ id: "test", t: Date.UTC(2027, 0, 7), name: { de: "Christi Geburt, Test; ok", sr: "Рождество" }, mean: { de: "Zeile\nzwei", sr: "x" } }]));
  ok(ics.startsWith("BEGIN:VCALENDAR") && ics.includes("DTSTART;VALUE=DATE:20270107") && ics.includes("DTEND;VALUE=DATE:20270108") && ics.includes("Christi Geburt\\, Test\\; ok") && ics.includes("\r\n"), "Kalenderdatei (.ics) korrekt aufgebaut");
  const [icsDl] = await Promise.all([page.waitForEvent("download"), page.click("#icsall")]);
  ok(/\.ics$/.test(icsDl.suggestedFilename()), "Alle Feste als .ics herunterladbar");
  // Glossar-Filter
  await page.evaluate(() => { location.hash = "glossary"; }); await page.waitForTimeout(250);
  const before = await page.$$eval(".glo:not([hidden])", e => e.length);
  await page.fill("#glossq", "ikonostas"); await page.waitForTimeout(150);
  const after = await page.$$eval(".glo:not([hidden])", e => e.length);
  ok(before > 10 && after >= 1 && after < before, "Glossar-Suche filtert (" + before + " → " + after + ")");

  // Einstellungen: heller Modus, Schriftgröße
  await page.evaluate(() => { location.hash = "prefs"; });
  await page.click("[data-seg=theme] [data-v=light]");
  ok(await page.evaluate(() => document.documentElement.dataset.theme === "light"), "heller Modus aktiv");
  await page.click("[data-seg=font] [data-v='1.3']");
  ok(await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue("--fs").trim() === "1.3"), "Schriftgröße änderbar");
  await page.evaluate(() => { location.hash = "home"; });
  await page.screenshot({ path: path.join(shots, "de-home-light.png") });

  // Sprachumschaltung über Kopfzeile
  await page.click("#langbtn"); await page.click(".sheet [data-lang='sr-lat']");
  ok(await page.locator("text=Današnja lekcija").isVisible(), "Sprachwechsel über Kopfzeile (Latinica)");

  // Sicherheit: HTML in Notizen wird nicht ausgeführt
  await page.click("#langbtn"); await page.click(".sheet [data-lang='de']");
  await page.evaluate(() => { location.hash = "prefs"; }); await page.waitForTimeout(200);
  if (await page.$("#encoff")) { await page.click("#encoff"); await page.waitForTimeout(200); }
  await page.evaluate(() => { location.hash = "notes"; }); await page.waitForTimeout(200);
  if (await page.$("#unlock")) { await page.fill("#pw", "test123"); await page.click("#unlock"); await page.waitForTimeout(400); }
  await page.click("[data-newnote]"); await page.fill("#nt", "XSS"); await page.fill("#nb", '<img src=x onerror="window.__xss=1">'); await page.click("#nsave"); await page.waitForTimeout(300);
  ok(await page.evaluate(() => window.__xss === undefined), "HTML in Notizen wird nicht ausgeführt");
  ok(require("fs").readFileSync(require("path").join(__dirname, "../pwa/index.html"), "utf8").includes('http-equiv="Content-Security-Policy"'), "Content-Security-Policy in der PWA gesetzt");

  // Datensicherung als Datei: speichern → zurücksetzen → laden
  await page.evaluate(() => { location.hash = "prefs"; }); await page.waitForTimeout(250);
  const [dl] = await Promise.all([page.waitForEvent("download"), page.click("#fileb")]);
  const fpath = "/tmp/op-backup-test.json"; await dl.saveAs(fpath);
  const doneBefore = Object.keys((await page.evaluate(() => window.__OP.state)).done).length;
  ok((await page.evaluate(() => window.__OP.state)).lastBackup, "Datum der letzten Sicherung gespeichert");
  await page.evaluate(() => { localStorage.setItem("orthodoxpath_v1", JSON.stringify({ lang: "de", onboarded: true })); });
  await page.reload(); await page.evaluate(() => { location.hash = "prefs"; }); await page.waitForTimeout(300);
  await page.setInputFiles("#importfile", fpath); await page.waitForTimeout(400);
  const st2 = await page.evaluate(() => window.__OP.state);
  ok(Object.keys(st2.done).length === doneBefore && doneBefore > 0, "Sicherung aus Datei wiederhergestellt (" + doneBefore + " Lektionen)");
  await page.evaluate(() => { const f = new File(['{"app":"OrthodoxPath","data":{"done":"kaputt","lang":"de","onboarded":true}}'], "x.json"); const dt = new DataTransfer(); dt.items.add(f); const i = document.getElementById("importfile"); i.files = dt.files; i.dispatchEvent(new Event("change")); });
  await page.waitForTimeout(300);
  ok(typeof (await page.evaluate(() => window.__OP.state)).done === "object", "Beschädigte Sicherung wird abgefangen");

  ok(errors.length === 0, "keine JavaScript-Fehler " + (errors[0] || ""));
  await browser.close();
  console.log(`\n${checks} Prüfungen, ${fails} Fehler.`);
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
