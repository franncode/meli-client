// @flow
import React, { type Node, useState } from 'react'
import { Head } from '../head/head'
import { SearchBar } from '../searchBar/searchBar'
import styles from './layout.scss'

type Props = {
	id: string,
	children: Node
}

export const Layout = ({ id = 'layout', children }: Props) => {
	const [searchText, setSearchText] = useState('')

	return (
		<section id={id} className={styles.layout}>
			<Head />
			<SearchBar value={searchText} onChange={setSearchText} />
			<p>{searchText}</p>
			{children}
		</section>
	)
}
