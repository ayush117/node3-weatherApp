const request = require('request')

const forecast = (lat ,log , callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=edebe166727de31453e5956f457d3950&query=' + lat + ',' + log +'&units=f'

	request({ url, json: true }, (error, { body }) => {
		if(error){
			callback('unable to connect ',undefined)
		} else if (body.error) {
			callback('unable to find location', undefined)
		} else {
			console.log(body)
			callback(
				undefined,
				body.current.weather_descriptions[0] + ' it is currently '+ body.current.temperature + ' degree out. It feels like ' + 
				body.current.feelslike + ' degree out.' + 'The humidity is ' + body.current.humidity + "%."
			)
		}
	})
}

module.exports = forecast