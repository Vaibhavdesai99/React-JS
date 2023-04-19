import React from "react";

import Expenseitem from "./components/Expenses/ExpenseItem";

const App = () => {
  const expenses = [
    {
      LocationOfExpenditure: "Petrol Pump",
      date: new Date(2023, 4, 18),
      description: "Car Insurance",
      amount: 200,
    },
    {
      LocationOfExpenditure: "SuperMarket",
      date: new Date(2023, 5, 28),
      description: "Grocessries",
      amount: 900,
    },

    {
      LocationOfExpenditure: "Shopping",
      date: new Date(2022, 4, 28),
      description: "Clothes",
      amount: 1000,
    },
    {
      LocationOfExpenditure: "Travelling",
      date: new Date(2021, 2, 21),
      description: "HomeTown",
      amount: 700,
    },
  ];

  //If you have 100 expenses you would have to write ExpenseItems Component 100 times??.....instead of this we use map() here

  //key={expense.date.toDateString()} [ for genertaion of unique key ]

  return (
    <>
    <h2 className="Expense_list">Expense Items</h2>
    <div>
     

      {expenses.map((expense, index) => {
        // console.log(
        //   `Expense ${index} (key=${expense.date.toDateString()}): ${expense}`  //op=>Expense 0 (key=Thu May 18 2023): [object Object]
        // );

        return (
          <Expenseitem
          
            key={expense.date.toDateString()}
            LocationOfExpenditure={expense.LocationOfExpenditure}
            date={expense.date}
            description={expense.description}
            amount={expense.amount}
          />
        );
      })}

    </div>
    </>
    
  );
};
export default App;
