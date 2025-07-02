import React from 'react';
import { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => { // props로 받아온 상태 todos 배열, onRemove 함수
  const rowRenderer = useCallback(
    ({index, key, style}) => {
      const todo = todos[index];
      return (
        <TodoListItem
        todo={todo}
        key={key}
        onRemove={onRemove}
        onToggle={onToggle}
        style={style}
        />
      );
    },
    [onRemove, todos, onToggle]
  );

  /*
    rowRenderer의 style파라미터 : 렌더의 List 컴포넌트 안에 정의 된 inline-style이 넘어감
  */

  return (
    <List
      className='TodoList'
      width={512}
      height={513}
      rowCount={todos.length} //항목 개수
      rowHeight={50.5} // 항목 높이
      rowRenderer={rowRenderer} // 위에 만든 항목 렌더링 함수를 List 컴포넌트의 props로 설정해야 함
      list={todos}
      style={{outline:'none'}}
    ></List>

    /*<div className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>*/
    // TodoListItem 컴포넌트에서 사용하기 위해서 props로 받아온 함수를 그대로 넘겨 준다
  )
}
 
export default React.memo(TodoList);

// 할일 목록을 불러와서 보여준다
// todos 배열을 props로 받아 온 후 -> map() -> 여러개의 TodoListItem 컴포넌트로 보여줌?