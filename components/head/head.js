import NextHead from 'next/head'

export const Head = ({ title = 'Mercado Libre' }) => (
	<NextHead>
		<title>{title}</title>
	</NextHead>
)
