import { useRouter } from 'next/router'
import { TileItem } from '../components/tileItem/tileItem'
import { TrendsTile } from '../components/trendsTile/trendsTile'
import { getTrends } from '../services/products'
import { Trend } from '../services/products.interfaces'
const styles = require('./index.scss')

type Props = {
	trends: Trend[]
}

export default function Home({ trends }: Props) {
	console.log('trends', trends)

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
				{tiles.map(({ title, icon }, index) => (
					<TileItem key={index} title={title} icon={icon} />
				))}
			</div>
			{trends && <TrendsTile trends={trends} />}
		</div>
	)
}

Home.getInitialProps = async ({ query, res }) => {
	try {
		const trends = await getTrends()
		if (trends.status === 200) {
			return trends.data
		} else return { trends: false }
	} catch (error) {
		res.writeHead(302, {
			Location: '/_error'
		})
		res.end()
	}
}
