import axios from 'axios'
const api = process.env.api

export const searchProduct = async searchText => {
	try {
		const response = await axios.get(`${api}items?q=${searchText}`)
		console.log('response', response)
	} catch (error) {
		console.error(error)
	}
}
