// @flow
import * as React from 'react'
import NextHead from 'next/head'

type Props = {
	title: string
}

export const Head = ({ title }: Props) => (
	<NextHead>
		<title>{title}</title>
	</NextHead>
)
