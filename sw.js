
const fileToCache = 'pwa-cache';
const assets = [
    '/',
    '/index.html',
    '/index.css',
    'js/app.js',
    'images/avatar.png',
    'https://fonts.googleapis.com/css?family=Dosis:400,500,600,700&display=swap'
]

// install service worker
self.addEventListener('install', evt => {

    evt.waitUntil(caches.open(fileToCache).then(cache => {
        console.log('caching shell assets')
        cache.addAll(assets)
        .catch(err => {
            console.log('Error adding files to cache', err);
        })
    })
  ); 
  console.log('service worker has been installed');
  self.skipWaiting(); 
 
});

// activate service worker
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
});


// fetch event 
self.addEventListener('fetch', evt => {
   //console.log('fetch event', evt)
   evt.respondWith(
       caches.match(evt.request).then(cacheRes => {
           return cacheRes || fetch(evt.request);
       })
   )
})





























