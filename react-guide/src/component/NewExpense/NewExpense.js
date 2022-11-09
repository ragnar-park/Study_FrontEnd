import React from "react"; // 기술적으로 꼭 필요하지 않음

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = () => {
    return (
    <div className="new-expense">
        <ExpenseForm />
    </div>
    );
}

export default NewExpense;