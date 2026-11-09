# OrthodoxPath – Entscheidungen

## Architektur
| # | Entscheidung | Begründung | Verworfene Alternativen |
|---|---|---|---|
| A1 | PWA statt nativer App | Nutzer hat nur ein iPhone, keinen Computer; kein Apple-Entwicklerkonto; kostenlos verteilbar per Link | Native iOS-App (Kosten, Xcode nötig), React Native/Flutter (Build-Umgebung nötig) |
| A2 | Kein Framework, eine gebündelte Datei | Einfach zu hosten (GitHub Pages, Artefakt), schnell offline, keine Abhängigkeiten, die veralten | React/Vue/Svelte (Build-Kette, größerer Wartungsaufwand) |
| A3 | Kein Server, kein Konto, Daten nur lokal (`localStorage`) | Datenschutz, keine Kosten, keine Passwörter beim Nutzer | Eigene Datenbank/Cloud (Kosten, Datenschutzpflichten) |
| A4 | Hash-Routing (`#route`) | Funktioniert auf statischem Hosting und im Artefakt; „settings“ reserviert → Seite heißt `prefs` | History-API (braucht Server-Umleitung) |
| A5 | Serbisch wird kyrillisch gepflegt, Latinica automatisch erzeugt (`translit`) | Eine Quelle, keine doppelte Pflege, keine Abweichungen | Zwei getrennte Textfassungen |
| A6 | Eingebettete Schrift (Cormorant Garamond, OFL) | Offline, keine Datenübertragung an Google, gleiches Bild überall | Google Fonts (extern, Datenschutz), nur Systemschrift (weniger hochwertig) |
| A7 | Notiz-Verschlüsselung lokal (AES-GCM, PBKDF2) | Schutz bei geteiltem Gerät ohne Server | Keine Verschlüsselung; Server-Verschlüsselung |
| A8 | Inhalte als JS-Datenobjekte, Einfügen per Generator-Skript | Testbar, kompakt, kein großes Datei-Lesen nötig | Markdown-Dateien (Parser nötig), Datenbank |
| A9 | Tests: Inhaltsprüfung + Playwright-Bedienungstests + Offline-Test | Fehler früh finden ohne echtes Gerät | Nur manuelle Tests |
| A10 | Service Worker „cache first“, Cache-Name pro Version | Schnell, offline; neue Version nach Neustart der App | Network-first (langsam offline) |

## Theologische und inhaltliche Grundsätze
1. Nur orthodoxe Lehre; keine protestantischen oder römisch-katholischen Lehraussagen als eigene Position.
2. **Keine erfundenen Zitate oder Gebete.** Väter werden zusammengefasst, nicht wörtlich zitiert, solange kein geprüfter Wortlaut vorliegt.
3. Jede Aussage wird gekennzeichnet: Glaubenslehre (dogma) · Historische Überlieferung (history) · Theologische Meinung (opinion) · Geistlicher Rat (counsel) · Unsicher/umstritten (uncertain).
4. Überlieferung (Legenden, Wunderberichte) wird als solche benannt; historische Unsicherheit offen gesagt.
5. Örtliche Unterschiede (Kalender, Fastenpraxis, Leseordnung) werden erwähnt; für die persönliche Praxis: „Sprich mit deinem Priester.“
6. Die App ersetzt keinen Priester und keine Beichte; Krisenhinweis bei entsprechenden Begriffen.
7. Keine Gamification mit Druck: keine Ranglisten, keine Strafen, keine Schuldgefühle (Serie wurde durch Wochenübersicht ersetzt).
8. Gebete: Kennzeichnung Traditionell / Bibelvers / Vorschlag; deutsche Texte als Arbeitsübersetzung ausgewiesen.
9. Bibel: Septuaginta-Zählung bei Psalmen zuerst; deuterokanonische Bücher (Anagignoskomena) als Teil der orthodoxen Bibel.
10. KI darf keine theologischen Aussagen als kirchliche Lehre ausgeben (siehe ROADMAP P4-03).
11. Nutzerwunsch (1.11.2026): vorerst keine weiteren Heiligen.
12. Ikonenbilder: zuerst (5.11.) live von Wikimedia geladen; ab 3.16 (9.11.2026) geändert, weil die Bilder beim Nutzer nicht erschienen: Bilder liegen als eigene Dateien in der App (img/icons, 1,6 MB, nicht in index.html eingebettet), Service Worker speichert sie in „orthodoxpath-img-v2“. Wird ein Bild ausgetauscht, muss dieser Speichername erhöht werden. Vorteil: offline, kein fremder Server, keine IP-Weitergabe.

## Verworfen bzw. zurückgestellt
- KI-Begleiter: keine kostenlose Lösung ohne laufende Kosten und ohne Datenweitergabe.
- Tägliche Lesungen: keine geprüfte, frei nutzbare Leseordnungs-Quelle.
- Vollständiger deutscher Bibeltext: keine frei lizenzierte orthodoxe Übersetzung.
- Push-Benachrichtigungen: auf iOS für Web-Apps nur eingeschränkt; Ersatz: Anleitung für die App „Erinnerungen“.
