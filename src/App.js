import React, { useState } from "react";

import "./App.css";

import Expenseitem from "./components/Expenses/ExpenseItem";

import NewExpenses from "./components/NewExpenses/NewExpenses";

import Cards from "./components/UI/Cards";

import ExpenseFilter from "./components/Expenses/ExpenseFilter";

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

  //Here we assign map() to variable : When the list has only a single Element, below that expense list show a message stating "Only single Expense here. Please add more..."
  let expenseContent = filteredExpenses.map((expense, index) => {
    return (
      <Expenseitem
        key={expense.date.toDateString()}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    );
  });

  //checking condition here:
  if (expenseContent.length === 0) {
    expenseContent = <p>No expenses found.</p>;
  } else if (expenseContent.length === 1) {
    expenseContent = (
      <div>
        {expenseContent}
        <p>Only single Expense here. Please add more...</p>
      </div>
    );
  }

  // OR =>    We can follow below approach also

  //   if (expenseContent.length === 1) {
  //   expenseContent.push(
  //     <p key="message">Only single Expense here. Please add more...</p>
  //   );
  // }

  return (
    <>
      <h2 className="Expense_list"> - - Expense Tracker - -</h2>
      <h2 className="title">ADD YOUR DAILY EXPENSES HERE : </h2>

      {/* get data from child to parent: */}
      <NewExpenses onAddExpenses={addExpenseHandler} />

      {/* we change div to Cards ...so style get applied that we create in cards.css */}
      <Cards className="background">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={FilterChangeHandler}
        />

        {expenseContent}
      </Cards>
    </>
  );
};
export default App;
