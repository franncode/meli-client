import { Fragment, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { searchProduct } from '../../services/products'
import { FilterButton } from '../../components/filterButton/filterButton'
const ResultProduct = dynamic(() =>
	import('../../components/resultProduct/resultProduct')
)
const PathBar = dynamic(() => import('../../components/pathBar/pathBar'))
import styles from './index.scss'

export default function Items({ categories, items }) {
	// const router = useRouter()
	const [filteredItems, setFilteredItems] = useState(items)
	const [isFreeShippingFilterOn, setIsFreeShippingFilterOn] = useState(false)

	useEffect(() => {
		if (isFreeShippingFilterOn) {
			const filteredItems = items.filter(({ free_shipping }) => free_shipping)
			setFilteredItems(filteredItems)
		} else {
			setFilteredItems(items)
		}
	}, [isFreeShippingFilterOn])

	const handleSwitch = () => setIsFreeShippingFilterOn(!isFreeShippingFilterOn)

	return (
		<div className={styles.results}>
			{categories.length > 0 && (
				<PathBar type={'categories'} categories={categories} />
			)}
			<FilterButton
				text='Envio gratis'
				isOn={isFreeShippingFilterOn}
				onSwtich={handleSwitch}
			/>
			<div>
				{items.length > 0 &&
					filteredItems.map(
						({ id, price, title, city, picture, free_shipping }, index) => (
							<Fragment key={index}>
								<ResultProduct
									id={id}
									price={price}
									description={title}
									locate={city}
									img={picture}
									freeShipping={free_shipping}
								/>
								{index !== items.length - 1 && (
									<hr className={styles.divider} />
								)}
							</Fragment>
						)
					)}
			</div>
		</div>
	)
}

Items.getInitialProps = async ({ query }) => {
	try {
		const { data } = await searchProduct(query.search)
		return { categories: data.categories, items: data.items, query }
	} catch (error) {
		// router.push('/_error')
		return { error: true }
	}
}
