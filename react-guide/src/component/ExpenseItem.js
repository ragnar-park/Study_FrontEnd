// 리액트 프로그램에서 이름을 만들때
// - 대문자로 시작하는 한 단어 
// -  한 단어안에  여러 단어 사용시 카멜 표기법 사용

// 리액트에 있는 컴포넌트는 단지 자바스크립트 함수일 뿐이다.

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'; 

function ExpenseItem(props) {
  return (
    // HTML 처럼 보이기는 하지만 리액트팀에서 만든 특별한 JSX구문이므로 여전히 자바스크립트 코드이다.
    // 그래서 속성들의 이름이 모두 똑같지 않다. class는 자바스크립트 예약어임으로 className으로 사용할 수 있다. 
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2> 
        {/* 중괄호 안에서 자바스크립트 코드 실행이 가능하다 */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
  // JSX 코드 조각마다 반드시 한 개의 루트요소를 갖는다.
  // 여러개의 요소가 아닌 하나의 요소가 반환되어야 한다 
}

export default ExpenseItem; // 이 함수를 이 파일의 기본 함수로 내보낸다
