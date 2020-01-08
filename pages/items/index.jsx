import { Fragment, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { searchProduct } from '../../services/products'
const ResultProduct = dynamic(() =>
	import('../../components/resultProduct/resultProduct')
)
const ResultPath = dynamic(() =>
	import('../../components/resultCategories/resultCategories')
)
import styles from './index.scss'

export default function Results({ search, setLoading }) {
	const [categories, setCategories] = useState([])
	const [items, setItems] = useState([])

	useEffect(() => {
		if (search && search !== '') {
			setLoading({ loading: true })
			const makeSearch = async () => {
				const { data } = await searchProduct(search)
				setCategories(data.categories)
				setItems(data.items)
				setLoading({ loading: false })
			}
			makeSearch()
		}
	}, [search])

	return (
		<div className={styles.results}>
			{categories.length > 0 && <ResultPath categories={categories} />}
			{items.length > 0 &&
				items.map(({ price, title, city, picture, free_shipping }, index) => (
					<Fragment key={index}>
						<ResultProduct
							price={price}
							description={title}
							locate={city}
							img={picture}
							freeShipping={free_shipping}
						/>
						{index !== items.length - 1 && <hr className={styles.divider} />}
					</Fragment>
				))}
			}
		</div>
	)
}

Results.getInitialProps = async ({ query }) => ({ search: query.search })
