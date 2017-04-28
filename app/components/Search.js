import React, {Component} from 'react';
import {amber700, indigo900, lightBlueA400} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

const makes = [
	'Audi',
	'Honda',
	'Lotus',
	'Mazda'
];

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
	render() {
		return(
			<div>
				<div className="jumbotron" style={styles.jumbotron}>
					<h1 className="text-center"><strong>Star Car Finder</strong></h1>
					<h2 className="text-center">Search for a Vehicle for Your Next Film</h2>
					<AutoComplete style={styles.center}
						floatingLabelText="Search Vehicle Makes"
						filter={AutoComplete.fuzzyFilter}
						dataSource={makes}
						maxSearchResults={5}
					/>
				</div>
			</div>
		)
	}
};

export default Search;