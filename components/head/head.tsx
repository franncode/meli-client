import NextHead from 'next/head'

type Props = {
	title?: string
}

export const Head = ({ title = 'Mercado Libre' }: Props) => (
	<NextHead>
		<title>{title}</title>
	</NextHead>
)
