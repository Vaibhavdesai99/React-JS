import React from "react";

import "./ExpenseItem.css";

//imported  ExpenseDate here:
import ExpenseDate from "./ExpenseDate";

//imported ExpenseDetails file here:
import ExpenseDetails from "./ExpenseDetails";



const Expenseitem = (props) => {
  //console.log(props)

  return (
    <div className="expenses">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        LocationOfExpenditure={props.LocationOfExpenditure}
        description={props.description}
        amount={props.amount}
      />                                                                               
    </div>
  );
};

export default Expenseitem;
