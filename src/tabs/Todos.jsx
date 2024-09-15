import { Text, Form } from 'components';
import { TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTask = text => {
    const todo = {
      text,
      id: nanoid(),
    };
    setTodos(prev => [...prev, todo]);
  };

  const deleteTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };
  return (
    <>
      <Form onSubmit={addTask} />

      {todos.length ? (
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
