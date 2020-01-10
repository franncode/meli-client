import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import { Head } from '../../components/head/head'
import { searchProduct } from '../../services/products'
import { FilterButton } from '../../components/filterButton/filterButton'
import PathBar from '../../components/pathBar/pathBar'
import ResultProduct from '../../components/resultProduct/resultProduct'
import styles from './index.scss'

export default function Items({ categories, items }) {
	const [filteredItems, setFilteredItems] = useState([])
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
			{/* <Head title={`${search} en Mercado Libre`} /> */}

			<PathBar type={'categories'} categories={categories} />

			<FilterButton
				text='Envio gratis'
				isOn={isFreeShippingFilterOn}
				onSwtich={handleSwitch}
			/>
			<div>
				{items.length === 0 && (
					<h2
						style={{ height: 212, alignSelf: 'center', alignContent: 'center' }}
					>
						Cargando resultados
					</h2>
				)}
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

Items.getInitialProps = async ({ res, query }) => {
	try {
		const { data } = await searchProduct(query.search)
		const { categories, items } = data
		return { categories, items }
	} catch (error) {
		res.writeHead(302, {
			Location: '/_error'
		})
		res.end()
	}
}
