import axios from 'axios'
import { GetTrendsReturn } from './interfaces/trends.interfaces'
const api = process.env.api

export const getTrends = async (): Promise<GetTrendsReturn> => {
	try {
		const response = await axios.get(`${api}trends`)
		return response
	} catch (error) {
		console.error(error)
	}
}
