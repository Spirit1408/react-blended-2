import { Text } from 'components';
import style from './TodoListItem.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';
export const TodoListItem = ({ todo, count, deleteTodo }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {count + 1}
      </Text>
      <Text>{todo.text}</Text>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
