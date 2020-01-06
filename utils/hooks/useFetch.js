// @flow
// $FlowFixMe
import dynamic from 'next/dynamic'

const deletes = dynamic(() => import('./useFecth/delete'))
const get = dynamic(() => import('./useFecth/get'))
const post = dynamic(() => import('./useFecth/post'))
const put = dynamic(() => import('./useFecth/put'))

type Params = {
	method: string,
	data: {
		endpoint: string,
		callback: function,
		options: {}
	}
}

type Return = {
	statusCode?: Number,
	error: boolean,
	data?: {} | Array<{}>
}

export const useFetch = async (method: string, data: {}): Promise<Return> => {
	switch (method) {
		case 'detele':
			return await deletes(data)
		case 'get':
			return await get(data)
		case 'post':
			return await post(data)
		case 'put':
			return await put(data)
		default:
			return { error: false }
	}
}
