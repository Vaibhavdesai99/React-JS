import React from 'react';

//created separate file here :- for ExpenseDetails 

//we crated a separate file to apply css on expenseDetails and we imported here .
import './ExpenseDetails.css'

const ExpenseDetails = (props) => {
  const LocationOfExpenditure=props.LocationOfExpenditure
  const description=props.description
  const amount=props.amount

  return (
  

    <div className='itemlist'>
      <div className='location'>{LocationOfExpenditure}</div>
      <div className='description'>{description}</div>
      <div className='amt'>Rs {amount}</div>
    </div>
    
   
  );
};

export default ExpenseDetails;
