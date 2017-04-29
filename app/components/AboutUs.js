import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

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
		this.state = {
			techBoxOpen: false
		}
	}

	openGithub() {
		window.open('https://github.com/DArachchi/Star-Car-Finder', '_blank');
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
								<List>
									<ListItem disabled={true} primaryText="2017 Dino Arachchi" leftIcon={<i className="fa fa-copyright" aria-hidden="true"></i>} />
									<ListItem primaryText="Technology Stack" initiallyOpen={false} primaryTogglesNestedList={true} leftIcon={<i className="fa fa-cogs" aria-hidden="true"></i>}
									nestedItems={[
										<ListItem disabled={true} key={1} primaryText="FrontEnd: React.js"	leftIcon={<i className="fa fa-facebook-official" aria-hidden="true"></i>} />,
										<ListItem disabled={true} key={2} primaryText="Routing: Express.js"	leftIcon={<i className="fa fa-arrows" aria-hidden="true"></i>} />,
										<ListItem disabled={true} key={3} primaryText="Server: Node.js" leftIcon={<i className="fa fa-server" aria-hidden="true"></i>} />,
										<ListItem disabled={true} key={4} primaryText="Database: MySQL" leftIcon={<i className="fa fa-database" aria-hidden="true"></i>} />
									]}
									/>
									<ListItem onTouchTap={this.openGithub} primaryText="Github Repository Link" leftIcon={<i className="fa fa-github" aria-hidden="true"></i>} />
								</List>
							</div>
						</Paper>
					</div>
				</div>
			</div>
		);
	}
};

export default AboutUs;