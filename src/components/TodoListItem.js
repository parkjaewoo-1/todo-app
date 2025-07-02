import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';
import React from 'react';

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
  const {id, text, checked} = todo;

  return (
    <div className='TodoListItem-virtualized' style={style}>
      <div className='TodoListItem'>
        <div className={cn('checkbox', {checked})} onClick={()=> onToggle(id)} >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className='text'>{text}</div>
        </div>
        <div className='remove' onClick={() => {onRemove(id)}}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  )
}

export default React.memo(TodoListItem);
// 컴포넌트를 React.memo로 감싸게 되면 각 컴포넌트가 바뀌지 않으면 리렌더링을 하지 않는다
// == 바뀐 컴포넌트만 리렌더링 되고 바뀌지 않은 컴포넌트는 리렌더링 하지 않음

// 각 할일 항목에 대한 정보
// todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 ui 렌더링

// TodoList로 받은 style을 virtualized의 스타일로 적용