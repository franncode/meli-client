const styles = require('./imageProduct.scss')

type Props = {
	id?: string
	picture: string
}

export const ImageProduct = ({ id = 'imageProduct', picture }: Props) => {
	return (
		<div id={id} className={styles.imageProduct}>
			<img src={picture} alt='picture of the product' />
		</div>
	)
}
