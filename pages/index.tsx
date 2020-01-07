const styles = require('./index.scss')
const { useEffect } = require('react')

export default function Home() {
	useEffect(() => {
		const fetchs = async () => {
			const test = await fetch(
				'https://server-mercadolibre.herokuapp.com/api/items?q=hbola'
			)
			console.log('test', await test.json())
		}
		fetchs()
	}, [])

	return <div className={styles.home}></div>
}
