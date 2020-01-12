import { useMemo } from 'react'

type Margins = number | number[] | null

export const useMargins = (
	margins: Margins,
	testFunction?: Function | false
) => {
	return useMemo(() => {
		testFunction && testFunction()
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
