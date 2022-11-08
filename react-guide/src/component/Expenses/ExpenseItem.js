// 리액트 프로그램에서 이름을 만들때
// - 대문자로 시작하는 한 단어 
// -  한 단어안에  여러 단어 사용시 카멜 표기법 사용

// 리액트에 있는 컴포넌트는 단지 자바스크립트 함수일 뿐이다.
import React, {useState} from 'react';
// useState :
// - 리액트는 컴파일한 코드를 다시 실행하지 않음
// - 리액트에게 다시 실행하라고 명령할때 useState사용
// - 컴포넌트 함수가 다시 호출되는 곳에서 변경된 값을 반영하기 위해 state로 값을 정의할 수 있게 해주는 함수
// - 리액트 훅 중 하나
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'; 

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); // 비구조화할당
  // 리액트 컴포넌트 함수 안에서 호출되어야 한다. 중첩된 함수 안에서도 호출이 불가능하다. + 예외 사항 존재 추후 정리
  // 값을 담지 않고 함수를 호출해서 새로운 값을 할당
  // 배열을 반환
  //  - 배열에서 첫 번째 요소는 현재 상태값
  //  - 배열에서 두 번째 요소는 현재 상태값을 업데이트 되는 함수

  const clickHandler = () => {
    // title = '수정된 제목!';
    setTitle('수정된 제목!');
    console.log('클릭!!');
  }

  return (
    // HTML 처럼 보이기는 하지만 리액트팀에서 만든 특별한 JSX구문이므로 여전히 자바스크립트 코드이다.
    // 그래서 속성들의 이름이 모두 똑같지 않다. class는 자바스크립트 예약어임으로 className으로 사용할 수 있다. 
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2> 
        {/* 중괄호 안에서 자바스크립트 코드 실행이 가능하다 */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button> {/* 리액트는 모든 기본 이벤트를 on으로 시작하는 props로 노출한다 */}
      {/* () 괄호를 추가했다면 이 코드 라인들이 분석되었을 때 자바스크립트는 이것을 실행 할 것이다
      그리고 JSX코드가 반환될 때 이 코드 라인은 분석된다. 
      그래서 클릭했을 떄 ClickHandler가 실행되는 것이 아니라 JSX가 평가될 때 실행된다. 그리고 너무 이르기 때문에 clickHandler을 지정하기만 한다

      즉 onClick을 위한 값으로 이 포인터를 전달하고 리액트는 이것을 기억했다가 클릭할 때마다 함수를 실행한다.
      그래서 평가될때 실행되는 것이 아니라 클릭했을 때 실행되게 된다 */}
    </Card>
  );
  // JSX 코드 조각마다 반드시 한 개의 루트요소를 갖는다.
  // 여러개의 요소가 아닌 하나의 요소가 반환되어야 한다 
}

export default ExpenseItem; // 이 함수를 이 파일의 기본 함수로 내보낸다
