import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import helpers from '../../utils/helpers';

const styles = {
	panelHeader: {
		backgroundColor: '#1A237E'
	},
	panelTitle: {
		color: '#FFFFFF',
		fontSize: '20pt'
	},
	tableHeader: {
		color: '#607D8B',
		fontSize: '16pt'
	},
	tableContent: {
		color: '#1A237E',
		fontSize: '14pt'
	}
}

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vehicles: ""
		};
	}

	// When this component mounts, get all vehicles from database
	componentDidMount() {
		if(!this.props.searchCriteria){
			helpers.getVehicles().then(function(vehicleData) {
				this.setState({ vehicles: vehicleData.data });
			}.bind(this));
		}
	}

	renderVehicles() {
		return this.state.vehicles.map(function(vehicle, index) {
			return (
				<TableRow key={index}>
					<TableRowColumn style={styles.tableContent}>{vehicle.year}</TableRowColumn>
					<TableRowColumn style={styles.tableContent}>{vehicle.make}</TableRowColumn>
					<TableRowColumn style={styles.tableContent}>{vehicle.model}</TableRowColumn>
					<TableRowColumn style={styles.tableContent}>{vehicle.color}</TableRowColumn>
				</TableRow>
			);
		}.bind(this));
	}

	renderEmpty() {
		return (
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">
						<Paper zDepth={2}>
							<div className="panel-heading" style={styles.panelHeader}>
								<h1 className="panel-title" style={styles.panelTitle}>
									<strong>
										<i className="fa fa-list"></i>Search Results
									</strong>
								</h1>
							</div>
							<div className="panel-body">
								No Results Found
							</div>
						</Paper>
					</div>
				</div>
			</div>
		)
	}
	// Renders search results
	renderResults() {
		return (
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">
						<Paper zDepth={2}>
							<div className="panel-heading" style={styles.panelHeader}>
								<h1 className="panel-title" style={styles.panelTitle}>
									<strong>
										<i className="fa fa-list"></i>Search Results
									</strong>
								</h1>
							</div>
							<div className="panel-body">
								<Table>
									<TableHeader adjustForCheckbox={false} displaySelectAll={false}>
										<TableRow >
											<TableHeaderColumn style={styles.tableHeader}>Year</TableHeaderColumn>
											<TableHeaderColumn style={styles.tableHeader}>Make</TableHeaderColumn>
											<TableHeaderColumn style={styles.tableHeader}>Model</TableHeaderColumn>
											<TableHeaderColumn style={styles.tableHeader}>Color</TableHeaderColumn>
										</TableRow>
									</TableHeader>
									<TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={true}>
										{this.renderVehicles()}
									</TableBody>
								</Table>
							</div>
						</Paper>
					</div>
				</div>
			</div>
		);
	}

	render() {
		if(!this.state.vehicles) {
			return this.renderEmpty();
		}
		return this.renderResults();
	}
};

export default Results;