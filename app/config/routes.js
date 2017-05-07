// Inclue the React library
import React from 'react';

// Include the react-router module
import {browserHistory, Route, IndexRedirect, IndexRoute, Router} from 'react-router';

// Include Auth0 helper functions
import AuthService from '../utils/AuthService';

// Reference the high-level components
import Main from '../components/Main';
import Home from '../components/Home';
import Search from '../components/Search/Search';
import Query from '../components//Search/Query';
import Results from '../components/Search/Results'
import AllVehicles from '../components/AllVehicles';
import Login from '../components/Login';
import AddVehicle from '../components/AddVehicle';
import AboutUs from '../components/AboutUs';

const auth = new AuthService('c33DRAUAGSXioyFIhWwPt7mZuVGbwsXm', 'star-car-finder.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
	if (!auth.loggedIn()) {
		replace({ pathname: '/Login' })
	}
}

// Export the Routes
export default (
	// High level component is the Router component.
	<Router history={browserHistory}>
		{/* Main component is main wrapper */}
		<Route path="/" component={Main} auth={auth}>
			{/* Default route is for Home */}
			<IndexRedirect to="/Home" />
			{/* Routes for each 'page' starting with Home*/}
			<Route path="Home" component={Home} />
			{/* Route for Search component with sub-routes for query and results components */}
			<Route path="Search" component={Search}>
				<IndexRedirect to="Query" component={Query} />
				<Route path="Query" component={Query} />
				<Route path="Results" component={Results} />
			</Route>
			{/* Route to show all vehicles in database */}
			<Route path="AllVehicles" component={AllVehicles} />
			{/* Route for component to add a new vehicle */}
			<Route path="AddVehicle" component={AddVehicle} />
			{/* Route for Auth0 component (Currently under development) */}
			<Route path="Login" component={Login} />
			{/* Route for component to show information about application */}
			<Route path="AboutUs" component={AboutUs} />
		</Route>
	</Router>
);