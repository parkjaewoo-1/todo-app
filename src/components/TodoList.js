import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => { // props로 받아온 상태 todos 배열, onRemove 함수
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
    // TodoListItem 컴포넌트에서 사용하기 위해서 props로 받아온 함수를 그대로 넘겨 준다
  )
}

export default TodoList;

// 할일 목록을 불러와서 보여준다
// todos 배열을 props로 받아 온 후 -> map() -> 여러개의 TodoListItem 컴포넌트로 보여줌?