// import { getCurrency } from '../../services/currency'
import { useMemo } from 'react'
const styles = require('./resultProduct.scss')

type Props = {
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

const ResultProduct = ({
	price,
	description,
	locate,
	img,
	freeShipping
}: Props) => {
	// const formatPrice = async ({ currency, amount, decimals }) => {
	// 	const gettedCurrency = await getCurrency(currency)
	// 	const { symbol } = gettedCurrency.data
	// 	const formatAmount = String(amount).split('.')
	// 	String(amount).split('').length > 3 ? String(amount) : String(amount)
	// 	const formatDecimals = String(decimals).replace('.', ',')
	// 	return `${symbol} ${formatAmount},${formatDecimals}`
	// }
	// const formatPriceMemorized = useMemo(() => formatPrice(price), [price])

	const formatAmount = ({ amount }) => {
		let amountDigits = String(amount).split('')
		if (amountDigits.length > 3) {
			amountDigits.splice(1, 0, '.')
			return `$ ${amountDigits.join('')}`
		} else {
			return `$ ${amount}`
		}
	}
	const formatAmountMemorized = useMemo(() => formatAmount(price), [price])

	const formatDecimals = ({ decimals }) => {
		if (decimals > 0) {
			const decimalPart = String(decimals).split('')[2]
			if (decimalPart.length === 1) {
				return `${decimalPart}0`
			} else {
				return `${decimalPart}`
			}
		} else {
			return ''
		}
	}
	const formatDecimalsMemorized = useMemo(() => formatDecimals(price), [price])

	return (
		<div className={styles.resultProduct}>
			<img src={img} alt={`imagen del producto ${description}`} />
			<div>
				<div>
					<h3>
						{formatAmountMemorized}
						<span>{formatDecimalsMemorized}</span>
					</h3>
					{freeShipping && <img src='/icons/shipping.png' alt='' />}
				</div>
				<h4>{description}</h4>
			</div>
			<p>{locate}</p>
		</div>
	)
}

export default ResultProduct
