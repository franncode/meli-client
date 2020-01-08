import { Fragment } from 'react'
const styles = require('./resultCategories.scss')

type Props = {
	categories: string[]
}

const ResultCategories = ({ categories }: Props) => {
	return (
		<div className={styles.resultCategories}>
			{categories
				.filter((category, index) => index < 5)
				.map((category, index) => (
					<Fragment key={index}>
						<p>{`${category} -\u00A0`}</p>
						{index === 4 && <p>{` ${category}2`}</p>}
					</Fragment>
				))}
		</div>
	)
}
export default ResultCategories
