import { MdAdd } from "react-icons/md"; 
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="subnit">
        <MdAdd />
      </button>
    </form>
  )
}

export default TodoInsert;

// 새로운 항목 입력 및 추가 컴포넌트
// state를 통해 인풋 상태 관리
