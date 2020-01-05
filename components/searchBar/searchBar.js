// @flow
import * as React from 'react'
import { marginCalc } from '../../utils/marginCalc'
import styles from './searchBar.scss'

type Props = {
	id?: string,
	value: string,
	onChange: function,
	placeholder?: string,
	margin?: Array<number>
}

export const SearchBar = ({
	id = 'searchBar',
	value,
	onChange,
	placeholder,
	margin
}: Props) => {
	return (
		<header className={styles.searchBar} style={marginCalc(margin)}>
			<div>
				<img src='/icons/logo.png' alt='search icon' />
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
			</div>
		</header>
	)
}
