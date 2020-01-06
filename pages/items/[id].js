import styles from './[id].scss'

export default function Item({ search }) {
	return (
		<div className={styles.home}>
			producto <p>{search}</p>
		</div>
	)
}

Item.getInitialProps = async ({ req, query, asPath }) => {
	const { search } = await query
	return { search }
}
