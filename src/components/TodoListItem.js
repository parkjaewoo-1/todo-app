import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo}) => {
  const {text, checked} = todo;

  return (
    <div className='TodoListItem'>
      <div className={cn('checkbox', {checked})}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove'>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default TodoListItem;

// 각 할일 항목에 대한 정보
// todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 ui 렌더링
// 