import { useRouter } from 'next/router'
import { TileItem } from '../components/tileItem/tileItem'
import { TrendsTile } from '../components/trendsTile/trendsTile'
const styles = require('./index.scss')

export default function Home() {
	const router = useRouter()
	const tiles = [
		{
			title: 'Alquileres',
			icon: '/icons/rent.svg'
		},
		{
			title: 'Herramientas',
			icon: '/icons/tools.svg'
		},
		{
			title: 'Motos',
			icon: '/icons/bike.svg'
		},
		{
			title: 'Trajes',
			icon: '/icons/suit.svg'
		}
	]

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
			<div className={styles.tiles}>
				{tiles.map(({ title, icon }) => (
					<TileItem title={title} icon={icon} />
				))}
			</div>
			<TrendsTile />
		</div>
	)
}
