const styles = require('./switcher.scss')

type Props = {
	isOn: boolean
	onSwtich: Function
}

export const Switcher = ({ isOn, onSwtich }: Props) => {
	return (
		<div
			className={isOn ? styles.switcher_on : styles.switcher_off}
			onClick={() => onSwtich()}
		>
			<img src='/images/circle.svg' alt='circle selector' />
		</div>
	)
}
