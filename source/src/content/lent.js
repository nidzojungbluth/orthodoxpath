/* OrthodoxPath – Begleiter durch die Große Fastenzeit. from/to = Tage relativ zu Ostern (Pascha = 0).
   Sonntagsevangelien nach der byzantinischen Leseordnung; die Impulse sind seelsorglicher Rat, keine Vorschrift. */
const LENT_WEEKS = [
  { from: -48, to: -42, h: { de: "1. Woche – Reine Woche", sr: "1. седмица – Чиста седмица" }, sun: { de: "Sonntag der Orthodoxie", sr: "Недеља православља" }, ref: "{Jn}1.43-51",
    t: { de: "Die Fastenzeit beginnt am Reinen Montag, nachdem am Abend zuvor alle einander um Vergebung gebeten haben. An den ersten vier Abenden wird der Große Bußkanon des hl. Andreas von Kreta gelesen. Der erste Sonntag erinnert an die Wiederherstellung der Ikonenverehrung im Jahr 843.", sr: "Пост почиње на Чисти понедељак, пошто су претходне вечери сви једни друге замолили за опроштај. Прве четири вечери чита се Велики покајни канон светог Андреја Критског. Прва недеља подсећа на обнову поштовања икона 843. године." },
    do: { de: "Beginne schlicht: Lege fest, worauf du verzichtest und wann du täglich betest – lieber wenig und treu als viel und kurz.", sr: "Почните једноставно: одредите чега се одричете и када се свакодневно молите – боље мало и верно него много и кратко." } },
  { from: -41, to: -35, h: { de: "2. Woche", sr: "2. седмица" }, sun: { de: "Sonntag des hl. Gregor Palamas", sr: "Недеља светог Григорија Паламе" }, ref: "{Mk}2.1-12",
    t: { de: "Das Evangelium erzählt vom Gelähmten, den vier Freunde durch das Dach zu Christus hinablassen. Christus vergibt zuerst die Sünden und heilt dann den Leib. Die Kirche gedenkt des hl. Gregor Palamas, der das Herzensgebet verteidigt hat.", sr: "Јеванђеље говори о узетом кога четворица пријатеља спуштају кроз кров пред Христа. Христос најпре опрашта грехе, а затим исцељује тело. Црква се сећа светог Григорија Паламе, браниоца молитве срца." },
    do: { de: "Bete in dieser Woche täglich für einen Menschen mit Namen – trage ihn wie die vier Freunde zu Christus.", sr: "Ове седмице се свакодневно молите за једног човека по имену – понесите га Христу као она четворица пријатеља." } },
  { from: -34, to: -28, h: { de: "3. Woche", sr: "3. седмица" }, sun: { de: "Sonntag der Kreuzverehrung", sr: "Крстопоклона недеља" }, ref: "{Mk}8.34-9.1",
    t: { de: "In der Mitte der Fastenzeit wird das Kreuz in die Mitte der Kirche getragen – als Stärkung für die Müden und als Zeichen, wohin der Weg führt: durch das Kreuz zur Auferstehung.", sr: "На средини поста крст се износи на средину храма – као окрепљење уморнима и као знак куда пут води: кроз крст ка васкрсењу." },
    do: { de: "Nimm eine Mühe dieser Woche bewusst an, ohne zu klagen, und bringe sie im Gebet vor Christus.", sr: "Једну тешкоћу ове седмице примите свесно, без роптања, и принесите је Христу у молитви." } },
  { from: -27, to: -21, h: { de: "4. Woche", sr: "4. седмица" }, sun: { de: "Sonntag des hl. Johannes Klimakos", sr: "Недеља светог Јована Лествичника" }, ref: "{Mk}9.17-31",
    t: { de: "Der Vater des kranken Jungen ruft: „Ich glaube; hilf meinem Unglauben!“ Die Kirche gedenkt des hl. Johannes vom Sinai, dessen Buch „Die Leiter“ den geistlichen Weg Stufe für Stufe beschreibt.", sr: "Отац болесног дечака вапије: „Верујем, Господе, помози моме неверју!“ Црква се сећа светог Јована Синајског, чија књига „Лествица“ описује духовни пут степеник по степеник." },
    do: { de: "Wähle eine einzige Stufe: eine schlechte Gewohnheit, an der du diese Woche geduldig arbeitest.", sr: "Изаберите један једини степеник: једну лошу навику на којој ћете ове седмице стрпљиво радити." } },
  { from: -20, to: -14, h: { de: "5. Woche", sr: "5. седмица" }, sun: { de: "Sonntag der hl. Maria von Ägypten", sr: "Недеља свете Марије Египћанке" }, ref: "{Mk}10.32-45",
    t: { de: "In dieser Woche wird der ganze Große Kanon gelesen und am Samstag der Akathistos an die Gottesmutter gesungen. Maria von Ägypten zeigt, dass kein Leben zu verfahren ist für die Umkehr.", sr: "Ове седмице чита се цео Велики канон, а у суботу се пева Акатист Пресветој Богородици. Марија Египћанка показује да ниједан живот није изгубљен за покајање." },
    do: { de: "Wenn du es noch nicht getan hast: Bereite dich auf die Beichte vor.", sr: "Ако још нисте: припремите се за исповест." }, link: "confess" },
  { from: -13, to: -7, h: { de: "6. Woche – Lazarus-Samstag und Palmsonntag", sr: "6. седмица – Лазарева субота и Цвети" }, sun: { de: "Einzug in Jerusalem", sr: "Улазак Господа у Јерусалим (Цвети)" }, ref: "{Jn}12.1-18",
    t: { de: "Die vierzig Tage enden am Freitag. Am Samstag erweckt Christus Lazarus, am Sonntag zieht er als demütiger König in Jerusalem ein. Dann beginnt die Karwoche.", sr: "Четрдесет дана се завршава у петак. У суботу Христос васкрсава Лазара, а у недељу улази у Јерусалим као смирени Цар. Затим почиње Страсна седмица." },
    do: { de: "Plane jetzt, welche Gottesdienste der Karwoche du besuchen kannst.", sr: "Сада испланирајте на која богослужења Страсне седмице можете доћи." } }
];
const HOLY_WEEK = [
  { rel: -6, h: { de: "Großer Montag", sr: "Велики понедељак" }, ref: "{Mt}21.18-43", t: { de: "Der unfruchtbare Feigenbaum: Glaube soll Frucht tragen. Abends: „Siehe, der Bräutigam kommt um Mitternacht“.", sr: "Неплодна смоква: вера треба да донесе плод. Увече: „Се Женик грјадет в полуношчи“." } },
  { rel: -5, h: { de: "Großer Dienstag", sr: "Велики уторак" }, ref: "{Mt}25.1-13", t: { de: "Das Gleichnis von den zehn Jungfrauen: wachsam bleiben, das Öl der Barmherzigkeit bereithalten.", sr: "Прича о десет девојака: бдети и имати спремно уље милосрђа." } },
  { rel: -4, h: { de: "Großer Mittwoch", sr: "Велика среда" }, ref: "{Mt}26.6-16", t: { de: "Die Frau salbt Christus mit kostbarem Öl; Judas verabredet den Verrat. Zwei Antworten auf dieselbe Liebe.", sr: "Жена помазује Христа скупоценим миром; Јуда уговара издају. Два одговора на исту љубав." } },
  { rel: -3, h: { de: "Großer Donnerstag", sr: "Велики четвртак" }, ref: "{Jn}13.1-17", t: { de: "Das Letzte Abendmahl und die Fußwaschung: Christus stiftet die Eucharistie. Abends werden die zwölf Leidensevangelien gelesen.", sr: "Тајна вечера и прање ногу: Христос установљује Евхаристију. Увече се чита дванаест страсних јеванђеља." } },
  { rel: -2, h: { de: "Großer Freitag", sr: "Велики петак" }, ref: "{Jn}19.17-37", t: { de: "Kreuzigung und Tod Christi. Der strengste Fasttag des Jahres; es wird keine Liturgie gefeiert. Das Grabtuch (Plaschtschaniza) wird zur Verehrung hinausgetragen.", sr: "Распеће и смрт Христова. Најстрожи дан поста у години; Литургија се не служи. Износи се плаштаница на целивање." } },
  { rel: -1, h: { de: "Großer Samstag", sr: "Велика субота" }, ref: "{Mt}28.1-20", t: { de: "Christus ruht im Grab und steigt hinab in das Reich des Todes, um die Gefangenen zu befreien. Stille – und erste Vorfreude auf die Osternacht.", sr: "Христос почива у гробу и силази у ад да ослободи сужње. Тишина – и прва радост пред васкршњу ноћ." } }
];
const LENT_PRACTICES = [
  { de: "Bete heute das Gebet des hl. Ephräm langsam und aufmerksam.", sr: "Данас полако и пажљиво изговорите молитву светог Јефрема." },
  { de: "Lies heute ein Kapitel aus einem Evangelium.", sr: "Данас прочитајте једну главу из Јеванђеља." },
  { de: "Rufe jemanden an, der einsam ist.", sr: "Позовите некога ко је усамљен." },
  { de: "Verzichte heute auf ein hartes Wort, auch wenn es dir auf der Zunge liegt.", sr: "Данас се уздржите од једне грубе речи, чак и кад вам је на врх језика." },
  { de: "Gib heute etwas weg – Geld, Zeit oder Aufmerksamkeit.", sr: "Данас нешто дајте – новац, време или пажњу." },
  { de: "Lass das Handy eine Stunde liegen und schenke die Zeit dem Gebet oder einem Menschen.", sr: "Оставите телефон на сат времена и то време поклоните молитви или неком човеку." },
  { de: "Bitte einen Menschen um Verzeihung oder vergib im Herzen jemandem.", sr: "Замолите некога за опроштај или у срцу некоме опростите." },
  { de: "Danke Gott am Abend für drei Dinge dieses Tages.", sr: "Увече заблагодарите Богу за три ствари овога дана." },
  { de: "Bete zehn Minuten mit der Gebetsschnur das Jesusgebet.", sr: "Десет минута се молите Исусовом молитвом на бројаници." },
  { de: "Sprich heute über niemanden schlecht.", sr: "Данас ни о коме не говорите ружно." },
  { de: "Lies Psalm 50 als dein eigenes Gebet.", sr: "Прочитајте 50. псалам као своју молитву." },
  { de: "Tue heute eine Arbeit, die du aufgeschoben hast, ohne zu murren.", sr: "Данас без роптања обавите посао који сте одлагали." },
  { de: "Besuche in dieser Woche einen Gottesdienst unter der Woche, wenn es dir möglich ist.", sr: "Ове седмице, ако можете, дођите на једно богослужење радним даном." },
  { de: "Iss heute einfacher als sonst und gib das Ersparte weiter.", sr: "Данас једите једноставније него иначе, а уштеђено дајте даље." }
];
const LENT_NOTE = {
  de: "Fastenregeln sind eine Hilfe, kein Selbstzweck. Kranke, Schwangere, Kinder und Menschen mit schwerer Arbeit fasten nach Absprache mit dem Priester milder. Fasten gehört mit Gebet und Barmherzigkeit zusammen (Mt 6,1–18).",
  sr: "Правила поста су помоћ, а не циљ. Болесни, труднице, деца и они који тешко раде посте блаже, у договору са свештеником. Пост иде заједно са молитвом и милосрђем (Мт 6,1–18)."
};
if (typeof module !== "undefined") module.exports = { LENT_WEEKS, HOLY_WEEK, LENT_PRACTICES, LENT_NOTE };
