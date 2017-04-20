// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 8080; // Sets an initial port

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// -------------------------------------------------

// GET Route to get all vehicles
app.get("/api/vehicles", function(req, res) {
	db.vehicle.findAll({}).then(function(dbVehicle) {
		res.json(dbVehicle);
	});
});

// GET Route to show specific vehicle
app.get("/api/vehicles/:vehicleid", function(req, res) {
	db.vehicle.findAll({
		where: {
			id: req.params.vehicleid
		}
	}).then(function(dbVehicleInfo) {
		res.json(dbVehicleInfo);
	});
});

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});


// -------------------------------------------------

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	});
});
