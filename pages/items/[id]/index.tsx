import { useContext } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../../../context/userContext'
import { useCurrencyFormater } from '../../../utils/hooks/useCurrencyFormater/useCurrencyFormater'
import PathBar from '../../../components/pathBar/pathBar'
import { Head } from '../../../components/head/head'
import { ImageProduct } from '../../../components/imageProduct/imageProduct'
import { getProductById } from '../../../services/products'
const styles = require('./index.scss')

export default function Item({
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
	const { isMobile } = useContext(UserContext)

	const formatedCondition = () => {
		switch (condition) {
			case 'new':
				return 'Nuevo'
			case 'used':
				return 'Usado'
			default:
				return ''
		}
	}

	const formatedSoldQuantity =
		soldQuantity > 0 ? `- ${soldQuantity} vendidos` : ''

	const { wholePart, decimalPart } = useCurrencyFormater(price)

	const openGraph = {
		description,
		picture,
		link: router.asPath
	}

	const handleShare = () => {
		let nav: any = window.navigator
		if (nav.share) {
			nav.share({
				title,
				text: title,
				url: router.asPath
			})
		}
	}

	console.log(isMobile)

	return (
		<div className={styles.item}>
			<Head
				title={`${title} - ${wholePart} ${decimalPart} en Mercado Libre`}
				openGraph={openGraph}
			/>
			<div className={styles.topBar}>
				<p onClick={() => router.back()}>Volver al listado</p>
				<strong>|</strong>
				<PathBar type={'path'} categories={categories} />
			</div>
			<div className={styles.body}>
				<div className={styles.upperPart}>
					<ImageProduct picture={picture} />
					<div className={styles.info}>
						<p>{`${formatedCondition()} ${formatedSoldQuantity}`}</p>
						<h2>{title}</h2>
						<h1>
							{wholePart}
							<span>{decimalPart}</span>
						</h1>
						<button className={styles.buyButton}>Comprar</button>
						{isMobile && (
							<button
								className={styles.shareButton}
								onClick={() => handleShare()}
							>
								Compartir
							</button>
						)}
						{freeShipping && (
							<span>
								<img src='/icons/shippingNew.svg' alt='free shipping icon' />
								Envío gratis
							</span>
						)}
					</div>
				</div>
				<div className={styles.bottomPart}>
					<h3>Descripción del producto</h3>
					<pre>{description}</pre>
				</div>
			</div>
		</div>
	)
}

Item.getInitialProps = async ({ query, res }) => {
	try {
		const product = await getProductById(query.id)
		if (product.status === 200) {
			return {
				id: product.data.item.id,
				title: product.data.item.title,
				price: product.data.item.price,
				picture: product.data.item.picture,
				condition: product.data.item.condition,
				freeShipping: product.data.item.free_shipping,
				soldQuantity: product.data.item.sold_quantity,
				description: product.data.item.description,
				categories: product.data.item.categories
			}
		}
	} catch (error) {
		res.writeHead(302, {
			Location: '/_error'
		})
		res.end()
	}
}
