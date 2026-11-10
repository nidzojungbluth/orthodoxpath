/* OrthodoxPath – Anwendungslogik. Keine externen Abhängigkeiten, keine Netzwerkzugriffe. */
(function () {
  "use strict";

  /* ---------- Speicher ---------- */
  const KEY = "orthodoxpath_v1";
  let storageOk = true;
  const DEFAULT = {
    lang: null, theme: "dark", font: 1, onboarded: false,
    done: {}, quiz: {}, cards: {}, newToday: { date: "", n: 0 },
    newPerDay: 10, lessonsPerWeek: 3, activity: [], verses: [],
    notes: [], enc: null, prayerFavs: [], intentions: [], prayed: [], calendar: "julian", plans: {}, lastLesson: null, bibleView: "path", lastBackup: null, backupAsk: null, backupRemind: "on", a2hsDismissed: false, ropeGoal: 100, slava: null, marks: [], readMode: false, iconQuiz: { right: 0, total: 0 }, remindTime: "07:00"
  };
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return JSON.parse(JSON.stringify(DEFAULT));
      return Object.assign(JSON.parse(JSON.stringify(DEFAULT)), JSON.parse(raw));
    } catch (e) { storageOk = false; return JSON.parse(JSON.stringify(DEFAULT)); }
  }
  let S = load();
  let unlockedNotes = null; // entschlüsselte Notizen im Arbeitsspeicher
  let encKey = null;
  function save() {
    try {
      const copy = Object.assign({}, S);
      if (S.enc) copy.notes = []; // Klartext nie speichern, wenn verschlüsselt
      localStorage.setItem(KEY, JSON.stringify(copy));
    } catch (e) { storageOk = false; }
  }

  /* ---------- Sprache ---------- */
  function lang() { return S.lang || "de"; }
  function isSr() { return lang() !== "de"; }
  function L(o) {
    if (o == null) return "";
    if (typeof o === "string") return o;
    if (lang() === "de") return o.de || "";
    const s = o.sr || "";
    return lang() === "sr-lat" ? translit(s) : s;
  }
  function t(k) {
    const base = lang() === "de" ? UI.de : UI.sr;
    const v = base[k];
    if (v == null) { console.warn("missing ui key", k); return k; }
    return lang() === "sr-lat" ? translit(v) : v;
  }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function E(o) { return esc(L(o)); }

  /* ---------- Datum ---------- */
  function today(d) { d = d || new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function addDays(iso, n) { const d = new Date(iso + "T12:00:00"); d.setDate(d.getDate() + n); return today(d); }
  function weekStart(iso) { const d = new Date(iso + "T12:00:00"); const wd = (d.getDay() + 6) % 7; d.setDate(d.getDate() - wd); return today(d); }
  function markActivity() { const d = today(); if (!S.activity.includes(d)) { S.activity.push(d); S.activity = S.activity.slice(-400); } }
  function streak() {
    const set = new Set(S.activity); let d = today(); let n = 0;
    if (!set.has(d)) d = addDays(d, -1);
    while (set.has(d)) { n++; d = addDays(d, -1); }
    return n;
  }
  function weekDays() {
    const ws = weekStart(today()); const set = new Set(S.activity.concat(S.prayed || []));
    return Array.from({ length: 7 }, (_, i) => { const d = addDays(ws, i); return { d, on: set.has(d), isToday: d === today() }; });
  }
  function weekCard() {
    const days = weekDays(); const n = days.filter(x => x.on).length;
    const labels = days.map(x => { try { return new Date(x.d + "T12:00:00").toLocaleDateString(locale(), { weekday: "narrow" }); } catch (e) { return ""; } });
    const prayed = (S.prayed || []).includes(today());
    return `<div class="card"><div class="eyebrow">${esc(t("weekTitle"))}</div>
      <div class="weekdots">${days.map((x, i) => `<span class="wd ${x.on ? "on" : ""} ${x.isToday ? "today" : ""}"><i></i><small>${esc(labels[i])}</small></span>`).join("")}</div>
      <p class="small" style="margin:8px 0 4px">${esc(t("weekText").replace("{n}", n))}</p>
      <p class="small muted" style="margin:0 0 10px">${esc(t("weekGentle"))}</p>
      ${prayed ? `<div class="row"><span class="grow small okline">${ic("check")} ${esc(t("prayedDone"))}</span><button class="iconbtn" id="prayedbtn">${esc(t("prayedUndo"))}</button></div>`
        : `<button class="btn ghost block" id="prayedbtn">${ic("candle")} ${esc(t("prayedToday"))}</button>`}</div>`;
  }
  function impulse() {
    const items = []; Object.values(ALL_LESSONS).forEach(l => { if (l.practice) items.push(l); });
    const d = new Date(); const doy = Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(d.getFullYear(), 0, 0)) / 86400000);
    const l = items[doy % items.length];
    return `<div class="card"><div class="eyebrow">${esc(t("impulseTitle"))}</div><p style="margin-bottom:6px">${E(l.practice)}</p>
      <a class="small" href="#lesson-${l.id}">${esc(t("impulseFrom"))}: ${E(l.title)} ›</a></div>`;
  }
  function lessonsThisWeek() { const ws = weekStart(today()); return Object.values(S.done).filter(x => x >= ws).length; }

  /* ---------- Inhalte ---------- */
  const BIBLE_LESSONS = BIBLE.lessons.slice().sort((a, b) => a.order - b.order);
  const ALL_LESSONS = {};
  BIBLE_LESSONS.forEach(l => ALL_LESSONS[l.id] = Object.assign({ kind: "bible" }, l));
  THEOLOGY.forEach(l => ALL_LESSONS[l.id] = Object.assign({ kind: "theo" }, l));
  const OV_BY_BOOK = {}, OV_BY_ID = {};
  OVERVIEWS.forEach(o => { const b = BIBLE.books.find(x => x[0] === o.book); o.title = { de: b[2], sr: b[3] }; OV_BY_BOOK[o.book] = o; OV_BY_ID[o.id] = o; });
  const PEOPLE = {};
  FATHERS.forEach(p => PEOPLE[p.id] = Object.assign({ kind: "father" }, p));
  SAINTS.forEach(p => PEOPLE[p.id] = Object.assign({ kind: "saint" }, p));
  const CARDS = [];
  GLOSSARY.forEach(g => CARDS.push({ id: "g-" + g[0], deck: "d-basics", front: { de: g[1], sr: g[2] }, back: { de: g[3], sr: g[4] } }));
  EXTRA_CARDS.forEach((c, i) => CARDS.push({ id: "x-" + i, deck: c[0], front: { de: c[1], sr: c[2] }, back: { de: c[3], sr: c[4] } }));
  const LEARN_PATH = BIBLE_LESSONS.map(l => l.id).concat(THEOLOGY.filter(l => l.course === "A").map(l => l.id), THEOLOGY.filter(l => l.course === "P").map(l => l.id), THEOLOGY.filter(l => l.course === "D").map(l => l.id), THEOLOGY.filter(l => l.course === "L").map(l => l.id), THEOLOGY.filter(l => l.course === "M").map(l => l.id));

  /* ---------- Hilfen UI ---------- */
  const app = document.getElementById("app");
  function tagBadge(tag) {
    if (!tag) return "";
    const map = { dogma: "tagDogma", history: "tagHistory", opinion: "tagOpinion", counsel: "tagCounsel", uncertain: "tagUncertain" };
    return `<span class="badge tag-${tag}">${esc(t(map[tag]))}</span>`;
  }
  function toast(msg) {
    const el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); el.textContent = msg;
    document.body.appendChild(el); setTimeout(() => el.remove(), 2200);
  }
  function sheet(html, onMount) {
    const bg = document.createElement("div"); bg.className = "sheet-bg";
    bg.innerHTML = `<div class="sheet" role="dialog" aria-modal="true">${html}</div>`;
    bg.addEventListener("click", e => { if (e.target === bg) bg.remove(); });
    document.body.appendChild(bg); if (onMount) onMount(bg.firstElementChild, () => bg.remove());
    /* Barrierefreiheit: Fokus in den Dialog setzen, Escape schließt */
    const prev = document.activeElement; const close = () => { bg.remove(); if (prev && prev.focus) prev.focus(); };
    bg.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
    const f = bg.querySelector("button, input, textarea, a[href]"); if (f) setTimeout(() => f.focus(), 30);
    return bg;
  }
  function confirmBox(text, onYes) {
    sheet(`<p><b>${esc(text)}</b></p><div class="btnrow"><button class="btn danger" data-y>${esc(t("yes"))}</button><button class="btn ghost" data-n>${esc(t("no"))}</button></div>`,
      (el, close) => { el.querySelector("[data-y]").onclick = () => { close(); onYes(); }; el.querySelector("[data-n]").onclick = close; });
  }
  const CROSS = `<svg width="22" height="28" viewBox="0 0 22 28" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M11 1v26"/><path d="M6 5h10"/><path d="M2 11h18"/><path d="M6 21l10 -3"/></g></svg>`;
  const ICONS = {
    speaker: '<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
    home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    bible: '<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/><path d="M12 7v5M9.5 9h5"/>',
    theology: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M6 10v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
    saints: '<circle cx="12" cy="8" r="4"/><path d="M5 21c0-4 3-6 7-6s7 2 7 6"/><path d="M7 5.5a6.5 3 0 0 1 10 0"/>',
    cards: '<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
    more: '<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>',
    chev: '<path d="M9.5 5.5l6.5 6.5-6.5 6.5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/>',
    starFill: '<path fill="currentColor" d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    candle: '<path d="M12 2.6c2.1 2.2 2.4 4.3 0 6-2.4-1.7-2.1-3.8 0-6z"/><path d="M9.5 11h5v9.5h-5z"/><path d="M6 21h12"/>',
    library: '<path d="M4 4h4v16H4zM10 4h4v16h-4z"/><path d="M16.5 4.6l3.6-.9 3 15.6-3.6.9z" transform="translate(-2 0)"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/>',
    note: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 16h5"/>',
    text: '<path d="M5 6h14M5 10h14M5 14h9M5 18h6"/>',
    chalice: '<path d="M6 4h12c0 5-2.7 8-6 8s-6-3-6-8z"/><path d="M12 12v6M8 21h8M9.5 18h5"/>',
    frame: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 6.5v8M9.5 8.5h5"/><circle cx="12" cy="17" r="1"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
    repeat: '<path d="M4 12a8 8 0 0 1 14-5.3L20 9"/><path d="M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-14 5.3L4 15"/><path d="M4 20v-5h5"/>',
    scroll: '<path d="M7 4h11a2 2 0 0 1 2 2v1h-4"/><path d="M16 7v11a3 3 0 0 1-3 3H6a2 2 0 0 1-2-2v-1h9"/><path d="M7 4a2 2 0 0 0-2 2v12"/><path d="M9 9h4M9 13h4"/>',
    cross: '<path d="M12 2.5v19M8.5 6h7M5.5 10.5h13M8.5 17.5l7-2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/>',
    bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>'
  };
  function ic(n, extra) { return `<svg class="ic ${extra || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`; }
  function starIc(on) { return ic(on ? "starFill" : "star"); }
  /* Listeneintrag mit Symbol */
  function navItem(href, iconName, title, sub) {
    return `<li><a class="item" href="#${href}"><span class="ico">${ic(iconName)}</span><span class="grow"><span class="t">${esc(title)}</span>${sub ? `<span class="s">${esc(sub)}</span>` : ""}</span><span class="chev">${ic("chev")}</span></a></li>`;
  }
  function icon(n) { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`; }
  function langLabel() { return lang() === "de" ? "DE" : (lang() === "sr-lat" ? "SR·L" : "СР·Ћ"); }

  /* ---------- Router ---------- */
  const TOP = ["home", "bible", "theology", "saints", "cards", "more"];
  function route() { return (location.hash || "#home").slice(1) || "home"; }
  function go(r) { if (location.hash === "#" + r) render(); else location.hash = r; }
  window.addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });

  function tabFor(r) {
    if (r.startsWith("quiz-")) return tabFor(backHref(r.slice(5)).slice(1));
    if (r.startsWith("lesson-bib") || r === "bible" || r.startsWith("book-") || r === "plans" || r.startsWith("plan-") || r === "nt" || r.startsWith("read-")) return "bible";
    if (r === "rope") return "home";
    if (r === "slava" || r === "confess" || r === "lent") return "home";
    if (r.startsWith("lesson-") || r.startsWith("course-") || r === "theology" || r === "creed" || r === "liturgy" || r === "icons" || r.startsWith("icons-") || r === "gallery" || r.startsWith("gallery-") || r === "iconquiz" || r === "feasts" || r.startsWith("feast-")) return "theology";
    if (r.startsWith("person-") || r === "saints") return "saints";
    if (r === "cards" || r === "review") return "cards";
    if (r === "home" || r === "ask" || r === "calendar" || r === "prayers" || r.startsWith("prayercat-")) return "home";
    return "more";
  }
  function parentOf(r) {
    if (r.startsWith("lesson-bib") || r.startsWith("book-") || r === "plans" || r === "nt") return "bible";
    if (r.startsWith("read-")) return "nt";
    if (r === "rope") return "prayers";
    if (r === "slava" || r === "lent") return "calendar";
    if (r === "confess") return "prayers";
    if (r.startsWith("plan-")) return "plans";
    if (r.startsWith("lesson-")) { const l = ALL_LESSONS[r.slice(7)]; return l ? "course-" + l.course : "theology"; }
    if (r.startsWith("quiz-")) return backHref(r.slice(5)).slice(1);
    if (r.startsWith("course-") || r === "creed") return "theology";
    if (r === "liturgy") return "course-L";
    if (r === "icons" || r.startsWith("icons-") || r === "gallery" || r === "feasts") return "theology";
    if (r.startsWith("gallery-")) return "gallery";
    if (r.startsWith("feast-")) return "feasts";
    if (r.startsWith("person-")) return "saints";
    if (r === "review") return "cards";
    if (r === "ask") return "home";
    if (["books", "progress", "notes", "glossary", "prefs", "marks"].includes(r)) return "more";
    if (r === "iconquiz") return "gallery";
    if (r === "calendar" || r === "prayers") return "home";
    if (r.startsWith("prayercat-")) return "prayers";
    return null;
  }

  function shell(inner, r) {
    const parent = parentOf(r);
    const active = tabFor(r);
    const tabs = [["home", "navHome"], ["bible", "navBible"], ["theology", "navTheology"], ["saints", "navSaints"], ["cards", "navCards"], ["more", "navMore"]];
    return `
      <header class="top"><div class="wrap">
        ${parent ? `<a class="iconbtn backbtn" href="#${parent}" aria-label="${esc(t("back"))}">${ic("chev", "flip")}<span>${esc(t("back"))}</span></a>` : ""}
        <a class="brand" href="#home" aria-label="OrthodoxPath – ${esc(t("navHome"))}">${CROSS}<span>${parent ? "" : esc(t("appName"))}</span></a>
        <button class="iconbtn" id="langbtn" aria-label="${esc(t("sLanguage"))}">${ic("globe")}<span>${langLabel()}</span></button>
      </div></header>
      <main><div class="wrap">
        ${storageOk ? "" : `<div class="banner">${esc(t("storageWarn"))}</div>`}
        ${inner}
      </div></main>
      <nav class="tabs" aria-label="${esc(t("menu"))}"><div class="wrap">
        ${tabs.map(([id, k]) => `<a class="tab ${active === id ? "active" : ""}" href="#${id}" ${active === id ? 'aria-current="page"' : ""}>${icon(id)}<span>${esc(t(k))}</span></a>`).join("")}
      </div></nav>`;
  }

  function applyPrefs() {
    document.documentElement.setAttribute("data-theme", S.theme);
    document.documentElement.style.setProperty("--fs", S.font);
    document.documentElement.lang = lang() === "de" ? "de" : (lang() === "sr-lat" ? "sr-Latn" : "sr-Cyrl");
    document.title = "OrthodoxPath";
  }

  function render() {
    applyPrefs();
    try {
      if (!S.lang || !S.onboarded) { app.innerHTML = viewOnboarding(); bindOnboarding(); return; }
      const r = route();
      let html;
      if (r === "home") html = viewHome();
      else if (r === "bible") html = viewBible();
      else if (r === "nt") html = viewNT();
      else if (r.startsWith("read-")) html = viewRead(decodeURIComponent(r.slice(5)));
      else if (r === "rope") html = viewRope();
      else if (r === "slava") html = viewSlava();
      else if (r === "confess") html = viewConfess();
      else if (r === "lent") html = viewLent();
      else if (r === "theology") html = viewTheology();
      else if (r.startsWith("course-")) html = viewCourse(r.slice(7));
      else if (r.startsWith("lesson-")) html = viewLesson(r.slice(7));
      else if (r.startsWith("quiz-")) html = viewQuiz(r.slice(5));
      else if (r === "creed") html = viewCreed();
      else if (r === "saints") html = viewSaints();
      else if (r.startsWith("person-")) html = viewPerson(r.slice(7));
      else if (r === "books") html = viewBooks();
      else if (r === "cards") html = viewCards();
      else if (r === "review") html = viewReview();
      else if (r === "progress") html = viewProgress();
      else if (r === "notes") html = viewNotes();
      else if (r === "glossary") html = viewGlossary();
      else if (r === "ask") html = viewAsk();
      else if (r === "prefs") html = viewPrefs();
      else if (r === "more") html = viewMore();
      else if (r === "calendar") html = viewCalendar();
      else if (r.startsWith("book-")) html = viewBook(r.slice(5));
      else if (r === "plans") html = viewPlans();
      else if (r === "liturgy") html = viewLiturgy();
      else if (r === "icons" || r.startsWith("icons-")) html = viewIcons();
      else if (r === "gallery") html = viewGallery();
      else if (r === "marks") html = viewMarks();
      else if (r === "iconquiz") html = viewIconQuiz();
      else if (r.startsWith("gallery-")) html = viewGalleryItem(r.slice(8));
      else if (r === "feasts") html = viewFeasts();
      else if (r.startsWith("feast-")) html = viewFeast(r.slice(6));
      else if (r.startsWith("plan-")) html = viewPlan(r.slice(5));
      else if (r === "prayers") html = viewPrayers();
      else if (r.startsWith("prayercat-")) html = viewPrayerCat(r.slice(10));
      else html = `<div class="card"><p>${esc(t("notFound"))}</p><a class="btn" href="#home">${esc(t("home"))}</a></div>`;
      const readable = READABLE.some(x => r === x || r.startsWith(x + "-"));
      document.documentElement.classList.toggle("readmode", !!S.readMode && readable);
      const mk = markKeyFor(r);
      const speakable = canSpeak() && (readable || SPEAKABLE.some(x => r === x || r.startsWith(x + "-")));
      if (readable || mk || speakable) html = `<div class="toolbar">${mk ? markBtn(mk) : ""}${speakable ? `<button class="btn ghost small" id="speakbtn" aria-pressed="${speaking}">${ic("speaker")} <span>${esc(t(speaking ? "speakStop" : "speakStart"))}</span></button>` : ""}${readable ? `<button class="btn ghost small" id="readbtn" aria-pressed="${!!S.readMode}">${esc(t(S.readMode ? "readOff" : "readOn"))}</button>` : ""}</div>` + html;
      app.innerHTML = shell(html, r);
      bindCommon();
      const binder = BINDERS[r.split("-")[0]] || BINDERS[r];
      if (binder) binder(r);
    } catch (e) {
      console.error(e);
      app.innerHTML = `<div class="wrap"><div class="card"><p>${esc(t("error"))}</p><p class="small muted">${esc(e.message)}</p><a class="btn" href="#home">${esc(t("home"))}</a></div></div>`;
    }
  }

  /* ---------- Vorlesen (Sprachausgabe des Geräts, nichts wird übertragen) ---------- */
  const SPEAKABLE = ["read", "slava", "lent", "confess"];
  let speaking = false, speakRun = 0;
  function canSpeak() { return typeof window.speechSynthesis !== "undefined" && typeof window.SpeechSynthesisUtterance !== "undefined"; }
  function speakStop() { speakRun++; speaking = false; try { if (canSpeak()) speechSynthesis.cancel(); } catch (e) { } speakLabel(); }
  function speakLabel() { const b = document.getElementById("speakbtn"); if (b) { b.setAttribute("aria-pressed", String(speaking)); const sp = b.querySelector("span"); if (sp) sp.textContent = t(speaking ? "speakStop" : "speakStart"); } }
  function speakTexts() {
    const w = document.querySelector("main .wrap") || document.querySelector("main") || app; const c = w.cloneNode(true);
    c.querySelectorAll(".toolbar, button, select, input, sup, .badge, .chev, svg, nav, figure, .seg, .galnav, .chgrid, .eyebrow, .mgrid, .mlegend, details:not([open]) > :not(summary)").forEach(x => x.remove());
    const out = []; c.querySelectorAll("h1, h2, h3, p, li, legend, label, summary").forEach(el => {
      if (el.querySelector("p, li, h3")) return; const x = el.textContent.replace(/\s+/g, " ").trim(); if (x) out.push(x); });
    const chunks = []; out.forEach(x => (x.match(/[^.!?;:…]+[.!?;:…]*["“”«»‘’)]*\s*/g) || [x]).forEach(sen => {
      sen = sen.trim(); if (!sen) return; while (sen.length > 220) { let i = sen.lastIndexOf(" ", 220); if (i < 60) i = 220; chunks.push(sen.slice(0, i)); sen = sen.slice(i).trim(); } if (sen) chunks.push(sen); }));
    return chunks;
  }
  function speakVoice() {
    let vs = []; try { vs = speechSynthesis.getVoices() || []; } catch (e) { }
    const find = re => vs.find(v => re.test(v.lang) && v.localService) || vs.find(v => re.test(v.lang));
    if (!isSr()) return { voice: find(/^de/i), lang: "de-DE", latin: false };
    const sr = find(/^sr/i); if (sr) return { voice: sr, lang: sr.lang, latin: /latn/i.test(sr.lang) };
    const hr = find(/^(hr|bs)/i); return { voice: hr, lang: hr ? hr.lang : "hr-HR", latin: true };
  }
  function speakStart() {
    const chunks = speakTexts(); if (!chunks.length) return;
    const v = speakVoice(); const run = ++speakRun; speaking = true; speakLabel(); let i = 0;
    try { speechSynthesis.cancel(); } catch (e) { }
    const next = () => {
      if (run !== speakRun) return; if (i >= chunks.length) { speaking = false; speakLabel(); return; }
      let x = chunks[i++]; if (v.latin) x = translit(x);
      const u = new SpeechSynthesisUtterance(x); u.lang = v.lang; if (v.voice) u.voice = v.voice; u.rate = 0.95;
      u.onend = next; u.onerror = ev => { if (run !== speakRun) return; if (ev && (ev.error === "interrupted" || ev.error === "canceled")) return; speaking = false; speakLabel(); toast(t("speakErr")); };
      speechSynthesis.speak(u);
    };
    next();
  }
  window.addEventListener("hashchange", () => { if (speaking) speakStop(); });
  window.addEventListener("pagehide", () => { if (speaking) speakStop(); });
  /* ---------- Merkliste und Lesemodus ---------- */
  const READABLE = ["lesson", "prayers", "prayercat", "feast", "creed", "person"];
  function markKeyFor(r) {
    if (r.startsWith("lesson-") && ALL_LESSONS[r.slice(7)]) return "lesson:" + r.slice(7);
    if (r.startsWith("person-") && PEOPLE[r.slice(7)]) return "person:" + r.slice(7);
    if (r.startsWith("gallery-")) return "gal:" + r.slice(8);
    if (r.startsWith("feast-")) return "feast:" + r.slice(6);
    return null;
  }
  function markBtn(key) { const on = S.marks.includes(key); return `<button class="star ${on ? "on" : ""}" data-mark="${esc(key)}" aria-pressed="${on}" aria-label="${esc(t(on ? "markRemove" : "markAdd"))}">${starIc(on)}<span>${esc(t(on ? "marked" : "markAdd"))}</span></button>`; }
  function markInfo(key) {
    const [type, id] = key.split(":");
    if (type === "lesson" && ALL_LESSONS[id]) return { href: "#lesson-" + id, name: ALL_LESSONS[id].title, group: "markLessons" };
    if (type === "person" && PEOPLE[id]) return { href: "#person-" + id, name: PEOPLE[id].name, group: "markPersons" };
    if (type === "feast") { const g = GREAT_FEASTS.find(x => x.id === id); if (g) return { href: "#feast-" + id, name: g.name, group: "markFeasts" }; }
    if (type === "gal") { const g = galleryItems().find(x => x.id === id); if (g) return { href: "#gallery-" + id, name: g.name, group: "markGallery", thumb: "img/thumbs/" + id + ".jpg" }; }
    return null;
  }
  function viewMarks() {
    const items = S.marks.map(k => ({ k, i: markInfo(k) })).filter(x => x.i);
    const groups = ["markLessons", "markFeasts", "markPersons", "markGallery"];
    const favs = S.prayerFavs.filter(id => PRAYER_TEXTS[id]);
    let html = `<h1>${esc(t("marksTitle"))}</h1><p class="muted">${esc(t("marksIntro"))}</p>`;
    if (!items.length && !favs.length && !S.verses.length) html += `<div class="card"><p class="muted" style="margin:0">${esc(t("marksEmpty"))}</p></div>`;
    groups.forEach(g => { const xs = items.filter(x => x.i.group === g); if (xs.length) html += `<h2>${esc(t(g))}</h2><ul class="list">${xs.map(x => `<li><a class="item" href="${x.i.href}">${x.i.thumb ? `<span class="medal photo"><img src="${x.i.thumb}" alt="" loading="lazy"></span>` : ""}<span class="grow"><span class="t">${E(x.i.name)}</span></span><span class="chev">${ic("chev")}</span></a></li>`).join("")}</ul>`; });
    if (favs.length) html += `<h2>${esc(t("markPrayers"))}</h2><ul class="list">${favs.map(id => `<li><a class="item" href="#prayers"><span class="grow"><span class="t">${E(PRAYER_TEXTS[id].title)}</span></span><span class="chev">${ic("chev")}</span></a></li>`).join("")}</ul>`;
    if (S.verses.length) html += `<h2>${esc(t("markVerses"))}</h2><ul class="list">${S.verses.map(v => `<li><a class="item" href="#lesson-${esc(v.lid || "")}"><span class="grow"><span class="t">${esc(v.ref)}</span></span><span class="chev">${ic("chev")}</span></a></li>`).join("")}</ul>`;
    return html;
  }
  /* ---------- Ikonen-Quiz: Bild zeigen, Namen wählen ---------- */
  let iq = null;
  function newIconQuestion() {
    const all = galleryItems(); const pick = arr => arr[Math.floor(Math.random() * arr.length)];
    let item = pick(all); if (iq && iq.item && all.length > 1) while (item.id === iq.item.id) item = pick(all);
    const same = all.filter(x => x.id !== item.id && x.group === item.group), other = all.filter(x => x.id !== item.id && x.group !== item.group);
    const opts = [item]; const pool = same.slice().sort(() => Math.random() - .5).concat(other.slice().sort(() => Math.random() - .5));
    while (opts.length < 4 && pool.length) opts.push(pool.shift());
    iq = { item, opts: opts.sort(() => Math.random() - .5), answered: null };
  }
  function viewIconQuiz() {
    if (!iq) newIconQuestion();
    const q = iq, sc = S.iconQuiz;
    return `<div class="eyebrow">${esc(t("galTitle"))}</div><h1>${esc(t("iqTitle"))}</h1><p class="muted">${esc(t("iqIntro"))}</p>
      <p class="small"><b>${esc(t("iqScore"))}:</b> ${sc.right} / ${sc.total}</p>
      <figure class="galbig"><img src="img/icons/${q.item.id}.jpg" data-thumb="img/thumbs/${q.item.id}.jpg" alt="${esc(t("iqImgAlt"))}" decoding="async"></figure>
      <div class="opts">${q.opts.map((o, k) => { const st = q.answered == null ? "" : o.id === q.item.id ? "right" : k === q.answered ? "wrong" : "";
        return `<button class="opt ${st}" data-iq="${k}" ${q.answered != null ? "disabled" : ""}>${E(o.name)}</button>`; }).join("")}</div>
      ${q.answered != null ? `<div class="card" role="status"><p style="margin:0 0 6px"><b>${esc(t(q.opts[q.answered].id === q.item.id ? "iqRight" : "iqWrong"))}</b> ${E(q.item.name)}</p>
        <p class="small muted" style="margin:0 0 8px">${E(q.item.credit)}</p><a class="small" href="${q.item.href}">${esc(t("iqMore"))} ›</a>
        <button class="btn block" id="iqnext" style="margin-top:12px">${esc(t("iqNext"))}</button></div>` : ""}
      <button class="btn ghost small" id="iqreset" style="margin-top:8px">${esc(t("iqReset"))}</button>`;
  }
  function bindIconQuiz() {
    const big = app.querySelector(".galbig img"); if (big) big.onerror = () => { if (!big.dataset.fell) { big.dataset.fell = "1"; big.src = big.dataset.thumb; } };
    app.querySelectorAll("[data-iq]").forEach(b => b.onclick = () => {
      if (iq.answered != null) return; iq.answered = +b.dataset.iq;
      S.iconQuiz.total++; if (iq.opts[iq.answered].id === iq.item.id) S.iconQuiz.right++; save(); render();
    });
    const nx = document.getElementById("iqnext"); if (nx) nx.onclick = () => { newIconQuestion(); render(); window.scrollTo(0, 0); };
    const rs = document.getElementById("iqreset"); if (rs) rs.onclick = () => { S.iconQuiz = { right: 0, total: 0 }; save(); render(); };
  }
  /* ---------- Tägliche Erinnerung als Kalendereintrag (.ics, wiederholt täglich) ---------- */
  function reminderIcs(time) {
    const [hh, mm] = time.split(":"); const d = new Date(); d.setDate(d.getDate() + 1);
    const ymd = d.getFullYear() + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0");
    const stamp = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
    const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//OrthodoxPath//DE", "CALSCALE:GREGORIAN", "BEGIN:VEVENT", "UID:daily-reminder-" + Date.now() + "@orthodoxpath", "DTSTAMP:" + stamp,
      "DTSTART:" + ymd + "T" + hh + mm + "00", "DURATION:PT10M", "RRULE:FREQ=DAILY", "SUMMARY:" + icsEscape(t("dremSummary")), "DESCRIPTION:" + icsEscape(t("dremDesc")),
      "URL:https://nidzojungbluth.github.io/orthodoxpath/", "BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:" + icsEscape(t("dremSummary")), "TRIGGER:PT0M", "END:VALARM", "END:VEVENT", "END:VCALENDAR"];
    return lines.map(icsFold).join("\r\n") + "\r\n";
  }
  function bindCommon() {
    const lb = document.getElementById("langbtn");
    if (lb) lb.onclick = openLangSheet;
    app.querySelectorAll("[data-toggle-answer]").forEach(b => b.onclick = () => {
      const a = b.parentElement.querySelector(".answer"); const hidden = a.hidden; a.hidden = !hidden;
      b.textContent = hidden ? t("hideAnswer") : t("showAnswer");
    });
    app.querySelectorAll("[data-verse]").forEach(b => b.onclick = () => {
      const ref = b.getAttribute("data-verse"); const lid = b.getAttribute("data-lid");
      const i = S.verses.findIndex(v => v.ref === ref);
      if (i >= 0) { S.verses.splice(i, 1); b.classList.remove("on"); b.innerHTML = starIc(false); }
      else { S.verses.push({ ref, lid, date: today() }); b.classList.add("on"); b.innerHTML = starIc(true); toast(t("verseSaved")); }
      save();
    });
    app.querySelectorAll("[data-newnote]").forEach(b => b.onclick = () => openNoteEditor(null, b.getAttribute("data-newnote")));
    app.querySelectorAll("[data-mark]").forEach(b => b.onclick = () => {
      const k = b.dataset.mark, i = S.marks.indexOf(k);
      if (i >= 0) { S.marks.splice(i, 1); toast(t("markRemoved")); } else { S.marks.push(k); toast(t("markSaved")); }
      save(); const y = window.scrollY; render(); window.scrollTo(0, y);
    });
    const sb = document.getElementById("speakbtn"); if (sb) sb.onclick = () => { if (speaking) speakStop(); else speakStart(); };
    const rb = document.getElementById("readbtn"); if (rb) rb.onclick = () => { S.readMode = !S.readMode; save(); const y = window.scrollY; render(); window.scrollTo(0, y); };
  }

  function openLangSheet() {
    sheet(`<h3>${esc(t("chooseLang"))}</h3>
      <ul class="list">
        ${[["de", "langDe"], ["sr-cyr", "langSrC"], ["sr-lat", "langSrL"]].map(([v, k]) => `<li><button class="item" data-lang="${v}"><span class="grow"><span class="t">${esc(UI.de[k])}</span></span>${lang() === v ? ic("check", "gold") : ""}</button></li>`).join("")}
      </ul>`, (el, close) => el.querySelectorAll("[data-lang]").forEach(b => b.onclick = () => { S.lang = b.getAttribute("data-lang"); save(); close(); render(); }));
  }

  /* ---------- Onboarding ---------- */
  function viewOnboarding() {
    if (!S.lang) {
      return `<div class="wrap onb">
        <div class="logo" style="color:var(--gold2)">${CROSS.replace('width="22" height="28"', 'width="44" height="56"')}</div>
        <h1 style="text-align:center">OrthodoxPath</h1>
        <p class="muted" style="text-align:center">Orthodoxe Lernakademie · Православна академија</p>
        <div class="card">
          <h3>Sprache wählen · Изаберите језик · Izaberite jezik</h3>
          <ul class="list">
            <li><button class="item" data-lang="de"><span class="grow"><span class="t">Deutsch</span></span><span class="chev">${ic("chev")}</span></button></li>
            <li><button class="item" data-lang="sr-cyr"><span class="grow"><span class="t">Српски (ћирилица)</span></span><span class="chev">${ic("chev")}</span></button></li>
            <li><button class="item" data-lang="sr-lat"><span class="grow"><span class="t">Srpski (latinica)</span></span><span class="chev">${ic("chev")}</span></button></li>
          </ul>
        </div></div>`;
    }
    return `<div class="wrap onb">
      <div class="logo" style="color:var(--gold2)">${CROSS.replace('width="22" height="28"', 'width="44" height="56"')}</div>
      <h1 style="text-align:center">${esc(t("welcomeTitle"))}</h1>
      <div class="card hero"><p>${esc(t("welcomeText"))}</p><p class="muted small">${esc(t("disclaimer"))}</p>
      <p class="muted small">${esc(t("privacyText"))}</p></div>
      <button class="btn block" id="onbstart">${esc(t("start"))}</button>
      <div class="btnrow"><button class="btn ghost block" id="onbback">${ic("globe")} ${esc(t("chooseLang"))}</button></div>
    </div>`;
  }
  function bindOnboarding() {
    app.querySelectorAll("[data-lang]").forEach(b => b.onclick = () => { S.lang = b.getAttribute("data-lang"); save(); render(); });
    const s = document.getElementById("onbstart"); if (s) s.onclick = () => { S.onboarded = true; save(); location.hash = "home"; render(); };
    const bk = document.getElementById("onbback"); if (bk) bk.onclick = () => { S.lang = null; save(); render(); };
  }

  /* ---------- Startseite ---------- */
  function nextLesson() { return LEARN_PATH.find(id => !S.done[id]); }
  function dueCount() { return dueCards(false).length; }
  function viewHome() {
    const nid = nextLesson(); const nl = nid ? ALL_LESSONS[nid] : null;
    const wk = lessonsThisWeek(); const goal = S.lessonsPerWeek;
    const hr = new Date().getHours(); const greet = t(hr < 11 ? "greetMorning" : hr < 18 ? "greetDay" : "greetEvening");
    const due = dueCount();
    const tile = (href, iconName, label, badge) => `<a class="tile" href="#${href}"><span class="ico">${ic(iconName)}</span><span class="tl">${esc(label)}</span>${badge ? `<span class="pill">${badge}</span>` : ""}</a>`;
    return `
      <div class="pagehead"><h1>${esc(greet)}</h1></div>
      ${homeNotices()}
      ${slavaCard()}
      ${lentCard()}
      ${calCard()}
      <div class="card hero">
        <div class="eyebrow">${esc(t("todayLesson"))}</div>
        ${nl ? `<h2 class="herotitle">${E(nl.title)}</h2>${nl.ref ? `<p class="muted">${E(nl.ref)}</p>` : ""}
          <a class="btn block" href="#lesson-${nl.id}">${esc(t("continue"))}</a>` : `<p>${esc(t("allDone"))}</p>`}
      </div>
      ${(() => { const lo = S.lastLesson; return lo && ALL_LESSONS[lo] && lo !== nid && !S.done[lo] ? `<ul class="list">${navItem("lesson-" + lo, "bible", L(ALL_LESSONS[lo].title), t("lastOpened"))}</ul>` : ""; })()}
      <div class="tiles">
        ${tile("review", "repeat", t("tileReview"), due || "")}${tile("plans", "list", t("tilePlans"))}${tile("notes", "note", t("tileNotes"))}${tile("ask", "search", t("tileAsk"))}
      </div>
      ${weekCard()}
      <div class="card"><div class="row"><span class="grow"><span class="eyebrow">${esc(t("weekGoal"))}</span><br><b class="big">${wk}/${goal}</b> <span class="small muted">${esc(t("lessonsThisWeek"))}</span></span></div>
        <div class="progressbar" style="margin-top:10px"><i style="width:${Math.min(100, Math.round(wk / goal * 100))}%"></i></div></div>
      ${impulse()}
      <div class="sh">${esc(t("hExplore"))}</div>
      <ul class="list">
        ${navItem("bible", "bible", t("navBible"), t("biblePlan"))}
        ${navItem("theology", "theology", t("navTheology"), t("theologyTitle"))}
        ${navItem("course-P", "scroll", t("coursePaisios"))}
        ${navItem("saints", "saints", t("saintsTitle"))}
        ${navItem("books", "library", t("booksTitle"))}
        ${navItem("progress", "chart", t("progressTitle"))}
      </ul>
      <div class="ornament">${CROSS}</div>
      <p class="small muted center">${esc(t("disclaimer"))}</p>`;
  }

  /* ---------- Gebete ---------- */
  let prayerTab = (new Date().getHours() >= 15) ? "evening" : "morning";
  function prayerCard(id, label) {
    if (id === "creed") return `<div class="card"><h3>${esc(t("creed"))}</h3><p class="creed">${E(CREED)}</p></div>`;
    if (id === "ps50") return `<a class="item" href="#lesson-bib-ps50"><span class="grow"><span class="t">${esc(t("prPs50"))}</span></span><span class="chev">${ic("chev")}</span></a>`;
    const p = PRAYER_TEXTS[id]; if (!p) return "";
    const kind = p.kind || "trad";
    const kindBadge = `<span class="badge ${kind === "trad" ? "tag-dogma" : kind === "bible" ? "tag-history" : "tag-counsel"}">${esc(t(kind === "trad" ? "prKindTrad" : kind === "bible" ? "prKindBible" : "prKindSuggest"))}</span>`;
    const fav = S.prayerFavs.includes(id);
    return `<div class="card">${label ? `<div class="eyebrow">${E(label)}</div>` : ""}
      <div class="row"><h3 class="grow" style="margin:0">${E(p.title)}</h3><button class="star ${fav ? "on" : ""}" data-pfav="${id}" aria-label="${esc(t("prSaveFav"))}">${starIc(fav)}</button></div>
      ${kindBadge}${p.repeat ? `<span class="badge tag-history">${esc(t("prTimes").replace("{n}", p.repeat))}</span>` : ""}
      <p class="creed">${E(p.text)}</p>${p.note ? `<p class="small muted">${E(p.note)}</p>` : ""}${p.source ? `<p class="small muted"><b>${esc(t("prSource"))}:</b> ${E(p.source)}</p>` : ""}</div>`;
  }
  function prayerTabs() {
    const tabs = [["morning", "prMorning"], ["evening", "prEvening"], ["topics", "prTopics"], ["mine", "prMineShort"]];
    return `<div class="seg" style="margin-bottom:14px">${tabs.map(([id, k]) => `<button data-ptab="${id}" class="${prayerTab === id ? "on" : ""}">${esc(t(k))}</button>`).join("")}</div>`;
  }
  function viewPrayers() {
    let body = "";
    if (prayerTab === "morning" || prayerTab === "evening") body = PRAYER_RULES[prayerTab].map(id => prayerCard(id)).join("");
    else if (prayerTab === "topics") body = `<p class="small muted">${esc(t("prTopicsIntro"))}</p><ul class="list">${PRAYER_CATS.map(c => `<li><a class="item" href="#prayercat-${c.id}"><span class="grow"><span class="t">${E(c.title)}</span><span class="s">${c.items.length} ${esc(t("prayersTitle"))}</span></span><span class="chev">${ic("chev")}</span></a></li>`).join("")}</ul>`;
    else {
      const favs = S.prayerFavs.filter(id => PRAYER_TEXTS[id]);
      const ints = S.intentions.slice().sort((x, y) => (x.done === y.done ? y.date.localeCompare(x.date) : x.done ? 1 : -1));
      body = `<h2>${esc(t("prIntentions"))}</h2><p class="small muted">${esc(t("prIntentHint"))}</p>
        <div class="card"><form id="intentform"><label for="intent" class="sr-only">${esc(t("prIntentions"))}</label>
          <input type="text" id="intent" placeholder="${esc(t("prIntentPlaceholder"))}" maxlength="200">
          <div class="btnrow"><button class="btn" type="submit">${ic("plus")} ${esc(t("prIntentAdd"))}</button></div></form></div>
        ${ints.length ? `<ul class="list">${ints.map(i => `<li class="item" style="cursor:default;${i.done ? "opacity:.6" : ""}"><span class="grow"><span class="t" style="${i.done ? "text-decoration:line-through" : ""}">${esc(i.text)}</span><span class="s">${esc(i.date)}</span></span>
            <button class="iconbtn" data-idone="${i.id}">${esc(i.done ? t("prIntentReopen") : t("prIntentDone"))}</button><button class="iconbtn" data-idel="${i.id}" aria-label="${esc(t("delete"))}">${ic("close")}</button></li>`).join("")}</ul>` : `<p class="muted">${esc(t("prNoIntent"))}</p>`}
        <h2>${esc(t("prFavs"))}</h2>${favs.length ? favs.map(id => prayerCard(id)).join("") : `<p class="muted">${esc(t("prNoFavs"))}</p>`}`;
    }
    return `<h1>${esc(t("prayersTitle"))}</h1><p class="muted small">${esc(t("prayersIntro"))}</p><ul class="list" style="margin-bottom:12px">${navItem("rope", "candle", t("ropeTitle"), t("ropeSub"))}${navItem("confess", "cross", t("confTitle"), t("confSub"))}</ul>${prayerTabs()}${body}
      <p class="small muted">${esc(lang() === "de" ? t("prTransDe") : t("prTransSr"))}</p>`;
  }
  function viewPrayerCat(cid) {
    const c = PRAYER_CATS.find(x => x.id === cid); if (!c) return `<p>${esc(t("notFound"))}</p>`;
    return `<div class="eyebrow">${esc(t("prayersTitle"))}</div><h1>${E(c.title)}</h1>
      ${cid === "communion" || cid === "confession" ? `<div class="card notice"><p class="small" style="margin:0">${ic("cross", "gold")} ${esc(t("prCommNote"))}</p></div>` : ""}
      ${c.items.map(it => Array.isArray(it) ? prayerCard(it[0], { de: it[1], sr: it[2] }) : prayerCard(it)).join("")}
      <p class="small muted">${esc(lang() === "de" ? t("prTransDe") : t("prTransSr"))}</p>`;
  }
  function bindPrayers() {
    app.querySelectorAll("[data-ptab]").forEach(b => b.onclick = () => { prayerTab = b.getAttribute("data-ptab"); render(); window.scrollTo(0, 0); });
    app.querySelectorAll("[data-pfav]").forEach(b => b.onclick = () => {
      const id = b.getAttribute("data-pfav"); const i = S.prayerFavs.indexOf(id);
      if (i >= 0) { S.prayerFavs.splice(i, 1); toast(t("prRemovedFav")); } else { S.prayerFavs.push(id); toast(t("prSavedFav")); }
      save(); render();
    });
    const f = document.getElementById("intentform");
    if (f) f.onsubmit = e => { e.preventDefault(); const v = document.getElementById("intent").value.trim(); if (!v) return; S.intentions.push({ id: "i" + Date.now().toString(36), text: v.slice(0, 200), date: today(), done: false }); save(); render(); };
    app.querySelectorAll("[data-idone]").forEach(b => b.onclick = () => { const it = S.intentions.find(x => x.id === b.getAttribute("data-idone")); if (it) { it.done = !it.done; save(); render(); } });
    app.querySelectorAll("[data-idel]").forEach(b => b.onclick = () => confirmBox(t("confirmDelete"), () => { S.intentions = S.intentions.filter(x => x.id !== b.getAttribute("data-idel")); save(); render(); }));
  }

  /* ---------- Kirchenkalender ---------- */
  function todayUTC() { const d = new Date(); return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()); }
  function locale() { return lang() === "de" ? "de-DE" : (lang() === "sr-lat" ? "sr-Latn-RS" : "sr-Cyrl-RS"); }
  function fmtDate(t, withWeekday) {
    try { return new Date(t).toLocaleDateString(locale(), Object.assign({ timeZone: "UTC", day: "numeric", month: "long" }, withWeekday ? { weekday: "long" } : {})); }
    catch (e) { const d = new Date(t); return d.getUTCDate() + "." + (d.getUTCMonth() + 1) + "."; }
  }
  function inDays(ts) { const n = Math.round((ts - todayUTC()) / 86400000); return n === 1 ? t("calTomorrow") : t("calInDays").replace("{n}", n); }
  function fastBadge(k) { const tag = { none: "", free: "tag-counsel", wedfri: "tag-uncertain" }[k]; return `<span class="badge ${tag === undefined ? "tag-uncertain" : tag}">${E(CAL_FASTS[k])}</span>`; }
  function cal() { return S.calendar === "revised" ? "revised" : "julian"; }
  function feastLine(f) {
    const link = f.lesson && ALL_LESSONS[f.lesson] ? `<a class="small" href="#lesson-${f.lesson}">${esc(t("calToLesson"))} ›</a>` : (f.saint && PEOPLE[f.saint] ? `<a class="small" href="#person-${f.saint}">${E(PEOPLE[f.saint].name)} ›</a>` : "");
    return `<h3 style="margin-bottom:4px">${E(f.name)}</h3>${f.mean ? `<p class="small" style="margin-bottom:4px">${E(f.mean)}</p>` : ""}${link}`;
  }
  /* ---------- Bibeltext (Neues Testament): Luther 1912 / Daničić-Karadžić 1868, beide gemeinfrei ---------- */
  const NT_BOOKS = ["Mt", "Mk", "Lk", "Jn", "Acts", "Rom", "1Cor", "2Cor", "Gal", "Eph", "Phil", "Col", "1Thess", "2Thess", "1Tim", "2Tim", "Tit", "Phlm", "Heb", "Jas", "1Pet", "2Pet", "1Jn", "2Jn", "3Jn", "Jude", "Rev"];
  const NT_NAMES = { Mt: ["Matthäus", "Матеј"], Mk: ["Markus", "Марко"], Lk: ["Lukas", "Лука"], Jn: ["Johannes", "Јован"], Acts: ["Apostelgeschichte", "Дела апостолска"], Rom: ["Römer", "Римљанима"], "1Cor": ["1. Korinther", "1. Коринћанима"], "2Cor": ["2. Korinther", "2. Коринћанима"], Gal: ["Galater", "Галатима"], Eph: ["Epheser", "Ефесцима"], Phil: ["Philipper", "Филипљанима"], Col: ["Kolosser", "Колошанима"], "1Thess": ["1. Thessalonicher", "1. Солуњанима"], "2Thess": ["2. Thessalonicher", "2. Солуњанима"], "1Tim": ["1. Timotheus", "1. Тимотеју"], "2Tim": ["2. Timotheus", "2. Тимотеју"], Tit: ["Titus", "Титу"], Phlm: ["Philemon", "Филимону"], Heb: ["Hebräer", "Јеврејима"], Jas: ["Jakobus", "Јаковљева"], "1Pet": ["1. Petrus", "1. Петрова"], "2Pet": ["2. Petrus", "2. Петрова"], "1Jn": ["1. Johannes", "1. Јованова"], "2Jn": ["2. Johannes", "2. Јованова"], "3Jn": ["3. Johannes", "3. Јованова"], Jude: ["Judas", "Јудина"], Rev: ["Offenbarung", "Откривење"] };
  const NT_CH = { Mt: 28, Mk: 16, Lk: 24, Jn: 21, Acts: 28, Rom: 16, "1Cor": 16, "2Cor": 13, Gal: 6, Eph: 6, Phil: 4, Col: 4, "1Thess": 5, "2Thess": 3, "1Tim": 6, "2Tim": 4, Tit: 3, Phlm: 1, Heb: 13, Jas: 5, "1Pet": 5, "2Pet": 3, "1Jn": 5, "2Jn": 1, "3Jn": 1, Jude: 1, Rev: 22 };
  const bibleCache = {};
  function bibleLang() { return lang() === "de" ? "de" : "sr"; }
  function loadBook(b) {
    const k = bibleLang() + "/" + b;
    if (!bibleCache[k]) bibleCache[k] = fetch("data/bible/" + k + ".json").then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }).catch(e => { delete bibleCache[k]; throw e; });
    return bibleCache[k];
  }
  /* "{Lk}10.38-42, 11.27-28; {Gal}3.13-14" → [{book, ch, from, toCh, to}] ; "{Lk}11" → ganzes Kapitel */
  function parseRef(raw) {
    const out = []; let book = null, ch = null;
    raw.split(/;\s*/).forEach(part => {
      const m = part.match(/^\{(\w+)\}(.*)$/); if (m) { book = m[1]; part = m[2]; }
      part.split(/,\s*/).forEach(seg => {
        seg = seg.trim(); let x;
        if ((x = seg.match(/^(\d+)\.(\d+)-(\d+)\.(\d+)$/))) { ch = +x[3]; out.push({ book, ch: +x[1], from: +x[2], toCh: +x[3], to: +x[4] }); }
        else if ((x = seg.match(/^(\d+)\.(\d+)-(\d+)$/))) { ch = +x[1]; out.push({ book, ch, from: +x[2], toCh: ch, to: +x[3] }); }
        else if ((x = seg.match(/^(\d+)\.(\d+)$/))) { ch = +x[1]; out.push({ book, ch, from: +x[2], toCh: ch, to: +x[2] }); }
        else if ((x = seg.match(/^(\d+)-(\d+)$/)) && ch) out.push({ book, ch, from: +x[1], toCh: ch, to: +x[2] });
        else if ((x = seg.match(/^(\d+)$/))) { if (ch && out.length && !m) out.push({ book, ch, from: +x[1], toCh: ch, to: +x[1] }); else { ch = +x[1]; out.push({ book, ch, from: 1, toCh: ch, to: 999 }); } }
      });
    });
    return out.filter(s => NT_CH[s.book]);
  }
  function refLabel(raw) { return { de: fmtRef(raw, 0), sr: fmtRef(raw, 1) }; }
  function readLink(raw) { return parseRef(raw).length ? `<a href="#read-${encodeURIComponent(raw)}">${E(refLabel(raw))}</a>` : E(refLabel(raw)); }
  function viewNT() {
    return `<div class="eyebrow">${esc(t("navBible"))}</div><h1>${esc(t("ntTitle"))}</h1><p class="muted">${esc(t("ntIntro"))}</p>
      <ul class="list">${NT_BOOKS.map(b => `<li><details class="ntbook"><summary class="item"><span class="grow"><span class="t">${esc(isSr() ? tr(NT_NAMES[b][1]) : NT_NAMES[b][0])}</span><span class="s">${NT_CH[b]} ${esc(t("ntChapters"))}</span></span><span class="chev">${ic("chev")}</span></summary>
        <div class="chgrid">${Array.from({ length: NT_CH[b] }, (_, i) => `<a href="#read-${encodeURIComponent("{" + b + "}" + (i + 1))}">${i + 1}</a>`).join("")}</div></details></li>`).join("")}</ul>
      <button class="btn ghost block" id="ntoffline" style="margin-top:10px">${esc(t("ntOffline"))}</button>
      <p class="small muted" style="margin-top:8px">${esc(t("ntSource"))}</p>`;
  }
  function viewRead(raw) {
    const segs = parseRef(raw); if (!segs.length) return `<p>${esc(t("notFound"))}</p>`;
    const whole = segs.length === 1 && segs[0].to === 999;
    const b = segs[0].book, c = segs[0].ch;
    const nav = whole ? `<div class="galnav">${c > 1 ? `<a class="btn ghost" href="#read-${encodeURIComponent("{" + b + "}" + (c - 1))}">‹ ${c - 1}</a>` : "<span></span>"}${c < NT_CH[b] ? `<a class="btn ghost" href="#read-${encodeURIComponent("{" + b + "}" + (c + 1))}">${c + 1} ›</a>` : "<span></span>"}</div>` : "";
    const title = whole ? (isSr() ? tr(NT_NAMES[b][1]) : NT_NAMES[b][0]) + " " + c : L(refLabel(raw));
    return `<div class="eyebrow">${esc(t(whole ? "ntTitle" : "rdTitle"))}</div><h1>${esc(title)}</h1>
      <div class="card scripture" id="scripture" data-raw="${esc(raw)}" aria-live="polite"><p class="muted">${esc(t("ntLoading"))}</p></div>${nav}
      <p class="small muted">${esc(t("ntSource"))}</p>`;
  }
  async function bindRead(r) {
    const el = document.getElementById("scripture"); if (!el) return;
    const segs = parseRef(decodeURIComponent(r.slice(5)));
    try {
      let html = "";
      for (const sg of segs) {
        const book = await loadBook(sg.book);
        const parts = [];
        for (let c = sg.ch; c <= sg.toCh; c++) {
          const verses = book[c - 1] || []; const a = c === sg.ch ? sg.from : 1, z = c === sg.toCh ? Math.min(sg.to, verses.length) : verses.length;
          for (let v = a; v <= z; v++) if (verses[v - 1]) parts.push(`<sup>${c !== sg.ch || sg.toCh !== sg.ch ? c + "," : ""}${v}</sup>${esc(isSr() ? tr(verses[v - 1]) : verses[v - 1])}`);
        }
        if (segs.length > 1) html += `<h3>${esc(L(refLabel("{" + sg.book + "}" + sg.ch + "." + sg.from + (sg.to !== sg.from ? "-" + (sg.toCh !== sg.ch ? sg.toCh + "." : "") + sg.to : ""))))}</h3>`;
        html += `<p class="bibletext">${parts.join(" ")}</p>`;
      }
      if (document.getElementById("scripture") === el) el.innerHTML = html;
    } catch (e) { el.innerHTML = `<p class="muted">${esc(t("ntError"))}</p>`; }
  }
  function bindNT() {
    const b = document.getElementById("ntoffline");
    if (b) b.onclick = async () => {
      b.disabled = true; let n = 0;
      for (const bk of NT_BOOKS) { try { await loadBook(bk); n++; b.textContent = t("ntOfflineRun").replace("{n}", n).replace("{m}", NT_BOOKS.length); } catch (e) { } }
      b.textContent = n === NT_BOOKS.length ? t("ntOfflineDone") : t("ntError"); toast(b.textContent);
    };
  }
  function tr(x) { return lang() === "sr-lat" ? translit(x) : x; }
  /* ---------- Gebetsschnur (Komboskini/Brojanica) ---------- */
  let ropeN = 0;
  function viewRope() {
    const goal = S.ropeGoal || 100, k = Math.min(ropeN, goal);
    const r = 92, C = 2 * Math.PI * r;
    return `<div class="eyebrow">${esc(t("prayersTitle"))}</div><h1>${esc(t("ropeTitle"))}</h1><p class="muted">${esc(t("ropeIntro"))}</p>
      <p class="ropeprayer">${E(PRAYER_TEXTS.jesus ? PRAYER_TEXTS.jesus.text : { de: "Herr Jesus Christus, Sohn Gottes, erbarme dich meiner, des Sünders.", sr: "Господе Исусе Христе, Сине Божји, помилуј ме грешног." })}</p>
      <button class="ropebtn" id="ropetap" aria-label="${esc(t("ropeTap"))}: ${k} / ${goal}">
        <svg viewBox="0 0 220 220" aria-hidden="true"><circle cx="110" cy="110" r="${r}" class="ropebg"/><circle cx="110" cy="110" r="${r}" class="ropefg" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - k / goal)}" transform="rotate(-90 110 110)"/></svg>
        <span class="ropenum">${k}</span><span class="ropegoal">/ ${goal}</span></button>
      ${k >= goal ? `<p class="center" role="status"><b>${esc(t("ropeDone"))}</b></p>` : ""}
      <div class="seg" style="margin:14px 0" data-seg="ropeGoal">${[33, 50, 100, 300].map(n => `<button data-v="${n}" class="${goal === n ? "on" : ""}">${n}</button>`).join("")}</div>
      <button class="btn ghost block" id="ropereset">${esc(t("ropeReset"))}</button>
      <p class="small muted" style="margin-top:10px">${esc(t("ropeNote"))}</p>`;
  }
  function bindRope() {
    const tap = document.getElementById("ropetap");
    if (tap) tap.onclick = () => { const goal = S.ropeGoal || 100; if (ropeN < goal) ropeN++; try { if (navigator.vibrate) navigator.vibrate(ropeN === goal ? [60, 60, 120] : ropeN % 10 === 0 ? 40 : 12); } catch (e) { } render(); };
    const rs = document.getElementById("ropereset"); if (rs) rs.onclick = () => { ropeN = 0; render(); };
    app.querySelectorAll('[data-seg="ropeGoal"] button').forEach(b => b.onclick = () => { S.ropeGoal = +b.dataset.v; save(); render(); });
  }
  /* ---------- Geführte Beichtvorbereitung (nichts wird gespeichert) ---------- */
  let confSel = new Set();
  function confList() {
    const items = []; CONFESS_Q.forEach((g, gi) => g.q.forEach((q, qi) => { if (confSel.has(gi + "-" + qi)) items.push(q); }));
    return items.length ? `<ul class="conflist">${items.map(q => `<li>${E(q)}</li>`).join("")}</ul><button class="btn ghost block" id="confclear">${esc(t("confClear"))}</button>` : `<p class="small muted" style="margin:0">${esc(t("confEmpty"))}</p>`;
  }
  function viewConfess() {
    const step = (s, extra) => `<div class="card"><h3>${E(s.h)}</h3>${tagBadge(s.tag)}<p>${E(s.t)}</p>${(s.prayers || []).map(id => PRAYER_TEXTS[id] ? `<p class="creed">${E(PRAYER_TEXTS[id].text)}</p>` : "").join("")}${extra || ""}</div>`;
    const qs = CONFESS_Q.map((g, gi) => `<fieldset class="confgroup"><legend>${E(g.h)}</legend>${g.q.map((q, qi) => `<label class="confq"><input type="checkbox" data-cq="${gi}-${qi}" ${confSel.has(gi + "-" + qi) ? "checked" : ""}><span>${E(q)}</span></label>`).join("")}</fieldset>`).join("");
    return `<div class="eyebrow">${esc(t("prayersTitle"))}</div><h1>${esc(t("confTitle"))}</h1><p class="muted">${esc(t("confIntro"))}</p>
      ${step(CONFESS_STEPS[0], `<a class="small" href="#prayercat-confession">${esc(t("confMorePrayers"))} ›</a>`)}
      ${step(CONFESS_STEPS[1], qs)}
      <div class="card"><h3>${esc(t("confMine"))}</h3><p class="small muted">${esc(t("confPrivacy"))}</p><div id="confmine" aria-live="polite">${confList()}</div></div>
      ${CONFESS_STEPS.slice(2).map(s => step(s)).join("")}
      <a class="item" href="#lesson-th-repentance" style="margin-bottom:12px"><span class="grow"><span class="t">${esc(t("confLesson"))}</span></span><span class="chev">${ic("chev")}</span></a>
      <p class="small muted">${E(CONFESS_NOTE)}</p>`;
  }
  function bindConfess() {
    const upd = () => { const m = document.getElementById("confmine"); if (m) { m.innerHTML = confList(); bindClear(); } };
    const bindClear = () => { const c = document.getElementById("confclear"); if (c) c.onclick = () => { confSel = new Set(); render(); }; };
    app.querySelectorAll("[data-cq]").forEach(cb => cb.onchange = () => { if (cb.checked) confSel.add(cb.dataset.cq); else confSel.delete(cb.dataset.cq); upd(); });
    bindClear();
  }
  /* ---------- Begleiter durch die Große Fastenzeit ---------- */
  function lentState(td) {
    const y = new Date(td).getUTCFullYear(); let P = orthodoxPascha(y); if (td > P) P = orthodoxPascha(y + 1);
    const rel = Math.round((td - P) / 86400000);
    return { P, rel, inLent: rel >= -48 && rel <= -1, week: LENT_WEEKS.find(w => rel >= w.from && rel <= w.to), holy: HOLY_WEEK.find(h => h.rel === rel) };
  }
  function lentCard() {
    const st = lentState(todayUTC()); if (!st.inLent) return "";
    const cur = st.holy || st.week;
    return `<a class="card hero" href="#lent"><div class="eyebrow">${esc(t("lentTitle"))} · ${esc(t("lentDay").replace("{n}", st.rel + 49))}</div><h2 class="herotitle">${E(cur.h)}</h2>
      <p class="muted" style="margin:0">${esc(t("lentToPascha").replace("{n}", -st.rel))}</p></a>`;
  }
  function viewLent() {
    const td = todayUTC(); const st = lentState(td);
    const wk = (w, on) => `<div class="card${on ? " hero" : ""}">${on ? `<div class="eyebrow">${esc(t("lentNow"))}</div>` : ""}<h3>${E(w.h)}</h3>
      <p class="small muted" style="margin:0 0 8px">${esc(fmtDate(addD(st.P, w.from)))} – ${esc(fmtDate(addD(st.P, w.to)))} · ${E(w.sun)}</p><p>${E(w.t)}</p>
      <p class="small"><b>${esc(t("lentRead"))}:</b> ${readLink(w.ref)}</p>
      <p style="margin:0">${tagBadge("counsel")} ${E(w.do)}${w.link ? ` <a href="#${w.link}">${esc(t("confTitle"))} ›</a>` : ""}</p></div>`;
    const hd = (h, on) => `<div class="card${on ? " hero" : ""}">${on ? `<div class="eyebrow">${esc(t("calToday"))}</div>` : ""}<h3>${E(h.h)}</h3><p class="small muted" style="margin:0 0 8px">${esc(fmtDate(addD(st.P, h.rel), true))}</p><p>${E(h.t)}</p><p class="small" style="margin:0"><b>${esc(t("lentRead"))}:</b> ${readLink(h.ref)}</p></div>`;
    const head = st.inLent
      ? `<div class="card"><div class="row"><span class="grow"><span class="eyebrow">${esc(t("lentDay").replace("{n}", st.rel + 49))}</span><br><b class="big">${-st.rel}</b> <span class="small muted">${esc(t("lentDaysLeft"))}</span></span></div>
          <div class="progressbar" style="margin-top:10px"><i style="width:${Math.round((st.rel + 49) / 48 * 100)}%"></i></div></div>
         <div class="card"><div class="eyebrow">${esc(t("lentToday"))}</div><p style="margin:6px 0 0">${tagBadge("counsel")} ${E(LENT_PRACTICES[Math.floor(td / 86400000) % LENT_PRACTICES.length])}</p></div>`
      : `<div class="card"><div class="eyebrow">${esc(t("lentNext"))}</div><p style="margin:6px 0 0"><b>${esc(fmtDate(addD(st.P, -48), true))}</b> – ${esc(t("lentPaschaOn"))} <b>${esc(fmtDate(st.P, true))}</b></p></div>`;
    const eph = PRAYER_TEXTS.ephrem ? `<div class="card"><h3>${E(PRAYER_TEXTS.ephrem.title)}</h3><p class="creed">${E(PRAYER_TEXTS.ephrem.text)}</p>${PRAYER_TEXTS.ephrem.note ? `<p class="small muted">${E(PRAYER_TEXTS.ephrem.note)}</p>` : ""}</div>` : "";
    return `<div class="eyebrow">${esc(t("calTitle"))}</div><h1>${esc(t("lentTitle"))}</h1><p class="muted">${esc(t("lentIntro"))}</p>
      ${head}${eph}
      <div class="sh">${esc(t("lentWeeks"))}</div>${LENT_WEEKS.map(w => wk(w, st.week === w)).join("")}
      <div class="sh">${esc(t("lentHoly"))}</div>${HOLY_WEEK.map(h => hd(h, st.holy === h)).join("")}
      <ul class="list">${navItem("calendar", "calendar", t("calTitle"), t("lentFoodHint"))}${navItem("confess", "cross", t("confTitle"))}${navItem("rope", "candle", t("ropeTitle"))}</ul>
      <p class="small muted">${E(LENT_NOTE)}</p>`;
  }
  /* ---------- Krsna slava ---------- */
  function slavaNext(s, from) {
    const y = new Date(from).getUTCFullYear(); const c = cal();
    const ts = [y - 1, y, y + 1].map(ny => churchDate(ny, s.m, s.d, c)).filter(x => x >= from).sort((a, b) => a - b);
    return ts[0];
  }
  function slavaWhen(days) { return days === 0 ? t("slavaToday") : days === 1 ? t("slavaTomorrow") : t("slavaIn").replace("{n}", days); }
  function slavaCard() {
    const s = SLAVAS.find(x => x.id === S.slava); if (!s) return "";
    const td = todayUTC(); const n = slavaNext(s, td); const days = Math.round((n - td) / 86400000);
    if (days > 30) return "";
    return `<a class="card hero slavacard" href="#slava"><div class="eyebrow">${esc(t("slavaTitle"))}</div><h2 class="herotitle">${E(s.name)}</h2>
      <p class="muted" style="margin:0">${esc(slavaWhen(days))} · ${esc(fmtDate(n, true))}</p></a>`;
  }
  function viewSlava() {
    const td = todayUTC(); const s = SLAVAS.find(x => x.id === S.slava);
    const opts = SLAVAS.slice().sort((a, b) => (a.m - b.m) || (a.d - b.d));
    let top = "";
    if (s) {
      const n = slavaNext(s, td); const days = Math.round((n - td) / 86400000); const fi = fastInfo(n, cal());
      const fastDay = fi && fi.kind && fi.kind !== "free" && fi.kind !== "none";
      top = `<div class="card hero"><div class="eyebrow">${esc(t("slavaYours"))}</div><h2 class="herotitle">${E(s.name)}</h2>
        <p style="margin:0 0 6px"><b>${esc(fmtDate(n, true))}</b> · ${esc(slavaWhen(days))}</p>
        ${fastDay ? `<p class="small" style="margin:0 0 8px">${ic("candle", "gold")} ${esc(t("slavaFast"))}</p>` : ""}
        ${s.person && PEOPLE[s.person] ? `<a class="small" href="#person-${s.person}">${E(PEOPLE[s.person].name)} ›</a>` : ""}
        <button class="btn block" id="slavaics" style="margin-top:12px">${ic("calendar")} ${esc(t("slavaIcs"))}</button></div>`;
    }
    return `<div class="eyebrow">${esc(t("calTitle"))}</div><h1>${esc(t("slavaTitle"))}</h1><p class="muted">${esc(t("slavaIntro"))}</p>
      ${top}
      <div class="card"><label for="slavasel">${esc(t("slavaChoose"))}</label>
        <select id="slavasel"><option value="">${esc(t("slavaNone"))}</option>${opts.map(x => `<option value="${x.id}" ${x.id === S.slava ? "selected" : ""}>${esc(L(x.name))} – ${x.d}.${x.m}. (${esc(t("slavaChurch"))})</option>`).join("")}</select>
        <p class="small muted" style="margin:8px 0 0">${esc(t("slavaNote"))}</p></div>
      ${SLAVA_INFO.map(b => `<div class="card"><h3>${E(b.h)}</h3>${tagBadge(b.tag)}<p>${E(b.t)}</p></div>`).join("")}
`;
  }
  function bindSlava() {
    const sel = document.getElementById("slavasel");
    if (sel) sel.onchange = () => { S.slava = sel.value || null; save(); render(); };
    const b = document.getElementById("slavaics");
    if (b) b.onclick = () => {
      const s = SLAVAS.find(x => x.id === S.slava); if (!s) return;
      const y = new Date(todayUTC()).getUTCFullYear(); const list = [];
      for (let ny = y - 1; ny <= y + 10; ny++) { const ts = churchDate(ny, s.m, s.d, cal()); if (ts >= todayUTC() && list.length < 10) list.push({ id: "slava-" + s.id, t: ts, name: { de: "Slava: " + s.name.de, sr: "Слава: " + s.name.sr } }); }
      saveIcs(icsFor(list), "slava.ics");
    };
  }
  /* ---------- Tägliche Lesungen und Speiseregeln (Daten: orthocal.info, julianisch/slawisch) ---------- */
  const BOOKS_SHORT = { Mt: ["Mt", "Мт"], Mk: ["Mk", "Мк"], Lk: ["Lk", "Лк"], Jn: ["Joh", "Јн"], Acts: ["Apg", "Дап"], Rom: ["Röm", "Рим"], "1Cor": ["1 Kor", "1 Кор"], "2Cor": ["2 Kor", "2 Кор"], Gal: ["Gal", "Гал"], Eph: ["Eph", "Еф"], Phil: ["Phil", "Флп"], Col: ["Kol", "Кол"], "1Thess": ["1 Thess", "1 Сол"], "2Thess": ["2 Thess", "2 Сол"], "1Tim": ["1 Tim", "1 Тим"], "2Tim": ["2 Tim", "2 Тим"], Tit: ["Tit", "Тит"], Heb: ["Hebr", "Јев"], Jas: ["Jak", "Јак"], "1Pet": ["1 Petr", "1 Пт"], "2Pet": ["2 Petr", "2 Пт"], "1Jn": ["1 Joh", "1 Јн"], "2Jn": ["2 Joh", "2 Јн"], "3Jn": ["3 Joh", "3 Јн"], Jude: ["Jud", "Јуд"] };
  const DAILY_T0 = Date.UTC(+DAILY.start.slice(0, 4), +DAILY.start.slice(5, 7) - 1, +DAILY.start.slice(8, 10));
  function dailyFor(ts) {
    if (cal() !== "julian") return null;
    const i = Math.round((ts - DAILY_T0) / 86400000); const d = DAILY.d[i];
    if (!d) return null;
    const refs = d[2] ? d[2].split("|").map(x => ({ kind: x[0], ref: x.slice(1) })) : [];
    return { fast: d[0], mask: d[1], refs, tone: d[3], title: d[4] };
  }
  function fmtRef(ref, k) {
    return ref.replace(/, (?=\d+\.\d)/g, "; ").replace(/\{(\w+)\}/g, (m, b) => (BOOKS_SHORT[b] || [b, b])[k] + " ").replace(/(\d+)\.(\d+)/g, "$1,$2").replace(/-/g, "–");
  }
  const FOOD = [["meat", 1], ["dairy", 2], ["eggs", 4], ["fish", 8], ["oil", 16], ["wine", 32]];
  function foodLine(dd) {
    if (!dd || !dd.mask) return "";
    const no = FOOD.filter(([, b]) => dd.mask & b).map(([k]) => t("food_" + k)), yes = FOOD.filter(([, b]) => !(dd.mask & b)).map(([k]) => t("food_" + k));
    return `<p class="small" style="margin:6px 0 0"><b>${esc(t("foodNo"))}:</b> ${esc(no.join(", "))}${yes.length ? ` · <b>${esc(t("foodYes"))}:</b> ${esc(yes.join(", "))}` : ""}</p>`;
  }
  function readingsBlock(ts, compact) {
    const dd = dailyFor(ts);
    if (!dd) return cal() === "julian" ? "" : `<p class="small muted" style="margin:6px 0 0">${esc(t("rdOnlyJulian"))}</p>`;
    const line = r => r.ref;
    const ep = dd.refs.filter(r => r.kind === "E"), go = dd.refs.filter(r => r.kind === "G");
    const head = [dd.title ? t("rdSundayAfterPentecost").replace("{n}", dd.title.slice(1)) : "", dd.tone ? t("rdTone").replace("{n}", dd.tone) : ""].filter(Boolean).join(" · ");
    const body = dd.refs.length ? `${ep.length ? `<p class="small" style="margin:4px 0 0"><b>${esc(t("rdApostle"))}:</b> ${ep.map(r => readLink(line(r))).join(" · ")}</p>` : ""}${go.length ? `<p class="small" style="margin:4px 0 0"><b>${esc(t("rdGospel"))}:</b> ${go.map(r => readLink(line(r))).join(" · ")}</p>` : ""}`
      : `<p class="small muted" style="margin:4px 0 0">${esc(t("rdNoLiturgy"))}</p>`;
    return `<div class="readings"${compact ? "" : ' style="margin-top:10px"'}><div class="eyebrow" style="margin:0">${esc(t("rdTitle"))}${head ? " · " + esc(head) : ""}</div>${body}</div>`;
  }
  function calCard() {
    const td = todayUTC(); const c = cal(); const fi = fastInfo(td, c); const fe = feastsOn(td, c); const nx = nextGreatFeast(td, c); const sts = saintsOn(td, c);
    const evening = new Date().getHours() >= 15;
    const active = PLANS.map(p => ({ p, st: planState(p.id), nx: planNext(p) })).filter(x => x.st.done.length && x.nx >= 0).sort((a, b) => b.st.done.length - a.st.done.length)[0];
    const fasting = !["none", "free"].includes(fi.kind);
    return `<div class="card today">
      <div class="eyebrow">${esc(t("hToday"))} · ${esc(fmtDate(td, true))}</div>
      ${fe.map(f => `<h3 style="margin:2px 0 4px">${E(f.name)}</h3>`).join("")}
      ${sts.length ? `<p class="small" style="margin-bottom:6px">${ic("cross", "gold")} ${sts.map(id => `<a href="#person-${id}">${E(PEOPLE[id].name)}</a>`).join(" · ")}</p>` : ""}
      ${fastBadge(fi.kind)}${fasting ? (dailyFor(td) && dailyFor(td).mask ? foodLine(dailyFor(td)) : `<p class="small muted" style="margin:2px 0 0">${E(CAL_FAST_RULES[fi.kind])}</p>`) : ""}
      ${readingsBlock(td)}
      <ul class="list" style="margin-top:10px">
        ${navItem("prayers", "candle", t("tPray"), t(evening ? "prEvening" : "prMorning"))}
        ${active ? navItem("plan-" + active.p.id, "bible", t("tRead"), L(active.p.days[active.nx])) : navItem("plans", "bible", t("tStartPlan"))}
        ${navItem("calendar", "calendar", t("tCalMore"), nx ? t("calNextFeast") + ": " + L(nx.name) + " – " + fmtDate(nx.t) + " (" + inDays(nx.t) + ")" : "")}
      </ul>
    </div>`;
  }
  /* ---------- Die zwölf großen Feste ---------- */
  function feastDate(id) {
    const td = todayUTC(); const y = new Date(td).getUTCFullYear(); const c = cal();
    const f = feastsOfYear(y, c).concat(feastsOfYear(y + 1, c)).filter(x => x.id === id && x.t >= td).sort((a, b) => a.t - b.t)[0];
    return f || null;
  }
  function viewFeasts() {
    const P = feastDate("pascha");
    return `<h1>${esc(t("gfTitle"))}</h1><p class="muted">${esc(t("gfIntro"))}</p>
      <ul class="list">${P ? navItem("lesson-bib-jn20", "cross", t("gfPascha"), fmtDate(P.t, true) + " · " + inDays(P.t)) : ""}</ul>
      <ul class="list">${GREAT_FEASTS.slice().sort((a, b) => a.order - b.order).map(g => { const f = feastDate(g.id); const cf = CAL_FEASTS.find(x => x.id === g.id);
        return `<li><a class="item" href="#feast-${g.id}"><span class="medal">${g.order}</span><span class="grow"><span class="t">${E(cf.name)}</span><span class="s">${esc(t(g.group === "lord" ? "gfLord" : "gfTheotokos"))}${f ? " · " + esc(fmtDate(f.t, true)) + " · " + esc(inDays(f.t)) : ""}</span></span><span class="chev">${ic("chev")}</span></a></li>`; }).join("")}</ul>`;
  }
  function viewFeast(id) {
    const g = GREAT_FEASTS.find(x => x.id === id); const cf = CAL_FEASTS.find(x => x.id === id); if (!g || !cf) return `<p>${esc(t("notFound"))}</p>`;
    const f = feastDate(id);
    return `<div class="eyebrow">${esc(t(g.group === "lord" ? "gfLord" : "gfTheotokos"))}${f ? " · " + esc(fmtDate(f.t, true)) : ""}</div><h1>${E(cf.name)}</h1>
      ${g.note ? `<div class="card notice">${tagBadge("history")}<p class="small" style="margin:0">${E(g.note)}</p></div>` : ""}
      <section class="card sec"><h3>${esc(t("gfMean"))}</h3><p>${E(g.mean)}</p></section>
      ${FEAST_TROP[g.id] && PRAYER_TEXTS[FEAST_TROP[g.id]] ? `<section class="card sec"><h3>${esc(t("tropTitle"))}</h3><p class="creed">${E(PRAYER_TEXTS[FEAST_TROP[g.id]].text)}</p><p class="small muted">${E(PRAYER_TEXTS[FEAST_TROP[g.id]].source)}</p><a class="small" href="#prayercat-troparia">${esc(t("tropAll"))} ›</a></section>` : ""}<section class="card sec"><h3>${esc(t("gfIcon"))}</h3>${tagBadge("history")}${FEAST_ICON[g.id] && ICON_BY_ID[FEAST_ICON[g.id]] ? iconFigure(ICON_BY_ID[FEAST_ICON[g.id]]) : ""}<p>${E(g.icon)}</p><a class="small" href="#icons${FEAST_ICON[g.id] ? "-" + FEAST_ICON[g.id] : ""}">${esc(t("iconInLex"))} ›</a></section>
      <section class="card sec"><h3>${esc(t("gfReadings"))}</h3>
        <div class="refline"><b>${esc(t("gfApostle"))}</b><span class="grow">${E(g.epistle)}</span></div>
        <div class="refline"><b>${esc(t("gfGospel"))}</b><span class="grow">${E(g.gospel)}</span></div>
        <p class="small muted" style="margin:8px 0 0">${esc(t("gfReadNote"))}</p></section>
      ${g.lessons.filter(l => ALL_LESSONS[l]).length ? `<ul class="list">${g.lessons.filter(l => ALL_LESSONS[l]).map(l => navItem("lesson-" + l, ALL_LESSONS[l].kind === "bible" ? "bible" : "theology", L(ALL_LESSONS[l].title), t("lesson"))).join("")}</ul>` : ""}
      ${f ? `<button class="btn ghost block" data-gfics="${id}">${ic("calendar")} ${esc(t("icsOne"))}</button>` : ""}`;
  }
  function bindFeast() { bindIconImgs(); app.querySelectorAll("[data-gfics]").forEach(b => b.onclick = () => { const f = feastDate(b.getAttribute("data-gfics")); if (f) saveIcs(icsFor([f]), "orthodoxpath-" + f.id + ".ics"); }); }

  /* ---------- Monatsübersicht und Kalenderdatei ---------- */
  let calMonth = null, calDay = null;
  const FAST_CLASS = { lent: "strict", dormition: "strict", single: "strict", apostles: "fast", nativity: "fast", wedfri: "fast", cheese: "light", free: "free", none: "" };
  function monthCard() {
    const td = todayUTC(); const c = cal();
    if (calMonth == null) { const d = new Date(td); calMonth = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1); }
    const m0 = new Date(calMonth); const y = m0.getUTCFullYear(), mo = m0.getUTCMonth();
    const days = new Date(Date.UTC(y, mo + 1, 0)).getUTCDate(); const lead = (m0.getUTCDay() + 6) % 7;
    const wd = Array.from({ length: 7 }, (_, i) => { try { return new Date(Date.UTC(2024, 0, 1 + i)).toLocaleDateString(locale(), { weekday: "narrow", timeZone: "UTC" }); } catch (e) { return ""; } });
    let title; try { title = m0.toLocaleDateString(locale(), { month: "long", year: "numeric", timeZone: "UTC" }); } catch (e) { title = (mo + 1) + "/" + y; }
    let cells = "";
    for (let i = 0; i < lead; i++) cells += `<span class="mc empty"></span>`;
    for (let d = 1; d <= days; d++) {
      const ts = Date.UTC(y, mo, d); const fk = FAST_CLASS[fastInfo(ts, c).kind] || ""; const fe = feastsOn(ts, c);
      const great = fe.some(f => f.great); const lbl = fmtDate(ts, true) + (fe.length ? ", " + fe.map(f => L(f.name)).join(", ") : "") + ", " + L(CAL_FASTS[fastInfo(ts, c).kind]);
      cells += `<button class="mc ${fk ? "fk-" + fk : ""} ${fe.length ? (great ? "great" : "feast") : ""} ${ts === td ? "today" : ""} ${ts === calDay ? "sel" : ""}" data-day="${ts}" aria-label="${esc(lbl)}">${d}</button>`;
    }
    let detail = "";
    if (calDay != null) {
      const fi = fastInfo(calDay, c); const fe = feastsOn(calDay, c); const sts = saintsOn(calDay, c);
      detail = `<div class="mdetail"><div class="eyebrow">${esc(fmtDate(calDay, true))}</div>
        ${fe.map(f => `<p style="margin:0 0 4px"><b>${GREAT_FEASTS.some(g => g.id === f.id) ? `<a href="#feast-${f.id}">${E(f.name)}</a>` : E(f.name)}</b></p>`).join("")}
        ${sts.length ? `<p class="small" style="margin:0 0 6px">${ic("cross", "gold")} ${sts.map(id => `<a href="#person-${id}">${E(PEOPLE[id].name)}</a>`).join(" · ")}</p>` : ""}
        ${fastBadge(fi.kind)}${!["none", "free"].includes(fi.kind) ? `<p class="small muted" style="margin:2px 0 0">${E(CAL_FAST_RULES[fi.kind])}</p>` : ""}${foodLine(dailyFor(calDay))}
        ${readingsBlock(calDay)}
        ${fe.length ? `<button class="btn ghost block" style="margin-top:10px" data-ics="${calDay}">${ic("calendar")} ${esc(t("icsOne"))}</button>` : ""}</div>`;
    }
    return `<div class="card month"><div class="mhead"><button class="iconbtn" data-mnav="-1" aria-label="${esc(t("mPrev"))}">${ic("chev", "flip")}</button><h3>${esc(title)}</h3><button class="iconbtn" data-mnav="1" aria-label="${esc(t("mNext"))}">${ic("chev")}</button></div>
      <div class="mgrid">${wd.map(w => `<span class="mw">${esc(w)}</span>`).join("")}${cells}</div>
      <div class="mlegend"><span><i class="fk-strict"></i>${esc(t("mStrict"))}</span><span><i class="fk-fast"></i>${esc(t("mFast"))}</span><span><i class="fk-light"></i>${esc(t("mLight"))}</span><span><i class="fk-free"></i>${esc(t("mFree"))}</span><span><i class="lg-great"></i>${esc(t("mGreat"))}</span></div>
      ${detail}</div>`;
  }
  function icsEscape(x) { return String(x).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n"); }
  function icsFold(line) { const out = []; while (line.length > 70) { out.push(line.slice(0, 70)); line = " " + line.slice(70); } out.push(line); return out.join("\r\n"); }
  function icsFor(feasts) {
    const ymd = ts => new Date(ts).toISOString().slice(0, 10).replace(/-/g, "");
    const stamp = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
    const ev = feasts.map(f => ["BEGIN:VEVENT", "UID:" + f.id + "-" + ymd(f.t) + "-" + cal() + "@orthodoxpath", "DTSTAMP:" + stamp,
      "DTSTART;VALUE=DATE:" + ymd(f.t), "DTEND;VALUE=DATE:" + ymd(f.t + 86400000), "SUMMARY:" + icsEscape(L(f.name)),
      f.mean ? "DESCRIPTION:" + icsEscape(L(f.mean)) : null, "TRANSP:TRANSPARENT", "END:VEVENT"].filter(Boolean).map(icsFold).join("\r\n"));
    return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//OrthodoxPath//DE", "CALSCALE:GREGORIAN", ...ev, "END:VCALENDAR"].join("\r\n") + "\r\n";
  }
  async function saveIcs(text, name) {
    try { const file = new File([text], name, { type: "text/calendar" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: "OrthodoxPath" }); return; } }
    catch (e) { if (e && e.name === "AbortError") return; }
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([text], { type: "text/calendar" })); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000); toast(t("icsDone"));
  }
  function viewCalendar() {
    const td = todayUTC(); const y = new Date(td).getUTCFullYear(); const c = cal();
    const fi = fastInfo(td, c); const fe = feastsOn(td, c); const sts = saintsOn(td, c);
    const upcoming = feastsOfYear(y, c).concat(feastsOfYear(y + 1, c)).filter(f => f.t >= td && f.t < td + 366 * 86400000);
    const P = orthodoxPascha(y), P2 = orthodoxPascha(y + 1); const fp = fastPeriods(y, c);
    const range = r => `${esc(fmtDate(r[0]))} – ${esc(fmtDate(r[1]))}`;
    const seg = `<div class="seg" style="margin:8px 0 14px">${[["julian", "calJulian"], ["revised", "calRevised"]].map(([v, k]) => `<button data-cal="${v}" class="${c === v ? "on" : ""}">${esc(t(k))}</button>`).join("")}</div>`;
    return `<h1>${esc(t("calTitle"))}</h1><p class="muted small">${esc(c === "revised" ? t("calIntroRevised") : t("calIntro"))}</p>${seg}
      <div class="card hero"><div class="eyebrow">${esc(t("calToday"))} · ${esc(fmtDate(td, true))}</div>
        ${fe.map(feastLine).join("<div style='height:10px'></div>")}
        <div style="margin-top:10px">${fastBadge(fi.kind)}</div>
        <p class="small" style="margin:6px 0 0"><b>${esc(t("calFastRule"))}:</b> ${E(CAL_FAST_RULES[fi.kind])}</p>${foodLine(dailyFor(td))}
        ${readingsBlock(td)}<p class="small muted" style="margin-top:6px">${esc(t("rdSource"))}</p>
        <p class="small muted" style="margin-top:6px">${esc(t("calFastNote"))}</p><a class="small" href="#lesson-li-fastlife">${E(ALL_LESSONS["li-fastlife"].title)} ›</a></div>
      <div class="card"><h3>${esc(t("calSaintsToday"))}</h3>
        ${sts.length ? `<ul class="list">${sts.map(id => `<li><a class="item" href="#person-${id}"><span class="grow"><span class="t">${E(PEOPLE[id].name)}</span><span class="s">${E(PEOPLE[id].lived)}</span></span><span class="chev">${ic("chev")}</span></a></li>`).join("")}</ul>` : `<p class="small muted">${esc(t("calNoSaintsApp"))}</p>`}
        ${LINKS.svProlog ? `<p class="small"><a href="${esc(LINKS.svProlog.url)}" target="_blank" rel="noopener">${E(LINKS.svProlog.label)} ↗</a></p>` : ""}
        <p class="small muted">${esc(t("calReadingsNote"))}</p></div>
      <div class="grid2">
        <div class="card stat"><b style="font-size:1.2em">${esc(fmtDate(P))}</b><span class="small muted">${esc(t("calPascha").replace("{y}", y))}</span></div>
        <div class="card stat"><b style="font-size:1.2em">${esc(fmtDate(P2))}</b><span class="small muted">${esc(t("calPascha").replace("{y}", y + 1))}</span></div>
      </div>
      <h2>${esc(t("mTitle"))}</h2>
      ${monthCard()}
      <ul class="list">${navItem("feasts", "cross", t("gfTitle"))}</ul>
      <h2>${esc(t("calUpcoming"))}</h2>
      <button class="btn ghost block" id="icsall" style="margin-bottom:6px">${ic("calendar")} ${esc(t("icsAll"))}</button>
      <p class="small muted">${esc(t("icsNote"))}</p>
      <ul class="list">${upcoming.map(f => `<li class="item" style="cursor:default;align-items:flex-start"><span class="grow"><span class="t">${E(f.name)}</span><span class="s">${esc(fmtDate(f.t, true))} · ${esc(f.t === td ? t("calToday") : inDays(f.t))}</span>${f.mean ? `<span class="s">${E(f.mean)}</span>` : ""}${f.great ? `<span class="badge tag-dogma" style="margin:6px 0 0">${esc(t("calGreat"))}</span>` : ""}</span></li>`).join("")}</ul>
      <h2>${esc(t("calFastPeriods").replace("{y}", y))}</h2>
      <div class="card">
        <div class="refline"><b>${E(CAL_FASTS.lent)}</b><span class="grow">${range(fp.lent)}</span></div>
        <div class="refline"><b>${E(CAL_FASTS.apostles)}</b><span class="grow">${fp.apostles ? range(fp.apostles) : esc(t("calApostlesNone"))}</span></div>
        <div class="refline"><b>${E(CAL_FASTS.dormition)}</b><span class="grow">${range(fp.dormition)}</span></div>
        <div class="refline"><b>${E(CAL_FASTS.nativity)}</b><span class="grow">${range(fp.nativity)}</span></div>
        <div class="refline"><b>${E(CAL_FASTS.wedfri)}</b><span class="grow">${E(CAL_FASTS.free)}: ${range(fp.bright)}; ${range(fp.trinity)}</span></div>
        <p class="small muted" style="margin-top:8px">${esc(t("calFastNote"))}</p>
      </div>
      <a class="item" href="#lesson-li-fasting"><span class="grow"><span class="t">${E(ALL_LESSONS["li-fasting"].title)}</span></span><span class="chev">${ic("chev")}</span></a>
      <a class="item" href="#lesson-li-fastlife"><span class="grow"><span class="t">${E(ALL_LESSONS["li-fastlife"].title)}</span></span><span class="chev">${ic("chev")}</span></a>
      <a class="item" href="#lesson-li-calendar"><span class="grow"><span class="t">${E(ALL_LESSONS["li-calendar"].title)}</span></span><span class="chev">${ic("chev")}</span></a>`;
  }
  function bindCalendar() {
    app.querySelectorAll("[data-cal]").forEach(b => b.onclick = () => { S.calendar = b.getAttribute("data-cal"); save(); render(); });
    const keep = () => { const y = window.scrollY; render(); window.scrollTo(0, y); };
    app.querySelectorAll("[data-mnav]").forEach(b => b.onclick = () => { const d = new Date(calMonth); calMonth = Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + parseInt(b.getAttribute("data-mnav"), 10), 1); calDay = null; keep(); });
    app.querySelectorAll(".mc[data-day]").forEach(b => b.onclick = () => { const v = parseInt(b.getAttribute("data-day"), 10); calDay = calDay === v ? null : v; keep(); });
    app.querySelectorAll("[data-ics]").forEach(b => b.onclick = () => { const ts = parseInt(b.getAttribute("data-ics"), 10); const fe = feastsOn(ts, cal()); if (fe.length) saveIcs(icsFor(fe), "orthodoxpath-" + new Date(ts).toISOString().slice(0, 10) + ".ics"); });
    const all = document.getElementById("icsall");
    if (all) all.onclick = () => { const td = todayUTC(); const y = new Date(td).getUTCFullYear();
      const fe = feastsOfYear(y, cal()).concat(feastsOfYear(y + 1, cal())).filter(f => f.t >= td && f.t < td + 366 * 86400000);
      saveIcs(icsFor(fe), "orthodoxpath-feste-" + y + ".ics"); };
  }

  /* ---------- Bibel ---------- */
  function bibleView() { return S.bibleView === "books" ? "books" : "path"; }
  function viewBible() {
    const byBook = {}; BIBLE_LESSONS.forEach(l => (byBook[l.book] = byBook[l.book] || []).push(l));
    const doneN = BIBLE_LESSONS.filter(l => S.done[l.id]).length;
    let html = `<h1>${esc(t("biblePlan"))}</h1><p class="muted">${esc(t("bibleIntro"))}</p>
      <div class="progressbar" style="margin:6px 0 16px"><i style="width:${Math.round(doneN / BIBLE_LESSONS.length * 100)}%"></i></div>
      <a class="item" href="#nt"><span class="grow"><span class="t">${esc(t("ntTitle"))}</span><span class="s">${esc(t("ntSub"))}</span></span><span class="chev">${ic("chev")}</span></a>
      <a class="item" href="#plans"><span class="grow"><span class="t">${esc(t("plansTitle"))}</span><span class="s">${PLANS.map(p => E(p.title)).join(" · ")}</span></span><span class="chev">${ic("chev")}</span></a>
      <div class="seg" style="margin-bottom:12px" role="group" aria-label="${esc(t("bvLabel"))}">${[["path", "bvPath"], ["books", "bvBooks"]].map(([v, k]) => `<button data-bview="${v}" class="${bibleView() === v ? "on" : ""}" aria-pressed="${bibleView() === v}">${esc(t(k))}</button>`).join("")}</div>
      ${bibleView() === "books" ? BIBLE.groups.map(g => { const ls = BIBLE.books.filter(b => b[1] === g.id).flatMap(b => byBook[b[0]] || []);
          return ls.length ? `<div class="sh">${E(g.name)}</div><ul class="list">${ls.map(l => lessonItem(l, BIBLE_LESSONS.indexOf(l) + 1)).join("")}</ul>` : ""; }).join("")
        : `<ul class="list">${BIBLE_LESSONS.map((l, i) => lessonItem(l, i + 1)).join("")}</ul>`}
      <details class="card"><summary>${esc(t("canonNoteTitle"))}</summary><p>${E(BIBLE.canonNote)}</p><p class="muted small">${E(BIBLE.readingNote)}</p></details>
      <h2>${esc(t("bookOverview"))}</h2>`;
    BIBLE.groups.forEach(g => {
      const books = BIBLE.books.filter(b => b[1] === g.id);
      html += `<div class="card"><h3>${E(g.name)}</h3><ul class="list">` + books.map(b => {
        const ls = byBook[b[0]] || [];
        const name = isSr() ? L({ de: b[2], sr: b[3] }) : b[2];
        const label = ls.length ? `${ls.length} ${esc(t("lessons"))}` : (OV_BY_BOOK[b[0]] ? esc(t("ovLabel")) : esc(t("inPreparation")));
        return `<li><a class="refline" href="#book-${b[0]}" style="text-decoration:none;color:inherit;min-height:44px;align-items:center"><span class="grow">${esc(name)}</span><span class="small muted">${label}</span><span class="chev">${ic("chev")}</span></a></li>`;
      }).join("") + `</ul></div>`;
    });
    return html;
  }
  function lessonItem(l, n) {
    const d = !!S.done[l.id];
    return `<li><a class="item" href="#lesson-${l.id}"><span class="check ${d ? "on" : ""}">${d ? ic("check") : n}</span><span class="grow"><span class="t">${E(l.title)}</span>${l.ref ? `<span class="s">${E(l.ref)}</span>` : ""}</span><span class="chev">${ic("chev")}</span></a></li>`;
  }



  /* ---------- Lesepläne ---------- */
  function planState(id) { S.plans = S.plans || {}; return S.plans[id] || (S.plans[id] = { done: [] }); }
  function planNext(p) { const st = planState(p.id); return p.days.findIndex((d, i) => !st.done.includes(i)); }
  function planItem(p) {
    const st = planState(p.id); const n = st.done.length; const nx = planNext(p);
    return `<li><a class="item" href="#plan-${p.id}"><span class="grow"><span class="t">${E(p.title)}</span>
      <span class="s">${n}/${p.days.length} ${esc(t("planReadings"))}${nx >= 0 ? ` · ${esc(t("planNext"))}: ${E(p.days[nx])}` : ` · ${esc(t("planDone"))}`}</span>
      <span class="progressbar" style="display:block;margin-top:6px"><i style="width:${Math.round(n / p.days.length * 100)}%"></i></span></span><span class="chev">${ic("chev")}</span></a></li>`;
  }
  function viewPlans() {
    return `<h1>${esc(t("plansTitle"))}</h1><p class="muted">${esc(t("plansIntro"))}</p><ul class="list">${PLANS.map(planItem).join("")}</ul>
      ${LINKS.svNT ? `<p class="small"><a href="${esc(LINKS.svNT.url)}" target="_blank" rel="noopener">${E(LINKS.svNT.label)} ↗</a></p>` : ""}
      <p class="small muted">${E(BIBLE.readingNote)}</p>`;
  }
  let planShowAll = false;
  function viewPlan(id) {
    const p = PLANS.find(x => x.id === id); if (!p) return `<p>${esc(t("notFound"))}</p>`;
    const st = planState(id); const nx = planNext(p);
    const from = planShowAll ? 0 : Math.max(0, (nx < 0 ? p.days.length : nx) - 3);
    const to = planShowAll ? p.days.length : Math.min(p.days.length, from + 12);
    return `<div class="eyebrow">${esc(t("plansTitle"))}</div><h1>${E(p.title)}</h1><p class="muted">${E(p.desc)}</p>
      <div class="card hero"><div class="eyebrow">${esc(t(nx >= 0 ? "planNext" : "planDone"))}</div>
        ${nx >= 0 ? `<h2>${E(p.days[nx])}</h2><button class="btn block" data-plan="${id}" data-day="${nx}">${ic("check")} ${esc(t("planMark"))}</button>` : ""}
        <div class="progressbar" style="margin-top:12px"><i style="width:${Math.round(st.done.length / p.days.length * 100)}%"></i></div>
        <p class="small muted" style="margin:6px 0 0">${st.done.length}/${p.days.length} ${esc(t("planReadings"))}</p></div>
      <ul class="list">${p.days.slice(from, to).map((d, k) => { const i = from + k; const on = st.done.includes(i);
        return `<li><button class="item" data-plan="${id}" data-day="${i}"><span class="check ${on ? "on" : ""}">${on ? ic("check") : i + 1}</span><span class="grow"><span class="t">${E(d)}</span></span></button></li>`; }).join("")}</ul>
      <div class="btnrow"><button class="btn ghost" id="planall">${esc(t(planShowAll ? "planShowLess" : "planShowAll"))}</button>
      <button class="btn danger" id="planreset">${esc(t("planReset"))}</button></div>`;
  }
  function bindPlan(r) {
    const id = r.slice(5);
    app.querySelectorAll("[data-day]").forEach(b => b.onclick = () => {
      const st = planState(b.getAttribute("data-plan")); const i = +b.getAttribute("data-day"); const k = st.done.indexOf(i);
      if (k >= 0) st.done.splice(k, 1); else { st.done.push(i); markActivity(); }
      save(); render();
    });
    const all = document.getElementById("planall"); if (all) all.onclick = () => { planShowAll = !planShowAll; render(); };
    const rs = document.getElementById("planreset"); if (rs) rs.onclick = () => confirmBox(t("confirmDelete"), () => { S.plans[id] = { done: [] }; save(); render(); });
  }


  /* ---------- Liturgie Schritt für Schritt ---------- */
  function viewLiturgy() {
    let part = 0; let html = `<div class="eyebrow">${esc(t("courseL"))}</div><h1>${esc(t("litTitle"))}</h1><p class="muted">${esc(t("litIntro"))}</p>`;
    LITURGY_STEPS.forEach((s, i) => {
      if (s.part !== part) { part = s.part; html += `<div class="divider">${E(LITURGY_PARTS[part])}</div>`; }
      html += `<section class="card sec"><h3><span class="num">${i + 1}</span>${E(s.title)}</h3>
        <p><b>${esc(t("litWhat"))}</b> ${E(s.what)}</p><p><b>${esc(t("litMean"))}:</b> ${E(s.mean)}</p>
        <div class="simple"><div class="eyebrow">${esc(t("litDo"))}</div><p style="margin:0">${E(s.do)}</p></div></section>`;
    });
    return html + `<a class="item" href="#lesson-li-liturgy"><span class="grow"><span class="t">${E(ALL_LESSONS["li-liturgy"].title)}</span></span><span class="chev">${ic("chev")}</span></a><p class="small muted">${esc(t("litNote"))}</p>`;
  }


  /* ---------- Ikonen-Lexikon ---------- */
  const ICON_BY_ID = Object.fromEntries(ICONS_LEX.map(i => [i.id, i]));
  const FEAST_TROP = {"theotokos-birth": "tr-theotokos-birth", "exaltation": "tr-exaltation", "entry": "tr-entry", "nativity": "tr-nativity", "theophany": "tr-theophany", "meeting": "tr-meeting", "annunciation": "tr-annunciation", "palm": "tr-palm", "ascension": "tr-ascension", "pentecost": "tr-pentecost", "transfiguration": "tr-transfiguration", "dormition": "tr-dormition"};
  const FEAST_ICON = { "theotokos-birth": "nativity-theotokos", exaltation: "exaltation", entry: "presentation-theotokos", nativity: "nativity", theophany: "theophany", meeting: "meeting", annunciation: "annunciation", palm: "entry", ascension: "ascension", pentecost: "pentecost", transfiguration: "transfiguration", dormition: "dormition" };
  function iconFigure(i) {
    if (!i.img) return "";
    const page = "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(i.img.file);
    /* Bild liegt in der App selbst (img/icons/<id>.jpg) – funktioniert offline und ohne fremde Server */
    return `<figure class="iconimg"><img src="img/icons/${i.id}.jpg" alt="${esc(L(i.name))}" loading="lazy" decoding="async">
      <figcaption class="small muted">${E(i.img.credit)} · ${esc(t("iconPd"))} · <a href="${page}" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a></figcaption></figure>`;
  }
  /* ---------- Ikonen-Galerie: alle Bilder (Ikonen-Lexikon + Heilige) ---------- */
  let GAL = null;
  function galleryItems() {
    if (GAL) return GAL;
    const byId = Object.fromEntries(ICONS_LEX.map(i => [i.id, i]));
    const icons = ICON_GROUPS.flatMap(g => ICON_ORDER[g.id].map(id => byId[id]).filter(i => i && i.img).map(i => ({
      id: i.id, group: g.id, name: i.name, credit: i.img.credit, file: i.img.file, href: "#icons-" + i.id, tag: i.tag,
      info: [[t("iconLook"), i.look], [t("iconMean"), i.mean]] })));
    const persons = [...FATHERS, ...SAINTS].filter(p => SAINT_IMGS[p.id] && !SAINT_IMGS[p.id].icon).map(p => ({
      id: p.id, group: "persons", name: p.name, credit: SAINT_IMGS[p.id].credit, file: SAINT_IMGS[p.id].file, href: "#person-" + p.id,
      info: [[t("lived"), p.lived], [t("feast"), p.feast]] }));
    GAL = icons.concat(persons);
    return GAL;
  }
  const GAL_GROUPS = () => [...ICON_GROUPS.map(g => ({ id: g.id, name: g.name })), { id: "persons", name: { de: "Heilige und Kirchenväter", sr: "Светитељи и Свети оци" } }];
  /* Kurze Zeitangabe aus der Herkunft („13. Jh.“, „um 1405“) für die Galerie-Kacheln */
  function galWhen(i) { const m = L(i.credit).match(/(\d{1,2}\.(?:\/\d{1,2}\.)?\s?(?:Jh\.|век|vek)|(?:um |около |oko )?\d{4}(?:er Jahre)?)/); return m ? m[0] : ""; }
  function viewGallery() {
    const items = galleryItems();
    const chip = (id, label, n) => `<button class="chip" data-gal="${id}" aria-pressed="${id === "all"}">${esc(label)} (${n})</button>`;
    return `<div class="eyebrow">${esc(t("theologyTitle"))}</div><h1>${esc(t("galTitle"))}</h1><p class="muted">${esc(t("galIntro"))}</p>
      <div class="chips" role="group" aria-label="${esc(t("galFilter"))}">${chip("all", t("galAll"), items.length)}${GAL_GROUPS().map(g => chip(g.id, L(g.name).split(" (")[0], items.filter(i => i.group === g.id).length)).join("")}</div>
      <ul class="galgrid">${items.map(i => `<li data-g="${i.group}"><a href="#gallery-${i.id}"><img src="img/thumbs/${i.id}.jpg" alt="" loading="lazy" decoding="async" width="300" height="400"><span>${E(i.name)}</span>${galWhen(i) ? `<small>${esc(galWhen(i))}</small>` : ""}</a></li>`).join("")}</ul>
      <a class="btn ghost block" href="#iconquiz" style="margin:6px 0 10px">${esc(t("iqTitle"))} ›</a>
      <p class="small muted">${esc(t("galNote"))}</p>`;
  }
  function viewGalleryItem(id) {
    const items = galleryItems(), k = items.findIndex(i => i.id === id);
    if (k < 0) return `<p>${esc(t("notFound"))}</p>`;
    const i = items[k], prev = items[(k - 1 + items.length) % items.length], next = items[(k + 1) % items.length];
    const page = "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(i.file);
    const grp = GAL_GROUPS().find(g => g.id === i.group);
    return `<div class="eyebrow">${esc(t("galTitle"))} · ${esc(grp ? L(grp.name).split(" (")[0] : "")} · ${k + 1}/${items.length}</div><h1>${E(i.name)}</h1>
      <figure class="galbig"><img src="img/icons/${i.id}.jpg" data-thumb="img/thumbs/${i.id}.jpg" alt="${esc(L(i.name))}" decoding="async">
        <figcaption class="small muted">${E(i.credit)} · ${esc(t("iconPd"))} · <a href="${page}" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a></figcaption></figure>
      <div class="galnav"><a class="btn ghost" href="#gallery-${prev.id}" aria-label="${esc(t("galPrev"))}: ${esc(L(prev.name))}">‹ ${esc(t("galPrev"))}</a><a class="btn ghost" href="#gallery-${next.id}" aria-label="${esc(t("galNext"))}: ${esc(L(next.name))}">${esc(t("galNext"))} ›</a></div>
      <section class="card sec">${i.tag ? tagBadge(i.tag) : ""}${i.info.map(([h, v]) => `<p><b>${esc(h)}:</b> ${E(v)}</p>`).join("")}
        <a class="small" href="${i.href}">${esc(i.group === "persons" ? t("galToPerson") : t("iconInLex"))} ›</a></section>`;
  }
  function bindGallery() {
    app.querySelectorAll("[data-gal]").forEach(b => b.onclick = () => {
      const g = b.dataset.gal;
      app.querySelectorAll("[data-gal]").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      app.querySelectorAll(".galgrid li").forEach(li => { li.hidden = g !== "all" && li.dataset.g !== g; });
    });
    app.querySelectorAll(".galgrid img").forEach(im => { im.onerror = () => { im.style.visibility = "hidden"; }; });
    /* Detailansicht: großes Bild, bei Fehler (offline, noch nicht geladen) Vorschaubild; Wischen zum Blättern */
    const big = app.querySelector(".galbig img");
    if (big) {
      big.onerror = () => { if (big.dataset.thumb && !big.dataset.fell) { big.dataset.fell = "1"; big.src = big.dataset.thumb; } };
      const nav = app.querySelectorAll(".galnav a");
      let x0 = null, y0 = null;
      big.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
      big.addEventListener("touchend", e => {
        if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null;
        if (Math.abs(dx) > 60 && Math.abs(dx) > 2 * Math.abs(dy)) location.hash = nav[dx < 0 ? 1 : 0].getAttribute("href").slice(1);
      }, { passive: true });
    }
  }
  function viewIcons() {
    const byId = Object.fromEntries(ICONS_LEX.map(i => [i.id, i]));
    const card = i => `<section class="card sec" id="icon-${i.id}"><h3>${E(i.name)}</h3>${i.tag ? tagBadge(i.tag) : ""}${iconFigure(i)}
        <p><b>${esc(t("iconLook"))}:</b> ${E(i.look)}</p><p style="margin-bottom:${i.lesson || i.saint ? "6px" : "0"}"><b>${esc(t("iconMean"))}:</b> ${E(i.mean)}</p>
        ${i.lesson && ALL_LESSONS[i.lesson] ? `<a class="small" href="#lesson-${i.lesson}">${esc(t("calToLesson"))} ›</a>` : ""}
        ${i.saint ? `<a class="small" href="#person-${i.saint}">${esc(t("iconToSaint"))} ›</a>` : ""}</section>`;
    return `<div class="eyebrow">${esc(t("theologyTitle"))}</div><h1>${esc(t("iconsTitle"))}</h1><p class="muted">${esc(t("iconsIntro"))}</p><p class="small muted">${esc(t("iconImgNote"))}</p>
      <div class="chips" role="navigation" aria-label="${esc(t("iconsTitle"))}">${ICON_GROUPS.map(g => `<a class="chip" href="#icons" data-jump="ig-${g.id}">${E(g.name).split(" (")[0]} (${ICON_ORDER[g.id].length})</a>`).join("")}</div>
      ${ICON_GROUPS.map(g => `<h2 id="ig-${g.id}">${E(g.name)}</h2>${ICON_ORDER[g.id].map(id => byId[id]).filter(Boolean).map(card).join("")}`).join("")}`;
  }
  let iconAnchor = null;
  function bindIconImgs() {
    app.querySelectorAll(".iconimg img").forEach(im => {
      const ok = () => { im.dataset.ok = "1"; };
      if (im.complete && im.naturalWidth) ok(); else im.onload = ok;
      im.onerror = () => {
        /* großes Bild nicht da (offline, noch nie geöffnet): scharfes Vorschaubild nehmen, sonst ausblenden */
        const th = im.getAttribute("src").replace("img/icons/", "img/thumbs/");
        if (!im.dataset.fell && th !== im.getAttribute("src")) { im.dataset.fell = "1"; im.src = th; return; }
        im.closest("figure").hidden = true; if (iconAnchor) iconAnchor();
      };
    });
  }
  function bindIcons(r) {
    const target = r && r.startsWith("icons-") ? document.getElementById("icon-" + r.slice(6)) : null;
    iconAnchor = null;
    if (target) {
      /* Ausgeblendete Bilder oberhalb verschieben die Seite – bis zur ersten eigenen Bewegung des Nutzers nachführen */
      iconAnchor = () => target.scrollIntoView({ block: "start" });
      const stop = () => { iconAnchor = null; };
      ["touchstart", "wheel", "keydown"].forEach(ev => window.addEventListener(ev, stop, { once: true, passive: true }));
      setTimeout(stop, 4000);
      setTimeout(() => { if (iconAnchor) iconAnchor(); target.classList.add("flash"); }, 60);
    }
    app.querySelectorAll("[data-jump]").forEach(a => a.onclick = ev => { ev.preventDefault(); const el = document.getElementById(a.dataset.jump); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); });
    bindIconImgs();
  }

  /* ---------- Buchüberblick ---------- */
  function viewBook(bid) {
    const b = BIBLE.books.find(x => x[0] === bid); if (!b) return `<p>${esc(t("notFound"))}</p>`;
    const o = OV_BY_BOOK[bid]; const ls = BIBLE_LESSONS.filter(l => l.book === bid);
    const group = BIBLE.groups.find(g => g.id === b[1]);
    let html = `<div class="eyebrow">${E(group.name)}</div><h1>${E({ de: b[2], sr: b[3] })}</h1>`;
    if (ls.length) html += `<h2>${esc(t("ovLessons"))}</h2><ul class="list">${ls.map(l => lessonItem(l, BIBLE_LESSONS.indexOf(l) + 1)).join("")}</ul>`;
    if (o) {
      html += `<section class="card sec"><h3>${esc(t("ovAbout"))}</h3>${tagBadge("history")}<p>${E(o.about)}</p></section>
        <section class="card sec"><h3>${esc(t("ovKeys"))}</h3>${refList(o.keys, o.id)}<p class="small muted" style="margin-top:8px">${E(BIBLE.readingNote)}</p></section>
        <section class="card sec"><h3>${esc(t("secChrist"))}</h3>${tagBadge("opinion")}<p>${E(o.christ)}</p></section>
        ${o.lit ? `<section class="card sec"><h3>${esc(t("ovLit"))}</h3>${tagBadge("history")}<p>${E(o.lit)}</p></section>` : ""}
        <div class="card"><a class="btn block" href="#quiz-${o.id}">${esc(t("startQuiz"))} (${o.quiz.length})</a>
        <div class="btnrow"><button class="btn ghost block" data-newnote="${esc(L(o.title))}">${ic("pen")} ${esc(t("addNote"))}</button></div></div>
        ${ls.length ? "" : `<p class="small muted">${esc(t("ovMore"))}</p>`}`;
    }
    return html;
  }

  /* ---------- Lektionen ---------- */
  function refList(arr, lid) {
    return arr.map(x => {
      const ref = L(x.ref); const on = S.verses.some(v => v.ref === ref);
      return `<div class="refline"><b>${esc(ref)}</b><span class="grow">${E(x.note)}</span><button class="star ${on ? "on" : ""}" data-verse="${esc(ref)}" data-lid="${lid}" aria-label="${esc(t("saveVerse"))}">${starIc(on)}</button></div>`;
    }).join("");
  }
  function questionsBlock(qs) {
    return qs.map(q => `<div class="qa"><p><b>${E(q.q)}</b></p>
      <label class="small muted">${esc(t("yourAnswer"))}<textarea rows="2"></textarea></label>
      <button class="btn ghost" data-toggle-answer>${esc(t("showAnswer"))}</button>
      <div class="answer" hidden><span class="small muted">${esc(t("modelAnswer"))}:</span><br>${E(q.a)}</div></div>`).join("");
  }
  function doneBar(id) {
    const d = !!S.done[id]; const l = ALL_LESSONS[id];
    return `<div class="card">
      ${l.quiz && l.quiz.length ? `<a class="btn block" href="#quiz-${id}">${esc(t("startQuiz"))} (${l.quiz.length})</a><div style="height:10px"></div>` : ""}
      <button class="btn ${d ? "ghost" : ""} block" id="donebtn">${d ? ic("check") + " " + esc(t("done")) + " · " + esc(t("undoDone")) : esc(t("markDone"))}</button>
      <div class="btnrow"><button class="btn ghost block" data-newnote="${esc(L(l.title))}">${ic("pen")} ${esc(t("addNote"))}</button></div>
    </div>${lessonNav(id)}`;
  }
  /* Vorherige/nächste Lektion innerhalb der Reihe (Bibel bzw. Kurs) */
  function lessonSeq(id) { const l = ALL_LESSONS[id]; return l.kind === "bible" ? BIBLE_LESSONS.map(x => x.id) : THEOLOGY.filter(x => x.course === l.course).map(x => x.id); }
  function lessonNav(id) {
    const seq = lessonSeq(id); const i = seq.indexOf(id); const p = seq[i - 1], n = seq[i + 1];
    if (!p && !n) return "";
    const it = (lid, label, back) => `<li><a class="item" href="#lesson-${lid}">${back ? `<span class="chev">${ic("chev", "flip")}</span>` : ""}<span class="grow"><span class="s">${esc(label)}</span><span class="t">${E(ALL_LESSONS[lid].title)}</span></span>${back ? "" : `<span class="chev">${ic("chev")}</span>`}</a></li>`;
    return `<ul class="list lnav">${p ? it(p, t("prevLesson"), true) : ""}${n ? it(n, t("nextLessonL"), false) : ""}</ul>`;
  }
  function viewLesson(id) {
    const l = ALL_LESSONS[id]; if (!l) return `<p>${esc(t("notFound"))}</p>`;
    if (S.lastLesson !== id) { S.lastLesson = id; save(); }
    return l.kind === "bible" ? viewBibleLesson(l) : viewTheoLesson(l);
  }
  function viewBibleLesson(l) {
    let n = 0; const sec = (title, body, tag) => `<section class="card sec"><h3><span class="num">${++n}</span>${esc(title)}</h3>${tag ? tagBadge(tag) : ""}${body}</section>`;
    return `<div class="eyebrow">${esc(t("lesson"))} · ${E(l.ref)}</div><h1>${E(l.title)}</h1>
      ${sec(t("secIntro"), `<p>${E(l.intro)}</p>`, l.introTag)}
      ${sec(t("secContext"), `<p>${E(l.context)}</p>`)}
      ${sec(t("secReading"), refList(l.reading, l.id) + `<p class="small muted" style="margin-top:8px">${E(BIBLE.readingNote)}</p>`)}
      ${sec(t("secSummary"), `<p>${E(l.summary)}</p>`)}
      ${sec(t("secInterp"), `<div class="simple"><div class="eyebrow">${esc(t("simple"))}</div><p>${E(l.interp.simple)}</p></div>
          <details><summary>${esc(t("deeper"))}</summary><p>${E(l.interp.deeper)}</p></details>`, l.interp.tag)}
      ${sec(t("secChrist"), `<p>${E(l.christ)}</p>`)}
      ${sec(t("secLinks"), refList(l.links, l.id))}
      ${sec(t("secFathers"), `<p>${E(l.fathers)}</p><p class="small muted">${esc(t("quotesNote"))}</p>`, l.fathersTag)}
      ${sec(t("secQuestions"), questionsBlock(l.questions))}
      ${sec(t("secPractice"), `<p>${E(l.practice)}</p>`, "counsel")}
      ${sec(t("secReview"), `<p>${E(l.review)}</p>`)}
      ${doneBar(l.id)}`;
  }
  function viewTheoLesson(l) {
    const course = COURSES.find(c => c.id === l.course);
    return `<div class="eyebrow">${esc(t(course.title))}</div><h1>${E(l.title)}</h1>
      ${l.sections.map(s => `<section class="card sec"><h3>${E(s.h)}</h3>${tagBadge(s.tag)}
        <div class="simple"><div class="eyebrow">${esc(t("simple"))}</div><p class="pre">${E(s.simple)}</p></div>
        <details><summary>${esc(t("deeper"))}</summary><p class="pre">${E(s.deeper)}</p></details></section>`).join("")}
      ${l.creed ? `<a class="item" href="#creed"><span class="grow"><span class="t">${esc(t("creed"))}</span></span><span class="chev">${ic("chev")}</span></a>` : ""}
      <section class="card sec"><h3>${esc(t("keyPoints"))}</h3><ul>${l.keyPoints.map(k => `<li>${E(k)}</li>`).join("")}</ul></section>
      ${l.bible && l.bible.length ? `<section class="card sec"><h3>${esc(t("secLinks"))}</h3>${refList(l.bible, l.id)}</section>` : ""}
      <section class="card sec"><h3>${esc(t("practice"))}</h3>${tagBadge("counsel")}<p>${E(l.practice)}</p></section>
      <section class="card sec"><h3>${esc(t("openQuestions"))}</h3>${questionsBlock(l.questions)}</section>
      <section class="card sec"><h3>${esc(t("secSources"))}</h3><p class="small">${E(l.sources)}</p><p class="small muted">${esc(t("quotesNote"))}</p></section>
      ${doneBar(l.id)}`;
  }
  function toggleDone(id) {
    if (S.done[id]) delete S.done[id]; else { S.done[id] = today(); markActivity(); }
    save(); render();
  }

  /* ---------- Theologie ---------- */
  function viewTheology() {
    const CI = { A: "theology", P: "scroll", D: "cross", L: "chalice", M: "candle" };
    const ci = c => { const ls = THEOLOGY.filter(l => l.course === c.id); const d = ls.filter(l => S.done[l.id]).length;
      return navItem("course-" + c.id, CI[c.id] || "theology", t(c.title), L(c.desc) + " · " + d + "/" + ls.length); };
    const byId = id => COURSES.find(c => c.id === id);
    return `<h1>${esc(t("theologyTitle"))}</h1><p class="muted">${esc(t("theologyIntro"))}</p>
      <div class="sh">${esc(t("gLearn"))}</div><ul class="list">
        ${ci(byId("A"))}${navItem("saints", "library", t("courseB"), FATHERS.length + " " + t("fathers"))}${navItem("saints", "saints", t("courseC"), SAINTS.length + " " + t("saints"))}${COURSES.filter(c => c.id !== "A").map(ci).join("")}
      </ul>
      <div class="sh">${esc(t("gFaith"))}</div><ul class="list">
        ${navItem("feasts", "calendar", t("gfTitle"))}${navItem("creed", "text", t("creed"))}${navItem("gallery", "frame", t("galTitle"), String(galleryItems().length))}${navItem("iconquiz", "check", t("iqTitle"))}${navItem("icons", "frame", t("iconsTitle"), String(ICONS_LEX.length))}${navItem("liturgy", "chalice", t("litTitle"))}${navItem("glossary", "list", t("glossary"), t("glossaryIntro"))}
      </ul>
      <div class="card legend"><h3>${esc(t("legendTitle"))}</h3>${["dogma", "history", "opinion", "counsel", "uncertain"].map(tagBadge).join("")}</div>`;
  }
  function viewCourse(cid) {
    const c = COURSES.find(x => x.id === cid); if (!c) return `<p>${esc(t("notFound"))}</p>`;
    const ls = THEOLOGY.filter(l => l.course === cid);
    return `<h1>${esc(t(c.title))}</h1><p class="muted">${E(c.desc)}</p>
      ${cid === "M" ? `<div class="card notice"><p class="small" style="margin:0">${esc(t("myIntro"))}</p></div>` : ""}
      <ul class="list">${ls.map((l, i) => lessonItem(l, i + 1)).join("")}</ul>
      ${cid === "L" ? `<a class="item" href="#liturgy"><span class="grow"><span class="t">${esc(t("litTitle"))}</span></span><span class="chev">${ic("chev")}</span></a>` : ""}
      ${cid === "L" ? `<a class="item" href="#calendar"><span class="grow"><span class="t">${esc(t("calTitle"))}</span></span><span class="chev">${ic("chev")}</span></a>` : ""}
      ${cid === "P" ? `<a class="item" href="#person-s-paisios"><span class="grow"><span class="t">${E(PEOPLE["s-paisios"].name)}</span><span class="s">${esc(t("saints"))}</span></span><span class="chev">${ic("chev")}</span></a>` : ""}`;
  }
  function viewCreed() {
    return `<div class="eyebrow">${esc(t("courseD"))}</div><h1>${esc(t("creed"))}</h1>
      <div class="card"><p class="creed">${E(CREED)}</p></div>
      <div class="card"><h3>${esc(t("translationNote"))}</h3><p class="small">${E(THEOLOGY.find(l => l.id === "dg-creed").sources)}</p></div>
      <a class="item" href="#lesson-dg-creed"><span class="grow"><span class="t">${E(ALL_LESSONS["dg-creed"].title)}</span></span><span class="chev">${ic("chev")}</span></a>`;
  }

  /* ---------- Quiz ---------- */
  function quizSrc(id) { return ALL_LESSONS[id] || PEOPLE[id] || OV_BY_ID[id]; }
  function quizTitle(l) { return l.title || l.name; }
  function backHref(id) { return ALL_LESSONS[id] ? "#lesson-" + id : (OV_BY_ID[id] ? "#book-" + OV_BY_ID[id].book : "#person-" + id); }
  let QZ = null;
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function viewQuiz(id) {
    const l = quizSrc(id); if (!l || !l.quiz) return `<p>${esc(t("notFound"))}</p>`;
    if (!QZ || QZ.id !== id) QZ = { id, i: 0, score: 0, answered: null, order: l.quiz.map(q => shuffle(q.options.map((o, k) => k))) };
    if (QZ.i >= l.quiz.length) {
      const pct = Math.round(QZ.score / l.quiz.length * 100);
      return `<div class="eyebrow">${esc(t("quiz"))}</div><h1>${esc(t("quizResult"))}</h1><div class="card hero center">
          <div class="ring" style="--p:${pct}"><span><b>${QZ.score}</b><small>${esc(t("of"))} ${l.quiz.length}</small></span></div>
          <h3 style="margin-top:14px">${E(quizTitle(l))}</h3><p class="small muted" style="margin:0">${esc(t("quizGentle"))}</p></div>
        <a class="btn block" href="${backHref(id)}">${esc(t("back"))}</a><div class="btnrow"><button class="btn ghost block" id="qzagain">${esc(t("quizAgain"))}</button></div>`;
    }
    const q = l.quiz[QZ.i]; const ord = QZ.order[QZ.i];
    return `<div class="eyebrow">${esc(t("quiz"))} · ${QZ.i + 1}/${l.quiz.length}</div><h1 style="font-size:1.4em">${E(q.q)}</h1>
      <div class="progressbar" style="margin-bottom:12px"><i style="width:${Math.round(QZ.i / l.quiz.length * 100)}%"></i></div>
      <div>${ord.map(k => {
        let cls = "";
        if (QZ.answered != null) { if (k === q.correct) cls = "correct"; else if (k === QZ.answered) cls = "wrong"; }
        return `<button class="opt ${cls}" data-opt="${k}" ${QZ.answered != null ? "disabled" : ""}>${E(q.options[k])}</button>`;
      }).join("")}</div>
      ${QZ.answered != null ? `<div class="card" role="status"><b>${esc(QZ.answered === q.correct ? t("correct") : t("wrong"))}</b>
        ${QZ.answered !== q.correct ? `<p>${esc(t("correctAnswer"))}: ${E(q.options[q.correct])}</p>` : ""}
        <button class="btn block" id="qznext">${esc(QZ.i + 1 < l.quiz.length ? t("nextQuestion") : t("finish"))}</button></div>` : ""}`;
  }
  function bindQuiz(r) {
    const id = r.slice(5); const l = quizSrc(id); if (!l) return;
    app.querySelectorAll("[data-opt]").forEach(b => b.onclick = () => {
      if (QZ.answered != null) return;
      QZ.answered = +b.getAttribute("data-opt");
      if (QZ.answered === l.quiz[QZ.i].correct) QZ.score++;
      render();
    });
    const nx = document.getElementById("qznext");
    if (nx) nx.onclick = () => {
      QZ.i++; QZ.answered = null;
      if (QZ.i >= l.quiz.length) {
        const prev = S.quiz[id] || { best: 0, attempts: 0, wrong: 0 };
        const wrong = l.quiz.length - QZ.score;
        S.quiz[id] = { best: Math.max(prev.best, QZ.score), last: QZ.score, total: l.quiz.length, attempts: prev.attempts + 1, wrong };
        markActivity(); save();
      }
      render();
    };
    const ag = document.getElementById("qzagain"); if (ag) ag.onclick = () => { QZ = null; render(); };
  }

  /* ---------- Heilige ---------- */
  function initialOf(p) { const n = L(p.name).replace(/^(Hl\.|Свети|Света|Sveti|Sveta|Преподобни|Prepodobni)\s+/, "").replace(/^(Großmärtyrer|König|Fürst|великомученик|краљ|кнез|velikomučenik|kralj|knez|владика|vladika)\s+/, ""); return n.charAt(0); }
  function personThumb(p) {
    const m = SAINT_IMGS[p.id];
    if (!m) return `<span class="medal">${esc(initialOf(p))}</span>`;
    return `<span class="medal photo" data-initial="${esc(initialOf(p))}"><img src="img/thumbs/${m.icon || p.id}.jpg" alt="" loading="lazy" decoding="async"></span>`;
  }
  function bindSaints() {
    app.querySelectorAll(".medal.photo img").forEach(im => { im.onerror = () => { const m = im.parentNode; m.classList.remove("photo"); m.textContent = m.dataset.initial; }; });
  }
  function viewSaints() {
    const item = p => `<li><a class="item" href="#person-${p.id}">${personThumb(p)}<span class="grow"><span class="t">${E(p.name)}</span><span class="s">${E(p.lived)} · ${esc(t("feast"))}: ${E(p.feast)}</span></span><span class="chev">${ic("chev")}</span></a></li>`;
    return `<h1>${esc(t("saintsTitle"))}</h1>
      <h2>${esc(t("courseB"))}</h2><ul class="list">${FATHERS.map(item).join("")}</ul>
      <h2>${esc(t("courseC"))}</h2><ul class="list">${SAINTS.map(item).join("")}</ul>
      <p class="small muted">${esc(t("feastNote"))}</p>`;
  }
  function linkList(keys) {
    return keys.map(k => LINKS[k]).filter(Boolean).map(x => `<div class="refline"><span class="grow"><a href="${esc(x.url)}" target="_blank" rel="noopener">${E(x.label)}</a></span></div>`).join("");
  }
  function personFigure(id, p) {
    const m = SAINT_IMGS[id]; if (!m) return "";
    const ic = m.icon ? ICON_BY_ID[m.icon] : null;
    const file = ic ? ic.img.file : m.file, credit = ic ? ic.img.credit : m.credit;
    const src = `img/icons/${ic ? ic.id : id}.jpg`, page = "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(file);
    return `<div class="card"><figure class="iconimg" style="margin:0"><img src="${src}" alt="${esc(L(p.name))}" loading="lazy" decoding="async">
      <figcaption class="small muted">${E(credit)} · ${esc(t("iconPd"))} · <a href="${page}" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a></figcaption></figure></div>`;
  }
  function viewPerson(id) {
    const p = PEOPLE[id]; if (!p) return `<p>${esc(t("notFound"))}</p>`;
    const block = (h, body, tag) => body ? `<section class="card sec"><h3>${esc(h)}</h3>${tag ? tagBadge(tag) : ""}${body}</section>` : "";
    const read = (p.read && p.read.length) ? linkList(p.read) + `<p class="small muted">${esc(t("linkCheckNote"))}</p>` : `<p>${(p.readNote ? E(p.readNote) : esc(t("noFreeText")))}</p>`;
    let html = `<div class="eyebrow">${esc(p.kind === "father" ? t("fathers") : t("saints"))}</div><h1>${E(p.name)}</h1>
      <div class="card"><div class="refline"><b>${esc(t("lived"))}</b><span class="grow">${E(p.lived)}</span></div><div class="refline"><b>${esc(t("feast"))}</b><span class="grow">${E(p.feast)}</span></div></div>${personFigure(id, p)}`;
    if (p.kind === "father") {
      html += block(t("qWho"), `<p>${E(p.who)}</p>`) + block(t("qWhen"), `<p>${E(p.when)}</p>`, "history") + block(t("qTaught"), `<p>${E(p.taught)}</p>`, "dogma")
        + block(t("qWorks"), `<p>${E(p.works)}</p>`, "history") + block(t("qMeaning"), `<p>${E(p.meaning)}</p>`) + block(t("qBible"), `<p>${E(p.bible)}</p>`)
        + block(t("qRead"), read) + block(t("qQuotes"), `<p>${esc(t("quotesNote"))}</p>`);
      if (p.questions) html += block(t("openQuestions"), questionsBlock(p.questions));
      if (p.quiz) html += `<div class="card"><a class="btn block" href="#quiz-${id}">${esc(t("startQuiz"))} (${p.quiz.length})</a></div>`;
    } else {
      html += block(t("qWhen"), `<p>${E(p.life)}</p>`, "history") + block(t("qTaught"), `<p>${E(p.teaching)}</p>`, p.tag || "counsel")
        + (p.meaning ? block(t("qMeaning"), `<p>${E(p.meaning)}</p>`) : "")
        + (p.course ? `<a class="item" href="#course-${p.course}"><span class="grow"><span class="t">${esc(t("coursePaisios"))}</span></span><span class="chev">${ic("chev")}</span></a>` : "")
        + block(t("qRead"), read) + block(t("qQuotes"), `<p>${esc(t("quotesNote"))}</p>`);
      if (p.questions) html += block(t("openQuestions"), questionsBlock(p.questions));
      if (p.quiz) html += `<div class="card"><a class="btn block" href="#quiz-${id}">${esc(t("startQuiz"))} (${p.quiz.length})</a></div>`;
    }
    return html;
  }

  /* ---------- Bücher ---------- */
  let bookCat = "all";
  function viewBooks() {
    const lv = { 1: "levelEasy", 2: "levelMid", 3: "levelHard" };
    const list = BOOKS.filter(b => bookCat === "all" || b.cat === bookCat);
    return `<h1>${esc(t("booksTitle"))}</h1><p class="muted">${esc(t("booksIntro"))}</p>
      <div class="chips" role="group" aria-label="${esc(t("allCategories"))}"><button class="chip ${bookCat === "all" ? "on" : ""}" data-cat="all">${esc(t("allCategories"))}</button>
        ${BOOK_CATEGORIES.map(c => `<button class="chip ${bookCat === c.id ? "on" : ""}" data-cat="${c.id}">${E(c.name)}</button>`).join("")}</div>
      <input type="search" id="bookq" placeholder="${esc(t("bookSearch"))}" aria-label="${esc(t("bookSearch"))}" style="margin-bottom:12px">
      ${list.map(b => { const ln = b.link ? LINKS[b.link] : null; const cat = BOOK_CATEGORIES.find(c => c.id === b.cat);
        return `<div class="card bookcard" data-q="${esc(norm(L(b.title) + " " + L(b.author) + " " + L(b.desc)))}"><div class="eyebrow">${E(cat.name)}</div><h3>${E(b.title)}</h3>
        <p class="small"><b>${esc(t("author"))}:</b> ${E(b.author)}<br><b>${esc(t("language"))}:</b> ${E(b.lang)}<br><b>${esc(t("level"))}:</b> ${esc(t(lv[b.level]))}</p>
        <p>${E(b.desc)}</p>
        <span class="badge ${b.full ? "tag-counsel" : "tag-uncertain"}">${esc(b.full ? t("fullText") : t("summaryOnly"))}</span>
        ${ln ? `<div class="btnrow"><a class="btn ghost" href="${esc(ln.url)}" target="_blank" rel="noopener">${esc(t("openSource"))} ↗</a></div>` : ""}</div>`; }).join("")}
      <p class="muted" id="booknone" hidden>${esc(t("glossNone"))}</p>
      <p class="small muted">${esc(t("booksEdNote"))}</p>
      <p class="small muted">${esc(t("linkCheckNote"))}</p>`;
  }

  /* ---------- Lernkarten (verteilte Wiederholung) ---------- */
  let deckSel = "all";
  function cardState(id) { return S.cards[id]; }
  function dueCards(includeNew) {
    const d = today();
    const due = CARDS.filter(c => (deckSel === "all" || c.deck === deckSel) && cardState(c.id) && cardState(c.id).due <= d);
    if (!includeNew) {
      const room = newRoom();
      const fresh = CARDS.filter(c => (deckSel === "all" || c.deck === deckSel) && !cardState(c.id)).slice(0, room);
      return due.concat(fresh);
    }
    return due;
  }
  function newRoom() { const d = today(); if (S.newToday.date !== d) return S.newPerDay; return Math.max(0, S.newPerDay - S.newToday.n); }
  function rateCard(id, r) {
    const d = today();
    let s = S.cards[id];
    if (!s) { s = { ef: 2.5, int: 0, reps: 0, lapses: 0, due: d }; if (S.newToday.date !== d) S.newToday = { date: d, n: 0 }; S.newToday.n++; }
    if (r === 0) { s.reps = 0; s.int = 0; s.lapses++; s.ef = Math.max(1.3, s.ef - 0.2); s.due = d; }
    else if (r === 1) { s.int = s.reps === 0 ? 1 : Math.max(1, Math.round(s.int * 1.2)); s.ef = Math.max(1.3, s.ef - 0.15); s.reps++; s.due = addDays(d, s.int); }
    else if (r === 2) { s.int = s.reps === 0 ? 1 : (s.reps === 1 ? 3 : Math.round(s.int * s.ef)); s.reps++; s.due = addDays(d, s.int); }
    else { s.int = s.reps === 0 ? 3 : Math.round(Math.max(1, s.int) * s.ef * 1.3); s.ef += 0.15; s.reps++; s.due = addDays(d, s.int); }
    S.cards[id] = s; markActivity(); save();
  }
  function viewCards() {
    const inDeck = c => deckSel === "all" || c.deck === deckSel;
    const all = CARDS.filter(inDeck); const due = all.filter(c => cardState(c.id) && cardState(c.id).due <= today()).length;
    const nw = all.filter(c => !cardState(c.id)).length;
    return `<h1>${esc(t("cardsTitle"))}</h1><p class="muted">${esc(t("cardsIntro"))}</p>
      <div class="chips"><button class="chip ${deckSel === "all" ? "on" : ""}" data-deck="all">${esc(t("allDecks"))}</button>
        ${DECKS.map(d => `<button class="chip ${deckSel === d.id ? "on" : ""}" data-deck="${d.id}">${E(d.name)}</button>`).join("")}</div>
      <div class="grid2"><div class="card stat"><b>${due}</b><span class="small muted">${esc(t("dueToday"))}</span></div>
        <div class="card stat"><b>${Math.min(nw, newRoom())}</b><span class="small muted">${esc(t("newCards"))} (${nw} ${esc(t("total"))})</span></div></div>
      <a class="btn block" href="#review" id="startrev">${esc(t("startReview"))}</a>
      <div class="btnrow"><button class="btn ghost block" id="practiceall">${esc(t("practiceAll"))}</button></div>`;
  }
  let RV = null;
  function viewReview() {
    if (!RV) RV = { queue: dueCards(false).map(c => c.id), flipped: false, n: 0, free: false };
    if (!RV.queue.length) {
      const msg = RV.n ? `<div class="card hero stat"><b>${RV.n}</b><p>${esc(t("sessionDone"))}</p></div>` : `<div class="card"><p>${esc(t("noCardsDue"))}</p></div>`;
      return `<h1>${esc(t("cardsTitle"))}</h1>${msg}<div class="btnrow"><a class="btn" href="#cards" id="revback">${esc(t("back"))}</a><button class="btn ghost" id="practiceall">${esc(t("practiceAll"))}</button></div>`;
    }
    const c = CARDS.find(x => x.id === RV.queue[0]); const deck = DECKS.find(d => d.id === c.deck);
    return `<div class="eyebrow">${E(deck.name)} · ${RV.queue.length}</div>
      <div class="flash ${RV.flipped ? "flipped" : ""}" id="flash"><div class="inner" role="button" tabindex="0" aria-label="${esc(t("tapToFlip"))}">
        <div class="face front"><div class="main">${E(c.front)}</div><p class="small muted" style="margin-top:14px">${esc(t("tapToFlip"))}</p></div>
        <div class="face back"><div class="q">${E(c.front)}</div><div>${E(c.back)}</div></div></div></div>
      ${RV.flipped ? `<div class="rate"><button class="r0" data-rate="0">${esc(t("again"))}</button><button data-rate="1">${esc(t("hard"))}</button><button data-rate="2">${esc(t("good"))}</button><button class="r3" data-rate="3">${esc(t("easy"))}</button></div>` : `<button class="btn block" id="flipbtn">${esc(t("showAnswer"))}</button>`}`;
  }
  function bindReview() {
    const f = document.getElementById("flash");
    const flip = () => { RV.flipped = true; render(); };
    if (f) { f.onclick = flip; f.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } }; }
    const fb = document.getElementById("flipbtn"); if (fb) fb.onclick = flip;
    app.querySelectorAll("[data-rate]").forEach(b => b.onclick = () => {
      const r = +b.getAttribute("data-rate"); const id = RV.queue.shift();
      if (!RV.free) rateCard(id, r); else markActivity();
      if (r === 0) RV.queue.push(id);
      RV.n++; RV.flipped = false; render();
    });
    const rb = document.getElementById("revback"); if (rb) rb.onclick = () => { RV = null; };
    const pa = document.getElementById("practiceall"); if (pa) pa.onclick = () => { RV = { queue: shuffle(CARDS.filter(c => deckSel === "all" || c.deck === deckSel).map(c => c.id)), flipped: false, n: 0, free: true }; go("review"); };
  }

  /* ---------- Fortschritt ---------- */
  function viewProgress() {
    const total = Object.keys(ALL_LESSONS).length; const done = Object.keys(S.done).filter(k => ALL_LESSONS[k]).length;
    const learned = Object.values(S.cards).filter(s => s.reps >= 2).length;
    const qs = Object.values(S.quiz); const avg = qs.length ? Math.round(qs.reduce((a, q) => a + q.last / q.total, 0) / qs.length * 100) : 0;
    const difficult = Object.entries(S.quiz).filter(([, q]) => q.last / q.total < 0.75).map(([id]) => id).filter(id => quizSrc(id));
    const hardCards = CARDS.filter(c => S.cards[c.id] && S.cards[c.id].lapses >= 2);
    return `<h1>${esc(t("progressTitle"))}</h1>
      <div class="grid2">
        <div class="card stat"><b>${done}/${total}</b><span class="small muted">${esc(t("lessonsDone"))}</span></div>
        <div class="card stat"><b>${learned}/${CARDS.length}</b><span class="small muted">${esc(t("cardsLearned"))}</span></div>
        <div class="card stat"><b>${avg}%</b><span class="small muted">${esc(t("quizAvg"))}</span></div>
        <div class="card stat"><b>${weekDays().filter(x => x.on).length}/7</b><span class="small muted">${esc(t("weekTitle"))}</span></div>
      </div>
      <div class="card"><h3>${esc(t("lessonsThisWeek"))}: ${lessonsThisWeek()} / ${S.lessonsPerWeek}</h3>
        <div class="progressbar"><i style="width:${Math.min(100, Math.round(lessonsThisWeek() / S.lessonsPerWeek * 100))}%"></i></div></div>
      <div class="card"><h3>${esc(t("difficultTopics"))}</h3>
        ${difficult.length || hardCards.length ? `<ul class="list">${difficult.map(id => `<li><a class="item" href="${backHref(id)}"><span class="grow"><span class="t">${E(quizTitle(quizSrc(id)))}</span><span class="s">${esc(t("quiz"))}: ${S.quiz[id].last}/${S.quiz[id].total}</span></span><span class="chev">${ic("chev")}</span></a></li>`).join("")}
          ${hardCards.map(c => `<li class="refline"><span class="grow">${E(c.front)}</span><span class="small muted">${esc(t("cardsTitle"))}</span></li>`).join("")}</ul>` : `<p class="muted">${esc(t("noDifficult"))}</p>`}
      </div>
      <a class="item" href="#notes"><span class="grow"><span class="t">${esc(t("notebook"))}</span><span class="s">${esc(t("savedVerses"))}: ${S.verses.length}</span></span><span class="chev">${ic("chev")}</span></a>`;
  }

  /* ---------- Notizbuch (optional verschlüsselt mit AES-GCM) ---------- */
  const enc = new TextEncoder(), dec = new TextDecoder();
  const b64 = buf => btoa(String.fromCharCode.apply(null, new Uint8Array(buf)));
  const unb64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  async function deriveKey(pw, salt) {
    const base = await crypto.subtle.importKey("raw", enc.encode(pw), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: 200000, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  }
  async function encryptNotes(notes) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, encKey, enc.encode(JSON.stringify(notes)));
    S.enc.iv = b64(iv); S.enc.ct = b64(ct);
  }
  async function decryptNotes(pw) {
    const key = await deriveKey(pw, unb64(S.enc.salt));
    const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(S.enc.iv) }, key, unb64(S.enc.ct));
    encKey = key; return JSON.parse(dec.decode(pt));
  }
  function notesList() { return S.enc ? unlockedNotes : S.notes; }
  async function persistNotes(list) {
    if (S.enc) { unlockedNotes = list; await encryptNotes(list); } else S.notes = list;
    save();
  }
  function viewNotes() {
    const verses = S.verses.length ? `<div class="card"><h3>${esc(t("savedVerses"))}</h3>${S.verses.map(v => `<div class="refline"><b>${esc(v.ref)}</b><span class="grow small muted">${ALL_LESSONS[v.lid] ? E(ALL_LESSONS[v.lid].title) : ""}</span><button class="star on" data-verse="${esc(v.ref)}" data-lid="${esc(v.lid)}" aria-label="${esc(t("delete"))}">${starIc(true)}</button></div>`).join("")}</div>` : "";
    if (S.enc && !unlockedNotes) {
      return `<h1>${esc(t("notebook"))}</h1><div class="card"><p class="okline">${ic("lock", "gold")} ${esc(t("notesLocked"))}</p>
        <label for="pw">${esc(t("password"))}</label><input type="password" id="pw" autocomplete="current-password">
        <div class="btnrow"><button class="btn" id="unlock">${esc(t("unlock"))}</button></div><p class="small" id="pwerr" role="alert"></p></div>${verses}`;
    }
    const list = notesList().slice().sort((a, b) => b.date.localeCompare(a.date));
    return `<h1>${esc(t("notebook"))}</h1>
      <div class="btnrow" style="margin-bottom:12px"><button class="btn" data-newnote="">${ic("plus")} ${esc(t("newNote"))}</button>${S.enc ? `<button class="btn ghost" id="lock">${ic("lock")} ${esc(t("lock"))}</button>` : ""}</div>
      ${list.length ? list.map(n => `<div class="card"><div class="eyebrow">${esc(n.date)}</div><h3>${esc(n.title || "—")}</h3><p class="pre">${esc(n.body)}</p>
        <div class="btnrow"><button class="btn ghost" data-edit="${n.id}">${esc(t("edit"))}</button><button class="btn danger" data-del="${n.id}">${esc(t("delete"))}</button></div></div>`).join("") : `<p class="muted">${esc(t("noNotes"))}</p>`}
      ${verses}
      ${list.length || S.verses.length ? `<button class="btn ghost block" id="notesexp">${ic("note")} ${esc(t("notesExport"))}</button><textarea id="expbox" rows="6" readonly hidden style="margin-top:10px"></textarea><div style="height:12px"></div>` : ""}
      <p class="small muted">${esc(S.enc ? t("encActive") : t("encInactive"))} ${esc(t("privacyText"))}</p>`;
  }
  /* Notizen und gespeicherte Bibelstellen als einfachen Text ausgeben (Teilen-Menü des iPhones oder Zwischenablage) */
  function notesText() {
    const list = notesList().slice().sort((a, b) => b.date.localeCompare(a.date));
    let out = "OrthodoxPath – " + t("notebook") + "\n\n";
    list.forEach(n => { out += n.date + " – " + (n.title || "—") + "\n" + (n.body || "") + "\n\n"; });
    if (S.verses.length) out += t("savedVerses") + ":\n" + S.verses.map(v => "• " + v.ref + (ALL_LESSONS[v.lid] ? " (" + L(ALL_LESSONS[v.lid].title) + ")" : "")).join("\n") + "\n";
    return out;
  }
  function bindNotes() {
    const ub = document.getElementById("unlock");
    if (ub) {
      const doUnlock = async () => {
        try { unlockedNotes = await decryptNotes(document.getElementById("pw").value); render(); }
        catch (e) { document.getElementById("pwerr").textContent = t("wrongPassword"); }
      };
      ub.onclick = doUnlock; document.getElementById("pw").onkeydown = e => { if (e.key === "Enter") doUnlock(); };
    }
    const lk = document.getElementById("lock"); if (lk) lk.onclick = () => { unlockedNotes = null; encKey = null; render(); };
    const ex = document.getElementById("notesexp");
    if (ex) ex.onclick = async () => {
      const txt = notesText();
      try { if (navigator.share) { await navigator.share({ title: "OrthodoxPath", text: txt }); return; } } catch (e) { if (e && e.name === "AbortError") return; }
      try { await navigator.clipboard.writeText(txt); toast(t("notesExported")); }
      catch (e) { const box = document.getElementById("expbox"); box.hidden = false; box.value = txt; box.focus(); box.select(); }
    };
    app.querySelectorAll("[data-edit]").forEach(b => b.onclick = () => openNoteEditor(b.getAttribute("data-edit")));
    app.querySelectorAll("[data-del]").forEach(b => b.onclick = () => confirmBox(t("confirmDelete"), async () => {
      await persistNotes(notesList().filter(n => n.id !== b.getAttribute("data-del"))); render();
    }));
  }
  function openNoteEditor(id, presetTitle) {
    if (S.enc && !unlockedNotes) { go("notes"); return; }
    const n = id ? notesList().find(x => x.id === id) : { title: presetTitle || "", body: "" };
    sheet(`<h3>${esc(id ? t("edit") : t("newNote"))}</h3>
      <label for="nt">${esc(t("noteTitle"))}</label><input type="text" id="nt" value="${esc(n.title)}">
      <label for="nb">${esc(t("noteBody"))}</label><textarea id="nb" rows="8">${esc(n.body)}</textarea>
      <div class="btnrow"><button class="btn" id="nsave">${esc(t("save"))}</button><button class="btn ghost" id="ncancel">${esc(t("cancel"))}</button></div>`,
      (el, close) => {
        el.querySelector("#ncancel").onclick = close;
        el.querySelector("#nsave").onclick = async () => {
          const title = el.querySelector("#nt").value.trim(), body = el.querySelector("#nb").value;
          let list = notesList().slice();
          if (id) list = list.map(x => x.id === id ? Object.assign({}, x, { title, body, date: today() }) : x);
          else list.push({ id: "n" + Date.now().toString(36), title, body, date: today() });
          await persistNotes(list); close(); toast(t("save")); if (route() === "notes") render();
        };
      });
  }

  /* ---------- Glossar ---------- */
  function viewGlossary() {
    const items = GLOSSARY.map(g => ({ term: isSr() ? L({ de: g[1], sr: g[2] }) : g[1], def: isSr() ? L({ de: g[3], sr: g[4] }) : g[3] }))
      .sort((a, b) => a.term.localeCompare(b.term, lang() === "de" ? "de" : "sr"));
    return `<h1>${esc(t("glossary"))}</h1><p class="muted">${esc(t("glossaryIntro"))}</p>
      <input type="search" id="glossq" placeholder="${esc(t("glossSearch"))}" aria-label="${esc(t("glossSearch"))}" style="margin-bottom:4px">
      ${(() => { const groups = []; items.forEach(i => { const k = i.term.charAt(0).toUpperCase(); let g = groups.find(x => x.k === k); if (!g) groups.push(g = { k, list: [] }); g.list.push(i); });
        return groups.map(g => `<div class="glgroup"><div class="sh">${esc(g.k)}</div><ul class="list">${g.list.map(i => `<li class="glo" data-q="${esc(norm(i.term + " " + i.def))}"><span class="gt">${esc(i.term)}</span><span class="gd">${esc(i.def)}</span></li>`).join("")}</ul></div>`).join(""); })()}
      <p class="muted" id="glossnone" hidden>${esc(t("glossNone"))}</p>`;
  }
  function bindGlossary() {
    const q = document.getElementById("glossq"); if (!q) return;
    q.oninput = () => { const v = norm(q.value.trim()); let any = false;
      app.querySelectorAll(".glgroup").forEach(g => { let n = 0; g.querySelectorAll(".glo").forEach(li => { const ok = !v || li.getAttribute("data-q").includes(v); li.hidden = !ok; if (ok) n++; }); g.hidden = !n; if (n) any = true; });
      document.getElementById("glossnone").hidden = any; };
  }

  /* ---------- Fragenhilfe (regelbasierte Suche, keine KI) ---------- */
  function norm(s) {
    return translit(String(s).toLowerCase()).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "dj").replace(/[^a-z0-9äöüß ]/g, " ");
  }
  function searchIndex() {
    const idx = [];
    const both = o => (o && typeof o === "object") ? (o.de || "") + " " + (o.sr || "") : "";
    GLOSSARY.forEach(g => idx.push({ type: "glossary", title: { de: g[1], sr: g[2] }, text: { de: g[3], sr: g[4] }, hay: norm(g.join(" ")), href: "#glossary" }));
    Object.values(ALL_LESSONS).forEach(l => {
      const parts = [both(l.title), both(l.summary), both(l.intro)];
      (l.sections || []).forEach(s => parts.push(both(s.h), both(s.simple)));
      (l.keyPoints || []).forEach(k => parts.push(both(k)));
      idx.push({ type: "lesson", title: l.title, text: l.ref || (l.sections && l.sections[0].h), hay: norm(parts.join(" ")), href: "#lesson-" + l.id });
    });
    ICONS_LEX.forEach(i => idx.push({ type: "icon", title: i.name, text: { de: "", sr: "" }, hay: norm([both(i.name), both(i.look), both(i.mean)].join(" ")), href: "#icons-" + i.id }));
    OVERVIEWS.forEach(o => idx.push({ type: "book", title: o.title, text: { de: o.keys[0].ref.de, sr: o.keys[0].ref.sr }, hay: norm([both(o.title), both(o.about), both(o.christ)].join(" ")), href: "#book-" + o.book }));
    Object.values(PEOPLE).forEach(p => idx.push({ type: "person", title: p.name, text: p.lived, hay: norm([both(p.name), both(p.who), both(p.taught), both(p.life), both(p.teaching)].join(" ")), href: "#person-" + p.id }));
    return idx;
  }
  let IDX = null; let lastQuery = "";
  function runSearch(q) {
    IDX = IDX || searchIndex();
    const toks = norm(q).split(/\s+/).filter(w => w.length > 2);
    if (!toks.length) return [];
    return IDX.map(e => {
      let sc = 0; const ht = norm((e.title.de || "") + " " + (e.title.sr || ""));
      toks.forEach(w => { const stem = w.length > 5 ? w.slice(0, w.length - 2) : w; if (e.hay.includes(stem)) sc += 1; if (ht.includes(stem)) sc += 2; });
      return { e, sc };
    }).filter(x => x.sc > 0).sort((a, b) => b.sc - a.sc).slice(0, 10).map(x => x.e);
  }
  function viewAsk() {
    const res = lastQuery ? runSearch(lastQuery) : null;
    const nq = lastQuery ? norm(lastQuery) : "";
    const crisis = /suizid|selbstmord|umbringen|nicht mehr leben|samoubist|ubiti se|ubijem se/.test(nq);
    const priest = /beicht|sunde|priester|geistlich|ispovest|ispoved|greh|svestenik|duhovnik|pricest/.test(nq);
    return `<h1>${esc(t("askTitle"))}</h1><p class="muted">${esc(t("askHint"))}</p>
      <div class="card"><form id="askform"><label for="q" class="sr-only">${esc(t("search"))}</label>
        <input type="search" id="q" placeholder="${esc(t("askPlaceholder"))}" value="${esc(lastQuery)}" enterkeyhint="search">
        <div class="btnrow"><button class="btn" type="submit">${esc(t("search"))}</button></div></form>
        <p class="small muted" style="margin-top:10px">${esc(t("askNotAi"))}</p></div>
      ${crisis ? `<div class="banner" role="alert">${esc(t("askCrisis"))}</div>` : ""}
      ${priest ? `<div class="card"><p class="small" style="margin:0">${ic("cross", "gold")} ${esc(t("askPriest"))}</p></div>` : ""}
      ${res ? (res.length ? `<h3>${esc(t("results"))}</h3><ul class="list">${res.map(e => `<li><a class="item" href="${e.href}"><span class="grow"><span class="t">${E(e.title)}</span><span class="s">${E(e.text)}</span></span><span class="chev">${ic("chev")}</span></a></li>`).join("")}</ul>`
        : `<div class="card"><p>${esc(t("askNoResult"))}</p></div>`) + `<button class="btn ghost block" data-newnote="${esc(lastQuery)}">${ic("pen")} ${esc(t("askSaveNote"))}</button>` : ""}`;
  }
  function bindAsk() {
    const f = document.getElementById("askform");
    if (f) f.onsubmit = e => { e.preventDefault(); lastQuery = document.getElementById("q").value.trim(); render(); };
  }

  /* ---------- Mehr ---------- */
  function bindMore() {
    const b = document.getElementById("updcheck"); if (!b) return;
    b.onclick = async () => {
      b.disabled = true; b.textContent = t("updRunning");
      try {
        /* Programm-Zwischenspeicher leeren (Bilder und Daten bleiben), dann neu laden – holt die neueste Version */
        if (window.caches) { const ks = await caches.keys(); await Promise.all(ks.filter(k => !k.includes("-img-")).map(k => caches.delete(k))); }
        if (window.__OP_SW) await window.__OP_SW.update().catch(() => { });
      } catch (e) { }
      location.reload();
    };
  }
  function viewMore() {
    return `<h1>${esc(t("navMore"))}</h1>
      <div class="sh">${esc(t("gFaith"))}</div><ul class="list">
        ${navItem("prayers", "candle", t("prayersTitle"))}${navItem("calendar", "calendar", t("calTitle"))}${navItem("slava", "candle", t("slavaTitle"), t("slavaSub"))}${navItem("lent", "cross", t("lentTitle"), t("lentSub"))}${navItem("feasts", "cross", t("gfTitle"))}${navItem("liturgy", "chalice", t("litTitle"))}${navItem("gallery", "frame", t("galTitle"))}${navItem("icons", "frame", t("iconsTitle"))}
      </ul>
      <div class="sh">${esc(t("gLearn"))}</div><ul class="list">
        ${navItem("marks", "star", t("marksTitle"), S.marks.length + S.prayerFavs.length ? String(S.marks.length + S.prayerFavs.length) : "")}${navItem("books", "library", t("navBooks"), t("booksIntro"))}${navItem("glossary", "text", t("glossary"))}${navItem("ask", "search", t("askTitle"))}
      </ul>
      <div class="sh">${esc(t("gPersonal"))}</div><ul class="list">
        ${navItem("progress", "chart", t("navProgress"))}${navItem("notes", "note", t("notebook"))}
      </ul>
      <div class="sh">${esc(t("gApp"))}</div><ul class="list">
        ${navItem("prefs", "gear", t("navSettings"))}
      </ul>
      <div class="card"><h3>${esc(t("sAbout"))}</h3><p class="small muted" style="margin:0">${esc(t("aboutText"))}</p><p class="small muted" style="margin:8px 0 0">Version ${esc(window.OP_VERSION || "")}</p>${window.OP_PWA ? `<button class="btn ghost" id="updcheck" style="margin-top:10px">${esc(t("updCheck"))}</button>` : ""}</div>`;
  }

  /* ---------- Einstellungen ---------- */
  function viewPrefs() {
    const seg = (name, opts, cur) => `<div class="seg" data-seg="${name}">${opts.map(([v, label]) => `<button data-v="${v}" class="${String(cur) === String(v) ? "on" : ""}">${esc(label)}</button>`).join("")}</div>`;
    return `<h1>${esc(t("settingsTitle"))}</h1>
      <div class="card"><h3>${esc(t("sLanguage"))}</h3>${seg("lang", [["de", "Deutsch"], ["sr-cyr", "Ћирилица"], ["sr-lat", "Latinica"]], lang())}</div>
      <div class="card"><h3>${esc(t("calSetting"))}</h3>${seg("calendar", [["julian", t("calJulian")], ["revised", t("calRevised")]], cal())}<p class="small muted" style="margin-top:8px">${esc(t("calSettingHelp"))}</p></div>
      <div class="card"><h3>${esc(t("sTheme"))}</h3>${seg("theme", [["dark", t("themeDark")], ["light", t("themeLight")]], S.theme)}
        <h3 style="margin-top:14px">${esc(t("sFont"))}</h3>${seg("font", [["0.9", "A−"], ["1", "A"], ["1.15", "A+"], ["1.3", "A++"], ["1.5", "A+++"]], S.font)}
        <h3 style="margin-top:14px">${esc(t("readTitle"))}</h3><p class="small muted">${esc(t("readHint"))}</p>${seg("readMode", [["false", t("off")], ["true", t("on")]], String(!!S.readMode))}</div>
      <div class="card"><h3>${esc(t("dremTitle"))}</h3><p class="small muted">${esc(t("dremHint"))}</p>
        <label for="remtime">${esc(t("dremTime"))}</label><select id="remtime">${["06:00", "06:30", "07:00", "07:30", "08:00", "12:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map(x => `<option ${x === S.remindTime ? "selected" : ""}>${x}</option>`).join("")}</select>
        <button class="btn block" id="remics" style="margin-top:10px">${ic("calendar")} ${esc(t("dremAdd"))}</button></div>
      <div class="card"><h3>${esc(t("sPace"))}</h3><label>${esc(t("sCardsPerDay"))}</label>${seg("newPerDay", [[5, "5"], [10, "10"], [20, "20"], [40, "40"]], S.newPerDay)}
        <label>${esc(t("sLessonsPerWeek"))}</label>${seg("lessonsPerWeek", [[1, "1"], [3, "3"], [5, "5"], [7, "7"]], S.lessonsPerWeek)}</div>
      <div class="card"><h3>${esc(t("sPrivacy"))}</h3><p class="small">${esc(t("privacyText"))}</p>
        <p><b>${esc(S.enc ? t("encActive") : t("encInactive"))}</b></p>
        ${S.enc ? `<button class="btn ghost" id="encoff">${esc(t("encOff"))}</button>` : `<label for="p1">${esc(t("password"))}</label><input type="password" id="p1" autocomplete="new-password"><label for="p2">${esc(t("password"))} (2×)</label><input type="password" id="p2" autocomplete="new-password"><div class="btnrow"><button class="btn" id="encon">${esc(t("encOn"))}</button></div>`}
        <p class="small muted">${esc(t("encWarn"))}</p><p class="small" id="encmsg" role="alert"></p></div>
      <div class="card"><h3>${esc(t("remTitle"))}</h3><p class="small">${esc(t("remText"))}</p>
        <ol class="steps">${["remS1", "remS2", "remS3", "remS4"].map(k => `<li>${esc(t(k))}</li>`).join("")}</ol>
        <button class="btn ghost block" id="copylink">${ic("bell")} ${esc(t("remCopy"))}</button>
        <input type="text" id="linkbox" readonly hidden style="margin-top:8px">
        <p class="small muted" style="margin:8px 0 0">${esc(t("remNote"))}</p></div>
      <div class="card"><h3>${esc(t("sBackup"))}</h3><p class="small">${esc(t("backupText"))}</p>
        <p class="small"><b>${esc(t("lastBackupL"))}:</b> ${esc(S.lastBackup || t("never"))}</p>
        <button class="btn block" id="fileb">${ic("note")} ${esc(t("fileBackup"))}</button>
        <label class="btn ghost block" for="importfile" style="margin-top:10px">${esc(t("fileImport"))}</label><input type="file" id="importfile" accept=".json,application/json,text/plain" class="sr-only">
        <label style="margin-top:14px">${esc(t("backupRemindL"))}</label>${seg("backupRemind", [["on", t("on")], ["off", t("off")]], S.backupRemind || "on")}
        <div style="height:12px"></div>
        <button class="btn ghost block" id="copyb">${esc(t("copyBackup"))}</button>
        <textarea id="backupbox" rows="4" readonly hidden></textarea>
        <label for="importbox">${esc(t("importBackup"))}</label><textarea id="importbox" rows="3"></textarea>
        <div class="btnrow"><button class="btn ghost" id="importb">${esc(t("importNow"))}</button></div></div>
      <div class="card"><h3>${esc(t("sAbout"))}</h3><p class="small">${esc(t("aboutText"))}</p><p class="small">${esc(t("disclaimer"))}</p>
        <p class="small muted">${esc(lang() === "de" ? t("deTranslationNote") : t("srTranslationNote"))}</p>
        <button class="btn danger" id="reset">${esc(t("resetAll"))}</button></div>`;
  }
  /* Sicherung: Text erzeugen, einlesen, Zeitpunkt merken */
  function backupText() { const copy = Object.assign({}, S); if (S.enc) copy.notes = []; return JSON.stringify({ app: "OrthodoxPath", v: 1, date: today(), data: copy }); }
  function markBackup() { S.lastBackup = today(); save(); }
  function importBackup(text) {
    try {
      const obj = JSON.parse(text);
      if (!obj || obj.app !== "OrthodoxPath" || !obj.data || typeof obj.data !== "object") throw new Error("format");
      /* Nur bekannte Felder mit passendem Typ übernehmen (Schutz vor beschädigten oder fremden Dateien) */
      const kind = v => v === null ? "null" : Array.isArray(v) ? "array" : typeof v;
      const base = JSON.parse(JSON.stringify(DEFAULT)); const d = obj.data;
      Object.keys(base).forEach(k => { if (!(k in d)) return; const kb = kind(base[k]), kd = kind(d[k]);
        if (kb === kd || (base[k] === null && ["string", "object", "number"].includes(kd)) || (k === "enc" && (kd === "object" || kd === "null"))) base[k] = d[k]; });
      base.lastBackup = today();
      S = base; unlockedNotes = null; encKey = null; save(); toast(t("importOk")); render();
    } catch (e) { toast(t("importFail")); }
  }
  function hasData() { return Object.keys(S.done).length >= 2 || (S.notes && S.notes.length) || S.enc || S.verses.length || Object.keys(S.cards).length >= 10; }
  function daysSince(iso) { if (!iso) return 9999; return Math.round((new Date(today() + "T12:00:00") - new Date(iso + "T12:00:00")) / 86400000); }
  function homeNotices() {
    let h = "";
    const standalone = (window.navigator.standalone === true) || (window.matchMedia && matchMedia("(display-mode: standalone)").matches);
    if (window.OP_PWA && !standalone && !S.a2hsDismissed && /iPhone|iPad|iPod/.test(navigator.userAgent))
      h += `<div class="card notice"><h3>${esc(t("a2Title"))}</h3><p class="small">${esc(t("a2Text"))}</p><button class="btn ghost block" id="a2ok">${esc(t("a2Ok"))}</button></div>`;
    if (S.backupRemind !== "off" && hasData() && daysSince(S.lastBackup) > 30 && daysSince(S.backupAsk) > 30)
      h += `<div class="card notice"><h3>${esc(t("bkTitle"))}</h3><p class="small">${esc(t("bkText"))}</p><div class="btnrow"><a class="btn" href="#prefs" id="bknow">${esc(t("bkNow"))}</a><button class="btn ghost" id="bklater">${esc(t("later"))}</button></div></div>`;
    return h;
  }
  function bindPrefs() {
    const rt = document.getElementById("remtime"); if (rt) rt.onchange = () => { S.remindTime = rt.value; save(); };
    const ri = document.getElementById("remics"); if (ri) ri.onclick = () => saveIcs(reminderIcs(S.remindTime), "orthodoxpath-erinnerung.ics");
    const cl = document.getElementById("copylink");
    if (cl) cl.onclick = async () => {
      const url = location.href.split("#")[0] + "#prayers"; const box = document.getElementById("linkbox");
      try { await navigator.clipboard.writeText(url); toast(t("remCopied")); }
      catch (e) { box.hidden = false; box.value = url; box.focus(); box.select(); }
    };
    app.querySelectorAll("[data-seg]").forEach(sg => sg.querySelectorAll("button").forEach(b => b.onclick = () => {
      const name = sg.getAttribute("data-seg"); let v = b.getAttribute("data-v");
      if (["font"].includes(name)) v = parseFloat(v); if (["newPerDay", "lessonsPerWeek"].includes(name)) v = parseInt(v, 10);
      if (name === "readMode") v = v === "true";
      S[name] = v; save(); IDX = null; render();
    }));
    const msg = m => { const el = document.getElementById("encmsg"); if (el) el.textContent = m; };
    const on = document.getElementById("encon");
    if (on) on.onclick = async () => {
      const p1 = document.getElementById("p1").value, p2 = document.getElementById("p2").value;
      if (!p1 || p1 !== p2) { msg(t("wrongPassword")); return; }
      if (!window.crypto || !crypto.subtle) { msg(t("error")); return; }
      const salt = crypto.getRandomValues(new Uint8Array(16));
      encKey = await deriveKey(p1, salt);
      const plain = S.notes.slice();
      S.enc = { salt: b64(salt) }; unlockedNotes = plain; await encryptNotes(plain); S.notes = []; save(); render();
    };
    const off = document.getElementById("encoff");
    if (off) off.onclick = () => {
      if (!unlockedNotes) { go("notes"); return; }
      S.notes = unlockedNotes; S.enc = null; unlockedNotes = null; encKey = null; save(); render();
    };
    document.getElementById("fileb").onclick = async () => {
      const text = backupText(); const name = "orthodoxpath-sicherung-" + today() + ".json";
      try {
        const file = new File([text], name, { type: "application/json" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: "OrthodoxPath" }); markBackup(); return; }
      } catch (e) { if (e && e.name === "AbortError") return; }
      const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([text], { type: "application/json" })); a.download = name;
      document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000); markBackup();
    };
    document.getElementById("importfile").onchange = e => {
      const f = e.target.files && e.target.files[0]; if (!f) return;
      const r = new FileReader(); r.onload = () => importBackup(String(r.result)); r.onerror = () => toast(t("importFail")); r.readAsText(f);
    };
    document.getElementById("copyb").onclick = async () => {
      const text = backupText(); markBackup();
      const box = document.getElementById("backupbox"); box.value = text; box.hidden = false;
      try { await navigator.clipboard.writeText(text); toast(t("copied")); }
      catch (e) { box.focus(); box.select(); toast(t("copyFailed")); }
    };
    document.getElementById("importb").onclick = () => {
      try {
        importBackup(document.getElementById("importbox").value);
      } catch (e) { toast(t("importFail")); }
    };
    document.getElementById("reset").onclick = () => confirmBox(t("confirmDelete"), () => {
      try { localStorage.removeItem(KEY); } catch (e) { }
      S = JSON.parse(JSON.stringify(DEFAULT)); unlockedNotes = null; encKey = null; QZ = null; RV = null; location.hash = "home"; render();
    });
  }

  function bindCards() {
    app.querySelectorAll("[data-deck]").forEach(b => b.onclick = () => { deckSel = b.getAttribute("data-deck"); RV = null; render(); });
    const sr = document.getElementById("startrev"); if (sr) sr.onclick = () => { RV = null; };
    const pa = document.getElementById("practiceall"); if (pa) pa.onclick = () => { RV = { queue: shuffle(CARDS.filter(c => deckSel === "all" || c.deck === deckSel).map(c => c.id)), flipped: false, n: 0, free: true }; go("review"); };
  }
  function bindBible() { app.querySelectorAll("[data-bview]").forEach(b => b.onclick = () => { S.bibleView = b.getAttribute("data-bview"); save(); render(); }); }
  function bindLesson(r) { const b = document.getElementById("donebtn"); if (b) b.onclick = () => toggleDone(r.slice(7)); }
  function bindBooks() {
    app.querySelectorAll("[data-cat]").forEach(b => b.onclick = () => { bookCat = b.getAttribute("data-cat"); render(); });
    const q = document.getElementById("bookq");
    if (q) q.oninput = () => { const v = norm(q.value.trim()); let n = 0;
      app.querySelectorAll(".bookcard").forEach(c => { const ok = !v || c.getAttribute("data-q").includes(v); c.hidden = !ok; if (ok) n++; });
      document.getElementById("booknone").hidden = n > 0; };
  }

  function bindHome() {
    const a2 = document.getElementById("a2ok"); if (a2) a2.onclick = () => { S.a2hsDismissed = true; save(); render(); };
    const bl = document.getElementById("bklater"); if (bl) bl.onclick = () => { S.backupAsk = today(); save(); render(); };
    const bn = document.getElementById("bknow"); if (bn) bn.addEventListener("click", () => { S.backupAsk = today(); save(); }); const b = document.getElementById("prayedbtn"); if (b) b.onclick = () => { S.prayed = S.prayed || []; const d = today(); const i = S.prayed.indexOf(d); if (i >= 0) S.prayed.splice(i, 1); else { S.prayed.push(d); S.prayed = S.prayed.slice(-400); } save(); render(); }; }
  const BINDERS = { plan: bindPlan, home: bindHome, calendar: bindCalendar, prayers: bindPrayers, prayercat: bindPrayers, lesson: bindLesson, quiz: bindQuiz, review: bindReview, cards: bindCards, notes: bindNotes, prefs: bindPrefs, ask: bindAsk, books: bindBooks, glossary: bindGlossary, bible: bindBible, feast: bindFeast, icons: bindIcons, more: bindMore, person: bindIconImgs, saints: bindSaints, gallery: bindGallery, iconquiz: bindIconQuiz, read: bindRead, nt: bindNT, rope: bindRope, slava: bindSlava, confess: bindConfess };

  /* Test-Schnittstelle (nur lesend + Reset), wird von automatischen Tests genutzt */
  window.__OP = { icsFor: f => icsFor(f), get state() { return JSON.parse(JSON.stringify(S)); }, translit, CARDS, ALL_LESSONS, runSearch: q => runSearch(q).map(e => e.href) };

  /* PWA: Service Worker nur in der eigenständigen Version */
  /* Dauerhaften Speicher anfragen (wo der Browser es unterstützt) */
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => { }); } catch (e) { }
  if (window.OP_PWA && "serviceWorker" in navigator) {
    try {
      /* Updates zuverlässig holen: sw.js nie aus dem HTTP-Cache, bei jedem Start und beim Zurückkehren in die App prüfen.
         Übernimmt eine neue Version die Kontrolle, wird die Seite einmal neu geladen (nicht beim allerersten Installieren). */
      const hadController = !!navigator.serviceWorker.controller;
      let reloaded = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => { if (hadController && !reloaded) { reloaded = true; location.reload(); } });
      navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).then(reg => {
        window.__OP_SW = reg;
        const check = () => { try { reg.update().catch(() => { }); } catch (e) { } };
        check();
        document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") check(); });
      }).catch(() => { });
    } catch (e) { }
  }
  render();
})();
