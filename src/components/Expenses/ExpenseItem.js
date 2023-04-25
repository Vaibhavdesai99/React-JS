//used useState to upadte the values on UI :
import React, { useState } from "react";

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

import ExpenseDetails from "./ExpenseDetails";

import ExpenseFilter from "./ExpenseFilter";

import Cards from "../UI/Cards";

const Expenseitem = (props) => {
  const [filteredYear, selectedFilteredYear] = useState("2020");

  const FilterChangeHandler = (selectedYear) => {
    selectedFilteredYear(selectedYear);
  };

  //title change
  const [title, updatedTitle] = useState(props.title);

  //amount chnage
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
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={FilterChangeHandler}
      />
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
