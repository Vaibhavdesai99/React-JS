//used useState to upadte the values on UI :
import React, { useState } from "react";

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

import ExpenseDetails from "./ExpenseDetails";

import Cards from "../UI/Cards";

const Expenseitem = (props) => {
  const [title, updatedTitle] = useState(props.title);

  const [amount, setAmount] = useState(props.amount);

  const titleHandler = () => {
    updatedTitle("Changed");
  };

  const amountHandler = () => {
    setAmount(100);
  };

  return (
    //we changed div and use Cards here so all style get applied here

    <Cards className="expenses">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={title} amount={amount} />
      <div className="titlebutton">
        <button onClick={titleHandler}>ChangeTitle</button>
      </div>
      <div className="amountbutton">
        <button onClick={amountHandler}>ChangeAmount</button>
      </div>
    </Cards>
  );
};

export default Expenseitem;
