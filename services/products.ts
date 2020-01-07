import axios, { AxiosResponse } from 'axios'
import { Item } from './schemas'
const api = process.env.api

type SearchProductData = {
	author: {
		name: string
		lastname: string
	}
	categories: string[]
	items: Item[]
}

interface SearchProductReturn extends AxiosResponse {
	data: SearchProductData
}

export const searchProduct = async (
	searchText: string
): Promise<SearchProductReturn> => {
	try {
		const response = await axios.get(`${api}items?q=${searchText}`)
		return response
	} catch (error) {
		console.error(error)
	}
}
