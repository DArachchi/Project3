// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("../components/Main");


// Export the Routes
module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
);
