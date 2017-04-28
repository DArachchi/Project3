import React, {Component} from 'react';
import {amber700, indigo900, lightBlueA400} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

const styles = {
	panelHeader: {
		backgroundColor: '#1A237E'
	},
	panelTitle: {
		fontSize: '20pt'
	}
}

class AddVehicle extends Component {
	render() {
		return(
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-primary">
							<div className="panel-heading" style={styles.panelHeader}>
								<h1 className="panel-title" style={styles.panelTitle}>
									<strong>
										<i className="fa fa-car"></i>Add a New Vehicle
									</strong>
								</h1>
							</div>
							<div className="panel-body">
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default AddVehicle;