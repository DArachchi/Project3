import React, {Component} from 'react';
import {amber700, indigo900, lightBlueA400} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import helpers from '../utils/helpers';

const styles = {
	panelHeader: {
		backgroundColor: '#1A237E'
	},
	panelTitle: {
		color: '#FFFFFF',
		fontSize: '20pt'
	},
	submitButton: {
		backgroundColor: '#1A237E',
		color: '#FFFFFF',
		marginLeft: '110px',
		marginTop: '20px'
	},
	textField: {
		marginLeft: '20px'
	}
}

class AddVehicle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			make: '',
			model: '',
			year: '',
			color: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		helpers.addVehicle(this.state.make, this.state.model, this.state.year, this.state.color).then(function(vehicleData) {
			console.log(vehicleData);
		}.bind(this));

		alert('A name was submitted: ' + this.state.make + this.state.model);
		event.preventDefault();
	}

	render() {
		return(
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">
						<Paper zDepth={2}>
							<div className="panel-heading" style={styles.panelHeader}>
								<h1 className="panel-title" style={styles.panelTitle}>
									<strong>
										<i className="fa fa-car"></i>Add a New Vehicle
									</strong>
								</h1>
							</div>
							<div className="panel-body">
								<form onSubmit={this.handleSubmit}>
										<TextField style={styles.textField} name='make' value={this.state.make} onChange={this.handleChange} floatingLabelText="Enter Vehicle Make"/><br/>
										<TextField style={styles.textField} name='model' value={this.state.model} onChange={this.handleChange} floatingLabelText="Enter Vehicle Model"/><br/>
										<TextField style={styles.textField} name='year' value={this.state.year} onChange={this.handleChange} floatingLabelText="Enter Vehicle Year"/><br/>
										<TextField style={styles.textField} name='color' value={this.state.color} onChange={this.handleChange} floatingLabelText="Enter Vehicle Color"/><br/>
										<input style={styles.submitButton} type="submit" value="Submit" />
								</form>
							</div>
						</Paper>
					</div>
				</div>
			</div>
		)
	}
};

export default AddVehicle;