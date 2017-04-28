import React, {Component} from 'react';
import {amber700, indigo900, lightBlueA400} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import helpers from '../utils/helpers';

const makes = [];

const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

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

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			make: null,
			vehicles: ""
		};
	}

	componentDidMount() {
		helpers.getVehicles().then(function(vehicleData) {
			this.setState({ vehicles: vehicleData.data });
			console.log(this.state.vehicles)
			for(let i=0;i<this.state.vehicles.length;i++) {
				if(makes.indexOf(this.state.vehicles[i].make) == -1) {
					makes.push(<MenuItem value={this.state.vehicles[i].make} key={i} primaryText={this.state.vehicles[i].make} />);
				}
			}
			makes.sort();
		}.bind(this));
	}

	handleChange = (event, index, value) => {
		this.setState({make: value});
	}

	render() {
		return(
			<div>
				<div className="jumbotron" style={styles.jumbotron}>
					<h1 className="text-center"><strong>Star Car Finder</strong></h1>
					<h2 className="text-center">Search for a Vehicle for Your Next Film</h2>

					<SelectField
					value={this.state.value}
					onChange={this.handleChange}
					>
					{makes}
					</SelectField>

				</div>
			</div>
		)
	}
};

export default Search;