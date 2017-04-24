import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';


const makes = [
	'Audi',
	'BMW',
	'Ferrari',
	'Honda',
	'Lamborghini',
	'Lotus',
	'Mazda',
	'Mercedes-Benz'
];

/**
 * Two examples of filtering. The first uses `caseInsensitiveFilter`, the second uses `fuzzyFilter`,
 * and limits the number of results displayed using the `maxSearchResults` property.
 */
class Search extends Component {
	render() {
		return(
			<div>
				<AutoComplete
					floatingLabelText="Search Car Makes"
					filter={AutoComplete.fuzzyFilter}
					dataSource={makes}
					maxSearchResults={5}
				/>
			</div>
		)
	}
};

export default Search;