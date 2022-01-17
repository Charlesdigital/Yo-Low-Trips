const axios = require("axios").default;


const options = {
  method: 'GET',
  url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap',
  params: {origin: 'HKT', page: 'None', currency: 'CAD', destination: '-'},
  headers: {
    'x-access-token': 'e62e076131586fa535bf5122617771fd',
    'x-rapidapi-host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
    'x-rapidapi-key': 'b171b851e2msh63c29682d8b9f4ep1465fcjsn38b2167465d3'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});