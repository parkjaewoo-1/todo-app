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

  //checked toggle
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? {...todo, checked : !todo.checked} : todo,
        )
      )
    },
    [todos]
  )

  // 목록 삭제 메서드
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id))
    },
    [todos]
  )

  // useRef = 렌더링에 상관 없고, 단순히 리스트에 번호를 메기기 위한 것
  const nextId = useRef(4);

  // TodoInsert 컴포넌트에서 상태를 업데이트 함
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
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
}
export default App;

