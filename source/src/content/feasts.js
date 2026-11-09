/* Die zwölf großen Feste: Ikone in Worten, Bedeutung, Lesungen der Liturgie (allgemeine Leseordnung; örtliche Abweichungen möglich). Datum und Name kommen aus CAL_FEASTS (calendar.js). */
const GREAT_FEASTS = [
 {
  "id": "theotokos-birth",
  "order": 1,
  "group": "theotokos",
  "icon": {
   "de": "Die hl. Anna liegt auf einem Lager, Mägde bringen Wasser und baden das neugeborene Kind; Joachim schaut oft aus einem Fenster oder steht dabei.",
   "sr": "Света Ана лежи на постељи, слушкиње доносе воду и купају новорођенче; Јоаким често гледа кроз прозор или стоји поред."
  },
  "mean": {
   "de": "Nach der Überlieferung wurde Maria den betagten Eltern Joachim und Anna als Antwort auf ihr Gebet geschenkt. Mit ihrer Geburt beginnt die Vorbereitung auf die Menschwerdung Gottes. Das Fest eröffnet den Reigen der Feste im neuen Kirchenjahr (das am 1. September beginnt).",
   "sr": "Према предању, Марија је дарована старим родитељима Јоакиму и Ани као одговор на њихову молитву. Њеним рођењем почиње припрема за оваплоћење Божије. Празник отвара низ празника у новој црквеној години (која почиње 1. септембра)."
  },
  "gospel": {
   "de": "Lk 10,38–42; 11,27–28",
   "sr": "Лк 10,38–42; 11,27–28"
  },
  "epistle": {
   "de": "Phil 2,5–11",
   "sr": "Флп 2,5–11"
  },
  "lessons": [],
  "note": {
   "de": "Die Geburt Marias ist nicht in der Bibel beschrieben, sondern in der kirchlichen Überlieferung (u. a. im Protoevangelium des Jakobus) bewahrt.",
   "sr": "Рођење Маријино није описано у Библији, него је сачувано у црквеном предању (између осталог у Протојеванђељу Јаковљевом)."
  }
 },
 {
  "id": "exaltation",
  "order": 2,
  "group": "lord",
  "icon": {
   "de": "Der Bischof steht erhöht und hebt das Kreuz über die Menge; ringsum Volk, Kaiser Konstantin und die hl. Helena.",
   "sr": "Епископ стоји на узвишењу и подиже крст изнад народа; около народ, цар Константин и света Јелена."
  },
  "mean": {
   "de": "Erinnert an die Auffindung des Kreuzes Christi in Jerusalem durch die hl. Kaiserin Helena (4. Jh.) und seine feierliche Erhöhung vor dem Volk. Das Kreuz, einst Werkzeug der Schande, ist Zeichen des Sieges über den Tod. Der Tag ist ein strenger Fasttag.",
   "sr": "Подсећа на проналажење Крста Христовог у Јерусалиму од свете царице Јелене (4. век) и његово свечано уздизање пред народом. Крст, некада оруђе срамоте, знак је победе над смрћу. Дан је строги посни дан."
  },
  "gospel": {
   "de": "Joh 19,6–35 (Auswahl)",
   "sr": "Јн 19,6–35 (избор)"
  },
  "epistle": {
   "de": "1 Kor 1,18–24",
   "sr": "1 Кор 1,18–24"
  },
  "lessons": [
   "bib-jn19"
  ]
 },
 {
  "id": "entry",
  "order": 3,
  "group": "theotokos",
  "icon": {
   "de": "Das Kind Maria steigt die Stufen des Tempels hinauf und wird vom Hohenpriester Zacharias empfangen; dahinter Joachim, Anna und junge Mädchen mit Kerzen.",
   "sr": "Девојчица Марија пење се уз степенице храма и прима је првосвештеник Захарија; иза Јоаким, Ана и девојке са свећама."
  },
  "mean": {
   "de": "Nach der Überlieferung brachten Joachim und Anna die dreijährige Maria in den Tempel, wo sie aufwuchs. Sie, die selbst lebendiger Tempel Gottes werden sollte, tritt in den Tempel ein. Das Fest fällt in die Weihnachtsfastenzeit.",
   "sr": "Према предању, Јоаким и Ана довели су трогодишњу Марију у храм, где је одрасла. Она која је сама требало да постане живи храм Божији улази у храм. Празник пада у Божићни пост."
  },
  "gospel": {
   "de": "Lk 10,38–42; 11,27–28",
   "sr": "Лк 10,38–42; 11,27–28"
  },
  "epistle": {
   "de": "Hebr 9,1–7",
   "sr": "Јев 9,1–7"
  },
  "lessons": [],
  "note": {
   "de": "Das Ereignis ist in der kirchlichen Überlieferung, nicht in der Bibel beschrieben.",
   "sr": "Догађај је описан у црквеном предању, а не у Библији."
  }
 },
 {
  "id": "nativity",
  "order": 4,
  "group": "lord",
  "icon": {
   "de": "In einer dunklen Höhle liegt das Kind in Windeln in einer Krippe, die einem Grab gleicht; daneben Ochs und Esel (Jes 1,3), Maria ruhend, Josef nachdenklich, Engel, Hirten, die Weisen und der Stern.",
   "sr": "У тамној пећини дете лежи повијено у јаслама које личе на гроб; поред во и магарац (Ис 1,3), Марија одмара, Јосиф замишљен, анђели, пастири, мудраци и звезда."
  },
  "mean": {
   "de": "Gott wird Mensch: Der ewige Sohn wird von der Jungfrau Maria geboren, um die Menschen zu retten. Vor dem Fest liegt das vierzigtägige Weihnachtsfasten. In Serbien prägen Badnjak (Heiligabend) und das Fest selbst viele Bräuche.",
   "sr": "Бог постаје човек: вечни Син рађа се од Дјеве Марије да спасе људе. Пред празником је четрдесетодневни Божићни пост. У Србији Бадњи дан и сам празник обележавају многи обичаји."
  },
  "gospel": {
   "de": "Mt 2,1–12",
   "sr": "Мт 2,1–12"
  },
  "epistle": {
   "de": "Gal 4,4–7",
   "sr": "Гал 4,4–7"
  },
  "lessons": [
   "bib-lk2",
   "th-incarnation"
  ]
 },
 {
  "id": "theophany",
  "order": 5,
  "group": "lord",
  "icon": {
   "de": "Christus steht im Jordan, Johannes legt ihm die Hand auf, von oben kommt der Heilige Geist als Taube, ein Lichtstrahl aus dem Himmel; am Ufer Engel mit Tüchern.",
   "sr": "Христос стоји у Јордану, Јован полаже руку на Њега, одозго силази Дух Свети као голуб, зрак светлости са неба; на обали анђели са убрусима."
  },
  "mean": {
   "de": "Bei der Taufe Christi im Jordan offenbart sich die Heilige Dreieinigkeit: Die Stimme des Vaters bezeugt den Sohn, der Geist kommt in Gestalt einer Taube. Am Fest wird das Wasser feierlich geweiht (Große Wasserweihe).",
   "sr": "На крштењу Христовом у Јордану јавља се Света Тројица: глас Оца сведочи Сина, Дух силази у виду голуба. На празник се свечано освећује вода (велико водоосвећење)."
  },
  "gospel": {
   "de": "Mt 3,13–17",
   "sr": "Мт 3,13–17"
  },
  "epistle": {
   "de": "Tit 2,11–14; 3,4–7",
   "sr": "Тит 2,11–14; 3,4–7"
  },
  "lessons": [
   "bib-josh3",
   "th-trinity"
  ]
 },
 {
  "id": "meeting",
  "order": 6,
  "group": "lord",
  "icon": {
   "de": "Im Tempel übergibt Maria das Kind dem greisen Simeon, der es auf verhüllten Händen empfängt; dahinter Josef mit zwei Tauben und die Prophetin Hanna.",
   "sr": "У храму Марија предаје дете старцу Симеону, који Га прима на покривеним рукама; иза Јосиф са два голуба и пророчица Ана."
  },
  "mean": {
   "de": "Vierzig Tage nach der Geburt bringen Maria und Josef das Kind in den Tempel. Simeon erkennt in ihm das Heil Gottes und das Licht der Völker. Das Fest verbindet Alten und Neuen Bund.",
   "sr": "Четрдесет дана после рођења Марија и Јосиф доносе дете у храм. Симеон у Њему препознаје спасење Божије и светлост народима. Празник повезује Стари и Нови завет."
  },
  "gospel": {
   "de": "Lk 2,22–40",
   "sr": "Лк 2,22–40"
  },
  "epistle": {
   "de": "Hebr 7,7–17",
   "sr": "Јев 7,7–17"
  },
  "lessons": [
   "bib-lk2"
  ]
 },
 {
  "id": "annunciation",
  "order": 7,
  "group": "theotokos",
  "icon": {
   "de": "Der Erzengel Gabriel tritt mit erhobener Hand grüßend heran; Maria, sitzend oder stehend, hält oft eine Spindel mit purpurner Wolle für den Tempelvorhang; ein Strahl vom Himmel deutet den Heiligen Geist an.",
   "sr": "Арханђел Гаврило прилази подигнуте руке у поздрав; Марија, седећи или стојећи, често држи вретено са пурпурном вуном за храмовну завесу; зрак са неба указује на Духа Светога."
  },
  "mean": {
   "de": "Gabriel verkündet Maria, dass sie den Sohn Gottes empfangen wird; sie antwortet: Siehe, ich bin die Magd des Herrn. Die Kirche nennt das Fest den „Anfang unseres Heils“. Es fällt meist in die Große Fastenzeit; Fisch ist an diesem Tag traditionell erlaubt.",
   "sr": "Гаврило благовести Марији да ће зачети Сина Божијег; она одговара: Ево слушкиње Господње. Црква празник назива „почетак нашег спасења“. Обично пада у Велики пост; риба је тог дана традиционално дозвољена."
  },
  "gospel": {
   "de": "Lk 1,24–38",
   "sr": "Лк 1,24–38"
  },
  "epistle": {
   "de": "Hebr 2,11–18",
   "sr": "Јев 2,11–18"
  },
  "lessons": [
   "bib-lk1"
  ]
 },
 {
  "id": "palm",
  "order": 8,
  "group": "lord",
  "icon": {
   "de": "Christus reitet auf einem Esel nach Jerusalem, gefolgt von den Aposteln; Kinder breiten Kleider aus, Menschen mit Palmzweigen kommen aus dem Stadttor.",
   "sr": "Христос јаше на магарцу у Јерусалим, за Њим апостоли; деца простиру хаљине, људи са палминим гранама излазе из градске капије."
  },
  "mean": {
   "de": "Eine Woche vor Ostern zieht Christus als demütiger König in Jerusalem ein; am Vortag erweckte er Lazarus. In der Kirche werden Palm- bzw. Weidenzweige gesegnet. Fisch ist an diesem Tag traditionell erlaubt.",
   "sr": "Недељу дана пре Васкрса Христос улази у Јерусалим као смирени Цар; дан раније васкрсао је Лазара. У храму се освећују палмове, односно врбове гранчице. Риба је тог дана традиционално дозвољена."
  },
  "gospel": {
   "de": "Joh 12,1–18",
   "sr": "Јн 12,1–18"
  },
  "epistle": {
   "de": "Phil 4,4–9",
   "sr": "Флп 4,4–9"
  },
  "lessons": ["bib-jn11"]
 },
 {
  "id": "ascension",
  "order": 9,
  "group": "lord",
  "icon": {
   "de": "Christus thront in einer runden Lichtglorie, von Engeln emporgetragen; unten die Apostel und in der Mitte die Gottesgebärerin, ruhig betend, mit zwei Engeln in weißen Gewändern.",
   "sr": "Христос седи у округлој слави светлости, коју носе анђели; доле апостоли, а у средини Богородица, мирно се молећи, са два анђела у белим хаљинама."
  },
  "mean": {
   "de": "Vierzig Tage nach Ostern fährt der Auferstandene vor den Augen der Jünger in den Himmel auf. Er nimmt die menschliche Natur mit in die Herrlichkeit des Vaters und verheißt den Heiligen Geist.",
   "sr": "Четрдесет дана после Васкрса Васкрсли се пред ученицима узноси на небо. Узноси људску природу у славу Очеву и обећава Духа Светога."
  },
  "gospel": {
   "de": "Lk 24,36–53",
   "sr": "Лк 24,36–53"
  },
  "epistle": {
   "de": "Apg 1,1–12",
   "sr": "Дап 1,1–12"
  },
  "lessons": [
   "bib-lk24"
  ]
 },
 {
  "id": "pentecost",
  "order": 10,
  "group": "lord",
  "icon": {
   "de": "Die zwölf Apostel sitzen im Halbkreis, über ihnen Feuerzungen; unten in einem dunklen Bogen ein gekrönter alter Mann, „Kosmos“, der die Welt darstellt, die das Evangelium erwartet.",
   "sr": "Дванаест апостола седе у полукругу, изнад њих огњени језици; доле у тамном луку крунисани старац, „Космос“, који представља свет што чека Јеванђеље."
  },
  "mean": {
   "de": "Fünfzig Tage nach Ostern kommt der Heilige Geist auf die Apostel herab. Die Kirche feiert diesen Tag als Fest der Heiligen Dreieinigkeit und als Geburtstag der Kirche. Am Nachmittag wird die Vesper mit Kniegebeten gefeiert.",
   "sr": "Педесет дана после Васкрса Дух Свети силази на апостоле. Црква тај дан слави као празник Свете Тројице и рођендан Цркве. Поподне се служи вечерње са коленопреклоним молитвама."
  },
  "gospel": {
   "de": "Joh 7,37–52; 8,12",
   "sr": "Јн 7,37–52; 8,12"
  },
  "epistle": {
   "de": "Apg 2,1–11",
   "sr": "Дап 2,1–11"
  },
  "lessons": [
   "bib-acts2",
   "th-trinity"
  ]
 },
 {
  "id": "transfiguration",
  "order": 11,
  "group": "lord",
  "icon": {
   "de": "Christus in leuchtend weißen Gewändern auf dem Berggipfel, umgeben von Lichtstrahlen; neben ihm Mose und Elija; unten die drei Apostel Petrus, Jakobus und Johannes, vom Licht zu Boden geworfen.",
   "sr": "Христос у сјајно белим хаљинама на врху горе, окружен зрацима светлости; поред Њега Мојсије и Илија; доле три апостола, Петар, Јаков и Јован, оборени светлошћу."
  },
  "mean": {
   "de": "Auf dem Berg Tabor zeigt Christus drei Jüngern seine göttliche Herrlichkeit, um sie für sein Leiden zu stärken. Das Licht des Tabor ist für die orthodoxe Spiritualität das ungeschaffene Licht Gottes. Traditionell werden Trauben und Früchte gesegnet; Fisch ist erlaubt, obwohl das Fest im Entschlafungsfasten liegt.",
   "sr": "На гори Тавору Христос показује тројици ученика своју божанску славу да их утврди за своје страдање. Таворска светлост је за православну духовност нестворена светлост Божија. Традиционално се освећује грожђе и воће; риба је дозвољена, иако празник пада у Госпојински пост."
  },
  "gospel": {
   "de": "Mt 17,1–9",
   "sr": "Мт 17,1–9"
  },
  "epistle": {
   "de": "2 Petr 1,10–19",
   "sr": "2 Пт 1,10–19"
  },
  "lessons": [
   "bib-elijah"
  ]
 },
 {
  "id": "dormition",
  "order": 12,
  "group": "theotokos",
  "icon": {
   "de": "Die Gottesgebärerin liegt auf dem Totenbett, umgeben von den Aposteln; dahinter steht Christus in einer Glorie und hält ihre Seele wie ein kleines, in Weiß gehülltes Kind.",
   "sr": "Богородица лежи на одру, окружена апостолима; иза стоји Христос у слави и држи њену душу као мало дете повијено у бело."
  },
  "mean": {
   "de": "Die Kirche gedenkt des Entschlafens der Gottesgebärerin. Nach der Überlieferung waren die Apostel versammelt, und Christus selbst nahm ihre Seele auf; nach drei Tagen wurde ihr Grab leer gefunden. Vorher liegt das zweiwöchige Entschlafungsfasten.",
   "sr": "Црква спомиње уснуће Богородице. Према предању, апостоли су били сабрани, а сам Христос је примио њену душу; после три дана њен гроб је нађен празан. Пре празника је двонедељни Госпојински пост."
  },
  "gospel": {
   "de": "Lk 10,38–42; 11,27–28",
   "sr": "Лк 10,38–42; 11,27–28"
  },
  "epistle": {
   "de": "Phil 2,5–11",
   "sr": "Флп 2,5–11"
  },
  "lessons": [],
  "note": {
   "de": "Das Entschlafen der Gottesgebärerin ist in der kirchlichen Überlieferung, nicht in der Bibel beschrieben.",
   "sr": "Уснуће Богородице описано је у црквеном предању, а не у Библији."
  }
 }
];

if (typeof module !== "undefined") module.exports = { GREAT_FEASTS };
