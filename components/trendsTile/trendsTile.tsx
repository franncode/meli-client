import Link from 'next/link'
import { Trend } from '../../services/interfaces/trends.interfaces'

const styles = require('./trendsTile.scss')

type Props = {
	trends: Trend[]
}

export const TrendsTile = ({ trends }: Props) => {
	const trendsLists = [trends.slice(0, 3), trends.slice(3, 6), trends.slice(6)]

	return (
		<div className={styles.trendsTile}>
			<h3>Mas buscados:</h3>
			{trendsLists.map((list, index) => {
				return (
					<ul key={index}>
						<Link href={`/items?search=${list[0]}`}>
							<li>{list[0]}</li>
						</Link>
						<Link href={`/items?search=${list[1]}`}>
							<li>{list[1]}</li>
						</Link>
						<Link href={`/items?search=${list[2]}`}>
							<li>{list[2]}</li>
						</Link>
					</ul>
				)
			})}
		</div>
	)
}
