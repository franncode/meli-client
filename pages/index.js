import styles from './index.scss'
import { useEffect } from 'react'

export default function Home() {
	useEffect(() => {
		const fetchs = async () => {
			const test = await fetch(
				'https://server-mercadolibre.herokuapp.com/api/items?q=hbola'
			)
			console.log('test', test)
		}
		fetchs()
	}, [])

	return <div className={styles.home}></div>
}
