const styles = require('resultProduct.scss')

type Props = {
	price: number
	description: string
	locate: string
	img: string
}

export const resultProduct = ({ price, description, locate, img }: Props) => {
	return (
		<div className={styles.resultProduct}>
			<img src={img} alt={`imagen del producto ${description}`} />
			<div>
				<h3>{price}</h3>
				<h4>{description}</h4>
			</div>
			<p>{locate}</p>
		</div>
	)
}
