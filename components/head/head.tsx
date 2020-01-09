import NextHead from 'next/head'
import { Fragment } from 'react'

type Props = {
	title?: string
	openGraph?:
		| {
				description: string
				picture: string
				link: string
		  }
		| false
}

export const Head = ({ title = 'Mercado Libre', openGraph = false }: Props) => (
	<NextHead>
		<title>{title}</title>
		{openGraph && (
			<Fragment>
				<meta name='description' content={openGraph.description} />
				<meta name='image' content={openGraph.picture} />
				<meta itemProp='name' content={title} />
				<meta itemProp='description' content={openGraph.description} />
				<meta itemProp='image' content={openGraph.picture} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={title} />
				<meta name='twitter:description' content={openGraph.description} />
				<meta name='twitter:site' content='@ML_Argentina' />
				<meta name='twitter:creator' content='@ML_Argentina' />
				<meta name='twitter:image:src' content={openGraph.picture} />
				<meta name='og:title' content={title} />
				<meta name='og:description' content={openGraph.description} />
				<meta name='og:image' content={openGraph.picture} />
				<meta name='og:url' content={openGraph.link} />
				<meta name='og:site_name' content={title} />
				<meta name='og:locale' content='es_AR' />
				<meta name='og:type' content='article' />
				<meta name='article:section' content='Social Media' />
				<meta name='article:author' content='Mercado Libre' />
				<meta name='article:tag' content='Social Media' />
			</Fragment>
		)}
	</NextHead>
)
