import { mount, shallow } from 'enzyme'
import { Layout } from './layout'
import React, { useState as useStateMock } from 'react'

const children = shallow(
	<div id='children' key='children'>
		<h1>Zapatillas Nike</h1>
		<p>$1200</p>
	</div>
)

jest.mock('next/router', () => ({
	useRouter() {
		return {
			route: '/',
			pathname: '',
			query: '',
			asPath: ''
		}
	}
}))

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: jest.fn()
}))

describe('<Layout/>', () => {
	let component
	const setState = jest.fn()
	beforeEach(() => {
		useStateMock.mockImplementation(init => [init, setState])
		component = mount(
			<Layout children={children} headTitle={'Zapatillas Nike'} />
		)
	})

	it('should render component', () => {
		expect(component).toMatchInlineSnapshot(`ReactWrapper {}`)
		expect(component.length).toEqual(1)
		expect(component).toBeTruthy()
	})

	it('should render with children', () => {
		expect(component.find('#layout > section > #children > h1').text()).toEqual(
			'Zapatillas Nike'
		)
	})
})
