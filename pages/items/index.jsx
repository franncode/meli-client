import { Fragment, useEffect, useState } from 'react'
import Router from 'next/router'
import { searchProduct } from '../../services/products'
import { FilterButton } from '../../components/filterButton/filterButton'
import PathBar from '../../components/pathBar/pathBar'
import ResultProduct from '../../components/resultProduct/resultProduct'
import styles from './index.scss'

export default function Items({ categories, items }) {
	const [filteredItems, setFilteredItems] = useState([])
	const [isFreeShippingFilterOn, setIsFreeShippingFilterOn] = useState(false)

	useEffect(() => {
		setFilteredItems(items)
	}, [items])

	useEffect(() => {
		if (isFreeShippingFilterOn) {
			const filteredItems = items.filter(({ free_shipping }) => free_shipping)
			setFilteredItems(filteredItems)
		} else {
			setFilteredItems(items)
		}
	}, [isFreeShippingFilterOn])

	const handleSwitch = () => setIsFreeShippingFilterOn(!isFreeShippingFilterOn)

	if (items.length === 0)
		return (
			<div className={styles.noResults}>
				<img src='/images/woman.svg' alt='woman with magnifying glass' />
				<div>
					<h3>No hay publicaciones que coincidan con tu búsqueda</h3>
					<ul>
						<li>Revisá la ortografía de la palabra.</li>
						<li>Utilizá palabras más genéricas o menos palabras.</li>
					</ul>
				</div>
			</div>
		)

	return (
		<div className={styles.results}>
			<PathBar type={'categories'} categories={categories} />
			<FilterButton
				text='Envio gratis'
				isOn={isFreeShippingFilterOn}
				onSwtich={handleSwitch}
			/>
			<div className={styles.products}>
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

Items.getInitialProps = async ({ query, res }) => {
	try {
		let categories = []
		let items = []
		const { data, status } = await searchProduct(query.search)
		if (status === 200) {
			categories = data.categories
			items = data.items
		}
		return { categories, items }
	} catch (error) {
		if (res) {
			res.writeHead(302, {
				Location: '/_error'
			})
			res.end()
		} else {
			Router.replace('/_error')
		}
	}
}
