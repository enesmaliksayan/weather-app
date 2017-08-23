const request = require('request');

var weatherAddress = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/c800296030a50d5f14511faffdb3a42a/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('there is an error while getting weather');
        } else if (body.code === 400) {
            callback('unable to find that address');
        } else {
            callback(undefined, {
                temperature: body.currently.temperature
            })
        }
    })
}

module.exports.weatherAddress = weatherAddress;