import './TodoTemplate.scss';

//  TodoTemplate 컴포넌트는 
const TodoTemplate = ({children}) => {
  return (
    <div className='TodoTemplate'>
      <div className='app-title'>일정 관리</div>
      <div className='content'>{children}</div>
    </div>
  );
};

export default TodoTemplate;

// 전체 컴포넌트의 큰 틀
// children : 내부 JSX를 props로 받아 와서 렌더링