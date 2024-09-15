import { Text, Form, SearchBox } from 'components';

import { TodoList } from 'components';

import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem('todos')) || [],
  );
  const [filter, setFilter] = useState('');
  const todoFilter = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase()),
  );
  useEffect(
    () => window.localStorage.setItem('todos', JSON.stringify(todos)),
    [todos],
  );
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
  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };
  return (
    <>
      <Form onSubmit={addTask} />
      {todos.length !== 0 && (
        <SearchBox filter={filter} handleChangeFilter={handleChangeFilter} />
      )}
      {todoFilter.length ? (
        <TodoList todos={todoFilter} deleteTodo={deleteTodo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
