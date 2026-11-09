/* OrthodoxPath – Bibelschule. Alle Texte sind eigene Formulierungen (keine Bibelzitate im Wortlaut). */

const BIBLE = {
  canonNote: {
    de: "Die orthodoxe Kirche liest das Alte Testament in der Überlieferung der Septuaginta (der alten griechischen Übersetzung). Darum enthalten orthodoxe Bibeln mehr alttestamentliche Bücher als viele andere Ausgaben, z. B. Tobit, Judit, Weisheit Salomos, Jesus Sirach, Baruch und die Makkabäerbücher. Der genaue Umfang und die Benennung (z. B. 3. Esra, Gebet des Manasse, Psalm 151, 4. Makkabäer) unterscheiden sich je nach orthodoxer Ortskirche und Bibelausgabe. Auch die Zählung der Psalmen weicht ab: Psalm 50 der Septuaginta entspricht Psalm 51 in vielen anderen Ausgaben.",
    sr: "Православна Црква чита Стари Завет у предању Септуагинте (старог грчког превода). Зато православна издања Библије садрже више старозаветних књига од многих других издања, нпр. Товит, Јудиту, Премудрост Соломонову, Премудрост Исуса сина Сирахова, Варуха и књиге о Макавејима. Тачан обим и називи (нпр. Друга књига Јездрина, Молитва Манасијина, Псалам 151, Четврта књига о Макавејима) разликују се зависно од помесне Цркве и издања Библије. И нумерација псалама се разликује: 50. псалам Септуагинте одговара 51. псалму у многим другим издањима."
  },
  readingNote: {
    de: "Lies die angegebenen Stellen in deiner Bibel. Eine deutsche orthodoxe Vollbibel ist nicht frei online verfügbar; nutze die Ausgabe, die dein Priester empfiehlt. Die Kapitelangaben folgen der üblichen Zählung, bei den Psalmen wird die Septuaginta-Zählung zuerst genannt.",
    sr: "Прочитајте наведена места у својој Библији. Нови Завет у српском преводу можете бесплатно читати на сајту Светосавље (веза у библиотеци). Ознаке поглавља прате уобичајену нумерацију, а код псалама се прво наводи нумерација Септуагинте."
  },
  groups: [
    { id: "gospels", name: { de: "Evangelien", sr: "Јеванђеља" } },
    { id: "acts", name: { de: "Apostelgeschichte", sr: "Дела апостолска" } },
    { id: "epistles", name: { de: "Apostolische Briefe", sr: "Апостолске посланице" } },
    { id: "rev", name: { de: "Offenbarung des Johannes", sr: "Откривење Јованово" } },
    { id: "psalms", name: { de: "Psalmen", sr: "Псалми" } },
    { id: "law", name: { de: "Die fünf Bücher Mose", sr: "Петокњижје Мојсијево" } },
    { id: "history", name: { de: "Geschichtsbücher", sr: "Историјске књиге" } },
    { id: "wisdom", name: { de: "Weisheitsbücher", sr: "Књиге мудрости" } },
    { id: "prophets", name: { de: "Prophetische Bücher", sr: "Пророчке књиге" } },
    { id: "lxx", name: { de: "Weitere Bücher orthodoxer Bibelausgaben", sr: "Остале књиге у православним издањима" } }
  ],
  books: [
    ["mt","gospels","Matthäusevangelium","Јеванђеље по Матеју"],
    ["mk","gospels","Markusevangelium","Јеванђеље по Марку"],
    ["lk","gospels","Lukasevangelium","Јеванђеље по Луки"],
    ["jn","gospels","Johannesevangelium","Јеванђеље по Јовану"],
    ["acts","acts","Apostelgeschichte","Дела апостолска"],
    ["rom","epistles","Römerbrief","Посланица Римљанима"],
    ["cor","epistles","1. und 2. Korintherbrief","Прва и Друга посланица Коринћанима"],
    ["gal","epistles","Galaterbrief","Посланица Галатима"],
    ["eph","epistles","Epheserbrief","Посланица Ефесцима"],
    ["phil","epistles","Philipperbrief","Посланица Филипљанима"],
    ["col","epistles","Kolosserbrief","Посланица Колошанима"],
    ["thess","epistles","1. und 2. Thessalonicherbrief","Прва и Друга посланица Солуњанима"],
    ["past","epistles","Briefe an Timotheus, Titus und Philemon","Посланице Тимотеју, Титу и Филимону"],
    ["heb","epistles","Hebräerbrief","Посланица Јеврејима"],
    ["cath","epistles","Katholische Briefe (Jakobus, Petrus, Johannes, Judas)","Саборне посланице (Јаковљева, Петрове, Јованове, Јудина)"],
    ["rev","rev","Offenbarung des Johannes","Откривење Јованово (Апокалипса)"],
    ["ps","psalms","Psalmen","Псалтир"],
    ["gen","law","Genesis (1. Mose)","Постање (Прва књига Мојсијева)"],
    ["ex","law","Exodus (2. Mose)","Излазак (Друга књига Мојсијева)"],
    ["lev","law","Levitikus (3. Mose)","Левитска (Трећа књига Мојсијева)"],
    ["num","law","Numeri (4. Mose)","Бројеви (Четврта књига Мојсијева)"],
    ["deut","law","Deuteronomium (5. Mose)","Поновљени закони (Пета књига Мојсијева)"],
    ["josh","history","Josua, Richter, Rut","Исус Навин, Судије, Рута"],
    ["kgdm","history","1.–4. Buch der Königtümer (Samuel und Könige)","Прва до Четврта књига Царстава"],
    ["chr","history","1. und 2. Chronik","Прва и Друга књига Дневника"],
    ["ezr","history","Esra, Nehemia, Ester","Јездра, Немија, Јестира"],
    ["job","wisdom","Ijob (Hiob)","Јов"],
    ["prov","wisdom","Sprichwörter, Kohelet, Hoheslied","Приче Соломонове, Проповедник, Песма над песмама"],
    ["isa","prophets","Jesaja","Исаија"],
    ["jer","prophets","Jeremia und Klagelieder","Јеремија и Плач Јеремијин"],
    ["ezek","prophets","Ezechiel","Језекиљ"],
    ["dan","prophets","Daniel","Данило"],
    ["twelve","prophets","Die zwölf kleinen Propheten","Дванаест малих пророка"],
    ["tob","lxx","Tobit und Judit","Товит и Јудита"],
    ["wis","lxx","Weisheit Salomos","Премудрост Соломонова"],
    ["sir","lxx","Jesus Sirach","Премудрост Исуса сина Сирахова"],
    ["bar","lxx","Baruch und Brief des Jeremia","Варух и Посланица Јеремијина"],
    ["macc","lxx","1.–3. Makkabäer","Прва до Трећа књига о Макавејима"],
    ["esd","lxx","3. Esra (griechisch 1. Esdras) – je nach Ausgabe","Друга књига Јездрина – зависно од издања"]
  ],
  lessons: [
    {
      id: "bib-mk1", book: "mk", order: 1,
      title: { de: "Der Anfang des Evangeliums", sr: "Почетак Јеванђеља" },
      ref: { de: "Markus 1,1–15", sr: "Марко 1,1–15" },
      intro: {
        de: "Das Markusevangelium ist das kürzeste Evangelium. Es erzählt schnell und lebendig. Nach der Überlieferung der Kirche schrieb der heilige Markus auf, was der Apostel Petrus verkündete.",
        sr: "Јеванђеље по Марку је најкраће Јеванђеље. Приповеда брзо и живо. Према црквеном предању, свети Марко је записао оно што је проповедао апостол Петар."
      },
      introTag: "history",
      context: {
        de: "Israel wartete seit Jahrhunderten auf den verheißenen Messias. Die Propheten hatten einen Boten angekündigt, der dem Herrn den Weg bereitet. Markus beginnt deshalb mit Johannes dem Täufer, dem letzten Propheten des Alten Bundes. Mit Christus beginnt die Zeit der Erfüllung.",
        sr: "Израиљ је вековима чекао обећаног Месију. Пророци су најавили гласника који ће припремити пут Господу. Зато Марко почиње са Јованом Крститељем, последњим пророком Старог Завета. Са Христом почиње време испуњења."
      },
      reading: [
        { ref: { de: "Mk 1,1–8", sr: "Мк 1,1–8" }, note: { de: "Johannes der Täufer ruft zur Umkehr.", sr: "Јован Крститељ позива на покајање." } },
        { ref: { de: "Mk 1,9–11", sr: "Мк 1,9–11" }, note: { de: "Die Taufe Christi im Jordan.", sr: "Крштење Христово у Јордану." } },
        { ref: { de: "Mk 1,12–15", sr: "Мк 1,12–15" }, note: { de: "Versuchung in der Wüste und Beginn der Verkündigung.", sr: "Искушење у пустињи и почетак проповеди." } }
      ],
      summary: {
        de: "Johannes tauft am Jordan und ruft die Menschen zur Umkehr. Christus kommt zu ihm und lässt sich taufen. Dabei öffnet sich der Himmel, der Geist kommt wie eine Taube herab, und die Stimme des Vaters bezeugt den Sohn. Danach wird Christus in der Wüste versucht und beginnt dann zu verkünden: Die Zeit ist erfüllt, das Reich Gottes ist nahe – kehrt um und glaubt dem Evangelium.",
        sr: "Јован крштава на Јордану и позива људе на покајање. Христос долази к њему и крштава се. Тада се отвара небо, Дух силази као голуб, а глас Оца сведочи о Сину. Потом Христа искушава ђаво у пустињи, а затим почиње да проповеда: испунило се време и приближило се Царство Божије – покајте се и верујте Јеванђељу."
      },
      interp: {
        simple: {
          de: "Bei der Taufe Christi zeigt sich Gott als Dreieinigkeit: Der Vater spricht, der Sohn steht im Wasser, der Heilige Geist erscheint als Taube. Darum heißt das Fest der Taufe Christi in der orthodoxen Kirche Theophanie – Erscheinung Gottes.",
          sr: "При Христовом крштењу Бог се открива као Тројица: Отац говори, Син стоји у води, Дух Свети се јавља као голуб. Зато се празник Христовог крштења у Православној Цркви зове Богојављење."
        },
        deeper: {
          de: "Christus brauchte keine Reinigung von Sünden. Die Kirchenväter erklären: Er steigt in das Wasser, um es zu heiligen und unsere Taufe vorzubereiten. Er nimmt den Weg der Menschen an, die umkehren, obwohl er selbst ohne Sünde ist. Das Wort Umkehr (griechisch metanoia) bedeutet eine Veränderung des ganzen Sinnes, nicht nur Bedauern.",
          sr: "Христу није било потребно очишћење од греха. Свети Оци објашњавају: Он улази у воду да би је осветио и припремио наше крштење. Он прихвата пут људи који се кају, иако је сам безгрешан. Реч покајање (грчки метаноја) значи промену целог ума, а не само жаљење."
        },
        tag: "dogma"
      },
      christ: {
        de: "Christus ist der geliebte Sohn des Vaters. In der Taufe beginnt sein öffentliches Wirken. Durch unsere eigene Taufe werden wir mit ihm verbunden und in seinen Leib, die Kirche, aufgenommen.",
        sr: "Христос је возљубљени Син Очев. Крштењем почиње Његово јавно деловање. Кроз сопствено крштење ми се сједињујемо са Њим и улазимо у Његово тело, Цркву."
      },
      links: [
        { ref: { de: "Jes 40,3", sr: "Ис 40,3" }, note: { de: "Die Stimme in der Wüste.", sr: "Глас у пустињи." } },
        { ref: { de: "Mal 3,1", sr: "Мал 3,1" }, note: { de: "Der Bote vor dem Herrn.", sr: "Гласник пред Господом." } },
        { ref: { de: "Mt 3,13–17", sr: "Мт 3,13–17" }, note: { de: "Die Taufe bei Matthäus.", sr: "Крштење код Матеја." } },
        { ref: { de: "Röm 6,3–4", sr: "Рим 6,3–4" }, note: { de: "Getauft in den Tod und die Auferstehung Christi.", sr: "Крштени у смрт и васкрсење Христово." } }
      ],
      fathers: {
        de: "Der heilige Gregor von Nazianz hielt eine Festrede zur Theophanie (Rede 39, „Auf die heiligen Lichter“). Darin deutet er die Taufe Christi als Erleuchtung und Reinigung für die Menschen. Der Text ist in englischer Übersetzung frei verfügbar (NPNF II/7, siehe Bibliothek).",
        sr: "Свети Григорије Богослов одржао је празничну беседу на Богојављење (Беседа 39, „На свете светлости“). У њој тумачи Христово крштење као просветљење и очишћење за људе. Текст је слободно доступан у енглеском преводу (NPNF II/7, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum beginnt Markus mit Johannes dem Täufer?", sr: "Зашто Марко почиње са Јованом Крститељем?" },
          a: { de: "Weil Johannes der von den Propheten angekündigte Wegbereiter ist. Er verbindet den Alten und den Neuen Bund.", sr: "Зато што је Јован претеча кога су најавили пророци. Он повезује Стари и Нови Завет." } },
        { q: { de: "Wie zeigt sich die Heilige Dreifaltigkeit bei der Taufe?", sr: "Како се Света Тројица открива при крштењу?" },
          a: { de: "Der Vater spricht vom Himmel, der Sohn wird getauft, der Geist kommt in Gestalt einer Taube herab.", sr: "Отац говори са неба, Син се крштава, Дух силази у виду голуба." } },
        { q: { de: "Was bedeutet Umkehr (metanoia)?", sr: "Шта значи покајање (метаноја)?" },
          a: { de: "Eine Veränderung des ganzen Denkens und Lebens hin zu Gott – nicht nur ein Gefühl des Bedauerns.", sr: "Промена целог мишљења и живота ка Богу – не само осећај жаљења." } }
      ],
      practice: {
        de: "Erinnere dich an deine eigene Taufe. Wenn möglich, erfrage dein Taufdatum und deinen Namenspatron. Nimm dir heute einen kleinen konkreten Schritt der Umkehr vor.",
        sr: "Сетите се свог крштења. Ако је могуће, сазнајте датум крштења и свог светитеља заштитника. Одредите данас један мали конкретан корак покајања."
      },
      review: {
        de: "Johannes bereitet den Weg. Bei der Taufe offenbart sich die Dreifaltigkeit. Christus ruft zur Umkehr und verkündet das nahe Reich Gottes.",
        sr: "Јован припрема пут. При крштењу се открива Тројица. Христос позива на покајање и објављује да је Царство Божије близу."
      },
      quiz: [
        { q: { de: "Wie heißt das Fest der Taufe Christi in der orthodoxen Kirche?", sr: "Како се у Православној Цркви зове празник Христовог крштења?" },
          options: [{ de: "Theophanie", sr: "Богојављење" }, { de: "Verklärung", sr: "Преображење" }, { de: "Pfingsten", sr: "Духови" }, { de: "Mariä Entschlafung", sr: "Успење Богородице" }], correct: 0 },
        { q: { de: "In welcher Gestalt erscheint der Heilige Geist bei der Taufe?", sr: "У ком виду се Дух Свети јавља при крштењу?" },
          options: [{ de: "Als Feuerzunge", sr: "Као огњени језик" }, { de: "Als Taube", sr: "Као голуб" }, { de: "Als Wolke", sr: "Као облак" }], correct: 1 },
        { q: { de: "Nach der Überlieferung gibt Markus die Verkündigung welches Apostels wieder?", sr: "Према предању, Марко преноси проповед ког апостола?" },
          options: [{ de: "Paulus", sr: "Павла" }, { de: "Johannes", sr: "Јована" }, { de: "Petrus", sr: "Петра" }], correct: 2 },
        { q: { de: "Wohin geht Christus direkt nach der Taufe?", sr: "Куда Христос одлази одмах после крштења?" },
          options: [{ de: "In die Wüste", sr: "У пустињу" }, { de: "Nach Jerusalem", sr: "У Јерусалим" }, { de: "Nach Kana", sr: "У Кану" }], correct: 0 }
      ]
    },
    {
      id: "bib-mt5", book: "mt", order: 2,
      title: { de: "Die Seligpreisungen", sr: "Блаженства" },
      ref: { de: "Matthäus 5,1–16", sr: "Матеј 5,1–16" },
      intro: {
        de: "Das Matthäusevangelium wurde nach der Überlieferung vom Apostel Matthäus, einem früheren Zöllner, verfasst. Es zeigt besonders, wie Christus die Verheißungen des Alten Testaments erfüllt. Die Bergpredigt (Kapitel 5–7) ist die große Lehrrede Christi.",
        sr: "Према предању, Јеванђеље по Матеју написао је апостол Матеј, бивши цариник. Оно посебно показује како Христос испуњава обећања Старог Завета. Беседа на гори (глава 5–7) је велика Христова поучна беседа."
      },
      introTag: "history",
      context: {
        de: "Wie Mose das Gesetz auf dem Berg Sinai empfing, so lehrt Christus auf einem Berg. Er hebt das Gesetz nicht auf, sondern führt es zur Vollendung: vom äußeren Gebot zur Reinheit des Herzens.",
        sr: "Као што је Мојсије примио Закон на гори Синај, тако Христос поучава на гори. Он не укида Закон, него га доводи до пуноће: од спољашње заповести до чистоте срца."
      },
      reading: [
        { ref: { de: "Mt 5,1–12", sr: "Мт 5,1–12" }, note: { de: "Die neun Seligpreisungen.", sr: "Девет блаженстава." } },
        { ref: { de: "Mt 5,13–16", sr: "Мт 5,13–16" }, note: { de: "Salz der Erde und Licht der Welt.", sr: "Со земљи и светлост свету." } }
      ],
      summary: {
        de: "Christus nennt Menschen selig, die nach weltlichem Maßstab schwach wirken: die geistlich Armen, die Trauernden, die Sanftmütigen, die nach Gerechtigkeit hungern, die Barmherzigen, die Menschen reinen Herzens, die Friedensstifter und die Verfolgten. Ihnen verheißt er das Himmelreich, Trost und die Schau Gottes. Seine Jünger sollen Salz und Licht für die Welt sein.",
        sr: "Христос назива блаженима оне који по мерилима света изгледају слаби: сиромашне духом, оне који плачу, кротке, гладне и жедне правде, милостиве, чисте срцем, миротворце и прогнане. Њима обећава Царство Небеско, утеху и гледање Бога. Његови ученици треба да буду со и светлост свету."
      },
      interp: {
        simple: {
          de: "Selig heißt: wahrhaft glücklich in Gott. Die Seligpreisungen beschreiben, wie ein Mensch aussieht, der Christus ähnlich wird. Sie sind wie Stufen einer Leiter zu Gott.",
          sr: "Блажен значи: истински срећан у Богу. Блаженства описују како изгледа човек који постаје сличан Христу. Она су као степенице лествице ка Богу."
        },
        deeper: {
          de: "In der orthodoxen Überlieferung beginnt der Weg mit der Demut (geistliche Armut) und der Trauer über die eigenen Sünden. Daraus wächst Sanftmut und Barmherzigkeit. Die Reinheit des Herzens ist die Voraussetzung, Gott zu schauen – ein Kernthema der orthodoxen Askese und der Lehre von der Theosis. In der Göttlichen Liturgie werden die Seligpreisungen häufig als drittes Antiphon gesungen.",
          sr: "У православном предању пут почиње смирењем (сиромаштвом духа) и плачем због сопствених греха. Из тога израстају кротост и милосрђе. Чистота срца је услов за гледање Бога – средишња тема православног подвига и учења о обожењу. На Светој Литургији блаженства се често певају као трећи антифон."
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus selbst lebt alle Seligpreisungen vollkommen: Er ist sanftmütig und demütig, barmherzig und wird verfolgt bis zum Kreuz. Wer ihm folgt, hat Anteil an seinem Reich.",
        sr: "Сам Христос савршено живи сва блаженства: кротак је и смирен, милостив и гоњен до крста. Ко Га следи, има удела у Његовом Царству."
      },
      links: [
        { ref: { de: "Ps 33 (34),19", sr: "Пс 33 (34),19" }, note: { de: "Der Herr ist nahe denen, die zerbrochenen Herzens sind.", sr: "Господ је близу оних који су скрушеног срца." } },
        { ref: { de: "Jes 61,1–3", sr: "Ис 61,1–3" }, note: { de: "Trost für die Trauernden.", sr: "Утеха за ожалошћене." } },
        { ref: { de: "Lk 6,20–26", sr: "Лк 6,20–26" }, note: { de: "Die Seligpreisungen bei Lukas.", sr: "Блаженства код Луке." } }
      ],
      fathers: {
        de: "Der heilige Johannes Chrysostomus hat das ganze Matthäusevangelium in Homilien (Predigten) ausgelegt, darunter die Bergpredigt. Der heilige Gregor von Nyssa verfasste eigene Reden über die Seligpreisungen. Beide Texte sind in englischer Übersetzung frei zugänglich bzw. bei Chrysostomus auch auf Deutsch in der Bibliothek der Kirchenväter.",
        sr: "Свети Јован Златоуст протумачио је цело Јеванђеље по Матеју у беседама (проповедима), укључујући Беседу на гори. Свети Григорије Ниски написао је посебне беседе о блаженствима. Оба текста су слободно доступна у енглеском преводу, а Златоустове беседе и на немачком у Библиотеци Отаца Цркве."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was bedeutet „arm im Geist“?", sr: "Шта значи „сиромашни духом“?" },
          a: { de: "Demütig sein: wissen, dass man alles von Gott empfängt und vor ihm nichts Eigenes vorzuweisen hat.", sr: "Бити смирен: знати да све примамо од Бога и да пред Њим немамо ничег свог чиме бисмо се хвалили." } },
        { q: { de: "Welche Verheißung erhalten die Menschen reinen Herzens?", sr: "Које обећање добијају чисти срцем?" },
          a: { de: "Sie werden Gott schauen.", sr: "Они ће Бога видети." } },
        { q: { de: "Warum lehrt Christus auf einem Berg?", sr: "Зашто Христос поучава на гори?" },
          a: { de: "Es erinnert an Mose auf dem Sinai: Christus ist der Gesetzgeber des Neuen Bundes, der das Gesetz erfüllt.", sr: "То подсећа на Мојсија на Синају: Христос је Законодавац Новог Завета који испуњава Закон." } },
        { q: { de: "Was heißt es, Salz der Erde zu sein?", sr: "Шта значи бити со земљи?" },
          a: { de: "Die Welt durch ein christliches Leben vor Verderben bewahren und ihr Geschmack, also Sinn, geben.", sr: "Чувати свет од кварења хришћанским животом и давати му укус, то јест смисао." } }
      ],
      practice: {
        de: "Wähle eine Seligpreisung für diese Woche. Übe sie konkret: zum Beispiel bei einem Streit bewusst sanftmütig antworten oder einem Bedürftigen helfen.",
        sr: "Изаберите једно блаженство за ову недељу. Вежбајте га конкретно: на пример, у свађи свесно одговорите кротко или помозите некоме ко је у потреби."
      },
      review: {
        de: "Die Seligpreisungen zeigen den Weg zur Gemeinschaft mit Gott: Demut, Reue, Sanftmut, Barmherzigkeit, Reinheit des Herzens und Friedfertigkeit.",
        sr: "Блаженства показују пут ка заједници са Богом: смирење, покајање, кротост, милосрђе, чистоту срца и миротворство."
      },
      quiz: [
        { q: { de: "Wem verheißt Christus, dass sie Gott schauen werden?", sr: "Коме Христос обећава да ће Бога видети?" },
          options: [{ de: "Den Sanftmütigen", sr: "Кроткима" }, { de: "Denen, die reinen Herzens sind", sr: "Чистима срцем" }, { de: "Den Friedensstiftern", sr: "Миротворцима" }], correct: 1 },
        { q: { de: "Wo werden die Seligpreisungen in der Liturgie oft gesungen?", sr: "Где се на Литургији често певају блаженства?" },
          options: [{ de: "Als drittes Antiphon", sr: "Као трећи антифон" }, { de: "Bei der Kommunion", sr: "При причешћу" }, { de: "Bei der Entlassung", sr: "На отпусту" }], correct: 0 },
        { q: { de: "Welche Kapitel umfasst die Bergpredigt?", sr: "Које главе обухвата Беседа на гори?" },
          options: [{ de: "Mt 1–3", sr: "Мт 1–3" }, { de: "Mt 5–7", sr: "Мт 5–7" }, { de: "Mt 13–15", sr: "Мт 13–15" }], correct: 1 },
        { q: { de: "Welchen Beruf hatte der Apostel Matthäus vorher?", sr: "Чиме се апостол Матеј бавио раније?" },
          options: [{ de: "Fischer", sr: "Рибар" }, { de: "Zöllner", sr: "Цариник" }, { de: "Zimmermann", sr: "Дрводеља" }], correct: 1 }
      ]
    },
    {
      id: "bib-lk15", book: "lk", order: 3,
      title: { de: "Der verlorene Sohn", sr: "Блудни син" },
      ref: { de: "Lukas 15,11–32", sr: "Лука 15,11–32" },
      intro: {
        de: "Der heilige Lukas war nach der Überlieferung Arzt und Begleiter des Apostels Paulus. Sein Evangelium betont die Barmherzigkeit Gottes gegenüber Sündern, Armen und Ausgestoßenen. Er schrieb auch die Apostelgeschichte.",
        sr: "Према предању, свети Лука је био лекар и сапутник апостола Павла. Његово Јеванђеље наглашава милосрђе Божије према грешницима, сиромашнима и одбаченима. Написао је и Дела апостолска."
      },
      introTag: "history",
      context: {
        de: "Pharisäer und Schriftgelehrte nahmen Anstoß daran, dass Christus mit Sündern aß. Darauf antwortet er mit drei Gleichnissen: vom verlorenen Schaf, von der verlorenen Drachme und vom verlorenen Sohn.",
        sr: "Фарисеји и књижевници су се саблажњавали што Христос једе са грешницима. На то Он одговара трима причама: о изгубљеној овци, о изгубљеној драхми и о блудном сину."
      },
      reading: [
        { ref: { de: "Lk 15,1–10", sr: "Лк 15,1–10" }, note: { de: "Das verlorene Schaf und die verlorene Drachme.", sr: "Изгубљена овца и изгубљена драхма." } },
        { ref: { de: "Lk 15,11–32", sr: "Лк 15,11–32" }, note: { de: "Der verlorene Sohn und sein älterer Bruder.", sr: "Блудни син и његов старији брат." } }
      ],
      summary: {
        de: "Ein jüngerer Sohn verlangt sein Erbe, zieht fort und verschwendet alles. In großer Not kommt er zu sich und kehrt zurück, um als Tagelöhner zu dienen. Der Vater sieht ihn schon von weitem, läuft ihm entgegen, umarmt ihn und feiert ein Fest. Der ältere Sohn ärgert sich darüber. Der Vater lädt auch ihn liebevoll ein, sich zu freuen.",
        sr: "Млађи син тражи свој део имања, одлази и све расипа. У великој невољи дође к себи и враћа се да служи као најамник. Отац га види још издалека, трчи му у сусрет, грли га и приређује гозбу. Старији син се љути због тога. Отац и њега с љубављу позива да се радује."
      },
      interp: {
        simple: {
          de: "Der Vater ist Gott. Er wartet auf jeden Menschen, der zurückkehrt. Umkehr beginnt damit, dass man „zu sich kommt“ und den ersten Schritt zurück zum Vater macht.",
          sr: "Отац је Бог. Он чека сваког човека који се враћа. Покајање почиње тиме што човек „дође к себи“ и учини први корак назад ка Оцу."
        },
        deeper: {
          de: "Die orthodoxe Kirche liest dieses Evangelium an einem Sonntag vor der Großen Fastenzeit, dem Sonntag vom verlorenen Sohn. Damit lädt sie die Gläubigen zur Umkehr ein. Die Sünde wird hier als Entfernung vom Vaterhaus gezeigt, als Verlust des wahren Lebens – nicht in erster Linie als juristische Schuld. Der ältere Bruder warnt davor, äußerlich treu, aber innerlich lieblos zu sein.",
          sr: "Православна Црква чита ово Јеванђеље у једну недељу пред Велики пост, у Недељу блудног сина. Тиме позива вернике на покајање. Грех је овде приказан као удаљавање од очевог дома, као губитак истинског живота – не пре свега као правна кривица. Старији брат упозорава да не будемо споља верни, а изнутра без љубави."
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus ist gekommen, um das Verlorene zu suchen und zu retten. Er öffnet uns den Weg zurück zum Vater. Im Mysterium der Beichte erfahren wir die Umarmung des Vaters.",
        sr: "Христос је дошао да потражи и спасе изгубљено. Он нам отвара пут назад ка Оцу. У Светој тајни исповести доживљавамо очев загрљај."
      },
      links: [
        { ref: { de: "Lk 19,10", sr: "Лк 19,10" }, note: { de: "Der Menschensohn sucht das Verlorene.", sr: "Син Човечији тражи изгубљено." } },
        { ref: { de: "Ps 50 (51)", sr: "Пс 50 (51)" }, note: { de: "Das große Bußgebet.", sr: "Велика покајна молитва." } },
        { ref: { de: "1 Joh 1,8–9", sr: "1 Јн 1,8–9" }, note: { de: "Wer seine Sünden bekennt, dem vergibt Gott.", sr: "Ко исповеда своје грехе, Бог му опрашта." } }
      ],
      fathers: {
        de: "Für diesen Abschnitt enthält die App noch keine einzeln überprüfte Väterstelle. Sicher belegt ist die liturgische Verwendung am Sonntag vom verlorenen Sohn im Triodion, dem Gottesdienstbuch der Vorfastenzeit und Fastenzeit.",
        sr: "За овај одељак апликација још не садржи појединачно проверено место из Светих Отаца. Поуздано је потврђена богослужбена употреба у Недељу блудног сина у Триоду, богослужбеној књизи припремног и Великог поста."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Wofür steht der Vater im Gleichnis?", sr: "Кога представља отац у причи?" },
          a: { de: "Für Gott, der barmherzig auf die Umkehr des Menschen wartet.", sr: "Бога, који милостиво чека покајање човека." } },
        { q: { de: "Was ist der Wendepunkt für den jüngeren Sohn?", sr: "Шта је прекретница за млађег сина?" },
          a: { de: "Er „kommt zu sich“, erkennt seinen Zustand und entschließt sich zur Rückkehr.", sr: "Он „дође к себи“, увиђа своје стање и одлучује да се врати." } },
        { q: { de: "Welche Gefahr zeigt der ältere Bruder?", sr: "Коју опасност показује старији брат?" },
          a: { de: "Äußere Pflichterfüllung ohne Liebe, Neid und Mangel an Freude über die Rettung anderer.", sr: "Спољашње испуњавање дужности без љубави, завист и недостатак радости због спасења других." } }
      ],
      practice: {
        de: "Bereite dich in Ruhe auf eine Beichte vor. Schreibe dir, wenn es dir hilft, in dein Notizbuch, wovon du umkehren möchtest – nur für dich.",
        sr: "У миру се припремите за исповест. Ако вам помаже, запишите у свеску од чега желите да се покајете – само за себе."
      },
      review: {
        de: "Gott wartet auf jeden Sünder wie ein liebender Vater. Umkehr heißt zurückkehren. Die Kirche liest das Gleichnis vor der Großen Fastenzeit.",
        sr: "Бог чека сваког грешника као отац који воли. Покајање значи вратити се. Црква чита ову причу пред Велики пост."
      },
      quiz: [
        { q: { de: "Wann liest die orthodoxe Kirche dieses Gleichnis besonders?", sr: "Када Православна Црква посебно чита ову причу?" },
          options: [{ de: "Am Sonntag vom verlorenen Sohn vor der Großen Fastenzeit", sr: "У Недељу блудног сина пред Велики пост" }, { de: "An Weihnachten", sr: "На Божић" }, { de: "Am Pfingstfest", sr: "На Духове" }], correct: 0 },
        { q: { de: "Was tut der Vater, als er den Sohn von weitem sieht?", sr: "Шта отац чини када види сина издалека?" },
          options: [{ de: "Er wartet, bis der Sohn sich entschuldigt", sr: "Чека да се син извини" }, { de: "Er läuft ihm entgegen und umarmt ihn", sr: "Трчи му у сусрет и грли га" }, { de: "Er schickt einen Knecht", sr: "Шаље слугу" }], correct: 1 },
        { q: { de: "Welcher Evangelist war nach der Überlieferung Arzt?", sr: "Који јеванђелист је по предању био лекар?" },
          options: [{ de: "Markus", sr: "Марко" }, { de: "Lukas", sr: "Лука" }, { de: "Johannes", sr: "Јован" }], correct: 1 }
      ]
    },
    {
      id: "bib-jn1", book: "jn", order: 4,
      title: { de: "Im Anfang war das Wort", sr: "У почетку беше Реч" },
      ref: { de: "Johannes 1,1–18", sr: "Јован 1,1–18" },
      intro: {
        de: "Das Johannesevangelium stammt nach der Überlieferung vom Apostel Johannes, dem „Jünger, den Jesus liebte“. Die Kirche nennt ihn „den Theologen“. Sein Evangelium zeigt besonders die göttliche Herrlichkeit Christi.",
        sr: "Према предању, Јеванђеље по Јовану написао је апостол Јован, „ученик кога је Исус љубио“. Црква га назива Богословом. Његово Јеванђеље посебно открива божанску славу Христову."
      },
      introTag: "history",
      context: {
        de: "Johannes beginnt nicht mit der Geburt in Bethlehem, sondern vor aller Zeit: beim ewigen Wort (griechisch Logos) Gottes. Der Anfang erinnert bewusst an den ersten Vers der Genesis.",
        sr: "Јован не почиње рођењем у Витлејему, него пре сваког времена: вечном Речју (грчки Логос) Божијом. Почетак свесно подсећа на први стих књиге Постања."
      },
      reading: [
        { ref: { de: "Joh 1,1–5", sr: "Јн 1,1–5" }, note: { de: "Das ewige Wort, durch das alles geschaffen ist.", sr: "Вечна Реч кроз коју је све створено." } },
        { ref: { de: "Joh 1,6–13", sr: "Јн 1,6–13" }, note: { de: "Johannes der Täufer als Zeuge des Lichts.", sr: "Јован Крститељ као сведок Светлости." } },
        { ref: { de: "Joh 1,14–18", sr: "Јн 1,14–18" }, note: { de: "Das Wort ist Fleisch geworden.", sr: "Реч постаде тело." } }
      ],
      summary: {
        de: "Das Wort war von Anfang an bei Gott und war selbst Gott. Durch das Wort ist alles geworden. In ihm ist das Leben und das Licht der Menschen. Johannes der Täufer kam, um von diesem Licht Zeugnis zu geben. Das Wort ist Mensch geworden und hat unter uns gewohnt. Wer es aufnimmt, dem gibt es die Macht, Kind Gottes zu werden.",
        sr: "Реч је од почетка била у Бога и сама је била Бог. Кроз Реч је све постало. У Њој је живот и светлост људима. Јован Крститељ је дошао да сведочи о тој Светлости. Реч је постала човек и настанила се међу нама. Онима који Је примају даје власт да постану деца Божија."
      },
      interp: {
        simple: {
          de: "Jesus Christus ist nicht nur ein großer Lehrer. Er ist der ewige Sohn Gottes, der Mensch geworden ist. Er war immer schon da – vor der Welt.",
          sr: "Исус Христос није само велики учитељ. Он је вечни Син Божији који је постао човек. Он је одувек постојао – пре света."
        },
        deeper: {
          de: "Dieser Abschnitt ist eine Grundlage des Glaubensbekenntnisses: Der Sohn ist eines Wesens mit dem Vater (Konzil von Nizäa 325). Die Menschwerdung bedeutet: Gott wird wahrer Mensch, ohne aufzuhören, wahrer Gott zu sein. Weil Gott Mensch wurde, kann der Mensch durch die Gnade an Gott Anteil bekommen – das ist die Grundlage der Lehre von der Theosis. Die Kirche liest diesen Abschnitt in der Göttlichen Liturgie am Osterfest.",
          sr: "Овај одељак је један од темеља Символа вере: Син је једносуштан Оцу (Сабор у Никеји 325). Оваплоћење значи: Бог постаје истински човек, не престајући да буде истински Бог. Пошто је Бог постао човек, човек благодаћу може да постане причасник Бога – то је основ учења о обожењу. Црква чита овај одељак на Светој Литургији на Васкрс."
        },
        tag: "dogma"
      },
      christ: {
        de: "Christus ist das Wort Gottes in Person. In ihm sehen wir den Vater. Durch ihn werden wir zu Kindern Gottes – aus Gnade, nicht aus eigener Kraft.",
        sr: "Христос је Реч Божија у личности. У Њему видимо Оца. Кроз Њега постајемо деца Божија – по благодати, а не сопственом снагом."
      },
      links: [
        { ref: { de: "Gen 1,1–3", sr: "Пост 1,1–3" }, note: { de: "Im Anfang schuf Gott; Gott sprach.", sr: "У почетку створи Бог; рече Бог." } },
        { ref: { de: "Joh 14,9", sr: "Јн 14,9" }, note: { de: "Wer mich sieht, sieht den Vater.", sr: "Ко види мене, види Оца." } },
        { ref: { de: "Phil 2,5–11", sr: "Флп 2,5–11" }, note: { de: "Christus entäußerte sich und wurde Mensch.", sr: "Христос понизи себе и постаде човек." } },
        { ref: { de: "Kol 1,15–17", sr: "Кол 1,15–17" }, note: { de: "In ihm ist alles geschaffen.", sr: "У Њему је све саздано." } }
      ],
      fathers: {
        de: "Der heilige Athanasius der Große erklärt in seiner Schrift „Über die Menschwerdung des Wortes“, warum das Wort Mensch wurde: um den Menschen vom Verderben zu befreien und ihn zu erneuern. Der heilige Johannes Chrysostomus legt das Johannesevangelium in seinen Homilien aus. Beide Werke sind frei zugänglich (siehe Bibliothek).",
        sr: "Свети Атанасије Велики у спису „О оваплоћењу Логоса“ објашњава зашто је Реч постала човек: да ослободи човека од пропадљивости и да га обнови. Свети Јован Златоуст тумачи Јеванђеље по Јовану у својим беседама. Оба дела су слободно доступна (види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was bedeutet „Logos“?", sr: "Шта значи „Логос“?" },
          a: { de: "Wort, Vernunft, Sinn. Bei Johannes ist es der ewige Sohn Gottes.", sr: "Реч, разум, смисао. Код Јована то је вечни Син Божији." } },
        { q: { de: "Warum erinnert der Anfang an die Genesis?", sr: "Зашто почетак подсећа на књигу Постања?" },
          a: { de: "Weil Johannes zeigen will: Durch dasselbe Wort, durch das Gott die Welt erschuf, kommt nun die neue Schöpfung.", sr: "Зато што Јован жели да покаже: кроз исту Реч кроз коју је Бог створио свет, сада долази ново стварање." } },
        { q: { de: "Was ist die Menschwerdung?", sr: "Шта је оваплоћење?" },
          a: { de: "Der ewige Sohn Gottes nimmt die volle menschliche Natur an und wird wahrer Mensch, ohne aufzuhören, Gott zu sein.", sr: "Вечни Син Божији прима пуну људску природу и постаје истински човек, не престајући да буде Бог." } }
      ],
      practice: {
        de: "Lies den Abschnitt langsam zweimal. Achte auf das Wort „Licht“. Bitte Christus im Gebet, Licht in einen dunklen Bereich deines Lebens zu bringen.",
        sr: "Прочитајте одељак полако два пута. Обратите пажњу на реч „светлост“. Молите Христа да унесе светлост у неки таман део вашег живота."
      },
      review: {
        de: "Das Wort ist ewig, ist Gott und ist Mensch geworden. Durch Christus werden wir Kinder Gottes. Dieser Abschnitt wird an Ostern gelesen.",
        sr: "Реч је вечна, Бог је и постала је човек. Кроз Христа постајемо деца Божија. Овај одељак се чита на Васкрс."
      },
      quiz: [
        { q: { de: "An welchem Fest wird Joh 1,1–17 in der Liturgie gelesen?", sr: "На који празник се на Литургији чита Јн 1,1–17?" },
          options: [{ de: "Ostern (Pascha)", sr: "Васкрс (Пасха)" }, { de: "Theophanie", sr: "Богојављење" }, { de: "Kreuzerhöhung", sr: "Крстовдан" }], correct: 0 },
        { q: { de: "Welches Konzil bekannte den Sohn als „eines Wesens mit dem Vater“?", sr: "Који сабор је исповедио да је Син „једносуштан Оцу“?" },
          options: [{ de: "Nizäa 325", sr: "Никеја 325." }, { de: "Chalcedon 451", sr: "Халкидон 451." }, { de: "Ephesus 431", sr: "Ефес 431." }], correct: 0 },
        { q: { de: "Welchen Beinamen gibt die Kirche dem Apostel Johannes?", sr: "Који надимак Црква даје апостолу Јовану?" },
          options: [{ de: "Der Theologe", sr: "Богослов" }, { de: "Der Täufer", sr: "Крститељ" }, { de: "Der Große", sr: "Велики" }], correct: 0 },
        { q: { de: "Wer schrieb „Über die Menschwerdung des Wortes“?", sr: "Ко је написао „О оваплоћењу Логоса“?" },
          options: [{ de: "Johannes von Damaskus", sr: "Јован Дамаскин" }, { de: "Athanasius der Große", sr: "Атанасије Велики" }, { de: "Basilius der Große", sr: "Василије Велики" }], correct: 1 }
      ]
    },
    {
      id: "bib-ps50", book: "ps", order: 5,
      title: { de: "Psalm 50 – das große Bußgebet", sr: "Псалам 50 – велика покајна молитва" },
      ref: { de: "Psalm 50 (51)", sr: "Псалам 50 (51)" },
      intro: {
        de: "Die Psalmen sind das Gebetbuch Israels und der Kirche. In jedem orthodoxen Gottesdienst werden Psalmen gebetet. Psalm 50 gehört zu den bekanntesten und wird täglich in den Gebeten der Kirche verwendet.",
        sr: "Псалми су молитвеник Израиља и Цркве. На сваком православном богослужењу читају се псалми. Псалам 50 спада у најпознатије и свакодневно се употребљава у молитвама Цркве."
      },
      introTag: "history",
      context: {
        de: "Nach der Überschrift des Psalms betete ihn König David, nachdem der Prophet Natan ihn wegen seiner Sünde mit Batseba und des Mordes an Urija zurechtgewiesen hatte (2. Buch der Königtümer, Kapitel 11–12; in anderen Ausgaben 2. Samuel).",
        sr: "Према натпису псалма, молио га је цар Давид пошто га је пророк Натан прекорео због греха са Вирсавијом и убиства Урије (Друга књига Царстава, глава 11–12)."
      },
      reading: [
        { ref: { de: "2 Kön (2 Sam) 12,1–13", sr: "2 Цар 12,1–13" }, note: { de: "Natan konfrontiert David.", sr: "Натан изобличава Давида." } },
        { ref: { de: "Ps 50 (51), ganz", sr: "Пс 50 (51), цео" }, note: { de: "Langsam und betend lesen.", sr: "Читати полако и молитвено." } }
      ],
      summary: {
        de: "David bittet Gott um Erbarmen nach seiner großen Barmherzigkeit. Er bekennt seine Schuld offen, ohne sich zu rechtfertigen. Er bittet um ein reines Herz und einen neuen, festen Geist und darum, dass Gott seinen Heiligen Geist nicht von ihm nimmt. Das Opfer, das Gott gefällt, ist ein zerknirschter und demütiger Geist.",
        sr: "Давид моли Бога за милост по Његовој великој милости. Отворено исповеда своју кривицу, не оправдавајући се. Моли за чисто срце и нов, постојан дух, и да Бог не одузме од њега Духа Светога. Жртва која је Богу угодна јесте скрушен и смирен дух."
      },
      interp: {
        simple: {
          de: "Dieser Psalm lehrt uns, ehrlich vor Gott zu sein. Wir müssen unsere Sünden nicht verstecken. Gott freut sich über ein demütiges Herz und vergibt.",
          sr: "Овај псалам нас учи да будемо искрени пред Богом. Не морамо да кријемо своје грехе. Бог се радује смиреном срцу и опрашта."
        },
        deeper: {
          de: "Die Bitte um ein „reines Herz“ verbindet den Psalm mit der Seligpreisung „Selig, die reinen Herzens sind“. Die Bitte um den Heiligen Geist zeigt, dass Umkehr nicht nur eigene Anstrengung ist, sondern Mitwirken mit der Gnade Gottes (Synergie). Psalm 50 wird in vielen orthodoxen Gebetsordnungen gebetet, etwa im Morgengottesdienst und in der Vorbereitung auf die Kommunion.",
          sr: "Молба за „чисто срце“ повезује псалам са блаженством „Блажени чисти срцем“. Молба за Духа Светога показује да покајање није само сопствени напор, него сарадња са благодаћу Божијом (синергија). Псалам 50 се моли у многим православним молитвеним поретцима, на пример на јутрењу и у припреми за причешће."
        },
        tag: "opinion"
      },
      christ: {
        de: "Was David erbittet, schenkt Christus in Fülle: die Vergebung der Sünden und den Heiligen Geist. Im Licht des Neuen Testaments beten Christen diesen Psalm mit dem Vertrauen auf das Kreuz und die Auferstehung.",
        sr: "Оно за шта Давид моли, Христос дарује у пуноћи: опроштај грехова и Духа Светога. У светлости Новог Завета хришћани моле овај псалам са поверењем у Крст и Васкрсење."
      },
      links: [
        { ref: { de: "Mt 5,8", sr: "Мт 5,8" }, note: { de: "Selig, die reinen Herzens sind.", sr: "Блажени чисти срцем." } },
        { ref: { de: "Ez 36,26", sr: "Јез 36,26" }, note: { de: "Gott verheißt ein neues Herz und einen neuen Geist.", sr: "Бог обећава ново срце и нов дух." } },
        { ref: { de: "Lk 18,13", sr: "Лк 18,13" }, note: { de: "Das Gebet des Zöllners.", sr: "Молитва цариника." } }
      ],
      fathers: {
        de: "Der heilige Athanasius der Große schrieb einen Brief an Marcellinus über den Gebrauch der Psalmen. Er erklärt, dass jeder Mensch in den Psalmen Worte für seine eigene Lage findet – auch für die Reue. Der Brief ist auf Deutsch in der Bibliothek der Kirchenväter frei zugänglich.",
        sr: "Свети Атанасије Велики написао је Посланицу Маркелину о употреби псалама. Он објашњава да сваки човек у псалмима налази речи за своје стање – и за покајање. Посланица је слободно доступна на немачком у Библиотеци Отаца Цркве и на енглеском."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum ist die Zählung „50 (51)“ angegeben?", sr: "Зашто је наведена нумерација „50 (51)“?" },
          a: { de: "Die orthodoxe Kirche folgt der Septuaginta-Zählung (50). Viele andere Ausgaben zählen nach dem hebräischen Text (51).", sr: "Православна Црква прати нумерацију Септуагинте (50). Многа друга издања броје према јеврејском тексту (51)." } },
        { q: { de: "Welches Opfer gefällt Gott nach dem Psalm?", sr: "Која жртва је, према псалму, угодна Богу?" },
          a: { de: "Ein zerknirschter, demütiger Geist und ein reuiges Herz.", sr: "Скрушен, смирен дух и покајничко срце." } },
        { q: { de: "Was ist Synergie?", sr: "Шта је синергија?" },
          a: { de: "Das Zusammenwirken der menschlichen Freiheit mit der Gnade Gottes.", sr: "Сарадња људске слободе са благодаћу Божијом." } }
      ],
      practice: {
        de: "Bete eine Woche lang jeden Abend langsam einige Verse aus Psalm 50. Halte bei einem Vers inne, der dich besonders berührt.",
        sr: "Недељу дана сваке вечери полако молите неколико стихова из 50. псалма. Застаните код стиха који вас посебно дотиче."
      },
      review: {
        de: "Psalm 50 ist das Gebet der Reue Davids. Er lehrt Ehrlichkeit vor Gott, Demut und Vertrauen auf seine Barmherzigkeit.",
        sr: "Псалам 50 је Давидова покајна молитва. Учи искрености пред Богом, смирењу и поверењу у Његову милост."
      },
      quiz: [
        { q: { de: "Welcher Prophet wies David zurecht?", sr: "Који пророк је прекорео Давида?" },
          options: [{ de: "Elija", sr: "Илија" }, { de: "Natan", sr: "Натан" }, { de: "Samuel", sr: "Самуило" }], correct: 1 },
        { q: { de: "Nach welcher Zählung nummeriert die orthodoxe Kirche die Psalmen?", sr: "По којој нумерацији Православна Црква броји псалме?" },
          options: [{ de: "Septuaginta", sr: "Септуагинта" }, { de: "Vulgata", sr: "Вулгата" }, { de: "Nach freier Wahl", sr: "По слободном избору" }], correct: 0 },
        { q: { de: "Wer schrieb einen Brief über den Gebrauch der Psalmen an Marcellinus?", sr: "Ко је написао посланицу Маркелину о употреби псалама?" },
          options: [{ de: "Athanasius der Große", sr: "Атанасије Велики" }, { de: "Isaak der Syrer", sr: "Исак Сирин" }, { de: "Kyrill von Alexandrien", sr: "Кирило Александријски" }], correct: 0 }
      ]
    },
    {
      id: "bib-mt6", book: "mt", order: 6,
      title: { de: "Das Gebet des Herrn", sr: "Молитва Господња" },
      ref: { de: "Matthäus 6,5–15", sr: "Матеј 6,5–15" },
      intro: {
        de: "Mitten in der Bergpredigt lehrt Christus seine Jünger beten. Das Vaterunser ist das Gebet, das Christus selbst uns gegeben hat. Darum nennt die Kirche es „Gebet des Herrn“.",
        sr: "Усред Беседе на гори Христос учи своје ученике да се моле. Оче наш је молитва коју нам је дао сам Христос. Зато је Црква назива „Молитва Господња“."
      },
      introTag: "history",
      context: {
        de: "Zur Zeit Christi beteten manche Menschen öffentlich, um gesehen und gelobt zu werden. Christus stellt dem das verborgene, ehrliche Gebet gegenüber, das allein auf Gott ausgerichtet ist.",
        sr: "У Христово време неки људи су се молили јавно да би их други видели и хвалили. Христос томе супротставља скривену, искрену молитву, која је усмерена само ка Богу."
      },
      reading: [
        { ref: { de: "Mt 6,5–8", sr: "Мт 6,5–8" }, note: { de: "Beten im Verborgenen, ohne viele leere Worte.", sr: "Молитва у скровитости, без многих празних речи." } },
        { ref: { de: "Mt 6,9–13", sr: "Мт 6,9–13" }, note: { de: "Das Vaterunser.", sr: "Оче наш." } },
        { ref: { de: "Mt 6,14–15", sr: "Мт 6,14–15" }, note: { de: "Vergebung empfangen und Vergebung schenken.", sr: "Примити опроштај и опраштати." } }
      ],
      summary: {
        de: "Christus sagt: Betet nicht, um von Menschen gesehen zu werden, sondern geh in deine Kammer und bete zu deinem Vater im Verborgenen. Macht keine langen, leeren Worte, denn der Vater weiß, was ihr braucht. Dann lehrt er das Vaterunser: Gott wird als Vater angesprochen; wir bitten, dass sein Name geheiligt werde, sein Reich komme und sein Wille geschehe; wir bitten um das tägliche Brot, um Vergebung unserer Schuld, wie auch wir vergeben, und um Bewahrung vor der Versuchung und vor dem Bösen. Zum Schluss betont Christus: Wer anderen vergibt, dem vergibt auch der Vater.",
        sr: "Христос каже: не молите се да вас људи виде, него уђи у своју собу и помоли се свом Оцу у скровитости. Не говорите много празних речи, јер Отац зна шта вам је потребно. Затим учи Оче наш: Богу се обраћамо као Оцу; молимо да се свети име Његово, да дође Царство Његово и да буде воља Његова; молимо за хлеб наш насушни, за опроштај наших дугова, као што и ми опраштамо, и да нас сачува од искушења и од злога. На крају Христос наглашава: ко опрашта другима, њему ће опростити и Отац."
      },
      interp: {
        simple: {
          de: "Christus schenkt uns das Recht, Gott „Vater“ zu nennen. Das Vaterunser zeigt, was beim Beten zuerst kommt: Gottes Ehre und sein Reich – danach unsere Bitten. Und es verbindet das Gebet untrennbar mit der Vergebung.",
          sr: "Христос нам дарује право да Бога називамо „Оче“. Оче наш показује шта у молитви долази прво: слава Божија и Његово Царство – а затим наше молбе. И неодвојиво повезује молитву са опраштањем."
        },
        deeper: {
          de: "Gott „unser Vater“ zu nennen ist ein Geschenk der Gnade: Durch die Taufe werden wir in Christus zu Kindern Gottes angenommen. Darum betet die Kirche das Vaterunser in der Göttlichen Liturgie unmittelbar vor der Kommunion, und der Priester bittet zuvor, dass wir es „mit Freimut“ beten dürfen. Das „tägliche Brot“ verstehen die Väter sowohl als die Nahrung, die wir zum Leben brauchen, als auch als das Brot des Lebens, Christus selbst in der Eucharistie. Die Bitte um Vergebung macht deutlich: Wer nicht vergibt, verschließt sich selbst der Vergebung Gottes.",
          sr: "Називати Бога „Оче наш“ дар је благодати: кроз крштење бивамо у Христу усиновљени као деца Божија. Зато Црква на Светој Литургији моли Оче наш непосредно пред причешће, а свештеник претходно моли да нас Бог удостоји да је молимо „слободно“. „Хлеб насушни“ Оци схватају и као храну потребну за живот и као хлеб живота, самог Христа у Евхаристији. Молба за опроштај показује: ко не опрашта, сам себи затвара Божији опроштај."
        },
        tag: "opinion"
      },
      christ: {
        de: "Nur weil Christus der ewige Sohn des Vaters ist, können wir in ihm Gott „Vater“ nennen. Er hat das Reich Gottes gebracht, um das wir bitten, und er gibt sich selbst als Brot des Lebens.",
        sr: "Само зато што је Христос вечни Син Очев, можемо у Њему да Бога зовемо „Оче“. Он је донео Царство Божије за које се молимо, и даје самог себе као хлеб живота."
      },
      links: [
        { ref: { de: "Lk 11,1–4", sr: "Лк 11,1–4" }, note: { de: "Das Vaterunser bei Lukas.", sr: "Оче наш код Луке." } },
        { ref: { de: "Röm 8,15", sr: "Рим 8,15" }, note: { de: "Der Geist der Kindschaft, in dem wir „Abba, Vater“ rufen.", sr: "Дух усиновљења у коме вапијемо „Ава, Оче“." } },
        { ref: { de: "Joh 6,35", sr: "Јн 6,35" }, note: { de: "Ich bin das Brot des Lebens.", sr: "Ја сам хлеб живота." } },
        { ref: { de: "Mt 18,21–35", sr: "Мт 18,21–35" }, note: { de: "Das Gleichnis vom unbarmherzigen Knecht.", sr: "Прича о немилостивом слуги." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus legt das Vaterunser in seinen Homilien zum Matthäusevangelium aus. Der hl. Gregor von Nyssa hielt fünf Predigten über das Vaterunser. Die Homilien des hl. Chrysostomus sind in englischer Übersetzung frei zugänglich (siehe Bibliothek); für die Predigten des hl. Gregor wurde in dieser Version kein freier Link geprüft.",
        sr: "Свети Јован Златоуст тумачи Оче наш у својим беседама на Јеванђеље по Матеју. Свети Григорије Ниски одржао је пет беседа о Молитви Господњој. Златоустове беседе слободно су доступне у енглеском преводу (види библиотеку); за беседе светог Григорија у овом издању није проверена слободна веза."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum sollen wir „im Verborgenen“ beten?", sr: "Зашто треба да се молимо „у скровитости“?" },
          a: { de: "Damit das Gebet allein auf Gott ausgerichtet ist und nicht auf das Lob von Menschen.", sr: "Да би молитва била усмерена само ка Богу, а не ка похвали људи." } },
        { q: { de: "Welche Bitten stehen im Vaterunser am Anfang?", sr: "Које молбе стоје на почетку Оче наша?" },
          a: { de: "Die Bitten um Gottes Namen, sein Reich und seinen Willen – erst danach die Bitten für unsere Bedürfnisse.", sr: "Молбе за име Божије, Његово Царство и Његову вољу – тек потом молбе за наше потребе." } },
        { q: { de: "Wann wird das Vaterunser in der Göttlichen Liturgie gebetet?", sr: "Када се на Светој Литургији моли Оче наш?" },
          a: { de: "Unmittelbar vor der Kommunion.", sr: "Непосредно пред причешће." } },
        { q: { de: "Warum ist Vergebung mit dem Gebet verbunden?", sr: "Зашто је опраштање повезано са молитвом?" },
          a: { de: "Weil wir um Vergebung bitten, „wie auch wir vergeben“. Wer nicht vergibt, verschließt sich selbst der Vergebung Gottes.", sr: "Зато што молимо за опроштај „као што и ми опраштамо“. Ко не опрашта, сам себи затвара Божији опроштај." } }
      ],
      practice: {
        de: "Bete das Vaterunser heute einmal sehr langsam und halte nach jeder Bitte kurz inne. Denke bei der Bitte um Vergebung an einen konkreten Menschen, dem du vergeben möchtest.",
        sr: "Помолите се данас Оче наш веома полако и после сваке молбе кратко застаните. Код молбе за опроштај помислите на конкретног човека коме желите да опростите."
      },
      review: {
        de: "Christus lehrt ehrliches, verborgenes Gebet und schenkt uns das Vaterunser. Wir nennen Gott Vater, suchen zuerst sein Reich und vergeben, wie uns vergeben wird.",
        sr: "Христос учи искреној, скривеној молитви и дарује нам Оче наш. Бога зовемо Оцем, прво иштемо Његово Царство и опраштамо као што се и нама опрашта."
      },
      quiz: [
        { q: { de: "Wo betet die Kirche das Vaterunser in der Liturgie?", sr: "Где Црква на Литургији моли Оче наш?" },
          options: [{ de: "Unmittelbar vor der Kommunion", sr: "Непосредно пред причешће" }, { de: "Ganz am Anfang", sr: "На самом почетку" }, { de: "Nach der Entlassung", sr: "После отпуста" }], correct: 0 },
        { q: { de: "In welchem Evangelium steht das Vaterunser außer bei Matthäus?", sr: "У ком Јеванђељу се осим код Матеја налази Оче наш?" },
          options: [{ de: "Lukas", sr: "Код Луке" }, { de: "Markus", sr: "Код Марка" }, { de: "Johannes", sr: "Код Јована" }], correct: 0 },
        { q: { de: "Was sagt Christus nach dem Vaterunser besonders deutlich?", sr: "Шта Христос после Оче наша посебно наглашава?" },
          options: [{ de: "Wer anderen vergibt, dem vergibt auch der Vater", sr: "Ко опрашта другима, опростиће и њему Отац" }, { de: "Man soll möglichst laut beten", sr: "Треба се молити што гласније" }, { de: "Man soll nur im Tempel beten", sr: "Треба се молити само у храму" }], correct: 0 },
        { q: { de: "Wer hielt fünf Predigten über das Vaterunser?", sr: "Ко је одржао пет беседа о Молитви Господњој?" },
          options: [{ de: "Gregor von Nyssa", sr: "Григорије Ниски" }, { de: "Ephräm der Syrer", sr: "Јефрем Сирин" }, { de: "Maximus der Bekenner", sr: "Максим Исповедник" }], correct: 0 }
      ]
    },
    {
      id: "bib-lk1", book: "lk", order: 7,
      title: { de: "Die Verkündigung an die Gottesgebärerin", sr: "Благовести Пресвете Богородице" },
      ref: { de: "Lukas 1,26–38", sr: "Лука 1,26–38" },
      intro: {
        de: "Der hl. Lukas berichtet ausführlich über die Ereignisse vor der Geburt Christi. Die Kirche hat diese Erzählungen besonders sorgfältig bewahrt. Die Verkündigung ist der Anfang unseres Heils.",
        sr: "Свети Лука опширно приповеда о догађајима пре Христовог рођења. Црква је ове повести посебно брижљиво чувала. Благовести су почетак нашег спасења."
      },
      introTag: "history",
      context: {
        de: "Sechs Monate nachdem Elisabeth, eine Verwandte Marias, mit Johannes dem Täufer schwanger geworden war, sendet Gott den Erzengel Gabriel nach Nazareth zu einer Jungfrau namens Maria, die mit Josef verlobt war. Die Propheten hatten verheißen, dass der Messias aus dem Haus Davids kommen werde.",
        sr: "Шест месеци пошто је Јелисавета, Маријина рођака, зачела Јована Крститеља, Бог шаље архангела Гаврила у Назарет девојци по имену Марија, која је била заручена са Јосифом. Пророци су обећали да ће Месија доћи из дома Давидовог."
      },
      reading: [
        { ref: { de: "Lk 1,26–33", sr: "Лк 1,26–33" }, note: { de: "Der Gruß des Engels und die Verheißung.", sr: "Анђелов поздрав и обећање." } },
        { ref: { de: "Lk 1,34–38", sr: "Лк 1,34–38" }, note: { de: "Marias Frage und ihre Zustimmung.", sr: "Маријино питање и њен пристанак." } }
      ],
      summary: {
        de: "Der Engel grüßt Maria als die Begnadete, mit der der Herr ist. Sie erschrickt. Der Engel sagt, sie werde einen Sohn empfangen und ihn Jesus nennen; er werde Sohn des Höchsten heißen, und sein Reich werde kein Ende haben. Maria fragt, wie das geschehen soll. Der Engel antwortet: Der Heilige Geist wird über dich kommen, und die Kraft des Höchsten wird dich überschatten; denn bei Gott ist nichts unmöglich. Maria antwortet, dass sie die Magd des Herrn ist und es ihr nach seinem Wort geschehen soll.",
        sr: "Анђео поздравља Марију као благодатну, са којом је Господ. Она се уплаши. Анђео каже да ће зачети Сина и наденути Му име Исус; зваће се Син Вишњега и Његовом Царству неће бити краја. Марија пита како ће то бити. Анђео одговара: Дух Свети сићи ће на тебе и сила Вишњега осениће те; јер у Бога ништа није немогуће. Марија одговара да је слушкиња Господња и нека јој буде по Његовој речи."
      },
      interp: {
        simple: {
          de: "Gott zwingt niemanden. Er wartet auf die freie Zustimmung Marias. Durch ihr „Ja“ wird Gott Mensch. Darum ehren wir sie als Gottesgebärerin.",
          sr: "Бог никога не приморава. Он чека Маријин слободни пристанак. Њеним „да“ Бог постаје човек. Зато је поштујемо као Богородицу."
        },
        deeper: {
          de: "Die Menschwerdung geschieht durch den Heiligen Geist, ohne Zutun eines Mannes – das bekennt die Kirche im Glaubensbekenntnis. Marias freie Zustimmung ist ein Beispiel für Synergie: das Zusammenwirken der menschlichen Freiheit mit Gottes Gnade. Die Kirche feiert das Fest der Verkündigung am 25. März (im julianischen Kalender, bürgerlich 7. April) und besingt es als Anfang unseres Heils. Alte Väter wie der hl. Irenäus von Lyon stellen Maria der Eva gegenüber: Was durch den Ungehorsam Evas verknotet wurde, wird durch den Gehorsam Marias gelöst.",
          sr: "Оваплоћење се збива Духом Светим, без учешћа мушкарца – то Црква исповеда у Символу вере. Маријин слободни пристанак пример је синергије: сарадње људске слободе са Божијом благодаћу. Црква празнује Благовести 25. марта (по јулијанском календару, по грађанском 7. априла) и опева их као почетак нашег спасења. Древни Оци, попут светог Иринеја Лионског, супротстављају Марију Еви: што је Евином непослушношћу било заплетено, Маријином послушношћу се разрешава."
        },
        tag: "dogma"
      },
      christ: {
        de: "Christus empfängt seine menschliche Natur von Maria. Er ist der verheißene König aus dem Haus Davids, dessen Reich kein Ende hat, und zugleich der Sohn des Höchsten.",
        sr: "Христос прима своју људску природу од Марије. Он је обећани Цар из дома Давидовог, чијем Царству неће бити краја, и уједно Син Вишњега."
      },
      links: [
        { ref: { de: "Jes 7,14", sr: "Ис 7,14" }, note: { de: "Die Jungfrau wird empfangen und einen Sohn gebären.", sr: "Дјева ће зачети и родити Сина." } },
        { ref: { de: "2 Kön (2 Sam) 7,12–16", sr: "2 Цар 7,12–16" }, note: { de: "Verheißung an David: ein ewiges Königtum.", sr: "Обећање Давиду: вечно царство." } },
        { ref: { de: "Gen 3,15", sr: "Пост 3,15" }, note: { de: "Der Nachkomme der Frau.", sr: "Семе жене." } },
        { ref: { de: "Lk 1,46–55", sr: "Лк 1,46–55" }, note: { de: "Der Lobgesang Marias.", sr: "Песма Богородице." } }
      ],
      fathers: {
        de: "Der hl. Irenäus von Lyon (2. Jahrhundert) stellt in seinem Werk „Gegen die Häresien“ Maria als neue Eva dar: Ihr Gehorsam macht den Ungehorsam Evas wieder gut. Das Werk ist in englischer Übersetzung frei zugänglich (ANF Band 1, siehe Bibliothek).",
        sr: "Свети Иринеј Лионски (2. век) у делу „Против јереси“ приказује Марију као нову Еву: њена послушност исправља Евину непослушност. Дело је слободно доступно у енглеском преводу (ANF, том 1, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum ist Marias Zustimmung wichtig?", sr: "Зашто је важан Маријин пристанак?" },
          a: { de: "Weil Gott die menschliche Freiheit achtet. Die Menschwerdung geschieht im Zusammenwirken von Gottes Gnade und Marias freiem Ja.", sr: "Зато што Бог поштује људску слободу. Оваплоћење се збива у сарадњи Божије благодати и Маријиног слободног пристанка." } },
        { q: { de: "Wann feiert die Kirche die Verkündigung?", sr: "Када Црква празнује Благовести?" },
          a: { de: "Am 25. März (julianisch; bürgerlich 7. April).", sr: "Двадесет петог марта (по јулијанском; по грађанском 7. априла)." } },
        { q: { de: "Was bedeutet „Maria als neue Eva“?", sr: "Шта значи „Марија као нова Ева“?" },
          a: { de: "Eva wandte sich durch Ungehorsam von Gott ab; Maria öffnete durch ihren Gehorsam den Weg für die Menschwerdung und das Heil.", sr: "Ева се непослушношћу одвратила од Бога; Марија је својом послушношћу отворила пут оваплоћењу и спасењу." } }
      ],
      practice: {
        de: "Wenn du vor einer Entscheidung stehst, bete wie Maria: Herr, dein Wille geschehe. Frage dich ehrlich, was Gott in dieser Lage von dir erwartet.",
        sr: "Када стојите пред неком одлуком, молите се као Марија: Господе, нека буде воља Твоја. Искрено се упитајте шта Бог у тој ситуацији очекује од вас."
      },
      review: {
        de: "Der Erzengel Gabriel verkündet Maria die Geburt des Sohnes Gottes. Durch den Heiligen Geist und Marias freies Ja wird Gott Mensch. Sie ist die Gottesgebärerin.",
        sr: "Архангел Гаврило благовести Марији рођење Сина Божијег. Духом Светим и Маријиним слободним пристанком Бог постаје човек. Она је Богородица."
      },
      quiz: [
        { q: { de: "Welcher Erzengel wurde zu Maria gesandt?", sr: "Који архангел је послан Марији?" },
          options: [{ de: "Gabriel", sr: "Гаврило" }, { de: "Michael", sr: "Михаило" }, { de: "Raphael", sr: "Рафаило" }], correct: 0 },
        { q: { de: "In welcher Stadt lebte Maria bei der Verkündigung?", sr: "У ком граду је Марија живела у време Благовести?" },
          options: [{ de: "Nazareth", sr: "Назарет" }, { de: "Bethlehem", sr: "Витлејем" }, { de: "Jerusalem", sr: "Јерусалим" }], correct: 0 },
        { q: { de: "Welcher Vater der Kirche nannte Maria die „neue Eva“?", sr: "Који Отац Цркве је Марију назвао „новом Евом“?" },
          options: [{ de: "Irenäus von Lyon", sr: "Иринеј Лионски" }, { de: "Johannes von Damaskus", sr: "Јован Дамаскин" }, { de: "Basilius der Große", sr: "Василије Велики" }], correct: 0 },
        { q: { de: "Welche Prophezeiung spricht von der Jungfrau, die einen Sohn gebiert?", sr: "Које пророштво говори о Дјеви која ће родити Сина?" },
          options: [{ de: "Jes 7,14", sr: "Ис 7,14" }, { de: "Jona 2,1", sr: "Јона 2,1" }, { de: "Dan 3,1", sr: "Дан 3,1" }], correct: 0 }
      ]
    },
    {
      id: "bib-lk24", book: "lk", order: 8,
      title: { de: "Die Jünger von Emmaus", sr: "Ученици на путу за Емаус" },
      ref: { de: "Lukas 24,13–35", sr: "Лука 24,13–35" },
      intro: {
        de: "Am Ende seines Evangeliums berichtet der hl. Lukas, wie der auferstandene Christus zwei Jüngern begegnet. Nach der Überlieferung hieß einer von ihnen Kleopas.",
        sr: "На крају свог Јеванђеља свети Лука приповеда како васкрсли Христос среће двојицу ученика. Према Јеванђељу, један од њих звао се Клеопа."
      },
      introTag: "history",
      context: {
        de: "Es ist der Tag der Auferstehung. Die Frauen haben das leere Grab gefunden, doch die Jünger sind verwirrt und traurig. Zwei von ihnen gehen von Jerusalem in das Dorf Emmaus.",
        sr: "То је дан Васкрсења. Жене су нашле празан гроб, али су ученици збуњени и тужни. Двојица од њих иду из Јерусалима у село Емаус."
      },
      reading: [
        { ref: { de: "Lk 24,13–27", sr: "Лк 24,13–27" }, note: { de: "Christus geht unerkannt mit und erklärt die Schrift.", sr: "Христос непрепознат иде са њима и тумачи Писмо." } },
        { ref: { de: "Lk 24,28–35", sr: "Лк 24,28–35" }, note: { de: "Sie erkennen ihn beim Brechen des Brotes.", sr: "Препознају Га у ломљењу хлеба." } }
      ],
      summary: {
        de: "Unterwegs gesellt sich Jesus zu den beiden Jüngern, doch sie erkennen ihn nicht. Sie erzählen ihm traurig von der Kreuzigung und vom leeren Grab. Christus erklärt ihnen, ausgehend von Mose und allen Propheten, was in der ganzen Schrift über ihn gesagt ist. In Emmaus bitten sie ihn zu bleiben. Als er beim Mahl das Brot nimmt, den Segen spricht, es bricht und ihnen gibt, gehen ihnen die Augen auf, und sie erkennen ihn – da entschwindet er. Sie sagen zueinander, dass ihr Herz brannte, als er ihnen die Schrift öffnete, und kehren noch in derselben Stunde nach Jerusalem zurück, um es den Aposteln zu verkünden.",
        sr: "На путу Исус им се придружује, али Га они не препознају. Тужно Му причају о распећу и празном гробу. Христос им објашњава, почевши од Мојсија и свих пророка, шта је у свему Писму речено о Њему. У Емаусу Га моле да остане. Када за трпезом узме хлеб, благослови, преломи и да им, отворише им се очи и препознаше Га – а Он постаде невидљив. Говоре један другом да им је срце горело док им је отварао Писмо, и истог часа се враћају у Јерусалим да то објаве апостолима."
      },
      interp: {
        simple: {
          de: "Der Auferstandene geht auch heute mit uns, selbst wenn wir traurig sind und ihn nicht erkennen. Wir begegnen ihm im Wort der Schrift und beim Brechen des Brotes.",
          sr: "Васкрсли иде са нама и данас, чак и када смо тужни и не препознајемо Га. Срећемо Га у речи Писма и у ломљењу хлеба."
        },
        deeper: {
          de: "Der Ablauf der Erzählung erinnert an die Göttliche Liturgie: Zuerst wird die Schrift gelesen und ausgelegt, dann wird das Brot genommen, gesegnet, gebrochen und gegeben. Viele orthodoxe Ausleger sehen darin ein Bild der Eucharistie. Wichtig ist auch: Christus erklärt das ganze Alte Testament von sich her. Die Kirche liest die Schrift darum immer im Licht Christi. Diese Erzählung gehört zu den elf Auferstehungsevangelien, die im Morgengottesdienst am Sonntag im Wechsel gelesen werden.",
          sr: "Ток приповести подсећа на Свету Литургију: најпре се чита и тумачи Писмо, затим се хлеб узима, благосиља, ломи и даје. Многи православни тумачи у томе виде слику Евхаристије. Важно је и ово: Христос тумачи цео Стари Завет полазећи од себе. Зато Црква увек чита Писмо у светлости Христовој. Ова приповест спада у једанаест васкршњих јеванђеља која се наизменично читају на недељном јутрењу."
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus ist wahrhaft leiblich auferstanden. Er ist der Schlüssel zur ganzen Heiligen Schrift, und er schenkt sich selbst in der Eucharistie.",
        sr: "Христос је истински телесно васкрсао. Он је кључ за цело Свето Писмо и дарује самог себе у Евхаристији."
      },
      links: [
        { ref: { de: "Lk 22,19", sr: "Лк 22,19" }, note: { de: "Beim Letzten Abendmahl nimmt Christus das Brot, dankt und bricht es.", sr: "На Тајној вечери Христос узима хлеб, благодари и ломи га." } },
        { ref: { de: "Apg 2,42", sr: "Дап 2,42" }, note: { de: "Die ersten Christen verharrten im Brechen des Brotes.", sr: "Први хришћани су истрајавали у ломљењу хлеба." } },
        { ref: { de: "Jes 53", sr: "Ис 53" }, note: { de: "Der leidende Gottesknecht.", sr: "Слуга Господњи који страда." } },
        { ref: { de: "Joh 5,39", sr: "Јн 5,39" }, note: { de: "Die Schriften legen Zeugnis von Christus ab.", sr: "Писма сведоче о Христу." } }
      ],
      fathers: {
        de: "Für diesen Abschnitt enthält die App noch keine einzeln überprüfte Väterstelle. Sicher belegt ist die liturgische Verwendung als eines der elf Auferstehungsevangelien (Eothina) im Morgengottesdienst.",
        sr: "За овај одељак апликација још не садржи појединачно проверено место из Светих Отаца. Поуздано је потврђена богослужбена употреба као једног од једанаест васкршњих јутарњих јеванђеља."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum erkennen die Jünger Jesus zuerst nicht?", sr: "Зашто ученици најпре не препознају Исуса?" },
          a: { de: "Das Evangelium sagt, dass ihre Augen gehalten waren. Sie waren traurig und noch ohne Glauben an die Auferstehung.", sr: "Јеванђеље каже да су им очи биле задржане. Били су тужни и још без вере у Васкрсење." } },
        { q: { de: "Wobei erkennen sie ihn?", sr: "По чему Га препознају?" },
          a: { de: "Beim Brechen des Brotes.", sr: "У ломљењу хлеба." } },
        { q: { de: "Welche Verbindung zur Liturgie gibt es?", sr: "Каква је веза са Литургијом?" },
          a: { de: "Erst Auslegung der Schrift, dann das Brechen des Brotes – wie in der Göttlichen Liturgie Wortgottesdienst und Eucharistie.", sr: "Најпре тумачење Писма, затим ломљење хлеба – као на Светој Литургији читање Писма, а потом Евхаристија." } }
      ],
      practice: {
        de: "Wenn du traurig oder enttäuscht bist, lies einen Abschnitt aus dem Evangelium und bitte Christus, dein Herz „brennen“ zu lassen. Nimm, wenn möglich, am nächsten Sonntag an der Liturgie teil.",
        sr: "Када сте тужни или разочарани, прочитајте један одељак из Јеванђеља и молите Христа да вам срце „загори“. Ако је могуће, учествујте на Литургији следеће недеље."
      },
      review: {
        de: "Der Auferstandene begleitet die Jünger unerkannt, erklärt ihnen die Schrift und wird beim Brechen des Brotes erkannt. Ihr Herz brennt, und sie verkünden die Auferstehung.",
        sr: "Васкрсли непрепознат прати ученике, тумачи им Писмо и бива препознат у ломљењу хлеба. Срце им гори и објављују Васкрсење."
      },
      quiz: [
        { q: { de: "Wie hieß einer der beiden Jünger?", sr: "Како се звао један од двојице ученика?" },
          options: [{ de: "Kleopas", sr: "Клеопа" }, { de: "Thomas", sr: "Тома" }, { de: "Nathanael", sr: "Натанаило" }], correct: 0 },
        { q: { de: "Wobei erkennen sie den Herrn?", sr: "У чему препознају Господа?" },
          options: [{ de: "Beim Brechen des Brotes", sr: "У ломљењу хлеба" }, { de: "An seiner Stimme", sr: "По гласу" }, { de: "An seinem Gewand", sr: "По одећи" }], correct: 0 },
        { q: { de: "Was tun die Jünger danach?", sr: "Шта ученици чине после тога?" },
          options: [{ de: "Sie kehren sofort nach Jerusalem zurück", sr: "Одмах се враћају у Јерусалим" }, { de: "Sie bleiben in Emmaus", sr: "Остају у Емаусу" }, { de: "Sie gehen nach Galiläa", sr: "Одлазе у Галилеју" }], correct: 0 }
      ]
    },
    {
      id: "bib-jn20", book: "jn", order: 9,
      title: { de: "Der Auferstandene und Thomas", sr: "Васкрсли Христос и Тома" },
      ref: { de: "Johannes 20,19–31", sr: "Јован 20,19–31" },
      intro: {
        de: "Das Johannesevangelium berichtet ausführlich von den Erscheinungen des Auferstandenen. Am Ende von Kapitel 20 sagt Johannes, warum er sein Evangelium geschrieben hat: damit wir glauben und das Leben haben.",
        sr: "Јеванђеље по Јовану опширно приповеда о јављањима Васкрслога. На крају 20. главе Јован каже зашто је написао своје Јеванђеље: да верујемо и да имамо живот."
      },
      introTag: "history",
      context: {
        de: "Am Abend des Auferstehungstages haben sich die Jünger aus Furcht hinter verschlossenen Türen versammelt. Thomas ist nicht dabei.",
        sr: "Увече на дан Васкрсења ученици су се из страха окупили иза затворених врата. Томе није било са њима."
      },
      reading: [
        { ref: { de: "Joh 20,19–23", sr: "Јн 20,19–23" }, note: { de: "Friede, Sendung und Gabe des Heiligen Geistes.", sr: "Мир, послање и дар Духа Светога." } },
        { ref: { de: "Joh 20,24–29", sr: "Јн 20,24–29" }, note: { de: "Thomas zweifelt und bekennt dann.", sr: "Тома сумња, а затим исповеда." } },
        { ref: { de: "Joh 20,30–31", sr: "Јн 20,30–31" }, note: { de: "Der Zweck des Evangeliums.", sr: "Сврха Јеванђеља." } }
      ],
      summary: {
        de: "Christus tritt durch die verschlossenen Türen, wünscht den Jüngern Frieden und zeigt ihnen Hände und Seite. Er sendet sie, wie der Vater ihn gesandt hat, haucht sie an und gibt ihnen den Heiligen Geist mit der Vollmacht, Sünden zu vergeben. Thomas will nicht glauben, bevor er die Wunden selbst berührt hat. Acht Tage später erscheint Christus wieder und lädt Thomas ein, ihn zu berühren. Thomas bekennt: Mein Herr und mein Gott! Christus nennt die selig, die nicht sehen und doch glauben.",
        sr: "Христос улази кроз затворена врата, жели ученицима мир и показује им руке и ребра. Шаље их као што је Отац послао Њега, дуну на њих и даје им Духа Светога са влашћу да опраштају грехе. Тома не жели да верује док сам не додирне ране. После осам дана Христос се поново јавља и позива Тому да Га додирне. Тома исповеда: Господ мој и Бог мој! Христос назива блаженима оне који не видеше, а вероваше."
      },
      interp: {
        simple: {
          de: "Christus hat Thomas in seinem Zweifel nicht verstoßen, sondern ist ihm entgegengekommen. Aus dem Zweifel wurde ein starkes Bekenntnis: Jesus ist Herr und Gott.",
          sr: "Христос није одбацио Тому у његовој сумњи, него му је изашао у сусрет. Из сумње је настало снажно исповедање: Исус је Господ и Бог."
        },
        deeper: {
          de: "Der Auferstandene hat einen wirklichen Leib – mit den Wunden der Kreuzigung –, doch dieser Leib ist verherrlicht und nicht mehr an verschlossene Türen gebunden. Die Gabe des Geistes und die Vollmacht zur Sündenvergebung sind die biblische Grundlage des Mysteriums der Beichte. Die orthodoxe Kirche liest dieses Evangelium am Sonntag nach Ostern, dem Thomassonntag (Antipascha). Die Liturgie besingt dabei den „guten Unglauben“ des Thomas, der allen die Gewissheit der leiblichen Auferstehung gebracht hat.",
          sr: "Васкрсли има стварно тело – са ранама распећа –, али је то тело прослављено и више није ограничено затвореним вратима. Дар Духа и власт опраштања грехова библијски су темељ Свете тајне исповести. Православна Црква чита ово Јеванђеље у прву недељу после Васкрса, Томину недељу (Антипасху). Богослужење притом опева Томино „добро неверовање“, које је свима донело извесност телесног Васкрсења."
        },
        tag: "dogma"
      },
      christ: {
        de: "Thomas spricht eines der klarsten Bekenntnisse der Gottheit Christi im Neuen Testament aus. Der Auferstandene schenkt Frieden, den Heiligen Geist und die Vergebung der Sünden.",
        sr: "Тома изговара једно од најјаснијих исповедања Христовог божанства у Новом Завету. Васкрсли дарује мир, Духа Светога и опроштај грехова."
      },
      links: [
        { ref: { de: "Lk 24,36–43", sr: "Лк 24,36–43" }, note: { de: "Der Auferstandene isst vor den Jüngern.", sr: "Васкрсли једе пред ученицима." } },
        { ref: { de: "Joh 1,1", sr: "Јн 1,1" }, note: { de: "Das Wort war Gott – Anfang und Ende des Evangeliums entsprechen sich.", sr: "Реч беше Бог – почетак и крај Јеванђеља одговарају једно другом." } },
        { ref: { de: "1 Petr 1,8", sr: "1 Пт 1,8" }, note: { de: "Ihr liebt ihn, obwohl ihr ihn nicht gesehen habt.", sr: "Љубите Га иако Га нисте видели." } },
        { ref: { de: "Gen 2,7", sr: "Пост 2,7" }, note: { de: "Gott haucht dem Menschen den Lebensatem ein.", sr: "Бог удахњује човеку дах живота." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus legt diesen Abschnitt in seinen Homilien zum Johannesevangelium aus; sie sind in englischer Übersetzung frei zugänglich (siehe Bibliothek). Die Bezeichnung „guter Unglaube“ stammt aus den liturgischen Texten des Thomassonntags.",
        sr: "Свети Јован Златоуст тумачи овај одељак у својим беседама на Јеванђеље по Јовану; слободно су доступне у енглеском преводу (види библиотеку). Израз „добро неверовање“ потиче из богослужбених текстова Томине недеље."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was zeigt, dass Christus leiblich auferstanden ist?", sr: "Шта показује да је Христос телесно васкрсао?" },
          a: { de: "Er zeigt die Wunden an Händen und Seite und lädt Thomas ein, sie zu berühren.", sr: "Показује ране на рукама и ребрима и позива Тому да их додирне." } },
        { q: { de: "Welche Vollmacht gibt Christus den Aposteln?", sr: "Коју власт Христос даје апостолима?" },
          a: { de: "Die Vollmacht, Sünden zu vergeben – Grundlage des Mysteriums der Beichte.", sr: "Власт да опраштају грехе – темељ Свете тајне исповести." } },
        { q: { de: "Was bekennt Thomas?", sr: "Шта Тома исповеда?" },
          a: { de: "„Mein Herr und mein Gott!“ – Christus ist wahrer Gott.", sr: "„Господ мој и Бог мој!“ – Христос је истинити Бог." } },
        { q: { de: "Warum hat Johannes sein Evangelium geschrieben?", sr: "Зашто је Јован написао своје Јеванђеље?" },
          a: { de: "Damit wir glauben, dass Jesus der Christus, der Sohn Gottes, ist, und durch den Glauben das Leben haben.", sr: "Да верујемо да је Исус Христос, Син Божији, и да верујући имамо живот." } }
      ],
      practice: {
        de: "Bringe deine eigenen Zweifel ehrlich im Gebet vor Christus. Sprich die Worte des Thomas langsam als dein eigenes Bekenntnis: Mein Herr und mein Gott.",
        sr: "Искрено изнесите своје сумње у молитви пред Христа. Изговорите полако Томине речи као своје исповедање: Господ мој и Бог мој."
      },
      review: {
        de: "Der Auferstandene schenkt Frieden, den Heiligen Geist und die Vollmacht zur Sündenvergebung. Thomas bekennt ihn als Herrn und Gott. Gelesen am Thomassonntag.",
        sr: "Васкрсли дарује мир, Духа Светога и власт опраштања грехова. Тома Га исповеда као Господа и Бога. Чита се у Томину недељу."
      },
      quiz: [
        { q: { de: "An welchem Sonntag wird dieses Evangelium gelesen?", sr: "Које недеље се чита ово Јеванђеље?" },
          options: [{ de: "Thomassonntag (Sonntag nach Ostern)", sr: "Томина недеља (прва после Васкрса)" }, { de: "Palmsonntag", sr: "Цвети" }, { de: "Sonntag der Orthodoxie", sr: "Недеља православља" }], correct: 0 },
        { q: { de: "Was bekennt Thomas?", sr: "Шта Тома исповеда?" },
          options: [{ de: "Mein Herr und mein Gott", sr: "Господ мој и Бог мој" }, { de: "Du bist ein großer Prophet", sr: "Ти си велики пророк" }, { de: "Du bist der Sohn Davids", sr: "Ти си Син Давидов" }], correct: 0 },
        { q: { de: "Wie viele Tage später erscheint Christus Thomas?", sr: "После колико дана се Христос јавља Томи?" },
          options: [{ de: "Acht", sr: "Осам" }, { de: "Drei", sr: "Три" }, { de: "Vierzig", sr: "Четрдесет" }], correct: 0 },
        { q: { de: "Welches Mysterium hat hier eine biblische Grundlage?", sr: "Која Света тајна овде има библијски темељ?" },
          options: [{ de: "Die Beichte", sr: "Исповест" }, { de: "Die Ehe", sr: "Брак" }, { de: "Die Krankensalbung", sr: "Јелеосвећење" }], correct: 0 }
      ]
    },
    {
      id: "bib-gen1", book: "gen", order: 10,
      title: { de: "Die Erschaffung der Welt und des Menschen", sr: "Стварање света и човека" },
      ref: { de: "Genesis 1,1 – 2,3 und 2,7", sr: "Постање 1,1 – 2,3 и 2,7" },
      intro: {
        de: "Die Genesis (griechisch „Ursprung“) ist das erste Buch der Bibel. Nach der Überlieferung der Kirche wird sie Mose zugeschrieben. Sie erzählt vom Anfang der Welt, des Menschen und der Geschichte Gottes mit seinem Volk.",
        sr: "Књига Постања (грчки Генесис, „постанак“) прва је књига Библије. Према црквеном предању, приписује се Мојсију. Она приповеда о почетку света, човека и историје Бога са Његовим народом."
      },
      introTag: "history",
      context: {
        de: "Viele Völker der Antike erzählten, die Welt sei aus Kämpfen von Göttern entstanden. Die Genesis bezeugt dagegen: Es gibt einen einzigen Gott, der alles aus freier Liebe durch sein Wort erschafft. Die Schöpfung ist gut. In der Großen Fastenzeit liest die Kirche das Buch Genesis in den Abendgottesdiensten an Wochentagen.",
        sr: "Многи народи старог века приповедали су да је свет настао из борби богова. Књига Постања, напротив, сведочи: постоји један Бог, који све ствара из слободне љубави својом речју. Створени свет је добар. У Великом посту Црква чита Књигу Постања на вечерњима радним данима."
      },
      reading: [
        { ref: { de: "Gen 1,1–25", sr: "Пост 1,1–25" }, note: { de: "Gott erschafft durch sein Wort Licht, Himmel, Erde und Lebewesen.", sr: "Бог речју ствара светлост, небо, земљу и жива бића." } },
        { ref: { de: "Gen 1,26–31", sr: "Пост 1,26–31" }, note: { de: "Der Mensch nach Gottes Bild und Ähnlichkeit.", sr: "Човек по лику и подобију Божијем." } },
        { ref: { de: "Gen 2,1–3 und 2,7", sr: "Пост 2,1–3 и 2,7" }, note: { de: "Der siebte Tag; Gott formt den Menschen und haucht ihm Leben ein.", sr: "Седми дан; Бог обликује човека и удахњује му живот." } }
      ],
      summary: {
        de: "Im Anfang erschafft Gott Himmel und Erde. Der Geist Gottes schwebt über den Wassern. Gott spricht, und es wird Licht. In sechs Tagen ordnet und erfüllt Gott die Welt: Licht und Finsternis, Himmel und Meer, Land und Pflanzen, Sonne, Mond und Sterne, Tiere im Wasser, in der Luft und auf dem Land. Immer wieder heißt es: Gott sah, dass es gut war. Zuletzt erschafft Gott den Menschen als Mann und Frau nach seinem Bild und seiner Ähnlichkeit und vertraut ihm die Erde an. Alles ist sehr gut. Am siebten Tag ruht Gott und segnet diesen Tag. Gott formt den Menschen aus Erde und haucht ihm den Lebensatem ein.",
        sr: "У почетку Бог ствара небо и земљу. Дух Божији лебди над водама. Бог говори, и бива светлост. За шест дана Бог уређује и испуњава свет: светлост и таму, небо и море, копно и биље, сунце, месец и звезде, животиње у води, у ваздуху и на копну. Изнова се каже: виде Бог да је добро. На крају Бог ствара човека као мушко и женско по свом лику и подобију и поверава му земљу. Све је веома добро. Седмог дана Бог почива и благосиља тај дан. Бог обликује човека од земље и удахњује му дах живота."
      },
      interp: {
        simple: {
          de: "Gott hat die Welt aus Liebe gemacht, und sie ist gut. Der Mensch ist etwas Besonderes: Er trägt Gottes Bild in sich und ist berufen, Gott immer ähnlicher zu werden.",
          sr: "Бог је створио свет из љубави, и свет је добар. Човек је нешто посебно: носи у себи лик Божији и позван је да постаје све сличнији Богу."
        },
        deeper: {
          de: "Die Kirche bekennt die Schöpfung „aus dem Nichts“: Gott braucht keinen Stoff, aus dem er schafft. Im „Lasst uns den Menschen machen“ haben die Väter einen Hinweis auf die Dreifaltigkeit gesehen; Gottes Wort (vgl. Joh 1,3) und der Geist über den Wassern wirken an der Schöpfung mit. Viele Väter unterscheiden „Bild“ und „Ähnlichkeit“: Das Bild ist dem Menschen geschenkt (Vernunft, Freiheit, Fähigkeit zur Gemeinschaft), die Ähnlichkeit ist das Ziel, zu dem er mit Gottes Gnade wachsen soll – das ist der Weg der Theosis. Fragen, wie die sechs Tage im Verhältnis zur Naturwissenschaft zu verstehen sind, beantworten orthodoxe Theologen unterschiedlich; verbindlich ist die Lehre, dass Gott der Schöpfer von allem ist und die Schöpfung gut ist.",
          sr: "Црква исповеда стварање „ни из чега“: Богу није потребна грађа од које би стварао. У речима „Да начинимо човека“ Оци су видели наговештај Свете Тројице; Реч Божија (уп. Јн 1,3) и Дух над водама учествују у стварању. Многи Оци разликују „лик“ и „подобије“: лик је човеку дарован (разум, слобода, способност заједнице), а подобије је циљ ка коме треба да расте уз Божију благодат – то је пут обожења. Питања како разумети шест дана у односу на природне науке православни богослови тумаче различито; обавезујуће је учење да је Бог Творац свега и да је створени свет добар."
        },
        tag: "dogma"
      },
      christ: {
        de: "Das Wort, durch das Gott alles erschafft, ist der ewige Sohn (Joh 1,3). Christus ist das vollkommene Bild Gottes (Kol 1,15). In ihm wird das Bild Gottes im Menschen erneuert und zur Vollendung geführt.",
        sr: "Реч кроз коју Бог све ствара јесте вечни Син (Јн 1,3). Христос је савршени лик Божији (Кол 1,15). У Њему се лик Божији у човеку обнавља и доводи до пуноће."
      },
      links: [
        { ref: { de: "Joh 1,1–3", sr: "Јн 1,1–3" }, note: { de: "Durch das Wort ist alles geworden.", sr: "Кроз Реч је све постало." } },
        { ref: { de: "Ps 103 (104)", sr: "Пс 103 (104)" }, note: { de: "Der Schöpfungspsalm, der zu Beginn der Vesper gebetet wird.", sr: "Псалам о стварању, који се чита на почетку вечерња." } },
        { ref: { de: "Kol 1,15–17", sr: "Кол 1,15–17" }, note: { de: "Christus, das Bild des unsichtbaren Gottes.", sr: "Христос, икона Бога невидљивога." } },
        { ref: { de: "2 Makk 7,28", sr: "2 Мак 7,28" }, note: { de: "Gott hat alles nicht aus Seiendem erschaffen.", sr: "Бог је све створио не од онога што постоји." } }
      ],
      fathers: {
        de: "Der hl. Basilius der Große hielt neun Predigten über das Sechstagewerk (Hexaemeron). Darin staunt er über die Weisheit Gottes in der Natur und lädt ein, durch die Schöpfung den Schöpfer zu erkennen. Der Text ist in englischer Übersetzung frei zugänglich (NPNF II/8, siehe Bibliothek).",
        sr: "Свети Василије Велики одржао је девет беседа на Шестоднев. У њима се диви премудрости Божијој у природи и позива да кроз створени свет познамо Творца. Текст је слободно доступан у енглеском преводу (NPNF II/8, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was bedeutet „Schöpfung aus dem Nichts“?", sr: "Шта значи „стварање ни из чега“?" },
          a: { de: "Gott hat die Welt nicht aus einem schon vorhandenen Stoff gemacht, sondern ihr allein durch sein Wort und seinen Willen das Dasein geschenkt.", sr: "Бог није створио свет од већ постојеће грађе, него му је само својом речју и вољом даровао постојање." } },
        { q: { de: "Was ist der Unterschied zwischen „Bild“ und „Ähnlichkeit“ bei vielen Vätern?", sr: "Која је код многих Отаца разлика између „лика“ и „подобија“?" },
          a: { de: "Das Bild ist dem Menschen geschenkt; die Ähnlichkeit ist das Ziel, zu dem er mit Gottes Gnade wachsen soll.", sr: "Лик је човеку дарован; подобије је циљ ка коме треба да расте уз Божију благодат." } },
        { q: { de: "Wie wird die Schöpfung in Genesis 1 bewertet?", sr: "Како се у Постању 1 вреднује створени свет?" },
          a: { de: "Als gut – und nach der Erschaffung des Menschen als sehr gut.", sr: "Као добар – а после стварања човека као веома добар." } }
      ],
      practice: {
        de: "Geh heute bewusst einige Minuten nach draußen und betrachte etwas aus der Schöpfung – einen Baum, den Himmel. Danke Gott dafür mit eigenen Worten oder mit einigen Versen aus Psalm 103 (104).",
        sr: "Изађите данас свесно на неколико минута напоље и посматрајте нешто од створеног света – дрво, небо. Захвалите Богу за то својим речима или неколико стихова из 103. (104.) псалма."
      },
      review: {
        de: "Gott erschafft alles aus dem Nichts durch sein Wort; die Schöpfung ist gut. Der Mensch ist nach Gottes Bild geschaffen und zur Ähnlichkeit mit Gott berufen.",
        sr: "Бог све ствара ни из чега својом речју; створени свет је добар. Човек је створен по лику Божијем и позван на подобије Богу."
      },
      quiz: [
        { q: { de: "Wer hielt die Predigten über das Sechstagewerk (Hexaemeron)?", sr: "Ко је одржао беседе на Шестоднев?" },
          options: [{ de: "Basilius der Große", sr: "Василије Велики" }, { de: "Johannes Chrysostomus", sr: "Јован Златоуст" }, { de: "Isaak der Syrer", sr: "Исак Сирин" }], correct: 0 },
        { q: { de: "Wann liest die Kirche besonders aus der Genesis?", sr: "Када Црква посебно чита из Књиге Постања?" },
          options: [{ de: "In der Großen Fastenzeit an Wochentagen zur Vesper", sr: "У Великом посту радним данима на вечерњу" }, { de: "Nur an Weihnachten", sr: "Само на Божић" }, { de: "Gar nicht im Gottesdienst", sr: "Уопште не на богослужењу" }], correct: 0 },
        { q: { de: "Was ist nach vielen Vätern das Ziel, zu dem der Mensch wachsen soll?", sr: "Шта је према многим Оцима циљ ка коме човек треба да расте?" },
          options: [{ de: "Die Ähnlichkeit mit Gott", sr: "Подобије Богу" }, { de: "Herrschaft über andere Menschen", sr: "Власт над другим људима" }, { de: "Reichtum", sr: "Богатство" }], correct: 0 },
        { q: { de: "Welcher Psalm wird zu Beginn der Vesper gebetet und besingt die Schöpfung?", sr: "Који псалам о стварању се чита на почетку вечерња?" },
          options: [{ de: "Psalm 103 (104)", sr: "Псалам 103 (104)" }, { de: "Psalm 22 (23)", sr: "Псалам 22 (23)" }, { de: "Psalm 150", sr: "Псалам 150" }], correct: 0 }
      ]
    },
    {
      id: "bib-gen3", book: "gen", order: 11,
      title: { de: "Der Fall des Menschen und die erste Verheißung", sr: "Пад човека и прво обећање" },
      ref: { de: "Genesis 2,15 – 3,24", sr: "Постање 2,15 – 3,24" },
      intro: {
        de: "Nach der Erschaffung erzählt die Genesis, wie der Mensch die Gemeinschaft mit Gott verliert. Dieser Abschnitt erklärt, warum es Leid und Tod in der Welt gibt – und enthält schon die erste Verheißung der Erlösung.",
        sr: "После стварања Књига Постања приповеда како човек губи заједницу са Богом. Овај одељак објашњава зашто у свету постоје страдање и смрт – и већ садржи прво обећање спасења."
      },
      introTag: "history",
      context: {
        de: "Gott setzt den Menschen in den Garten Eden, damit er ihn bebaut und bewahrt. Er gibt ihm alles, mit einem einzigen Gebot: nicht vom Baum der Erkenntnis von Gut und Böse zu essen. Das Gebot ist eine Einladung, in Vertrauen und Liebe zu wachsen.",
        sr: "Бог поставља човека у рај у Едему да га обрађује и чува. Даје му све, уз једну једину заповест: да не једе са дрвета познања добра и зла. Заповест је позив да расте у поверењу и љубави."
      },
      reading: [
        { ref: { de: "Gen 2,15–25", sr: "Пост 2,15–25" }, note: { de: "Das Gebot im Paradies; die Erschaffung der Frau.", sr: "Заповест у рају; стварање жене." } },
        { ref: { de: "Gen 3,1–13", sr: "Пост 3,1–13" }, note: { de: "Die Versuchung, der Ungehorsam und die Ausreden.", sr: "Искушење, непослушност и изговори." } },
        { ref: { de: "Gen 3,14–24", sr: "Пост 3,14–24" }, note: { de: "Die Folgen, die erste Verheißung und die Vertreibung.", sr: "Последице, прво обећање и изгнанство." } }
      ],
      summary: {
        de: "Die Schlange sät Misstrauen gegen Gott: Er wolle den Menschen etwas vorenthalten; wer von dem Baum esse, werde wie Gott. Eva isst und gibt auch Adam, und er isst. Da erkennen sie, dass sie nackt sind, und verstecken sich vor Gott. Als Gott sie ruft, schiebt Adam die Schuld auf Eva und auf Gott selbst, Eva auf die Schlange. Gott verflucht die Schlange und kündigt an, dass der Nachkomme der Frau ihr den Kopf zertreten wird. Für die Menschen beginnen Mühsal, Schmerz und der Tod. Gott macht ihnen Kleider aus Fell und schickt sie aus dem Paradies, damit sie nicht vom Baum des Lebens essen und für immer in diesem Zustand bleiben.",
        sr: "Змија сеје неповерење према Богу: Он наводно жели нешто да ускрати човеку; ко једе са тог дрвета, биће као Бог. Ева једе и даје и Адаму, и он једе. Тада увиђају да су наги и крију се од Бога. Када их Бог позове, Адам сваљује кривицу на Еву и на самог Бога, а Ева на змију. Бог проклиње змију и најављује да ће јој семе жене сатрти главу. За људе почињу мука, бол и смрт. Бог им прави хаљине од коже и изгони их из раја, да не би јели са дрвета живота и заувек остали у том стању."
      },
      interp: {
        simple: {
          de: "Der erste Mensch wollte „wie Gott“ werden, aber ohne Gott – aus eigener Kraft. Dadurch verlor er die Gemeinschaft mit Gott, die Quelle des Lebens. Doch Gott verlässt den Menschen nicht: Schon hier verspricht er einen Retter.",
          sr: "Први човек је желео да постане „као Бог“, али без Бога – сопственом снагом. Тиме је изгубио заједницу са Богом, извор живота. Али Бог не оставља човека: већ овде обећава Спаситеља."
        },
        deeper: {
          de: "In der orthodoxen Überlieferung wird der Fall vor allem als Abwendung von Gott und Verlust des Lebens verstanden: Durch die Trennung von Gott sind Verderblichkeit und Tod in die Menschennatur gekommen. Alle Menschen erben diesen gefallenen Zustand und die Sterblichkeit; die persönliche Schuld Adams wird dagegen nach orthodoxer Lehre nicht wie eine eigene Schuld auf jeden einzelnen Menschen übertragen. Der Mensch bleibt Bild Gottes, auch wenn dieses Bild verdunkelt ist. Gen 3,15 nennen die Väter das „Protoevangelium“, das erste Evangelium: den ersten Hinweis auf Christus, der als Nachkomme der Frau die Macht des Bösen besiegt. Die Kirche erinnert am Sonntag vor der Großen Fastenzeit an die Vertreibung Adams aus dem Paradies.",
          sr: "У православном предању пад се пре свега схвата као одвраћање од Бога и губитак живота: одвајањем од Бога у људску природу ушли су пропадљивост и смрт. Сви људи наслеђују то пало стање и смртност; Адамова лична кривица се, међутим, према православном учењу не преноси на сваког појединог човека као његова сопствена кривица. Човек остаје лик Божији, иако је тај лик помрачен. Пост 3,15 Оци називају „протојеванђеље“, прво јеванђеље: први наговештај Христа, који као семе жене побеђује силу зла. Црква у недељу пред Велики пост спомиње Адамово изгнање из раја."
        },
        tag: "dogma"
      },
      christ: {
        de: "Christus ist der neue Adam: Wo der erste Mensch ungehorsam war, ist Christus gehorsam bis zum Tod am Kreuz. Durch seine Auferstehung öffnet er den Weg zurück zum Baum des Lebens. Die Osterikone zeigt, wie er Adam und Eva aus den Gräbern zieht.",
        sr: "Христос је нови Адам: где је први човек био непослушан, Христос је послушан до смрти на крсту. Својим Васкрсењем отвара пут назад ка дрвету живота. Васкршња икона показује како извлачи Адама и Еву из гробова."
      },
      links: [
        { ref: { de: "Röm 5,12–19", sr: "Рим 5,12–19" }, note: { de: "Durch einen Menschen kam der Tod, durch Christus das Leben.", sr: "Кроз једног човека дође смрт, кроз Христа живот." } },
        { ref: { de: "1 Kor 15,21–22", sr: "1 Кор 15,21–22" }, note: { de: "Wie in Adam alle sterben, so werden in Christus alle lebendig.", sr: "Као што у Адаму сви умиру, тако ће у Христу сви оживети." } },
        { ref: { de: "Phil 2,8", sr: "Флп 2,8" }, note: { de: "Gehorsam bis zum Tod am Kreuz.", sr: "Послушан до смрти, и то смрти на крсту." } },
        { ref: { de: "Offb 22,1–2", sr: "Отк 22,1–2" }, note: { de: "Der Baum des Lebens im neuen Jerusalem.", sr: "Дрво живота у новом Јерусалиму." } }
      ],
      fathers: {
        de: "Der hl. Irenäus von Lyon beschreibt in „Gegen die Häresien“, wie Christus als neuer Adam die ganze Geschichte des Menschen in sich zusammenfasst und erneuert (Rekapitulation), und deutet Gen 3,15 auf Christus. Der hl. Athanasius erklärt in „Über die Menschwerdung des Wortes“, dass der Mensch durch die Abwendung von Gott dem Verderben verfiel und das Wort Mensch wurde, um ihn zu erneuern. Beide Werke sind frei zugänglich (siehe Bibliothek).",
        sr: "Свети Иринеј Лионски у делу „Против јереси“ описује како Христос као нови Адам сабира у себи и обнавља целу историју човека (рекапитулација) и тумачи Пост 3,15 као пророштво о Христу. Свети Атанасије у делу „О оваплоћењу Логоса“ објашњава да је човек одвраћањем од Бога пао у пропадљивост и да је Реч постала човек да би га обновила. Оба дела су слободно доступна (види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Womit beginnt die Versuchung?", sr: "Чиме почиње искушење?" },
          a: { de: "Mit Misstrauen gegen Gott: Die Schlange behauptet, Gott wolle dem Menschen etwas Gutes vorenthalten.", sr: "Неповерењем према Богу: змија тврди да Бог жели да ускрати човеку нешто добро." } },
        { q: { de: "Was ist nach orthodoxem Verständnis die Hauptfolge des Falls?", sr: "Шта је према православном схватању главна последица пада?" },
          a: { de: "Die Trennung von Gott, der Quelle des Lebens – daraus folgen Verderblichkeit und Tod für die ganze Menschennatur.", sr: "Одвајање од Бога, извора живота – из тога следе пропадљивост и смрт за целу људску природу." } },
        { q: { de: "Warum heißt Gen 3,15 „Protoevangelium“?", sr: "Зашто се Пост 3,15 назива „протојеванђеље“?" },
          a: { de: "Weil es die erste Verheißung des Retters ist: Der Nachkomme der Frau wird die Macht des Bösen besiegen.", sr: "Зато што је то прво обећање Спаситеља: семе жене победиће силу зла." } },
        { q: { de: "Was lernen wir aus den Ausreden von Adam und Eva?", sr: "Шта учимо из изговора Адама и Еве?" },
          a: { de: "Statt Reue schieben sie die Schuld auf andere. Umkehr beginnt dort, wo wir unsere eigene Verantwortung ehrlich anerkennen.", sr: "Уместо покајања, сваљују кривицу на друге. Покајање почиње тамо где искрено признамо сопствену одговорност." } }
      ],
      practice: {
        de: "Achte heute darauf, wann du dich rechtfertigst oder die Schuld auf andere schiebst. Versuche stattdessen einmal bewusst zu sagen: Das war mein Fehler, es tut mir leid.",
        sr: "Пазите данас када се оправдавате или сваљујете кривицу на друге. Покушајте уместо тога једном свесно да кажете: то је била моја грешка, жао ми је."
      },
      review: {
        de: "Aus Misstrauen und dem Wunsch, ohne Gott wie Gott zu sein, trennt sich der Mensch von Gott; Leid und Tod folgen. Doch Gott verheißt den Retter. Christus ist der neue Adam.",
        sr: "Из неповерења и жеље да без Бога буде као Бог, човек се одваја од Бога; следе страдање и смрт. Али Бог обећава Спаситеља. Христос је нови Адам."
      },
      quiz: [
        { q: { de: "Wie nennen die Väter Gen 3,15?", sr: "Како Оци називају Пост 3,15?" },
          options: [{ de: "Protoevangelium (erstes Evangelium)", sr: "Протојеванђеље (прво јеванђеље)" }, { de: "Hexaemeron", sr: "Шестоднев" }, { de: "Typikon", sr: "Типик" }], correct: 0 },
        { q: { de: "Wer ist nach dem Neuen Testament der „neue Adam“?", sr: "Ко је према Новом Завету „нови Адам“?" },
          options: [{ de: "Christus", sr: "Христос" }, { de: "Mose", sr: "Мојсије" }, { de: "Abraham", sr: "Аврам" }], correct: 0 },
        { q: { de: "Was erben nach orthodoxer Lehre alle Menschen von Adam?", sr: "Шта према православном учењу сви људи наслеђују од Адама?" },
          options: [{ de: "Den gefallenen Zustand und die Sterblichkeit", sr: "Пало стање и смртност" }, { de: "Adams persönliche Schuld als eigene Schuld", sr: "Адамову личну кривицу као сопствену" }, { de: "Nichts", sr: "Ништа" }], correct: 0 },
        { q: { de: "Wann erinnert die Kirche an die Vertreibung Adams aus dem Paradies?", sr: "Када Црква спомиње Адамово изгнање из раја?" },
          options: [{ de: "Am Sonntag vor der Großen Fastenzeit", sr: "У недељу пред Велики пост" }, { de: "An Pfingsten", sr: "На Духове" }, { de: "Am Fest der Verklärung", sr: "На Преображење" }], correct: 0 }
      ]
    },
    {
      id: "bib-ex12", book: "ex", order: 12,
      title: { de: "Das Pascha und der Durchzug durch das Meer", sr: "Пасха и прелазак преко мора" },
      ref: { de: "Exodus 12,1–14 und 14,10–31", sr: "Излазак 12,1–14 и 14,10–31" },
      intro: {
        de: "Das Buch Exodus (griechisch „Auszug“) erzählt, wie Gott sein Volk Israel aus der Sklaverei in Ägypten befreit. Es wird nach der Überlieferung Mose zugeschrieben. Der Auszug ist das große Rettungsereignis des Alten Testaments.",
        sr: "Књига Изласка (грчки Егзодус, „излазак“) приповеда како Бог ослобађа свој народ Израиљ из ропства у Египту. Према предању, приписује се Мојсију. Излазак је велики догађај спасења у Старом Завету."
      },
      introTag: "history",
      context: {
        de: "Israel lebt als Sklavenvolk in Ägypten. Der Pharao weigert sich trotz vieler Plagen, das Volk ziehen zu lassen. In der Nacht der letzten Plage feiert Israel das erste Pascha. Das Wort Pascha bedeutet „Vorübergang“: Der Herr geht an den Häusern vorüber, die mit dem Blut des Lammes gezeichnet sind.",
        sr: "Израиљ живи као народ робова у Египту. Фараон, упркос многим казнама, одбија да пусти народ. У ноћи последње казне Израиљ слави прву Пасху. Реч Пасха значи „прелазак“: Господ пролази поред кућа обележених крвљу јагњета."
      },
      reading: [
        { ref: { de: "Ex 12,1–14", sr: "Изл 12,1–14" }, note: { de: "Das Paschalamm, sein Blut und das ungesäuerte Brot.", sr: "Пасхално јагње, његова крв и бесквасни хлеб." } },
        { ref: { de: "Ex 14,10–31", sr: "Изл 14,10–31" }, note: { de: "Der Durchzug durch das Meer.", sr: "Прелазак преко мора." } },
        { ref: { de: "Ex 15,1–2", sr: "Изл 15,1–2" }, note: { de: "Der Anfang des Lobgesangs des Mose.", sr: "Почетак Мојсијеве песме." } }
      ],
      summary: {
        de: "Gott gebietet jeder Familie, ein fehlerloses Lamm zu schlachten, sein Blut an die Türpfosten zu streichen und das Fleisch eilig mit ungesäuertem Brot und bitteren Kräutern zu essen, reisefertig. In dieser Nacht trifft die letzte Plage die Erstgeborenen Ägyptens, doch die gezeichneten Häuser werden verschont. Israel zieht aus. Als die Ägypter sie am Meer verfolgen, haben die Israeliten große Angst. Mose sagt: Fürchtet euch nicht, der Herr wird für euch kämpfen. Auf Gottes Geheiß streckt er seinen Stab aus, das Wasser weicht, und das Volk zieht trockenen Fußes hindurch. Die Verfolger kommen in den zurückkehrenden Fluten um. Israel glaubt an den Herrn und singt ihm ein Lied.",
        sr: "Бог заповеда свакој породици да закоље јагње без мане, да његовом крвљу намаже довратке и да месо једе журно са бесквасним хлебом и горким зељем, спремна за пут. Те ноћи последња казна погађа првенце Египта, али обележене куће бивају поштеђене. Израиљ излази. Када их Египћани прогоне до мора, Израиљци се веома уплаше. Мојсије каже: не бојте се, Господ ће се борити за вас. По Божијој заповести пружа свој штап, вода се раздваја и народ пролази суво. Гонитељи гину у водама које се враћају. Израиљ верује Господу и пева Му песму."
      },
      interp: {
        simple: {
          de: "Das Pascha Israels ist ein Vorbild für das christliche Pascha (Ostern). Wie das Blut des Lammes Israel rettete, so rettet uns Christus, das wahre Lamm Gottes. Wie Israel durch das Wasser in die Freiheit zog, so gehen wir durch die Taufe vom Tod ins Leben.",
          sr: "Пасха Израиља је праслика хришћанске Пасхе (Васкрса). Као што је крв јагњета спасла Израиљ, тако нас спасава Христос, истинско Јагње Божије. Као што је Израиљ кроз воду прешао у слободу, тако ми кроз крштење прелазимо из смрти у живот."
        },
        deeper: {
          de: "Die Väter lesen das Alte Testament „typologisch“: Ereignisse und Personen sind Vorbilder (Typen), die in Christus erfüllt werden. Das Paschalamm weist auf Christus hin, der zur Zeit des Paschafestes gekreuzigt wurde. Der Durchzug durch das Meer ist ein Bild der Taufe (vgl. 1 Kor 10,1–2). Darum liest die Kirche in der Vesper des Großen Samstags, die früher mit der Taufe der neuen Christen verbunden war, Ex 12 und den Bericht vom Durchzug mit dem Lied des Mose. Die erste Ode der Kanones im Morgengottesdienst geht auf dieses Lied des Mose zurück. Auch der Name „Pascha“ für Ostern stammt von hier.",
          sr: "Оци читају Стари Завет „типолошки“: догађаји и личности су праслике (типови) које се испуњавају у Христу. Пасхално јагње указује на Христа, који је распет у време празника Пасхе. Прелазак преко мора је слика крштења (уп. 1 Кор 10,1–2). Зато Црква на вечерњу Велике суботе, које је у старини било повезано са крштењем нових хришћана, чита Изл 12 и повест о преласку са Мојсијевом песмом. Прва песма канона на јутрењу потиче од ове Мојсијеве песме. И сам назив „Пасха“ за Васкрс потиче одавде."
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus ist „unser Pascha“ (1 Kor 5,7), das wahre Lamm, das die Sünde der Welt hinwegnimmt. Er führt uns nicht nur aus einer irdischen Sklaverei, sondern aus der Knechtschaft der Sünde und des Todes ins ewige Leben.",
        sr: "Христос је „наша Пасха“ (1 Кор 5,7), истинско Јагње које узима грех света. Он нас не изводи само из земаљског ропства, него из ропства греха и смрти у вечни живот."
      },
      links: [
        { ref: { de: "1 Kor 5,7", sr: "1 Кор 5,7" }, note: { de: "Christus, unser Pascha, ist geopfert.", sr: "Пасха наша, Христос, жртвован је." } },
        { ref: { de: "Joh 1,29", sr: "Јн 1,29" }, note: { de: "Seht das Lamm Gottes.", sr: "Ево Јагњета Божијег." } },
        { ref: { de: "1 Kor 10,1–4", sr: "1 Кор 10,1–4" }, note: { de: "Der Durchzug durch das Meer als Bild der Taufe.", sr: "Прелазак преко мора као слика крштења." } },
        { ref: { de: "Joh 19,36", sr: "Јн 19,36" }, note: { de: "Kein Knochen wird ihm zerbrochen (vgl. Ex 12,46).", sr: "Кост Његова неће се преломити (уп. Изл 12,46)." } }
      ],
      fathers: {
        de: "Der hl. Gregor von Nazianz deutet in seiner zweiten Osterrede (Rede 45) das Paschalamm, das Blut an den Türen und den Auszug ausführlich auf Christus und das christliche Leben. Der Text ist in englischer Übersetzung frei zugänglich (NPNF II/7, siehe Bibliothek).",
        sr: "Свети Григорије Богослов у другој беседи на Васкрс (беседа 45) опширно тумачи пасхално јагње, крв на вратима и излазак као праслике Христа и хришћанског живота. Текст је слободно доступан у енглеском преводу (NPNF II/7, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was bedeutet das Wort Pascha?", sr: "Шта значи реч Пасха?" },
          a: { de: "„Vorübergang“ – der Herr ging an den gezeichneten Häusern vorüber; im christlichen Sinn der Übergang vom Tod zum Leben.", sr: "„Прелазак“ – Господ је прошао поред обележених кућа; у хришћанском смислу прелазак из смрти у живот." } },
        { q: { de: "Was ist typologische Auslegung?", sr: "Шта је типолошко тумачење?" },
          a: { de: "Ereignisse und Personen des Alten Testaments werden als Vorbilder verstanden, die in Christus ihre Erfüllung finden.", sr: "Догађаји и личности Старог Завета схватају се као праслике које своје испуњење налазе у Христу." } },
        { q: { de: "Wofür ist der Durchzug durch das Meer ein Bild?", sr: "Чега је прелазак преко мора слика?" },
          a: { de: "Für die Taufe (1 Kor 10,1–2): Durch das Wasser werden wir aus der Knechtschaft befreit.", sr: "Крштења (1 Кор 10,1–2): кроз воду бивамо ослобођени ропства." } }
      ],
      practice: {
        de: "Nimm, wenn möglich, am Großen Samstag an der Vesper mit den alttestamentlichen Lesungen teil. Danke Gott heute für eine Situation, in der er dich aus einer „Sackgasse“ herausgeführt hat.",
        sr: "Ако је могуће, учествујте на Велику суботу на вечерњу са старозаветним читањима. Захвалите данас Богу за неку ситуацију у којој вас је извео из „безизлаза“."
      },
      review: {
        de: "Das Blut des Lammes rettet Israel, und Gott führt sein Volk durch das Meer in die Freiheit. Christus ist unser Pascha; der Durchzug ist ein Bild der Taufe.",
        sr: "Крв јагњета спасава Израиљ, а Бог изводи свој народ кроз море у слободу. Христос је наша Пасха; прелазак је слика крштења."
      },
      quiz: [
        { q: { de: "Was bedeutet „Pascha“?", sr: "Шта значи „Пасха“?" },
          options: [{ de: "Vorübergang", sr: "Прелазак" }, { de: "Fest der Ernte", sr: "Празник жетве" }, { de: "Lobgesang", sr: "Похвална песма" }], correct: 0 },
        { q: { de: "Wann liest die Kirche Ex 12 und den Durchzug durch das Meer?", sr: "Када Црква чита Изл 12 и повест о преласку преко мора?" },
          options: [{ de: "In der Vesper des Großen Samstags", sr: "На вечерњу Велике суботе" }, { de: "An Mariä Entschlafung", sr: "На Успење Богородице" }, { de: "Am Fest des hl. Nikolaus", sr: "На Светог Николу" }], correct: 0 },
        { q: { de: "Welche Bibelstelle nennt Christus „unser Pascha“?", sr: "Које место назива Христа „нашом Пасхом“?" },
          options: [{ de: "1 Kor 5,7", sr: "1 Кор 5,7" }, { de: "Röm 1,1", sr: "Рим 1,1" }, { de: "Offb 1,1", sr: "Отк 1,1" }], correct: 0 },
        { q: { de: "Worauf geht die erste Ode der Kanones zurück?", sr: "Од чега потиче прва песма канона?" },
          options: [{ de: "Auf das Lied des Mose (Ex 15)", sr: "Од Мојсијеве песме (Изл 15)" }, { de: "Auf das Hohelied", sr: "Од Песме над песмама" }, { de: "Auf die Seligpreisungen", sr: "Од блаженстава" }], correct: 0 }
      ]
    },
    {
      id: "bib-isa53", book: "isa", order: 13,
      title: { de: "Der leidende Gottesknecht", sr: "Слуга Господњи који страда" },
      ref: { de: "Jesaja 52,13 – 53,12", sr: "Исаија 52,13 – 53,12" },
      intro: {
        de: "Der Prophet Jesaja wirkte im 8. Jahrhundert vor Christus in Jerusalem. Sein Buch enthält so viele Hinweise auf Christus, dass die Väter ihn manchmal den „fünften Evangelisten“ nennen. Das Lied vom leidenden Gottesknecht gehört zu den bekanntesten Abschnitten.",
        sr: "Пророк Исаија деловао је у 8. веку пре Христа у Јерусалиму. Његова књига садржи толико наговештаја о Христу да га Оци понекад називају „петим јеванђелистом“. Песма о Слуги Господњем који страда спада у најпознатије одељке."
      },
      introTag: "history",
      context: {
        de: "Im zweiten Teil des Jesajabuches spricht Gott Trost für sein Volk in der Verbannung. Darin stehen vier Lieder über einen geheimnisvollen „Knecht des Herrn“. Das vierte Lied beschreibt, wie dieser Knecht unschuldig leidet und gerade dadurch viele rettet.",
        sr: "У другом делу Књиге пророка Исаије Бог теши свој народ у изгнанству. Ту се налазе четири песме о тајанственом „Слуги Господњем“. Четврта песма описује како тај Слуга невино страда и управо тиме спасава многе."
      },
      reading: [
        { ref: { de: "Jes 52,13–15", sr: "Ис 52,13–15" }, note: { de: "Der Knecht wird erhöht – und war doch entstellt.", sr: "Слуга ће бити узвишен – а био је унакажен." } },
        { ref: { de: "Jes 53,1–9", sr: "Ис 53,1–9" }, note: { de: "Er trug unsere Krankheiten; wie ein Lamm zur Schlachtbank geführt.", sr: "Он је понео наше болести; као јагње вођен на клање." } },
        { ref: { de: "Jes 53,10–12", sr: "Ис 53,10–12" }, note: { de: "Sein Leiden bringt vielen Rechtfertigung.", sr: "Његово страдање многима доноси оправдање." } }
      ],
      summary: {
        de: "Der Knecht des Herrn ist unscheinbar und verachtet, ein Mann der Schmerzen, von dem man das Gesicht abwendet. Doch er trägt unsere Krankheiten und Schmerzen; er wird um unserer Sünden willen verwundet, und durch seine Wunden werden wir geheilt. Wie ein Lamm, das zur Schlachtung geführt wird, öffnet er seinen Mund nicht. Er wird ungerecht verurteilt und bei den Gottlosen begraben, obwohl er kein Unrecht getan hat. Er gibt sein Leben hin und tritt für die Sünder ein. Darum wird Gott ihn erhöhen, und er wird Nachkommen sehen und vielen die Rechtfertigung bringen.",
        sr: "Слуга Господњи је неугледан и презрен, човек болова, од кога људи окрећу лице. Али он носи наше болести и болове; рањен је због наших греха, и његовим ранама ми смо исцељени. Као јагње вођено на клање, он не отвара уста своја. Неправедно је осуђен и сахрањен међу безбожнима, иако није учинио неправду. Предаје свој живот и заузима се за грешнике. Зато ће га Бог узвисити, видеће потомство и многима ће донети оправдање."
      },
      interp: {
        simple: {
          de: "Mehr als 700 Jahre vor der Kreuzigung beschreibt Jesaja einen Unschuldigen, der für andere leidet. Die Kirche erkennt darin Christus: Er nahm freiwillig unser Leid auf sich, um uns zu heilen.",
          sr: "Више од 700 година пре распећа, Исаија описује Невиног који страда за друге. Црква у томе препознаје Христа: Он је добровољно узео на себе наше страдање да би нас исцелио."
        },
        deeper: {
          de: "Schon das Neue Testament deutet dieses Lied auf Christus: Philippus erklärt es dem äthiopischen Kämmerer (Apg 8,26–35), und der Apostel Petrus greift es auf (1 Petr 2,22–25). Die orthodoxe Auslegung betont dabei das Bild der Heilung: „Durch seine Wunden sind wir geheilt.“ Christus heilt die verwundete menschliche Natur, indem er Leiden und Tod freiwillig annimmt und von innen her überwindet. Die Kirche liest diesen Abschnitt am Großen Freitag in den Königlichen Stunden.",
          sr: "Већ Нови Завет тумачи ову песму као пророштво о Христу: Филип је објашњава етиопском евнуху (Дап 8,26–35), а апостол Петар се на њу позива (1 Пт 2,22–25). Православно тумачење притом наглашава слику исцељења: „Његовим ранама ми смо исцељени.“ Христос исцељује рањену људску природу тиме што добровољно прима страдање и смрт и побеђује их изнутра. Црква чита овај одељак на Велики петак на Царским часовима."
        },
        tag: "dogma"
      },
      christ: {
        de: "Christus ist der Knecht, der für uns leidet, und zugleich der Herr, der erhöht wird. Er schweigt vor seinen Richtern wie das Lamm, er stirbt mit Verbrechern und wird im Grab eines Reichen bestattet – und Gott erhöht ihn in der Auferstehung.",
        sr: "Христос је Слуга који страда за нас и уједно Господ који бива узвишен. Ћути пред својим судијама као јагње, умире са злочинцима и сахрањен је у гробу богаташа – а Бог Га узвисује у Васкрсењу."
      },
      links: [
        { ref: { de: "Apg 8,26–35", sr: "Дап 8,26–35" }, note: { de: "Philippus erklärt Jesaja 53 dem Kämmerer.", sr: "Филип објашњава Исаију 53 евнуху." } },
        { ref: { de: "1 Petr 2,22–25", sr: "1 Пт 2,22–25" }, note: { de: "Durch seine Wunden seid ihr geheilt.", sr: "Његовом раном исцелисте се." } },
        { ref: { de: "Mt 27,12–14", sr: "Мт 27,12–14" }, note: { de: "Christus schweigt vor Pilatus.", sr: "Христос ћути пред Пилатом." } },
        { ref: { de: "Mt 27,57–60", sr: "Мт 27,57–60" }, note: { de: "Begraben im Grab des reichen Josef von Arimathäa.", sr: "Сахрањен у гробу богатог Јосифа из Ариматеје." } }
      ],
      fathers: {
        de: "Der hl. Justin der Märtyrer (2. Jahrhundert) zitiert und erklärt Jesaja 53 in seinem „Dialog mit dem Juden Tryphon“ und in seiner ersten Apologie als Weissagung auf Christus. Beide Werke sind in englischer Übersetzung frei zugänglich (ANF Band 1, siehe Bibliothek).",
        sr: "Свети Јустин Мученик (2. век) наводи и тумачи Исаију 53 у „Разговору са Јудејцем Трифоном“ и у својој првој апологији као пророштво о Христу. Оба дела су слободно доступна у енглеском преводу (ANF, том 1, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Welche Personen im Neuen Testament deuten Jesaja 53 auf Christus?", sr: "Које личности у Новом Завету тумаче Исаију 53 као пророштво о Христу?" },
          a: { de: "Der Diakon Philippus (Apg 8) und der Apostel Petrus (1 Petr 2).", sr: "Ђакон Филип (Дап 8) и апостол Петар (1 Пт 2)." } },
        { q: { de: "Welches Bild betont die orthodoxe Auslegung besonders?", sr: "Коју слику православно тумачење посебно наглашава?" },
          a: { de: "Die Heilung: Durch seine Wunden wird die verwundete menschliche Natur geheilt.", sr: "Исцељење: Његовим ранама исцељује се рањена људска природа." } },
        { q: { de: "Wann wird dieser Abschnitt im Gottesdienst gelesen?", sr: "Када се овај одељак чита на богослужењу?" },
          a: { de: "Am Großen Freitag in den Königlichen Stunden.", sr: "На Велики петак на Царским часовима." } }
      ],
      practice: {
        de: "Wenn du ungerecht behandelt wirst, denke an Christus, der schwieg und nicht mit Bosheit antwortete. Bete für den Menschen, der dir Unrecht getan hat – das ist schwer, aber ein Weg der Heilung.",
        sr: "Када се према вама неко понаша неправедно, сетите се Христа, који је ћутао и није одговарао злобом. Помолите се за човека који вам је учинио неправду – то је тешко, али је пут исцељења."
      },
      review: {
        de: "Jesaja beschreibt den unschuldig leidenden Knecht, durch dessen Wunden wir geheilt werden. Das Neue Testament und die Kirche erkennen darin Christus.",
        sr: "Исаија описује невино страдалног Слугу, чијим ранама бивамо исцељени. Нови Завет и Црква у томе препознају Христа."
      },
      quiz: [
        { q: { de: "Wem erklärt Philippus Jesaja 53?", sr: "Коме Филип објашњава Исаију 53?" },
          options: [{ de: "Dem äthiopischen Kämmerer", sr: "Етиопском евнуху" }, { de: "Dem Hohenpriester", sr: "Првосвештенику" }, { de: "Dem Apostel Paulus", sr: "Апостолу Павлу" }], correct: 0 },
        { q: { de: "Womit wird der Knecht in seinem Schweigen verglichen?", sr: "Са чим се упоређује Слуга у свом ћутању?" },
          options: [{ de: "Mit einem Lamm", sr: "Са јагњетом" }, { de: "Mit einem Löwen", sr: "Са лавом" }, { de: "Mit einem Adler", sr: "Са орлом" }], correct: 0 },
        { q: { de: "Wann liest die Kirche Jesaja 52,13 – 53,12?", sr: "Када Црква чита Ис 52,13 – 53,12?" },
          options: [{ de: "Am Großen Freitag", sr: "На Велики петак" }, { de: "An Weihnachten", sr: "На Божић" }, { de: "An Pfingsten", sr: "На Духове" }], correct: 0 }
      ]
    },
    {
      id: "bib-jn19", book: "jn", order: 14,
      title: { de: "Die Kreuzigung nach Johannes", sr: "Распеће по Јовану" },
      ref: { de: "Johannes 19,16–37", sr: "Јован 19,16–37" },
      intro: {
        de: "Der Apostel Johannes war der einzige der Zwölf, der unter dem Kreuz stand. Er berichtet als Augenzeuge und betont, dass sein Zeugnis wahr ist, damit auch wir glauben.",
        sr: "Апостол Јован био је једини од Дванаесторице који је стајао под крстом. Он сведочи као очевидац и наглашава да је његово сведочанство истинито, да бисмо и ми веровали."
      },
      introTag: "history",
      context: {
        de: "Nach dem Verhör vor Pilatus wird Christus zur Kreuzigung übergeben. Es ist der Rüsttag vor dem Paschafest – die Zeit, in der im Tempel die Paschalämmer geschlachtet wurden.",
        sr: "После саслушања пред Пилатом Христос бива предат на распеће. То је петак уочи празника Пасхе – време када су се у храму клала пасхална јагњад."
      },
      reading: [
        { ref: { de: "Joh 19,16–24", sr: "Јн 19,16–24" }, note: { de: "Golgota, die Inschrift und das Gewand.", sr: "Голгота, натпис и хаљина." } },
        { ref: { de: "Joh 19,25–30", sr: "Јн 19,25–30" }, note: { de: "Die Gottesgebärerin und Johannes unter dem Kreuz; „Es ist vollbracht“.", sr: "Богородица и Јован под крстом; „Сврши се“." } },
        { ref: { de: "Joh 19,31–37", sr: "Јн 19,31–37" }, note: { de: "Die geöffnete Seite: Blut und Wasser.", sr: "Пробијено ребро: крв и вода." } }
      ],
      summary: {
        de: "Christus trägt sein Kreuz selbst nach Golgota und wird zwischen zwei anderen gekreuzigt. Pilatus lässt über ihm die Inschrift anbringen: Jesus von Nazareth, der König der Juden – auf Hebräisch, Lateinisch und Griechisch. Die Soldaten verlosen sein ungenähtes Gewand. Unter dem Kreuz stehen seine Mutter und der Jünger, den er liebte. Christus vertraut seine Mutter dem Jünger an und den Jünger seiner Mutter. Dann sagt er: Es ist vollbracht, neigt das Haupt und übergibt den Geist. Ein Soldat öffnet seine Seite mit einer Lanze, und sogleich fließen Blut und Wasser heraus. Johannes bezeugt dies, damit wir glauben.",
        sr: "Христос сам носи свој крст на Голготу и бива распет између двојице других. Пилат поставља изнад Њега натпис: Исус Назарећанин, Цар јудејски – на јеврејском, латинском и грчком. Војници бацају коцку за Његову нешивену хаљину. Под крстом стоје Његова Мајка и ученик кога је љубио. Христос поверава своју Мајку ученику, а ученика својој Мајци. Затим каже: Сврши се, приклања главу и предаје дух. Један војник копљем пробада Његово ребро, и одмах истиче крв и вода. Јован сведочи о томе да бисмо веровали."
      },
      interp: {
        simple: {
          de: "Das Kreuz ist bei Johannes kein Zeichen der Niederlage, sondern der Ort, an dem Christus seine Liebe vollendet. „Es ist vollbracht“ heißt: Das Werk der Rettung ist vollständig getan.",
          sr: "Крст код Јована није знак пораза, него место где Христос испуњава своју љубав. „Сврши се“ значи: дело спасења је потпуно извршено."
        },
        deeper: {
          de: "Johannes zeigt Christus als den wahren König: Die Inschrift verkündet sein Königtum in den Sprachen der damaligen Welt. Er stirbt zur Stunde der Paschalämmer, und kein Knochen wird ihm zerbrochen – er ist das wahre Paschalamm (vgl. Ex 12,46). Die Väter deuten Blut und Wasser aus der Seite auf die Mysterien der Taufe und der Eucharistie, durch die die Kirche lebt; wie Eva aus der Seite Adams genommen wurde, so geht die Kirche aus der Seite des neuen Adam hervor. Dass Christus Johannes seiner Mutter anvertraut, versteht die Kirche auch so: Die Gottesgebärerin ist Mutter aller Gläubigen. Die Kirche liest die Passionsberichte am Großen Freitag.",
          sr: "Јован приказује Христа као истинског Цара: натпис објављује Његово царство на језицима тадашњег света. Он умире у час када се кољу пасхална јагњад, и кост Му се не прелама – Он је истинско пасхално Јагње (уп. Изл 12,46). Оци крв и воду из ребра тумаче као Свете тајне крштења и Евхаристије, којима Црква живи; као што је Ева узета из Адамовог ребра, тако Црква излази из ребра новог Адама. То што Христос поверава Јована својој Мајци, Црква схвата и овако: Богородица је мајка свих верних. Црква чита повести о страдању на Велики петак."
        },
        tag: "opinion"
      },
      christ: {
        de: "Am Kreuz offenbart Christus seine Liebe bis zum Äußersten. Durch seinen freiwilligen Tod besiegt er den Tod, und aus seiner Seite empfängt die Kirche die Mysterien des Lebens.",
        sr: "На крсту Христос открива своју љубав до краја. Својом добровољном смрћу побеђује смрт, а из Његовог ребра Црква прима Свете тајне живота."
      },
      links: [
        { ref: { de: "Ex 12,46", sr: "Изл 12,46" }, note: { de: "Dem Paschalamm wird kein Knochen zerbrochen.", sr: "Пасхалном јагњету кост се не прелама." } },
        { ref: { de: "Ps 21 (22),19", sr: "Пс 21 (22),19" }, note: { de: "Sie verteilen meine Kleider.", sr: "Разделише хаљине моје." } },
        { ref: { de: "Sach 12,10", sr: "Зах 12,10" }, note: { de: "Sie werden auf den blicken, den sie durchbohrt haben.", sr: "Погледаће на Онога кога пробоше." } },
        { ref: { de: "Joh 13,1", sr: "Јн 13,1" }, note: { de: "Er liebte die Seinen bis zur Vollendung.", sr: "Љубио је своје до краја." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus legt die Kreuzigung in seinen Homilien zum Johannesevangelium aus und deutet dabei Blut und Wasser aus der Seite auf Taufe und Eucharistie. Die Homilien sind in englischer Übersetzung frei zugänglich (siehe Bibliothek).",
        sr: "Свети Јован Златоуст тумачи распеће у својим беседама на Јеванђеље по Јовану и притом крв и воду из ребра тумачи као крштење и Евхаристију. Беседе су слободно доступне у енглеском преводу (види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum ist es bedeutsam, dass Christus zur Zeit der Paschalämmer stirbt?", sr: "Зашто је значајно што Христос умире у време клања пасхалне јагњади?" },
          a: { de: "Weil er das wahre Paschalamm ist, dessen Opfer die Welt rettet.", sr: "Зато што је Он истинско пасхално Јагње, чија жртва спасава свет." } },
        { q: { de: "Was bedeutet „Es ist vollbracht“?", sr: "Шта значи „Сврши се“?" },
          a: { de: "Das Werk der Rettung, das der Vater ihm aufgetragen hat, ist vollständig erfüllt.", sr: "Дело спасења које Му је Отац поверио у потпуности је извршено." } },
        { q: { de: "Wie deuten die Väter Blut und Wasser aus der Seite?", sr: "Како Оци тумаче крв и воду из ребра?" },
          a: { de: "Als Bild der Mysterien der Taufe und der Eucharistie, aus denen die Kirche lebt.", sr: "Као слику Светих тајни крштења и Евхаристије, којима Црква живи." } },
        { q: { de: "Wem vertraut Christus seine Mutter an?", sr: "Коме Христос поверава своју Мајку?" },
          a: { de: "Dem Jünger, den er liebte – dem Apostel Johannes.", sr: "Ученику кога је љубио – апостолу Јовану." } }
      ],
      practice: {
        de: "Betrachte in Ruhe ein Kreuz oder eine Kreuzigungsikone. Bekreuzige dich bewusst und danke Christus mit eigenen Worten für seine Liebe.",
        sr: "У миру посматрајте крст или икону Распећа. Свесно се прекрстите и захвалите Христу својим речима за Његову љубав."
      },
      review: {
        de: "Christus stirbt als König und wahres Paschalamm. Er vertraut seine Mutter Johannes an, vollendet das Werk der Rettung, und aus seiner Seite fließen Blut und Wasser.",
        sr: "Христос умире као Цар и истинско пасхално Јагње. Поверава своју Мајку Јовану, довршава дело спасења, а из Његовог ребра истичу крв и вода."
      },
      quiz: [
        { q: { de: "In welchen drei Sprachen war die Kreuzesinschrift geschrieben?", sr: "На која три језика је био написан натпис на крсту?" },
          options: [{ de: "Hebräisch, Lateinisch, Griechisch", sr: "Јеврејски, латински, грчки" }, { de: "Aramäisch, Ägyptisch, Persisch", sr: "Арамејски, египатски, персијски" }], correct: 0 },
        { q: { de: "Welcher Apostel stand unter dem Kreuz?", sr: "Који апостол је стајао под крстом?" },
          options: [{ de: "Johannes", sr: "Јован" }, { de: "Petrus", sr: "Петар" }, { de: "Andreas", sr: "Андреј" }], correct: 0 },
        { q: { de: "Was floss aus der geöffneten Seite?", sr: "Шта је истекло из пробијеног ребра?" },
          options: [{ de: "Blut und Wasser", sr: "Крв и вода" }, { de: "Nur Blut", sr: "Само крв" }, { de: "Öl", sr: "Уље" }], correct: 0 },
        { q: { de: "Was sind die letzten Worte Christi bei Johannes?", sr: "Које су последње Христове речи код Јована?" },
          options: [{ de: "Es ist vollbracht", sr: "Сврши се" }, { de: "Mich dürstet nach Wasser des Lebens", sr: "Жедан сам воде живота" }, { de: "Friede sei mit euch", sr: "Мир вама" }], correct: 0 }
      ]
    },
    {
      id: "bib-acts2", book: "acts", order: 15,
      title: { de: "Pfingsten – die Herabkunft des Heiligen Geistes", sr: "Педесетница – силазак Светога Духа" },
      ref: { de: "Apostelgeschichte 2,1–41", sr: "Дела апостолска 2,1–41" },
      intro: {
        de: "Die Apostelgeschichte wurde vom hl. Lukas geschrieben, als Fortsetzung seines Evangeliums. Sie erzählt, wie die Kirche in Jerusalem entsteht und sich durch die Apostel in der Welt ausbreitet.",
        sr: "Дела апостолска написао је свети Лука као наставак свог Јеванђеља. Она приповедају како Црква настаје у Јерусалиму и шири се кроз апостоле по свету."
      },
      introTag: "history",
      context: {
        de: "Fünfzig Tage nach Ostern feierten die Juden das Wochenfest, an dem sie der Gabe des Gesetzes am Sinai gedachten. Viele Pilger aus allen Ländern waren in Jerusalem. Die Apostel waren mit der Gottesgebärerin und anderen Gläubigen versammelt und beteten, wie Christus es ihnen vor seiner Himmelfahrt aufgetragen hatte.",
        sr: "Педесет дана после Пасхе Јудејци су славили празник седмица, на који су се сећали давања Закона на Синају. Многи поклоници из свих земаља били су у Јерусалиму. Апостоли су били сабрани са Богородицом и другим верницима и молили се, како им је Христос заповедио пре Вазнесења."
      },
      reading: [
        { ref: { de: "Apg 2,1–13", sr: "Дап 2,1–13" }, note: { de: "Sturm, Feuerzungen und das Reden in anderen Sprachen.", sr: "Хук, огњени језици и говор на другим језицима." } },
        { ref: { de: "Apg 2,14–36", sr: "Дап 2,14–36" }, note: { de: "Die Predigt des Petrus.", sr: "Петрова беседа." } },
        { ref: { de: "Apg 2,37–41", sr: "Дап 2,37–41" }, note: { de: "Umkehr und Taufe von etwa dreitausend Menschen.", sr: "Покајање и крштење око три хиљаде људи." } }
      ],
      summary: {
        de: "Plötzlich kommt vom Himmel ein Brausen wie von einem gewaltigen Wind und erfüllt das ganze Haus. Es erscheinen Zungen wie von Feuer, die sich auf jeden von ihnen setzen. Alle werden mit dem Heiligen Geist erfüllt und beginnen in anderen Sprachen zu reden. Die Pilger aus vielen Völkern hören die Apostel in ihrer eigenen Sprache von den großen Taten Gottes sprechen. Petrus steht auf und predigt: Der gekreuzigte Jesus ist auferstanden, Gott hat ihn zum Herrn und Christus gemacht, und er hat den verheißenen Geist ausgegossen. Die Zuhörer sind tief getroffen und fragen, was sie tun sollen. Petrus antwortet: Kehrt um und lasst euch taufen, dann werdet ihr die Gabe des Heiligen Geistes empfangen. Etwa dreitausend Menschen werden an diesem Tag getauft.",
        sr: "Изненада дође с неба хук као силног ветра и испуни сву кућу. Појавише се језици као од огња и сиђоше на свакога од њих. Сви се испунише Духом Светим и почеше говорити другим језицима. Поклоници из многих народа чују апостоле како на њиховом језику говоре о великим делима Божијим. Петар устаје и проповеда: распети Исус је васкрсао, Бог Га је учинио Господом и Христом, и Он је излио обећаног Духа. Слушаоци су дубоко потресени и питају шта да чине. Петар одговара: покајте се и крстите се, па ћете примити дар Духа Светога. Тог дана крсти се око три хиљаде људи."
      },
      interp: {
        simple: {
          de: "An Pfingsten schenkt Gott seinen Heiligen Geist. Aus ängstlichen Jüngern werden mutige Verkünder. Pfingsten gilt als Geburtstag der Kirche.",
          sr: "На Педесетницу Бог дарује свог Духа Светога. Од уплашених ученика постају храбри проповедници. Педесетница се сматра рођенданом Цркве."
        },
        deeper: {
          de: "Die orthodoxe Kirche sieht in Pfingsten die Umkehrung des Turmbaus zu Babel (Gen 11): Dort verwirrte Gott die Sprachen und die Menschen zerstreuten sich; hier vereint der Geist Menschen vieler Sprachen im einen Glauben. Pfingsten offenbart die ganze Dreifaltigkeit; darum heißt das Fest auch Fest der Heiligen Dreifaltigkeit (serbisch auch Тројице). In der Vesper am Pfingsttag werden besondere Kniegebete gesprochen. Jeder Christ empfängt die Gabe des Geistes persönlich im Mysterium der Myronsalbung, die in der orthodoxen Kirche direkt nach der Taufe gespendet wird.",
          sr: "Православна Црква у Педесетници види преокрет вавилонске куле (Пост 11): тамо је Бог помешао језике и људи су се расејали; овде Дух сједињује људе многих језика у једној вери. Педесетница открива целу Свету Тројицу; зато се празник зове и Света Тројица (Тројице, Духови). На вечерњу на дан Педесетнице читају се посебне коленопреклоне молитве. Сваки хришћанин лично прима дар Духа у Светој тајни миропомазања, које се у Православној Цркви обавља одмах после крштења."
        },
        tag: "dogma"
      },
      christ: {
        de: "Der erhöhte Christus sendet, wie er verheißen hat, den Heiligen Geist vom Vater (Joh 15,26). Der Geist macht Christus in der Kirche gegenwärtig und vereint die Gläubigen zu seinem Leib.",
        sr: "Прослављени Христос шаље, како је обећао, Духа Светога од Оца (Јн 15,26). Дух чини Христа присутним у Цркви и сједињује вернике у Његово тело."
      },
      links: [
        { ref: { de: "Joel 3,1–5 (2,28–32)", sr: "Јоил 3,1–5 (2,28–32)" }, note: { de: "Gott verheißt, seinen Geist auszugießen.", sr: "Бог обећава да ће излити свог Духа." } },
        { ref: { de: "Gen 11,1–9", sr: "Пост 11,1–9" }, note: { de: "Der Turmbau zu Babel.", sr: "Вавилонска кула." } },
        { ref: { de: "Joh 14,16–17.26", sr: "Јн 14,16–17.26" }, note: { de: "Christus verheißt den Tröster.", sr: "Христос обећава Утешитеља." } },
        { ref: { de: "Apg 2,42", sr: "Дап 2,42" }, note: { de: "Lehre der Apostel, Gemeinschaft, Brotbrechen und Gebet.", sr: "Апостолска наука, заједница, ломљење хлеба и молитва." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus hat die ganze Apostelgeschichte in Homilien ausgelegt; die Homilien sind in englischer Übersetzung frei zugänglich (NPNF I/11, siehe Bibliothek). Die Gegenüberstellung von Babel und Pfingsten findet sich auch im Kontakion des Festes.",
        sr: "Свети Јован Златоуст протумачио је цела Дела апостолска у беседама; беседе су слободно доступне у енглеском преводу (NPNF I/11, види библиотеку). Поређење Вавилона и Педесетнице налази се и у кондаку празника."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum gilt Pfingsten als Geburtstag der Kirche?", sr: "Зашто се Педесетница сматра рођенданом Цркве?" },
          a: { de: "Weil an diesem Tag der Heilige Geist herabkommt, die Apostel öffentlich verkünden und die ersten dreitausend Menschen getauft werden.", sr: "Зато што тог дана силази Дух Свети, апостоли јавно проповедају и крштава се прве три хиљаде људи." } },
        { q: { de: "Welcher Zusammenhang besteht zwischen Babel und Pfingsten?", sr: "Каква је веза између Вавилона и Педесетнице?" },
          a: { de: "In Babel wurden die Sprachen verwirrt und die Menschen zerstreut; an Pfingsten vereint der Geist Menschen vieler Sprachen.", sr: "У Вавилону су језици помешани и људи расејани; на Педесетницу Дух сједињује људе многих језика." } },
        { q: { de: "Was antwortet Petrus auf die Frage „Was sollen wir tun?“", sr: "Шта Петар одговара на питање „Шта да чинимо?“" },
          a: { de: "Kehrt um und lasst euch taufen; dann empfangt ihr die Gabe des Heiligen Geistes.", sr: "Покајте се и крстите се; тада ћете примити дар Духа Светога." } },
        { q: { de: "In welchem Mysterium empfängt jeder Christ die Gabe des Geistes?", sr: "У којој Светој тајни сваки хришћанин прима дар Духа?" },
          a: { de: "In der Myronsalbung, direkt nach der Taufe.", sr: "У миропомазању, одмах после крштења." } }
      ],
      practice: {
        de: "Lerne das Gebet zum Heiligen Geist („Himmlischer König“), mit dem orthodoxe Christen viele Gebete beginnen. Bitte darin um den Geist für eine konkrete Aufgabe dieser Woche.",
        sr: "Научите молитву Духу Светом („Царе небески“), којом православни хришћани почињу многе молитве. Молите у њој за Духа за један конкретан задатак ове недеље."
      },
      review: {
        de: "Fünfzig Tage nach Ostern kommt der Heilige Geist auf die Apostel herab. Petrus predigt, etwa dreitausend lassen sich taufen. Pfingsten ist das Fest der Dreifaltigkeit und der Geburtstag der Kirche.",
        sr: "Педесет дана после Васкрса Дух Свети силази на апостоле. Петар проповеда, око три хиљаде се крштава. Педесетница је празник Свете Тројице и рођендан Цркве."
      },
      quiz: [
        { q: { de: "In welcher Gestalt erscheint der Heilige Geist an Pfingsten?", sr: "У ком виду се Дух Свети јавља на Педесетницу?" },
          options: [{ de: "Als Zungen wie von Feuer", sr: "Као језици од огња" }, { de: "Als Taube", sr: "Као голуб" }, { de: "Als Wolke", sr: "Као облак" }], correct: 0 },
        { q: { de: "Wie viele Menschen wurden an Pfingsten getauft?", sr: "Колико људи се крстило на Педесетницу?" },
          options: [{ de: "Etwa dreitausend", sr: "Око три хиљаде" }, { de: "Zwölf", sr: "Дванаест" }, { de: "Etwa fünfhundert", sr: "Око пет стотина" }], correct: 0 },
        { q: { de: "Welches alttestamentliche Ereignis wird an Pfingsten „umgekehrt“?", sr: "Који старозаветни догађај се на Педесетницу „преокреће“?" },
          options: [{ de: "Der Turmbau zu Babel", sr: "Вавилонска кула" }, { de: "Die Sintflut", sr: "Потоп" }, { de: "Der Fall Adams", sr: "Адамов пад" }], correct: 0 },
        { q: { de: "Wer hielt die Pfingstpredigt?", sr: "Ко је одржао беседу на Педесетницу?" },
          options: [{ de: "Petrus", sr: "Петар" }, { de: "Paulus", sr: "Павле" }, { de: "Jakobus", sr: "Јаков" }], correct: 0 }
      ]
    },
    {
      id: "bib-acts9", book: "acts", order: 16,
      title: { de: "Die Bekehrung des Paulus", sr: "Обраћење апостола Павла" },
      ref: { de: "Apostelgeschichte 9,1–22", sr: "Дела апостолска 9,1–22" },
      intro: {
        de: "Saulus, ein gelehrter Pharisäer aus Tarsus, verfolgte zunächst die Christen. Durch eine Begegnung mit dem auferstandenen Christus wurde er zum Apostel Paulus, der das Evangelium zu vielen Völkern brachte. Seine Briefe bilden einen großen Teil des Neuen Testaments.",
        sr: "Савле, учени фарисеј из Тарса, најпре је прогонио хришћане. Кроз сусрет са васкрслим Христом постао је апостол Павле, који је Јеванђеље пренео многим народима. Његове посланице чине велики део Новог Завета."
      },
      introTag: "history",
      context: {
        de: "Nach dem Martyrium des Diakons Stephanus (Apg 7) begann in Jerusalem eine Verfolgung der Christen. Saulus war bei der Steinigung des Stephanus dabei und ließ sich Briefe geben, um auch in Damaskus Christen gefangen zu nehmen.",
        sr: "После мученичке смрти ђакона Стефана (Дап 7) у Јерусалиму је почело гоњење хришћана. Савле је био присутан када су каменовали Стефана и узео је писма да и у Дамаску хвата хришћане."
      },
      reading: [
        { ref: { de: "Apg 9,1–9", sr: "Дап 9,1–9" }, note: { de: "Das Licht vor Damaskus.", sr: "Светлост пред Дамаском." } },
        { ref: { de: "Apg 9,10–19", sr: "Дап 9,10–19" }, note: { de: "Hananias heilt und tauft Saulus.", sr: "Ананија исцељује и крштава Савла." } },
        { ref: { de: "Apg 9,20–22", sr: "Дап 9,20–22" }, note: { de: "Saulus verkündet Christus als Sohn Gottes.", sr: "Савле проповеда Христа као Сина Божијег." } }
      ],
      summary: {
        de: "Auf dem Weg nach Damaskus umstrahlt Saulus plötzlich ein Licht vom Himmel. Er fällt zu Boden und hört eine Stimme: Saul, Saul, warum verfolgst du mich? Es ist Jesus, den er verfolgt. Saulus steht blind auf und wird nach Damaskus geführt, wo er drei Tage nicht isst und trinkt. Der Herr sendet den Jünger Hananias zu ihm, obwohl dieser Angst hat. Hananias legt ihm die Hände auf; es fällt ihm wie Schuppen von den Augen, er sieht wieder, wird getauft und beginnt sofort, in den Synagogen zu verkünden, dass Jesus der Sohn Gottes ist.",
        sr: "На путу за Дамаск Савла изненада обасја светлост с неба. Пада на земљу и чује глас: Савле, Савле, зашто ме гониш? То је Исус кога он гони. Савле устаје слеп и воде га у Дамаск, где три дана не једе и не пије. Господ шаље к њему ученика Ананију, иако се овај боји. Ананија полаже руке на њега; с очију му спадне као крљушт, прогледа, крсти се и одмах почиње да у синагогама проповеда да је Исус Син Божији."
      },
      interp: {
        simple: {
          de: "Niemand ist für Gott verloren. Selbst ein Verfolger kann zum Apostel werden. Christus sagt „Warum verfolgst du mich?“ – wer die Christen verfolgt, verfolgt Christus selbst, denn die Kirche ist sein Leib.",
          sr: "Нико није изгубљен за Бога. Чак и гонитељ може постати апостол. Христос каже „Зашто ме гониш?“ – ко гони хришћане, гони самог Христа, јер је Црква Његово тело."
        },
        deeper: {
          de: "Die Bekehrung des Paulus zeigt das Zusammenwirken von Gottes Gnade und menschlicher Antwort: Gott ruft, Paulus gehorcht. Wichtig ist auch die Rolle der Kirche: Paulus wird nicht allein gelassen, sondern durch Hananias in die Gemeinschaft aufgenommen, getauft und gestärkt. Die Kirche liest die Apostelgeschichte in der Zeit von Ostern bis Pfingsten in der Göttlichen Liturgie. Paulus wird zusammen mit Petrus am 29. Juni (12. Juli) gefeiert.",
          sr: "Обраћење Павла показује сарадњу Божије благодати и људског одговора: Бог позива, Павле слуша. Важна је и улога Цркве: Павле није остављен сам, него га Ананија прима у заједницу, крштава и укрепљује. Црква чита Дела апостолска у време од Васкрса до Педесетнице на Светој Литургији. Павле се прославља заједно са Петром 29. јуна (12. јула), на Петровдан."
        },
        tag: "opinion"
      },
      christ: {
        de: "Der auferstandene Christus offenbart sich Paulus persönlich und macht ihn zum Werkzeug, seinen Namen zu den Völkern zu tragen. Christus identifiziert sich mit seiner Kirche.",
        sr: "Васкрсли Христос се лично открива Павлу и чини га оруђем да Његово име пронесе народима. Христос се поистовећује са својом Црквом."
      },
      links: [
        { ref: { de: "Apg 7,54 – 8,3", sr: "Дап 7,54 – 8,3" }, note: { de: "Das Martyrium des Stephanus.", sr: "Мучеништво Стефаново." } },
        { ref: { de: "Gal 1,13–17", sr: "Гал 1,13–17" }, note: { de: "Paulus erzählt selbst von seiner Berufung.", sr: "Павле сам прича о свом позиву." } },
        { ref: { de: "1 Tim 1,12–16", sr: "1 Тим 1,12–16" }, note: { de: "Christus kam, die Sünder zu retten – deren erster bin ich.", sr: "Христос дође да спасе грешнике, од којих сам први ја." } },
        { ref: { de: "1 Kor 12,27", sr: "1 Кор 12,27" }, note: { de: "Ihr seid der Leib Christi.", sr: "Ви сте тело Христово." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus legt die Bekehrung des Paulus in seinen Homilien zur Apostelgeschichte aus und hat Paulus darüber hinaus mehrere Lobreden gewidmet. Die Homilien zur Apostelgeschichte sind in englischer Übersetzung frei zugänglich (NPNF I/11, siehe Bibliothek).",
        sr: "Свети Јован Златоуст тумачи обраћење Павла у својим беседама на Дела апостолска, а Павлу је посветио и неколико похвалних беседа. Беседе на Дела апостолска слободно су доступне у енглеском преводу (NPNF I/11, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum fragt Christus „Warum verfolgst du mich?“, obwohl Saulus Christen verfolgt?", sr: "Зашто Христос пита „Зашто ме гониш?“, иако Савле гони хришћане?" },
          a: { de: "Weil die Kirche der Leib Christi ist. Was den Gläubigen angetan wird, wird Christus selbst angetan.", sr: "Зато што је Црква тело Христово. Оно што се чини верницима, чини се самом Христу." } },
        { q: { de: "Welche Rolle spielt Hananias?", sr: "Какву улогу има Ананија?" },
          a: { de: "Er überwindet seine Angst, legt Saulus die Hände auf, heilt ihn im Namen des Herrn und tauft ihn – so nimmt die Kirche Paulus auf.", sr: "Савладава свој страх, полаже руке на Савла, исцељује га у име Господње и крштава га – тако Црква прима Павла." } },
        { q: { de: "Was lehrt diese Geschichte über Umkehr?", sr: "Чему ова повест учи о покајању?" },
          a: { de: "Dass niemand für Gott verloren ist und dass eine echte Begegnung mit Christus ein ganzes Leben verändern kann.", sr: "Да нико није изгубљен за Бога и да истински сусрет са Христом може да промени цео живот." } }
      ],
      practice: {
        de: "Denke an einen Menschen, den du innerlich „abgeschrieben“ hast. Bete heute für ihn – Gott kann auch ihn verwandeln.",
        sr: "Помислите на човека кога сте у себи „отписали“. Помолите се данас за њега – Бог и њега може да преобрази."
      },
      review: {
        de: "Christus begegnet dem Verfolger Saulus vor Damaskus. Durch Hananias wird er geheilt und getauft und wird zum Apostel Paulus.",
        sr: "Христос среће гонитеља Савла пред Дамаском. Преко Ананије он бива исцељен и крштен и постаје апостол Павле."
      },
      quiz: [
        { q: { de: "Wohin war Saulus unterwegs?", sr: "Куда је Савле путовао?" },
          options: [{ de: "Nach Damaskus", sr: "У Дамаск" }, { de: "Nach Rom", sr: "У Рим" }, { de: "Nach Antiochien", sr: "У Антиохију" }], correct: 0 },
        { q: { de: "Wer legte Saulus die Hände auf und taufte ihn?", sr: "Ко је положио руке на Савла и крстио га?" },
          options: [{ de: "Hananias", sr: "Ананија" }, { de: "Petrus", sr: "Петар" }, { de: "Barnabas", sr: "Варнава" }], correct: 0 },
        { q: { de: "Wie lange aß und trank Saulus nach der Begegnung nicht?", sr: "Колико дана Савле после сусрета није јео ни пио?" },
          options: [{ de: "Drei Tage", sr: "Три дана" }, { de: "Vierzig Tage", sr: "Четрдесет дана" }, { de: "Einen Tag", sr: "Један дан" }], correct: 0 },
        { q: { de: "An welchem Tag feiert die Kirche Petrus und Paulus?", sr: "Ког дана Црква прославља Петра и Павла?" },
          options: [{ de: "29. Juni (12. Juli)", sr: "29. јуна (12. јула), на Петровдан" }, { de: "14. Januar (27. Januar)", sr: "14. јануара (27. јануара)" }, { de: "6. August (19. August)", sr: "6. августа (19. августа)" }], correct: 0 }
      ]
    },
    {
      id: "bib-rom6", book: "rom", order: 17,
      title: { de: "Mit Christus begraben und auferstanden – die Taufe", sr: "Сахрањени и васкрсли са Христом – крштење" },
      ref: { de: "Römer 6,1–11", sr: "Римљанима 6,1–11" },
      intro: {
        de: "Der Römerbrief ist der längste Brief des Apostels Paulus. Er schrieb ihn um das Jahr 57 an die Christen in Rom, bevor er selbst dorthin kam. In Kapitel 6 erklärt er, was in der Taufe geschieht.",
        sr: "Посланица Римљанима најдужа је посланица апостола Павла. Написао ју је око 57. године хришћанима у Риму, пре него што је и сам дошао тамо. У шестој глави објашњава шта се збива у крштењу."
      },
      introTag: "history",
      context: {
        de: "Paulus hat zuvor erklärt, dass Gottes Gnade größer ist als jede Sünde. Manche zogen daraus den falschen Schluss: Dann können wir ruhig weiter sündigen. Paulus antwortet mit dem Hinweis auf die Taufe.",
        sr: "Павле је претходно објаснио да је Божија благодат већа од сваког греха. Неки су из тога извели погрешан закључак: онда можемо мирно да наставимо да грешимо. Павле одговара указујући на крштење."
      },
      reading: [
        { ref: { de: "Röm 6,1–4", sr: "Рим 6,1–4" }, note: { de: "Getauft in den Tod Christi.", sr: "Крштени у смрт Христову." } },
        { ref: { de: "Röm 6,5–11", sr: "Рим 6,5–11" }, note: { de: "Tot für die Sünde, lebendig für Gott.", sr: "Мртви за грех, живи за Бога." } }
      ],
      summary: {
        de: "Sollen wir in der Sünde bleiben, damit die Gnade größer wird? Auf keinen Fall! Wer auf Christus getauft ist, ist auf seinen Tod getauft. Wir wurden mit ihm begraben, damit wir, wie Christus von den Toten auferweckt wurde, in einem neuen Leben wandeln. Der alte Mensch wurde mitgekreuzigt, damit wir nicht mehr Sklaven der Sünde sind. Christus stirbt nicht mehr; der Tod hat keine Macht mehr über ihn. So sollt auch ihr euch als tot für die Sünde, aber lebendig für Gott in Christus Jesus betrachten.",
        sr: "Да ли да останемо у греху да би се умножила благодат? Никако! Ко се крстио у Христа, крстио се у Његову смрт. Сахрањени смо с Њим, да бисмо, као што је Христос васкрсао из мртвих, ходили у новом животу. Стари човек је распет с Њим, да не бисмо више робовали греху. Христос више не умире; смрт више нема власти над Њим. Тако и ви сматрајте себе мртвима за грех, а живима за Бога у Христу Исусу."
      },
      interp: {
        simple: {
          de: "Die Taufe ist kein bloßes Zeichen. In ihr sterben wir mit Christus dem alten Leben und stehen mit ihm zu einem neuen Leben auf. Darum sollen Getaufte nicht mehr wie Sklaven der Sünde leben.",
          sr: "Крштење није само знак. У њему са Христом умиремо старом животу и са Њим устајемо за нов живот. Зато крштени више не треба да живе као робови греха."
        },
        deeper: {
          de: "In der orthodoxen Kirche wird die Taufe in der Regel durch dreimaliges Untertauchen im Namen des Vaters, des Sohnes und des Heiligen Geistes gespendet. Das Untertauchen macht anschaulich, was Paulus beschreibt: Begrabenwerden und Auferstehen mit Christus. Genau dieser Abschnitt (Röm 6,3–11) wird bei jeder Taufe und in der Liturgie des Großen Samstags gelesen. Bei der Taufe wird gesungen: „Alle, die ihr auf Christus getauft seid, habt Christus angezogen“ (Gal 3,27); dieser Gesang ersetzt an einigen großen Festen auch das Trisagion. Die Taufe schenkt einen neuen Anfang, der im ganzen Leben entfaltet werden muss – durch Umkehr, Gebet und die Mysterien.",
          sr: "У Православној Цркви крштење се по правилу обавља троструким погружењем у име Оца и Сина и Светога Духа. Погружење очигледно показује оно што Павле описује: сахрањивање и васкрсење са Христом. Управо овај одељак (Рим 6,3–11) чита се на сваком крштењу и на Литургији Велике суботе. При крштењу се пева: „Који се у Христа крстисте, у Христа се обукосте“ (Гал 3,27); ова песма на неке велике празнике замењује и Трисвету песму. Крштење дарује нов почетак, који треба развијати целим животом – кроз покајање, молитву и Свете тајне."
        },
        tag: "dogma"
      },
      christ: {
        de: "Christus ist für uns gestorben und auferstanden. In der Taufe werden wir mit seinem Tod und seiner Auferstehung vereint und haben Anteil an seinem Sieg über Sünde und Tod.",
        sr: "Христос је за нас умро и васкрсао. У крштењу се сједињујемо са Његовом смрћу и Васкрсењем и имамо удела у Његовој победи над грехом и смрћу."
      },
      links: [
        { ref: { de: "Gal 3,27", sr: "Гал 3,27" }, note: { de: "Christus angezogen.", sr: "У Христа се обукосте." } },
        { ref: { de: "Kol 2,12", sr: "Кол 2,12" }, note: { de: "Mit ihm begraben in der Taufe.", sr: "Сахрањени с Њим у крштењу." } },
        { ref: { de: "Joh 3,5", sr: "Јн 3,5" }, note: { de: "Aus Wasser und Geist geboren.", sr: "Рођен из воде и Духа." } },
        { ref: { de: "Mt 28,19", sr: "Мт 28,19" }, note: { de: "Tauft im Namen des Vaters, des Sohnes und des Heiligen Geistes.", sr: "Крстите у име Оца и Сина и Светога Духа." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus legt den Römerbrief in Homilien aus; sie sind in englischer Übersetzung frei zugänglich (NPNF I/11, im Band mit den Homilien zur Apostelgeschichte, siehe Bibliothek).",
        sr: "Свети Јован Златоуст тумачи Посланицу Римљанима у беседама; слободно су доступне у енглеском преводу (NPNF I/11, у тому са беседама на Дела апостолска, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was geschieht nach Paulus in der Taufe?", sr: "Шта се према Павлу збива у крштењу?" },
          a: { de: "Wir werden mit Christus begraben und stehen mit ihm zu einem neuen Leben auf.", sr: "Сахрањујемо се са Христом и са Њим устајемо за нов живот." } },
        { q: { de: "Warum wird in der orthodoxen Kirche dreimal untergetaucht?", sr: "Зашто се у Православној Цркви крштава троструким погружењем?" },
          a: { de: "Im Namen der drei Personen der Dreifaltigkeit; das Untertauchen zeigt zugleich das Begrabenwerden und Auferstehen mit Christus.", sr: "У име три Лица Свете Тројице; погружење истовремено показује сахрањивање и васкрсење са Христом." } },
        { q: { de: "Wann wird Röm 6,3–11 gelesen?", sr: "Када се чита Рим 6,3–11?" },
          a: { de: "Bei jeder Taufe und in der Liturgie des Großen Samstags.", sr: "На сваком крштењу и на Литургији Велике суботе." } }
      ],
      practice: {
        de: "Erfrage, wenn möglich, dein Taufdatum und gedenke dieses Tages wie eines zweiten Geburtstags. Erneuere im Gebet bewusst die Absage an das Böse und die Verbindung mit Christus.",
        sr: "Ако је могуће, сазнајте датум свог крштења и сећајте се тог дана као другог рођендана. У молитви свесно обновите одрицање од зла и сједињење са Христом."
      },
      review: {
        de: "In der Taufe sterben wir mit Christus und stehen mit ihm auf. Getaufte sind tot für die Sünde und lebendig für Gott. Der Abschnitt wird bei jeder Taufe gelesen.",
        sr: "У крштењу умиремо са Христом и са Њим устајемо. Крштени су мртви за грех и живи за Бога. Овај одељак се чита на сваком крштењу."
      },
      quiz: [
        { q: { de: "Wie wird die Taufe in der orthodoxen Kirche in der Regel gespendet?", sr: "Како се у Православној Цркви по правилу обавља крштење?" },
          options: [{ de: "Durch dreimaliges Untertauchen", sr: "Троструким погружењем" }, { de: "Nur durch Besprengen", sr: "Само кропљењем" }, { de: "Durch Handauflegung allein", sr: "Само полагањем руку" }], correct: 0 },
        { q: { de: "Welcher Gesang wird bei der Taufe gesungen?", sr: "Која песма се пева при крштењу?" },
          options: [{ de: "„Alle, die ihr auf Christus getauft seid …“", sr: "„Који се у Христа крстисте …“" }, { de: "Der Cherubimhymnus", sr: "Херувимска песма" }, { de: "Das Lied des Mose", sr: "Мојсијева песма" }], correct: 0 },
        { q: { de: "Um welches Jahr schrieb Paulus den Römerbrief?", sr: "Око које године је Павле написао Посланицу Римљанима?" },
          options: [{ de: "Um 57", sr: "Око 57." }, { de: "Um 150", sr: "Око 150." }, { de: "Um 5 v. Chr.", sr: "Око 5. пре Христа" }], correct: 0 }
      ]
    },
    {
      id: "bib-1cor13", book: "cor", order: 18,
      title: { de: "Das Hohelied der Liebe", sr: "Химна љубави" },
      ref: { de: "1. Korinther 13", sr: "1. Коринћанима 13" },
      intro: {
        de: "Paulus schrieb den ersten Korintherbrief an eine Gemeinde, die er selbst gegründet hatte. Dort gab es Streit, Spaltungen und Stolz auf geistliche Gaben. Mitten in diese Probleme stellt er das Lob der Liebe.",
        sr: "Павле је Прву посланицу Коринћанима упутио заједници коју је сам основао. Тамо је било свађа, подела и гордости због духовних дарова. Усред тих проблема он поставља похвалу љубави."
      },
      introTag: "history",
      context: {
        de: "In Korinth hielten sich manche für besonders geistlich, weil sie in Zungen redeten oder prophezeiten. In Kapitel 12 erklärt Paulus, dass alle Gaben vom selben Geist kommen und dem einen Leib dienen. Kapitel 13 zeigt den „noch besseren Weg“.",
        sr: "У Коринту су се неки сматрали посебно духовнима јер су говорили језицима или пророковали. У 12. глави Павле објашњава да сви дарови долазе од истог Духа и служе једном телу. Тринаеста глава показује „још бољи пут“."
      },
      reading: [
        { ref: { de: "1 Kor 12,31 – 13,3", sr: "1 Кор 12,31 – 13,3" }, note: { de: "Ohne Liebe ist alles nichts.", sr: "Без љубави све је ништа." } },
        { ref: { de: "1 Kor 13,4–7", sr: "1 Кор 13,4–7" }, note: { de: "Wie die Liebe ist.", sr: "Каква је љубав." } },
        { ref: { de: "1 Kor 13,8–13", sr: "1 Кор 13,8–13" }, note: { de: "Die Liebe hört niemals auf.", sr: "Љубав никада не престаје." } }
      ],
      summary: {
        de: "Wenn ich in allen Sprachen redete, alle Geheimnisse wüsste, Berge versetzen könnte und all meinen Besitz verschenkte, hätte aber die Liebe nicht, wäre ich nichts. Die Liebe ist langmütig und gütig; sie eifert nicht, prahlt nicht und bläht sich nicht auf; sie sucht nicht das Ihre, lässt sich nicht erbittern und rechnet das Böse nicht zu; sie freut sich an der Wahrheit; sie erträgt, glaubt, hofft und erduldet alles. Prophetie und Erkenntnis sind Stückwerk und vergehen, die Liebe aber hört niemals auf. Jetzt sehen wir wie in einem Spiegel, dann aber von Angesicht zu Angesicht. Es bleiben Glaube, Hoffnung und Liebe – die größte von ihnen ist die Liebe.",
        sr: "Када бих говорио свим језицима, знао све тајне, премештао горе и разделио сав свој иметак, а љубави немам, ништа сам. Љубав дуго трпи и блага је; љубав не завиди, не хвали се, не надима се; не тражи своје, не раздражује се, не мисли зло; радује се истини; све сноси, све верује, свему се нада, све трпи. Пророштва и знање су делимични и престаће, а љубав никада не престаје. Сада видимо као у огледалу, а тада лицем у лице. Остају вера, нада и љубав – а највећа међу њима је љубав."
      },
      interp: {
        simple: {
          de: "Ohne Liebe sind alle Gaben, alles Wissen und sogar große Opfer wertlos. Die Liebe, von der Paulus spricht, ist kein bloßes Gefühl, sondern eine Haltung, die sich im geduldigen und selbstlosen Handeln zeigt.",
          sr: "Без љубави сви дарови, свако знање, па и велике жртве немају вредност. Љубав о којој Павле говори није само осећање, него став који се показује у стрпљивом и несебичном делању."
        },
        deeper: {
          de: "Die Väter sehen in diesem Kapitel ein Porträt Christi selbst: Wenn man „die Liebe“ durch „Christus“ ersetzt, beschreibt der Text sein Leben. Weil Gott Liebe ist (1 Joh 4,8), bedeutet Wachsen in der Liebe, Gott ähnlich zu werden – das ist der Weg der Theosis. Der hl. Maximus der Bekenner nennt die Liebe die Krone aller Tugenden. Dass die Liebe „niemals aufhört“, verweist auf das ewige Leben: Glaube und Hoffnung werden einmal erfüllt sein, die Liebe aber bleibt in Ewigkeit.",
          sr: "Оци у овој глави виде портрет самог Христа: ако се „љубав“ замени са „Христос“, текст описује Његов живот. Пошто је Бог љубав (1 Јн 4,8), раст у љубави значи постајати сличан Богу – то је пут обожења. Свети Максим Исповедник назива љубав круном свих врлина. То што љубав „никада не престаје“ указује на вечни живот: вера и нада ће се једном испунити, а љубав остаје довека."
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus hat diese Liebe vollkommen gelebt – bis zum Kreuz. Sie ist nicht unsere eigene Leistung, sondern Frucht des Heiligen Geistes in uns (Gal 5,22).",
        sr: "Христос је ову љубав савршено живео – до крста. Она није наше сопствено достигнуће, него плод Духа Светога у нама (Гал 5,22)."
      },
      links: [
        { ref: { de: "1 Joh 4,7–8", sr: "1 Јн 4,7–8" }, note: { de: "Gott ist Liebe.", sr: "Бог је љубав." } },
        { ref: { de: "Joh 15,12–13", sr: "Јн 15,12–13" }, note: { de: "Niemand hat größere Liebe, als wer sein Leben hingibt.", sr: "Од ове љубави нико нема веће, да ко живот свој положи." } },
        { ref: { de: "Gal 5,22", sr: "Гал 5,22" }, note: { de: "Die Frucht des Geistes ist Liebe.", sr: "Плод Духа је љубав." } },
        { ref: { de: "Mt 22,37–40", sr: "Мт 22,37–40" }, note: { de: "Das höchste Gebot: Liebe zu Gott und zum Nächsten.", sr: "Највећа заповест: љубав према Богу и ближњему." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus legt den ersten Korintherbrief in Homilien aus; sie sind in englischer Übersetzung frei zugänglich (NPNF I/12, siehe Bibliothek). Der hl. Maximus der Bekenner hat seine „Kapitel über die Liebe“ geschrieben, die in der Philokalie stehen.",
        sr: "Свети Јован Златоуст тумачи Прву посланицу Коринћанима у беседама; слободно су доступне у енглеском преводу (NPNF I/12, види библиотеку). Свети Максим Исповедник написао је своје „Главе о љубави“, које се налазе у Добротољубљу."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum stellt Paulus die Liebe über alle Gaben?", sr: "Зашто Павле ставља љубав изнад свих дарова?" },
          a: { de: "Weil alle Gaben ohne Liebe wertlos sind und vergehen, die Liebe aber niemals aufhört.", sr: "Зато што су сви дарови без љубави безвредни и пролазни, а љубав никада не престаје." } },
        { q: { de: "Was passiert, wenn man in 1 Kor 13,4–7 „Liebe“ durch „Christus“ ersetzt?", sr: "Шта се дешава ако се у 1 Кор 13,4–7 „љубав“ замени са „Христос“?" },
          a: { de: "Der Text beschreibt das Leben Christi – er ist die vollkommene Verkörperung dieser Liebe.", sr: "Текст описује Христов живот – Он је савршено оваплоћење те љубави." } },
        { q: { de: "Welche drei Dinge bleiben nach Paulus?", sr: "Које три ствари, према Павлу, остају?" },
          a: { de: "Glaube, Hoffnung und Liebe; die größte ist die Liebe.", sr: "Вера, нада и љубав; највећа је љубав." } }
      ],
      practice: {
        de: "Lies 1 Kor 13,4–7 und setze statt „die Liebe“ deinen eigenen Namen ein. Wo stimmt es noch nicht? Wähle eine Eigenschaft, an der du diese Woche arbeiten willst, z. B. Geduld.",
        sr: "Прочитајте 1 Кор 13,4–7 и уместо „љубав“ ставите своје име. Где то још није тачно? Изаберите једну особину на којој ћете радити ове недеље, нпр. стрпљење."
      },
      review: {
        de: "Ohne Liebe ist alles nichts. Die Liebe ist geduldig, gütig und selbstlos und hört niemals auf. Glaube, Hoffnung und Liebe bleiben – die größte ist die Liebe.",
        sr: "Без љубави све је ништа. Љубав је стрпљива, блага и несебична и никада не престаје. Остају вера, нада и љубав – највећа је љубав."
      },
      quiz: [
        { q: { de: "Was ist nach Paulus die größte von Glaube, Hoffnung und Liebe?", sr: "Шта је према Павлу највеће од вере, наде и љубави?" },
          options: [{ de: "Die Liebe", sr: "Љубав" }, { de: "Der Glaube", sr: "Вера" }, { de: "Die Hoffnung", sr: "Нада" }], correct: 0 },
        { q: { de: "Welches Problem gab es in der Gemeinde von Korinth?", sr: "Који проблем је постојао у заједници у Коринту?" },
          options: [{ de: "Streit und Stolz auf geistliche Gaben", sr: "Свађе и гордост због духовних дарова" }, { de: "Verfolgung durch den Kaiser", sr: "Гоњење од цара" }, { de: "Hungersnot", sr: "Глад" }], correct: 0 },
        { q: { de: "Welcher Vater nennt die Liebe die Krone der Tugenden?", sr: "Који Отац назива љубав круном врлина?" },
          options: [{ de: "Maximus der Bekenner", sr: "Максим Исповедник" }, { de: "Kyrill von Alexandrien", sr: "Кирило Александријски" }, { de: "Ephräm der Syrer", sr: "Јефрем Сирин" }], correct: 0 }
      ]
    },
    {
      id: "bib-ps22", book: "ps", order: 19,
      title: { de: "Der Herr ist mein Hirte", sr: "Господ је пастир мој" },
      ref: { de: "Psalm 22 (23)", sr: "Псалам 22 (23)" },
      intro: {
        de: "Dieser Psalm Davids ist einer der bekanntesten der ganzen Bibel. David war selbst als junger Mann Hirte. Er beschreibt Gott als guten Hirten, der für sein Schaf sorgt. In der Septuaginta-Zählung ist es Psalm 22, in vielen anderen Ausgaben Psalm 23.",
        sr: "Овај Давидов псалам један је од најпознатијих у целој Библији. Давид је и сам као младић био пастир. Он описује Бога као доброг пастира који се брине о својој овци. По нумерацији Септуагинте то је 22. псалам, у многим другим издањима 23."
      },
      introTag: "history",
      context: {
        de: "Im alten Israel war das Bild des Hirten vertraut: Ein Hirte führt seine Herde zu Weide und Wasser, schützt sie vor Raubtieren und sucht die Verlorenen. Auch Könige und Führer des Volkes wurden „Hirten“ genannt.",
        sr: "У старом Израиљу слика пастира била је позната: пастир води стадо на пашу и воду, штити га од звери и тражи изгубљене. И цареви и вође народа називани су „пастирима“."
      },
      reading: [
        { ref: { de: "Ps 22 (23),1–3", sr: "Пс 22 (23),1–3" }, note: { de: "Grüne Weide und stilles Wasser.", sr: "Зелена паша и тиха вода." } },
        { ref: { de: "Ps 22 (23),4", sr: "Пс 22 (23),4" }, note: { de: "Im finsteren Tal fürchte ich kein Unheil.", sr: "У долини смртне сенке не бојим се зла." } },
        { ref: { de: "Ps 22 (23),5–6", sr: "Пс 22 (23),5–6" }, note: { de: "Der gedeckte Tisch und das Öl.", sr: "Припремљена трпеза и уље." } }
      ],
      summary: {
        de: "Weil der Herr mein Hirte ist, fehlt mir nichts. Er lässt mich auf grünen Weiden lagern und führt mich zu ruhigem Wasser; er erquickt meine Seele und führt mich auf rechten Wegen. Auch wenn ich durch ein Tal der Todesschatten gehe, fürchte ich kein Unheil, denn er ist bei mir; sein Stab tröstet mich. Er deckt mir einen Tisch vor meinen Feinden, salbt mein Haupt mit Öl, und mein Becher fließt über. Seine Güte begleitet mich alle Tage, und ich werde im Haus des Herrn wohnen.",
        sr: "Пошто је Господ пастир мој, ништа ми неће недостајати. Он ме одмара на зеленој паши и води ме на тиху воду; окрепљује душу моју и води ме правим стазама. Ако пођем и долином смртне сенке, нећу се бојати зла, јер је Он са мном; Његов штап ме теши. Он ми припрема трпезу пред непријатељима мојим, помазује ми главу уљем, и чаша моја се прелива. Његова доброта прати ме све дане, и живећу у дому Господњем."
      },
      interp: {
        simple: {
          de: "Gott sorgt für uns wie ein guter Hirte – in guten Zeiten und in dunklen Tälern. Wer ihm vertraut, muss sich nicht fürchten, denn er ist immer bei uns.",
          sr: "Бог се брине о нама као добри пастир – у добрим временима и у тамним долинама. Ко Му верује, не мора да се боји, јер је Он увек са нама."
        },
        deeper: {
          de: "Christus nennt sich selbst den guten Hirten, der sein Leben für die Schafe gibt (Joh 10,11). Die Kirche liest den Psalm darum im Licht Christi. Die Väter deuten die Bilder auch auf die Mysterien: das Wasser auf die Taufe, das Öl auf die Myronsalbung und den gedeckten Tisch mit dem überfließenden Becher auf die Eucharistie. Passend dazu steht dieser Psalm am Anfang der Gebete zur Vorbereitung auf die heilige Kommunion.",
          sr: "Христос себе назива добрим пастиром који живот свој полаже за овце (Јн 10,11). Зато Црква овај псалам чита у светлости Христовој. Оци слике тумаче и као Свете тајне: воду као крштење, уље као миропомазање, а припремљену трпезу са чашом која се прелива као Евхаристију. У складу с тим, овај псалам стоји на почетку молитава за припрему за свето причешће."
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus ist der gute Hirte, der seine Schafe kennt, sie beim Namen ruft, das verlorene sucht und sein Leben für sie hingibt.",
        sr: "Христос је добри пастир који познаје своје овце, зове их по имену, тражи изгубљену и полаже живот свој за њих."
      },
      links: [
        { ref: { de: "Joh 10,11–16", sr: "Јн 10,11–16" }, note: { de: "Ich bin der gute Hirte.", sr: "Ја сам добри пастир." } },
        { ref: { de: "Lk 15,3–7", sr: "Лк 15,3–7" }, note: { de: "Das verlorene Schaf.", sr: "Изгубљена овца." } },
        { ref: { de: "Ez 34,11–16", sr: "Јез 34,11–16" }, note: { de: "Gott selbst will seine Schafe weiden.", sr: "Бог сам хоће да пасе своје овце." } },
        { ref: { de: "1 Sam (1 Kön) 16,11–13", sr: "1 Цар 16,11–13" }, note: { de: "Der Hirtenjunge David wird gesalbt.", sr: "Пастир Давид бива помазан." } }
      ],
      fathers: {
        de: "Der hl. Kyrill von Jerusalem deutet in seinen mystagogischen Katechesen – Unterweisungen für Neugetaufte – den gedeckten Tisch und das Öl dieses Psalms auf die Mysterien der Kirche. Die Katechesen sind in englischer Übersetzung frei zugänglich (NPNF II/7, im Band mit Gregor von Nazianz, siehe Bibliothek).",
        sr: "Свети Кирило Јерусалимски у својим тајноводствујућим поукама – поукама за новокрштене – тумачи припремљену трпезу и уље овог псалма као Свете тајне Цркве. Поуке су слободно доступне у енглеском преводу (NPNF II/7, у тому са Григоријем Богословом, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum passt das Bild des Hirten zu David?", sr: "Зашто слика пастира одговара Давиду?" },
          a: { de: "Weil David selbst als junger Mann Hirte war, bevor er König wurde.", sr: "Зато што је Давид и сам као младић био пастир, пре него што је постао цар." } },
        { q: { de: "Wie deuten die Väter Wasser, Öl und Tisch?", sr: "Како Оци тумаче воду, уље и трпезу?" },
          a: { de: "Als Bilder für Taufe, Myronsalbung und Eucharistie.", sr: "Као слике крштења, миропомазања и Евхаристије." } },
        { q: { de: "Wo steht dieser Psalm in den Gebeten der Kirche?", sr: "Где се овај псалам налази у молитвама Цркве?" },
          a: { de: "Am Anfang der Gebete zur Vorbereitung auf die Kommunion.", sr: "На почетку молитава за припрему за причешће." } }
      ],
      practice: {
        de: "Lerne diesen kurzen Psalm auswendig. Bete ihn besonders in Momenten der Angst oder wenn du durch ein „dunkles Tal“ gehst.",
        sr: "Научите овај кратки псалам напамет. Молите га нарочито у тренуцима страха или када пролазите кроз „тамну долину“."
      },
      review: {
        de: "Der Herr ist mein Hirte: Er sorgt, führt und schützt, auch im finsteren Tal. Christus ist der gute Hirte; Tisch und Öl weisen auf die Mysterien.",
        sr: "Господ је пастир мој: брине, води и штити, и у тамној долини. Христос је добри пастир; трпеза и уље указују на Свете тајне."
      },
      quiz: [
        { q: { de: "Welche Nummer hat dieser Psalm in der Septuaginta?", sr: "Који број има овај псалам у Септуагинти?" },
          options: [{ de: "22", sr: "22" }, { de: "23", sr: "23" }, { de: "50", sr: "50" }], correct: 0 },
        { q: { de: "Wer nennt sich im Johannesevangelium „der gute Hirte“?", sr: "Ко себе у Јеванђељу по Јовану назива „добрим пастиром“?" },
          options: [{ de: "Christus", sr: "Христос" }, { de: "Petrus", sr: "Петар" }, { de: "Johannes der Täufer", sr: "Јован Крститељ" }], correct: 0 },
        { q: { de: "Worauf deuten die Väter den gedeckten Tisch und den überfließenden Becher?", sr: "Како Оци тумаче припремљену трпезу и чашу која се прелива?" },
          options: [{ de: "Auf die Eucharistie", sr: "Као Евхаристију" }, { de: "Auf ein Festessen", sr: "Као гозбу" }, { de: "Auf das Fasten", sr: "Као пост" }], correct: 0 }
      ]
    },
    {
      id: "bib-rev21", book: "rev", order: 20,
      title: { de: "Der neue Himmel und die neue Erde", sr: "Ново небо и нова земља" },
      ref: { de: "Offenbarung 21,1–7", sr: "Откривење 21,1–7" },
      intro: {
        de: "Die Offenbarung (griechisch Apokalypse, „Enthüllung“) ist das letzte Buch der Bibel. Nach der Überlieferung schrieb sie der Apostel Johannes in der Verbannung auf der Insel Patmos. Sie ist reich an Bildern und spricht vom endgültigen Sieg Christi.",
        sr: "Откривење (грчки Апокалипса, „откривање“) последња је књига Библије. Према предању, написао ју је апостол Јован у изгнанству на острву Патмосу. Пуна је слика и говори о коначној победи Христовој."
      },
      introTag: "history",
      context: {
        de: "Die ersten Christen litten unter Verfolgung. Die Offenbarung macht ihnen Mut: Das Böse hat nicht das letzte Wort. Nach den Bildern von Gericht und Kampf beschreiben die letzten Kapitel die Vollendung der Schöpfung.",
        sr: "Први хришћани су трпели гоњења. Откривење им даје храброст: зло нема последњу реч. После слика суда и борбе, последње главе описују испуњење створеног света."
      },
      reading: [
        { ref: { de: "Offb 21,1–4", sr: "Отк 21,1–4" }, note: { de: "Gott wohnt bei den Menschen und wischt jede Träne ab.", sr: "Бог обитава са људима и брише сваку сузу." } },
        { ref: { de: "Offb 21,5–7", sr: "Отк 21,5–7" }, note: { de: "Siehe, ich mache alles neu.", sr: "Ево, све ново творим." } }
      ],
      summary: {
        de: "Johannes sieht einen neuen Himmel und eine neue Erde. Die heilige Stadt, das neue Jerusalem, kommt von Gott herab, geschmückt wie eine Braut für ihren Bräutigam. Eine Stimme sagt: Siehe, die Wohnung Gottes ist bei den Menschen; er wird bei ihnen wohnen, und sie werden sein Volk sein. Er wird jede Träne abwischen; Tod, Trauer, Klage und Schmerz wird es nicht mehr geben. Der auf dem Thron sitzt, spricht: Siehe, ich mache alles neu. Ich bin das Alpha und das Omega, der Anfang und das Ende. Dem Dürstenden gebe ich umsonst vom Wasser des Lebens.",
        sr: "Јован види ново небо и нову земљу. Свети град, нови Јерусалим, силази од Бога, украшен као невеста за свог женика. Глас говори: ево скиније Божије међу људима; Он ће обитавати с њима и они ће бити Његов народ. Он ће обрисати сваку сузу; смрти, туге, вапаја и бола више неће бити. Који седи на престолу говори: ево, све ново творим. Ја сам Алфа и Омега, почетак и крај. Жедноме ћу дати бесплатно од извора воде живота."
      },
      interp: {
        simple: {
          de: "Am Ende steht nicht die Zerstörung, sondern die Erneuerung: Gott macht alles neu. Es wird keinen Tod und keine Tränen mehr geben, und Gott wird für immer bei den Menschen sein.",
          sr: "На крају не стоји уништење, него обновљење: Бог све ново твори. Неће више бити смрти ни суза, и Бог ће заувек бити са људима."
        },
        deeper: {
          de: "Die orthodoxe Kirche liest die Offenbarung nicht als Fahrplan für Weltuntergangs-Spekulationen, sondern als Trost und Ermutigung zur Treue. Bemerkenswert: Sie ist das einzige Buch des Neuen Testaments, das in der Göttlichen Liturgie nicht gelesen wird. Ihre Bilder haben dennoch die Liturgie und die Ikonen tief geprägt; die Liturgie wird als Vorgeschmack des himmlischen Gottesdienstes verstanden. Die älteste erhaltene griechische Auslegung des ganzen Buches stammt vom hl. Andreas von Caesarea. Die Hoffnung auf die neue Schöpfung bekennen wir im Glaubensbekenntnis: „Ich erwarte die Auferstehung der Toten und das Leben der kommenden Weltzeit.“",
          sr: "Православна Црква не чита Откривење као план за нагађања о смаку света, него као утеху и подстицај на верност. Вредно је знати: то је једина књига Новог Завета која се не чита на Светој Литургији. Ипак, њене слике су дубоко обликовале богослужење и иконе; Литургија се схвата као предокус небеског богослужења. Најстарије сачувано грчко тумачење целе књиге потиче од светог Андреја Кесаријског. Наду у ново стварање исповедамо у Символу вере: „Чекам васкрсење мртвих и живот будућега века.“"
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus ist das Alpha und das Omega, Anfang und Ende. Durch seine Auferstehung hat die neue Schöpfung schon begonnen; an seinem Ende wird sie vollendet.",
        sr: "Христос је Алфа и Омега, почетак и крај. Његовим Васкрсењем ново стварање је већ почело; на крају ће бити испуњено."
      },
      links: [
        { ref: { de: "Jes 65,17", sr: "Ис 65,17" }, note: { de: "Gott verheißt einen neuen Himmel und eine neue Erde.", sr: "Бог обећава ново небо и нову земљу." } },
        { ref: { de: "2 Kor 5,17", sr: "2 Кор 5,17" }, note: { de: "Wer in Christus ist, ist eine neue Schöpfung.", sr: "Ко је у Христу, нова је твар." } },
        { ref: { de: "Röm 8,19–23", sr: "Рим 8,19–23" }, note: { de: "Die ganze Schöpfung wartet auf Befreiung.", sr: "Сва твар чека ослобођење." } },
        { ref: { de: "Offb 22,20", sr: "Отк 22,20" }, note: { de: "Komm, Herr Jesus!", sr: "Дођи, Господе Исусе!" } }
      ],
      fathers: {
        de: "Der hl. Andreas von Caesarea (6./7. Jahrhundert) verfasste die älteste erhaltene griechische Auslegung der ganzen Offenbarung; sie hat die orthodoxe Deutung des Buches stark geprägt. Für diese Version wurde kein freier, rechtmäßiger Link zum Text geprüft.",
        sr: "Свети Андреј Кесаријски (6/7. век) написао је најстарије сачувано грчко тумачење целог Откривења; оно је снажно обликовало православно разумевање ове књиге. За ово издање није проверена слободна, законито доступна веза ка тексту."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Welche Botschaft hatte die Offenbarung für die verfolgten Christen?", sr: "Какву поруку је Откривење имало за гоњене хришћане?" },
          a: { de: "Das Böse hat nicht das letzte Wort; Christus siegt, und Gott wird alles neu machen.", sr: "Зло нема последњу реч; Христос побеђује, и Бог ће све учинити новим." } },
        { q: { de: "Was ist an der Offenbarung in der Liturgie besonders?", sr: "Шта је посебно у вези са Откривењем на Литургији?" },
          a: { de: "Sie ist das einzige Buch des Neuen Testaments, das in der Göttlichen Liturgie nicht gelesen wird.", sr: "То је једина књига Новог Завета која се не чита на Светој Литургији." } },
        { q: { de: "Wo bekennen wir die Hoffnung auf die neue Schöpfung?", sr: "Где исповедамо наду у ново стварање?" },
          a: { de: "Im Glaubensbekenntnis: Ich erwarte die Auferstehung der Toten und das Leben der kommenden Weltzeit.", sr: "У Символу вере: Чекам васкрсење мртвих и живот будућега века." } }
      ],
      practice: {
        de: "Wenn dich Nachrichten über Krisen oder angebliche Endzeit-Prophezeiungen beunruhigen, lies Offb 21,1–7 und bete: „Komm, Herr Jesus.“ Hoffnung statt Angst ist die christliche Haltung.",
        sr: "Када вас узнемире вести о кризама или наводна пророштва о смаку света, прочитајте Отк 21,1–7 и помолите се: „Дођи, Господе Исусе.“ Нада уместо страха је хришћански став."
      },
      review: {
        de: "Gott schafft einen neuen Himmel und eine neue Erde und wohnt bei den Menschen; es wird keinen Tod mehr geben. Christus ist Alpha und Omega. Die Offenbarung macht Mut zur Treue.",
        sr: "Бог ствара ново небо и нову земљу и обитава са људима; смрти више неће бити. Христос је Алфа и Омега. Откривење даје храброст за верност."
      },
      quiz: [
        { q: { de: "Wo schrieb Johannes nach der Überlieferung die Offenbarung?", sr: "Где је, према предању, Јован написао Откривење?" },
          options: [{ de: "Auf der Insel Patmos", sr: "На острву Патмосу" }, { de: "In Jerusalem", sr: "У Јерусалиму" }, { de: "In Rom", sr: "У Риму" }], correct: 0 },
        { q: { de: "Welches Buch des Neuen Testaments wird in der Liturgie nicht gelesen?", sr: "Која књига Новог Завета се не чита на Литургији?" },
          options: [{ de: "Die Offenbarung", sr: "Откривење" }, { de: "Der Römerbrief", sr: "Посланица Римљанима" }, { de: "Die Apostelgeschichte", sr: "Дела апостолска" }], correct: 0 },
        { q: { de: "Was bedeutet „Alpha und Omega“?", sr: "Шта значи „Алфа и Омега“?" },
          options: [{ de: "Anfang und Ende", sr: "Почетак и крај" }, { de: "Himmel und Erde", sr: "Небо и земља" }, { de: "Licht und Finsternis", sr: "Светлост и тама" }], correct: 0 },
        { q: { de: "Wer schrieb die älteste erhaltene griechische Auslegung der ganzen Offenbarung?", sr: "Ко је написао најстарије сачувано грчко тумачење целог Откривења?" },
          options: [{ de: "Andreas von Caesarea", sr: "Андреј Кесаријски" }, { de: "Basilius der Große", sr: "Василије Велики" }, { de: "Isaak der Syrer", sr: "Исак Сирин" }], correct: 0 }
      ]
    },
    {
      id: "bib-jon", book: "twelve", order: 21,
      title: { de: "Jona – der widerwillige Prophet", sr: "Јона – невољни пророк" },
      ref: { de: "Jona 1–4", sr: "Јона 1–4" },
      intro: {
        de: "Das Buch Jona ist kurz und lässt sich in einer Viertelstunde lesen. Es erzählt von einem Propheten, der vor Gottes Auftrag davonläuft, und von einer heidnischen Stadt, die umkehrt. Es gehört zu den zwölf kleinen Propheten.",
        sr: "Књига пророка Јоне је кратка и може се прочитати за четврт сата. Приповеда о пророку који бежи од Божијег налога и о незнабожачком граду који се каје. Спада у дванаест малих пророка."
      },
      introTag: "history",
      context: {
        de: "Ninive war die Hauptstadt Assyriens, eines grausamen Feindes Israels. Dass Gott ausgerechnet dieser Stadt einen Propheten schickt, war für Jona unerträglich. Das Buch fragt: Wie weit reicht Gottes Barmherzigkeit?",
        sr: "Ниневија је била престоница Асирије, сурове непријатељице Израиља. То што Бог баш том граду шаље пророка Јони је било неподношљиво. Књига пита: докле сеже Божија милост?"
      },
      reading: [
        { ref: { de: "Jona 1", sr: "Јона 1" }, note: { de: "Die Flucht, der Sturm und der große Fisch.", sr: "Бекство, бура и велика риба." } },
        { ref: { de: "Jona 2", sr: "Јона 2" }, note: { de: "Jonas Gebet im Bauch des Fisches.", sr: "Јонина молитва у утроби рибе." } },
        { ref: { de: "Jona 3–4", sr: "Јона 3–4" }, note: { de: "Ninive kehrt um; Jona ärgert sich über Gottes Güte.", sr: "Ниневија се каје; Јона се љути због Божије доброте." } }
      ],
      summary: {
        de: "Gott sendet Jona nach Ninive, doch er flieht auf einem Schiff in die entgegengesetzte Richtung. Ein Sturm bricht los; Jona bekennt seine Schuld und wird ins Meer geworfen. Ein großer Fisch verschlingt ihn, und nach drei Tagen und drei Nächten speit er ihn ans Land. Nun predigt Jona in Ninive. Die ganze Stadt, vom König bis zu den Tieren, fastet und kehrt um, und Gott verschont sie. Jona ist darüber zornig. Gott zeigt ihm an einer verdorrten Staude, dass er Mitleid mit allen Menschen hat, die er geschaffen hat.",
        sr: "Бог шаље Јону у Ниневију, али он бежи бродом на супротну страну. Настаје бура; Јона признаје кривицу и бива бачен у море. Велика риба га прогута, и после три дана и три ноћи избацује га на копно. Сада Јона проповеда у Ниневији. Цео град, од цара до стоке, пости и каје се, и Бог га поштеђује. Јона се због тога гневи. Бог му на сасушеној биљци показује да има милости према свим људима које је створио."
      },
      interp: {
        simple: {
          de: "Man kann vor Gott nicht weglaufen. Und Gottes Barmherzigkeit ist größer als unsere Vorstellungen: Er will, dass alle Menschen umkehren und leben – auch unsere Feinde.",
          sr: "Од Бога се не може побећи. И Божија милост је већа од наших представа: Он хоће да се сви људи покају и живе – и наши непријатељи."
        },
        deeper: {
          de: "Die Umkehr Ninives mit Fasten, Sacktuch und Gebet wurde in der Kirche zum Vorbild der Buße; die Fastenzeiten greifen dieses Bild auf. Jonas Gebet im Fisch (Kap. 2) gehört zu den biblischen Gesängen, auf denen die 6. Ode der Kanones aufbaut. Das Ende des Buches bleibt offen: Gottes Frage an Jona richtet sich an jeden Leser, der Gottes Güte für andere nicht gönnt.",
          sr: "Покајање Ниневије постом, кострећу и молитвом постало је у Цркви узор покајања; постови преузимају ту слику. Јонина молитва у риби (гл. 2) спада у библијске песме на којима се заснива 6. песма канона. Крај књиге остаје отворен: Божије питање Јони упућено је сваком читаоцу који другима не прашта Божију доброту."
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus nennt Jona ein Zeichen: Wie Jona drei Tage im Bauch des Fisches war, so wird der Menschensohn drei Tage im Schoß der Erde sein (Mt 12,40). Jonas Rettung aus der Tiefe ist ein Vorbild der Auferstehung.",
        sr: "Христос назива Јону знаком: као што је Јона био три дана у утроби рибе, тако ће Син Човечији бити три дана у срцу земље (Мт 12,40). Јонино избављење из дубине праслика је Васкрсења."
      },
      links: [
        { ref: { de: "Mt 12,38–41", sr: "Мт 12,38–41" }, note: { de: "Das Zeichen des Jona.", sr: "Знак Јоне пророка." } },
        { ref: { de: "1 Tim 2,4", sr: "1 Тим 2,4" }, note: { de: "Gott will, dass alle Menschen gerettet werden.", sr: "Бог хоће да се сви људи спасу." } },
        { ref: { de: "Ps 138 (139),7–10", sr: "Пс 138 (139),7–10" }, note: { de: "Wohin könnte ich fliehen vor dir?", sr: "Куда бих побегао од Тебе?" } },
        { ref: { de: "Lk 15,25–32", sr: "Лк 15,25–32" }, note: { de: "Der ältere Bruder – wie Jona unwillig über Gottes Güte.", sr: "Старији брат – као Јона незадовољан Божијом добротом." } }
      ],
      fathers: {
        de: "Der hl. Kyrill von Jerusalem erklärt in seinen Katechesen für die Taufbewerber (Katechese 14 über die Auferstehung) Jona als Vorbild der Auferstehung Christi. Die Katechesen sind in englischer Übersetzung frei zugänglich (NPNF II/7, siehe Bibliothek).",
        sr: "Свети Кирило Јерусалимски у својим катихезама за оглашене (14. катихеза, о Васкрсењу) објашњава Јону као праслику Христовог Васкрсења. Катихезе су слободно доступне у енглеском преводу (NPNF II/7, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum wollte Jona nicht nach Ninive?", sr: "Зашто Јона није хтео у Ниневију?" },
          a: { de: "Ninive war die Hauptstadt der Assyrer, der Feinde Israels. Jona wollte nicht, dass Gott ihnen gnädig ist.", sr: "Ниневија је била престоница Асираца, непријатеља Израиља. Јона није хтео да им Бог буде милостив." } },
        { q: { de: "Was ist das „Zeichen des Jona“?", sr: "Шта је „знак Јоне пророка“?" },
          a: { de: "Seine drei Tage im Fisch als Vorausbild der drei Tage Christi im Grab und seiner Auferstehung.", sr: "Његова три дана у риби као праслика Христових три дана у гробу и Његовог Васкрсења." } },
        { q: { de: "Was lehrt das Ende des Buches?", sr: "Чему учи крај књиге?" },
          a: { de: "Dass Gottes Mitleid allen Menschen gilt und wir anderen seine Güte gönnen sollen.", sr: "Да је Божија милост за све људе и да другима треба да желимо Његову доброту." } }
      ],
      practice: {
        de: "Gibt es einen Auftrag, vor dem du „davonläufst“ – ein Gespräch, eine Versöhnung, eine Pflicht? Nimm dir einen kleinen ersten Schritt vor und bete dafür.",
        sr: "Постоји ли задатак од кога „бежите“ – разговор, помирење, обавеза? Одредите мали први корак и помолите се за њега."
      },
      review: {
        de: "Jona flieht vor Gott, wird vom Fisch verschlungen und gerettet, predigt in Ninive, und die Stadt kehrt um. Gottes Barmherzigkeit gilt allen. Jona ist ein Zeichen für Tod und Auferstehung Christi.",
        sr: "Јона бежи од Бога, риба га гута и он бива спасен, проповеда у Ниневији, и град се каје. Божија милост важи за све. Јона је знак Христове смрти и Васкрсења."
      },
      quiz: [
        { q: { de: "Wohin sollte Jona gehen?", sr: "Куда је Јона требало да иде?" },
          options: [{ de: "Nach Ninive", sr: "У Ниневију" }, { de: "Nach Jerusalem", sr: "У Јерусалим" }, { de: "Nach Ägypten", sr: "У Египат" }], correct: 0 },
        { q: { de: "Wie lange war Jona im Bauch des Fisches?", sr: "Колико је Јона био у утроби рибе?" },
          options: [{ de: "Drei Tage und drei Nächte", sr: "Три дана и три ноћи" }, { de: "Vierzig Tage", sr: "Четрдесет дана" }, { de: "Eine Stunde", sr: "Један сат" }], correct: 0 },
        { q: { de: "Wann wird das ganze Buch Jona im Gottesdienst gelesen?", sr: "Када се цела Књига пророка Јоне чита на богослужењу?" },
          options: [{ de: "In der Vesper des Großen Samstags", sr: "На вечерњу Велике суботе" }, { de: "An Weihnachten", sr: "На Божић" }, { de: "An Pfingsten", sr: "На Духове" }], correct: 0 },
        { q: { de: "Wie reagiert Ninive auf Jonas Predigt?", sr: "Како Ниневија реагује на Јонину проповед?" },
          options: [{ de: "Die Stadt fastet und kehrt um", sr: "Град пости и каје се" }, { de: "Sie vertreiben Jona", sr: "Протерују Јону" }, { de: "Sie lachen ihn aus", sr: "Исмевају га" }], correct: 0 }
      ]
    },
    {
      id: "bib-dan3", book: "dan", order: 22,
      title: { de: "Die drei Jünglinge im Feuerofen", sr: "Три младића у огњеној пећи" },
      ref: { de: "Daniel 3", sr: "Данило 3" },
      intro: {
        de: "Das Buch Daniel spielt im Babylonischen Exil. Kapitel 3 erzählt von drei jungen Juden – Hananja, Mischaël und Asarja, die am Königshof die Namen Schadrach, Meschach und Abed-Nego trugen –, die sich weigern, ein Götzenbild anzubeten. Die orthodoxe Bibel (nach der Septuaginta) enthält in diesem Kapitel auch das Gebet Asarjas und den Lobgesang der drei Jünglinge.",
        sr: "Књига пророка Данила дешава се у вавилонском изгнанству. Трећа глава приповеда о три млада Јудејца – Ананији, Мисаилу и Азарији, који су на царском двору носили имена Седрах, Мисах и Авденаго –, који одбијају да се поклоне идолу. Православна Библија (по Септуагинти) у овој глави садржи и Азаријину молитву и Песму три младића."
      },
      introTag: "history",
      context: {
        de: "König Nebukadnezar lässt ein riesiges goldenes Standbild aufstellen und befiehlt allen, sich davor niederzuwerfen. Wer sich weigert, soll in einen brennenden Ofen geworfen werden. Für gläubige Juden ging es um die Treue zum einen Gott.",
        sr: "Цар Навуходоносор поставља огроман златни кип и заповеда свима да му се поклоне. Ко одбије, биће бачен у ужарену пећ. За верне Јудејце радило се о верности једином Богу."
      },
      reading: [
        { ref: { de: "Dan 3,1–23", sr: "Дан 3,1–23" }, note: { de: "Das goldene Standbild und die Weigerung der drei.", sr: "Златни кип и одбијање тројице." } },
        { ref: { de: "Dan 3,24–90 (Septuaginta)", sr: "Дан 3,24–90 (Септуагинта)" }, note: { de: "Gebet Asarjas und Lobgesang der drei Jünglinge.", sr: "Азаријина молитва и Песма три младића." } },
        { ref: { de: "Dan 3,91–97", sr: "Дан 3,91–97" }, note: { de: "Der Vierte im Feuer; der König lobt Gott.", sr: "Четврти у огњу; цар слави Бога." } }
      ],
      summary: {
        de: "Die drei Jünglinge antworten dem König: Unser Gott kann uns retten – und selbst wenn nicht, werden wir dein Bild nicht anbeten. Der Ofen wird siebenmal stärker geheizt, und sie werden hineingeworfen. Doch mitten im Feuer gehen sie umher und loben Gott; ein Engel des Herrn ist bei ihnen, und das Feuer berührt sie nicht. Der König sieht vier Männer im Feuer, und der vierte sieht aus wie ein Sohn Gottes. Die drei kommen unversehrt heraus, und Nebukadnezar preist den Gott Israels.",
        sr: "Три младића одговарају цару: наш Бог може да нас избави – а ако и не, нећемо се поклонити твом кипу. Пећ се ужари седам пута јаче и они бивају бачени у њу. Али усред огња они ходају и славе Бога; анђео Господњи је с њима и огањ их не дотиче. Цар види четири човека у огњу, а четврти изгледа као син Божији. Тројица излазе неповређени, и Навуходоносор слави Бога Израиљевог."
      },
      interp: {
        simple: {
          de: "Die drei Jünglinge zeigen: Treue zu Gott ist wichtiger als Sicherheit. Sie vertrauen Gott – „selbst wenn nicht“. Und Gott lässt sie im Feuer nicht allein.",
          sr: "Три младића показују: верност Богу важнија је од сигурности. Они верују Богу – „а ако и не“. И Бог их не оставља саме у огњу."
        },
        deeper: {
          de: "Der Lobgesang der drei Jünglinge, in dem die ganze Schöpfung zum Lob Gottes aufgerufen wird, ist ein fester Teil des orthodoxen Gottesdienstes: Die 7. und 8. Ode der Kanones bauen darauf auf. Dan 3 gehört zu den Lesungen der Vesper am Großen Samstag. In den Hymnen der Kirche ist der Ofen, der die Jünglinge nicht verbrannte, ein Bild für die Gottesgebärerin, die das göttliche Feuer in sich trug, ohne verzehrt zu werden. Die Kirche gedenkt des Propheten Daniel und der drei Jünglinge am 17. Dezember (30. Dezember).",
          sr: "Песма три младића, у којој се сва твар позива да слави Бога, чврст је део православног богослужења: 7. и 8. песма канона заснивају се на њој. Дан 3 спада у читања на вечерњу Велике суботе. У црквеним химнама пећ која није сагорела младиће слика је Богородице, која је носила божански огањ, а да није сагорела. Црква прославља пророка Данила и три младића 17. децембра (30. децембра)."
        },
        tag: "history"
      },
      christ: {
        de: "Die Väter sehen in dem Vierten, der im Feuer bei den Jünglingen ist, ein Vorausbild des Sohnes Gottes, der zu uns in unsere Not herabsteigt und uns rettet.",
        sr: "Оци у Четвртом, који је у огњу са младићима, виде праслику Сина Божијег, који силази к нама у нашу невољу и спасава нас."
      },
      links: [
        { ref: { de: "Ex 20,3–5", sr: "Изл 20,3–5" }, note: { de: "Du sollst keine anderen Götter haben.", sr: "Немој имати других богова." } },
        { ref: { de: "Jes 43,2", sr: "Ис 43,2" }, note: { de: "Wenn du durchs Feuer gehst, wirst du nicht verbrennen.", sr: "Ако пођеш кроз огањ, нећеш изгорети." } },
        { ref: { de: "Hebr 11,33–34", sr: "Јев 11,33–34" }, note: { de: "Durch Glauben löschten sie die Gewalt des Feuers.", sr: "Вером угасише силу огња." } },
        { ref: { de: "Apg 5,29", sr: "Дап 5,29" }, note: { de: "Man muss Gott mehr gehorchen als den Menschen.", sr: "Богу се треба више покоравати него људима." } }
      ],
      fathers: {
        de: "Der hl. Hippolyt (3. Jahrhundert) schrieb eine der ältesten christlichen Auslegungen des Buches Daniel. Fragmente davon sind in englischer Übersetzung frei zugänglich (ANF Band 5, siehe Bibliothek).",
        sr: "Свети Иполит (3. век) написао је једно од најстаријих хришћанских тумачења Књиге пророка Данила. Њени одломци слободно су доступни у енглеском преводу (ANF, том 5, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was bedeutet die Antwort „und selbst wenn nicht“?", sr: "Шта значи одговор „а ако и не“?" },
          a: { de: "Die Jünglinge bleiben Gott treu, auch wenn er sie nicht sichtbar retten sollte – ihr Glaube hängt nicht vom Ergebnis ab.", sr: "Младићи остају верни Богу чак и ако их не би видљиво избавио – њихова вера не зависи од исхода." } },
        { q: { de: "Wo begegnet uns der Lobgesang der drei Jünglinge im Gottesdienst?", sr: "Где на богослужењу сусрећемо Песму три младића?" },
          a: { de: "In der 7. und 8. Ode der Kanones und in den Lesungen des Großen Samstags.", sr: "У 7. и 8. песми канона и у читањима Велике суботе." } },
        { q: { de: "Warum ist der Ofen ein Bild für die Gottesgebärerin?", sr: "Зашто је пећ слика Богородице?" },
          a: { de: "Wie das Feuer die Jünglinge nicht verbrannte, so trug Maria Gott in sich, ohne verzehrt zu werden.", sr: "Као што огањ није сагорео младиће, тако је Марија носила Бога у себи, а да није сагорела." } }
      ],
      practice: {
        de: "Gibt es Situationen, in denen du dich dem anpasst, was „alle“ tun, obwohl es dir als Christ widerstrebt? Bitte Gott um Mut, freundlich, aber fest zu bleiben.",
        sr: "Постоје ли ситуације у којима се прилагођавате ономе што „сви“ раде, иако вам се као хришћанину противи? Молите Бога за храброст да останете љубазни, али чврсти."
      },
      review: {
        de: "Die drei Jünglinge verweigern die Anbetung des Götzenbildes, werden ins Feuer geworfen und von Gott bewahrt. Ihr Lobgesang lebt in der 7. und 8. Ode der Kanones fort.",
        sr: "Три младића одбијају да се поклоне идолу, бивају бачени у огањ и Бог их чува. Њихова песма живи у 7. и 8. песми канона."
      },
      quiz: [
        { q: { de: "Welcher König ließ das goldene Standbild aufstellen?", sr: "Који цар је поставио златни кип?" },
          options: [{ de: "Nebukadnezar", sr: "Навуходоносор" }, { de: "Pharao", sr: "Фараон" }, { de: "Herodes", sr: "Ирод" }], correct: 0 },
        { q: { de: "Wie viele Männer sah der König im Feuer?", sr: "Колико људи је цар видео у огњу?" },
          options: [{ de: "Vier", sr: "Четири" }, { de: "Drei", sr: "Три" }, { de: "Sieben", sr: "Седам" }], correct: 0 },
        { q: { de: "Welche Oden der Kanones bauen auf dem Lobgesang der drei Jünglinge auf?", sr: "Које песме канона се заснивају на Песми три младића?" },
          options: [{ de: "Die 7. und 8. Ode", sr: "7. и 8. песма" }, { de: "Die 1. und 2. Ode", sr: "1. и 2. песма" }, { de: "Die 4. Ode", sr: "4. песма" }], correct: 0 },
        { q: { de: "Wann gedenkt die Kirche Daniels und der drei Jünglinge?", sr: "Када Црква прославља Данила и три младића?" },
          options: [{ de: "17. Dezember (30. Dezember)", sr: "17. децембра (30. децембра)" }, { de: "6. August (19. August)", sr: "6. августа (19. августа)" }, { de: "1. Januar (14. Januar)", sr: "1. јануара (14. јануара)" }], correct: 0 }
      ]
    },
    {
      id: "bib-job", book: "job", order: 23,
      title: { de: "Ijob – Glaube im Leiden", sr: "Јов – вера у страдању" },
      ref: { de: "Ijob 1–2; 19,23–27; 38,1–11; 42,1–10", sr: "Јов 1–2; 19,23–27; 38,1–11; 42,1–10" },
      intro: {
        de: "Das Buch Ijob ist ein großes Gedicht über eine der schwersten Fragen des Glaubens: Warum leiden Gerechte? Es gehört zu den Weisheitsbüchern. Rahmen und Ende sind erzählt, der Hauptteil besteht aus Reden zwischen Ijob, seinen Freunden und schließlich Gott.",
        sr: "Књига о Јову је велика песма о једном од најтежих питања вере: зашто праведни страдају? Спада у књиге мудрости. Почетак и крај су приповест, а главни део чине говори Јова, његових пријатеља и најзад Бога."
      },
      introTag: "history",
      context: {
        de: "Viele Menschen der Antike glaubten: Wem es schlecht geht, der hat gesündigt; wem es gut geht, der ist gerecht. Das Buch Ijob stellt diese einfache Rechnung in Frage.",
        sr: "Многи људи старог века веровали су: коме је лоше, тај је згрешио; коме је добро, тај је праведан. Књига о Јову доводи у питање ту једноставну рачуницу."
      },
      reading: [
        { ref: { de: "Ijob 1–2", sr: "Јов 1–2" }, note: { de: "Ijob verliert alles und bleibt treu.", sr: "Јов губи све и остаје веран." } },
        { ref: { de: "Ijob 19,23–27", sr: "Јов 19,23–27" }, note: { de: "Ich weiß, dass mein Erlöser lebt.", sr: "Знам да је жив мој Искупитељ." } },
        { ref: { de: "Ijob 38,1–11; 42,1–10", sr: "Јов 38,1–11; 42,1–10" }, note: { de: "Gottes Antwort und Ijobs Wiederherstellung.", sr: "Божији одговор и Јовово обновљење." } }
      ],
      summary: {
        de: "Ijob ist gerecht und gottesfürchtig. Der Satan behauptet, er sei nur fromm, weil es ihm gut gehe. Gott lässt Prüfungen zu: Ijob verliert Besitz, Kinder und Gesundheit. Doch er spricht: Der Herr hat gegeben, der Herr hat genommen, der Name des Herrn sei gepriesen. Drei Freunde kommen und erklären, er müsse gesündigt haben. Ijob widerspricht, klagt Gott sein Leid und bekennt doch: Ich weiß, dass mein Erlöser lebt. Schließlich antwortet Gott aus dem Sturm und zeigt Ijob die Wunder der Schöpfung. Ijob erkennt seine Grenzen. Gott weist die Freunde zurecht, Ijob betet für sie, und Gott gibt ihm doppelt so viel zurück.",
        sr: "Јов је праведан и богобојажљив. Сатана тврди да је побожан само зато што му је добро. Бог допушта искушења: Јов губи имање, децу и здравље. Али он говори: Господ даде, Господ узе, да је благословено име Господње. Три пријатеља долазе и објашњавају да мора да је згрешио. Јов се противи, жали се Богу на своју муку, а ипак исповеда: знам да је жив мој Искупитељ. Најзад Бог одговара из вихора и показује Јову чуда створеног света. Јов увиђа своје границе. Бог прекорева пријатеље, Јов се моли за њих, и Бог му враћа двоструко."
      },
      interp: {
        simple: {
          de: "Leid ist nicht immer eine Strafe für Sünde. Man darf Gott sein Leid klagen – Ijob tut es offen und wird nicht verworfen. Am Ende steht nicht eine Erklärung, sondern die Begegnung mit Gott.",
          sr: "Страдање није увек казна за грех. Богу се сме жалити – Јов то чини отворено и не бива одбачен. На крају не стоји објашњење, него сусрет са Богом."
        },
        deeper: {
          de: "Das Buch warnt vor vorschnellen frommen Erklärungen: Die Freunde reden über Gott, Ijob redet zu Gott – und Gott gibt Ijob recht, nicht den Freunden. Die Kirche liest das Buch Ijob in der Karwoche, wenn sie des unschuldigen Leidens Christi gedenkt. Der Jakobusbrief nennt die Geduld Ijobs als Vorbild (Jak 5,11). Die Kirche gedenkt des gerechten Ijob am 6. Mai (19. Mai).",
          sr: "Књига упозорава на исхитрена побожна објашњења: пријатељи говоре о Богу, а Јов говори Богу – и Бог даје право Јову, а не пријатељима. Црква чита Књигу о Јову у Страсној седмици, када се сећа невиног страдања Христовог. Посланица Јаковљева наводи Јовово трпљење као узор (Јак 5,11). Црква прославља праведног Јова 6. маја (19. маја)."
        },
        tag: "opinion"
      },
      christ: {
        de: "Ijob ist ein Vorbild Christi, des unschuldig Leidenden. Seine Hoffnung auf einen lebendigen Erlöser erfüllt sich in Christus, der durch sein Leiden und seine Auferstehung den Tod besiegt.",
        sr: "Јов је праслика Христа, Невиног који страда. Његова нада у живог Искупитеља испуњава се у Христу, који својим страдањем и Васкрсењем побеђује смрт."
      },
      links: [
        { ref: { de: "Jak 5,11", sr: "Јак 5,11" }, note: { de: "Ihr habt von der Geduld Ijobs gehört.", sr: "Чули сте за трпљење Јовово." } },
        { ref: { de: "Joh 9,1–3", sr: "Јн 9,1–3" }, note: { de: "Weder er noch seine Eltern haben gesündigt.", sr: "Није згрешио ни он ни родитељи његови." } },
        { ref: { de: "Röm 8,18", sr: "Рим 8,18" }, note: { de: "Die Leiden dieser Zeit sind nicht zu vergleichen mit der kommenden Herrlichkeit.", sr: "Страдања садашњег времена нису ништа према будућој слави." } },
        { ref: { de: "Ps 21 (22)", sr: "Пс 21 (22)" }, note: { de: "Mein Gott, warum hast du mich verlassen?", sr: "Боже мој, зашто си ме оставио?" } }
      ],
      fathers: {
        de: "Die Väter haben Ijob immer wieder als Vorbild der Geduld dargestellt, und der hl. Johannes Chrysostomus kommt in seinen Predigten oft auf ihn zurück. Für diese Version wurde keine einzelne Väterstelle mit freiem Link geprüft. Sicher belegt sind die Lesungen in der Karwoche und das Zeugnis des Jakobusbriefes.",
        sr: "Оци су Јова изнова приказивали као узор трпљења, а свети Јован Златоуст често му се враћа у својим беседама. За ово издање није проверено ниједно појединачно светоотачко место са слободном везом. Поуздано су потврђена читања у Страсној седмици и сведочанство Посланице Јаковљеве."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was ist der Fehler der Freunde Ijobs?", sr: "У чему је грешка Јовових пријатеља?" },
          a: { de: "Sie meinen, Leid sei immer Strafe für Sünde, und reden über Gott, statt mit Ijob zu leiden.", sr: "Мисле да је страдање увек казна за грех и говоре о Богу, уместо да саосећају са Јовом." } },
        { q: { de: "Darf man Gott sein Leid klagen?", sr: "Да ли се Богу сме жалити?" },
          a: { de: "Ja. Ijob klagt offen, bleibt aber im Gespräch mit Gott – und Gott gibt ihm recht.", sr: "Да. Јов се отворено жали, али остаје у разговору са Богом – и Бог му даје право." } },
        { q: { de: "Wann liest die Kirche das Buch Ijob?", sr: "Када Црква чита Књигу о Јову?" },
          a: { de: "In der Karwoche, im Gedenken an das unschuldige Leiden Christi.", sr: "У Страсној седмици, у спомен на невино страдање Христово." } }
      ],
      practice: {
        de: "Wenn jemand in deiner Nähe leidet, widerstehe der Versuchung, schnelle Erklärungen zu geben. Sei einfach da, hör zu und bete für ihn. Wenn du selbst leidest, sprich offen mit Gott – und mit einem Menschen deines Vertrauens.",
        sr: "Када неко у вашој близини пати, одуприте се искушењу да дајете брза објашњења. Само будите ту, саслушајте и молите се за њега. Ако сами патите, отворено разговарајте са Богом – и са човеком од поверења."
      },
      review: {
        de: "Ijob verliert alles und bleibt Gott treu. Die Freunde irren mit einfachen Erklärungen; Gott begegnet Ijob selbst. Ijob ist ein Vorbild Christi und wird in der Karwoche gelesen.",
        sr: "Јов губи све и остаје веран Богу. Пријатељи греше простим објашњењима; Бог сам сусреће Јова. Јов је праслика Христа и чита се у Страсној седмици."
      },
      quiz: [
        { q: { de: "Was sagt Ijob, nachdem er alles verloren hat?", sr: "Шта Јов говори пошто је све изгубио?" },
          options: [{ de: "Der Herr hat gegeben, der Herr hat genommen", sr: "Господ даде, Господ узе" }, { de: "Ich verfluche Gott", sr: "Проклињем Бога" }, { de: "Ich gehe nach Ägypten", sr: "Идем у Египат" }], correct: 0 },
        { q: { de: "Wem gibt Gott am Ende recht?", sr: "Коме Бог на крају даје право?" },
          options: [{ de: "Ijob", sr: "Јову" }, { de: "Den Freunden", sr: "Пријатељима" }, { de: "Dem Satan", sr: "Сатани" }], correct: 0 },
        { q: { de: "Welcher neutestamentliche Brief nennt die Geduld Ijobs?", sr: "Која новозаветна посланица помиње Јовово трпљење?" },
          options: [{ de: "Der Jakobusbrief", sr: "Посланица Јаковљева" }, { de: "Der Galaterbrief", sr: "Посланица Галатима" }, { de: "Der Philemonbrief", sr: "Посланица Филимону" }], correct: 0 }
      ]
    },
    {
      id: "bib-heb11", book: "heb", order: 24,
      title: { de: "Die Wolke der Glaubenszeugen", sr: "Облак сведока вере" },
      ref: { de: "Hebräer 11,1 – 12,2", sr: "Јеврејима 11,1 – 12,2" },
      intro: {
        de: "Der Hebräerbrief richtet sich an Christen, die müde und mutlos geworden waren. In Kapitel 11 erinnert er an die großen Glaubenden des Alten Testaments – von Abel bis zu den Propheten – und ermutigt: Lauft mit Ausdauer, den Blick auf Christus gerichtet.",
        sr: "Посланица Јеврејима упућена је хришћанима који су се уморили и обесхрабрили. У 11. глави подсећа на велике вернике Старог Завета – од Авеља до пророка – и храбри: трчите истрајно, гледајући на Христа."
      },
      introTag: "history",
      context: {
        de: "Die Empfänger hatten schon Verfolgung erlebt und waren in Gefahr, den Glauben aufzugeben. Der Brief zeigt ihnen, dass Glaube schon immer bedeutete, Gott zu vertrauen, auch ohne die Erfüllung sofort zu sehen.",
        sr: "Примаоци су већ доживели гоњење и били у опасности да напусте веру. Посланица им показује да је вера одувек значила поверење у Бога, чак и без тренутног виђења испуњења."
      },
      reading: [
        { ref: { de: "Hebr 11,1–16", sr: "Јев 11,1–16" }, note: { de: "Was Glaube ist; Abel, Henoch, Noach, Abraham.", sr: "Шта је вера; Авељ, Енох, Ноје, Авраам." } },
        { ref: { de: "Hebr 11,17–40", sr: "Јев 11,17–40" }, note: { de: "Isaak, Jakob, Josef, Mose und viele andere.", sr: "Исак, Јаков, Јосиф, Мојсије и многи други." } },
        { ref: { de: "Hebr 12,1–2", sr: "Јев 12,1–2" }, note: { de: "Lasst uns laufen, auf Christus schauend.", sr: "Трчимо, гледајући на Христа." } }
      ],
      summary: {
        de: "Glaube ist die feste Zuversicht auf das, was man hofft, und die Überzeugung von Dingen, die man nicht sieht. Durch den Glauben brachte Abel ein besseres Opfer dar, baute Noach die Arche, zog Abraham aus, ohne zu wissen wohin, und war bereit, Isaak zu opfern. Durch den Glauben führte Mose das Volk aus Ägypten. Viele andere litten Verfolgung, Spott und Tod. Sie alle haben die Erfüllung der Verheißung noch nicht erlangt, damit sie nicht ohne uns vollendet würden. Darum: Da wir von einer solchen Wolke von Zeugen umgeben sind, lasst uns mit Ausdauer laufen und auf Jesus schauen, den Urheber und Vollender des Glaubens.",
        sr: "Вера је тврдо поуздање у оно чему се надамо и уверење у оно што се не види. Вером је Авељ принео бољу жртву, Ноје саградио ковчег, Авраам пошао не знајући куда и био спреман да принесе Исака. Вером је Мојсије извео народ из Египта. Многи други су трпели гоњења, руга и смрт. Сви они још нису примили испуњење обећања, да не би без нас достигли савршенство. Зато, имајући око себе толики облак сведока, трчимо истрајно и гледајмо на Исуса, начелника и свршитеља вере."
      },
      interp: {
        simple: {
          de: "Glaube heißt, Gott zu vertrauen, auch wenn man noch nicht alles sieht. Wir sind nicht allein: Die Heiligen aller Zeiten sind wie eine Wolke von Zeugen um uns und feuern uns an.",
          sr: "Вера значи веровати Богу, чак и када још не видимо све. Нисмо сами: светитељи свих времена су као облак сведока око нас и храбре нас."
        },
        deeper: {
          de: "Der Gedanke, dass die Gerechten des Alten Bundes „nicht ohne uns“ vollendet werden, zeigt die Einheit der Kirche über die Zeiten hinweg. Darum ehrt die orthodoxe Kirche auch die Gerechten des Alten Testaments als Heilige, etwa die Vorväter in den Sonntagen vor Weihnachten. Die „Wolke von Zeugen“ ist ein biblischer Grund für die Verehrung der Heiligen und ihre Fürbitte. Abschnitte aus Hebr 11 werden am Sonntag der Orthodoxie gelesen.",
          sr: "Мисао да праведници Старог Завета „не без нас“ достижу савршенство показује јединство Цркве кроз времена. Зато Православна Црква поштује и праведнике Старог Завета као свете, на пример праоце у недељама пред Божић. „Облак сведока“ је библијски основ за поштовање светитеља и њихово заступништво. Одељци из Јев 11 читају се у Недељу православља."
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus ist der Urheber und Vollender des Glaubens. Er hat das Kreuz erduldet um der Freude willen, die vor ihm lag, und sitzt zur Rechten Gottes. Auf ihn richten sich alle Zeugen des Glaubens aus.",
        sr: "Христос је начелник и свршитељ вере. Он је претрпео крст ради радости која је била пред Њим и седи с десне стране Бога. На Њега су усмерени сви сведоци вере."
      },
      links: [
        { ref: { de: "Gen 12,1–4", sr: "Пост 12,1–4" }, note: { de: "Abraham zieht aus auf Gottes Wort.", sr: "Авраам полази на Божију реч." } },
        { ref: { de: "Gen 22,1–14", sr: "Пост 22,1–14" }, note: { de: "Die Bindung Isaaks.", sr: "Принесење Исака." } },
        { ref: { de: "Röm 4,18–21", sr: "Рим 4,18–21" }, note: { de: "Abraham glaubte gegen alle Hoffnung.", sr: "Авраам је веровао у наду мимо сваке наде." } },
        { ref: { de: "2 Kor 5,7", sr: "2 Кор 5,7" }, note: { de: "Wir wandeln im Glauben, nicht im Schauen.", sr: "Вером ходимо, а не гледањем." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus hat den ganzen Hebräerbrief in Homilien ausgelegt; sie sind in englischer Übersetzung frei zugänglich (NPNF I/14, im Band mit den Homilien zum Johannesevangelium, siehe Bibliothek).",
        sr: "Свети Јован Златоуст протумачио је целу Посланицу Јеврејима у беседама; слободно су доступне у енглеском преводу (NPNF I/14, у тому са беседама на Јеванђеље по Јовану, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Wie definiert Hebr 11,1 den Glauben?", sr: "Како Јев 11,1 одређује веру?" },
          a: { de: "Als feste Zuversicht auf das Erhoffte und Überzeugung von dem, was man nicht sieht.", sr: "Као тврдо поуздање у оно чему се надамо и уверење у оно што се не види." } },
        { q: { de: "Was ist die „Wolke von Zeugen“?", sr: "Шта је „облак сведока“?" },
          a: { de: "Die Glaubenden aller Zeiten, die uns umgeben und ermutigen – eine biblische Grundlage der Heiligenverehrung.", sr: "Верни свих времена који нас окружују и храбре – библијски основ поштовања светитеља." } },
        { q: { de: "Warum wurden die Gerechten des Alten Bundes „nicht ohne uns“ vollendet?", sr: "Зашто праведници Старог Завета „не без нас“ достижу савршенство?" },
          a: { de: "Weil alle Glaubenden aller Zeiten in Christus eine einzige Kirche bilden und gemeinsam vollendet werden.", sr: "Зато што сви верни свих времена у Христу чине једну Цркву и заједно достижу савршенство." } }
      ],
      practice: {
        de: "Wähle eine Person aus Hebr 11 und lies ihre Geschichte im Alten Testament nach. Was kannst du von ihrem Vertrauen auf Gott lernen?",
        sr: "Изаберите једну личност из Јев 11 и прочитајте њену повест у Старом Завету. Шта можете научити из њеног поверења у Бога?"
      },
      review: {
        de: "Glaube ist Vertrauen auf das Unsichtbare. Die Zeugen des Alten Bundes umgeben uns wie eine Wolke. Wir laufen mit Ausdauer, auf Christus schauend, den Vollender des Glaubens.",
        sr: "Вера је поверење у невидљиво. Сведоци Старог Завета окружују нас као облак. Трчимо истрајно, гледајући на Христа, свршитеља вере."
      },
      quiz: [
        { q: { de: "Wer zog aus, ohne zu wissen wohin?", sr: "Ко је пошао не знајући куда?" },
          options: [{ de: "Abraham", sr: "Авраам" }, { de: "David", sr: "Давид" }, { de: "Jona", sr: "Јона" }], correct: 0 },
        { q: { de: "Wie nennt Hebr 12,2 Christus?", sr: "Како Јев 12,2 назива Христа?" },
          options: [{ de: "Urheber und Vollender des Glaubens", sr: "Начелник и свршитељ вере" }, { de: "Lehrer der Weisheit", sr: "Учитељ мудрости" }, { de: "König von Babel", sr: "Цар вавилонски" }], correct: 0 },
        { q: { de: "An welchem Sonntag werden Abschnitte aus Hebr 11 gelesen?", sr: "Које недеље се читају одељци из Јев 11?" },
          options: [{ de: "Am Sonntag der Orthodoxie", sr: "У Недељу православља" }, { de: "Am Palmsonntag", sr: "На Цвети" }, { de: "Am Thomassonntag", sr: "У Томину недељу" }], correct: 0 }
      ]
    },
    {
      id: "bib-jas", book: "cath", order: 25,
      title: { de: "Glaube, der lebendig ist", sr: "Вера која је жива" },
      ref: { de: "Jakobus 2,14–26 und 5,13–16", sr: "Јаковљева 2,14–26 и 5,13–16" },
      intro: {
        de: "Der Jakobusbrief wird in der Überlieferung Jakobus, dem „Bruder des Herrn“ und ersten Bischof von Jerusalem, zugeschrieben. Er ist sehr praktisch: Er spricht über Versuchungen, die Zunge, Reichtum und Armut und vor allem über einen Glauben, der sich im Handeln zeigt.",
        sr: "Посланица Јаковљева се у предању приписује Јакову, „брату Господњем“ и првом епископу јерусалимском. Веома је практична: говори о искушењима, језику, богатству и сиромаштву, а пре свега о вери која се показује у делима."
      },
      introTag: "history",
      context: {
        de: "Manche Christen meinten, es genüge, den richtigen Glauben zu bekennen, auch ohne danach zu leben. Jakobus antwortet scharf: Auch die Dämonen glauben, dass es einen Gott gibt – und zittern.",
        sr: "Неки хришћани су мислили да је довољно исповедати праву веру, чак и без живота по њој. Јаков оштро одговара: и демони верују да постоји један Бог – и дрхте."
      },
      reading: [
        { ref: { de: "Jak 2,14–17", sr: "Јак 2,14–17" }, note: { de: "Glaube ohne Werke ist tot.", sr: "Вера без дела мртва је." } },
        { ref: { de: "Jak 2,18–26", sr: "Јак 2,18–26" }, note: { de: "Abraham und Rahab als Beispiele.", sr: "Авраам и Рава као примери." } },
        { ref: { de: "Jak 5,13–16", sr: "Јак 5,13–16" }, note: { de: "Gebet, Salbung der Kranken und Bekenntnis der Sünden.", sr: "Молитва, помазање болесних и исповедање грехова." } }
      ],
      summary: {
        de: "Was nützt es, wenn jemand sagt, er habe Glauben, aber keine Werke? Wenn ein Bruder oder eine Schwester ohne Kleidung und Nahrung ist und man nur sagt: Geht in Frieden!, ohne ihnen zu helfen – was nützt das? So ist der Glaube ohne Werke tot. Abraham zeigte seinen Glauben, als er Isaak darbrachte; der Glaube wirkte mit seinen Werken zusammen und wurde durch sie vollendet. Wie der Leib ohne Geist tot ist, so ist der Glaube ohne Werke tot. Am Ende des Briefes: Ist jemand krank, rufe er die Presbyter der Kirche; sie sollen über ihm beten und ihn mit Öl salben im Namen des Herrn. Bekennt einander die Sünden und betet füreinander.",
        sr: "Каква је корист ако неко каже да има веру, а дела нема? Ако су брат или сестра без одела и хране, а неко им само каже: идите с миром!, а не помогне им – каква је корист? Тако је и вера без дела мртва. Авраам је показао веру када је принео Исака; вера је садејствовала са делима његовим и делима се усавршила. Као што је тело без духа мртво, тако је и вера без дела мртва. На крају посланице: ако је ко болестан, нека дозове презвитере црквене; нека се помоле над њим и помажу га уљем у име Господње. Исповедајте једни другима грехе и молите се једни за друге."
      },
      interp: {
        simple: {
          de: "Echter Glaube bleibt nicht nur im Kopf. Er zeigt sich in Taten der Liebe – besonders gegenüber Menschen in Not. Glaube und gute Werke gehören zusammen wie Leib und Atem.",
          sr: "Права вера не остаје само у глави. Показује се у делима љубави – нарочито према људима у невољи. Вера и добра дела иду заједно као тело и дах."
        },
        deeper: {
          de: "Die orthodoxe Kirche liest Paulus und Jakobus nicht als Gegensätze: Paulus betont, dass das Heil Gnade ist und nicht durch die Werke des mosaischen Gesetzes verdient wird; Jakobus betont, dass echter Glaube im Leben wirksam wird. Beides fasst das Wort „Synergie“ zusammen – Gottes Gnade und die freie Antwort des Menschen wirken zusammen (vgl. Jak 2,22). Jak 5,14–16 ist die biblische Grundlage des Mysteriums der Krankensalbung; Jak 5,10–16 wird in diesem Gottesdienst als erste Apostellesung gelesen.",
          sr: "Православна Црква не чита Павла и Јакова као супротности: Павле наглашава да је спасење благодат и да се не заслужује делима Мојсијевог закона; Јаков наглашава да права вера постаје делотворна у животу. Обоје сажима реч „синергија“ – Божија благодат и слободан одговор човека садејствују (уп. Јак 2,22). Јак 5,14–16 библијски је темељ Свете тајне јелеосвећења; Јак 5,10–16 чита се на том богослужењу као прво апостолско читање."
        },
        tag: "dogma"
      },
      christ: {
        de: "Christus selbst sagt, dass wir ihm begegnen, wenn wir Hungrigen zu essen geben und Nackte kleiden (Mt 25,31–46). Ein lebendiger Glaube an ihn wird darum zur tätigen Liebe.",
        sr: "Сам Христос каже да Њега сусрећемо када гладне нахранимо и наге оденемо (Мт 25,31–46). Зато жива вера у Њега постаје делатна љубав."
      },
      links: [
        { ref: { de: "Mt 25,31–46", sr: "Мт 25,31–46" }, note: { de: "Was ihr dem Geringsten getan habt.", sr: "Што учинисте једном од ове најмање браће." } },
        { ref: { de: "Gal 5,6", sr: "Гал 5,6" }, note: { de: "Glaube, der durch die Liebe wirksam ist.", sr: "Вера која кроз љубав делује." } },
        { ref: { de: "Eph 2,8–10", sr: "Еф 2,8–10" }, note: { de: "Aus Gnade gerettet, zu guten Werken geschaffen.", sr: "Благодаћу спасени, саздани за добра дела." } },
        { ref: { de: "1 Joh 3,17–18", sr: "1 Јн 3,17–18" }, note: { de: "Nicht mit Worten lieben, sondern in Tat und Wahrheit.", sr: "Не љубимо речју, него делом и истином." } }
      ],
      fathers: {
        de: "Für diesen Brief enthält die App noch keine einzeln geprüfte Väterstelle. Sicher belegt sind die liturgische Verwendung von Jak 5 in der Krankensalbung sowie die Verehrung des hl. Apostels Jakobus, des Bruders des Herrn, am 23. Oktober (5. November); ihm wird die alte Jakobusliturgie zugeschrieben.",
        sr: "За ову посланицу апликација још не садржи појединачно проверено светоотачко место. Поуздано су потврђени богослужбена употреба Јак 5 на јелеосвећењу и поштовање светог апостола Јакова, брата Господњег, 23. октобра (5. новембра); њему се приписује древна Литургија светог Јакова."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum ist Glaube ohne Werke „tot“?", sr: "Зашто је вера без дела „мртва“?" },
          a: { de: "Weil echter Glaube lebendig ist und sich in der Liebe zeigt – wie ein Leib ohne Atem tot ist.", sr: "Зато што је права вера жива и показује се у љубави – као што је тело без даха мртво." } },
        { q: { de: "Widersprechen sich Paulus und Jakobus?", sr: "Да ли се Павле и Јаков противрече?" },
          a: { de: "Nein. Paulus betont die Gnade, Jakobus die Wirksamkeit des Glaubens im Leben. Beides gehört zusammen (Synergie).", sr: "Не. Павле наглашава благодат, а Јаков делотворност вере у животу. Обоје иде заједно (синергија)." } },
        { q: { de: "Welches Mysterium gründet auf Jak 5,14–15?", sr: "Која Света тајна се заснива на Јак 5,14–15?" },
          a: { de: "Die Krankensalbung.", sr: "Јелеосвећење." } }
      ],
      practice: {
        de: "Tu diese Woche eine konkrete gute Tat für jemanden in Not, ohne darüber zu sprechen – zum Beispiel jemandem einkaufen helfen oder etwas spenden.",
        sr: "Учините ове недеље једно конкретно добро дело за некога у невољи, а да о томе не говорите – на пример помозите некоме у куповини или нешто даријте."
      },
      review: {
        de: "Glaube ohne Werke ist tot; echter Glaube zeigt sich in der Liebe. Paulus und Jakobus ergänzen sich. Jak 5 ist Grundlage der Krankensalbung.",
        sr: "Вера без дела мртва је; права вера се показује у љубави. Павле и Јаков допуњују један другога. Јак 5 је темељ јелеосвећења."
      },
      quiz: [
        { q: { de: "Wem wird der Jakobusbrief zugeschrieben?", sr: "Коме се приписује Посланица Јаковљева?" },
          options: [{ de: "Jakobus, dem Bruder des Herrn", sr: "Јакову, брату Господњем" }, { de: "Dem Apostel Paulus", sr: "Апостолу Павлу" }, { de: "Johannes dem Täufer", sr: "Јовану Крститељу" }], correct: 0 },
        { q: { de: "Womit vergleicht Jakobus den Glauben ohne Werke?", sr: "Са чим Јаков пореди веру без дела?" },
          options: [{ de: "Mit einem Leib ohne Geist", sr: "Са телом без духа" }, { de: "Mit einem Haus ohne Dach", sr: "Са кућом без крова" }, { de: "Mit einem Baum ohne Wurzel", sr: "Са дрветом без корена" }], correct: 0 },
        { q: { de: "Welches Wort fasst das Zusammenwirken von Gnade und menschlicher Antwort zusammen?", sr: "Која реч сажима садејство благодати и људског одговора?" },
          options: [{ de: "Synergie", sr: "Синергија" }, { de: "Epiklese", sr: "Епиклеза" }, { de: "Typikon", sr: "Типик" }], correct: 0 }
      ]
    },
    {
      id: "bib-phil2", book: "phil", order: 26,
      title: { de: "Der Christushymnus – Gott erniedrigt sich", sr: "Химна Христу – Бог понизи себе" },
      ref: { de: "Philipper 2,1–11", sr: "Филипљанима 2,1–11" },
      intro: {
        de: "Paulus schreibt aus der Gefangenschaft an die Gemeinde in Philippi. Er bittet sie um Einheit und Demut und zeigt ihnen dafür das größte Vorbild: Christus selbst. Die Verse 6–11 sind vermutlich ein frühchristlicher Hymnus.",
        sr: "Павле пише из тамнице заједници у Филипима. Моли их за јединство и смирење и показује им највећи узор: самог Христа. Стихови 6–11 вероватно су ранохришћанска химна."
      },
      introTag: "history",
      context: {
        de: "In der Gemeinde gab es Rivalität und Eitelkeit. Paulus antwortet nicht mit Regeln, sondern mit dem Blick auf den Weg Christi.",
        sr: "У заједници је било супарништва и сујете. Павле не одговара правилима, него погледом на Христов пут."
      },
      reading: [
        { ref: { de: "Phil 2,1–4", sr: "Флп 2,1–4" }, note: { de: "Einmütig und demütig – jeder achte den anderen höher.", sr: "Једнодушни и смирени – сваки нека другога сматра већим." } },
        { ref: { de: "Phil 2,5–11", sr: "Флп 2,5–11" }, note: { de: "Der Weg Christi: Erniedrigung und Erhöhung.", sr: "Христов пут: понижење и узвишење." } }
      ],
      summary: {
        de: "Seid eines Sinnes, tut nichts aus Streitsucht oder Eitelkeit, sondern achtet in Demut einander höher als euch selbst. Habt dieselbe Gesinnung wie Christus Jesus: Er war in der Gestalt Gottes, hielt aber nicht daran fest, Gott gleich zu sein, sondern entäußerte sich, nahm die Gestalt eines Knechtes an und wurde den Menschen gleich. Er erniedrigte sich und wurde gehorsam bis zum Tod, ja bis zum Tod am Kreuz. Darum hat Gott ihn hoch erhöht und ihm den Namen gegeben, der über allen Namen ist, damit sich jedes Knie beugt und jede Zunge bekennt: Jesus Christus ist der Herr – zur Ehre Gottes, des Vaters.",
        sr: "Будите истомишљеници, ништа не чините из свађе или сујете, него у смирењу сматрајте један другога већим од себе. Нека у вама буду исте мисли као и у Христу Исусу: Он, будући у обличју Божијем, није сматрао отимањем бити једнак Богу, него је понизио себе узевши обличје слуге и поставши сличан људима. Понизио је себе и био послушан до смрти, и то смрти на крсту. Зато Га је Бог узвисио и даровао Му име које је изнад свакога имена, да се у име Исусово поклони свако колено и сваки језик исповеди да је Исус Христос Господ, у славу Бога Оца."
      },
      interp: {
        simple: {
          de: "Der ewige Sohn Gottes hat sich klein gemacht – er wurde Mensch und Diener. Wer Christus folgt, soll nicht groß sein wollen, sondern anderen dienen.",
          sr: "Вечни Син Божији учинио се малим – постао је човек и слуга. Ко следи Христа, не треба да жели да буде велик, него да служи другима."
        },
        deeper: {
          de: "Das griechische Wort für „sich entäußern“ ist kenosis („Entleerung“). Die Väter betonen: Christus hörte dabei nicht auf, Gott zu sein. Er verbarg seine göttliche Herrlichkeit und nahm unsere ganze menschliche Natur an. Dieser Abschnitt ist eine wichtige Grundlage für die Lehre der Konzilien über Christus als wahren Gott und wahren Menschen. Die Kirche liest Phil 2,5–11 an den Festen der Gottesgebärerin: Sie, die demütige Magd, hat den Gott getragen, der sich selbst erniedrigte.",
          sr: "Грчка реч за „понизити себе“ гласи кеносис („испражњење“). Оци наглашавају: Христос притом није престао да буде Бог. Сакрио је своју божанску славу и примио целу нашу људску природу. Овај одељак важан је основ саборског учења о Христу као истинитом Богу и истинитом човеку. Црква чита Флп 2,5–11 на богородичне празнике: она, смирена слушкиња, носила је Бога који је понизио себе."
        },
        tag: "dogma"
      },
      christ: {
        de: "Der Hymnus fasst den ganzen Weg Christi zusammen: ewige Gottheit, Menschwerdung, Gehorsam bis zum Kreuz, Erhöhung und das Bekenntnis aller: Jesus Christus ist der Herr.",
        sr: "Химна сажима цео Христов пут: вечно Божанство, оваплоћење, послушност до крста, узвишење и исповедање свих: Исус Христос је Господ."
      },
      links: [
        { ref: { de: "Joh 1,1.14", sr: "Јн 1,1.14" }, note: { de: "Das Wort war Gott und wurde Fleisch.", sr: "Реч беше Бог и постаде тело." } },
        { ref: { de: "Joh 13,1–15", sr: "Јн 13,1–15" }, note: { de: "Christus wäscht den Jüngern die Füße.", sr: "Христос пере ноге ученицима." } },
        { ref: { de: "Jes 45,23", sr: "Ис 45,23" }, note: { de: "Vor mir wird sich jedes Knie beugen.", sr: "Мени ће се поклонити свако колено." } },
        { ref: { de: "Mk 10,43–45", sr: "Мк 10,43–45" }, note: { de: "Der Menschensohn kam, um zu dienen.", sr: "Син Човечији дође да служи." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus legt den Philipperbrief in Homilien aus und verteidigt an dieser Stelle die volle Gottheit und volle Menschheit Christi. Die Homilien sind in englischer Übersetzung frei zugänglich (NPNF I/13, siehe Bibliothek).",
        sr: "Свети Јован Златоуст тумачи Посланицу Филипљанима у беседама и на овом месту брани пуно Божанство и пуно човештво Христово. Беседе су слободно доступне у енглеском преводу (NPNF I/13, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was bedeutet kenosis?", sr: "Шта значи кеносис?" },
          a: { de: "„Entleerung“: Christus verbarg seine göttliche Herrlichkeit und wurde Mensch und Diener, ohne aufzuhören, Gott zu sein.", sr: "„Испражњење“: Христос је сакрио своју божанску славу и постао човек и слуга, не престајући да буде Бог." } },
        { q: { de: "Warum stellt Paulus der Gemeinde Christus vor Augen?", sr: "Зашто Павле заједници ставља пред очи Христа?" },
          a: { de: "Gegen Streit und Eitelkeit: Wer Christus folgt, lebt in Demut und dient anderen.", sr: "Против свађе и сујете: ко следи Христа, живи у смирењу и служи другима." } },
        { q: { de: "An welchen Festen wird Phil 2,5–11 gelesen?", sr: "На које празнике се чита Флп 2,5–11?" },
          a: { de: "An den Festen der Gottesgebärerin.", sr: "На богородичне празнике." } }
      ],
      practice: {
        de: "Übernimm diese Woche bewusst eine kleine Aufgabe, die niemand gern macht – ohne dafür Anerkennung zu erwarten.",
        sr: "Ове недеље свесно преузмите један мали задатак који нико радо не ради – не очекујући признање."
      },
      review: {
        de: "Christus, wahrer Gott, erniedrigte sich, wurde Mensch und gehorsam bis zum Kreuz; darum hat Gott ihn erhöht. Christen sollen dieselbe demütige Gesinnung haben.",
        sr: "Христос, истинити Бог, понизио је себе, постао човек и био послушан до крста; зато Га је Бог узвисио. Хришћани треба да имају исти смирени начин мишљења."
      },
      quiz: [
        { q: { de: "Wie heißt das griechische Wort für die „Entäußerung“ Christi?", sr: "Како гласи грчка реч за Христово „понижење“?" },
          options: [{ de: "Kenosis", sr: "Кеносис" }, { de: "Theosis", sr: "Теосис" }, { de: "Metanoia", sr: "Метаноја" }], correct: 0 },
        { q: { de: "Bis wohin war Christus gehorsam?", sr: "Докле је Христос био послушан?" },
          options: [{ de: "Bis zum Tod am Kreuz", sr: "До смрти на крсту" }, { de: "Bis zur Taufe", sr: "До крштења" }, { de: "Bis zum Einzug in Jerusalem", sr: "До уласка у Јерусалим" }], correct: 0 },
        { q: { de: "Aus welcher Lage schrieb Paulus diesen Brief?", sr: "У каквом стању је Павле писао ову посланицу?" },
          options: [{ de: "Aus der Gefangenschaft", sr: "Из тамнице" }, { de: "Von einer Reise nach Spanien", sr: "Са пута у Шпанију" }, { de: "Aus Jerusalem als Bischof", sr: "Из Јерусалима као епископ" }], correct: 0 }
      ]
    },
    {
      id: "bib-gal5", book: "gal", order: 27,
      title: { de: "Freiheit und die Frucht des Geistes", sr: "Слобода и плод Духа" },
      ref: { de: "Galater 5,13–26", sr: "Галатима 5,13–26" },
      intro: {
        de: "Im Galaterbrief verteidigt Paulus die Freiheit, die Christus schenkt. In Kapitel 5 zeigt er, was diese Freiheit nicht ist – ein Freibrief für Egoismus – und was sie ist: ein Leben in der Kraft des Heiligen Geistes.",
        sr: "У Посланици Галатима Павле брани слободу коју дарује Христос. У петој глави показује шта та слобода није – дозвола за себичност – и шта јесте: живот у сили Духа Светога."
      },
      introTag: "history",
      context: {
        de: "Nachdem Paulus betont hat, dass Christen nicht unter das Gesetz des Mose gestellt werden müssen, hätten manche meinen können, dann sei alles erlaubt. Paulus stellt klar: Die Freiheit soll in der Liebe gelebt werden.",
        sr: "Пошто је Павле нагласио да хришћани не морају бити стављени под Мојсијев закон, неки су могли помислити да је онда све дозвољено. Павле појашњава: слобода треба да се живи у љубави."
      },
      reading: [
        { ref: { de: "Gal 5,13–15", sr: "Гал 5,13–15" }, note: { de: "Zur Freiheit berufen – dient einander in Liebe.", sr: "Позвани на слободу – служите једни другима у љубави." } },
        { ref: { de: "Gal 5,16–21", sr: "Гал 5,16–21" }, note: { de: "Fleisch und Geist im Widerstreit.", sr: "Тело и Дух у сукобу." } },
        { ref: { de: "Gal 5,22–26", sr: "Гал 5,22–26" }, note: { de: "Die Frucht des Geistes.", sr: "Плод Духа." } }
      ],
      summary: {
        de: "Ihr seid zur Freiheit berufen, aber nutzt sie nicht als Vorwand für das „Fleisch“, sondern dient einander in Liebe; denn das ganze Gesetz ist in dem einen Wort erfüllt: Liebe deinen Nächsten wie dich selbst. Lebt im Geist, dann werdet ihr die Begierden des Fleisches nicht erfüllen. Die Werke des Fleisches sind offenkundig: Unzucht, Götzendienst, Feindschaft, Streit, Eifersucht, Zorn, Neid, Trunkenheit und Ähnliches. Die Frucht des Geistes aber ist Liebe, Freude, Friede, Langmut, Freundlichkeit, Güte, Treue, Sanftmut und Enthaltsamkeit. Die zu Christus gehören, haben das Fleisch mit seinen Leidenschaften gekreuzigt. Wenn wir im Geist leben, lasst uns auch im Geist wandeln.",
        sr: "Ви сте позвани на слободу, али не користите слободу као повод телу, него љубављу служите једни другима; јер се сав закон испуњава у једној речи: љуби ближњега свога као самога себе. Живите по Духу, па нећете извршавати жеље тела. Дела тела су позната: блуд, идолопоклонство, непријатељства, свађе, љубомора, гнев, зависти, пијанства и слично. А плод Духа је: љубав, радост, мир, дуготрпљење, благост, доброта, вера, кротост, уздржање. Који су Христови, распели су тело са страстима. Ако живимо Духом, Духом и да ходимо."
      },
      interp: {
        simple: {
          de: "Christliche Freiheit heißt nicht: Ich tue, was ich will. Sie heißt: Ich bin frei von der Herrschaft der Sünde und kann lieben. Die guten Eigenschaften wachsen in uns wie Früchte, wenn wir mit dem Heiligen Geist leben.",
          sr: "Хришћанска слобода не значи: радим шта хоћу. Она значи: слободан сам од власти греха и могу да љубим. Добре особине расту у нама као плодови када живимо са Духом Светим."
        },
        deeper: {
          de: "„Fleisch“ meint bei Paulus nicht den Körper als etwas Schlechtes, sondern den Menschen, der sich von Gott abwendet und seinen Leidenschaften folgt. Die orthodoxe Askese – Gebet, Fasten, Wachsamkeit – ist der Weg, die Leidenschaften mit Christus zu „kreuzigen“ und dem Geist Raum zu geben. Paulus spricht von der Frucht (Einzahl) des Geistes: Alle Tugenden wachsen gemeinsam aus der Liebe. Gal 5,22 – 6,2 wird als Apostellesung an Gedenktagen heiliger Mönche gelesen.",
          sr: "„Тело“ код Павла не значи тело као нешто лоше, него човека који се одвраћа од Бога и следи своје страсти. Православни подвиг – молитва, пост, трезвоумље – пут је да се страсти „распну“ са Христом и да се да места Духу. Павле говори о плоду (једнина) Духа: све врлине расту заједно из љубави. Гал 5,22 – 6,2 чита се као апостолско читање на спомене преподобних (светих монаха)."
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus hat uns frei gemacht. Wer zu ihm gehört, hat durch die Taufe Anteil an seinem Kreuz und lebt aus seinem Geist.",
        sr: "Христос нас је ослободио. Ко припада Њему, кроз крштење има удела у Његовом крсту и живи из Његовог Духа."
      },
      links: [
        { ref: { de: "Joh 8,31–36", sr: "Јн 8,31–36" }, note: { de: "Die Wahrheit wird euch frei machen.", sr: "Истина ће вас ослободити." } },
        { ref: { de: "Röm 8,1–11", sr: "Рим 8,1–11" }, note: { de: "Leben nach dem Geist.", sr: "Живот по Духу." } },
        { ref: { de: "Mt 7,16–20", sr: "Мт 7,16–20" }, note: { de: "An ihren Früchten werdet ihr sie erkennen.", sr: "По плодовима њиховим познаћете их." } },
        { ref: { de: "1 Kor 13,4–7", sr: "1 Кор 13,4–7" }, note: { de: "Die Liebe ist langmütig und gütig.", sr: "Љубав дуго трпи, благотворна је." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus hat einen Kommentar zum Galaterbrief verfasst; er ist in englischer Übersetzung frei zugänglich (NPNF I/13, siehe Bibliothek).",
        sr: "Свети Јован Златоуст написао је тумачење Посланице Галатима; слободно је доступно у енглеском преводу (NPNF I/13, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was meint Paulus mit „Fleisch“?", sr: "Шта Павле подразумева под „телом“?" },
          a: { de: "Nicht den Körper an sich, sondern den Menschen, der sich von Gott abwendet und seinen Leidenschaften folgt.", sr: "Не тело само по себи, него човека који се одвраћа од Бога и следи своје страсти." } },
        { q: { de: "Warum spricht Paulus von der „Frucht“ (Einzahl) des Geistes?", sr: "Зашто Павле говори о „плоду“ (једнина) Духа?" },
          a: { de: "Weil alle Tugenden zusammen aus der Liebe wachsen – sie gehören untrennbar zusammen.", sr: "Зато што све врлине заједно расту из љубави – неодвојиво припадају једна другој." } },
        { q: { de: "Wofür soll die christliche Freiheit genutzt werden?", sr: "Чему треба да служи хришћанска слобода?" },
          a: { de: "Um einander in Liebe zu dienen.", sr: "Да једни другима служимо у љубави." } }
      ],
      practice: {
        de: "Wähle eine Frucht des Geistes, die dir besonders fehlt, zum Beispiel Geduld oder Sanftmut. Bete jeden Morgen dieser Woche darum und achte abends darauf, wo sie gewachsen ist.",
        sr: "Изаберите један плод Духа који вам нарочито недостаје, на пример стрпљење или кротост. Молите се за њега свако јутро ове недеље и увече обратите пажњу где је узрастао."
      },
      review: {
        de: "Christliche Freiheit ist Freiheit zur Liebe. Die Werke des Fleisches stehen der Frucht des Geistes gegenüber: Liebe, Freude, Friede, Langmut, Freundlichkeit, Güte, Treue, Sanftmut, Enthaltsamkeit.",
        sr: "Хришћанска слобода је слобода за љубав. Делима тела супротставља се плод Духа: љубав, радост, мир, дуготрпљење, благост, доброта, вера, кротост, уздржање."
      },
      quiz: [
        { q: { de: "Wie viele Eigenschaften nennt Paulus als Frucht des Geistes?", sr: "Колико особина Павле наводи као плод Духа?" },
          options: [{ de: "Neun", sr: "Девет" }, { de: "Drei", sr: "Три" }, { de: "Zwölf", sr: "Дванаест" }], correct: 0 },
        { q: { de: "In welchem Gebot ist nach Gal 5,14 das ganze Gesetz erfüllt?", sr: "У којој заповести се према Гал 5,14 испуњава сав закон?" },
          options: [{ de: "Liebe deinen Nächsten wie dich selbst", sr: "Љуби ближњега свога као самога себе" }, { de: "Halte den Sabbat", sr: "Држи суботу" }, { de: "Bringe Opfer dar", sr: "Приноси жртве" }], correct: 0 },
        { q: { de: "An welchen Gedenktagen wird Gal 5,22 – 6,2 gelesen?", sr: "На које спомене се чита Гал 5,22 – 6,2?" },
          options: [{ de: "An Gedenktagen heiliger Mönche", sr: "На спомене преподобних" }, { de: "Nur an Ostern", sr: "Само на Васкрс" }, { de: "Bei der Trauung", sr: "На венчању" }], correct: 0 }
      ]
    },
    {
      id: "bib-elijah", book: "kgdm", order: 28,
      title: { de: "Elija auf dem Karmel und am Horeb", sr: "Илија на Кармилу и на Хориву" },
      ref: { de: "3. Königtümer (1 Kön) 18,20–39; 19,1–13", sr: "3. Царстава 18,20–39; 19,1–13" },
      intro: {
        de: "Der Prophet Elija ist einer der größten Propheten Israels. Er wirkte im 9. Jahrhundert v. Chr. im Nordreich Israel, als König Ahab und Königin Isebel den Götzen Baal förderten. Die Geschichten über ihn stehen im 3. und 4. Buch der Königtümer (in anderen Ausgaben 1. und 2. Könige).",
        sr: "Пророк Илија један је од највећих пророка Израиља. Деловао је у 9. веку пре Христа у северном царству Израиљу, када су цар Ахав и царица Језавеља подржавали идола Вала. Повести о њему налазе се у 3. и 4. књизи Царстава."
      },
      introTag: "history",
      context: {
        de: "Das Volk schwankte zwischen dem Herrn und Baal, dem Gott der Fruchtbarkeit und des Regens. Nach einer langen Dürre fordert Elija die Propheten Baals zu einer Entscheidung auf dem Berg Karmel heraus.",
        sr: "Народ се колебао између Господа и Вала, бога плодности и кише. После дуге суше Илија позива Валове пророке на одлуку на гори Кармилу."
      },
      reading: [
        { ref: { de: "3 Kön (1 Kön) 18,20–39", sr: "3 Цар 18,20–39" }, note: { de: "Das Gottesurteil auf dem Karmel.", sr: "Божији суд на Кармилу." } },
        { ref: { de: "3 Kön (1 Kön) 19,1–8", sr: "3 Цар 19,1–8" }, note: { de: "Elijas Erschöpfung und die Stärkung durch den Engel.", sr: "Илијина исцрпљеност и окрепљење од анђела." } },
        { ref: { de: "3 Kön (1 Kön) 19,9–13", sr: "3 Цар 19,9–13" }, note: { de: "Gott im sanften, leisen Säuseln.", sr: "Бог у тихом и благом ћарлијању." } }
      ],
      summary: {
        de: "Elija fragt das Volk: Wie lange wollt ihr auf beiden Seiten hinken? Ist der Herr Gott, so folgt ihm; ist es Baal, so folgt ihm. Die Propheten Baals rufen ihren Gott den ganzen Tag an, doch nichts geschieht. Elija baut den Altar des Herrn wieder auf, lässt ihn mit Wasser übergießen und betet. Feuer fällt vom Himmel und verzehrt das Opfer. Das Volk ruft: Der Herr ist Gott! Danach muss Elija vor Isebel fliehen. Erschöpft wünscht er sich in der Wüste den Tod, doch ein Engel stärkt ihn mit Brot und Wasser. Am Berg Horeb begegnet ihm Gott nicht im Sturm, nicht im Erdbeben und nicht im Feuer, sondern in einem sanften, leisen Säuseln.",
        sr: "Илија пита народ: докле ћете хромати на обе стране? Ако је Господ Бог, идите за Њим; ако је Вал, идите за њим. Валови пророци цео дан призивају свог бога, али се ништа не догађа. Илија обнавља жртвеник Господњи, налаже да се полије водом и моли се. Огањ пада с неба и спаљује жртву. Народ виче: Господ је Бог! Потом Илија мора да бежи од Језавеље. Исцрпљен, у пустињи пожели смрт, али га анђео окрепљује хлебом и водом. На гори Хориву Бог му се јавља не у вихору, не у земљотресу и не у огњу, него у тихом и благом ћарлијању."
      },
      interp: {
        simple: {
          de: "Man kann nicht zwei Herren dienen – Elija ruft zu einer klaren Entscheidung für Gott. Und selbst der große Prophet wird müde und mutlos. Gott stärkt ihn und zeigt sich ihm in der Stille.",
          sr: "Не може се служити двојици господара – Илија позива на јасну одлуку за Бога. А и велики пророк се умара и обесхрабрује. Бог га окрепљује и јавља му се у тишини."
        },
        deeper: {
          de: "Die Begegnung am Horeb ist für die orthodoxe Überlieferung des Gebets bedeutsam: Gott offenbart sich nicht im Lärm, sondern in der Stille des Herzens. Elija gilt als Vorbild des Mönchtums – er lebte in der Wüste, fastete und betete. Das Brot, das der Engel bringt und das Elija stärkt, sehen die Väter als Vorausbild der Eucharistie. Elija erscheint bei der Verklärung Christi auf dem Berg Tabor. Die Kirche feiert den Propheten Elija am 20. Juli (2. August) – in Serbien Ilindan.",
          sr: "Сусрет на Хориву значајан је за православно предање молитве: Бог се не открива у буци, него у тишини срца. Илија важи као узор монаштва – живео је у пустињи, постио и молио се. Хлеб који анђео доноси и којим се Илија окрепљује Оци виде као праслику Евхаристије. Илија се јавља при Преображењу Христовом на гори Тавору. Црква прославља пророка Илију 20. јула (2. августа) – Илиндан."
        },
        tag: "opinion"
      },
      christ: {
        de: "Bei der Verklärung erscheinen Mose und Elija neben Christus: Gesetz und Propheten bezeugen ihn. Johannes der Täufer kam „im Geist und in der Kraft des Elija“ (Lk 1,17), um Christus den Weg zu bereiten.",
        sr: "При Преображењу Мојсије и Илија јављају се поред Христа: Закон и пророци сведоче о Њему. Јован Крститељ је дошао „у духу и сили Илијиној“ (Лк 1,17) да Христу припреми пут."
      },
      links: [
        { ref: { de: "Mt 17,1–8", sr: "Мт 17,1–8" }, note: { de: "Elija bei der Verklärung.", sr: "Илија при Преображењу." } },
        { ref: { de: "Jak 5,17–18", sr: "Јак 5,17–18" }, note: { de: "Das Gebet des Elija.", sr: "Илијина молитва." } },
        { ref: { de: "Mt 6,24", sr: "Мт 6,24" }, note: { de: "Niemand kann zwei Herren dienen.", sr: "Нико не може служити двојици господара." } },
        { ref: { de: "4 Kön (2 Kön) 2,1–14", sr: "4 Цар 2,1–14" }, note: { de: "Elija wird in den Himmel aufgenommen.", sr: "Илија бива узнесен на небо." } }
      ],
      fathers: {
        de: "Für diesen Abschnitt enthält die App noch keine einzeln geprüfte Väterstelle mit freiem Link. Sicher belegt sind das Zeugnis des Neuen Testaments (Verklärung, Jak 5,17–18) und das Fest des Propheten am 20. Juli (2. August).",
        sr: "За овај одељак апликација још не садржи појединачно проверено светоотачко место са слободном везом. Поуздано су потврђени сведочанство Новог Завета (Преображење, Јак 5,17–18) и празник пророка 20. јула (2. августа)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Wozu fordert Elija das Volk auf dem Karmel auf?", sr: "На шта Илија позива народ на Кармилу?" },
          a: { de: "Zu einer klaren Entscheidung: nicht länger zwischen dem Herrn und Baal zu schwanken.", sr: "На јасну одлуку: да се више не колеба између Господа и Вала." } },
        { q: { de: "Wie begegnet Gott dem Elija am Horeb?", sr: "Како се Бог јавља Илији на Хориву?" },
          a: { de: "Nicht im Sturm, Erdbeben oder Feuer, sondern in einem sanften, leisen Säuseln – in der Stille.", sr: "Не у вихору, земљотресу или огњу, него у тихом и благом ћарлијању – у тишини." } },
        { q: { de: "Was zeigt Elijas Erschöpfung nach dem großen Sieg?", sr: "Шта показује Илијина исцрпљеност после велике победе?" },
          a: { de: "Auch große Heilige kennen Müdigkeit und Mutlosigkeit. Gott verurteilt Elija nicht, sondern stärkt ihn.", sr: "И велики свети познају умор и малодушност. Бог не осуђује Илију, него га окрепљује." } }
      ],
      practice: {
        de: "Nimm dir heute fünf Minuten völlige Stille – ohne Handy, ohne Musik. Sag zu Beginn nur: „Rede, Herr, dein Diener hört.“ Und dann höre einfach.",
        sr: "Издвојите данас пет минута потпуне тишине – без телефона, без музике. На почетку само реците: „Говори, Господе, јер слуга Твој слуша.“ А онда само слушајте."
      },
      review: {
        de: "Elija ruft das Volk zur Entscheidung für Gott; Feuer fällt auf dem Karmel. Erschöpft wird er von einem Engel gestärkt und begegnet Gott am Horeb in der Stille. Er erscheint bei der Verklärung Christi.",
        sr: "Илија позива народ да се одлучи за Бога; огањ пада на Кармилу. Исцрпљеног га анђео окрепљује и на Хориву сусреће Бога у тишини. Јавља се при Преображењу Христовом."
      },
      quiz: [
        { q: { de: "Auf welchem Berg forderte Elija die Propheten Baals heraus?", sr: "На којој гори је Илија изазвао Валове пророке?" },
          options: [{ de: "Karmel", sr: "Кармил" }, { de: "Tabor", sr: "Тавор" }, { de: "Sinai", sr: "Синај" }], correct: 0 },
        { q: { de: "Wie begegnete Gott Elija am Horeb?", sr: "Како се Бог јавио Илији на Хориву?" },
          options: [{ de: "In einem sanften, leisen Säuseln", sr: "У тихом и благом ћарлијању" }, { de: "Im Erdbeben", sr: "У земљотресу" }, { de: "Im Feuer", sr: "У огњу" }], correct: 0 },
        { q: { de: "Wann feiert die Kirche den Propheten Elija?", sr: "Када Црква прославља пророка Илију?" },
          options: [{ de: "20. Juli (2. August)", sr: "20. јула (2. августа)" }, { de: "6. Januar (19. Januar)", sr: "6. јануара (19. јануара)" }, { de: "29. Juni (12. Juli)", sr: "29. јуна (12. јула)" }], correct: 0 }
      ]
    },
    {
      id: "bib-ezek37", book: "ezek", order: 29,
      title: { de: "Die Totengebeine werden lebendig", sr: "Суве кости оживљавају" },
      ref: { de: "Ezechiel 37,1–14", sr: "Језекиљ 37,1–14" },
      intro: {
        de: "Ezechiel wirkte als Prophet unter den Verbannten in Babylon. Nach der Zerstörung Jerusalems schien Israel wie tot. In einer berühmten Vision zeigt Gott ihm ein Feld voller trockener Knochen – und was er daraus macht.",
        sr: "Језекиљ је деловао као пророк међу изгнаницима у Вавилону. После разарања Јерусалима Израиљ је изгледао као мртав. У чувеној визији Бог му показује поље пуно сувих костију – и шта Он од њих чини."
      },
      introTag: "history",
      context: {
        de: "Die Verbannten sagten: Unsere Gebeine sind vertrocknet, unsere Hoffnung ist dahin. Die Vision ist Gottes Antwort auf diese Verzweiflung.",
        sr: "Изгнаници су говорили: кости наше су се осушиле, нада наша је пропала. Визија је Божији одговор на то очајање."
      },
      reading: [
        { ref: { de: "Ez 37,1–6", sr: "Јез 37,1–6" }, note: { de: "Können diese Gebeine wieder lebendig werden?", sr: "Могу ли ове кости оживети?" } },
        { ref: { de: "Ez 37,7–10", sr: "Јез 37,7–10" }, note: { de: "Der Geist kommt, und sie leben.", sr: "Дух долази, и они оживљавају." } },
        { ref: { de: "Ez 37,11–14", sr: "Јез 37,11–14" }, note: { de: "Ich öffne eure Gräber.", sr: "Отворићу гробове ваше." } }
      ],
      summary: {
        de: "Der Geist des Herrn führt Ezechiel in ein Tal voller sehr trockener Gebeine. Gott fragt: Können diese Gebeine wieder lebendig werden? Ezechiel antwortet: Herr, du weißt es. Er soll ihnen das Wort Gottes verkünden. Da rauscht es, die Knochen fügen sich zusammen, Sehnen, Fleisch und Haut kommen darüber – doch noch ist kein Lebensatem in ihnen. Auf Gottes Befehl ruft Ezechiel den Geist aus den vier Winden herbei; der Geist kommt in sie, sie werden lebendig und stellen sich auf – ein großes Heer. Gott erklärt: Diese Gebeine sind das ganze Haus Israel. Ich öffne eure Gräber, gebe meinen Geist in euch, und ihr werdet leben.",
        sr: "Дух Господњи води Језекиља у долину пуну веома сувих костију. Бог пита: могу ли ове кости оживети? Језекиљ одговара: Господе, Ти знаш. Он треба да им објави реч Божију. Тада настаје шум, кости се спајају, жиле, месо и кожа долазе на њих – али још нема даха живота у њима. По Божијој заповести Језекиљ призива дух од четири ветра; дух улази у њих, оживљавају и устају на ноге – велика војска. Бог објашњава: ове кости су сав дом Израиљев. Отворићу гробове ваше, даћу Духа свога у вас, и бићете живи."
      },
      interp: {
        simple: {
          de: "Für Gott gibt es keine hoffnungslose Lage. Er kann auch das wieder lebendig machen, was völlig tot erscheint – ein Volk, eine Seele, und am Ende unsere Leiber in der Auferstehung.",
          sr: "За Бога нема безнадежног стања. Он може да оживи и оно што изгледа потпуно мртво – народ, душу, а на крају и наша тела у васкрсењу."
        },
        deeper: {
          de: "Das hebräische Wort ruach bedeutet zugleich Wind, Atem und Geist; die Vision spielt bewusst damit. Wie Gott dem ersten Menschen den Lebensatem einhauchte (Gen 2,7), so schenkt der Geist neues Leben. Die Kirche liest diese Vision im Morgengottesdienst des Großen Samstags, wenn Christus im Grab ruht und den Tod von innen besiegt. Die Väter sehen in ihr ein Bild der leiblichen Auferstehung der Toten, die wir im Glaubensbekenntnis erwarten.",
          sr: "Јеврејска реч руах значи истовремено ветар, дах и дух; визија се свесно служи тим значењима. Као што је Бог првом човеку удахнуо дах живота (Пост 2,7), тако Дух дарује нов живот. Црква чита ову визију на јутрењу Велике суботе, када Христос почива у гробу и изнутра побеђује смрт. Оци у њој виде слику телесног васкрсења мртвих, које очекујемо у Символу вере."
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus ist die Auferstehung und das Leben (Joh 11,25). Durch seine Auferstehung öffnet er die Gräber, und durch den Heiligen Geist, den er sendet, schenkt er neues Leben.",
        sr: "Христос је васкрсење и живот (Јн 11,25). Својим Васкрсењем отвара гробове, а кроз Духа Светога кога шаље дарује нов живот."
      },
      links: [
        { ref: { de: "Gen 2,7", sr: "Пост 2,7" }, note: { de: "Gott haucht dem Menschen den Lebensatem ein.", sr: "Бог удахњује човеку дах живота." } },
        { ref: { de: "Joh 5,25–29", sr: "Јн 5,25–29" }, note: { de: "Die Toten werden die Stimme des Sohnes Gottes hören.", sr: "Мртви ће чути глас Сина Божијег." } },
        { ref: { de: "Joh 11,25–26", sr: "Јн 11,25–26" }, note: { de: "Ich bin die Auferstehung und das Leben.", sr: "Ја сам васкрсење и живот." } },
        { ref: { de: "Röm 8,11", sr: "Рим 8,11" }, note: { de: "Der Geist wird auch eure sterblichen Leiber lebendig machen.", sr: "Дух ће оживети и смртна тела ваша." } }
      ],
      fathers: {
        de: "Der hl. Kyrill von Jerusalem führt in seiner Katechese über die Auferstehung des Fleisches (Katechese 18) die Vision Ezechiels als Zeugnis für die Auferstehung der Toten an. Die Katechesen sind in englischer Übersetzung frei zugänglich (NPNF II/7, siehe Bibliothek).",
        sr: "Свети Кирило Јерусалимски у катихези о васкрсењу тела (18. катихеза) наводи Језекиљеву визију као сведочанство о васкрсењу мртвих. Катихезе су слободно доступне у енглеском преводу (NPNF II/7, види библиотеку)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was bedeutet das hebräische Wort ruach?", sr: "Шта значи јеврејска реч руах?" },
          a: { de: "Wind, Atem und Geist zugleich.", sr: "Истовремено ветар, дах и дух." } },
        { q: { de: "Wann liest die Kirche diese Vision?", sr: "Када Црква чита ову визију?" },
          a: { de: "Im Morgengottesdienst des Großen Samstags.", sr: "На јутрењу Велике суботе." } },
        { q: { de: "Welche Hoffnung drückt die Vision für Christen aus?", sr: "Коју наду визија изражава за хришћане?" },
          a: { de: "Die Hoffnung auf die leibliche Auferstehung der Toten und auf Gottes Kraft, auch Hoffnungsloses neu zu beleben.", sr: "Наду у телесно васкрсење мртвих и у Божију силу да оживи и безнадежно." } }
      ],
      practice: {
        de: "Gibt es in deinem Leben etwas, das „wie tot“ erscheint – eine Beziehung, eine Hoffnung, dein Gebet? Lege es heute bewusst in Gottes Hand und bitte: Herr, du weißt es.",
        sr: "Постоји ли у вашем животу нешто што изгледа „као мртво“ – однос, нада, ваша молитва? Свесно то данас предајте у Божије руке и молите: Господе, Ти знаш."
      },
      review: {
        de: "Gott macht ein Feld trockener Gebeine durch seinen Geist lebendig. Die Vision verheißt die Wiederherstellung Israels und weist auf die Auferstehung hin. Sie wird am Großen Samstag gelesen.",
        sr: "Бог својим Духом оживљава поље сувих костију. Визија обећава обнову Израиља и указује на васкрсење. Чита се на Велику суботу."
      },
      quiz: [
        { q: { de: "Was antwortet Ezechiel auf die Frage, ob die Gebeine leben können?", sr: "Шта Језекиљ одговара на питање могу ли кости оживети?" },
          options: [{ de: "Herr, du weißt es", sr: "Господе, Ти знаш" }, { de: "Nein, niemals", sr: "Не, никада" }, { de: "Ja, durch Medizin", sr: "Да, лековима" }], correct: 0 },
        { q: { de: "An welchem Tag wird Ez 37 im Gottesdienst gelesen?", sr: "Ког дана се Јез 37 чита на богослужењу?" },
          options: [{ de: "Am Großen Samstag", sr: "На Велику суботу" }, { de: "An Weihnachten", sr: "На Божић" }, { de: "Am Thomassonntag", sr: "У Томину недељу" }], correct: 0 },
        { q: { de: "Wo lebte Ezechiel als Prophet?", sr: "Где је Језекиљ живео као пророк?" },
          options: [{ de: "Unter den Verbannten in Babylon", sr: "Међу изгнаницима у Вавилону" }, { de: "In Ägypten", sr: "У Египту" }, { de: "In Rom", sr: "У Риму" }], correct: 0 }
      ]
    },
    {
      id: "bib-macc7", book: "macc", order: 30,
      title: { de: "Die Mutter und ihre sieben Söhne", sr: "Мајка и њених седам синова" },
      ref: { de: "2. Makkabäer 6,18–31 und 7", sr: "2. Макавејска 6,18–31 и 7" },
      intro: {
        de: "Die Makkabäerbücher gehören zu den Büchern, die die orthodoxe Bibel aus der Septuaginta übernommen hat. Das 2. Buch erzählt von Märtyrern, die um 167 v. Chr. lieber starben, als Gottes Gebote zu brechen.",
        sr: "Књиге о Макавејима спадају у књиге које је православна Библија преузела из Септуагинте. Друга књига приповеда о мученицима који су око 167. пре Христа радије умрли него да прекрше Божије заповести."
      },
      introTag: "history",
      context: {
        de: "Der syrische König Antiochos IV. wollte den jüdischen Glauben verbieten. Er zwang Juden, Schweinefleisch zu essen und Götzen zu opfern. Wer sich weigerte, wurde gefoltert und getötet.",
        sr: "Сиријски цар Антиох IV хтео је да забрани јудејску веру. Приморавао је Јудејце да једу свињетину и да приносе жртве идолима. Ко је одбијао, био је мучен и убијан."
      },
      reading: [
        { ref: { de: "2 Makk 6,18–31", sr: "2 Мак 6,18–31" }, note: { de: "Der alte Eleasar bleibt treu.", sr: "Старац Елеазар остаје веран." } },
        { ref: { de: "2 Makk 7,1–19", sr: "2 Мак 7,1–19" }, note: { de: "Die ersten sechs Brüder.", sr: "Првих шест браће." } },
        { ref: { de: "2 Makk 7,20–41", sr: "2 Мак 7,20–41" }, note: { de: "Die Mutter ermutigt den jüngsten Sohn.", sr: "Мајка храбри најмлађег сина." } }
      ],
      summary: {
        de: "Der neunzigjährige Schriftgelehrte Eleasar weigert sich, Verbotenes zu essen oder auch nur so zu tun, um der Jugend kein schlechtes Beispiel zu geben, und stirbt standhaft. Dann werden sieben Brüder mit ihrer Mutter vor den König gebracht. Einer nach dem anderen wird gefoltert, doch keiner gibt nach. Sie bekennen: Der König der Welt wird uns, die wir für seine Gesetze sterben, zu neuem, ewigem Leben auferwecken. Die Mutter sieht alle ihre Söhne an einem Tag sterben und ermutigt sie dennoch. Den jüngsten bittet sie, Himmel und Erde anzusehen und zu erkennen, dass Gott alles nicht aus Seiendem geschaffen hat. Zuletzt stirbt auch die Mutter.",
        sr: "Деведесетогодишњи књижевник Елеазар одбија да једе забрањено, па чак и да се само претвара, да не би младима дао лош пример, и умире постојано. Затим седам браће са мајком бивају доведени пред цара. Један за другим бивају мучени, али ниједан не попушта. Исповедају: Цар света васкрснуће нас, који умиремо за Његове законе, за нов, вечни живот. Мајка гледа како сви њени синови умиру у једном дану, а ипак их храбри. Најмлађег моли да погледа небо и земљу и да позна да је Бог све створио не од онога што постоји. На крају умире и мајка."
      },
      interp: {
        simple: {
          de: "Diese Märtyrer zeigen, dass Treue zu Gott wichtiger ist als das eigene Leben. Ihre Kraft kam aus der festen Hoffnung auf die Auferstehung.",
          sr: "Ови мученици показују да је верност Богу важнија од сопственог живота. Њихова снага долазила је из чврсте наде у васкрсење."
        },
        deeper: {
          de: "2 Makk 7 ist eines der deutlichsten Zeugnisse des Alten Testaments für die Hoffnung auf die leibliche Auferstehung. Zugleich bezeugt 2 Makk 7,28 die Schöpfung „aus dem Nichts“. Die Kirche ehrt die makkabäischen Märtyrer als Heilige, obwohl sie vor Christus lebten; die Überlieferung nennt die Mutter Solomonia. Ihr Gedenktag ist der 1. August (14. August), der erste Tag des Entschlafungsfastens. Eleasars Sorge um das Vorbild für die Jugend zeigt, dass unser Verhalten immer auch andere prägt.",
          sr: "2 Мак 7 једно је од најјаснијих старозаветних сведочанстава наде у телесно васкрсење. Уједно 2 Мак 7,28 сведочи о стварању „ни из чега“. Црква поштује мученике Макавеје као свете, иако су живели пре Христа; предање мајку назива Соломонија. Њихов спомен је 1. августа (14. августа), првог дана Госпојинског поста. Елеазарова брига о примеру за младе показује да наше понашање увек обликује и друге."
        },
        tag: "history"
      },
      christ: {
        de: "Die Hoffnung der Makkabäer auf die Auferstehung erfüllt sich in Christus, dem Erstling der Entschlafenen (1 Kor 15,20). Sie sind Vorläufer der christlichen Märtyrer, die für Christus ihr Leben gaben.",
        sr: "Нада Макавеја у васкрсење испуњава се у Христу, првенцу уснулих (1 Кор 15,20). Они су претече хришћанских мученика, који су живот свој дали за Христа."
      },
      links: [
        { ref: { de: "Hebr 11,35", sr: "Јев 11,35" }, note: { de: "Andere wurden gefoltert, um eine bessere Auferstehung zu erlangen.", sr: "Други бише мучени, да би добили боље васкрсење." } },
        { ref: { de: "Mt 10,28", sr: "Мт 10,28" }, note: { de: "Fürchtet euch nicht vor denen, die den Leib töten.", sr: "Не бојте се оних који убијају тело." } },
        { ref: { de: "1 Kor 15,20", sr: "1 Кор 15,20" }, note: { de: "Christus, der Erstling der Entschlafenen.", sr: "Христос, првенац уснулих." } },
        { ref: { de: "Offb 2,10", sr: "Отк 2,10" }, note: { de: "Sei treu bis zum Tod.", sr: "Буди веран до смрти." } }
      ],
      fathers: {
        de: "Der hl. Gregor von Nazianz hielt eine Lobrede auf die Makkabäer (Rede 15), und auch der hl. Johannes Chrysostomus predigte über sie. Für diese Version wurde kein freier Link zu diesen Texten geprüft. Sicher belegt ist ihr Gedenktag am 1. August (14. August).",
        sr: "Свети Григорије Богослов одржао је похвалну беседу Макавејима (беседа 15), а о њима је проповедао и свети Јован Златоуст. За ово издање није проверена слободна веза ка тим текстовима. Поуздано је потврђен њихов спомен 1. августа (14. августа)."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum weigerte sich Eleasar, auch nur zum Schein Verbotenes zu essen?", sr: "Зашто је Елеазар одбио чак и да се претвара да једе забрањено?" },
          a: { de: "Um der Jugend kein schlechtes Beispiel zu geben und Gott treu zu bleiben.", sr: "Да не би младима дао лош пример и да би остао веран Богу." } },
        { q: { de: "Woher nahmen die sieben Brüder ihre Kraft?", sr: "Одакле су седморица браће црпела снагу?" },
          a: { de: "Aus der festen Hoffnung, dass Gott sie zu ewigem Leben auferwecken wird.", sr: "Из чврсте наде да ће их Бог васкрснути за вечни живот." } },
        { q: { de: "Welche zwei Glaubenswahrheiten bezeugt 2 Makk 7 besonders?", sr: "Које две истине вере посебно сведочи 2 Мак 7?" },
          a: { de: "Die Auferstehung der Toten und die Schöpfung aus dem Nichts (2 Makk 7,28).", sr: "Васкрсење мртвих и стварање ни из чега (2 Мак 7,28)." } }
      ],
      practice: {
        de: "Denke daran, wer auf dein Beispiel schaut – jüngere Geschwister, Freunde, Kollegen. Wo kannst du diese Woche ein gutes Vorbild im Glauben sein?",
        sr: "Помислите ко гледа на ваш пример – млађа браћа и сестре, пријатељи, колеге. Где ове недеље можете бити добар пример у вери?"
      },
      review: {
        de: "Eleasar, die sieben Brüder und ihre Mutter sterben lieber, als Gottes Gesetz zu brechen, in der Hoffnung auf die Auferstehung. Die Kirche ehrt sie am 1. August (14. August).",
        sr: "Елеазар, седморица браће и њихова мајка радије умиру него да прекрше Божији закон, у нади на васкрсење. Црква их прославља 1. августа (14. августа)."
      },
      quiz: [
        { q: { de: "Welcher König verfolgte die Makkabäer?", sr: "Који цар је гонио Макавеје?" },
          options: [{ de: "Antiochos IV.", sr: "Антиох IV" }, { de: "Nebukadnezar", sr: "Навуходоносор" }, { de: "Herodes", sr: "Ирод" }], correct: 0 },
        { q: { de: "Wie viele Söhne hatte die Mutter in 2 Makk 7?", sr: "Колико синова је имала мајка у 2 Мак 7?" },
          options: [{ de: "Sieben", sr: "Седам" }, { de: "Zwölf", sr: "Дванаест" }, { de: "Drei", sr: "Три" }], correct: 0 },
        { q: { de: "Welche Lehre bezeugt 2 Makk 7,28?", sr: "Које учење сведочи 2 Мак 7,28?" },
          options: [{ de: "Die Schöpfung aus dem Nichts", sr: "Стварање ни из чега" }, { de: "Die Seelenwanderung", sr: "Сеобу душа" }, { de: "Viele Götter", sr: "Многобоштво" }], correct: 0 },
        { q: { de: "Wann ist der Gedenktag der makkabäischen Märtyrer?", sr: "Када је спомен мученика Макавеја?" },
          options: [{ de: "1. August (14. August)", sr: "1. августа (14. августа)" }, { de: "25. März (7. April)", sr: "25. марта (7. априла)" }, { de: "14. September (27. September)", sr: "14. септембра (27. септембра)" }], correct: 0 }
      ]
    },
  {
      id: "bib-eph6", book: "eph", order: 31,
      title: { de: "Die Waffenrüstung Gottes", sr: "Свеоружје Божије" },
      ref: { de: "Epheser 6,10–20", sr: "Ефесцима 6,10–20" },
      intro: {
        de: "Der Apostel Paulus schrieb den Epheserbrief nach kirchlicher Überlieferung aus der Gefangenschaft. Am Ende des Briefes beschreibt er das Leben des Christen als geistlichen Kampf und gebraucht dafür das Bild der Rüstung eines Soldaten.",
        sr: "Апостол Павле је, према црквеном предању, написао Посланицу Ефесцима из тамнице. На крају посланице описује живот хришћанина као духовну борбу и за то користи слику оружја једног војника."
      },
      introTag: "history",
      context: {
        de: "Ephesus war eine große Stadt mit dem berühmten Tempel der Artemis; Magie und Götzendienst waren dort verbreitet (vgl. Apg 19). Paulus erinnert die Christen daran, dass ihr eigentlicher Kampf nicht gegen Menschen geht.",
        sr: "Ефес је био велики град са чувеним Артемидиним храмом; магија и идолопоклонство су тамо били раширени (уп. Дап 19). Павле подсећа хришћане да њихова права борба није против људи."
      },
      reading: [
        { ref: { de: "Eph 6,10–13", sr: "Еф 6,10–13" }, note: { de: "Der Kampf geht nicht gegen Fleisch und Blut.", sr: "Борба није против крви и тела." } },
        { ref: { de: "Eph 6,14–17", sr: "Еф 6,14–17" }, note: { de: "Die einzelnen Teile der Rüstung.", sr: "Поједини делови оружја." } },
        { ref: { de: "Eph 6,18–20", sr: "Еф 6,18–20" }, note: { de: "Betet allezeit im Geist.", sr: "Молите се у свако време Духом." } }
      ],
      summary: {
        de: "Paulus ruft die Gläubigen auf, stark zu werden im Herrn und die ganze Waffenrüstung Gottes anzulegen, um den Listen des Teufels zu widerstehen. Der Kampf richtet sich nicht gegen Menschen, sondern gegen die geistigen Mächte der Bosheit. Er nennt den Gürtel der Wahrheit, den Panzer der Gerechtigkeit, die Schuhe der Bereitschaft für das Evangelium des Friedens, den Schild des Glaubens, mit dem man die feurigen Pfeile des Bösen auslöscht, den Helm des Heils und das Schwert des Geistes, das Wort Gottes. Zum Schluss fordert er auf, allezeit im Geist zu beten und wachsam zu sein, auch für ihn selbst, damit er das Evangelium freimütig verkünden kann.",
        sr: "Павле позива вернике да се оснаже у Господу и обуку у све оружје Божије, да би се одупрли лукавствима ђавољим. Борба није уперена против људи, него против духовних сила злобе. Наводи појас истине, оклоп правде, обућу спремности за јеванђеље мира, штит вере којим се гасе огњене стреле злога, шлем спасења и мач духовни, који је реч Божија. На крају позива да се у свако време молимо Духом и да бдимо, и за њега самог, да би слободно проповедао јеванђеље."
      },
      interp: {
        simple: {
          de: "Der Christ kämpft nicht mit Gewalt gegen andere Menschen, sondern gegen die Sünde und gegen das Böse. Die Waffen dafür sind Wahrheit, Gerechtigkeit, Glaube, das Wort Gottes und vor allem das Gebet.",
          sr: "Хришћанин се не бори силом против других људи, него против греха и зла. Оружје за то су истина, правда, вера, реч Божија и пре свега молитва."
        },
        deeper: {
          de: "Die orthodoxe Überlieferung spricht oft vom „unsichtbaren Kampf“ gegen Gedanken und Leidenschaften. Eph 6 ist eine wichtige biblische Grundlage dafür. Auffällig ist, dass fast alle Teile der Rüstung zur Verteidigung dienen; nur das Wort Gottes ist ein Schwert. Das erinnert daran, dass Christus selbst den Versucher in der Wüste mit Worten der Schrift abwies (Mt 4,1–11). Das Gebet steht am Ende und hält alles zusammen. Wer Feinde unter Menschen sucht, hat nach diesem Text den eigentlichen Kampf verfehlt.",
          sr: "Православно предање често говори о „невидљивој борби“ против помисли и страсти. Еф 6 је важан библијски темељ за то. Упадљиво је да скоро сви делови оружја служе за одбрану; само је реч Божија мач. То подсећа да је сам Христос у пустињи одбио кушача речима Писма (Мт 4,1–11). Молитва стоји на крају и све повезује. Ко тражи непријатеље међу људима, по овом тексту је промашио праву борбу."
        },
        tag: "counsel"
      },
      christ: {
        de: "Die Kraft für diesen Kampf kommt nicht aus uns, sondern aus dem Herrn (Eph 6,10). Christus hat die Mächte schon besiegt (Kol 2,15); der Christ nimmt durch Taufe und Gebet an seinem Sieg teil.",
        sr: "Снага за ову борбу не долази из нас, него од Господа (Еф 6,10). Христос је силе већ победио (Кол 2,15); хришћанин кроз крштење и молитву учествује у Његовој победи."
      },
      links: [
        { ref: { de: "Jes 59,17", sr: "Ис 59,17" }, note: { de: "Gott selbst legt Gerechtigkeit an wie einen Panzer.", sr: "Сам Бог облачи правду као оклоп." } },
        { ref: { de: "Mt 4,1–11", sr: "Мт 4,1–11" }, note: { de: "Christus widersteht dem Versucher mit dem Wort Gottes.", sr: "Христос се речју Божијом супротставља кушачу." } },
        { ref: { de: "1 Petr 5,8–9", sr: "1 Пт 5,8–9" }, note: { de: "Seid nüchtern und wacht; widersteht fest im Glauben.", sr: "Будите трезвени и бдите; противите се тврди у вери." } },
        { ref: { de: "Hebr 4,12", sr: "Јев 4,12" }, note: { de: "Das Wort Gottes ist schärfer als jedes zweischneidige Schwert.", sr: "Реч Божија оштрија је од сваког мача са две оштрице." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus legte den Epheserbrief in Homilien aus. Der englische Text steht in der Reihe NPNF I/13. Wörtliche Zitate gibt diese App nicht wieder.",
        sr: "Свети Јован Златоуст тумачио је Посланицу Ефесцима у беседама. Енглески текст налази се у збирци NPNF I/13. Ова апликација не наводи дословне цитате."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Gegen wen richtet sich nach Eph 6,12 der Kampf des Christen?", sr: "Против кога је, по Еф 6,12, уперена борба хришћанина?" },
          a: { de: "Nicht gegen Menschen, sondern gegen die geistigen Mächte der Bosheit.", sr: "Не против људи, него против духовних сила злобе." } },
        { q: { de: "Welches Teil der Rüstung ist eine Angriffswaffe?", sr: "Који део оружја служи за напад?" },
          a: { de: "Das Schwert des Geistes, das Wort Gottes.", sr: "Мач духовни, који је реч Божија." } },
        { q: { de: "Was steht am Ende der Aufzählung und hält alles zusammen?", sr: "Шта стоји на крају набрајања и све повезује?" },
          a: { de: "Das unablässige Gebet im Geist und die Wachsamkeit.", sr: "Непрестана молитва Духом и бдење." } }
      ],
      practice: {
        de: "Lerne einen kurzen Bibelvers auswendig, zum Beispiel Eph 6,10. Wenn diese Woche ein böser Gedanke kommt, sprich ihn innerlich – und bete das Jesusgebet.",
        sr: "Научите напамет кратак библијски стих, на пример Еф 6,10. Када ове недеље дође лоша помисао, изговорите га у себи – и помолите се Исусовом молитвом."
      },
      review: {
        de: "Der Christ kämpft nicht gegen Menschen, sondern gegen das Böse. Seine Rüstung sind Wahrheit, Gerechtigkeit, Friedensbereitschaft, Glaube, Heil und das Wort Gottes – getragen vom Gebet.",
        sr: "Хришћанин се не бори против људи, него против зла. Његово оружје су истина, правда, спремност за мир, вера, спасење и реч Божија – ношени молитвом."
      },
      quiz: [
        { q: { de: "Was ist nach Eph 6,17 das Schwert des Geistes?", sr: "Шта је, по Еф 6,17, мач духовни?" },
          options: [{ de: "Das Wort Gottes", sr: "Реч Божија" }, { de: "Die eigene Kraft", sr: "Сопствена снага" }, { de: "Ein echtes Schwert", sr: "Прави мач" }], correct: 0 },
        { q: { de: "Womit löscht man die feurigen Pfeile des Bösen?", sr: "Чиме се гасе огњене стреле злога?" },
          options: [{ de: "Mit dem Schild des Glaubens", sr: "Штитом вере" }, { de: "Mit dem Helm", sr: "Шлемом" }, { de: "Mit dem Gürtel", sr: "Појасом" }], correct: 0 },
        { q: { de: "Gegen wen kämpft der Christ nach Eph 6,12 nicht?", sr: "Против кога се хришћанин, по Еф 6,12, не бори?" },
          options: [{ de: "Gegen Fleisch und Blut, also Menschen", sr: "Против крви и тела, дакле људи" }, { de: "Gegen die Mächte der Bosheit", sr: "Против сила злобе" }, { de: "Gegen die Listen des Teufels", sr: "Против лукавстава ђавољих" }], correct: 0 },
        { q: { de: "Wozu ruft Paulus am Schluss auf?", sr: "На шта Павле позива на крају?" },
          options: [{ de: "Allezeit im Geist zu beten und zu wachen", sr: "Да се у свако време молимо Духом и бдимо" }, { de: "Zu den Waffen zu greifen", sr: "Да се лаћамо оружја" }, { de: "Ephesus zu verlassen", sr: "Да напустимо Ефес" }], correct: 0 }
      ]
    },
  {
      id: "bib-thess4", book: "thess", order: 32,
      title: { de: "Hoffnung für die Entschlafenen", sr: "Нада за уснуле" },
      ref: { de: "1. Thessalonicher 4,13–18", sr: "1. Солуњанима 4,13–18" },
      intro: {
        de: "Der 1. Thessalonicherbrief gilt als einer der ältesten Briefe des Paulus, geschrieben um das Jahr 50. Die junge Gemeinde in Thessaloniki war unsicher, was mit ihren Verstorbenen geschieht.",
        sr: "Прва посланица Солуњанима сматра се једном од најстаријих Павлових посланица, написаном око 50. године. Млада заједница у Солуну није била сигурна шта бива са њиховим упокојенима."
      },
      introTag: "history",
      context: {
        de: "Paulus hatte in Thessaloniki nur kurz gepredigt und musste die Stadt verlassen (Apg 17,1–10). Inzwischen waren Gemeindemitglieder gestorben, und die Lebenden trauerten, als hätten sie keine Hoffnung.",
        sr: "Павле је у Солуну проповедао кратко и морао је да напусти град (Дап 17,1–10). У међувремену су неки чланови заједнице умрли, а живи су туговали као да немају наде."
      },
      reading: [
        { ref: { de: "1 Thess 4,13–14", sr: "1 Сол 4,13–14" }, note: { de: "Nicht trauern wie die, die keine Hoffnung haben.", sr: "Не туговати као они који немају наде." } },
        { ref: { de: "1 Thess 4,15–18", sr: "1 Сол 4,15–18" }, note: { de: "Die Wiederkunft des Herrn; tröstet einander.", sr: "Други долазак Господњи; тешите једни друге." } }
      ],
      summary: {
        de: "Paulus will nicht, dass die Gläubigen über die Entschlafenen trauern wie die anderen, die keine Hoffnung haben. Wenn wir glauben, dass Jesus gestorben und auferstanden ist, dann wird Gott auch die Entschlafenen durch Jesus mit ihm führen. Wenn der Herr selbst vom Himmel herabkommt, beim Ruf des Erzengels und beim Schall der Posaune Gottes, werden zuerst die in Christus Verstorbenen auferstehen. Dann werden die Lebenden mit ihnen dem Herrn entgegengehen, und so werden wir allezeit beim Herrn sein. Paulus schließt: Tröstet einander mit diesen Worten.",
        sr: "Павле не жели да верници тугују за уснулима као остали који немају наде. Ако верујемо да је Исус умро и васкрсао, онда ће Бог и уснуле кроз Исуса довести с Њим. Када сам Господ сиђе с неба, на зов арханђела и на трубу Божију, прво ће васкрснути мртви у Христу. Затим ће живи заједно с њима поћи у сусрет Господу, и тако ћемо свагда са Господом бити. Павле завршава: Тешите дакле једни друге овим речима."
      },
      interp: {
        simple: {
          de: "Christen dürfen trauern, wenn ein Mensch stirbt. Aber ihre Trauer ist voller Hoffnung, weil Christus auferstanden ist und auch die Verstorbenen auferwecken wird.",
          sr: "Хришћани смеју да тугују када неко умре. Али њихова туга је пуна наде, јер је Христос васкрсао и васкрснуће и упокојене."
        },
        deeper: {
          de: "Paulus nennt die Verstorbenen „Entschlafene“. Daher spricht die Kirche vom Entschlafen und betet für die Verstorbenen, besonders bei Totengedenken (Parastos/Panichida). Die Bilder in 1 Thess 4,16–17 – Ruf, Posaune, Wolken – beschreiben ein Geschehen, das unsere Vorstellung übersteigt. Die Kirche lehnt Spekulationen über Termine der Wiederkunft ab (vgl. 1 Thess 5,1–2: Der Tag des Herrn kommt wie ein Dieb in der Nacht). Gewiss ist das Ziel: allezeit beim Herrn sein.",
          sr: "Павле упокојене назива „уснулима“. Зато Црква говори о уснућу и моли се за упокојене, нарочито на парастосима и поменима. Слике у 1 Сол 4,16–17 – зов, труба, облаци – описују догађај који надилази нашу представу. Црква одбацује нагађања о времену Другог доласка (уп. 1 Сол 5,1–2: Дан Господњи долази као лопов ноћу). Сигуран је циљ: свагда бити са Господом."
        },
        tag: "dogma"
      },
      christ: {
        de: "Der Grund der Hoffnung ist Christi eigener Tod und seine Auferstehung (1 Thess 4,14). Weil er den Tod besiegt hat, ist der Tod für die Gläubigen ein Schlaf.",
        sr: "Темељ наде је сама Христова смрт и Његово васкрсење (1 Сол 4,14). Пошто је Он победио смрт, смрт је за вернике сан."
      },
      links: [
        { ref: { de: "Joh 11,11–26", sr: "Јн 11,11–26" }, note: { de: "Lazarus schläft; ich bin die Auferstehung und das Leben.", sr: "Лазар спава; ја сам васкрсење и живот." } },
        { ref: { de: "1 Kor 15,51–55", sr: "1 Кор 15,51–55" }, note: { de: "Tod, wo ist dein Stachel?", sr: "Где ти је, смрти, жалац?" } },
        { ref: { de: "Mt 24,30–31", sr: "Мт 24,30–31" }, note: { de: "Der Menschensohn kommt auf den Wolken.", sr: "Син Човечији долази на облацима." } },
        { ref: { de: "1 Thess 5,1–2", sr: "1 Сол 5,1–2" }, note: { de: "Der Tag des Herrn kommt wie ein Dieb.", sr: "Дан Господњи долази као лопов." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus legte die Thessalonicherbriefe in Homilien aus (englisch in NPNF I/13). Wörtliche Zitate gibt diese App nicht wieder.",
        sr: "Свети Јован Златоуст тумачио је посланице Солуњанима у беседама (на енглеском у NPNF I/13). Ова апликација не наводи дословне цитате."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Verbietet Paulus die Trauer um Verstorbene?", sr: "Да ли Павле забрањује тугу за упокојенима?" },
          a: { de: "Nein. Er sagt, Christen sollen nicht trauern wie die, die keine Hoffnung haben.", sr: "Не. Он каже да хришћани не треба да тугују као они који немају наде." } },
        { q: { de: "Warum nennt Paulus die Toten „Entschlafene“?", sr: "Зашто Павле мртве назива „уснулима“?" },
          a: { de: "Weil der Tod durch Christi Auferstehung kein Ende mehr ist, sondern wie ein Schlaf bis zur Auferstehung.", sr: "Зато што смрт, због Христовог васкрсења, више није крај, него као сан до васкрсења." } },
        { q: { de: "Was soll man laut 1 Thess 4,18 mit diesen Worten tun?", sr: "Шта, по 1 Сол 4,18, треба чинити овим речима?" },
          a: { de: "Einander trösten.", sr: "Тешити једни друге." } }
      ],
      practice: {
        de: "Denke an einen verstorbenen Menschen, der dir lieb war. Bete für ihn – etwa „Gedenke, o Herr, der Seele deines Dieners/deiner Dienerin …“ –, und frage deinen Priester, wie du ihn beim Totengedenken nennen kannst.",
        sr: "Помислите на неког упокојеног ко вам је био драг. Помолите се за њега – на пример „Помени, Господе, душу слуге Твога/слушкиње Твоје …“ – и питајте свештеника како да га поменете на парастосу."
      },
      review: {
        de: "Christen trauern mit Hoffnung: Weil Christus auferstanden ist, werden die Entschlafenen auferstehen, und wir werden allezeit beim Herrn sein.",
        sr: "Хришћани тугују са надом: пошто је Христос васкрсао, уснули ће васкрснути, и свагда ћемо бити са Господом."
      },
      quiz: [
        { q: { de: "Wie sollen Christen nach 1 Thess 4,13 nicht trauern?", sr: "Како, по 1 Сол 4,13, хришћани не треба да тугују?" },
          options: [{ de: "Wie die, die keine Hoffnung haben", sr: "Као они који немају наде" }, { de: "Überhaupt nicht – Trauer ist verboten", sr: "Никако – туга је забрањена" }, { de: "Nur heimlich", sr: "Само тајно" }], correct: 0 },
        { q: { de: "Wer steht bei der Wiederkunft zuerst auf?", sr: "Ко ће при Другом доласку прво васкрснути?" },
          options: [{ de: "Die in Christus Verstorbenen", sr: "Мртви у Христу" }, { de: "Die Engel", sr: "Анђели" }, { de: "Niemand", sr: "Нико" }], correct: 0 },
        { q: { de: "Wann wurde der 1. Thessalonicherbrief etwa geschrieben?", sr: "Када је отприлике написана Прва посланица Солуњанима?" },
          options: [{ de: "Um das Jahr 50", sr: "Око 50. године" }, { de: "Um das Jahr 300", sr: "Око 300. године" }, { de: "Vor Christi Geburt", sr: "Пре Христовог рођења" }], correct: 0 },
        { q: { de: "Was sagt Paulus über den Termin des Tages des Herrn (1 Thess 5,2)?", sr: "Шта Павле каже о времену Дана Господњег (1 Сол 5,2)?" },
          options: [{ de: "Er kommt wie ein Dieb in der Nacht", sr: "Долази као лопов ноћу" }, { de: "Er lässt sich genau berechnen", sr: "Може се тачно израчунати" }, { de: "Er kommt nie", sr: "Никада неће доћи" }], correct: 0 }
      ]
    },
  {
      id: "bib-prov9", book: "prov", order: 33,
      title: { de: "Die Weisheit baut ihr Haus", sr: "Премудрост сазида себи дом" },
      ref: { de: "Sprichwörter 8,22–31 und 9,1–11", sr: "Приче Соломонове 8,22–31 и 9,1–11" },
      intro: {
        de: "Das Buch der Sprichwörter (Sprüche Salomos) sammelt Lebensweisheiten Israels. In Kapitel 8 und 9 spricht die Weisheit selbst wie eine Person. Die Kirche liest Spr 9,1–11 in der Vesper an Festen der Gottesgebärerin.",
        sr: "Књига Прича Соломонових сабира мудрост живота Израиља. У 8. и 9. глави сама Премудрост говори као личност. Црква чита Прич 9,1–11 на вечерњи на празнике Богородице."
      },
      introTag: "history",
      context: {
        de: "Das Buch richtet sich an junge Menschen und lehrt: Die Furcht des Herrn ist der Anfang der Weisheit (Spr 1,7; 9,10). Weisheit ist hier nicht bloß Wissen, sondern ein Leben im Einklang mit Gott.",
        sr: "Књига се обраћа младима и учи: Почетак мудрости је страх Господњи (Прич 1,7; 9,10). Мудрост овде није само знање, него живот у складу са Богом."
      },
      reading: [
        { ref: { de: "Spr 8,22–31", sr: "Прич 8,22–31" }, note: { de: "Die Weisheit war bei Gott vor der Schöpfung.", sr: "Премудрост је била код Бога пре стварања." } },
        { ref: { de: "Spr 9,1–6", sr: "Прич 9,1–6" }, note: { de: "Die Weisheit baut ihr Haus und lädt zum Mahl.", sr: "Премудрост зида дом и позива на трпезу." } },
        { ref: { de: "Spr 9,7–11", sr: "Прич 9,7–11" }, note: { de: "Die Furcht des Herrn ist der Anfang der Weisheit.", sr: "Почетак мудрости је страх Господњи." } }
      ],
      summary: {
        de: "In Kapitel 8 erzählt die Weisheit, dass sie schon vor der Erschaffung der Welt beim Herrn war: Als er den Himmel bereitete und dem Meer seine Grenze setzte, war sie bei ihm und freute sich an den Menschen. In Kapitel 9 hat die Weisheit ihr Haus gebaut und sieben Säulen aufgestellt. Sie hat ihr Mahl bereitet, Wein gemischt und ihre Mägde ausgesandt. Sie lädt die Unerfahrenen ein: Kommt, esst von meinem Brot und trinkt von dem Wein, den ich gemischt habe; lasst ab von der Torheit, so werdet ihr leben. Die Furcht des Herrn ist der Anfang der Weisheit.",
        sr: "У 8. глави Премудрост приповеда да је била код Господа још пре стварања света: када је уређивао небо и мору постављао границу, она је била код Њега и радовала се људима. У 9. глави Премудрост је сазидала себи дом и поставила седам стубова. Припремила је трпезу, растворила вино и послала слушкиње. Позива неискусне: Ходите, једите мој хлеб и пијте вино које сам растворила; оставите лудост, и живећете. Почетак мудрости је страх Господњи."
      },
      interp: {
        simple: {
          de: "Gott lädt jeden Menschen ein, weise zu werden. Wahre Weisheit beginnt mit Ehrfurcht vor Gott und führt zum Leben.",
          sr: "Бог позива сваког човека да постане мудар. Права мудрост почиње страхопоштовањем пред Богом и води у живот."
        },
        deeper: {
          de: "Die Kirchenväter deuteten die personifizierte Weisheit auf Christus, „Gottes Kraft und Gottes Weisheit“ (1 Kor 1,24). Arianer beriefen sich auf Spr 8,22 („Der Herr schuf mich“), um zu behaupten, der Sohn sei ein Geschöpf. Der hl. Athanasius antwortete in seinen Reden gegen die Arianer (Rede II), der Vers beziehe sich auf die Menschwerdung, nicht auf das ewige Sein des Sohnes. Das „Haus mit sieben Säulen“ wird in der Überlieferung unterschiedlich gedeutet: auf die Kirche, auf die Gottesgebärerin, in der die Weisheit Fleisch annahm, oder auf den Leib Christi. Das Mahl aus Brot und Wein sehen viele Väter als Vorausbild der Eucharistie. Diese Deutungen sind Auslegungen der Väter, keine Worterklärungen des hebräischen Textes.",
          sr: "Свети оци су персонификовану Премудрост тумачили као Христа, „Божију силу и Божију премудрост“ (1 Кор 1,24). Аријанци су се позивали на Прич 8,22 („Господ ме створи“) да би тврдили да је Син створење. Свети Атанасије је у Беседама против аријанаца (беседа II) одговорио да се стих односи на оваплоћење, а не на вечно постојање Сина. „Дом са седам стубова“ предање тумачи различито: као Цркву, као Богородицу, у којој је Премудрост примила тело, или као тело Христово. Трпезу од хлеба и вина многи оци виде као праслику Евхаристије. Ова тумачења су тумачења отаца, а не објашњење речи јеврејског текста."
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus ist die Weisheit Gottes in Person (1 Kor 1,24.30). Er hat sich in der Gottesgebärerin ein „Haus“ gebaut und lädt zu seinem Mahl ein: „Nehmt, esst …“ (Mt 26,26).",
        sr: "Христос је Премудрост Божија у личности (1 Кор 1,24.30). Он је себи у Богородици сазидао „дом“ и позива на своју трпезу: „Узмите, једите …“ (Мт 26,26)."
      },
      links: [
        { ref: { de: "1 Kor 1,24", sr: "1 Кор 1,24" }, note: { de: "Christus, Gottes Kraft und Gottes Weisheit.", sr: "Христос, Божија сила и Божија премудрост." } },
        { ref: { de: "Joh 1,1–3", sr: "Јн 1,1–3" }, note: { de: "Das Wort war im Anfang bei Gott; alles ist durch es geworden.", sr: "У почетку беше Реч … и све кроз Њу постаде." } },
        { ref: { de: "Mt 22,1–10", sr: "Мт 22,1–10" }, note: { de: "Das Gleichnis vom Hochzeitsmahl: Die Diener laden ein.", sr: "Прича о свадби: слуге позивају." } },
        { ref: { de: "Ps 110,10 (LXX; hebr. 111,10)", sr: "Пс 110,10 (по Септуагинти; јевр. 111,10)" }, note: { de: "Der Anfang der Weisheit ist die Furcht des Herrn.", sr: "Почетак мудрости је страх Господњи." } }
      ],
      fathers: {
        de: "Der hl. Athanasius behandelt Spr 8,22 ausführlich in der zweiten Rede gegen die Arianer (englisch in NPNF II/4). Die Lesung Spr 9,1–11 gehört zur Vesper an Festen der Gottesgebärerin; die genaue Leseordnung kann sich zwischen Ortskirchen unterscheiden.",
        sr: "Свети Атанасије опширно обрађује Прич 8,22 у другој беседи против аријанаца (на енглеском у NPNF II/4). Читање Прич 9,1–11 припада вечерњу на празнике Богородице; тачан поредак читања може се разликовати међу помесним Црквама."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Womit beginnt nach Spr 9,10 die Weisheit?", sr: "Чиме, по Прич 9,10, почиње мудрост?" },
          a: { de: "Mit der Furcht des Herrn, also mit Ehrfurcht vor Gott.", sr: "Страхом Господњим, дакле страхопоштовањем пред Богом." } },
        { q: { de: "Auf wen deuten die Kirchenväter die Weisheit in Spr 8–9?", sr: "Како свети оци тумаче Премудрост у Прич 8–9?" },
          a: { de: "Auf Christus, die Weisheit Gottes (1 Kor 1,24).", sr: "Као Христа, Премудрост Божију (1 Кор 1,24)." } },
        { q: { de: "Wie antwortete der hl. Athanasius auf die arianische Deutung von Spr 8,22?", sr: "Како је свети Атанасије одговорио на аријанско тумачење Прич 8,22?" },
          a: { de: "Der Vers beziehe sich auf die Menschwerdung, nicht auf ein Geschaffensein des ewigen Sohnes.", sr: "Стих се односи на оваплоћење, а не на то да је вечни Син створен." } }
      ],
      practice: {
        de: "Lies diese Woche jeden Tag ein Kapitel aus den Sprichwörtern (das Buch hat 31 Kapitel – ungefähr eines pro Tag im Monat). Notiere einen Satz, der dich anspricht.",
        sr: "Ове недеље читајте сваког дана по једну главу из Прича Соломонових (књига има 31 главу – отприлике по једна за сваки дан у месецу). Запишите једну реченицу која вам говори."
      },
      review: {
        de: "Die Weisheit war bei Gott vor der Schöpfung und lädt alle zu ihrem Mahl ein. Die Väter erkennen in ihr Christus. Der Anfang der Weisheit ist die Furcht des Herrn.",
        sr: "Премудрост је била код Бога пре стварања и све позива на своју трпезу. Оци у њој препознају Христа. Почетак мудрости је страх Господњи."
      },
      quiz: [
        { q: { de: "Wie viele Säulen stellt die Weisheit in Spr 9,1 auf?", sr: "Колико стубова поставља Премудрост у Прич 9,1?" },
          options: [{ de: "Sieben", sr: "Седам" }, { de: "Zwölf", sr: "Дванаест" }, { de: "Drei", sr: "Три" }], correct: 0 },
        { q: { de: "An welchen Festen liest die Kirche Spr 9,1–11 in der Vesper?", sr: "На које празнике Црква чита Прич 9,1–11 на вечерњи?" },
          options: [{ de: "An Festen der Gottesgebärerin", sr: "На празнике Богородице" }, { de: "Nur an Ostern", sr: "Само на Васкрс" }, { de: "Nie", sr: "Никада" }], correct: 0 },
        { q: { de: "Welche Irrlehrer beriefen sich auf Spr 8,22?", sr: "Који јеретици су се позивали на Прич 8,22?" },
          options: [{ de: "Die Arianer", sr: "Аријанци" }, { de: "Die Ikonoklasten", sr: "Иконоборци" }, { de: "Die Monophysiten", sr: "Монофизити" }], correct: 0 },
        { q: { de: "Wen nennt Paulus „Gottes Weisheit“ (1 Kor 1,24)?", sr: "Кога Павле назива „Божијом премудрошћу“ (1 Кор 1,24)?" },
          options: [{ de: "Christus", sr: "Христа" }, { de: "Salomo", sr: "Соломона" }, { de: "Mose", sr: "Мојсија" }], correct: 0 }
      ]
    },
  {
      id: "bib-col3", book: "col", order: 34,
      title: { de: "Den neuen Menschen anziehen", sr: "Обући се у новог човека" },
      ref: { de: "Kolosser 3,1–17", sr: "Колошанима 3,1–17" },
      intro: {
        de: "Der Kolosserbrief ist an die Gemeinde in Kolossä in Kleinasien gerichtet. Nach kirchlicher Überlieferung schrieb ihn Paulus aus der Gefangenschaft. Kapitel 3 zeigt, wie ein Leben aussieht, das aus der Taufe kommt.",
        sr: "Посланица Колошанима упућена је заједници у Колосама у Малој Азији. Према црквеном предању, Павле ју је написао из тамнице. Трећа глава показује какав је живот који произлази из крштења."
      },
      introTag: "history",
      context: {
        de: "In Kolossä verbreiteten manche Lehrer strenge Regeln über Speisen, Feste und Engelverehrung als Weg zur Vollkommenheit (Kol 2,16–23). Paulus antwortet: Die Fülle ist in Christus; aus der Gemeinschaft mit ihm wächst ein neues Leben.",
        sr: "У Колосама су неки учитељи ширили строга правила о јелима, празницима и поштовању анђела као пут ка савршенству (Кол 2,16–23). Павле одговара: пунина је у Христу; из заједнице са Њим израста нови живот."
      },
      reading: [
        { ref: { de: "Kol 3,1–4", sr: "Кол 3,1–4" }, note: { de: "Sucht, was droben ist.", sr: "Тражите оно што је горе." } },
        { ref: { de: "Kol 3,5–11", sr: "Кол 3,5–11" }, note: { de: "Den alten Menschen ablegen.", sr: "Свући старог човека." } },
        { ref: { de: "Kol 3,12–17", sr: "Кол 3,12–17" }, note: { de: "Erbarmen, Güte, Demut, Liebe anziehen.", sr: "Обући милосрђе, доброту, смирење, љубав." } }
      ],
      summary: {
        de: "Weil die Gläubigen mit Christus auferweckt sind, sollen sie suchen, was droben ist, wo Christus zur Rechten Gottes sitzt. Ihr Leben ist mit Christus verborgen in Gott. Darum sollen sie ablegen, was zum alten Menschen gehört: Unzucht, Habgier, Zorn, Bosheit, Lästerung und Lüge. Sie haben den neuen Menschen angezogen, der nach dem Bild seines Schöpfers erneuert wird; in ihm gibt es nicht mehr Grieche und Jude, Sklave und Freier, sondern Christus ist alles und in allen. Als Gottes Auserwählte sollen sie Erbarmen, Güte, Demut, Sanftmut und Geduld anziehen, einander vergeben, wie der Herr vergeben hat, und über allem die Liebe tragen. Der Friede Christi soll in ihren Herzen herrschen; mit Psalmen, Hymnen und geistlichen Liedern sollen sie Gott danken.",
        sr: "Пошто су верни васкрсли са Христом, треба да траже оно што је горе, где Христос седи с десне стране Бога. Њихов живот је сакривен са Христом у Богу. Зато треба да одбаце оно што припада старом човеку: блуд, лакомство, гнев, злобу, хулу и лаж. Обукли су се у новог човека, који се обнавља по лику свога Створитеља; у њему више нема Јелина и Јудејца, роба и слободњака, него је Христос све и у свему. Као изабраници Божији треба да се обуку у милосрђе, доброту, смирење, кротост и дуготрпљење, да праштају један другоме као што је Господ опростио, а изнад свега да носе љубав. Мир Христов нека влада у њиховим срцима; псалмима, химнама и духовним песмама нека захваљују Богу."
      },
      interp: {
        simple: {
          de: "In der Taufe haben wir Christus „angezogen“. Jetzt geht es darum, jeden Tag alte Gewohnheiten abzulegen und Liebe, Geduld und Vergebung „anzuziehen“ wie ein neues Gewand.",
          sr: "У крштењу смо се „обукли“ у Христа. Сада је задатак да сваког дана свлачимо старе навике и „облачимо“ љубав, трпљење и праштање као нову одећу."
        },
        deeper: {
          de: "Das Bild vom Ablegen und Anziehen erinnert an die Taufe: Der Neugetaufte erhält ein weißes Gewand, und man singt „Die ihr auf Christus getauft seid, habt Christus angezogen“ (Gal 3,27). Der Satz vom neuen Menschen, „erneuert nach dem Bild seines Schöpfers“ (Kol 3,10), verbindet sich mit der Lehre von Bild und Ähnlichkeit Gottes (Gen 1,26): Das Bild ist gegeben, die Ähnlichkeit wächst im Leben mit Christus. Kol 3,16 ist ein frühes Zeugnis für das gemeinsame Singen von Psalmen und Hymnen.",
          sr: "Слика свлачења и облачења подсећа на крштење: новокрштени добија белу хаљину, и пева се „Који се у Христа крстисте, у Христа се обукосте“ (Гал 3,27). Реч о новом човеку, „који се обнавља по лику свога Створитеља“ (Кол 3,10), повезује се са учењем о лику и подобију Божијем (Пост 1,26): лик је дат, а подобије расте у животу са Христом. Кол 3,16 је рано сведочанство заједничког певања псалама и химни."
        },
        tag: "dogma"
      },
      christ: {
        de: "Christus ist „alles und in allen“ (Kol 3,11). Das neue Leben ist kein moralisches Programm, sondern Gemeinschaft mit dem auferstandenen Christus, in dem unser Leben verborgen ist.",
        sr: "Христос је „све и у свему“ (Кол 3,11). Нови живот није морални програм, него заједница са васкрслим Христом, у коме је сакривен наш живот."
      },
      links: [
        { ref: { de: "Gal 3,27", sr: "Гал 3,27" }, note: { de: "Die ihr auf Christus getauft seid, habt Christus angezogen.", sr: "Који се у Христа крстисте, у Христа се обукосте." } },
        { ref: { de: "Röm 6,4", sr: "Рим 6,4" }, note: { de: "In einem neuen Leben wandeln.", sr: "Да ходимо у новом животу." } },
        { ref: { de: "Eph 4,22–24", sr: "Еф 4,22–24" }, note: { de: "Den alten Menschen ablegen, den neuen anziehen.", sr: "Свући старог човека, обући новог." } },
        { ref: { de: "Gen 1,26", sr: "Пост 1,26" }, note: { de: "Nach unserem Bild und Gleichnis.", sr: "По лику и подобију нашем." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus legte den Kolosserbrief in Homilien aus (englisch in NPNF I/13). Wörtliche Zitate gibt diese App nicht wieder.",
        sr: "Свети Јован Златоуст тумачио је Посланицу Колошанима у беседама (на енглеском у NPNF I/13). Ова апликација не наводи дословне цитате."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was sollen die Gläubigen nach Kol 3,1 suchen?", sr: "Шта верни треба да траже по Кол 3,1?" },
          a: { de: "Was droben ist, wo Christus zur Rechten Gottes sitzt.", sr: "Оно што је горе, где Христос седи с десне стране Бога." } },
        { q: { de: "Woran erinnert das Bild vom Anziehen eines neuen Gewandes?", sr: "На шта подсећа слика облачења нове одеће?" },
          a: { de: "An die Taufe, in der wir Christus angezogen haben (Gal 3,27).", sr: "На крштење, у коме смо се обукли у Христа (Гал 3,27)." } },
        { q: { de: "Was steht nach Kol 3,14 über allem?", sr: "Шта по Кол 3,14 стоји изнад свега?" },
          a: { de: "Die Liebe, das Band der Vollkommenheit.", sr: "Љубав, која је свеза савршенства." } }
      ],
      practice: {
        de: "Wähle eine Eigenschaft aus Kol 3,12 – Erbarmen, Güte, Demut, Sanftmut oder Geduld – und übe sie diese Woche bewusst bei einem bestimmten Menschen.",
        sr: "Изаберите једну особину из Кол 3,12 – милосрђе, доброту, смирење, кротост или дуготрпљење – и вежбајте је ове недеље свесно према једној одређеној особи."
      },
      review: {
        de: "Mit Christus auferweckt, legen wir den alten Menschen ab und ziehen den neuen an: Erbarmen, Güte, Demut, Sanftmut, Geduld, Vergebung – und über allem die Liebe.",
        sr: "Васкрсли са Христом, свлачимо старог човека и облачимо новог: милосрђе, доброту, смирење, кротост, дуготрпљење, праштање – а изнад свега љубав."
      },
      quiz: [
        { q: { de: "Wo ist nach Kol 3,3 unser Leben verborgen?", sr: "Где је, по Кол 3,3, сакривен наш живот?" },
          options: [{ de: "Mit Christus in Gott", sr: "Са Христом у Богу" }, { de: "In guten Werken", sr: "У добрим делима" }, { de: "Im Gesetz", sr: "У закону" }], correct: 0 },
        { q: { de: "Was ist nach Kol 3,11 Christus?", sr: "Шта је, по Кол 3,11, Христос?" },
          options: [{ de: "Alles und in allen", sr: "Све и у свему" }, { de: "Nur ein Lehrer", sr: "Само учитељ" }, { de: "Ein Engel", sr: "Анђео" }], correct: 0 },
        { q: { de: "Was soll in den Herzen herrschen (Kol 3,15)?", sr: "Шта треба да влада у срцима (Кол 3,15)?" },
          options: [{ de: "Der Friede Christi", sr: "Мир Христов" }, { de: "Die Angst", sr: "Страх" }, { de: "Der Ehrgeiz", sr: "Частољубље" }], correct: 0 },
        { q: { de: "Womit sollen die Gläubigen Gott danken (Kol 3,16)?", sr: "Чиме верни треба да захваљују Богу (Кол 3,16)?" },
          options: [{ de: "Mit Psalmen, Hymnen und geistlichen Liedern", sr: "Псалмима, химнама и духовним песмама" }, { de: "Nur mit Geld", sr: "Само новцем" }, { de: "Gar nicht", sr: "Никако" }], correct: 0 }
      ]
    },
  {
      id: "bib-deut6", book: "deut", order: 35,
      title: { de: "Höre, Israel", sr: "Чуј, Израиљу" },
      ref: { de: "Deuteronomium 6,1–25", sr: "Поновљени закони 6,1–25" },
      intro: {
        de: "Deuteronomium heißt „zweites Gesetz“. Das Buch enthält die großen Reden des Mose an das Volk Israel kurz vor dem Einzug in das verheißene Land. Kapitel 6 enthält das Grundbekenntnis Israels, das „Höre, Israel“.",
        sr: "Поновљени закони значи „други закон“. Књига садржи велике беседе Мојсијеве народу Израиљском пред улазак у обећану земљу. Шеста глава садржи основно исповедање Израиља, „Чуј, Израиљу“."
      },
      introTag: "history",
      context: {
        de: "Nach vierzig Jahren in der Wüste steht Israel an der Grenze des Landes. Mose erinnert das Volk an alles, was Gott getan hat, und mahnt: Vergesst den Herrn nicht, wenn es euch gut geht.",
        sr: "После четрдесет година у пустињи Израиљ стоји на граници земље. Мојсије подсећа народ на све што је Бог учинио и опомиње: не заборавите Господа када вам буде добро."
      },
      reading: [
        { ref: { de: "Dtn 6,4–9", sr: "Пнз 6,4–9" }, note: { de: "Der Herr ist einer; liebe ihn von ganzem Herzen.", sr: "Господ је један; љуби Га свим срцем." } },
        { ref: { de: "Dtn 6,10–19", sr: "Пнз 6,10–19" }, note: { de: "Vergiss den Herrn nicht im Wohlstand.", sr: "Не заборави Господа у благостању." } },
        { ref: { de: "Dtn 6,20–25", sr: "Пнз 6,20–25" }, note: { de: "Erzähle deinen Kindern, was Gott getan hat.", sr: "Причај деци шта је Бог учинио." } }
      ],
      summary: {
        de: "Mose spricht: Höre, Israel, der Herr, unser Gott, ist ein einziger Herr. Du sollst den Herrn, deinen Gott, lieben mit ganzem Herzen, mit ganzer Seele und mit ganzer Kraft. Diese Worte sollen im Herzen sein; man soll sie den Kindern einschärfen und von ihnen reden zu Hause und unterwegs, beim Aufstehen und beim Schlafengehen. Wenn das Volk im Land wohnt und satt ist, soll es den Herrn nicht vergessen, der es aus Ägypten geführt hat. Man soll Gott nicht versuchen. Und wenn die Kinder fragen, was die Gebote bedeuten, soll man ihnen erzählen, wie Gott sie aus der Knechtschaft befreit hat.",
        sr: "Мојсије говори: Чуј, Израиљу, Господ Бог наш је једини Господ. Љуби Господа Бога свога свим срцем својим, свом душом својом и свом снагом својом. Ове речи нека буду у срцу; нека се урезују деци и нека се о њима говори код куће и на путу, при устајању и при лежању. Када народ буде живео у земљи и буде сит, нека не заборави Господа, који га је извео из Египта. Не треба кушати Бога. А када деца запитају шта значе заповести, треба им причати како их је Бог ослободио из ропства."
      },
      interp: {
        simple: {
          de: "Gott möchte nicht nur Gehorsam, sondern Liebe – mit dem ganzen Leben. Der Glaube wird zu Hause gelebt und an die Kinder weitergegeben.",
          sr: "Бог не жели само послушност, него љубав – целим животом. Вера се живи у кући и преноси се на децу."
        },
        deeper: {
          de: "Christus nennt Dtn 6,5 das erste und größte Gebot und verbindet es mit der Nächstenliebe aus Lev 19,18 (Mt 22,37–40; Mk 12,29–31). Bei der Versuchung in der Wüste antwortet er dem Teufel dreimal mit Worten aus dem Deuteronomium (Mt 4,4.7.10; vgl. Dtn 8,3; 6,16; 6,13). Das Bekenntnis „Der Herr ist einer“ widerspricht nicht dem Glauben an die Dreieinigkeit: Die Kirche bekennt den einen Gott, den Vater, den Sohn und den Heiligen Geist. Der hl. Basilius der Große beginnt seine ausführlichen Mönchsregeln mit dem Gebot der Gottes- und Nächstenliebe.",
          sr: "Христос Пнз 6,5 назива првом и највећом заповешћу и повезује је са љубављу према ближњем из Лев 19,18 (Мт 22,37–40; Мк 12,29–31). При кушању у пустињи три пута одговара ђаволу речима из Поновљених закона (Мт 4,4.7.10; уп. Пнз 8,3; 6,16; 6,13). Исповедање „Господ је један“ не противречи вери у Свету Тројицу: Црква исповеда једнога Бога, Оца, Сина и Светога Духа. Свети Василије Велики почиње своја опширна монашка правила заповешћу о љубави према Богу и ближњем."
        },
        tag: "dogma"
      },
      christ: {
        de: "Christus lebt das „Höre, Israel“ vollkommen: Er liebt den Vater ganz und bleibt ihm in der Versuchung treu. Er lehrt, dass Gottes- und Nächstenliebe untrennbar zusammengehören.",
        sr: "Христос савршено живи „Чуј, Израиљу“: потпуно љуби Оца и остаје Му веран у искушењу. Учи да су љубав према Богу и ближњем нераздвојне."
      },
      links: [
        { ref: { de: "Mk 12,28–31", sr: "Мк 12,28–31" }, note: { de: "Das erste Gebot: Höre, Israel …", sr: "Прва заповест: Чуј, Израиљу …" } },
        { ref: { de: "Mt 4,1–11", sr: "Мт 4,1–11" }, note: { de: "Christus antwortet mit Worten aus dem Deuteronomium.", sr: "Христос одговара речима из Поновљених закона." } },
        { ref: { de: "1 Joh 4,20–21", sr: "1 Јн 4,20–21" }, note: { de: "Wer Gott liebt, liebt auch seinen Bruder.", sr: "Ко љуби Бога, нека љуби и брата свога." } },
        { ref: { de: "Lev 19,18", sr: "Лев 19,18" }, note: { de: "Liebe deinen Nächsten wie dich selbst.", sr: "Љуби ближњега свога као самога себе." } }
      ],
      fathers: {
        de: "Der hl. Basilius der Große behandelt das Gebot der Gottesliebe am Anfang seiner „Ausführlichen Regeln“. Für diese Version wurde kein freier, rechtmäßiger Link zu einer Übersetzung geprüft.",
        sr: "Свети Василије Велики обрађује заповест о љубави према Богу на почетку својих „Опширних правила“. За ово издање није проверена слободна, законито доступна веза ка преводу."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Wie soll man Gott nach Dtn 6,5 lieben?", sr: "Како, по Пнз 6,5, треба љубити Бога?" },
          a: { de: "Mit ganzem Herzen, mit ganzer Seele und mit ganzer Kraft.", sr: "Свим срцем, свом душом и свом снагом." } },
        { q: { de: "Wovor warnt Mose für die Zeit des Wohlstands?", sr: "На шта Мојсије упозорава за време благостања?" },
          a: { de: "Den Herrn zu vergessen.", sr: "Да се не заборави Господ." } },
        { q: { de: "Wie gebrauchte Christus das Deuteronomium in der Wüste?", sr: "Како је Христос у пустињи користио Поновљене законе?" },
          a: { de: "Er wies den Versucher dreimal mit Worten aus diesem Buch ab.", sr: "Три пута је одбио кушача речима из ове књиге." } }
      ],
      practice: {
        de: "Sprich diese Woche morgens und abends Dtn 6,4–5 als kurzes Gebet. Wenn du Kinder hast: Erzähle ihnen eine Geschichte davon, was Gott getan hat.",
        sr: "Изговарајте ове недеље ујутру и увече Пнз 6,4–5 као кратку молитву. Ако имате децу: испричајте им причу о томе шта је Бог учинио."
      },
      review: {
        de: "„Höre, Israel“: Der Herr ist einer; liebe ihn mit ganzem Herzen, ganzer Seele und ganzer Kraft. Christus nennt es das erste Gebot.",
        sr: "„Чуј, Израиљу“: Господ је један; љуби Га свим срцем, свом душом и свом снагом. Христос то назива првом заповешћу."
      },
      quiz: [
        { q: { de: "Was bedeutet „Deuteronomium“?", sr: "Шта значи назив „Поновљени закони“ (Девтерономион)?" },
          options: [{ de: "Zweites Gesetz", sr: "Други закон" }, { de: "Erste Schöpfung", sr: "Прво стварање" }, { de: "Lied der Lieder", sr: "Песма над песмама" }], correct: 0 },
        { q: { de: "Welches Gebot nennt Christus das erste (Mk 12,29–30)?", sr: "Коју заповест Христос назива првом (Мк 12,29–30)?" },
          options: [{ de: "Gott von ganzem Herzen lieben", sr: "Љубити Бога свим срцем" }, { de: "Den Sabbat halten", sr: "Држати суботу" }, { de: "Opfer bringen", sr: "Приносити жртве" }], correct: 0 },
        { q: { de: "Wem soll man die Gebote einschärfen (Dtn 6,7)?", sr: "Коме треба урезивати заповести (Пнз 6,7)?" },
          options: [{ de: "Den Kindern", sr: "Деци" }, { de: "Nur den Priestern", sr: "Само свештеницима" }, { de: "Den Königen", sr: "Царевима" }], correct: 0 },
        { q: { de: "Wo hält Mose diese Reden?", sr: "Где Мојсије држи ове беседе?" },
          options: [{ de: "Vor dem Einzug ins verheißene Land", sr: "Пред улазак у обећану земљу" }, { de: "In Babylon", sr: "У Вавилону" }, { de: "In Jerusalem", sr: "У Јерусалиму" }], correct: 0 }
      ]
    },
  {
      id: "bib-gen22", book: "gen", order: 36,
      title: { de: "Abraham und Isaak", sr: "Авраам и Исак" },
      ref: { de: "Genesis 22,1–19", sr: "Постање 22,1–19" },
      intro: {
        de: "Abraham gilt als Vater der Glaubenden (Röm 4,11). Gott hatte ihm im hohen Alter den verheißenen Sohn Isaak geschenkt. In Genesis 22 wird Abrahams Glaube auf die schwerste Probe gestellt.",
        sr: "Авраам се сматра оцем верних (Рим 4,11). Бог му је у дубокој старости даровао обећаног сина Исака. У 22. глави Постања Авраамова вера бива стављена на најтежу пробу."
      },
      introTag: "history",
      context: {
        de: "Gott hatte Abraham versprochen, dass aus Isaak ein großes Volk hervorgehen werde (Gen 17,19; 21,12). Die Forderung, gerade diesen Sohn zu opfern, scheint der Verheißung zu widersprechen. In der Umwelt Israels gab es Kinderopfer; Gottes Gesetz verbietet sie später ausdrücklich (Lev 18,21; Dtn 12,31).",
        sr: "Бог је Аврааму обећао да ће од Исака произаћи велики народ (Пост 17,19; 21,12). Захтев да принесе баш тог сина изгледа као да противречи обећању. У окружењу Израиља постојале су жртве деце; Божији закон их касније изричито забрањује (Лев 18,21; Пнз 12,31)."
      },
      reading: [
        { ref: { de: "Gen 22,1–8", sr: "Пост 22,1–8" }, note: { de: "Gott wird sich das Lamm ersehen.", sr: "Бог ће се постарати за јагње." } },
        { ref: { de: "Gen 22,9–14", sr: "Пост 22,9–14" }, note: { de: "Der Engel hält Abrahams Hand zurück.", sr: "Анђео задржава Авраамову руку." } },
        { ref: { de: "Gen 22,15–19", sr: "Пост 22,15–19" }, note: { de: "Die Verheißung wird erneuert.", sr: "Обећање се обнавља." } }
      ],
      summary: {
        de: "Gott prüft Abraham und spricht: Nimm deinen Sohn, deinen einzigen, den du liebst, Isaak, und bring ihn auf einem Berg im Land Morija als Opfer dar. Abraham macht sich früh am Morgen auf. Isaak trägt das Holz und fragt: Wo ist das Lamm für das Opfer? Abraham antwortet: Gott wird sich das Lamm ersehen, mein Sohn. Am Ort angekommen, baut Abraham einen Altar und bindet Isaak. Als er das Messer erhebt, ruft ihn der Engel des Herrn: Tu dem Knaben nichts; nun weiß ich, dass du Gott fürchtest. Abraham sieht einen Widder, der sich im Gestrüpp verfangen hat, und opfert ihn anstelle seines Sohnes. Er nennt den Ort „Der Herr sieht“. Gott erneuert seine Verheißung: In deinem Nachkommen sollen alle Völker der Erde gesegnet werden.",
        sr: "Бог куша Авраама и говори: Узми сина свога, јединца свога, кога љубиш, Исака, и принеси га на жртву на гори у земљи Морији. Авраам устаје рано ујутру. Исак носи дрва и пита: Где је јагње за жртву? Авраам одговара: Бог ће се постарати за јагње, сине мој. Када стигну, Авраам гради жртвеник и везује Исака. Када подигне нож, виче му анђео Господњи: Не чини ништа детету; сад знам да се бојиш Бога. Авраам угледа овна заплетеног у грмљу и принесе га уместо сина. Место назива „Господ види“. Бог обнавља своје обећање: У семену твоме благословиће се сви народи на земљи."
      },
      interp: {
        simple: {
          de: "Abraham vertraut Gott ganz, auch wenn er nicht versteht. Gott will aber kein Menschenopfer: Er selbst sorgt für das Opfer. So zeigt die Geschichte, dass Gott treu ist.",
          sr: "Авраам се потпуно поверава Богу, и када не разуме. Али Бог не жели људску жртву: Он сам се стара за жртву. Тако прича показује да је Бог веран."
        },
        deeper: {
          de: "Der Hebräerbrief deutet Abrahams Gehorsam als Glauben an die Auferstehung: Er dachte, Gott könne auch von den Toten erwecken (Hebr 11,17–19). Die Kirchenväter sehen in Isaak ein Vorausbild Christi: der einzige, geliebte Sohn, der das Holz trägt wie Christus das Kreuz; im Widder, der stellvertretend geopfert wird, sehen sie ebenfalls Christus. Der Unterschied ist entscheidend: Isaak wird verschont, den eigenen Sohn aber hat Gott nicht verschont (Röm 8,32). Genesis 22 gehört zu den alttestamentlichen Lesungen der Vesper am Großen Samstag.",
          sr: "Посланица Јеврејима тумачи Авраамову послушност као веру у васкрсење: мислио је да Бог може и из мртвих подићи (Јев 11,17–19). Свети оци у Исаку виде праслику Христа: јединог, вољеног сина, који носи дрва као Христос крст; и у овну, који бива принесен уместо њега, такође виде Христа. Разлика је пресудна: Исак бива поштеђен, а свога Сина Бог није поштедео (Рим 8,32). 22. глава Постања спада у старозаветна читања на вечерњу Велике суботе."
        },
        tag: "opinion"
      },
      christ: {
        de: "Was Abraham nicht tun musste, hat Gott selbst getan: Er gab seinen einzigen Sohn aus Liebe zur Welt (Joh 3,16). Christus ist das Lamm Gottes, das Gott „ersehen“ hat (Joh 1,29).",
        sr: "Оно што Авраам није морао да учини, учинио је сам Бог: дао је Сина свога Јединороднога из љубави према свету (Јн 3,16). Христос је Јагње Божије, за које се Бог „постарао“ (Јн 1,29)."
      },
      links: [
        { ref: { de: "Hebr 11,17–19", sr: "Јев 11,17–19" }, note: { de: "Abraham glaubte, dass Gott auch von den Toten erwecken kann.", sr: "Авраам је веровао да Бог може и из мртвих подићи." } },
        { ref: { de: "Röm 8,32", sr: "Рим 8,32" }, note: { de: "Gott hat seinen eigenen Sohn nicht verschont.", sr: "Бог свога Сина није поштедео." } },
        { ref: { de: "Joh 3,16", sr: "Јн 3,16" }, note: { de: "So sehr hat Gott die Welt geliebt.", sr: "Јер Бог тако заволе свет." } },
        { ref: { de: "Jak 2,21–23", sr: "Јак 2,21–23" }, note: { de: "Glaube und Werke wirken zusammen.", sr: "Вера и дела делују заједно." } }
      ],
      fathers: {
        de: "Viele Kirchenväter, darunter der hl. Johannes Chrysostomus in seinen Homilien zur Genesis, legen Gen 22 als Vorausbild des Kreuzes aus. Für diese Version wurde kein freier, rechtmäßiger Link zu diesen Homilien geprüft; wörtliche Zitate gibt die App nicht wieder.",
        sr: "Многи свети оци, међу њима свети Јован Златоуст у беседама на Постање, тумаче Пост 22 као праслику крста. За ово издање није проверена слободна, законито доступна веза ка тим беседама; апликација не наводи дословне цитате."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was antwortete Abraham auf Isaaks Frage nach dem Lamm?", sr: "Шта је Авраам одговорио на Исаково питање о јагњету?" },
          a: { de: "Gott wird sich das Lamm ersehen, mein Sohn.", sr: "Бог ће се постарати за јагње, сине мој." } },
        { q: { de: "Wie deutet der Hebräerbrief Abrahams Gehorsam?", sr: "Како Посланица Јеврејима тумачи Авраамову послушност?" },
          a: { de: "Als Glauben, dass Gott auch von den Toten erwecken kann (Hebr 11,19).", sr: "Као веру да Бог може и из мртвих подићи (Јев 11,19)." } },
        { q: { de: "Worin unterscheidet sich das Opfer Christi von Gen 22?", sr: "По чему се Христова жртва разликује од Пост 22?" },
          a: { de: "Isaak wurde verschont; Gott aber hat seinen eigenen Sohn nicht verschont (Röm 8,32).", sr: "Исак је поштеђен; а Бог свога Сина није поштедео (Рим 8,32)." } }
      ],
      practice: {
        de: "Gibt es etwas, das du Gott schwer anvertrauen kannst – einen Menschen, eine Sorge, einen Plan? Sprich diese Woche jeden Abend: „Herr, du siehst. Dir vertraue ich es an.“",
        sr: "Постоји ли нешто што тешко поверавате Богу – неку особу, бригу, план? Говорите ове недеље сваке вечери: „Господе, Ти видиш. Теби то поверавам.“"
      },
      review: {
        de: "Abraham vertraut Gott bis zum Äußersten; Gott selbst sorgt für das Opfer. Die Väter sehen in Isaak und im Widder Vorausbilder Christi.",
        sr: "Авраам се до краја поверава Богу; сам Бог се стара за жртву. Оци у Исаку и овну виде праслике Христа."
      },
      quiz: [
        { q: { de: "Was trug Isaak auf den Berg?", sr: "Шта је Исак носио на гору?" },
          options: [{ de: "Das Holz für das Opfer", sr: "Дрва за жртву" }, { de: "Ein Lamm", sr: "Јагње" }, { de: "Wasser", sr: "Воду" }], correct: 0 },
        { q: { de: "Was opferte Abraham an Isaaks Stelle?", sr: "Шта је Авраам принео уместо Исака?" },
          options: [{ de: "Einen Widder", sr: "Овна" }, { de: "Eine Taube", sr: "Голуба" }, { de: "Nichts", sr: "Ништа" }], correct: 0 },
        { q: { de: "Wie nannte Abraham den Ort?", sr: "Како је Авраам назвао место?" },
          options: [{ de: "„Der Herr sieht“", sr: "„Господ види“" }, { de: "„Bethel“", sr: "„Ветиљ“" }, { de: "„Golgota“", sr: "„Голгота“" }], correct: 0 },
        { q: { de: "Wann liest die Kirche Gen 22 im Gottesdienst?", sr: "Када Црква чита Пост 22 на богослужењу?" },
          options: [{ de: "In der Vesper am Großen Samstag", sr: "На вечерњу Велике суботе" }, { de: "Nur zu Weihnachten", sr: "Само на Божић" }, { de: "Nie", sr: "Никада" }], correct: 0 }
      ]
    },
  {
      id: "bib-ex3", book: "ex", order: 37,
      title: { de: "Der brennende Dornbusch", sr: "Неопалима купина" },
      ref: { de: "Exodus 3,1–15", sr: "Излазак 3,1–15" },
      intro: {
        de: "Mose war aus Ägypten geflohen und hütete in der Wüste die Schafe seines Schwiegervaters. Am Gottesberg Horeb begegnet ihm Gott in einem Dornbusch, der brennt und doch nicht verbrennt.",
        sr: "Мојсије је побегао из Египта и у пустињи пасао овце свога таста. На Божијој гори Хориву јавља му се Бог у купини која гори, а не сагорева."
      },
      introTag: "history",
      context: {
        de: "Das Volk Israel litt in Ägypten unter schwerer Zwangsarbeit und schrie zu Gott (Ex 2,23–25). Gott hat das Elend gesehen und beruft Mose, um sein Volk zu befreien.",
        sr: "Народ Израиљски је у Египту патио под тешким принудним радом и вапио Богу (Изл 2,23–25). Бог је видео невољу и позива Мојсија да ослободи Његов народ."
      },
      reading: [
        { ref: { de: "Ex 3,1–6", sr: "Изл 3,1–6" }, note: { de: "Zieh deine Schuhe aus – heiliger Boden.", sr: "Изуј обућу – света земља." } },
        { ref: { de: "Ex 3,7–12", sr: "Изл 3,7–12" }, note: { de: "Ich habe das Elend meines Volkes gesehen.", sr: "Видео сам невољу народа свога." } },
        { ref: { de: "Ex 3,13–15", sr: "Изл 3,13–15" }, note: { de: "Ich bin der Seiende.", sr: "Ја сам Који јесам." } }
      ],
      summary: {
        de: "Mose sieht einen Dornbusch, der im Feuer brennt und doch nicht verbrennt. Als er näher tritt, ruft Gott ihn aus dem Busch: Komm nicht näher; zieh deine Schuhe aus, denn der Ort, auf dem du stehst, ist heiliger Boden. Ich bin der Gott Abrahams, Isaaks und Jakobs. Mose verhüllt sein Gesicht. Gott sagt: Ich habe das Elend meines Volkes gesehen und bin herabgestiegen, um es zu befreien. Er sendet Mose zum Pharao. Mose fragt, wer er sei, und fragt nach seinem Namen. Gott antwortet: Ich bin, der ich bin (nach der Septuaginta: Ich bin der Seiende). Das ist mein Name für immer.",
        sr: "Мојсије види купину која гори у огњу, а не сагорева. Када приђе, Бог га дозива из купине: Не прилази ближе; изуј обућу своју, јер је место на коме стојиш света земља. Ја сам Бог Авраамов, Исаков и Јаковљев. Мојсије заклања лице своје. Бог говори: Видео сам невољу народа свога и сишао сам да га избавим. Шаље Мојсија фараону. Мојсије пита ко је Он и пита за Његово име. Бог одговара: Ја сам Који јесам (по Септуагинти: Ја сам Онај Који јесте). То је име моје довека."
      },
      interp: {
        simple: {
          de: "Gott sieht das Leid der Menschen und handelt. Er offenbart sich als der, der wirklich ist und immer bleibt. Vor Gott steht man mit Ehrfurcht.",
          sr: "Бог види патњу људи и делује. Он се открива као Онај који истински јесте и увек остаје. Пред Богом се стоји са страхопоштовањем."
        },
        deeper: {
          de: "Die Septuaginta übersetzt den Gottesnamen mit „Ich bin der Seiende“ (griechisch ho ōn). Diese Worte stehen auf orthodoxen Ikonen im Heiligenschein Christi (ὁ ὤν): Die Kirche bekennt, dass der Sohn, der Mensch wurde, derselbe Gott ist, der sich Mose offenbarte. In Hymnen und auf Ikonen deutet die Kirche den Dornbusch als Vorausbild der Gottesgebärerin: Wie der Busch das Feuer trug und nicht verbrannte, so trug sie den Sohn Gottes und blieb Jungfrau. Das Ausziehen der Schuhe wird oft als Bild für das Ablegen irdischer Sorgen vor Gott gedeutet.",
          sr: "Септуагинта Божије име преводи са „Ја сам Онај Који јесте“ (грчки хо он). Те речи стоје на православним иконама у Христовом ореолу (ὁ ὤν): Црква исповеда да је Син, који је постао човек, исти Бог који се открио Мојсију. У химнама и на иконама Црква купину тумачи као праслику Богородице: као што је купина носила огањ и није сагорела, тако је она носила Сина Божијег и остала Дјева. Изување обуће често се тумачи као слика одбацивања земаљских брига пред Богом."
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus sagt von sich: „Ehe Abraham wurde, bin ich“ (Joh 8,58). Der Gott des Dornbuschs ist in Christus Mensch geworden, um sein Volk aus der Knechtschaft der Sünde zu befreien.",
        sr: "Христос говори о себи: „Пре него што Авраам постаде, ја јесам“ (Јн 8,58). Бог неопалиме купине постао је у Христу човек да би свој народ ослободио ропства греха."
      },
      links: [
        { ref: { de: "Joh 8,58", sr: "Јн 8,58" }, note: { de: "Ehe Abraham wurde, bin ich.", sr: "Пре него што Авраам постаде, ја јесам." } },
        { ref: { de: "Apg 7,30–34", sr: "Дап 7,30–34" }, note: { de: "Stephanus erzählt vom Dornbusch.", sr: "Стефан приповеда о купини." } },
        { ref: { de: "Lk 20,37–38", sr: "Лк 20,37–38" }, note: { de: "Gott ist ein Gott der Lebenden.", sr: "Бог је Бог живих." } },
        { ref: { de: "Offb 1,8", sr: "Отк 1,8" }, note: { de: "Der da ist, der da war und der da kommt.", sr: "Који јесте и који беше и који долази." } }
      ],
      fathers: {
        de: "Der hl. Gregor von Nyssa deutet den Dornbusch in seinem „Leben des Mose“ als Bild für die jungfräuliche Geburt und für den geistlichen Aufstieg zu Gott. Für diese Version wurde kein freier, rechtmäßiger Link geprüft; wörtliche Zitate gibt die App nicht wieder.",
        sr: "Свети Григорије Ниски у делу „Живот Мојсијев“ тумачи купину као слику девственог рођења и духовног узрастања ка Богу. За ово издање није проверена слободна, законито доступна веза; апликација не наводи дословне цитате."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum soll Mose seine Schuhe ausziehen?", sr: "Зашто Мојсије треба да изује обућу?" },
          a: { de: "Weil der Ort, an dem Gott sich offenbart, heiliger Boden ist.", sr: "Зато што је место на коме се Бог открива света земља." } },
        { q: { de: "Welche Worte stehen im Heiligenschein Christi auf Ikonen?", sr: "Које речи стоје у Христовом ореолу на иконама?" },
          a: { de: "ὁ ὤν – „der Seiende“, nach Ex 3,14 in der Septuaginta.", sr: "ὁ ὤν – „Онај Који јесте“, по Изл 3,14 у Септуагинти." } },
        { q: { de: "Warum ist der Dornbusch ein Bild der Gottesgebärerin?", sr: "Зашто је купина слика Богородице?" },
          a: { de: "Wie der Busch brannte und nicht verbrannte, trug sie Gott und blieb Jungfrau.", sr: "Као што је купина горела и није сагорела, тако је она носила Бога и остала Дјева." } }
      ],
      practice: {
        de: "Wenn du diese Woche eine Kirche betrittst, halte einen Moment an der Tür inne, bekreuzige dich und denke: „Dies ist heiliger Boden.“ Schau dir auf einer Christus-Ikone die Buchstaben im Heiligenschein an.",
        sr: "Када ове недеље уђете у храм, застаните тренутак на вратима, прекрстите се и помислите: „Ово је света земља.“ Погледајте на Христовој икони слова у ореолу."
      },
      review: {
        de: "Gott offenbart sich Mose im brennenden, nicht verbrennenden Dornbusch als „der Seiende“ und sendet ihn, Israel zu befreien. Die Kirche sieht im Busch ein Bild der Gottesgebärerin.",
        sr: "Бог се открива Мојсију у купини која гори, а не сагорева, као „Онај Који јесте“ и шаље га да ослободи Израиљ. Црква у купини види слику Богородице."
      },
      quiz: [
        { q: { de: "An welchem Berg begegnete Mose Gott im Dornbusch?", sr: "На којој гори је Мојсије срео Бога у купини?" },
          options: [{ de: "Am Horeb", sr: "На Хориву" }, { de: "Am Tabor", sr: "На Тавору" }, { de: "Am Ölberg", sr: "На Маслинској гори" }], correct: 0 },
        { q: { de: "Was ist am Dornbusch besonders?", sr: "Шта је посебно на купини?" },
          options: [{ de: "Er brennt und verbrennt nicht", sr: "Гори, а не сагорева" }, { de: "Er trägt Früchte", sr: "Доноси плодове" }, { de: "Er spricht mit Engeln", sr: "Разговара са анђелима" }], correct: 0 },
        { q: { de: "Wie übersetzt die Septuaginta den Gottesnamen?", sr: "Како Септуагинта преводи Божије име?" },
          options: [{ de: "„Ich bin der Seiende“", sr: "„Ја сам Онај Који јесте“" }, { de: "„Ich bin der Starke“", sr: "„Ја сам Јаки“" }, { de: "„Ich bin der König“", sr: "„Ја сам Цар“" }], correct: 0 },
        { q: { de: "Wofür wird der Dornbusch als Vorausbild gedeutet?", sr: "Чега праслика је, према тумачењу, купина?" },
          options: [{ de: "Für die Gottesgebärerin", sr: "Богородице" }, { de: "Für die Arche Noah", sr: "Нојеве барке" }, { de: "Für den Turm von Babel", sr: "Вавилонске куле" }], correct: 0 }
      ]
    },
  {
      id: "bib-jer31", book: "jer", order: 38,
      title: { de: "Der neue Bund", sr: "Нови завет" },
      ref: { de: "Jeremia 31,15–34", sr: "Јеремија 31,15–34" },
      intro: {
        de: "Der Prophet Jeremia wirkte vor und während der Zerstörung Jerusalems durch die Babylonier (587 v. Chr.). Er musste viel Unheil ankündigen und litt selbst sehr. Kapitel 31 gehört zum „Trostbuch“: Gott verspricht einen neuen Bund.",
        sr: "Пророк Јеремија деловао је пре и за време разарања Јерусалима од Вавилонаца (587. пре Христа). Морао је да најављује много несреће и сам је много страдао. 31. глава припада „књизи утехе“: Бог обећава нови завет."
      },
      introTag: "history",
      context: {
        de: "Das Volk hatte den Bund vom Sinai immer wieder gebrochen. Jetzt verliert es Tempel, König und Land und wird verschleppt. Mitten in diesem Zusammenbruch spricht Gott von Heimkehr und von einem neuen Anfang.",
        sr: "Народ је изнова кршио Синајски завет. Сада губи храм, цара и земљу и бива одведен у ропство. Усред тог слома Бог говори о повратку и новом почетку."
      },
      reading: [
        { ref: { de: "Jer 31,15–17", sr: "Јер 31,15–17" }, note: { de: "Rahel weint um ihre Kinder.", sr: "Рахиља плаче за децом својом." } },
        { ref: { de: "Jer 31,31–34", sr: "Јер 31,31–34" }, note: { de: "Ich schreibe mein Gesetz in ihr Herz.", sr: "Записаћу закон свој у срце њихово." } }
      ],
      summary: {
        de: "In Rama hört man Klage: Rahel weint um ihre Kinder und will sich nicht trösten lassen. Doch Gott spricht: Halte deine Stimme vom Weinen zurück; es gibt Hoffnung für deine Zukunft, die Kinder kehren heim. Dann kündigt Gott an: Es kommen Tage, da schließe ich einen neuen Bund mit dem Haus Israel – nicht wie den Bund, den ich mit ihren Vätern schloss, als ich sie aus Ägypten führte und den sie gebrochen haben. Ich lege mein Gesetz in ihr Inneres und schreibe es in ihr Herz. Ich werde ihr Gott sein, und sie werden mein Volk sein. Keiner muss den anderen mehr belehren: Erkennt den Herrn!, denn alle werden mich erkennen, vom Kleinsten bis zum Größten. Denn ich vergebe ihre Schuld und denke nicht mehr an ihre Sünde.",
        sr: "У Рами се чује јаук: Рахиља плаче за децом својом и неће да се утеши. Али Бог говори: Устегни глас свој од плача; има наде за твоју будућност, деца се враћају. Затим Бог најављује: Ево иду дани када ћу учинити нови завет са домом Израиљевим – не као завет који сам учинио са оцима њиховим када сам их извео из Египта, а који су они раскинули. Метнућу закон свој у њих и записаћу га у срцу њиховом. Ја ћу бити њихов Бог, а они ће бити мој народ. Неће више учити један другога: Познај Господа!, јер ће ме сви познавати, од малог до великог. Јер ћу им опростити безакоње и греха њиховог нећу се више сећати."
      },
      interp: {
        simple: {
          de: "Gott gibt nicht auf, auch wenn sein Volk versagt. Er verspricht einen neuen Bund: Sein Gebot steht dann nicht nur auf Steintafeln, sondern im Herzen, und er vergibt die Sünden.",
          sr: "Бог не одустаје, ни када Његов народ посрне. Обећава нови завет: Његова заповест тада неће стајати само на каменим плочама, него у срцу, и Он опрашта грехе."
        },
        deeper: {
          de: "Jer 31,31–34 ist die längste alttestamentliche Stelle, die im Neuen Testament wörtlich angeführt wird (Hebr 8,8–12). Beim Abendmahl spricht Christus vom „neuen Bund in meinem Blut“ (Lk 22,20; 1 Kor 11,25). Daher stammt auch der Name „Neues Testament“ (Testament = Bund). Das Gesetz im Herzen wird in der Kirche mit der Gabe des Heiligen Geistes verbunden (vgl. Ez 36,26–27; 2 Kor 3,3). Matthäus bezieht die Klage Rahels auf den Kindermord in Betlehem (Mt 2,17–18).",
          sr: "Јер 31,31–34 је најдуже старозаветно место које се у Новом завету наводи дословно (Јев 8,8–12). На Тајној вечери Христос говори о „новом завету у крви мојој“ (Лк 22,20; 1 Кор 11,25). Отуда и назив „Нови завет“. Закон у срцу Црква повезује са даром Духа Светога (уп. Јез 36,26–27; 2 Кор 3,3). Матеј плач Рахиљин односи на покољ деце у Витлејему (Мт 2,17–18)."
        },
        tag: "dogma"
      },
      christ: {
        de: "Christus schließt den neuen Bund in seinem Blut. In jeder Göttlichen Liturgie erklingen seine Worte: „Dies ist mein Blut des Neuen Bundes“ – die Erfüllung von Jeremias Verheißung.",
        sr: "Христос склапа нови завет у својој крви. На свакој Светој Литургији звуче Његове речи: „Ово је крв моја Новога завета“ – испуњење Јеремијиног обећања."
      },
      links: [
        { ref: { de: "Hebr 8,6–13", sr: "Јев 8,6–13" }, note: { de: "Christus, Mittler eines besseren Bundes.", sr: "Христос, посредник бољег завета." } },
        { ref: { de: "Lk 22,19–20", sr: "Лк 22,19–20" }, note: { de: "Der neue Bund in meinem Blut.", sr: "Нови завет у крви мојој." } },
        { ref: { de: "2 Kor 3,3", sr: "2 Кор 3,3" }, note: { de: "Geschrieben mit dem Geist auf Tafeln aus Fleisch, ins Herz.", sr: "Написано Духом на плочама срца." } },
        { ref: { de: "Mt 2,17–18", sr: "Мт 2,17–18" }, note: { de: "Rahel weint um ihre Kinder.", sr: "Рахиља плаче за децом својом." } }
      ],
      fathers: {
        de: "Die Väter lesen Jer 31 durchgehend im Licht von Hebr 8 und dem Abendmahl. Der hl. Johannes Chrysostomus behandelt die Stelle in seinen Homilien zum Hebräerbrief (englisch in NPNF I/14). Wörtliche Zitate gibt die App nicht wieder.",
        sr: "Оци Јер 31 читају у светлости Јев 8 и Тајне вечере. Свети Јован Златоуст обрађује ово место у беседама на Посланицу Јеврејима (на енглеском у NPNF I/14). Апликација не наводи дословне цитате."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Wohin schreibt Gott im neuen Bund sein Gesetz?", sr: "Где Бог у новом завету записује свој закон?" },
          a: { de: "In das Herz der Menschen (Jer 31,33).", sr: "У срце људи (Јер 31,33)." } },
        { q: { de: "Wo zitiert das Neue Testament Jer 31,31–34?", sr: "Где Нови завет наводи Јер 31,31–34?" },
          a: { de: "Im Hebräerbrief (Hebr 8,8–12).", sr: "У Посланици Јеврејима (Јев 8,8–12)." } },
        { q: { de: "Woher kommt der Name „Neues Testament“?", sr: "Одакле потиче назив „Нови завет“?" },
          a: { de: "Vom neuen Bund, den Christus in seinem Blut schließt (Lk 22,20).", sr: "Од новог завета који Христос склапа у својој крви (Лк 22,20)." } }
      ],
      practice: {
        de: "Achte bei der nächsten Liturgie auf die Worte „Dies ist mein Blut des Neuen Bundes“. Denke daran: Gottes Bund gilt auch dir, trotz deiner Fehler.",
        sr: "На следећој Литургији обратите пажњу на речи „Ово је крв моја Новога завета“. Помислите: Божији завет важи и за вас, упркос вашим грешкама."
      },
      review: {
        de: "Gott verspricht durch Jeremia einen neuen Bund: das Gesetz im Herzen und die Vergebung der Sünden. Christus erfüllt ihn in seinem Blut.",
        sr: "Бог преко Јеремије обећава нови завет: закон у срцу и опроштај греха. Христос га испуњава у својој крви."
      },
      quiz: [
        { q: { de: "Wer weint nach Jer 31,15 um ihre Kinder?", sr: "Ко, по Јер 31,15, плаче за децом својом?" },
          options: [{ de: "Rahel", sr: "Рахиља" }, { de: "Sara", sr: "Сара" }, { de: "Ruth", sr: "Рута" }], correct: 0 },
        { q: { de: "Was verspricht Gott im neuen Bund?", sr: "Шта Бог обећава у новом завету?" },
          options: [{ de: "Das Gesetz im Herzen und Vergebung", sr: "Закон у срцу и опроштај" }, { de: "Neue Steintafeln", sr: "Нове камене плоче" }, { de: "Einen neuen König", sr: "Новог цара" }], correct: 0 },
        { q: { de: "Welches Ereignis erlebte Jeremia?", sr: "Који догађај је доживео Јеремија?" },
          options: [{ de: "Die Zerstörung Jerusalems durch Babylon", sr: "Разарање Јерусалима од Вавилона" }, { de: "Den Auszug aus Ägypten", sr: "Излазак из Египта" }, { de: "Die Sintflut", sr: "Потоп" }], correct: 0 },
        { q: { de: "Wo spricht Christus vom „neuen Bund in meinem Blut“?", sr: "Где Христос говори о „новом завету у крви мојој“?" },
          options: [{ de: "Beim Abendmahl", sr: "На Тајној вечери" }, { de: "Bei der Taufe im Jordan", sr: "На крштењу на Јордану" }, { de: "Auf dem Tabor", sr: "На Тавору" }], correct: 0 }
      ]
    },
  {
      id: "bib-tob", book: "tob", order: 39,
      title: { de: "Tobit und der Erzengel Raphael", sr: "Товит и арханђел Рафаило" },
      ref: { de: "Tobit 1–3; 5; 11–12", sr: "Товит 1–3; 5; 11–12" },
      intro: {
        de: "Das Buch Tobit gehört zu den Büchern, die die orthodoxe Bibel aus der Septuaginta übernommen hat. Es erzählt von einer frommen Familie in der Verbannung in Ninive und davon, wie Gott durch den Erzengel Raphael hilft.",
        sr: "Књига о Товиту спада у књиге које је православна Библија преузела из Септуагинте. Приповеда о побожној породици у изгнанству у Ниневији и о томе како Бог помаже преко арханђела Рафаила."
      },
      introTag: "history",
      context: {
        de: "Tobit lebt als Verschleppter unter den Assyrern. Obwohl es gefährlich ist, hilft er den Armen und begräbt heimlich die getöteten Landsleute. Er erblindet und gerät in Not. Zur gleichen Zeit leidet in Medien die junge Sara, deren sieben Bräutigame starben.",
        sr: "Товит живи као изгнаник међу Асирцима. Иако је опасно, помаже сиромашнима и тајно сахрањује убијене сународнике. Ослепи и запада у невољу. У исто време у Мидији пати млада Сара, чијих је седам женика умрло."
      },
      reading: [
        { ref: { de: "Tob 1,3; 2,1–10", sr: "Тов 1,3; 2,1–10" }, note: { de: "Tobits Barmherzigkeit und seine Erblindung.", sr: "Товитово милосрђе и његово слепило." } },
        { ref: { de: "Tob 5,1–17", sr: "Тов 5,1–17" }, note: { de: "Ein Begleiter für die Reise.", sr: "Сапутник на путу." } },
        { ref: { de: "Tob 11,7–15; 12,6–22", sr: "Тов 11,7–15; 12,6–22" }, note: { de: "Heilung und Offenbarung des Engels.", sr: "Исцељење и откривење анђела." } }
      ],
      summary: {
        de: "Tobit und Sara beten beide in ihrer Not, und Gott erhört sie. Tobit schickt seinen Sohn Tobias auf eine weite Reise. Ein Begleiter bietet sich an – es ist der Erzengel Raphael, doch Tobias erkennt ihn nicht. Unterwegs hilft der Engel ihm, Sara zur Frau zu nehmen und sie von der dämonischen Bedrängnis zu befreien. In der Hochzeitsnacht beten Tobias und Sara gemeinsam zu Gott. Nach der Heimkehr heilt Tobias auf Raphaels Rat die Augen seines Vaters. Dann gibt sich Raphael zu erkennen: Er ist einer der sieben heiligen Engel, die vor dem Herrn stehen. Er mahnt: Gut ist Gebet mit Fasten, Almosen und Gerechtigkeit. Preist Gott!",
        sr: "Товит и Сара се обоје моле у својој невољи, и Бог их услишава. Товит шаље сина Товију на далек пут. Нуди се један сапутник – то је арханђел Рафаило, али га Товија не препознаје. На путу му анђео помаже да узме Сару за жену и да је ослободи демонског узнемиравања. У свадбеној ноћи Товија и Сара заједно се моле Богу. После повратка Товија по Рафаиловом савету исцељује очи свога оца. Тада се Рафаило открива: он је један од седам светих анђела који стоје пред Господом. Опомиње: Добра је молитва са постом, милостињом и правдом. Благосиљајте Бога!"
      },
      interp: {
        simple: {
          de: "Gott sieht die Not der Menschen, die zu ihm beten, auch wenn sie es nicht merken. Er sendet Hilfe – manchmal unerkannt. Barmherzigkeit, Gebet und Fasten gehören zusammen.",
          sr: "Бог види невољу људи који Му се моле, и када они то не примећују. Шаље помоћ – понекад непрепознатљиву. Милосрђе, молитва и пост иду заједно."
        },
        deeper: {
          de: "Der Name Raphael bedeutet „Gott heilt“. Das Buch ist eine wichtige biblische Grundlage für den Glauben an Schutzengel und an die Fürbitte der Engel: Raphael bringt die Gebete vor Gott (Tob 12,12). Die Kirche gedenkt Raphaels am Fest der Synaxis des Erzengels Michael und aller Engel (8. Nov., julianisch 21. Nov.). Das Gebet von Tobias und Sara (Tob 8,5–8) zeigt die Ehe als Bund vor Gott. Die Orthodoxie zählt Tobit zu den „lesenswerten Büchern“ (Anagignoskomena), die im Gottesdienst und zur Erbauung gebraucht werden.",
          sr: "Име Рафаило значи „Бог исцељује“. Књига је важан библијски темељ вере у анђеле чуваре и у заступништво анђела: Рафаило износи молитве пред Бога (Тов 12,12). Црква спомиње Рафаила на празник Сабора Светог архангела Михаила и свих анђела (8. новембар, по јулијанском 21. новембар). Молитва Товије и Саре (Тов 8,5–8) показује брак као савез пред Богом. Православље Товита убраја у „корисне за читање“ књиге (анагиноскомена), које се користе на богослужењу и за поуку."
        },
        tag: "history"
      },
      christ: {
        de: "Raphael begleitet Tobias unerkannt auf dem Weg – so wie der auferstandene Christus die Jünger nach Emmaus begleitete, die ihn zuerst nicht erkannten (Lk 24,13–31). Christus ist der wahre Arzt der Seelen und Leiber.",
        sr: "Рафаило непрепознат прати Товију на путу – као што је васкрсли Христос пратио ученике на путу у Емаус, који Га најпре нису препознали (Лк 24,13–31). Христос је истински лекар душа и тела."
      },
      links: [
        { ref: { de: "Mt 18,10", sr: "Мт 18,10" }, note: { de: "Ihre Engel schauen das Angesicht des Vaters.", sr: "Анђели њихови гледају лице Оца." } },
        { ref: { de: "Hebr 1,14", sr: "Јев 1,14" }, note: { de: "Engel sind dienende Geister.", sr: "Анђели су служебни духови." } },
        { ref: { de: "Mt 6,1–18", sr: "Мт 6,1–18" }, note: { de: "Almosen, Gebet und Fasten im Verborgenen.", sr: "Милостиња, молитва и пост у тајности." } },
        { ref: { de: "Lk 24,13–31", sr: "Лк 24,13–31" }, note: { de: "Der unerkannte Begleiter auf dem Weg nach Emmaus.", sr: "Непрепознати сапутник на путу у Емаус." } }
      ],
      fathers: {
        de: "Die Väter zitieren Tobit häufig, besonders zu Almosen und Gebet (z. B. Tob 4 und 12). Für diese Version wurde kein einzelner freier Väterkommentar geprüft; wörtliche Zitate gibt die App nicht wieder.",
        sr: "Оци често наводе Товита, нарочито о милостињи и молитви (нпр. Тов 4 и 12). За ово издање није проверен ниједан појединачан слободан коментар отаца; апликација не наводи дословне цитате."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was bedeutet der Name Raphael?", sr: "Шта значи име Рафаило?" },
          a: { de: "„Gott heilt“.", sr: "„Бог исцељује“." } },
        { q: { de: "Welche guten Werke Tobits werden besonders genannt?", sr: "Која добра дела Товитова се посебно наводе?" },
          a: { de: "Almosen für die Armen und das Begraben der Toten.", sr: "Милостиња сиромашнима и сахрањивање мртвих." } },
        { q: { de: "Was empfiehlt Raphael zum Schluss?", sr: "Шта Рафаило препоручује на крају?" },
          a: { de: "Gebet mit Fasten, Almosen und Gerechtigkeit – und Gott zu preisen.", sr: "Молитву са постом, милостињом и правдом – и да се благосиља Бог." } }
      ],
      practice: {
        de: "Bete diese Woche bewusst zu deinem Schutzengel und gib einem bedürftigen Menschen still eine Gabe, ohne darüber zu sprechen.",
        sr: "Помолите се ове недеље свесно свом анђелу чувару и тихо дајте дар неком ко је у потреби, а да о томе не говорите."
      },
      review: {
        de: "Gott erhört die Gebete von Tobit und Sara und sendet den Erzengel Raphael, der unerkannt begleitet, befreit und heilt. Gebet, Fasten und Almosen gehören zusammen.",
        sr: "Бог услишава молитве Товита и Саре и шаље арханђела Рафаила, који непрепознат прати, ослобађа и исцељује. Молитва, пост и милостиња иду заједно."
      },
      quiz: [
        { q: { de: "Wer begleitete Tobias auf der Reise?", sr: "Ко је пратио Товију на путу?" },
          options: [{ de: "Der Erzengel Raphael", sr: "Арханђел Рафаило" }, { de: "Der Prophet Elija", sr: "Пророк Илија" }, { de: "Sein Vater", sr: "Његов отац" }], correct: 0 },
        { q: { de: "In welcher Stadt lebte Tobit in der Verbannung?", sr: "У ком граду је Товит живео у изгнанству?" },
          options: [{ de: "Ninive", sr: "У Ниневији" }, { de: "Rom", sr: "У Риму" }, { de: "Jerusalem", sr: "У Јерусалиму" }], correct: 0 },
        { q: { de: "Woran litt Tobit?", sr: "Од чега је патио Товит?" },
          options: [{ de: "An Blindheit", sr: "Од слепила" }, { de: "An Lähmung", sr: "Од одузетости" }, { de: "An Aussatz", sr: "Од губе" }], correct: 0 },
        { q: { de: "An welchem Fest gedenkt die Kirche Raphaels?", sr: "На који празник Црква спомиње Рафаила?" },
          options: [{ de: "Synaxis des Erzengels Michael und aller Engel", sr: "Сабор Светог архангела Михаила и свих анђела" }, { de: "Ostern", sr: "Васкрс" }, { de: "Kreuzerhöhung", sr: "Крстовдан" }], correct: 0 }
      ]
    },
  {
      id: "bib-sir2", book: "sir", order: 40,
      title: { de: "Wenn du dem Herrn dienen willst", sr: "Ако приступаш да служиш Господу" },
      ref: { de: "Jesus Sirach 2,1–18", sr: "Премудрост Исуса сина Сирахова 2,1–18" },
      intro: {
        de: "Das Buch Jesus Sirach gehört zu den Büchern, die die orthodoxe Bibel aus der Septuaginta übernommen hat. Ein Weisheitslehrer in Jerusalem schrieb es um 180 v. Chr. auf Hebräisch; sein Enkel übersetzte es später ins Griechische, wie er im Vorwort selbst erzählt.",
        sr: "Књига Премудрости Исуса сина Сирахова спада у књиге које је православна Библија преузела из Септуагинте. Један учитељ мудрости у Јерусалиму написао ју је око 180. пре Христа на јеврејском; његов унук ју је касније превео на грчки, како и сам каже у предговору."
      },
      introTag: "history",
      context: {
        de: "Viele Juden lebten damals unter dem Einfluss der griechischen Kultur, und manche gaben den Glauben der Väter auf. Sirach ermutigt seine Schüler, Gott treu zu bleiben, auch wenn es schwer wird.",
        sr: "Многи Јудејци живели су тада под утицајем грчке културе, и неки су напуштали веру отаца. Сирах храбри своје ученике да остану верни Богу, и када је тешко."
      },
      reading: [
        { ref: { de: "Sir 2,1–6", sr: "Сир 2,1–6" }, note: { de: "Mach dich auf Prüfung gefasst.", sr: "Припреми душу своју за искушење." } },
        { ref: { de: "Sir 2,7–11", sr: "Сир 2,7–11" }, note: { de: "Schaut auf die früheren Geschlechter.", sr: "Погледајте на древне нараштаје." } },
        { ref: { de: "Sir 2,12–18", sr: "Сир 2,12–18" }, note: { de: "In die Hände des Herrn fallen.", sr: "Пасти у руке Господње." } }
      ],
      summary: {
        de: "Mein Kind, wenn du dem Herrn dienen willst, mach dich auf Prüfung gefasst. Sei aufrichtig und standhaft und überstürze nichts in der Zeit der Not. Halte dich an ihn und weiche nicht ab. Nimm an, was über dich kommt, und sei geduldig in Erniedrigung; denn im Feuer wird das Gold geprüft. Vertraue Gott, und er wird dir helfen. Ihr, die ihr den Herrn fürchtet, hofft auf Gutes, auf ewige Freude und Erbarmen. Schaut auf die früheren Geschlechter: Wer hat auf den Herrn vertraut und wurde enttäuscht? Denn der Herr ist barmherzig und gnädig, er vergibt Sünden und rettet in der Not. Lasst uns lieber in die Hände des Herrn fallen als in die Hände der Menschen; denn wie seine Größe, so ist auch sein Erbarmen.",
        sr: "Чедо, ако приступаш да служиш Господу, припреми душу своју за искушење. Буди искрен и постојан и не журиш у време невоље. Прилепи се уз Њега и не одступај. Прими што те снађе и буди трпељив у понижењу; јер се у огњу злато куша. Веруј Богу, и Он ће ти помоћи. Који се бојите Господа, надајте се добру, вечној радости и милости. Погледајте на древне нараштаје: ко се уздао у Господа и постидео се? Јер је Господ милостив и милосрдан, опрашта грехе и спасава у невољи. Боље да паднемо у руке Господње него у руке људске; јер каква је величина Његова, таква је и милост Његова."
      },
      interp: {
        simple: {
          de: "Wer mit Gott lebt, wird nicht vor Schwierigkeiten bewahrt, aber er ist darin nicht allein. Prüfungen können den Glauben reinigen wie Feuer das Gold.",
          sr: "Ко живи са Богом, није поштеђен тешкоћа, али у њима није сам. Искушења могу очистити веру као што огањ чисти злато."
        },
        deeper: {
          de: "Der erste Vers wird in der geistlichen Literatur der Orthodoxie sehr oft angeführt: Wer den geistlichen Weg beginnt, soll mit Versuchungen rechnen und darüber nicht erschrecken. Das Bild vom Gold im Feuer findet sich auch im Neuen Testament (1 Petr 1,6–7). Wichtig ist die Unterscheidung: Gott ist nicht der Urheber des Bösen (Jak 1,13), aber er lässt Prüfungen zu und gibt Kraft, sie zu bestehen (1 Kor 10,13). Die Orthodoxie zählt Sirach zu den „lesenswerten Büchern“ (Anagignoskomena).",
          sr: "Први стих веома се често наводи у православној духовној литератури: ко почиње духовни пут, треба да рачуна са искушењима и да се не плаши. Слика злата у огњу налази се и у Новом завету (1 Пт 1,6–7). Важно је разликовање: Бог није узрочник зла (Јак 1,13), али допушта искушења и даје снагу да се издрже (1 Кор 10,13). Православље Сираха убраја у „корисне за читање“ књиге (анагиноскомена)."
        },
        tag: "counsel"
      },
      christ: {
        de: "Christus selbst wurde nach seiner Taufe in der Wüste versucht (Mt 4,1–11). Weil er selbst gelitten hat und versucht worden ist, kann er denen helfen, die versucht werden (Hebr 2,18).",
        sr: "Сам Христос је после крштења био кушан у пустињи (Мт 4,1–11). Пошто је сам страдао и био кушан, може помоћи онима који бивају кушани (Јев 2,18)."
      },
      links: [
        { ref: { de: "1 Petr 1,6–7", sr: "1 Пт 1,6–7" }, note: { de: "Der Glaube wird geprüft wie Gold im Feuer.", sr: "Вера се куша као злато огњем." } },
        { ref: { de: "1 Kor 10,13", sr: "1 Кор 10,13" }, note: { de: "Gott lässt euch nicht über eure Kraft versucht werden.", sr: "Бог неће допустити да будете кушани више него што можете." } },
        { ref: { de: "Jak 1,2–4.12–13", sr: "Јак 1,2–4.12–13" }, note: { de: "Prüfung bringt Ausdauer; Gott versucht niemanden zum Bösen.", sr: "Искушење доноси трпљење; Бог никога не куша злом." } },
        { ref: { de: "Hebr 2,18", sr: "Јев 2,18" }, note: { de: "Er kann denen helfen, die versucht werden.", sr: "Може помоћи онима који бивају кушани." } }
      ],
      fathers: {
        de: "Sir 2,1 wird von vielen geistlichen Vätern als Grundsatz für den Anfang des geistlichen Lebens zitiert. Für diese Version wurde kein einzelner freier Väterkommentar geprüft; wörtliche Zitate gibt die App nicht wieder.",
        sr: "Сир 2,1 многи духовни оци наводе као начело за почетак духовног живота. За ово издање није проверен ниједан појединачан слободан коментар отаца; апликација не наводи дословне цитате."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Worauf soll sich gefasst machen, wer dem Herrn dienen will?", sr: "На шта треба да се припреми ко хоће да служи Господу?" },
          a: { de: "Auf Prüfung und Versuchung (Sir 2,1).", sr: "На искушење (Сир 2,1)." } },
        { q: { de: "Welches Bild gebraucht Sirach für die Prüfung?", sr: "Коју слику Сирах користи за искушење?" },
          a: { de: "Gold, das im Feuer geprüft wird.", sr: "Злато које се куша у огњу." } },
        { q: { de: "Warum ist es besser, in die Hände des Herrn zu fallen?", sr: "Зашто је боље пасти у руке Господње?" },
          a: { de: "Weil sein Erbarmen so groß ist wie seine Größe.", sr: "Зато што је Његова милост велика као и Његова величина." } }
      ],
      practice: {
        de: "Denke an eine Schwierigkeit, die du gerade erlebst. Sprich diese Woche dazu jeden Tag: „Herr, gib mir Geduld und Vertrauen.“ Frage dich: Was kann ich in dieser Lage lernen?",
        sr: "Помислите на неку тешкоћу коју сада доживљавате. Говорите ове недеље сваког дана: „Господе, дај ми трпљење и поверење.“ Запитајте се: шта могу да научим у овој ситуацији?"
      },
      review: {
        de: "Wer Gott dient, wird geprüft wie Gold im Feuer. Wer auf den Herrn vertraut, wird nicht enttäuscht, denn er ist barmherzig.",
        sr: "Ко служи Богу, бива кушан као злато у огњу. Ко се узда у Господа, неће се постидети, јер је Он милостив."
      },
      quiz: [
        { q: { de: "Wann wurde das Buch Jesus Sirach etwa geschrieben?", sr: "Када је отприлике написана књига Исуса сина Сирахова?" },
          options: [{ de: "Um 180 v. Chr.", sr: "Око 180. пре Христа" }, { de: "Um 1000 v. Chr.", sr: "Око 1000. пре Христа" }, { de: "Um 300 n. Chr.", sr: "Око 300. после Христа" }], correct: 0 },
        { q: { de: "Wer übersetzte das Buch ins Griechische?", sr: "Ко је превео књигу на грчки?" },
          options: [{ de: "Der Enkel des Verfassers", sr: "Унук писца" }, { de: "Der Apostel Paulus", sr: "Апостол Павле" }, { de: "Mose", sr: "Мојсије" }], correct: 0 },
        { q: { de: "Womit vergleicht Sirach die Prüfung?", sr: "Са чим Сирах упоређује искушење?" },
          options: [{ de: "Mit Gold im Feuer", sr: "Са златом у огњу" }, { de: "Mit Regen", sr: "Са кишом" }, { de: "Mit einem Sturm auf dem Meer", sr: "Са буром на мору" }], correct: 0 },
        { q: { de: "Ist Gott nach Jak 1,13 der Urheber der Versuchung zum Bösen?", sr: "Да ли је Бог, по Јак 1,13, узрочник кушања злом?" },
          options: [{ de: "Nein, Gott versucht niemanden zum Bösen", sr: "Не, Бог никога не куша злом" }, { de: "Ja, immer", sr: "Да, увек" }, { de: "Nur manchmal", sr: "Само понекад" }], correct: 0 }
      ]
    },
  {
      id: "bib-wis3", book: "wis", order: 41,
      title: { de: "Die Seelen der Gerechten in Gottes Hand", sr: "Душе праведних у руци Божијој" },
      ref: { de: "Weisheit 2,12–20 und 3,1–9", sr: "Премудрост Соломонова 2,12–20 и 3,1–9" },
      intro: {
        de: "Das Buch der Weisheit (Weisheit Salomos) gehört zu den Büchern der Septuaginta. Es entstand auf Griechisch, wahrscheinlich in Alexandrien im 1. Jahrhundert v. Chr. Es spricht über das Schicksal der Gerechten und die Hoffnung auf Unsterblichkeit.",
        sr: "Књига Премудрости Соломонове спада у књиге Септуагинте. Настала је на грчком, вероватно у Александрији у 1. веку пре Христа. Говори о судбини праведних и нади у бесмртност."
      },
      introTag: "history",
      context: {
        de: "Gottlose Menschen sagen sich: Das Leben ist kurz, nach dem Tod kommt nichts; lasst uns genießen und den Gerechten unterdrücken, der uns stört (Weish 2,1–11). Das Buch antwortet darauf.",
        sr: "Безбожни људи говоре: живот је кратак, после смрти нема ништа; уживајмо и угњетавајмо праведника који нам смета (Прем 2,1–11). Књига на то одговара."
      },
      reading: [
        { ref: { de: "Weish 2,12–20", sr: "Прем 2,12–20" }, note: { de: "Der Gerechte wird verfolgt.", sr: "Праведник бива гоњен." } },
        { ref: { de: "Weish 3,1–9", sr: "Прем 3,1–9" }, note: { de: "Die Seelen der Gerechten sind in Gottes Hand.", sr: "Душе праведних су у руци Божијој." } }
      ],
      summary: {
        de: "Die Gottlosen sagen: Lasst uns dem Gerechten auflauern, denn er ist uns unbequem. Er rühmt sich, Gott zum Vater zu haben, und nennt sich Kind des Herrn. Wir wollen sehen, ob seine Worte wahr sind; wenn er Gottes Sohn ist, wird Gott sich seiner annehmen. Mit Schmach und Qual wollen wir ihn prüfen und zu einem schändlichen Tod verurteilen. Doch das Buch antwortet: Die Seelen der Gerechten sind in Gottes Hand, und keine Qual rührt sie an. In den Augen der Toren scheinen sie gestorben zu sein, sie aber sind in Frieden. Ihre Hoffnung ist voll Unsterblichkeit. Wie Gold im Schmelzofen hat Gott sie geprüft und sie seiner würdig befunden. Die auf ihn vertrauen, werden die Wahrheit erkennen.",
        sr: "Безбожници говоре: Вребајмо праведника, јер нам је незгодан. Хвали се да му је Бог Отац и назива себе чедом Господњим. Да видимо јесу ли његове речи истините; ако је праведник син Божији, Бог ће га заштитити. Срамотом и мукама искушајмо га и осудимо на срамну смрт. Али књига одговара: Душе праведних су у руци Божијој, и мука их се неће дотаћи. У очима безумних изгледа да су умрли, а они су у миру. Њихова нада је пуна бесмртности. Као злато у пећи искушао их је Бог и нашао их достојним себе. Који се уздају у Њега, познаће истину."
      },
      interp: {
        simple: {
          de: "Wer Gott treu bleibt, kann von Menschen verspottet und verfolgt werden. Doch wer in Gottes Hand ist, den verliert Gott nicht – auch nicht im Tod.",
          sr: "Ко остане веран Богу, може бити исмејан и гоњен од људи. Али онај ко је у руци Божијој, Бог га не губи – ни у смрти."
        },
        deeper: {
          de: "Die Kirchenväter lesen Weish 2,12–20 als prophetisches Bild des Leidens Christi: Der Gerechte nennt Gott seinen Vater, wird verspottet mit den Worten „Wenn er Gottes Sohn ist …“ und zum Tod verurteilt – vgl. die Spottworte unter dem Kreuz (Mt 27,43). Weish 3,1–9 wird in der Vesper an Festen von Heiligen, besonders von Märtyrern, gelesen. Der Text bezeugt, dass die Gerechten nach dem Tod bei Gott leben; darauf gründet auch die Verehrung der Heiligen.",
          sr: "Свети оци Прем 2,12–20 читају као пророчку слику Христовог страдања: праведник назива Бога својим Оцем, бива исмејан речима „Ако је Син Божији …“ и осуђен на смрт – уп. подругљиве речи под крстом (Мт 27,43). Прем 3,1–9 чита се на вечерњу на празнике светих, нарочито мученика. Текст сведочи да праведници после смрти живе код Бога; на томе се заснива и поштовање светих."
        },
        tag: "opinion"
      },
      christ: {
        de: "Christus ist der Gerechte, der verspottet und getötet wurde, und Gott hat ihn auferweckt. Sterbend betete er: „Vater, in deine Hände befehle ich meinen Geist“ (Lk 23,46).",
        sr: "Христос је Праведник који је исмејан и убијен, а Бог Га је васкрсао. Умирући се молио: „Оче, у руке Твоје предајем дух свој“ (Лк 23,46)."
      },
      links: [
        { ref: { de: "Mt 27,39–43", sr: "Мт 27,39–43" }, note: { de: "Er hat auf Gott vertraut; der rette ihn jetzt.", sr: "Уздао се у Бога, нека га сад избави." } },
        { ref: { de: "Lk 23,46", sr: "Лк 23,46" }, note: { de: "In deine Hände befehle ich meinen Geist.", sr: "У руке Твоје предајем дух свој." } },
        { ref: { de: "Offb 6,9–11", sr: "Отк 6,9–11" }, note: { de: "Die Seelen der Märtyrer unter dem Altar.", sr: "Душе мученика под олтаром." } },
        { ref: { de: "Joh 10,28–29", sr: "Јн 10,28–29" }, note: { de: "Niemand wird sie aus meiner Hand reißen.", sr: "Нико их неће отети из руке моје." } }
      ],
      fathers: {
        de: "Mehrere Kirchenväter führen Weish 2,12–20 als Vorhersage des Leidens Christi an. Für diese Version wurde kein einzelner freier Link zu diesen Stellen geprüft; wörtliche Zitate gibt die App nicht wieder.",
        sr: "Више светих отаца наводи Прем 2,12–20 као предсказање Христовог страдања. За ово издање није проверена појединачна слободна веза ка тим местима; апликација не наводи дословне цитате."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was sagen die Gottlosen über den Gerechten?", sr: "Шта безбожници говоре о праведнику?" },
          a: { de: "Er ist unbequem; wir wollen prüfen, ob Gott ihm hilft, wenn er Gottes Sohn ist.", sr: "Незгодан је; да видимо да ли ће му Бог помоћи ако је син Божији." } },
        { q: { de: "Wo sind nach Weish 3,1 die Seelen der Gerechten?", sr: "Где су, по Прем 3,1, душе праведних?" },
          a: { de: "In Gottes Hand.", sr: "У руци Божијој." } },
        { q: { de: "Wann liest die Kirche Weish 3,1–9 im Gottesdienst?", sr: "Када Црква чита Прем 3,1–9 на богослужењу?" },
          a: { de: "In der Vesper an Festen von Heiligen, besonders Märtyrern.", sr: "На вечерњу на празнике светих, нарочито мученика." } }
      ],
      practice: {
        de: "Denke an einen verstorbenen Menschen, den du vermisst. Sprich: „Seine/ihre Seele ist in deiner Hand, Herr.“ Bete für ihn oder sie.",
        sr: "Помислите на неког упокојеног ко вам недостаје. Реците: „Његова/њена душа је у руци Твојој, Господе.“ Помолите се за њега или њу."
      },
      review: {
        de: "Der Gerechte wird verspottet und verfolgt, doch die Seelen der Gerechten sind in Gottes Hand. Die Väter sehen darin das Leiden Christi vorausgebildet.",
        sr: "Праведник бива исмејан и гоњен, али душе праведних су у руци Божијој. Оци у томе виде праслику Христовог страдања."
      },
      quiz: [
        { q: { de: "In welcher Sprache entstand das Buch der Weisheit?", sr: "На ком језику је настала књига Премудрости Соломонове?" },
          options: [{ de: "Griechisch", sr: "На грчком" }, { de: "Latein", sr: "На латинском" }, { de: "Arabisch", sr: "На арапском" }], correct: 0 },
        { q: { de: "Was rührt die Seelen der Gerechten nach Weish 3,1 nicht an?", sr: "Шта се, по Прем 3,1, неће дотаћи душа праведних?" },
          options: [{ de: "Keine Qual", sr: "Мука" }, { de: "Kein Licht", sr: "Светлост" }, { de: "Keine Freude", sr: "Радост" }], correct: 0 },
        { q: { de: "Womit wird die Prüfung der Gerechten verglichen?", sr: "Са чим се упоређује искушење праведних?" },
          options: [{ de: "Mit Gold im Schmelzofen", sr: "Са златом у пећи" }, { de: "Mit einem Baum", sr: "Са дрветом" }, { de: "Mit einer Reise", sr: "Са путовањем" }], correct: 0 },
        { q: { de: "Welche Stelle unter dem Kreuz erinnert an Weish 2,18?", sr: "Које место под крстом подсећа на Прем 2,18?" },
          options: [{ de: "Mt 27,43: Er hat auf Gott vertraut …", sr: "Мт 27,43: Уздао се у Бога …" }, { de: "Joh 3,16", sr: "Јн 3,16" }, { de: "Gen 1,1", sr: "Пост 1,1" }], correct: 0 }
      ]
    },
  {
      id: "bib-josh3", book: "josh", order: 42,
      title: { de: "Durch den Jordan ins verheißene Land", sr: "Кроз Јордан у обећану земљу" },
      ref: { de: "Josua 3,1–17 und 4,1–9", sr: "Исус Навин 3,1–17 и 4,1–9" },
      intro: {
        de: "Nach dem Tod des Mose führt Josua das Volk Israel. Sein Name ist auf Hebräisch derselbe wie der Name Jesus („Gott rettet“). Josua 3 erzählt, wie Israel durch den Jordan in das verheißene Land zieht.",
        sr: "После Мојсијеве смрти Исус Навин води народ Израиљски. Његово име је на јеврејском исто као име Исус („Бог спасава“). 3. глава књиге Исуса Навина приповеда како Израиљ прелази Јордан у обећану земљу."
      },
      introTag: "history",
      context: {
        de: "Vierzig Jahre war Israel durch die Wüste gezogen. Nun steht es am Jordan, der zur Erntezeit über die Ufer getreten ist. Die Bundeslade, das Zeichen der Gegenwart Gottes, geht voran.",
        sr: "Четрдесет година Израиљ је ишао кроз пустињу. Сада стоји на Јордану, који се у време жетве излио из корита. Ковчег завета, знак Божијег присуства, иде напред."
      },
      reading: [
        { ref: { de: "Jos 3,1–8", sr: "Ис Нав 3,1–8" }, note: { de: "Die Lade geht voran.", sr: "Ковчег иде напред." } },
        { ref: { de: "Jos 3,14–17", sr: "Ис Нав 3,14–17" }, note: { de: "Das Wasser bleibt stehen.", sr: "Вода се зауставља." } },
        { ref: { de: "Jos 4,1–9", sr: "Ис Нав 4,1–9" }, note: { de: "Zwölf Steine zur Erinnerung.", sr: "Дванаест камења за спомен." } }
      ],
      summary: {
        de: "Josua sagt dem Volk: Heiligt euch, denn morgen wird der Herr Wunder unter euch tun. Die Priester tragen die Bundeslade voran. Als ihre Füße das Wasser des Jordan berühren, bleibt das Wasser von oben her stehen wie ein Damm, und das Volk zieht auf trockenem Boden hindurch, während die Priester mit der Lade mitten im Fluss stehen. Danach lässt Josua zwölf Männer, einen aus jedem Stamm, zwölf Steine aus dem Jordan nehmen. Sie sollen ein Zeichen sein: Wenn eure Kinder fragen, was diese Steine bedeuten, sollt ihr sagen, dass das Wasser des Jordan vor der Lade des Herrn stehen blieb.",
        sr: "Исус Навин каже народу: Осветите се, јер ће сутра Господ учинити чудеса међу вама. Свештеници носе ковчег завета напред. Када им ноге дотакну воду Јордана, вода одозго стане као насип, и народ прелази по сувом, док свештеници са ковчегом стоје усред реке. Затим Исус Навин наређује да дванаест људи, по један из сваког племена, узму дванаест камења из Јордана. Она треба да буду знак: када вас деца запитају шта значе ово камење, реците да је вода Јордана стала пред ковчегом Господњим."
      },
      interp: {
        simple: {
          de: "Gott führt sein Volk sicher durch das, was unmöglich scheint. Die Steine erinnern daran: Was Gott getan hat, soll man nicht vergessen, sondern den Kindern erzählen.",
          sr: "Бог безбедно води свој народ кроз оно што изгледа немогуће. Камење подсећа: оно што је Бог учинио не треба заборавити, него причати деци."
        },
        deeper: {
          de: "Die Kirchenväter sehen im Durchzug durch den Jordan ein Vorausbild der Taufe: Durch das Wasser tritt man in das verheißene Land ein, und der Anführer trägt denselben Namen wie Jesus. Am Jordan wurde später Christus getauft. In den Gottesdiensten der Theophanie erklingt Psalm 113 (LXX): „Das Meer sah es und floh, der Jordan wandte sich zurück.“ Jos 3 gehört zu den alttestamentlichen Lesungen am Vorabend der Theophanie.",
          sr: "Свети оци у преласку преко Јордана виде праслику крштења: кроз воду се улази у обећану земљу, а вођа носи исто име као Исус. На Јордану се касније крстио Христос. На богослужењима Богојављења пева се Псалам 113 (по Септуагинти): „Море виде и побеже, Јордан се врати натраг.“ Ис Нав 3 спада у старозаветна читања уочи Богојављења."
        },
        tag: "opinion"
      },
      christ: {
        de: "Josua führte Israel ins Land, doch die wahre Ruhe schenkt erst Christus (Hebr 4,8–10). In seiner Taufe im Jordan heiligt er das Wasser und öffnet uns den Weg in das Reich Gottes.",
        sr: "Исус Навин је увео Израиљ у земљу, али прави покој даје тек Христос (Јев 4,8–10). Својим крштењем на Јордану Он освећује воду и отвара нам пут у Царство Божије."
      },
      links: [
        { ref: { de: "Ex 14,21–22", sr: "Изл 14,21–22" }, note: { de: "Der Durchzug durch das Rote Meer.", sr: "Прелазак преко Црвеног мора." } },
        { ref: { de: "Mt 3,13–17", sr: "Мт 3,13–17" }, note: { de: "Die Taufe Christi im Jordan.", sr: "Крштење Христово на Јордану." } },
        { ref: { de: "Ps 113,3 (LXX; hebr. 114,3)", sr: "Пс 113,3 (по Септуагинти; јевр. 114,3)" }, note: { de: "Der Jordan wandte sich zurück.", sr: "Јордан се врати натраг." } },
        { ref: { de: "Hebr 4,8–10", sr: "Јев 4,8–10" }, note: { de: "Die Ruhe, die Josua nicht geben konnte.", sr: "Покој који Исус Навин није могао дати." } }
      ],
      fathers: {
        de: "Die Deutung des Jordandurchzugs auf die Taufe ist bei vielen Vätern verbreitet. Für diese Version wurde kein einzelner freier Väterkommentar geprüft; wörtliche Zitate gibt die App nicht wieder.",
        sr: "Тумачење преласка преко Јордана као праслике крштења раширено је код многих отаца. За ово издање није проверен ниједан појединачан слободан коментар отаца; апликација не наводи дословне цитате."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Was geschah, als die Priester mit der Lade den Jordan betraten?", sr: "Шта се десило када су свештеници са ковчегом ушли у Јордан?" },
          a: { de: "Das Wasser blieb stehen, und das Volk zog auf trockenem Boden hindurch.", sr: "Вода је стала, и народ је прешао по сувом." } },
        { q: { de: "Wozu dienten die zwölf Steine?", sr: "Чему је служило дванаест камења?" },
          a: { de: "Als Erinnerungszeichen, damit man den Kindern von Gottes Tat erzählt.", sr: "Као знак за спомен, да би се деци причало о Божијем делу." } },
        { q: { de: "Warum sehen die Väter darin ein Bild der Taufe?", sr: "Зашто оци у томе виде слику крштења?" },
          a: { de: "Durch das Wasser kommt man ins verheißene Land; der Anführer heißt wie Jesus; im Jordan wurde Christus getauft.", sr: "Кроз воду се долази у обећану земљу; вођа се зове као Исус; у Јордану се крстио Христос." } }
      ],
      practice: {
        de: "Wähle einen „Erinnerungsstein“ für dich: Schreibe im Notizbuch eine Erfahrung auf, in der Gott dir geholfen hat, und lies sie in schweren Zeiten wieder.",
        sr: "Изаберите свој „камен за спомен“: запишите у бележницу једно искуство у коме вам је Бог помогао и прочитајте га поново у тешким временима."
      },
      review: {
        de: "Israel zieht durch den Jordan, der vor der Bundeslade stehen bleibt, ins verheißene Land. Die Väter sehen darin ein Bild der Taufe.",
        sr: "Израиљ прелази Јордан, који стаје пред ковчегом завета, и улази у обећану земљу. Оци у томе виде слику крштења."
      },
      quiz: [
        { q: { de: "Was bedeutet der Name Josua / Jesus?", sr: "Шта значи име Исус (Навин)?" },
          options: [{ de: "Gott rettet", sr: "Бог спасава" }, { de: "Sohn des Lichts", sr: "Син светлости" }, { de: "Mann des Krieges", sr: "Ратник" }], correct: 0 },
        { q: { de: "Was trugen die Priester in den Jordan?", sr: "Шта су свештеници унели у Јордан?" },
          options: [{ de: "Die Bundeslade", sr: "Ковчег завета" }, { de: "Den Stab des Mose", sr: "Мојсијев штап" }, { de: "Brot", sr: "Хлеб" }], correct: 0 },
        { q: { de: "Wie viele Steine wurden aus dem Jordan genommen?", sr: "Колико камења је узето из Јордана?" },
          options: [{ de: "Zwölf", sr: "Дванаест" }, { de: "Sieben", sr: "Седам" }, { de: "Drei", sr: "Три" }], correct: 0 },
        { q: { de: "An welchem Fest wird Jos 3 gelesen?", sr: "На који празник се чита Ис Нав 3?" },
          options: [{ de: "Am Vorabend der Theophanie", sr: "Уочи Богојављења" }, { de: "An Mariä Entschlafung", sr: "На Успење" }, { de: "Am Palmsonntag", sr: "На Цвети" }], correct: 0 }
      ]
    },
  {
      id: "bib-1tim2", book: "past", order: 43,
      title: { de: "Betet für alle Menschen", sr: "Молите се за све људе" },
      ref: { de: "1. Timotheus 2,1–8", sr: "1. Тимотеју 2,1–8" },
      intro: {
        de: "Die Briefe an Timotheus und Titus heißen „Pastoralbriefe“, weil sie Hirten (Vorstehern) der Gemeinden Anweisungen geben. Timotheus war ein enger Mitarbeiter des Paulus und leitete nach der Überlieferung die Kirche in Ephesus.",
        sr: "Посланице Тимотеју и Титу називају се „пастирске посланице“, јер дају упутства пастирима (старешинама) заједница. Тимотеј је био близак Павлов сарадник и, према предању, управљао је Црквом у Ефесу."
      },
      introTag: "history",
      context: {
        de: "Die Christen lebten als kleine Minderheit im Römischen Reich, oft verdächtigt und manchmal verfolgt. Trotzdem fordert Paulus sie auf, für alle zu beten – auch für die Herrscher.",
        sr: "Хришћани су живели као мала мањина у Римском царству, често сумњичени, а понекад и гоњени. Ипак Павле их позива да се моле за све – и за владаре."
      },
      reading: [
        { ref: { de: "1 Tim 2,1–4", sr: "1 Тим 2,1–4" }, note: { de: "Gott will, dass alle gerettet werden.", sr: "Бог хоће да се сви људи спасу." } },
        { ref: { de: "1 Tim 2,5–8", sr: "1 Тим 2,5–8" }, note: { de: "Ein Mittler zwischen Gott und den Menschen.", sr: "Један посредник између Бога и људи." } }
      ],
      summary: {
        de: "Paulus ermahnt, vor allem anderen Bitten, Gebete, Fürbitten und Danksagungen für alle Menschen zu halten, für die Könige und alle, die Verantwortung tragen, damit wir ein ruhiges und stilles Leben führen können in aller Frömmigkeit und Würde. Das ist gut und Gott, unserem Retter, wohlgefällig, der will, dass alle Menschen gerettet werden und zur Erkenntnis der Wahrheit kommen. Denn einer ist Gott, und einer ist Mittler zwischen Gott und den Menschen, der Mensch Christus Jesus, der sich selbst als Lösegeld für alle gegeben hat. Paulus wünscht, dass die Männer an jedem Ort beten und reine Hände erheben, ohne Zorn und Streit.",
        sr: "Павле саветује да се пре свега чине молбе, молитве, мољења и благодарења за све људе, за цареве и за све који су на власти, да бисмо мирно и тихо живели у свакој побожности и честитости. То је добро и угодно пред Спаситељем нашим Богом, који хоће да се сви људи спасу и да дођу у познање истине. Јер је један Бог, и један посредник између Бога и људи, човек Христос Исус, који је дао себе као откуп за све. Павле жели да се мушкарци моле на сваком месту, подижући чисте руке без гнева и свађе."
      },
      interp: {
        simple: {
          de: "Christen beten nicht nur für sich und ihre Freunde, sondern für alle Menschen – auch für die, die regieren, und für die, die sie nicht mögen. Gott will, dass alle gerettet werden.",
          sr: "Хришћани се не моле само за себе и своје пријатеље, него за све људе – и за оне који владају, и за оне које не воле. Бог хоће да се сви спасу."
        },
        deeper: {
          de: "Dieser Text prägt bis heute den Gottesdienst: In den Ektenien (Fürbittreihen) der Liturgie betet die Kirche für das Land, die Regierenden, die Reisenden, die Kranken und für den Frieden der ganzen Welt. Der Satz „Gott will, dass alle Menschen gerettet werden“ (1 Tim 2,4) zeigt: Gottes Heilswille kennt keine Grenze. „Ein Mittler“ (2,5) betont, dass allein Christus als wahrer Gott und wahrer Mensch Gott und Menschen vereint; die Fürbitte der Heiligen geschieht immer in ihm und hebt diese Wahrheit nicht auf.",
          sr: "Овај текст до данас обликује богослужење: на јектенијама Литургије Црква се моли за земљу, за власти, за путнике, за болесне и за мир целог света. Реч „Бог хоће да се сви људи спасу“ (1 Тим 2,4) показује: Божија воља за спасење нема граница. „Један посредник“ (2,5) наглашава да само Христос, као истинити Бог и истинити човек, сједињује Бога и људе; заступништво светих увек се збива у Њему и не укида ову истину."
        },
        tag: "dogma"
      },
      christ: {
        de: "Christus ist der eine Mittler, der sich für alle hingegeben hat. Am Kreuz betete er sogar für die, die ihn kreuzigten (Lk 23,34).",
        sr: "Христос је један посредник, који је себе предао за све. На крсту се молио чак и за оне који су Га распињали (Лк 23,34)."
      },
      links: [
        { ref: { de: "Mt 5,44", sr: "Мт 5,44" }, note: { de: "Betet für die, die euch verfolgen.", sr: "Молите се за оне који вас гоне." } },
        { ref: { de: "Lk 23,34", sr: "Лк 23,34" }, note: { de: "Vater, vergib ihnen.", sr: "Оче, опрости им." } },
        { ref: { de: "Jer 29,7", sr: "Јер 29,7" }, note: { de: "Sucht das Wohl der Stadt und betet für sie.", sr: "Тражите добро граду и молите се за њега." } },
        { ref: { de: "Hebr 7,25", sr: "Јев 7,25" }, note: { de: "Er lebt allezeit, um für uns einzutreten.", sr: "Свагда живи да посредује за нас." } }
      ],
      fathers: {
        de: "Der hl. Johannes Chrysostomus legte die Timotheusbriefe in Homilien aus (englisch in NPNF I/13). Wörtliche Zitate gibt diese App nicht wieder.",
        sr: "Свети Јован Златоуст тумачио је посланице Тимотеју у беседама (на енглеском у NPNF I/13). Ова апликација не наводи дословне цитате."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Für wen sollen Christen nach 1 Tim 2,1–2 beten?", sr: "За кога хришћани, по 1 Тим 2,1–2, треба да се моле?" },
          a: { de: "Für alle Menschen, auch für Könige und alle, die Verantwortung tragen.", sr: "За све људе, и за цареве и све који су на власти." } },
        { q: { de: "Was will Gott nach 1 Tim 2,4?", sr: "Шта Бог хоће по 1 Тим 2,4?" },
          a: { de: "Dass alle Menschen gerettet werden und zur Erkenntnis der Wahrheit kommen.", sr: "Да се сви људи спасу и дођу у познање истине." } },
        { q: { de: "Wo begegnet dieses Gebet für alle im Gottesdienst?", sr: "Где се ова молитва за све сусреће на богослужењу?" },
          a: { de: "In den Ektenien (Fürbittreihen) der Liturgie.", sr: "На јектенијама Литургије." } }
      ],
      practice: {
        de: "Bete diese Woche jeden Tag für einen Menschen, mit dem du es schwer hast, und für die Verantwortlichen in deinem Land oder deiner Stadt.",
        sr: "Молите се ове недеље сваког дана за једну особу са којом вам је тешко и за одговорне у вашој земљи или граду."
      },
      review: {
        de: "Christen beten für alle Menschen, auch für die Regierenden. Gott will, dass alle gerettet werden; Christus ist der eine Mittler.",
        sr: "Хришћани се моле за све људе, и за власти. Бог хоће да се сви спасу; Христос је један посредник."
      },
      quiz: [
        { q: { de: "Warum heißen die Timotheus- und Titusbriefe „Pastoralbriefe“?", sr: "Зашто се посланице Тимотеју и Титу зову „пастирске“?" },
          options: [{ de: "Sie geben Hirten der Gemeinden Anweisungen", sr: "Дају упутства пастирима заједница" }, { de: "Sie handeln von Schafen", sr: "Говоре о овцама" }, { de: "Sie wurden auf dem Land geschrieben", sr: "Написане су на селу" }], correct: 0 },
        { q: { de: "Wer ist nach 1 Tim 2,5 der eine Mittler?", sr: "Ко је, по 1 Тим 2,5, један посредник?" },
          options: [{ de: "Christus Jesus", sr: "Христос Исус" }, { de: "Mose", sr: "Мојсије" }, { de: "Ein Engel", sr: "Анђео" }], correct: 0 },
        { q: { de: "Wo leitete Timotheus nach der Überlieferung die Kirche?", sr: "Где је, према предању, Тимотеј управљао Црквом?" },
          options: [{ de: "In Ephesus", sr: "У Ефесу" }, { de: "In Rom", sr: "У Риму" }, { de: "In Jerusalem", sr: "У Јерусалиму" }], correct: 0 },
        { q: { de: "Wie sollen die Betenden ihre Hände erheben (1 Tim 2,8)?", sr: "Како молитељи треба да подижу руке (1 Тим 2,8)?" },
          options: [{ de: "Rein, ohne Zorn und Streit", sr: "Чисте, без гнева и свађе" }, { de: "Nur in der Kirche", sr: "Само у храму" }, { de: "Gar nicht", sr: "Никако" }], correct: 0 }
      ]
    },
  {
      id: "bib-lev19", book: "lev", order: 44,
      title: { de: "Seid heilig, denn ich bin heilig", sr: "Будите свети, јер сам ја свет" },
      ref: { de: "Levitikus 19,1–18 und 19,33–34", sr: "Левитска 19,1–18 и 19,33–34" },
      intro: {
        de: "Levitikus ist das dritte Buch Mose. Es enthält vor allem Vorschriften für Opfer, Priester und Reinheit. Kapitel 19 zeigt, dass Heiligkeit nicht nur im Tempel gelebt wird, sondern im Alltag mit anderen Menschen.",
        sr: "Левитска је трећа књига Мојсијева. Садржи пре свега прописе о жртвама, свештеницима и чистоти. 19. глава показује да се светост не живи само у храму, него у свакодневици са другим људима."
      },
      introTag: "history",
      context: {
        de: "Israel lagert am Sinai. Gott hat sein Volk aus Ägypten befreit und will, dass es ihm ähnlich wird. Die Gebote verbinden Gottesdienst und Gerechtigkeit im Alltag.",
        sr: "Израиљ је под Синајем. Бог је ослободио свој народ из Египта и жели да Му постане сличан. Заповести повезују богослужење и правду у свакодневици."
      },
      reading: [
        { ref: { de: "Lev 19,1–4", sr: "Лев 19,1–4" }, note: { de: "Seid heilig.", sr: "Будите свети." } },
        { ref: { de: "Lev 19,9–18", sr: "Лев 19,9–18" }, note: { de: "Für die Armen sorgen; den Nächsten lieben.", sr: "Бринути о сиромашнима; љубити ближњега." } },
        { ref: { de: "Lev 19,33–34", sr: "Лев 19,33–34" }, note: { de: "Den Fremden lieben.", sr: "Љубити дошљака." } }
      ],
      summary: {
        de: "Gott spricht: Seid heilig, denn ich, der Herr, euer Gott, bin heilig. Ehrt Vater und Mutter und haltet meine Sabbate. Wenn ihr erntet, sollt ihr den Rand eures Feldes nicht ganz abernten und keine Nachlese halten; lasst es für den Armen und den Fremden. Ihr sollt nicht stehlen, nicht lügen und einander nicht betrügen. Den Lohn des Tagelöhners sollst du nicht bis zum Morgen zurückhalten. Verfluche keinen Tauben und lege einem Blinden kein Hindernis in den Weg. Hasse deinen Bruder nicht in deinem Herzen; räche dich nicht und trage nichts nach. Du sollst deinen Nächsten lieben wie dich selbst. Auch den Fremden, der bei euch wohnt, sollst du lieben wie dich selbst, denn ihr wart selbst Fremde in Ägypten.",
        sr: "Бог говори: Будите свети, јер сам ја, Господ Бог ваш, свет. Поштујте оца и мајку и држите моје суботе. Када жањете, не пожњите сасвим крај њиве и не пабирчите; оставите то сиромаху и дошљаку. Не крадите, не лажите и не варајте један другога. Плату надничара не задржавај до јутра. Не куни глувог и не мећи слепоме пред ноге шта би га спотакло. Не мрзи брата свога у срцу свом; не освећуј се и не памти зло. Љуби ближњега свога као самога себе. И дошљака који живи међу вама љуби као самога себе, јер сте и ви били дошљаци у Египту."
      },
      interp: {
        simple: {
          de: "Heilig sein heißt, Gott ähnlich zu werden. Das zeigt sich darin, wie wir mit Eltern, Armen, Arbeitern, Behinderten, Fremden und Feinden umgehen.",
          sr: "Бити свет значи постати сличан Богу. То се показује у томе како се односимо према родитељима, сиромашнима, радницима, особама са инвалидитетом, дошљацима и непријатељима."
        },
        deeper: {
          de: "Christus nennt Lev 19,18 das zweite große Gebot neben der Gottesliebe aus Dtn 6,5 (Mt 22,39). Petrus greift Lev 19,2 auf: „Seid heilig, denn ich bin heilig“ (1 Petr 1,15–16). Die Orthodoxie versteht Heiligkeit als Teilhabe an Gottes Leben (Theosis), die sich in tätiger Liebe zeigt. Viele Opfer- und Reinheitsvorschriften des Levitikus haben ihre Erfüllung in Christus gefunden (vgl. Hebr 9–10); das Gebot der Liebe aber bleibt und wird vertieft.",
          sr: "Христос Лев 19,18 назива другом великом заповешћу поред љубави према Богу из Пнз 6,5 (Мт 22,39). Петар наводи Лев 19,2: „Будите свети, јер сам ја свет“ (1 Пт 1,15–16). Православље светост схвата као учешће у Божијем животу (обожење), које се показује у делатној љубави. Многи прописи Левитске о жртвама и чистоти нашли су испуњење у Христу (уп. Јев 9–10); заповест љубави остаје и продубљује се."
        },
        tag: "dogma"
      },
      christ: {
        de: "Im Gleichnis vom barmherzigen Samariter (Lk 10,25–37) erklärt Christus, wer der Nächste ist: jeder, der Hilfe braucht. Er selbst hat die Liebe bis zum Kreuz gelebt.",
        sr: "У причи о милостивом Самарјанину (Лк 10,25–37) Христос објашњава ко је ближњи: свако коме је потребна помоћ. Он сам је љубав живео до крста."
      },
      links: [
        { ref: { de: "Mt 22,37–40", sr: "Мт 22,37–40" }, note: { de: "Das zweite Gebot ist ihm gleich.", sr: "Друга је као и ова." } },
        { ref: { de: "1 Petr 1,15–16", sr: "1 Пт 1,15–16" }, note: { de: "Seid heilig, denn ich bin heilig.", sr: "Будите свети, јер сам ја свет." } },
        { ref: { de: "Lk 10,25–37", sr: "Лк 10,25–37" }, note: { de: "Der barmherzige Samariter.", sr: "Милостиви Самарјанин." } },
        { ref: { de: "Rut 2,1–9", sr: "Рута 2,1–9" }, note: { de: "Rut liest Ähren auf Boas’ Feld nach.", sr: "Рута пабирчи класје на Воозовој њиви." } }
      ],
      fathers: {
        de: "Die Väter betonen, dass die Gebote über Opfer im Licht Christi geistlich zu verstehen sind, die Gebote der Liebe aber unverändert gelten. Für diese Version wurde kein einzelner freier Väterkommentar geprüft; wörtliche Zitate gibt die App nicht wieder.",
        sr: "Оци наглашавају да заповести о жртвама треба духовно схватити у светлости Христовој, а да заповести љубави важе непромењено. За ово издање није проверен ниједан појединачан слободан коментар отаца; апликација не наводи дословне цитате."
      },
      fathersTag: "history",
      questions: [
        { q: { de: "Warum soll Israel heilig sein?", sr: "Зашто Израиљ треба да буде свет?" },
          a: { de: "Weil der Herr, sein Gott, heilig ist (Lev 19,2).", sr: "Зато што је Господ, његов Бог, свет (Лев 19,2)." } },
        { q: { de: "Was soll man bei der Ernte für die Armen übrig lassen?", sr: "Шта треба при жетви оставити сиромашнима?" },
          a: { de: "Den Rand des Feldes und die Nachlese.", sr: "Крај њиве и пабирке." } },
        { q: { de: "Warum soll man den Fremden lieben?", sr: "Зашто треба љубити дошљака?" },
          a: { de: "Weil Israel selbst Fremder in Ägypten war (Lev 19,34).", sr: "Зато што је и Израиљ био дошљак у Египту (Лев 19,34)." } }
      ],
      practice: {
        de: "Wähle ein Gebot aus Lev 19,9–18 und setze es diese Woche bewusst um – zum Beispiel jemandem nichts mehr nachtragen oder einem Bedürftigen etwas „übrig lassen“.",
        sr: "Изаберите једну заповест из Лев 19,9–18 и спроведите је ове недеље свесно – на пример престаните да памтите некоме зло или „оставите“ нешто неком ко је у потреби."
      },
      review: {
        de: "„Seid heilig, denn ich bin heilig“: Heiligkeit zeigt sich in Gerechtigkeit und Liebe zum Nächsten und zum Fremden. Christus nennt Lev 19,18 das zweite große Gebot.",
        sr: "„Будите свети, јер сам ја свет“: светост се показује у правди и љубави према ближњем и дошљаку. Христос Лев 19,18 назива другом великом заповешћу."
      },
      quiz: [
        { q: { de: "Welches Gebot aus Lev 19,18 nennt Christus das zweite große Gebot?", sr: "Коју заповест из Лев 19,18 Христос назива другом великом заповешћу?" },
          options: [{ de: "Liebe deinen Nächsten wie dich selbst", sr: "Љуби ближњега свога као самога себе" }, { de: "Halte den Sabbat", sr: "Држи суботу" }, { de: "Bringe Opfer dar", sr: "Приноси жртве" }], correct: 0 },
        { q: { de: "Wer zitiert Lev 19,2 im Neuen Testament?", sr: "Ко у Новом завету наводи Лев 19,2?" },
          options: [{ de: "Petrus (1 Petr 1,16)", sr: "Петар (1 Пт 1,16)" }, { de: "Judas", sr: "Јуда" }, { de: "Pilatus", sr: "Пилат" }], correct: 0 },
        { q: { de: "Wann soll der Lohn des Tagelöhners gezahlt werden?", sr: "Када треба исплатити надницу надничару?" },
          options: [{ de: "Noch am selben Tag", sr: "Још истог дана" }, { de: "Nach einem Jahr", sr: "После годину дана" }, { de: "Gar nicht", sr: "Никада" }], correct: 0 },
        { q: { de: "Welches Buch Mose ist Levitikus?", sr: "Која књига Мојсијева је Левитска?" },
          options: [{ de: "Das dritte", sr: "Трећа" }, { de: "Das erste", sr: "Прва" }, { de: "Das fünfte", sr: "Пета" }], correct: 0 }
      ]
    },
  {
    "id": "bib-num21",
    "book": "num",
    "order": 45,
    "title": {
      "de": "Die eherne Schlange",
      "sr": "Бронзана змија"
    },
    "ref": {
      "de": "Numeri 21,4–9",
      "sr": "Бројеви 21,4–9"
    },
    "intro": {
      "de": "Numeri (4. Mose) erzählt von der Wanderung Israels durch die Wüste. Das Volk murrt immer wieder gegen Gott und Mose. In Kapitel 21 schenkt Gott Rettung durch ein ungewöhnliches Zeichen.",
      "sr": "Књига Бројева (Четврта Мојсијева) приповеда о путовању Израиља кроз пустињу. Народ изнова ропће на Бога и Мојсија. У 21. глави Бог дарује спасење кроз необичан знак."
    },
    "introTag": "history",
    "context": {
      "de": "Das Volk ist müde vom langen Weg und klagt: Es gibt kein Brot und kein Wasser, und uns ekelt vor dieser elenden Speise – gemeint ist das Manna, das Gott täglich schenkte.",
      "sr": "Народ је уморан од дугог пута и жали се: нема хлеба ни воде, и гади нам се ово бедно јело – мисли се на ману, коју је Бог свакодневно давао."
    },
    "reading": [
      {
        "ref": {
          "de": "Num 21,4–9",
          "sr": "Бр 21,4–9"
        },
        "note": {
          "de": "Die Schlange an der Stange.",
          "sr": "Змија на мотки."
        }
      },
      {
        "ref": {
          "de": "Joh 3,14–15",
          "sr": "Јн 3,14–15"
        },
        "note": {
          "de": "So muss der Menschensohn erhöht werden.",
          "sr": "Тако треба да се подигне Син Човечији."
        }
      }
    ],
    "summary": {
      "de": "Das Volk redet gegen Gott und Mose. Da kommen giftige Schlangen, und viele sterben. Das Volk erkennt seine Sünde und bittet Mose um Fürbitte. Gott sagt zu Mose: Mach dir eine Schlange und häng sie an einer Stange auf; wer gebissen ist und sie ansieht, soll leben. Mose macht eine Schlange aus Bronze. Wer gebissen wurde und auf die bronzene Schlange schaute, blieb am Leben.",
      "sr": "Народ говори против Бога и Мојсија. Тада долазе отровне змије, и многи умиру. Народ увиђа свој грех и моли Мојсија да се помоли. Бог каже Мојсију: Начини змију и метни је на мотку; ко буде уједен и погледа је, остаће жив. Мојсије начини змију од бронзе. Ко је био уједен и погледао бронзану змију, остао је жив."
    },
    "interp": {
      "simple": {
        "de": "Undankbarkeit und Murren bringen Unheil, aber Gott bietet Rettung an. Der Blick auf das Zeichen, das Gott gegeben hat, heilt.",
        "sr": "Незахвалност и роптање доносе несрећу, али Бог нуди спасење. Поглед на знак који је Бог дао исцељује."
      },
      "deeper": {
        "de": "Christus selbst deutet die Schlange auf sich: Wie Mose die Schlange erhöhte, so muss der Menschensohn erhöht werden, damit jeder, der glaubt, ewiges Leben hat (Joh 3,14–15). Die Kirchenväter sehen darin ein Vorausbild des Kreuzes. Später verehrte das Volk die Schlange selbst wie einen Götzen; König Hiskija zerschlug sie darum (2 Kön 18,4). Das zeigt den Unterschied: Nicht das Bild heilt aus sich selbst, sondern Gott, auf den das Zeichen verweist. Das gilt auch für die Ikonen: Die Verehrung geht auf den Dargestellten über, Anbetung gebührt Gott allein.",
        "sr": "Сам Христос змију тумачи на себе: као што је Мојсије подигао змију, тако треба да се подигне Син Човечији, да сваки који верује има живот вечни (Јн 3,14–15). Свети оци у томе виде праслику крста. Касније је народ саму змију поштовао као идола; зато ју је цар Језекија разбио (2 Цар 18,4 – у православним издањима 4 Цар 18,4). То показује разлику: не исцељује слика сама по себи, него Бог на кога знак упућује. То важи и за иконе: поштовање прелази на онога који је насликан, а поклоњење припада само Богу."
      },
      "tag": "dogma"
    },
    "christ": {
      "de": "Am Kreuz erhöht, ist Christus das Zeichen des Heils für alle, die zu ihm aufschauen. Deshalb nennt die Kirche das Kreuz „lebenspendend“.",
      "sr": "Подигнут на крсту, Христос је знак спасења за све који Га погледају. Зато Црква крст назива „животворним“."
    },
    "links": [
      {
        "ref": {
          "de": "Joh 3,14–15",
          "sr": "Јн 3,14–15"
        },
        "note": {
          "de": "Wie Mose die Schlange erhöhte.",
          "sr": "Као што Мојсије подиже змију."
        }
      },
      {
        "ref": {
          "de": "2 Kön 18,4 (in orthodoxen Ausgaben 4 Kön)",
          "sr": "4 Цар 18,4"
        },
        "note": {
          "de": "Hiskija zerschlägt die zum Götzen gewordene Schlange.",
          "sr": "Језекија разбија змију која је постала идол."
        }
      },
      {
        "ref": {
          "de": "1 Kor 10,9–10",
          "sr": "1 Кор 10,9–10"
        },
        "note": {
          "de": "Murrt nicht, wie einige von ihnen murrten.",
          "sr": "Не ропћите као што неки од њих роптаху."
        }
      }
    ],
    "fathers": {
      "de": "Viele Väter deuten die eherne Schlange im Licht von Joh 3,14 auf das Kreuz. Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Многи оци бронзану змију у светлости Јн 3,14 тумаче као крст. Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Warum kamen die Schlangen über das Volk?",
          "sr": "Зашто су змије дошле на народ?"
        },
        "a": {
          "de": "Weil das Volk gegen Gott und Mose murrte und das Manna verachtete.",
          "sr": "Зато што је народ роптао на Бога и Мојсија и презрео ману."
        }
      },
      {
        "q": {
          "de": "Wie deutet Christus die eherne Schlange?",
          "sr": "Како Христос тумачи бронзану змију?"
        },
        "a": {
          "de": "Als Bild seiner Erhöhung am Kreuz (Joh 3,14–15).",
          "sr": "Као слику свог подизања на крст (Јн 3,14–15)."
        }
      },
      {
        "q": {
          "de": "Warum zerschlug König Hiskija die Schlange später?",
          "sr": "Зашто је цар Језекија касније разбио змију?"
        },
        "a": {
          "de": "Weil das Volk sie wie einen Götzen verehrte.",
          "sr": "Зато што ју је народ поштовао као идола."
        }
      }
    ],
    "practice": {
      "de": "Achte diese Woche darauf, wann du murrst. Ersetze jedes Murren durch einen kurzen Dank: „Ehre sei dir, Gott, für alles.“",
      "sr": "Обратите пажњу ове недеље када ропћете. Замените свако роптање кратком захвалношћу: „Слава Теби, Боже, за све.“"
    },
    "review": {
      "de": "Wer von den Schlangen gebissen war und auf die eherne Schlange schaute, lebte. Christus deutet sie auf sein Kreuz.",
      "sr": "Ко је био уједен и погледао бронзану змију, остао је жив. Христос је тумачи на свој крст."
    },
    "quiz": [
      {
        "q": {
          "de": "Woraus machte Mose die Schlange?",
          "sr": "Од чега је Мојсије начинио змију?"
        },
        "options": [
          {
            "de": "Aus Bronze",
            "sr": "Од бронзе"
          },
          {
            "de": "Aus Gold",
            "sr": "Од злата"
          },
          {
            "de": "Aus Holz",
            "sr": "Од дрвета"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Was musste ein Gebissener tun, um zu leben?",
          "sr": "Шта је уједени морао да учини да би живео?"
        },
        "options": [
          {
            "de": "Die Schlange ansehen",
            "sr": "Да погледа змију"
          },
          {
            "de": "Ein Opfer bringen",
            "sr": "Да принесе жртву"
          },
          {
            "de": "Fliehen",
            "sr": "Да бежи"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Auf welches Ereignis deutet Joh 3,14 die Schlange?",
          "sr": "На који догађај Јн 3,14 тумачи змију?"
        },
        "options": [
          {
            "de": "Die Kreuzigung Christi",
            "sr": "Распеће Христово"
          },
          {
            "de": "Die Geburt Christi",
            "sr": "Рођење Христово"
          },
          {
            "de": "Pfingsten",
            "sr": "Педесетницу"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-2chr6",
    "book": "chr",
    "order": 46,
    "title": {
      "de": "Salomos Gebet bei der Tempelweihe",
      "sr": "Соломонова молитва при освећењу храма"
    },
    "ref": {
      "de": "2. Chronik 6,12–21 und 7,1–3.14",
      "sr": "2. Дневника 6,12–21 и 7,1–3.14"
    },
    "intro": {
      "de": "Die Bücher der Chronik erzählen die Geschichte Israels von Adam bis zum Exil noch einmal, mit besonderem Blick auf den Tempel und den Gottesdienst. Ein Höhepunkt ist die Weihe des Tempels durch König Salomo.",
      "sr": "Књиге Дневника поново приповедају историју Израиља од Адама до изгнанства, са посебним освртом на храм и богослужење. Врхунац је освећење храма од цара Соломона."
    },
    "introTag": "history",
    "context": {
      "de": "David wollte Gott ein Haus bauen; sein Sohn Salomo vollendete den Tempel in Jerusalem. Nun wird die Bundeslade hineingetragen, und Salomo betet vor dem ganzen Volk.",
      "sr": "Давид је хтео да сагради дом Богу; његов син Соломон довршио је храм у Јерусалиму. Сада се уноси ковчег завета, а Соломон се моли пред свим народом."
    },
    "reading": [
      {
        "ref": {
          "de": "2 Chr 6,12–21",
          "sr": "2 Дн 6,12–21"
        },
        "note": {
          "de": "Die Himmel können dich nicht fassen.",
          "sr": "Небеса Те не могу обухватити."
        }
      },
      {
        "ref": {
          "de": "2 Chr 7,1–3",
          "sr": "2 Дн 7,1–3"
        },
        "note": {
          "de": "Die Herrlichkeit des Herrn erfüllt das Haus.",
          "sr": "Слава Господња испуни дом."
        }
      },
      {
        "ref": {
          "de": "2 Chr 7,14",
          "sr": "2 Дн 7,14"
        },
        "note": {
          "de": "Wenn mein Volk sich demütigt und betet.",
          "sr": "Ако се народ мој смири и помоли."
        }
      }
    ],
    "summary": {
      "de": "Salomo kniet vor dem Altar nieder, breitet die Hände zum Himmel aus und betet: Herr, Gott Israels, es gibt keinen Gott wie dich. Sollte Gott wirklich bei den Menschen auf der Erde wohnen? Die Himmel und aller Himmel Himmel können dich nicht fassen, wie viel weniger dieses Haus. Doch wende dich dem Gebet deines Knechtes zu: Lass deine Augen Tag und Nacht offen sein über diesem Haus; höre die Gebete, die hier gesprochen werden, und vergib. Als Salomo aufhört zu beten, fällt Feuer vom Himmel, und die Herrlichkeit des Herrn erfüllt das Haus. Gott verspricht: Wenn mein Volk sich demütigt, betet und umkehrt, will ich vom Himmel hören und vergeben.",
      "sr": "Соломон клече пред олтаром, пружа руке ка небу и моли се: Господе Боже Израиљев, нема Бога као што си Ти. Хоће ли заиста Бог становати са људима на земљи? Небеса и небеса над небесима не могу Те обухватити, а камоли овај дом. Ипак, погледај на молитву слуге свога: нека очи Твоје буду отворене дан и ноћ над овим домом; чуј молитве које се овде изговарају и опрости. Када Соломон престане да се моли, огањ сиђе с неба, и слава Господња испуни дом. Бог обећава: Ако се народ мој смири, помоли и обрати, чућу с неба и опростићу."
    },
    "interp": {
      "simple": {
        "de": "Gott ist größer als jedes Gebäude, und doch will er an einem Ort mit seinem Volk sein und Gebete hören. Demut und Umkehr öffnen den Weg zu seiner Vergebung.",
        "sr": "Бог је већи од сваке грађевине, а ипак жели да на једном месту буде са својим народом и да слуша молитве. Смирење и покајање отварају пут ка Његовом опроштају."
      },
      "deeper": {
        "de": "Die orthodoxe Kirche versteht den Kirchenraum als Haus Gottes und Ort seiner besonderen Gegenwart, ohne zu meinen, Gott sei darin eingeschlossen. Salomos Haltung – Knien, ausgebreitete Hände – entspricht alten Gebetsgesten. Die Herrlichkeit, die den Tempel erfüllt, findet ihre Vollendung in Christus, in dem die Fülle der Gottheit leibhaftig wohnt (Kol 2,9). 2 Chr 7,14 ist ein bekannter Vers über gemeinsame Umkehr eines ganzen Volkes.",
        "sr": "Православна Црква храм схвата као дом Божији и место Његовог посебног присуства, а не мисли да је Бог у њему затворен. Соломоново држање – клечање, раширене руке – одговара древним молитвеним покретима. Слава која испуњава храм налази испуњење у Христу, у коме обитава сва пунина Божанства телесно (Кол 2,9). 2 Дн 7,14 познат је стих о заједничком покајању целог народа."
      },
      "tag": "dogma"
    },
    "christ": {
      "de": "Christus nennt seinen Leib den Tempel (Joh 2,19–21). In ihm wohnt Gott wirklich unter den Menschen, und durch ihn werden die Gläubigen selbst zum Tempel des Heiligen Geistes (1 Kor 6,19).",
      "sr": "Христос своје тело назива храмом (Јн 2,19–21). У Њему Бог заиста борави међу људима, а кроз Њега и сами верни постају храм Духа Светога (1 Кор 6,19)."
    },
    "links": [
      {
        "ref": {
          "de": "Joh 2,19–21",
          "sr": "Јн 2,19–21"
        },
        "note": {
          "de": "Er sprach vom Tempel seines Leibes.",
          "sr": "Говораше за храм тела свога."
        }
      },
      {
        "ref": {
          "de": "1 Kor 6,19",
          "sr": "1 Кор 6,19"
        },
        "note": {
          "de": "Euer Leib ist ein Tempel des Heiligen Geistes.",
          "sr": "Тело ваше је храм Духа Светога."
        }
      },
      {
        "ref": {
          "de": "Apg 7,48–50",
          "sr": "Дап 7,48–50"
        },
        "note": {
          "de": "Der Höchste wohnt nicht in Werken von Händen.",
          "sr": "Вишњи не живи у рукотвореним храмовима."
        }
      }
    ],
    "fathers": {
      "de": "Für diese Version wurde kein einzelner freier Väterkommentar zu dieser Stelle geprüft; wörtliche Zitate gibt die App nicht wieder.",
      "sr": "За ово издање није проверен ниједан појединачан слободан коментар отаца на ово место; апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Was sagt Salomo über die Größe Gottes?",
          "sr": "Шта Соломон каже о величини Божијој?"
        },
        "a": {
          "de": "Selbst die Himmel können Gott nicht fassen, erst recht nicht der Tempel.",
          "sr": "Ни небеса не могу обухватити Бога, а камоли храм."
        }
      },
      {
        "q": {
          "de": "Was geschah nach Salomos Gebet?",
          "sr": "Шта се десило после Соломонове молитве?"
        },
        "a": {
          "de": "Feuer fiel vom Himmel, und die Herrlichkeit des Herrn erfüllte das Haus.",
          "sr": "Огањ је сишао с неба, и слава Господња испунила је дом."
        }
      },
      {
        "q": {
          "de": "Welche Bedingung nennt Gott in 2 Chr 7,14 für seine Vergebung?",
          "sr": "Који услов Бог наводи у 2 Дн 7,14 за свој опроштај?"
        },
        "a": {
          "de": "Dass das Volk sich demütigt, betet und umkehrt.",
          "sr": "Да се народ смири, помоли и обрати."
        }
      }
    ],
    "practice": {
      "de": "Wenn du das nächste Mal in eine Kirche gehst, nimm dir einen Moment, still zu stehen und zu sagen: „Herr, höre mein Gebet an diesem Ort.“",
      "sr": "Када следећи пут уђете у храм, одвојите тренутак да тихо станете и кажете: „Господе, чуј молитву моју на овом месту.“"
    },
    "review": {
      "de": "Salomo weiht den Tempel und bittet Gott, die Gebete dort zu hören. Die Herrlichkeit des Herrn erfüllt das Haus. Christus ist der wahre Tempel.",
      "sr": "Соломон освећује храм и моли Бога да чује молитве у њему. Слава Господња испуњава дом. Христос је истински храм."
    },
    "quiz": [
      {
        "q": {
          "de": "Wer weihte den Tempel in Jerusalem?",
          "sr": "Ко је осветио храм у Јерусалиму?"
        },
        "options": [
          {
            "de": "König Salomo",
            "sr": "Цар Соломон"
          },
          {
            "de": "König Saul",
            "sr": "Цар Саул"
          },
          {
            "de": "Mose",
            "sr": "Мојсије"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Was erfüllte nach dem Gebet das Haus?",
          "sr": "Шта је после молитве испунило дом?"
        },
        "options": [
          {
            "de": "Die Herrlichkeit des Herrn",
            "sr": "Слава Господња"
          },
          {
            "de": "Wasser",
            "sr": "Вода"
          },
          {
            "de": "Stille Dunkelheit",
            "sr": "Тиха тама"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Was nennt Christus nach Joh 2,21 den Tempel?",
          "sr": "Шта Христос по Јн 2,21 назива храмом?"
        },
        "options": [
          {
            "de": "Seinen Leib",
            "sr": "Своје тело"
          },
          {
            "de": "Den Berg Sinai",
            "sr": "Гору Синај"
          },
          {
            "de": "Das Haus des Petrus",
            "sr": "Петрову кућу"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-neh8",
    "book": "ezr",
    "order": 47,
    "title": {
      "de": "Esra liest das Gesetz vor",
      "sr": "Јездра чита Закон"
    },
    "ref": {
      "de": "Nehemia 8,1–12",
      "sr": "Немија 8,1–12"
    },
    "intro": {
      "de": "Die Bücher Esra und Nehemia erzählen von der Rückkehr aus dem babylonischen Exil, vom Wiederaufbau des Tempels und der Mauern Jerusalems. Nach dem Mauerbau versammelt sich das ganze Volk, um Gottes Wort zu hören.",
      "sr": "Књиге Јездре и Немије приповедају о повратку из вавилонског ропства, обнови храма и зидина Јерусалима. После градње зидина сав народ се сабира да чује реч Божију."
    },
    "introTag": "history",
    "context": {
      "de": "Viele Rückkehrer kannten das Gesetz kaum noch. Mauern allein machen noch kein Volk Gottes – dazu gehört das Hören und Verstehen seines Wortes.",
      "sr": "Многи повратници једва су још познавали Закон. Саме зидине још не чине народ Божији – за то је потребно слушање и разумевање Његове речи."
    },
    "reading": [
      {
        "ref": {
          "de": "Neh 8,1–6",
          "sr": "Нем 8,1–6"
        },
        "note": {
          "de": "Das Volk steht auf, als das Buch geöffnet wird.",
          "sr": "Народ устаје када се књига отвори."
        }
      },
      {
        "ref": {
          "de": "Neh 8,7–8",
          "sr": "Нем 8,7–8"
        },
        "note": {
          "de": "Die Leviten erklären den Sinn.",
          "sr": "Левити објашњавају смисао."
        }
      },
      {
        "ref": {
          "de": "Neh 8,9–12",
          "sr": "Нем 8,9–12"
        },
        "note": {
          "de": "Die Freude am Herrn ist eure Stärke.",
          "sr": "Радост Господња је ваша снага."
        }
      }
    ],
    "summary": {
      "de": "Das ganze Volk versammelt sich wie ein Mann auf dem Platz vor dem Wassertor. Der Priester und Schriftgelehrte Esra bringt das Buch des Gesetzes und liest daraus vom Morgen bis zum Mittag vor. Als er das Buch öffnet, steht das ganze Volk auf. Esra preist den Herrn, und alle antworten: Amen, Amen! Die Leviten erklären das Gesetz, sodass das Volk verstand, was vorgelesen wurde. Das Volk weint, als es die Worte hört. Doch Nehemia und Esra sagen: Dieser Tag ist dem Herrn heilig; seid nicht traurig, denn die Freude am Herrn ist eure Stärke. Da geht das Volk hin, um zu essen, zu teilen und ein großes Freudenfest zu feiern.",
      "sr": "Сав народ сабира се као један човек на тргу пред Воденим вратима. Свештеник и књижевник Јездра доноси књигу Закона и чита из ње од јутра до подне. Када отвори књигу, сав народ устаје. Јездра благосиља Господа, а сви одговарају: Амин, амин! Левити објашњавају Закон, тако да је народ разумео шта се читало. Народ плаче када чује речи. Али Немија и Јездра кажу: Овај дан је свет Господу; не тугујте, јер радост Господња је ваша снага. Тада народ одлази да једе, да дели и да слави велико весеље."
    },
    "interp": {
      "simple": {
        "de": "Gottes Wort will gehört und verstanden werden. Es kann zu Tränen der Reue führen – aber am Ende schenkt es Freude und Kraft.",
        "sr": "Реч Божија жели да буде саслушана и схваћена. Може довести до суза покајања – али на крају дарује радост и снагу."
      },
      "deeper": {
        "de": "Diese Szene ähnelt in vielem dem christlichen Gottesdienst: Das Volk steht, wenn das Wort Gottes gelesen wird, antwortet mit „Amen“, und die Lesung wird ausgelegt. Auch in der Liturgie steht die Gemeinde beim Evangelium, und die Predigt erklärt die Schrift. Neh 8,8 zeigt, dass die Kirche die Schrift nie nur vorliest, sondern im Glauben der Gemeinschaft erklärt. Das Weinen und die Freude gehören zusammen wie Umkehr und Fest.",
        "sr": "Овај призор у много чему личи на хришћанско богослужење: народ стоји када се чита реч Божија, одговара са „Амин“, а читање се тумачи. И на Литургији сабрање стоји при Јеванђељу, а проповед објашњава Писмо. Нем 8,8 показује да Црква Писмо никад само не чита, него га тумачи у вери заједнице. Плач и радост иду заједно као покајање и празник."
      },
      "tag": "counsel"
    },
    "christ": {
      "de": "In der Synagoge von Nazareth las Christus aus dem Buch Jesaja vor und erklärte: Heute ist dieses Schriftwort erfüllt (Lk 4,16–21). Er selbst ist das lebendige Wort Gottes.",
      "sr": "У синагоги у Назарету Христос је читао из књиге Исаије и објаснио: Данас се испуни ово писмо (Лк 4,16–21). Он сам је жива Реч Божија."
    },
    "links": [
      {
        "ref": {
          "de": "Lk 4,16–21",
          "sr": "Лк 4,16–21"
        },
        "note": {
          "de": "Heute ist dieses Schriftwort erfüllt.",
          "sr": "Данас се испуни ово писмо."
        }
      },
      {
        "ref": {
          "de": "Lk 24,27",
          "sr": "Лк 24,27"
        },
        "note": {
          "de": "Er legte ihnen die Schrift aus.",
          "sr": "Тумачио им је Писмо."
        }
      },
      {
        "ref": {
          "de": "Apg 8,30–31",
          "sr": "Дап 8,30–31"
        },
        "note": {
          "de": "Wie kann ich verstehen, wenn mich niemand anleitet?",
          "sr": "Како бих могао разумети ако ме ко не упути?"
        }
      }
    ],
    "fathers": {
      "de": "Für diese Version wurde kein einzelner freier Väterkommentar zu dieser Stelle geprüft; wörtliche Zitate gibt die App nicht wieder.",
      "sr": "За ово издање није проверен ниједан појединачан слободан коментар отаца на ово место; апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Was tat das Volk, als Esra das Buch öffnete?",
          "sr": "Шта је народ учинио када је Јездра отворио књигу?"
        },
        "a": {
          "de": "Es stand auf.",
          "sr": "Устао је."
        }
      },
      {
        "q": {
          "de": "Welche Aufgabe hatten die Leviten?",
          "sr": "Који задатак су имали левити?"
        },
        "a": {
          "de": "Sie erklärten das Gesetz, damit das Volk es verstand.",
          "sr": "Објашњавали су Закон да би га народ разумео."
        }
      },
      {
        "q": {
          "de": "Was ist nach Neh 8,10 die Stärke des Volkes?",
          "sr": "Шта је, по Нем 8,10, снага народа?"
        },
        "a": {
          "de": "Die Freude am Herrn.",
          "sr": "Радост Господња."
        }
      }
    ],
    "practice": {
      "de": "Lies diese Woche das Evangelium des kommenden Sonntags vorher zu Hause. Wenn dir etwas unklar ist, notiere es und frage deinen Priester.",
      "sr": "Прочитајте ове недеље унапред код куће Јеванђеље наредне недеље. Ако вам нешто није јасно, запишите и питајте свештеника."
    },
    "review": {
      "de": "Esra liest dem Volk das Gesetz vor, die Leviten erklären es. Das Volk weint, doch die Freude am Herrn ist seine Stärke.",
      "sr": "Јездра чита народу Закон, левити га објашњавају. Народ плаче, али радост Господња је његова снага."
    },
    "quiz": [
      {
        "q": {
          "de": "Wer las dem Volk das Gesetz vor?",
          "sr": "Ко је народу читао Закон?"
        },
        "options": [
          {
            "de": "Esra",
            "sr": "Јездра"
          },
          {
            "de": "Jona",
            "sr": "Јона"
          },
          {
            "de": "David",
            "sr": "Давид"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Wie lange las er vor?",
          "sr": "Колико дуго је читао?"
        },
        "options": [
          {
            "de": "Vom Morgen bis zum Mittag",
            "sr": "Од јутра до подне"
          },
          {
            "de": "Drei Tage",
            "sr": "Три дана"
          },
          {
            "de": "Eine Minute",
            "sr": "Један минут"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Womit antwortete das Volk auf den Lobpreis?",
          "sr": "Чиме је народ одговорио на благосиљање?"
        },
        "options": [
          {
            "de": "Amen, Amen",
            "sr": "Амин, амин"
          },
          {
            "de": "Mit Schweigen",
            "sr": "Ћутањем"
          },
          {
            "de": "Mit Protest",
            "sr": "Протестом"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-bar3",
    "book": "bar",
    "order": 48,
    "title": {
      "de": "Gott erschien auf Erden",
      "sr": "Бог се јави на земљи"
    },
    "ref": {
      "de": "Baruch 3,9–4,4",
      "sr": "Варух 3,9–4,4"
    },
    "intro": {
      "de": "Das Buch Baruch wird nach der Überlieferung Baruch, dem Schreiber des Propheten Jeremia, zugeschrieben. Es gehört zu den Büchern der Septuaginta. Der Abschnitt 3,9–4,4 ist ein Lob der göttlichen Weisheit.",
      "sr": "Књига пророка Варуха се, према предању, приписује Варуху, писару пророка Јеремије. Спада у књиге Септуагинте. Одељак 3,9–4,4 је похвала божанској мудрости."
    },
    "introTag": "uncertain",
    "context": {
      "de": "Israel lebt in der Verbannung und fragt, warum es so weit gekommen ist. Die Antwort: Es hat die Quelle der Weisheit verlassen.",
      "sr": "Израиљ живи у изгнанству и пита зашто је дотле дошло. Одговор: оставио је извор мудрости."
    },
    "reading": [
      {
        "ref": {
          "de": "Bar 3,9–14",
          "sr": "Вар 3,9–14"
        },
        "note": {
          "de": "Höre, Israel, die Gebote des Lebens.",
          "sr": "Чуј, Израиљу, заповести живота."
        }
      },
      {
        "ref": {
          "de": "Bar 3,29–38",
          "sr": "Вар 3,29–38"
        },
        "note": {
          "de": "Danach erschien sie auf Erden.",
          "sr": "Потом се јави на земљи."
        }
      },
      {
        "ref": {
          "de": "Bar 4,1–4",
          "sr": "Вар 4,1–4"
        },
        "note": {
          "de": "Selig sind wir, Israel.",
          "sr": "Блажени смо, Израиљу."
        }
      }
    ],
    "summary": {
      "de": "Höre, Israel, die Gebote des Lebens! Warum bist du im Land der Feinde? Weil du die Quelle der Weisheit verlassen hast; wärst du auf Gottes Weg gegangen, würdest du in Frieden wohnen. Wer ist in den Himmel hinaufgestiegen und hat die Weisheit geholt? Keiner kennt ihren Weg, doch der Allwissende kennt sie. Er ist unser Gott, kein anderer ist mit ihm zu vergleichen. Er hat den ganzen Weg der Erkenntnis gefunden und ihn Jakob, seinem Knecht, gegeben. Danach erschien er auf Erden und verkehrte unter den Menschen. Die Weisheit ist das Buch der Gebote Gottes; wer an ihr festhält, wird leben.",
      "sr": "Чуј, Израиљу, заповести живота! Зашто си у земљи непријатеља? Зато што си оставио извор мудрости; да си ходио путем Божијим, живео би у миру. Ко се попео на небо и донео мудрост? Нико не зна њен пут, али Свезнајући је зна. Он је Бог наш, нико се с Њим не може упоредити. Нашао је сав пут знања и дао га Јакову, слуги своме. Потом се јави на земљи и поживе међу људима. Мудрост је књига заповести Божијих; ко је се држи, живеће."
    },
    "interp": {
      "simple": {
        "de": "Wahre Weisheit kommt von Gott. Wer sich von ihm abwendet, verliert den Weg; wer seine Gebote hält, findet das Leben.",
        "sr": "Права мудрост долази од Бога. Ко се од Њега одврати, губи пут; ко држи Његове заповести, налази живот."
      },
      "deeper": {
        "de": "Der Satz „Danach erschien er auf Erden und verkehrte unter den Menschen“ (Bar 3,38 LXX) wird von den Kirchenvätern als Weissagung der Menschwerdung gelesen. Bar 3,36–4,4 gehört zu den alttestamentlichen Lesungen am Vorabend von Christi Geburt. Ob sich der griechische Satz ursprünglich auf Gott oder auf die Weisheit bezieht, wird unterschiedlich verstanden; die kirchliche Lesung bezieht ihn auf den menschgewordenen Sohn Gottes.",
        "sr": "Реченицу „Потом се јави на земљи и поживе међу људима“ (Вар 3,38 по Септуагинти) свети оци читају као пророштво оваплоћења. Вар 3,36–4,4 спада у старозаветна читања уочи Рождества Христовог. Да ли се грчка реченица првобитно односи на Бога или на мудрост, схвата се различито; црквено читање је односи на оваплоћеног Сина Божијег."
      },
      "tag": "opinion"
    },
    "christ": {
      "de": "Christus ist die Weisheit Gottes in Person, die auf Erden erschien und unter den Menschen lebte: „Das Wort ist Fleisch geworden und hat unter uns gewohnt“ (Joh 1,14).",
      "sr": "Христос је Премудрост Божија у личности, која се јави на земљи и поживе међу људима: „И Реч постаде тело и настани се међу нама“ (Јн 1,14)."
    },
    "links": [
      {
        "ref": {
          "de": "Joh 1,14",
          "sr": "Јн 1,14"
        },
        "note": {
          "de": "Das Wort ist Fleisch geworden.",
          "sr": "Реч постаде тело."
        }
      },
      {
        "ref": {
          "de": "1 Kor 1,24",
          "sr": "1 Кор 1,24"
        },
        "note": {
          "de": "Christus, Gottes Weisheit.",
          "sr": "Христос, Божија премудрост."
        }
      },
      {
        "ref": {
          "de": "Röm 10,6–8",
          "sr": "Рим 10,6–8"
        },
        "note": {
          "de": "Wer wird in den Himmel hinaufsteigen?",
          "sr": "Ко ће узићи на небо?"
        }
      }
    ],
    "fathers": {
      "de": "Mehrere Väter führen Bar 3,36–38 als Zeugnis für die Gottheit Christi an. Für diese Version wurde kein einzelner freier Link zu diesen Stellen geprüft; wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Више отаца наводи Вар 3,36–38 као сведочанство о Христовом Божанству. За ово издање није проверена појединачна слободна веза ка тим местима; апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Warum lebt Israel nach Baruch in der Fremde?",
          "sr": "Зашто, по Варуху, Израиљ живи у туђини?"
        },
        "a": {
          "de": "Weil es die Quelle der Weisheit verlassen hat.",
          "sr": "Зато што је оставио извор мудрости."
        }
      },
      {
        "q": {
          "de": "Wie lesen die Väter Bar 3,38?",
          "sr": "Како оци читају Вар 3,38?"
        },
        "a": {
          "de": "Als Weissagung der Menschwerdung Christi.",
          "sr": "Као пророштво оваплоћења Христовог."
        }
      },
      {
        "q": {
          "de": "Wann liest die Kirche Bar 3,36–4,4?",
          "sr": "Када Црква чита Вар 3,36–4,4?"
        },
        "a": {
          "de": "Am Vorabend von Christi Geburt.",
          "sr": "Уочи Рождества Христовог."
        }
      }
    ],
    "practice": {
      "de": "Denke diese Woche über Joh 1,14 nach: Gott ist einer von uns geworden. Wo kannst du ihm heute in einem Menschen begegnen?",
      "sr": "Размишљајте ове недеље о Јн 1,14: Бог је постао један од нас. Где Га данас можете срести у неком човеку?"
    },
    "review": {
      "de": "Baruch lobt die Weisheit Gottes, die Israel verlassen hat. Der Satz „Er erschien auf Erden“ wird von der Kirche auf die Menschwerdung bezogen.",
      "sr": "Варух хвали мудрост Божију, коју је Израиљ оставио. Реченицу „Јави се на земљи“ Црква односи на оваплоћење."
    },
    "quiz": [
      {
        "q": {
          "de": "Wessen Schreiber war Baruch nach der Überlieferung?",
          "sr": "Чији писар је, према предању, био Варух?"
        },
        "options": [
          {
            "de": "Des Propheten Jeremia",
            "sr": "Пророка Јеремије"
          },
          {
            "de": "König Davids",
            "sr": "Цара Давида"
          },
          {
            "de": "Des Apostels Paulus",
            "sr": "Апостола Павла"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "An welchem Fest wird Bar 3,36–4,4 gelesen?",
          "sr": "На који празник се чита Вар 3,36–4,4?"
        },
        "options": [
          {
            "de": "Am Vorabend von Christi Geburt",
            "sr": "Уочи Рождества Христовог"
          },
          {
            "de": "An Pfingsten",
            "sr": "На Педесетницу"
          },
          {
            "de": "Am Großen Freitag",
            "sr": "На Велики петак"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Was ist nach Bar 4,1 die Weisheit?",
          "sr": "Шта је, по Вар 4,1, мудрост?"
        },
        "options": [
          {
            "de": "Das Buch der Gebote Gottes",
            "sr": "Књига заповести Божијих"
          },
          {
            "de": "Reichtum",
            "sr": "Богатство"
          },
          {
            "de": "Macht",
            "sr": "Моћ"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-esd4",
    "book": "esd",
    "order": 49,
    "title": {
      "de": "Die Wahrheit ist am stärksten",
      "sr": "Истина је најјача"
    },
    "ref": {
      "de": "3. Esra (1. Esdras) 3,1–4,41",
      "sr": "2. Јездрина (1. Ездра) 3,1–4,41"
    },
    "intro": {
      "de": "Dieses Buch steht in der Septuaginta; in orthodoxen Bibeln heißt es je nach Ausgabe „1. Esdras“, „2. Esra“ oder „3. Esra“. Eigenständig ist die Erzählung vom Wettstreit dreier Leibwächter am Hof des Perserkönigs Darius.",
      "sr": "Ова књига стоји у Септуагинти; у православним Библијама зове се, зависно од издања, „1. Ездра“, „Друга Јездрина“ или „Трећа Јездрина“. Самостална је повест о надметању три телохранитеља на двору персијског цара Дарија."
    },
    "introTag": "uncertain",
    "context": {
      "de": "Die Juden lebten noch unter persischer Herrschaft; der Tempel in Jerusalem lag in Trümmern. Einer der drei jungen Leibwächter ist Serubbabel, der später die Heimkehr anführt.",
      "sr": "Јудејци су још живели под персијском влашћу; храм у Јерусалиму био је у рушевинама. Један од три млада телохранитеља је Зоровавељ, који касније предводи повратак."
    },
    "reading": [
      {
        "ref": {
          "de": "3 Esra 3,1–12",
          "sr": "2 Језд 3,1–12"
        },
        "note": {
          "de": "Was ist das Stärkste?",
          "sr": "Шта је најјаче?"
        }
      },
      {
        "ref": {
          "de": "3 Esra 4,13–32",
          "sr": "2 Језд 4,13–32"
        },
        "note": {
          "de": "Frauen sind stark – doch …",
          "sr": "Жене су јаке – али …"
        }
      },
      {
        "ref": {
          "de": "3 Esra 4,33–41",
          "sr": "2 Језд 4,33–41"
        },
        "note": {
          "de": "Groß ist die Wahrheit.",
          "sr": "Велика је истина."
        }
      }
    ],
    "summary": {
      "de": "Drei junge Leibwächter des Königs Darius schreiben je eine Antwort auf die Frage, was das Stärkste sei. Der erste schreibt: der Wein, denn er verwirrt jeden Verstand. Der zweite: der König, denn ihm gehorchen alle. Der dritte, Serubbabel, schreibt: die Frauen sind stärker, über allem aber siegt die Wahrheit. Er erklärt: Wein, König, Frauen und alle Menschen sind ungerecht und vergänglich; die Wahrheit aber bleibt und ist stark in Ewigkeit; bei ihr gibt es kein Ansehen der Person. Da ruft das ganze Volk: Groß ist die Wahrheit und stärker als alles! Der König ehrt Serubbabel und erlaubt ihm, Jerusalem und den Tempel wieder aufzubauen.",
      "sr": "Три млада телохранитеља цара Дарија пишу сваки по један одговор на питање шта је најјаче. Први пише: вино, јер помути сваки ум. Други: цар, јер га сви слушају. Трећи, Зоровавељ, пише: жене су јаче, а изнад свега побеђује истина. Објашњава: вино, цар, жене и сви људи су неправедни и пролазни; истина пак остаје и јака је довека; код ње нема гледања ко је ко. Тада сав народ виче: Велика је истина и јача од свега! Цар одаје почаст Зоровавељу и дозвољава му да обнови Јерусалим и храм."
    },
    "interp": {
      "simple": {
        "de": "Macht, Genuss und menschliche Liebe sind stark, aber vergänglich. Die Wahrheit bleibt. Wer an der Wahrheit festhält, steht auf festem Grund.",
        "sr": "Моћ, уживање и људска љубав су јаки, али пролазни. Истина остаје. Ко се држи истине, стоји на чврстом темељу."
      },
      "deeper": {
        "de": "Die Erzählung ist eine Weisheitsgeschichte, die zeigt, dass Gottes Wahrheit über menschlichen Mächten steht. Für Christen erhält sie eine tiefere Bedeutung, weil Christus von sich sagt: „Ich bin der Weg, die Wahrheit und das Leben“ (Joh 14,6). Die Stellung des Buches im Kanon ist in den orthodoxen Kirchen nicht einheitlich: Es steht in der Septuaginta und in vielen orthodoxen Bibeln, wird aber im Gottesdienst kaum gelesen.",
        "sr": "Повест је прича мудрости која показује да Божија истина стоји изнад људских сила. За хришћане добија дубље значење, јер Христос каже о себи: „Ја сам пут и истина и живот“ (Јн 14,6). Место књиге у канону није јединствено у православним Црквама: стоји у Септуагинти и у многим православним Библијама, али се на богослужењу ретко чита."
      },
      "tag": "uncertain"
    },
    "christ": {
      "de": "Vor Pilatus, dem Vertreter der Macht, bezeugt Christus: „Ich bin dazu geboren, dass ich für die Wahrheit Zeugnis ablege“ (Joh 18,37). Er ist die Wahrheit in Person.",
      "sr": "Пред Пилатом, представником власти, Христос сведочи: „Ја сам за то рођен да сведочим за истину“ (Јн 18,37). Он је Истина у личности."
    },
    "links": [
      {
        "ref": {
          "de": "Joh 14,6",
          "sr": "Јн 14,6"
        },
        "note": {
          "de": "Ich bin der Weg, die Wahrheit und das Leben.",
          "sr": "Ја сам пут и истина и живот."
        }
      },
      {
        "ref": {
          "de": "Joh 18,37–38",
          "sr": "Јн 18,37–38"
        },
        "note": {
          "de": "Was ist Wahrheit?",
          "sr": "Шта је истина?"
        }
      },
      {
        "ref": {
          "de": "Joh 8,32",
          "sr": "Јн 8,32"
        },
        "note": {
          "de": "Die Wahrheit wird euch frei machen.",
          "sr": "Истина ће вас ослободити."
        }
      }
    ],
    "fathers": {
      "de": "Für diese Version wurde kein einzelner freier Väterkommentar zu dieser Stelle geprüft; wörtliche Zitate gibt die App nicht wieder.",
      "sr": "За ово издање није проверен ниједан појединачан слободан коментар отаца на ово место; апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Welche vier Antworten werden im Wettstreit genannt?",
          "sr": "Која четири одговора се наводе у надметању?"
        },
        "a": {
          "de": "Wein, König, Frauen – und über allem die Wahrheit.",
          "sr": "Вино, цар, жене – а изнад свега истина."
        }
      },
      {
        "q": {
          "de": "Warum siegt nach Serubbabel die Wahrheit?",
          "sr": "Зашто, по Зоровавељу, побеђује истина?"
        },
        "a": {
          "de": "Weil alles andere vergänglich und ungerecht ist, die Wahrheit aber in Ewigkeit bleibt.",
          "sr": "Зато што је све остало пролазно и неправедно, а истина остаје довека."
        }
      },
      {
        "q": {
          "de": "Was erlaubte der König Serubbabel?",
          "sr": "Шта је цар дозволио Зоровавељу?"
        },
        "a": {
          "de": "Jerusalem und den Tempel wieder aufzubauen.",
          "sr": "Да обнови Јерусалим и храм."
        }
      }
    ],
    "practice": {
      "de": "Achte diese Woche darauf, auch in kleinen Dingen ehrlich zu sein – keine „kleinen Notlügen“. Bete dazu: „Herr, führe mich in deiner Wahrheit.“",
      "sr": "Пазите ове недеље да будете искрени и у малим стварима – без „малих лажи“. Молите се: „Господе, води ме у истини Твојој.“"
    },
    "review": {
      "de": "Im Wettstreit am Perserhof siegt die Wahrheit über Wein, König und Frauen. Serubbabel darf Jerusalem wieder aufbauen. Christus ist die Wahrheit.",
      "sr": "У надметању на персијском двору истина побеђује вино, цара и жене. Зоровавељ сме да обнови Јерусалим. Христос је Истина."
    },
    "quiz": [
      {
        "q": {
          "de": "Am Hof welches Königs fand der Wettstreit statt?",
          "sr": "На двору ког цара се одиграло надметање?"
        },
        "options": [
          {
            "de": "Darius",
            "sr": "Дарија"
          },
          {
            "de": "Nebukadnezar",
            "sr": "Навуходоносора"
          },
          {
            "de": "Herodes",
            "sr": "Ирода"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Was ist nach Serubbabel am stärksten?",
          "sr": "Шта је, по Зоровавељу, најјаче?"
        },
        "options": [
          {
            "de": "Die Wahrheit",
            "sr": "Истина"
          },
          {
            "de": "Der Wein",
            "sr": "Вино"
          },
          {
            "de": "Der König",
            "sr": "Цар"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Was sagt Christus in Joh 14,6?",
          "sr": "Шта Христос каже у Јн 14,6?"
        },
        "options": [
          {
            "de": "Ich bin der Weg, die Wahrheit und das Leben",
            "sr": "Ја сам пут и истина и живот"
          },
          {
            "de": "Ich bin der König der Welt",
            "sr": "Ја сам цар света"
          },
          {
            "de": "Ich bin ein Lehrer",
            "sr": "Ја сам учитељ"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-mt25",
    "book": "mt",
    "order": 50,
    "title": {
      "de": "Das Weltgericht",
      "sr": "Страшни суд"
    },
    "ref": {
      "de": "Matthäus 25,31–46",
      "sr": "Матеј 25,31–46"
    },
    "intro": {
      "de": "Am Ende seiner Reden im Matthäusevangelium spricht Christus vom Jüngsten Gericht. Die Kirche liest diesen Abschnitt am Sonntag vom Jüngsten Gericht, eine Woche vor Beginn der Großen Fastenzeit.",
      "sr": "На крају својих беседа у Јеванђељу по Матеју Христос говори о Страшном суду. Црква чита овај одељак у Недељу месопусну (о Страшном суду), недељу дана пре почетка Великог поста."
    },
    "introTag": "history",
    "context": {
      "de": "Wenige Tage vor seinem Leiden spricht Jesus mit den Jüngern über das Ende der Zeit. Vorher stehen die Gleichnisse von den zehn Jungfrauen und von den anvertrauten Talenten.",
      "sr": "Неколико дана пре свог страдања Исус говори ученицима о крају времена. Претходе приче о десет девојака и о повереним талантима."
    },
    "reading": [
      {
        "ref": {
          "de": "Mt 25,31–40",
          "sr": "Мт 25,31–40"
        },
        "note": {
          "de": "Was ihr einem dieser Geringsten getan habt.",
          "sr": "Што учинисте једноме од ове моје најмање браће."
        }
      },
      {
        "ref": {
          "de": "Mt 25,41–46",
          "sr": "Мт 25,41–46"
        },
        "note": {
          "de": "Was ihr nicht getan habt.",
          "sr": "Што не учинисте."
        }
      }
    ],
    "summary": {
      "de": "Wenn der Menschensohn in seiner Herrlichkeit kommt, werden alle Völker vor ihm versammelt, und er scheidet sie wie ein Hirt die Schafe von den Böcken. Zu denen zu seiner Rechten sagt er: Kommt, ihr Gesegneten, erbt das Reich; denn ich war hungrig, und ihr habt mir zu essen gegeben, durstig, fremd, nackt, krank und im Gefängnis, und ihr habt mir geholfen. Sie fragen erstaunt: Wann haben wir dich so gesehen? Er antwortet: Was ihr einem dieser meiner geringsten Brüder getan habt, das habt ihr mir getan. Zu denen zur Linken sagt er das Gegenteil: Was ihr einem dieser Geringsten nicht getan habt, das habt ihr mir nicht getan.",
      "sr": "Када Син Човечији дође у слави својој, сабраће се пред Њим сви народи, и раздвојиће их као пастир овце од јараца. Онима с десне стране рећи ће: Ходите, благословени, наследите Царство; јер огладнех, и дадосте ми да једем, ожеднех, бејах странац, наг, болестан и у тамници, и помогосте ми. Они ће зачуђено питати: Кад те видесмо таквог? Он ће одговорити: Што учинисте једноме од ове моје најмање браће, мени учинисте. Онима с леве стране рећи ће супротно: Што не учинисте једноме од ових најмањих, ни мени не учинисте."
    },
    "interp": {
      "simple": {
        "de": "Christus begegnet uns in jedem Menschen, der Hilfe braucht. Am Ende fragt er nicht nach großen Worten, sondern nach der Liebe, die wir im Alltag gezeigt haben.",
        "sr": "Христос нам долази у сусрет у сваком човеку коме је потребна помоћ. На крају не пита за велике речи, него за љубав коју смо показали у свакодневици."
      },
      "deeper": {
        "de": "Auffällig ist, dass beide Gruppen überrascht sind: Die Gerechten haben nicht aus Berechnung geholfen, sondern aus Liebe. Die Werke der Barmherzigkeit – Hungrige speisen, Fremde aufnehmen, Kranke und Gefangene besuchen – gehören seit jeher zur christlichen Praxis. Dass die Kirche diesen Text vor der Fastenzeit liest, zeigt: Fasten ohne Barmherzigkeit verfehlt sein Ziel. Die Ikone des Jüngsten Gerichts stellt diese Szene oft an der Westwand der Kirchen dar.",
        "sr": "Упадљиво је да су обе групе изненађене: праведници нису помагали из рачуна, него из љубави. Дела милосрђа – нахранити гладне, примити странце, посетити болесне и затворене – од почетка припадају хришћанској пракси. То што Црква чита овај текст пред пост показује: пост без милосрђа промашује свој циљ. Икона Страшног суда често приказује овај призор на западном зиду храмова."
      },
      "tag": "dogma"
    },
    "christ": {
      "de": "Christus ist der Richter, aber zugleich der, der sich mit den Armen eins macht. Er, der für uns arm wurde (2 Kor 8,9), lässt sich in den Geringsten finden.",
      "sr": "Христос је Судија, али уједно и онај који се поистовећује са сиромашнима. Он, који је ради нас осиромашио (2 Кор 8,9), даје се пронаћи у најмањима."
    },
    "links": [
      {
        "ref": {
          "de": "Jak 2,14–17",
          "sr": "Јак 2,14–17"
        },
        "note": {
          "de": "Glaube ohne Werke ist tot.",
          "sr": "Вера без дела је мртва."
        }
      },
      {
        "ref": {
          "de": "1 Joh 3,17–18",
          "sr": "1 Јн 3,17–18"
        },
        "note": {
          "de": "Lasst uns lieben in Tat und Wahrheit.",
          "sr": "Да љубимо делом и истином."
        }
      },
      {
        "ref": {
          "de": "Spr 19,17",
          "sr": "Прич 19,17"
        },
        "note": {
          "de": "Wer sich des Armen erbarmt, leiht dem Herrn.",
          "sr": "Ко поклања сиромаху, позајмљује Господу."
        }
      }
    ],
    "fathers": {
      "de": "Der hl. Johannes Chrysostomus legt Mt 25 in seinen Homilien zum Matthäusevangelium aus (Homilie 79, englisch in NPNF I/10) und betont dort, dass Christus im Armen geehrt werden will. Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Свети Јован Златоуст тумачи Мт 25 у беседама на Јеванђеље по Матеју (беседа 79, на енглеском у NPNF I/10) и наглашава да Христос жели да буде поштован у сиромаху. Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Wonach fragt der Richter in Mt 25?",
          "sr": "За шта Судија пита у Мт 25?"
        },
        "a": {
          "de": "Nach den Werken der Barmherzigkeit an den Geringsten.",
          "sr": "За дела милосрђа према најмањима."
        }
      },
      {
        "q": {
          "de": "Warum sind auch die Gerechten überrascht?",
          "sr": "Зашто су и праведници изненађени?"
        },
        "a": {
          "de": "Weil sie nicht aus Berechnung, sondern aus Liebe geholfen haben.",
          "sr": "Зато што нису помагали из рачуна, него из љубави."
        }
      },
      {
        "q": {
          "de": "Wann liest die Kirche diesen Text?",
          "sr": "Када Црква чита овај текст?"
        },
        "a": {
          "de": "Am Sonntag vom Jüngsten Gericht, vor der Großen Fastenzeit.",
          "sr": "У Недељу месопусну (о Страшном суду), пред Велики пост."
        }
      }
    ],
    "practice": {
      "de": "Wähle diese Woche ein Werk der Barmherzigkeit aus Mt 25: jemanden besuchen, der krank oder allein ist, oder einem Bedürftigen helfen.",
      "sr": "Изаберите ове недеље једно дело милосрђа из Мт 25: посетите некога ко је болестан или сам, или помозите неком у невољи."
    },
    "review": {
      "de": "Am Ende richtet Christus nach der Liebe zu den Geringsten: Was wir ihnen tun, tun wir ihm.",
      "sr": "На крају Христос суди по љубави према најмањима: што њима чинимо, Њему чинимо."
    },
    "quiz": [
      {
        "q": {
          "de": "Womit vergleicht Christus die Scheidung der Völker?",
          "sr": "Са чим Христос упоређује раздвајање народа?"
        },
        "options": [
          {
            "de": "Mit einem Hirten, der Schafe und Böcke trennt",
            "sr": "Са пастиром који раздваја овце и јарце"
          },
          {
            "de": "Mit einer Ernte",
            "sr": "Са жетвом"
          },
          {
            "de": "Mit einem Fischernetz",
            "sr": "Са рибарском мрежом"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "An welchem Sonntag wird Mt 25,31–46 gelesen?",
          "sr": "Које недеље се чита Мт 25,31–46?"
        },
        "options": [
          {
            "de": "Sonntag vom Jüngsten Gericht",
            "sr": "У Недељу месопусну (о Страшном суду)"
          },
          {
            "de": "Ostersonntag",
            "sr": "На Васкрс"
          },
          {
            "de": "Palmsonntag",
            "sr": "На Цвети"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Wem tun wir Gutes, wenn wir den Geringsten helfen?",
          "sr": "Коме чинимо добро када помажемо најмањима?"
        },
        "options": [
          {
            "de": "Christus selbst",
            "sr": "Самом Христу"
          },
          {
            "de": "Nur uns selbst",
            "sr": "Само себи"
          },
          {
            "de": "Niemandem",
            "sr": "Никоме"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-jn6",
    "book": "jn",
    "order": 51,
    "title": {
      "de": "Ich bin das Brot des Lebens",
      "sr": "Ја сам хлеб живота"
    },
    "ref": {
      "de": "Johannes 6,1–14 und 6,35–58",
      "sr": "Јован 6,1–14 и 6,35–58"
    },
    "intro": {
      "de": "Johannes 6 beginnt mit der Speisung der Fünftausend und führt dann zu einer großen Rede Jesu in der Synagoge von Kafarnaum. Darin spricht er von sich als dem Brot des Lebens.",
      "sr": "Јован 6 почиње умножењем хлебова за пет хиљада, а затим води до велике Исусове беседе у синагоги у Капернауму. У њој говори о себи као хлебу живота."
    },
    "introTag": "history",
    "context": {
      "de": "Es ist kurz vor dem Paschafest. Die Menge folgt Jesus, weil sie seine Zeichen gesehen hat. Nach der Speisung wollen sie ihn zum König machen; er aber zieht sich zurück.",
      "sr": "Близу је Пасха. Народ иде за Исусом јер је видео Његове знаке. После умножења хлебова хоће да Га учине царем; Он се пак повлачи."
    },
    "reading": [
      {
        "ref": {
          "de": "Joh 6,1–14",
          "sr": "Јн 6,1–14"
        },
        "note": {
          "de": "Fünf Brote und zwei Fische.",
          "sr": "Пет хлебова и две рибе."
        }
      },
      {
        "ref": {
          "de": "Joh 6,35–40",
          "sr": "Јн 6,35–40"
        },
        "note": {
          "de": "Wer zu mir kommt, wird nicht hungern.",
          "sr": "Ко долази к мени неће огладнети."
        }
      },
      {
        "ref": {
          "de": "Joh 6,51–58",
          "sr": "Јн 6,51–58"
        },
        "note": {
          "de": "Mein Fleisch ist wahre Speise.",
          "sr": "Тело моје је право јело."
        }
      }
    ],
    "summary": {
      "de": "Ein Junge hat fünf Gerstenbrote und zwei Fische. Jesus nimmt die Brote, dankt und lässt sie austeilen; alle werden satt, und zwölf Körbe bleiben übrig. Am nächsten Tag sagt Jesus: Ich bin das Brot des Lebens; wer zu mir kommt, wird nie mehr hungern. Eure Väter haben in der Wüste das Manna gegessen und sind gestorben; ich bin das lebendige Brot, das vom Himmel herabgekommen ist. Das Brot, das ich geben werde, ist mein Fleisch für das Leben der Welt. Wer mein Fleisch isst und mein Blut trinkt, hat ewiges Leben, und ich werde ihn auferwecken am letzten Tag. Viele Jünger nehmen Anstoß und gehen weg. Petrus aber sagt: Herr, zu wem sollen wir gehen? Du hast Worte des ewigen Lebens.",
      "sr": "Један дечак има пет јечмених хлебова и две рибе. Исус узима хлебове, благодари и даје да се поделе; сви се насите, и остане дванаест котарица. Сутрадан Исус каже: Ја сам хлеб живота; ко долази к мени неће огладнети. Оци ваши једоше ману у пустињи и помреше; ја сам хлеб живи који сиђе с неба. Хлеб који ћу ја дати јесте тело моје за живот света. Ко једе моје тело и пије моју крв има живот вечни, и ја ћу га васкрснути у последњи дан. Многи ученици се саблазне и оду. А Петар каже: Господе, коме ћемо ићи? Ти имаш речи живота вечнога."
    },
    "interp": {
      "simple": {
        "de": "Jesus stillt nicht nur den Hunger des Leibes, sondern schenkt sich selbst als Nahrung für das ewige Leben. Das geschieht in der heiligen Kommunion.",
        "sr": "Исус не утољава само глад тела, него дарује самог себе као храну за живот вечни. То се збива у светом причешћу."
      },
      "deeper": {
        "de": "Die orthodoxe Kirche versteht Joh 6,51–58 als Rede über die Eucharistie: In der Liturgie werden Brot und Wein durch den Heiligen Geist wirklich Leib und Blut Christi. Darum bereitet man sich mit Gebet, Fasten und – je nach Praxis – Beichte auf die Kommunion vor. Die Speisung (Joh 6,11: nehmen, danken, austeilen) klingt bereits an die Worte des Abendmahls an. Die Antwort des Petrus (6,68) ist ein Bekenntnis für alle, denen der Glaube schwer wird.",
        "sr": "Православна Црква Јн 6,51–58 схвата као беседу о Евхаристији: на Литургији хлеб и вино Духом Светим заиста постају тело и крв Христова. Зато се на причешће припрема молитвом, постом и – зависно од праксе – исповешћу. Умножење хлебова (Јн 6,11: узети, благодарити, разделити) већ подсећа на речи Тајне вечере. Петров одговор (6,68) исповедање је за све којима је вера тешка."
      },
      "tag": "dogma"
    },
    "christ": {
      "de": "Christus ist das wahre Manna, das vom Himmel kommt. Er gibt sein Fleisch für das Leben der Welt am Kreuz und reicht es uns in jeder Göttlichen Liturgie.",
      "sr": "Христос је права мана која долази с неба. Он даје своје тело за живот света на крсту и пружа нам га на свакој Светој Литургији."
    },
    "links": [
      {
        "ref": {
          "de": "Ex 16,4.14–15",
          "sr": "Изл 16,4.14–15"
        },
        "note": {
          "de": "Das Manna in der Wüste.",
          "sr": "Мана у пустињи."
        }
      },
      {
        "ref": {
          "de": "1 Kor 10,16–17",
          "sr": "1 Кор 10,16–17"
        },
        "note": {
          "de": "Ein Brot – ein Leib.",
          "sr": "Један хлеб – једно тело."
        }
      },
      {
        "ref": {
          "de": "1 Kor 11,23–29",
          "sr": "1 Кор 11,23–29"
        },
        "note": {
          "de": "Wer unwürdig isst …",
          "sr": "Ко недостојно једе …"
        }
      }
    ],
    "fathers": {
      "de": "Der hl. Johannes Chrysostomus legt Joh 6 in seinen Homilien zum Johannesevangelium aus (englisch in NPNF I/14). Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Свети Јован Златоуст тумачи Јн 6 у беседама на Јеванђеље по Јовану (на енглеском у NPNF I/14). Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Wie viele Brote und Fische hatte der Junge?",
          "sr": "Колико хлебова и риба је имао дечак?"
        },
        "a": {
          "de": "Fünf Gerstenbrote und zwei Fische.",
          "sr": "Пет јечмених хлебова и две рибе."
        }
      },
      {
        "q": {
          "de": "Wie versteht die Kirche Joh 6,51–58?",
          "sr": "Како Црква схвата Јн 6,51–58?"
        },
        "a": {
          "de": "Als Rede über die Eucharistie, in der wir Leib und Blut Christi empfangen.",
          "sr": "Као беседу о Евхаристији, у којој примамо тело и крв Христову."
        }
      },
      {
        "q": {
          "de": "Was antwortet Petrus, als viele weggehen?",
          "sr": "Шта Петар одговара када многи оду?"
        },
        "a": {
          "de": "Herr, zu wem sollen wir gehen? Du hast Worte des ewigen Lebens.",
          "sr": "Господе, коме ћемо ићи? Ти имаш речи живота вечнога."
        }
      }
    ],
    "practice": {
      "de": "Wenn du das nächste Mal kommunizieren möchtest, sprich mit deinem Priester über die Vorbereitung. Lies vorher Joh 6,51–58.",
      "sr": "Када следећи пут желите да се причестите, разговарајте са свештеником о припреми. Прочитајте пре тога Јн 6,51–58."
    },
    "review": {
      "de": "Christus speist die Fünftausend und offenbart sich als Brot des Lebens. Wer sein Fleisch isst und sein Blut trinkt, hat ewiges Leben.",
      "sr": "Христос храни пет хиљада и открива се као хлеб живота. Ко једе Његово тело и пије Његову крв има живот вечни."
    },
    "quiz": [
      {
        "q": {
          "de": "Wie viele Körbe blieben übrig?",
          "sr": "Колико котарица је остало?"
        },
        "options": [
          {
            "de": "Zwölf",
            "sr": "Дванаест"
          },
          {
            "de": "Sieben",
            "sr": "Седам"
          },
          {
            "de": "Drei",
            "sr": "Три"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Wo hielt Jesus die Rede vom Brot des Lebens?",
          "sr": "Где је Исус одржао беседу о хлебу живота?"
        },
        "options": [
          {
            "de": "In der Synagoge von Kafarnaum",
            "sr": "У синагоги у Капернауму"
          },
          {
            "de": "Im Tempel von Jerusalem",
            "sr": "У Јерусалимском храму"
          },
          {
            "de": "Auf dem Berg Tabor",
            "sr": "На гори Тавору"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Womit vergleicht Jesus sich selbst?",
          "sr": "Са чим Исус упоређује себе?"
        },
        "options": [
          {
            "de": "Mit dem Manna, aber als lebendiges Brot",
            "sr": "Са маном, али као хлеб живи"
          },
          {
            "de": "Mit Wasser aus dem Felsen",
            "sr": "Са водом из стене"
          },
          {
            "de": "Mit dem Tempel",
            "sr": "Са храмом"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-rom8",
    "book": "rom",
    "order": 52,
    "title": {
      "de": "Nichts kann uns von der Liebe Gottes trennen",
      "sr": "Ништа нас не може раставити од љубави Божије"
    },
    "ref": {
      "de": "Römer 8,14–39",
      "sr": "Римљанима 8,14–39"
    },
    "intro": {
      "de": "Römer 8 ist einer der Höhepunkte des Römerbriefes. Nach dem Kampf mit der Sünde in Kapitel 7 spricht Paulus vom Leben im Heiligen Geist und von einer Hoffnung, die nichts zerstören kann.",
      "sr": "Римљанима 8 је један од врхунаца Посланице Римљанима. После борбе са грехом у 7. глави Павле говори о животу у Духу Светом и о нади коју ништа не може уништити."
    },
    "introTag": "history",
    "context": {
      "de": "Die Christen in Rom erlebten Bedrängnis und Unsicherheit. Paulus erinnert sie daran, wer sie in Christus sind: Kinder Gottes und Erben.",
      "sr": "Хришћани у Риму доживљавали су невоље и несигурност. Павле их подсећа ко су у Христу: деца Божија и наследници."
    },
    "reading": [
      {
        "ref": {
          "de": "Röm 8,14–17",
          "sr": "Рим 8,14–17"
        },
        "note": {
          "de": "Abba, Vater!",
          "sr": "Ава, Оче!"
        }
      },
      {
        "ref": {
          "de": "Röm 8,18–27",
          "sr": "Рим 8,18–27"
        },
        "note": {
          "de": "Die ganze Schöpfung seufzt.",
          "sr": "Сва твар уздише."
        }
      },
      {
        "ref": {
          "de": "Röm 8,31–39",
          "sr": "Рим 8,31–39"
        },
        "note": {
          "de": "Wer kann uns trennen?",
          "sr": "Ко ће нас раставити?"
        }
      }
    ],
    "summary": {
      "de": "Alle, die sich vom Geist Gottes leiten lassen, sind Kinder Gottes; im Geist rufen wir: Abba, Vater! Sind wir Kinder, dann auch Erben, Miterben Christi, wenn wir mit ihm leiden, um mit ihm verherrlicht zu werden. Die Leiden dieser Zeit sind nichts im Vergleich zur kommenden Herrlichkeit. Die ganze Schöpfung seufzt und wartet auf die Befreiung. Der Geist hilft unserer Schwachheit und tritt für uns ein, wenn wir nicht wissen, wie wir beten sollen. Denen, die Gott lieben, wirkt alles zum Guten. Ist Gott für uns, wer ist gegen uns? Weder Tod noch Leben, weder Engel noch Mächte, weder Gegenwärtiges noch Zukünftiges können uns trennen von der Liebe Gottes, die in Christus Jesus ist, unserem Herrn.",
      "sr": "Сви које води Дух Божији, синови су Божији; у Духу вичемо: Ава, Оче! Ако смо деца, онда и наследници, сунаследници Христови, ако с Њим страдамо, да бисмо се с Њим и прославили. Страдања садашњег времена нису ништа према слави која ће се открити. Сва твар уздише и чека ослобођење. Дух помаже нашој немоћи и посредује за нас када не знамо како да се молимо. Онима који љубе Бога све иде на добро. Ако је Бог за нас, ко ће против нас? Ни смрт ни живот, ни анђели ни силе, ни садашње ни будуће не може нас раставити од љубави Божије која је у Христу Исусу Господу нашем."
    },
    "interp": {
      "simple": {
        "de": "Durch den Heiligen Geist dürfen wir Gott „Vater“ nennen. Auch im Leid sind wir nicht verlassen: Nichts ist stärker als Gottes Liebe zu uns.",
        "sr": "Кроз Духа Светога смемо Бога звати „Оче“. Ни у страдању нисмо остављени: ништа није јаче од Божије љубави према нама."
      },
      "deeper": {
        "de": "Röm 8 verbindet die persönliche Gotteskindschaft mit dem Schicksal der ganzen Schöpfung: Auch die Welt wartet auf Verklärung. Das entspricht der orthodoxen Sicht, dass das Heil den Menschen und mit ihm den ganzen Kosmos umfasst. Der Vers „Der Geist tritt für uns ein“ (8,26) erklärt, warum die Kirche jedes Gebet mit der Bitte um den Heiligen Geist beginnt („Himmlischer König …“). „Alles wirkt zum Guten“ (8,28) heißt nicht, dass alles gut ist, sondern dass Gott auch aus Schwerem Gutes wachsen lassen kann.",
        "sr": "Рим 8 повезује лично синовство Божије са судбином целе твари: и свет чека преображење. То одговара православном гледишту да спасење обухвата човека, а са њим и цео космос. Стих „Дух посредује за нас“ (8,26) објашњава зашто Црква сваку молитву почиње призивом Духа Светога („Царе небески …“). „Све иде на добро“ (8,28) не значи да је све добро, него да Бог и из тешког може да изведе добро."
      },
      "tag": "dogma"
    },
    "christ": {
      "de": "Gott hat seinen eigenen Sohn nicht verschont, sondern ihn für uns alle hingegeben (Röm 8,32). Der auferstandene Christus tritt zur Rechten Gottes für uns ein (8,34).",
      "sr": "Бог свога Сина није поштедео, него Га је предао за све нас (Рим 8,32). Васкрсли Христос посредује за нас с десне стране Бога (8,34)."
    },
    "links": [
      {
        "ref": {
          "de": "Gal 4,6–7",
          "sr": "Гал 4,6–7"
        },
        "note": {
          "de": "Gott sandte den Geist seines Sohnes in unsere Herzen.",
          "sr": "Бог посла Духа Сина свога у срца наша."
        }
      },
      {
        "ref": {
          "de": "Joh 14,16–18",
          "sr": "Јн 14,16–18"
        },
        "note": {
          "de": "Ich lasse euch nicht als Waisen zurück.",
          "sr": "Нећу вас оставити сироте."
        }
      },
      {
        "ref": {
          "de": "Offb 21,1–5",
          "sr": "Отк 21,1–5"
        },
        "note": {
          "de": "Siehe, ich mache alles neu.",
          "sr": "Ево, све ново творим."
        }
      }
    ],
    "fathers": {
      "de": "Der hl. Johannes Chrysostomus legt Röm 8 in seinen Homilien zum Römerbrief aus (Homilien 14–15, englisch in NPNF I/11). Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Свети Јован Златоуст тумачи Рим 8 у беседама на Посланицу Римљанима (беседе 14–15, на енглеском у NPNF I/11). Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Wie dürfen wir Gott nach Röm 8,15 im Geist anreden?",
          "sr": "Како по Рим 8,15 смемо у Духу да се обратимо Богу?"
        },
        "a": {
          "de": "Abba, Vater!",
          "sr": "Ава, Оче!"
        }
      },
      {
        "q": {
          "de": "Worauf wartet nach Röm 8 die ganze Schöpfung?",
          "sr": "Шта по Рим 8 чека сва твар?"
        },
        "a": {
          "de": "Auf die Befreiung und Verherrlichung zusammen mit den Kindern Gottes.",
          "sr": "Ослобођење и прослављење заједно са децом Божијом."
        }
      },
      {
        "q": {
          "de": "Was kann uns von der Liebe Gottes trennen?",
          "sr": "Шта нас може раставити од љубави Божије?"
        },
        "a": {
          "de": "Nichts – weder Tod noch Leben noch irgendeine Macht.",
          "sr": "Ништа – ни смрт ни живот ни било каква сила."
        }
      }
    ],
    "practice": {
      "de": "Lerne Röm 8,38–39 auswendig und sprich die Verse in Momenten der Angst. Beginne dein Gebet bewusst mit „Himmlischer König“.",
      "sr": "Научите напамет Рим 8,38–39 и изговарајте те стихове у тренуцима страха. Почните молитву свесно са „Царе небески“."
    },
    "review": {
      "de": "Im Heiligen Geist sind wir Kinder Gottes und dürfen „Vater“ sagen. Die Schöpfung wartet auf Befreiung, und nichts kann uns von Gottes Liebe in Christus trennen.",
      "sr": "У Духу Светом смо деца Божија и смемо рећи „Оче“. Твар чека ослобођење, и ништа нас не може раставити од љубави Божије у Христу."
    },
    "quiz": [
      {
        "q": {
          "de": "Was ruft der Geist in uns (Röm 8,15)?",
          "sr": "Шта Дух у нама вапије (Рим 8,15)?"
        },
        "options": [
          {
            "de": "Abba, Vater!",
            "sr": "Ава, Оче!"
          },
          {
            "de": "Hosanna!",
            "sr": "Осана!"
          },
          {
            "de": "Amen!",
            "sr": "Амин!"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Wer tritt nach Röm 8,26 für uns ein, wenn wir nicht wissen, wie wir beten sollen?",
          "sr": "Ко, по Рим 8,26, посредује за нас када не знамо како да се молимо?"
        },
        "options": [
          {
            "de": "Der Heilige Geist",
            "sr": "Дух Свети"
          },
          {
            "de": "Ein Engel",
            "sr": "Анђео"
          },
          {
            "de": "Mose",
            "sr": "Мојсије"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Was kann uns nach Röm 8,38–39 von Gottes Liebe trennen?",
          "sr": "Шта нас, по Рим 8,38–39, може раставити од љубави Божије?"
        },
        "options": [
          {
            "de": "Nichts",
            "sr": "Ништа"
          },
          {
            "de": "Der Tod",
            "sr": "Смрт"
          },
          {
            "de": "Die Engel",
            "sr": "Анђели"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-isa6",
    "book": "isa",
    "order": 53,
    "title": {
      "de": "Heilig, heilig, heilig",
      "sr": "Свет, свет, свет"
    },
    "ref": {
      "de": "Jesaja 6,1–8",
      "sr": "Исаија 6,1–8"
    },
    "intro": {
      "de": "Im Jahr, als König Usija starb (etwa 740 v. Chr.), wird Jesaja zum Propheten berufen. Er schaut Gott in seiner Herrlichkeit. Der Gesang der Seraphim aus diesem Kapitel erklingt bis heute in jeder Göttlichen Liturgie.",
      "sr": "Године када је умро цар Озија (око 740. пре Христа), Исаија бива позван за пророка. Он гледа Бога у слави. Песма серафима из ове главе и данас звучи на свакој Светој Литургији."
    },
    "introTag": "history",
    "context": {
      "de": "Juda erlebt eine Zeit des Wohlstands, aber auch der Ungerechtigkeit und des Götzendienstes. Gott sucht einen Boten, der seinem Volk die Wahrheit sagt.",
      "sr": "Јудеја доживљава време благостања, али и неправде и идолопоклонства. Бог тражи весника који ће Његовом народу рећи истину."
    },
    "reading": [
      {
        "ref": {
          "de": "Jes 6,1–4",
          "sr": "Ис 6,1–4"
        },
        "note": {
          "de": "Die Seraphim rufen: Heilig, heilig, heilig.",
          "sr": "Серафими вичу: Свет, свет, свет."
        }
      },
      {
        "ref": {
          "de": "Jes 6,5–7",
          "sr": "Ис 6,5–7"
        },
        "note": {
          "de": "Die glühende Kohle berührt die Lippen.",
          "sr": "Живи угљен дотиче усне."
        }
      },
      {
        "ref": {
          "de": "Jes 6,8",
          "sr": "Ис 6,8"
        },
        "note": {
          "de": "Hier bin ich, sende mich.",
          "sr": "Ево мене, пошаљи мене."
        }
      }
    ],
    "summary": {
      "de": "Jesaja sieht den Herrn auf einem hohen und erhabenen Thron; der Saum seines Gewandes füllt den Tempel. Seraphim stehen über ihm, jeder mit sechs Flügeln, und rufen einander zu: Heilig, heilig, heilig ist der Herr Sabaoth, die ganze Erde ist voll seiner Herrlichkeit. Die Schwellen erbeben, und das Haus füllt sich mit Rauch. Jesaja ruft: Weh mir, ich bin verloren, denn ich bin ein Mensch mit unreinen Lippen. Da fliegt einer der Seraphim zu ihm, eine glühende Kohle in der Hand, die er mit einer Zange vom Altar genommen hat. Er berührt Jesajas Mund und sagt: Siehe, dies hat deine Lippen berührt; deine Schuld ist getilgt. Dann hört Jesaja die Stimme des Herrn: Wen soll ich senden? Er antwortet: Hier bin ich, sende mich!",
      "sr": "Исаија види Господа на престолу високом и уздигнутом; скути Његове одеће испуњавају храм. Серафими стоје изнад Њега, сваки са шест крила, и довикују један другом: Свет, свет, свет Господ Саваот, пуна је сва земља славе Његове. Прагови се затресу, и дом се испуни димом. Исаија виче: Тешко мени, пропадох, јер сам човек нечистих усана. Тада долети к њему један од серафима са живим угљем у руци, који је клештима узео са олтара. Дотакне Исаијина уста и каже: Ево, ово се дотаче усана твојих; безакоње твоје се уклони. Затим Исаија чује глас Господњи: Кога ћу послати? Он одговара: Ево мене, пошаљи мене!"
    },
    "interp": {
      "simple": {
        "de": "Vor Gottes Heiligkeit erkennt der Mensch seine Unwürdigkeit. Doch Gott reinigt ihn und sendet ihn aus. Wer Gottes Vergebung erfährt, wird bereit, ihm zu dienen.",
        "sr": "Пред светошћу Божијом човек увиђа своју недостојност. Али Бог га очишћује и шаље. Ко искуси Божији опроштај, постаје спреман да Му служи."
      },
      "deeper": {
        "de": "Der Gesang der Seraphim ist in die Göttliche Liturgie eingegangen: Beim eucharistischen Hochgebet singt die Gemeinde „Heilig, heilig, heilig, Herr Sabaoth …“. So stimmt die Kirche in den Lobgesang der Engel ein. Die Kirchenväter sehen in der glühenden Kohle, die mit einer Zange gereicht wird, ein Vorausbild der Eucharistie: Christus, göttliches Feuer, berührt unsere Lippen. Nach der Kommunion spricht der Priester Worte aus Jes 6,7: „Siehe, dies hat deine Lippen berührt …“. Das dreifache „Heilig“ wird von den Vätern auch als Hinweis auf die Dreieinigkeit gelesen.",
        "sr": "Песма серафима ушла је у Свету Литургију: при евхаристијској молитви сабрање пева „Свет, свет, свет Господ Саваот …“. Тако Црква пристаје уз хвалоспев анђела. Свети оци у живом угљу, који се пружа клештима, виде праслику Евхаристије: Христос, божански огањ, дотиче наше усне. После причешћа свештеник изговара речи из Ис 6,7: „Ево, ово се дотаче усана твојих …“. Троструко „Свет“ оци читају и као наговештај Свете Тројице."
      },
      "tag": "opinion"
    },
    "christ": {
      "de": "Der Evangelist Johannes sagt, Jesaja habe die Herrlichkeit Christi gesehen (Joh 12,41). In der Kommunion empfangen wir ihn selbst, das Feuer, das reinigt und nicht verbrennt.",
      "sr": "Јеванђелист Јован каже да је Исаија видео славу Христову (Јн 12,41). У причешћу примамо Њега самог, огањ који очишћује, а не сагорева."
    },
    "links": [
      {
        "ref": {
          "de": "Offb 4,8",
          "sr": "Отк 4,8"
        },
        "note": {
          "de": "Heilig, heilig, heilig ist der Herr.",
          "sr": "Свет, свет, свет Господ."
        }
      },
      {
        "ref": {
          "de": "Joh 12,41",
          "sr": "Јн 12,41"
        },
        "note": {
          "de": "Jesaja sah seine Herrlichkeit.",
          "sr": "Исаија виде славу Његову."
        }
      },
      {
        "ref": {
          "de": "Lk 5,8–10",
          "sr": "Лк 5,8–10"
        },
        "note": {
          "de": "Petrus: Geh weg von mir, ich bin ein Sünder.",
          "sr": "Петар: Изиђи од мене, јер сам човек грешан."
        }
      }
    ],
    "fathers": {
      "de": "Mehrere Väter, darunter der hl. Johannes von Damaskus, deuten die glühende Kohle auf den Leib Christi in der Eucharistie. Für diese Version wurde kein einzelner Link zu dieser Stelle geprüft; wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Више отаца, међу њима свети Јован Дамаскин, тумачи живи угаљ као тело Христово у Евхаристији. За ово издање није проверена појединачна веза ка том месту; апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Was rufen die Seraphim?",
          "sr": "Шта вичу серафими?"
        },
        "a": {
          "de": "Heilig, heilig, heilig ist der Herr Sabaoth; die ganze Erde ist voll seiner Herrlichkeit.",
          "sr": "Свет, свет, свет Господ Саваот; пуна је сва земља славе Његове."
        }
      },
      {
        "q": {
          "de": "Wo singt die Kirche diesen Gesang?",
          "sr": "Где Црква пева ову песму?"
        },
        "a": {
          "de": "In jeder Göttlichen Liturgie beim eucharistischen Hochgebet.",
          "sr": "На свакој Светој Литургији при евхаристијској молитви."
        }
      },
      {
        "q": {
          "de": "Wie antwortet Jesaja auf Gottes Frage?",
          "sr": "Како Исаија одговара на Божије питање?"
        },
        "a": {
          "de": "Hier bin ich, sende mich!",
          "sr": "Ево мене, пошаљи мене!"
        }
      }
    ],
    "practice": {
      "de": "Achte bei der nächsten Liturgie auf das „Heilig, heilig, heilig“ und sing oder sprich innerlich mit. Frage dich: Wofür könnte Gott heute mich senden?",
      "sr": "На следећој Литургији обратите пажњу на „Свет, свет, свет“ и певајте или изговарајте у себи. Запитајте се: где би ме Бог данас могао послати?"
    },
    "review": {
      "de": "Jesaja schaut Gottes Herrlichkeit, wird durch die glühende Kohle gereinigt und gesandt. Der Gesang der Seraphim erklingt in jeder Liturgie.",
      "sr": "Исаија гледа славу Божију, бива очишћен живим угљем и послат. Песма серафима звучи на свакој Литургији."
    },
    "quiz": [
      {
        "q": {
          "de": "Wie viele Flügel hat jeder Seraph?",
          "sr": "Колико крила има сваки серафим?"
        },
        "options": [
          {
            "de": "Sechs",
            "sr": "Шест"
          },
          {
            "de": "Zwei",
            "sr": "Два"
          },
          {
            "de": "Vier",
            "sr": "Четири"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Womit wurden Jesajas Lippen gereinigt?",
          "sr": "Чиме су Исаијине усне очишћене?"
        },
        "options": [
          {
            "de": "Mit einer glühenden Kohle vom Altar",
            "sr": "Живим угљем са олтара"
          },
          {
            "de": "Mit Wasser",
            "sr": "Водом"
          },
          {
            "de": "Mit Öl",
            "sr": "Уљем"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Worauf deuten die Väter die glühende Kohle?",
          "sr": "Како оци тумаче живи угаљ?"
        },
        "options": [
          {
            "de": "Auf die Eucharistie",
            "sr": "Као Евхаристију"
          },
          {
            "de": "Auf die Sonne",
            "sr": "Као сунце"
          },
          {
            "de": "Auf das Gericht",
            "sr": "Као суд"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-acts15",
    "book": "acts",
    "order": 54,
    "title": {
      "de": "Das Apostelkonzil in Jerusalem",
      "sr": "Апостолски сабор у Јерусалиму"
    },
    "ref": {
      "de": "Apostelgeschichte 15,1–31",
      "sr": "Дела апостолска 15,1–31"
    },
    "intro": {
      "de": "Um das Jahr 49 versammeln sich die Apostel und Ältesten in Jerusalem, um einen schweren Streit zu klären. Die Kirche sieht darin das Urbild aller späteren Konzilien.",
      "sr": "Око 49. године апостоли и старешине сабирају се у Јерусалиму да реше тежак спор. Црква у томе види праслику свих каснијих сабора."
    },
    "introTag": "history",
    "context": {
      "de": "Immer mehr Nichtjuden wurden Christen. Einige Judenchristen forderten, sie müssten sich beschneiden lassen und das ganze Gesetz des Mose halten, um gerettet zu werden. Paulus und Barnabas widersprachen heftig.",
      "sr": "Све више незнабожаца постајало је хришћанима. Неки хришћани из Јудејства тражили су да се они обрежу и држе цео Мојсијев закон да би се спасли. Павле и Варнава су се томе снажно противили."
    },
    "reading": [
      {
        "ref": {
          "de": "Apg 15,1–12",
          "sr": "Дап 15,1–12"
        },
        "note": {
          "de": "Der Streit und die Rede des Petrus.",
          "sr": "Спор и Петрова беседа."
        }
      },
      {
        "ref": {
          "de": "Apg 15,13–21",
          "sr": "Дап 15,13–21"
        },
        "note": {
          "de": "Jakobus fasst zusammen.",
          "sr": "Јаков сажима."
        }
      },
      {
        "ref": {
          "de": "Apg 15,22–31",
          "sr": "Дап 15,22–31"
        },
        "note": {
          "de": "Der Brief an die Gemeinden.",
          "sr": "Посланица заједницама."
        }
      }
    ],
    "summary": {
      "de": "Paulus und Barnabas kommen nach Jerusalem. Nach langer Beratung steht Petrus auf: Gott hat den Heiden den Heiligen Geist gegeben wie uns und keinen Unterschied gemacht; durch die Gnade des Herrn Jesus werden wir gerettet, ebenso wie sie. Paulus und Barnabas erzählen von den Zeichen unter den Heiden. Dann spricht Jakobus: Man soll den Heiden, die sich zu Gott bekehren, keine Last auferlegen, sondern ihnen nur schreiben, sich von Götzenopfern, von Unzucht, von Ersticktem und von Blut fernzuhalten. Die Apostel, die Ältesten und die ganze Gemeinde senden einen Brief mit den Worten: Der Heilige Geist und wir haben beschlossen, euch keine weitere Last aufzuerlegen. Die Gemeinden freuen sich über diese Ermutigung.",
      "sr": "Павле и Варнава долазе у Јерусалим. После дугог договарања устаје Петар: Бог је незнабошцима дао Духа Светога као и нама и није правио разлику; благодаћу Господа Исуса спасавамо се, као и они. Павле и Варнава причају о знацима међу незнабошцима. Затим говори Јаков: незнабошцима који се обраћају Богу не треба наметати терет, него им само писати да се чувају идолских жртава, блуда, удављеног и крви. Апостоли, старешине и сва Црква шаљу посланицу са речима: Изволе се Духу Светоме и нама да вам се не намеће никакво друго бреме. Заједнице се радују овом охрабрењу."
    },
    "interp": {
      "simple": {
        "de": "Wenn in der Kirche Streit entsteht, entscheidet nicht einer allein. Die Apostel kommen zusammen, hören einander zu und suchen gemeinsam, was der Heilige Geist will.",
        "sr": "Када у Цркви настане спор, не одлучује један сам. Апостоли се сабирају, слушају једни друге и заједно траже шта хоће Дух Свети."
      },
      "deeper": {
        "de": "Die Formel „Der Heilige Geist und wir haben beschlossen“ (15,28) zeigt das orthodoxe Verständnis der Konziliarität (Sabornost): Entscheidungen in Glaubensfragen werden gemeinsam getroffen, im Vertrauen auf die Führung des Geistes. Nach diesem Vorbild versammelten sich später die Ökumenischen Konzilien. Inhaltlich bekräftigt das Konzil, dass die Rettung aus der Gnade Christi kommt, nicht aus der Beschneidung.",
        "sr": "Формула „Изволе се Духу Светоме и нама“ (15,28) показује православно схватање саборности: одлуке у питањима вере доносе се заједнички, у поверењу у вођство Духа. По овом узору касније су се сабирали Васељенски сабори. По садржају, сабор потврђује да спасење долази од благодати Христове, а не од обрезања."
      },
      "tag": "dogma"
    },
    "christ": {
      "de": "Petrus bekennt: Durch die Gnade des Herrn Jesus werden wir gerettet (15,11). Christus vereint Juden und Heiden in einer Kirche (Eph 2,14).",
      "sr": "Петар исповеда: благодаћу Господа Исуса спасавамо се (15,11). Христос сједињује Јудејце и незнабошце у једну Цркву (Еф 2,14)."
    },
    "links": [
      {
        "ref": {
          "de": "Gal 2,1–10",
          "sr": "Гал 2,1–10"
        },
        "note": {
          "de": "Paulus berichtet über das Treffen in Jerusalem.",
          "sr": "Павле говори о сусрету у Јерусалиму."
        }
      },
      {
        "ref": {
          "de": "Eph 2,14–16",
          "sr": "Еф 2,14–16"
        },
        "note": {
          "de": "Christus hat die Trennwand niedergerissen.",
          "sr": "Христос је срушио преградни зид."
        }
      },
      {
        "ref": {
          "de": "Mt 18,20",
          "sr": "Мт 18,20"
        },
        "note": {
          "de": "Wo zwei oder drei in meinem Namen versammelt sind.",
          "sr": "Где су двојица или тројица сабрани у име моје."
        }
      }
    ],
    "fathers": {
      "de": "Der hl. Johannes Chrysostomus legt Apg 15 in seinen Homilien zur Apostelgeschichte aus (englisch in NPNF I/11). Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Свети Јован Златоуст тумачи Дап 15 у беседама на Дела апостолска (на енглеском у NPNF I/11). Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Worum ging der Streit vor dem Apostelkonzil?",
          "sr": "О чему је био спор пре Апостолског сабора?"
        },
        "a": {
          "de": "Ob Christen aus den Heiden sich beschneiden lassen und das ganze Gesetz des Mose halten müssen.",
          "sr": "Да ли хришћани из незнабожаца морају да се обрежу и држе цео Мојсијев закон."
        }
      },
      {
        "q": {
          "de": "Wie beginnt der Beschluss des Konzils?",
          "sr": "Како почиње одлука сабора?"
        },
        "a": {
          "de": "„Der Heilige Geist und wir haben beschlossen …“",
          "sr": "„Изволе се Духу Светоме и нама …“"
        }
      },
      {
        "q": {
          "de": "Warum ist das Apostelkonzil für die Kirche wichtig?",
          "sr": "Зашто је Апостолски сабор важан за Цркву?"
        },
        "a": {
          "de": "Es ist das Vorbild für das gemeinsame Entscheiden in Glaubensfragen (Konzilien).",
          "sr": "Он је узор заједничког одлучивања у питањима вере (сабори)."
        }
      }
    ],
    "practice": {
      "de": "Wenn es in deiner Familie oder Gemeinde Streit gibt: Höre zuerst wirklich zu, bevor du urteilst, und bete um den Heiligen Geist.",
      "sr": "Када у вашој породици или парохији настане спор: прво заиста саслушајте пре него што судите и молите се за Духа Светога."
    },
    "review": {
      "de": "Die Apostel klären gemeinsam in Jerusalem, dass Heiden nicht beschnitten werden müssen. „Der Heilige Geist und wir“ wird zum Vorbild aller Konzilien.",
      "sr": "Апостоли заједно у Јерусалиму решавају да незнабошци не морају да се обрежу. „Духу Светоме и нама“ постаје узор свих сабора."
    },
    "quiz": [
      {
        "q": {
          "de": "Wer sprach auf dem Konzil zuerst nach langer Beratung?",
          "sr": "Ко је на сабору први говорио после дугог договарања?"
        },
        "options": [
          {
            "de": "Petrus",
            "sr": "Петар"
          },
          {
            "de": "Judas",
            "sr": "Јуда"
          },
          {
            "de": "Timotheus",
            "sr": "Тимотеј"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Wer fasste die Entscheidung zusammen?",
          "sr": "Ко је сажео одлуку?"
        },
        "options": [
          {
            "de": "Jakobus",
            "sr": "Јаков"
          },
          {
            "de": "Thomas",
            "sr": "Тома"
          },
          {
            "de": "Lukas",
            "sr": "Лука"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Was müssen Christen aus den Heiden nach dem Beschluss nicht tun?",
          "sr": "Шта хришћани из незнабожаца по одлуци не морају?"
        },
        "options": [
          {
            "de": "Sich beschneiden lassen",
            "sr": "Да се обрежу"
          },
          {
            "de": "An Christus glauben",
            "sr": "Да верују у Христа"
          },
          {
            "de": "Beten",
            "sr": "Да се моле"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-ps103",
    "book": "ps",
    "order": 55,
    "title": {
      "de": "Lobe den Herrn, meine Seele – der Schöpfungspsalm",
      "sr": "Благосиљај, душо моја, Господа – псалам о стварању"
    },
    "ref": {
      "de": "Psalm 103 (hebr. 104)",
      "sr": "Псалам 103 (јевр. 104)"
    },
    "intro": {
      "de": "Psalm 103 (nach der hebräischen Zählung 104) besingt Gott als Schöpfer. Er eröffnet jeden Abend die Vesper der orthodoxen Kirche.",
      "sr": "Псалам 103 (по јеврејском бројању 104) опева Бога као Створитеља. Он сваке вечери отвара вечерње у Православној Цркви."
    },
    "introTag": "history",
    "context": {
      "de": "Die Psalmen sind das Gebetbuch Israels und der Kirche. Dieser Psalm schaut auf die ganze Schöpfung: Himmel, Wasser, Berge, Tiere, Menschen, Tag und Nacht.",
      "sr": "Псалми су молитвеник Израиља и Цркве. Овај псалам гледа на сву твар: небо, воде, планине, животиње, људе, дан и ноћ."
    },
    "reading": [
      {
        "ref": {
          "de": "Ps 103,1–9",
          "sr": "Пс 103,1–9"
        },
        "note": {
          "de": "Du hüllst dich in Licht wie in ein Gewand.",
          "sr": "Обукао си се у светлост као у хаљину."
        }
      },
      {
        "ref": {
          "de": "Ps 103,10–23",
          "sr": "Пс 103,10–23"
        },
        "note": {
          "de": "Quellen, Tiere, Sonne und Mond.",
          "sr": "Извори, животиње, сунце и месец."
        }
      },
      {
        "ref": {
          "de": "Ps 103,24–35",
          "sr": "Пс 103,24–35"
        },
        "note": {
          "de": "Wie groß sind deine Werke, Herr.",
          "sr": "Како су велика дела Твоја, Господе."
        }
      }
    ],
    "summary": {
      "de": "Lobe den Herrn, meine Seele! Herr, mein Gott, du bist sehr groß; du hüllst dich in Licht wie in ein Gewand und spannst den Himmel aus wie ein Zelt. Du hast die Erde gegründet und dem Wasser Grenzen gesetzt. Quellen lässt du in den Tälern hervorbrechen, und alle Tiere trinken daraus. Du lässt Gras wachsen für das Vieh und Brot aus der Erde, Wein, der das Herz des Menschen erfreut. Du hast den Mond gemacht für die Zeiten; die Sonne weiß ihren Untergang. Wie groß sind deine Werke, Herr! In Weisheit hast du sie alle gemacht. Sie alle warten auf dich. Sendest du deinen Geist aus, so werden sie geschaffen, und du erneuerst das Angesicht der Erde.",
      "sr": "Благосиљај, душо моја, Господа! Господе Боже мој, веома си велики; обукао си се у светлост као у хаљину и разапео небо као шатор. Основао си земљу и водама поставио границе. Изворе пушташ у долинама, и све животиње пију из њих. Растиш траву за стоку и хлеб из земље, вино које весели срце човеково. Створио си месец за времена; сунце зна свој залазак. Како су велика дела Твоја, Господе! Све си премудрошћу створио. Све од Тебе очекује. Пошаљеш ли Духа Свога, саздаће се, и обновићеш лице земље."
    },
    "interp": {
      "simple": {
        "de": "Alles, was lebt, kommt von Gott und hängt von ihm ab. Wer die Schöpfung staunend betrachtet, wird zum Lob Gottes geführt.",
        "sr": "Све што живи долази од Бога и зависи од Њега. Ко са дивљењем посматра твар, бива вођен ка слављењу Бога."
      },
      "deeper": {
        "de": "Der Psalm steht am Anfang der Vesper, weil der Tag der Kirche am Abend beginnt und die Vesper mit der Erinnerung an die Schöpfung anfängt; danach folgen Psalmen der Buße und das Lob Christi, des Abendlichts. Vers 30 („Sendest du deinen Geist aus …“) wird mit dem Heiligen Geist verbunden, der Leben schafft und erneuert. Die orthodoxe Sicht auf die Schöpfung ist dankbar und ehrfürchtig: Die Welt ist gut, weil Gott sie gemacht hat, und der Mensch ist ihr Priester, der sie Gott in Dank darbringt.",
        "sr": "Псалам стоји на почетку вечерња, јер црквени дан почиње увече, а вечерње почиње сећањем на стварање; затим следе покајни псалми и хвала Христу, вечерњој светлости. Стих 30 („Пошаљеш ли Духа Свога …“) повезује се са Духом Светим, који ствара и обнавља живот. Православни поглед на твар је благодаран и пун страхопоштовања: свет је добар јер га је Бог створио, а човек је његов свештеник, који га у благодарности приноси Богу."
      },
      "tag": "counsel"
    },
    "christ": {
      "de": "Durch Christus, das Wort Gottes, ist alles geschaffen (Joh 1,3). In der Vesper besingt die Kirche ihn als „heiteres Licht“ der Herrlichkeit des Vaters.",
      "sr": "Кроз Христа, Реч Божију, све је постало (Јн 1,3). На вечерњу Црква Га опева као „Светлост тиху“ славе Очеве."
    },
    "links": [
      {
        "ref": {
          "de": "Gen 1,1–31",
          "sr": "Пост 1,1–31"
        },
        "note": {
          "de": "Die Erschaffung der Welt.",
          "sr": "Стварање света."
        }
      },
      {
        "ref": {
          "de": "Joh 1,1–3",
          "sr": "Јн 1,1–3"
        },
        "note": {
          "de": "Alles ist durch das Wort geworden.",
          "sr": "Све кроз Реч постаде."
        }
      },
      {
        "ref": {
          "de": "Röm 8,19–22",
          "sr": "Рим 8,19–22"
        },
        "note": {
          "de": "Die Schöpfung wartet auf Befreiung.",
          "sr": "Твар чека ослобођење."
        }
      }
    ],
    "fathers": {
      "de": "Der hl. Basilius der Große bewundert in seinen Predigten über das Sechstagewerk (Hexaemeron, englisch in NPNF II/8) die Weisheit Gottes in der Schöpfung. Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Свети Василије Велики у беседама о Шестодневу (на енглеском у NPNF II/8) се диви мудрости Божијој у твари. Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Wo erklingt Psalm 103 jeden Tag?",
          "sr": "Где се Псалам 103 чује сваког дана?"
        },
        "a": {
          "de": "Am Anfang der Vesper.",
          "sr": "На почетку вечерња."
        }
      },
      {
        "q": {
          "de": "Was geschieht nach Ps 103,30, wenn Gott seinen Geist sendet?",
          "sr": "Шта се по Пс 103,30 дешава када Бог пошаље Духа Свога?"
        },
        "a": {
          "de": "Die Geschöpfe werden geschaffen, und er erneuert das Angesicht der Erde.",
          "sr": "Створења се саздају, и Он обнавља лице земље."
        }
      },
      {
        "q": {
          "de": "Welche Haltung gegenüber der Schöpfung lehrt der Psalm?",
          "sr": "Какав однос према твари учи псалам?"
        },
        "a": {
          "de": "Staunen, Dank und Lob Gottes.",
          "sr": "Дивљење, благодарност и слављење Бога."
        }
      }
    ],
    "practice": {
      "de": "Geh diese Woche bewusst nach draußen, schau auf etwas in der Natur und sprich: „Wie groß sind deine Werke, Herr, in Weisheit hast du sie alle gemacht.“",
      "sr": "Изађите ове недеље свесно напоље, погледајте нешто у природи и реците: „Како су велика дела Твоја, Господе, све си премудрошћу створио.“"
    },
    "review": {
      "de": "Psalm 103 lobt Gott als Schöpfer aller Dinge und eröffnet jede Vesper. Alles Leben hängt von Gottes Geist ab.",
      "sr": "Псалам 103 слави Бога као Створитеља свега и отвара свако вечерње. Сав живот зависи од Духа Божијег."
    },
    "quiz": [
      {
        "q": {
          "de": "Welche Nummer hat dieser Psalm nach hebräischer Zählung?",
          "sr": "Који број има овај псалам по јеврејском бројању?"
        },
        "options": [
          {
            "de": "104",
            "sr": "104"
          },
          {
            "de": "23",
            "sr": "23"
          },
          {
            "de": "51",
            "sr": "51"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Womit hüllt sich Gott nach Ps 103,2?",
          "sr": "Чиме се Бог, по Пс 103,2, одева?"
        },
        "options": [
          {
            "de": "Mit Licht",
            "sr": "Светлошћу"
          },
          {
            "de": "Mit Wolken",
            "sr": "Облацима"
          },
          {
            "de": "Mit Feuer",
            "sr": "Огњем"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Welchen Gottesdienst eröffnet Psalm 103?",
          "sr": "Које богослужење отвара Псалам 103?"
        },
        "options": [
          {
            "de": "Die Vesper",
            "sr": "Вечерње"
          },
          {
            "de": "Die Taufe",
            "sr": "Крштење"
          },
          {
            "de": "Die Trauung",
            "sr": "Венчање"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-lk10",
    "book": "lk",
    "order": 56,
    "title": {
      "de": "Der barmherzige Samariter",
      "sr": "Милостиви Самарјанин"
    },
    "ref": {
      "de": "Lukas 10,25–37",
      "sr": "Лука 10,25–37"
    },
    "intro": {
      "de": "Ein Gesetzeslehrer fragt Jesus, was er tun muss, um das ewige Leben zu erben. Jesus antwortet mit einem der bekanntesten Gleichnisse überhaupt.",
      "sr": "Један законик пита Исуса шта треба да чини да наследи живот вечни. Исус одговара једном од најпознатијих прича уопште."
    },
    "introTag": "history",
    "context": {
      "de": "Juden und Samariter waren zur Zeit Jesu tief verfeindet. Der Weg von Jerusalem nach Jericho führte durch eine einsame, gefährliche Gegend.",
      "sr": "Јудејци и Самарјани били су у Исусово време дубоко завађени. Пут од Јерусалима до Јерихона водио је кроз пусту, опасну област."
    },
    "reading": [
      {
        "ref": {
          "de": "Lk 10,25–29",
          "sr": "Лк 10,25–29"
        },
        "note": {
          "de": "Wer ist mein Nächster?",
          "sr": "Ко је мој ближњи?"
        }
      },
      {
        "ref": {
          "de": "Lk 10,30–35",
          "sr": "Лк 10,30–35"
        },
        "note": {
          "de": "Der Samariter hilft.",
          "sr": "Самарјанин помаже."
        }
      },
      {
        "ref": {
          "de": "Lk 10,36–37",
          "sr": "Лк 10,36–37"
        },
        "note": {
          "de": "Geh hin und handle ebenso.",
          "sr": "Иди и ти чини тако."
        }
      }
    ],
    "summary": {
      "de": "Der Gesetzeslehrer nennt das Doppelgebot der Liebe: Gott von ganzem Herzen lieben und den Nächsten wie sich selbst. Dann fragt er: Wer ist mein Nächster? Jesus erzählt: Ein Mann fällt unter Räuber, wird ausgeraubt, geschlagen und halbtot liegen gelassen. Ein Priester und ein Levit kommen vorbei und gehen weiter. Ein Samariter aber hat Mitleid, verbindet seine Wunden mit Öl und Wein, setzt ihn auf sein Tier, bringt ihn in eine Herberge und bezahlt für ihn. Jesus fragt: Wer von den dreien ist dem Überfallenen zum Nächsten geworden? Der Gesetzeslehrer antwortet: Der ihm Barmherzigkeit erwiesen hat. Jesus sagt: Geh hin und handle ebenso.",
      "sr": "Законик наводи двоструку заповест љубави: љубити Бога свим срцем и ближњега као самога себе. Затим пита: Ко је мој ближњи? Исус прича: један човек паде међу разбојнике, који га опљачкаше, избише и оставише полумртва. Свештеник и левит пролазе и иду даље. А један Самарјанин сажали се, превије му ране уљем и вином, стави га на своје живинче, доведе у гостионицу и плати за њега. Исус пита: Који је од ове тројице био ближњи ономе што паде међу разбојнике? Законик одговара: Онај који му учини милост. Исус каже: Иди и ти чини тако."
    },
    "interp": {
      "simple": {
        "de": "Die Frage ist nicht, wer mein Nächster ist, sondern wem ich zum Nächsten werde. Barmherzigkeit kennt keine Grenzen von Volk, Religion oder Sympathie.",
        "sr": "Питање није ко је мој ближњи, него коме ја постајем ближњи. Милосрђе не познаје границе народа, вере или симпатије."
      },
      "deeper": {
        "de": "Jesus dreht die Frage um: Aus „Wer ist mein Nächster?“ wird „Wer hat sich als Nächster erwiesen?“. Dass ausgerechnet ein Samariter das Vorbild ist, war für die Zuhörer eine Herausforderung. Viele Kirchenväter deuten das Gleichnis zusätzlich auf Christus: Der Mensch ist durch die Sünde verwundet, das Gesetz (Priester und Levit) kann ihn nicht heilen; Christus, der Fremde, beugt sich zu ihm, gießt Öl und Wein (Bilder für die Mysterien) in die Wunden und bringt ihn in die Herberge, die Kirche. Diese Deutung ist eine geistliche Auslegung der Väter.",
        "sr": "Исус окреће питање: од „Ко је мој ближњи?“ постаје „Ко се показао као ближњи?“. То што је управо Самарјанин узор, било је изазов за слушаоце. Многи свети оци причу тумаче и на Христа: човек је рањен грехом, закон (свештеник и левит) не може да га исцели; Христос, странац, сагиње се к њему, излива уље и вино (слике Светих Тајни) у ране и доводи га у гостионицу, Цркву. То тумачење је духовно тумачење отаца."
      },
      "tag": "opinion"
    },
    "christ": {
      "de": "Christus ist selbst der barmherzige Samariter, der uns Verwundeten nahe kommt, uns heilt und für uns bezahlt hat.",
      "sr": "Христос је сам милостиви Самарјанин, који нам, рањенима, прилази, исцељује нас и платио је за нас."
    },
    "links": [
      {
        "ref": {
          "de": "Lev 19,18",
          "sr": "Лев 19,18"
        },
        "note": {
          "de": "Liebe deinen Nächsten wie dich selbst.",
          "sr": "Љуби ближњега свога као самога себе."
        }
      },
      {
        "ref": {
          "de": "Mt 25,35–40",
          "sr": "Мт 25,35–40"
        },
        "note": {
          "de": "Was ihr einem dieser Geringsten getan habt.",
          "sr": "Што учинисте једноме од ове најмање браће."
        }
      },
      {
        "ref": {
          "de": "Jak 2,8",
          "sr": "Јак 2,8"
        },
        "note": {
          "de": "Das königliche Gebot.",
          "sr": "Царски закон."
        }
      }
    ],
    "fathers": {
      "de": "Die Deutung des Samariters auf Christus und der Herberge auf die Kirche ist bei vielen Vätern verbreitet. Für diese Version wurde kein einzelner freier Link zu einer bestimmten Auslegung geprüft; wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Тумачење Самарјанина као Христа и гостионице као Цркве раширено је код многих отаца. За ово издање није проверена појединачна слободна веза ка одређеном тумачењу; апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Wie dreht Jesus die Frage des Gesetzeslehrers um?",
          "sr": "Како Исус окреће питање законика?"
        },
        "a": {
          "de": "Statt „Wer ist mein Nächster?“ fragt er, wer sich als Nächster erwiesen hat.",
          "sr": "Уместо „Ко је мој ближњи?“ пита ко се показао као ближњи."
        }
      },
      {
        "q": {
          "de": "Warum war ein Samariter als Vorbild überraschend?",
          "sr": "Зашто је Самарјанин као узор био изненађујући?"
        },
        "a": {
          "de": "Weil Juden und Samariter verfeindet waren.",
          "sr": "Зато што су Јудејци и Самарјани били завађени."
        }
      },
      {
        "q": {
          "de": "Wie deuten viele Väter die Herberge?",
          "sr": "Како многи оци тумаче гостионицу?"
        },
        "a": {
          "de": "Als Bild der Kirche.",
          "sr": "Као слику Цркве."
        }
      }
    ],
    "practice": {
      "de": "Denke an einen Menschen, an dem du bisher „vorbeigegangen“ bist. Was kannst du diese Woche konkret für ihn tun?",
      "sr": "Помислите на човека поред кога сте до сада „пролазили“. Шта можете ове недеље конкретно учинити за њега?"
    },
    "review": {
      "de": "Der Nächste ist jeder, der Hilfe braucht. Der Samariter zeigt Barmherzigkeit über alle Grenzen hinweg; die Väter erkennen in ihm Christus.",
      "sr": "Ближњи је свако коме је потребна помоћ. Самарјанин показује милосрђе преко свих граница; оци у њему препознају Христа."
    },
    "quiz": [
      {
        "q": {
          "de": "Wer ging an dem Überfallenen vorbei?",
          "sr": "Ко је прошао поред нападнутог?"
        },
        "options": [
          {
            "de": "Ein Priester und ein Levit",
            "sr": "Свештеник и левит"
          },
          {
            "de": "Zwei Räuber",
            "sr": "Два разбојника"
          },
          {
            "de": "Niemand",
            "sr": "Нико"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Womit verband der Samariter die Wunden?",
          "sr": "Чиме је Самарјанин превио ране?"
        },
        "options": [
          {
            "de": "Mit Öl und Wein",
            "sr": "Уљем и вином"
          },
          {
            "de": "Mit Wasser und Salz",
            "sr": "Водом и сољу"
          },
          {
            "de": "Mit Honig",
            "sr": "Медом"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Was sagt Jesus am Ende?",
          "sr": "Шта Исус каже на крају?"
        },
        "options": [
          {
            "de": "Geh hin und handle ebenso",
            "sr": "Иди и ти чини тако"
          },
          {
            "de": "Bleib zu Hause",
            "sr": "Остани код куће"
          },
          {
            "de": "Frag die Priester",
            "sr": "Питај свештенике"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-jn17",
    "book": "jn",
    "order": 57,
    "title": {
      "de": "Das hohepriesterliche Gebet",
      "sr": "Првосвештеничка молитва"
    },
    "ref": {
      "de": "Johannes 17,1–26",
      "sr": "Јован 17,1–26"
    },
    "intro": {
      "de": "Am Abend vor seinem Leiden betet Jesus für sich, für seine Jünger und für alle, die durch ihr Wort glauben werden. Die Kirche nennt es das hohepriesterliche Gebet. Ein Teil davon ist das Evangelium am Sonntag der Väter des Ersten Ökumenischen Konzils (7. Sonntag nach Ostern).",
      "sr": "Вече пред своје страдање Исус се моли за себе, за своје ученике и за све који ће кроз њихову реч поверовати. Црква је назива Првосвештеничком молитвом. Један њен део је Јеванђеље у Недељу светих отаца Првог васељенског сабора (седма недеља по Васкрсу)."
    },
    "introTag": "history",
    "context": {
      "de": "Jesus hat mit den Jüngern das Abendmahl gefeiert und lange zu ihnen gesprochen (Joh 13–16). Nun erhebt er die Augen zum Himmel und betet.",
      "sr": "Исус је са ученицима служио Тајну вечеру и дуго им говорио (Јн 13–16). Сада подиже очи ка небу и моли се."
    },
    "reading": [
      {
        "ref": {
          "de": "Joh 17,1–5",
          "sr": "Јн 17,1–5"
        },
        "note": {
          "de": "Das ist das ewige Leben.",
          "sr": "Ово је живот вечни."
        }
      },
      {
        "ref": {
          "de": "Joh 17,6–19",
          "sr": "Јн 17,6–19"
        },
        "note": {
          "de": "Bewahre sie in deinem Namen.",
          "sr": "Сачувај их у име своје."
        }
      },
      {
        "ref": {
          "de": "Joh 17,20–26",
          "sr": "Јн 17,20–26"
        },
        "note": {
          "de": "Damit alle eins seien.",
          "sr": "Да сви буду једно."
        }
      }
    ],
    "summary": {
      "de": "Jesus betet: Vater, die Stunde ist gekommen; verherrliche deinen Sohn. Das ist das ewige Leben, dass sie dich, den einzigen wahren Gott, erkennen und den du gesandt hast, Jesus Christus. Ich habe deinen Namen den Menschen offenbart, die du mir gegeben hast. Bewahre sie in deinem Namen, damit sie eins sind wie wir. Ich bitte nicht, dass du sie aus der Welt nimmst, sondern dass du sie vor dem Bösen bewahrst. Heilige sie in der Wahrheit; dein Wort ist Wahrheit. Ich bitte aber auch für alle, die durch ihr Wort an mich glauben werden: Alle sollen eins sein, wie du, Vater, in mir bist und ich in dir, damit die Welt glaubt, dass du mich gesandt hast. Die Herrlichkeit, die du mir gegeben hast, habe ich ihnen gegeben.",
      "sr": "Исус се моли: Оче, дође час; прослави Сина свога. А ово је живот вечни, да познају Тебе, јединога истинитога Бога, и кога си послао, Исуса Христа. Јавио сам име Твоје људима које си ми дао. Сачувај их у име своје, да буду једно као и ми. Не молим да их узмеш са света, него да их сачуваш од злога. Освети их истином својом; реч је Твоја истина. А не молим само за њих, него и за оне који ће кроз њихову реч поверовати у мене: да сви буду једно, као Ти, Оче, што си у мени и ја у Теби, да и свет верује да си ме Ти послао. И славу коју си ми дао, дао сам њима."
    },
    "interp": {
      "simple": {
        "de": "Jesus betet für seine Kirche bis heute – auch für uns. Sein großer Wunsch ist, dass alle, die an ihn glauben, eins sind in der Liebe, so wie er mit dem Vater eins ist.",
        "sr": "Исус се моли за своју Цркву до данас – и за нас. Његова велика жеља је да сви који верују у Њега буду једно у љубави, као што је Он једно са Оцем."
      },
      "deeper": {
        "de": "„Das ist das ewige Leben, dass sie dich erkennen“ (17,3): Erkennen meint hier lebendige Gemeinschaft, nicht bloßes Wissen – Grundlage der orthodoxen Lehre von der Theosis. Die Einheit, um die Christus bittet, hat ihr Urbild in der Einheit von Vater und Sohn; sie ist Geschenk Gottes und zeigt sich in der Kirche, vor allem in der Eucharistie. „Die Herrlichkeit, die du mir gegeben hast, habe ich ihnen gegeben“ (17,22) verstehen die Väter als Teilhabe der Gläubigen an der göttlichen Herrlichkeit. Dass die Kirche den Text am Sonntag der Väter von Nizäa liest, verbindet die Einheit im Glauben mit dem Bekenntnis zur Gottheit Christi.",
        "sr": "„А ово је живот вечни, да познају Тебе“ (17,3): познање овде значи живу заједницу, а не само знање – темељ православног учења о обожењу. Јединство за које Христос моли има праслику у јединству Оца и Сина; оно је Божији дар и показује се у Цркви, пре свега у Евхаристији. „Славу коју си ми дао, дао сам њима“ (17,22) оци схватају као учешће верних у божанској слави. То што Црква чита текст у Недељу никејских отаца, повезује јединство у вери са исповедањем Христовог Божанства."
      },
      "tag": "dogma"
    },
    "christ": {
      "de": "Christus ist unser Hoherpriester, der sich selbst für uns heiligt (17,19) und vor dem Vater für uns eintritt (Hebr 7,25).",
      "sr": "Христос је наш Првосвештеник, који сам себе освећује за нас (17,19) и посредује за нас пред Оцем (Јев 7,25)."
    },
    "links": [
      {
        "ref": {
          "de": "Hebr 7,24–27",
          "sr": "Јев 7,24–27"
        },
        "note": {
          "de": "Der ewige Hohepriester.",
          "sr": "Вечни Првосвештеник."
        }
      },
      {
        "ref": {
          "de": "Eph 4,3–6",
          "sr": "Еф 4,3–6"
        },
        "note": {
          "de": "Ein Leib und ein Geist.",
          "sr": "Једно тело и један Дух."
        }
      },
      {
        "ref": {
          "de": "1 Joh 1,3",
          "sr": "1 Јн 1,3"
        },
        "note": {
          "de": "Gemeinschaft mit dem Vater und dem Sohn.",
          "sr": "Заједница са Оцем и Сином."
        }
      }
    ],
    "fathers": {
      "de": "Der hl. Johannes Chrysostomus legt Joh 17 in seinen Homilien zum Johannesevangelium aus (englisch in NPNF I/14). Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Свети Јован Златоуст тумачи Јн 17 у беседама на Јеванђеље по Јовану (на енглеском у NPNF I/14). Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Was ist nach Joh 17,3 das ewige Leben?",
          "sr": "Шта је, по Јн 17,3, живот вечни?"
        },
        "a": {
          "de": "Den einzigen wahren Gott und Jesus Christus zu erkennen.",
          "sr": "Да познају јединога истинитога Бога и Исуса Христа."
        }
      },
      {
        "q": {
          "de": "Wofür betet Jesus in Joh 17,21?",
          "sr": "За шта се Исус моли у Јн 17,21?"
        },
        "a": {
          "de": "Dass alle eins seien, wie er und der Vater eins sind.",
          "sr": "Да сви буду једно, као што су Он и Отац једно."
        }
      },
      {
        "q": {
          "de": "An welchem Sonntag wird ein Teil von Joh 17 gelesen?",
          "sr": "Које недеље се чита део Јн 17?"
        },
        "a": {
          "de": "Am Sonntag der Väter des Ersten Ökumenischen Konzils.",
          "sr": "У Недељу светих отаца Првог васељенског сабора."
        }
      }
    ],
    "practice": {
      "de": "Bete diese Woche jeden Tag für die Einheit: in deiner Familie, deiner Gemeinde und in der ganzen Kirche.",
      "sr": "Молите се ове недеље сваког дана за јединство: у породици, у парохији и у целој Цркви."
    },
    "review": {
      "de": "Im hohepriesterlichen Gebet bittet Jesus um die Verherrlichung, um den Schutz der Jünger und um die Einheit aller Gläubigen.",
      "sr": "У Првосвештеничкој молитви Исус моли за прослављење, за заштиту ученика и за јединство свих верних."
    },
    "quiz": [
      {
        "q": {
          "de": "Wann sprach Jesus dieses Gebet?",
          "sr": "Када је Исус изговорио ову молитву?"
        },
        "options": [
          {
            "de": "Am Abend vor seinem Leiden",
            "sr": "Вече пред своје страдање"
          },
          {
            "de": "Bei seiner Taufe",
            "sr": "На свом крштењу"
          },
          {
            "de": "Nach der Himmelfahrt",
            "sr": "После Вазнесења"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Was ist nach Joh 17,17 Wahrheit?",
          "sr": "Шта је, по Јн 17,17, истина?"
        },
        "options": [
          {
            "de": "Gottes Wort",
            "sr": "Реч Божија"
          },
          {
            "de": "Die Meinung der Mehrheit",
            "sr": "Мишљење већине"
          },
          {
            "de": "Die Philosophie",
            "sr": "Философија"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Für wen betet Jesus in Joh 17,20?",
          "sr": "За кога се Исус моли у Јн 17,20?"
        },
        "options": [
          {
            "de": "Für alle, die durch das Wort der Jünger glauben werden",
            "sr": "За све који ће кроз реч ученика поверовати"
          },
          {
            "de": "Nur für Petrus",
            "sr": "Само за Петра"
          },
          {
            "de": "Nur für sich selbst",
            "sr": "Само за себе"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-lk2",
    "book": "lk",
    "order": 58,
    "title": {
      "de": "Geburt Christi und Begegnung im Tempel",
      "sr": "Рођење Христово и Сретење"
    },
    "ref": {
      "de": "Lukas 2,1–20 und 2,22–40",
      "sr": "Лука 2,1–20 и 2,22–40"
    },
    "intro": {
      "de": "Lukas erzählt von der Geburt Jesu in Betlehem und davon, wie Maria und Josef das Kind vierzig Tage später in den Tempel bringen. Dort begegnen ihm der greise Simeon und die Prophetin Hanna.",
      "sr": "Лука приповеда о рођењу Исуса у Витлејему и о томе како Марија и Јосиф четрдесет дана касније доносе дете у храм. Тамо Га сусрећу старац Симеон и пророчица Ана."
    },
    "introTag": "history",
    "context": {
      "de": "Kaiser Augustus ordnet eine Volkszählung an. Josef zieht mit Maria von Nazareth nach Betlehem, in die Stadt Davids, aus dessen Geschlecht der Messias kommen sollte (Mi 5,1).",
      "sr": "Цар Август наређује попис. Јосиф иде са Маријом из Назарета у Витлејем, град Давидов, из чијег рода је требало да дође Месија (Мих 5,2)."
    },
    "reading": [
      {
        "ref": {
          "de": "Lk 2,1–7",
          "sr": "Лк 2,1–7"
        },
        "note": {
          "de": "In einer Krippe geboren.",
          "sr": "Рођен у јаслама."
        }
      },
      {
        "ref": {
          "de": "Lk 2,8–20",
          "sr": "Лк 2,8–20"
        },
        "note": {
          "de": "Die Hirten und die Engel.",
          "sr": "Пастири и анђели."
        }
      },
      {
        "ref": {
          "de": "Lk 2,22–40",
          "sr": "Лк 2,22–40"
        },
        "note": {
          "de": "Simeon und Hanna im Tempel.",
          "sr": "Симеон и Ана у храму."
        }
      }
    ],
    "summary": {
      "de": "In Betlehem bringt Maria ihren erstgeborenen Sohn zur Welt, wickelt ihn in Windeln und legt ihn in eine Krippe, weil in der Herberge kein Platz ist. Hirten auf dem Feld hören die Botschaft des Engels: Euch ist heute der Retter geboren, Christus, der Herr. Ein himmlisches Heer lobt Gott: Ehre sei Gott in der Höhe, und auf Erden Friede, unter den Menschen Wohlgefallen. Die Hirten finden das Kind und erzählen, was sie gehört haben; Maria bewahrt alles in ihrem Herzen. Vierzig Tage später bringen Maria und Josef das Kind in den Tempel. Der gerechte Simeon nimmt es in die Arme und lobt Gott: Nun entlässt du deinen Knecht in Frieden, denn meine Augen haben dein Heil gesehen. Zu Maria sagt er: Ein Schwert wird durch deine Seele dringen. Auch die greise Prophetin Hanna preist Gott.",
      "sr": "У Витлејему Марија рађа свог првенца, повија Га и полаже у јасле, јер у гостионици није било места. Пастири у пољу чују вест анђела: Данас вам се роди Спаситељ, Христос Господ. Мноштво војске небеске хвали Бога: Слава на висини Богу, и на земљи мир, међу људима добра воља. Пастири налазе дете и причају шта су чули; Марија чува све у срцу свом. Четрдесет дана касније Марија и Јосиф доносе дете у храм. Праведни Симеон узима Га у наручје и хвали Бога: Сада отпушташ слугу свога с миром, јер видеше очи моје спасење Твоје. Марији каже: И теби самој пробошће мач душу. И стара пророчица Ана слави Бога."
    },
    "interp": {
      "simple": {
        "de": "Gott kommt nicht in Macht und Reichtum, sondern als armes Kind. Die Einfachen – Hirten, alte Menschen – erkennen ihn zuerst.",
        "sr": "Бог не долази у моћи и богатству, него као сиромашно дете. Прости – пастири, стари људи – први Га препознају."
      },
      "deeper": {
        "de": "Die Kirche feiert die Geburt Christi am 25. Dezember und die Begegnung des Herrn im Tempel (Hypapante) am 2. Februar; das Evangelium dieses Festes ist Lk 2,22–40. Der Lobgesang des Simeon wird täglich in der Vesper gesungen. Der Gesang der Engel („Ehre sei Gott in der Höhe“) erklingt in der Großen Doxologie des Morgengottesdienstes. Die Ikone der Geburt zeigt das Kind in einer Höhle, die Krippe gleicht einem Grab – schon hier wird auf Tod und Auferstehung hingewiesen.",
        "sr": "Црква прославља Рођење Христово 25. децембра, а Сретење Господње 2. фебруара; Јеванђеље тог празника је Лк 2,22–40. Песма Симеонова пева се свакодневно на вечерњу. Песма анђела („Слава на висини Богу“) звучи у великом славословљу јутрења. Икона Рођења приказује дете у пећини, а јасле личе на гроб – већ ту се указује на смрт и васкрсење."
      },
      "tag": "history"
    },
    "christ": {
      "de": "Das Kind in der Krippe ist der ewige Sohn Gottes, der Mensch geworden ist. Simeon erkennt in ihm das Heil Gottes und das Licht für alle Völker.",
      "sr": "Дете у јаслама је вечни Син Божији, који је постао човек. Симеон у Њему препознаје спасење Божије и светлост за све народе."
    },
    "links": [
      {
        "ref": {
          "de": "Mi 5,1 (in vielen Ausgaben 5,2)",
          "sr": "Мих 5,2"
        },
        "note": {
          "de": "Aus Betlehem kommt der Herrscher.",
          "sr": "Из Витлејема излази владалац."
        }
      },
      {
        "ref": {
          "de": "Jes 9,5",
          "sr": "Ис 9,6"
        },
        "note": {
          "de": "Ein Kind ist uns geboren.",
          "sr": "Дете нам се роди."
        }
      },
      {
        "ref": {
          "de": "Gal 4,4–5",
          "sr": "Гал 4,4–5"
        },
        "note": {
          "de": "Als die Zeit erfüllt war.",
          "sr": "Кад дође пуњење времена."
        }
      }
    ],
    "fathers": {
      "de": "Der hl. Gregor von Nazianz hielt eine berühmte Weihnachtspredigt (Rede 38, englisch in NPNF II/7). Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Свети Григорије Богослов одржао је чувену божићну беседу (беседа 38, на енглеском у NPNF II/7). Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Wer erfuhr zuerst von der Geburt Christi?",
          "sr": "Ко је први сазнао за рођење Христово?"
        },
        "a": {
          "de": "Die Hirten auf dem Feld, durch einen Engel.",
          "sr": "Пастири у пољу, преко анђела."
        }
      },
      {
        "q": {
          "de": "Was sagt Simeon, als er das Kind sieht?",
          "sr": "Шта Симеон каже када види дете?"
        },
        "a": {
          "de": "Nun entlässt du deinen Knecht in Frieden, denn meine Augen haben dein Heil gesehen.",
          "sr": "Сада отпушташ слугу свога с миром, јер видеше очи моје спасење Твоје."
        }
      },
      {
        "q": {
          "de": "Wann feiert die Kirche die Begegnung im Tempel?",
          "sr": "Када Црква прославља Сретење?"
        },
        "a": {
          "de": "Am 2. Februar (julianisch 15. Februar).",
          "sr": "2. фебруара (по јулијанском 15. фебруара)."
        }
      }
    ],
    "practice": {
      "de": "Sprich diese Woche am Abend den Lobgesang des Simeon (im Gebetsbuch dieser App) und danke für den vergangenen Tag.",
      "sr": "Изговарајте ове недеље увече песму Симеонову (у молитвенику ове апликације) и захвалите за протекли дан."
    },
    "review": {
      "de": "Christus wird arm in Betlehem geboren; Hirten, Simeon und Hanna erkennen ihn. Die Kirche feiert Geburt (25. Dez.) und Begegnung (2. Febr.).",
      "sr": "Христос се рађа сиромашан у Витлејему; пастири, Симеон и Ана Га препознају. Црква прославља Рођење (25. дец.) и Сретење (2. феб.)."
    },
    "quiz": [
      {
        "q": {
          "de": "Wohin wurde das Kind gelegt?",
          "sr": "Где је дете положено?"
        },
        "options": [
          {
            "de": "In eine Krippe",
            "sr": "У јасле"
          },
          {
            "de": "In einen Palast",
            "sr": "У дворац"
          },
          {
            "de": "In den Tempel",
            "sr": "У храм"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Wie heißt die Prophetin im Tempel?",
          "sr": "Како се зове пророчица у храму?"
        },
        "options": [
          {
            "de": "Hanna",
            "sr": "Ана"
          },
          {
            "de": "Sara",
            "sr": "Сара"
          },
          {
            "de": "Rut",
            "sr": "Рута"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Welcher Gesang stammt aus Lk 2,14?",
          "sr": "Која песма потиче из Лк 2,14?"
        },
        "options": [
          {
            "de": "Ehre sei Gott in der Höhe",
            "sr": "Слава на висини Богу"
          },
          {
            "de": "Heilig, heilig, heilig",
            "sr": "Свет, свет, свет"
          },
          {
            "de": "Christus ist auferstanden",
            "sr": "Христос васкрсе"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-mt16",
    "book": "mt",
    "order": 59,
    "title": {
      "de": "Das Bekenntnis des Petrus",
      "sr": "Петрово исповедање"
    },
    "ref": {
      "de": "Matthäus 16,13–28",
      "sr": "Матеј 16,13–28"
    },
    "intro": {
      "de": "In der Gegend von Caesarea Philippi fragt Jesus seine Jünger, für wen sie ihn halten. Petrus antwortet mit dem grundlegenden Bekenntnis des christlichen Glaubens. Mt 16,13–19 ist das Evangelium am Fest der Apostel Petrus und Paulus.",
      "sr": "У крајевима Кесарије Филипове Исус пита ученике за кога Га сматрају. Петар одговара темељним исповедањем хришћанске вере. Мт 16,13–19 је Јеванђеље на празник апостола Петра и Павла."
    },
    "introTag": "history",
    "context": {
      "de": "Die Menschen hatten unterschiedliche Meinungen über Jesus: Johannes der Täufer, Elija, Jeremia oder ein anderer Prophet. Jesus will wissen, was die Jünger selbst glauben.",
      "sr": "Људи су имали различита мишљења о Исусу: Јован Крститељ, Илија, Јеремија или неки други пророк. Исус жели да зна шта сами ученици верују."
    },
    "reading": [
      {
        "ref": {
          "de": "Mt 16,13–20",
          "sr": "Мт 16,13–20"
        },
        "note": {
          "de": "Du bist der Christus.",
          "sr": "Ти си Христос."
        }
      },
      {
        "ref": {
          "de": "Mt 16,21–23",
          "sr": "Мт 16,21–23"
        },
        "note": {
          "de": "Die erste Leidensankündigung.",
          "sr": "Прво најављивање страдања."
        }
      },
      {
        "ref": {
          "de": "Mt 16,24–28",
          "sr": "Мт 16,24–28"
        },
        "note": {
          "de": "Sein Kreuz auf sich nehmen.",
          "sr": "Узети крст свој."
        }
      }
    ],
    "summary": {
      "de": "Jesus fragt: Ihr aber, für wen haltet ihr mich? Simon Petrus antwortet: Du bist der Christus, der Sohn des lebendigen Gottes. Jesus sagt: Selig bist du, denn nicht Fleisch und Blut haben dir das offenbart, sondern mein Vater im Himmel. Du bist Petrus, und auf diesen Felsen werde ich meine Kirche bauen, und die Pforten der Unterwelt werden sie nicht überwältigen. Danach kündigt Jesus an, dass er in Jerusalem leiden, getötet werden und am dritten Tag auferstehen muss. Petrus will ihn davon abhalten, doch Jesus weist ihn zurecht. Dann sagt er allen: Wer mir nachfolgen will, verleugne sich selbst, nehme sein Kreuz auf sich und folge mir.",
      "sr": "Исус пита: А ви, шта велите ко сам ја? Симон Петар одговара: Ти си Христос, Син Бога живога. Исус каже: Блажен си, јер ти то не јавише тело и крв, него Отац мој који је на небесима. Ти си Петар, и на овом камену сазидаћу Цркву своју, и врата паклена неће је надвладати. Затим Исус најављује да мора у Јерусалиму да пострада, да буде убијен и трећи дан да васкрсне. Петар хоће да Га од тога одврати, али Исус га прекорева. Тада свима каже: Ко хоће за мном да иде, нека се одрекне себе, и узме крст свој, и иде за мном."
    },
    "interp": {
      "simple": {
        "de": "Wer Jesus wirklich ist, erkennt man nicht aus eigener Kraft, sondern weil Gott es offenbart. Auf dieses Bekenntnis ist die Kirche gebaut. Christus nachfolgen heißt auch, das Kreuz anzunehmen.",
        "sr": "Ко је Исус заиста, не сазнаје се сопственом снагом, него зато што Бог открива. На овом исповедању сазидана је Црква. Ићи за Христом значи и прихватити крст."
      },
      "deeper": {
        "de": "Die orthodoxe Kirche versteht den „Felsen“ vor allem als den Glauben, den Petrus bekennt – den Glauben an Christus, den Sohn Gottes, der selbst der Eckstein ist (1 Kor 3,11; Eph 2,20). Viele Väter, darunter der hl. Johannes Chrysostomus, legen die Stelle so aus. Petrus wird als Erster unter den Aposteln hoch geehrt; eine Herrschaftsgewalt eines einzelnen Bischofs über die ganze Kirche leitet die Orthodoxie daraus nicht ab. Die gleiche Vollmacht zu binden und zu lösen erhalten in Mt 18,18 alle Apostel.",
        "sr": "Православна Црква „камен“ пре свега схвата као веру коју Петар исповеда – веру у Христа, Сина Божијег, који је сам камен угаони (1 Кор 3,11; Еф 2,20). Многи оци, међу њима свети Јован Златоуст, тако тумаче ово место. Петар се високо поштује као први међу апостолима; власт једног епископа над целом Црквом Православље из тога не изводи. Исту власт да вежу и решавају у Мт 18,18 добијају сви апостоли."
      },
      "tag": "dogma"
    },
    "christ": {
      "de": "Christus ist der Sohn des lebendigen Gottes und das Fundament der Kirche. Er geht freiwillig den Weg des Kreuzes, der zur Auferstehung führt.",
      "sr": "Христос је Син Бога живога и темељ Цркве. Он добровољно иде путем крста, који води у васкрсење."
    },
    "links": [
      {
        "ref": {
          "de": "1 Kor 3,11",
          "sr": "1 Кор 3,11"
        },
        "note": {
          "de": "Einen anderen Grund kann niemand legen.",
          "sr": "Другог темеља нико не може поставити."
        }
      },
      {
        "ref": {
          "de": "Mt 18,18",
          "sr": "Мт 18,18"
        },
        "note": {
          "de": "Alle Apostel: binden und lösen.",
          "sr": "Сви апостоли: везати и решити."
        }
      },
      {
        "ref": {
          "de": "Joh 6,68–69",
          "sr": "Јн 6,68–69"
        },
        "note": {
          "de": "Du bist der Heilige Gottes.",
          "sr": "Ти си Светац Божији."
        }
      }
    ],
    "fathers": {
      "de": "Der hl. Johannes Chrysostomus deutet in seinen Homilien zum Matthäusevangelium (Homilie 54, englisch in NPNF I/10) den Felsen auf den Glauben des Bekenntnisses. Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Свети Јован Златоуст у беседама на Јеванђеље по Матеју (беседа 54, на енглеском у NPNF I/10) камен тумачи као веру исповедања. Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Was bekennt Petrus?",
          "sr": "Шта Петар исповеда?"
        },
        "a": {
          "de": "Du bist der Christus, der Sohn des lebendigen Gottes.",
          "sr": "Ти си Христос, Син Бога живога."
        }
      },
      {
        "q": {
          "de": "Wie versteht die orthodoxe Kirche den „Felsen“?",
          "sr": "Како Православна Црква схвата „камен“?"
        },
        "a": {
          "de": "Vor allem als den Glauben an Christus, den Petrus bekennt; Christus selbst ist das Fundament.",
          "sr": "Пре свега као веру у Христа коју Петар исповеда; сам Христос је темељ."
        }
      },
      {
        "q": {
          "de": "Was gehört nach Mt 16,24 zur Nachfolge?",
          "sr": "Шта по Мт 16,24 припада следовању?"
        },
        "a": {
          "de": "Sich selbst verleugnen und sein Kreuz auf sich nehmen.",
          "sr": "Одрећи се себе и узети крст свој."
        }
      }
    ],
    "practice": {
      "de": "Sprich diese Woche jeden Morgen das Bekenntnis des Petrus als kurzes Gebet: „Du bist der Christus, der Sohn des lebendigen Gottes.“",
      "sr": "Изговарајте ове недеље свако јутро Петрово исповедање као кратку молитву: „Ти си Христос, Син Бога живога.“"
    },
    "review": {
      "de": "Petrus bekennt Jesus als Christus und Sohn Gottes; auf diesen Glauben ist die Kirche gebaut. Nachfolge heißt, das Kreuz anzunehmen.",
      "sr": "Петар исповеда Исуса као Христа и Сина Божијег; на тој вери сазидана је Црква. Следовање значи прихватити крст."
    },
    "quiz": [
      {
        "q": {
          "de": "Wo fand das Bekenntnis statt?",
          "sr": "Где се збило исповедање?"
        },
        "options": [
          {
            "de": "Bei Caesarea Philippi",
            "sr": "Код Кесарије Филипове"
          },
          {
            "de": "In Jerusalem",
            "sr": "У Јерусалиму"
          },
          {
            "de": "In Rom",
            "sr": "У Риму"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "An welchem Fest wird Mt 16,13–19 gelesen?",
          "sr": "На који празник се чита Мт 16,13–19?"
        },
        "options": [
          {
            "de": "Petrus und Paulus",
            "sr": "Петровдан (апостоли Петар и Павле)"
          },
          {
            "de": "Ostern",
            "sr": "Васкрс"
          },
          {
            "de": "Weihnachten",
            "sr": "Божић"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Wer erhält in Mt 18,18 die Vollmacht zu binden und zu lösen?",
          "sr": "Ко у Мт 18,18 добија власт да веже и решава?"
        },
        "options": [
          {
            "de": "Alle Apostel",
            "sr": "Сви апостоли"
          },
          {
            "de": "Nur Johannes",
            "sr": "Само Јован"
          },
          {
            "de": "Niemand",
            "sr": "Нико"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-heb4",
    "book": "heb",
    "order": 60,
    "title": {
      "de": "Christus, unser Hoherpriester",
      "sr": "Христос, наш Првосвештеник"
    },
    "ref": {
      "de": "Hebräer 4,14–5,10",
      "sr": "Јеврејима 4,14–5,10"
    },
    "intro": {
      "de": "Der Hebräerbrief erklärt, wie Christus den alten Tempeldienst erfüllt. Hebr 4,14–5,6 ist die Lesung am Sonntag der Kreuzverehrung, dem dritten Sonntag der Großen Fastenzeit.",
      "sr": "Посланица Јеврејима објашњава како Христос испуњава старо храмовно служење. Јев 4,14–5,6 је Апостол у Крстопоклону недељу, трећу недељу Великог поста."
    },
    "introTag": "history",
    "context": {
      "de": "Die Empfänger des Briefes waren Christen jüdischer Herkunft, die unter Druck standen und versucht waren, den Glauben aufzugeben. Der Brief ermutigt sie, an Christus festzuhalten.",
      "sr": "Примаоци посланице били су хришћани јудејског порекла, који су били под притиском и у искушењу да напусте веру. Посланица их храбри да се држе Христа."
    },
    "reading": [
      {
        "ref": {
          "de": "Hebr 4,14–16",
          "sr": "Јев 4,14–16"
        },
        "note": {
          "de": "Lasst uns mit Zuversicht hinzutreten.",
          "sr": "Приступимо са слободом."
        }
      },
      {
        "ref": {
          "de": "Hebr 5,1–6",
          "sr": "Јев 5,1–6"
        },
        "note": {
          "de": "Priester nach der Ordnung Melchisedeks.",
          "sr": "Свештеник по чину Мелхиседекову."
        }
      },
      {
        "ref": {
          "de": "Hebr 5,7–10",
          "sr": "Јев 5,7–10"
        },
        "note": {
          "de": "Mit lautem Schreien und Tränen.",
          "sr": "Са јаким вапајем и сузама."
        }
      }
    ],
    "summary": {
      "de": "Weil wir einen großen Hohenpriester haben, Jesus, den Sohn Gottes, der die Himmel durchschritten hat, lasst uns am Bekenntnis festhalten. Er kann mit unseren Schwächen mitfühlen, denn er wurde in allem versucht wie wir, aber ohne Sünde. Darum lasst uns mit Zuversicht zum Thron der Gnade hintreten, damit wir Erbarmen und Hilfe finden. Jeder Hohepriester wird aus den Menschen genommen und von Gott berufen. So hat auch Christus sich nicht selbst diese Würde gegeben; Gott hat ihn berufen: Du bist Priester in Ewigkeit nach der Ordnung Melchisedeks. In den Tagen seines irdischen Lebens hat er mit lautem Schreien und Tränen gebetet und durch Leiden Gehorsam gelernt; so ist er für alle, die ihm gehorchen, der Urheber des ewigen Heils geworden.",
      "sr": "Пошто имамо великог Првосвештеника, Исуса, Сина Божијег, који је прошао небеса, држимо се исповедања. Он може да саосећа са нашим слабостима, јер је у свему био кушан као и ми, али без греха. Зато приступимо са слободом престолу благодати, да примимо милост и нађемо помоћ. Сваки првосвештеник узима се између људи и Бог га позива. Тако ни Христос није сам себи дао ово достојанство; Бог Га је позвао: Ти си свештеник довека по чину Мелхиседекову. У дане свог земаљског живота молио се са јаким вапајем и сузама и кроз страдање научио послушности; тако је постао узрок вечног спасења за све који Га слушају."
    },
    "interp": {
      "simple": {
        "de": "Christus kennt unsere Schwachheit aus eigener Erfahrung. Darum dürfen wir mit Vertrauen zu Gott kommen, auch wenn wir versagt haben.",
        "sr": "Христос познаје нашу слабост из сопственог искуства. Зато смемо са поверењем да приђемо Богу, и када смо посрнули."
      },
      "deeper": {
        "de": "Christus ist wahrer Gott und wahrer Mensch: Als Mensch wurde er versucht, litt und betete unter Tränen; als Gott ist er ohne Sünde und schenkt ewiges Heil. Dass die Kirche diese Lesung in der Mitte der Fastenzeit am Sonntag der Kreuzverehrung liest, verbindet das Kreuz mit dem Hohenpriester, der sich selbst als Opfer darbringt. Der Hinweis auf Melchisedek (Gen 14,18) – Priester mit Brot und Wein – wird von den Vätern auf die Eucharistie bezogen.",
        "sr": "Христос је истинити Бог и истинити човек: као човек био је кушан, страдао и молио се са сузама; као Бог је без греха и дарује вечно спасење. То што Црква ово читање чита усред поста у Крстопоклону недељу, повезује крст са Првосвештеником који самог себе приноси као жртву. Помен Мелхиседека (Пост 14,18) – свештеника са хлебом и вином – оци односе на Евхаристију."
      },
      "tag": "dogma"
    },
    "christ": {
      "de": "Christus ist Priester und Opfer zugleich. In jeder Liturgie betet der Priester: Du bist es, der darbringt und dargebracht wird.",
      "sr": "Христос је истовремено свештеник и жртва. На свакој Литургији свештеник се моли: Ти си Онај који приноси и који се приноси."
    },
    "links": [
      {
        "ref": {
          "de": "Gen 14,18–20",
          "sr": "Пост 14,18–20"
        },
        "note": {
          "de": "Melchisedek bringt Brot und Wein.",
          "sr": "Мелхиседек износи хлеб и вино."
        }
      },
      {
        "ref": {
          "de": "Ps 109,4 (LXX; hebr. 110,4)",
          "sr": "Пс 109,4 (по Септуагинти; јевр. 110,4)"
        },
        "note": {
          "de": "Priester in Ewigkeit.",
          "sr": "Свештеник довека."
        }
      },
      {
        "ref": {
          "de": "Mt 26,38–39",
          "sr": "Мт 26,38–39"
        },
        "note": {
          "de": "Das Gebet in Getsemani.",
          "sr": "Молитва у Гетсиманији."
        }
      }
    ],
    "fathers": {
      "de": "Der hl. Johannes Chrysostomus legt den Hebräerbrief in Homilien aus (englisch in NPNF I/14). Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Свети Јован Златоуст тумачи Посланицу Јеврејима у беседама (на енглеском у NPNF I/14). Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Warum kann Christus mit unseren Schwächen mitfühlen?",
          "sr": "Зашто Христос може да саосећа са нашим слабостима?"
        },
        "a": {
          "de": "Weil er in allem versucht wurde wie wir, aber ohne Sünde.",
          "sr": "Зато што је у свему био кушан као и ми, али без греха."
        }
      },
      {
        "q": {
          "de": "Nach welcher Ordnung ist Christus Priester?",
          "sr": "По ком чину је Христос свештеник?"
        },
        "a": {
          "de": "Nach der Ordnung Melchisedeks.",
          "sr": "По чину Мелхиседекову."
        }
      },
      {
        "q": {
          "de": "Wann liest die Kirche Hebr 4,14–5,6?",
          "sr": "Када Црква чита Јев 4,14–5,6?"
        },
        "a": {
          "de": "Am Sonntag der Kreuzverehrung, mitten in der Großen Fastenzeit.",
          "sr": "У Крстопоклону недељу, усред Великог поста."
        }
      }
    ],
    "practice": {
      "de": "Wenn du dich diese Woche schwach oder schuldig fühlst, sprich: „Herr, du kennst meine Schwachheit. Mit Vertrauen komme ich zu dir.“",
      "sr": "Када се ове недеље осетите слабим или кривим, реците: „Господе, Ти знаш моју слабост. Са поверењем долазим к Теби.“"
    },
    "review": {
      "de": "Christus ist der Hohepriester, der unsere Schwachheit kennt und ohne Sünde ist. Darum treten wir mit Zuversicht zum Thron der Gnade.",
      "sr": "Христос је Првосвештеник који зна нашу слабост и без греха је. Зато са слободом приступамо престолу благодати."
    },
    "quiz": [
      {
        "q": {
          "de": "Zu welchem Thron sollen wir mit Zuversicht hintreten?",
          "sr": "Ком престолу треба да приступимо са слободом?"
        },
        "options": [
          {
            "de": "Zum Thron der Gnade",
            "sr": "Престолу благодати"
          },
          {
            "de": "Zum Thron des Kaisers",
            "sr": "Престолу цара"
          },
          {
            "de": "Zum Richterstuhl",
            "sr": "Судијској столици"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Wer war Melchisedek?",
          "sr": "Ко је био Мелхиседек?"
        },
        "options": [
          {
            "de": "Priester und König, der Brot und Wein darbrachte",
            "sr": "Свештеник и цар који је изнео хлеб и вино"
          },
          {
            "de": "Ein Prophet in Babylon",
            "sr": "Пророк у Вавилону"
          },
          {
            "de": "Ein Apostel",
            "sr": "Апостол"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "An welchem Sonntag wird die Stelle gelesen?",
          "sr": "Које недеље се чита ово место?"
        },
        "options": [
          {
            "de": "Sonntag der Kreuzverehrung",
            "sr": "Крстопоклона недеља"
          },
          {
            "de": "Palmsonntag",
            "sr": "Цвети"
          },
          {
            "de": "Thomassonntag",
            "sr": "Томина недеља"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-gen28",
    "book": "gen",
    "order": 61,
    "title": {
      "de": "Die Himmelsleiter",
      "sr": "Јаковљеве лествице"
    },
    "ref": {
      "de": "Genesis 28,10–22",
      "sr": "Постање 28,10–22"
    },
    "intro": {
      "de": "Jakob flieht vor seinem Bruder Esau. Unterwegs schläft er unter freiem Himmel und sieht im Traum eine Leiter, die Himmel und Erde verbindet. Gen 28,10–17 ist eine Lesung der Vesper an Festen der Gottesgebärerin.",
      "sr": "Јаков бежи од свог брата Исава. На путу спава под ведрим небом и у сну види лествице које спајају небо и земљу. Пост 28,10–17 је читање на вечерњу празника Богородице."
    },
    "introTag": "history",
    "context": {
      "de": "Jakob hatte sich den Segen seines Vaters Isaak mit List erschlichen. Nun ist er allein, auf der Flucht, ohne Besitz – und gerade hier begegnet ihm Gott.",
      "sr": "Јаков је лукавством добио благослов свог оца Исака. Сада је сам, у бегству, без имања – и баш ту га сусреће Бог."
    },
    "reading": [
      {
        "ref": {
          "de": "Gen 28,10–15",
          "sr": "Пост 28,10–15"
        },
        "note": {
          "de": "Die Leiter und Gottes Verheißung.",
          "sr": "Лествице и Божије обећање."
        }
      },
      {
        "ref": {
          "de": "Gen 28,16–19",
          "sr": "Пост 28,16–19"
        },
        "note": {
          "de": "Hier ist das Haus Gottes.",
          "sr": "Ово је дом Божији."
        }
      },
      {
        "ref": {
          "de": "Gen 28,20–22",
          "sr": "Пост 28,20–22"
        },
        "note": {
          "de": "Jakobs Gelübde.",
          "sr": "Јаковљев завет."
        }
      }
    ],
    "summary": {
      "de": "Jakob legt einen Stein unter seinen Kopf und schläft ein. Er sieht eine Leiter, die auf der Erde steht und bis zum Himmel reicht; Engel Gottes steigen auf und nieder. Oben steht der Herr und spricht: Ich bin der Gott Abrahams und Isaaks. Das Land, auf dem du liegst, will ich dir und deinen Nachkommen geben; durch dich sollen alle Geschlechter der Erde gesegnet werden. Ich bin mit dir und behüte dich, wohin du auch gehst. Jakob erwacht und sagt: Wahrhaftig, der Herr ist an diesem Ort, und ich wusste es nicht. Wie ehrfurchtgebietend ist diese Stätte! Hier ist nichts anderes als das Haus Gottes und das Tor des Himmels. Er richtet den Stein als Denkmal auf, gießt Öl darauf und nennt den Ort Bet-El, Haus Gottes.",
      "sr": "Јаков ставља камен под главу и заспи. Види лествице које стоје на земљи и досежу до неба; анђели Божији се пењу и силазе. Горе стоји Господ и говори: Ја сам Бог Авраамов и Исаков. Земљу на којој лежиш даћу теби и потомству твоме; кроз тебе ће се благословити сва племена на земљи. Ја сам с тобом и чуваћу те куда год пођеш. Јаков се буди и каже: Заиста је Господ на овом месту, а ја нисам знао. Како је страшно ово место! Ово није друго него дом Божији и врата небеска. Подиже камен као спомен, излива уље на њега и место назива Ветиљ, дом Божији."
    },
    "interp": {
      "simple": {
        "de": "Gott begegnet Jakob gerade dann, als er allein und schuldig auf der Flucht ist. Gott verbindet Himmel und Erde und bleibt bei dem Menschen, wohin er auch geht.",
        "sr": "Бог сусреће Јакова баш када је сам и крив у бегству. Бог спаја небо и земљу и остаје са човеком куда год пође."
      },
      "deeper": {
        "de": "Christus bezieht die Leiter auf sich: Ihr werdet die Engel Gottes auf- und niedersteigen sehen über dem Menschensohn (Joh 1,51). Er ist die Verbindung zwischen Gott und Mensch. Die Hymnen der Kirche nennen auch die Gottesgebärerin „Leiter“, über die Gott zu den Menschen herabstieg; darum wird der Text an ihren Festen gelesen. Jakobs Worte „Wie ehrfurchtgebietend ist diese Stätte … das Haus Gottes“ werden mit dem Kirchenraum verbunden.",
        "sr": "Христос лествице односи на себе: Видећете анђеле Божије како се пењу и силазе над Сином Човечијим (Јн 1,51). Он је веза између Бога и човека. Химне Цркве и Богородицу називају „лествицама“ по којима је Бог сишао људима; зато се текст чита на њене празнике. Јаковљеве речи „Како је страшно ово место … дом Божији“ повезују се са храмом."
      },
      "tag": "opinion"
    },
    "christ": {
      "de": "Christus ist die wahre Leiter zwischen Himmel und Erde: In ihm ist Gott Mensch geworden, damit der Mensch zu Gott aufsteigen kann (Joh 1,51).",
      "sr": "Христос је праве лествице између неба и земље: у Њему је Бог постао човек, да би се човек могао узнети к Богу (Јн 1,51)."
    },
    "links": [
      {
        "ref": {
          "de": "Joh 1,51",
          "sr": "Јн 1,51"
        },
        "note": {
          "de": "Engel über dem Menschensohn.",
          "sr": "Анђели над Сином Човечијим."
        }
      },
      {
        "ref": {
          "de": "Ps 120,7–8 (LXX; hebr. 121)",
          "sr": "Пс 120,7–8 (по Септуагинти; јевр. 121)"
        },
        "note": {
          "de": "Der Herr behütet dich.",
          "sr": "Господ ће те чувати."
        }
      },
      {
        "ref": {
          "de": "Joh 14,6",
          "sr": "Јн 14,6"
        },
        "note": {
          "de": "Ich bin der Weg.",
          "sr": "Ја сам пут."
        }
      }
    ],
    "fathers": {
      "de": "Viele Väter deuten Jakobs Leiter auf Christus und auf die Menschwerdung; der hl. Johannes Klimakos benannte nach ihr seine Schrift über den geistlichen Aufstieg („Die Leiter“). Für diese Version wurde kein freier Link geprüft; wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Многи оци Јаковљеве лествице тумаче као Христа и оваплоћење; свети Јован Лествичник по њима је назвао свој спис о духовном узрастању („Лествица“). За ово издање није проверена слободна веза; апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Was sah Jakob im Traum?",
          "sr": "Шта је Јаков видео у сну?"
        },
        "a": {
          "de": "Eine Leiter von der Erde bis zum Himmel, auf der Engel auf- und niederstiegen.",
          "sr": "Лествице од земље до неба, по којима су се анђели пењали и силазили."
        }
      },
      {
        "q": {
          "de": "Wie bezieht Christus die Leiter auf sich?",
          "sr": "Како Христос лествице односи на себе?"
        },
        "a": {
          "de": "Er sagt, die Engel werden über dem Menschensohn auf- und niedersteigen (Joh 1,51).",
          "sr": "Каже да ће се анђели пењати и силазити над Сином Човечијим (Јн 1,51)."
        }
      },
      {
        "q": {
          "de": "Warum wird Gen 28 an Festen der Gottesgebärerin gelesen?",
          "sr": "Зашто се Пост 28 чита на празнике Богородице?"
        },
        "a": {
          "de": "Weil die Kirche sie als Leiter besingt, über die Gott zu den Menschen herabstieg.",
          "sr": "Зато што је Црква опева као лествице по којима је Бог сишао људима."
        }
      }
    ],
    "practice": {
      "de": "Sprich beim Betreten einer Kirche leise Jakobs Worte: „Hier ist nichts anderes als das Haus Gottes und das Tor des Himmels.“",
      "sr": "При уласку у храм тихо изговорите Јаковљеве речи: „Ово није друго него дом Божији и врата небеска.“"
    },
    "review": {
      "de": "Jakob sieht die Himmelsleiter und erkennt: Gott ist an diesem Ort. Christus ist die wahre Verbindung zwischen Himmel und Erde.",
      "sr": "Јаков види лествице и спознаје: Бог је на овом месту. Христос је права веза између неба и земље."
    },
    "quiz": [
      {
        "q": {
          "de": "Vor wem floh Jakob?",
          "sr": "Од кога је Јаков бежао?"
        },
        "options": [
          {
            "de": "Vor seinem Bruder Esau",
            "sr": "Од брата Исава"
          },
          {
            "de": "Vor dem Pharao",
            "sr": "Од фараона"
          },
          {
            "de": "Vor Laban",
            "sr": "Од Лавана"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Wie nannte Jakob den Ort?",
          "sr": "Како је Јаков назвао место?"
        },
        "options": [
          {
            "de": "Bet-El (Haus Gottes)",
            "sr": "Ветиљ (дом Божији)"
          },
          {
            "de": "Betlehem",
            "sr": "Витлејем"
          },
          {
            "de": "Sinai",
            "sr": "Синај"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Welcher Heilige benannte seine Schrift nach der Leiter?",
          "sr": "Који светитељ је по лествицама назвао свој спис?"
        },
        "options": [
          {
            "de": "Johannes Klimakos",
            "sr": "Јован Лествичник"
          },
          {
            "de": "Basilius der Große",
            "sr": "Василије Велики"
          },
          {
            "de": "Sava",
            "sr": "Сава"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-ex20",
    "book": "ex",
    "order": 62,
    "title": {
      "de": "Die Zehn Gebote",
      "sr": "Десет заповести"
    },
    "ref": {
      "de": "Exodus 20,1–17",
      "sr": "Излазак 20,1–17"
    },
    "intro": {
      "de": "Am Berg Sinai gibt Gott seinem befreiten Volk die Zehn Gebote. Sie sind keine Fesseln, sondern Wegweiser für ein Leben in Freiheit mit Gott und den Mitmenschen.",
      "sr": "На гори Синају Бог даје свом ослобођеном народу Десет заповести. Оне нису окови, него путокази за живот у слободи са Богом и ближњима."
    },
    "introTag": "history",
    "context": {
      "de": "Gott hat Israel aus der Sklaverei in Ägypten befreit. Bevor er Gebote gibt, erinnert er an diese Befreiung: Zuerst kommt die Gnade, dann die Antwort des Menschen.",
      "sr": "Бог је извео Израиљ из ропства у Египту. Пре него што да заповести, подсећа на то ослобођење: прво долази благодат, па одговор човека."
    },
    "reading": [
      {
        "ref": {
          "de": "Ex 20,1–11",
          "sr": "Изл 20,1–11"
        },
        "note": {
          "de": "Die Gebote gegenüber Gott.",
          "sr": "Заповести према Богу."
        }
      },
      {
        "ref": {
          "de": "Ex 20,12–17",
          "sr": "Изл 20,12–17"
        },
        "note": {
          "de": "Die Gebote gegenüber den Menschen.",
          "sr": "Заповести према људима."
        }
      }
    ],
    "summary": {
      "de": "Gott spricht: Ich bin der Herr, dein Gott, der dich aus Ägypten, aus dem Sklavenhaus, geführt hat. 1. Du sollst keine anderen Götter neben mir haben. 2. Du sollst dir kein Götzenbild machen und es nicht anbeten. 3. Du sollst den Namen des Herrn, deines Gottes, nicht missbrauchen. 4. Gedenke des Sabbats, ihn zu heiligen. 5. Ehre deinen Vater und deine Mutter. 6. Du sollst nicht morden. 7. Du sollst nicht ehebrechen. 8. Du sollst nicht stehlen. 9. Du sollst nicht falsch gegen deinen Nächsten aussagen. 10. Du sollst nicht begehren, was deinem Nächsten gehört.",
      "sr": "Бог говори: Ја сам Господ Бог твој, који сам те извео из Египта, из дома ропства. 1. Немој имати других богова осим мене. 2. Не прави себи идола и не клањај му се. 3. Не узимај узалуд имена Господа Бога свога. 4. Сећај се дана одмора да га светкујеш. 5. Поштуј оца свога и матер своју. 6. Не убиј. 7. Не чини прељубе. 8. Не укради. 9. Не сведочи лажно на ближњега свога. 10. Не пожели ништа што је ближњега твога."
    },
    "interp": {
      "simple": {
        "de": "Die ersten Gebote ordnen unser Verhältnis zu Gott, die übrigen unser Verhältnis zu den Menschen. Christus fasst alles im Gebot der Liebe zu Gott und zum Nächsten zusammen.",
        "sr": "Прве заповести уређују наш однос према Богу, остале наш однос према људима. Христос све сажима у заповести љубави према Богу и ближњем."
      },
      "deeper": {
        "de": "In der orthodoxen Zählung ist das Verbot von Götzenbildern das zweite Gebot. Die Ikonen widersprechen ihm nicht: Das Siebte Ökumenische Konzil (787) lehrte, dass die Verehrung einer Ikone auf die dargestellte Person übergeht und Anbetung allein Gott gebührt; weil Gott in Christus sichtbar Mensch geworden ist, darf er dargestellt werden. Der Sabbat wird in der Kirche durch den Sonntag, den Tag der Auferstehung, erfüllt. Christus vertieft die Gebote: Schon Zorn und begehrlicher Blick verletzen sie (Mt 5,21–28).",
        "sr": "По православном бројању забрана идола је друга заповест. Иконе јој не противрече: Седми васељенски сабор (787) учио је да поштовање иконе прелази на насликану личност, а поклоњење припада само Богу; пошто је Бог у Христу постао видљиви човек, сме да буде насликан. Субота се у Цркви испуњава недељом, даном Васкрсења. Христос продубљује заповести: већ гнев и пожудан поглед их повређују (Мт 5,21–28)."
      },
      "tag": "dogma"
    },
    "christ": {
      "de": "Christus ist nicht gekommen, das Gesetz aufzuheben, sondern zu erfüllen (Mt 5,17). Er schreibt Gottes Gebot durch den Heiligen Geist in unsere Herzen.",
      "sr": "Христос није дошао да укине закон, него да га испуни (Мт 5,17). Он Духом Светим уписује Божију заповест у наша срца."
    },
    "links": [
      {
        "ref": {
          "de": "Mt 22,37–40",
          "sr": "Мт 22,37–40"
        },
        "note": {
          "de": "Das größte Gebot.",
          "sr": "Највећа заповест."
        }
      },
      {
        "ref": {
          "de": "Mt 5,17–28",
          "sr": "Мт 5,17–28"
        },
        "note": {
          "de": "Erfüllung und Vertiefung des Gesetzes.",
          "sr": "Испуњење и продубљење закона."
        }
      },
      {
        "ref": {
          "de": "Röm 13,8–10",
          "sr": "Рим 13,8–10"
        },
        "note": {
          "de": "Die Liebe ist die Erfüllung des Gesetzes.",
          "sr": "Љубав је испуњење закона."
        }
      }
    ],
    "fathers": {
      "de": "Die Unterscheidung zwischen Verehrung und Anbetung ist in den Beschlüssen des Siebten Ökumenischen Konzils festgehalten (englisch in NPNF II/14). Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Разликовање поштовања и поклоњења записано је у одлукама Седмог васељенског сабора (на енглеском у NPNF II/14). Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Woran erinnert Gott, bevor er die Gebote gibt?",
          "sr": "На шта Бог подсећа пре него што да заповести?"
        },
        "a": {
          "de": "An die Befreiung aus der Sklaverei in Ägypten.",
          "sr": "На ослобођење из ропства у Египту."
        }
      },
      {
        "q": {
          "de": "Warum widersprechen Ikonen nicht dem zweiten Gebot?",
          "sr": "Зашто иконе не противрече другој заповести?"
        },
        "a": {
          "de": "Weil die Verehrung auf die dargestellte Person übergeht, Anbetung allein Gott gebührt und Gott in Christus sichtbar Mensch wurde.",
          "sr": "Зато што поштовање прелази на насликану личност, поклоњење припада само Богу, а Бог је у Христу постао видљиви човек."
        }
      },
      {
        "q": {
          "de": "Wie fasst Christus die Gebote zusammen?",
          "sr": "Како Христос сажима заповести?"
        },
        "a": {
          "de": "Im Gebot der Liebe zu Gott und zum Nächsten.",
          "sr": "У заповести љубави према Богу и ближњем."
        }
      }
    ],
    "practice": {
      "de": "Nutze die Zehn Gebote diese Woche für eine Gewissensprüfung am Abend – ein Gebot pro Tag.",
      "sr": "Користите ове недеље Десет заповести за испитивање савести увече – по једну заповест сваког дана."
    },
    "review": {
      "de": "Am Sinai gibt Gott die Zehn Gebote als Wegweiser in die Freiheit. Christus erfüllt und vertieft sie im Gebot der Liebe.",
      "sr": "На Синају Бог даје Десет заповести као путоказе у слободу. Христос их испуњава и продубљује у заповести љубави."
    },
    "quiz": [
      {
        "q": {
          "de": "Auf welchem Berg gab Gott die Zehn Gebote?",
          "sr": "На којој гори је Бог дао Десет заповести?"
        },
        "options": [
          {
            "de": "Sinai",
            "sr": "Синај"
          },
          {
            "de": "Tabor",
            "sr": "Тавор"
          },
          {
            "de": "Karmel",
            "sr": "Кармил"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Welches Gebot ist in der orthodoxen Zählung das zweite?",
          "sr": "Која заповест је по православном бројању друга?"
        },
        "options": [
          {
            "de": "Kein Götzenbild machen",
            "sr": "Не прави себи идола"
          },
          {
            "de": "Nicht stehlen",
            "sr": "Не укради"
          },
          {
            "de": "Den Sabbat heiligen",
            "sr": "Светкуј дан одмора"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Welches Konzil erklärte die Ikonenverehrung?",
          "sr": "Који сабор је објаснио поштовање икона?"
        },
        "options": [
          {
            "de": "Das Siebte Ökumenische Konzil (787)",
            "sr": "Седми васељенски сабор (787)"
          },
          {
            "de": "Das Apostelkonzil",
            "sr": "Апостолски сабор"
          },
          {
            "de": "Das Konzil von Trient",
            "sr": "Тридентски сабор"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-jn4",
    "book": "jn",
    "order": 63,
    "title": {
      "de": "Die Samariterin am Brunnen",
      "sr": "Самарјанка на студенцу"
    },
    "ref": {
      "de": "Johannes 4,5–42",
      "sr": "Јован 4,5–42"
    },
    "intro": {
      "de": "Am Jakobsbrunnen in Samarien spricht Jesus mit einer Frau über lebendiges Wasser. Die Kirche liest diesen Abschnitt am fünften Sonntag nach Ostern, dem Sonntag der Samariterin.",
      "sr": "На Јаковљевом студенцу у Самарији Исус разговара са једном женом о живој води. Црква чита овај одељак пете недеље по Васкрсу, у Недељу Самарјанке."
    },
    "introTag": "history",
    "context": {
      "de": "Juden und Samariter mieden einander. Dass ein jüdischer Lehrer allein mit einer samaritischen Frau spricht, war ungewöhnlich – zumal sie wegen ihres Lebens wohl gemieden wurde und zur heißen Mittagszeit Wasser holte.",
      "sr": "Јудејци и Самарјани избегавали су једни друге. То што јеврејски учитељ разговара насамо са самарјанском женом било је необично – тим више што су је вероватно избегавали због њеног живота, па је воду захватала у подневној врућини."
    },
    "reading": [
      {
        "ref": {
          "de": "Joh 4,5–15",
          "sr": "Јн 4,5–15"
        },
        "note": {
          "de": "Das lebendige Wasser.",
          "sr": "Вода жива."
        }
      },
      {
        "ref": {
          "de": "Joh 4,16–26",
          "sr": "Јн 4,16–26"
        },
        "note": {
          "de": "Anbetung in Geist und Wahrheit.",
          "sr": "Поклоњење у духу и истини."
        }
      },
      {
        "ref": {
          "de": "Joh 4,27–42",
          "sr": "Јн 4,27–42"
        },
        "note": {
          "de": "Die Frau wird zur Botin.",
          "sr": "Жена постаје весница."
        }
      }
    ],
    "summary": {
      "de": "Jesus bittet die Frau: Gib mir zu trinken. Sie wundert sich, dass ein Jude sie anspricht. Jesus sagt: Wenn du wüsstest, wer dich bittet, hättest du ihn gebeten, und er hätte dir lebendiges Wasser gegeben; wer davon trinkt, wird nie mehr Durst haben, es wird in ihm zur Quelle, die ins ewige Leben sprudelt. Jesus sagt ihr, dass sie fünf Männer hatte; sie erkennt ihn als Propheten. Er sagt: Die Stunde kommt, in der die wahren Anbeter den Vater in Geist und Wahrheit anbeten. Als sie vom Messias spricht, antwortet er: Ich bin es, der mit dir spricht. Die Frau lässt ihren Krug stehen, eilt in die Stadt und ruft: Kommt und seht! Viele Samariter glauben an ihn und sagen: Er ist wahrhaft der Retter der Welt.",
      "sr": "Исус моли жену: Дај ми да пијем. Она се чуди што јој се Јудејац обраћа. Исус каже: Кад би знала ко ти тражи, ти би Њега молила, и дао би ти воду живу; ко пије од те воде, неће ожеднети довека, него ће у њему постати извор воде која тече у живот вечни. Исус јој каже да је имала пет мужева; она Га препознаје као пророка. Он каже: Долази час када ће се прави богомољци клањати Оцу у духу и истини. Када она говори о Месији, Он одговара: Ја сам, који с тобом говорим. Жена оставља свој суд, хита у град и виче: Ходите да видите! Многи Самарјани верују у Њега и говоре: Он је заиста Спаситељ света."
    },
    "interp": {
      "simple": {
        "de": "Jesus geht auf einen Menschen zu, den andere meiden. Er kennt ihr Leben und verurteilt sie nicht, sondern schenkt ihr Hoffnung. Wer ihm begegnet, will es anderen weitersagen.",
        "sr": "Исус прилази човеку кога други избегавају. Он зна њен живот и не осуђује је, него јој дарује наду. Ко Га сретне, жели да то каже другима."
      },
      "deeper": {
        "de": "Das „lebendige Wasser“ deutet die Kirche auf den Heiligen Geist (vgl. Joh 7,38–39) und auf die Taufe. Anbetung „in Geist und Wahrheit“ ist nicht gegen Gottesdienst, Kirche und Sakramente gerichtet, sondern meint die Anbetung im Heiligen Geist und in Christus, der die Wahrheit ist. Die Überlieferung nennt die Frau Photini (die Erleuchtete) und verehrt sie als Märtyrerin und „Apostelgleiche“; diese Angaben stammen aus späterer Überlieferung.",
        "sr": "„Живу воду“ Црква тумачи као Духа Светога (уп. Јн 7,38–39) и као крштење. Поклоњење „у духу и истини“ није уперено против богослужења, Цркве и Светих Тајни, него значи поклоњење у Духу Светом и у Христу, који је Истина. Предање жену назива Фотина (просвећена) и поштује је као мученицу и „равноапостолну“; ти подаци потичу из каснијег предања."
      },
      "tag": "opinion"
    },
    "christ": {
      "de": "Christus ist die Quelle des lebendigen Wassers. Er offenbart sich der Samariterin ausdrücklich als Messias – eine der ersten solchen Selbstoffenbarungen im Johannesevangelium.",
      "sr": "Христос је извор воде живе. Он се Самарјанки изричито открива као Месија – једно од првих таквих самооткривења у Јеванђељу по Јовану."
    },
    "links": [
      {
        "ref": {
          "de": "Joh 7,37–39",
          "sr": "Јн 7,37–39"
        },
        "note": {
          "de": "Ströme lebendigen Wassers – der Geist.",
          "sr": "Реке воде живе – Дух."
        }
      },
      {
        "ref": {
          "de": "Jer 2,13",
          "sr": "Јер 2,13"
        },
        "note": {
          "de": "Mich, die Quelle lebendigen Wassers, haben sie verlassen.",
          "sr": "Мене, извор воде живе, оставише."
        }
      },
      {
        "ref": {
          "de": "Offb 22,17",
          "sr": "Отк 22,17"
        },
        "note": {
          "de": "Wer durstig ist, der komme.",
          "sr": "Ко је жедан, нека дође."
        }
      }
    ],
    "fathers": {
      "de": "Der hl. Johannes Chrysostomus legt Joh 4 in seinen Homilien zum Johannesevangelium aus (englisch in NPNF I/14). Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Свети Јован Златоуст тумачи Јн 4 у беседама на Јеванђеље по Јовану (на енглеском у NPNF I/14). Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Was verspricht Jesus der Frau?",
          "sr": "Шта Исус обећава жени?"
        },
        "a": {
          "de": "Lebendiges Wasser, nach dem man nie mehr Durst hat und das zur Quelle des ewigen Lebens wird.",
          "sr": "Воду живу, после које се више не жеђа и која постаје извор живота вечнога."
        }
      },
      {
        "q": {
          "de": "Was tut die Frau nach dem Gespräch?",
          "sr": "Шта жена чини после разговора?"
        },
        "a": {
          "de": "Sie lässt den Krug stehen und ruft die Menschen der Stadt zu Jesus.",
          "sr": "Оставља суд и позива људе из града к Исусу."
        }
      },
      {
        "q": {
          "de": "Wann liest die Kirche Joh 4?",
          "sr": "Када Црква чита Јн 4?"
        },
        "a": {
          "de": "Am fünften Sonntag nach Ostern, dem Sonntag der Samariterin.",
          "sr": "Пете недеље по Васкрсу, у Недељу Самарјанке."
        }
      }
    ],
    "practice": {
      "de": "Denke an einen Menschen, der oft gemieden wird. Begegne ihm diese Woche bewusst freundlich.",
      "sr": "Помислите на човека кога често избегавају. Сретните га ове недеље свесно љубазно."
    },
    "review": {
      "de": "Jesus schenkt der Samariterin lebendiges Wasser und offenbart sich als Messias; sie wird zur Botin für ihre Stadt.",
      "sr": "Исус дарује Самарјанки воду живу и открива се као Месија; она постаје весница за свој град."
    },
    "quiz": [
      {
        "q": {
          "de": "An welchem Brunnen fand das Gespräch statt?",
          "sr": "На ком студенцу се одиграо разговор?"
        },
        "options": [
          {
            "de": "Am Jakobsbrunnen",
            "sr": "На Јаковљевом студенцу"
          },
          {
            "de": "Am Teich Betesda",
            "sr": "На бањи Витезди"
          },
          {
            "de": "Am Jordan",
            "sr": "На Јордану"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Wie nennt die Überlieferung die Samariterin?",
          "sr": "Како предање назива Самарјанку?"
        },
        "options": [
          {
            "de": "Photini",
            "sr": "Фотина"
          },
          {
            "de": "Martha",
            "sr": "Марта"
          },
          {
            "de": "Lydia",
            "sr": "Лидија"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Was sagen die Samariter am Ende über Jesus?",
          "sr": "Шта Самарјани на крају кажу о Исусу?"
        },
        "options": [
          {
            "de": "Er ist wahrhaft der Retter der Welt",
            "sr": "Он је заиста Спаситељ света"
          },
          {
            "de": "Er ist nur ein Lehrer",
            "sr": "Он је само учитељ"
          },
          {
            "de": "Er ist Elija",
            "sr": "Он је Илија"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-jn9",
    "book": "jn",
    "order": 64,
    "title": {
      "de": "Die Heilung des Blindgeborenen",
      "sr": "Исцељење слепорођеног"
    },
    "ref": {
      "de": "Johannes 9,1–38",
      "sr": "Јован 9,1–38"
    },
    "intro": {
      "de": "Jesus heilt einen Mann, der von Geburt an blind war. Die Kirche liest das Evangelium am sechsten Sonntag nach Ostern, dem Sonntag des Blindgeborenen.",
      "sr": "Исус исцељује човека који је био слеп од рођења. Црква чита ово Јеванђеље шесте недеље по Васкрсу, у Недељу слепог."
    },
    "introTag": "history",
    "context": {
      "de": "Viele glaubten damals, Krankheit sei immer eine Strafe für eine bestimmte Sünde. Die Heilung geschieht an einem Sabbat, was zum Streit mit den Pharisäern führt.",
      "sr": "Многи су тада веровали да је болест увек казна за неки одређени грех. Исцељење се збива у суботу, што доводи до спора са фарисејима."
    },
    "reading": [
      {
        "ref": {
          "de": "Joh 9,1–12",
          "sr": "Јн 9,1–12"
        },
        "note": {
          "de": "Jesus heilt mit Erde und Speichel.",
          "sr": "Исус исцељује блатом."
        }
      },
      {
        "ref": {
          "de": "Joh 9,13–34",
          "sr": "Јн 9,13–34"
        },
        "note": {
          "de": "Das Verhör.",
          "sr": "Испитивање."
        }
      },
      {
        "ref": {
          "de": "Joh 9,35–38",
          "sr": "Јн 9,35–38"
        },
        "note": {
          "de": "Ich glaube, Herr.",
          "sr": "Верујем, Господе."
        }
      }
    ],
    "summary": {
      "de": "Die Jünger fragen: Wer hat gesündigt, er oder seine Eltern, dass er blind geboren wurde? Jesus antwortet: Weder er noch seine Eltern, sondern die Werke Gottes sollen an ihm offenbar werden. Ich bin das Licht der Welt. Er macht einen Teig aus Erde und Speichel, streicht ihn auf die Augen und schickt den Mann zum Teich Schiloach. Der Mann wäscht sich und kommt sehend zurück. Die Pharisäer verhören ihn und seine Eltern und streiten, weil die Heilung am Sabbat geschah. Der Geheilte bleibt fest: Eines weiß ich: Ich war blind und jetzt sehe ich. Sie stoßen ihn hinaus. Jesus findet ihn und fragt: Glaubst du an den Menschensohn? Er antwortet: Ich glaube, Herr, und wirft sich vor ihm nieder.",
      "sr": "Ученици питају: Ко сагреши, овај или родитељи његови, те се роди слеп? Исус одговара: Ни он не сагреши ни родитељи његови, него да се јаве дела Божија на њему. Ја сам светлост свету. Прави блато од пљувачке, маже му очи и шаље човека у бању Силоам. Човек се умива и враћа видећи. Фарисеји испитују њега и његове родитеље и препиру се, јер је исцељење било у суботу. Исцељени остаје чврст: Једно знам: да бејах слеп, а сад видим. Изгоне га напоље. Исус га налази и пита: Верујеш ли ти у Сина Божијег? Он одговара: Верујем, Господе, и поклони Му се."
    },
    "interp": {
      "simple": {
        "de": "Krankheit ist nicht automatisch Strafe. Christus öffnet nicht nur die leiblichen Augen, sondern auch die Augen des Glaubens. Der Geheilte erkennt Jesus Schritt für Schritt – vom Menschen über den Propheten bis zum Herrn.",
        "sr": "Болест није аутоматски казна. Христос отвара не само телесне очи, него и очи вере. Исцељени постепено препознаје Исуса – од човека, преко пророка, до Господа."
      },
      "deeper": {
        "de": "Dass Jesus Erde nimmt, erinnert an die Erschaffung des Menschen aus Erde (Gen 2,7): Der Schöpfer erschafft neu, was von Geburt an fehlte. Das Waschen im Teich deuten die Väter auf die Taufe, die in der alten Kirche auch „Erleuchtung“ hieß. Die Geschichte zeigt auch die geistliche Blindheit derer, die zu sehen meinen (Joh 9,39–41).",
        "sr": "То што Исус узима земљу подсећа на стварање човека од земље (Пост 2,7): Створитељ ствара изнова оно што је од рођења недостајало. Умивање у бањи оци тумаче као крштење, које се у древној Цркви звало и „просвећење“. Повест показује и духовно слепило оних који мисле да виде (Јн 9,39–41)."
      },
      "tag": "opinion"
    },
    "christ": {
      "de": "Christus ist das Licht der Welt (Joh 9,5). Wer ihm begegnet, empfängt Licht für Leib und Seele.",
      "sr": "Христос је светлост свету (Јн 9,5). Ко Га сретне, прима светлост за тело и душу."
    },
    "links": [
      {
        "ref": {
          "de": "Gen 2,7",
          "sr": "Пост 2,7"
        },
        "note": {
          "de": "Gott formt den Menschen aus Erde.",
          "sr": "Бог ствара човека од праха земаљског."
        }
      },
      {
        "ref": {
          "de": "Joh 8,12",
          "sr": "Јн 8,12"
        },
        "note": {
          "de": "Ich bin das Licht der Welt.",
          "sr": "Ја сам светлост свету."
        }
      },
      {
        "ref": {
          "de": "Jes 35,5",
          "sr": "Ис 35,5"
        },
        "note": {
          "de": "Dann werden die Augen der Blinden aufgetan.",
          "sr": "Тада ће се отворити очи слепима."
        }
      }
    ],
    "fathers": {
      "de": "Der hl. Johannes Chrysostomus legt Joh 9 in seinen Homilien zum Johannesevangelium aus (englisch in NPNF I/14). Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Свети Јован Златоуст тумачи Јн 9 у беседама на Јеванђеље по Јовану (на енглеском у NPNF I/14). Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Was antwortet Jesus auf die Frage nach der Schuld?",
          "sr": "Шта Исус одговара на питање о кривици?"
        },
        "a": {
          "de": "Weder der Mann noch seine Eltern haben gesündigt; die Werke Gottes sollen an ihm offenbar werden.",
          "sr": "Ни човек ни његови родитељи нису сагрешили; дела Божија треба да се јаве на њему."
        }
      },
      {
        "q": {
          "de": "Woran erinnert die Erde, mit der Jesus heilt?",
          "sr": "На шта подсећа земља којом Исус исцељује?"
        },
        "a": {
          "de": "An die Erschaffung des Menschen aus Erde (Gen 2,7).",
          "sr": "На стварање човека од земље (Пост 2,7)."
        }
      },
      {
        "q": {
          "de": "Wie endet die Geschichte für den Geheilten?",
          "sr": "Како се повест завршава за исцељеног?"
        },
        "a": {
          "de": "Er bekennt: Ich glaube, Herr, und wirft sich vor Jesus nieder.",
          "sr": "Исповеда: Верујем, Господе, и поклања се Исусу."
        }
      }
    ],
    "practice": {
      "de": "Denke an einen Bereich deines Lebens, in dem du „blind“ bist. Bete diese Woche: „Herr, öffne mir die Augen.“",
      "sr": "Помислите на област свог живота у којој сте „слепи“. Молите се ове недеље: „Господе, отвори ми очи.“"
    },
    "review": {
      "de": "Jesus heilt den Blindgeborenen und offenbart sich als Licht der Welt; der Geheilte kommt zum Glauben an den Herrn.",
      "sr": "Исус исцељује слепорођеног и открива се као светлост свету; исцељени долази до вере у Господа."
    },
    "quiz": [
      {
        "q": {
          "de": "In welchem Teich wusch sich der Mann?",
          "sr": "У којој бањи се човек умио?"
        },
        "options": [
          {
            "de": "Schiloach",
            "sr": "Силоам"
          },
          {
            "de": "Betesda",
            "sr": "Витезда"
          },
          {
            "de": "Jordan",
            "sr": "Јордан"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "An welchem Tag geschah die Heilung?",
          "sr": "Ког дана се збило исцељење?"
        },
        "options": [
          {
            "de": "Am Sabbat",
            "sr": "У суботу"
          },
          {
            "de": "Am Pfingsttag",
            "sr": "На Педесетницу"
          },
          {
            "de": "Am Ostersonntag",
            "sr": "На Васкрс"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "An welchem Sonntag wird Joh 9 gelesen?",
          "sr": "Које недеље се чита Јн 9?"
        },
        "options": [
          {
            "de": "Sonntag des Blindgeborenen (6. nach Ostern)",
            "sr": "Недеља слепог (шеста по Васкрсу)"
          },
          {
            "de": "Palmsonntag",
            "sr": "Цвети"
          },
          {
            "de": "Sonntag der Orthodoxie",
            "sr": "Недеља Православља"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-lk19",
    "book": "lk",
    "order": 65,
    "title": {
      "de": "Zachäus",
      "sr": "Закхеј"
    },
    "ref": {
      "de": "Lukas 19,1–10",
      "sr": "Лука 19,1–10"
    },
    "intro": {
      "de": "In Jericho will der Oberzöllner Zachäus Jesus sehen. In der slawischen Tradition, auch in der Serbischen Kirche, wird dieses Evangelium am Sonntag vor Beginn der Triodion-Zeit gelesen – ein erstes Zeichen, dass die Große Fastenzeit naht.",
      "sr": "У Јерихону старешина цариника Закхеј жели да види Исуса. У словенском предању, па и у Српској Цркви, ово Јеванђеље се чита у недељу пред почетак периода Триода – први знак да се ближи Велики пост."
    },
    "introTag": "history",
    "context": {
      "de": "Zöllner trieben für die Römer Steuern ein und galten als Betrüger und Verräter. Zachäus war reich und klein von Gestalt.",
      "sr": "Цариници су за Римљане скупљали порез и сматрани су преварантима и издајницима. Закхеј је био богат и малог раста."
    },
    "reading": [
      {
        "ref": {
          "de": "Lk 19,1–6",
          "sr": "Лк 19,1–6"
        },
        "note": {
          "de": "Zachäus auf dem Baum.",
          "sr": "Закхеј на дрвету."
        }
      },
      {
        "ref": {
          "de": "Lk 19,7–10",
          "sr": "Лк 19,7–10"
        },
        "note": {
          "de": "Heute ist diesem Haus Heil widerfahren.",
          "sr": "Данас дође спасење дому овоме."
        }
      }
    ],
    "summary": {
      "de": "Zachäus will Jesus sehen, kann aber wegen der Menge nicht, weil er klein ist. Er läuft voraus und steigt auf einen Maulbeerfeigenbaum. Jesus bleibt stehen, schaut hinauf und sagt: Zachäus, steig schnell herab, denn heute muss ich in deinem Haus bleiben. Zachäus nimmt ihn voll Freude auf. Die Leute murren: Bei einem Sünder ist er eingekehrt. Zachäus aber sagt: Siehe, Herr, die Hälfte meines Vermögens gebe ich den Armen, und wenn ich jemanden betrogen habe, gebe ich es vierfach zurück. Jesus sagt: Heute ist diesem Haus Heil widerfahren. Denn der Menschensohn ist gekommen, zu suchen und zu retten, was verloren ist.",
      "sr": "Закхеј жели да види Исуса, али не може од народа, јер је мали. Трчи напред и пење се на дуд. Исус застаје, погледа горе и каже: Закхеју, сиђи брзо, јер ми данас ваља бити у твојој кући. Закхеј Га прима са радошћу. Људи ропћу: Ушао је код грешника. А Закхеј каже: Ево, Господе, пола имања свога дајем сиромасима, и ако сам кога оштетио, враћам четвороструко. Исус каже: Данас дође спасење дому овоме. Јер Син Човечији дође да потражи и спасе изгубљено."
    },
    "interp": {
      "simple": {
        "de": "Zachäus’ Wunsch, Jesus zu sehen, ist der erste Schritt. Jesus kommt ihm entgegen, und die Begegnung verändert sein ganzes Leben – echte Umkehr zeigt sich in Taten.",
        "sr": "Закхејева жеља да види Исуса је први корак. Исус му излази у сусрет, и сусрет мења цео његов живот – право покајање показује се у делима."
      },
      "deeper": {
        "de": "Zachäus überwindet Hindernisse – seine kleine Gestalt und die Menge – wie ein Mensch, der seine Schwächen und die Meinung anderer überwindet, um Christus zu begegnen. Seine Umkehr ist konkret: Er gibt den Armen und macht Unrecht wieder gut. Dass die Kirche diesen Text vor der Fastenzeit liest, zeigt: Der Weg der Fastenzeit beginnt mit dem Wunsch, Christus zu sehen.",
        "sr": "Закхеј савлађује препреке – свој мали раст и народ – као човек који савлађује своје слабости и мишљење других да би срео Христа. Његово покајање је конкретно: даје сиромасима и исправља неправду. То што Црква чита овај текст пред пост показује: пут поста почиње жељом да се види Христос."
      },
      "tag": "counsel"
    },
    "christ": {
      "de": "Christus ist gekommen, zu suchen und zu retten, was verloren ist (Lk 19,10). Er wartet nicht, bis der Sünder perfekt ist, sondern kehrt bei ihm ein.",
      "sr": "Христос је дошао да потражи и спасе изгубљено (Лк 19,10). Он не чека да грешник постане савршен, него улази код њега."
    },
    "links": [
      {
        "ref": {
          "de": "Lk 15,1–7",
          "sr": "Лк 15,1–7"
        },
        "note": {
          "de": "Das verlorene Schaf.",
          "sr": "Изгубљена овца."
        }
      },
      {
        "ref": {
          "de": "Ez 34,16",
          "sr": "Јез 34,16"
        },
        "note": {
          "de": "Ich will das Verlorene suchen.",
          "sr": "Изгубљену ћу тражити."
        }
      },
      {
        "ref": {
          "de": "Lk 18,9–14",
          "sr": "Лк 18,9–14"
        },
        "note": {
          "de": "Der Zöllner und der Pharisäer.",
          "sr": "Цариник и фарисеј."
        }
      }
    ],
    "fathers": {
      "de": "Für diese Version wurde kein einzelner freier Väterkommentar zu dieser Stelle geprüft; wörtliche Zitate gibt die App nicht wieder.",
      "sr": "За ово издање није проверен ниједан појединачан слободан коментар отаца на ово место; апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Warum stieg Zachäus auf den Baum?",
          "sr": "Зашто се Закхеј попео на дрво?"
        },
        "a": {
          "de": "Weil er klein war und Jesus wegen der Menge nicht sehen konnte.",
          "sr": "Зато што је био мали и није могао да види Исуса од народа."
        }
      },
      {
        "q": {
          "de": "Wie zeigt sich die Umkehr des Zachäus?",
          "sr": "Како се показује Закхејево покајање?"
        },
        "a": {
          "de": "Er gibt die Hälfte seines Besitzes den Armen und erstattet Betrug vierfach zurück.",
          "sr": "Даје пола имања сиромасима и враћа превару четвороструко."
        }
      },
      {
        "q": {
          "de": "Warum liest die Kirche diesen Text vor der Fastenzeit?",
          "sr": "Зашто Црква чита овај текст пред пост?"
        },
        "a": {
          "de": "Weil der Weg der Umkehr mit dem Wunsch beginnt, Christus zu sehen.",
          "sr": "Зато што пут покајања почиње жељом да се види Христос."
        }
      }
    ],
    "practice": {
      "de": "Gibt es etwas, das du wiedergutmachen kannst – eine Schuld, ein verletzendes Wort? Tu diese Woche einen konkreten Schritt.",
      "sr": "Постоји ли нешто што можете исправити – дуг, увредљива реч? Учините ове недеље један конкретан корак."
    },
    "review": {
      "de": "Zachäus will Jesus sehen; Jesus kehrt bei ihm ein, und Zachäus ändert sein Leben. Der Menschensohn sucht und rettet, was verloren ist.",
      "sr": "Закхеј жели да види Исуса; Исус улази код њега, и Закхеј мења свој живот. Син Човечији тражи и спасава изгубљено."
    },
    "quiz": [
      {
        "q": {
          "de": "Welchen Beruf hatte Zachäus?",
          "sr": "Које занимање је имао Закхеј?"
        },
        "options": [
          {
            "de": "Oberzöllner",
            "sr": "Старешина цариника"
          },
          {
            "de": "Fischer",
            "sr": "Рибар"
          },
          {
            "de": "Priester",
            "sr": "Свештеник"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Auf welchen Baum stieg er?",
          "sr": "На које дрво се попео?"
        },
        "options": [
          {
            "de": "Einen Maulbeerfeigenbaum",
            "sr": "Дуд"
          },
          {
            "de": "Eine Eiche",
            "sr": "Храст"
          },
          {
            "de": "Eine Palme",
            "sr": "Палму"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Wie viel gibt Zachäus bei Betrug zurück?",
          "sr": "Колико Закхеј враћа при превари?"
        },
        "options": [
          {
            "de": "Das Vierfache",
            "sr": "Четвороструко"
          },
          {
            "de": "Die Hälfte",
            "sr": "Пола"
          },
          {
            "de": "Nichts",
            "sr": "Ништа"
          }
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "bib-1cor15",
    "book": "cor",
    "order": 66,
    "title": {
      "de": "Die Auferstehung der Toten",
      "sr": "Васкрсење мртвих"
    },
    "ref": {
      "de": "1. Korinther 15,1–28 und 15,50–58",
      "sr": "1. Коринћанима 15,1–28 и 15,50–58"
    },
    "intro": {
      "de": "Einige in Korinth bezweifelten, dass die Toten auferstehen. Paulus antwortet mit dem ältesten schriftlichen Zeugnis von der Auferstehung Christi und erklärt, was sie für uns bedeutet.",
      "sr": "Неки у Коринту сумњали су да мртви васкрсавају. Павле одговара најстаријим писаним сведочанством о Христовом васкрсењу и објашњава шта оно значи за нас."
    },
    "introTag": "history",
    "context": {
      "de": "In der griechischen Welt galt der Leib oft als Gefängnis der Seele; eine leibliche Auferstehung schien vielen unsinnig. Paulus hält dagegen: Ohne Auferstehung ist der Glaube leer.",
      "sr": "У грчком свету тело се често сматрало тамницом душе; телесно васкрсење многима је изгледало бесмислено. Павле се томе супротставља: без васкрсења вера је празна."
    },
    "reading": [
      {
        "ref": {
          "de": "1 Kor 15,1–11",
          "sr": "1 Кор 15,1–11"
        },
        "note": {
          "de": "Das überlieferte Evangelium und die Zeugen.",
          "sr": "Предано јеванђеље и сведоци."
        }
      },
      {
        "ref": {
          "de": "1 Kor 15,12–28",
          "sr": "1 Кор 15,12–28"
        },
        "note": {
          "de": "Christus, der Erstling.",
          "sr": "Христос, првенац."
        }
      },
      {
        "ref": {
          "de": "1 Kor 15,50–58",
          "sr": "1 Кор 15,50–58"
        },
        "note": {
          "de": "Tod, wo ist dein Stachel?",
          "sr": "Где ти је, смрти, жалац?"
        }
      }
    ],
    "summary": {
      "de": "Paulus überliefert, was er selbst empfangen hat: Christus ist für unsere Sünden gestorben gemäß den Schriften, wurde begraben und ist am dritten Tag auferweckt worden gemäß den Schriften; er erschien Kephas, den Zwölf, mehr als fünfhundert Brüdern, Jakobus, allen Aposteln und zuletzt Paulus selbst. Wenn Christus nicht auferweckt ist, ist unsere Verkündigung leer und euer Glaube sinnlos. Nun aber ist Christus von den Toten auferweckt als Erstling der Entschlafenen. Wie in Adam alle sterben, so werden in Christus alle lebendig gemacht. Wir werden alle verwandelt werden; das Vergängliche muss Unvergänglichkeit anziehen. Dann erfüllt sich das Wort: Verschlungen ist der Tod im Sieg. Tod, wo ist dein Stachel?",
      "sr": "Павле предаје оно што је и сам примио: Христос је умро за грехе наше по Писму, био погребен и устао трећи дан по Писму; јавио се Кифи, Дванаесторици, више од пет стотина браће, Јакову, свим апостолима и најпосле самом Павлу. Ако Христос није устао, узалуд је проповед наша и узалуд вера ваша. Али Христос је устао из мртвих, првенац међу уснулима. Јер као што у Адаму сви умиру, тако ће у Христу сви оживети. Сви ћемо се изменити; ово распадљиво треба да се обуче у нераспадљивост. Тада ће се испунити реч: Победа прождре смрт. Где ти је, смрти, жалац?"
    },
    "interp": {
      "simple": {
        "de": "Die Auferstehung Christi ist die Mitte des Glaubens. Weil er auferstanden ist, werden auch wir auferstehen – mit einem verwandelten, unvergänglichen Leib.",
        "sr": "Христово васкрсење је средиште вере. Пошто је Он васкрсао, и ми ћемо васкрснути – у измењеном, нераспадљивом телу."
      },
      "deeper": {
        "de": "1 Kor 15,3–5 gilt als sehr frühe Glaubensformel, die Paulus schon übernommen hat. Die Orthodoxie bekennt im Glaubensbekenntnis die Auferstehung der Toten und das Leben der kommenden Welt. Der Ostergesang „Christus ist auferstanden von den Toten, durch den Tod hat er den Tod zertreten“ fasst diese Botschaft zusammen. Die Osterpredigt des hl. Johannes Chrysostomus, die in der Osternacht gelesen wird, greift die Worte „Tod, wo ist dein Stachel?“ auf.",
        "sr": "1 Кор 15,3–5 сматра се веома раном формулом вере, коју је Павле већ преузео. Православље у Символу вере исповеда васкрсење мртвих и живот будућег века. Васкршња песма „Христос васкрсе из мртвих, смрћу смрт уништи“ сажима ову поруку. Васкршња беседа светог Јована Златоуста, која се чита у васкршњој ноћи, преузима речи „Где ти је, смрти, жалац?“."
      },
      "tag": "dogma"
    },
    "christ": {
      "de": "Christus ist der Erstling der Entschlafenen (15,20), der neue Adam, der den Tod besiegt hat.",
      "sr": "Христос је првенац међу уснулима (15,20), нови Адам, који је победио смрт."
    },
    "links": [
      {
        "ref": {
          "de": "Hos 13,14",
          "sr": "Ос 13,14"
        },
        "note": {
          "de": "Tod, wo sind deine Seuchen?",
          "sr": "Смрти, где су ти куге?"
        }
      },
      {
        "ref": {
          "de": "Röm 5,12–19",
          "sr": "Рим 5,12–19"
        },
        "note": {
          "de": "Adam und Christus.",
          "sr": "Адам и Христос."
        }
      },
      {
        "ref": {
          "de": "Joh 11,25–26",
          "sr": "Јн 11,25–26"
        },
        "note": {
          "de": "Ich bin die Auferstehung und das Leben.",
          "sr": "Ја сам васкрсење и живот."
        }
      }
    ],
    "fathers": {
      "de": "Der hl. Johannes Chrysostomus legt 1 Kor 15 in seinen Homilien zum ersten Korintherbrief aus (englisch in NPNF I/12); seine Osterpredigt wird in der Osternacht verlesen. Wörtliche Zitate gibt die App nicht wieder.",
      "sr": "Свети Јован Златоуст тумачи 1 Кор 15 у беседама на Прву посланицу Коринћанима (на енглеском у NPNF I/12); његова васкршња беседа чита се у васкршњој ноћи. Апликација не наводи дословне цитате."
    },
    "fathersTag": "history",
    "questions": [
      {
        "q": {
          "de": "Was wäre nach Paulus, wenn Christus nicht auferstanden wäre?",
          "sr": "Шта би, по Павлу, било да Христос није васкрсао?"
        },
        "a": {
          "de": "Die Verkündigung wäre leer und der Glaube sinnlos.",
          "sr": "Проповед би била узалудна, а вера празна."
        }
      },
      {
        "q": {
          "de": "Was bedeutet „Erstling der Entschlafenen“?",
          "sr": "Шта значи „првенац међу уснулима“?"
        },
        "a": {
          "de": "Christus ist als Erster auferstanden; ihm folgen alle, die zu ihm gehören.",
          "sr": "Христос је први васкрсао; за Њим следе сви који су Његови."
        }
      },
      {
        "q": {
          "de": "Wo erklingen die Worte „Tod, wo ist dein Stachel?“ in der Kirche?",
          "sr": "Где у Цркви звуче речи „Где ти је, смрти, жалац?“"
        },
        "a": {
          "de": "In der Osterpredigt des hl. Johannes Chrysostomus in der Osternacht.",
          "sr": "У васкршњој беседи светог Јована Златоуста у васкршњој ноћи."
        }
      }
    ],
    "practice": {
      "de": "Sprich in dieser Woche jeden Morgen den Ostergruß „Christus ist auferstanden!“ und denke an einen verstorbenen Menschen, für den du betest.",
      "sr": "Изговарајте ове недеље свако јутро васкршњи поздрав „Христос васкрсе!“ и сетите се неког упокојеног за кога се молите."
    },
    "review": {
      "de": "Christus ist auferstanden als Erstling der Entschlafenen; darum werden auch wir auferstehen. Der Tod ist besiegt.",
      "sr": "Христос је васкрсао као првенац међу уснулима; зато ћемо и ми васкрснути. Смрт је побеђена."
    },
    "quiz": [
      {
        "q": {
          "de": "Wie vielen Brüdern erschien der Auferstandene auf einmal?",
          "sr": "Коликој браћи се Васкрсли јавио одједном?"
        },
        "options": [
          {
            "de": "Mehr als fünfhundert",
            "sr": "Више од пет стотина"
          },
          {
            "de": "Zwölf",
            "sr": "Дванаесторици"
          },
          {
            "de": "Drei",
            "sr": "Тројици"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Wer ist nach 1 Kor 15,22 der Gegenpol zu Christus?",
          "sr": "Ко је, по 1 Кор 15,22, супротност Христу?"
        },
        "options": [
          {
            "de": "Adam",
            "sr": "Адам"
          },
          {
            "de": "Mose",
            "sr": "Мојсије"
          },
          {
            "de": "David",
            "sr": "Давид"
          }
        ],
        "correct": 0
      },
      {
        "q": {
          "de": "Welche Predigt wird in der Osternacht gelesen?",
          "sr": "Која беседа се чита у васкршњој ноћи?"
        },
        "options": [
          {
            "de": "Die Osterpredigt des hl. Johannes Chrysostomus",
            "sr": "Васкршња беседа светог Јована Златоуста"
          },
          {
            "de": "Die Bergpredigt",
            "sr": "Беседа на гори"
          },
          {
            "de": "Eine Predigt des Mose",
            "sr": "Мојсијева беседа"
          }
        ],
        "correct": 0
      }
    ]
  },
    {"id":"bib-jn11","book":"jn","order":67,"title":{"de":"Die Auferweckung des Lazarus","sr":"Васкрсење Лазарево"},"ref":{"de":"Johannes 11,1–45","sr":"Јован 11,1–45"},"intro":{"de":"Lazarus aus Betanien, der Freund Jesu, ist seit vier Tagen tot. Dieses Evangelium wird am Lazarus-Samstag gelesen, dem Tag vor dem Palmsonntag, an dem die Kirche schon die Auferstehung vorausfeiert.","sr":"Лазар из Витаније, Исусов пријатељ, мртав је већ четири дана. Ово Јеванђеље чита се на Лазареву суботу, дан пред Цвети, када Црква већ унапред прославља васкрсење."},"introTag":"history","context":{"de":"Betanien lag nahe bei Jerusalem. Lazarus und seine Schwestern Marta und Maria waren mit Jesus befreundet. Nach jüdischer Vorstellung war ein Toter nach vier Tagen endgültig tot; der Leib verweste bereits.","sr":"Витанија се налазила близу Јерусалима. Лазар и његове сестре Марта и Марија били су пријатељи Исусови. По јеврејском схватању, покојник је после четири дана био коначно мртав; тело је већ почињало да се распада."},"reading":[{"ref":{"de":"Joh 11,1–16","sr":"Јн 11,1–16"},"note":{"de":"Die Nachricht von der Krankheit; Jesus wartet zwei Tage.","sr":"Вест о болести; Исус чека два дана."}},{"ref":{"de":"Joh 11,17–37","sr":"Јн 11,17–37"},"note":{"de":"Ich bin die Auferstehung und das Leben; Jesus weint.","sr":"Ја сам васкрсење и живот; Исус плаче."}},{"ref":{"de":"Joh 11,38–45","sr":"Јн 11,38–45"},"note":{"de":"Lazarus, komm heraus!","sr":"Лазаре, изиђи напоље!"}}],"summary":{"de":"Marta und Maria lassen Jesus sagen, dass ihr Bruder krank ist. Jesus bleibt noch zwei Tage, dann geht er nach Judäa. Als er ankommt, liegt Lazarus schon vier Tage im Grab. Marta geht ihm entgegen und sagt: Herr, wärst du hier gewesen, wäre mein Bruder nicht gestorben. Jesus sagt: Ich bin die Auferstehung und das Leben; wer an mich glaubt, wird leben, auch wenn er stirbt. Marta bekennt: Ich glaube, dass du der Christus bist, der Sohn Gottes. Als Jesus Maria und die Trauernden weinen sieht, ist er erschüttert, und er weint. Am Grab lässt er den Stein wegnehmen, betet zum Vater und ruft laut: Lazarus, komm heraus! Der Tote kommt heraus, an Händen und Füßen mit Binden umwickelt. Jesus sagt: Löst ihn und lasst ihn gehen. Viele, die das sahen, kamen zum Glauben.","sr":"Марта и Марија поручују Исусу да им је брат болестан. Исус остаје још два дана, а онда иде у Јудеју. Кад је стигао, Лазар је већ четири дана у гробу. Марта Му излази у сусрет и каже: Господе, да си био овде, мој брат не би умро. Исус каже: Ја сам васкрсење и живот; ко верује у мене, ако и умре, живеће. Марта исповеда: Верујем да си ти Христос, Син Божји. Кад Исус види како Марија и они што тугују плачу, потресе се и заплака. На гробу заповеди да се одвали камен, помоли се Оцу и повика гласно: Лазаре, изиђи напоље! Мртвац изиђе, обавијен повојима по рукама и ногама. Исус каже: Одрешите га и пустите нека иде. Многи који су то видели поверовали су."},"interp":{"simple":{"de":"Jesus ist wahrer Mensch: Er weint um seinen Freund. Und er ist wahrer Gott: Er ruft einen Toten ins Leben zurück. Der Tod hat bei ihm nicht das letzte Wort.","sr":"Исус је истинити човек: плаче за својим пријатељем. И истинити је Бог: позива мртвога натраг у живот. Смрт код Њега нема последњу реч."},"deeper":{"de":"Die Kirche sieht in diesem Zeichen eine Vorausdarstellung der allgemeinen Auferstehung. Lazarus kehrt zwar in das irdische Leben zurück und wird wieder sterben; Christus selbst aber wird nach seinem Tod in einem verwandelten Leib auferstehen, über den der Tod keine Macht mehr hat. In den Tränen und im machtvollen Ruf Jesu zeigt sich, was die Kirche später auf dem Konzil von Chalkedon (451) bekannt hat: eine Person in zwei Naturen, wahrer Gott und wahrer Mensch.","sr":"Црква у овом знаку види праслику општег васкрсења. Лазар се, додуше, враћа у земаљски живот и поново ће умрети; а сам Христос ће после своје смрти васкрснути у преображеном телу над којим смрт више нема власти. У сузама и у силном позиву Исусовом показује се оно што је Црква касније исповедила на Халкидонском сабору (451): једна Личност у две природе, истинити Бог и истинити човек."},"tag":"dogma"},"christ":{"de":"Christus sagt nicht nur: Ich werde auferwecken, sondern: Ich bin die Auferstehung und das Leben (Joh 11,25). Das Leben ist nicht eine Sache, die er gibt, sondern er selbst.","sr":"Христос не каже само: Ја ћу васкрснути, него: Ја сам васкрсење и живот (Јн 11,25). Живот није ствар коју Он даје, него је то Он сам."},"links":[{"ref":{"de":"Lk 7,11–17","sr":"Лк 7,11–17"},"note":{"de":"Der Jüngling von Naïn.","sr":"Син удовице из Наина."}},{"ref":{"de":"Ez 37,1–14","sr":"Јез 37,1–14"},"note":{"de":"Die Totengebeine werden lebendig.","sr":"Суве кости оживљавају."}},{"ref":{"de":"1 Kor 15,20–22","sr":"1 Кор 15,20–22"},"note":{"de":"In Christus werden alle lebendig gemacht.","sr":"У Христу ће сви оживети."}}],"fathers":{"de":"Für diese Version wurde kein einzelner freier Väterkommentar zu dieser Stelle geprüft; wörtliche Zitate gibt die App nicht wieder.","sr":"За ово издање није проверен ниједан појединачан слободан коментар отаца на ово место; апликација не наводи дословне цитате."},"fathersTag":"history","questions":[{"q":{"de":"Warum wartet Jesus noch zwei Tage?","sr":"Зашто Исус чека још два дана?"},"a":{"de":"Damit an Lazarus die Herrlichkeit Gottes offenbar wird (Joh 11,4) – das Zeichen soll keinen Zweifel lassen, dass Lazarus wirklich tot war.","sr":"Да се на Лазару јави слава Божја (Јн 11,4) – знак не сме оставити сумњу да је Лазар заиста био мртав."}},{"q":{"de":"Was bekennt Marta?","sr":"Шта исповеда Марта?"},"a":{"de":"Dass Jesus der Christus ist, der Sohn Gottes, der in die Welt kommen soll.","sr":"Да је Исус Христос, Син Божји, који треба да дође на свет."}},{"q":{"de":"Was zeigen die Tränen Jesu?","sr":"Шта показују Исусове сузе?"},"a":{"de":"Dass er wirklich Mensch ist und mit uns fühlt – auch im Schmerz über den Tod.","sr":"Да је заиста човек и да саосећа са нама – и у болу због смрти."}}],"practice":{"de":"Denke an einen Menschen, der gestorben ist, und bete für ihn. Lies dabei Joh 11,25–26 langsam und bewusst.","sr":"Сетите се неког човека који је умро и помолите се за њега. Притом прочитајте Јн 11,25–26 полако и пажљиво."},"review":{"de":"Jesus weint um Lazarus und ruft ihn nach vier Tagen aus dem Grab. Er ist die Auferstehung und das Leben.","sr":"Исус плаче за Лазаром и после четири дана га позива из гроба. Он је васкрсење и живот."},"quiz":[{"q":{"de":"Wie lange lag Lazarus im Grab?","sr":"Колико је дана Лазар лежао у гробу?"},"options":[{"de":"Vier Tage","sr":"Четири дана"},{"de":"Drei Tage","sr":"Три дана"},{"de":"Einen Tag","sr":"Један дан"}],"correct":0},{"q":{"de":"Wer waren die Schwestern des Lazarus?","sr":"Ко су биле Лазареве сестре?"},"options":[{"de":"Marta und Maria","sr":"Марта и Марија"},{"de":"Maria und Salome","sr":"Марија и Саломија"},{"de":"Elisabet und Hanna","sr":"Јелисавета и Ана"}],"correct":0},{"q":{"de":"Wann liest die Kirche dieses Evangelium?","sr":"Када Црква чита ово Јеванђеље?"},"options":[{"de":"Am Samstag vor dem Palmsonntag","sr":"У суботу пред Цвети"},{"de":"Am Ostersonntag","sr":"На Васкрс"},{"de":"An Weihnachten","sr":"На Божић"}],"correct":0}]},
    {"id":"bib-lk18","book":"lk","order":68,"title":{"de":"Der Zöllner und der Pharisäer","sr":"Цариник и фарисеј"},"ref":{"de":"Lukas 18,9–14","sr":"Лука 18,9–14"},"intro":{"de":"Ein Gleichnis über Demut im Gebet. Mit dem Sonntag des Zöllners und des Pharisäers beginnt die Zeit des Triodion, die Vorbereitung auf die Große Fastenzeit; in der Woche danach wird nicht gefastet.","sr":"Прича о смирењу у молитви. Недељом митара и фарисеја почиње период Триода, припрема за Велики пост; у седмици после ње се не пости."},"introTag":"history","context":{"de":"Pharisäer nahmen das Gesetz sehr ernst, fasteten und gaben den Zehnten. Zöllner arbeiteten für die römische Besatzung und galten als Sünder. Die Zuhörer erwarteten also, dass der Pharisäer der Gerechte ist.","sr":"Фарисеји су веома озбиљно схватали Закон, постили и давали десетак. Цариници су радили за римску власт и сматрани су грешницима. Слушаоци су, дакле, очекивали да је фарисеј праведник."},"reading":[{"ref":{"de":"Lk 18,9–12","sr":"Лк 18,9–12"},"note":{"de":"Das Gebet des Pharisäers.","sr":"Молитва фарисеја."}},{"ref":{"de":"Lk 18,13–14","sr":"Лк 18,13–14"},"note":{"de":"Gott, sei mir Sünder gnädig.","sr":"Боже, милостив буди мени грешноме."}}],"summary":{"de":"Jesus erzählt das Gleichnis für einige, die sich selbst für gerecht hielten und die anderen verachteten. Zwei Männer gehen in den Tempel, um zu beten: ein Pharisäer und ein Zöllner. Der Pharisäer stellt sich hin und dankt Gott, dass er nicht ist wie die Räuber, Betrüger und Ehebrecher oder wie dieser Zöllner; er faste zweimal in der Woche und gebe den Zehnten von allem. Der Zöllner bleibt weit hinten stehen, wagt nicht, die Augen zum Himmel zu erheben, schlägt sich an die Brust und sagt: Gott, sei mir Sünder gnädig! Jesus sagt: Dieser ging gerechtfertigt nach Hause, jener nicht. Denn wer sich selbst erhöht, wird erniedrigt, und wer sich selbst erniedrigt, wird erhöht.","sr":"Исус казује причу некима који су сами себе сматрали праведнима, а друге презирали. Два човека уђоше у храм да се моле: један фарисеј, а други цариник. Фарисеј стаде и захваљиваше Богу што није као остали људи, разбојници, неправедници, прељубници, или као овај цариник; пости двапут у седмици и даје десетак од свега. А цариник стајаше издалека и не хтеде ни очи подићи небу, него се бијаше у прса говорећи: Боже, милостив буди мени грешноме! Исус каже: Овај отиде оправдан дому своме, а не онај. Јер сваки који себе подиже понизиће се, а који себе понижава подигнуће се."},"interp":{"simple":{"de":"Gott schaut nicht auf unsere Leistungen, sondern auf unser Herz. Wer sich vor Gott ehrlich als bedürftig erkennt, empfängt Gnade.","sr":"Бог не гледа на наша постигнућа, него на наше срце. Ко се пред Богом искрено препозна као потребит, прима милост."},"deeper":{"de":"Der Pharisäer tut Gutes, aber er vergleicht sich mit anderen und verachtet sie; so wird sein Gebet zu einer Rede über sich selbst. Der Zöllner bringt nichts vor als seine Sünde und die Bitte um Erbarmen. Die Väter sehen im Hochmut die Wurzel vieler Sünden und in der Demut die Grundlage des geistlichen Lebens. Aus dem Ruf des Zöllners ist das Herzensgebet hervorgegangen: Herr Jesus Christus, Sohn Gottes, erbarme dich meiner, des Sünders.","sr":"Фарисеј чини добро, али се пореди са другима и презире их; тако његова молитва постаје говор о самом себи. Цариник не износи ништа осим свог греха и молбе за милост. Оци у гордости виде корен многих грехова, а у смирењу темељ духовног живота. Из цариникове молитве произашла је молитва срца: Господе Исусе Христе, Сине Божји, помилуј ме грешног."},"tag":"counsel"},"christ":{"de":"Christus selbst hat sich erniedrigt bis zum Tod am Kreuz und wurde vom Vater erhöht (Phil 2,8–9). Er erhöht die Demütigen.","sr":"Христос је сам себе понизио до смрти на крсту и Отац Га је узвисио (Флп 2,8–9). Он узвисује смерне."},"links":[{"ref":{"de":"Ps 50(51),19","sr":"Пс 50,19"},"note":{"de":"Ein zerknirschtes Herz verschmähst du nicht.","sr":"Срце скрушено и смерно Бог неће одбацити."}},{"ref":{"de":"Jak 4,6","sr":"Јак 4,6"},"note":{"de":"Gott widersteht den Hochmütigen.","sr":"Бог се противи гордима."}},{"ref":{"de":"Phil 2,5–11","sr":"Флп 2,5–11"},"note":{"de":"Christus erniedrigte sich selbst.","sr":"Христос понизи сам себе."}}],"fathers":{"de":"Für diese Version wurde kein einzelner freier Väterkommentar zu dieser Stelle geprüft; wörtliche Zitate gibt die App nicht wieder.","sr":"За ово издање није проверен ниједан појединачан слободан коментар отаца на ово место; апликација не наводи дословне цитате."},"fathersTag":"history","questions":[{"q":{"de":"Was ist am Gebet des Pharisäers falsch, obwohl er fastet und spendet?","sr":"Шта није у реду са молитвом фарисеја, иако пости и даје?"},"a":{"de":"Er vergleicht sich mit anderen, verachtet sie und spricht nur über sich selbst – nicht über seine Bedürftigkeit vor Gott.","sr":"Пореди се са другима, презире их и говори само о себи – не о својој потреби пред Богом."}},{"q":{"de":"Wie zeigt der Zöllner seine Demut?","sr":"Како цариник показује своје смирење?"},"a":{"de":"Er bleibt hinten stehen, hebt die Augen nicht, schlägt sich an die Brust und bittet nur um Erbarmen.","sr":"Стоји издалека, не подиже очи, бије се у прса и моли само за милост."}},{"q":{"de":"Warum beginnt die Fastenzeit-Vorbereitung mit diesem Gleichnis?","sr":"Зашто припрема за пост почиње овом причом?"},"a":{"de":"Weil Fasten ohne Demut zum Hochmut führen kann; die Kirche stellt die Demut an den Anfang.","sr":"Зато што пост без смирења може водити гордости; Црква ставља смирење на почетак."}}],"practice":{"de":"Bete in dieser Woche mehrmals am Tag still das Gebet des Zöllners: „Gott, sei mir Sünder gnädig.“ Vermeide bewusst, dich mit anderen zu vergleichen.","sr":"Ове седмице више пута дневно у тишини молите цариникову молитву: „Боже, милостив буди мени грешноме.“ Свесно избегавајте да се поредите са другима."},"review":{"de":"Der Pharisäer rühmt sich, der Zöllner bittet um Erbarmen und geht gerechtfertigt heim. Wer sich erniedrigt, wird erhöht.","sr":"Фарисеј се хвали, цариник моли за милост и одлази оправдан. Ко себе понижава, биће подигнут."},"quiz":[{"q":{"de":"Was betet der Zöllner?","sr":"Шта се моли цариник?"},"options":[{"de":"Gott, sei mir Sünder gnädig!","sr":"Боже, милостив буди мени грешноме!"},{"de":"Ich danke dir, dass ich gerecht bin.","sr":"Хвала ти што сам праведан."},{"de":"Herr, gib mir Reichtum.","sr":"Господе, дај ми богатство."}],"correct":0},{"q":{"de":"Wer ging gerechtfertigt nach Hause?","sr":"Ко је отишао оправдан кући?"},"options":[{"de":"Der Zöllner","sr":"Цариник"},{"de":"Der Pharisäer","sr":"Фарисеј"},{"de":"Beide","sr":"Обојица"}],"correct":0},{"q":{"de":"Was beginnt mit dem Sonntag dieses Gleichnisses?","sr":"Шта почиње недељом ове приче?"},"options":[{"de":"Die Zeit des Triodion","sr":"Период Триода"},{"de":"Die Osterzeit","sr":"Васкршње време"},{"de":"Die Weihnachtsfastenzeit","sr":"Божићни пост"}],"correct":0}]},
    {"id":"bib-mt14","book":"mt","order":69,"title":{"de":"Jesus geht auf dem Wasser","sr":"Исус хода по води"},"ref":{"de":"Matthäus 14,22–34","sr":"Матеј 14,22–34"},"intro":{"de":"Nach der Speisung der Fünftausend schickt Jesus die Jünger mit dem Boot voraus. In der Nacht kommt er über das Wasser zu ihnen. Dieses Evangelium wird am neunten Sonntag nach Pfingsten gelesen.","sr":"После умножења хлебова Исус шаље ученике лађом напред. Ноћу им долази по води. Ово Јеванђеље чита се девете недеље после Педесетнице."},"introTag":"history","context":{"de":"Der See Gennesaret ist für plötzliche Stürme bekannt. Die „vierte Nachtwache“ ist die Zeit zwischen etwa drei und sechs Uhr morgens. Im Alten Testament ist es Gott, der über die Wasser schreitet und das Meer beherrscht (Ijob 9,8; Ps 76(77),20).","sr":"Генисаретско језеро познато је по изненадним олујама. „Четврта стража ноћна“ је време између отприлике три и шест сати ујутру. У Старом Завету Бог је тај који хода по водама и влада морем (Јов 9,8; Пс 76,20)."},"reading":[{"ref":{"de":"Mt 14,22–27","sr":"Мт 14,22–27"},"note":{"de":"Habt Mut, ich bin es; fürchtet euch nicht!","sr":"Не бојте се, ја сам!"}},{"ref":{"de":"Mt 14,28–34","sr":"Мт 14,28–34"},"note":{"de":"Petrus auf dem Wasser; Kleingläubiger, warum hast du gezweifelt?","sr":"Петар на води; маловерни, зашто си посумњао?"}}],"summary":{"de":"Jesus drängt die Jünger, ins Boot zu steigen und vorauszufahren, während er die Menge entlässt; dann steigt er allein auf einen Berg, um zu beten. Das Boot ist weit draußen und wird von den Wellen hin- und hergeworfen, denn der Wind steht ihm entgegen. In der vierten Nachtwache kommt Jesus über den See zu ihnen. Die Jünger erschrecken und schreien: Ein Gespenst! Jesus sagt: Habt Mut, ich bin es; fürchtet euch nicht. Petrus sagt: Herr, wenn du es bist, so befiehl mir, zu dir über das Wasser zu kommen. Jesus sagt: Komm! Petrus steigt aus und geht über das Wasser. Als er aber den starken Wind sieht, bekommt er Angst, beginnt zu sinken und schreit: Herr, rette mich! Sofort streckt Jesus die Hand aus, ergreift ihn und sagt: Du Kleingläubiger, warum hast du gezweifelt? Als sie ins Boot steigen, legt sich der Wind. Die im Boot fallen vor ihm nieder und sagen: Wahrhaftig, du bist Gottes Sohn.","sr":"Исус нагони ученике да уђу у лађу и пређу пре Њега, док Он отпусти народ; затим се сам пење на гору да се моли. Лађа је већ далеко на пучини и бацају је таласи, јер је ветар противан. У четврту стражу ноћи Исус им долази идући по мору. Ученици се уплаше и повичу: Утвара! Исус каже: Не бојте се, ја сам, не плашите се. Петар каже: Господе, ако си ти, заповеди ми да дођем к теби по води. Исус каже: Дођи! Петар изиђе из лађе и пође по води. Али кад виде јак ветар, уплаши се, поче тонути и повика: Господе, спаси ме! Исус одмах пружи руку, ухвати га и каже: Маловерни, зашто си посумњао? Кад уђоше у лађу, ветар преста. А они у лађи поклонише Му се говорећи: Заиста си Ти Син Божји."},"interp":{"simple":{"de":"Solange Petrus auf Jesus schaut, trägt ihn das Wasser. Als er auf den Sturm schaut, sinkt er. Doch auch dann genügt ein ehrlicher Ruf: Herr, rette mich!","sr":"Док Петар гледа у Исуса, вода га носи. Кад погледа на олују, тоне. Али и тада је довољан искрен вапај: Господе, спаси ме!"},"deeper":{"de":"Jesus tut, was im Alten Testament nur Gott tut: Er geht über die Wasser und gebietet dem Sturm. Sein „Ich bin es“ erinnert an den Namen Gottes (Ex 3,14). Das Boot wird in der Auslegung der Kirche oft als Bild der Kirche gedeutet, die durch die Stürme der Welt fährt; Christus verlässt sie nicht. Am Ende steht das Bekenntnis der Jünger: Du bist Gottes Sohn.","sr":"Исус чини оно што у Старом Завету чини само Бог: хода по водама и заповеда олуји. Његово „Ја сам“ подсећа на Божје име (Изл 3,14). Лађа се у црквеном тумачењу често схвата као слика Цркве која плови кроз олује света; Христос је не оставља. На крају стоји исповедање ученика: Ти си Син Божји."},"tag":"counsel"},"christ":{"de":"Christus betet allein auf dem Berg und sieht doch seine Jünger in Not. Er kommt zu ihnen mitten in der Nacht und streckt dem Sinkenden sofort die Hand aus.","sr":"Христос се сам моли на гори, а ипак види своје ученике у невољи. Долази им усред ноћи и одмах пружа руку ономе који тоне."},"links":[{"ref":{"de":"Mk 4,35–41","sr":"Мк 4,35–41"},"note":{"de":"Die Stillung des Sturms.","sr":"Утишавање буре."}},{"ref":{"de":"Ps 106(107),23–30","sr":"Пс 106,23–30"},"note":{"de":"Er stillte den Sturm.","sr":"Утиша буру."}},{"ref":{"de":"Ex 3,14","sr":"Изл 3,14"},"note":{"de":"Ich bin, der ich bin.","sr":"Ја сам Који јесам."}}],"fathers":{"de":"Für diese Version wurde kein einzelner freier Väterkommentar zu dieser Stelle geprüft; wörtliche Zitate gibt die App nicht wieder.","sr":"За ово издање није проверен ниједан појединачан слободан коментар отаца на ово место; апликација не наводи дословне цитате."},"fathersTag":"history","questions":[{"q":{"de":"Warum beginnt Petrus zu sinken?","sr":"Зашто Петар почиње да тоне?"},"a":{"de":"Weil er nicht mehr auf Jesus, sondern auf den starken Wind schaut und Angst bekommt.","sr":"Зато што више не гледа у Исуса, него на јак ветар и уплаши се."}},{"q":{"de":"Was bedeutet Jesu Wort „Ich bin es“?","sr":"Шта значи Исусова реч „Ја сам“?"},"a":{"de":"Es beruhigt die Jünger und erinnert an den Namen, mit dem Gott sich Mose offenbarte.","sr":"Умирује ученике и подсећа на име којим се Бог открио Мојсију."}},{"q":{"de":"Was bekennen die Jünger am Ende?","sr":"Шта ученици исповедају на крају?"},"a":{"de":"Wahrhaftig, du bist Gottes Sohn.","sr":"Заиста си Ти Син Божји."}}],"practice":{"de":"Wenn dir diese Woche etwas Angst macht, halte inne und sprich kurz: „Herr, rette mich!“ Richte deinen Blick bewusst auf Christus statt auf die Wellen.","sr":"Ако вас ове седмице нешто уплаши, застаните и кратко изговорите: „Господе, спаси ме!“ Свесно управите поглед ка Христу уместо на таласе."},"review":{"de":"Jesus kommt über das Wasser; Petrus geht ihm entgegen, sinkt aus Angst und wird gerettet. Die Jünger bekennen: Du bist Gottes Sohn.","sr":"Исус долази по води; Петар Му иде у сусрет, тоне од страха и бива спасен. Ученици исповедају: Ти си Син Божји."},"quiz":[{"q":{"de":"Was rufen die Jünger, als sie Jesus sehen?","sr":"Шта вичу ученици кад виде Исуса?"},"options":[{"de":"Ein Gespenst!","sr":"Утвара!"},{"de":"Ein Engel!","sr":"Анђео!"},{"de":"Ein Prophet!","sr":"Пророк!"}],"correct":0},{"q":{"de":"Was ruft Petrus, als er sinkt?","sr":"Шта виче Петар кад тоне?"},"options":[{"de":"Herr, rette mich!","sr":"Господе, спаси ме!"},{"de":"Ich glaube nicht!","sr":"Не верујем!"},{"de":"Zurück ins Boot!","sr":"Назад у лађу!"}],"correct":0},{"q":{"de":"Was tut Jesus vor dieser Nacht auf dem Berg?","sr":"Шта Исус ради пре те ноћи на гори?"},"options":[{"de":"Er betet allein","sr":"Моли се сам"},{"de":"Er predigt der Menge","sr":"Проповеда народу"},{"de":"Er schläft","sr":"Спава"}],"correct":0}]},
    {"id":"bib-mk2","book":"mk","order":70,"title":{"de":"Die Heilung des Gelähmten in Kafarnaum","sr":"Исцељење узетога у Капернауму"},"ref":{"de":"Markus 2,1–12","sr":"Марко 2,1–12"},"intro":{"de":"Vier Männer tragen einen Gelähmten zu Jesus und decken dafür sogar das Dach ab. Dieses Evangelium wird am zweiten Sonntag der Großen Fastenzeit gelesen, der dem hl. Gregor Palamas gewidmet ist.","sr":"Четворица носе узетог човека Исусу и због тога чак отварају кров. Ово Јеванђеље чита се друге недеље Великог поста, која је посвећена светом Григорију Палами."},"introTag":"history","context":{"de":"Häuser in Kafarnaum hatten oft flache Dächer aus Balken, Zweigen und Lehm, die man über eine Außentreppe erreichte. Die Schriftgelehrten waren Ausleger des Gesetzes; für sie konnte nur Gott Sünden vergeben.","sr":"Куће у Капернауму често су имале равне кровове од греда, грања и блата, до којих се долазило спољним степеницама. Књижевници су били тумачи Закона; за њих је само Бог могао да опрашта грехе."},"reading":[{"ref":{"de":"Mk 2,1–5","sr":"Мк 2,1–5"},"note":{"de":"Das abgedeckte Dach; deine Sünden sind dir vergeben.","sr":"Отворени кров; опраштају ти се греси."}},{"ref":{"de":"Mk 2,6–12","sr":"Мк 2,6–12"},"note":{"de":"Steh auf, nimm deine Liege und geh!","sr":"Устани, узми одар свој и иди!"}}],"summary":{"de":"Jesus ist wieder in Kafarnaum, und so viele Menschen kommen, dass nicht einmal vor der Tür Platz ist. Vier Männer bringen einen Gelähmten. Weil sie wegen der Menge nicht zu Jesus kommen, decken sie das Dach ab und lassen die Liege hinunter. Als Jesus ihren Glauben sieht, sagt er zu dem Gelähmten: Kind, deine Sünden sind dir vergeben. Einige Schriftgelehrte denken: Er lästert Gott! Wer kann Sünden vergeben außer Gott allein? Jesus erkennt ihre Gedanken und fragt: Was ist leichter, zu sagen: Deine Sünden sind dir vergeben, oder: Steh auf und geh umher? Damit ihr aber wisst, dass der Menschensohn Vollmacht hat, auf der Erde Sünden zu vergeben – sagt er zu dem Gelähmten: Steh auf, nimm deine Liege und geh nach Hause! Der Mann steht auf und geht vor aller Augen hinaus. Alle staunen und preisen Gott.","sr":"Исус је опет у Капернауму, и сабира се толико народа да ни пред вратима нема места. Четворица доносе узетога. Пошто од народа не могу да приђу Исусу, отварају кров и спуштају одар. Видевши њихову веру, Исус каже узетоме: Синко, опраштају ти се греси твоји. Неки књижевници помисле: Он хули на Бога! Ко може опраштати грехе осим једнога Бога? Исус позна њихове мисли и упита: Шта је лакше рећи: Опраштају ти се греси, или: Устани и ходи? Али да знате да власт има Син Човечији на земљи опраштати грехе – каже узетоме: Устани, узми одар свој и иди кући! Човек устаде и изиђе пред свима. Сви се дивише и славише Бога."},"interp":{"simple":{"de":"Die Freunde tragen den Kranken, und Jesus sieht ihren Glauben. Er heilt zuerst die Seele durch die Vergebung, dann den Leib.","sr":"Пријатељи носе болесника, а Исус види њихову веру. Он најпре исцељује душу опроштајем, а затим тело."},"deeper":{"de":"Die Schriftgelehrten haben recht, dass nur Gott Sünden vergeben kann – und gerade deshalb zeigt die sichtbare Heilung, wer Jesus ist. Die Kirche liest dieses Evangelium in der Fastenzeit, weil es Umkehr und Vergebung mit der Heilung des ganzen Menschen verbindet. Es zeigt auch die Kraft der Fürbitte: Der Glaube der Freunde bringt den Gelähmten zu Christus. So beten auch wir füreinander und tragen einander im Gebet.","sr":"Књижевници су у праву да само Бог може опраштати грехе – и управо зато видљиво исцељење показује ко је Исус. Црква чита ово Јеванђеље у посту, јер повезује покајање и опроштај са исцељењем целог човека. Оно показује и силу заступничке молитве: вера пријатеља доноси узетога Христу. Тако и ми молимо једни за друге и носимо једни друге у молитви."},"tag":"counsel"},"christ":{"de":"Christus hat die Vollmacht, Sünden zu vergeben, weil er Gott ist. Diese Vollmacht hat er seiner Kirche anvertraut, die sie im Mysterium der Beichte ausübt.","sr":"Христос има власт да опрашта грехе, јер је Бог. Ту власт поверио је својој Цркви, која је врши у Светој тајни исповести."},"links":[{"ref":{"de":"Joh 20,22–23","sr":"Јн 20,22–23"},"note":{"de":"Wem ihr die Sünden vergebt …","sr":"Којима опростите грехе …"}},{"ref":{"de":"Jak 5,14–16","sr":"Јак 5,14–16"},"note":{"de":"Betet füreinander, damit ihr geheilt werdet.","sr":"Молите се Богу један за другога да оздравите."}},{"ref":{"de":"Ps 102(103),2–3","sr":"Пс 102,2–3"},"note":{"de":"Der dir all deine Schuld vergibt.","sr":"Он опрашта сва безакоња твоја."}}],"fathers":{"de":"Für diese Version wurde kein einzelner freier Väterkommentar zu dieser Stelle geprüft; wörtliche Zitate gibt die App nicht wieder.","sr":"За ово издање није проверен ниједан појединачан слободан коментар отаца на ово место; апликација не наводи дословне цитате."},"fathersTag":"history","questions":[{"q":{"de":"Wessen Glauben sieht Jesus?","sr":"Чију веру види Исус?"},"a":{"de":"Den Glauben der Männer, die den Gelähmten tragen – und wohl auch den des Kranken selbst.","sr":"Веру људи који носе узетога – а вероватно и веру самог болесника."}},{"q":{"de":"Warum sagt Jesus zuerst „Deine Sünden sind dir vergeben“?","sr":"Зашто Исус најпре каже „Опраштају ти се греси“?"},"a":{"de":"Weil er den ganzen Menschen heilen will und die Heilung der Seele die tiefere ist.","sr":"Зато што жели да исцели целог човека, а исцељење душе је дубље."}},{"q":{"de":"Wozu dient die sichtbare Heilung?","sr":"Чему служи видљиво исцељење?"},"a":{"de":"Sie zeigt, dass der Menschensohn wirklich die Vollmacht hat, Sünden zu vergeben.","sr":"Показује да Син Човечији заиста има власт да опрашта грехе."}}],"practice":{"de":"Wen kannst du diese Woche „zu Christus tragen“? Nenne im Gebet täglich einen Menschen, der Hilfe braucht, mit Namen.","sr":"Кога можете ове седмице „донети Христу“? Сваког дана у молитви поменути по имену једног човека коме је потребна помоћ."},"review":{"de":"Vier Freunde lassen einen Gelähmten durch das Dach hinab. Jesus vergibt ihm die Sünden und heilt ihn, damit alle sehen: Er hat Vollmacht, Sünden zu vergeben.","sr":"Четворица спуштају узетога кроз кров. Исус му опрашта грехе и исцељује га, да сви виде: Он има власт да опрашта грехе."},"quiz":[{"q":{"de":"Wie bringen die Freunde den Gelähmten zu Jesus?","sr":"Како пријатељи доносе узетога Исусу?"},"options":[{"de":"Durch das abgedeckte Dach","sr":"Кроз отворени кров"},{"de":"Durch ein Fenster","sr":"Кроз прозор"},{"de":"Sie warten draußen","sr":"Чекају напољу"}],"correct":0},{"q":{"de":"Was sagt Jesus zuerst zu dem Gelähmten?","sr":"Шта Исус најпре каже узетоме?"},"options":[{"de":"Deine Sünden sind dir vergeben","sr":"Опраштају ти се греси"},{"de":"Geh zum Priester","sr":"Иди свештенику"},{"de":"Warte bis Sabbat","sr":"Чекај до суботе"}],"correct":0},{"q":{"de":"An welchem Sonntag wird dieses Evangelium gelesen?","sr":"Које недеље се чита ово Јеванђеље?"},"options":[{"de":"Am zweiten Sonntag der Großen Fastenzeit","sr":"Друге недеље Великог поста"},{"de":"Am Palmsonntag","sr":"На Цвети"},{"de":"Am Pfingstsonntag","sr":"На Духове"}],"correct":0}]},
    {"id":"bib-jn5","book":"jn","order":71,"title":{"de":"Der Gelähmte am Teich Betesda","sr":"Раслабљени код бање Витезде"},"ref":{"de":"Johannes 5,1–15","sr":"Јован 5,1–15"},"intro":{"de":"Ein Mann ist seit 38 Jahren krank und hat niemanden, der ihm hilft. Dieses Evangelium wird am vierten Sonntag nach Ostern gelesen, dem Sonntag des Gelähmten.","sr":"Један човек је болестан тридесет и осам година и нема никога да му помогне. Ово Јеванђеље чита се четврте недеље по Васкрсу, у Недељу раслабљеног."},"introTag":"history","context":{"de":"Der Teich Betesda lag in Jerusalem nahe dem Schaftor und hatte fünf Säulenhallen; Ausgrabungen haben eine solche Anlage gefunden. Nach dem Volksglauben wurde der zuerst Geheilte, der nach einer Bewegung des Wassers hineinstieg.","sr":"Бања Витезда налазила се у Јерусалиму близу Овчијих врата и имала је пет тремова; ископавања су пронашла такво здање. По народном веровању, оздрављао је онај ко први сиђе у воду после њеног покретања."},"reading":[{"ref":{"de":"Joh 5,1–9","sr":"Јн 5,1–9"},"note":{"de":"Willst du gesund werden?","sr":"Хоћеш ли да будеш здрав?"}},{"ref":{"de":"Joh 5,10–15","sr":"Јн 5,10–15"},"note":{"de":"Sündige nicht mehr.","sr":"Више не греши."}}],"summary":{"de":"In Jerusalem liegt beim Teich Betesda eine Menge Kranker: Blinde, Lahme, Ausgezehrte. Dort ist ein Mann, der seit achtunddreißig Jahren krank ist. Jesus sieht ihn liegen und fragt: Willst du gesund werden? Der Kranke antwortet: Herr, ich habe keinen Menschen, der mich in den Teich bringt, wenn das Wasser bewegt wird; bis ich komme, steigt ein anderer vor mir hinein. Jesus sagt: Steh auf, nimm deine Liege und geh! Sofort wird der Mann gesund, nimmt seine Liege und geht umher. Es ist aber Sabbat, und einige Juden werfen ihm vor, am Sabbat seine Liege zu tragen. Später findet Jesus ihn im Tempel und sagt: Siehe, du bist gesund geworden; sündige nicht mehr, damit dir nicht etwas Schlimmeres widerfährt. Der Mann geht hin und sagt, dass es Jesus war, der ihn gesund gemacht hat.","sr":"У Јерусалиму код бање Витезде лежи мноштво болесника: слепих, хромих, сасушених. Ту је један човек који је болестан тридесет и осам година. Исус га види како лежи и пита: Хоћеш ли да будеш здрав? Болесник одговара: Господе, немам човека да ме спусти у бању кад се вода заталаса; а док ја дођем, други сиђе пре мене. Исус каже: Устани, узми одар свој и ходи! Човек одмах оздрави, узе одар свој и хођаше. А беше субота, и неки Јевреји му пребацују што у суботу носи одар. После га Исус нађе у храму и каже: Ето, оздравио си; више не греши, да ти не буде што горе. Човек оде и јави да га је Исус исцелио."},"interp":{"simple":{"de":"„Ich habe keinen Menschen“ – Christus wird für den Einsamen der Mensch, der ihm hilft. Er fragt aber zuerst nach dem Willen: Willst du gesund werden?","sr":"„Немам човека“ – Христос постаје за усамљенога онај Човек који му помаже. Али најпре пита за вољу: Хоћеш ли да будеш здрав?"},"deeper":{"de":"Die Frage „Willst du gesund werden?“ zeigt, dass Gott den Menschen nicht zwingt; Heilung braucht unsere Zustimmung. Christus ist zugleich der Herr des Sabbats, der am Sabbat das Werk Gottes tut (Joh 5,17). In der Osterzeit gelesen, verkündet das Evangelium: Der Auferstandene richtet den gelähmten Menschen auf. Das Wasser des Teiches wird von der Kirche auch als Vorbild der Taufe verstanden.","sr":"Питање „Хоћеш ли да будеш здрав?“ показује да Бог не принуђава човека; исцељењу је потребан наш пристанак. Христос је уједно Господар суботе, који у суботу чини дело Божје (Јн 5,17). Читано у васкршње време, Јеванђеље објављује: Васкрсли подиже раслабљеног човека. Вода бање у Цркви се схвата и као праслика крштења."},"tag":"counsel"},"christ":{"de":"Christus kommt zu dem, den alle übersehen haben, und ist für ihn „der Mensch“, den er nicht hatte. Er heilt den Leib und ruft zugleich zur Umkehr: Sündige nicht mehr.","sr":"Христос долази ономе кога су сви превидели и постаје за њега „човек“ кога није имао. Исцељује тело и уједно позива на покајање: Више не греши."},"links":[{"ref":{"de":"Mk 2,1–12","sr":"Мк 2,1–12"},"note":{"de":"Der Gelähmte in Kafarnaum.","sr":"Узети у Капернауму."}},{"ref":{"de":"Jes 35,3–6","sr":"Ис 35,3–6"},"note":{"de":"Dann springt der Lahme wie ein Hirsch.","sr":"Тада ће хроми скакати као јелен."}},{"ref":{"de":"Joh 5,17","sr":"Јн 5,17"},"note":{"de":"Mein Vater wirkt bis jetzt, und auch ich wirke.","sr":"Отац мој до сада ради, и ја радим."}}],"fathers":{"de":"Für diese Version wurde kein einzelner freier Väterkommentar zu dieser Stelle geprüft; wörtliche Zitate gibt die App nicht wieder.","sr":"За ово издање није проверен ниједан појединачан слободан коментар отаца на ово место; апликација не наводи дословне цитате."},"fathersTag":"history","questions":[{"q":{"de":"Wie lange war der Mann krank?","sr":"Колико дуго је човек био болестан?"},"a":{"de":"Achtunddreißig Jahre.","sr":"Тридесет и осам година."}},{"q":{"de":"Warum fragt Jesus „Willst du gesund werden?“","sr":"Зашто Исус пита „Хоћеш ли да будеш здрав?“"},"a":{"de":"Weil Gott den Willen des Menschen achtet; Heilung braucht auch unser Ja.","sr":"Зато што Бог поштује човекову вољу; исцељењу је потребан и наш пристанак."}},{"q":{"de":"Was sagt Jesus dem Geheilten im Tempel?","sr":"Шта Исус каже исцељеноме у храму?"},"a":{"de":"Sündige nicht mehr, damit dir nicht etwas Schlimmeres widerfährt.","sr":"Више не греши, да ти не буде што горе."}}],"practice":{"de":"Gibt es jemanden in deiner Umgebung, der „keinen Menschen hat“? Besuche oder rufe diese Woche einen einsamen oder kranken Menschen an.","sr":"Има ли у вашој околини неко ко „нема човека“? Ове седмице посетите или позовите неког усамљеног или болесног човека."},"review":{"de":"Am Teich Betesda heilt Jesus einen Mann, der 38 Jahre krank war und niemanden hatte. Er fragt: Willst du gesund werden? und ruft: Sündige nicht mehr.","sr":"Код бање Витезде Исус исцељује човека који је тридесет и осам година био болестан и није имао никога. Пита: Хоћеш ли да будеш здрав? и позива: Више не греши."},"quiz":[{"q":{"de":"Wie heißt der Teich?","sr":"Како се зове бања?"},"options":[{"de":"Betesda","sr":"Витезда"},{"de":"Schiloach","sr":"Силоам"},{"de":"Jordan","sr":"Јордан"}],"correct":0},{"q":{"de":"Was antwortet der Kranke auf die Frage Jesu?","sr":"Шта болесник одговара на Исусово питање?"},"options":[{"de":"Ich habe keinen Menschen.","sr":"Немам човека."},{"de":"Ich will nicht.","sr":"Нећу."},{"de":"Ich bin schon gesund.","sr":"Већ сам здрав."}],"correct":0},{"q":{"de":"Wann liest die Kirche dieses Evangelium?","sr":"Када Црква чита ово Јеванђеље?"},"options":[{"de":"Am vierten Sonntag nach Ostern","sr":"Четврте недеље по Васкрсу"},{"de":"Am Karfreitag","sr":"На Велики петак"},{"de":"Am Lazarus-Samstag","sr":"На Лазареву суботу"}],"correct":0}]},
    {"id":"bib-rev4","book":"rev","order":72,"title":{"de":"Der Thron Gottes und das Lamm","sr":"Престо Божји и Јагње"},"ref":{"de":"Offenbarung 4–5","sr":"Откривење 4–5"},"intro":{"de":"Johannes schaut durch eine geöffnete Tür in den Himmel und sieht den himmlischen Gottesdienst. Die Offenbarung wird in der orthodoxen Kirche nicht in den Gottesdiensten gelesen; ihr Lobgesang „Heilig, heilig, heilig“ klingt aber in jeder Göttlichen Liturgie an.","sr":"Јован гледа кроз отворена врата на небу и види небеско богослужење. Откривење се у Православној Цркви не чита на богослужењима; али њена песма „Свет, свет, свет“ одјекује на свакој Божанственој литургији."},"introTag":"history","context":{"de":"Die Offenbarung ist ein prophetisches Buch voller Bilder und Zahlen, die man nicht wörtlich, sondern sinnbildlich verstehen soll. Viele Bilder stammen aus den Propheten, etwa aus Jesaja 6 und Ezechiel 1. Das Buch wurde im Osten erst spät allgemein angenommen und hat keinen Platz in den gottesdienstlichen Lesungen; die Kirche warnt vor eigenmächtigen Berechnungen des Weltendes.","sr":"Откривење је пророчка књига пуна слика и бројева које не треба схватати буквално, него символички. Многе слике потичу из пророка, на пример из Исаије 6 и Језекиља 1. Књига је на Истоку касно прихваћена, у богослужбену употребу није ни ушла, а Црква упозорава на самовољна прорачунавања краја света."},"reading":[{"ref":{"de":"Offb 4,1–11","sr":"Отк 4,1–11"},"note":{"de":"Der Thron, die 24 Ältesten und die vier Lebewesen.","sr":"Престо, двадесет и четири старешине и четири бића."}},{"ref":{"de":"Offb 5,1–14","sr":"Отк 5,1–14"},"note":{"de":"Das Buch mit sieben Siegeln und das geschlachtete Lamm.","sr":"Књига са седам печата и заклано Јагње."}}],"summary":{"de":"Johannes sieht einen Thron im Himmel und auf ihm einen, der wie Edelstein leuchtet; um den Thron ist ein Regenbogen. Um ihn sitzen vierundzwanzig Älteste in weißen Gewändern mit goldenen Kronen. Vor dem Thron sind vier Lebewesen voller Augen, gleich einem Löwen, einem Stier, einem Menschen und einem Adler. Ohne Ruhe rufen sie Tag und Nacht: Heilig, heilig, heilig ist der Herr, Gott, der Allherrscher, der war und der ist und der kommt. Die Ältesten werfen ihre Kronen vor den Thron und sagen: Würdig bist du, unser Herr und Gott, denn du hast alles erschaffen. In der Rechten dessen, der auf dem Thron sitzt, liegt ein Buch, versiegelt mit sieben Siegeln; niemand kann es öffnen, und Johannes weint. Da sieht er mitten vor dem Thron ein Lamm wie geschlachtet. Das Lamm nimmt das Buch, und alle fallen vor ihm nieder und singen ein neues Lied: Würdig bist du, denn du wurdest geschlachtet und hast mit deinem Blut Menschen für Gott erkauft aus allen Stämmen und Völkern. Und alle Geschöpfe im Himmel und auf der Erde preisen Gott und das Lamm.","sr":"Јован види престо на небу и на њему Онога који сија као драго камење; око престола је дуга. Око Њега седи двадесет и четири старешине у белим хаљинама са златним венцима. Пред престолом су четири бића пуна очију, налик на лава, теле, човека и орла. Без престанка дан и ноћ говоре: Свет, свет, свет Господ Бог Сведржитељ, који беше и који јесте и који долази. Старешине полажу своје венце пред престо и говоре: Достојан си, Господе и Боже наш, јер си Ти створио све. У десници Онога који седи на престолу је књига запечаћена са седам печата; нико не може да је отвори, и Јован плаче. Тада види насред престола Јагње као заклано. Јагње узима књигу, и сви падају пред Њим и певају нову песму: Достојан си, јер си заклан и искупио си нас Богу крвљу својом од сваког племена и народа. И сва створења на небу и на земљи славе Бога и Јагње."},"interp":{"simple":{"de":"Im Mittelpunkt des Himmels steht kein Sieger mit Schwert, sondern ein Lamm, das geschlachtet wurde: Christus, der durch sein Kreuz gesiegt hat. Der Himmel ist ein einziger Gottesdienst.","sr":"У средишту неба не стоји победник са мачем, него Јагње које је заклано: Христос, који је победио својим крстом. Небо је једно непрестано богослужење."},"deeper":{"de":"Die Göttliche Liturgie ist Teilnahme an diesem himmlischen Gottesdienst: Im eucharistischen Hochgebet singt die Gemeinde mit den Engeln das „Heilig, heilig, heilig“. Die vier Lebewesen wurden schon früh als Sinnbilder der vier Evangelisten gedeutet; man sieht sie oft in den Ecken der Ikonen „Erlöser in den Mächten“. Das Lamm ist geschlachtet und lebt doch – das Kreuz und die Auferstehung gehören untrennbar zusammen. Die Zahlen und Bilder sind Sinnbilder; Berechnungen über das Weltende lehnt die Kirche ab.","sr":"Божанствена литургија је учешће у овом небеском богослужењу: у евхаристијској молитви сабрање са анђелима пева „Свет, свет, свет“. Четири бића су рано протумачена као символи четворице јеванђелиста; често се виде у угловима икона „Спас у силама“. Јагње је заклано, а ипак живо – крст и васкрсење неодвојиво припадају једно другом. Бројеви и слике су символи; прорачуне о крају света Црква одбацује."},"tag":"counsel"},"christ":{"de":"Christus ist das Lamm Gottes (Joh 1,29), das durch seine Hingabe die Welt erlöst hat. Nur er kann das versiegelte Buch der Geschichte öffnen: Er gibt ihr Sinn und Ziel.","sr":"Христос је Јагње Божје (Јн 1,29) које је својим жртвовањем искупило свет. Само Он може да отвори запечаћену књигу историје: Он јој даје смисао и циљ."},"links":[{"ref":{"de":"Jes 6,1–3","sr":"Ис 6,1–3"},"note":{"de":"Die Serafim rufen: Heilig, heilig, heilig.","sr":"Серафими вичу: Свет, свет, свет."}},{"ref":{"de":"Ez 1,4–14","sr":"Јез 1,4–14"},"note":{"de":"Die vier Lebewesen.","sr":"Четири бића."}},{"ref":{"de":"Joh 1,29","sr":"Јн 1,29"},"note":{"de":"Seht, das Lamm Gottes.","sr":"Ево Јагњета Божјег."}}],"fathers":{"de":"Für diese Version wurde kein einzelner freier Väterkommentar zu dieser Stelle geprüft; wörtliche Zitate gibt die App nicht wieder.","sr":"За ово издање није проверен ниједан појединачан слободан коментар отаца на ово место; апликација не наводи дословне цитате."},"fathersTag":"history","questions":[{"q":{"de":"Was rufen die vier Lebewesen ohne Unterlass?","sr":"Шта четири бића непрестано говоре?"},"a":{"de":"Heilig, heilig, heilig ist der Herr, Gott, der Allherrscher, der war und der ist und der kommt.","sr":"Свет, свет, свет Господ Бог Сведржитељ, који беше и који јесте и који долази."}},{"q":{"de":"Wer allein kann das versiegelte Buch öffnen?","sr":"Ко једини може да отвори запечаћену књигу?"},"a":{"de":"Das Lamm, das geschlachtet wurde – Christus.","sr":"Јагње које је заклано – Христос."}},{"q":{"de":"Wo begegnet uns der Gesang dieser Kapitel im Gottesdienst?","sr":"Где нам се песма ових глава јавља на богослужењу?"},"a":{"de":"Im „Heilig, heilig, heilig“ des eucharistischen Hochgebets in der Göttlichen Liturgie.","sr":"У „Свет, свет, свет“ евхаристијске молитве на Божанственој литургији."}}],"practice":{"de":"Achte bei der nächsten Liturgie bewusst auf das „Heilig, heilig, heilig“. Erinnere dich daran, dass du in diesem Moment mit den Engeln singst.","sr":"На следећој литургији свесно обратите пажњу на „Свет, свет, свет“. Сетите се да у том тренутку певате заједно са анђелима."},"review":{"de":"Johannes sieht den Thron Gottes, die Ältesten, die vier Lebewesen und das geschlachtete Lamm, das allein das Buch öffnen kann. Alle Schöpfung lobt Gott und das Lamm.","sr":"Јован види престо Божји, старешине, четири бића и заклано Јагње које једино може да отвори књигу. Сва твар слави Бога и Јагње."},"quiz":[{"q":{"de":"Wie viele Älteste sitzen um den Thron?","sr":"Колико старешина седи око престола?"},"options":[{"de":"Vierundzwanzig","sr":"Двадесет и четири"},{"de":"Zwölf","sr":"Дванаест"},{"de":"Sieben","sr":"Седам"}],"correct":0},{"q":{"de":"Wie sieht Johannes Christus in Kapitel 5?","sr":"Како Јован у 5. глави види Христа?"},"options":[{"de":"Als ein Lamm wie geschlachtet","sr":"Као Јагње као заклано"},{"de":"Als einen Löwen","sr":"Као лава"},{"de":"Als einen Engel","sr":"Као анђела"}],"correct":0},{"q":{"de":"Wird die Offenbarung in orthodoxen Gottesdiensten gelesen?","sr":"Да ли се Откривење чита на православним богослужењима?"},"options":[{"de":"Nein","sr":"Не"},{"de":"Ja, jeden Sonntag","sr":"Да, сваке недеље"},{"de":"Nur an Ostern","sr":"Само на Васкрс"}],"correct":0}]}
  ]
};

if (typeof module !== "undefined") module.exports = { BIBLE };
