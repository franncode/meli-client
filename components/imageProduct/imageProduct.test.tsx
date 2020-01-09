import { mount } from 'enzyme'
import { ImageProduct } from './imageProduct'

describe('<FilterButton/>', () => {
	let component
	beforeEach(() => {
		component = mount(<ImageProduct picture={'/public/icons/logo.png'} />)
	})

	it('should render component', () => {
		expect(component).toMatchInlineSnapshot(`ReactWrapper {}`)
		expect(component.length).toEqual(1)
		expect(component).toBeTruthy()
	})

	it('should render with img', () => {
		expect(component.find('#imageProduct > img').type()).toEqual('img')
		expect(component.find('#imageProduct > img').prop('src')).toEqual(
			'/public/icons/logo.png'
		)
	})
})
