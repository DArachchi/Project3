// Include the Axios library for HTTP requests
var axios = require("axios");

// Helper Functions
var helpers = {
  // This will return any saved articles from our database
  getVehicles: function() {
    return axios.get("/api/vehicles")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
};


// We export the helpers function
module.exports = helpers;
