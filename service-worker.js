const numberOfMonths = quantity => 30 * 24 * 60 * 60 * quantity

if (workbox) {
	console.log(`Yay! Workbox is loaded 🎉`)
} else {
	console.log(`Boo! Workbox didn't load 😬`)
}

self.addEventListener('message', event => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting()
		self.clients.claim()
	}
})

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

const bgSyncPlugin = new workbox.backgroundSync.Plugin('send-data', {
	maxRetentionTime: 24 * 60
})

workbox.routing.registerRoute(/^http.*/, new workbox.strategies.NetworkOnly())

workbox.routing.registerRoute(
	/^https:\/\/fonts\.googleapis\.com/,
	new workbox.strategies.CacheFirst({
		cacheName: 'googleapis',
		cacheExpiration: {
			maxEntries: 30
		},
		cacheableResponse: { statuses: [0, 200] }
	})
)

workbox.routing.registerRoute(
	/^https:\/\/fonts\.gstatic\.com/,
	new workbox.strategies.CacheFirst({
		cacheName: 'gstatic',
		cacheExpiration: {
			maxEntries: 30
		},
		cacheableResponse: { statuses: [0, 200] }
	})
)

workbox.routing.registerRoute(
	/\.(?:js|css)$/,
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'static-resources'
	})
)

workbox.routing.registerRoute(
	/^https.*\.(?:png|gif|jpg|svg)$/,
	new workbox.strategies.CacheFirst({
		cacheName: 'images-cache',
		cacheExpiration: {
			maxAgeSeconds: numberOfMonths(12)
		}
	})
)

workbox.routing.registerRoute(
	/(https:\/\/)?(server-mercadolibre\.herokuapp\.com).*/,
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'api-data',
		cacheExpiration: {
			maxAgeSeconds: numberOfMonths(0.25)
		},
		cacheableResponse: { statuses: [0, 200, 201, 204] }
	})
)

workbox.routing.registerRoute(
	/^https.*/,
	new workbox.strategies.NetworkFirst({
		cacheName: 'general',
		cacheExpiration: {
			maxAgeSeconds: numberOfMonths(0.5)
		},
		cacheableResponse: { statuses: [0, 200, 201, 204] }
	})
)

workbox.routing.registerRoute(
	/\/api\/.*\/*.json/,
	new workbox.strategies.NetworkOnly({
		plugins: [bgSyncPlugin]
	}),
	'POST'
)
