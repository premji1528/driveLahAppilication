if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}})).then(e=>{const r=n(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-40ea1c29"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./index.html",revision:"e68796bb3d6ffc1534c799da48aa2962"},{url:"3.bundle.js",revision:"a4cbca60f704b4a63102e0327671f3ec"},{url:"main.bundle.js",revision:"6a0e1251286612a2d7ab4869a93cf566"},{url:"runtime~main.bundle.js",revision:"dbdb609dd15bbf8048d51c3637100856"},{url:"styles.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"vendors.bundle.js",revision:"2a45bc195f38bcc0d38868e0cb463b0c"},{url:"vendors.bundle.js.LICENSE.txt",revision:"c87e50d81cc7b5311525cc6fd5482ea5"}],{})}));
