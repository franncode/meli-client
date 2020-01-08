import { AxiosResponse } from 'axios'
import { Item } from './interfaces'

export type SearchProductData = {
	author: {
		name: string
		lastname: string
	}
	categories: string[]
	items: Item[]
}

export interface SearchProductReturn extends AxiosResponse {
	data: SearchProductData
}

export type GetProductData = {
	author: {
		name: string
		lastname: string
	}
	item: {
		id: string
		title: string
		price: {
			currency: string
			amount: number
			decimals: number
		}
		picture: string
		condition: string
		free_shipping: boolean
		sold_quantity: number
		description: string
		categories: string[]
	}
}

export interface GetProductByIdReturn extends AxiosResponse {
	data: GetProductData
}
