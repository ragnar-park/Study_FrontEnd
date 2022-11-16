import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    if(props.items.length == 0 ) {
        return <h2 className="expenses-list_fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
                //  리액트는 새로운 아이템이 추가 될때 어디에 추가해야하는지 알려줘야 한다
                //  React는 key prop을 사용하여 컴포넌트와 DOM 요소 간의 관계를 생성한다. 리액트는 이 관계를 이용해 컴포넌트 리렌더링 여부를 결정한다.
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
            ))};
        </ul>
        )

};

export default ExpensesList;