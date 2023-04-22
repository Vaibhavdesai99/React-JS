import React from "react";

import "./ExpenseItem.css";

//imported  ExpenseDate here:
import ExpenseDate from "./ExpenseDate";

//imported ExpenseDetails file here:
import ExpenseDetails from "./ExpenseDetails";

import Cards from "../UI/Cards";





const Expenseitem = (props) => {

 const clickHandler =()=>{ console.log('clicked!')}
 
 const DeleteHandler =()=>{console.log('deleted')}

  
  return (
   
    //we changeed div and use Cards here so all style get applied here 

    <Cards className="expenses">
    <ExpenseDate date={props.date} />
    <ExpenseDetails
      LocationOfExpenditure={props.LocationOfExpenditure}
      description={props.description}
      amount={props.amount}
    />   
    <button onClick={clickHandler}>ChangeTitle</button>  
    <button onClick={DeleteHandler}>DeleteExpense</button>                                                                          
  </Cards>

  
  );
};

export default Expenseitem;
