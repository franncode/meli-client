import Link from 'next/link'

const styles = require('./itemTile.scss')

type Props = {
	icon: string
	title: string
}

export const ItemTile = ({ icon, title }: Props) => {
	return (
		<Link href={`/items?search=${title}`}>
			<div className={styles.itemTile}>
				<img src={icon} alt={`${title} icon`} />
				<h5>{title}</h5>
			</div>
		</Link>
	)
}
