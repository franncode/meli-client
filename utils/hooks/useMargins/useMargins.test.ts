import init from 'jooks'
import { useMargins } from './useMargins'

const spy = jest.fn()
const margin = 20
const margins = [24, 16, 16, 32]

describe('useMargins', () => {
	const jooks = init(useMargins)
	beforeEach(() => {
		spy.mockReset()
	})

	it('should return margin with value 20px', () => {
		const hook = jooks.run(margin, spy)
		expect(hook).toEqual({ margin: '20px' })
	})

	it('should return margins with value ', () => {
		const hook = jooks.run(margins, spy)
		expect(hook).toEqual({ margin: '24px 16px 16px 32px' })
	})

	it('should compute the value only once if nothing else changes', () => {
		const hook = jooks.run(margin, spy)
		expect(hook).toEqual({ margin: '20px' })
		const rerunHook = jooks.run(margin, spy)
		expect(hook).toEqual({ margin: '20px' })

		expect(spy).toHaveBeenCalledTimes(1)
	})

	it('should compute the value again if a dependency changes', () => {
		const hook = jooks.run(margin, spy)
		expect(hook).toEqual({ margin: '20px' })
		const hook2 = jooks.run(margin, spy)
		expect(hook2).toEqual({ margin: '20px' })

		expect(spy).toHaveBeenCalledTimes(1)

		const hook3 = jooks.run(margins, spy)
		expect(hook3).toEqual({ margin: '24px 16px 16px 32px' })

		expect(spy).toHaveBeenCalledTimes(2)
	})
})
