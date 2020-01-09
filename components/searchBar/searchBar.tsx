import Link from 'next/link'
import { useMargins } from '../../utils/hooks/useMargins'
const styles = require('./searchBar.scss')

type Props = {
	margins?: number | number[] | null
	onChange: Function
	onSearch: Function
	value: string
}

export const SearchBar = ({ margins, onChange, onSearch, value }: Props) => {
	const onKeyDown = (key: string) => {
		if (key === 'Enter') {
			onSearch()
		}
	}

	return (
		<header className={styles.searchBar} style={useMargins(margins)}>
			<div>
				<Link href='/'>
					<img src={'/icons/logo.png'} alt='search icon' />
				</Link>
				<label htmlFor='searchBar'>
					<input
						type='text'
						name='searchInputText'
						id='searchBar'
						aria-label='searchInputText'
						value={value}
						onChange={({ target }) => onChange(target.value)}
						placeholder='Nunca dejes de buscar'
						onKeyDown={({ key }) => onKeyDown(key)}
					/>
				</label>
				<div onClick={() => onSearch()}>
					<img src={'/icons/search.png'} alt='search icon' />
				</div>
			</div>
		</header>
	)
}
