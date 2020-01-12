import { mount } from 'enzyme'
import { SearchBar } from './searchBar'

describe('<SearchBar/>', () => {
	var testState = { pressed: false, value: '' }
	let component
	const onSearch = () => (testState.pressed = true)
	const onChange = () => (testState.value = 'Zapatillas')
	beforeEach(() => {
		component = mount(
			<SearchBar onChange={onChange} onSearch={onSearch} value={''} />
		)
	})

	it('should render component', () => {
		expect(component).toMatchInlineSnapshot(`ReactWrapper {}`)
		expect(component.length).toEqual(1)
		expect(component).toBeTruthy()
	})

	it('value should be Zapatillas Nike', () => {
		component.setProps({ value: 'Zapatillas Nike' })
		expect(component.props().value).toEqual('Zapatillas Nike')
		expect(
			component
				.find('#searchBarInput')
				.at(0)
				.prop('value')
		).toEqual('Zapatillas Nike')
	})

	it('should call onKeyDown', () => {
		component
			.find('#searchBarInput')
			.at(0)
			.simulate('keyDown', { key: 'Enter' })
		expect(testState.pressed).toEqual(true)
	})

	it('should call onCahge', () => {
		expect(
			component
				.find('#searchBarInput')
				.at(0)
				.prop('value')
		).toEqual('')
		component
			.find('input')
			.at(0)
			.simulate('change', { target: { name: 'value', value: 'Zapatillas' } })
		expect(testState.value).toEqual('Zapatillas')
	})
})
