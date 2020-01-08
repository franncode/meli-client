const styles = require('./filterButton.scss')
import { Switcher } from '../switcher/switcher'
import { useState } from 'react'

type Props = {
	text: string
	onSwtich: Function
	isOn: boolean
}

export const FilterButton = ({ text, onSwtich, isOn }: Props) => {
	return (
		<div className={styles.filterButton}>
			<p>{text}</p>
			<Switcher isOn={isOn} onSwtich={onSwtich} />
		</div>
	)
}
