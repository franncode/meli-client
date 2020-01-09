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

export default function Items({ search, setLoading }) {
	const router = useRouter()
	const [categories, setCategories] = useState([])
	const [items, setItems] = useState([])
	const [filteredItems, setFilteredItems] = useState([])
	const [isFreeShippingFilterOn, setIsFreeShippingFilterOn] = useState(false)

	useEffect(() => {
		if (search && search !== '') {
			setLoading({ loading: true })
			const makeSearch = async () => {
				try {
					const { data } = await searchProduct(search)
					setCategories(data.categories)
					setItems(data.items)
					setFilteredItems(data.items)
					setLoading({ loading: false })
				} catch (error) {
					router.push('/_error')
				}
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
			{categories.length > 0 && (
				<PathBar type={'categories'} categories={categories} />
			)}
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

Items.getInitialProps = async ({ query }) => ({ search: query.search })
