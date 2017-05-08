import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import helpers from '../../utils/helpers';
import {Link} from 'react-router';
import Query from './Query';
import Results from './Results';

const styles = {
	button: {
		color: '#FFFFFF',
		float: 'right',
		marginRight: '50px',
		marginTop: '25px',
		width: '30%'
	},
	center: {
		textAlign: 'center'
	},
	panelHeader: {
		backgroundColor: '#1A237E'
	},
	panelTitle: {
		color: '#FFFFFF',
		fontSize: '20pt'
	},
	selectField: {
		marginLeft: '50px'
	}
}

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: {},
			searchCriteria: {}
		};
		this.setQuery = this.setQuery.bind(this);
	}

	componentDidMount() {
		helpers.getVehicles().then(function(vehicleData) {
			this.setState({ results: { data: vehicleData.data } });
			console.log(this.state.results);
		}.bind(this));		
	}

	setQuery(makeIndex) {
		helpers.getByMake(makeIndex).then(function(vehicleData) {
			this.setState({ results: { data: vehicleData.data } });
			console.log(this.state.results);
		}.bind(this));
	}

	render() {
		return(
			<div className="main-container">
				<Query updateSearch={this.setQuery} />
				<Results results={this.state.results} />
			</div>
		)
	}
};

export default Search;