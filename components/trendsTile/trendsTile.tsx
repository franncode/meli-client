import Link from 'next/link'

const styles = require('./trendsTile.scss')

type Trend = {
	keyword: string
	url?: string
}

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
						<Link href={`/items?search=${list[0].keyword}`}>
							<li>{list[0].keyword}</li>
						</Link>
						<Link href={`/items?search=${list[1].keyword}`}>
							<li>{list[1].keyword}</li>
						</Link>
						<Link href={`/items?search=${list[2].keyword}`}>
							<li>{list[2].keyword}</li>
						</Link>
					</ul>
				)
			})}
		</div>
	)
}
