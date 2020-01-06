export const put = async (endpoint, obj, callback) => {
	try {
		const response = await fetch(`${api}${endpoint}`, {
			method: 'PUT',
			body: JSON.stringify(obj),
			headers: { 'Content-Type': 'application/json' }
		})

		let data = await response.json()
		data.statusCode = response.status
		data.message = response.statusText

		return callback ? callback(data) : data
	} catch (error) {
		console.log(error)
		return []
	}
}
