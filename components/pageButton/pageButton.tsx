const styles = require('./pageButton.scss')
import { Switcher } from '../switcher/switcher'
import { useState } from 'react'

type Props = {
	text: string
	onSwtich: Function
	isOn: boolean
}

export const PageButton = ({ text, onSwtich, isOn }: Props) => {
	return (
		<div className={styles.pageButton}>
			<p>{text}</p>
			<Switcher isOn={isOn} onSwtich={onSwtich} />
		</div>
	)
}
