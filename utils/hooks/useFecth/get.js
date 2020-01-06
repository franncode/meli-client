// @flow
// $FlowFixMe
import fetch from 'isomorphic-unfetch'

const api = +process.env.api

type Params = {
	endpoint: string,
	callback?: function,
	options?: {}
}

type Return = {
	statusCode: number,
	error: boolean,
	data: {}
}

export const get = async ({
	endpoint,
	callback,
	options
}: Params): Promise<Return> => {
	let error = false
	let data = {}
	let response = {}
	let statusCode = 0
	try {
		const formatedUrl = endpoint.startsWith('http')
			? endpoint
			: `${api}${endpoint}`
		response = await fetch(formatedUrl, options)
		statusCode = response.status
		data = await response.json()
		data = callback ? callback(data) : data
	} catch (error) {
		data = { method: 'get', endpoint: endpoint, description: error }
	} finally {
		return { statusCode, error, data }
	}
}
