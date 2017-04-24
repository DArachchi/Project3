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
var Main = require("../components/Main").default;
var Search = require("../components/Search").default;
var Results = require("../components/Results").default;


// Export the Routes
module.exports = (
	// High level component is the Router component.
	<Router history={browserHistory}>
		<Route path="/" component={Main}>

			{/* If user selects Search or Saved show the appropriate component 
			*/}
			<Route path="Search" component={Search} />
			<Route path="Results" component={Results} />
			{/* If user selects any other path... we get the Home Route 
			*/}
			<IndexRoute component={Search} />
		
		</Route>
	</Router>
);
