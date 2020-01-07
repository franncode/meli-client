const styles = require('./resultProduct.scss')

type Props = {
	price: number
	description: string
	locate: string
	img: string
	freeShipping: boolean
}

export const ResultProduct = ({
	price,
	description,
	locate,
	img,
	freeShipping
}: Props) => {
	console.log('freeShipping', freeShipping)

	return (
		<div className={styles.resultProduct}>
			<img src={img} alt={`imagen del producto ${description}`} />
			<div>
				<div>
					<h3>{`$ ${price}`}</h3>{' '}
					{freeShipping && <img src='/icons/shipping.png' alt='' />}
				</div>
				<h4>{description}</h4>
			</div>
			<p>{locate}</p>
		</div>
	)
}
