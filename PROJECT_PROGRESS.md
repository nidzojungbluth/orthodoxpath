# OrthodoxPath – Projektfortschritt

**Live-App:** https://nidzojungbluth.github.io/orthodoxpath/
**Aktuelle Version:** 3.17.0 (5. November 2026)
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
| Bibelschule | 66 volle Lektionen (je 11 Teile, Fragen, Quiz) + 27 Kurzüberblicke → **jeder der 39 Bucheinträge hat jetzt mindestens eine volle Lektion**; Vor-/Zurück-Navigation, „Zuletzt geöffnet“ |
| Theologie-Akademie | Kurs A (7), Paisios-Kurs (9), Kurs D (4), Kurs E Liturgie & Kirchenjahr (6, neu: Chrysostomus-, Basilius- und Vorgeweihte Liturgie), Glaubensbekenntnis |
| Heilige & Kirchenväter | 10 Kirchenväter, 28 Heilige (inkl. Maria von Ägypten, Lukas von Simferopol, Nikolaus, Georg, Demetrios, Petka, Stefan Dečanski, Apostel Andreas, Spyridon, Katharina, Prokopios, Antonius der Große, Arsenije Sremac, Ignatius von Antiochien, Johannes von Rila), alle mit Fragen und Quiz |
| Gebetsbuch | Morgen- und Abendordnung, 14 Themen (Essen, Arbeit, Angst, Versuchung, Vergebung, Familie, Kranke, Trauer, Verstorbene, Christus, Gottesgebärerin, Heilige, Dank, Fastenzeit), 30 Gebete, gespeicherte Gebete, Gebetsanliegen |
| Kirchenkalender | Julianisch / neujulianisch umschaltbar; Ostern selbst berechnet; 39 Feste und Tage (inkl. Triodion, Karwoche, Thomassonntag, Allerheiligen) mit Bedeutung und Lektionsverweis; Heilige des Tages (aus App-Daten); Fastenstatus und überlieferte Fastenregel; Fastenzeiten des Jahres |
| Lesepläne | Evangelien (89 Lesungen), Neues Testament (260), Psalter in 20 Kathismen – freies Tempo, Fortschrittsanzeige |
| Liturgie | Göttliche Liturgie Schritt für Schritt (16 Schritte: was geschieht, Bedeutung, was tue ich) |
| Ikonen-Lexikon | 37 Ikonen in 5 Gruppen (Christus, Gottesgebärerin, Feste im Kirchenjahr, Engel und Heilige, Kirchenraum) mit Sprungleiste; Darstellung, Bedeutung, Verweis auf Lektionen/Heilige; alle 37 mit Bild einer jahrhundertealten, gemeinfreien Ikone (Wikimedia Commons, mit Quellenangabe) |
| Lernen | Lernkarten mit verteilter Wiederholung (140 Karten), Quiz, Glossar (37 Begriffe, mit Suche und Buchstabengruppen), Bibliothek (27 Bücher mit geprüften freien Quellen bzw. Beschreibungen, mit Suche und Hinweis zu den Herausgeber-Anmerkungen der englischen Ausgaben) |
| Persönlich | Notizbuch (optional AES-verschlüsselt), gespeicherte Bibelstellen, Wochenübersicht ohne Druck, „Heute gebetet“, Impuls des Tages, Wochenziel, Sicherung kopieren/einfügen |
| Fragenhilfe | Durchsucht geprüfte Inhalte (keine KI); verweist bei persönlichen Fragen auf den Priester; Krisenhinweis bei entsprechenden Begriffen |
| Design | Premium-Designsystem 2.4: tiefes Schwarz/Anthrazit, Gold, cremefarbene Schrift; eingebettete Überschriftenschrift (Cormorant Garamond, OFL, offline); einheitliche Linien-Icons statt Emojis; gruppierte Listen im iOS-Stil; Schnellzugriff auf der Startseite; Medaillons im Heiligenverzeichnis; Bottom-Sheets mit Griff; Safe Areas; heller Modus; Schriftgrößen; Bewegung reduzierbar |

## Version 3.17 (Nutzerwunsch: Ikonen zu den Heiligen)

- 30 von 38 Heiligen und Kirchenvätern haben jetzt ein Bild (Seite der Person + kleines Rundbild in der Liste): alte Ikonen und Fresken, darunter Sava (Mileševa), Simeon (Sopoćani), Lazar (Ljubostinja), Stefan Dečanski (Dečani); für Johannes von Kronstadt (1900) und Nikolaj Velimirović (1915) alte Fotos. Lizenz jeweils über die Commons-API geprüft; Bilder liegen in der App (img/icons/<id>.jpg), neue Datei src/content/saint-images.js.
- Ohne Bild (kein sicher gemeinfreies Bild): Paisios, Porphyrios, Sophrony, Siluan, Nektarios, Lukas von Simferopol, Justin Popović, Isaak der Syrer – moderne Ikonen sind urheberrechtlich geschützt.
- Tests: Datei/Lizenz/Herkunft je Bild, Heiligenseite zeigt und lädt Bild offline, Liste mit Bildern.

## Version 3.16.1 (Fehler: iPhone blieb auf 3.12 hängen)

- Ursache: Der Service Worker lieferte die Startseite immer zuerst aus dem Speicher (cache-first); eine iPhone-Web-App, die nur aus dem Hintergrund geholt wird, bekommt neue Versionen dadurch sehr spät.
- Lösung: Startseite jetzt zuerst aus dem Netz (nach 4 s oder offline aus dem Speicher); sw.js wird nie aus dem HTTP-Cache geholt; Update-Prüfung bei jedem Start und bei jeder Rückkehr in die App; übernimmt eine neue Version, lädt die App einmal neu. Neuer Knopf „Nach neuer Version suchen“ unter Mehr (leert nur den Programmspeicher, Daten und Bilder bleiben).
- Test pwa-offline: Knopf vorhanden, danach neue Version, Bilder-Speicher erhalten, offline weiter nutzbar.

## Version 3.16 (Fehler: Ikonenbilder erschienen beim Nutzer nicht)

- Ursache: Bilder wurden zur Laufzeit von upload.wikimedia.org geladen – scheitert in der Claude-App (Artefakt), bei alter zwischengespeicherter App-Version und bei Wikimedia-Ratenbegrenzung (429, beim Herunterladen selbst beobachtet).
- Lösung: alle 37 Bilder einmalig heruntergeladen, auf max. 360×540 px verkleinert (JPEG, zusammen 1,6 MB) und in die App gelegt (img/icons/<id>.jpg). Service Worker legt sie bei der Installation in einen eigenen Speicher „orthodoxpath-img-v2“ → offline verfügbar. CSP erlaubt keine fremden Bildquellen mehr. Quellenangabe und Link zu Commons bleiben.
- Tests: Bilder laden bei gesperrtem Wikimedia (e2e), offline über den Service Worker (pwa-offline), Dateien vorhanden/JPEG/Größe (content).
- Festseiten: Überschrift „Die Festikone“.

## Version 3.15 (ROADMAP P3-01, Teil 2)

- 6 neue Bibellektionen (jetzt 72): Auferweckung des Lazarus (Joh 11), Zöllner und Pharisäer (Lk 18), Gang auf dem Wasser (Mt 14), Gelähmter in Kafarnaum (Mk 2), Gelähmter am Teich Betesda (Joh 5), Thron Gottes und Lamm (Offb 4–5); jeweils mit liturgischem Ort (Lesungstag), Fragen, Übung, Quiz; 6 neue Lernkarten.
- Festseiten zeigen das Bild der Festikone und springen direkt zur Ikone im Lexikon (neue Adresse #icons-<id>); Suche springt ebenfalls direkt zur Ikone. Palmsonntag verweist auf die Lazarus-Lektion.
- Ikonenbilder mit fester Höhe, damit die Seite beim Laden nicht springt. 3.15.1: Sprungziel nicht mehr unter der Kopfleiste (im echten Chrome geprüft).

## Version 3.14

- Bilder für die letzten 8 Ikonen (Mandylion, Einzug, Himmelfahrt, Begegnung, Lazarus, Tempelgang, Pokrov, Kreuzerhöhung); Lizenzen über die Commons-API geprüft. Alle Bildadressen im echten Chrome geprüft (lädt).

## Version 3.13 (Nutzerwunsch: mehr Ikonen)

- 14 neue Ikonen: Geburt und Tempelgang der Gottesgebärerin, Begegnung des Herrn, Auferweckung des Lazarus, Kreuzerhöhung, Pokrov, Gottesmutter vom Don, Wunder von der Ikone des Zeichens, Johannes der Täufer, Erzengel, Apostel Paulus, Johannes Chrysostomos, Wüstenväter (Makarios), Prophet Elija – damit alle zwölf großen Feste. 10 weitere gemeinfreie Bilder (auch für die Ikonostase).
- Lexikon nach Gruppen geordnet, Feste in der Reihenfolge des Kirchenjahres; Sprungleiste.

## Version 3.12 (Nutzerwunsch Ikonen)

- Ikonen-Lexikon mit Bildern: 19 gemeinfreie historische Ikonen (11.–16. Jh.) von Wikimedia Commons, mit Werk, Zeit, Ort und Quellenlink; lazy geladen, ohne Referrer, im Service Worker zwischengespeichert; bei Ausfall wird das Bild ausgeblendet.
- 10 neue Ikonentypen: Verkündigung, Einzug in Jerusalem, Kreuzigung, Grablegung (Epitaphios), Überzeugung des Thomas, Himmelfahrt, Pfingsten, Erlöser in den Mächten, hl. Georg, hl. Nikolaus (jetzt 23).
- CSP: img-src erlaubt nur zusätzlich upload.wikimedia.org. Neue Tests (md5-Pfad, Lizenz, Herkunftsangabe, Alt-Text, Referrer, Ausblenden ohne Netz).

## Version 3.11 (ROADMAP P3-01)

- Bibellektionen Johannes 4 (Die Samariterin), Johannes 9 (Der Blindgeborene), Lukas 19 (Zachäus), 1 Korinther 15 (Die Auferstehung der Toten); 4 neue Lernkarten.

## Version 3.10 (ROADMAP P3-03)

- Neue Lektion „Fasten im Alltag: Sinn, Maß und Hilfen“ (Kurs E): Fasten der Zunge und des Herzens, das richtige Maß (klein anfangen, Ausnahmen, Priester und bei Gesundheitsfragen Arzt), kein Urteilen über andere, Fasten vor der Kommunion, Gottesdienste der Großen Fastenzeit (Vergebungssonntag, Ephräm-Gebet, Großer Kanon, Vorgeweihte Gaben, Sonntage der Fastenzeit). Bewusst ohne Ernährungsplan. Verlinkt im Kirchenkalender. 1 neue Lernkarte.

## Version 3.9 (ROADMAP P3-04)

- Neuer Bereich „Die zwölf großen Feste“ (`src/content/feasts.js`): Liste nach Kirchenjahr mit nächstem Termin (nach gewählter Kalenderart), Ostern als „Fest der Feste“ vorangestellt; je Fest: Bedeutung, Ikone in Worten, Apostel- und Evangeliumslesung der Liturgie, Verweise auf passende Lektionen, „In den Kalender übernehmen“. Erreichbar über Theologie, Mehr und Kirchenkalender; große Feste in der Monatsübersicht verlinkt. Feste, die nur in der Überlieferung beschrieben sind, sind gekennzeichnet. Keine Troparien ohne geprüfte Quelle.
- Fehler behoben: fehlender Text „Vorherige Lektion“ (durch automatischen Test entdeckt).

## Version 3.8 (ROADMAP P3-01)

- Bibellektionen Lukas 2 (Geburt Christi und Begegnung im Tempel), Matthäus 16 (Bekenntnis des Petrus, mit orthodoxer Deutung des „Felsens“), Hebräer 4–5 (Christus, unser Hoherpriester), Genesis 28 (Die Himmelsleiter), Exodus 20 (Die Zehn Gebote, mit Erklärung zur Ikonenverehrung); 5 neue Lernkarten.

## Version 3.7 (ROADMAP P3-02)

- Neuer Kurs F „Die heiligen Mysterien“ mit 7 Lektionen: Taufe, Myronsalbung, Eucharistie, Beichte, Ehe, Weihe, Krankensalbung – je Lehre, Praxis, Bibelstellen, Fragen, Quiz; Hinweis, dass die Siebenzahl verbreitet, aber nicht abschließend ist; Praxisfragen verweisen auf den Priester. 3 neue Lernkarten. Kurs ist Teil des Lernwegs.

## Version 3.6 (ROADMAP P3-01)

- Bibellektionen Apostelgeschichte 15 (Das Apostelkonzil), Psalm 103 (Schöpfungspsalm der Vesper), Lukas 10 (Der barmherzige Samariter), Johannes 17 (Das hohepriesterliche Gebet); 4 neue Lernkarten.

## Version 3.5 (ROADMAP P2-03, Teil 1)

- Gebetsbuch: neue Themen „Vor und nach der Kommunion“ (Ich glaube, Herr; Deines geheimnisvollen Abendmahls; Nicht zum Gericht; Wir haben das wahre Licht gesehen; Lobgesang des Simeon; Ehre sei dir, Gott) und „Vor der Beichte“ (Zöllnergebet, Psalm 50, Gebet des hl. Ephräm, Jesusgebet), jeweils mit Hinweis auf das Gespräch mit dem Priester.
- Neues Feld „Herkunft“ bei Gebeten (z. B. „Göttliche Liturgie, Gebet vor der Kommunion“); Inhaltstest erzwingt es für die Kommuniongebete.

## Version 3.4 (ROADMAP P2-04)

- Kirchenkalender: Monatsübersicht mit Blätterfunktion; jeder Tag zeigt die Fastenart als farbigen Punkt (streng / mit Fisch / ohne Fleisch / fastenfrei), Feste und große Feste sind umrandet; Antippen zeigt Fest, Heilige und Fastenregel des Tages.
- Kalenderdatei (.ics): einzelnes Fest oder alle Feste der nächsten 12 Monate in den iPhone-Kalender übernehmen (Daten nach gewählter Kalenderart).
- 5 neue Bedienungstests (58 insgesamt), Barrierefreiheitstest weiter ohne Verstöße.

## Version 3.3 (ROADMAP P2-02, P2-05, P2-06)

- Bibelschule: Umschalter „Lernweg / Nach Büchern“ (Gruppen wie Evangelien, Briefe, Gesetz …), Auswahl wird gespeichert.
- Barrierefreiheit: Startseiten-Link mit Namen für Bildschirmleser, Kategorie-Auswahl korrekt ausgezeichnet, Kontraste im hellen Modus erhöht (Gold, Kennzeichnungen), Dialoge setzen den Fokus und schließen mit Escape. Neuer Test `tests/a11y.js`: 0 Verstöße.
- Performance gemessen, kein Umbau nötig (Werte in ROADMAP P2-06).

## Version 3.2 (ROADMAP P1-04, P2-01)

- Werkzeuge für die muttersprachliche Prüfung: `tools/sr-export.js` erzeugt eine CSV-Tabelle aller serbischen Texte (Nr, Bereich, Deutsch, Serbisch, Korrektur, Anmerkung; Reihenfolge nach Wichtigkeit: Oberfläche, Gebete, Kalender …); `tools/sr-import.js` spielt Korrekturen exakt ein (mit Probelauf `--dry`).
- Startseite: neue Karte „Heute“ ganz oben – Datum, Fest/Heilige (verlinkt), Fasten mit überlieferter Regel, Gebet passend zur Tageszeit, heutige Lesung aus dem laufenden Leseplan, nächstes großes Fest. Schnellzugriff ohne Doppelungen (Wiederholen, Lesepläne, Notizen, Fragen).

## Version 3.1 – Fundament (ROADMAP P1-01 bis P1-03, P1-05)

- Quellcode, Tests und Build-Skript im Repo unter `source/` gesichert; frischer Klon baut identische App.
- Sicherheit: Content-Security-Policy in der PWA; Sicherungs-Import übernimmt nur bekannte Felder mit passendem Typ.
- Datensicherheit: Sicherung als Datei speichern/laden, „Letzte Sicherung“, Erinnerung alle 30 Tage (abschaltbar), Hinweis „Zum Home-Bildschirm“ für iPhone-Safari, dauerhafter Speicher wird angefragt.
- `TESTPLAN_IPHONE.md`: 10-Minuten-Checkliste für den Test auf dem echten iPhone.
- 5 neue Bedienungstests (52 insgesamt): HTML in Notizen nicht ausführbar, CSP vorhanden, Sicherungs-Rundlauf über Datei, beschädigte Sicherung abgefangen.

## Version 3.0

- Bibellektionen Matthäus 25 (Das Weltgericht), Johannes 6 (Brot des Lebens), Römer 8 (Nichts kann uns trennen), Jesaja 6 (Heilig, heilig, heilig).
- Bibliothek: 4 neue geprüfte Werke (Gregor von Nyssa, Kyrill von Jerusalem – Katechesen, Chrysostomus – Über das Priestertum, Eusebius – Kirchengeschichte, alle gemeinfrei bei CCEL); Suchfeld; Hinweis, dass Einleitungen/Fußnoten der NPNF/ANF-Ausgaben von westlichen Herausgebern stammen.
- Neuer Bedienungstest für die Bibliothek-Suche (47 insgesamt).

## Version 2.9

- Bibellektionen Numeri 21 (Die eherne Schlange), 2 Chronik 6–7 (Salomos Gebet bei der Tempelweihe), Nehemia 8 (Esra liest das Gesetz vor), Baruch 3 (Gott erschien auf Erden), 3 Esra 3–4 (Die Wahrheit ist am stärksten). Damit hat jedes Bibelbuch der App mindestens eine volle Lektion.
- Neu: Notizen und gespeicherte Bibelstellen teilen oder kopieren (Teilen-Menü des iPhones, sonst Zwischenablage, sonst Textfeld zum Markieren).
- Neuer Bedienungstest für den Export (46 insgesamt).

## Version 2.8

- Bibellektionen Josua 3 (Durch den Jordan), 1 Timotheus 2 (Betet für alle Menschen), Levitikus 19 (Seid heilig).
- Neu: Vor-/Zurück-Navigation am Ende jeder Lektion (innerhalb Bibelschule bzw. Kurs).
- Neu: „Zuletzt geöffnet“ auf der Startseite, wenn eine angefangene Lektion nicht die nächste im Lernweg ist.
- Neu: Anleitung für Gebetserinnerungen über die iPhone-App „Erinnerungen“ mit Knopf zum Kopieren des Gebetsbuch-Links (Einstellungen).
- 3 neue Bedienungstests (45 insgesamt).

## Version 2.7

- Bibellektionen Jesus Sirach 2 (Wenn du dem Herrn dienen willst) und Weisheit 2–3 (Die Seelen der Gerechten in Gottes Hand).
- Heilige Ignatius von Antiochien (mit Link zu seinen Briefen, ANF 1) und Johannes von Rila (mit Kalender, inkl. Übertragung der Reliquien).
- 4 neue Lernkarten; neuer Link-Eintrag für die Ignatius-Briefe.

## Version 2.6

- Bibellektionen Jeremia 31 (Der neue Bund) und Tobit (Tobit und der Erzengel Raphael).
- Heilige Antonius der Große (mit Link zum Leben des Antonius von Athanasius) und Arsenije Sremac (zweiter serbischer Erzbischof), jeweils mit Kalender, Fragen und Quiz.
- 4 neue Lernkarten. Alle Tests bestanden (ca. 11 600 Inhaltsprüfungen, 42 Bedienungsprüfungen, offline).

## Version 2.5

- Bibellektionen Genesis 22 (Abraham und Isaak) und Exodus 3 (Der brennende Dornbusch).
- Heilige Katharina von Alexandrien und Großmärtyrer Prokopios (Profil, Fragen, Quiz, Kalender); bei Prokopios ist zwischen dem Bericht des Eusebius und späteren Erweiterungen unterschieden.
- Glossar neu gestaltet: Suchfeld, Gruppen nach Anfangsbuchstaben, kompakte Liste; neuer Bedienungstest dafür.
- 4 neue Lernkarten.

## Version 2.4 – Premium-Design (Autonomie-Auftrag)

- Neues Designsystem für alle Seiten (Farben, Schrift, Abstände, Karten, Listen, Navigation, Dialoge). Google-Fonts-Abhängigkeit entfernt: Schrift ist eingebettet und funktioniert offline, ohne Datenübertragung an Dritte.
- Alle Emojis/Sonderzeichen in Bedienelementen durch einheitliche SVG-Icons ersetzt (Sprache, Stern, Haken, Stift, Schloss, Plus, Schließen, Pfeile).
- Startseite: Datum + Begrüßung, Lektionskarte, Schnellzugriff (Gebete, Kalender, Wiederholen mit Zähler, Fragen), Bereich „Entdecken“.
- „Mehr“ und „Theologie“ in Gruppen mit Symbolen; Seite „Über die App“ mit Versionsnummer.
- Fehler behoben: Begrüßungskarte klebte am Bildschirmrand; Gebets-Reiter „Mein Gebetsbuch“ lief über; serbische Reiterbeschriftung wurde abgeschnitten (jetzt „Теологија“); Mediävalziffern in Überschriften auf normale Ziffern umgestellt.
- Quiz-Ergebnis mit Fortschrittsring und ermutigendem Hinweis (kein Druck); Kalender: „Großes Fest“ steht jetzt unter dem Titel.
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

- `node tests/content.test.js` – ca. 13 300 Prüfungen: Vollständigkeit DE/SR, keine gemischten Schriften, Quiz-Konsistenz, Links, Kalenderberechnung (Ostern 2024–2030, Fastenzeiten, beide Kalender), Gebete, Heilige des Tages.
- `node tests/e2e.js` – 47 Prüfungen im simulierten iPhone-Viewport (Chromium): alle Ansichten in 3 Sprachvarianten, Quiz, Karten, Notizen inkl. Verschlüsselung, Gebetsbuch, Kalenderumschaltung, Fragenhilfe, Speichern nach Neuladen.
- Offline-Test des Service Workers (Chromium).
- Nicht automatisiert möglich: Test auf echtem iPhone/Safari – erfolgt durch den Nutzer.

## Offene Punkte / bekannte Grenzen

- **KI-Begleiter:** nicht umgesetzt – es gibt keine kostenlose KI-Schnittstelle ohne laufende Kosten; stattdessen regelbasierte Fragenhilfe.
- **Tägliche Schriftlesungen** (Leseordnung der Kirche) fehlen noch.
- **Heilige des Tages:** nur Heilige, die in der App ein Profil haben; vollständiger Kalender über den Prolog von Ohrid (Link).
- **Vollständiger Bibeltext** in der App: keine frei lizenzierte deutsche orthodoxe Bibel verfügbar; Verweis auf die eigene Bibel bzw. serbisches NT (Svetosavlje).
- **Erinnerungen an Gebetszeiten:** Web-Apps auf dem iPhone können nicht zuverlässig benachrichtigen; stattdessen Anleitung in den Einstellungen (Erinnerungen-App mit Link zum Gebetsbuch).
- Serbische Texte sollten von einem Muttersprachler bzw. Priester gegengelesen werden.

## Nächste Schritte (Reihenfolge)

1. Auf Wunsch des Nutzers vorerst **keine weiteren Heiligen**.
2. Weitere Lektionen zu wichtigen Kapiteln (z. B. Apostelgeschichte 15 – Apostelkonzil, Psalm 103 (104) – Vesperpsalm, Lukas 10 – Barmherziger Samariter, Johannes 17 – Hohepriesterliches Gebet, Hebräer 4–5).
3. Bibliothek: serbische Väterausgaben auf Svetosavlje genauer verlinken (Linkprüfung nötig; Web-Abruf benötigt Freigabe durch den Nutzer).
4. Gebetsbuch: Gebete vor und nach der Kommunion, nur mit geprüftem Wortlaut und Quellenangabe.
3. Gebetsbuch erweitern (z. B. Gebete vor und nach der Kommunion – nur mit geprüftem Wortlaut); echter Test auf dem iPhone durch den Nutzer.
4. Tägliche Schriftlesungen (Leseordnung) – nur, wenn eine verlässliche Quelle eingebunden werden kann.
5. Anleitung für Gebetserinnerungen über die iOS-Kurzbefehle-App.
6. Gegenlesen der serbischen Texte durch Muttersprachler.

## Sicherungspunkte

- Git-Historie im Repository `nidzojungbluth/orthodoxpath` (jede Version ein Commit).
- Lokaler Tag `v1.11-backup` und Archiv vor der Überarbeitung 2.0.
