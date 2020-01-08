const styles = require('./resultCategories.scss')

type Props = {
	categories: string[]
}

const ResultCategories = ({ categories }: Props) => {
	return <div className={styles.resultCategories}>hola</div>
}
export default ResultCategories
