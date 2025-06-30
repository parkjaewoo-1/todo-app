import {useRef, useCallback, useReducer} from 'react';
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
};

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT" : 
      return todos.concat(action.todo);
    case "REMOVE" : 
      return todos.filter(todo => todo.id !== action.id);
    case "TOGGLE" :
      return todos.map(todo =>
        todo.id === action.id ? {...todo, checked : !todo.checked } : todo,
      )
    default : 
    return todos;
  }
}
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer,undefined,cerateBulksTodos);

  const onToggle = useCallback(
    id => {
      dispatch({type : "TOGGLE", id});
    },
    []
  );

  const onRemove = useCallback(
    id => {
      dispatch({type : "REMOVE", id});
    },
    []
  );

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
      dispatch({type : "INSERT", todo});
      nextId.current += 1;
    },[]
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


  setTodos(값) 대신
  setTodos(todos => 값) 형태의 함수로 업데이트 방식 전달
  함수형 업데이트를 사용하면 useCallback의 의존성배열을 빈 배열로 넘겨도 된다.

*/