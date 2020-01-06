import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Head } from '../head/head'
import { SearchBar } from '../searchBar/searchBar'
import styles from './layout.scss'

export const Layout = ({ id = 'layout', children }) => {
	const [searchText, setSearchText] = useState('')
	const router = useRouter()

	useEffect(() => {
		if (router.pathname !== '/') {
			const { search } = router.query
			setSearchText(search)
		}
	})

	const handleSearch = e => {
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
