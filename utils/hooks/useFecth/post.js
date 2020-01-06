export const post = async (
	endpoint,
	obj,
	callback = false,
	headerss = false
) => {
	try {
		const headers = { ...headers, 'Content-Type': 'application/json' }
		let payload = {
			method: 'POST',
			body: JSON.stringify(obj),
			headers: {
				'Content-Type': 'application/json'
			}
		}
		if (headerss) body.headers = { ...body.headers, headerss }
		const response = await fetch(`${api}${endpoint}`, payload)

		let data = await response.json()
		data.statusCode = response.status
		// data.message = response.message ? response.message : response.statusText

		return callback ? callback(data) : data
	} catch (error) {
		console.log(error)
		return []
	}
}
