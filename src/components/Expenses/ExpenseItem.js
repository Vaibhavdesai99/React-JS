//used useState to upadte the values on UI : 
import React , {useState} from "react";

import "./ExpenseItem.css";


import ExpenseDate from "./ExpenseDate";


import ExpenseDetails from "./ExpenseDetails";

import Cards from "../UI/Cards";



const Expenseitem = (props) => {

//to Update the Title  :- updatedLocation is async function 
   const [location ,updatedLocation]=useState(props.LocationOfExpenditure)

//to Update the Amount : setAmount is async function 
   const [amount , setAmount] = useState(props.amount)

//when onClick function executed , &  call updatedLocation function re-render the component with updated value.
 const titleHandler =() =>{
  updatedLocation('clicked')
  console.log(location)
}

const amountHandler =() => {
  setAmount(100)
  console.log(amount)
}
 

  return (
   
    //we changed div and use Cards here so all style get applied here 

    <Cards className="expenses">
    <ExpenseDate date={props.date} />
    <ExpenseDetails
      LocationOfExpenditure={location}
      description={props.description}
      amount={amount}
    />   
    <button onClick={titleHandler}>ChangeTitle</button>  
    <button onClick={amountHandler}>ChangeAmount</button>
                                                                         
  </Cards>

  
  );
};

export default Expenseitem;

