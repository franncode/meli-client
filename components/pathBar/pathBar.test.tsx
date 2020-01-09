import { mount } from 'enzyme'
import { PathBar } from './pathBar'

describe('<PathBar/>', () => {
	let component
	beforeEach(() => {
		component = mount(
			<PathBar
				type='categories'
				categories={[
					'nike 97',
					'zapatillas nike 2019',
					'puma zapatillas',
					'adidas nmd',
					'zapatillas nike mujer 2019'
				]}
			/>
		)
	})

	it('should render component', () => {
		expect(component).toMatchInlineSnapshot(`ReactWrapper {}`)
		expect(component.length).toEqual(1)
		expect(component).toBeTruthy()
	})

	it('should render with caterogies type categories', () => {
		component.setProps({ type: 'categories' })
	})

	it('should render with caterogies type path', () => {
		component.setProps({ type: 'path' })
	})
})
