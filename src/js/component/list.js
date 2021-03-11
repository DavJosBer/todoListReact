import React from "react";
import PropTypes from "prop-types";
//create your first component
export const List = props => {
	return (
		<>
			<li className="list-group-item d-flex justify-content-between">
				{props.lista}
				<span onClick={props.delete}>X</span>
			</li>
		</>
	);
};
List.propTypes = {
	lista: PropTypes.string,
	delete: PropTypes.func,
	index: PropTypes.number
};
