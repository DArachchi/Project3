// Include the Axios library for HTTP requests
import axios from 'axios';

// Helper Functions
const helpers = {
	// This will return all choices for makes from our database
	getMakes() {
		return axios.get("/api/makes")
		.then(function(response) {
			return response;
		});
	},
	//This will return all choices for models from our database
	getModels(makeIndex) {
		let queryUrl = "/api/models/" + makeIndex;	
		return axios.get(queryUrl)
			.then(function(response) {
			return response;
		});
	},
	// This will return all vehicles from our database
	getVehicles() {
		return axios.get("/api/vehicles")
		.then(function(response) {
			return response;
		});
	},
	// This will return all vehicles from a given database from our database
	getByMake(makeIndex) {
		let queryUrl = "/api/makes/" + makeIndex;
		return axios.get(queryUrl)
			.then(function(response) {
				return response;	
			});
	},
	// This will save new vehicles to our database
	addVehicle(make, makeId, model, modelId, year, color) {
		let newVehicle = {
			make: make,
			makeId: makeId,
			model: model,
			modelId: modelId,
			year: year,
			color: color
		};

		return axios.post("/api/vehicles", newVehicle)
		.then(function(response) {
			return response.data;
		});
	},
};

export default helpers;
