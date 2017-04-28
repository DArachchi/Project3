import React, {Component} from 'react';
import helpers from '../utils/helpers';

class Results extends Component {
	getInitialState() {
		return {
			results: "",
			vehicles: "",
			vehicleMake: ""
		};
	}

	// When this component mounts, get all vehicles from database
	componentDidMount() {
		helpers.getVehicles().then(function(vehicleData) {
			this.setState({ vehicles: vehicleData.data });
			console.log("vehicle search results", vehicleData.data);
		}.bind(this));
	}

	renderVehicles() {
		return this.props.results.docs.map(function(article, index) {

			// Each article thus reperesents a list group item with a known index
			return (
				<div key={index}>
					<li className="list-group-item">

					</li>
				</div>
			);

		}.bind(this));

	}

	// Helper method to render a container to hold search results
	renderContainer() {
		return (
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title">
									<strong>
										<i className="fa fa-list-alt"></i>
										Results
									</strong>
								</h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
									{this.renderVehicles()}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	render() {
/*		return(
			// If we have no articles, render this HTML
			if (!this.props.results.docs) {
				return (
					<li className="list-group-item">
						<h3>
								Hi
						</h3>
					</li>
				);
			}
			*/
			// If we have articles, return this.renderContainer() which in turn, returns all the articles
			return(
				this.renderContainer()
			)
	}
};

export default Results;