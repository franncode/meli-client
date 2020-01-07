const styles = require('./resultPath.scss')

type Props = {
	price: string
	description: string
	img: string
	locate: string
}

export const ResultPath = (props: Props) => {
	return <div className={styles.resultPath}></div>
}
