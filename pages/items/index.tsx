import { Fragment } from 'react'
const styles = require('./index.scss')
import { searchProduct } from '../../services/products'
import { ResultProduct } from '../../components/resultProduct/resultProduct'

export default function Results({ search, categories, items }) {
	console.log('items', items)

	return (
		<div className={styles.results}>
			{items.map(
				({ price, title, city, picture, free_shipping }, index: number) => (
					<Fragment key={index}>
						<ResultProduct
							price={price.amount + price.decimals}
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
	const { data } = await searchProduct(query.search)
	return { search, categories: data.categories, items: data.items }
}
