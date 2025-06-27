import {useState, useRef, useCallback} from 'react';
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
  ]);

  // useRef = 렌더링에 상관 없고, 단순히 리스트에 번호를 메기기 위한 것
  // 
  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked:false
      }
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },[todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} />
    </TodoTemplate>
  )
}

export default App;

// todos = 각 할일의 정보를 객체에 담은 배열, state 
// todoList의 props.todos로 todos 상태 전달
// todoList에선 받아온 props 값으로 TodoItem으로 변환 후 렌더링 됨
