import { useFetch } from '../utils/hooks/useFetch'

export const searchProduct = async searchText =>
	await useFetch({
		method: 'get',
		url: `https://server-mercadolibre.herokuapp.com/api/items?q=${searchText}`
	})
