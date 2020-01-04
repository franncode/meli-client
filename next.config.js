const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')
const { join } = require('path')

const next_config = {
	target: 'serverless'
}

const withSass_config = {
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[local]___[hash:base64:5]'
	},
	postcssLoaderOptions: { autoprefixer: true }
}

const withOffline_config = {
	generateSw: false,
	workboxOpts: {
		swSrc: join(__dirname, 'service-worker.js')
	}
}

module.exports = withPlugins(
	[
		[withSass, withSass_config],
		[withOffline, withOffline_config]
	],
	next_config
)

// const withOffline_config = {
// workboxOpts: {
// 	swDest: 'static/service-worker.js',
// 	runtimeCaching: [
// 		{
// 			urlPattern: /^https:\/\/fonts\.googleapis\.com/,
// 			handler: 'CacheFirst'
// 		},
// 		{
// 			urlPattern: /^https:\/\/fonts\.gstatic\.com/,
// 			handler: 'CacheFirst'
// 		},
// 		{
// 			urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
// 			handler: 'CacheFirst'
// 		},
// 		{
// 			urlPattern: /\.(?:js|css)$/,
// 			handler: 'StaleWhileRevalidate'
// 		},
// 		{
// 			urlPattern: /^https?.*/,
// 			handler: 'NetworkFirst',
// 			options: {
// 				cacheName: 'https-calls',
// 				// networkTimeoutSeconds: 15,
// 				expiration: {
// 					maxEntries: 150,
// 					maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
// 				},
// 				cacheableResponse: {
// 					statuses: [0, 200]
// 				}
// 			}
// 		}
// 	]
// }
// }
