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

// Route to get all saved articles
app.get("/api/saved", function(req, res) {

  Article.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

// Route to add an article to saved list
app.post("/api/saved", function(req, res) {
  var newArticle = new Article(req.body);

  console.log(req.body);

  newArticle.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to delete an article from saved list
app.delete("/api/saved/", function(req, res) {

  var url = req.param("url");

  Article.find({ url: url }).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
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
