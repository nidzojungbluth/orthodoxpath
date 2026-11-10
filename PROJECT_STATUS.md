# OrthodoxPath – Projektstatus

Stand: 5. November 2026 · Version 3.18.0 · erstellt im Rahmen der Planungsphase (keine Code-Änderungen)

## 1. Kurzbeschreibung
Kostenlose, zweisprachige (Deutsch / Serbisch kyrillisch + lateinisch) orthodoxe Lern- und Glaubens-App als **Progressive Web App (PWA)** fürs iPhone. Kein Konto, keine Werbung, keine Server-Datenhaltung, offline nutzbar.

## 2. Technischer Zustand (geprüft)

| Bereich | Ist-Zustand |
|---|---|
| Tech-Stack | Reines HTML/CSS/JavaScript ohne Framework; Node.js nur für Build und Tests |
| Build | `build.js` bündelt alle Quellen zu **einer** Datei: `dist/index.html` (Claude-Artefakt) und `pwa/` (mit Manifest, Service Worker, Icons) |
| Umfang | ca. 10 200 Zeilen Quellcode/Inhalt; Ausgabedatei 1,43 MB (davon ca. 0,22 MB eingebettete Schrift) |
| Architektur | `src/app.js` (Router per URL-Hash, Ansichten als Template-Strings, ein zentrales `render()`); Inhalte getrennt in `src/content/*.js`; Kalenderlogik in `src/calendar.js`; Texte der Oberfläche in `src/i18n.js` |
| Datenmodell | Ein JSON-Objekt im `localStorage` (Schlüssel `orthodoxpath_v1`): Sprache, Einstellungen, erledigte Lektionen, Quizwerte, Lernkarten-Zustand, Notizen (optional verschlüsselt), Gebetsfavoriten, Anliegen, Lesepläne, Aktivität |
| Datenbank / API | Keine. Keine Server-Schnittstellen, keine Drittanbieter-Aufrufe zur Laufzeit |
| Authentifizierung | Keine (bewusst). Optionales Passwort nur für die lokale Verschlüsselung der Notizen (AES-GCM, PBKDF2 200 000 Runden) |
| Hosting | GitHub Pages (Repo `nidzojungbluth/orthodoxpath`: gebaute PWA im Hauptverzeichnis, Quellcode in `source/`) + privates Claude-Artefakt |
| Offline | Service Worker „cache first“; Offline-Test im Browser bestanden |
| Tests | `tests/a11y.js` (Barrierefreiheit, axe-core) · `tests/content.test.js` (~13 300 Inhaltsprüfungen), `tests/e2e.js` (58 Bedienungsprüfungen; `content.test.js` prüft auch die Serbisch-Werkzeuge, Chromium, simuliertes iPhone 390×844), `tests/pwa-offline.js` |

## 3. Funktionen

### Funktioniert (automatisch getestet)
- Bibelschule: 66 volle Lektionen (11 Teile, Fragen, Quiz), jedes der 39 Bucheinträge abgedeckt, 27 Kurzüberblicke, Vor/Zurück-Navigation, „Zuletzt geöffnet“
- 3 Lesepläne (Evangelien, NT, Psalter/Kathismen) mit Fortschritt
- Theologie: Kurs A (7), Paisios (9), D (4), E Liturgie (7, inkl. „Fasten im Alltag“), F Heilige Mysterien (7); Glaubensbekenntnis; Liturgie in 16 Schritten; Ikonen-Lexikon (37 in 5 Gruppen, alle mit gemeinfreiem Bild); Glossar (37, Suche)
- 10 Kirchenväter, 28 Heilige mit Fragen/Quiz (Heilige vorerst pausiert – Wunsch des Nutzers)
- Gebetsbuch: Morgen/Abend, 16 Themen (neu: vor/nach der Kommunion, vor der Beichte), 35 Texte mit Herkunftsangabe bei den Kommuniongebeten, Favoriten, Anliegen, „Heute gebetet“
- Kirchenkalender julianisch/neujulianisch: Ostern berechnet, 39 Feste, 48 Gedenktage, Fasten-Status + überlieferte Regel; Monatsübersicht (Fastenart je Tag, Feste, Tagesdetails); Feste als Kalenderdatei (.ics) exportierbar
- Die zwölf großen Feste: je Seite mit Ikone in Worten, Bedeutung, Lesungen der Liturgie, Lektionsverweisen, nächstem Termin, .ics
- Lernkarten (140) mit verteilter Wiederholung, Quiz, Fortschritt, Wochenübersicht ohne Druck
- Notizbuch (Verschlüsselung, Export/Teilen), gespeicherte Bibelstellen
- Bibliothek (27 Werke, Kategorien, Suche, Linkhinweise)
- Fragenhilfe (regelbasierte Suche, Priester-Hinweis, Krisenhinweis)
- Einstellungen: Sprache, Kalender, Hell/Dunkel, Schriftgröße, Tempo, Sicherung kopieren/einfügen, Anleitung Gebetserinnerung
- Premium-Designsystem 2.4 (Schwarz/Gold, SVG-Icons, eingebettete Schrift)

### Teilweise
- Gebetserinnerungen: nur Anleitung (iOS-App „Erinnerungen“), keine echten Push-Nachrichten
- Heilige des Tages: nur Heilige mit Profil in der App
- Fragenhilfe: Stichwortsuche, keine echte Frage-Antwort-Logik
- Sicherung: Datei (Teilen-Menü/Download) und Text; Wiederherstellen aus Datei oder Text; keine automatische Cloud-Sicherung (bewusst)

### Fehlt
- Tägliche Schriftlesungen (Leseordnung) – keine geprüfte, frei nutzbare Quelle
- Vollständiger Bibeltext (keine frei lizenzierte deutsche orthodoxe Übersetzung)
- KI-Begleiter (keine kostenlose Lösung ohne laufende Kosten)
- Ausführliche „Ordnung vor der Kommunion“, Dankgebete, Akathisten, Kanones (nur mit gemeinfreier oder freigegebener Vorlage)

## 4. Bekannte Probleme und Risiken (nach Schwere)

1. ~~Quellcode nur in der Arbeitsumgebung~~ – **erledigt (1.11.2026):** Quellcode, Tests und Build-Skript liegen im Repo unter `source/`; frischer Klon baut eine identische App, Tests grün.
2. **Datenverlust-Risiko im Browser** – entschärft (3.1): Hinweis „Zum Home-Bildschirm“ (nur iPhone-Safari, nicht installiert), Sicherung als Datei + Laden aus Datei, Erinnerung alle 30 Tage (abschaltbar), `navigator.storage.persist()`. Restrisiko: Nutzer muss Sicherungen selbst ablegen. Einschränkung: In der Claude-Artefakt-Version kann „Als Datei sichern“ per Download nicht funktionieren (Artefakt erlaubt keine Downloads); dort „Sicherung kopieren“ nutzen. Hauptversion ist die GitHub-PWA.
3. **Serbische Texte nicht muttersprachlich geprüft** – Prüftabelle bereit (`node tools/sr-export.js` → CSV mit 5 300+ Texten, Spalte „Korrektur“; Rückweg `node tools/sr-import.js datei.csv`). Prüfung durch Muttersprachler/Priester offen.
4. **Kein Test auf echtem iPhone/Safari** durch Claude möglich – Checkliste `TESTPLAN_IPHONE.md` liegt bereit, Durchführung durch den Nutzer offen.
5. `src/app.js` ist eine große Datei (~1 200 Zeilen); wachsende Wartungskosten, aber stabil. Kein Umbau nötig, solange Tests grün sind.
6. Ausgabedatei 1,69 MB (gzip ≈ 0,57 MB): gemessen ≈ 1,5 s bis zum ersten Bildschirm (gedrosselt), danach offline sofort. Grenze für Umbau: 2 MB.
7. ~~Reihenfolge der Bibellektionen~~ – erledigt (3.3): Umschalter „Lernweg / Nach Büchern“.
8. Barrierefreiheit – geprüft (3.3): `tests/a11y.js` (axe-core) ohne Verstöße; Kontraste im hellen Modus angehoben, Dialoge mit Fokus und Escape. Offen: Test mit echtem VoiceOver.
9. ~~Keine Content-Security-Policy~~ – erledigt (3.1): CSP-Meta-Tag in der PWA (nicht im Claude-Artefakt, damit dessen Laufzeit nicht blockiert wird); Import prüft Felder und Typen; Test bestätigt, dass HTML in Notizen nicht ausgeführt wird.
10. Link-Prüfung extern nur manuell; Web-Abruf benötigt Freigabe des Nutzers.

## 5. Zentrale Dateien
`build.js` · `src/app.js` · `src/i18n.js` · `src/calendar.js` · `src/styles.css` · `src/content/{feasts,bible,overviews,theology,saints,library,prayers,plans,liturgysteps,icons}.js` · `src/fonts/` · `tests/*` · `PROJECT_PROGRESS.md` (Versionsverlauf)
