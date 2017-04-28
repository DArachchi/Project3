import React, {Component} from 'react';
import {amber700, indigo900, lightBlueA400} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

const styles = {
	button: {
		margin: '50px'
	},
	center: {
		textAlign: 'center'
	},
	jumbotron: {
		backgroundColor: '#FFFFFF',
		color: '#1A237E'
	}
}

class AddVehicle extends Component {
	render() {
		return(
			<div>
				<div className="jumbotron" style={styles.jumbotron}>
					<h1 className="text-center"><strong>Star Car Finder</strong></h1>
					<h2 className="text-center">Add a New Vehicle</h2>
				</div>
			</div>
		)
	}
};

export default AddVehicle;