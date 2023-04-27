import React, { useState } from "react";

import "./App.css";

import NewExpenses from "./components/NewExpenses/NewExpenses";

import Cards from "./components/UI/Cards";

import ExpenseFilter from "./components/Expenses/ExpenseFilter";

import ExpenseList from "./components/Expenses/ExpenseList";

const Dummy_expenses = [
  {
    date: new Date(2020, 4, 18),
    title: "Pizza",
    amount: 200,
  },
  {
    date: new Date(2020, 5, 28),
    title: "Grocery",
    amount: 900,
  },

  {
    date: new Date(2022, 4, 28),
    title: "Clothes",
    amount: 800,
  },
  {
    date: new Date(2021, 2, 21),
    title: "Home",
    amount: 700,
  },
];

const App = () => {
  const [filteredYear, selectedFilteredYear] = useState("2020");

  const [expenses, setExpenses] = useState(Dummy_expenses);

  //the old data + new data
  const addExpenseHandler = (expense) => {
    const updatdExpenses = [expense, ...expenses];
    setExpenses(updatdExpenses);
  };

  const FilterChangeHandler = (selectedYear) => {
    selectedFilteredYear(selectedYear);
  };

  // Filter the expenses based on the selected year
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <>
      <h2 className="Expense_list"> - - Expense Tracker - -</h2>
      <h2 className="title">ADD YOUR DAILY EXPENSES HERE : </h2>

      {/* get data from child to parent: */}
      <NewExpenses onAddExpenses={addExpenseHandler} />

      {/* we change div to Cards ...so style get applied that we create in cards.css */}

      <li>
        <Cards className="background">
          <ExpenseFilter
            selected={filteredYear}
            onChangeFilter={FilterChangeHandler}
          />

          {/* here we extract list logic into ExpenseList.js */}
          <ExpenseList items={filteredExpenses} />
        </Cards>
      </li>
    </>
  );
};
export default App;
