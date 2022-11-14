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
    }

    return (
    <div>
      <Card className="expenses">
        <ExpensesFilter seleted={filteredYear} onChangeFilter={filterChangeHandler} />
        {/* 양방향 바인딩으로 filteredYear 전달 */}
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[4].date}
        />
        <ExpenseItem
          title={props.items[4].title}
          amount={props.items[4].amount}
          date={props.items[4].date}
        />
      </Card>
    </div>
    )
}

export default Expenses;