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
  console.log("SW aktiv:", ctrl, "| offline geladen:", txt.includes("Deutsch") || txt.includes("OrthodoxPath"));
  await b.close();
})();
