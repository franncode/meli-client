import { useCurrencyFormater } from '../../utils/hooks/useCurrencyFormater'
import PathBar from '../../components/pathBar/pathBar'
import { ImageProduct } from '../../components/imageProduct/imageProduct'
import { getProductById } from '../../services/products'
const styles = require('./[id].scss')

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

	const formatedDescription = description.replace('↵', <br />)

	const { wholePart, decimalPart } = useCurrencyFormater(price)

	console.log('description', description)

	return (
		<div className={styles.item}>
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
					<p>{formatedDescription}</p>
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
