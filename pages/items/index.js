import styles from './index.scss'

export default function Results({ search }) {
	return (
		<div className={styles.home}>
			estas buscando <p>{search}</p>
		</div>
	)
}

Results.getInitialProps = async ({ req, query, asPath }) => {
	const { search } = await query
	return { search }
}
