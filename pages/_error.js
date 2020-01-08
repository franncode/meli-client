import styles from './_error.scss'

const Error = ({
	statusCode,
	text = 'Parace que quieres acceder a una pagina que no existe'
}) => {
	return (
		<div className={styles.error}>
			<img src='/images/woman.svg' alt='woman with magnifying glass' />
			<p>
				{!text && statusCode
					? `Ups! Parece que se ha generado un error ${statusCode} en nuestro servidor...`
					: 'Ups! Parece que se ha generado un error...'}
			</p>
		</div>
	)
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

export default Error
