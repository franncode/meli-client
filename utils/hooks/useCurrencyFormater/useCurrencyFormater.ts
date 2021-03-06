import { useMemo } from 'react'

type Price = {
	currency?: string
	amount: number
	decimals: number
}

type PriceFormated = {
	wholePart: string
	decimalPart: string
}

export const useCurrencyFormater = (
	price: Price,
	testFunction?: Function | false
): PriceFormated => {
	return useMemo(() => {
		testFunction && testFunction()
		const formatWholePart = () => {
			let amountDigits = String(price.amount).split('')
			if (amountDigits.length < 4) {
				return `$ ${price.amount}`
			} else {
				let amountWithDots = amountDigits
					.reverse()
					.map((digit, index) =>
						index !== 0 && index % 3 === 0 ? `${digit}.` : digit
					)
					.reverse()
					.join('')
				return `$ ${amountWithDots}`
			}
		}

		const formatDecimalPart = () => {
			if (price.decimals !== 0) {
				return price.decimals < 10 ? `${price.decimals}0` : `${price.decimals}`
			} else {
				return ''
			}
		}

		return { wholePart: formatWholePart(), decimalPart: formatDecimalPart() }
	}, [price])
}
