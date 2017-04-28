// Include the Axios library for HTTP requests
import axios from 'axios';

// Helper Functions
const helpers = {
  // This will return all vehicles from our database
  getVehicles() {
    return axios.get("/api/vehicles")
      .then(function(results) {
        return results;
      });
  },
  // This will save new vehicles to our database
  addVehicle(make, model, year, color) {
    var newVehicle = { make: make, model: model, year: year, color: color};
    return axios.post("/api/vehicles", newVehicle)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },
};


export default helpers;
