/* OrthodoxPath – Kirchenväter (Kurs B) und Heilige (Kurs C).
   Gedenktage: erstes Datum nach dem kirchlichen (julianischen) Kalender, zweites nach dem bürgerlichen. */

const LINKS = {
  bkv: { url: "https://bkv.unifr.ch/de/works", label: { de: "Bibliothek der Kirchenväter (deutsch, Universität Freiburg/Schweiz)", sr: "Библиотека Отаца Цркве (немачки, Универзитет у Фрибуру)" } },
  athInc: { url: "https://bkv.unifr.ch/works/cpg-2091", label: { de: "Über die Menschwerdung des Wortes – BKV (deutsch)", sr: "О оваплоћењу Логоса – BKV (немачки)" } },
  athMarc: { url: "https://bkv.unifr.ch/works/cpg-2097", label: { de: "Brief an Marcellinus über die Psalmen – BKV (deutsch)", sr: "Посланица Маркелину о псалмима – BKV (немачки)" } },
  athAnt: { url: "https://bkv.unifr.ch/works/cpg-2101", label: { de: "Leben des hl. Antonius – BKV (deutsch)", sr: "Житије светог Антонија – BKV (немачки)" } },
  anfIgn: { url: "https://www.ccel.org/ccel/schaff/anf01.html", label: { de: "Briefe des hl. Ignatius von Antiochien – ANF Band 1 (englisch, CCEL)", sr: "Посланице светог Игњатија Антиохијског – ANF том 1 (енглески, CCEL)" } },
  npnf201: { url: "https://www.ccel.org/ccel/schaff/npnf201.html", label: { de: "Eusebius, Kirchengeschichte – NPNF II/1 (englisch, CCEL)", sr: "Јевсевије, Црквена историја – NPNF II/1 (енглески, CCEL)" } },
  npnf109: { url: "https://www.ccel.org/ccel/schaff/npnf109.html", label: { de: "Chrysostomus, Über das Priestertum u. a. – NPNF I/9 (englisch, CCEL)", sr: "Златоуст, О свештенству и др. – NPNF I/9 (енглески, CCEL)" } },
  npnf207cyr: { url: "https://www.ccel.org/ccel/schaff/npnf207.html", label: { de: "Kyrill von Jerusalem, Katechesen – NPNF II/7 (englisch, CCEL)", sr: "Кирило Јерусалимски, Катихезе – NPNF II/7 (енглески, CCEL)" } },
  anf01: { url: "https://www.ccel.org/ccel/schaff/anf01.html", label: { de: "Irenäus von Lyon, Gegen die Häresien – ANF Band 1 (englisch, CCEL)", sr: "Иринеј Лионски, Против јереси – ANF, том 1 (енглески, CCEL)" } },
  anf05: { url: "https://www.ccel.org/ccel/schaff/anf05.html", label: { de: "Hippolyt u. a. – ANF Band 5 (englisch, CCEL)", sr: "Иполит и др. – ANF, том 5 (енглески, CCEL)" } },
  npnf204: { url: "https://www.ccel.org/ccel/schaff/npnf204.html", label: { de: "Athanasius – NPNF II/4 (englisch, CCEL)", sr: "Атанасије – NPNF II/4 (енглески, CCEL)" } },
  npnf205: { url: "https://www.ccel.org/ccel/schaff/npnf205.html", label: { de: "Gregor von Nyssa – NPNF II/5 (englisch, CCEL)", sr: "Григорије Ниски – NPNF II/5 (енглески, CCEL)" } },
  npnf207: { url: "https://www.ccel.org/ccel/schaff/npnf207.html", label: { de: "Gregor von Nazianz – NPNF II/7 (englisch, CCEL)", sr: "Григорије Богослов – NPNF II/7 (енглески, CCEL)" } },
  npnf208: { url: "https://www.ccel.org/ccel/schaff/npnf208.html", label: { de: "Basilius der Große – NPNF II/8 (englisch, CCEL)", sr: "Василије Велики – NPNF II/8 (енглески, CCEL)" } },
  npnf209: { url: "https://www.ccel.org/ccel/schaff/npnf209.html", label: { de: "Johannes von Damaskus – NPNF II/9 (englisch, CCEL)", sr: "Јован Дамаскин – NPNF II/9 (енглески, CCEL)" } },
  npnf213: { url: "https://www.ccel.org/ccel/schaff/npnf213.html", label: { de: "Ephräm der Syrer – NPNF II/13 (englisch, CCEL)", sr: "Јефрем Сирин – NPNF II/13 (енглески, CCEL)" } },
  npnf214: { url: "https://www.ccel.org/ccel/schaff/npnf214.html", label: { de: "Die sieben Ökumenischen Konzilien – NPNF II/14 (englisch, CCEL)", sr: "Седам васељенских сабора – NPNF II/14 (енглески, CCEL)" } },
  chrysMt: { url: "https://www.ccel.org/ccel/schaff/npnf110.html", label: { de: "Chrysostomus, Homilien zu Matthäus – NPNF I/10 (englisch, CCEL)", sr: "Златоуст, беседе на Матеја – NPNF I/10 (енглески, CCEL)" } },
  chrysActs: { url: "https://www.ccel.org/ccel/schaff/npnf111.html", label: { de: "Chrysostomus, Homilien zur Apostelgeschichte und zum Römerbrief – NPNF I/11 (englisch, CCEL)", sr: "Златоуст, беседе на Дела апостолска и Посланицу Римљанима – NPNF I/11 (енглески, CCEL)" } },
  chrys1Cor: { url: "https://www.ccel.org/ccel/schaff/npnf112.html", label: { de: "Chrysostomus, Homilien zu den Korintherbriefen – NPNF I/12 (englisch, CCEL)", sr: "Златоуст, беседе на посланице Коринћанима – NPNF I/12 (енглески, CCEL)" } },
  chrysPaul: { url: "https://www.ccel.org/ccel/schaff/npnf113.html", label: { de: "Chrysostomus, Homilien zu Galater bis Philemon – NPNF I/13 (englisch, CCEL)", sr: "Златоуст, беседе на посланице од Галатима до Филимону – NPNF I/13 (енглески, CCEL)" } },
  chrysJn: { url: "https://www.ccel.org/ccel/schaff/npnf114.html", label: { de: "Chrysostomus, Homilien zu Johannes und Hebräer – NPNF I/14 (englisch, CCEL)", sr: "Златоуст, беседе на Јована и Јеврејима – NPNF I/14 (енглески, CCEL)" } },
  svNT: { url: "https://svetosavlje.org/novi-zavjet-gospoda-naseg-isusa-hrista/", label: { de: "Neues Testament, Übersetzung der Kommission des Hl. Synods der SPC – Svetosavlje (serbisch)", sr: "Нови Завет, превод Комисије Светог архијерејског синода СПЦ – Светосавље" } },
  svLib: { url: "https://svetosavlje.org/biblioteka-index/", label: { de: "Bibliothek Svetosavlje (serbisch, orthodox)", sr: "Библиотека Светосавље" } },
  svDobro: { url: "https://svetosavlje.org/biblioteka-index/#dobrotoljublje", label: { de: "Philokalie (Dobrotoljublje) – Svetosavlje (serbisch)", sr: "Добротољубље – Светосавље" } },
  svJustin: { url: "https://svetosavlje.org/biblioteka-index/#avajustin", label: { de: "Rubrik „Ava Justin“ in der Bibliothek Svetosavlje (serbisch; Inhalt nicht einzeln geprüft)", sr: "Рубрика „Аве Јустин“ у библиотеци Светосавље (садржај није појединачно проверен)" } },
  svNikolaj: { url: "https://svetosavlje.org/biblioteka-index/#vladikanikolaj", label: { de: "Werke des hl. Nikolaj Velimirović – Svetosavlje (serbisch)", sr: "Дела светог владике Николаја – Светосавље" } },
  svProlog: { url: "https://svetosavlje.org/biblioteka-index/#prolog", label: { de: "Prolog von Ohrid (Heiligenleben für jeden Tag) – Svetosavlje (serbisch)", sr: "Охридски пролог – Светосавље" } },
  svLavsaik: { url: "https://svetosavlje.org/lavsaik/", label: { de: "Lausiaca (Leben der Wüstenväter) – Svetosavlje (serbisch)", sr: "Лавсаик – Светосавље" } }
};

const FATHERS = [
  { id: "f-athanasius", name: { de: "Hl. Athanasius der Große", sr: "Свети Атанасије Велики" },
    lived: { de: "um 296–373", sr: "око 296–373" }, feast: { de: "18. Jan. (31. Jan.) und 2. Mai (15. Mai)", sr: "18/31. јануар и 2/15. мај" },
    who: { de: "Bischof von Alexandrien und unerschütterlicher Verteidiger des Glaubens von Nizäa.", sr: "Епископ александријски и непоколебљиви бранитељ никејске вере." },
    when: { de: "Als junger Diakon nahm er am Konzil von Nizäa 325 teil. Wegen seines Kampfes gegen den Arianismus wurde er mehrfach verbannt.", sr: "Као млади ђакон учествовао је на Никејском сабору 325. Због борбе против аријанства више пута је протеран." },
    taught: { de: "Der Sohn ist wahrer Gott, eines Wesens mit dem Vater. Gott wurde Mensch, um den Menschen vom Verderben zu befreien und zu erneuern.", sr: "Син је истинити Бог, једносуштан Оцу. Бог је постао човек да ослободи човека од пропадљивости и обнови га." },
    works: { de: "Gegen die Heiden; Über die Menschwerdung des Wortes; Reden gegen die Arianer; Leben des hl. Antonius; Brief an Marcellinus; Osterfestbriefe.", sr: "Против незнабожаца; О оваплоћењу Логоса; Беседе против аријанаца; Житије светог Антонија; Посланица Маркелину; Пасхалне посланице." },
    meaning: { de: "Er gilt als „Säule der Orthodoxie“. Seine Lebensbeschreibung des hl. Antonius prägte das Mönchtum in Ost und West.", sr: "Сматра се „стубом Православља“. Његово житије светог Антонија обликовало је монаштво." },
    bible: { de: "Joh 1,1–14; Phil 2,5–11; Kol 1,15–20", sr: "Јн 1,1–14; Флп 2,5–11; Кол 1,15–20" },
    read: ["athInc", "athMarc", "athAnt", "npnf204"] },
  { id: "f-basil", name: { de: "Hl. Basilius der Große", sr: "Свети Василије Велики" },
    lived: { de: "um 330–379", sr: "око 330–379" }, feast: { de: "1. Jan. (14. Jan.); Drei Hierarchen 30. Jan. (12. Feb.)", sr: "1/14. јануар; Три Јерарха 30. јануар/12. фебруар" },
    who: { de: "Erzbischof von Caesarea in Kappadokien, einer der drei Kappadokischen Väter.", sr: "Архиепископ кесаријски у Кападокији, један од тројице Кападокијских Отаца." },
    when: { de: "Er stammte aus einer heiligen Familie, studierte in Athen und lebte zunächst als Asket, bevor er Bischof wurde. Er gründete eine große Einrichtung für Arme und Kranke.", sr: "Потиче из свете породице, студирао је у Атини и најпре живео као подвижник, пре него што је постао епископ. Основао је велику установу за сиромашне и болесне." },
    taught: { de: "Die Gottheit des Heiligen Geistes; die Unterscheidung von einem Wesen und drei Personen; gemeinschaftliches Mönchsleben in Liebe und Gehorsam.", sr: "Божанство Духа Светога; разликовање једне суштине и три Лица; општежитељни монашки живот у љубави и послушању." },
    works: { de: "Über den Heiligen Geist; Homilien über das Sechstagewerk (Hexaemeron); Mönchsregeln; ihm zugeschrieben ist die Liturgie des hl. Basilius.", sr: "О Духу Светом; Беседе на Шестоднев; Монашка правила; њему се приписује Литургија светог Василија." },
    meaning: { de: "Seine Liturgie wird an bestimmten Tagen des Kirchenjahres gefeiert, z. B. in der Großen Fastenzeit. Seine Mönchsregeln prägen das orthodoxe Mönchtum bis heute.", sr: "Његова Литургија служи се у одређене дане црквене године, нпр. у Великом посту. Његова монашка правила обликују православно монаштво до данас." },
    bible: { de: "Gen 1; Joh 15,26; Apg 2,44–45", sr: "Пост 1; Јн 15,26; Дап 2,44–45" },
    read: ["npnf208", "bkv"] },
  { id: "f-gregnaz", name: { de: "Hl. Gregor von Nazianz, der Theologe", sr: "Свети Григорије Богослов" },
    lived: { de: "um 329–390", sr: "око 329–390" }, feast: { de: "25. Jan. (7. Feb.); Drei Hierarchen 30. Jan.", sr: "25. јануар/7. фебруар; Три Јерарха 30. јануар" },
    who: { de: "Kappadokischer Vater, kurzzeitig Erzbischof von Konstantinopel. Die Kirche nennt ihn „den Theologen“.", sr: "Кападокијски Отац, кратко архиепископ цариградски. Црква га назива Богословом." },
    when: { de: "Freund des hl. Basilius seit der Studienzeit in Athen. In Konstantinopel predigte er die Dreifaltigkeit, als die Arianer die Stadt beherrschten; er leitete zeitweise das Konzil von 381.", sr: "Пријатељ светог Василија још из студија у Атини. У Цариграду је проповедао Тројицу у време када су аријанци владали градом; неко време је председавао сабором 381." },
    taught: { de: "Die Lehre von der Dreifaltigkeit in klarer Sprache; die volle Menschheit Christi.", sr: "Учење о Тројици јасним језиком; пуно човештво Христово." },
    works: { de: "Fünf Theologische Reden (Reden 27–31); Festreden, z. B. auf Theophanie (Rede 39); Briefe an Kledonius; Gedichte.", sr: "Пет богословских беседа (беседе 27–31); празничне беседе, нпр. на Богојављење (беседа 39); посланице Кледонију; песме." },
    meaning: { de: "Zusammen mit Basilius und Chrysostomus gehört er zu den Drei Hierarchen, den großen ökumenischen Lehrern.", sr: "Заједно са Василијем и Златоустом спада у Три Јерарха, велике васељенске учитеље." },
    bible: { de: "Mt 3,13–17; Joh 1,1; Joh 10,30", sr: "Мт 3,13–17; Јн 1,1; Јн 10,30" },
    read: ["npnf207"] },
  { id: "f-gregnys", name: { de: "Hl. Gregor von Nyssa", sr: "Свети Григорије Ниски" },
    lived: { de: "um 335 – nach 394", sr: "око 335 – после 394" }, feast: { de: "10. Jan. (23. Jan.)", sr: "10/23. јануар" },
    who: { de: "Jüngerer Bruder des hl. Basilius, Bischof von Nyssa, Kappadokischer Vater.", sr: "Млађи брат светог Василија, епископ ниски, Кападокијски Отац." },
    when: { de: "Er war ein tiefer Denker und Mystiker. Am Konzil von 381 nahm er teil.", sr: "Био је дубок мислилац и мистик. Учествовао је на сабору 381." },
    taught: { de: "Das geistliche Leben als unendlicher Aufstieg zu Gott; die Würde des Menschen als Bild Gottes.", sr: "Духовни живот као бесконачно узрастање ка Богу; достојанство човека као лика Божијег." },
    works: { de: "Das Leben des Mose; Große Katechetische Rede; Über die Seligpreisungen; Über die Erschaffung des Menschen; Gegen Eunomius.", sr: "Живот Мојсијев; Велико катихетско слово; О блаженствима; О стварању човека; Против Евномија." },
    meaning: { de: "Er vertiefte die Theologie der Dreifaltigkeit und das Verständnis des geistlichen Weges.", sr: "Продубио је богословље Тројице и разумевање духовног пута." },
    bible: { de: "Ex 3; Ex 19–20; Mt 5,1–12; Phil 3,13", sr: "Изл 3; Изл 19–20; Мт 5,1–12; Флп 3,13" },
    read: ["npnf205"] },
  { id: "f-chrysostom", name: { de: "Hl. Johannes Chrysostomus", sr: "Свети Јован Златоуст" },
    lived: { de: "um 349–407", sr: "око 349–407" }, feast: { de: "13. Nov. (26. Nov.); 27. Jan.; 30. Jan.", sr: "13/26. новембар; 27. јануар; 30. јануар" },
    who: { de: "Priester in Antiochien, später Erzbischof von Konstantinopel. „Chrysostomus“ bedeutet „Goldmund“ – wegen seiner Predigtkunst.", sr: "Свештеник у Антиохији, касније архиепископ цариградски. „Златоуст“ – због дара проповеди." },
    when: { de: "Er kritisierte Luxus und Ungerechtigkeit am Kaiserhof und wurde deshalb verbannt. Er starb in der Verbannung.", sr: "Критиковао је раскош и неправду на царском двору и зато је протеран. Умро је у изгнанству." },
    taught: { de: "Auslegung der Heiligen Schrift für das tägliche Leben; Barmherzigkeit gegenüber den Armen; die Würde des Priestertums.", sr: "Тумачење Светог Писма за свакодневни живот; милосрђе према сиромашнима; достојанство свештенства." },
    works: { de: "Homilien zu Matthäus, Johannes, den Paulusbriefen u. a.; Über das Priestertum; ihm zugeschrieben: die Göttliche Liturgie und die Osterpredigt, die in der Osternacht gelesen wird.", sr: "Беседе на Матеја, Јована, Павлове посланице и др.; О свештенству; њему се приписују Света Литургија и Васкршња беседа која се чита у пасхалној ноћи." },
    meaning: { de: "Die Göttliche Liturgie des hl. Johannes Chrysostomus ist die am häufigsten gefeierte Liturgie der orthodoxen Kirche.", sr: "Литургија светог Јована Златоуста најчешће је служена Литургија у Православној Цркви." },
    bible: { de: "Mt 5–7; Mt 25,31–46; 1 Kor 13", sr: "Мт 5–7; Мт 25,31–46; 1 Кор 13" },
    read: ["chrysMt", "chrysJn", "bkv"] },
  { id: "f-cyril", name: { de: "Hl. Kyrill von Alexandrien", sr: "Свети Кирило Александријски" },
    lived: { de: "um 376–444", sr: "око 376–444" }, feast: { de: "18. Jan. (31. Jan.) und 9. Juni (22. Juni)", sr: "18/31. јануар и 9/22. јун" },
    who: { de: "Patriarch von Alexandrien, Hauptverteidiger des Glaubens auf dem Konzil von Ephesus 431.", sr: "Патријарх александријски, главни бранитељ вере на Ефеском сабору 431." },
    when: { de: "Er trat Nestorius entgegen, der die Einheit der Person Christi gefährdete und den Titel Gottesgebärerin ablehnte.", sr: "Супротставио се Несторију, који је угрожавао јединство Христове Личности и одбацивао назив Богородица." },
    taught: { de: "Christus ist eine einzige Person, der menschgewordene Logos. Darum ist Maria wahrhaft Gottesgebärerin.", sr: "Христос је једно Лице, оваплоћени Логос. Зато је Марија истински Богородица." },
    works: { de: "Briefe an Nestorius; Kommentar zum Johannesevangelium; Schriften über die Menschwerdung.", sr: "Посланице Несторију; Тумачење Јеванђеља по Јовану; списи о оваплоћењу." },
    meaning: { de: "Seine Theologie wurde auf den Konzilien von Ephesus und – vertieft – von Chalcedon und Konstantinopel 553 bestätigt.", sr: "Његово богословље потврђено је на Ефеском сабору, а продубљено на Халкидонском и Цариградском 553." },
    bible: { de: "Joh 1,14; Lk 1,35; Lk 1,43", sr: "Јн 1,14; Лк 1,35; Лк 1,43" },
    read: ["npnf214"] },
  { id: "f-maximus", name: { de: "Hl. Maximus der Bekenner", sr: "Свети Максим Исповедник" },
    lived: { de: "um 580–662", sr: "око 580–662" }, feast: { de: "21. Jan. (3. Feb.); 13. Aug.", sr: "21. јануар/3. фебруар; 13. август" },
    who: { de: "Mönch und Theologe aus Konstantinopel, Verteidiger der zwei Willen Christi.", sr: "Монах и богослов из Цариграда, бранитељ две воље Христове." },
    when: { de: "Er widersetzte sich der vom Kaiser geförderten Lehre von nur einem Willen in Christus (Monotheletismus). Man schnitt ihm Zunge und rechte Hand ab; er starb in der Verbannung. Seine Lehre siegte auf dem Sechsten Konzil 680/681.", sr: "Супротставио се учењу о само једној вољи у Христу (монотелитство), које је подржавао цар. Одсекли су му језик и десну руку; умро је у изгнанству. Његово учење победило је на Шестом сабору 680/681." },
    taught: { de: "Christus hat einen göttlichen und einen menschlichen Willen. Der ganze Kosmos ist auf die Vergöttlichung in Christus hin geschaffen. Liebe ist die Krone der Tugenden.", sr: "Христос има божанску и људску вољу. Цео космос створен је ради обожења у Христу. Љубав је круна врлина." },
    works: { de: "Kapitel über die Liebe (in der Philokalie); Mystagogie; Ambigua; Disput mit Pyrrhus.", sr: "Главе о љубави (у Добротољубљу); Мистагогија; Амбигве; Расправа са Пиром." },
    meaning: { de: "Er gilt als einer der größten Theologen der Kirche; seine Lehre verbindet Dogma und geistliches Leben.", sr: "Сматра се једним од највећих богослова Цркве; његово учење повезује догму и духовни живот." },
    bible: { de: "Mt 26,39; Eph 1,10; 1 Kor 13", sr: "Мт 26,39; Еф 1,10; 1 Кор 13" },
    read: ["svDobro"] },
  { id: "f-damascus", name: { de: "Hl. Johannes von Damaskus", sr: "Свети Јован Дамаскин" },
    lived: { de: "um 675–749", sr: "око 675–749" }, feast: { de: "4. Dez. (17. Dez.)", sr: "4/17. децембар" },
    who: { de: "Mönch im Kloster des hl. Sabbas bei Jerusalem, Theologe und Hymnendichter.", sr: "Монах у манастиру светог Саве Освећеног код Јерусалима, богослов и химнограф." },
    when: { de: "Er lebte unter arabischer Herrschaft und verteidigte von dort aus die Ikonen gegen die byzantinischen Bilderstürmer.", sr: "Живео је под арапском влашћу и одатле бранио иконе од византијских иконобораца." },
    taught: { de: "Weil Gott Mensch wurde, darf er dargestellt werden; Verehrung der Ikonen ist keine Anbetung. Er fasste die Lehre der Väter systematisch zusammen.", sr: "Пошто је Бог постао човек, сме се изображавати; поштовање икона није поклоњење. Систематски је сажео учење Отаца." },
    works: { de: "Genaue Darlegung des orthodoxen Glaubens; Drei Reden gegen die Bilderstürmer; Hymnen, darunter der Osterkanon (ihm zugeschrieben).", sr: "Тачно изложење православне вере; Три беседе против иконобораца; химне, међу њима Васкршњи канон (приписује му се)." },
    meaning: { de: "Seine „Genaue Darlegung“ ist bis heute ein Grundlagentext orthodoxer Dogmatik; seine Hymnen singt die Kirche jedes Jahr.", sr: "Његово „Тачно изложење“ и данас је темељни текст православне догматике; његове химне Црква пева сваке године." },
    bible: { de: "Joh 1,14; Kol 1,15; Ex 25,18–22", sr: "Јн 1,14; Кол 1,15; Изл 25,18–22" },
    read: ["npnf209"] },
  { id: "f-ephrem", name: { de: "Hl. Ephräm der Syrer", sr: "Свети Јефрем Сирин" },
    lived: { de: "um 306–373", sr: "око 306–373" }, feast: { de: "28. Jan. (10. Feb.)", sr: "28. јануар/10. фебруар" },
    who: { de: "Diakon in Nisibis und Edessa, großer Dichter der syrischen Kirche, „Harfe des Heiligen Geistes“ genannt.", sr: "Ђакон у Нисибису и Едеси, велики песник сиријске Цркве, назван „гусле Духа Светога“." },
    when: { de: "Er lebte an der Grenze zwischen Römischem und Persischem Reich und lehrte den Glauben in Hymnen, die gesungen wurden.", sr: "Живео је на граници Римског и Персијског царства и учио веру у химнама које су се певале." },
    taught: { de: "Glaube und Staunen vor dem Geheimnis Gottes; Umkehr und Tränen der Reue.", sr: "Вера и дивљење пред тајном Божијом; покајање и сузе." },
    works: { de: "Hymnen über die Geburt Christi, den Glauben und das Paradies. Ihm zugeschrieben ist das Bußgebet, das in der Großen Fastenzeit gebetet wird.", sr: "Химне о Рождеству Христовом, о вери и о рају. Њему се приписује покајна молитва која се моли у Великом посту." },
    meaning: { de: "Das ihm zugeschriebene Fastengebet ist fester Bestandteil der Gottesdienste der Großen Fastenzeit.", sr: "Великопосна молитва која му се приписује чврст је део богослужења Великог поста." },
    bible: { de: "Gen 2–3; Lk 2; Ps 50 (51)", sr: "Пост 2–3; Лк 2; Пс 50 (51)" },
    read: ["npnf213"] },
  { id: "f-isaac", name: { de: "Hl. Isaak der Syrer", sr: "Свети Исак Сирин" },
    lived: { de: "7. Jahrhundert", sr: "7. век" }, feast: { de: "28. Jan. (10. Feb.)", sr: "28. јануар/10. фебруар" },
    who: { de: "Kurzzeitig Bischof von Ninive, danach Einsiedler. Großer Lehrer des inneren Gebets.", sr: "Кратко епископ ниневијски, затим пустињак. Велики учитељ унутрашње молитве." },
    when: { de: "Er lebte im heutigen Irak. Seine Schriften wurden früh ins Griechische übersetzt und von Mönchen in der ganzen orthodoxen Welt gelesen.", sr: "Живео је на подручју данашњег Ирака. Његови списи рано су преведени на грчки и читали су их монаси у целом православном свету." },
    taught: { de: "Demut, Stille, Gebet, Tränen der Reue und die grenzenlose Barmherzigkeit Gottes; ein barmherziges Herz, das für die ganze Schöpfung brennt.", sr: "Смирење, тишина, молитва, сузе покајања и безгранична милост Божија; милостиво срце које гори за сву твар." },
    works: { de: "Asketische Reden (Homilien).", sr: "Подвижничке беседе (слова)." },
    meaning: { de: "Seine Reden gehören zu den meistgelesenen Büchern des orthodoxen Mönchtums; auch der hl. Paisios schätzte sie sehr.", sr: "Његове беседе спадају у најчитаније књиге православног монаштва; високо их је ценио и свети Пајсије." },
    bible: { de: "Lk 6,36; Mt 6,6; Ps 45 (46),11", sr: "Лк 6,36; Мт 6,6; Пс 45 (46),11" },
    read: [], readNote: { de: "Für diese Version wurde kein freier, rechtmäßiger Volltext geprüft. Moderne Übersetzungen sind im Buchhandel erhältlich.", sr: "За ово издање није проверен слободан, законито доступан цео текст. Савремени преводи могу се набавити у књижарама." } }
];

const SAINTS = [
  { id: "s-paisios", name: { de: "Hl. Paisios vom Berg Athos", sr: "Свети Пајсије Светогорац" },
    lived: { de: "1924–1994", sr: "1924–1994" }, feast: { de: "12. Juli (25. Juli)", sr: "12/25. јул" },
    life: { de: "Geboren in Kappadokien, aufgewachsen in Konitsa, Zimmermann und Soldat, dann Mönch auf dem Athos. Tausende suchten seinen Rat. Er starb im Kloster Souroti und wurde 2015 heiliggesprochen.", sr: "Рођен у Кападокији, одрастао у Коници, дрводеља и војник, затим монах на Светој Гори. Хиљаде људи су тражиле његов савет. Упокојио се у манастиру Суроти, а канонизован је 2015." },
    teaching: { de: "Gute Gedanken, Demut, Gebet aus Mitgefühl, Vertrauen auf Gott, geduldiges Tragen des Leids.", sr: "Добре помисли, смирење, молитва из саосећања, поверење у Бога, трпељиво ношење страдања." },
    course: "P", read: [] },
  { id: "s-porphyrios", name: { de: "Hl. Porphyrios von Kavsokalyvia", sr: "Свети Порфирије Кавсокаливит" },
    lived: { de: "1906–1991", sr: "1906–1991" }, feast: { de: "2. Dez. (15. Dez.)", sr: "2/15. децембар" },
    life: { de: "Schon als Junge ging er auf den Athos (Kavsokalyvia). Später diente er viele Jahre als Priester an einer Krankenhauskapelle in Athen. Heiliggesprochen 2013.", sr: "Још као дечак отишао је на Свету Гору (Кавсокаливија). Касније је много година служио као свештеник у болничкој цркви у Атини. Канонизован 2013." },
    teaching: { de: "Die Liebe zu Christus soll das Böse nicht durch Kampf gegen das Böse, sondern durch Hinwendung zu Christus verdrängen; Freude und Einfachheit.", sr: "Љубав према Христу треба да потисне зло не борбом против зла, него окретањем ка Христу; радост и једноставност." },
    read: [] },
  { id: "s-sophrony", name: { de: "Hl. Sophrony von Essex", sr: "Свети Софроније Есекшки" },
    lived: { de: "1896–1993", sr: "1896–1993" }, feast: { de: "11. Juli (24. Juli)", sr: "11/24. јул" },
    life: { de: "Geboren in Moskau, zunächst Maler in Paris, dann Mönch auf dem Athos und Schüler des hl. Siluan. Gründer des Klosters des hl. Johannes des Täufers in Essex (England). Heiliggesprochen 2019.", sr: "Рођен у Москви, најпре сликар у Паризу, затим монах на Светој Гори и ученик светог Силуана. Оснивач манастира Светог Јована Крститеља у Есексу (Енглеска). Канонизован 2019." },
    teaching: { de: "Der Mensch als Person nach dem Bild der Dreifaltigkeit; das Gebet für die ganze Menschheit; er gab die Schriften des hl. Siluan heraus.", sr: "Човек као личност по лику Тројице; молитва за цело човечанство; приредио је списе светог Силуана." },
    read: [] },
  { id: "s-silouan", name: { de: "Hl. Siluan vom Athos", sr: "Свети Силуан Атонски" },
    lived: { de: "1866–1938", sr: "1866–1938" }, feast: { de: "24. Sep. (7. Okt.)", sr: "24. септембар/7. октобар" },
    life: { de: "Ein russischer Bauer, der Mönch im Kloster des hl. Panteleimon auf dem Athos wurde. Er lebte äußerlich einfach. Heiliggesprochen 1987/1988.", sr: "Руски сељак који је постао монах у манастиру Светог Пантелејмона на Светој Гори. Живео је споља једноставно. Канонизован 1987/1988." },
    teaching: { de: "Die Liebe zu den Feinden als Kennzeichen wahren Christseins; Demut; Gebet für die ganze Welt.", sr: "Љубав према непријатељима као знак истинског хришћанства; смирење; молитва за цео свет." },
    read: [] },
  { id: "s-nektarios", name: { de: "Hl. Nektarios von Ägina", sr: "Свети Нектарије Егински" },
    lived: { de: "1846–1920", sr: "1846–1920" }, feast: { de: "9. Nov. (22. Nov.)", sr: "9/22. новембар" },
    life: { de: "Metropolit von Pentapolis in Ägypten, wurde verleumdet und abgesetzt. Er ertrug es demütig, wurde Leiter einer theologischen Schule in Athen und gründete ein Frauenkloster auf Ägina. Heiliggesprochen 1961.", sr: "Митрополит пентапољски у Египту, клеветан и смењен. Све је смирено поднео, постао управитељ богословске школе у Атини и основао женски манастир на Егини. Канонизован 1961." },
    teaching: { de: "Demut unter ungerechter Behandlung; Gebet; zahlreiche theologische Schriften. Viele Gläubige bitten ihn um Fürbitte bei Krankheit.", sr: "Смирење под неправдом; молитва; бројни богословски списи. Многи верници га моле за заступништво у болести." },
    read: [] },
  { id: "s-seraphim", name: { de: "Hl. Seraphim von Sarow", sr: "Свети Серафим Саровски" },
    lived: { de: "1754/1759–1833", sr: "1754/1759–1833" }, feast: { de: "2. Jan. (15. Jan.) und 19. Juli (1. Aug.)", sr: "2/15. јануар и 19. јул/1. август" },
    life: { de: "Russischer Mönch im Kloster Sarow, lebte lange als Einsiedler und begrüßte später die Besucher mit großer Freude. Heiliggesprochen 1903.", sr: "Руски монах у Саровском манастиру, дуго је живео као пустињак, а касније је посетиоце дочекивао са великом радошћу. Канонизован 1903." },
    teaching: { de: "Ziel des christlichen Lebens ist der Erwerb des Heiligen Geistes. (Diese Lehre ist in einem Gespräch mit Nikolai Motowilow überliefert.)", sr: "Циљ хришћанског живота је стицање Духа Светога. (Ово учење је предато у разговору са Николајем Мотовиловом.)" },
    read: [] },
  { id: "s-kronstadt", name: { de: "Hl. Johannes von Kronstadt", sr: "Свети Јован Кронштатски" },
    lived: { de: "1829–1908", sr: "1829–1908" }, feast: { de: "20. Dez. (2. Jan.)", sr: "20. децембар/2. јануар" },
    life: { de: "Gemeindepriester in Kronstadt bei Sankt Petersburg. Er feierte täglich die Liturgie, half Armen und gründete ein großes Haus der Arbeitshilfe.", sr: "Парохијски свештеник у Кронштату код Санкт Петербурга. Свакодневно је служио Литургију, помагао сиромашнима и основао велики Дом трудољубља." },
    teaching: { de: "Die Eucharistie als Mitte des Lebens; tätige Liebe; geistliches Tagebuch („Mein Leben in Christus“).", sr: "Евхаристија као средиште живота; делатна љубав; духовни дневник („Мој живот у Христу“)." },
    read: [] },
  { id: "s-nikolaj", name: { de: "Hl. Nikolaj Velimirović", sr: "Свети владика Николај Велимировић" },
    lived: { de: "1881–1956", sr: "1881–1956" }, feast: { de: "5. März (18. März); Übertragung der Reliquien 20. April (3. Mai)", sr: "5/18. март; пренос моштију 20. април/3. мај" },
    life: { de: "Bischof von Ohrid und Žiča, bedeutender serbischer Prediger und Schriftsteller. Im Zweiten Weltkrieg war er im Konzentrationslager Dachau inhaftiert. Er starb in den USA; 2003 von der Serbischen Orthodoxen Kirche heiliggesprochen.", sr: "Епископ охридски и жички, велики српски проповедник и писац. У Другом светском рату био је заточен у логору Дахау. Упокојио се у САД; Српска Православна Црква канонизовала га је 2003." },
    teaching: { de: "Gebete und Betrachtungen für jeden Tag; der „Prolog von Ohrid“ mit Heiligenleben für das ganze Jahr.", sr: "Молитве и размишљања за сваки дан; „Охридски пролог“ са житијима светих за целу годину." },
    read: ["svNikolaj", "svProlog"] },
  { id: "s-sava", name: { de: "Hl. Sava von Serbien", sr: "Свети Сава" },
    lived: { de: "um 1174/1175–1236", sr: "око 1174/1175–1236" }, feast: { de: "14. Jan. (27. Jan.)", sr: "14/27. јануар" },
    life: { de: "Als Prinz Rastko, Sohn des Großžupans Stefan Nemanja, ging er heimlich auf den Athos und wurde Mönch. Mit seinem Vater (dem hl. Simeon) erneuerte er das Kloster Hilandar. 1219 wurde er erster Erzbischof der selbstständigen (autokephalen) Serbischen Kirche.", sr: "Као кнежевић Растко, син великог жупана Стефана Немање, тајно је отишао на Свету Гору и замонашио се. Са оцем (светим Симеоном) обновио је манастир Хиландар. Године 1219. постао је први архиепископ самосталне (аутокефалне) Српске Цркве." },
    teaching: { de: "Er ordnete das kirchliche Leben Serbiens, gründete Klöster und Schulen und verfasste u. a. Klosterregeln (Typika) und das Gesetzbuch „Nomokanon“.", sr: "Уредио је црквени живот Србије, основао манастире и школе и написао, између осталог, манастирске типике и Законоправило (Номоканон)." },
    meaning: { de: "Er ist der geistliche Vater des serbischen Volkes; sein Fest ist in Serbien auch der Tag der Schulen.", sr: "Он је духовни отац српског народа; његов празник у Србији је и школска слава." },
    read: ["svLib"] },
  { id: "s-lazar", name: { de: "Hl. Fürst Lazar", sr: "Свети кнез Лазар" },
    lived: { de: "um 1329–1389", sr: "око 1329–1389" }, feast: { de: "15. Juni (28. Juni, Vidovdan)", sr: "15/28. јун (Видовдан)" },
    life: { de: "Serbischer Fürst, Stifter der Klöster Ravanica und Lazarica. Er fiel 1389 in der Schlacht auf dem Amselfeld (Kosovo) gegen das Osmanische Reich. Die Kirche verehrt ihn als Märtyrer.", sr: "Српски кнез, ктитор манастира Раванице и Лазарице. Погинуо је 1389. у Косовском боју против Османског царства. Црква га поштује као мученика." },
    teaching: { de: "In der kirchlichen Überlieferung steht er für die Wahl des himmlischen Reiches vor dem irdischen. Historisch gesicherte Tatsachen und spätere Volksüberlieferung (z. B. Epen) sind zu unterscheiden.", sr: "У црквеном предању он представља избор Царства Небеског пре земаљског. Треба разликовати историјски потврђене чињенице од каснијег народног предања (нпр. епских песама)." },
    tag: "uncertain", read: [] },
  { id: "s-maryegypt", name: { de: "Hl. Maria von Ägypten", sr: "Света Марија Египћанка" },
    lived: { de: "5./6. Jahrhundert (genaue Zeit unsicher)", sr: "5/6. век (тачно време несигурно)" }, feast: { de: "1. April (14. April) und 5. Sonntag der Großen Fastenzeit", sr: "1/14. април и пета недеља Великог поста" },
    life: { de: "Nach ihrer Lebensbeschreibung lebte Maria als junge Frau viele Jahre in Alexandria ein ausschweifendes Leben. Sie reiste nach Jerusalem zum Fest der Kreuzerhöhung, wurde aber von einer unsichtbaren Kraft am Betreten der Kirche gehindert. Vor einer Ikone der Gottesgebärerin kehrte sie um, verehrte das Kreuz und zog in die Wüste jenseits des Jordan. Dort lebte sie nach der Überlieferung 47 Jahre in Buße. Der Mönch Zosimas begegnete ihr, hörte ihre Geschichte und brachte ihr die heilige Kommunion; ein Jahr später fand er sie tot und begrub sie.", sr: "Према њеном житију, Марија је као млада жена много година у Александрији живела развратним животом. Отпутовала је у Јерусалим на празник Воздвижења Крста, али ју је невидљива сила спречила да уђе у храм. Пред иконом Богородице се покајала, поклонила се Крсту и отишла у пустињу с оне стране Јордана. Тамо је, према предању, 47 година живела у покајању. Монах Зосима ју је срео, чуо њену повест и донео јој свето причешће; годину дана касније нашао ју је упокојену и сахранио." },
    teaching: { de: "Sie ist das große Vorbild der Umkehr: Kein Mensch ist zu tief gefallen, um durch Reue und Gottes Gnade geheilt zu werden. Darum stellt die Kirche sie am Ende der Großen Fastenzeit allen vor Augen.", sr: "Она је велики узор покајања: ниједан човек није пао тако дубоко да не би могао бити исцељен покајањем и Божијом благодаћу. Зато је Црква на крају Великог поста ставља свима пред очи." },
    meaning: { de: "Ihre Lebensbeschreibung wird nach der Überlieferung dem hl. Sophronius, Patriarch von Jerusalem (7. Jh.), zugeschrieben; manche Forscher bezweifeln diese Zuschreibung. Sie wird in der fünften Woche der Großen Fastenzeit zusammen mit dem Großen Bußkanon des hl. Andreas von Kreta gelesen.", sr: "Њено житије се према предању приписује светом Софронију, патријарху јерусалимском (7. век); неки истраживачи сумњају у то. Чита се у петој седмици Великог поста заједно са Великим покајним каноном светог Андреја Критског." },
    tag: "uncertain", read: ["svProlog"] },
  { id: "s-luke", name: { de: "Hl. Lukas von Simferopol (der heilige Chirurg)", sr: "Свети Лука Кримски (свети хирург)" },
    lived: { de: "1877–1961", sr: "1877–1961" }, feast: { de: "29. Mai (11. Juni)", sr: "29. мај/11. јун" },
    life: { de: "Valentin Woino-Jasenezki wurde 1877 in Kertsch auf der Krim geboren. Er wurde ein bedeutender Chirurg und Professor und schrieb grundlegende medizinische Werke, unter anderem über die Behandlung eitriger Infektionen. In der Sowjetzeit wurde er Priester und Bischof mit dem Namen Lukas. Er wurde mehrfach verhaftet und verbrachte insgesamt etwa elf Jahre in der Verbannung, operierte aber weiter. Von 1946 bis 1961 war er Erzbischof von Simferopol und der Krim. Er starb am 11. Juni 1961; seine Reliquien ruhen in der Dreifaltigkeitskathedrale in Simferopol.", sr: "Валентин Војно-Јасењецки рођен је 1877. у Керчу на Криму. Постао је значајан хирург и професор и написао темељна медицинска дела, између осталог о лечењу гнојних инфекција. У совјетско време постао је свештеник и епископ са именом Лука. Више пута је хапшен и провео је укупно око једанаест година у изгнанству, али је наставио да оперише. Од 1946. до 1961. био је архиепископ симферопољски и кримски. Упокојио се 11. јуна 1961; његове мошти почивају у Саборном храму Свете Тројице у Симферопољу." },
    teaching: { de: "Er verband Glauben und Wissenschaft und sah im Dienst am kranken Menschen einen Dienst an Christus. In seinem Buch „Geist, Seele und Leib“ schrieb er über den Menschen als Einheit. Viele Gläubige bitten ihn um Fürsprache bei Krankheit und vor Operationen.", sr: "Повезивао је веру и науку и у служењу болесном човеку видео служење Христу. У књизи „Дух, душа и тело“ писао је о човеку као целини. Многи верници га моле за заступништво у болести и пред операције." },
    meaning: { de: "Die Ukrainische Orthodoxe Kirche verehrte ihn ab 1995 als Heiligen; die Russische Orthodoxe Kirche nahm ihn im Jahr 2000 in die Schar der Neumärtyrer und Bekenner auf.", sr: "Украјинска Православна Црква поштује га као светитеља од 1995; Руска Православна Црква уврстила га је 2000. године у сабор новомученика и исповедника." },
    read: [] },
  { id: "s-simeon", name: { de: "Hl. Simeon der Myrrhestrahlende (Stefan Nemanja)", sr: "Свети Симеон Мироточиви (Стефан Немања)" },
    lived: { de: "um 1113–1199", sr: "око 1113–1199" }, feast: { de: "13. Feb. (26. Feb.)", sr: "13/26. фебруар" },
    life: { de: "Stefan Nemanja wurde um 1113 in Ribnica (Zeta, nahe dem heutigen Podgorica) geboren und war von 1166 bis 1196 Großžupan von Serbien. Er einte die serbischen Gebiete und stiftete Klöster, darunter Studenica. 1196 dankte er zugunsten seines Sohnes Stefan ab, wurde Mönch und ging zu seinem Sohn Sava auf den Athos. Gemeinsam erneuerten sie 1198/99 das Kloster Hilandar. Er starb am 13. Februar 1199 in Hilandar.", sr: "Стефан Немања рођен је око 1113. у Рибници (Зета, код данашње Подгорице) и био је велики жупан Србије од 1166. до 1196. Уједињавао је српске земље и подизао манастире, међу њима Студеницу. Године 1196. одрекао се престола у корист сина Стефана, постао монах и отишао сину Сави на Свету Гору. Заједно су 1198/99. обновили манастир Хиландар. Упокојио се 13. фебруара 1199. у Хиландару." },
    teaching: { de: "In der kirchlichen Überlieferung gilt er als Vorbild eines Herrschers, der freiwillig auf die Macht verzichtet, um Gott zu dienen. Nach der Überlieferung floss aus seinen Reliquien duftendes Myron; darum heißt er der Myrrhestrahlende.", sr: "У црквеном предању он је узор владара који се добровољно одриче власти да би служио Богу. Према предању, из његових моштију текло је миомирисно миро; зато се назива Мироточиви." },
    meaning: { de: "Er ist der Vater des hl. Sava und der Stammvater der Dynastie Nemanjić. Hilandar blieb für Jahrhunderte das geistliche Zentrum der Serben auf dem Athos.", sr: "Он је отац светог Саве и родоначелник династије Немањића. Хиландар је вековима остао духовни центар Срба на Светој Гори." },
    read: [], readNote: { de: "Für diese Version wurde keine einzelne freie, rechtmäßige Quelle geprüft. Auskunft gibt dein Priester oder das Kloster Hilandar.", sr: "За ово издање није проверен ниједан појединачан слободан, законито доступан извор. Обавештења даје ваш свештеник или манастир Хиландар." } },
  { id: "s-vasilije", name: { de: "Hl. Vasilije von Ostrog", sr: "Свети Василије Острошки" },
    lived: { de: "1610–1671", sr: "1610–1671" }, feast: { de: "29. April (12. Mai)", sr: "29. април/12. мај" },
    life: { de: "Stojan Jovanović wurde am 28. Dezember 1610 in Mrkonjići im Popovo Polje (Herzegowina) geboren. Er wurde Mönch, nahm den Namen Vasilije an und war ab 1639 Bischof von Zahumlje; später leitete er die Eparchie von Ostherzegowina. Er lebte zuletzt im Kloster Ostrog in Montenegro und starb dort am 29. April 1671. Seine Reliquien in Ostrog gelten als unverwest.", sr: "Стојан Јовановић рођен је 28. децембра 1610. у Мркоњићима у Поповом пољу (Херцеговина). Постао је монах, добио име Василије и од 1639. био епископ захумски; касније је управљао источном Херцеговином. Последње године живео је у манастиру Острогу у Црној Гори и тамо се упокојио 29. априла 1671. Његове мошти у Острогу сматрају се нетрулежним." },
    teaching: { de: "Er wird als Wundertäter und Helfer in Not verehrt. Zu seinem Grab kommen Gläubige verschiedener Religionen und bitten um Fürsprache bei Krankheit und Sorgen. Diese Verehrung lebt vor allem aus der Erfahrung der Pilger.", sr: "Поштује се као чудотворац и помоћник у невољи. На његов гроб долазе верници различитих вера и моле за заступништво у болести и бризи. Ово поштовање живи пре свега из искуства ходочасника." },
    read: [], readNote: { de: "Für diese Version wurde keine einzelne freie, rechtmäßige Quelle geprüft. Auskunft gibt dein Priester oder das Kloster Ostrog.", sr: "За ово издање није проверен ниједан појединачан слободан, законито доступан извор. Обавештења даје ваш свештеник или манастир Острог." } },
  { id: "s-justin", name: { de: "Hl. Justin von Ćelije (Justin Popović)", sr: "Свети Јустин Ћелијски (Јустин Поповић)" },
    lived: { de: "1894–1979", sr: "1894–1979" }, feast: { de: "1. Juni (14. Juni)", sr: "1/14. јун" },
    life: { de: "Blagoje Popović wurde 1894 am Fest der Verkündigung (25. März julianisch) in Vranje als Sohn einer Priesterfamilie geboren; das bürgerliche Datum wird in Quellen unterschiedlich angegeben. Am 1. Januar 1916 wurde er in Shkodër Mönch und erhielt den Namen Justin. Er studierte unter anderem in Oxford (Arbeit über Dostojewski) und Athen und wurde vom hl. Nikolaj Velimirović stark geprägt. Später war er Archimandrit des Klosters Ćelije bei Valjevo, wo er 1979 starb. Die Serbische Kirche sprach ihn am 2. Mai 2010 heilig.", sr: "Благоје Поповић рођен је 1894. на празник Благовести (25. март по јулијанском) у Врању у свештеничкој породици; грађански датум у изворима се наводи различито. Монашио се 1. јануара 1916. у Скадру и добио име Јустин. Студирао је, између осталог, у Оксфорду (рад о Достојевском) и Атини и био је снажно обликован светим Николајем Велимировићем. Касније је био архимандрит манастира Ћелије код Ваљева, где се упокојио 1979. Српска Црква га је канонизовала 2. маја 2010." },
    teaching: { de: "Sein Hauptwerk ist die „Dogmatik der Orthodoxen Kirche“, in der er Glaubenslehre eng mit dem geistlichen Leben verbindet. Er schrieb außerdem über Heilige und die Philosophie des Glaubens.", sr: "Његово главно дело је „Догматика Православне Цркве“, у којој веру тесно повезује са духовним животом. Писао је и о светитељима и философији вере." },
    meaning: { de: "Er gilt als einer der wichtigsten serbischen Theologen des 20. Jahrhunderts.", sr: "Сматра се једним од најзначајнијих српских богослова 20. века." },
    read: ["svJustin"] },
  { id: "s-nicholas", name: { de: "Hl. Nikolaus von Myra", sr: "Свети Николај Мирликијски" },
    lived: { de: "3./4. Jahrhundert (genaue Daten unsicher)", sr: "3/4. век (тачни датуми несигурни)" }, feast: { de: "6. Dez. (19. Dez.); Übertragung der Reliquien 9. Mai (22. Mai)", sr: "6/19. децембар; пренос моштију 9/22. мај" },
    life: { de: "Nikolaus war Bischof von Myra in Lykien (im Süden der heutigen Türkei). Sichere historische Einzelheiten sind wenige; seine Lebensbeschreibungen entstanden erst Jahrhunderte später. Nach der Überlieferung half er im Verborgenen Armen – bekannt ist die Erzählung von drei Mädchen, denen er heimlich die Mitgift schenkte – und nahm 325 am Konzil von Nizäa teil. 1087 brachten Seeleute seine Reliquien nach Bari in Italien; daran erinnert das Fest am 9. Mai.", sr: "Николај је био епископ града Мира у Ликији (на југу данашње Турске). Сигурних историјских појединости има мало; његова житија настала су тек вековима касније. Према предању, тајно је помагао сиромашнима – позната је прича о три девојке којима је потајно дао мираз – и учествовао је 325. на Никејском сабору. Године 1087. морепловци су пренели његове мошти у Бари у Италији; на то подсећа празник 9. маја." },
    teaching: { de: "Die Kirche besingt ihn als „Richtschnur des Glaubens und Bild der Sanftmut“. Er gilt als Vorbild barmherziger, verborgener Hilfe und als Helfer der Reisenden, Seeleute und Bedrängten. Viele Wunderberichte gehören zur frommen Überlieferung.", sr: "Црква га опева као „правило вере и образ кротости“. Сматра се узором милосрдне, скривене помоћи и помоћником путника, морнара и невољних. Многа казивања о чудима припадају благочестивом предању." },
    meaning: { de: "Der Nikolaustag (Nikoljdan) ist eine der häufigsten Slavas in Serbien. Er ist einer der am meisten verehrten Heiligen der ganzen Orthodoxie; jeden Donnerstag gedenkt die Kirche der Apostel und des hl. Nikolaus.", sr: "Никољдан је једна од најчешћих слава у Србији. Он је један од најпоштованијих светитеља у целом Православљу; сваког четвртка Црква спомиње апостоле и светог Николаја." },
    tag: "uncertain", read: ["svProlog"] },
  { id: "s-george", name: { de: "Hl. Großmärtyrer Georg", sr: "Свети великомученик Георгије" },
    lived: { de: "† um 303 (nach der Überlieferung)", sr: "† око 303. (према предању)" }, feast: { de: "23. April (6. Mai); Weihe seiner Kirche in Lydda 3. Nov. (16. Nov.)", sr: "23. април/6. мај (Ђурђевдан); освећење његовог храма у Лиди 3/16. новембар (Ђурђиц)" },
    life: { de: "Nach der Überlieferung war Georg ein christlicher Offizier im römischen Heer, stammte aus Kappadokien und erlitt unter Kaiser Diokletian um 303 in Nikomedien schwere Folter und den Tod, weil er Christus nicht verleugnete. Begraben wurde er nach der Überlieferung in Lydda (heute Lod). Seine Verehrung ist sehr alt und weit verbreitet; die einzelnen Angaben seiner Lebensbeschreibung lassen sich historisch kaum prüfen.", sr: "Према предању, Георгије је био хришћански официр у римској војсци, пореклом из Кападокије, и под царем Диоклецијаном око 303. у Никомидији претрпео тешка мучења и смрт, јер се није одрекао Христа. Сахрањен је, према предању, у Лиди (данас Лод). Његово поштовање је веома старо и широко раширено; поједини подаци његовог житија тешко се могу историјски проверити." },
    teaching: { de: "Er ist ein Vorbild des mutigen Bekenntnisses. Die Ikone mit dem Drachen ist ein Bild: Sie zeigt den Sieg des Glaubens über das Böse. Die Erzählung vom Drachen ist eine spätere Legende und nicht Teil der ältesten Märtyrerberichte.", sr: "Он је узор храброг исповедања. Икона са аждајом је слика: показује победу вере над злом. Прича о аждаји је каснија легенда и није део најстаријих казивања о његовом мучеништву." },
    meaning: { de: "Đurđevdan ist in Serbien eine sehr verbreitete Slava und ein großes Volksfest im Frühling. Fällt der 23. April vor Ostern, wird das Gedenken nach dem Typikon liturgisch meist auf den Ostermontag verlegt; die Praxis kann sich unterscheiden.", sr: "Ђурђевдан је у Србији веома раширена слава и велики пролећни народни празник. Ако 23. април падне пре Васкрса, спомен се по Типику богослужбено обично премешта на Васкрсни понедељак; пракса може да се разликује." },
    tag: "uncertain", read: ["svProlog"] },
  { id: "s-demetrios", name: { de: "Hl. Großmärtyrer Demetrios von Thessaloniki", sr: "Свети великомученик Димитрије Солунски" },
    lived: { de: "† um 306", sr: "† око 306." }, feast: { de: "26. Okt. (8. Nov.)", sr: "26. октобар/8. новембар (Митровдан)" },
    life: { de: "Nach der Überlieferung stammte Demetrios aus einer vornehmen Familie in Thessaloniki und hatte ein hohes Amt inne. Statt die Christen zu verfolgen, bekannte er selbst Christus. Unter Kaiser Maximian wurde er eingekerkert und um 306 im Gefängnis mit Lanzen durchbohrt. Über seinem Grab entstand eine Kirche; die heutige große Demetrios-Basilika in Thessaloniki gehört zum UNESCO-Welterbe.", sr: "Према предању, Димитрије је потицао из угледне породице у Солуну и имао је високу службу. Уместо да гони хришћане, сам је исповедао Христа. Под царем Максимијаном бачен је у тамницу и око 306. у тамници прободен копљима. Над његовим гробом подигнута је црква; данашња велика базилика Светог Димитрија у Солуну налази се на Унесковој листи светске баштине." },
    teaching: { de: "Er heißt „der Myrrhestrahlende“, weil nach der Überlieferung von seinen Reliquien duftendes Myron ausging. Mit ihm wird der junge Märtyrer Nestor verbunden, den er nach der Überlieferung im Glauben stärkte.", sr: "Назива се „Мироточиви“, јер је, према предању, из његових моштију текло миомирисно миро. Са њим се повезује млади мученик Нестор, кога је, према предању, утврдио у вери." },
    meaning: { de: "Er ist Schutzpatron von Thessaloniki und wird bei den Serben besonders verehrt: Mitrovdan ist eine häufige Slava. Im serbischen Volksbrauch teilt Mitrovdan das Jahr mit Đurđevdan in eine Sommer- und eine Winterhälfte.", sr: "Он је заштитник Солуна и код Срба се посебно поштује: Митровдан је честа слава. У српском народном обичају Митровдан и Ђурђевдан деле годину на летњу и зимску половину." },
    tag: "uncertain", read: ["svProlog"] },
  { id: "s-petka", name: { de: "Hl. Paraskeva (Petka)", sr: "Света Петка (Параскева)" },
    lived: { de: "11. Jahrhundert", sr: "11. век" }, feast: { de: "14. Okt. (27. Okt.)", sr: "14/27. октобар (Петковдан)" },
    life: { de: "Paraskeva wurde im 11. Jahrhundert in Epivat zwischen Selymbria und Konstantinopel in einer frommen, wohlhabenden Familie geboren; ihr Bruder Euthymios wurde Bischof von Madytos. Der hl. Nikolaj Velimirović schreibt im Prolog von Ohrid, sie sei serbischer Herkunft gewesen. Sie lebte zunächst in Konstantinopel, dann lange als Asketin in der Wüste am Jordan. Später kehrte sie nach Epivat zurück und starb dort; über ihr Alter berichten die Quellen unterschiedlich. Ihre Reliquien wanderten über Tarnovo, Belgrad und Konstantinopel und ruhen seit 1641 in Iași (Rumänien).", sr: "Параскева је рођена у 11. веку у Епивату, између Силимврије и Цариграда, у побожној и имућној породици; њен брат Јевтимије постао је епископ мадитски. Свети Николај Велимировић пише у Охридском прологу да је била српског порекла. Најпре је живела у Цариграду, а затим дуго као подвижница у пустињи код Јордана. Касније се вратила у Епиват и тамо се упокојила; о њеним годинама извори говоре различито. Њене мошти пренете су преко Трнова, Београда и Цариграда и од 1641. почивају у Јашију (Румунија)." },
    teaching: { de: "Ihr Name kommt vom griechischen Wort für „Freitag“ (paraskevi); daher heißt sie auf Serbisch Petka. Sie ist ein Vorbild des Verzichts aus Liebe zu Christus. Nach der Überlieferung begann ihr asketischer Weg mit dem Wort des Herrn: Wer mir nachfolgen will, der verleugne sich selbst (Mt 16,24).", sr: "Њено име долази од грчке речи за „петак“ (параскеви); зато се на српском зове Петка. Она је узор одрицања из љубави према Христу. Према предању, њен подвижнички пут започео је речју Господњом: Ко хоће за мном да иде, нека се одрекне себе (Мт 16,24)." },
    meaning: { de: "Petkovdan ist eine häufige Slava. In Belgrad besuchen viele Gläubige die Kapelle der hl. Petka mit ihrer Quelle an der Festung Kalemegdan und bitten um Fürsprache bei Krankheit.", sr: "Петковдан је честа слава. У Београду многи верници посећују капелу Свете Петке са извором на Калемегдану и моле за заступништво у болести." },
    read: ["svProlog"] },
  { id: "s-stefan", name: { de: "Hl. König Stefan Dečanski", sr: "Свети краљ Стефан Дечански" },
    lived: { de: "um 1276/1285–1331", sr: "око 1276/1285–1331" }, feast: { de: "11. Nov. (24. Nov.)", sr: "11/24. новембар (Мратиндан)" },
    life: { de: "Stefan Uroš III. war der Sohn von König Milutin und der Vater von Zar Dušan. Als junger Mann war er Geisel bei den Tataren. Nach einem Aufstand gegen seinen Vater wurde er auf dessen Befehl geblendet und lebte einige Jahre im Exil in Konstantinopel. Nach der Überlieferung erschien ihm der hl. Nikolaus und gab ihm später das Augenlicht zurück. Ab 1321/1322 war er König von Serbien und besiegte 1330 bei Velbužd die Bulgaren. Er stiftete das Kloster Visoki Dečani im Kosovo. 1331 wurde er von seinem Sohn Dušan gestürzt und starb in der Festung Zvečan; seine Reliquien ruhen in Dečani.", sr: "Стефан Урош III био је син краља Милутина и отац цара Душана. Као млад био је талац код Татара. После побуне против оца ослепљен је по његовом наређењу и неколико година живео у изгнанству у Цариграду. Према предању, јавио му се свети Николај и касније му вратио вид. Од 1321/1322. био је краљ Србије и 1330. победио Бугаре код Велбужда. Подигао је манастир Високи Дечани на Косову. Године 1331. збацио га је син Душан и упокојио се у тврђави Звечан; његове мошти почивају у Дечанима." },
    teaching: { de: "Er gilt als Vorbild der Geduld und Sanftmut im Leiden, auch gegenüber der eigenen Familie. Gläubige bitten ihn besonders um Fürsprache bei Augenleiden. Die Umstände seines Todes werden in den Quellen unterschiedlich beschrieben.", sr: "Сматра се узором трпљења и кроткости у страдању, и према сопственој породици. Верници му се посебно моле за заступништво код болести очију. Околности његове смрти извори описују различито." },
    meaning: { de: "Die Klosterkirche von Visoki Dečani ist eines der größten mittelalterlichen Bauwerke Serbiens mit reichen Fresken und gehört zum UNESCO-Welterbe. Sein Gedenktag heißt im Volk Mratindan.", sr: "Манастирска црква Високих Дечана једна је од највећих средњовековних грађевина Србије, са богатим фрескама, и налази се на Унесковој листи светске баштине. Његов спомен народ назива Мратиндан." },
    tag: "uncertain", read: [], readNote: { de: "Für diese Version wurde keine einzelne freie, rechtmäßige Quelle geprüft. Auskunft gibt dein Priester oder das Kloster Visoki Dečani.", sr: "За ово издање није проверен ниједан појединачан слободан, законито доступан извор. Обавештења даје ваш свештеник или манастир Високи Дечани." } },
  { id: "s-andrew", name: { de: "Hl. Apostel Andreas der Erstberufene", sr: "Свети апостол Андреј Првозвани" },
    lived: { de: "1. Jahrhundert", sr: "1. век" }, feast: { de: "30. Nov. (13. Dez.)", sr: "30. новембар/13. децембар" },
    life: { de: "Andreas war Fischer aus Betsaida und Bruder des Apostels Petrus. Zuerst war er Jünger Johannes des Täufers; dann folgte er als einer der ersten Jesus nach und führte seinen Bruder zu ihm (Joh 1,35–42). Darum heißt er „der Erstberufene“. Nach der Überlieferung verkündete er das Evangelium in Kleinasien, am Schwarzen Meer und in Griechenland und starb in Patras am Kreuz. Die Form des Kreuzes als „X“ ist eine spätere Überlieferung.", sr: "Андреј је био рибар из Витсаиде и брат апостола Петра. Најпре је био ученик Јована Крститеља; затим је међу првима пошао за Исусом и довео му свог брата (Јн 1,35–42). Зато се назива „Првозвани“. Према предању, проповедао је јеванђеље у Малој Азији, око Црног мора и у Грчкој и пострадао у Патри на крсту. Облик крста у виду слова „X“ је касније предање." },
    teaching: { de: "Er ist ein Vorbild dafür, andere zu Christus zu führen: Er erzählte seinem Bruder „Wir haben den Messias gefunden“ (Joh 1,41). Auch bei der Speisung der Fünftausend brachte er den Knaben mit den Broten zu Jesus (Joh 6,8–9).", sr: "Он је узор како да друге доведемо Христу: рекао је брату „Нашли смо Месију“ (Јн 1,41). И при умножењу хлебова довео је Исусу дечака са хлебовима (Јн 6,8–9)." },
    meaning: { de: "Das Patriarchat von Konstantinopel verehrt ihn als seinen Gründer und Schutzpatron.", sr: "Цариградска патријаршија поштује га као свог оснивача и заштитника." },
    tag: "uncertain", read: ["svNT"] },
  { id: "s-spyridon", name: { de: "Hl. Spyridon von Trimythous", sr: "Свети Спиридон Тримитунтски" },
    lived: { de: "4. Jahrhundert", sr: "4. век" }, feast: { de: "12. Dez. (25. Dez.)", sr: "12/25. децембар" },
    life: { de: "Spyridon lebte auf Zypern, war nach der Überlieferung Hirte, verheiratet und Vater einer Tochter. Wegen seiner Frömmigkeit wurde er Bischof von Trimythous. Nach der Überlieferung nahm er am Konzil von Nizäa 325 teil. Seine Reliquien kamen über Konstantinopel im 15. Jahrhundert nach Korfu, wo sie bis heute verehrt werden.", sr: "Спиридон је живео на Кипру и био је, према предању, пастир, ожењен и отац једне кћери. Због своје побожности постао је епископ тримитунтски. Према предању, учествовао је на Никејском сабору 325. Његове мошти пренете су преко Цариграда у 15. веку на Крф, где се и данас поштују." },
    teaching: { de: "Er gilt als Vorbild eines einfachen, demütigen Bischofs, der ein Hirte blieb – für Tiere wie für Menschen. Viele Wunderberichte gehören zur Überlieferung; die Kirche ehrt ihn als Wundertäter.", sr: "Сматра се узором једноставног, смиреног епископа који је остао пастир – и стоке и људи. Многа казивања о чудима припадају предању; Црква га поштује као чудотворца." },
    meaning: { de: "Er ist der Schutzpatron von Korfu. Bei den Serben ist er bekannt, weil serbische Soldaten im Ersten Weltkrieg auf Korfu Zuflucht fanden.", sr: "Он је заштитник Крфа. Код Срба је познат и зато што су српски војници у Првом светском рату нашли уточиште на Крфу." },
    tag: "uncertain", read: ["svProlog"] },
  { id: "s-catherine", name: { de: "Hl. Großmärtyrerin Katharina von Alexandrien", sr: "Света великомученица Екатерина" },
    lived: { de: "† um 305 (nach der Überlieferung)", sr: "† око 305. (према предању)" }, feast: { de: "24. Nov. (7. Dez.)", sr: "24. новембар/7. децембар" },
    life: { de: "Nach der Überlieferung war Katharina eine junge, sehr gebildete Frau aus vornehmer Familie in Alexandrien. Sie bekannte Christus vor dem Kaiser (meist wird Maximinus genannt), widerlegte in einem Streitgespräch heidnische Philosophen und starb um 305 als Märtyrerin. Ihre Lebensbeschreibung ist erst Jahrhunderte später schriftlich bezeugt; historische Einzelheiten sind unsicher. Nach der Überlieferung wurden ihre Reliquien auf den Sinai gebracht; das Kloster am Fuß des Berges trägt heute ihren Namen.", sr: "Према предању, Екатерина је била млада, веома образована девојка из угледне породице у Александрији. Исповедила је Христа пред царем (обично се наводи Максимин), у расправи оборила незнабожачке философе и око 305. пострадала као мученица. Њено житије писмено је посведочено тек вековима касније; историјске појединости су несигурне. Према предању, њене мошти пренете су на Синај; манастир у подножју горе данас носи њено име." },
    teaching: { de: "Sie ist ein Vorbild dafür, dass Glaube und Bildung zusammengehören: Wissen soll in den Dienst der Wahrheit Christi gestellt werden. Sie wird von Schülern und Studierenden um Fürsprache gebeten.", sr: "Она је узор тога да вера и образовање иду заједно: знање треба ставити у службу Христове истине. Ђаци и студенти моле је за заступништво." },
    meaning: { de: "Das Katharinenkloster auf dem Sinai ist eines der ältesten ununterbrochen bewohnten Klöster der Welt und gehört zum UNESCO-Welterbe.", sr: "Манастир Свете Екатерине на Синају један је од најстаријих непрекидно насељених манастира на свету и налази се на Унесковој листи светске баштине." },
    tag: "uncertain", read: ["svProlog"] },
  { id: "s-prokopije", name: { de: "Hl. Großmärtyrer Prokopios", sr: "Свети великомученик Прокопије" },
    lived: { de: "† 303", sr: "† 303." }, feast: { de: "8. Juli (21. Juli)", sr: "8/21. јул (Прокопијевдан)" },
    life: { de: "Der Kirchenhistoriker Eusebius von Caesarea berichtet, dass Prokopios aus Skythopolis stammte, in der Kirche als Lektor diente und ein sehr asketisches Leben führte. Im Jahr 303 wurde er in Caesarea in Palästina als erster Märtyrer der diokletianischen Verfolgung in dieser Gegend enthauptet, weil er sich weigerte, den Göttern und dem Kaiser zu opfern. Spätere Lebensbeschreibungen machen ihn zu einem Heerführer; diese Erweiterungen sind historisch nicht gesichert.", sr: "Црквени историчар Јевсевије Кесаријски пише да је Прокопије био из Скитопоља, да је у Цркви служио као чтец и водио веома подвижнички живот. Године 303. посечен је у Кесарији Палестинској као први мученик Диоклецијановог гоњења у тој области, јер је одбио да принесе жртву боговима и цару. Каснија житија праве од њега војсковођу; та проширења историјски нису потврђена." },
    teaching: { de: "Er zeigt, dass auch ein einfacher Dienst in der Kirche – Lesen der Schrift – zu großer Treue führen kann. Er bekannte, es gebe nur einen Gott.", sr: "Он показује да и једноставна служба у Цркви – читање Писма – може водити ка великој верности. Исповедао је да постоји само један Бог." },
    meaning: { de: "Die serbische Stadt Prokuplje trägt seinen Namen; nach der Überlieferung wurden Reliquien von ihm dorthin gebracht. Prokopijevdan ist in einigen serbischen Familien Slava.", sr: "Српски град Прокупље носи његово име; према предању, тамо су донете његове мошти. Прокопијевдан је у неким српским породицама слава." },
    tag: "uncertain", read: ["svProlog"] },
  { id: "s-antony", name: { de: "Hl. Antonius der Große", sr: "Свети Антоније Велики" },
    lived: { de: "um 251–356", sr: "око 251–356" }, feast: { de: "17. Jan. (30. Jan.)", sr: "17/30. јануар" },
    life: { de: "Antonius stammte aus einer christlichen Bauernfamilie in Oberägypten. Nach dem Tod seiner Eltern hörte er in der Kirche das Wort des Herrn: Willst du vollkommen sein, so verkaufe, was du hast, und gib es den Armen (Mt 19,21). Er gab sein Erbe weg und zog sich nach und nach immer tiefer in die Wüste zurück. Viele Menschen suchten seinen Rat, und um ihn sammelten sich Schüler. Er starb hochbetagt um 356. Sein Leben beschrieb der hl. Athanasius von Alexandrien kurz nach seinem Tod.", sr: "Антоније је потицао из хришћанске сељачке породице у Горњем Египту. После смрти родитеља чуо је у цркви реч Господњу: Ако хоћеш савршен да будеш, продај што имаш и подај сиромасима (Мт 19,21). Раздао је наследство и постепено се повлачио све дубље у пустињу. Многи људи су тражили његов савет, а око њега су се окупљали ученици. Упокојио се у дубокој старости око 356. Његово житије написао је свети Атанасије Александријски убрзо после његове смрти." },
    teaching: { de: "Er lehrte Wachsamkeit über die Gedanken, Ausdauer im Gebet, Demut und Unterscheidung. Seine Kämpfe gegen Versuchungen sind im Leben des Athanasius beschrieben. Er gilt als „Vater der Mönche“.", sr: "Учио је будности над помислима, истрајности у молитви, смирењу и расуђивању. Његове борбе са искушењима описане су у Атанасијевом житију. Сматра се „оцем монаха“." },
    meaning: { de: "Das „Leben des Antonius“ verbreitete das Mönchtum in der ganzen christlichen Welt und gehört zu den einflussreichsten Heiligenleben überhaupt.", sr: "„Житије Антонијево“ раширило је монаштво у целом хришћанском свету и спада у најутицајнија житија уопште." },
    read: ["athAnt"] },
  { id: "s-arsenije", name: { de: "Hl. Arsenije Sremac", sr: "Свети Арсеније Сремац" },
    lived: { de: "† 1266", sr: "† 1266." }, feast: { de: "28. Okt. (10. Nov.)", sr: "28. октобар/10. новембар" },
    life: { de: "Arsenije stammte nach der Überlieferung aus Srem (Syrmien), daher sein Beiname. Er war ein Schüler des hl. Sava und wurde von ihm zum Abt des Klosters Žiča bestimmt. 1233 folgte er Sava als zweiter Erzbischof der Serbischen Kirche nach. Unter ihm wurde der Sitz des Erzbistums nach Peć verlegt, wo er die Kirche der Heiligen Apostel errichten ließ. Er leitete die Kirche etwa drei Jahrzehnte. Seine Reliquien ruhen nach der Überlieferung im Kloster Ždrebaonik in Montenegro.", sr: "Арсеније је, према предању, потицао из Срема, отуда његов надимак. Био је ученик светог Саве, који га је поставио за игумана манастира Жиче. Године 1233. наследио је Саву као други архиепископ Српске Цркве. За његово време седиште архиепископије пренето је у Пећ, где је подигао храм Светих апостола. Управљао је Црквом око три деценије. Његове мошти, према предању, почивају у манастиру Ждребаоник у Црној Гори." },
    teaching: { de: "Er führte das Werk des hl. Sava treu weiter: Ordnung der Kirche, Pflege der Klöster und des Gottesdienstes. Er ist ein Vorbild für treue Nachfolge im Dienst.", sr: "Верно је наставио дело светог Саве: уређење Цркве, бригу о манастирима и богослужењу. Узор је верног наслеђивања у служби." },
    meaning: { de: "Die Patriarchenkirche in Peć wurde zum geistlichen Zentrum der Serbischen Kirche; das Patriarchat von Peć ist Teil des UNESCO-Welterbes „Mittelalterliche Denkmäler im Kosovo“.", sr: "Пећка патријаршија постала је духовни центар Српске Цркве; она је део Унесковог светског наслеђа „Средњовековни споменици на Косову“." },
    tag: "uncertain", read: [], readNote: { de: "Für diese Version wurde keine einzelne freie, rechtmäßige Quelle geprüft. Auskunft gibt dein Priester.", sr: "За ово издање није проверен ниједан појединачан слободан, законито доступан извор. Обавештења даје ваш свештеник." } },
  { id: "s-ignatius", name: { de: "Hl. Ignatius von Antiochien (der Gottesträger)", sr: "Свети Игњатије Богоносац" },
    lived: { de: "† um 107/115", sr: "† око 107/115" }, feast: { de: "20. Dez. (2. Jan.)", sr: "20. децембар/2. јануар" },
    life: { de: "Ignatius war Bischof von Antiochien in Syrien, nach der Überlieferung der dritte Bischof der Stadt nach dem Apostel Petrus. Unter Kaiser Trajan wurde er verhaftet und in Ketten nach Rom gebracht. Auf dieser Reise schrieb er sieben Briefe an Gemeinden und an den hl. Polykarp von Smyrna. In Rom starb er als Märtyrer in der Arena; das genaue Jahr ist unsicher.", sr: "Игњатије је био епископ Антиохије у Сирији, према предању трећи епископ града после апостола Петра. Под царем Трајаном ухапшен је и у оковима одведен у Рим. На том путу написао је седам посланица заједницама и светом Поликарпу Смирнском. У Риму је пострадао као мученик у арени; тачна година је несигурна." },
    teaching: { de: "Seine Briefe gehören zu den ältesten christlichen Schriften nach dem Neuen Testament. Er betont die Einheit der Kirche um den Bischof und die Eucharistie, die wahre Menschwerdung Christi gegen Irrlehrer und die Bereitschaft zum Martyrium. Er gebraucht als erster bekannter Autor den Ausdruck „katholische (allumfassende) Kirche“.", sr: "Његове посланице спадају међу најстарије хришћанске списе после Новог завета. Наглашава јединство Цркве око епископа и Евхаристије, истинско оваплоћење Христово насупрот јеретицима и спремност на мучеништво. Он је први познати писац који користи израз „саборна (католичанска, свеобухватна) Црква“." },
    meaning: { de: "Er ist ein wichtiger Zeuge dafür, wie die Kirche schon um das Jahr 100 lebte: mit Bischof, Priestern und Diakonen und mit der Eucharistie als Mitte.", sr: "Он је важан сведок тога како је Црква живела већ око 100. године: са епископом, свештеницима и ђаконима и са Евхаристијом као средиштем." },
    read: ["anfIgn"] },
  { id: "s-rila", name: { de: "Hl. Johannes von Rila", sr: "Свети Јован Рилски" },
    lived: { de: "um 876–946", sr: "око 876–946" }, feast: { de: "19. Okt. (1. Nov.); Übertragung der Reliquien 18. Aug. (31. Aug.)", sr: "19. октобар/1. новембар; пренос моштију 18/31. август" },
    life: { de: "Johannes lebte im Bulgarischen Reich. Er wurde Mönch und zog sich als Einsiedler in die Wälder und Höhlen des Rila-Gebirges zurück. Viele Menschen suchten ihn auf, und aus der Gemeinschaft seiner Schüler entstand das Rila-Kloster. Er starb 946. Sein geistliches Testament an die Schüler ist überliefert. Seine Reliquien kehrten nach mehreren Übertragungen 1469 in das Rila-Kloster zurück.", sr: "Јован је живео у Бугарском царству. Постао је монах и повукао се као пустињак у шуме и пећине Рилске планине. Многи су га тражили, а из заједнице његових ученика настао је Рилски манастир. Упокојио се 946. Сачувано је његово духовно завештање ученицима. Његове мошти су се после више преноса 1469. вратиле у Рилски манастир." },
    teaching: { de: "Er ist ein Vorbild der Stille, des Gebets und der Demut. In seinem Testament mahnt er die Mönche zu Einmütigkeit und zum Verzicht auf Besitz.", sr: "Он је узор тишине, молитве и смирења. У завештању опомиње монахе на једнодушност и одрицање од имовине." },
    meaning: { de: "Er ist der bekannteste Heilige Bulgariens; auch in Serbien wird er verehrt. Das Rila-Kloster gehört zum UNESCO-Welterbe.", sr: "Он је најпознатији светитељ Бугарске; поштује се и у Србији. Рилски манастир налази се на Унесковој листи светске баштине." },
    tag: "uncertain", read: ["svProlog"] }
];

/* Fragen und Quiz für die Heiligen-Profile (Kurs C) */
const qa = (qd, qs, ad, as) => ({ q: { de: qd, sr: qs }, a: { de: ad, sr: as } });
const qz = (qd, qs, opts, c) => ({ q: { de: qd, sr: qs }, options: opts.map(o => ({ de: o[0], sr: o[1] })), correct: c });

const SAINT_EXTRA = {
  "s-paisios": {
    questions: [
      qa("Wie geht man am besten mit „Paisios-Zitaten“ in sozialen Medien um?", "Како најбоље поступати са „Пајсијевим цитатима“ на друштвеним мрежама?", "Man fragt nach Buch und Seite. Ohne Quelle behandelt man sie mit Vorsicht.", "Пита се за књигу и страну. Без извора се прихватају са опрезом."),
      qa("Was riet der hl. Paisios Laien in Bezug auf das Nachahmen von Mönchen?", "Шта је свети Пајсије саветовао мирјанима у вези са опонашањем монаха?", "Nicht ohne Rat nachahmen, sondern am eigenen Ort mit Maß und Unterscheidung leben.", "Не опонашати без савета, него живети на свом месту са мером и расуђивањем.")
    ],
    quiz: [
      qz("Wo ist der hl. Paisios begraben?", "Где је сахрањен свети Пајсије?", [["Im Kloster Souroti bei Thessaloniki", "У манастиру Суроти код Солуна"], ["Auf dem Athos in Kavsokalyvia", "На Светој Гори у Кавсокаливији"], ["In Konitsa", "У Коници"]], 0),
      qz("In welchem Jahr wurde er heiliggesprochen?", "Које године је канонизован?", [["2015", "2015."], ["1994", "1994."], ["2003", "2003."]], 0),
      qz("Welchen Beruf übte er als junger Mann aus?", "Чиме се бавио као младић?", [["Zimmermann", "Дрводеља"], ["Arzt", "Лекар"], ["Lehrer", "Учитељ"]], 0)
    ]
  },
  "s-porphyrios": {
    questions: [
      qa("Wo diente der hl. Porphyrios viele Jahre als Priester?", "Где је свети Порфирије много година служио као свештеник?", "An einer Krankenhauskapelle in Athen.", "У болничкој цркви у Атини."),
      qa("Wie soll man nach seiner Lehre dem Bösen begegnen?", "Како, према његовом учењу, треба поступати са злом?", "Nicht durch Kampf gegen das Böse, sondern durch Hinwendung zu Christus und Liebe zu ihm.", "Не борбом против зла, него окретањем ка Христу и љубављу према Њему.")
    ],
    quiz: [
      qz("Wann wurde der hl. Porphyrios heiliggesprochen?", "Када је канонизован свети Порфирије?", [["2013", "2013."], ["1991", "1991."], ["2015", "2015."]], 0),
      qz("Wohin ging er schon als Junge?", "Куда је отишао још као дечак?", [["Auf den Berg Athos", "На Свету Гору"], ["Nach Jerusalem", "У Јерусалим"], ["Nach Konstantinopel", "У Цариград"]], 0),
      qz("In welchen Jahren lebte er?", "У којим годинама је живео?", [["1906–1991", "1906–1991."], ["1924–1994", "1924–1994."], ["1846–1920", "1846–1920."]], 0)
    ]
  },
  "s-sophrony": {
    questions: [
      qa("Wessen Schüler war der hl. Sophrony?", "Чији ученик је био свети Софроније?", "Des hl. Siluan vom Athos, dessen Schriften er herausgab.", "Светог Силуана Атонског, чије је списе приредио."),
      qa("Was gründete er in England?", "Шта је основао у Енглеској?", "Das Kloster des hl. Johannes des Täufers in Essex.", "Манастир Светог Јована Крститеља у Есексу.")
    ],
    quiz: [
      qz("Was war der hl. Sophrony, bevor er Mönch wurde?", "Шта је био свети Софроније пре него што је постао монах?", [["Maler in Paris", "Сликар у Паризу"], ["Arzt", "Лекар"], ["Soldat", "Војник"]], 0),
      qz("In welchem Jahr wurde er heiliggesprochen?", "Које године је канонизован?", [["2019", "2019."], ["1993", "1993."], ["2003", "2003."]], 0),
      qz("In welchem Land liegt das von ihm gegründete Kloster?", "У којој земљи се налази манастир који је основао?", [["England", "Енглеска"], ["Griechenland", "Грчка"], ["Russland", "Русија"]], 0)
    ]
  },
  "s-silouan": {
    questions: [
      qa("Was ist für den hl. Siluan das Kennzeichen wahren Christseins?", "Шта је за светог Силуана знак истинског хришћанства?", "Die Liebe zu den Feinden.", "Љубав према непријатељима."),
      qa("Was war der hl. Siluan, bevor er Mönch wurde?", "Шта је био свети Силуан пре него што је постао монах?", "Ein russischer Bauer.", "Руски сељак.")
    ],
    quiz: [
      qz("In welchem Kloster auf dem Athos lebte er?", "У ком манастиру на Светој Гори је живео?", [["Kloster des hl. Panteleimon", "У манастиру Светог Пантелејмона"], ["Hilandar", "У Хиландару"], ["Vatopedi", "У Ватопеду"]], 0),
      qz("Was lehrte er als Kennzeichen wahren Christseins?", "Шта је учио као знак истинског хришћанства?", [["Liebe zu den Feinden", "Љубав према непријатељима"], ["Strenge Fastenregeln", "Строга правила поста"], ["Gelehrsamkeit", "Учевност"]], 0),
      qz("In welchen Jahren lebte er?", "У којим годинама је живео?", [["1866–1938", "1866–1938."], ["1906–1991", "1906–1991."], ["1754–1833", "1754–1833."]], 0)
    ]
  },
  "s-nektarios": {
    questions: [
      qa("Was widerfuhr dem hl. Nektarios in Ägypten?", "Шта се догодило светом Нектарију у Египту?", "Er wurde verleumdet und abgesetzt und ertrug es demütig.", "Био је оклеветан и смењен и то је смирено поднео."),
      qa("Was gründete er auf Ägina?", "Шта је основао на Егини?", "Ein Frauenkloster.", "Женски манастир.")
    ],
    quiz: [
      qz("Welches Amt hatte er in Ägypten?", "Коју службу је имао у Египту?", [["Metropolit von Pentapolis", "Митрополит пентапољски"], ["Patriarch von Alexandrien", "Патријарх александријски"], ["Abt auf dem Sinai", "Игуман на Синају"]], 0),
      qz("In welchem Jahr wurde er heiliggesprochen?", "Које године је канонизован?", [["1961", "1961."], ["1920", "1920."], ["1987", "1987."]], 0),
      qz("Wann ist sein Gedenktag?", "Када је његов спомен?", [["9. November (22. November)", "9. новембра (22. новембра)"], ["12. Juli (25. Juli)", "12. јула (25. јула)"], ["2. Januar (15. Januar)", "2. јануара (15. јануара)"]], 0)
    ]
  },
  "s-seraphim": {
    questions: [
      qa("Was ist nach dem hl. Seraphim das Ziel des christlichen Lebens?", "Шта је према светом Серафиму циљ хришћанског живота?", "Der Erwerb des Heiligen Geistes.", "Стицање Духа Светога."),
      qa("In welchem Gespräch ist diese Lehre überliefert?", "У ком разговору је ово учење предато?", "In einem Gespräch mit Nikolai Motowilow.", "У разговору са Николајем Мотовиловом.")
    ],
    quiz: [
      qz("In welchem Kloster lebte der hl. Seraphim?", "У ком манастиру је живео свети Серафим?", [["Sarow", "У Саровском манастиру"], ["Optina", "У Оптинској испосници"], ["Valaam", "На Валааму"]], 0),
      qz("In welchem Jahr wurde er heiliggesprochen?", "Које године је канонизован?", [["1903", "1903."], ["1833", "1833."], ["1987", "1987."]], 0),
      qz("Wie lebte er lange Zeit?", "Како је дуго живео?", [["Als Einsiedler", "Као пустињак"], ["Als Bischof", "Као епископ"], ["Als Lehrer in der Stadt", "Као учитељ у граду"]], 0)
    ]
  },
  "s-kronstadt": {
    questions: [
      qa("Was feierte der hl. Johannes von Kronstadt täglich?", "Шта је свети Јован Кронштатски служио свакодневно?", "Die Göttliche Liturgie.", "Свету Литургију."),
      qa("Wie heißt sein geistliches Tagebuch?", "Како се зове његов духовни дневник?", "„Mein Leben in Christus“.", "„Мој живот у Христу“.")
    ],
    quiz: [
      qz("Wo wirkte er als Gemeindepriester?", "Где је деловао као парохијски свештеник?", [["In Kronstadt bei Sankt Petersburg", "У Кронштату код Санкт Петербурга"], ["In Moskau", "У Москви"], ["In Kiew", "У Кијеву"]], 0),
      qz("Was war für ihn die Mitte des Lebens?", "Шта је за њега било средиште живота?", [["Die Eucharistie", "Евхаристија"], ["Die Wissenschaft", "Наука"], ["Das Einsiedlerleben", "Пустињачки живот"]], 0),
      qz("In welchen Jahren lebte er?", "У којим годинама је живео?", [["1829–1908", "1829–1908."], ["1866–1938", "1866–1938."], ["1906–1991", "1906–1991."]], 0)
    ]
  },
  "s-nikolaj": {
    questions: [
      qa("Welches Werk des hl. Nikolaj enthält Heiligenleben für jeden Tag?", "Које дело светог Николаја садржи житија светих за сваки дан?", "Der Prolog von Ohrid.", "Охридски пролог."),
      qa("Wo war er im Zweiten Weltkrieg inhaftiert?", "Где је био заточен у Другом светском рату?", "Im Konzentrationslager Dachau.", "У логору Дахау.")
    ],
    quiz: [
      qz("Bischof welcher Städte war der hl. Nikolaj?", "Епископ којих градова је био свети Николај?", [["Ohrid und Žiča", "Охрида и Жиче"], ["Belgrad und Niš", "Београда и Ниша"], ["Cetinje und Podgorica", "Цетиња и Подгорице"]], 0),
      qz("In welchem Jahr wurde er von der Serbischen Kirche heiliggesprochen?", "Које године га је Српска Црква канонизовала?", [["2003", "2003."], ["1956", "1956."], ["2010", "2010."]], 0),
      qz("Wann ist sein Gedenktag?", "Када је његов спомен?", [["5. März (18. März)", "5. марта (18. марта)"], ["14. Januar (27. Januar)", "14. јануара (27. јануара)"], ["15. Juni (28. Juni)", "15. јуна (28. јуна)"]], 0)
    ]
  },
  "s-sava": {
    questions: [
      qa("Was geschah im Jahr 1219?", "Шта се догодило 1219. године?", "Der hl. Sava wurde erster Erzbischof der selbstständigen (autokephalen) Serbischen Kirche.", "Свети Сава је постао први архиепископ самосталне (аутокефалне) Српске Цркве."),
      qa("Welches Gesetzbuch verfasste der hl. Sava?", "Који законик је написао свети Сава?", "Den Nomokanon.", "Номоканон (Законоправило).")
    ],
    quiz: [
      qz("Wie hieß der hl. Sava als Prinz?", "Како се звао свети Сава као кнежевић?", [["Rastko", "Растко"], ["Vukan", "Вукан"], ["Stefan", "Стефан"]], 0),
      qz("Welches Kloster auf dem Athos erneuerte er mit seinem Vater?", "Који манастир на Светој Гори је обновио са оцем?", [["Hilandar", "Хиландар"], ["Vatopedi", "Ватопед"], ["Iviron", "Ивирон"]], 0),
      qz("Wann ist sein Gedenktag?", "Када је његов спомен?", [["14. Januar (27. Januar)", "14. јануара (27. јануара)"], ["5. März (18. März)", "5. марта (18. марта)"], ["2. Dezember (15. Dezember)", "2. децембра (15. децембра)"]], 0)
    ]
  },
  "s-lazar": {
    questions: [
      qa("Welche Schlacht verlor Fürst Lazar 1389?", "У којој бици је кнез Лазар погинуо 1389?", "Die Schlacht auf dem Amselfeld (Kosovo) gegen das Osmanische Reich.", "У Косовском боју против Османског царства."),
      qa("Was ist beim hl. Lazar zu unterscheiden?", "Шта треба разликовати код светог Лазара?", "Historisch gesicherte Tatsachen und spätere Volksüberlieferung, z. B. Epen.", "Историјски потврђене чињенице и касније народно предање, нпр. епске песме.")
    ],
    quiz: [
      qz("Welches Kloster stiftete Fürst Lazar?", "Који манастир је подигао кнез Лазар?", [["Ravanica", "Раваницу"], ["Studenica", "Студеницу"], ["Hilandar", "Хиландар"]], 0),
      qz("Wann ist der Vidovdan?", "Када је Видовдан?", [["15. Juni (28. Juni)", "15. јуна (28. јуна)"], ["14. Januar (27. Januar)", "14. јануара (27. јануара)"], ["13. Februar (26. Februar)", "13. фебруара (26. фебруара)"]], 0),
      qz("In welchem Jahr fiel er auf dem Amselfeld?", "Које године је погинуо на Косову пољу?", [["1389", "1389."], ["1219", "1219."], ["1453", "1453."]], 0)
    ]
  },
  "s-maryegypt": {
    questions: [
      qa("Was lehrt das Leben der hl. Maria von Ägypten?", "Чему учи живот свете Марије Египћанке?", "Dass kein Mensch zu tief gefallen ist, um durch Umkehr und Gottes Gnade geheilt zu werden.", "Да ниједан човек није пао тако дубоко да не би могао бити исцељен покајањем и Божијом благодаћу."),
      qa("Wann gedenkt die Kirche ihrer besonders?", "Када је Црква посебно прославља?", "Am 1. April (14. April) und am 5. Sonntag der Großen Fastenzeit; ihre Lebensbeschreibung wird mit dem Großen Kanon des hl. Andreas gelesen.", "1/14. априла и пете недеље Великог поста; њено житије чита се уз Велики канон светог Андреја.")
    ],
    quiz: [
      qz("Wer begegnete Maria in der Wüste?", "Ко је срео Марију у пустињи?", [["Der Mönch Zosimas", "Монах Зосима"], ["Der hl. Antonius", "Свети Антоније"], ["Der Apostel Paulus", "Апостол Павле"]], 0),
      qz("Vor welcher Ikone kehrte sie in Jerusalem um?", "Пред којом иконом се покајала у Јерусалиму?", [["Der Gottesgebärerin", "Богородице"], ["Des hl. Georg", "Светог Георгија"], ["Des Erzengels Michael", "Архангела Михаила"]], 0),
      qz("An welchem Sonntag der Großen Fastenzeit wird sie gefeiert?", "Које недеље Великог поста се прославља?", [["Am 5. Sonntag", "Пете недеље"], ["Am 1. Sonntag", "Прве недеље"], ["Am Palmsonntag", "На Цвети"]], 0)
    ]
  },
  "s-luke": {
    questions: [
      qa("Welchen Beruf übte der hl. Lukas neben seinem Bischofsamt aus?", "Којим занимањем се свети Лука бавио поред епископске службе?", "Er war Chirurg und Professor der Medizin und operierte auch in der Verbannung weiter.", "Био је хирург и професор медицине и наставио је да оперише и у изгнанству."),
      qa("Wie verband er Glaube und Wissenschaft?", "Како је повезивао веру и науку?", "Er sah im Dienst am kranken Menschen einen Dienst an Christus und schrieb über den Menschen als Einheit von Geist, Seele und Leib.", "У служењу болесном човеку видео је служење Христу и писао о човеку као јединству духа, душе и тела.")
    ],
    quiz: [
      qz("Wo wurde der hl. Lukas geboren?", "Где је рођен свети Лука?", [["In Kertsch auf der Krim", "У Керчу на Криму"], ["In Moskau", "У Москви"], ["In Kiew", "У Кијеву"]], 0),
      qz("Wessen Erzbischof war er von 1946 bis 1961?", "Чији архиепископ је био од 1946. до 1961?", [["Von Simferopol und der Krim", "Симферопољски и кримски"], ["Von Belgrad", "Београдски"], ["Von Athen", "Атински"]], 0),
      qz("Wann ist sein Gedenktag?", "Када је његов спомен?", [["29. Mai (11. Juni)", "29. маја (11. јуна)"], ["1. April (14. April)", "1. априла (14. априла)"], ["6. Dezember (19. Dezember)", "6. децембра (19. децембра)"]], 0)
    ]
  },
  "s-simeon": {
    questions: [
      qa("Was tat Stefan Nemanja im Jahr 1196?", "Шта је учинио Стефан Немања 1196. године?", "Er dankte zugunsten seines Sohnes ab und wurde Mönch.", "Одрекао се престола у корист сина и постао монах."),
      qa("Welches Kloster erneuerte er gemeinsam mit seinem Sohn Sava?", "Који манастир је обновио заједно са сином Савом?", "Das Kloster Hilandar auf dem Athos.", "Манастир Хиландар на Светој Гори.")
    ],
    quiz: [
      qz("Welchen Beinamen trägt der hl. Simeon?", "Који надимак носи свети Симеон?", [["Der Myrrhestrahlende", "Мироточиви"], ["Der Theologe", "Богослов"], ["Der Große", "Велики"]], 0),
      qz("Wo starb er 1199?", "Где се упокојио 1199. године?", [["Im Kloster Hilandar", "У манастиру Хиландару"], ["In Studenica", "У Студеници"], ["In Ras", "У Расу"]], 0),
      qz("Wer war sein Sohn, der später Erzbischof wurde?", "Ко је био његов син који је касније постао архиепископ?", [["Der hl. Sava", "Свети Сава"], ["Fürst Lazar", "Кнез Лазар"], ["Der hl. Nikolaj", "Свети Николај"]], 0)
    ]
  },
  "s-vasilije": {
    questions: [
      qa("Wie hieß der hl. Vasilije mit bürgerlichem Namen?", "Како се свети Василије звао у свету?", "Stojan Jovanović.", "Стојан Јовановић."),
      qa("Welcher Ort ist besonders mit ihm verbunden?", "Које место је посебно везано за њега?", "Das Kloster Ostrog in Montenegro, wo seine Reliquien ruhen.", "Манастир Острог у Црној Гори, где почивају његове мошти.")
    ],
    quiz: [
      qz("In welchem Jahr wurde er geboren?", "Које године је рођен?", [["1610", "1610."], ["1500", "1500."], ["1750", "1750."]], 0),
      qz("Wann ist sein Gedenktag?", "Када је његов спомен?", [["29. April (12. Mai)", "29. априла (12. маја)"], ["1. Juni (14. Juni)", "1. јуна (14. јуна)"], ["13. Februar (26. Februar)", "13. фебруара (26. фебруара)"]], 0),
      qz("Wer besucht das Kloster Ostrog?", "Ко посећује манастир Острог?", [["Gläubige verschiedener Religionen", "Верници различитих вера"], ["Nur Mönche", "Само монаси"], ["Niemand mehr", "Нико више"]], 0)
    ]
  },
  "s-justin": {
    questions: [
      qa("Von welchem Bischof wurde der hl. Justin besonders geprägt?", "Од ког епископа је свети Јустин био посебно обликован?", "Vom hl. Nikolaj Velimirović, seinem Lehrer.", "Од светог Николаја Велимировића, свог учитеља."),
      qa("Wie heißt sein dogmatisches Hauptwerk?", "Како се зове његово главно догматско дело?", "„Dogmatik der Orthodoxen Kirche“.", "„Догматика Православне Цркве“.")
    ],
    quiz: [
      qz("In welchem Kloster war er Archimandrit?", "У ком манастиру је био архимандрит?", [["Ćelije bei Valjevo", "У Ћелијама код Ваљева"], ["Ostrog", "У Острогу"], ["Studenica", "У Студеници"]], 0),
      qz("In welchem Jahr wurde er heiliggesprochen?", "Које године је канонизован?", [["2010", "2010."], ["1979", "1979."], ["2003", "2003."]], 0),
      qz("Nach wem wählte er bei der Mönchsweihe seinen Namen?", "По коме је изабрао име при монашењу?", [["Nach dem Märtyrer Justin dem Philosophen", "По мученику Јустину Философу"], ["Nach Kaiser Justinian", "По цару Јустинијану"], ["Nach seinem Vater", "По свом оцу"]], 0)
    ]
  },
  "s-nicholas": {
    questions: [
      qa("Warum sind sichere Angaben über das Leben des hl. Nikolaus selten?", "Зашто су сигурни подаци о животу светог Николаја ретки?", "Weil seine Lebensbeschreibungen erst Jahrhunderte nach seinem Tod entstanden; vieles gehört zur frommen Überlieferung.", "Зато што су његова житија настала тек вековима после његове смрти; много тога припада благочестивом предању."),
      qa("Woran erinnert das Fest am 9. Mai (22. Mai)?", "На шта подсећа празник 9. маја (22. маја)?", "An die Übertragung seiner Reliquien nach Bari im Jahr 1087.", "На пренос његових моштију у Бари 1087. године.")
    ],
    quiz: [
      qz("Wo war der hl. Nikolaus Bischof?", "Где је свети Николај био епископ?", [["In Myra in Lykien", "У Мири Ликијској"], ["In Rom", "У Риму"], ["In Belgrad", "У Београду"]], 0),
      qz("Wann ist der Nikolaustag (Nikoljdan)?", "Када је Никољдан?", [["6. Dezember (19. Dezember)", "6. децембра (19. децембра)"], ["23. April (6. Mai)", "23. априла (6. маја)"], ["14. Oktober (27. Oktober)", "14. октобра (27. октобра)"]], 0),
      qz("In welche Stadt wurden seine Reliquien 1087 gebracht?", "У који град су његове мошти пренете 1087?", [["Bari", "Бари"], ["Venedig", "Венеција"], ["Konstantinopel", "Цариград"]], 0)
    ]
  },
  "s-george": {
    questions: [
      qa("Was bedeutet der Drache auf der Ikone des hl. Georg?", "Шта значи аждаја на икони светог Георгија?", "Er ist ein Bild für das Böse; die Ikone zeigt den Sieg des Glaubens. Die Drachenerzählung ist eine spätere Legende.", "Она је слика зла; икона показује победу вере. Прича о аждаји је каснија легенда."),
      qa("Welche zwei Feste des hl. Georg kennt die Serbische Kirche?", "Која два празника светог Георгија познаје Српска Црква?", "Đurđevdan am 23. April (6. Mai) und Đurđic am 3. November (16. November).", "Ђурђевдан 23. априла (6. маја) и Ђурђиц 3. новембра (16. новембра).")
    ],
    quiz: [
      qz("Unter welchem Kaiser starb der hl. Georg nach der Überlieferung?", "Под којим царем је, према предању, пострадао свети Георгије?", [["Diokletian", "Диоклецијан"], ["Konstantin", "Константин"], ["Justinian", "Јустинијан"]], 0),
      qz("Welchen Beruf hatte er nach der Überlieferung?", "Које занимање је имао према предању?", [["Offizier im römischen Heer", "Официр у римској војсци"], ["Fischer", "Рибар"], ["Bischof", "Епископ"]], 0),
      qz("Wann ist Đurđevdan?", "Када је Ђурђевдан?", [["23. April (6. Mai)", "23. априла (6. маја)"], ["26. Oktober (8. November)", "26. октобра (8. новембра)"], ["6. Dezember (19. Dezember)", "6. децембра (19. децембра)"]], 0)
    ]
  },
  "s-demetrios": {
    questions: [
      qa("Warum heißt der hl. Demetrios „der Myrrhestrahlende“?", "Зашто се свети Димитрије назива „Мироточиви“?", "Weil nach der Überlieferung von seinen Reliquien duftendes Myron ausging.", "Зато што је, према предању, из његових моштију текло миомирисно миро."),
      qa("Welche Bedeutung haben Mitrovdan und Đurđevdan im serbischen Volksbrauch?", "Какав значај имају Митровдан и Ђурђевдан у српском народном обичају?", "Sie teilen das Jahr in eine Sommer- und eine Winterhälfte.", "Деле годину на летњу и зимску половину.")
    ],
    quiz: [
      qz("Von welcher Stadt ist der hl. Demetrios Schutzpatron?", "Ког града је свети Димитрије заштитник?", [["Thessaloniki", "Солуна"], ["Athen", "Атине"], ["Moskau", "Москве"]], 0),
      qz("Wann ist Mitrovdan?", "Када је Митровдан?", [["26. Oktober (8. November)", "26. октобра (8. новембра)"], ["11. November (24. November)", "11. новембра (24. новембра)"], ["1. Juni (14. Juni)", "1. јуна (14. јуна)"]], 0),
      qz("Wie starb er nach der Überlieferung?", "Како је пострадао према предању?", [["Im Gefängnis mit Lanzen durchbohrt", "Прободен копљима у тамници"], ["Auf dem Scheiterhaufen", "На ломачи"], ["Er starb hochbetagt im Kloster", "Упокојио се у дубокој старости у манастиру"]], 0)
    ]
  },
  "s-petka": {
    questions: [
      qa("Woher kommt der Name „Petka“?", "Одакле потиче име „Петка“?", "Vom griechischen Wort Paraskevi für „Freitag“ – serbisch petak.", "Од грчке речи параскеви, што значи „петак“."),
      qa("Wo ruhen ihre Reliquien heute?", "Где данас почивају њене мошти?", "Seit 1641 in Iași in Rumänien.", "Од 1641. у Јашију у Румунији.")
    ],
    quiz: [
      qz("In welchem Jahrhundert lebte die hl. Petka?", "У ком веку је живела света Петка?", [["Im 11. Jahrhundert", "У 11. веку"], ["Im 4. Jahrhundert", "У 4. веку"], ["Im 18. Jahrhundert", "У 18. веку"]], 0),
      qz("Wo lebte sie lange als Asketin?", "Где је дуго живела као подвижница?", [["In der Wüste am Jordan", "У пустињи код Јордана"], ["Auf dem Athos", "На Светој Гори"], ["In Rom", "У Риму"]], 0),
      qz("Wann ist Petkovdan?", "Када је Петковдан?", [["14. Oktober (27. Oktober)", "14. октобра (27. октобра)"], ["8. November (21. November)", "8. новембра (21. новембра)"], ["20. Juli (2. August)", "20. јула (2. августа)"]], 0)
    ]
  },
  "s-stefan": {
    questions: [
      qa("Welcher Heilige half König Stefan nach der Überlieferung, sein Augenlicht wiederzuerlangen?", "Који светитељ је, према предању, помогао краљу Стефану да поврати вид?", "Der hl. Nikolaus von Myra.", "Свети Николај Мирликијски."),
      qa("Welches Kloster stiftete er?", "Који манастир је подигао?", "Visoki Dečani im Kosovo, wo seine Reliquien ruhen.", "Високе Дечане на Косову, где почивају његове мошти.")
    ],
    quiz: [
      qz("Wer war der Vater von Stefan Dečanski?", "Ко је био отац Стефана Дечанског?", [["König Milutin", "Краљ Милутин"], ["Zar Dušan", "Цар Душан"], ["Fürst Lazar", "Кнез Лазар"]], 0),
      qz("Wann ist sein Gedenktag?", "Када је његов спомен?", [["11. November (24. November)", "11. новембра (24. новембра)"], ["6. Dezember (19. Dezember)", "6. децембра (19. децембра)"], ["15. Juni (28. Juni)", "15. јуна (28. јуна)"]], 0),
      qz("Wen besiegte er 1330 bei Velbužd?", "Кога је победио 1330. код Велбужда?", [["Die Bulgaren", "Бугаре"], ["Die Osmanen", "Османлије"], ["Die Ungarn", "Угре"]], 0)
    ]
  },
  "s-andrew": {
    questions: [
      qa("Warum heißt Andreas „der Erstberufene“?", "Зашто се Андреј назива „Првозвани“?", "Weil er einer der ersten Jünger war, die Jesus nachfolgten (Joh 1,35–40).", "Зато што је био међу првим ученицима који су пошли за Исусом (Јн 1,35–40)."),
      qa("Wen führte Andreas zu Jesus?", "Кога је Андреј довео Исусу?", "Seinen Bruder Simon Petrus (Joh 1,41–42).", "Свог брата Симона Петра (Јн 1,41–42).")
    ],
    quiz: [
      qz("Wessen Jünger war Andreas zuerst?", "Чији ученик је Андреј најпре био?", [["Johannes des Täufers", "Јована Крститеља"], ["Des Paulus", "Павлов"], ["Des Mose", "Мојсијев"]], 0),
      qz("Wo starb er nach der Überlieferung?", "Где је, према предању, пострадао?", [["In Patras", "У Патри"], ["In Rom", "У Риму"], ["In Jerusalem", "У Јерусалиму"]], 0),
      qz("Wann ist sein Gedenktag?", "Када је његов спомен?", [["30. November (13. Dezember)", "30. новембра (13. децембра)"], ["29. Juni (12. Juli)", "29. јуна (12. јула)"], ["6. Dezember (19. Dezember)", "6. децембра (19. децембра)"]], 0)
    ]
  },
  "s-spyridon": {
    questions: [
      qa("Welchen Beruf hatte Spyridon nach der Überlieferung, bevor er Bischof wurde?", "Које занимање је Спиридон, према предању, имао пре него што је постао епископ?", "Er war Hirte.", "Био је пастир."),
      qa("Wo ruhen seine Reliquien heute?", "Где данас почивају његове мошти?", "Auf der Insel Korfu.", "На острву Крфу.")
    ],
    quiz: [
      qz("Auf welcher Insel war er Bischof?", "На ком острву је био епископ?", [["Zypern", "На Кипру"], ["Kreta", "На Криту"], ["Sizilien", "На Сицилији"]], 0),
      qz("Wann ist sein Gedenktag?", "Када је његов спомен?", [["12. Dezember (25. Dezember)", "12. децембра (25. децембра)"], ["30. November (13. Dezember)", "30. новембра (13. децембра)"], ["9. Mai (22. Mai)", "9. маја (22. маја)"]], 0),
      qz("Von welcher Insel ist er Schutzpatron?", "Ког острва је заштитник?", [["Korfu", "Крфа"], ["Zypern", "Кипра"], ["Malta", "Малте"]], 0)
    ]
  },
  "s-catherine": {
    questions: [
      qa("Warum wird die hl. Katharina von Schülern und Studierenden angerufen?", "Зашто се ђаци и студенти моле светој Екатерини?", "Weil sie nach der Überlieferung sehr gebildet war und ihr Wissen in den Dienst Christi stellte.", "Зато што је, према предању, била веома образована и своје знање ставила у службу Христу."),
      qa("Welches berühmte Kloster trägt ihren Namen?", "Који чувени манастир носи њено име?", "Das Katharinenkloster auf dem Sinai.", "Манастир Свете Екатерине на Синају.")
    ],
    quiz: [
      qz("Aus welcher Stadt stammte sie nach der Überlieferung?", "Из ког града је, према предању, потицала?", [["Alexandrien", "Из Александрије"], ["Rom", "Из Рима"], ["Antiochien", "Из Антиохије"]], 0),
      qz("Wann ist ihr Gedenktag?", "Када је њен спомен?", [["24. November (7. Dezember)", "24. новембра (7. децембра)"], ["14. Oktober (27. Oktober)", "14. октобра (27. октобра)"], ["1. April (14. April)", "1. априла (14. априла)"]], 0),
      qz("Wen widerlegte sie nach der Überlieferung im Streitgespräch?", "Кога је, према предању, оборила у расправи?", [["Heidnische Philosophen", "Незнабожачке философе"], ["Bischöfe", "Епископе"], ["Mönche", "Монахе"]], 0)
    ]
  },
  "s-prokopije": {
    questions: [
      qa("Welcher frühe Geschichtsschreiber berichtet über den hl. Prokopios?", "Који рани историчар пише о светом Прокопију?", "Eusebius von Caesarea.", "Јевсевије Кесаријски."),
      qa("Welchen Dienst hatte Prokopios nach Eusebius in der Kirche?", "Коју службу је Прокопије, по Јевсевију, имао у Цркви?", "Er war Lektor, also Vorleser der Heiligen Schrift.", "Био је чтец, дакле читач Светог Писма.")
    ],
    quiz: [
      qz("Wo starb er 303 als Märtyrer?", "Где је пострадао 303?", [["In Caesarea in Palästina", "У Кесарији Палестинској"], ["In Rom", "У Риму"], ["In Belgrad", "У Београду"]], 0),
      qz("Welche serbische Stadt trägt seinen Namen?", "Који српски град носи његово име?", [["Prokuplje", "Прокупље"], ["Kragujevac", "Крагујевац"], ["Novi Sad", "Нови Сад"]], 0),
      qz("Wann ist sein Gedenktag?", "Када је његов спомен?", [["8. Juli (21. Juli)", "8. јула (21. јула)"], ["26. Oktober (8. November)", "26. октобра (8. новембра)"], ["30. November (13. Dezember)", "30. новембра (13. децембра)"]], 0)
    ]
  },
  "s-antony": {
    questions: [
      qa("Welches Bibelwort bewegte Antonius, alles aufzugeben?", "Која библијска реч је подстакла Антонија да све остави?", "Willst du vollkommen sein, so verkaufe, was du hast, und gib es den Armen (Mt 19,21).", "Ако хоћеш савршен да будеш, продај што имаш и подај сиромасима (Мт 19,21)."),
      qa("Wer schrieb das Leben des Antonius?", "Ко је написао житије Антонијево?", "Der hl. Athanasius von Alexandrien.", "Свети Атанасије Александријски.")
    ],
    quiz: [
      qz("In welchem Land lebte der hl. Antonius?", "У којој земљи је живео свети Антоније?", [["Ägypten", "У Египту"], ["Griechenland", "У Грчкој"], ["Serbien", "У Србији"]], 0),
      qz("Welchen Ehrentitel trägt er?", "Коју почасну титулу носи?", [["Vater der Mönche", "Отац монаха"], ["Säule der Orthodoxie", "Стуб Православља"], ["Goldmund", "Златоусти"]], 0),
      qz("Wann ist sein Gedenktag?", "Када је његов спомен?", [["17. Januar (30. Januar)", "17. јануара (30. јануара)"], ["30. Januar (12. Februar)", "30. јануара (12. фебруара)"], ["1. Januar (14. Januar)", "1. јануара (14. јануара)"]], 0)
    ]
  },
  "s-arsenije": {
    questions: [
      qa("Wessen Nachfolger war der hl. Arsenije?", "Чији наследник је био свети Арсеније?", "Er folgte dem hl. Sava 1233 als zweiter Erzbischof der Serbischen Kirche.", "Наследио је светог Саву 1233. као други архиепископ Српске Цркве."),
      qa("Wohin wurde unter ihm der Sitz des Erzbistums verlegt?", "Где је за његово време пренето седиште архиепископије?", "Nach Peć.", "У Пећ.")
    ],
    quiz: [
      qz("Woher kommt sein Beiname „Sremac“?", "Одакле потиче његов надимак „Сремац“?", [["Aus der Gegend Srem (Syrmien)", "Из Срема"], ["Von einem Kloster", "Од манастира"], ["Von seinem Vater", "Од његовог оца"]], 0),
      qz("Welche Kirche ließ er in Peć errichten?", "Који храм је подигао у Пећи?", [["Die Kirche der Heiligen Apostel", "Храм Светих апостола"], ["Die Hagia Sophia", "Свету Софију"], ["Die Kirche des hl. Sava", "Храм Светог Саве"]], 0),
      qz("Wann ist sein Gedenktag?", "Када је његов спомен?", [["28. Oktober (10. November)", "28. октобра (10. новембра)"], ["14. Januar (27. Januar)", "14. јануара (27. јануара)"], ["11. November (24. November)", "11. новембра (24. новембра)"]], 0)
    ]
  },
  "s-ignatius": {
    questions: [
      qa("Wann schrieb der hl. Ignatius seine Briefe?", "Када је свети Игњатије писао своје посланице?", "Auf dem Weg nach Rom, wo er als Märtyrer starb.", "На путу за Рим, где је пострадао као мученик."),
      qa("Welche Themen betont er besonders?", "Које теме посебно наглашава?", "Einheit der Kirche um Bischof und Eucharistie, die wahre Menschwerdung Christi und die Treue bis zum Martyrium.", "Јединство Цркве око епископа и Евхаристије, истинско оваплоћење Христово и верност до мучеништва.")
    ],
    quiz: [
      qz("Wo war Ignatius Bischof?", "Где је Игњатије био епископ?", [["In Antiochien", "У Антиохији"], ["In Alexandrien", "У Александрији"], ["In Rom", "У Риму"]], 0),
      qz("Wie viele Briefe von ihm sind überliefert?", "Колико његових посланица је сачувано?", [["Sieben", "Седам"], ["Zwei", "Две"], ["Vierzehn", "Четрнаест"]], 0),
      qz("Welchen Beinamen trägt er?", "Који надимак носи?", [["Der Gottesträger", "Богоносац"], ["Der Große", "Велики"], ["Der Theologe", "Богослов"]], 0)
    ]
  },
  "s-rila": {
    questions: [
      qa("Wie entstand das Rila-Kloster?", "Како је настао Рилски манастир?", "Aus der Gemeinschaft der Schüler, die sich um den Einsiedler Johannes sammelten.", "Из заједнице ученика који су се окупили око пустињака Јована."),
      qa("Was hinterließ er seinen Schülern?", "Шта је оставио својим ученицима?", "Ein geistliches Testament.", "Духовно завештање.")
    ],
    quiz: [
      qz("In welchem Gebirge lebte er als Einsiedler?", "У којој планини је живео као пустињак?", [["Im Rila-Gebirge", "На Рилској планини"], ["Am Athos", "На Светој Гори"], ["Im Kaukasus", "На Кавказу"]], 0),
      qz("Wann ist sein Hauptgedenktag?", "Када је његов главни спомен?", [["19. Oktober (1. November)", "19. октобра (1. новембра)"], ["17. Januar (30. Januar)", "17. јануара (30. јануара)"], ["8. Juli (21. Juli)", "8. јула (21. јула)"]], 0),
      qz("Wann starb er?", "Када се упокојио?", [["946", "946."], ["1200", "1200."], ["600", "600."]], 0)
    ]
  }
};
SAINTS.forEach(s => Object.assign(s, SAINT_EXTRA[s.id] || {}));

/* Fragen und Quiz für die Kirchenväter (Kurs B) */
const FATHER_EXTRA = {
  "f-athanasius": {
    questions: [
      qa("Warum nennt man den hl. Athanasius „Säule der Orthodoxie“?", "Зашто се свети Атанасије назива „стубом Православља“?", "Weil er trotz mehrfacher Verbannung unerschütterlich den Glauben von Nizäa verteidigte: Der Sohn ist wahrer Gott, eines Wesens mit dem Vater.", "Зато што је, упркос вишеструком прогонству, непоколебљиво бранио никејску веру: Син је истинити Бог, једносуштан Оцу."),
      qa("Welches seiner Werke prägte das Mönchtum besonders?", "Које његово дело је посебно обликовало монаштво?", "Das Leben des hl. Antonius.", "Житије светог Антонија.")
    ],
    quiz: [
      qz("In welcher Rolle nahm Athanasius am Konzil von Nizäa 325 teil?", "У ком својству је Атанасије учествовао на Никејском сабору 325?", [["Als junger Diakon", "Као млади ђакон"], ["Als Patriarch", "Као патријарх"], ["Als Kaiser", "Као цар"]], 0),
      qz("Gegen welche Irrlehre kämpfte er?", "Против које јереси се борио?", [["Arianismus", "Аријанство"], ["Ikonoklasmus", "Иконоборство"], ["Monotheletismus", "Монотелитство"]], 0),
      qz("Wo war er Bischof?", "Где је био епископ?", [["Alexandrien", "У Александрији"], ["Konstantinopel", "У Цариграду"], ["Antiochien", "У Антиохији"]], 0)
    ]
  },
  "f-basil": {
    questions: [
      qa("Was tat der hl. Basilius für Arme und Kranke?", "Шта је свети Василије учинио за сиромашне и болесне?", "Er gründete eine große Einrichtung zu ihrer Versorgung.", "Основао је велику установу за њихово збрињавање."),
      qa("Welche Wahrheit verteidigte er in „Über den Heiligen Geist“?", "Коју истину је бранио у спису „О Духу Светом“?", "Die Gottheit des Heiligen Geistes.", "Божанство Духа Светога.")
    ],
    quiz: [
      qz("Wo war der hl. Basilius Erzbischof?", "Где је свети Василије био архиепископ?", [["Caesarea in Kappadokien", "У Кесарији Кападокијској"], ["Nyssa", "У Ниси"], ["Alexandrien", "У Александрији"]], 0),
      qz("Wie oft im Jahr wird seine Liturgie gefeiert?", "Колико пута годишње се служи његова Литургија?", [["Zehnmal", "Десет пута"], ["Jeden Sonntag", "Сваке недеље"], ["Nur an Ostern", "Само на Васкрс"]], 0),
      qz("Wann ist sein Gedenktag?", "Када је његов спомен?", [["1. Januar (14. Januar)", "1. јануара (14. јануара)"], ["13. November (26. November)", "13. новембра (26. новембра)"], ["4. Dezember (17. Dezember)", "4. децембра (17. децембра)"]], 0)
    ]
  },
  "f-gregnaz": {
    questions: [
      qa("Warum nennt die Kirche den hl. Gregor von Nazianz „den Theologen“?", "Зашто Црква светог Григорија назива Богословом?", "Weil er die Lehre von der Dreifaltigkeit besonders klar formulierte, vor allem in seinen fünf Theologischen Reden.", "Зато што је учење о Тројици изложио посебно јасно, нарочито у својих пет богословских беседа."),
      qa("Wer sind die Drei Hierarchen?", "Ко су Три Јерарха?", "Basilius der Große, Gregor der Theologe und Johannes Chrysostomus.", "Василије Велики, Григорије Богослов и Јован Златоуст.")
    ],
    quiz: [
      qz("Mit welchem Heiligen war er seit der Studienzeit in Athen befreundet?", "Са којим светитељем је био пријатељ још од студија у Атини?", [["Basilius der Große", "Са Василијем Великим"], ["Athanasius", "Са Атанасијем"], ["Ephräm der Syrer", "Са Јефремом Сирином"]], 0),
      qz("Welches Konzil leitete er zeitweise?", "Којим сабором је неко време председавао?", [["Konstantinopel 381", "Цариградским 381."], ["Nizäa 325", "Никејским 325."], ["Chalcedon 451", "Халкидонским 451."]], 0),
      qz("Zu welchem Fest hielt er Rede 39?", "За који празник је одржао беседу 39?", [["Theophanie", "Богојављење"], ["Pfingsten", "Педесетницу"], ["Mariä Entschlafung", "Успење Богородице"]], 0)
    ]
  },
  "f-gregnys": {
    questions: [
      qa("Wie beschreibt der hl. Gregor von Nyssa das geistliche Leben?", "Како свети Григорије Ниски описује духовни живот?", "Als unendlichen Aufstieg zu Gott.", "Као бесконачно узрастање ка Богу."),
      qa("In welcher Beziehung stand er zum hl. Basilius?", "У каквом односу је био са светим Василијем?", "Er war sein jüngerer Bruder.", "Био је његов млађи брат.")
    ],
    quiz: [
      qz("Welches Werk schrieb Gregor von Nyssa über den Weg des geistlichen Aufstiegs?", "Које дело је Григорије Ниски написао о путу духовног узрастања?", [["Das Leben des Mose", "Живот Мојсијев"], ["Über den Heiligen Geist", "О Духу Светом"], ["Genaue Darlegung des orthodoxen Glaubens", "Тачно изложење православне вере"]], 0),
      qz("Zu welcher Gruppe von Vätern gehört er?", "Којој групи Отаца припада?", [["Den Kappadokischen Vätern", "Кападокијским Оцима"], ["Den Wüstenvätern", "Пустињским Оцима"], ["Den Apostolischen Vätern", "Апостолским Оцима"]], 0),
      qz("Über welchen Bibelabschnitt verfasste er eigene Reden?", "О ком библијском одељку је написао посебне беседе?", [["Die Seligpreisungen", "О блаженствима"], ["Die Offenbarung", "О Откривењу"], ["Das Buch Ijob", "О Књизи о Јову"]], 0)
    ]
  },
  "f-chrysostom": {
    questions: [
      qa("Was bedeutet der Beiname „Chrysostomus“?", "Шта значи надимак „Златоуст“?", "„Goldmund“ – wegen seiner großen Predigtkunst.", "„Златних уста“ – због великог дара проповеди."),
      qa("Warum wurde er verbannt?", "Зашто је био прогнан?", "Weil er Luxus und Ungerechtigkeit am Kaiserhof kritisierte.", "Зато што је критиковао раскош и неправду на царском двору.")
    ],
    quiz: [
      qz("Welche Liturgie wird in der orthodoxen Kirche am häufigsten gefeiert?", "Која Литургија се у Православној Цркви најчешће служи?", [["Die des hl. Johannes Chrysostomus", "Литургија светог Јована Златоуста"], ["Die des hl. Basilius", "Литургија светог Василија"], ["Die der vorgeweihten Gaben", "Литургија пређеосвећених дарова"]], 0),
      qz("Wo war er Erzbischof?", "Где је био архиепископ?", [["Konstantinopel", "У Цариграду"], ["Antiochien", "У Антиохији"], ["Rom", "У Риму"]], 0),
      qz("Welche ihm zugeschriebene Predigt wird in der Osternacht gelesen?", "Која беседа која му се приписује чита се у пасхалној ноћи?", [["Die Osterpredigt", "Васкршња беседа"], ["Rede auf die heiligen Lichter", "Беседа на свете светлости"], ["Über das Priestertum", "О свештенству"]], 0)
    ]
  },
  "f-cyril": {
    questions: [
      qa("Warum ist Maria nach dem hl. Kyrill wahrhaft Gottesgebärerin?", "Зашто је Марија према светом Кирилу истински Богородица?", "Weil Christus eine einzige Person ist, der menschgewordene Logos. Wer ihn geboren hat, hat Gott geboren.", "Зато што је Христос једно Лице, оваплоћени Логос. Која Га је родила, родила је Бога."),
      qa("Wem trat Kyrill entgegen?", "Коме се Кирило супротставио?", "Nestorius, der die Einheit der Person Christi gefährdete und den Titel Gottesgebärerin ablehnte.", "Несторију, који је угрожавао јединство Христове Личности и одбацивао назив Богородица.")
    ],
    quiz: [
      qz("Auf welchem Konzil verteidigte Kyrill den Glauben?", "На ком сабору је Кирило бранио веру?", [["Ephesus 431", "Ефеском 431."], ["Nizäa 787", "Никејском 787."], ["Konstantinopel 381", "Цариградском 381."]], 0),
      qz("Wessen Patriarch war er?", "Чији патријарх је био?", [["Von Alexandrien", "Александријски"], ["Von Jerusalem", "Јерусалимски"], ["Von Antiochien", "Антиохијски"]], 0),
      qz("Welches Evangelium legte er in einem Kommentar aus?", "Које Јеванђеље је протумачио?", [["Johannes", "По Јовану"], ["Markus", "По Марку"], ["Lukas", "По Луки"]], 0)
    ]
  },
  "f-maximus": {
    questions: [
      qa("Welche Lehre verteidigte der hl. Maximus?", "Које учење је бранио свети Максим?", "Dass Christus einen göttlichen und einen menschlichen Willen hat.", "Да Христос има божанску и људску вољу."),
      qa("Was ist für Maximus die Krone der Tugenden?", "Шта је за Максима круна врлина?", "Die Liebe.", "Љубав.")
    ],
    quiz: [
      qz("Wie heißt die Irrlehre, gegen die er kämpfte?", "Како се зове јерес против које се борио?", [["Monotheletismus", "Монотелитство"], ["Arianismus", "Аријанство"], ["Nestorianismus", "Несторијанство"]], 0),
      qz("Auf welchem Konzil siegte seine Lehre?", "На ком сабору је победило његово учење?", [["Dem Sechsten (680/681)", "На Шестом (680/681)"], ["Dem Ersten (325)", "На Првом (325)"], ["Dem Siebten (787)", "На Седмом (787)"]], 0),
      qz("Welches seiner Werke steht in der Philokalie?", "Које његово дело се налази у Добротољубљу?", [["Kapitel über die Liebe", "Главе о љубави"], ["Das Leben des Mose", "Живот Мојсијев"], ["Über den Heiligen Geist", "О Духу Светом"]], 0)
    ]
  },
  "f-damascus": {
    questions: [
      qa("Mit welchem Argument verteidigte der hl. Johannes von Damaskus die Ikonen?", "Којим аргументом је свети Јован Дамаскин бранио иконе?", "Weil Gott Mensch geworden ist, darf er dargestellt werden; Verehrung der Ikonen ist keine Anbetung.", "Пошто је Бог постао човек, сме се изображавати; поштовање икона није поклоњење."),
      qa("Warum konnte er die Ikonen frei verteidigen?", "Зашто је могао слободно да брани иконе?", "Er lebte unter arabischer Herrschaft, außerhalb der Macht der byzantinischen Bilderstürmer.", "Живео је под арапском влашћу, ван домашаја византијских иконобораца.")
    ],
    quiz: [
      qz("In welchem Kloster lebte er?", "У ком манастиру је живео?", [["Kloster des hl. Sabbas bei Jerusalem", "У манастиру Светог Саве Освећеног код Јерусалима"], ["Hilandar", "У Хиландару"], ["Studenica", "У Студеници"]], 0),
      qz("Welches seiner Werke ist ein Grundlagentext der Dogmatik?", "Које његово дело је темељни текст догматике?", [["Genaue Darlegung des orthodoxen Glaubens", "Тачно изложење православне вере"], ["Kapitel über die Liebe", "Главе о љубави"], ["Asketische Reden", "Подвижничке беседе"]], 0),
      qz("Welcher Hymnus wird ihm zugeschrieben?", "Која химна му се приписује?", [["Der Osterkanon", "Васкршњи канон"], ["Der Cherubimhymnus", "Херувимска песма"], ["Das Trisagion", "Трисвета песма"]], 0)
    ]
  },
  "f-ephrem": {
    questions: [
      qa("Wie lehrte der hl. Ephräm den Glauben?", "Како је свети Јефрем учио веру?", "In Hymnen, die gesungen wurden.", "У химнама које су се певале."),
      qa("Welches ihm zugeschriebene Gebet ist Teil der Großen Fastenzeit?", "Која молитва која му се приписује је део Великог поста?", "Das Bußgebet des hl. Ephräm.", "Покајна молитва светог Јефрема.")
    ],
    quiz: [
      qz("Welchen Ehrennamen trägt der hl. Ephräm?", "Који почасни назив носи свети Јефрем?", [["Harfe des Heiligen Geistes", "Гусле Духа Светога"], ["Goldmund", "Златоуст"], ["Säule der Orthodoxie", "Стуб Православља"]], 0),
      qz("Welches Amt hatte er?", "Коју службу је имао?", [["Diakon", "Ђакон"], ["Patriarch", "Патријарх"], ["Kaiser", "Цар"]], 0),
      qz("In welchen Städten wirkte er?", "У којим градовима је деловао?", [["Nisibis und Edessa", "У Нисибису и Едеси"], ["Rom und Mailand", "У Риму и Милану"], ["Athen und Korinth", "У Атини и Коринту"]], 0)
    ]
  },
  "f-isaac": {
    questions: [
      qa("Welche Themen prägen die Lehre des hl. Isaak?", "Које теме обележавају учење светог Исака?", "Demut, Stille, Gebet, Tränen der Reue und die grenzenlose Barmherzigkeit Gottes.", "Смирење, тишина, молитва, сузе покајања и безгранична милост Божија."),
      qa("Welcher moderne Heilige schätzte seine Schriften sehr?", "Који савремени светитељ је веома ценио његове списе?", "Der hl. Paisios vom Athos.", "Свети Пајсије Светогорац.")
    ],
    quiz: [
      qz("Wessen Bischof war der hl. Isaak kurzzeitig?", "Где је свети Исак кратко био епископ?", [["Von Ninive", "У Ниневији"], ["Von Edessa", "У Едеси"], ["Von Alexandrien", "У Александрији"]], 0),
      qz("Wie heißt sein Hauptwerk?", "Како се зове његово главно дело?", [["Asketische Reden", "Подвижничке беседе"], ["Hexaemeron", "Шестоднев"], ["Mystagogie", "Мистагогија"]], 0),
      qz("Wie lebte er nach seiner Zeit als Bischof?", "Како је живео после епископске службе?", [["Als Einsiedler", "Као пустињак"], ["Als Hofbeamter", "Као дворски службеник"], ["Als Lehrer in Athen", "Као учитељ у Атини"]], 0)
    ]
  }
};
FATHERS.forEach(f => Object.assign(f, FATHER_EXTRA[f.id] || {}));

if (typeof module !== "undefined") module.exports = { FATHERS, SAINTS, LINKS };
