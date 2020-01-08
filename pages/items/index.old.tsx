import { Fragment, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { searchProduct } from '../../services/products'
// import { ResultProduct } from '../../components/resultProduct/resultProduct'
const ResultProduct = dynamic(
	() => import('../../components/resultProduct/resultProduct') as any
)
const styles = require('./index.scss')

type Props = {
	price: object
	description: string
	locate: string
	img: string
	freeShipping: boolean
}

// export default function Results({ search, categories, items }) {
export default function Results({ search }) {
	const [categories, setCategories] = useState([])
	const [items, setItems] = useState([])

	useEffect(() => {
		if (search && search !== '') {
			const makeSearch = async () => {
				const { data } = await searchProduct(search)
				setCategories(data.categories)
				setItems(data.items)
			}
			makeSearch()
		}
	})

	return (
		<div className={styles.results}>
			{items.map(
				({ price, title, city, picture, free_shipping }, index: number) => (
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
				)
			)}
		</div>
	)
}

Results.getInitialProps = async ({ query }) => {
	const { search } = await query
	// const { data } = await searchProduct(query.search)
	// return { search, categories: data.categories, items: data.items }
}
