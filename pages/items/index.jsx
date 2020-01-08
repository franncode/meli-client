import { Fragment, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { searchProduct } from '../../services/products'
import { PageButton } from '../../components/pageButton/pageButton'
const ResultProduct = dynamic(() =>
	import('../../components/resultProduct/resultProduct')
)
const ResultPath = dynamic(() =>
	import('../../components/resultCategories/resultCategories')
)
import styles from './index.scss'

export default function Items({ search, setLoading }) {
	const [categories, setCategories] = useState([])
	const [items, setItems] = useState([])
	const [filteredItems, setFilteredItems] = useState([])
	const [isFreeShippingFilterOn, setIsFreeShippingFilterOn] = useState(false)

	useEffect(() => {
		if (search && search !== '') {
			setLoading({ loading: true })
			const makeSearch = async () => {
				const { data } = await searchProduct(search)
				setCategories(data.categories)
				setItems(data.items)
				setFilteredItems(data.items)
				setLoading({ loading: false })
			}
			makeSearch()
		}
	}, [search])

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
			{categories.length > 0 && <ResultPath categories={categories} />}
			<PageButton
				text='Envio gratis'
				isOn={isFreeShippingFilterOn}
				onSwtich={handleSwitch}
			/>
			<div>
				{items.length > 0 &&
					filteredItems.map(
						({ price, title, city, picture, free_shipping }, index) => (
							<Fragment key={index}>
								<ResultProduct
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

Items.getInitialProps = async ({ query }) => ({ search: query.search })
