require("dotenv").config();
const axios = require("axios");

exports.handler = function(event, context, callback) {
	console.log("netlify function", event, context, callback);
	axios
		.post(process.env.KLAYVIO_URL, {
			api_key: process.env.KLAYVIO_API_KEY,
			profiles: [
				{
					email: JSON.parse(event.body),
				},
			],
		})
		.then(function(response) {
			callback(null, {
				statusCode: 200,
				body: "Success",
			});
			console.log(response);
		})
		.catch(function(error) {
			callback(null, {
				statusCode: 200,
				body: "Fail",
			});
			console.log(error);
		});
};
