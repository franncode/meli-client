const styles = require('resultPath.scss')

type Props = {
	price: string
	description: string
	img: string
	locate: string
}

export const resultPath = ({ price, description, locate, img }: Props) => {
	return (
		<div className={styles.resultPath}>
			<img src={img} alt={`imagen del producto ${description}`} />
			<div>
				<h3>{price}</h3>
				<h4>{description}</h4>
			</div>
			<p>{locate}</p>
		</div>
	)
}
