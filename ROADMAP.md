# OrthodoxPath – Roadmap

Stand 1. November 2026 · Basis: Version 3.0.0. Aufwand: S = bis 1 Sitzungsabschnitt, M = 1 Sitzung, L = mehrere Sitzungen.
Regel für jede Aufgabe: Tests grün (`content.test.js`, `e2e.js`, `pwa-offline.js`), `PROJECT_STATUS.md` + `PROJECT_PROGRESS.md` aktualisiert, veröffentlicht (GitHub + Artefakt).

## Produktvision (konkretisiert)
Ein ruhiger, verlässlicher täglicher Begleiter für orthodoxe Christen und Suchende im deutsch-serbischen Raum: **beten – das Kirchenjahr mitleben – die Schrift und den Glauben verstehen**. Keine Wellness-App, keine Gamification mit Druck, keine KI, die theologisch spricht. Jede Aussage ist gekennzeichnet (Lehre / Geschichte / Meinung / Rat / unsicher); bei persönlichen geistlichen Fragen verweist die App auf den Priester.

---

## Priorität 1 – Fundament

**P1-01 Quellcode sichern** ✅ erledigt 1.11.2026 (Abhängigkeit: keine · Aufwand S)
- Ziel: Quellcode, Tests und Projektdokumente dauerhaft im GitHub-Repo.
- Umsetzung: `src/`, `tests/`, `build.js`, die 4 Planungsdokumente in einen Ordner `source/` des Repos (GitHub Pages liefert weiterhin `index.html` im Hauptverzeichnis aus). Backups (`.tgz`) nicht ins Repo.
- Test: frischer Klon → `node build.js` → Tests grün.
- Fertig, wenn: Klon allein reicht, um die App identisch zu bauen.

**P1-02 Sicherheits-Grundlagen** ✅ erledigt 1.11.2026 (P1-01 · S)
- Ziel: Schutz gegen eingeschleusten Code.
- Umsetzung: `<meta http-equiv="Content-Security-Policy">` in `build.js` (nur eigene Skripte/Stile inline erlaubt, `connect-src 'self'`); Prüfung aller `innerHTML`-Stellen auf `esc()`; externe Links mit `rel="noopener"` (bereits vorhanden – verifizieren).
- Test: e2e ohne Konsolenfehler; manueller Test mit Notiz `<img onerror>` zeigt Text statt Ausführung.
- Fertig, wenn: CSP aktiv, keine Verstöße in allen Routen.

**P1-03 Datensicherheit für Nutzer** ✅ erledigt 1.11.2026 (P1-01 · M)
- Ziel: Kein unbemerkter Verlust von Notizen/Fortschritt.
- Umsetzung: (a) Hinweis „Zum Home-Bildschirm hinzufügen“ beim ersten Start in Safari (nicht installiert); (b) Sicherung als Datei teilen (`navigator.share` mit Datei bzw. Download `.json`) und Datei-Import; (c) `navigator.storage.persist()` anfragen, wo verfügbar; (d) dezente Erinnerung an Sicherung alle 30 Tage (abschaltbar).
- Dateien: `src/app.js` (viewPrefs, bindPrefs, viewHome), `src/i18n.js`.
- Test: e2e Export → Reset → Import stellt Zustand wieder her.
- Fertig, wenn: Rundlauf-Test grün, Hinweise in DE/SR.

**P1-04 Muttersprachliche Prüfung Serbisch vorbereiten** ✅ Werkzeuge erledigt 3.11.2026 (`tools/sr-export.js`, `tools/sr-import.js`); Prüfung durch Menschen offen (keine · S)
- Ziel: Prüfer (Priester/Muttersprachler) kann effizient korrigieren.
- Umsetzung: Skript erzeugt eine Liste aller serbischen Texte (Datei, Schlüssel, Text) als `.csv`/Tabelle zum Download; Rückweg: korrigierte Tabelle → Skript spielt Änderungen ein.
- Test: Rundlauf ohne Änderung erzeugt identische Dateien.
- Fertig, wenn: Export und Import funktionieren; Prüfung selbst ist Aufgabe des Nutzers.

**P1-05 Testplan für echtes iPhone** ✅ erledigt 1.11.2026 – `TESTPLAN_IPHONE.md`; Durchführung durch den Nutzer offen (keine · S)
- Ziel: Nutzer kann in 10 Minuten die wichtigsten Abläufe prüfen.
- Umsetzung: Checkliste (Installation, Offline, Sprache, Kalender, Notiz verschlüsselt, Sicherung) als Seite in der App oder Dokument.
- Fertig, wenn: Checkliste vorhanden; Rückmeldungen werden als Fehler-Aufgaben erfasst.

## Priorität 2 – Zentrale Produktfunktionen

**P2-01 Tagesansicht „Heute“ schärfen** ✅ erledigt 3.11.2026 (P1 · M)
- Ziel: Startseite beantwortet in 5 Sekunden: Welcher Tag im Kirchenjahr? Fasten? Was bete/lese ich heute?
- Umsetzung: kompakter Tageskopf (Fest/Heilige/Fasten), passender Gebetsvorschlag (Morgen/Abend nach Uhrzeit), nächste Lesung aus aktivem Leseplan, nächste Lektion. Vorhandene Komponenten wiederverwenden (calCard, weekCard, plans).
- Test: e2e Home zeigt alle Blöcke; Kalenderdaten gegen Tests.
- Fertig, wenn: keine doppelte Information, alles mit einem Tipp erreichbar.

**P2-02 Bibelschule nach Kanon ordnen** ✅ erledigt 3.11.2026 (keine · S)
- Ziel: Lektionen in Buchreihenfolge oder als Lernweg wählbar.
- Umsetzung: Umschalter „Lernweg / Nach Büchern“ in `viewBible`; `order` bleibt für den Lernweg.
- Test: e2e beide Ansichten; alle 53 Lektionen erreichbar.

**P2-03 Gebetsbuch vervollständigen** 🟡 Teil 1 erledigt 4.11.2026 – Kategorien „Vor und nach der Kommunion“ (5 neue Texte aus der Göttlichen Liturgie bzw. Lk 2) und „Vor der Beichte“, Feld `source` mit Anzeige und Test. Offen: vollständige „Ordnung vor der Kommunion“ und Dankgebete (längere Texte) nur mit gemeinfreier Vorlage (CONTENT_SOURCES · M–L)
- Ziel: Gebete vor/nach der Kommunion, Gebet vor der Beichte, Trisagion-Gebete vollständig – nur mit geprüftem Wortlaut.
- Umsetzung: Texte aus gemeinfreien oder freigegebenen Quellen (siehe CONTENT_SOURCES), deutsche Übertragungen klar als „Arbeitsübersetzung“ gekennzeichnet; Feld `source` pro Gebet ergänzen und anzeigen.
- Test: Content-Test erzwingt `source` für neue Gebete.
- Fertig, wenn: jedes Gebet hat Quelle und Kennzeichnung.

**P2-04 Kalender-Erweiterungen** ✅ erledigt 4.11.2026 – Monatsübersicht mit Fastenpunkten/Festen/Tagesdetails, .ics-Export (einzeln und 12 Monate); Import in den iPhone-Kalender durch Nutzer zu prüfen (keine · M)
- Ziel: Fastenkalender als Monatsübersicht; Export eines Festes in den iPhone-Kalender (`.ics`-Datei).
- Umsetzung: Monatsraster aus `fastInfo`/`feastsOn`; ICS-Erzeugung lokal.
- Test: Unit-Tests für 2 Jahre × 2 Kalender; e2e Monatswechsel.

**P2-05 Barrierefreiheit** ✅ erledigt 3.11.2026 – axe-core: 0 Verstöße WCAG 2 A/AA in 18 Ansichten × 2 Themen; echter VoiceOver-Test durch Nutzer offen (keine · M)
- Ziel: Bedienbar mit VoiceOver und großer Schrift.
- Umsetzung: Kontrastmessung (beide Themen), `aria-label` an allen Symbol-Knöpfen, Fokus-Reihenfolge in Dialogen, Überschriften-Hierarchie.
- Test: automatisierte Kontrastprüfung im e2e; axe-core lokal.
- Fertig, wenn: keine kritischen axe-Befunde.

**P2-06 Performance-Budget** ✅ gemessen 3.11.2026 – kein Umbau nötig: 1,44 MB (gzip ≈ 0,50 MB), erster Bildschirm ≈ 1,5 s bei 4× gedrosselter CPU und ungezipter Übertragung, Seitenwechsel ≈ 0,1 s; erneut prüfen, wenn die Datei 2 MB übersteigt (P1-01 · S–M)
- Ziel: Erster Start < 2 s auf Mobilfunk, App-Datei unter Kontrolle.
- Umsetzung: Messung; falls > 1,6 MB: Inhalte (Lektionen) in separate, vom Service Worker zwischengespeicherte JSON-Datei; Schrift-Teilmengen prüfen.
- Test: Lighthouse lokal (Performance ≥ 90), Offline-Test.

## Priorität 3 – Geistliche Inhalte und Vertiefung

**P3-01 Weitere Bibellektionen** (S je Lektion): ✅ Apg 15, Ps 103 (104), Lk 10, Joh 17, Lk 2, Mt 16, Hebr 4–5, Gen 28, Ex 20 (4.11.2026). Weitere Kandidaten: Lk 19 (Zachäus), Joh 9 (Blindgeborener), Joh 4 (Samariterin), Mt 14 (Gang auf dem Wasser), 1 Kor 15, Offb 4–5. Je Lektion: Fakten/Lesungen geprüft, Kennzeichnung, Quiz, Lernkarten, e2e-Route.
**P3-02 Kurs „Mysterien (Sakramente)“** ✅ erledigt 4.11.2026 (Kurs F, 7 Lektionen) (M): Taufe, Myronsalbung, Eucharistie, Beichte, Ehe, Priesterweihe, Krankensalbung – je Modul Lehre/Praxis/Hinweis auf Priester.
**P3-03 Fastenwissen** ✅ erledigt 5.11.2026 – Lektion „Fasten im Alltag“ (Kurs E) (S–M): Sinn des Fastens, Ausnahmen (Krankheit, Schwangerschaft, Arbeit) nur als allgemeiner Hinweis + Priester; keine Ernährungspläne.
**P3-04 Kirchenjahr-Begleiter** ✅ erledigt 4.11.2026 (ohne Troparien – nur mit geprüfter Quelle nachtragen) (M): zu den 12 großen Festen je eine Seite (Ikone in Worten, Troparion nur mit geprüfter Quelle, Lesungen, Bedeutung) – verknüpft mit Kalender.
**P3-05 Heilige** – pausiert auf Wunsch des Nutzers.

## Priorität 4 – Langfristig (nur wenn zur Vision passend)

**P4-01 Weitere Sprachen** (L): Struktur erlaubt weitere Sprachen über `i18n.js` + Inhaltsfelder; Voraussetzung: Prüfer für die Sprache.
**P4-02 Optionale Synchronisation zwischen Geräten** (L): nur Ende-zu-Ende-verschlüsselt und ohne Pflichtkonto; erfordert Server → Kosten/Datenschutz prüfen. Derzeit **nicht empfohlen**.
**P4-03 KI-Hilfe** (L): nur wenn kostenfrei/vertretbar, ausschließlich auf geprüfte App-Inhalte gestützt, jede Antwort mit Kennzeichnung „KI-Hilfestellung, keine kirchliche Lehre“ und Priester-Hinweis. Derzeit **zurückgestellt**.
**P4-04 Monetarisierung**: Die App ist als kostenloses Angebot gedacht. Falls gewünscht: freiwillige Spende (Link), keine Werbung, keine Bezahlschranke für Glaubensinhalte.
**P4-05 Native App (App Store)** (L): nur bei Bedarf (z. B. echte Benachrichtigungen); erfordert Apple-Entwicklerkonto (Kosten) und Computer mit Xcode.

---

## Stand 5.11.2026 – offene Punkte
- P2-03 Teil 2: ausführliche Kommunion-Ordnung und Dankgebete, Troparien der Feste – nur mit gemeinfreier/freigegebener Vorlage (Quellensuche braucht Freigabe für Web-Abruf).
- P3-01 laufend: weitere Bibellektionen (Kandidaten in P3-01).
- Nutzer: iPhone-Test (`TESTPLAN_IPHONE.md`), serbische Prüfung (CSV), echter VoiceOver-Test.
- Technik: Größe beobachten (1,65 MB; ab 2 MB Inhalte auslagern, P2-06).

## Reihenfolge für „Setze Orthodox Path fort“
1. P1-01 → P1-02 → P1-03 → P1-05 → P1-04 (Export-Teil)
2. P2-01 → P2-02 → P2-05 → P2-06 → P2-04 → P2-03
3. P3-01 (laufend, in kleinen Paketen) → P3-02 → P3-04 → P3-03
4. P4 nur auf ausdrücklichen Wunsch.

## Arbeitsweise (sparsam mit Nutzungsvolumen)
- Nur `PROJECT_STATUS.md` und die betroffene Datei lesen; keine Komplettanalysen.
- Inhalte über kleine Generator-Skripte (JSON) einfügen statt große Dateien zu lesen.
- Pro Sitzung bündeln: 1 Funktionspaket + Tests + 1 Veröffentlichung.
- Screenshots nur bei sichtbaren Änderungen.
