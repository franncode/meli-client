import { mount } from 'enzyme'
import { FilterButton } from './filterButton'

describe('<FilterButton/>', () => {
	let component
	beforeEach(() => {
		component = mount(
			<FilterButton
				text={'Envio gratis'}
				onSwtich={() => jest.fn()}
				isOn={false}
			/>
		)
	})

	it('should render component', () => {
		expect(component).toMatchInlineSnapshot(`ReactWrapper {}`)
		expect(component.length).toEqual(1)
		expect(component).toBeTruthy()
	})

	it('should render with title', () => {
		expect(component.find('#filterButton > p').text()).toEqual('Envio gratis')
		expect(component.find('#filterButton > p').text()).not.toEqual('Envio $200')
	})
})
