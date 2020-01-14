import Link from 'next/link'
import { Trend } from '../../services/interfaces/trends.interfaces'

const styles = require('./trendsTile.scss')

type Props = {
	trends: Trend[]
}

export const TrendsTile = ({ trends }: Props) => {
	const trendsLists = [
		trends.slice(0, 3),
		trends.slice(3, 6),
		trends.slice(6, 9)
	]

	return (
		<div className={styles.trendsTile}>
			<h3>Mas buscados:</h3>
			{trendsLists.map((list, index) => {
				return (
					<ul key={index}>
						{list.map((item, index) => {
							return (
								<Link key={index} href={`/items?search=${item}`}>
									<li>{item}</li>
								</Link>
							)
						})}
					</ul>
				)
			})}
		</div>
	)
}
