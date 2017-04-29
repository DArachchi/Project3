import React, {Component} from 'react';
import {amber700, indigo900, lightBlueA400} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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
		marginLeft: '20px',
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
			color: '',
			dialogOpen: false,
			submitButtonDisabled: true
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleDialogClose = () => {
		this.setState({dialogOpen: false});
	};

	handleChange(event) {
		const value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
		if(this.state.make && this.state.model && this.state.year && this.state.color) {
			this.setState({submitButtonDisabled: false});
		} else {
			this.setState({submitButtonDisabled:true});
		}
	}

	handleConfirm = () => {
		helpers.addVehicle(this.state.make, this.state.model, this.state.year, this.state.color).then(function(vehicleData) {
			console.log(vehicleData);
		}.bind(this));
		this.handleDialogClose();
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({dialogOpen: true});
	}

	render() {
		const dialogActions = [
			<FlatButton
			label="Cancel"
			primary={true}
			onTouchTap={this.handleDialogClose}
			/>,
			<FlatButton
			label="Confirm"
			primary={true}
			onTouchTap={this.handleConfirm}
			/>,
		];

		return(
			<div className="main-container">
				<div>
					<Dialog title="Add New Vehicle" actions={dialogActions} modal={true} open={this.state.dialogOpen}>
						Are you sure you want to add a<br/><br/>
						{this.state.color} {this.state.year} {this.state.make} {this.state.model}<br/><br/>
						to the database? 
					</Dialog>
				</div>
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
								<TextField style={styles.textField} name='make' value={this.state.make} onChange={this.handleChange} floatingLabelText="Enter Vehicle Make"/><br/>
								<TextField style={styles.textField} name='model' value={this.state.model} onChange={this.handleChange} floatingLabelText="Enter Vehicle Model"/><br/>
								<TextField style={styles.textField} name='year' value={this.state.year} onChange={this.handleChange} floatingLabelText="Enter Vehicle Year"/><br/>
								<TextField style={styles.textField} name='color' value={this.state.color} onChange={this.handleChange} floatingLabelText="Enter Vehicle Color"/><br/>

								<FloatingActionButton style={styles.submitButton} secondary={true} disabled={this.state.submitButtonDisabled} onTouchTap={this.handleSubmit}><ContentAdd /></FloatingActionButton>
							</div>
						</Paper>
					</div>
				</div>
			</div>
		)
	}
};

export default AddVehicle;