const version = 'v1';
const cacheAssets = []
self.addEventListener('install', event => {

});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(versions => {
            return Promise.all(
                versions.map(cache => {
                    if (cache != version) {
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                const clone = response.clone();
                caches
                    .open(version)
                    .then(cache => {
                        cache.put(event.request, clone);
                    });
                return response;
            })
            .catch(() => caches.match(event.request).then(response => response))
    );
});