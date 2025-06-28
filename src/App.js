import {useState, useRef, useCallback} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function cerateBulksTodos (){
  const array = [];
  for(let i = 1; i <= 2500;i++){
    array.push({
      id : i,
      text : `할일 ${i}`,
      checked : false,
    })
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(cerateBulksTodos);

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
  const nextId = useRef(2501);

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

/*
  const [todos, setTodos] = useState(cerateBulksTodos());
  = 리렌더링될 때마다 함수가 호출 된다

  const [todos, setTodos] = useState(cerateBulksTodos);
  = 파라미터를 함수 형태로 넣어 주면 컴포넌트가 처음 리렌더링될 때만 함수가 실행 된다.

  cerateBulksTodos함수를 컴포넌트 밖에서 선언한 이유도 App컴포넌트가 리렌더링될 때마다 함수 호출 되는것을 방지하기 위해서이다
*/