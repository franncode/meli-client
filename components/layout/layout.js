// @flow
import React, { type Node, useState, useEffect } from 'react'
// $FlowFixMe
import { useRouter } from 'next/router'
import { Head } from '../head/head'
import { SearchBar } from '../searchBar/searchBar'
import styles from './layout.scss'

type Props = {
	id: string,
	children: Node
}

export const Layout = ({ id = 'layout', children }: Props) => {
	const [searchText, setSearchText] = useState('')
	const router = useRouter()

	const handleSearch = e => {
		if (searchText !== '') {
			router.push(`/items?search=${searchText}`)
		}
	}

	console.log('searchText', searchText)
	return (
		<div id={id} className={styles.layout}>
			<Head />
			<SearchBar
				value={searchText}
				onChange={setSearchText}
				onSearch={handleSearch}
			/>
			<section>{children}</section>
		</div>
	)
}
