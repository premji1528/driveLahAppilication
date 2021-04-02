/**
     * <h5>Summary of registerServiceWorker: </h5>
     * In production, we register a service worker to serve assets from local cache.

     * This lets the app load faster on subsequent visits in production, and gives
     * it offline capabilities. However, it also means that developers (and users)
     * will only see deployed updates on the "N+1" visit to a page, since previously
     * cached resources are updated in the background.

     * To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
     * This link also includes instructions on opting out of this behavior.
*/
export default function register() {
  console.log('register', process.env.PUBLIC_URL)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `http://localhost:8080/service-worker.js`;
      navigator.serviceWorker
        .register(swUrl, {})
        .then(registration => {
          console.log('registration State Changed', registration);
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            installingWorker.onstatechange = () => {
              console.log('installingWorker State Changed', installingWorker);
              console.log('installingWorker State', installingWorker.state);
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // At this point, the old content will have been purged and
                  // the fresh content will have been added to the cache.
                  // It's the perfect time to display a "New content is
                  // available; please refresh." message in your web app.
                  console.log('New content is available; please refresh.');
                  // window.location.reload(true);
                }
                if (installingWorker.state === 'waiting') {
                  // This assumes there's a button with id='skip-waiting-button' that
                  // users should click to get the new SW to activate immediately.
                  setTimeout(() => {
                    installingWorker.postMessage('skipWaiting');
                  }, 1000);
                  // Assume that 'display' is 'none' initially.
                } else {
                  // At this point, everything has been precached.
                  // It's the perfect time to display a
                  // "Content is cached for offline use." message.
                  console.log('Content is cached for offline use.');
                  unregister();
                }
              }
            };
          };
        })
        .catch(error => {
          console.error('Error during service worker registration:', error);
        });

      ServiceWorkerRegistration.onupdatefound = function () {
        console.log('update found')
      };
    });
  }
}

// In your service worker:
window.self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    window.self.skipWaiting();
  }
});

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}