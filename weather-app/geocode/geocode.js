const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
  var stdUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

  request({
  url: stdUrl+encodedAddress,
  json: true
  }, (error, response, body) => {
    if (error){
      callback('Unable to connect to Google servers.');
    } else if(body.status === 'ZERO_RESULTS') {
      callback('Unable to find address.')
    } else if(body.status === 'OVER_QUERY_LIMIT') {
      callback('Unable to connect to google geocode server for now, please retry in a few seconds')
    } else if (body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      });
      };
    });
  };

module.exports = {
  geocodeAddress
}
