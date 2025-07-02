import {useState, useCallback} from 'react';
import { MdAdd } from "react-icons/md"; 
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');
  const onChange = useCallback( e => {
    setValue(e.target.value)
  },[]);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');

      // submit시 페이지 새로고침 방지
      e.preventDefault();
    },
    [onInsert, value]
  )

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
        name='todos'
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  )
}

export default TodoInsert;

// 새로운 항목 입력 및 추가 컴포넌트
// state를 통해 인풋 상태 관리
