import { marginCalc } from '../../utils/marginCalc'
import styles from './actionButton.scss'

export const ActionButton = ({
	id = 'actionButton',
	icon,
	text,
	onClick,
	margin
}) => {
	return (
		<button
			id={id}
			className={styles.actionButton}
			style={marginCalc(margin)}
			onClick={e => onClick(e)}
		>
			{text}
		</button>
	)
}
