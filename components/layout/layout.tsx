import { useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Head } from '../head/head'
import { SearchBar } from '../searchBar/searchBar'
const styles = require('./layout.scss')

type Props = {
	children: ReactNode
	id?: string
	title?: string
}

export const Layout = ({
	children,
	id = 'layout',
	title = 'Mercado Libre'
}: Props) => {
	const router = useRouter()
	const [searchText, setSearchText] = useState('')
	const [headTitle, setHeadTitle] = useState('')

	useEffect(() => {
		switch (router.pathname) {
			case '/items':
				setSearchText(String(router.query.search))
				setHeadTitle(`${router.query.search} en Mercado Libre`)
				break
			default:
				setSearchText('')
				setHeadTitle(title)
				break
		}
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
