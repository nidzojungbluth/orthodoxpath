/* OrthodoxPath – Lesepläne. Nur Stellenangaben, keine Bibeltexte. Freies Tempo ohne Datum. */
const NT_BOOKS = [
  ["Matthäus", "Матеј", 28], ["Markus", "Марко", 16], ["Lukas", "Лука", 24], ["Johannes", "Јован", 21],
  ["Apostelgeschichte", "Дела апостолска", 28], ["Römer", "Римљанима", 16], ["1. Korinther", "1. Коринћанима", 16],
  ["2. Korinther", "2. Коринћанима", 13], ["Galater", "Галатима", 6], ["Epheser", "Ефесцима", 6], ["Philipper", "Филипљанима", 4],
  ["Kolosser", "Колошанима", 4], ["1. Thessalonicher", "1. Солуњанима", 5], ["2. Thessalonicher", "2. Солуњанима", 3],
  ["1. Timotheus", "1. Тимотеју", 6], ["2. Timotheus", "2. Тимотеју", 4], ["Titus", "Титу", 3], ["Philemon", "Филимону", 1],
  ["Hebräer", "Јеврејима", 13], ["Jakobus", "Јаковљева", 5], ["1. Petrus", "1. Петрова", 5], ["2. Petrus", "2. Петрова", 3],
  ["1. Johannes", "1. Јованова", 5], ["2. Johannes", "2. Јованова", 1], ["3. Johannes", "3. Јованова", 1], ["Judas", "Јудина", 1],
  ["Offenbarung", "Откривење", 22]
];
function chapterPlan(books) {
  const days = [];
  books.forEach(([de, sr, n]) => { for (let c = 1; c <= n; c++) days.push({ de: de + " " + c, sr: sr + " " + c }); });
  return days;
}
/* Kathismen des Psalters (Septuaginta-Zählung) */
const KATHISMATA = [[1, 8], [9, 16], [17, 23], [24, 31], [32, 36], [37, 45], [46, 54], [55, 63], [64, 69], [70, 76], [77, 84], [85, 90], [91, 100], [101, 104], [105, 108], [109, 117], [118, 118], [119, 133], [134, 142], [143, 150]];

const PLANS = [
  { id: "gospels", title: { de: "Die vier Evangelien", sr: "Четири Јеванђеља" },
    desc: { de: "Ein Kapitel pro Tag – Matthäus, Markus, Lukas und Johannes in 89 Lesungen.", sr: "Једна глава дневно – Матеј, Марко, Лука и Јован у 89 читања." },
    days: chapterPlan(NT_BOOKS.slice(0, 4)) },
  { id: "nt", title: { de: "Das ganze Neue Testament", sr: "Цео Нови Завет" },
    desc: { de: "Ein Kapitel pro Tag – alle 27 Bücher in 260 Lesungen.", sr: "Једна глава дневно – свих 27 књига у 260 читања." },
    days: chapterPlan(NT_BOOKS) },
  { id: "psalter", title: { de: "Der Psalter in 20 Kathismen", sr: "Псалтир у 20 катизми" },
    desc: { de: "Die Kirche teilt die 150 Psalmen in 20 Abschnitte (Kathismen), die in den Gottesdiensten gelesen werden. Eine Kathisma pro Tag; Zählung nach der Septuaginta.", sr: "Црква дели 150 псалама на 20 одељака (катизми), који се читају на богослужењима. Једна катизма дневно; нумерација по Септуагинти." },
    days: KATHISMATA.map(([a, b], i) => ({ de: `Kathisma ${i + 1}: Psalm ${a === b ? a : a + "–" + b}`, sr: `Катизма ${i + 1}: псалам ${a === b ? a : a + "–" + b}` })) }
];

if (typeof module !== "undefined") module.exports = { PLANS, NT_BOOKS, KATHISMATA };
