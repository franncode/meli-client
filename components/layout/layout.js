import styles from './layout.scss'

export const Layout = ({ id = 'layout', children }) => {
	return (
		<section id={id} className={styles.layout}>
			{children}
		</section>
	)
}
