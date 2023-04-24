import React from 'react'

import ExpenseForm from './ExpenseForm'

import './NewExpenses.css'

const NewExpenses = (props) => {

 //Receiving the data from ExpenseForm.js : this parameter can be any name data get recived here.
const saveExpenseDataHandler =(enteredExpenseData)=>{

const expenseData ={

                     ...enteredExpenseData,
                    id:Math.random().toString()
                  }
   

//here passing the data to App.js
    props.onAddExpenses(expenseData);

  }


  return (
    <div className='newExpense'>

        <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpenses