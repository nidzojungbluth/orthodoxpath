/* Barrierefreiheits-Prüfung (WCAG 2 A/AA) mit axe-core über viele Ansichten, dunkel und hell.
   Voraussetzung: axe-core installiert (npm i axe-core) – Pfad über AXE_PATH oder require. */
const { chromium } = require('playwright'); const fs=require('fs'); const path=require('path');
let axePath; try { axePath = process.env.AXE_PATH || require.resolve('axe-core/axe.min.js'); } catch (e) { console.log('axe-core nicht installiert – Prüfung übersprungen'); process.exit(0); }
const axe = fs.readFileSync(axePath,'utf8');
const FILE = 'file://' + path.resolve(__dirname, '../dist/index.html');
(async()=>{ const b=await chromium.launch(); const p=await (await b.newContext({viewport:{width:390,height:844}})).newPage();
 await p.goto(FILE); await p.click('[data-lang=de]'); await p.click('#onbstart');
 const routes=['home','bible','lesson-bib-mk1','quiz-bib-mk1','prayers','calendar','saints','person-s-sava','theology','cards','review','notes','glossary','books','prefs','more','plans','ask'];
 const agg={};
 for (const theme of ['dark','light']) {
  await p.evaluate(th=>{const s=JSON.parse(localStorage.getItem('orthodoxpath_v1'));s.theme=th;localStorage.setItem('orthodoxpath_v1',JSON.stringify(s));},theme); await p.reload();
  for (const r of routes){ await p.goto(FILE+'#'+r); await p.waitForTimeout(350);
   await p.addScriptTag({content:axe});
   const res=await p.evaluate(async()=> (await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa']}})).violations.map(v=>({id:v.id,impact:v.impact,n:v.nodes.length,ex:v.nodes.slice(0,2).map(x=>x.target.join(' ')+' | '+(x.any[0]&&x.any[0].message||'').slice(0,90))})));
   res.forEach(v=>{const k=theme+':'+v.id; agg[k]=agg[k]||{impact:v.impact,n:0,routes:[],ex:v.ex}; agg[k].n+=v.n; agg[k].routes.push(r);});
  }}
 const n = Object.keys(agg).length; console.log(n ? JSON.stringify(agg,null,1).slice(0,6000) : 'Barrierefreiheit: keine Verstöße (WCAG 2 A/AA) in ' + routes.length + ' Ansichten × 2 Themen'); await b.close(); process.exit(n ? 1 : 0); })();
