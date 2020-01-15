const styles = require('./installBanner.scss')

type Props = {
	onInstall?: Function
}

export const InstallBanner = ({ onInstall }: Props) => {
	return (
		<footer className={styles.bannerInstall}>
			<h4>Instalá la app para una mejor experiencia</h4>
			<div>
				<button onClick={() => onInstall(false)}>no gracias</button>
				<button onClick={() => onInstall(true)}>
					<img src='/icons/logo.png' alt='logo aplicacion' />
					instalar
				</button>
			</div>
		</footer>
	)
}
