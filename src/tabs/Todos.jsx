import { Text, Form } from "components";
import { nanoid } from "nanoid";
import { useState } from "react";

export const Todos = () => {
	const [todos, setTodos] = useState([]);
	// return <Text textAlign="center">There are no any todos ...</Text>;
	const addTask = (text) => {
		const todo = {
			text,
			id: nanoid(),
		};
		setTodos((prev) => [...prev, todo]);
	};
  console.log(todos)
	return <Form onSubmit={addTask} />;
};
