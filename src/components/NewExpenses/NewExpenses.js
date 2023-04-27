import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  // State variable to keep track of whether the expense form is visible on screen or not
  const [isVisibleOnScreen, setIsVisibleOnScreen] = useState(false);

  // Function to handle saving of expense data
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // Adding a unique id to the expense data object
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // Passing the expense data to the App.js component
    props.onAddExpenses(expenseData);
    // Setting the visibility of the expense form to false after data is saved
    setIsVisibleOnScreen(false);
  };

  // Function to handle showing of the expense form
  const startEditingHandler = () => {
    setIsVisibleOnScreen(true);
  };

  // // Function to handle cancelling of the expense form
  const cancelEditingHandler = () => {
    setIsVisibleOnScreen(false);
  };

  return (
    <div className="newExpense">
      {/* Show the "ADD EXPENSES HERE" button if the expense form is not visible */}
      {!isVisibleOnScreen && (
        <button className="add_expenses" onClick={startEditingHandler}>
          ADD EXPENSES HERE
        </button>
      )}
      {/* Show the expense form if it is visible */}
      {isVisibleOnScreen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
