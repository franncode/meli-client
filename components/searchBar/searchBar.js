import { useEffect } from 'react'
import Link from 'next/link'
import { useMargins } from '../../utils/hooks/useMargins'
import styles from './searchBar.scss'

export const SearchBar = ({
	id = 'searchBar',
	margins,
	onChange,
	onSearch,
	placeholder = 'Nunca dejes de buscar',
	value
}) => {
	const onKeyDown = key => {
		if (key === 'Enter') {
			onSearch()
		}
	}

	return (
		<header className={styles.searchBar} style={useMargins(margins)}>
			<div>
				<Link href='/'>
					<img src='/icons/logo.png' alt='search icon' />
				</Link>
				<label htmlFor={id}>
					<input
						type='text'
						name='searchInputText'
						id={id}
						aria-label='searchInputText'
						value={value}
						onChange={({ target }) => onChange(target.value)}
						placeholder={placeholder}
						onKeyDown={({ key }) => onKeyDown(key)}
					/>
				</label>
				<div onClick={() => onSearch()}>
					<img src='/icons/search.png' alt='search icon' />
				</div>
			</div>
		</header>
	)
}
