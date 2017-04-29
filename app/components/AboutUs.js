import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

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

class AboutUs extends Component {
	// Clearing and setting initial state
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">
						<Paper zDepth={2}>
							<div className="panel-heading" style={styles.panelHeader}>
								<h1 className="panel-title" style={styles.panelTitle}>
									<strong>
										<i className="fa fa-child"></i>About Us
									</strong>
								</h1>
							</div>
							<div className="panel-body">
								<ul>
									<li>Created by Dino Arachchi in 2017 using React.js</li>
									<li>Number 2</li>
								</ul>
							</div>
						</Paper>
					</div>
				</div>
			</div>
		);
	}
};

export default AboutUs;