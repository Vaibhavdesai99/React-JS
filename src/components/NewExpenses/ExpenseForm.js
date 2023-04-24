import React ,{useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {

//here we use useState for three diff input fields:

const[enteredtitle,updatedTitle] = useState('')
const[enteredamount,updatedAmount] = useState('')
const[enteredate,updatedDate] = useState('')



const titleHandler =(event)=>{

  updatedTitle(event.target.value)

}

const amountHandler =(event) =>{

  updatedAmount(event.target.value)

}

const dateHandler =(event)=>{

  updatedDate(event.target.value)

}

//onSubmit event , when user click on Additem , data get stored in Object and log it.
const formsubmited = (event) => {

event.preventDefault()
 
 const formData ={
  
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(enteredate)
   }

//sending the data to NewExpenses.js
   props.onSaveExpenseData(formData)

     //clearing the input fields : 
      updatedTitle('')
      updatedAmount('')
      updatedDate('')

}




  return (
<>
<form onSubmit={formsubmited}>
<div className="expense-form">
      <div className="form-controls">
        <div className="form-input">
          <label>ExpenseTitle : </label>
          <input type="text" onChange={titleHandler} value={enteredtitle}></input>
        </div>

        <div className="form-input-amount">
          <label>ExpenseAmount : </label>
          <input type="number" onChange={amountHandler} value={enteredamount}></input>
        </div>

        <div className="form-input-date">
          <label>ExpenseDate : </label>
          <input type="date" onChange={dateHandler} value={enteredate}></input>
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
