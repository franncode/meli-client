import { useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Head } from '../head/head'
import { SearchBar } from '../searchBar/searchBar'
import { InstallBanner } from '../installBanner/installBanner'

const styles = require('./layout.scss')

type Props = {
	children: ReactNode
	id?: string
	title?: string
	containerStyle: {}
}

export const Layout = ({
	children,
	id = 'layout',
	title,
	containerStyle
}: Props) => {
	const router = useRouter()
	const [searchText, setSearchText] = useState('')
	const [headTitle, setHeadTitle] = useState('Mercado Libre')

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
			<section style={containerStyle}>{children}</section>
		</div>
	)
}
