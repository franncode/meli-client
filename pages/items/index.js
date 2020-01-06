import styles from './index.scss'
import { searchProduct } from '../../services/products'

export default function Results({ search, results }) {
	console.log('results', results)

	return (
		<div className={styles.home}>
			estas buscando <p>{search}</p>
		</div>
	)
}

Results.getInitialProps = async ({ req, query, asPath }) => {
	const { search } = await query
	const results = await searchProduct(query.search)
	return { search, results }
}
