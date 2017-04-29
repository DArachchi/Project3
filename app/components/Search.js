import React, {Component} from 'react';
import {amber700, indigo900, lightBlueA400} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import helpers from '../utils/helpers';


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
			makes: [],
			makeMenuItems: [],
			vehicles: ""
		};
	}

	componentDidMount() {
		helpers.getVehicles().then(function(vehicleData) {
			this.setState({ vehicles: vehicleData.data });
			// Fill the 'makes' array with all the makes without duplicates and sort in alphabetical order
			for(let i=0;i<this.state.vehicles.length;i++) {
				if(this.state.makes.indexOf(this.state.vehicles[i].make) == -1) {
					this.state.makes.push(this.state.vehicles[i].make);
				}
				this.state.makes.sort();
			}
			// Create menu items for each make
			for(let i=0;i<this.state.makes.length;i++) {
					this.state.makeMenuItems.push(<MenuItem value={this.state.makes[i]} key={i} primaryText={this.state.makes[i]} />);
			}
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
					value={this.state.make}
					onChange={this.handleChange}
					floatingLabelText="Vehicle Make"
					>
					{this.state.makeMenuItems}
					</SelectField>
					<RaisedButton>Search by Vehicle Make</RaisedButton>

				</div>
			</div>
		)
	}
};

export default Search;