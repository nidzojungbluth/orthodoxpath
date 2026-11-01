/* OrthodoxPath – Kirchenkalender.
   Feste Daten werden nach dem kirchlichen Kalender (Monat/Tag) gespeichert und je nach Einstellung umgerechnet:
   - "julian":  julianischer Kalender (z. B. Serbien, Russland, Georgien, Jerusalem, Athos): +13 Tage (gültig 1900–2099)
   - "revised": revidierter julianischer („neuer“) Kalender (z. B. Konstantinopel, Griechenland, Rumänien, Bulgarien): +0 Tage
   Ostern wird in beiden Fällen nach der julianischen Osterrechnung bestimmt (Ausnahme: die Kirche von Finnland). */

const DAY = 86400000;
function calOffset(cal) { return cal === "revised" ? 0 : 13; }

/* Orthodoxes Osterdatum (julianische Osterrechnung nach Meeus), Ergebnis als bürgerliches Datum (UTC-Mitternacht) */
function orthodoxPascha(year) {
  const a = year % 4, b = year % 7, c = year % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = ((d + e + 114) % 31) + 1;
  return Date.UTC(year, month - 1, day) + 13 * DAY;
}
function addD(t, n) { return t + n * DAY; }
/* kirchliches Datum (Monat/Tag im Jahr ny) -> bürgerliches Datum */
function churchDate(ny, m, d, cal) { return Date.UTC(ny, m - 1, d) + calOffset(cal) * DAY; }
/* alle bürgerlichen Termine eines kirchlichen Datums, die in das bürgerliche Jahr y fallen */
function churchDatesInYear(y, m, d, cal) {
  return [y - 1, y].map(ny => churchDate(ny, m, d, cal)).filter(t => new Date(t).getUTCFullYear() === y);
}

/* Feste und besondere Tage. rel = Abstand zu Ostern; m/d = kirchliches Datum. */
const CAL_FEASTS = [
  { id: "pascha", rel: 0, great: true, name: { de: "Ostern – Auferstehung Christi (Pascha)", sr: "Васкрс – Васкрсење Христово (Пасха)" }, mean: { de: "Das Fest der Feste: Christus ist von den Toten auferstanden.", sr: "Празник над празницима: Христос је васкрсао из мртвих." }, lesson: "th-cross" },
  { id: "palm", rel: -7, great: true, name: { de: "Einzug in Jerusalem (Palmsonntag)", sr: "Улазак Господа у Јерусалим (Цвети)" }, mean: { de: "Christus zieht als demütiger König in Jerusalem ein; Beginn der Karwoche.", sr: "Христос улази у Јерусалим као смирени Цар; почетак Страсне седмице." } },
  { id: "ascension", rel: 39, great: true, name: { de: "Christi Himmelfahrt", sr: "Вазнесење Господње (Спасовдан)" }, mean: { de: "Am 40. Tag nach Ostern fährt Christus in den Himmel auf (Apg 1).", sr: "Четрдесетог дана после Васкрса Христос се вазноси на небо (Дап 1)." } },
  { id: "pentecost", rel: 49, great: true, name: { de: "Pfingsten – Fest der Dreifaltigkeit", sr: "Педесетница – Света Тројица (Духови)" }, mean: { de: "Der Heilige Geist kommt auf die Apostel herab – Geburtstag der Kirche.", sr: "Дух Свети силази на апостоле – рођендан Цркве." }, lesson: "bib-acts2" },
  { id: "publican", rel: -70, name: { de: "Sonntag vom Zöllner und Pharisäer", sr: "Недеља о митару и фарисеју" }, mean: { de: "Beginn der Vorfastenzeit: Demut statt Selbstgerechtigkeit (Lk 18,9–14).", sr: "Почетак припреме за пост: смирење уместо самоправедности (Лк 18,9–14)." } },
  { id: "prodigal", rel: -63, name: { de: "Sonntag vom verlorenen Sohn", sr: "Недеља о блудном сину" }, mean: { de: "Einladung zur Umkehr (Lk 15,11–32).", sr: "Позив на покајање (Лк 15,11–32)." }, lesson: "bib-lk15" },
  { id: "meatfare", rel: -56, name: { de: "Sonntag vom Jüngsten Gericht (Fleischverzicht)", sr: "Недеља месопусна (о Страшном суду)" }, mean: { de: "Erinnerung an das Gericht und die Werke der Barmherzigkeit (Mt 25,31–46); letzter Tag mit Fleisch vor Ostern.", sr: "Сећање на суд и дела милосрђа (Мт 25,31–46); последњи мрсни дан са месом пред Васкрс." } },
  { id: "forgiveness", rel: -49, name: { de: "Sonntag der Vergebung (Käseverzicht)", sr: "Недеља сиропусна – Опроштајна недеља" }, mean: { de: "Gedenken der Vertreibung Adams; abends bitten die Gläubigen einander um Vergebung, bevor die Große Fastenzeit beginnt.", sr: "Спомен Адамовог изгнања; увече верни моле једни друге за опроштај пред почетак Великог поста." }, lesson: "bib-gen3" },
  { id: "orthodoxy", rel: -42, name: { de: "Sonntag der Orthodoxie", sr: "Недеља православља" }, mean: { de: "Gedenken an den Sieg der Ikonenverehrung im Jahr 843.", sr: "Спомен победе поштовања икона 843. године." }, lesson: "dg-icons" },
  { id: "palamas", rel: -35, name: { de: "Sonntag des hl. Gregor Palamas", sr: "Недеља светог Григорија Паламе" }, mean: { de: "Gedenken an den Verteidiger des Herzensgebets und der ungeschaffenen Energien Gottes.", sr: "Спомен браниоца молитве срца и нестворених енергија Божијих." }, lesson: "th-theosis" },
  { id: "cross", rel: -28, name: { de: "Sonntag der Kreuzverehrung", sr: "Крстопоклона недеља" }, mean: { de: "In der Mitte der Fastenzeit wird das Kreuz zur Verehrung in die Mitte der Kirche gebracht.", sr: "Усред поста крст се износи на средину храма ради поклоњења." } },
  { id: "climacus", rel: -21, name: { de: "Sonntag des hl. Johannes Klimakos", sr: "Недеља светог Јована Лествичника" }, mean: { de: "Gedenken an den Verfasser der „Leiter“ des geistlichen Aufstiegs.", sr: "Спомен писца „Лествице“ духовног узрастања." } },
  { id: "maryegypt", rel: -14, name: { de: "Sonntag der hl. Maria von Ägypten", sr: "Недеља свете Марије Египћанке" }, mean: { de: "Vorbild der Umkehr am Ende der Großen Fastenzeit.", sr: "Узор покајања на крају Великог поста." }, saint: "s-maryegypt" },
  { id: "lazarus", rel: -8, name: { de: "Lazarus-Samstag", sr: "Лазарева субота" }, mean: { de: "Christus erweckt Lazarus – Vorzeichen der Auferstehung (Joh 11).", sr: "Христос васкрсава Лазара – наговештај Васкрсења (Јн 11)." } },
  { id: "thursday", rel: -3, name: { de: "Großer Donnerstag", sr: "Велики четвртак" }, mean: { de: "Gedenken an das Letzte Abendmahl und die Einsetzung der Eucharistie.", sr: "Спомен Тајне вечере и установљења Евхаристије." } },
  { id: "friday", rel: -2, name: { de: "Großer Freitag", sr: "Велики петак" }, mean: { de: "Gedenken an Leiden, Kreuzigung und Grablegung Christi; strengster Fasttag des Jahres.", sr: "Спомен страдања, распећа и погребења Христовог; најстрожи посни дан у години." }, lesson: "bib-jn19" },
  { id: "saturday", rel: -1, name: { de: "Großer Samstag", sr: "Велика субота" }, mean: { de: "Christus ruht im Grab und steigt in das Totenreich hinab.", sr: "Христос почива у гробу и силази у ад." }, lesson: "bib-ezek37" },
  { id: "thomas", rel: 7, name: { de: "Thomassonntag (Antipascha)", sr: "Томина недеља" }, mean: { de: "Der Auferstandene erscheint Thomas (Joh 20,19–31).", sr: "Васкрсли се јавља Томи (Јн 20,19–31)." }, lesson: "bib-jn20" },
  { id: "midpentecost", rel: 24, name: { de: "Mittpfingsten", sr: "Преполовљење Педесетнице" }, mean: { de: "Die Mitte zwischen Ostern und Pfingsten; Christus, der Lehrer und das Wasser des Lebens.", sr: "Средина између Васкрса и Педесетнице; Христос, Учитељ и вода живота." } },
  { id: "allsaints", rel: 56, name: { de: "Sonntag Aller Heiligen", sr: "Недеља свих светих" }, mean: { de: "Gedenken an alle Heiligen; am Tag danach beginnt das Apostelfasten.", sr: "Спомен свих светих; сутрадан почиње Петровски пост." } },
  { id: "theotokos-birth", m: 9, d: 8, great: true, name: { de: "Mariä Geburt", sr: "Рођење Пресвете Богородице (Мала Госпојина)" }, mean: { de: "Geburt der Gottesgebärerin, Tochter von Joachim und Anna.", sr: "Рођење Богородице, кћери Јоакима и Ане." } },
  { id: "exaltation", m: 9, d: 14, great: true, name: { de: "Kreuzerhöhung", sr: "Воздвижење Часног Крста (Крстовдан)" }, mean: { de: "Verehrung des Kreuzes Christi, des Zeichens des Sieges über den Tod; Fasttag.", sr: "Поклоњење Крсту Христовом, знаку победе над смрћу; посни дан." } },
  { id: "entry", m: 11, d: 21, great: true, name: { de: "Einführung Marias in den Tempel", sr: "Ваведење Пресвете Богородице" }, mean: { de: "Die junge Maria wird in den Tempel geführt und Gott geweiht.", sr: "Млада Марија бива уведена у храм и посвећена Богу." } },
  { id: "nativity", m: 12, d: 25, great: true, name: { de: "Christi Geburt (Weihnachten)", sr: "Рођење Христово (Божић)" }, mean: { de: "Der Sohn Gottes wird in Bethlehem als Mensch geboren.", sr: "Син Божији рађа се као човек у Витлејему." }, lesson: "th-incarnation" },
  { id: "theophany", m: 1, d: 6, great: true, name: { de: "Theophanie – Taufe Christi", sr: "Богојављење" }, mean: { de: "Bei der Taufe Christi im Jordan offenbart sich die Heilige Dreifaltigkeit; große Wasserweihe.", sr: "При Христовом крштењу у Јордану открива се Света Тројица; велико освећење воде." }, lesson: "bib-mk1" },
  { id: "meeting", m: 2, d: 2, great: true, name: { de: "Darstellung des Herrn (Begegnung)", sr: "Сретење Господње" }, mean: { de: "Der greise Simeon empfängt das Christuskind im Tempel (Lk 2,22–40).", sr: "Старац Симеон прима Богомладенца у храму (Лк 2,22–40)." } },
  { id: "annunciation", m: 3, d: 25, great: true, name: { de: "Verkündigung an die Gottesgebärerin", sr: "Благовести" }, mean: { de: "Der Erzengel Gabriel verkündet Maria die Geburt des Sohnes Gottes.", sr: "Архангел Гаврило благовести Марији рођење Сина Божијег." }, lesson: "bib-lk1" },
  { id: "transfiguration", m: 8, d: 6, great: true, name: { de: "Verklärung des Herrn", sr: "Преображење Господње" }, mean: { de: "Christus zeigt auf dem Berg Tabor seine göttliche Herrlichkeit (Mt 17,1–9).", sr: "Христос на гори Тавору показује своју божанску славу (Мт 17,1–9)." }, lesson: "bib-elijah" },
  { id: "dormition", m: 8, d: 15, great: true, name: { de: "Entschlafung der Gottesgebärerin", sr: "Успење Пресвете Богородице (Велика Госпојина)" }, mean: { de: "Gedenken an das Entschlafen der Gottesgebärerin und ihre Aufnahme in die Herrlichkeit ihres Sohnes.", sr: "Спомен уснућа Богородице и њеног пресељења у славу њеног Сина." } },
  { id: "circumcision", m: 1, d: 1, name: { de: "Beschneidung des Herrn; hl. Basilius der Große", sr: "Обрезање Господње; Свети Василије Велики" }, mean: { de: "Achter Tag nach Christi Geburt; zugleich Gedenktag des hl. Basilius.", sr: "Осми дан после Рођења Христовог; уједно спомен светог Василија." } },
  { id: "beheading", m: 8, d: 29, name: { de: "Enthauptung Johannes des Täufers", sr: "Усековање главе Светог Јована Крститеља" }, mean: { de: "Gedenken an das Martyrium des Täufers (Mk 6,17–29); Fasttag.", sr: "Спомен мучеништва Крститеља (Мк 6,17–29); посни дан." } },
  { id: "protection", m: 10, d: 1, name: { de: "Schutz der Gottesgebärerin (Pokrov)", sr: "Покров Пресвете Богородице" }, mean: { de: "Gedenken an den Schutz der Gottesgebärerin über die Gläubigen.", sr: "Спомен заштите Богородице над вернима." } },
  { id: "peter-paul", m: 6, d: 29, name: { de: "Hl. Apostel Petrus und Paulus", sr: "Свети апостоли Петар и Павле (Петровдан)" }, mean: { de: "Fest der beiden großen Apostel; Ende des Apostelfastens.", sr: "Празник два велика апостола; крај Петровског поста." }, lesson: "bib-acts9" },
  { id: "elijah", m: 7, d: 20, name: { de: "Hl. Prophet Elija", sr: "Свети пророк Илија (Илиндан)" }, mean: { de: "Gedenken an den großen Propheten (3 Kön 18–19).", sr: "Спомен великог пророка (3 Цар 18–19)." }, lesson: "bib-elijah" },
  { id: "maccabees", m: 8, d: 1, name: { de: "Hl. makkabäische Märtyrer", sr: "Свети мученици Макавеји" }, mean: { de: "Gedenken an die Märtyrer vor Christus (2 Makk 7); erster Tag des Entschlafungsfastens.", sr: "Спомен мученика пре Христа (2 Мак 7); први дан Госпојинског поста." }, lesson: "bib-macc7" },
  { id: "nicholas", m: 12, d: 6, name: { de: "Hl. Nikolaus", sr: "Свети Никола (Никољдан)" }, mean: { de: "Gedenken an den hl. Nikolaus, Bischof von Myra; eine der häufigsten serbischen Slavas.", sr: "Спомен светог Николаја, архиепископа мирликијског; једна од најчешћих српских слава." }, saint: "s-nicholas" },
  { id: "archangels", m: 11, d: 8, name: { de: "Synaxis des Erzengels Michael und aller Engel", sr: "Сабор Светог архангела Михаила (Аранђеловдан)" }, mean: { de: "Gedenken an die Erzengel und die himmlischen Mächte.", sr: "Спомен архангела и небеских сила." } },
  { id: "george", m: 4, d: 23, name: { de: "Hl. Großmärtyrer Georg", sr: "Свети великомученик Георгије (Ђурђевдан)" }, mean: { de: "Gedenken an den heiligen Märtyrer Georg.", sr: "Спомен светог мученика Георгија." }, saint: "s-george" },
  { id: "john-theologian", m: 9, d: 26, name: { de: "Hl. Apostel Johannes der Theologe", sr: "Свети апостол и јеванђелист Јован Богослов" }, mean: { de: "Gedenken an das Entschlafen des Apostels und Evangelisten Johannes.", sr: "Спомен упокојења апостола и јеванђелисте Јована." }, lesson: "bib-jn1" }
];

/* Heilige und Kirchenväter dieser App mit ihrem kirchlichen Gedenkdatum (Monat/Tag). */
const SAINT_DAYS = [
  ["f-athanasius", 1, 18], ["f-athanasius", 5, 2], ["f-basil", 1, 1], ["f-basil", 1, 30], ["f-gregnaz", 1, 25], ["f-gregnaz", 1, 30],
  ["f-gregnys", 1, 10], ["f-chrysostom", 11, 13], ["f-chrysostom", 1, 27], ["f-chrysostom", 1, 30], ["f-cyril", 1, 18], ["f-cyril", 6, 9],
  ["f-maximus", 1, 21], ["f-maximus", 8, 13], ["f-damascus", 12, 4], ["f-ephrem", 1, 28], ["f-isaac", 1, 28],
  ["s-paisios", 7, 12], ["s-porphyrios", 12, 2], ["s-sophrony", 7, 11], ["s-silouan", 9, 24], ["s-nektarios", 11, 9],
  ["s-seraphim", 1, 2], ["s-seraphim", 7, 19], ["s-kronstadt", 12, 20], ["s-nikolaj", 3, 5], ["s-nikolaj", 4, 20],
  ["s-sava", 1, 14], ["s-lazar", 6, 15], ["s-simeon", 2, 13], ["s-vasilije", 4, 29], ["s-justin", 6, 1],
  ["s-maryegypt", 4, 1], ["s-luke", 5, 29],
  ["s-nicholas", 5, 9], ["s-george", 11, 3], ["s-demetrios", 10, 26], ["s-petka", 10, 14], ["s-stefan", 11, 11], ["s-andrew", 11, 30], ["s-spyridon", 12, 12], ["s-catherine", 11, 24], ["s-prokopije", 7, 8], ["s-antony", 1, 17], ["s-arsenije", 10, 28], ["s-ignatius", 12, 20], ["s-rila", 10, 19], ["s-rila", 8, 18]
];

const CAL_FASTS = {
  lent: { de: "Große Fastenzeit", sr: "Велики (Часни) пост" },
  apostles: { de: "Apostelfasten", sr: "Петровски пост" },
  dormition: { de: "Entschlafungsfasten", sr: "Госпојински пост" },
  nativity: { de: "Weihnachtsfasten", sr: "Божићни пост" },
  single: { de: "Einzelner Fasttag", sr: "Посни дан" },
  wedfri: { de: "Mittwoch/Freitag – Fasttag", sr: "Среда/петак – посни дан" },
  cheese: { de: "Käsewoche – ohne Fleisch", sr: "Сиропусна седмица – без меса" },
  free: { de: "Fastenfreie Zeit", sr: "Мрсна седмица" },
  none: { de: "Kein Fasttag", sr: "Није посни дан" }
};

/* Allgemeine, überlieferte Fastenregeln (vereinfacht). Die Praxis unterscheidet sich zwischen Ortskirchen, Klöstern und Gemeinden. */
const CAL_FAST_RULES = {
  lent: { de: "Strengste Fastenzeit: traditionell ohne Fleisch, Milchprodukte und Eier, meist auch ohne Fisch; nach dem Typikon an Wochentagen oft auch ohne Wein und Öl. Fisch ist traditionell an der Verkündigung und am Palmsonntag erlaubt.", sr: "Најстрожи пост: традиционално без меса, млечних производа и јаја, обично и без рибе; по Типику радним данима често и без вина и уља. Риба је традиционално дозвољена на Благовести и Цвети." },
  apostles: { de: "Traditionell ohne Fleisch, Milchprodukte und Eier; Fisch ist an vielen Tagen erlaubt, meist nicht am Mittwoch und Freitag.", sr: "Традиционално без меса, млечних производа и јаја; риба је дозвољена многим данима, обично не средом и петком." },
  dormition: { de: "Strenges Fasten wie in der Großen Fastenzeit; Fisch ist traditionell an der Verklärung des Herrn erlaubt.", sr: "Строг пост као у Великом посту; риба је традиционално дозвољена на Преображење." },
  nativity: { de: "Traditionell ohne Fleisch, Milchprodukte und Eier; Fisch ist an bestimmten Tagen erlaubt, die letzten Tage vor Weihnachten sind strenger.", sr: "Традиционално без меса, млечних производа и јаја; риба је дозвољена одређеним данима, последњи дани пред Божић су строжи." },
  single: { de: "Strenger Fasttag: traditionell ohne Fleisch, Milchprodukte, Eier und Fisch.", sr: "Строг посни дан: традиционално без меса, млечних производа, јаја и рибе." },
  wedfri: { de: "Traditionell ohne Fleisch, Milchprodukte und Eier; je nach Überlieferung auch ohne Fisch, Wein und Öl.", sr: "Традиционално без меса, млечних производа и јаја; зависно од предања и без рибе, вина и уља." },
  cheese: { de: "Kein Fleisch mehr; Milchprodukte, Eier und Fisch sind erlaubt – auch am Mittwoch und Freitag.", sr: "Више без меса; млечни производи, јаја и риба су дозвољени – и средом и петком." },
  free: { de: "Fastenfreie Zeit: Auch am Mittwoch und Freitag wird nicht gefastet.", sr: "Мрсна седмица: ни средом ни петком се не пости." },
  none: { de: "Heute ist kein besonderer Fasttag.", sr: "Данас није посебан посни дан." }
};

/* Liefert alle Feste mit bürgerlichem Datum für ein bürgerliches Jahr */
function feastsOfYear(year, cal) {
  const P = orthodoxPascha(year); const out = [];
  CAL_FEASTS.forEach(f => {
    if (f.rel != null) out.push({ ...f, t: addD(P, f.rel) });
    else churchDatesInYear(year, f.m, f.d, cal).forEach(t => out.push({ ...f, t }));
  });
  return out.sort((a, b) => a.t - b.t);
}

/* Fastenstatus für einen Tag (t = UTC-Mitternacht). Vereinfachte, übliche Regel. */
function fastInfo(t, cal) {
  const dt = new Date(t); const y = dt.getUTCFullYear(); const P = orthodoxPascha(y);
  const between = (a, b) => t >= a && t <= b;
  /* liegt t in einem kirchlichen Zeitraum (m1/d1 bis m2/d2, ggf. über den Jahreswechsel)? */
  const inChurch = (m1, d1, m2, d2) => [y - 1, y].some(ny => {
    const a = churchDate(ny, m1, d1, cal); const b = churchDate(m2 < m1 ? ny + 1 : ny, m2, d2, cal);
    return between(a, b);
  });
  const isChurchDay = (m, d) => churchDatesInYear(y, m, d, cal).includes(t);
  const wd = dt.getUTCDay();
  if (between(P, addD(P, 6))) return { kind: "free" };                 // Lichte Woche
  if (inChurch(12, 25, 1, 4)) return { kind: "free" };                // Weihnachten bis vor Theophanie
  if (between(addD(P, 50), addD(P, 56))) return { kind: "free" };      // Woche nach Pfingsten
  if (between(addD(P, -69), addD(P, -64))) return { kind: "free" };    // Woche nach dem Sonntag des Zöllners
  if (between(addD(P, -48), addD(P, -1))) return { kind: "lent" };
  if (between(addD(P, -55), addD(P, -49))) return { kind: "cheese" };
  const apStart = addD(P, 57); const apEnd = churchDatesInYear(y, 6, 28, cal)[0];
  if (apEnd != null && apStart <= apEnd && between(apStart, apEnd)) return { kind: "apostles" };
  if (inChurch(8, 1, 8, 14)) return { kind: "dormition" };
  if (inChurch(11, 15, 12, 24)) return { kind: "nativity" };
  if (isChurchDay(1, 5) || isChurchDay(8, 29) || isChurchDay(9, 14)) return { kind: "single" };
  if (wd === 3 || wd === 5) return { kind: "wedfri" };
  return { kind: "none" };
}

function feastsOn(t, cal) { return feastsOfYear(new Date(t).getUTCFullYear(), cal).filter(f => f.t === t); }
function nextGreatFeast(t, cal) {
  const y = new Date(t).getUTCFullYear();
  return feastsOfYear(y, cal).concat(feastsOfYear(y + 1, cal)).filter(f => f.great && f.t > t)[0];
}
/* IDs der Heiligen dieser App, deren Gedenktag auf t fällt */
function saintsOn(t, cal) {
  const y = new Date(t).getUTCFullYear(); const ids = [];
  SAINT_DAYS.forEach(([id, m, d]) => { if (churchDatesInYear(y, m, d, cal).includes(t) && !ids.includes(id)) ids.push(id); });
  return ids;
}
/* Zeiträume der Fastenzeiten eines Jahres (für die Übersicht) */
function fastPeriods(y, cal) {
  const P = orthodoxPascha(y);
  const ap1 = addD(P, 57), ap2 = churchDatesInYear(y, 6, 28, cal)[0];
  return {
    lent: [addD(P, -48), addD(P, -1)],
    apostles: ap2 != null && ap1 <= ap2 ? [ap1, ap2] : null,
    dormition: [churchDate(y, 8, 1, cal), churchDate(y, 8, 14, cal)],
    nativity: [churchDate(y, 11, 15, cal), churchDate(y, 12, 24, cal)],
    bright: [P, addD(P, 6)], trinity: [addD(P, 50), addD(P, 56)]
  };
}

if (typeof module !== "undefined") module.exports = { orthodoxPascha, feastsOfYear, fastInfo, feastsOn, nextGreatFeast, saintsOn, fastPeriods, CAL_FEASTS, CAL_FASTS, CAL_FAST_RULES, SAINT_DAYS };
