/* OrthodoxPath Service Worker – Offline-Zwischenspeicher */
const CACHE = "orthodoxpath-3.16.0";
const IMG_CACHE = "orthodoxpath-img-v2"; /* Ikonenbilder der App, bleiben über Versionen erhalten */
const IMGS = ["./img/icons/anastasis.jpg","./img/icons/annunciation.jpg","./img/icons/archangels.jpg","./img/icons/ascension.jpg","./img/icons/chrysostom.jpg","./img/icons/crucifixion.jpg","./img/icons/deesis.jpg","./img/icons/desert-fathers.jpg","./img/icons/don.jpg","./img/icons/dormition.jpg","./img/icons/eleousa.jpg","./img/icons/elijah.jpg","./img/icons/entombment.jpg","./img/icons/entry.jpg","./img/icons/exaltation.jpg","./img/icons/george.jpg","./img/icons/hodigitria.jpg","./img/icons/iconostasis.jpg","./img/icons/john-baptist.jpg","./img/icons/lazarus.jpg","./img/icons/mandylion.jpg","./img/icons/meeting.jpg","./img/icons/nativity-theotokos.jpg","./img/icons/nativity.jpg","./img/icons/nicholas.jpg","./img/icons/pantokrator.jpg","./img/icons/paul.jpg","./img/icons/pentecost.jpg","./img/icons/platytera.jpg","./img/icons/pokrov.jpg","./img/icons/presentation-theotokos.jpg","./img/icons/saviour-powers.jpg","./img/icons/sign-miracle.jpg","./img/icons/theophany.jpg","./img/icons/thomas.jpg","./img/icons/transfiguration.jpg","./img/icons/trinity.jpg"];
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(Promise.all([
  caches.open(CACHE).then(c => c.addAll(FILES)),
  caches.open(IMG_CACHE).then(c => Promise.all(IMGS.map(u => c.match(u).then(r => r || c.add(u).catch(() => {})))))
])); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== IMG_CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  if (new URL(e.request.url).pathname.includes("/img/icons/")) {
    e.respondWith(caches.open(IMG_CACHE).then(c => c.match(e.request).then(r => r || fetch(e.request).then(res => { if (res.ok) c.put(e.request, res.clone()); return res; }))));
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
    if (res.ok && (new URL(e.request.url).origin === location.origin)) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); }
    return res;
  }).catch(() => caches.match("./index.html"))));
});
