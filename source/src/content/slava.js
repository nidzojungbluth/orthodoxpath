/* OrthodoxPath – Krsna slava: häufige Slava-Heilige (kirchliches = julianisches Datum m/d) und Erklärung des Brauchs. */
const SLAVAS = [
  ["nikoljdan", 12, 6, "Hl. Nikolaus (Nikoljdan)", "Свети Никола (Никољдан)", "s-nicholas"],
  ["letnji-nikola", 5, 9, "Hl. Nikolaus – Sommerfest (Übertragung der Reliquien)", "Летњи Свети Никола (Пренос моштију)", "s-nicholas"],
  ["djurdjevdan", 4, 23, "Hl. Georg (Đurđevdan)", "Свети Георгије (Ђурђевдан)", "s-george"],
  ["djurdjic", 11, 3, "Hl. Georg – Herbstfest (Đurđic)", "Свети Георгије – Ђурђиц", "s-george"],
  ["jovanjdan", 1, 7, "Hl. Johannes der Täufer (Jovanjdan)", "Свети Јован Крститељ (Јовањдан)", null],
  ["ivanjdan", 6, 24, "Geburt Johannes des Täufers (Ivanjdan)", "Рођење Светог Јована Крститеља (Ивањдан)", null],
  ["arandjelovdan", 11, 8, "Erzengel Michael (Aranđelovdan)", "Свети архангел Михаило (Аранђеловдан)", null],
  ["arh-gavrilo", 7, 13, "Erzengel Gabriel", "Свети архангел Гаврило", null],
  ["mitrovdan", 10, 26, "Hl. Demetrios (Mitrovdan)", "Свети Димитрије (Митровдан)", "s-demetrios"],
  ["petkovica", 10, 14, "Hl. Paraskeva (Petkovica)", "Света Петка (Петковица)", "s-petka"],
  ["lucindan", 10, 18, "Hl. Apostel Lukas (Lučindan)", "Свети апостол Лука (Лучиндан)", null],
  ["tomindan", 10, 6, "Hl. Apostel Thomas (Tomindan)", "Свети апостол Тома (Томиндан)", null],
  ["mratindan", 11, 11, "Hl. Martin (Mratindan)", "Свети Мрата (Мратиндан)", null],
  ["decanski", 11, 11, "Hl. König Stefan Dečanski", "Свети краљ Стефан Дечански", "s-stefan"],
  ["vraci", 11, 1, "Hll. Kosmas und Damian (Vrači)", "Свети Козма и Дамјан (Врачи)", null],
  ["andrej", 11, 30, "Hl. Apostel Andreas", "Свети апостол Андреј Првозвани", "s-andrew"],
  ["varvara", 12, 4, "Hl. Barbara", "Света Варвара", null],
  ["ignjatije", 12, 20, "Hl. Ignatius der Gottesträger", "Свети Игњатије Богоносац", "s-ignatius"],
  ["stevanjdan", 12, 27, "Hl. Erzdiakon Stephanus (Stevanjdan)", "Свети архиђакон Стефан (Стевањдан)", null],
  ["vasilije", 1, 1, "Hl. Basilius der Große", "Свети Василије Велики", "f-basil"],
  ["savindan", 1, 14, "Hl. Sava (Savindan)", "Свети Сава (Савиндан)", "s-sava"],
  ["tri-jerarha", 1, 30, "Drei Hierarchen", "Света три јерарха", null],
  ["trifundan", 2, 1, "Hl. Tryphon (Trifundan)", "Свети Трифун (Трифундан)", null],
  ["simeon", 2, 13, "Hl. Simeon der Myrrhenströmende", "Свети Симеон Мироточиви", "s-simeon"],
  ["vasilije-ostroski", 4, 29, "Hl. Vasilije von Ostrog", "Свети Василије Острошки", "s-vasilije"],
  ["jeremija", 5, 1, "Hl. Prophet Jeremia (Jeremijevdan)", "Свети пророк Јеремија (Јеремијевдан)", null],
  ["konstantin-jelena", 5, 21, "Hll. Konstantin und Helena", "Свети цар Константин и царица Јелена", null],
  ["vidovdan", 6, 15, "Hl. Fürst Lazar (Vidovdan)", "Свети кнез Лазар (Видовдан)", "s-lazar"],
  ["petrovdan", 6, 29, "Hll. Apostel Petrus und Paulus (Petrovdan)", "Свети апостоли Петар и Павле (Петровдан)", null],
  ["prokopije", 7, 8, "Hl. Prokopios (Prokopije)", "Свети Прокопије", "s-prokopije"],
  ["kirik", 7, 15, "Hll. Kyrikos und Julitta (Kirik i Julita)", "Свети Кирик и Јулита", null],
  ["ilindan", 7, 20, "Hl. Prophet Elija (Ilindan)", "Свети пророк Илија (Илиндан)", null],
  ["pantelejmon", 7, 27, "Hl. Panteleimon (Pantelinjdan)", "Свети Пантелејмон (Пантелинољдан)", null]
].map(([id, m, d, de, sr, person]) => ({ id, m, d, name: { de, sr }, person }));

const SLAVA_INFO = [
  { h: { de: "Was ist die Krsna slava?", sr: "Шта је крсна слава?" }, tag: "history",
    t: { de: "Die Slava ist das Fest des Schutzheiligen einer serbischen Familie. Sie wird meist vom Vater auf die Kinder vererbt und erinnert nach der Überlieferung an den Tag, an dem die Vorfahren getauft wurden. Seit 2014 steht sie auf der UNESCO-Liste des immateriellen Kulturerbes.", sr: "Слава је празник светитеља заштитника српске породице. Најчешће се наслеђује од оца на децу и, по предању, подсећа на дан кад су преци крштени. Од 2014. године налази се на Унесковој листи нематеријалног културног наслеђа." } },
  { h: { de: "Vorbereitung", sr: "Припрема" }, tag: "counsel",
    t: { de: "Vor dem Fest wird der Priester ins Haus eingeladen, um das Wasser zu segnen (Vodica) – in der Diaspora geschieht das oft auch in der Kirche. Man schreibt die Namen der lebenden und der verstorbenen Familienmitglieder auf, für die gebetet werden soll. Wer kann, bereitet sich durch Beichte und Kommunion vor.", sr: "Пре празника позива се свештеник у дом да освети водицу – у расејању се то често чини и у цркви. Записују се имена живих и упокојених чланова породице за које се моли. Ко може, припрема се исповешћу и причешћем." } },
  { h: { de: "Kerze, Kolač und Žito", sr: "Свећа, колач и жито" }, tag: "counsel",
    t: { de: "Am Festtag brennt die Slava-Kerze den ganzen Tag. Der Slavski kolač, ein verziertes Festbrot, wird vom Priester gesegnet: Er wird über Kreuz eingeschnitten, mit Wein übergossen, gemeinsam von Priester und Familie gedreht und gebrochen, während das Troparion des Heiligen gesungen wird. Das Žito (gekochter Weizen mit Zucker und Nüssen) wird zur Ehre des Heiligen und zum Gedenken an die verstorbenen Vorfahren bereitet.", sr: "На дан славе слава свећа гори цео дан. Славски колач, украшени празнични хлеб, благосиља свештеник: засеца се крстообразно, прелива вином, свештеник и домаћин га заједно окрећу и ломе, док се пева тропар светитеља. Жито (кувана пшеница са шећером и орасима) припрема се у славу светитеља и за спомен упокојених предака." } },
  { h: { de: "Das Fest", sr: "Славље" }, tag: "counsel",
    t: { de: "Danach folgt das Festmahl mit Familie und Gästen. Fällt die Slava auf einen Fasttag (zum Beispiel Nikoljdan in der Weihnachtsfastenzeit), ist auch das Festmahl ein Fastenmahl. Die Bräuche unterscheiden sich von Gegend zu Gegend – frage im Zweifel deinen Priester.", sr: "Затим следи свечани ручак са породицом и гостима. Ако слава падне у посни дан (на пример Никољдан у Божићном посту), и трпеза је посна. Обичаји се разликују од краја до краја – у недоумици питајте свог свештеника." } }
];
if (typeof module !== "undefined") module.exports = { SLAVAS, SLAVA_INFO };
