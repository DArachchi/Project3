// Inclue the React library
import React from 'react';

// Include the react-router module
import {browserHistory, Route, IndexRedirect, IndexRoute, Router} from 'react-router';

// Include Auth0 helper functions
import AuthService from '../utils/AuthService';

// Reference the high-level components
import Main from '../components/Main';
import Search from '../components/Search';
import Results from '../components/Results';
import Login from '../components/Login';
import AddVehicle from '../components/AddVehicle';

const auth = new AuthService('c33DRAUAGSXioyFIhWwPt7mZuVGbwsXm', 'star-car-finder.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
	if (!auth.loggedIn()) {
		replace({ pathname: '/Login' })
	}
}

// Export the Routes
module.exports = (
	// High level component is the Router component.
	<Router history={browserHistory}>
		<Route path="/" component={Main} auth={auth}>
			{/* Default route is for Search */}
			<IndexRedirect to="/Search" />
			{/* Routes */}
			<Route path="Search" component={Search} />
			<Route path="Results" component={Results} />
			<Route path="AddVehicle" component={AddVehicle} />
			<Route path="Login" component={Login} />
		
		</Route>
	</Router>
);
