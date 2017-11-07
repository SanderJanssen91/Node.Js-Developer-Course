const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=104%20dennenstraat%20nijmegen',
  json: true
}, (error, response, body) => {
  console.log(body);
});
