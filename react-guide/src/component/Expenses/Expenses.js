import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    // console.log('Expenses.js');
    // console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  let expensesContent = <p>No expenses found.</p>;
  if(filteredExpenses.length > 0 ) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
          //  리액트는 새로운 아이템이 추가 될때 어디에 추가해야하는지 알려줘야 한다
          //  React는 key prop을 사용하여 컴포넌트와 DOM 요소 간의 관계를 생성한다. 리액트는 이 관계를 이용해 컴포넌트 리렌더링 여부를 결정한다.
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter seleted={filteredYear} onChangeFilter={filterChangeHandler} />
        {/* 양방향 바인딩으로 filteredYear 전달 */}
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expenses;