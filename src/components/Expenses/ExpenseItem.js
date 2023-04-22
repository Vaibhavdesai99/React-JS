import React from "react";

import "./ExpenseItem.css";

//imported  ExpenseDate here:
import ExpenseDate from "./ExpenseDate";

//imported ExpenseDetails file here:
import ExpenseDetails from "./ExpenseDetails";



const Expenseitem = (props) => {

 const clickHandler =()=>{ console.log('clicked!')}
 
 const DeleteHandler =()=>{console.log('deleted')}

  
  return (
   
    <div className="expenses">
    <ExpenseDate date={props.date} />
    <ExpenseDetails
      LocationOfExpenditure={props.LocationOfExpenditure}
      description={props.description}
      amount={props.amount}
    />   
    <button onClick={clickHandler}>ChangeTitle</button>  
    <button onClick={DeleteHandler}>DeleteExpense</button>                                                                          
  </div>

  
  );
};

export default Expenseitem;
