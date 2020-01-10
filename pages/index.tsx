import { useRouter } from 'next/router'
const styles = require('./index.scss')

export default function Home() {
	const router = useRouter()

	const hanldeClick = () => {
		router.push('/items?search=promociones mercado pago')
	}

	return (
		<div className={styles.home}>
			<img
				src='/images/banner.png'
				alt='banner'
				onClick={() => hanldeClick()}
			/>
		</div>
	)
}
