const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')
const { join } = require('path')

const next_config = {
	target: 'serverless',
	env: {
		api: 'https://server-mercadolibre.herokuapp.com/api/'
	}
}

const withSass_config = {
	cssModules: true,
	cssLoaderOptions: {
		localIdentName: '[local]___[hash:base64:5]'
	}
}

const withOffline_config = {
	generateSw: false,
	workboxOpts: {
		swSrc: join(__dirname, 'service-worker.js'),
		swDest: 'static/service-worker.js'
	}
}

module.exports = withPlugins(
	[
		[withOptimizedImages, {}],
		[withSass, withSass_config],
		[withOffline, withOffline_config]
	],
	next_config
)
