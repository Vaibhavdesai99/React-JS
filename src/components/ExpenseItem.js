import React from "react";

import './ExpenseItem.css'

const Expenseitem = (props) => {
//console.log(props)

  return (
    <div>
      <div className="expenses">
        <div className="Spend_Money_location">
          LocationOfExpenditure : {props.LocationOfExpenditure}
        </div>
        <div className="expense_1">{props.date.toISOString()}</div>
        <div className="expense_2">{props.description}</div>
        <div className="expense_3">{props.amount}</div>
      </div>
    </div>
  );
};
export default Expenseitem;
