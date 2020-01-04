export const marginCalc = args => {
	switch (typeof args) {
		case 'number':
			return { margin: `${args}px` }
		case 'object':
			let margins = args
				.map(number => `${number}px`)
				.reduce((acc, cur) => `${acc} ${cur}`)
			return { margin: margins }
		default:
			return {}
	}
}
