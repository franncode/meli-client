import axios from 'axios'
import {
	SearchProductReturn,
	GetProductByIdReturn,
	GetTrendsReturn
} from './products.interfaces'
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

export const getTrends = async (): Promise<GetTrendsReturn> => {
	try {
		const response = await axios.get(`${api}trends`)
		return response
	} catch (error) {
		console.error(error)
	}
}
