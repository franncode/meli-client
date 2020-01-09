import { mount } from 'enzyme'
import { Head } from './head'

describe('<Head/>', () => {
	let component
	beforeEach(() => {
		component = mount(<Head title={'Mercado Libre'} />)
	})

	it('should render component', () => {
		expect(component).toMatchInlineSnapshot(`ReactWrapper {}`)
		expect(component.length).toEqual(1)
		expect(component).toBeTruthy()
	})

	it('should have <title>Mercado Libre</title>', () => {
		expect(component.props().title).toEqual('Mercado Libre')
	})
})
