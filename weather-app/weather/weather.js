const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
  url: `https://api.darksky.net/forecast/9d9f7ed8ba9a24089207b87ae534d4de/${lat},${lng}`,
  json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
    });
}

  module.exports = {
    getWeather
  }
