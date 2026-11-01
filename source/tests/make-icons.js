const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  for (const n of [180, 192, 512]) {
    await p.setViewportSize({ width: n, height: n });
    await p.setContent(`<html><body style="margin:0;background:#12100e;display:flex;align-items:center;justify-content:center;width:${n}px;height:${n}px">
      <svg width="${n*0.5}" height="${n*0.64}" viewBox="0 0 22 28"><g fill="none" stroke="#c9a45c" stroke-width="2" stroke-linecap="round"><path d="M11 1v26"/><path d="M6 5h10"/><path d="M2 11h18"/><path d="M6 21l10 -3"/></g></svg></body></html>`);
    await p.screenshot({ path: `pwa/icon-${n}.png` });
  }
  await b.close();
})();
