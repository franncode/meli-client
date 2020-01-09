import { useRouter } from 'next/router'
import { useCurrencyFormater } from '../../../utils/hooks/useCurrencyFormater/useCurrencyFormater'
import PathBar from '../../../components/pathBar/pathBar'
import { Head } from '../../../components/head/head'
import { ImageProduct } from '../../../components/imageProduct/imageProduct'
import { getProductById } from '../../../services/products'
import { useEffect } from 'react'
const styles = require('./index.scss')

export default function Item({
	id,
	title,
	price,
	picture,
	condition,
	freeShipping,
	soldQuantity,
	description,
	categories
}) {
	const router = useRouter()

	const formatedCondition = () => {
		switch (condition) {
			case 'new':
				return 'Nuevo'
			case 'used':
				return 'Usado'
			default:
				return null
		}
	}

	const formatedSoldQuantity =
		soldQuantity > 0 ? `${soldQuantity} vendidos` : ''

	const { wholePart, decimalPart } = useCurrencyFormater(price)

	const openGraph = {
		description,
		picture,
		link: router.asPath
	}

	return (
		<div className={styles.item}>
			<Head
				title={`${title} - ${wholePart} ${decimalPart} en Mercado Libre`}
				openGraph={openGraph}
			/>
			<PathBar type={'path'} categories={categories} />
			<div>
				<div className={styles.main}>
					<ImageProduct picture={picture} />
					<div>
						<p>{`${formatedCondition()} - ${formatedSoldQuantity}`}</p>
						<h2>{title}</h2>
						<h1>
							{wholePart}
							<span>{decimalPart}</span>
						</h1>
						<button>Comprar</button>
					</div>
				</div>
				<div className={styles.description}>
					<h3>Descripción del producto</h3>
					<pre>{description}</pre>
				</div>
			</div>
		</div>
	)
}

Item.getInitialProps = async ({ query, res }) => {
	try {
		const { data } = await getProductById(query.id)
		const {
			id,
			title,
			price,
			picture,
			condition,
			free_shipping,
			sold_quantity,
			description,
			categories
		} = data.item
		return {
			id,
			title,
			price,
			picture,
			condition,
			freeShipping: free_shipping,
			soldQuantity: sold_quantity,
			description,
			categories
		}
	} catch (error) {
		res.writeHead(302, {
			Location: '/_error'
		})
		res.end()
	}
}
