// Include React as a dependency
import React, {Component, PropTypes as T } from 'react';
import Login from './Login';
import {amber700, deepOrangeA400, indigo900, lightBlueA400} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { Jumbotron } from 'react-bootstrap';
import {Link} from 'react-router';

const styles = {
	center: {
		textAlign: 'center'
	},
	contentBox: {
		marginTop: '100px'
	},
	drawerItem: {
		marginLeft: '50px',
		marginTop: '20px',
		width: '150px'
	},
	navibar: {
		position: 'fixed'
	},
  title: {
		color: '#FFFFFF',
    cursor: 'pointer'
  },
}

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: deepOrangeA400,
		accent1Color: indigo900
	}
});

// Create the Main component
class Main extends Component {

	static contextTypes = {
		router: T.object
	};

	// Constructor and states for Navi Drawer
	constructor(props) {
		super(props);
		this.state = {
			searchCriteria: {
				make: "",
				model: "",
				year: ""
			},
			drawerOpen: false
		};
		this.handleToggle = this.handleToggle.bind(this);
		this.handleClose = this.handleClose.bind(this);
	};

	handleToggle() {
		return (this.setState({drawerOpen: !this.state.drawerOpen}));
	};
	handleClose() {
		return(this.setState({drawerOpen: false}));
	};

	render() {
		let children = null;
		if (this.props.children) {
			children = React.cloneElement(this.props.children, {
				auth: this.props.route.auth //sends auth instance to children
			})
		}

		return (
			// Main container includes material-ui theme
			<MuiThemeProvider muiTheme={muiTheme}>
				<div className="main-container">
					<AppBar title={<Link to='/Home' style={styles.title}>Star Car Finder</Link>} style={styles.navibar} onLeftIconButtonTouchTap={this.handleToggle} iconElementRight={<Link to='/AboutUs'><FlatButton style={styles.title} label="About Us" /></Link>} />
					<Drawer docked={false} width={300} open={this.state.drawerOpen} onRequestChange={(open) => this.setState({open})}>
						<AppBar title={<Link to='/Home' style={styles.title} onTouchTap={this.handleClose}>Star Car Finder</Link>} style={styles.navibar} iconElementLeft={<IconButton onTouchTap={this.handleClose}><NavigationClose /></IconButton>}> </AppBar>
						<MenuItem style={styles.drawerItem} onTouchTap={this.handleClose}>Register</MenuItem>
						<MenuItem style={styles.drawerItem} onTouchTap={this.handleClose}>Sign In</MenuItem>
						<Link to="/AllVehicles"><MenuItem style={styles.drawerItem} onTouchTap={this.handleClose}>Show All Vehicles</MenuItem></Link>
						<Link to="/Search"><MenuItem style={styles.drawerItem} onTouchTap={this.handleClose}>Search for a Vehicle</MenuItem></Link>
						<Link to="/AddVehicle"><MenuItem style={styles.drawerItem} onTouchTap={this.handleClose}>Add a New Vehicle</MenuItem></Link>
					</Drawer>

					<div className="container">
						<div style={styles.contentBox}>
							{/* Here we will deploy the sub components */}
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
				</div>
			</MuiThemeProvider>
		);
	}
};

// Export the module back to the route
export default Main;
