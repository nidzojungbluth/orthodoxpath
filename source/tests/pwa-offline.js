const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  const p = await ctx.newPage();
  await p.goto("http://localhost:8765/");
  await p.waitForFunction(() => navigator.serviceWorker && navigator.serviceWorker.controller || new Promise(r => navigator.serviceWorker.ready.then(() => setTimeout(r, 500))), null, { timeout: 15000 }).catch(()=>{});
  await p.reload(); await p.waitForTimeout(800);
  const ctrl = await p.evaluate(() => !!navigator.serviceWorker.controller);
  await ctx.setOffline(true);
  await p.reload(); await p.waitForTimeout(800);
  const txt = await p.evaluate(() => document.body.innerText.slice(0, 80));
  const imgs = await p.evaluate(async () => { const names = ["trinity", "lazarus", "pokrov"]; let n = 0; for (const id of names) { const ok = await new Promise(r => { const i = new Image(); i.onload = () => r(i.naturalWidth > 100); i.onerror = () => r(false); i.src = "img/thumbs/" + id + ".jpg"; }); if (ok) n++; } return n + "/" + names.length; });
  await ctx.setOffline(false);
  await p.reload(); await p.waitForTimeout(600);
  if (await p.$("[data-lang=de]")) { await p.click("[data-lang=de]"); await p.click("#onbstart"); await p.waitForTimeout(300); }
  await p.evaluate(() => { location.hash = "more"; }); await p.waitForTimeout(400);
  const hasBtn = !!(await p.$("#updcheck"));
  if (hasBtn) { await Promise.all([p.waitForNavigation({ timeout: 15000 }).catch(() => {}), p.click("#updcheck")]); await p.waitForTimeout(1500); }
  const after = await p.evaluate(async () => ({ v: window.OP_VERSION, img: (await caches.keys()).some(k => k.includes("-img-")) }));
  console.log("Update-Knopf:", hasBtn, "| nach Neuladen Version:", after.v, "| Bilder-Speicher erhalten:", after.img);
  console.log("SW aktiv:", ctrl, "| offline geladen:", txt.includes("Deutsch") || txt.includes("OrthodoxPath"), "| Ikonenbilder offline:", imgs);
  await b.close();
})();
