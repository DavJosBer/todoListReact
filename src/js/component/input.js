import React, { useState } from "react";
import { List } from "./list.js";
import PropTypes from "prop-types";
//create your first component
export const Input = props => {
	return (
		<>
			<div className="card-header bg-white p-1 d-flex justify-content-between">
				<input
					type="text"
					placeholder="Add here a toDo"
					className="form-control border-0 mx-1"
					aria-label="Amount (to the nearest dollar)"
					value={props.value}
					onChange={props.onChange}
				/>
				<button className="btn btn-primary mx-1" type="submit">
					AddTodo
				</button>
			</div>
		</>
	);
};
Input.propTypes = {
	onSubmit: PropTypes.func,
	value: PropTypes.string,
	todos: PropTypes.array,
	onChange: PropTypes.func
};
