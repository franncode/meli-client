// @flow
import * as React from 'react'
import styles from './layout.scss'

type Props = {
	id: string,
	children: React.Node
}

export const Layout = ({ id = 'layout', children }: Props) => {
	return (
		<section id={id} className={styles.layout}>
			{children}
		</section>
	)
}
