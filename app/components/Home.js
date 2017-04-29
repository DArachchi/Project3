import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import helpers from '../utils/helpers';
import {Link} from 'react-router';

const styles = {
	button: {
		color: '#FFFFFF',
		fontSize: '18pt',
		width: '50%'
	},
	center: {
		textAlign: 'center'
	},
	jumbotron: {
		color: '#1A237E'
	}
}

class Home extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return(
			<div>
				<div className="jumbotron" style={styles.jumbotron}>
					<div className="text-center">
						<h1><strong>Star Car Finder</strong></h1>
						<Link to='/Search'><RaisedButton style={styles.button} secondary={true}>Search for a Vehicle for Your Next Film</RaisedButton></Link><br/>
						<h2><strong>Or</strong></h2><br/>
						<Link to='/AddVehicle'><RaisedButton style={styles.button} secondary={true}>Submit Your Vehicle to Appear in a Film</RaisedButton></Link>
					</div>
				</div>
			</div>
		)
	}
};

export default Home;