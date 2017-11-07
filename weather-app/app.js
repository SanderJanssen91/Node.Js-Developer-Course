const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  console.log(argv.address);
  var encodedAddress = encodeURIComponent(argv.address);
  var stdUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

request({
  url: stdUrl+encodedAddress,
  json: true
}, (error, response, body) => {
    var lat = body.results[0].geometry.location.lat;
    var lng = body.results[0].geometry.location.lng;
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${lat}`);
    console.log(`Long: ${lng}`);
});
