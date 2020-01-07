import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Head } from '../head/head'
import { SearchBar } from '../searchBar/searchBar'
const styles = require('./layout.scss')

type Props = {
	id?: string
	children: Node
}

export const Layout = ({ id = 'layout', children }: Props) => {
	const [searchText, setSearchText]: [string, Function] = useState('')
	const router = useRouter()

	useEffect(() => {
		if (router.pathname !== '/') setSearchText(router.query.search)
	}, [])

	const handleSearch = () => {
		if (searchText !== '') {
			router.push(`/items?search=${searchText}`)
		}
	}

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
