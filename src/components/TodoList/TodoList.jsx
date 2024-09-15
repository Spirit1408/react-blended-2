import { Grid, GridItem, TodoListItem } from 'components';
export const TodoList = ({ todos, deleteTodo }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem todo={todo} count={index} deleteTodo={deleteTodo} />
        </GridItem>
      ))}
    </Grid>
  );
};
