/* OrthodoxPath Service Worker – Offline-Zwischenspeicher */
const CACHE = "orthodoxpath-3.20.0";
const IMG_CACHE = "orthodoxpath-img-v3"; /* Ikonenbilder der App, bleiben über Versionen erhalten */
const IMGS = ["./img/thumbs/anastasis.jpg","./img/thumbs/annunciation.jpg","./img/thumbs/archangels.jpg","./img/thumbs/ascension.jpg","./img/thumbs/chrysostom.jpg","./img/thumbs/crucifixion.jpg","./img/thumbs/deesis.jpg","./img/thumbs/desert-fathers.jpg","./img/thumbs/don.jpg","./img/thumbs/dormition.jpg","./img/thumbs/eleousa.jpg","./img/thumbs/elijah.jpg","./img/thumbs/entombment.jpg","./img/thumbs/entry.jpg","./img/thumbs/exaltation.jpg","./img/thumbs/f-athanasius.jpg","./img/thumbs/f-basil.jpg","./img/thumbs/f-cyril.jpg","./img/thumbs/f-damascus.jpg","./img/thumbs/f-ephrem.jpg","./img/thumbs/f-gregnaz.jpg","./img/thumbs/f-gregnys.jpg","./img/thumbs/f-maximus.jpg","./img/thumbs/george.jpg","./img/thumbs/hodigitria.jpg","./img/thumbs/iconostasis.jpg","./img/thumbs/john-baptist.jpg","./img/thumbs/lazarus.jpg","./img/thumbs/mandylion.jpg","./img/thumbs/meeting.jpg","./img/thumbs/nativity-theotokos.jpg","./img/thumbs/nativity.jpg","./img/thumbs/nicholas.jpg","./img/thumbs/pantokrator.jpg","./img/thumbs/paul.jpg","./img/thumbs/pentecost.jpg","./img/thumbs/platytera.jpg","./img/thumbs/pokrov.jpg","./img/thumbs/presentation-theotokos.jpg","./img/thumbs/s-andrew.jpg","./img/thumbs/s-antony.jpg","./img/thumbs/s-arsenije.jpg","./img/thumbs/s-catherine.jpg","./img/thumbs/s-demetrios.jpg","./img/thumbs/s-ignatius.jpg","./img/thumbs/s-kronstadt.jpg","./img/thumbs/s-lazar.jpg","./img/thumbs/s-maryegypt.jpg","./img/thumbs/s-nikolaj.jpg","./img/thumbs/s-petka.jpg","./img/thumbs/s-prokopije.jpg","./img/thumbs/s-rila.jpg","./img/thumbs/s-sava.jpg","./img/thumbs/s-seraphim.jpg","./img/thumbs/s-simeon.jpg","./img/thumbs/s-spyridon.jpg","./img/thumbs/s-stefan.jpg","./img/thumbs/s-vasilije.jpg","./img/thumbs/saviour-powers.jpg","./img/thumbs/sign-miracle.jpg","./img/thumbs/theophany.jpg","./img/thumbs/thomas.jpg","./img/thumbs/transfiguration.jpg","./img/thumbs/trinity.jpg"];
const FILES = ["./", "./index.html", "./app-3.20.0.js", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];
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
