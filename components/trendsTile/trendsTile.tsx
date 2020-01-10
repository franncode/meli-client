const styles = require('./trendsTile.scss')

type Trend = {
	keyword: string
	url?: string
}

type Props = {
	trends?: Trend[]
}

export const TrendsTile = ({
	trends = [
		{
			keyword: 'Libros'
		},
		{ keyword: 'Remedios' },
		{ keyword: 'Zapatillas' },
		{
			keyword: 'Libros'
		},
		{ keyword: 'Remedios' },
		{ keyword: 'Zapatillas' },
		{
			keyword: 'Libros'
		},
		{ keyword: 'Remedios' },
		{ keyword: 'Zapatillas' }
	]
}: Props) => {
	const trendsLists = [trends.slice(0, 3), trends.slice(3, 6), trends.slice(6)]

	return (
		<div className={styles.trendsTile}>
			<h3>Mas buscados:</h3>
			{trendsLists.map(list => {
				return (
					<ul>
						<li>{list[0].keyword}</li>
						<li>{list[1].keyword}</li>
						<li>{list[2].keyword}</li>
					</ul>
				)
			})}
		</div>
	)
}
