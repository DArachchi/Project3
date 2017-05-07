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
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import helpers from '../utils/helpers';
import {Link} from 'react-router';

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
	selectField: {
		marginLeft: '20px',
	},
	textField: {
		marginLeft: '20px'
	}
}

// Create options for year dropdown menu
const yearMenuItems = [];
for(let i=1900; i<2019;i++) {
	yearMenuItems.push(<MenuItem value={i} key={i} primaryText={i} />);
}

// Create options for color dropdown menu
const colorOptions = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "White", "Silver", "Gray", "Black", "Other"];
const colorMenuItems =[];
for(let i=0; i<colorOptions.length;i++) {
	colorMenuItems.push(<MenuItem value={colorOptions[i]} key={i} primaryText={colorOptions[i]} />);				
}

class AddVehicle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			make: '',
			makeId: '',
			model: '',
			modelId: '',
			year: '',
			color: '',
			makeOptions: [],
			makeMenuItems: [],
			modelOptions: [],
			modelMenuItems: [],
			dialogOpen: false,
			modelSelectDisabled: true,
			yearSelectDisabled: true,
			colorSelectDisabled: true,
			submitButtonDisabled: true
		};
		this.handleMakeChange = this.handleMakeChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		// Get list of options for makes from database and create menu items for dropdown menu
		helpers.getMakes().then(function(makeData) {
			this.setState({ makeOptions: makeData.data });
			for(let i=0; i<this.state.makeOptions.length;i++) {
				this.state.makeMenuItems.push(<MenuItem value={this.state.makeOptions[i].title} key={i} primaryText={this.state.makeOptions[i].title} />);				
			}
		}.bind(this));
	}

	handleDialogClose = () => {
		this.setState({ dialogOpen: false });
	}

	handleConfirm = () => {
		helpers.addVehicle(this.state.make, this.state.makeId, this.state.model, this.state.modelId, this.state.year, this.state.color)
		.then(function(vehicleData) {
			console.log(vehicleData);
		}.bind(this));
		this.handleDialogClose();
	}

	handleMakeChange = (event, index, value) => {
		this.setState({ make: value });
		this.setState({ makeId: index+1 });
		this.setState({ modelSelectDisabled: false });
		this.setState({ modelMenuItems: [] });
		this.setState({ submitButtonDisabled: true });

		helpers.getModels(index+1).then(function(modelData) {
			this.setState({ modelOptions: modelData.data });
			for(let i=0; i<this.state.modelOptions.length;i++) {
				this.state.modelMenuItems.push(<MenuItem value={this.state.modelOptions[i].title} key={i} primaryText={this.state.modelOptions[i].title} />);				
			}
		}.bind(this));
	}

	handleModelChange = (event, index, value) => {
		this.setState({ model: value });
		this.setState({ modelId: index });
		this.setState({ yearSelectDisabled: false });
		if(this.state.color && this.state.year) {
			this.setState({ submitButtonDisabled: false });
		}
	}

	handleYearChange = (event, index, value) => {
		this.setState({ year: value });
		this.setState({ colorSelectDisabled: false });
	}

	handleColorChange = (event, index, value) => {
		this.setState({ color: value });
		this.setState({ submitButtonDisabled: false });
	}

	handleSubmit(event) {
		this.setState({dialogOpen: true});
	}

	render() {
		const dialogActions = [
			<FlatButton label="Cancel" primary={true} onTouchTap={this.handleDialogClose} />,
			<Link to="/Home"><FlatButton label="Confirm" primary={true} onTouchTap={this.handleConfirm} /></Link>,
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
								{/* Dropdown menu for selecting Make*/}
								<SelectField value={this.state.make} onChange={this.handleMakeChange} floatingLabelText="Select Vehicle Make" style={styles.selectField} >
									{this.state.makeMenuItems}
								</SelectField>
								<br/>
								{/* Dropdown menu for selecting Model*/}
								<SelectField disabled={this.state.modelSelectDisabled} value={this.state.model} onChange={this.handleModelChange} floatingLabelText="Select Vehicle Model" style={styles.selectField} >
									{this.state.modelMenuItems}
								</SelectField>	
								<br/>
								{/* Dropdown menu for selecting Year */}
								<SelectField disabled={this.state.yearSelectDisabled} value={this.state.year} onChange={this.handleYearChange} floatingLabelText="Select Vehicle Year" style={styles.selectField} >
									{yearMenuItems}
								</SelectField>	
								<br/>

								{/* Dropdown menu for selecting Color */}
								<SelectField disabled={this.state.colorSelectDisabled} value={this.state.color} onChange={this.handleColorChange} floatingLabelText="Select Vehicle Color" style={styles.selectField} >
									{colorMenuItems}
								</SelectField>	
								<br/>

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