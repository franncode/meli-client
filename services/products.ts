import axios from 'axios'
import {
	SearchProductReturn,
	GetProductByIdReturn
} from './interfaces/products.interfaces'
const api = process.env.api

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

export const getProductById = async (
	id: string
): Promise<GetProductByIdReturn> => {
	try {
		const response = await axios.get(`${api}items/${id}`)
		return response
	} catch (error) {
		console.error(error)
	}
}
