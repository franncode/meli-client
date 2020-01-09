const styles = require('./pathBar.scss')

type Props = {
	type: 'categories' | 'path'
	categories: string[]
}

export const PathBar = ({ type, categories }: Props) => {
	return (
		<div className={styles.pathBar}>
			{type === 'categories' &&
				categories
					.filter((category, index) => index < 5)
					.map((category, index) => {
						if (index !== 4) {
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
