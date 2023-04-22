import React from 'react'

import './ExpenseDate.css'

const ExpenseDate = (props) => {

  //for date we craeted a separate component
    const month = props.date.toLocaleString('en-US' ,{month :'long'}) //long:- too see full month name
    const day = props.date.toLocaleString('en-US' ,{day :'2-digit'})  //2-digit :- means 12 like this.
    const year=props.date.getFullYear()


  return (
    <div className='date'>
    <div>{month}</div>
    <div>{day}</div>
    <div>{year}</div>

 </div>
      
  )
}

export default ExpenseDate