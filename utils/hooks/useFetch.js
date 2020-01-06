import axios from 'axios'

export const useFetch = async (method, data) => {
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
