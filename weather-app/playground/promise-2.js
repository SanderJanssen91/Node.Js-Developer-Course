const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    var stdUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    request({
    url: stdUrl+encodedAddress,
    json: true
    }, (error, response, body) => {
      if (error){
        reject('Unable to connect to Google servers.');
      } else if(body.status === 'ZERO_RESULTS') {
        reject('Unable to find address.')
      } else if(body.status === 'OVER_QUERY_LIMIT') {
        reject('Unable to connect to google geocode server for now, please retry in a few seconds')
      } else if (body.status === 'OK'){
        resolve({
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
        };
      });
  }
)};

geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
})
