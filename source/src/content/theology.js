/* OrthodoxPath – Theologie-Akademie (Kurs A, Kurs D) und Schwerpunktkurs hl. Paisios.
   Alle Texte sind eigene Zusammenfassungen. Keine erfundenen Zitate. */

const COURSES = [
  { id: "A", title: "courseA", desc: { de: "Die Grundwahrheiten des Glaubens, einfach und dann vertieft erklärt.", sr: "Основне истине вере, објашњене једноставно, а затим продубљено." } },
  { id: "P", title: "coursePaisios", desc: { de: "Leben und geistliche Lehre des hl. Paisios – mit klarer Quellenkennzeichnung.", sr: "Живот и духовно учење светог Пајсија – са јасним означавањем извора." } },
  { id: "D", title: "courseD", desc: { de: "Glaubensbekenntnis, Konzilien und wichtige Stationen der Kirchengeschichte.", sr: "Символ вере, сабори и важне етапе историје Цркве." } },
  { id: "L", title: "courseL", desc: { de: "Göttliche Liturgie, die großen Feste, Fastenzeiten, Kalender und die serbische Slava.", sr: "Света Литургија, велики празници, постови, календар и крсна слава." } },
];

const THEOLOGY = [
  /* ===================== KURS A ===================== */
  {
    id: "th-trinity", course: "A",
    title: { de: "Die Heilige Dreifaltigkeit", sr: "Света Тројица" },
    sections: [
      { h: { de: "Ein Gott in drei Personen", sr: "Један Бог у три Лица" },
        simple: { de: "Wir glauben an einen Gott: den Vater, den Sohn und den Heiligen Geist. Es sind nicht drei Götter, sondern ein Gott. Die drei Personen sind gleich ewig, gleich göttlich und lieben einander vollkommen.", sr: "Верујемо у једног Бога: Оца, Сина и Светога Духа. Нису три бога, него један Бог. Три Лица су подједнако вечна, подједнако божанска и савршено љубе једно друго." },
        deeper: { de: "Die Kirchenväter unterscheiden das eine göttliche Wesen (griechisch ousia) und die drei Personen (hypostasen). Der Vater ist die Quelle: Der Sohn wird vom Vater ewig gezeugt, der Heilige Geist geht vom Vater ewig aus. Diese Sprache wurde vor allem von den Kappadokischen Vätern (Basilius, Gregor von Nazianz, Gregor von Nyssa) geprägt und auf den Konzilien von Nizäa (325) und Konstantinopel (381) bekannt.", sr: "Свети Оци разликују једну божанску суштину (грчки усија) и три Лица (ипостаси). Отац је извор: Син се од Оца вечно рађа, а Дух Свети од Оца вечно исходи. Овај језик су пре свега уобличили Кападокијски Оци (Василије, Григорије Богослов, Григорије Ниски), а исповеђен је на саборима у Никеји (325) и Цариграду (381)." },
        tag: "dogma" },
      { h: { de: "Gott ist Liebe und Gemeinschaft", sr: "Бог је љубав и заједница" },
        simple: { de: "Weil Gott Dreifaltigkeit ist, ist er in sich selbst Liebe. Der Mensch ist nach seinem Bild geschaffen und darum zur Gemeinschaft berufen – mit Gott und mit den Menschen.", sr: "Пошто је Бог Тројица, Он је у себи самом љубав. Човек је створен по Његовом лику и зато је позван на заједницу – са Богом и са људима." },
        deeper: { de: "Die Dreifaltigkeit ist kein mathematisches Rätsel, sondern ein Geheimnis, das wir anbeten. Die orthodoxe Theologie betont, dass wir Gott nicht durch Begriffe einfangen, sondern ihn im Gebet, in der Liturgie und in einem reinen Leben erkennen.", sr: "Тројица није математичка загонетка, него тајна којој се клањамо. Православно богословље наглашава да Бога не обухватамо појмовима, него Га познајемо у молитви, на Литургији и у чистом животу." },
        tag: "dogma" }
    ],
    keyPoints: [
      { de: "Ein Wesen – drei Personen.", sr: "Једна суштина – три Лица." },
      { de: "Der Vater ist Quelle von Sohn und Geist.", sr: "Отац је извор Сина и Духа." },
      { de: "Bekannt auf den Konzilien 325 und 381.", sr: "Исповеђено на саборима 325. и 381." }
    ],
    bible: [
      { ref: { de: "Mt 28,19", sr: "Мт 28,19" }, note: { de: "Taufe auf den Namen des Vaters, des Sohnes und des Heiligen Geistes.", sr: "Крштење у име Оца и Сина и Светога Духа." } },
      { ref: { de: "Joh 15,26", sr: "Јн 15,26" }, note: { de: "Der Geist geht vom Vater aus.", sr: "Дух од Оца исходи." } },
      { ref: { de: "2 Kor 13,13", sr: "2 Кор 13,13" }, note: { de: "Gnade, Liebe und Gemeinschaft.", sr: "Благодат, љубав и заједница." } }
    ],
    practice: { de: "Bekreuzige dich bewusst und langsam: im Namen des Vaters und des Sohnes und des Heiligen Geistes. Jedes Kreuzzeichen ist ein kleines Glaubensbekenntnis.", sr: "Прекрстите се свесно и полако: у име Оца и Сина и Светога Духа. Сваки знак крста је мало исповедање вере." },
    questions: [
      { q: { de: "Was ist der Unterschied zwischen Wesen und Person?", sr: "Која је разлика између суштине и лица?" }, a: { de: "Das Wesen ist das, was Gott ist (eines). Die Person ist, wer Gott ist (Vater, Sohn, Geist).", sr: "Суштина је оно што Бог јесте (једна). Лице је ко Бог јесте (Отац, Син, Дух)." } },
      { q: { de: "Von wem geht der Heilige Geist nach orthodoxer Lehre aus?", sr: "Од кога, према православном учењу, исходи Дух Свети?" }, a: { de: "Vom Vater (vgl. Joh 15,26 und das Glaubensbekenntnis von 381).", sr: "Од Оца (уп. Јн 15,26 и Символ вере из 381)." } }
    ],
    quiz: [
      { q: { de: "Welche Väter prägten die Sprache „ein Wesen – drei Personen“ besonders?", sr: "Који Оци су посебно уобличили језик „једна суштина – три Лица“?" }, options: [{ de: "Die Kappadokischen Väter", sr: "Кападокијски Оци" }, { de: "Die Apostolischen Väter", sr: "Апостолски Оци" }, { de: "Die Wüstenväter", sr: "Пустињски Оци" }], correct: 0 },
      { q: { de: "Der Sohn wird vom Vater …", sr: "Син се од Оца …" }, options: [{ de: "ewig gezeugt", sr: "вечно рађа" }, { de: "in der Zeit erschaffen", sr: "у времену ствара" }, { de: "adoptiert", sr: "усињује" }], correct: 0 },
      { q: { de: "Wie viele Götter bekennen Christen?", sr: "Колико богова исповедају хришћани?" }, options: [{ de: "Einen", sr: "Једног" }, { de: "Drei", sr: "Три" }], correct: 0 }
    ],
    sources: { de: "Glaubensbekenntnis von Nizäa-Konstantinopel; Schriften der Kappadokischen Väter (frei verfügbar in NPNF II/5, II/7, II/8).", sr: "Никејско-цариградски Символ вере; списи Кападокијских Отаца (слободно доступни у NPNF II/5, II/7, II/8)." }
  },
  {
    id: "th-incarnation", course: "A",
    title: { de: "Die Menschwerdung Christi", sr: "Оваплоћење Христово" },
    sections: [
      { h: { de: "Wahrer Gott und wahrer Mensch", sr: "Истинити Бог и истинити човек" },
        simple: { de: "Der Sohn Gottes ist von der Jungfrau Maria geboren und Mensch geworden. Er hat einen Leib und eine menschliche Seele angenommen. Er ist ganz Gott und ganz Mensch – eine Person.", sr: "Син Божији рођен је од Дјеве Марије и постао је човек. Примио је тело и људску душу. Он је потпуно Бог и потпуно човек – једно Лице." },
        deeper: { de: "Das Konzil von Chalcedon (451) bekannte: In Christus sind die göttliche und die menschliche Natur unvermischt, unverwandelt, ungetrennt und ungesondert in einer Person vereint. Das sechste Konzil (680/681) ergänzte: Christus hat auch einen göttlichen und einen menschlichen Willen, wobei der menschliche dem göttlichen frei folgt.", sr: "Халкидонски сабор (451) исповедио је: у Христу су божанска и људска природа сједињене у једном Лицу несливено, непретворено, нераздељиво и неразлучно. Шести сабор (680/681) допунио је: Христос има и божанску и људску вољу, при чему људска слободно следи божанску." },
        tag: "dogma" },
      { h: { de: "Warum wurde Gott Mensch?", sr: "Зашто је Бог постао човек?" },
        simple: { de: "Gott wurde Mensch, um uns von Sünde und Tod zu befreien und uns wieder mit sich zu verbinden.", sr: "Бог је постао човек да нас ослободи од греха и смрти и поново нас сједини са собом." },
        deeper: { de: "Die Kirchenväter fassen es oft so zusammen: Gott wurde Mensch, damit der Mensch durch Gnade vergöttlicht werde. Diese Grundidee findet sich unter anderem beim hl. Athanasius in „Über die Menschwerdung des Wortes“. Was Christus nicht angenommen hätte, wäre nicht geheilt – darum nahm er die ganze menschliche Natur an (ein Gedanke des hl. Gregor von Nazianz gegen die Irrlehre des Apollinaris).", sr: "Свети Оци то често сажимају овако: Бог је постао човек да би човек по благодати постао бог. Ова основна мисао налази се између осталих код светог Атанасија у делу „О оваплоћењу Логоса“. Оно што Христос не би примио, не би било ни исцељено – зато је примио целу људску природу (мисао светог Григорија Богослова против јереси Аполинарија)." },
        tag: "dogma" }
    ],
    keyPoints: [
      { de: "Eine Person – zwei Naturen (Chalcedon 451).", sr: "Једно Лице – две природе (Халкидон 451)." },
      { de: "Zwei Willen in Christus (680/681).", sr: "Две воље у Христу (680/681)." },
      { de: "Ziel: Heilung und Vergöttlichung des Menschen.", sr: "Циљ: исцељење и обожење човека." }
    ],
    bible: [
      { ref: { de: "Joh 1,14", sr: "Јн 1,14" }, note: { de: "Das Wort ist Fleisch geworden.", sr: "Реч постаде тело." } },
      { ref: { de: "Lk 1,26–38", sr: "Лк 1,26–38" }, note: { de: "Die Verkündigung an Maria.", sr: "Благовести Марији." } },
      { ref: { de: "Hebr 4,15", sr: "Јев 4,15" }, note: { de: "Versucht wie wir, doch ohne Sünde.", sr: "Искушан као ми, али без греха." } }
    ],
    practice: { de: "Christus hat unser ganzes Menschsein angenommen – auch Arbeit, Müdigkeit und Schmerz. Biete ihm heute bewusst eine schwere Stunde deines Tages an.", sr: "Христос је примио цело наше човештво – и рад, умор и бол. Принесите Му данас свесно један тежак час свог дана." },
    questions: [
      { q: { de: "Was bekannte das Konzil von Chalcedon?", sr: "Шта је исповедио Халкидонски сабор?" }, a: { de: "Zwei Naturen in einer Person, unvermischt, unverwandelt, ungetrennt und ungesondert.", sr: "Две природе у једном Лицу, несливено, непретворено, нераздељиво и неразлучно." } },
      { q: { de: "Warum ist es wichtig, dass Christus eine menschliche Seele hat?", sr: "Зашто је важно да Христос има људску душу?" }, a: { de: "Weil nur das geheilt wird, was angenommen wurde. Christus heilt den ganzen Menschen.", sr: "Зато што се исцељује само оно што је примљено. Христос исцељује целог човека." } }
    ],
    quiz: [
      { q: { de: "In welchem Jahr tagte das Konzil von Chalcedon?", sr: "Које године је одржан Халкидонски сабор?" }, options: [{ de: "325", sr: "325." }, { de: "451", sr: "451." }, { de: "787", sr: "787." }], correct: 1 },
      { q: { de: "Wie viele Willen hat Christus nach orthodoxer Lehre?", sr: "Колико воља има Христос према православном учењу?" }, options: [{ de: "Einen", sr: "Једну" }, { de: "Zwei", sr: "Две" }, { de: "Drei", sr: "Три" }], correct: 1 },
      { q: { de: "Gegen welche Irrlehre richtete sich der Gedanke „Was nicht angenommen ist, ist nicht geheilt“?", sr: "Против које јереси је била упућена мисао „Што није примљено, није исцељено“?" }, options: [{ de: "Apollinarismus", sr: "Аполинаризам" }, { de: "Ikonoklasmus", sr: "Иконоборство" }], correct: 0 }
    ],
    sources: { de: "Definition von Chalcedon (451); Athanasius, De incarnatione (BKV); Gregor von Nazianz, Brief 101 an Kledonius (NPNF II/7).", sr: "Халкидонски орос (451); Атанасије, О оваплоћењу (BKV); Григорије Богослов, Посланица 101 Кледонију (NPNF II/7)." }
  },
  {
    id: "th-cross", course: "A",
    title: { de: "Kreuz und Auferstehung", sr: "Крст и Васкрсење" },
    sections: [
      { h: { de: "Der Sieg über den Tod", sr: "Победа над смрћу" },
        simple: { de: "Christus ist freiwillig für uns gestorben. Am dritten Tag ist er von den Toten auferstanden. Damit hat er den Tod besiegt und uns das ewige Leben geöffnet.", sr: "Христос је добровољно умро за нас. Трећег дана је васкрсао из мртвих. Тиме је победио смрт и отворио нам вечни живот." },
        deeper: { de: "Die orthodoxe Kirche betrachtet Kreuz und Auferstehung immer zusammen. Das Osterlied (Troparion) besingt, dass Christus durch seinen Tod den Tod zertreten hat. Der Abstieg Christi in das Totenreich und die Befreiung Adams und Evas ist das zentrale Bild der orthodoxen Osterikone (Anastasis).", sr: "Православна Црква увек посматра Крст и Васкрсење заједно. Васкршњи тропар пева да је Христос смрћу смрт победио. Силазак Христов у ад и ослобођење Адама и Еве главна је слика православне васкршње иконе (Васкрсење)." },
        tag: "dogma" },
      { h: { de: "Ostern als Fest der Feste", sr: "Васкрс као празник над празницима" },
        simple: { de: "Ostern (Pascha) ist das größte Fest der Kirche. Jeder Sonntag ist ein kleines Osterfest.", sr: "Васкрс (Пасха) је највећи празник Цркве. Свака недеља је мали Васкрс." },
        deeper: { de: "Das Osterdatum wird in der orthodoxen Kirche nach dem julianischen Kalender berechnet, nach der Regel des Ersten Konzils. Deshalb fällt orthodoxe Ostern oft auf ein anderes Datum als in anderen Kirchen.", sr: "Датум Васкрса у Православној Цркви рачуна се по јулијанском календару, према правилу Првог сабора. Зато православни Васкрс често пада другог датума него у другим црквама." },
        tag: "history" }
    ],
    keyPoints: [
      { de: "Christus starb freiwillig und ist leiblich auferstanden.", sr: "Христос је умро добровољно и телесно васкрсао." },
      { de: "Durch den Tod hat er den Tod besiegt.", sr: "Смрћу је победио смрт." },
      { de: "Jeder Sonntag ist ein Gedächtnis der Auferstehung.", sr: "Свака недеља је спомен Васкрсења." }
    ],
    bible: [
      { ref: { de: "1 Kor 15,3–8", sr: "1 Кор 15,3–8" }, note: { de: "Das älteste Osterbekenntnis.", sr: "Најстарије исповедање Васкрсења." } },
      { ref: { de: "1 Kor 15,54–57", sr: "1 Кор 15,54–57" }, note: { de: "Der Tod ist verschlungen in den Sieg.", sr: "Смрт је прождрта победом." } },
      { ref: { de: "Joh 20", sr: "Јн 20" }, note: { de: "Das leere Grab und die Erscheinungen.", sr: "Празан гроб и јављања." } }
    ],
    practice: { de: "Begrüße die Mitchristen in der Osterzeit mit dem Ostergruß „Christus ist auferstanden!“ – „Er ist wahrhaft auferstanden!“", sr: "У васкршње време поздрављајте браћу и сестре васкршњим поздравом „Христос васкрсе!“ – „Ваистину васкрсе!“" },
    questions: [
      { q: { de: "Was zeigt die orthodoxe Osterikone?", sr: "Шта приказује православна васкршња икона?" }, a: { de: "Christus steigt in das Totenreich hinab, zerbricht dessen Tore und zieht Adam und Eva aus den Gräbern.", sr: "Христос силази у ад, разбија његове двери и извлачи Адама и Еву из гробова." } },
      { q: { de: "Warum fällt orthodoxe Ostern oft auf ein anderes Datum?", sr: "Зашто православни Васкрс често пада другог датума?" }, a: { de: "Weil die Berechnung nach dem julianischen Kalender erfolgt.", sr: "Зато што се рачуна по јулијанском календару." } }
    ],
    quiz: [
      { q: { de: "Wie lautet die Antwort auf „Christus ist auferstanden!“?", sr: "Како гласи одговор на „Христос васкрсе!“?" }, options: [{ de: "Er ist wahrhaft auferstanden!", sr: "Ваистину васкрсе!" }, { de: "Amen.", sr: "Амин." }, { de: "Gott sei Dank.", sr: "Хвала Богу." }], correct: 0 },
      { q: { de: "Wie heißt die orthodoxe Osterikone?", sr: "Како се зове православна васкршња икона?" }, options: [{ de: "Anastasis (Auferstehung)", sr: "Анастасис (Васкрсење)" }, { de: "Hodigitria", sr: "Одигитрија" }, { de: "Deesis", sr: "Деисис" }], correct: 0 }
    ],
    sources: { de: "Liturgische Texte der Osterzeit (Pentekostarion); 1 Kor 15.", sr: "Богослужбени текстови васкршњег периода (Цветни триод); 1 Кор 15." }
  },
  {
    id: "th-theosis", course: "A",
    title: { de: "Erlösung und Theosis", sr: "Спасење и обожење" },
    sections: [
      { h: { de: "Was bedeutet Erlösung?", sr: "Шта значи спасење?" },
        simple: { de: "Erlösung heißt: Gott befreit uns von Sünde, Tod und der Macht des Bösen und schenkt uns neues Leben in Gemeinschaft mit ihm.", sr: "Спасење значи: Бог нас ослобађа од греха, смрти и власти зла и дарује нам нов живот у заједници са Њим." },
        deeper: { de: "Die orthodoxe Überlieferung beschreibt die Erlösung vor allem als Heilung, Befreiung und Wiederherstellung des Bildes Gottes im Menschen. Sie ist kein einmaliger juristischer Freispruch, sondern ein lebendiger Weg in der Kirche: durch Taufe, Myronsalbung, Eucharistie, Umkehr und ein Leben nach den Geboten.", sr: "Православно предање описује спасење пре свега као исцељење, ослобођење и обнову лика Божијег у човеку. Оно није једнократно правно ослобађање, него живи пут у Цркви: кроз крштење, миропомазање, Евхаристију, покајање и живот по заповестима." },
        tag: "dogma" },
      { h: { de: "Theosis – Vergöttlichung durch Gnade", sr: "Обожење – по благодати" },
        simple: { de: "Theosis bedeutet: Der Mensch wird durch Gottes Gnade Gott immer ähnlicher. Er wird nicht Gott dem Wesen nach, sondern hat Anteil an Gottes Leben.", sr: "Обожење значи: човек благодаћу Божијом постаје све сличнији Богу. Он не постаје Бог по суштини, него има удела у Божијем животу." },
        deeper: { de: "Die Kirche unterscheidet Gottes unzugängliches Wesen und seine ungeschaffenen Energien (Wirkungen). Der Mensch kann nie Gottes Wesen erfassen, aber durch die Energien wirklich mit Gott vereint werden. Diese Unterscheidung wurde im 14. Jahrhundert vom hl. Gregor Palamas verteidigt und von Konzilien in Konstantinopel (1341–1351) bestätigt.", sr: "Црква разликује Божију неприступну суштину и Његове нестворене енергије (дејства). Човек никада не може да обухвати Божију суштину, али кроз енергије може истински да се сједини са Богом. Ово разликовање бранио је у 14. веку свети Григорије Палама, а потврдили су га сабори у Цариграду (1341–1351)." },
        tag: "dogma" }
    ],
    keyPoints: [
      { de: "Erlösung ist Heilung und neues Leben.", sr: "Спасење је исцељење и нов живот." },
      { de: "Theosis: Teilhabe an Gott durch Gnade, nicht dem Wesen nach.", sr: "Обожење: удео у Богу по благодати, а не по суштини." },
      { de: "Wesen und Energien Gottes werden unterschieden.", sr: "Разликују се суштина и енергије Божије." }
    ],
    bible: [
      { ref: { de: "2 Petr 1,4", sr: "2 Пт 1,4" }, note: { de: "Teilhaber der göttlichen Natur.", sr: "Заједничари божанске природе." } },
      { ref: { de: "Gen 1,26–27", sr: "Пост 1,26–27" }, note: { de: "Nach Gottes Bild und Ähnlichkeit.", sr: "По лику и подобију Божијем." } },
      { ref: { de: "Gal 2,20", sr: "Гал 2,20" }, note: { de: "Christus lebt in mir.", sr: "Христос живи у мени." } }
    ],
    practice: { de: "Theosis beginnt im Kleinen: Gebet, Teilnahme an der Liturgie, Kommunion nach Vorbereitung und Absprache mit dem Priester, und Werke der Liebe.", sr: "Обожење почиње у малом: молитва, учешће на Литургији, причешће уз припрему и договор са свештеником, и дела љубави." },
    questions: [
      { q: { de: "Wird der Mensch in der Theosis Gott dem Wesen nach?", sr: "Да ли човек у обожењу постаје Бог по суштини?" }, a: { de: "Nein. Er hat durch die Gnade (die ungeschaffenen Energien) Anteil an Gott, bleibt aber Geschöpf.", sr: "Не. Он благодаћу (нествореним енергијама) има удела у Богу, али остаје створење." } },
      { q: { de: "Wer verteidigte die Unterscheidung von Wesen und Energien?", sr: "Ко је бранио разликовање суштине и енергија?" }, a: { de: "Der hl. Gregor Palamas im 14. Jahrhundert.", sr: "Свети Григорије Палама у 14. веку." } }
    ],
    quiz: [
      { q: { de: "Welche Bibelstelle spricht von „Teilhabern der göttlichen Natur“?", sr: "Које место у Писму говори о „заједничарима божанске природе“?" }, options: [{ de: "2 Petr 1,4", sr: "2 Пт 1,4" }, { de: "Röm 3,23", sr: "Рим 3,23" }, { de: "Offb 21,1", sr: "Отк 21,1" }], correct: 0 },
      { q: { de: "Theosis geschieht …", sr: "Обожење се дешава …" }, options: [{ de: "durch Gnade", sr: "по благодати" }, { de: "durch eigene Kraft allein", sr: "само сопственом снагом" }, { de: "durch geheimes Wissen", sr: "тајним знањем" }], correct: 0 },
      { q: { de: "In welchem Jahrhundert wirkte Gregor Palamas?", sr: "У ком веку је деловао Григорије Палама?" }, options: [{ de: "4.", sr: "4." }, { de: "9.", sr: "9." }, { de: "14.", sr: "14." }], correct: 2 }
    ],
    sources: { de: "2 Petr 1,4; Athanasius, De incarnatione; Synodalbeschlüsse von Konstantinopel 1341/1351 (historische Angabe).", sr: "2 Пт 1,4; Атанасије, О оваплоћењу; одлуке цариградских сабора 1341/1351 (историјски податак)." }
  },
  {
    id: "th-repentance", course: "A",
    title: { de: "Sünde, Umkehr und Beichte", sr: "Грех, покајање и исповест" },
    sections: [
      { h: { de: "Was ist Sünde?", sr: "Шта је грех?" },
        simple: { de: "Sünde bedeutet, das Ziel zu verfehlen: sich von Gott und vom wahren Leben abzuwenden. Sie verletzt uns selbst, andere Menschen und unsere Beziehung zu Gott.", sr: "Грех значи промашити циљ: окренути се од Бога и од истинског живота. Он рањава нас саме, друге људе и наш однос са Богом." },
        deeper: { de: "Das griechische Wort hamartia bedeutet „Zielverfehlung“. Die Kirchenväter beschreiben Sünde häufig als Krankheit der Seele, die Heilung braucht. Darum nennt man die Kirche auch ein geistliches Krankenhaus.", sr: "Грчка реч хамартија значи „промашај циља“. Свети Оци често описују грех као болест душе којој је потребно исцељење. Зато се Црква назива и духовном болницом." },
        tag: "opinion" },
      { h: { de: "Das Mysterium der Beichte", sr: "Света тајна исповести" },
        simple: { de: "In der Beichte bekennen wir vor Gott in Anwesenheit des Priesters unsere Sünden. Der Priester betet über uns, und Gott vergibt.", sr: "На исповести исповедамо своје грехе пред Богом у присуству свештеника. Свештеник се моли над нама, и Бог опрашта." },
        deeper: { de: "Die Beichte ist eines der heiligen Mysterien. Christus gab den Aposteln die Vollmacht, Sünden zu vergeben (Joh 20,22–23). In der orthodoxen Praxis steht der Gläubige oft vor einer Ikone Christi oder vor dem Evangelium; der Priester ist Zeuge und Helfer. Wie oft man beichtet und wie man sich auf die Kommunion vorbereitet, bespricht man mit seinem Priester – hier gibt es Unterschiede zwischen Ortskirchen.", sr: "Исповест је једна од светих тајни. Христос је апостолима дао власт да опраштају грехе (Јн 20,22–23). У православној пракси верник често стоји пред иконом Христовом или пред Јеванђељем; свештеник је сведок и помоћник. Колико често се исповедати и како се припремати за причешће договара се са свештеником – ту постоје разлике међу помесним Црквама." },
        tag: "dogma" }
    ],
    keyPoints: [
      { de: "Sünde = Zielverfehlung, Krankheit der Seele.", sr: "Грех = промашај циља, болест душе." },
      { de: "Umkehr = Veränderung des Sinnes.", sr: "Покајање = промена ума." },
      { de: "Beichte ist ein heiliges Mysterium.", sr: "Исповест је света тајна." }
    ],
    bible: [
      { ref: { de: "Joh 20,22–23", sr: "Јн 20,22–23" }, note: { de: "Vollmacht zur Sündenvergebung.", sr: "Власт отпуштања грехова." } },
      { ref: { de: "Jak 5,16", sr: "Јак 5,16" }, note: { de: "Bekennt einander die Sünden.", sr: "Исповедајте једни другима грехе." } },
      { ref: { de: "Lk 15,11–32", sr: "Лк 15,11–32" }, note: { de: "Der verlorene Sohn.", sr: "Блудни син." } }
    ],
    practice: { de: "Gewissenserforschung am Abend: Wofür danke ich Gott heute? Wo habe ich gefehlt? Was will ich morgen besser machen? Bitte dann kurz um Vergebung.", sr: "Испитивање савести увече: на чему данас захваљујем Богу? Где сам погрешио? Шта сутра желим да урадим боље? Затим укратко замолите за опроштај." },
    questions: [
      { q: { de: "Was bedeutet das griechische Wort hamartia?", sr: "Шта значи грчка реч хамартија?" }, a: { de: "Zielverfehlung.", sr: "Промашај циља." } },
      { q: { de: "Mit wem bespricht man die Häufigkeit der Beichte?", sr: "Са ким се договара колико често се исповедати?" }, a: { de: "Mit dem eigenen Priester bzw. geistlichen Vater.", sr: "Са својим свештеником, односно духовником." } }
    ],
    quiz: [
      { q: { de: "Welche Bibelstelle berichtet von der Vollmacht zur Sündenvergebung?", sr: "Које место у Писму говори о власти отпуштања грехова?" }, options: [{ de: "Joh 20,22–23", sr: "Јн 20,22–23" }, { de: "Gen 3,1", sr: "Пост 3,1" }], correct: 0 },
      { q: { de: "Die Kirche wird bildlich oft genannt …", sr: "Црква се сликовито често назива …" }, options: [{ de: "ein geistliches Krankenhaus", sr: "духовна болница" }, { de: "ein Gericht", sr: "суд" }, { de: "eine Schule ohne Lehrer", sr: "школа без учитеља" }], correct: 0 }
    ],
    sources: { de: "Joh 20,22–23; Jak 5,16; allgemeine patristische Lehre (Zusammenfassung).", sr: "Јн 20,22–23; Јак 5,16; опште светоотачко учење (сажетак)." }
  },
  {
    id: "th-prayer", course: "A",
    title: { de: "Gebet und geistliche Wachsamkeit", sr: "Молитва и духовно трезвоумље" },
    sections: [
      { h: { de: "Beten lernen", sr: "Учити се молитви" },
        simple: { de: "Beten heißt, mit Gott zu sprechen und vor ihm zu sein. Orthodoxe Christen beten morgens und abends mit dem Gebetbuch, vor Ikonen und mit kurzen Gebeten während des Tages.", sr: "Молити се значи разговарати са Богом и бити пред Њим. Православни хришћани се моле ујутру и увече из молитвеника, пред иконама, и кратким молитвама током дана." },
        deeper: { de: "Ein Schatz der orthodoxen Überlieferung ist das Jesusgebet: „Herr Jesus Christus, Sohn Gottes, erbarme dich meiner.“ (Es gibt auch Formen mit „… meiner, des Sünders“.) Es wird oft mit einer Gebetsschnur (griechisch komboskini, serbisch brojanica) gebetet. Die Schrift Philokalie sammelt Texte über dieses Gebet. Für eine intensive Gebetspraxis ist die Begleitung durch einen erfahrenen geistlichen Vater wichtig.", sr: "Благо православног предања је Исусова молитва: „Господе Исусе Христе, Сине Божији, помилуј ме.“ (Постоје и облици са „… мене грешног“.) Често се моли уз бројаницу. Добротољубље сабира текстове о овој молитви. За интензивну молитвену праксу важно је вођство искусног духовника." },
        tag: "counsel" },
      { h: { de: "Wachsamkeit (Nepsis)", sr: "Трезвоумље (непсис)" },
        simple: { de: "Wachsamkeit bedeutet, auf seine Gedanken zu achten und böse Gedanken früh abzuweisen – bevor sie zu Taten werden.", sr: "Трезвоумље значи пазити на своје мисли и рано одбацивати зле помисли – пре него што постану дела." },
        deeper: { de: "Die asketischen Väter beschreiben, wie eine Versuchung beginnt: als Anregung, dann als Gespräch mit dem Gedanken, dann als Zustimmung und schließlich als Tat und Gewohnheit. Wer früh wachsam ist, kämpft leichter.", sr: "Подвижнички Оци описују како почиње искушење: као прилог (наговештај), затим као разговор са помишљу, затим као пристанак и најзад као дело и навика. Ко је рано трезвен, лакше се бори." },
        tag: "counsel" }
    ],
    keyPoints: [
      { de: "Regelmäßiges Morgen- und Abendgebet.", sr: "Редовна јутарња и вечерња молитва." },
      { de: "Das Jesusgebet als kurzes Herzensgebet.", sr: "Исусова молитва као кратка молитва срца." },
      { de: "Wachsamkeit über die Gedanken.", sr: "Трезвоумље над помислима." }
    ],
    bible: [
      { ref: { de: "1 Thess 5,17", sr: "1 Сол 5,17" }, note: { de: "Betet ohne Unterlass.", sr: "Молите се без престанка." } },
      { ref: { de: "Mt 6,5–13", sr: "Мт 6,5–13" }, note: { de: "Das Vaterunser.", sr: "Молитва Господња (Оче наш)." } },
      { ref: { de: "Lk 18,38", sr: "Лк 18,38" }, note: { de: "Der Blinde ruft um Erbarmen.", sr: "Слепац вапи за милост." } }
    ],
    practice: { de: "Beginne mit wenig, aber regelmäßig: z. B. 5 Minuten morgens und abends. Lieber kurz und treu als lang und unregelmäßig.", sr: "Почните са мало, али редовно: нпр. 5 минута ујутру и увече. Боље кратко и верно, него дуго и нередовно." },
    questions: [
      { q: { de: "Wie lautet das Jesusgebet in seiner kurzen Form?", sr: "Како гласи Исусова молитва у краћем облику?" }, a: { de: "Herr Jesus Christus, Sohn Gottes, erbarme dich meiner.", sr: "Господе Исусе Христе, Сине Божији, помилуј ме." } },
      { q: { de: "Warum ist frühe Wachsamkeit wichtig?", sr: "Зашто је рано трезвоумље важно?" }, a: { de: "Weil ein Gedanke leichter abgewiesen wird, bevor man ihm zustimmt und er zur Gewohnheit wird.", sr: "Зато што се помисао лакше одбацује пре него што јој човек пристане и она постане навика." } }
    ],
    quiz: [
      { q: { de: "Wie heißt die Sammlung von Texten über das Herzensgebet?", sr: "Како се зове збирка текстова о молитви срца?" }, options: [{ de: "Philokalie", sr: "Добротољубље" }, { de: "Typikon", sr: "Типик" }, { de: "Oktoechos", sr: "Октоих" }], correct: 0 },
      { q: { de: "Was bedeutet Nepsis?", sr: "Шта значи непсис?" }, options: [{ de: "Wachsamkeit / Nüchternheit", sr: "Трезвоумље" }, { de: "Fasten", sr: "Пост" }, { de: "Lobgesang", sr: "Похвална песма" }], correct: 0 }
    ],
    sources: { de: "Philokalie (Sammlung asketischer Texte, 18. Jh. herausgegeben); serbische Ausgabe „Dobrotoljublje“ frei auf Svetosavlje.", sr: "Добротољубље (збирка подвижничких текстова, издата у 18. веку); српско издање слободно доступно на сајту Светосавље." }
  },
  {
    id: "th-church", course: "A",
    title: { de: "Kirche, Mysterien, Gottesgebärerin und Ikonen", sr: "Црква, свете тајне, Богородица и иконе" },
    sections: [
      { h: { de: "Die Kirche als Leib Christi", sr: "Црква као Тело Христово" },
        simple: { de: "Die Kirche ist nicht nur ein Gebäude, sondern die Gemeinschaft der Gläubigen mit Christus als Haupt. In ihr empfangen wir die heiligen Mysterien (Sakramente).", sr: "Црква није само зграда, него заједница верних са Христом као Главом. У њој примамо свете тајне." },
        deeper: { de: "Zu den heiligen Mysterien zählen besonders Taufe, Myronsalbung, Eucharistie, Beichte, Priesterweihe, Ehe und Krankensalbung. Die Zahl Sieben ist in der späteren Theologie üblich geworden; die Väter sprechen allgemeiner von den Mysterien der Kirche. Die Eucharistie in der Göttlichen Liturgie ist die Mitte des kirchlichen Lebens.", sr: "У свете тајне посебно спадају крштење, миропомазање, Евхаристија, исповест, свештенство, брак и јелеосвећење. Број седам је постао уобичајен у каснијем богословљу; Оци говоре уопштеније о тајнама Цркве. Евхаристија на Светој Литургији је средиште црквеног живота." },
        tag: "dogma" },
      { h: { de: "Gottesgebärerin und Heilige", sr: "Богородица и светитељи" },
        simple: { de: "Maria heißt Gottesgebärerin (Theotokos), weil das Kind, das sie gebar, Gott ist. Wir verehren sie und die Heiligen und bitten sie um ihr Gebet. Angebetet wird allein Gott.", sr: "Марија се зове Богородица, јер је Дете које је родила Бог. Ми поштујемо њу и светитеље и молимо их за молитве. Клањамо се само Богу." },
        deeper: { de: "Der Titel Theotokos wurde auf dem Konzil von Ephesus (431) bestätigt, um die Einheit der Person Christi zu schützen. Die Verehrung der Heiligen gründet darin, dass sie in Christus leben und ihn widerspiegeln.", sr: "Назив Богородица потврђен је на Ефеском сабору (431), да би се заштитило јединство Христове Личности. Поштовање светитеља заснива се на томе да они живе у Христу и одражавају Га." },
        tag: "dogma" },
      { h: { de: "Ikonen", sr: "Иконе" },
        simple: { de: "Ikonen sind heilige Bilder. Wir küssen sie und beten vor ihnen. Die Ehre geht auf die dargestellte Person über.", sr: "Иконе су свети ликови. Целивамо их и молимо се пред њима. Част прелази на личност која је приказана." },
        deeper: { de: "Das Siebte Ökumenische Konzil (Nizäa 787) unterschied zwischen Verehrung (für Ikonen und Heilige) und Anbetung (allein für Gott). Weil Gott in Christus sichtbar Mensch geworden ist, darf er dargestellt werden – das ist der christologische Kern der Ikonentheologie.", sr: "Седми васељенски сабор (Никеја 787) разликовао је поштовање (за иконе и светитеље) од поклоњења (само Богу). Пошто је Бог у Христу видљиво постао човек, сме се изображавати – то је христолошко језгро богословља иконе." },
        tag: "dogma" }
    ],
    keyPoints: [
      { de: "Christus ist das Haupt der Kirche.", sr: "Христос је Глава Цркве." },
      { de: "Theotokos: Konzil von Ephesus 431.", sr: "Богородица: Ефески сабор 431." },
      { de: "Verehrung ≠ Anbetung (Nizäa 787).", sr: "Поштовање ≠ поклоњење (Никеја 787)." }
    ],
    bible: [
      { ref: { de: "Eph 1,22–23", sr: "Еф 1,22–23" }, note: { de: "Die Kirche ist sein Leib.", sr: "Црква је Његово тело." } },
      { ref: { de: "Lk 1,42–48", sr: "Лк 1,42–48" }, note: { de: "Alle Geschlechter preisen Maria selig.", sr: "Сви нараштаји ублажавају Марију." } },
      { ref: { de: "Kol 1,15", sr: "Кол 1,15" }, note: { de: "Christus, das Bild des unsichtbaren Gottes.", sr: "Христос, икона Бога невидљивога." } }
    ],
    practice: { de: "Richte dir, wenn möglich, eine kleine Gebetsecke mit einer Ikone ein. Wenn du Fragen zur Teilnahme an der Liturgie oder zur Kommunion hast, sprich mit dem Priester deiner Gemeinde.", sr: "Ако је могуће, уредите мали молитвени кутак са иконом. Ако имате питања о учешћу на Литургији или о причешћу, разговарајте са свештеником своје парохије." },
    questions: [
      { q: { de: "Warum heißt Maria Gottesgebärerin?", sr: "Зашто се Марија зове Богородица?" }, a: { de: "Weil der von ihr Geborene der menschgewordene Gott ist.", sr: "Зато што је Онај кога је родила оваплоћени Бог." } },
      { q: { de: "Was unterschied das Konzil von 787?", sr: "Шта је разликовао сабор из 787?" }, a: { de: "Verehrung der Ikonen und Anbetung, die allein Gott gebührt.", sr: "Поштовање икона од поклоњења које припада само Богу." } }
    ],
    quiz: [
      { q: { de: "Welches Konzil bestätigte den Titel Theotokos?", sr: "Који сабор је потврдио назив Богородица?" }, options: [{ de: "Ephesus 431", sr: "Ефес 431." }, { de: "Nizäa 325", sr: "Никеја 325." }, { de: "Konstantinopel 553", sr: "Цариград 553." }], correct: 0 },
      { q: { de: "Was ist die Mitte des kirchlichen Lebens?", sr: "Шта је средиште црквеног живота?" }, options: [{ de: "Die Eucharistie", sr: "Евхаристија" }, { de: "Die Kirchenverwaltung", sr: "Црквена управа" }], correct: 0 },
      { q: { de: "Wem gebührt Anbetung?", sr: "Коме припада поклоњење?" }, options: [{ de: "Allein Gott", sr: "Само Богу" }, { de: "Den Ikonen", sr: "Иконама" }, { de: "Den Heiligen", sr: "Светитељима" }], correct: 0 }
    ],
    sources: { de: "Beschlüsse der Konzilien von Ephesus (431) und Nizäa II (787); Johannes von Damaskus, Reden gegen die Bilderstürmer.", sr: "Одлуке Ефеског (431) и Другог никејског сабора (787); Јован Дамаскин, Беседе против иконобораца." }
  },

  /* ===================== SCHWERPUNKT: HL. PAISIOS ===================== */
  {
    id: "pa-sources", course: "P",
    title: { de: "Einführung: Quellen zum hl. Paisios", sr: "Увод: извори о светом Пајсију" },
    sections: [
      { h: { de: "Was ist sicher belegt?", sr: "Шта је поуздано потврђено?" },
        simple: { de: "Über den hl. Paisios kursieren im Internet viele angebliche Zitate. Nicht alle sind echt. Diese App verwendet deshalb keine wörtlichen Zitate, sondern fasst seine Lehre in eigenen Worten zusammen.", sr: "На интернету кружи много наводних цитата светог Пајсија. Нису сви истинити. Зато ова апликација не користи дословне цитате, него његово учење сажима сопственим речима." },
        deeper: { de: "Es gibt drei Arten von Quellen: (1) Bücher, die er selbst geschrieben hat, z. B. über den hl. Arsenios den Kappadokier, über Athoniten-Väter und seine Briefe; (2) die Reihe „Logoi“ (Worte, deutsch auch als „Geistliche Ratschläge“ bekannt), die nach seinem Tod aus Gesprächen von den Schwestern des Klosters Souroti zusammengestellt wurde – also aufgezeichnete mündliche Lehre; (3) Erinnerungen von Menschen, die ihn kannten – diese sind wertvoll, aber unterschiedlich zuverlässig.", sr: "Постоје три врсте извора: (1) књиге које је сам написао, нпр. о светом Арсенију Кападокијском, о светогорским оцима и његова писма; (2) серија „Речи“ (грчки Логи), коју су после његове смрти из разговора приредиле сестре манастира Суроти – дакле, записано усмено учење; (3) сећања људи који су га познавали – вредна, али различите поузданости." },
        tag: "history" }
    ],
    keyPoints: [
      { de: "Eigene Schriften = am sichersten.", sr: "Сопствени списи = најпоузданији." },
      { de: "„Logoi“ = aufgezeichnete mündliche Lehre.", sr: "„Речи“ = записано усмено учење." },
      { de: "Internet-Zitate immer prüfen.", sr: "Цитате са интернета увек проверити." }
    ],
    bible: [],
    practice: { de: "Wenn du ein „Paisios-Zitat“ in sozialen Medien siehst, frage: Aus welchem Buch, welche Seite? Ohne Quelle: mit Vorsicht behandeln.", sr: "Када видите „Пајсијев цитат“ на друштвеним мрежама, питајте: из које књиге, која страна? Без извора: са опрезом." },
    questions: [
      { q: { de: "Wer stellte die Reihe „Logoi“ zusammen?", sr: "Ко је приредио серију „Речи“?" }, a: { de: "Die Schwestern des Hesychasterions „Hl. Johannes der Theologe“ in Souroti bei Thessaloniki, aus aufgezeichneten Gesprächen.", sr: "Сестре исихастирије „Свети Јован Богослов“ у Суротију код Солуна, из записаних разговора." } }
    ],
    quiz: [
      { q: { de: "Welche Quelle ist am sichersten?", sr: "Који извор је најпоузданији?" }, options: [{ de: "Seine eigenen Schriften", sr: "Његови сопствени списи" }, { de: "Bilder mit Zitaten in sozialen Medien", sr: "Слике са цитатима на друштвеним мрежама" }], correct: 0 },
      { q: { de: "Was sind die „Logoi“?", sr: "Шта су „Речи“?" }, options: [{ de: "Aufgezeichnete Gespräche, nach seinem Tod herausgegeben", sr: "Записани разговори, издати после његове смрти" }, { de: "Ein Roman über ihn", sr: "Роман о њему" }], correct: 0 }
    ],
    sources: { de: "Hesychasterion „Hl. Evangelist Johannes der Theologe“, Souroti (Herausgeber der griechischen Originalausgaben). Deutsche und serbische Übersetzungen existieren teilweise; ihre Verfügbarkeit wurde für diese Version noch nicht einzeln geprüft.", sr: "Исихастирија „Свети јеванђелист Јован Богослов“, Суроти (издавач грчких изворних издања). Немачки и српски преводи делимично постоје; њихова доступност за ово издање још није појединачно проверена." }
  },
  {
    id: "pa-life", course: "P",
    title: { de: "Sein Leben und sein Weg zum Mönchtum", sr: "Његов живот и пут у монаштво" },
    sections: [
      { h: { de: "Kindheit und Jugend", sr: "Детињство и младост" },
        simple: { de: "Der hl. Paisios wurde 1924 in Farasa in Kappadokien (heute Türkei) als Arsenios Eznepidis geboren. Noch im selben Jahr musste seine Familie im Bevölkerungsaustausch nach Griechenland fliehen und ließ sich in Konitsa (Epirus) nieder. Er wurde vom hl. Arsenios dem Kappadokier getauft, der ihm seinen Namen gab.", sr: "Свети Пајсије рођен је 1924. године у Фараси у Кападокији (данас Турска) као Арсеније Езнепидис. Исте године његова породица је у размени становништва морала да избегне у Грчку и настанила се у Коници (Епир). Крстио га је свети Арсеније Кападокијски, који му је дао своје име." },
        deeper: { de: "Als junger Mann arbeitete er als Zimmermann. Während des griechischen Bürgerkriegs diente er mehrere Jahre als Funker im Militär. Schon früh sehnte er sich nach dem Mönchsleben.", sr: "Као младић радио је као дрводеља. Током грчког грађанског рата служио је неколико година као радио-телеграфиста у војсци. Још рано је чезнуо за монашким животом." },
        tag: "history" },
      { h: { de: "Der Weg als Mönch", sr: "Монашки пут" },
        simple: { de: "In den 1950er Jahren ging er auf den Heiligen Berg Athos und wurde Mönch; den Namen Paisios erhielt er bei der Mönchsweihe. Er lebte später u. a. im Kloster Stomion bei Konitsa, auf dem Sinai und ab 1979 in der Zelle Panagouda bei Karyes auf dem Athos.", sr: "Педесетих година 20. века отишао је на Свету Гору и замонашио се; име Пајсије добио је при монашењу. Касније је живео, између осталог, у манастиру Стомион код Конице, на Синају и од 1979. у келији Панагуда код Кареје на Светој Гори." },
        deeper: { de: "Tausende Menschen besuchten ihn, um Rat und Trost zu suchen. Er starb am 12. Juli 1994 im Kloster Souroti bei Thessaloniki, wo er begraben ist. Das Ökumenische Patriarchat nahm ihn 2015 in das Verzeichnis der Heiligen auf. Sein Gedenktag ist der 12. Juli (im julianischen Kalender, der z. B. in der Serbischen Kirche gilt, entspricht das dem 25. Juli des bürgerlichen Kalenders).", sr: "Хиљаде људи су га посећивале тражећи савет и утеху. Упокојио се 12. јула 1994. у манастиру Суроти код Солуна, где је и сахрањен. Васељенска патријаршија уврстила га је 2015. у ред светитеља. Спомен му је 12. јула (по јулијанском календару, који важи нпр. у Српској Цркви, то је 25. јул по грађанском календару)." },
        tag: "history" }
    ],
    keyPoints: [
      { de: "Geboren 1924 in Farasa, Kappadokien.", sr: "Рођен 1924. у Фараси, у Кападокији." },
      { de: "Mönch auf dem Athos, Zelle Panagouda ab 1979.", sr: "Монах на Светој Гори, келија Панагуда од 1979." },
      { de: "Entschlafen 12. Juli 1994; heiliggesprochen 2015.", sr: "Упокојио се 12. јула 1994; канонизован 2015." }
    ],
    bible: [],
    practice: { de: "Der hl. Paisios lernte als Handwerker, Gott in der Arbeit zu dienen. Tue heute deine Arbeit so, als würdest du sie für Christus tun.", sr: "Свети Пајсије је као занатлија научио да служи Богу у раду. Радите данас свој посао као да га радите за Христа." },
    questions: [
      { q: { de: "Wer taufte den hl. Paisios?", sr: "Ко је крстио светог Пајсија?" }, a: { de: "Der hl. Arsenios der Kappadokier.", sr: "Свети Арсеније Кападокијски." } },
      { q: { de: "Wo ist er begraben?", sr: "Где је сахрањен?" }, a: { de: "Im Kloster (Hesychasterion) Souroti bei Thessaloniki.", sr: "У манастиру (исихастирији) Суроти код Солуна." } }
    ],
    quiz: [
      { q: { de: "Wie hieß der hl. Paisios mit Taufnamen?", sr: "Које је крштено име светог Пајсија?" }, options: [{ de: "Arsenios", sr: "Арсеније" }, { de: "Georgios", sr: "Георгије" }, { de: "Nikolaos", sr: "Николај" }], correct: 0 },
      { q: { de: "In welchem Jahr wurde er heiliggesprochen?", sr: "Које године је канонизован?" }, options: [{ de: "1994", sr: "1994." }, { de: "2015", sr: "2015." }, { de: "2003", sr: "2003." }], correct: 1 },
      { q: { de: "Welchen Beruf übte er als junger Mann aus?", sr: "Чиме се бавио као младић?" }, options: [{ de: "Zimmermann", sr: "Дрводеља" }, { de: "Lehrer", sr: "Учитељ" }, { de: "Arzt", sr: "Лекар" }], correct: 0 }
    ],
    sources: { de: "Biografische Grunddaten nach den Veröffentlichungen des Klosters Souroti und des Ökumenischen Patriarchats (Heiligsprechung 2015). Einzelheiten der Lebensdaten können in verschiedenen Biografien leicht abweichen.", sr: "Основни биографски подаци према издањима манастира Суроти и Васељенске патријаршије (канонизација 2015). Појединости се у различитим биографијама могу благо разликовати." }
  },
  {
    id: "pa-humility", course: "P",
    title: { de: "Demut und Gehorsam", sr: "Смирење и послушање" },
    sections: [
      { h: { de: "Demut als Fundament", sr: "Смирење као темељ" },
        simple: { de: "Für den hl. Paisios ist Demut die Grundlage des geistlichen Lebens. Ein demütiger Mensch rechnet seine guten Taten nicht sich selbst zu, sondern Gott, und urteilt nicht über andere.", sr: "За светог Пајсија смирење је темељ духовног живота. Смирен човек своја добра дела не приписује себи, него Богу, и не осуђује друге." },
        deeper: { de: "In seinen aufgezeichneten Gesprächen betont er immer wieder, dass Gottes Gnade in einem demütigen Herzen wohnen kann, während Stolz die Gnade vertreibt. Gehorsam gegenüber einem geistlichen Vater sah er als Schutz vor Selbsttäuschung. Für Laien bedeutet Gehorsam vor allem: auf Rat hören, nicht nur dem eigenen Willen folgen.", sr: "У својим записаним разговорима стално наглашава да благодат Божија може да обитава у смиреном срцу, док гордост одгони благодат. Послушање духовнику видео је као заштиту од самообмане. За мирјане послушање пре свега значи: слушати савет, а не следити само сопствену вољу." },
        tag: "counsel" }
    ],
    keyPoints: [
      { de: "Demut zieht die Gnade an, Stolz vertreibt sie.", sr: "Смирење привлачи благодат, гордост је одгони." },
      { de: "Nicht über andere urteilen.", sr: "Не осуђивати друге." },
      { de: "Gehorsam schützt vor Selbsttäuschung.", sr: "Послушање штити од самообмане." }
    ],
    bible: [
      { ref: { de: "Jak 4,6", sr: "Јак 4,6" }, note: { de: "Gott widersteht den Hochmütigen, den Demütigen gibt er Gnade.", sr: "Бог се противи гордима, а смиренима даје благодат." } },
      { ref: { de: "Mt 11,29", sr: "Мт 11,29" }, note: { de: "Lernt von mir, denn ich bin sanftmütig und demütig.", sr: "Научите се од мене, јер сам кротак и смирен срцем." } }
    ],
    practice: { de: "Wenn du heute kritisiert wirst, versuche nicht sofort, dich zu rechtfertigen. Prüfe in Ruhe, ob etwas Wahres daran ist.", sr: "Ако вас данас неко критикује, не покушавајте одмах да се оправдате. У миру проверите има ли у томе истине." },
    questions: [
      { q: { de: "Warum ist Gehorsam auch für Laien wichtig?", sr: "Зашто је послушање важно и за мирјане?" }, a: { de: "Weil es vor Selbsttäuschung schützt und lehrt, den eigenen Willen nicht absolut zu setzen.", sr: "Зато што штити од самообмане и учи да сопствену вољу не стављамо изнад свега." } }
    ],
    quiz: [
      { q: { de: "Was vertreibt nach der Lehre der Väter die Gnade?", sr: "Шта према учењу Отаца одгони благодат?" }, options: [{ de: "Stolz", sr: "Гордост" }, { de: "Müdigkeit", sr: "Умор" }, { de: "Armut", sr: "Сиромаштво" }], correct: 0 },
      { q: { de: "Welche Bibelstelle sagt, dass Gott den Demütigen Gnade gibt?", sr: "Које место у Писму каже да Бог смиренима даје благодат?" }, options: [{ de: "Jak 4,6", sr: "Јак 4,6" }, { de: "Gen 4,8", sr: "Пост 4,8" }], correct: 0 }
    ],
    sources: { de: "Zusammenfassung nach den Themenbänden der „Logoi“ (aufgezeichnete Gespräche). Keine wörtlichen Zitate.", sr: "Сажетак према тематским томовима „Речи“ (записани разговори). Без дословних цитата." }
  },
  {
    id: "pa-prayer", course: "P",
    title: { de: "Gebet und geistliche Wachsamkeit", sr: "Молитва и духовно трезвоумље" },
    sections: [
      { h: { de: "Gebet aus Schmerz und Liebe", sr: "Молитва из бола и љубави" },
        simple: { de: "Der hl. Paisios lehrte, dass echtes Gebet aus dem Herzen kommt. Wer den Schmerz anderer Menschen mitfühlt, betet tiefer für sie.", sr: "Свети Пајсије је учио да истинска молитва долази из срца. Ко саосећа са болом других људи, дубље се моли за њих." },
        deeper: { de: "Er selbst betete viele Stunden in der Nacht, auch mit dem Jesusgebet, für die Welt, für Kranke und Leidende. Gleichzeitig riet er Menschen in der Welt zu Maß und Regelmäßigkeit: lieber wenig mit Aufmerksamkeit als viel ohne Herz. Gute Gedanken (griechisch kaloi logismoi) zu pflegen und schlechte nicht zu nähren, war ein Grundpfeiler seiner Ratschläge.", sr: "Он сам се ноћу молио много сати, и Исусовом молитвом, за свет, за болесне и страдалне. Истовремено је људима у свету саветовао меру и редовност: боље мало са пажњом, него много без срца. Неговање добрих помисли и ненеговање лоших била је једна од основа његових савета." },
        tag: "counsel" }
    ],
    keyPoints: [
      { de: "Gebet aus dem Herzen, mit Mitgefühl.", sr: "Молитва из срца, са саосећањем." },
      { de: "Maß und Regelmäßigkeit.", sr: "Мера и редовност." },
      { de: "Gute Gedanken pflegen.", sr: "Неговати добре помисли." }
    ],
    bible: [
      { ref: { de: "Röm 12,15", sr: "Рим 12,15" }, note: { de: "Weint mit den Weinenden.", sr: "Плачите са онима који плачу." } },
      { ref: { de: "Phil 4,8", sr: "Флп 4,8" }, note: { de: "Was wahr, edel und rein ist, das bedenkt.", sr: "Што је истинито, часно и чисто, о томе мислите." } }
    ],
    practice: { de: "Nimm eine Person, die gerade leidet, in dein Abendgebet auf. Bete mit dem Jesusgebet einige Minuten für sie.", sr: "Уврстите у вечерњу молитву једну особу која сада пати. Молите се за њу неколико минута Исусовом молитвом." },
    questions: [
      { q: { de: "Was riet er Menschen in der Welt bezüglich der Gebetsmenge?", sr: "Шта је саветовао људима у свету у вези са количином молитве?" }, a: { de: "Maß halten und regelmäßig beten; Aufmerksamkeit ist wichtiger als Menge.", sr: "Држати меру и редовно се молити; пажња је важнија од количине." } }
    ],
    quiz: [
      { q: { de: "Was ist laut seinen Ratschlägen wichtiger?", sr: "Шта је према његовим саветима важније?" }, options: [{ de: "Aufmerksamkeit im Gebet", sr: "Пажња у молитви" }, { de: "Möglichst viele Gebete", sr: "Што више молитава" }], correct: 0 },
      { q: { de: "Welche Haltung vertieft das Gebet für andere?", sr: "Који став продубљује молитву за друге?" }, options: [{ de: "Mitgefühl mit ihrem Schmerz", sr: "Саосећање са њиховим болом" }, { de: "Neugier", sr: "Радозналост" }], correct: 0 }
    ],
    sources: { de: "Zusammenfassung nach den „Logoi“, besonders dem Band über das Gebet. Keine wörtlichen Zitate.", sr: "Сажетак према „Речима“, посебно тому о молитви. Без дословних цитата." }
  },
  {
    id: "pa-trust", course: "P",
    title: { de: "Vertrauen auf Gott und Umgang mit Versuchungen", sr: "Поверење у Бога и борба са искушењима" },
    sections: [
      { h: { de: "Sich Gott anvertrauen", sr: "Предати се Богу" },
        simple: { de: "Der hl. Paisios ermutigte, sich in Sorgen ganz Gott anzuvertrauen. Gott weiß, was wir brauchen, und sorgt für uns – auch wenn wir es nicht sofort verstehen.", sr: "Свети Пајсије је подстицао да се у бригама потпуно предамо Богу. Бог зна шта нам је потребно и брине о нама – чак и када то одмах не разумемо." },
        deeper: { de: "Ängstlichkeit und übermäßige Sorge sah er als Zeichen mangelnden Vertrauens, nicht als Sünde, die verurteilt, sondern als Schwäche, die durch Gebet heilt. Er unterschied zwischen verantwortlichem Handeln und ängstlichem Grübeln: Wir tun, was wir können, und überlassen das Ergebnis Gott.", sr: "Страх и претерану бригу видео је као знак недостатка поверења – не као грех који осуђује, него као слабост која се исцељује молитвом. Разликовао је одговорно деловање од страшљивог премишљања: чинимо што можемо, а исход препуштамо Богу." },
        tag: "counsel" },
      { h: { de: "Versuchungen", sr: "Искушења" },
        simple: { de: "Versuchungen gehören zum Leben eines Christen. Man soll nicht in Panik geraten, sondern beten, um Hilfe bitten und den schlechten Gedanken keine Aufmerksamkeit schenken.", sr: "Искушења су део живота хришћанина. Не треба паничити, него се молити, тражити помоћ и не обраћати пажњу на лоше помисли." },
        deeper: { de: "Ein wiederkehrender Rat: Nicht mit dem schlechten Gedanken diskutieren, sondern sich Gott zuwenden und Gutes tun. So wird die Versuchung zur Gelegenheit, im Vertrauen zu wachsen. Bei schweren inneren Kämpfen ist das Gespräch mit dem Beichtvater unverzichtbar.", sr: "Савет који се понавља: не расправљати са лошом помишљу, него се окренути Богу и чинити добро. Тако искушење постаје прилика за раст у поверењу. Код тешких унутрашњих борби разговор са духовником је неопходан." },
        tag: "counsel" }
    ],
    keyPoints: [
      { de: "Tun, was man kann – den Rest Gott überlassen.", sr: "Чинити што можемо – остало препустити Богу." },
      { de: "Nicht mit schlechten Gedanken diskutieren.", sr: "Не расправљати са лошим помислима." },
      { de: "Schwere Kämpfe mit dem Beichtvater besprechen.", sr: "Тешке борбе поверити духовнику." }
    ],
    bible: [
      { ref: { de: "1 Petr 5,7", sr: "1 Пт 5,7" }, note: { de: "Werft alle eure Sorge auf ihn.", sr: "Сваку бригу своју баците на Њега." } },
      { ref: { de: "1 Kor 10,13", sr: "1 Кор 10,13" }, note: { de: "Gott lässt nicht über eure Kraft versuchen.", sr: "Бог неће допустити да будете искушани преко снаге." } },
      { ref: { de: "Mt 6,25–34", sr: "Мт 6,25–34" }, note: { de: "Sorgt euch nicht.", sr: "Не брините се." } }
    ],
    practice: { de: "Schreibe eine Sorge auf. Notiere daneben einen konkreten Schritt, den du tun kannst. Übergib den Rest im Gebet Gott.", sr: "Запишите једну бригу. Поред ње забележите један конкретан корак који можете да учините. Остатак у молитви предајте Богу." },
    questions: [
      { q: { de: "Wie soll man mit einem schlechten Gedanken umgehen?", sr: "Како поступати са лошом помишљу?" }, a: { de: "Nicht mit ihm diskutieren, sich Gott zuwenden, beten und Gutes tun.", sr: "Не расправљати са њом, окренути се Богу, молити се и чинити добро." } }
    ],
    quiz: [
      { q: { de: "Welche Stelle sagt: Werft eure Sorge auf ihn?", sr: "Које место каже: сваку бригу баците на Њега?" }, options: [{ de: "1 Petr 5,7", sr: "1 Пт 5,7" }, { de: "Offb 3,20", sr: "Отк 3,20" }], correct: 0 },
      { q: { de: "Mit wem bespricht man schwere innere Kämpfe?", sr: "Са ким разговарати о тешким унутрашњим борбама?" }, options: [{ de: "Mit dem Beichtvater", sr: "Са духовником" }, { de: "Mit niemandem", sr: "Ни са ким" }], correct: 0 }
    ],
    sources: { de: "Zusammenfassung nach den „Logoi“ (u. a. Bände über den geistlichen Kampf). Keine wörtlichen Zitate.", sr: "Сажетак према „Речима“ (између осталог томови о духовној борби). Без дословних цитата." }
  },
  {
    id: "pa-confession", course: "P",
    title: { de: "Reue und Beichte", sr: "Покајање и исповест" },
    sections: [
      { h: { de: "Reue ohne Verzweiflung", sr: "Покајање без очајања" },
        simple: { de: "Der hl. Paisios ermutigte zu ehrlicher Reue, warnte aber vor Verzweiflung. Gott vergibt jedem, der aufrichtig umkehrt.", sr: "Свети Пајсије је подстицао на искрено покајање, али је упозоравао на очајање. Бог опрашта свакоме ко се искрено покаје." },
        deeper: { de: "Er unterschied zwischen gesunder Reue, die demütig macht und Hoffnung schenkt, und krankhafter Selbstbeschäftigung, die den Menschen lähmt. Die Beichte war für ihn ein Ort der Befreiung und der Gnade, nicht der Angst. Er ermutigte, einen festen Beichtvater zu haben.", sr: "Разликовао је здраво покајање, које смирује и дарује наду, од болесног бављења собом, које човека парализује. Исповест је за њега била место ослобођења и благодати, а не страха. Подстицао је да човек има сталног духовника." },
        tag: "counsel" }
    ],
    keyPoints: [
      { de: "Reue mit Hoffnung.", sr: "Покајање са надом." },
      { de: "Beichte als Befreiung.", sr: "Исповест као ослобођење." },
      { de: "Einen festen Beichtvater haben.", sr: "Имати сталног духовника." }
    ],
    bible: [
      { ref: { de: "2 Kor 7,10", sr: "2 Кор 7,10" }, note: { de: "Gottgemäße Traurigkeit führt zur Umkehr.", sr: "Туга по Богу води покајању." } },
      { ref: { de: "1 Joh 1,9", sr: "1 Јн 1,9" }, note: { de: "Gott ist treu und vergibt.", sr: "Бог је веран и опрашта." } }
    ],
    practice: { de: "Wenn dich eine alte Sünde, die du schon gebeichtet hast, immer wieder quält: Sprich mit deinem Beichtvater darüber und vertraue der Vergebung.", sr: "Ако вас стари грех који сте већ исповедили стално мучи: разговарајте о томе са духовником и поверујте у опроштај." },
    questions: [
      { q: { de: "Was ist der Unterschied zwischen Reue und Verzweiflung?", sr: "Која је разлика између покајања и очајања?" }, a: { de: "Reue führt in Demut zu Gott und schenkt Hoffnung; Verzweiflung lähmt und trennt von Gott.", sr: "Покајање у смирењу води Богу и дарује наду; очајање парализује и одваја од Бога." } }
    ],
    quiz: [
      { q: { de: "Wozu führt gottgemäße Traurigkeit nach 2 Kor 7,10?", sr: "Куда води туга по Богу према 2 Кор 7,10?" }, options: [{ de: "Zur Umkehr", sr: "Покајању" }, { de: "Zur Verzweiflung", sr: "Очајању" }], correct: 0 },
      { q: { de: "Was empfahl der hl. Paisios bezüglich der Beichte?", sr: "Шта је свети Пајсије препоручивао у вези са исповешћу?" }, options: [{ de: "Einen festen Beichtvater zu haben", sr: "Имати сталног духовника" }, { de: "Die Beichte zu vermeiden", sr: "Избегавати исповест" }], correct: 0 }
    ],
    sources: { de: "Zusammenfassung nach den „Logoi“. Keine wörtlichen Zitate.", sr: "Сажетак према „Речима“. Без дословних цитата." }
  },
  {
    id: "pa-love", course: "P",
    title: { de: "Liebe zum Nächsten", sr: "Љубав према ближњем" },
    sections: [
      { h: { de: "Gute Gedanken über andere", sr: "Добре помисли о другима" },
        simple: { de: "Der hl. Paisios lehrte, über andere Menschen gut zu denken und ihr Verhalten wohlwollend zu deuten. Wer gute Gedanken hat, sieht überall Gutes.", sr: "Свети Пајсије је учио да о другим људима мислимо добро и да њихово понашање тумачимо благонаклоно. Ко има добре помисли, свуда види добро." },
        deeper: { de: "Ein bekanntes Motiv aus den Erzählungen über ihn ist der Vergleich von Fliege und Biene: Die eine sucht überall den Schmutz, die andere die Blüten. So kann der Mensch sich entscheiden, was er im anderen sucht. (Dieses Bild wird in seinen aufgezeichneten Gesprächen überliefert; der genaue Wortlaut variiert je nach Übersetzung.) Liebe zeigte sich bei ihm auch ganz praktisch: in Gastfreundschaft, Gebet für Besucher und Hilfe für Bedürftige.", sr: "Познат мотив из предања о њему је поређење муве и пчеле: једна свуда тражи нечистоћу, а друга цвеће. Тако човек може да изабере шта тражи у другоме. (Ова слика је предата у његовим записаним разговорима; тачан текст се разликује према преводу.) Љубав се код њега показивала и сасвим практично: у гостопримству, молитви за посетиоце и помоћи потребнима." },
        tag: "counsel" }
    ],
    keyPoints: [
      { de: "Über andere wohlwollend denken.", sr: "О другима мислити благонаклоно." },
      { de: "Bild von Fliege und Biene.", sr: "Слика муве и пчеле." },
      { de: "Liebe wird konkret: Gastfreundschaft, Hilfe, Gebet.", sr: "Љубав постаје конкретна: гостопримство, помоћ, молитва." }
    ],
    bible: [
      { ref: { de: "1 Kor 13,4–7", sr: "1 Кор 13,4–7" }, note: { de: "Die Liebe denkt nichts Böses.", sr: "Љубав не мисли зло." } },
      { ref: { de: "Mt 25,31–46", sr: "Мт 25,31–46" }, note: { de: "Was ihr den Geringsten getan habt.", sr: "Што учинисте једном од ове моје најмање браће." } }
    ],
    practice: { de: "Wenn dich heute jemand ärgert, suche bewusst eine wohlwollende Erklärung für sein Verhalten. Bete kurz für ihn.", sr: "Ако вас данас неко наљути, свесно потражите благонаклоно објашњење за његово понашање. Помолите се кратко за њега." },
    questions: [
      { q: { de: "Was lehrt das Bild von Fliege und Biene?", sr: "Чему учи слика муве и пчеле?" }, a: { de: "Dass wir wählen können, ob wir im Nächsten das Schlechte oder das Gute suchen.", sr: "Да можемо да бирамо да ли ћемо у ближњем тражити лоше или добро." } }
    ],
    quiz: [
      { q: { de: "Was sucht die Biene im Bild des hl. Paisios?", sr: "Шта тражи пчела у слици светог Пајсија?" }, options: [{ de: "Die Blüten", sr: "Цвеће" }, { de: "Den Schmutz", sr: "Нечистоћу" }], correct: 0 },
      { q: { de: "Welche Bibelstelle beschreibt die Eigenschaften der Liebe?", sr: "Које место у Писму описује особине љубави?" }, options: [{ de: "1 Kor 13", sr: "1 Кор 13" }, { de: "Lev 11", sr: "Лев 11" }], correct: 0 }
    ],
    sources: { de: "Überlieferte Lehre aus den „Logoi“; Wortlaut je nach Übersetzung unterschiedlich – hier sinngemäß wiedergegeben.", sr: "Предано учење из „Речи“; текст се разликује према преводу – овде пренето по смислу." }
  },
  {
    id: "pa-suffering", course: "P",
    title: { de: "Leid, Geduld und geistliches Wachstum", sr: "Страдање, трпљење и духовни раст" },
    sections: [
      { h: { de: "Leid mit Christus tragen", sr: "Носити страдање са Христом" },
        simple: { de: "Der hl. Paisios war selbst lange krank und litt an schweren Beschwerden. Er lehrte, Leid mit Geduld und Vertrauen anzunehmen. Gott kann aus Schmerz etwas Gutes wachsen lassen.", sr: "Свети Пајсије је и сам дуго био болестан и трпео тешке тегобе. Учио је да страдање примамо са трпљењем и поверењем. Бог може да из бола изведе нешто добро." },
        deeper: { de: "Er sah in der geduldig getragenen Krankheit eine Form geistlicher Teilnahme am Kreuz Christi. Wichtig: Das heißt nicht, dass man auf medizinische Hilfe verzichten soll. Er selbst unterzog sich Operationen und ärztlicher Behandlung. Geduld ist kein passives Aushalten, sondern ein aktives Vertrauen.", sr: "У болести која се трпељиво носи видео је облик духовног учешћа у Крсту Христовом. Важно: то не значи да треба одбијати медицинску помоћ. Он сам је пристајао на операције и лечење. Трпљење није пасивно подношење, него активно поверење." },
        tag: "counsel" }
    ],
    keyPoints: [
      { de: "Geduld als aktives Vertrauen.", sr: "Трпљење као активно поверење." },
      { de: "Leid kann geistlich fruchtbar werden.", sr: "Страдање може постати духовно плодно." },
      { de: "Medizinische Hilfe ist kein Widerspruch zum Glauben.", sr: "Медицинска помоћ није у супротности са вером." }
    ],
    bible: [
      { ref: { de: "Röm 5,3–5", sr: "Рим 5,3–5" }, note: { de: "Bedrängnis bewirkt Geduld, Geduld Bewährung, Bewährung Hoffnung.", sr: "Невоља гради трпљење, трпљење искуство, искуство наду." } },
      { ref: { de: "2 Kor 12,9", sr: "2 Кор 12,9" }, note: { de: "Meine Kraft vollendet sich in der Schwachheit.", sr: "Сила се моја у слабости показује савршена." } }
    ],
    practice: { de: "Wenn du gerade etwas Schweres trägst: Bete kurz „Ehre sei Gott für alles“ und tu dann den nächsten kleinen, vernünftigen Schritt.", sr: "Ако сада носите нешто тешко: помолите се кратко „Слава Богу за све“ и затим учините следећи мали, разуман корак." },
    questions: [
      { q: { de: "Bedeutet geduldiges Tragen von Krankheit, auf Ärzte zu verzichten?", sr: "Да ли трпељиво ношење болести значи одбијање лекара?" }, a: { de: "Nein. Der hl. Paisios selbst nahm ärztliche Hilfe und Operationen an.", sr: "Не. Сам свети Пајсије је прихватао лекарску помоћ и операције." } }
    ],
    quiz: [
      { q: { de: "Was bewirkt Bedrängnis nach Röm 5,3?", sr: "Шта према Рим 5,3 гради невоља?" }, options: [{ de: "Geduld", sr: "Трпљење" }, { de: "Zorn", sr: "Гнев" }], correct: 0 },
      { q: { de: "Geduld ist nach seiner Lehre …", sr: "Трпљење је према његовом учењу …" }, options: [{ de: "aktives Vertrauen", sr: "активно поверење" }, { de: "Gleichgültigkeit", sr: "равнодушност" }], correct: 0 }
    ],
    sources: { de: "Biografische Angaben zu seiner Krankheit nach den Lebensbeschreibungen; Lehre zusammengefasst nach den „Logoi“.", sr: "Биографски подаци о његовој болести према житијима; учење сажето према „Речима“." }
  },
  {
    id: "pa-daily", course: "P",
    title: { de: "Seine Lehre im Alltag", sr: "Његово учење у свакодневном животу" },
    sections: [
      { h: { de: "Einfache Schritte", sr: "Једноставни кораци" },
        simple: { de: "Die Lehre des hl. Paisios lässt sich im Alltag leben: gute Gedanken pflegen, regelmäßig beten, nicht urteilen, anderen helfen, sich Gott anvertrauen und am Leben der Kirche teilnehmen.", sr: "Учење светог Пајсија може се живети у свакодневици: неговати добре помисли, редовно се молити, не осуђивати, помагати другима, предати се Богу и учествовати у животу Цркве." },
        deeper: { de: "Er warnte vor einem oberflächlichen, lauten Leben voller Ablenkung und ermutigte zu Einfachheit. Gleichzeitig wollte er nicht, dass Laien Mönche nachahmen, ohne Rat zu suchen. Jeder soll an seinem Ort, in Familie und Beruf, Christus treu sein – mit Maß und Unterscheidung (griechisch diakrisis).", sr: "Упозоравао је на површан, бучан живот пун расејаности и подстицао на једноставност. Истовремено није желео да мирјани опонашају монахе без савета. Свако треба да на свом месту, у породици и послу, буде веран Христу – са мером и расуђивањем." },
        tag: "counsel" }
    ],
    keyPoints: [
      { de: "Einfachheit statt Ablenkung.", sr: "Једноставност уместо расејаности." },
      { de: "Unterscheidung (Diakrisis) und Maß.", sr: "Расуђивање и мера." },
      { de: "Treue am eigenen Ort.", sr: "Верност на свом месту." }
    ],
    bible: [
      { ref: { de: "Mi 6,8", sr: "Мих 6,8" }, note: { de: "Recht tun, Güte lieben, demütig mit Gott gehen.", sr: "Чинити правду, љубити милост, ходити смирено са Богом." } },
      { ref: { de: "Kol 3,17", sr: "Кол 3,17" }, note: { de: "Alles im Namen des Herrn tun.", sr: "Све чинити у име Господа." } }
    ],
    practice: { de: "Wähle für eine Woche einen Punkt aus diesem Kurs und notiere jeden Abend kurz im Notizbuch, wie es gelungen ist.", sr: "Изаберите за недељу дана једну тачку из овог курса и сваке вечери укратко у свесци забележите како вам је успело." },
    questions: [
      { q: { de: "Was ist Diakrisis?", sr: "Шта је расуђивање (диакрисис)?" }, a: { de: "Die geistliche Gabe der Unterscheidung: zu erkennen, was gut, angemessen und von Gott ist.", sr: "Духовни дар расуђивања: препознати шта је добро, примерено и од Бога." } }
    ],
    quiz: [
      { q: { de: "Sollen Laien nach seiner Lehre Mönche ohne Rat nachahmen?", sr: "Да ли према његовом учењу мирјани треба да опонашају монахе без савета?" }, options: [{ de: "Nein, mit Maß und Rat am eigenen Ort leben", sr: "Не, живети са мером и уз савет на свом месту" }, { de: "Ja, unbedingt", sr: "Да, обавезно" }], correct: 0 }
    ],
    sources: { de: "Zusammenfassung nach den „Logoi“, besonders dem Band über das Familienleben. Keine wörtlichen Zitate.", sr: "Сажетак према „Речима“, посебно тому о породичном животу. Без дословних цитата." }
  },

  /* ===================== KURS D ===================== */
  {
    id: "dg-creed", course: "D",
    title: { de: "Das Glaubensbekenntnis von Nizäa-Konstantinopel", sr: "Никејско-цариградски Символ вере" },
    creed: true,
    sections: [
      { h: { de: "Entstehung", sr: "Настанак" },
        simple: { de: "Das Glaubensbekenntnis fasst den christlichen Glauben zusammen. Es wird in jeder Göttlichen Liturgie gesprochen oder gesungen und bei der Taufe bekannt.", sr: "Символ вере сажима хришћанску веру. Чита се или пева на свакој Светој Литургији и исповеда се при крштењу." },
        deeper: { de: "Der erste Teil entstand auf dem Konzil von Nizäa (325) gegen die Irrlehre des Arius, der den Sohn für ein Geschöpf hielt. Auf dem Konzil von Konstantinopel (381) wurde der Teil über den Heiligen Geist ergänzt. Die orthodoxe Kirche bekennt das Bekenntnis in dieser ursprünglichen Form ohne spätere Zusätze.", sr: "Први део је настао на Никејском сабору (325) против јереси Арија, који је Сина сматрао створењем. На Цариградском сабору (381) допуњен је део о Духу Светом. Православна Црква исповеда Символ вере у овом изворном облику, без каснијих додатака." },
        tag: "dogma" }
    ],
    keyPoints: [
      { de: "Nizäa 325: Der Sohn ist eines Wesens mit dem Vater.", sr: "Никеја 325: Син је једносуштан Оцу." },
      { de: "Konstantinopel 381: Der Geist geht vom Vater aus.", sr: "Цариград 381: Дух од Оца исходи." },
      { de: "Unveränderte ursprüngliche Form.", sr: "Непромењен изворни облик." }
    ],
    bible: [
      { ref: { de: "1 Kor 8,6", sr: "1 Кор 8,6" }, note: { de: "Ein Gott, der Vater, und ein Herr, Jesus Christus.", sr: "Један Бог Отац и један Господ Исус Христос." } }
    ],
    practice: { de: "Lerne das Glaubensbekenntnis auswendig – Abschnitt für Abschnitt, z. B. einen Satz pro Tag.", sr: "Научите Символ вере напамет – део по део, нпр. једну реченицу дневно." },
    questions: [
      { q: { de: "Gegen welche Irrlehre richtete sich das Konzil von Nizäa?", sr: "Против које јереси је био Никејски сабор?" }, a: { de: "Gegen den Arianismus, der lehrte, der Sohn sei ein Geschöpf.", sr: "Против аријанства, које је учило да је Син створење." } }
    ],
    quiz: [
      { q: { de: "Wann wurde der Abschnitt über den Heiligen Geist ergänzt?", sr: "Када је допуњен део о Духу Светом?" }, options: [{ de: "381", sr: "381." }, { de: "1054", sr: "1054." }, { de: "325", sr: "325." }], correct: 0 },
      { q: { de: "Wer lehrte, der Sohn sei ein Geschöpf?", sr: "Ко је учио да је Син створење?" }, options: [{ de: "Arius", sr: "Арије" }, { de: "Nestorius", sr: "Несторије" }, { de: "Athanasius", sr: "Атанасије" }], correct: 0 }
    ],
    sources: { de: "Text des Bekenntnisses (381, gemeinfrei). Deutsche Fassung: Arbeitsübersetzung dieser App aus dem Griechischen, keine offizielle kirchliche Übersetzung. Serbische Fassung: im kirchlichen Gebrauch verbreiteter Wortlaut; in Gebetbüchern kann es kleine Abweichungen geben.", sr: "Текст Символа вере (381, јавно добро). Немачка верзија: радни превод ове апликације са грчког, није званичан црквени превод. Српска верзија: текст раширен у црквеној употреби; у молитвеницима могу постојати мала одступања." }
  },
  {
    id: "dg-councils", course: "D",
    title: { de: "Die sieben Ökumenischen Konzilien", sr: "Седам васељенских сабора" },
    sections: [
      { h: { de: "Überblick", sr: "Преглед" },
        simple: { de: "Bei Streit über wichtige Glaubensfragen versammelten sich Bischöfe aus der ganzen Kirche. Sieben solcher Versammlungen erkennt die orthodoxe Kirche als Ökumenische Konzilien an.", sr: "Када би настао спор о важним питањима вере, сабирали су се епископи из целе Цркве. Седам таквих сабора Православна Црква признаје као васељенске саборе." },
        deeper: { de: "1. Nizäa 325 – gegen Arius; der Sohn ist eines Wesens mit dem Vater.\n2. Konstantinopel 381 – Gottheit des Heiligen Geistes; Ergänzung des Glaubensbekenntnisses.\n3. Ephesus 431 – gegen Nestorius; Maria ist Gottesgebärerin.\n4. Chalcedon 451 – zwei Naturen in einer Person.\n5. Konstantinopel 553 – Vertiefung und Bestätigung von Chalcedon.\n6. Konstantinopel 680/681 – zwei Willen in Christus.\n7. Nizäa 787 – Verehrung der Ikonen.", sr: "1. Никеја 325 – против Арија; Син је једносуштан Оцу.\n2. Цариград 381 – божанство Духа Светога; допуна Символа вере.\n3. Ефес 431 – против Несторија; Марија је Богородица.\n4. Халкидон 451 – две природе у једном Лицу.\n5. Цариград 553 – продубљење и потврда Халкидона.\n6. Цариград 680/681 – две воље у Христу.\n7. Никеја 787 – поштовање икона." },
        tag: "history" },
      { h: { de: "Bedeutung", sr: "Значај" },
        simple: { de: "Die Konzilien haben keinen neuen Glauben erfunden. Sie haben den überlieferten Glauben gegen Irrlehren klar formuliert.", sr: "Сабори нису измислили нову веру. Они су јасно формулисали предату веру против јереси." },
        deeper: { de: "Die Glaubensentscheidungen (Horoi) der Ökumenischen Konzilien gelten in der orthodoxen Kirche als verbindlich. Die Kirche versteht sie als Ausdruck der Führung durch den Heiligen Geist, die von der ganzen Kirche angenommen wurden.", sr: "Догматске одлуке (ороси) васељенских сабора у Православној Цркви су обавезујуће. Црква их схвата као израз вођства Духа Светога, које је примила цела Црква." },
        tag: "dogma" }
    ],
    keyPoints: [
      { de: "Sieben Konzilien von 325 bis 787.", sr: "Седам сабора од 325. до 787." },
      { de: "Kein neuer Glaube, sondern klare Formulierung.", sr: "Није нова вера, него јасна формулација." },
      { de: "Glaubensentscheidungen sind verbindlich.", sr: "Догматске одлуке су обавезујуће." }
    ],
    bible: [
      { ref: { de: "Apg 15", sr: "Дап 15" }, note: { de: "Das Apostelkonzil in Jerusalem als Vorbild.", sr: "Апостолски сабор у Јерусалиму као узор." } }
    ],
    practice: { de: "Am Sonntag der Orthodoxie (erster Sonntag der Großen Fastenzeit) gedenkt die Kirche des Sieges der Ikonenverehrung. Nimm, wenn möglich, an diesem Gottesdienst teil.", sr: "У Недељу православља (прва недеља Великог поста) Црква прославља победу поштовања икона. Ако је могуће, учествујте у том богослужењу." },
    questions: [
      { q: { de: "Welches Konzil bestätigte die Ikonenverehrung?", sr: "Који сабор је потврдио поштовање икона?" }, a: { de: "Das Siebte, Nizäa 787.", sr: "Седми, Никеја 787." } },
      { q: { de: "Welches Vorbild im Neuen Testament gibt es für Konzilien?", sr: "Који узор за саборе постоји у Новом Завету?" }, a: { de: "Das Apostelkonzil in Jerusalem (Apg 15).", sr: "Апостолски сабор у Јерусалиму (Дап 15)." } }
    ],
    quiz: [
      { q: { de: "Welches Konzil lehrte zwei Willen in Christus?", sr: "Који сабор је учио о две воље у Христу?" }, options: [{ de: "Das Sechste (680/681)", sr: "Шести (680/681)" }, { de: "Das Dritte (431)", sr: "Трећи (431)" }], correct: 0 },
      { q: { de: "Gegen wen richtete sich das Konzil von Ephesus?", sr: "Против кога је био Ефески сабор?" }, options: [{ de: "Nestorius", sr: "Несторија" }, { de: "Arius", sr: "Арија" }], correct: 0 },
      { q: { de: "Wie viele Ökumenische Konzilien erkennt die orthodoxe Kirche an?", sr: "Колико васељенских сабора признаје Православна Црква?" }, options: [{ de: "Sieben", sr: "Седам" }, { de: "Vier", sr: "Четири" }, { de: "Einundzwanzig", sr: "Двадесет један" }], correct: 0 }
    ],
    sources: { de: "Konzilsentscheidungen, frei verfügbar in englischer Übersetzung in NPNF II/14 (CCEL).", sr: "Саборске одлуке, слободно доступне у енглеском преводу у NPNF II/14 (CCEL)." }
  },
  {
    id: "dg-icons", course: "D",
    title: { de: "Der Bilderstreit", sr: "Иконоборство" },
    sections: [
      { h: { de: "Was geschah?", sr: "Шта се догодило?" },
        simple: { de: "Im 8. und 9. Jahrhundert ließen byzantinische Kaiser Ikonen verbieten und zerstören. Viele Mönche und Gläubige verteidigten die Ikonen und litten dafür.", sr: "У 8. и 9. веку византијски цареви су забрањивали и уништавали иконе. Многи монаси и верници су бранили иконе и страдали због тога." },
        deeper: { de: "Der Bilderstreit begann um 726/730 unter Kaiser Leo III. Das Konzil von Nizäa 787 stellte die Ikonenverehrung wieder her. Nach einer zweiten Phase wurde sie 843 endgültig bestätigt – daran erinnert der Sonntag der Orthodoxie. Der hl. Johannes von Damaskus verteidigte die Ikonen mit dem Argument der Menschwerdung: Weil Gott sichtbar wurde, kann er dargestellt werden.", sr: "Иконоборство је почело око 726/730. под царем Лавом III. Сабор у Никеји 787. обновио је поштовање икона. После друге фазе оно је коначно потврђено 843. године – на то подсећа Недеља православља. Свети Јован Дамаскин бранио је иконе аргументом оваплоћења: пошто је Бог постао видљив, може се изобразити." },
        tag: "history" }
    ],
    keyPoints: [
      { de: "Beginn um 726/730, Ende 843.", sr: "Почетак око 726/730, крај 843." },
      { de: "Johannes von Damaskus als Verteidiger.", sr: "Јован Дамаскин као бранитељ." },
      { de: "Sonntag der Orthodoxie erinnert an den Sieg.", sr: "Недеља православља подсећа на победу." }
    ],
    bible: [
      { ref: { de: "Joh 1,14", sr: "Јн 1,14" }, note: { de: "Wir haben seine Herrlichkeit gesehen.", sr: "Видесмо славу Његову." } },
      { ref: { de: "Ex 25,18–22", sr: "Изл 25,18–22" }, note: { de: "Die Cherubim auf der Bundeslade.", sr: "Херувими на ковчегу завета." } }
    ],
    practice: { de: "Betrachte eine Ikone in Ruhe: Wen zeigt sie? Welche Farben, welche Gesten? Ikonen sind „Fenster“ zum Gebet.", sr: "У миру посматрајте икону: кога приказује? Које боје, који покрети? Иконе су „прозори“ ка молитви." },
    questions: [
      { q: { de: "Mit welchem Argument verteidigte Johannes von Damaskus die Ikonen?", sr: "Којим аргументом је Јован Дамаскин бранио иконе?" }, a: { de: "Mit der Menschwerdung: Der unsichtbare Gott ist in Christus sichtbar geworden.", sr: "Оваплоћењем: невидљиви Бог је у Христу постао видљив." } }
    ],
    quiz: [
      { q: { de: "Wann wurde die Ikonenverehrung endgültig bestätigt?", sr: "Када је поштовање икона коначно потврђено?" }, options: [{ de: "843", sr: "843." }, { de: "1054", sr: "1054." }, { de: "325", sr: "325." }], correct: 0 },
      { q: { de: "Unter welchem Kaiser begann der Bilderstreit?", sr: "Под којим царем је почело иконоборство?" }, options: [{ de: "Leo III.", sr: "Лав III" }, { de: "Konstantin der Große", sr: "Константин Велики" }], correct: 0 }
    ],
    sources: { de: "Johannes von Damaskus, Drei Reden gegen die Bilderstürmer; Konzil von Nizäa 787 (NPNF II/14).", sr: "Јован Дамаскин, Три беседе против иконобораца; Никејски сабор 787 (NPNF II/14)." }
  },
  {
    id: "dg-schism", course: "D",
    title: { de: "Das Große Schisma von 1054", sr: "Велики раскол 1054." },
    sections: [
      { h: { de: "Historischer Hintergrund", sr: "Историјска позадина" },
        simple: { de: "Im Jahr 1054 kam es zum Bruch zwischen der Kirche von Rom und der Kirche von Konstantinopel. Die Spannungen hatten sich schon lange vorher entwickelt.", sr: "Године 1054. дошло је до раскида између Цркве у Риму и Цркве у Цариграду. Напетости су се развијале још дуго пре тога." },
        deeper: { de: "Im Juli 1054 legten päpstliche Gesandte unter Kardinal Humbert eine Exkommunikationsbulle gegen Patriarch Michael Kerularios in der Hagia Sophia nieder; dieser antwortete mit einer Gegenverurteilung. Der Bruch vertiefte sich in den folgenden Jahrhunderten, besonders durch die Plünderung Konstantinopels im Vierten Kreuzzug 1204. Diese Lektion behandelt die Ereignisse nur, soweit sie für das Verständnis der orthodoxen Kirchengeschichte nötig sind.", sr: "У јулу 1054. папски легати предвођени кардиналом Хумбертом положили су булу о искључењу против патријарха Михаила Керуларија у Светој Софији; он је одговорио противосудом. Раскол се продубио у наредним вековима, нарочито пљачком Цариграда у Четвртом крсташком рату 1204. Ова лекција обрађује догађаје само у мери у којој су потребни за разумевање историје Православне Цркве." },
        tag: "history" },
      { h: { de: "Die orthodoxe Sicht der Streitpunkte", sr: "Православни поглед на спорна питања" },
        simple: { de: "Aus orthodoxer Sicht ging es vor allem um zwei Punkte: die einseitige Änderung des Glaubensbekenntnisses (Filioque) und den Anspruch des Papstes auf Herrschaft über die ganze Kirche.", sr: "Из православне перспективе радило се пре свега о две ствари: једностраној измени Символа вере (Филиокве) и захтеву папе за влашћу над целом Црквом." },
        deeper: { de: "Das Filioque („und vom Sohn“) wurde im Westen dem Glaubensbekenntnis hinzugefügt, ohne Zustimmung eines Ökumenischen Konzils. Die orthodoxe Kirche hält daran fest, dass der Geist vom Vater ausgeht, wie es das Konzil von 381 bekannt hat. Zur kirchlichen Autorität lehrt die orthodoxe Kirche die konziliare (synodale) Ordnung: Höchste Autorität in Glaubensfragen hat die Kirche im Konzil, nicht ein einzelner Bischof. Ein Ehrenvorrang ist von einer Rechtsvollmacht über alle Kirchen zu unterscheiden.", sr: "Филиокве („и од Сина“) је на Западу додат Символу вере без сагласности васељенског сабора. Православна Црква држи да Дух исходи од Оца, како је исповедио сабор 381. О црквеном ауторитету Православна Црква учи саборни (синодални) поредак: највиши ауторитет у питањима вере има Црква на сабору, а не један епископ. Првенство части треба разликовати од правне власти над свим Црквама." },
        tag: "dogma" }
    ],
    keyPoints: [
      { de: "Juli 1054: gegenseitige Verurteilungen.", sr: "Јул 1054: узајамне осуде." },
      { de: "Streitpunkte: Filioque und päpstlicher Anspruch.", sr: "Спорна питања: Филиокве и папски захтев." },
      { de: "Orthodoxe Ordnung: konziliar.", sr: "Православни поредак: саборни." }
    ],
    bible: [
      { ref: { de: "Joh 15,26", sr: "Јн 15,26" }, note: { de: "Der Geist, der vom Vater ausgeht.", sr: "Дух који од Оца исходи." } },
      { ref: { de: "Apg 15,6–29", sr: "Дап 15,6–29" }, note: { de: "Gemeinsame Entscheidung der Apostel und Ältesten.", sr: "Заједничка одлука апостола и старешина." } }
    ],
    practice: { de: "Bete für die Einheit im wahren Glauben. In der Liturgie bittet die Kirche „für die Einheit aller“ – achte beim nächsten Besuch auf diese Bitte.", sr: "Молите се за јединство у правој вери. На Литургији Црква моли „за сједињење свих“ – обратите пажњу на ову прозбу на следећој служби." },
    questions: [
      { q: { de: "Was bedeutet Filioque?", sr: "Шта значи Филиокве?" }, a: { de: "„Und vom Sohn“ – ein im Westen ohne Ökumenisches Konzil eingefügter Zusatz zum Glaubensbekenntnis.", sr: "„И од Сина“ – додатак Символу вере уметнут на Западу без васељенског сабора." } },
      { q: { de: "Welches Ereignis vertiefte den Bruch besonders?", sr: "Који догађај је посебно продубио раскол?" }, a: { de: "Die Plünderung Konstantinopels im Vierten Kreuzzug 1204.", sr: "Пљачка Цариграда у Четвртом крсташком рату 1204." } }
    ],
    quiz: [
      { q: { de: "Wer war 1054 Patriarch von Konstantinopel?", sr: "Ко је 1054. био цариградски патријарх?" }, options: [{ de: "Michael Kerularios", sr: "Михаило Керуларије" }, { de: "Photios", sr: "Фотије" }, { de: "Johannes Chrysostomus", sr: "Јован Златоуст" }], correct: 0 },
      { q: { de: "Von wem geht der Heilige Geist nach dem Bekenntnis von 381 aus?", sr: "Од кога исходи Дух Свети према Символу вере из 381?" }, options: [{ de: "Vom Vater", sr: "Од Оца" }, { de: "Vom Vater und vom Sohn", sr: "Од Оца и Сина" }], correct: 0 },
      { q: { de: "In welchem Jahr wurde Konstantinopel von Kreuzfahrern geplündert?", sr: "Које године су крсташи опљачкали Цариград?" }, options: [{ de: "1204", sr: "1204." }, { de: "1453", sr: "1453." }, { de: "1054", sr: "1054." }], correct: 0 }
    ],
    sources: { de: "Historische Grunddaten nach allgemein anerkannter Geschichtsschreibung; dogmatische Position nach dem Glaubensbekenntnis von 381.", sr: "Основни историјски подаци према општеприхваћеној историографији; догматски став према Символу вере из 381." }
  },
  /* ===================== KURS L: LITURGIE UND KIRCHENJAHR ===================== */
  {
    id: "li-liturgy", course: "L",
    title: { de: "Die Göttliche Liturgie – Ablauf und Bedeutung", sr: "Света Литургија – поредак и значење" },
    sections: [
      { h: { de: "Was ist die Göttliche Liturgie?", sr: "Шта је Света Литургија?" },
        simple: { de: "Die Göttliche Liturgie ist der wichtigste Gottesdienst der orthodoxen Kirche. In ihr wird die Eucharistie gefeiert: Brot und Wein werden durch den Heiligen Geist zu Leib und Blut Christi, und die Gläubigen empfangen die Kommunion. „Liturgie“ bedeutet „gemeinsames Werk des Volkes“.", sr: "Света Литургија је најважније богослужење Православне Цркве. На њој се служи Евхаристија: хлеб и вино Духом Светим постају Тело и Крв Христова, а верни се причешћују. „Литургија“ значи „заједничко дело народа“." },
        deeper: { de: "Im Laufe des Jahres werden drei Formen gefeiert: Die Liturgie des hl. Johannes Chrysostomus an den meisten Tagen; die Liturgie des hl. Basilius des Großen zehnmal im Jahr (u. a. an den Sonntagen der Großen Fastenzeit, am Großen Donnerstag und Großen Samstag, am Vorabend von Weihnachten und Theophanie und am 1. Januar, dem Fest des hl. Basilius); und die Liturgie der vorgeweihten Gaben an Wochentagen der Großen Fastenzeit, die nach der Überlieferung dem hl. Gregor dem Dialogos zugeschrieben wird. In ihr werden keine Gaben neu geweiht, sondern am Sonntag geweihte Gaben gereicht.", sr: "Током године служе се три Литургије: Литургија светог Јована Златоуста већину дана; Литургија светог Василија Великог десет пута годишње (између осталог недељама Великог поста, на Велики четвртак и Велику суботу, на Бадњи дан, на Крстовдан уочи Богојављења и 1. јануара, на празник светог Василија); и Литургија пређеосвећених дарова радним данима Великог поста, која се према предању приписује светом Григорију Двојеслову. На њој се дарови не освећују изнова, него се причешћује даровима освећеним у недељу." },
        tag: "history" },
      { h: { de: "Der Ablauf in drei Teilen", sr: "Поредак у три дела" },
        simple: { de: "1. Proskomidie: Der Priester bereitet vor der Liturgie Brot und Wein am Rüsttisch vor.\n2. Liturgie der Katechumenen: Gebete, Lieder und die Lesungen aus dem Apostel und dem Evangelium.\n3. Liturgie der Gläubigen: Darbringung der Gaben, eucharistisches Hochgebet, Vaterunser und Kommunion.", sr: "1. Проскомидија: свештеник пре Литургије на жртвенику припрема хлеб и вино.\n2. Литургија оглашених: молитве, песме и читања из Апостола и Јеванђеља.\n3. Литургија верних: принос дарова, евхаристијски канон, Оче наш и причешће." },
        deeper: { de: "Wichtige Momente: Die große Ektenie (Fürbitten) und die Antiphonen eröffnen den Gottesdienst. Beim Kleinen Einzug wird das Evangelienbuch hereingetragen; danach wird das Trisagion („Heiliger Gott“) gesungen. Es folgen Epistel und Evangelium. Früher mussten die Katechumenen – Menschen, die sich auf die Taufe vorbereiten – danach die Kirche verlassen. Beim Großen Einzug werden die Gaben unter dem Cherubimhymnus zum Altar getragen. Nach dem Glaubensbekenntnis folgt die Anaphora (das eucharistische Hochgebet) mit der Epiklese, der Herabrufung des Heiligen Geistes auf die Gaben. Nach dem Vaterunser empfangen die vorbereiteten Gläubigen die Kommunion. Am Ende wird oft das Antidoron, gesegnetes Brot, verteilt.", sr: "Важни тренуци: велика јектенија (прозбе) и антифони отварају службу. На малом входу уноси се Јеванђеље; потом се пева Трисвета песма („Свети Боже“). Следе Апостол и Јеванђеље. Некада су оглашени – људи који се припремају за крштење – после тога морали да напусте храм. На великом входу дарови се преносе на часну трпезу уз Херувимску песму. После Символа вере следи анафора (евхаристијски канон) са епиклезом, призивањем Духа Светога на дарове. После Оче наша припремљени верни се причешћују. На крају се често дели нафора, благословени хлеб." },
        tag: "history" },
      { h: { de: "Die Ikonostase", sr: "Иконостас" },
        simple: { de: "Die Ikonostase ist die Bilderwand zwischen dem Altarraum und dem Kirchenschiff. Sie trennt nicht, sondern zeigt uns die Heiligen, die mit uns Gottesdienst feiern.", sr: "Иконостас је зид са иконама између олтара и наоса. Он не раздваја, него нам показује светитеље који заједно са нама учествују у богослужењу." },
        deeper: { de: "In der Mitte befinden sich die Königlichen Türen. Rechts davon ist immer die Ikone Christi, links die Ikone der Gottesgebärerin mit dem Kind. Daneben folgen meist Johannes der Täufer und der Heilige oder das Fest, dem die Kirche geweiht ist. Über den Königlichen Türen ist oft das Abendmahl dargestellt.", sr: "У средини се налазе царске двери. Десно од њих увек је икона Христа, а лево икона Богородице са Дететом. Поред њих обично следе Јован Крститељ и светитељ или празник коме је храм посвећен. Изнад царских двери често је приказана Тајна вечера." },
        tag: "history" }
    ],
    keyPoints: [
      { de: "Drei Formen: Chrysostomus, Basilius, vorgeweihte Gaben.", sr: "Три Литургије: Златоустова, Василијева, пређеосвећених дарова." },
      { de: "Drei Teile: Proskomidie, Liturgie der Katechumenen, Liturgie der Gläubigen.", sr: "Три дела: проскомидија, Литургија оглашених, Литургија верних." },
      { de: "Epiklese: Herabrufung des Heiligen Geistes auf die Gaben.", sr: "Епиклеза: призивање Духа Светога на дарове." }
    ],
    bible: [
      { ref: { de: "Lk 22,19–20", sr: "Лк 22,19–20" }, note: { de: "Die Einsetzung der Eucharistie.", sr: "Установљење Евхаристије." } },
      { ref: { de: "1 Kor 11,23–29", sr: "1 Кор 11,23–29" }, note: { de: "Paulus über das Herrenmahl und die würdige Vorbereitung.", sr: "Павле о вечери Господњој и достојној припреми." } },
      { ref: { de: "Jes 6,1–3", sr: "Ис 6,1–3" }, note: { de: "Das Heilig der Seraphim – Vorbild des Gesangs in der Anaphora.", sr: "„Свет“ серафима – узор песме у анафори." } }
    ],
    practice: { de: "Komm beim nächsten Besuch etwas früher und achte bewusst auf den Kleinen und Großen Einzug. Wenn du kommunizieren möchtest, besprich die Vorbereitung (Gebet, Fasten, Beichte) mit deinem Priester.", sr: "Следећи пут дођите мало раније и свесно обратите пажњу на мали и велики вход. Ако желите да се причестите, договорите припрему (молитва, пост, исповест) са својим свештеником." },
    questions: [
      { q: { de: "Was geschieht bei der Epiklese?", sr: "Шта се збива на епиклези?" }, a: { de: "Der Priester ruft den Heiligen Geist auf die Gemeinde und die Gaben herab, damit Brot und Wein Leib und Blut Christi werden.", sr: "Свештеник призива Духа Светога на сабрање и на дарове, да хлеб и вино постану Тело и Крв Христова." } },
      { q: { de: "Wer sind die Katechumenen?", sr: "Ко су оглашени?" }, a: { de: "Menschen, die sich auf die Taufe vorbereiten.", sr: "Људи који се припремају за крштење." } },
      { q: { de: "Welche Ikone befindet sich immer rechts der Königlichen Türen?", sr: "Која икона се увек налази десно од царских двери?" }, a: { de: "Die Ikone Christi.", sr: "Икона Христа." } }
    ],
    quiz: [
      { q: { de: "Welche Liturgie wird an den meisten Tagen gefeiert?", sr: "Која Литургија се служи већину дана?" }, options: [{ de: "Die des hl. Johannes Chrysostomus", sr: "Литургија светог Јована Златоуста" }, { de: "Die des hl. Basilius", sr: "Литургија светог Василија" }, { de: "Die der vorgeweihten Gaben", sr: "Литургија пређеосвећених дарова" }], correct: 0 },
      { q: { de: "Was wird beim Großen Einzug zum Altar getragen?", sr: "Шта се на великом входу преноси на часну трпезу?" }, options: [{ de: "Die Gaben (Brot und Wein)", sr: "Дарови (хлеб и вино)" }, { de: "Das Evangelienbuch", sr: "Јеванђеље" }, { de: "Die Ikone des Festes", sr: "Празнична икона" }], correct: 0 },
      { q: { de: "Wann wird die Liturgie der vorgeweihten Gaben gefeiert?", sr: "Када се служи Литургија пређеосвећених дарова?" }, options: [{ de: "An Wochentagen der Großen Fastenzeit", sr: "Радним данима Великог поста" }, { de: "Jeden Sonntag", sr: "Сваке недеље" }, { de: "Nur an Ostern", sr: "Само на Васкрс" }], correct: 0 },
      { q: { de: "Wie heißt das gesegnete Brot, das am Ende verteilt wird?", sr: "Како се зове благословени хлеб који се дели на крају?" }, options: [{ de: "Antidoron", sr: "Нафора (антидор)" }, { de: "Prosphora für die Proskomidie", sr: "Просфора за проскомидију" }, { de: "Koljivo", sr: "Кољиво" }], correct: 0 }
    ],
    sources: { de: "Ordnung der Göttlichen Liturgie nach dem gebräuchlichen Liturgikon; Einzelheiten (z. B. Gesänge, Verteilung des Antidorons) können je nach Ortskirche und Gemeinde abweichen.", sr: "Поредак Свете Литургије према уобичајеном Служабнику; појединости (нпр. песме, дељење нафоре) могу се разликовати зависно од помесне Цркве и парохије." }
  },
  {
    id: "li-feasts", course: "L",
    title: { de: "Das Kirchenjahr und die zwölf großen Feste", sr: "Црквена година и дванаест великих празника" },
    sections: [
      { h: { de: "Der Aufbau des Kirchenjahres", sr: "Устројство црквене године" },
        simple: { de: "Das orthodoxe Kirchenjahr beginnt am 1. September (julianisch; bürgerlich 14. September). Im Mittelpunkt steht Ostern (Pascha), das „Fest der Feste“. Daneben gibt es zwölf große Feste zu Ehren Christi und der Gottesgebärerin.", sr: "Православна црквена година почиње 1. септембра (по јулијанском; по грађанском 14. септембра). У средишту је Васкрс (Пасха), „празник над празницима“. Поред њега постоји дванаест великих празника у част Христа и Богородице." },
        deeper: { de: "Es gibt feste Feste, die jedes Jahr am selben Kalendertag gefeiert werden, und bewegliche Feste, die vom Osterdatum abhängen: Palmsonntag (eine Woche vor Ostern), Christi Himmelfahrt (40. Tag nach Ostern) und Pfingsten (50. Tag). Die Zeit von der Vorfastenzeit bis Ostern folgt dem Gottesdienstbuch Triodion, die Zeit von Ostern bis Pfingsten dem Pentekostarion.", sr: "Постоје непокретни празници, који се сваке године славе истог датума, и покретни празници, који зависе од датума Васкрса: Цвети (недељу дана пре Васкрса), Вазнесење – Спасовдан (40. дан после Васкрса) и Педесетница – Духови (50. дан). Време од припремних недеља до Васкрса прати богослужбену књигу Посни триод, а време од Васкрса до Педесетнице Цветни триод." },
        tag: "history" },
      { h: { de: "Die zwölf großen Feste", sr: "Дванаест великих празника" },
        simple: { de: "Feste Feste (Datum julianisch / bürgerlich):\n• Mariä Geburt – 8. / 21. September\n• Kreuzerhöhung – 14. / 27. September\n• Einführung Marias in den Tempel – 21. November / 4. Dezember\n• Christi Geburt (Weihnachten) – 25. Dezember / 7. Januar\n• Theophanie (Taufe Christi) – 6. / 19. Januar\n• Darstellung des Herrn im Tempel (Begegnung) – 2. / 15. Februar\n• Verkündigung – 25. März / 7. April\n• Verklärung des Herrn – 6. / 19. August\n• Entschlafung der Gottesgebärerin – 15. / 28. August\n\nBewegliche Feste:\n• Einzug in Jerusalem (Palmsonntag)\n• Christi Himmelfahrt\n• Pfingsten (Fest der Dreifaltigkeit)", sr: "Непокретни празници (датум по јулијанском / грађанском):\n• Рођење Пресвете Богородице (Мала Госпојина) – 8. / 21. септембар\n• Воздвижење Часног Крста (Крстовдан) – 14. / 27. септембар\n• Ваведење Пресвете Богородице – 21. новембар / 4. децембар\n• Рођење Христово (Божић) – 25. децембар / 7. јануар\n• Богојављење – 6. / 19. јануар\n• Сретење Господње – 2. / 15. фебруар\n• Благовести – 25. март / 7. април\n• Преображење Господње – 6. / 19. август\n• Успење Пресвете Богородице (Велика Госпојина) – 15. / 28. август\n\nПокретни празници:\n• Улазак Господа у Јерусалим (Цвети)\n• Вазнесење Господње (Спасовдан)\n• Педесетница (Света Тројица, Духови)" },
        deeper: { de: "Jedes Fest hat eine eigene Ikone, ein Troparion und ein Kontakion. Viele große Feste haben eine Vorfeier und eine Nachfeier von mehreren Tagen; der letzte Tag der Nachfeier heißt Apodosis (Abschluss). Ostern selbst gehört nicht zu den zwölf, weil es über allen Festen steht.", sr: "Сваки празник има своју икону, тропар и кондак. Многи велики празници имају предпразништво и попразништво од неколико дана; последњи дан попразништва зове се оданије празника. Сам Васкрс не спада међу дванаест, јер стоји изнад свих празника." },
        tag: "history" }
    ],
    keyPoints: [
      { de: "Kirchenjahr beginnt am 1. September (jul.).", sr: "Црквена година почиње 1. септембра (по јул.)." },
      { de: "Ostern ist das Fest der Feste, nicht eines der zwölf.", sr: "Васкрс је празник над празницима, не један од дванаест." },
      { de: "Neun feste und drei bewegliche große Feste.", sr: "Девет непокретних и три покретна велика празника." }
    ],
    bible: [
      { ref: { de: "Lk 2,22–40", sr: "Лк 2,22–40" }, note: { de: "Die Darstellung des Herrn im Tempel (Begegnung mit Simeon).", sr: "Сретење Господње (сусрет са Симеоном)." } },
      { ref: { de: "Mt 17,1–9", sr: "Мт 17,1–9" }, note: { de: "Die Verklärung auf dem Berg.", sr: "Преображење на гори." } },
      { ref: { de: "Apg 1,1–11", sr: "Дап 1,1–11" }, note: { de: "Die Himmelfahrt Christi.", sr: "Вазнесење Христово." } }
    ],
    practice: { de: "Trage dir die nächsten zwei großen Feste in deinen Kalender ein und plane, an der Liturgie teilzunehmen. Lies am Vorabend den Bibelabschnitt zum Fest.", sr: "Упишите у свој календар следећа два велика празника и испланирајте учешће на Литургији. Уочи празника прочитајте одељак из Писма везан за празник." },
    questions: [
      { q: { de: "Warum gehört Ostern nicht zu den zwölf großen Festen?", sr: "Зашто Васкрс не спада у дванаест великих празника?" }, a: { de: "Weil es als „Fest der Feste“ über allen anderen Festen steht.", sr: "Зато што као „празник над празницима“ стоји изнад свих других празника." } },
      { q: { de: "Welche großen Feste sind beweglich?", sr: "Који велики празници су покретни?" }, a: { de: "Palmsonntag, Christi Himmelfahrt und Pfingsten – sie hängen vom Osterdatum ab.", sr: "Цвети, Вазнесење и Педесетница – зависе од датума Васкрса." } },
      { q: { de: "Wann beginnt das Kirchenjahr?", sr: "Када почиње црквена година?" }, a: { de: "Am 1. September (julianisch; bürgerlich am 14. September).", sr: "Првог септембра (по јулијанском; по грађанском 14. септембра)." } }
    ],
    quiz: [
      { q: { de: "Wann feiern Kirchen mit julianischem Kalender Weihnachten nach bürgerlichem Datum?", sr: "Када Цркве са јулијанским календаром славе Божић по грађанском датуму?" }, options: [{ de: "Am 7. Januar", sr: "Седмог јануара" }, { de: "Am 25. Dezember", sr: "Двадесет петог децембра" }, { de: "Am 6. Januar", sr: "Шестог јануара" }], correct: 0 },
      { q: { de: "An welchem Tag nach Ostern ist Christi Himmelfahrt?", sr: "Ког дана после Васкрса је Вазнесење?" }, options: [{ de: "Am 40. Tag", sr: "Четрдесетог дана" }, { de: "Am 50. Tag", sr: "Педесетог дана" }, { de: "Am 8. Tag", sr: "Осмог дана" }], correct: 0 },
      { q: { de: "Welches Fest heißt serbisch „Велика Госпојина“?", sr: "Који празник се у народу зове „Велика Госпојина“?" }, options: [{ de: "Entschlafung der Gottesgebärerin", sr: "Успење Пресвете Богородице" }, { de: "Mariä Geburt", sr: "Рођење Пресвете Богородице" }, { de: "Verkündigung", sr: "Благовести" }], correct: 0 },
      { q: { de: "Wie heißt der letzte Tag der Nachfeier eines Festes?", sr: "Како се зове последњи дан попразништва?" }, options: [{ de: "Apodosis", sr: "Оданије празника" }, { de: "Epiklese", sr: "Епиклеза" }, { de: "Proskomidie", sr: "Проскомидија" }], correct: 0 }
    ],
    sources: { de: "Menäen, Triodion und Pentekostarion (liturgische Bücher); Daten nach dem julianischen Kalender, umgerechnet für 1900–2099 (Differenz 13 Tage).", sr: "Минеји, Посни и Цветни триод (богослужбене књиге); датуми по јулијанском календару, прерачунати за период 1900–2099 (разлика 13 дана)." }
  },
  {
    id: "li-fasting", course: "L",
    title: { de: "Die Fastenzeiten", sr: "Постови" },
    sections: [
      { h: { de: "Warum fasten orthodoxe Christen?", sr: "Зашто православни хришћани посте?" },
        simple: { de: "Fasten ist kein Selbstzweck und keine Diät. Es hilft, die Leidenschaften zu zähmen, aufmerksamer zu beten und sich anderen zuzuwenden. Fasten gehört immer zusammen mit Gebet und Barmherzigkeit (Almosen).", sr: "Пост није сам себи циљ и није дијета. Он помаже да се укроте страсти, да се пажљивије молимо и да се окренемо другима. Пост увек иде заједно са молитвом и милосрђем (милостињом)." },
        deeper: { de: "Die Väter betonen: Wichtiger als der Verzicht auf bestimmte Speisen ist der Verzicht auf Sünde, Zorn und üble Nachrede. Die traditionelle Fastenpraxis bedeutet meist den Verzicht auf Fleisch, Milchprodukte und Eier, an vielen Tagen auch auf Fisch, Wein und Öl. Wie streng jemand fastet, hängt von Gesundheit, Alter, Arbeit und Lebenslage ab. Kranke, Schwangere, stillende Mütter, Kinder und Menschen mit schwerer körperlicher Arbeit fasten in der Regel milder. Das persönliche Maß bespricht man mit dem Priester.", sr: "Оци наглашавају: важније од уздржавања од одређене хране јесте уздржавање од греха, гнева и оговарања. Традиционални пост обично значи уздржавање од меса, млечних производа и јаја, многим данима и од рибе, вина и уља. Колико строго неко пости, зависи од здравља, узраста, посла и животних прилика. Болесни, труднице, мајке дојиље, деца и људи који тешко физички раде по правилу посте блаже. Лична мера се договара са свештеником." },
        tag: "counsel" },
      { h: { de: "Die Fastenzeiten des Jahres", sr: "Постови током године" },
        simple: { de: "• Mittwoch und Freitag fast das ganze Jahr – in Erinnerung an den Verrat und die Kreuzigung Christi.\n• Große Fastenzeit: 40 Tage und die Karwoche vor Ostern.\n• Apostelfasten: vom Montag nach dem Sonntag Aller Heiligen bis zum 29. Juni (12. Juli); die Länge ändert sich jedes Jahr.\n• Entschlafungsfasten: 1. bis 14. August (14. bis 27. August).\n• Weihnachtsfasten: 15. November bis 24. Dezember (28. November bis 6. Januar).\n• Einzelne Fasttage: Vorabend von Theophanie, Enthauptung Johannes des Täufers, Kreuzerhöhung.", sr: "• Среда и петак скоро целе године – у спомен на издају и распеће Христово.\n• Велики (Часни) пост: 40 дана и Страсна седмица пред Васкрс.\n• Петровски пост: од понедељка после Недеље свих светих до 29. јуна (12. јула); трајање се мења сваке године.\n• Госпојински пост: од 1. до 14. августа (14. до 27. августа).\n• Божићни пост: од 15. новембра до 24. децембра (28. новембар до 6. јануара).\n• Појединачни посни дани: Крстовдан уочи Богојављења, Усековање главе Јована Крститеља, Воздвижење Часног Крста." },
        deeper: { de: "Es gibt auch fastenfreie Zeiten, in denen sogar Mittwoch und Freitag nicht gefastet wird, etwa die Woche nach Ostern (Lichte Woche), die Zeit von Weihnachten bis zum Vorabend von Theophanie und die Woche nach Pfingsten. Die genauen Regeln stehen im Typikon und im Kirchenkalender der jeweiligen Ortskirche.", sr: "Постоје и мрсне седмице, када се ни средом ни петком не пости, на пример седмица после Васкрса (Светла седмица), време од Божића до навечерја Богојављења и седмица после Педесетнице. Тачна правила налазе се у Типику и у црквеном календару помесне Цркве." },
        tag: "history" }
    ],
    keyPoints: [
      { de: "Fasten + Gebet + Barmherzigkeit gehören zusammen.", sr: "Пост + молитва + милосрђе иду заједно." },
      { de: "Vier große Fastenzeiten und Mittwoch/Freitag.", sr: "Четири велика поста и среда/петак." },
      { de: "Das persönliche Maß mit dem Priester absprechen.", sr: "Личну меру договорити са свештеником." }
    ],
    bible: [
      { ref: { de: "Mt 6,16–18", sr: "Мт 6,16–18" }, note: { de: "Fasten ohne zur Schau zu stellen.", sr: "Постити не показујући се." } },
      { ref: { de: "Jes 58,6–7", sr: "Ис 58,6–7" }, note: { de: "Das Fasten, das Gott gefällt: Unrecht lösen, Hungrigen Brot geben.", sr: "Пост који је угодан Богу: разрешити неправду, дати хлеб гладнима." } },
      { ref: { de: "Mt 4,1–2", sr: "Мт 4,1–2" }, note: { de: "Christus fastet 40 Tage in der Wüste.", sr: "Христос пости 40 дана у пустињи." } }
    ],
    practice: { de: "Wähle für die nächste Fastenzeit zusätzlich zum Speisefasten ein „Fasten“ für Augen und Zunge, z. B. weniger Zeit am Handy oder bewusst nicht über andere reden. Sprich dein Maß beim Essen mit dem Priester ab, besonders wenn du gesundheitliche Einschränkungen hast.", sr: "Изаберите за следећи пост поред поста у храни и „пост“ за очи и језик, нпр. мање времена на телефону или свесно не оговарати друге. Своју меру у храни договорите са свештеником, нарочито ако имате здравствене тегобе." },
    questions: [
      { q: { de: "Warum wird mittwochs und freitags gefastet?", sr: "Зашто се пости средом и петком?" }, a: { de: "Mittwoch in Erinnerung an den Verrat Christi, Freitag an seine Kreuzigung.", sr: "Средом у спомен на издају Христову, петком на Његово распеће." } },
      { q: { de: "Was ist nach den Vätern beim Fasten das Wichtigste?", sr: "Шта је према Оцима најважније у посту?" }, a: { de: "Der Verzicht auf Sünde und die Verbindung mit Gebet und Barmherzigkeit – nicht nur der Verzicht auf Speisen.", sr: "Уздржавање од греха и повезаност са молитвом и милосрђем – не само уздржавање од хране." } },
      { q: { de: "Wer fastet in der Regel milder?", sr: "Ко по правилу пости блаже?" }, a: { de: "Kranke, Schwangere, stillende Mütter, Kinder und Menschen mit schwerer körperlicher Arbeit – nach Absprache mit dem Priester.", sr: "Болесни, труднице, мајке дојиље, деца и људи који тешко физички раде – уз договор са свештеником." } }
    ],
    quiz: [
      { q: { de: "Wann endet das Apostelfasten?", sr: "Када се завршава Петровски пост?" }, options: [{ de: "Am 29. Juni (bürgerlich 12. Juli)", sr: "Двадесет деветог јуна (по грађанском 12. јула)" }, { de: "Am 15. August", sr: "Петнаестог августа" }, { de: "An Pfingsten", sr: "На Духове" }], correct: 0 },
      { q: { de: "Wie heißt die fastenfreie Woche nach Ostern?", sr: "Како се зове мрсна седмица после Васкрса?" }, options: [{ de: "Lichte Woche", sr: "Светла седмица" }, { de: "Karwoche", sr: "Страсна седмица" }, { de: "Käsewoche", sr: "Сиропусна седмица" }], correct: 0 },
      { q: { de: "Womit gehört das Fasten nach orthodoxem Verständnis immer zusammen?", sr: "Са чим, према православном схватању, пост увек иде заједно?" }, options: [{ de: "Mit Gebet und Barmherzigkeit", sr: "Са молитвом и милосрђем" }, { de: "Mit Kalorienzählen", sr: "Са бројањем калорија" }, { de: "Mit Sport", sr: "Са спортом" }], correct: 0 }
    ],
    sources: { de: "Typikon und Kirchenkalender; die genaue Praxis unterscheidet sich zwischen Ortskirchen, Klöstern und Gemeinden.", sr: "Типик и црквени календар; тачна пракса разликује се међу помесним Црквама, манастирима и парохијама." }
  },
  {
    id: "li-calendar", course: "L",
    title: { de: "Julianischer und neuer Kalender", sr: "Јулијански и нови календар" },
    sections: [
      { h: { de: "Warum gibt es zwei Daten?", sr: "Зашто постоје два датума?" },
        simple: { de: "Der julianische Kalender stammt aus der Zeit Julius Caesars. Er ist etwas zu lang und liegt heute 13 Tage hinter dem bürgerlichen (gregorianischen) Kalender. Darum feiern Kirchen mit julianischem Kalender Weihnachten am 25. Dezember – das ist im bürgerlichen Kalender der 7. Januar.", sr: "Јулијански календар потиче из времена Јулија Цезара. Он је мало предуг и данас заостаје 13 дана за грађанским (грегоријанским) календаром. Зато Цркве са јулијанским календаром славе Божић 25. децембра – што је по грађанском календару 7. јануар." },
        deeper: { de: "Der Unterschied beträgt von 1900 bis 2099 genau 13 Tage und wächst danach auf 14 Tage. Den julianischen Kalender verwenden u. a. die Kirchen von Serbien, Russland, Georgien und Jerusalem sowie der Heilige Berg Athos. Andere orthodoxe Kirchen, z. B. die von Konstantinopel, Griechenland, Rumänien und Bulgarien, feiern die festen Feste seit dem 20. Jahrhundert nach dem revidierten julianischen („neuen“) Kalender, der derzeit mit dem bürgerlichen übereinstimmt.", sr: "Разлика од 1900. до 2099. износи тачно 13 дана, а потом расте на 14 дана. Јулијански календар користе, између осталих, Српска, Руска, Грузијска и Јерусалимска Црква, као и Света Гора. Друге православне Цркве, нпр. Цариградска, Грчка, Румунска и Бугарска, од 20. века славе непокретне празнике по ревидираном јулијанском („новом“) календару, који се тренутно поклапа са грађанским." },
        tag: "history" },
      { h: { de: "Ostern bleibt gemeinsam", sr: "Васкрс остаје заједнички" },
        simple: { de: "Fast alle orthodoxen Kirchen berechnen das Osterdatum gemeinsam nach dem julianischen Kalender. So feiert die ganze Orthodoxie Ostern am selben Tag – unabhängig davon, welchen Kalender sie für die festen Feste verwendet.", sr: "Скоро све православне Цркве заједно рачунају датум Васкрса по јулијанском календару. Тако цело Православље слави Васкрс истог дана – без обзира који календар користи за непокретне празнике." },
        deeper: { de: "Die Berechnung folgt der alten kirchlichen Regel: Ostern ist am Sonntag nach dem ersten Frühlingsvollmond, der dem Frühlingsbeginn nach julianischer Rechnung folgt. Eine bekannte Ausnahme ist die Orthodoxe Kirche von Finnland, die Ostern nach dem gregorianischen Kalender feiert. Die Kalenderfrage ist eine Frage der kirchlichen Ordnung, kein Glaubenssatz; sie hat dennoch zu Spannungen geführt.", sr: "Рачунање прати старо црквено правило: Васкрс је прве недеље после првог пролећног пуног месеца, који следи после почетка пролећа по јулијанском рачунању. Познати изузетак је Финска Православна Црква, која Васкрс слави по грегоријанском календару. Питање календара је питање црквеног поретка, а не догмат; ипак је изазивало напетости." },
        tag: "history" }
    ],
    keyPoints: [
      { de: "Unterschied jul./bürgerlich: 13 Tage (1900–2099).", sr: "Разлика јул./грађ.: 13 дана (1900–2099)." },
      { de: "Serbische Kirche: julianischer Kalender.", sr: "Српска Црква: јулијански календар." },
      { de: "Ostern: (fast) alle Orthodoxen am selben Tag.", sr: "Васкрс: (скоро) сви православни истог дана." }
    ],
    bible: [
      { ref: { de: "Gen 1,14", sr: "Пост 1,14" }, note: { de: "Die Lichter am Himmel als Zeichen für Zeiten, Tage und Jahre.", sr: "Светила на небу као знаци за времена, дане и године." } },
      { ref: { de: "Kol 2,16–17", sr: "Кол 2,16–17" }, note: { de: "Feste und Tage als Schatten des Kommenden; die Wirklichkeit ist Christus.", sr: "Празници и дани као сенка будућег; стварност је Христос." } }
    ],
    practice: { de: "Rechne für ein Fest deiner Wahl das bürgerliche Datum aus: julianisches Datum plus 13 Tage. Prüfe, welchen Kalender deine Gemeinde verwendet.", sr: "За празник по избору израчунајте грађански датум: јулијански датум плус 13 дана. Проверите који календар користи ваша парохија." },
    questions: [
      { q: { de: "Wie rechnet man ein julianisches Datum in ein bürgerliches um?", sr: "Како се јулијански датум прерачунава у грађански?" }, a: { de: "Man zählt (zwischen 1900 und 2099) 13 Tage dazu.", sr: "Додаје се (између 1900. и 2099.) 13 дана." } },
      { q: { de: "Warum feiern fast alle Orthodoxen Ostern am selben Tag?", sr: "Зашто скоро сви православни славе Васкрс истог дана?" }, a: { de: "Weil sie das Osterdatum gemeinsam nach dem julianischen Kalender berechnen.", sr: "Зато што датум Васкрса заједно рачунају по јулијанском календару." } }
    ],
    quiz: [
      { q: { de: "Welchen Kalender verwendet die Serbische Orthodoxe Kirche?", sr: "Који календар користи Српска Православна Црква?" }, options: [{ de: "Den julianischen", sr: "Јулијански" }, { de: "Den revidierten julianischen", sr: "Ревидирани јулијански" }, { de: "Den gregorianischen", sr: "Грегоријански" }], correct: 0 },
      { q: { de: "Welche orthodoxe Kirche feiert Ostern nach dem gregorianischen Kalender?", sr: "Која православна Црква слави Васкрс по грегоријанском календару?" }, options: [{ de: "Die Kirche von Finnland", sr: "Финска Црква" }, { de: "Die Kirche von Serbien", sr: "Српска Црква" }, { de: "Die Kirche von Georgien", sr: "Грузијска Црква" }], correct: 0 },
      { q: { de: "Ist die Kalenderfrage ein Glaubenssatz (Dogma)?", sr: "Да ли је питање календара догмат?" }, options: [{ de: "Nein, eine Frage der kirchlichen Ordnung", sr: "Не, питање црквеног поретка" }, { de: "Ja", sr: "Да" }], correct: 0 }
    ],
    sources: { de: "Kalendarische Grunddaten (astronomisch und historisch gesichert); Kalenderwahl der Ortskirchen nach Stand 2026.", sr: "Основни календарски подаци (астрономски и историјски поуздани); избор календара помесних Цркава према стању из 2026." }
  },
  {
    id: "li-slava", course: "L",
    title: { de: "Die serbische Krsna Slava", sr: "Крсна слава" },
    sections: [
      { h: { de: "Was ist die Slava?", sr: "Шта је крсна слава?" },
        simple: { de: "Die Krsna Slava ist ein besonderer Brauch der Serben: Jede Familie feiert jedes Jahr den Tag ihres Schutzheiligen. Die Slava wird vom Vater auf die Kinder vererbt. Viele Familien feiern z. B. den hl. Nikolaus, den hl. Georg oder den hl. Johannes den Täufer.", sr: "Крсна слава је посебан обичај Срба: свака породица сваке године прославља дан свог светитеља заштитника. Слава се преноси са оца на децу. Многе породице славе, на пример, Светог Николу, Светог Ђорђа или Светог Јована." },
        deeper: { de: "Nach verbreiteter Überlieferung erinnert die Slava an den Tag, an dem die Vorfahren der Familie getauft wurden; der hl. Sava förderte den Brauch und gab ihm eine christliche Ordnung. Die Ursprünge sind historisch nicht in allen Einzelheiten gesichert. 2014 wurde die Slava in die UNESCO-Liste des immateriellen Kulturerbes aufgenommen.", sr: "Према раширеном предању, слава подсећа на дан када су се преци породице крстили; свети Сава је подржао овај обичај и дао му хришћански поредак. Порекло није у свим појединостима историјски потврђено. Године 2014. слава је уписана на Унесков списак нематеријалног културног наслеђа." },
        tag: "uncertain" },
      { h: { de: "Wie wird die Slava gefeiert?", sr: "Како се слави слава?" },
        simple: { de: "Zur Slava gehören: die Slavakerze, der Slavakuchen (slavski kolač), gekochter Weizen (žito) als Gedächtnis der Verstorbenen, Weihrauch und das Gebet. Der Priester kommt meist ins Haus oder segnet den Kuchen in der Kirche. Danach lädt die Familie Gäste ein.", sr: "Уз славу иду: славска свећа, славски колач, кувано жито у спомен на упокојене, тамјан и молитва. Свештеник обично долази у кућу или колач освећује у храму. После тога породица прима госте." },
        deeper: { de: "Der Priester segnet Wasser und Haus, der Kuchen wird kreuzförmig eingeschnitten, mit Wein übergossen und von Hausherrn und Priester gemeinsam gedreht, während das Troparion des Heiligen gesungen wird. Fällt die Slava in eine Fastenzeit, ist auch das Festmahl fastengemäß. Die Slava ist kein Ersatz für die Liturgie: Ideal ist es, am Festtag an der Göttlichen Liturgie teilzunehmen.", sr: "Свештеник освећује воду и дом, колач се засеца крстообразно, прелива вином и домаћин и свештеник га заједно окрећу док се пева тропар светитеља. Ако слава падне у пост, и славска трпеза је посна. Слава није замена за Литургију: идеално је на дан празника учествовати на Светој Литургији." },
        tag: "history" }
    ],
    keyPoints: [
      { de: "Familienfest des Schutzheiligen, vom Vater vererbt.", sr: "Породична прослава светитеља заштитника, преноси се са оца." },
      { de: "Kerze, Kuchen, Weizen, Weihrauch, Gebet.", sr: "Свећа, колач, жито, тамјан, молитва." },
      { de: "Seit 2014 UNESCO-Kulturerbe.", sr: "Од 2014. Унесково културно наслеђе." }
    ],
    bible: [
      { ref: { de: "Hebr 12,1", sr: "Јев 12,1" }, note: { de: "Eine Wolke von Zeugen umgibt uns.", sr: "Око нас је облак сведока." } },
      { ref: { de: "Hebr 13,7", sr: "Јев 13,7" }, note: { de: "Gedenkt eurer Vorsteher und ahmt ihren Glauben nach.", sr: "Опомињите се својих старешина и угледајте се на њихову веру." } }
    ],
    practice: { de: "Wenn deine Familie eine Slava hat: Lies das Leben des Heiligen im Prolog von Ohrid (siehe Bibliothek). Wenn nicht: Lerne den Heiligen deines Namens oder deiner Gemeinde kennen.", sr: "Ако ваша породица слави славу: прочитајте житије светитеља у Охридском прологу (види библиотеку). Ако не: упознајте светитеља свог имена или своје парохије." },
    questions: [
      { q: { de: "Woran erinnert die Slava nach verbreiteter Überlieferung?", sr: "На шта, према раширеном предању, подсећа слава?" }, a: { de: "An den Tag der Taufe der Vorfahren der Familie.", sr: "На дан крштења предака породице." } },
      { q: { de: "Wofür steht der gekochte Weizen (žito)?", sr: "Шта представља кувано жито?" }, a: { de: "Für das Gedächtnis der Verstorbenen und die Hoffnung auf die Auferstehung (vgl. Joh 12,24).", sr: "Спомен на упокојене и наду у васкрсење (уп. Јн 12,24)." } }
    ],
    quiz: [
      { q: { de: "Wie wird die Slava weitergegeben?", sr: "Како се слава преноси?" }, options: [{ de: "Vom Vater auf die Kinder", sr: "Са оца на децу" }, { de: "Durch Wahl jedes Jahr neu", sr: "Бира се сваке године изнова" }], correct: 0 },
      { q: { de: "Seit wann ist die Slava UNESCO-Kulturerbe?", sr: "Од када је слава Унесково културно наслеђе?" }, options: [{ de: "2014", sr: "2014." }, { de: "1989", sr: "1989." }, { de: "2020", sr: "2020." }], correct: 0 },
      { q: { de: "Was ist der beste Ort, die Slava zu beginnen?", sr: "Где је најбоље започети прославу славе?" }, options: [{ de: "Bei der Göttlichen Liturgie", sr: "На Светој Литургији" }, { de: "Im Restaurant", sr: "У ресторану" }], correct: 0 }
    ],
    sources: { de: "Kirchliche Praxis der Serbischen Orthodoxen Kirche; die Ursprungsdeutung ist Überlieferung und historisch nicht in allen Punkten gesichert. UNESCO-Eintrag 2014.", sr: "Црквена пракса Српске Православне Цркве; тумачење порекла је предање и историјски није у свим тачкама потврђено. Упис код Унеска 2014." }
  },
  {
    id: "li-three", course: "L",
    title: { de: "Drei Liturgien: Chrysostomus, Basilius und die Vorgeweihten Gaben", sr: "Три литургије: Златоустова, Василијева и Пређеосвећених Дарова" },
    sections: [
      { h: { de: "Welche Liturgien feiert die Kirche?", sr: "Које литургије служи Црква?" },
        simple: { de: "Die orthodoxe Kirche feiert die Eucharistie heute vor allem in drei Formen. An den meisten Tagen des Jahres ist es die Liturgie des hl. Johannes Chrysostomus. An etwa zehn Tagen im Jahr wird die längere Liturgie des hl. Basilius des Großen gefeiert. In der Großen Fastenzeit gibt es zusätzlich die Liturgie der Vorgeweihten Gaben.", sr: "Православна Црква данас служи Евхаристију углавном у три облика. Већину дана у години то је Литургија светог Јована Златоуста. Десетак дана у години служи се дужа Литургија светог Василија Великог. У Великом посту служи се још и Литургија Пређеосвећених Дарова." },
        deeper: { de: "Die Liturgie des hl. Basilius wird gefeiert: am 1. Januar (Fest des hl. Basilius), am Vortag von Weihnachten und Theophanie (fällt dieser auf Samstag oder Sonntag, am Fest selbst), an den ersten fünf Sonntagen der Großen Fastenzeit sowie am Großen Donnerstag und Großen Samstag. Der Aufbau ist bei Chrysostomus und Basilius gleich; verschieden sind vor allem die Gebete des Priesters.", sr: "Литургија светог Василија служи се: 1. јануара (празник светог Василија), уочи Божића и Богојављења (ако то падне у суботу или недељу, на сам празник), првих пет недеља Великог поста, као и на Велики четвртак и Велику суботу. Устројство Златоустове и Василијеве литургије је исто; разликују се пре свега молитве свештеника." },
        tag: "history" },
      { h: { de: "Was ist bei der Basilius-Liturgie anders?", sr: "Шта је другачије на Василијевој литургији?" },
        simple: { de: "Die Gebete des Priesters, besonders das große Hochgebet (Anaphora), sind deutlich länger und reich an biblischen Gedanken: Schöpfung, Fall, Propheten und das ganze Heilswerk Christi. Vieles davon betet der Priester leise, darum dauert die Liturgie etwas länger. Hörbar anders ist ein Gesang: Statt „Es ist würdig“ singt man zur Gottesgebärerin „Über dich freut sich, du Begnadete, die ganze Schöpfung“.", sr: "Молитве свештеника, нарочито велика евхаристијска молитва (анафора), знатно су дуже и богате библијским мислима: стварање, пад, пророци и цело Христово дело спасења. Свештеник много тога чита тихо, зато литургија траје нешто дуже. Чујно се разликује једна песма: уместо „Достојно јест“ пева се Богородици „О Теби радује се, Благодатна, сва твар“." },
        deeper: { de: "Die Überlieferung schreibt die Anaphora dem hl. Basilius dem Großen (4. Jh.) zu; die Forschung hält einen Kern für basilianisch. Die Chrysostomus-Liturgie wird oft als kürzere Fassung beschrieben; wie genau beide Texte entstanden sind, ist historisch nicht in allen Einzelheiten geklärt.", sr: "Предање анафору приписује светом Василију Великом (4. век); истраживачи сматрају да језгро потиче од њега. Литургија светог Јована Златоуста често се описује као краћи облик; како су тачно оба текста настала, историјски није у свим појединостима разјашњено." },
        tag: "uncertain" },
      { h: { de: "Die Liturgie der Vorgeweihten Gaben", sr: "Литургија Пређеосвећених Дарова" },
        simple: { de: "An den Wochentagen der Großen Fastenzeit wird nach dem Typikon keine volle Liturgie gefeiert, denn die Eucharistie ist ein Fest der Auferstehung. Damit die Gläubigen trotzdem kommunizieren können, werden am Sonntag zusätzliche Gaben geweiht. Mittwochs und freitags (je nach Gemeinde auch an anderen Tagen) sowie in den ersten drei Tagen der Karwoche wird damit die Kommunion gereicht. Es gibt in diesem Gottesdienst keine Wandlung – die Gaben sind schon „vorgeweiht“.", sr: "Радним данима Великог поста по Типику се не служи пуна литургија, јер је Евхаристија празник Васкрсења. Да би верници ипак могли да се причесте, недељом се освећују додатни Дарови. Средом и петком (зависно од парохије и других дана) и прва три дана Страсне седмице њима се причешћује. У овој служби нема освећења Дарова – они су већ „пређеосвећени“." },
        deeper: { de: "Der Gottesdienst ist mit der Vesper verbunden und wurde ursprünglich am Abend gefeiert. Typisch sind: der Gesang „Mein Gebet steige auf wie Weihrauch vor dein Angesicht“ (Ps 140,2 LXX) mit Niederwerfungen, die Lesungen aus Genesis und Sprichwörtern, der Segen mit der Kerze „Das Licht Christi erleuchtet alle“ und der Gesang „Jetzt dienen die Mächte der Himmel unsichtbar mit uns“. Die Überlieferung verbindet den Gottesdienst mit dem hl. Gregor dem Dialogos (Papst Gregor der Große); diese Zuschreibung ist historisch unsicher. Wie lange man vor dieser Kommunion fastet, besprichst du mit deinem Priester.", sr: "Служба је спојена са вечерњем и првобитно се служила увече. Карактеристични су: песма „Нека се исправи молитва моја као кад пред Тобом“ (Пс 140,2 по Септуагинти) са метанијама, читања из Постања и Прича Соломонових, благослов са свећом „Светлост Христова просвећује све“ и песма „Сада силе небеске с нама невидљиво служе“. Предање службу повезује са светим Григоријем Двојесловом (папом Григоријем Великим); ово приписивање је историјски несигурно. Колико се пости пред ово причешће, разговарајте са својим свештеником." },
        tag: "history" }
    ],
    keyPoints: [
      { de: "Chrysostomus-Liturgie: an den meisten Tagen.", sr: "Златоустова литургија: већином дана." },
      { de: "Basilius-Liturgie: etwa zehnmal im Jahr, längere Priestergebete, „Über dich freut sich“.", sr: "Василијева литургија: десетак пута годишње, дуже свештеничке молитве, „О Теби радује се“." },
      { de: "Vorgeweihte Gaben: Fastenzeit, mit der Vesper verbunden, keine Wandlung.", sr: "Пређеосвећени Дарови: Велики пост, спојено са вечерњем, без освећења Дарова." }
    ],
    bible: [
      { ref: { de: "Ps 140,2 (LXX; hebr. 141,2)", sr: "Пс 140,2 (по Септуагинти; јевр. 141,2)" }, note: { de: "Mein Gebet steige auf wie Weihrauch.", sr: "Нека се исправи молитва моја као кад." } },
      { ref: { de: "1 Kor 11,23–26", sr: "1 Кор 11,23–26" }, note: { de: "Das Abendmahl des Herrn.", sr: "Вечера Господња." } },
      { ref: { de: "Lk 24,30–31", sr: "Лк 24,30–31" }, note: { de: "Erkannt beim Brotbrechen.", sr: "Познаше Га у ломљењу хлеба." } }
    ],
    practice: { de: "Besuche in der nächsten Großen Fastenzeit einmal eine Liturgie der Vorgeweihten Gaben. Achte auf „Mein Gebet steige auf wie Weihrauch“ und auf den Segen mit der Kerze.", sr: "Следећег Великог поста посетите једном Литургију Пређеосвећених Дарова. Обратите пажњу на „Нека се исправи молитва моја“ и на благослов са свећом." },
    questions: [
      { q: { de: "Warum wird an Wochentagen der Großen Fastenzeit keine volle Liturgie gefeiert?", sr: "Зашто се радним данима Великог поста не служи пуна литургија?" }, a: { de: "Weil die Eucharistie ein festliches Feiern der Auferstehung ist, die Fastenwochentage aber der Buße gelten.", sr: "Зато што је Евхаристија празнично слављење Васкрсења, а посни радни дани су посвећени покајању." } },
      { q: { de: "Woran erkennt man als Gläubiger die Basilius-Liturgie?", sr: "По чему верник препознаје Василијеву литургију?" }, a: { de: "Sie dauert etwas länger, und statt „Es ist würdig“ wird „Über dich freut sich“ gesungen.", sr: "Траје нешто дуже, а уместо „Достојно јест“ пева се „О Теби радује се“." } }
    ],
    quiz: [
      { q: { de: "Wie oft im Jahr wird die Basilius-Liturgie etwa gefeiert?", sr: "Колико пута годишње се отприлике служи Василијева литургија?" }, options: [{ de: "Etwa zehnmal", sr: "Десетак пута" }, { de: "Jeden Sonntag", sr: "Сваке недеље" }, { de: "Nur an Ostern", sr: "Само на Васкрс" }], correct: 0 },
      { q: { de: "Was fehlt in der Liturgie der Vorgeweihten Gaben?", sr: "Шта нема у Литургији Пређеосвећених Дарова?" }, options: [{ de: "Die Weihe (Wandlung) der Gaben", sr: "Освећење Дарова" }, { de: "Die Kommunion", sr: "Причешће" }, { de: "Das Gebet", sr: "Молитва" }], correct: 0 },
      { q: { de: "Welcher Gesang ersetzt in der Basilius-Liturgie „Es ist würdig“?", sr: "Која песма у Василијевој литургији замењује „Достојно јест“?" }, options: [{ de: "„Über dich freut sich“", sr: "„О Теби радује се“" }, { de: "„Christus ist auferstanden“", sr: "„Христос васкрсе“" }, { de: "„Heiliger Gott“", sr: "„Свети Боже“" }], correct: 0 },
      { q: { de: "Mit welchem Gottesdienst ist die Liturgie der Vorgeweihten Gaben verbunden?", sr: "Са којом службом је спојена Литургија Пређеосвећених Дарова?" }, options: [{ de: "Mit der Vesper", sr: "Са вечерњем" }, { de: "Mit der Taufe", sr: "Са крштењем" }, { de: "Mit der Trauung", sr: "Са венчањем" }], correct: 0 }
    ],
    sources: { de: "Typikon und gottesdienstliche Praxis der orthodoxen Kirche; die Tagesangaben entsprechen der allgemeinen Ordnung, die örtliche Praxis kann abweichen. Zuschreibungen an Basilius und Gregor nach der Überlieferung.", sr: "Типик и богослужбена пракса Православне Цркве; наведени дани одговарају општем поретку, месна пракса може да се разликује. Приписивања Василију и Григорију према предању." }
  }
];

/* Glaubensbekenntnis */
const CREED = {
  de: "Ich glaube an den einen Gott, den Vater, den Allherrscher, Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren.\n\nUnd an den einen Herrn Jesus Christus, den eingeborenen Sohn Gottes, aus dem Vater geboren vor allen Zeiten: Licht vom Licht, wahrer Gott vom wahren Gott, gezeugt, nicht geschaffen, eines Wesens mit dem Vater, durch den alles geworden ist.\n\nDer für uns Menschen und um unseres Heiles willen vom Himmel herabgestiegen ist und Fleisch angenommen hat aus dem Heiligen Geist und Maria, der Jungfrau, und Mensch geworden ist.\n\nDer auch für uns gekreuzigt wurde unter Pontius Pilatus, gelitten hat und begraben wurde.\n\nDer auferstanden ist am dritten Tage gemäß den Schriften.\n\nDer aufgefahren ist in die Himmel und zur Rechten des Vaters sitzt.\n\nDer wiederkommen wird in Herrlichkeit, zu richten die Lebenden und die Toten; seines Reiches wird kein Ende sein.\n\nUnd an den Heiligen Geist, den Herrn, den Lebensspender, der vom Vater ausgeht, der mit dem Vater und dem Sohn zugleich angebetet und verherrlicht wird, der gesprochen hat durch die Propheten.\n\nAn die eine, heilige, katholische (allumfassende) und apostolische Kirche.\n\nIch bekenne die eine Taufe zur Vergebung der Sünden.\n\nIch erwarte die Auferstehung der Toten und das Leben der kommenden Weltzeit. Amen.",
  sr: "Верујем у једнога Бога Оца, Сведржитеља, Творца неба и земље, и свега видљивог и невидљивог.\n\nИ у једнога Господа Исуса Христа, Сина Божијег, Јединороднога, рођенога од Оца пре свих векова; Светлост од Светлости, Бога истинитога од Бога истинитога; рођенога, а не створенога, једносушнога Оцу, кроз кога је све постало.\n\nКоји је ради нас људи и ради нашег спасења сишао с небеса, и оваплотио се од Духа Светога и Марије Дјеве, и постао човек.\n\nИ који је распет за нас у време Понтија Пилата, и страдао, и погребен.\n\nИ који је васкрсао у трећи дан, по Писму.\n\nИ који се вазнео на небеса и седи с десне стране Оца.\n\nИ који ће опет доћи са славом, да суди живима и мртвима, Његовом Царству неће бити краја.\n\nИ у Духа Светога, Господа, Животворнога, Који од Оца исходи, Коме се заједно са Оцем и Сином поклањамо и Кога заједно славимо, Који је говорио кроз пророке.\n\nУ једну, свету, саборну и апостолску Цркву.\n\nИсповедам једно крштење за опроштење грехова.\n\nЧекам васкрсење мртвих, и живот будућега века. Амин."
};

if (typeof module !== "undefined") module.exports = { COURSES, THEOLOGY, CREED };
