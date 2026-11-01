# OrthodoxPath – Projektfortschritt

**Live-App:** https://nidzojungbluth.github.io/orthodoxpath/
**Aktuelle Version:** 2.4.0 (1. November 2026)
**Technik:** Installierbare Web-App (PWA), eine HTML-Datei + Service Worker, keine externen Dienste, keine Kosten, offline nutzbar. Sprachen: Deutsch, Serbisch (kyrillisch und lateinisch – Latein wird automatisch aus Kyrillisch erzeugt).

---

## Grundsätze (gelten für alle Inhalte)

- Keine erfundenen Zitate, Bibelstellen, Väterworte oder Gebete. Alle Lehrtexte sind eigene Zusammenfassungen.
- Jeder Inhalt ist gekennzeichnet: verbindliche Lehre / historische Überlieferung / theologische Meinung / geistlicher Rat / unsicher.
- Gebete sind gekennzeichnet: traditionelles Gebet / Bibelvers (freie Übertragung) / Vorschlag der App (freie Worte).
- Deutsche Gebetstexte sind Arbeitsübersetzungen der App, keine offiziellen kirchlichen Übersetzungen.
- Lokale Unterschiede (Kalender, Fastenpraxis) werden benannt; persönliche Fasten- und Gebetsregeln immer mit dem Priester.
- Die App gibt sich nicht als geistliche Autorität aus.
- Kein Wettbewerb, keine Ranglisten, keine Schuldgefühle bei Unterbrechungen.

## Abgeschlossene Funktionen

| Bereich | Stand |
|---|---|
| Bibelschule | 35 volle Lektionen (je 11 Teile, Fragen, Quiz) + 27 Kurzüberblicke → alle 39 Bucheinträge abgedeckt |
| Theologie-Akademie | Kurs A (7), Paisios-Kurs (9), Kurs D (4), Kurs E Liturgie & Kirchenjahr (6, neu: Chrysostomus-, Basilius- und Vorgeweihte Liturgie), Glaubensbekenntnis |
| Heilige & Kirchenväter | 10 Kirchenväter, 22 Heilige (inkl. Maria von Ägypten, Lukas von Simferopol, Nikolaus, Georg, Demetrios, Petka, Stefan Dečanski, Apostel Andreas, Spyridon), alle mit Fragen und Quiz |
| Gebetsbuch | Morgen- und Abendordnung, 14 Themen (Essen, Arbeit, Angst, Versuchung, Vergebung, Familie, Kranke, Trauer, Verstorbene, Christus, Gottesgebärerin, Heilige, Dank, Fastenzeit), 30 Gebete, gespeicherte Gebete, Gebetsanliegen |
| Kirchenkalender | Julianisch / neujulianisch umschaltbar; Ostern selbst berechnet; 39 Feste und Tage (inkl. Triodion, Karwoche, Thomassonntag, Allerheiligen) mit Bedeutung und Lektionsverweis; Heilige des Tages (aus App-Daten); Fastenstatus und überlieferte Fastenregel; Fastenzeiten des Jahres |
| Lesepläne | Evangelien (89 Lesungen), Neues Testament (260), Psalter in 20 Kathismen – freies Tempo, Fortschrittsanzeige |
| Liturgie | Göttliche Liturgie Schritt für Schritt (16 Schritte: was geschieht, Bedeutung, was tue ich) |
| Ikonen-Lexikon | 13 Ikonentypen in Worten (Darstellung, Bedeutung, Verweis auf Lektionen) |
| Lernen | Lernkarten mit verteilter Wiederholung (128 Karten), Quiz, Glossar (37 Begriffe), Bibliothek (23 Bücher mit geprüften freien Quellen bzw. Beschreibungen) |
| Persönlich | Notizbuch (optional AES-verschlüsselt), gespeicherte Bibelstellen, Wochenübersicht ohne Druck, „Heute gebetet“, Impuls des Tages, Wochenziel, Sicherung kopieren/einfügen |
| Fragenhilfe | Durchsucht geprüfte Inhalte (keine KI); verweist bei persönlichen Fragen auf den Priester; Krisenhinweis bei entsprechenden Begriffen |
| Design | Premium-Designsystem 2.4: tiefes Schwarz/Anthrazit, Gold, cremefarbene Schrift; eingebettete Überschriftenschrift (Cormorant Garamond, OFL, offline); einheitliche Linien-Icons statt Emojis; gruppierte Listen im iOS-Stil; Schnellzugriff auf der Startseite; Medaillons im Heiligenverzeichnis; Bottom-Sheets mit Griff; Safe Areas; heller Modus; Schriftgrößen; Bewegung reduzierbar |

## Version 2.4 – Premium-Design (Autonomie-Auftrag)

- Neues Designsystem für alle Seiten (Farben, Schrift, Abstände, Karten, Listen, Navigation, Dialoge). Google-Fonts-Abhängigkeit entfernt: Schrift ist eingebettet und funktioniert offline, ohne Datenübertragung an Dritte.
- Alle Emojis/Sonderzeichen in Bedienelementen durch einheitliche SVG-Icons ersetzt (Sprache, Stern, Haken, Stift, Schloss, Plus, Schließen, Pfeile).
- Startseite: Datum + Begrüßung, Lektionskarte, Schnellzugriff (Gebete, Kalender, Wiederholen mit Zähler, Fragen), Bereich „Entdecken“.
- „Mehr“ und „Theologie“ in Gruppen mit Symbolen; Seite „Über die App“ mit Versionsnummer.
- Fehler behoben: Begrüßungskarte klebte am Bildschirmrand; Gebets-Reiter „Mein Gebetsbuch“ lief über; serbische Reiterbeschriftung wurde abgeschnitten (jetzt „Теологија“); Mediävalziffern in Überschriften auf normale Ziffern umgestellt.
- Inhalte: Lektion „Drei Liturgien“ (Kurs E), Bibellektionen Kol 3 und Dtn 6, Heilige Apostel Andreas und Spyridon (mit Kalender), 6 neue Lernkarten.
- Tests: ca. 10 900 Inhaltsprüfungen, 41 Bedienungsprüfungen, Offline-Test bestanden; Sichtprüfung per Screenshots (390×844 und 375×667, dunkel und hell, Deutsch und Kyrillisch).

## Version 2.3

- 3 neue volle Bibellektionen: Eph 6 (Waffenrüstung Gottes), 1 Thess 4 (Hoffnung für die Entschlafenen), Spr 8–9 (Die Weisheit baut ihr Haus).
- 5 neue Heilige mit Profil, Fragen, Quiz und Kalendereintrag: Nikolaus von Myra, Großmärtyrer Georg, Demetrios von Thessaloniki, Petka (Paraskeva), König Stefan Dečanski. Nikoljdan und Đurđevdan im Kalender verlinken jetzt auf das Profil.
- 9 neue Lernkarten. Unsichere Überlieferung (z. B. Drachenlegende, Lebensdaten des hl. Nikolaus) ist als unsicher gekennzeichnet.

## Version 2.1 / 2.2

- Lesepläne mit Fortschritt (Evangelien, NT, Psalter nach Kathismen); Leseplan-Zugang in der Bibel.
- „Die Liturgie Schritt für Schritt“ (Kurs E, Theologie, Mehr).
- Ikonen-Lexikon (Theologie, Mehr, durchsuchbar).
- Tests erweitert (Kapitelzahlen NT = 260, Kathismen lückenlos 1–150, Liturgie- und Ikonendaten).

## Version 2.0 – Änderungen (Master-Auftrag)

- Gebetsbuch: 15 neue Gebete, 14 Themenbereiche, Kennzeichnung der Gebetsart, Favoriten, Gebetsanliegen (hinzufügen, erledigt, löschen).
- Kalender: neujulianischer Kalender, bewegliche Tage der Fasten- und Osterzeit, weitere feste Gedenktage (z. B. Ђурђевдан, Аранђеловдан, Илиндан, Петровдан, Никољдан), Bedeutung jedes Tages, Heilige des Tages, Fastenregeln.
- Neue Heilige: hl. Maria von Ägypten, hl. Lukas von Simferopol (Daten geprüft).
- Wohlbefinden: „Lernserie“ durch Wochenübersicht ersetzt; „Heute gebetet“ ohne Druck; Begrüßung; Impuls des Tages.
- Fragenhilfe: Hinweis auf den Priester (Beichte, innere Kämpfe), Krisenhinweis (Telefonseelsorge 0800 111 0 111 / 0800 111 0 222, Notruf 112).
- Fehler behoben: Suche gewichtete serbische Titel bei deutscher Oberfläche zu schwach.

## Verwendete Quellen (verlinkt, frei und rechtmäßig)

- Bibliothek der Kirchenväter (BKV, Universität Freiburg/Schweiz) – deutsche Väterübersetzungen
- CCEL: Ante-Nicene Fathers (Bd. 1, 5), Nicene and Post-Nicene Fathers (I/10–14, II/4, 5, 7, 8, 9, 13, 14)
- Svetosavlje.org: Neues Testament (Synodalübersetzung der SPC), Prolog von Ohrid, Philokalie, Werke des hl. Nikolaj, Lausiaca
- Für Daten von Heiligen zusätzlich geprüft: Veröffentlichungen der Kirchen (z. B. SPC-Kommuniqué 2010 zum hl. Justin), Hilandar, Patriarchat Moskau

## Tests

- `node tests/content.test.js` – ca. 10 900 Prüfungen: Vollständigkeit DE/SR, keine gemischten Schriften, Quiz-Konsistenz, Links, Kalenderberechnung (Ostern 2024–2030, Fastenzeiten, beide Kalender), Gebete, Heilige des Tages.
- `node tests/e2e.js` – 41 Prüfungen im simulierten iPhone-Viewport (Chromium): alle Ansichten in 3 Sprachvarianten, Quiz, Karten, Notizen inkl. Verschlüsselung, Gebetsbuch, Kalenderumschaltung, Fragenhilfe, Speichern nach Neuladen.
- Offline-Test des Service Workers (Chromium).
- Nicht automatisiert möglich: Test auf echtem iPhone/Safari – erfolgt durch den Nutzer.

## Offene Punkte / bekannte Grenzen

- **KI-Begleiter:** nicht umgesetzt – es gibt keine kostenlose KI-Schnittstelle ohne laufende Kosten; stattdessen regelbasierte Fragenhilfe.
- **Tägliche Schriftlesungen** (Leseordnung der Kirche) fehlen noch.
- **Heilige des Tages:** nur Heilige, die in der App ein Profil haben; vollständiger Kalender über den Prolog von Ohrid (Link).
- **Vollständiger Bibeltext** in der App: keine frei lizenzierte deutsche orthodoxe Bibel verfügbar; Verweis auf die eigene Bibel bzw. serbisches NT (Svetosavlje).
- **Erinnerungen an Gebetszeiten:** Web-Apps auf dem iPhone können nur eingeschränkt benachrichtigen; noch nicht umgesetzt.
- 12 Bibelbücher haben erst einen Kurzüberblick, noch keine volle Lektion (past, lev, num, josh, chr, ezr, jer, tob, wis, sir, bar, esd).
- Serbische Texte sollten von einem Muttersprachler bzw. Priester gegengelesen werden.

## Nächste Schritte (Reihenfolge)

1. Weitere volle Bibellektionen für die 12 Bücher mit Kurzüberblick (z. B. Jeremia 31, Tobit, Jesus Sirach, Josua 3, 1 Tim 2) sowie Genesis 22 (Abraham) und Exodus 3 (brennender Dornbusch).
2. Weitere Heilige mit Gedenktagen (z. B. hl. Katharina, hl. Prokopije, hl. Arsenije Sremac, hl. Ignatius, hl. Antonius der Große).
3. Design-Feinschliff: Kalenderliste (Fest-Kennzeichnung unter den Titel), Lernkarten-Ansicht, Quiz-Ergebnisseite.
4. Tägliche Schriftlesungen (Leseordnung) – nur, wenn eine verlässliche Quelle eingebunden werden kann.
5. Anleitung für Gebetserinnerungen über die iOS-Kurzbefehle-App.
6. Gegenlesen der serbischen Texte durch Muttersprachler.

## Sicherungspunkte

- Git-Historie im Repository `nidzojungbluth/orthodoxpath` (jede Version ein Commit).
- Lokaler Tag `v1.11-backup` und Archiv vor der Überarbeitung 2.0.
