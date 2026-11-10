/* OrthodoxPath – Geführte Beichtvorbereitung. Seelsorgliche Hilfe (Kennzeichnung "Rat"), kein Ersatz für das Gespräch mit dem Priester.
   Die Fragen folgen der üblichen Ordnung nach dem Doppelgebot der Liebe (Mt 22,37–39) und den Zehn Geboten (Ex 20). Angekreuztes wird nicht gespeichert. */
const CONFESS_STEPS = [
  { h: { de: "1. Zur Ruhe kommen und beten", sr: "1. Сабрати се и помолити" }, tag: "counsel",
    t: { de: "Nimm dir eine stille Viertelstunde. Bitte Gott, dir dein Herz zu zeigen – ohne Angst. Die Beichte ist kein Gericht, sondern Heilung: „Wenn wir unsere Sünden bekennen, ist er treu und gerecht, dass er uns die Sünden vergibt“ (1 Joh 1,9).", sr: "Одвојите четврт сата тишине. Замолите Бога да вам покаже ваше срце – без страха. Исповест није суд, него исцељење: „Ако исповедамо грехе своје, веран је и праведан да нам опрости грехе“ (1 Јн 1,9)." },
    prayers: ["taxcollector", "jesus"] },
  { h: { de: "2. Das Gewissen prüfen", sr: "2. Испитати савест" }, tag: "counsel",
    t: { de: "Die Fragen unten sind eine Hilfe, keine vollständige Liste und keine Prüfung. Tippe an, was dich betrifft – so entsteht eine kleine Merkliste für das Gespräch. Sie bleibt nur so lange sichtbar, wie diese Seite offen ist, und wird nirgends gespeichert.", sr: "Питања испод су помоћ, а не потпуна листа нити испит. Додирните оно што се односи на вас – тако настаје мали подсетник за разговор. Видљив је само док је ова страница отворена и нигде се не чува." } },
  { h: { de: "3. Sich versöhnen", sr: "3. Помирити се" }, tag: "dogma",
    t: { de: "Christus sagt: „Versöhne dich zuerst mit deinem Bruder, und dann komm und opfere deine Gabe“ (Mt 5,24). Bitte, wo es möglich ist, Menschen um Verzeihung, die du verletzt hast – und vergib denen, die dich verletzt haben.", sr: "Христос каже: „Помири се најпре са братом својим, па онда дођи и принеси дар свој“ (Мт 5,24). Где је могуће, замолите за опроштај оне које сте повредили – и опростите онима који су вас повредили." } },
  { h: { de: "4. In der Beichte", sr: "4. На исповести" }, tag: "counsel",
    t: { de: "Du stehst vor Christus; der Priester ist Zeuge und Helfer. Nenne deine Sünden einfach und ehrlich, ohne Ausreden und ohne andere zu beschuldigen. Du musst keine langen Geschichten erzählen. Wenn du etwas nicht in Worte fassen kannst, sag es dem Priester – er hilft dir. Am Ende legt er dir das Epitrachelion (die Stola) auf und betet das Gebet der Lossprechung. Der genaue Ablauf ist von Gemeinde zu Gemeinde etwas verschieden.", sr: "Стојите пред Христом; свештеник је сведок и помоћник. Кажите своје грехе једноставно и искрено, без изговора и без окривљавања других. Не морате причати дуге приче. Ако нешто не умете да искажете, реците свештенику – он ће вам помоћи. На крају вам полаже епитрахиљ на главу и чита разрешну молитву. Тачан ток се донекле разликује од парохије до парохије." } },
  { h: { de: "5. Danach", sr: "5. После исповести" }, tag: "counsel",
    t: { de: "Danke Gott. Was vergeben ist, ist vergeben – trage es nicht weiter mit dir herum. Nimm dir einen kleinen, konkreten Schritt vor, statt vieler großer Vorsätze. Fällst du wieder, steh wieder auf: Umkehr ist ein Weg, kein einzelner Augenblick.", sr: "Заблагодарите Богу. Што је опроштено, опроштено је – не носите то даље са собом. Одлучите се за један мали, конкретан корак, уместо многих великих обећања. Ако опет паднете, устаните: покајање је пут, а не један тренутак." } }
];
const CONFESS_Q = [
  { h: { de: "Gott", sr: "Према Богу" }, q: [
    { de: "Bete ich – oder habe ich das Gebet lange vernachlässigt?", sr: "Да ли се молим – или сам дуго занемаривао молитву?" },
    { de: "Habe ich den Gottesdienst am Sonntag ohne Grund versäumt?", sr: "Да ли сам без разлога пропуштао недељну Литургију?" },
    { de: "Vertraue ich Gott – oder suche ich Halt in Aberglauben, Horoskopen, Wahrsagerei?", sr: "Да ли се уздам у Бога – или тражим ослонац у сујеверју, хороскопу, гатању?" },
    { de: "Habe ich mich meines Glaubens geschämt oder ihn verleugnet?", sr: "Да ли сам се стидео своје вере или је се одрицао?" },
    { de: "Habe ich Gottes Namen leichtfertig gebraucht, geflucht oder Heiliges verspottet?", sr: "Да ли сам олако изговарао име Божије, псовао или се ругао светињи?" },
    { de: "Habe ich gegen Gott gemurrt oder an seiner Barmherzigkeit verzweifelt?", sr: "Да ли сам роптао на Бога или очајавао у Његову милост?" }
  ] },
  { h: { de: "Die Mitmenschen", sr: "Према ближњима" }, q: [
    { de: "Ehre ich meine Eltern, sorge ich für meine Familie?", sr: "Да ли поштујем родитеље, бринем ли о својој породици?" },
    { de: "Trage ich Groll, Hass oder Rachegedanken gegen jemanden? Wem habe ich nicht vergeben?", sr: "Да ли носим злопамћење, мржњу или мисли о освети? Коме нисам опростио?" },
    { de: "Habe ich jemanden mit Worten verletzt, beschimpft, verspottet oder gedemütigt?", sr: "Да ли сам некога повредио речима, вређао, исмевао или понижавао?" },
    { de: "Habe ich gelogen, übertrieben oder jemanden getäuscht?", sr: "Да ли сам лагао, претеривао или некога обмануо?" },
    { de: "Habe ich über andere schlecht geredet, geurteilt oder Gerüchte weitergetragen?", sr: "Да ли сам оговарао, осуђивао или преносио гласине?" },
    { de: "Habe ich etwas genommen, das mir nicht gehört, oder jemanden übervorteilt?", sr: "Да ли сам узео нешто што није моје или некога закинуо?" },
    { de: "War ich neidisch auf das, was andere haben oder können?", sr: "Да ли сам завидео другима на ономе што имају или умеју?" },
    { de: "Bin ich an Menschen in Not vorbeigegangen, obwohl ich helfen konnte?", sr: "Да ли сам прошао поред човека у невољи, а могао сам да помогнем?" },
    { de: "Bin ich in Ehe oder Beziehung treu, ehrlich und liebevoll gewesen?", sr: "Да ли сам у браку или вези био веран, искрен и пун љубави?" }
  ] },
  { h: { de: "Ich selbst", sr: "Према себи" }, q: [
    { de: "Lasse ich mich von Stolz, Eitelkeit oder dem Wunsch nach Anerkennung leiten?", sr: "Да ли ме воде гордост, сујета или жеља за признањем?" },
    { de: "Lasse ich meinem Zorn freien Lauf?", sr: "Да ли допуштам гневу да ме савлада?" },
    { de: "Wie gehe ich mit Blicken, Gedanken und Bildern um, die die Reinheit verletzen?", sr: "Како се односим према погледима, мислима и сликама које повређују чистоту?" },
    { de: "Bin ich maßlos beim Essen, Trinken, am Handy oder beim Geldausgeben?", sr: "Да ли сам неумерен у јелу, пићу, на телефону или у трошењу новца?" },
    { de: "Hänge ich mein Herz an Geld und Besitz?", sr: "Да ли ми је срце привезано за новац и имање?" },
    { de: "Bin ich träge geworden – in der Arbeit, im Guten, im geistlichen Leben?", sr: "Да ли сам постао лењ – у послу, у добру, у духовном животу?" },
    { de: "Habe ich die Fastenzeiten ohne Grund missachtet?", sr: "Да ли сам без разлога занемаривао пост?" }
  ] }
];
const CONFESS_NOTE = {
  de: "Diese Seite ist eine Hilfe zur Vorbereitung, kein Ersatz für die Beichte und kein Maßstab dafür, was Sünde ist. Bei Unsicherheit, schweren Lasten oder ängstlichem Grübeln über die eigenen Sünden sprich offen mit deinem Priester.",
  sr: "Ова страница је помоћ у припреми, а не замена за исповест нити мерило шта је грех. У недоумици, под тешким теретом или при стрепњи и претераном преиспитивању својих грехова, разговарајте отворено са својим свештеником."
};
if (typeof module !== "undefined") module.exports = { CONFESS_STEPS, CONFESS_Q, CONFESS_NOTE };
