import React from "react";

import "./ExpenseList.css";

//Here we assign map() to variable : When the list has only a single Element, below that expense list show a message stating "Only single Expense here. Please add more..."

import Expenseitem from "./ExpenseItem";

const ExpenseList = (props) => {
  //console.log(props);
  if (props.items.length === 0) {
    return <h2 className="Expense_List_Style">Found No Components</h2>;
  }
  return (
    <ul className="expenses_list">
      {/* here we receive filtered year via  items */}
      {props.items.map((expense, index) => (
        <Expenseitem
          key={expense.date.toDateString()}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
