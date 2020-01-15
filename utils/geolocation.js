const geolocation = navigator => {
	navigator.geolocation.getCurrentPosition(
		({ coords: { latitude, longitude } }) => {
			console.log('latitude', latitude)
			console.log('longitude', longitude)
		}
	)
}

// https://developer.mozilla.org/es/docs/WebAPI/Using_geolocation
