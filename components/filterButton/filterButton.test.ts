import React from 'react'
import { mount } from 'enzyme'
import { FilterButton } from './filterButton'

describe('<FilterButton/>', () => {
	test('It should render the component', () => {
		const filterButton = mount(<FilterButton />)
	})
})
