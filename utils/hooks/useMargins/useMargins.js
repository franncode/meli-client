import { useMemo } from 'react'

export const useMargins = margins => {
	return useMemo(() => {
		switch (typeof margins) {
			case 'undefined':
				return null
			case 'number':
				return { margin: `${margins}px` }
			case 'object':
				let marginsFormated = margins
					.map(number => `${number}px`)
					.reduce((acc, cur) => `${acc} ${cur}`)
				return { margin: marginsFormated }
			default:
				return {}
		}
	}, [margins])
}
