const styles = require('./pathBar.scss')

type Props = {
	type: 'categories' | 'path'
	categories: string[]
}

export const PathBar = ({ type, categories }: Props) => {
	const limitCategories = categories.filter((category, index) => index < 4)

	return (
		<div className={styles.pathBar}>
			{type === 'categories' && <p>Busquedas relacionadas: &nbsp;</p>}
			{type === 'categories' &&
				limitCategories.map((category, index) => {
					if (index !== 3 && index !== limitCategories.length - 1) {
						return <p key={index}>{`${category} -\u00A0`}</p>
					} else return <p key={index}>{`${category}`}</p>
				})}
			{type === 'path' &&
				categories.map((category, index) => {
					if (index !== categories.length - 1) {
						return <p key={index}>{`${category}\u00A0 \u00A0>\u00A0 \u00A0`}</p>
					} else
						return (
							<p key={index} className={styles.lastPath}>{`${category}`}</p>
						)
				})}
		</div>
	)
}

export default PathBar
