// @flow
// $FlowFixMe
import fetch from 'isomorphic-unfetch'

const api = +process.env.api

export const deletes = async (endpoint: string) => {
	try {
		const response = await fetch(`${api}${endpoint}`, {
			method: 'DELETE'
		})
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
		return []
	}
}
