import { useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/router'
import dynamic, { LoadableComponent } from 'next/dynamic'
import { Head } from '../head/head'
import { SearchBar } from '../searchBar/searchBar'
const InstallBanner: LoadableComponent<any> = dynamic(() =>
	import('../installBanner/installBanner').then(
		component => component.InstallBanner
	)
)

const styles = require('./layout.scss')

type Props = {
	children: ReactNode
	id?: string
	title?: string
	containerStyle: {}
	isMobile: boolean
}

export const Layout = ({
	children,
	id = 'layout',
	title,
	containerStyle,
	isMobile
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
			{isMobile && <InstallBanner onInstall={() => alert('Test')} />}
			<SearchBar
				value={searchText}
				onChange={setSearchText}
				onSearch={handleSearch}
			/>
			<section style={containerStyle}>{children}</section>
		</div>
	)
}
