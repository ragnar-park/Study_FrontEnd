import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
      // 수신할 때 입력 요소값은 항상 문자열이다. 숫자를 저장해도 문자열로 된 숫자이고 날짜도 마찬가지이다. 그래서 항상 모든 상태 초기화를 문자열로 한다. -> useState('');
    const [enteredTitle, setEnteredTitle] = useState(''); // 변경된 상태 저장
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // 컴포넌트당 하나 이상의 상태 저장 
    // 여러 개의 상태 조각들 또는 컴포넌트별로 상태 조각을 가질 수 있음
    // 같은 컴포넌트 안에 있는 이 모든 상태들은 완전히 별개의 것들임
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
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