import axios, { AxiosResponse } from 'axios'

type getCurrencyData = {
	id: string
	symbol: string
	description: string
	decimal_places: number
}

interface getCurrencyReturn extends AxiosResponse {
	data: getCurrencyData
}

export const getCurrency = async (
	currencyId: string
): Promise<getCurrencyReturn> => {
	try {
		const response = await axios.get(
			`https://api.mercadolibre.com/currencies/${currencyId}`
		)
		return response
	} catch (error) {
		console.error(error)
	}
}
