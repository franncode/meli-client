import { useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Head } from '../head/head'
import { SearchBar } from '../searchBar/searchBar'
const styles = require('./layout.scss')

type Props = {
	id?: string
	children: ReactNode
	headTitle: string
}

export const Layout = ({ id = 'layout', children, headTitle }: Props) => {
	const [searchText, setSearchText]: [string, Function] = useState('')
	const router = useRouter()

	useEffect(() => {
		if (router.pathname !== '/' && router.query.search)
			setSearchText(router.query.search)
		else setSearchText('')
	}, [router.pathname])

	const handleSearch = () => {
		if (searchText !== '') {
			router.push(`/items?search=${searchText}`)
		}
	}

	return (
		<div id={id} className={styles.layout}>
			<Head title={headTitle} />
			<SearchBar
				value={searchText}
				onChange={setSearchText}
				onSearch={handleSearch}
			/>
			<section>{children}</section>
		</div>
	)
}
