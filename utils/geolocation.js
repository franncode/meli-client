const geolocation = navigator => {
	navigator.geolocation.getCurrentPosition(
		({ coords: { latitude, longitude } }) => {
			console.log('latitude', latitude)
			console.log('longitude', longitude)
		}
	)
}
