import Link from 'next/link'

const styles = require('./tileItem.scss')

type Props = {
	icon: string
	title: string
}

export const TileItem = ({ icon, title }: Props) => {
	return (
		<Link href={`/items?search=${title}`}>
			<div className={styles.tileItem}>
				<img src={icon} alt={`${title} icon`} />
				<h5>{title}</h5>
			</div>
		</Link>
	)
}
