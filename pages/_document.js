import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class customDocument extends Document {
	render() {
		return (
			<Html lang='es'>
				<Head>
					<style>
						{`
					#__next {
						flex: 1;
					}
					`}
					</style>
					<link
						rel='shortcut icon'
						type='image/png'
						href='/favicons/favicon.png'
					/>
					<link rel='manifest' href='/manifest.json' />
					<meta charSet='utf-8' />
					<meta name='copyright' content='Mercado Libre' />
					<meta
						name='author'
						content='Francisco Rodriguez, fjrodriguez.353@gmail.com'
					/>
					<meta
						name='description'
						content='Compra y vende lo que quieras cuando quieras'
					/>

					<meta property='og:title' content='Mercado Libre' />
					<meta property='og:url' content='https://www.mercadolibre.now.sh' />
					<meta property='og:type' content='website' />
					<meta property='og:site_name' content='Mercado Libre' />
					<meta property='og:description' content='Mercado Libre' />
					<meta
						name='viewport'
						content='width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0'
					/>
					<meta name='theme-color' content='#FFE600' />
					<link rel='apple-touch-icon' href='/favicons/appIcon192.png' />
					<meta name='apple-mobile-web-app-title' content='Mercado Libre' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='default'
					/>
					{/* content='black-translucent' */}
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<link
						href='/splash/apple_splash_750.png'
						sizes='750x1334'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splash/apple_splash_1125.png'
						sizes='1125x2436'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splash/apple_splash_1242.png'
						sizes='1242x2208'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splash/apple_splash_640.png'
						sizes='640x1136'
						rel='apple-touch-startup-image'
					/>
					<noscript>Your browser does not support JavaScript!</noscript>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
