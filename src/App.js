import {useState} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '리액트의 기초',
      checked : true,  
    },
    {
      id : 2,
      text : '컴포넌트 스타일링',
      checked : true,  
    },
    {
      id : 3,
      text : '일정 관리 앱',
      checked : false,  
    },
  ])

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  )
}

export default App;

// todos = 각 할일의 정보
// todoList의 props.todos로 todos 상태 전달
// todoList에선 받아온 props 값으로 TodoItem으로 변환 후 렌더링 됨
