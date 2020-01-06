// @flow
import * as React from 'react'
import Link from 'next/link'
import { useMargins } from '../../utils/hooks/useMargins'
import styles from './searchBar.scss'

type Props = {
	id?: string,
	value: string,
	onChange: function,
	placeholder?: string,
	margins?: void | number | Array<number>
}

export const SearchBar = ({
	id = 'searchBar',
	value,
	onChange,
	placeholder = 'Nunca dejes de buscar',
	margins
}: Props) => {
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
					/>
				</label>
				<div>
					<img src='/icons/search.png' alt='search icon' />
				</div>
			</div>
		</header>
	)
}
