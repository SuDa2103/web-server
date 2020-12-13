const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b79f63fcfe5cd53c78f90237930055ee&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to connect to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees')
        }
    })
}

module.exports = forecast