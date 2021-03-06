import init from 'jooks'
import { useCurrencyFormater } from './useCurrencyFormater'

const spy = jest.fn()
const price = { currency: 'ARS', amount: 12592, decimals: 57 }
const anotherPrice = { currency: 'ARS', amount: 10350, decimals: 9 }

describe('useCurrencyFormater', () => {
	const jooks = init(useCurrencyFormater)
	beforeEach(() => {
		spy.mockReset()
	})

	it('should return decimalPart with 57', () => {
		const hook = jooks.run(price, spy)
		expect(hook).toEqual({
			wholePart: '$ 12.592',
			decimalPart: '57'
		})
	})

	it('should return decimalPart with 90', () => {
		const hook = jooks.run(anotherPrice, spy)
		expect(hook).toEqual({
			wholePart: '$ 10.350',
			decimalPart: '90'
		})
	})

	it('should compute the value only once if nothing else changes', () => {
		const hook = jooks.run(price, spy)
		expect(hook).toEqual({
			wholePart: '$ 12.592',
			decimalPart: '57'
		})
		const rerunHook = jooks.run(price, spy)
		expect(rerunHook).toEqual({
			wholePart: '$ 12.592',
			decimalPart: '57'
		})

		expect(spy).toHaveBeenCalledTimes(1)
	})

	it('should compute the value again if a dependency changes', () => {
		const hook = jooks.run(price, spy)
		expect(hook).toEqual({
			wholePart: '$ 12.592',
			decimalPart: '57'
		})
		const hook2 = jooks.run(price, spy)
		expect(hook2).toEqual({
			wholePart: '$ 12.592',
			decimalPart: '57'
		})

		expect(spy).toHaveBeenCalledTimes(1)

		const hook3 = jooks.run(anotherPrice, spy)
		expect(hook3).toEqual({
			wholePart: '$ 10.350',
			decimalPart: '90'
		})

		expect(spy).toHaveBeenCalledTimes(2)
	})
})
