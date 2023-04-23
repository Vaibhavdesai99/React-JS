import React from "react";

import './ExpenseForm.css'

const ExpenseForm = () => {

const titleHandler =(e)=>{

     console.log(e.target.value)

}

const amountHandler =(e) =>{

    console.log(e.target.value)

}

const dateHandler =(e)=>{

    console.log(e.target.value)
}




  return (
<>
<form>
<div className="expense-form">
      <div className="form-controls">
        <div className="form-input">
          <label>ExpenseTitle : </label>
          <input type="text" onChange={titleHandler}></input>
        </div>

        <div className="form-input-amount">
          <label>ExpenseAmount : </label>
          <input type="number" onChange={amountHandler}></input>
        </div>

        <div className="form-input-date">
          <label>ExpenseDate : </label>
          <input type="date" onChange={dateHandler}></input>
        </div>
      </div>
      <div className="addExpenseButton"> 
    <button className="btn">ADD ITEM</button>
    </div>
    </div>
    
</form>
     
</>
   
  );
};

export default ExpenseForm;
