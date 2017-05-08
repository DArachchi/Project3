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
	db.vehicle.findAll({}).then(function(response) {
		res.json(response);
	});
});

// GET Route to show specific vehicle
app.get("/api/id/:vehicleid", function(req, res) {
	db.vehicle.findAll({
		where: {
			id: req.params.vehicleid
		}
	}).then(function(response) {
		res.json(response);
	});
});

// GET Route to show all vehicles with a specific make
app.get("/api/make/:makeid", function(req, res) {
	db.vehicle.findAll({
		where: {
			makeId: req.params.makeid
		}
	}).then(function(response) {
		res.json(response);
	});
});

// Get Route to show all options for makes
app.get("/api/makes", function(req,res) {
	db.make.findAll({}).then(function(response) {
		res.json(response);
	})
});

// Get Route to show all options for models within a make
app.get("/api/models/:makeId", function(req, res) {
	db.model.findAll({
		where: {
			makeId: req.params.makeId
		}
	}).then(function(response) {
		res.json(response);
	});
});


// Route to add a new vehicle
app.post("/api/vehicles", function(req, res) {
	db.vehicle.create({
		make: req.body.make,
		makeId: req.body.makeId,
		model: req.body.model,
		modelId: req.body.modelId,
		year: req.body.year,
		color: req.body.color
	}).then(function(response) {
		res.json(response);
	})
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
