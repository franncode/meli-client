import { useState } from 'react'

const styles = require('./switcher.scss')

type Props = {
	isOn: boolean
	onSwtich: Function
}

export const Switcher = ({ isOn, onSwtich }: Props) => {
	const [firstRender, seFirstRender] = useState(true)

	const handleClick = () => {
		seFirstRender(false)
		onSwtich()
	}

	return (
		<div
			className={
				firstRender
					? styles.switcher
					: isOn
					? styles.switcher_on
					: styles.switcher_off
			}
			onClick={() => handleClick()}
		>
			<img src='/images/circle.svg' alt='circle selector' />
		</div>
	)
}
