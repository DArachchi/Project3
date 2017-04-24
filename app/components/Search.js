import React, {Component} from 'react';
import {amber700, indigo900, lightBlueA400} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

const makes = [
	'Audi',
	'BMW',
	'Ferrari',
	'Ford',
	'Honda',
	'Lamborghini',
	'Lotus',
	'Mazda',
	'Mercedes-Benz',
	'Toyota'
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
/**
 * Two examples of filtering. The first uses `caseInsensitiveFilter`, the second uses `fuzzyFilter`,
 * and limits the number of results displayed using the `maxSearchResults` property.
 */
class Search extends Component {
	render() {
		return(
			<div>
				<div className="jumbotron" style={styles.jumbotron}>
					<h1 className="text-center"><strong>Star Car Finder</strong></h1>
					<h2 className="text-center">Search for a Vehicle for Your Next Film</h2>
							<div style={styles.center}>
								<RaisedButton label="Sign Up" style={styles.button} primary={true} />
								<RaisedButton label="Login" style={styles.button} primary={true} />
							</div>
					<AutoComplete
						floatingLabelText="Search Car Makes"
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