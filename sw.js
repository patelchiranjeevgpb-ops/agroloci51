const CACHE="agroloci51-v3-2";
const CORE=["./","./index.html","./manifest.webmanifest","./assets/logo.png","./assets/icon-192.png","./assets/icon-512.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener("activate",e=>{e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))]))});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(u.pathname.endsWith(".css")||u.pathname.endsWith(".js")||u.pathname.endsWith("index.html")||u.pathname.endsWith("/agroloci51/")){e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match(e.request)));return}e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
