import Link from 'next/link'
import { useCurrencyFormater } from '../../utils/hooks/useCurrencyFormater/useCurrencyFormater'
const styles = require('./resultProduct.scss')

type Props = {
	id: string
	price: {
		currency: string
		amount: number
		decimals: number
	}
	description: string
	locate: string
	img: string
	freeShipping: boolean
}

export const ResultProduct = ({
	id,
	price,
	description,
	locate,
	img,
	freeShipping
}: Props) => {
	const { wholePart, decimalPart } = useCurrencyFormater(price)

	return (
		<Link href='/items/[id]' as={`items/${id}`}>
			<div className={styles.resultProduct}>
				<img src={img} alt={`imagen del producto ${description}`} />
				<div>
					<div>
						<h3>
							{wholePart}
							<span>{decimalPart}</span>
						</h3>
						{freeShipping && (
							<img src='/icons/shipping.png' alt='free shipping icon' />
						)}
					</div>
					<h4>{description}</h4>
				</div>
				<p>{locate}</p>
			</div>
		</Link>
	)
}

// export default ResultProduct
