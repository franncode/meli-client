const styles = require('./loader.scss')

const Loader = () => (
	<div className={styles.loader}>
		<img src={'/icons/logo.png'} alt='loading' />
	</div>
)

export default Loader
