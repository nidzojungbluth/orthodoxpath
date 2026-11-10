/* Baut zwei Varianten aus denselben Quellen:
   dist/index.html  – eine einzelne Datei (für das gehostete Artifact)
   pwa/             – installierbare PWA mit Manifest und Service Worker (für eigenes kostenloses Hosting) */
const fs = require("fs");
const path = require("path");
const R = p => fs.readFileSync(path.join(__dirname, p), "utf8");
const VERSION = "3.18.0";

/* Eingebettete Schrift (Cormorant Garamond, SIL Open Font License, siehe src/fonts/OFL.txt) – funktioniert offline und ohne externe Server */
const RANGES = {
  "cyrillic-ext": "U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F",
  "cyrillic": "U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116",
  "latin-ext": "U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF",
  "latin": "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"
};
const fontCss = [600, 700].map(w => Object.entries(RANGES).map(([sub, range]) => {
  const b64 = fs.readFileSync(path.join(__dirname, `src/fonts/cormorant-garamond-${sub}-${w}-normal.woff2`)).toString("base64");
  return `@font-face{font-family:"OP Serif";font-style:normal;font-weight:${w};font-display:swap;src:url(data:font/woff2;base64,${b64}) format("woff2");unicode-range:${range};}`;
}).join("\n")).join("\n");

const css = fontCss + "\n" + R("src/styles.css");
const js = ["src/i18n.js", "src/content/bible.js", "src/content/overviews.js", "src/content/theology.js", "src/content/saints.js", "src/content/saint-images.js", "src/content/library.js", "src/content/prayers.js", "src/content/plans.js", "src/content/liturgysteps.js", "src/content/icons.js", "src/content/feasts.js", "src/calendar.js", "src/app.js"]
  .map(f => `/* ${f} */\n` + R(f).replace(/if \(typeof module !== "undefined"\)[^\n]*\n?/g, "")).join("\n");

function page({ pwa }) {
  return `<!DOCTYPE html>
<html lang="de" data-theme="dark">
<head>
<meta charset="utf-8">
${pwa ? `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; worker-src 'self'; manifest-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'">` : ""}
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#0b0b0c">
<meta name="description" content="OrthodoxPath – zweisprachige orthodoxe Lernakademie (Deutsch/Serbisch)">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="OrthodoxPath">
${pwa ? '<link rel="manifest" href="manifest.webmanifest">\n<link rel="apple-touch-icon" href="icon-180.png">\n<link rel="icon" href="icon-192.png">' : ""}
<title>OrthodoxPath</title>
<style>${css}</style>
</head>
<body>
<div id="app"><noscript>OrthodoxPath benötigt JavaScript. · OrthodoxPath захтева JavaScript.</noscript></div>
<script>window.OP_PWA = ${pwa ? "true" : "false"}; window.OP_VERSION = "${VERSION}";</script>
<script>
${js}
</script>
</body>
</html>`;
}

fs.mkdirSync(path.join(__dirname, "dist"), { recursive: true });
fs.mkdirSync(path.join(__dirname, "pwa"), { recursive: true });
/* Bilder in beide Ausgaben kopieren: img/icons = groß (beim Ansehen gespeichert), img/thumbs = Vorschau (bei Installation gespeichert) */
const IMG_DIRS = ["icons", "thumbs"];
const ICON_IMGS = [];
for (const dir of IMG_DIRS) {
  const src = path.join(__dirname, "src/img", dir); if (!fs.existsSync(src)) continue;
  const files = fs.readdirSync(src).filter(f => f.endsWith(".jpg")).sort();
  if (dir === "thumbs") files.forEach(f => ICON_IMGS.push("./img/thumbs/" + f));
  for (const out of ["dist", "pwa"]) {
    const d = path.join(__dirname, out, "img", dir); fs.rmSync(d, { recursive: true, force: true }); fs.mkdirSync(d, { recursive: true });
    files.forEach(f => fs.copyFileSync(path.join(src, f), path.join(d, f)));
  }
}
fs.writeFileSync(path.join(__dirname, "dist/index.html"), page({ pwa: false }));
fs.writeFileSync(path.join(__dirname, "pwa/index.html"), page({ pwa: true }));
fs.writeFileSync(path.join(__dirname, "pwa/manifest.webmanifest"), JSON.stringify({
  name: "OrthodoxPath", short_name: "OrthodoxPath", start_url: "./", scope: "./", display: "standalone",
  background_color: "#0b0b0c", theme_color: "#0b0b0c", lang: "de",
  description: "Zweisprachige orthodoxe Lernakademie – Deutsch und Serbisch",
  icons: [{ src: "icon-192.png", sizes: "192x192", type: "image/png" }, { src: "icon-512.png", sizes: "512x512", type: "image/png" }]
}, null, 2));
fs.writeFileSync(path.join(__dirname, "pwa/sw.js"), `/* OrthodoxPath Service Worker – Offline-Zwischenspeicher */
const CACHE = "orthodoxpath-${VERSION}";
const IMG_CACHE = "orthodoxpath-img-v3"; /* Ikonenbilder der App, bleiben über Versionen erhalten */
const IMGS = ${JSON.stringify(ICON_IMGS)};
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(Promise.all([
  caches.open(CACHE).then(c => c.addAll(FILES)),
  caches.open(IMG_CACHE).then(c => Promise.all(IMGS.map(u => c.match(u).then(r => r || c.add(u).catch(() => {})))))
])); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== IMG_CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  if (["/img/icons/", "/img/thumbs/"].some(d => new URL(e.request.url).pathname.includes(d))) {
    e.respondWith(caches.open(IMG_CACHE).then(c => c.match(e.request).then(r => r || fetch(e.request).then(res => { if (res.ok) c.put(e.request, res.clone()); return res; }))));
    return;
  }
  /* Seitenaufruf: zuerst Netz (neueste Version), bei Funkloch nach 4 s oder offline aus dem Speicher */
  if (e.request.mode === "navigate") {
    e.respondWith(new Promise(resolve => {
      let done = false;
      const fromCache = () => caches.match("./index.html").then(r => r || caches.match("./"));
      const timer = setTimeout(() => fromCache().then(r => { if (r && !done) { done = true; resolve(r); } }), 4000);
      fetch(e.request, { cache: "no-store" }).then(res => {
        if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put("./index.html", cp)); }
        if (!done) { done = true; clearTimeout(timer); resolve(res); }
      }).catch(() => fromCache().then(r => { if (!done) { done = true; clearTimeout(timer); resolve(r || Response.error()); } }));
    }));
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
    if (res.ok && (new URL(e.request.url).origin === location.origin)) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); }
    return res;
  }).catch(() => caches.match("./index.html"))));
});
`);
console.log("built", fs.statSync(path.join(__dirname, "dist/index.html")).size, "bytes");
