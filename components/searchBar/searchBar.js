import { marginCalc } from '../../utils/marginCalc'
import styles from './searchBar.scss'

export const SearchBar = ({
	id = 'searchBar',
	value,
	onChange,
	placeholder,
	margin
}) => {
	return (
		<div className={styles.searchBar} style={marginCalc(margin)}>
			<img src='/icons/search.svg' alt='search icon' />
			<input
				type='text'
				name='searchInputText'
				id={id}
				value={value}
				onChange={({ target }) => onChange(target)}
				placeholder={placeholder}
			/>
		</div>
	)
}
