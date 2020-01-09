const styles = require('./filterButton.scss')
import { Switcher } from '../switcher/switcher'

type Props = {
	id?: string
	text: string
	onSwtich: Function
	isOn: boolean
}

export const FilterButton = ({
	id = 'filterButton',
	text,
	onSwtich,
	isOn
}: Props) => {
	return (
		<div id={id} className={styles.filterButton}>
			<p>{text}</p>
			<Switcher isOn={isOn} onSwtich={onSwtich} />
		</div>
	)
}
