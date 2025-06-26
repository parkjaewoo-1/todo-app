import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos}) => { // props todos 받아옴
  return (
    <div className="TodoList">
      {todos.map( todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList;

// 할일 목록을 불러와서 보여준다
// todos 배열을 props로 받아 온 후 -> map() -> 여러개의 TodoListItem 컴포넌트로 보여줌?