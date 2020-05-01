const request = require('request')

const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXl1c2h0MjgiLCJhIjoiY2s5bWtldnlkMDViczNucWhkZ3J0eXB3byJ9.e6GwRCWwT7i5AA3o851AtQ'

	request({ url, json: true}, (error,{ body }) => {
		if (error){
			callback('unable to connect to location services!', undefined)
		} else if (body.features.lenght === 0){
			callback('unable to find location, try another location', undefined)
		} else {
			callback(undefined, {
				latitude: body.features[0].center[0],
				longitude: body.features[0].center[1],
				location: body.features[0].place_name
			})
		}
		// } else {
		// 	callback(undefined, {
		// 		latitude: body.features.length,
		// 		longitude: '',
		// 		location: ''
		// 	})
		// }
	})
}


module.exports = geocode