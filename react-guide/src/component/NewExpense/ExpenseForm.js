import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    // 수신할 때 입력 요소값은 항상 문자열이다. 숫자를 저장해도 문자열로 된 숫자이고 날짜도 마찬가지이다. 그래서 항상 모든 상태 초기화를 문자열로 한다. -> useState('');
    // 컴포넌트당 하나 이상의 상태 저장 
    // 여러 개의 상태 조각들 또는 컴포넌트별로 상태 조각을 가질 수 있음
    // 같은 컴포넌트 안에 있는 이 모든 상태들은 완전히 별개의 것들임
    const [enteredTitle, setEnteredTitle] = useState(''); // 변경된 상태 저장
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
        // 값으로 "객체"를 전달, 숫자열 x 문자열 x
        // 한개의 state처럼 관리 
        // 업데이트 마다 한개가 아닌 세 프로퍼티 모두를 업데이트 해야한다. 
        // 하나의 state로 접근하고 하나의 객체를 관리하면 모든 데이터가 사리지지 않도록 해야함 

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput, // 객체를 취해서 모든 키와 값의 쌍을 추출하여 새로운 객체에 추가한다
        //     enteredTitle: event.target.value,
        // });
        // 새로운 사용자 입력을 객체에 설정하면 다른 키들은 버리게 된다. 
        // 리액트는 state업데이트시 이전의 state와 병합하지 않는다
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        //     // 함수에서 상태 스냅샷이 가장 최신 상태의 스냅샵이라는 것과 항상 계획된 상태 업데이트를 염두에 둔것을 보장
        //     // 항상 최신 상태의 스냅샷에서 작업하도록하는 안정한 방법 
        // });
    };

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput, // 객체를 취해서 모든 키와 값의 쌍을 추출하여 새로운 객체에 추가한다
        //     enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput, // 객체를 취해서 모든 키와 값의 쌍을 추출하여 새로운 객체에 추가한다
        //     enteredDate: event.target.value,
        // });
    };
  

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;