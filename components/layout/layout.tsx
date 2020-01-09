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
	const [searchText, setSearchText]: [string, Function] = useState('')
	const [headTitle, setHeadTitle]: [string, Function] = useState('')

	useEffect(() => {
		switch (router.pathname) {
			case '/items':
				setSearchText(router.query.search)
				setHeadTitle(`${router.query.search} en Mercado Libre`)
				break
			case '/items/[id]':
				setSearchText(router.query.search)
				setHeadTitle(title)
				break

			default:
				setSearchText('')
				setHeadTitle('Mercado Libre')
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
