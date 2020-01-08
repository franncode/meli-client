const styles = require('./imageProduct.scss')

type Props = {
	picture: string
}

export const ImageProduct = ({ picture }: Props) => {
	return (
		<div className={styles.imageProduct}>
			<img src={picture} alt='picture of the product' />
		</div>
	)
}
