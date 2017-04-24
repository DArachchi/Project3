// Include React as a dependency
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
class Main extends Component {

	render() {

		return (
			// We can only render a single div. So we need to group everything inside of this main-container one
			<MuiThemeProvider>
				<div className="main-container">
					<div className="container">
						{/* Navbar */}
						<nav className="navbar navbar-default" role="navigation">
							<div className="container-fluid">
								<div className="navbar-header">
									<button
										type="button"
										className="navbar-toggle"
										data-toggle="collapse"
										data-target=".navbar-ex1-collapse"
									>
										<span className="sr-only">Toggle navigation</span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
									<Link className="navbar-brand" to="/">Star Car Finder</Link>
								</div>

								<div className="collapse navbar-collapse navbar-ex1-collapse">
									<ul className="nav navbar-nav navbar-right">
									</ul>
								</div>
							</div>
						</nav>

						{/* Jumbotron */}
						<div className="jumbotron">
							<h1 className="text-center"><strong>Star Car Finder</strong></h1>
							<h2 className="text-center">Search for a Vehicle for Your Next Film</h2>
						</div>


						{/* Here we will deploy the sub components (Search or Saved */}
						{/* These sub-components are getting passed as this.props.children */}
						{this.props.children}

						<footer>
							<hr />
							<p className="pull-right">
								<i className="fa fa-github" aria-hidden="true"></i>
								Proudly built using React.js
							</p>
						</footer>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
};

// Export the module back to the route
export default Main;
