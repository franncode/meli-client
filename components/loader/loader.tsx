const styles = require('./loader.scss')

type Props = {
	id?: string
}

export const Loader = ({ id = 'loader' }: Props) => (
	<div id={id} className={styles.loader}>
		<img src={'/icons/logo.png'} alt='loading' />
	</div>
)
