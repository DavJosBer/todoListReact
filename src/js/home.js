import React, { useState, useEffect } from "react";
import { List } from "./component/list.js";
import { Input } from "./component/input.js";
//create your first component
export function Home() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		if (input === "") {
			return alert("Add a Task");
		}
		setTodos(todos.concat(input));
		setInput("");
	};
	const deleteTodo = event => {
		event.target.parentElement.remove();
	};
	const newTodo = todos.map((item, index) => {
		return <List lista={item} key={index} delete={deleteTodo} />;
	});

	return (
		<>
			<div className="container py-2">
				<div className="row">
					<div className="col-12 text-center my-3">
						<h1 className="text-primary">ToDos</h1>
					</div>
					<div className="col-md-4 mx-auto">
						<div className="card">
							<form onSubmit={handleSubmit}>
								<Input
									value={input}
									func={handleSubmit}
									onChange={e => setInput(e.target.value)}
								/>
								<div className="card-body">
									<ul className="list-group list-group-flush">
										{newTodo}
									</ul>
								</div>
								<div className="card-footer p-0 bg-white">
									<p className="fs-6 mx-3 mt-3 text-secondary">
										1 item left
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
