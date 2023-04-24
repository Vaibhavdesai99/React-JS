import React from "react";

//created separate file here :- for ExpenseDetails

//we crated a separate file to apply css on expenseDetails and we imported here .
import "./ExpenseDetails.css";

const ExpenseDetails = (props) => {
  const title = props.title;
  const amount = props.amount;

  //here we set className of title to description caz if i write description the CSS chnages that the one issue .
  return (
    <>
      <div className="description">{title}</div>
      <div className="amt">Rs {amount}</div>
    </>
  );
};

export default ExpenseDetails;
