const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')
const { join } = require('path')

const next_config = {
	target: 'serverless',
	env: {
		api: 'https://api.tuv.ross.com.ar/api/'
	}
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
		swSrc: join(__dirname, 'service-worker.js'),
		swDest: 'static/service-worker.js'
	}
}

module.exports = withPlugins(
	[
		[withOffline, withOffline_config],
		[withSass, withSass_config]
	],
	next_config
)
