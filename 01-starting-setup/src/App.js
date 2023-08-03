import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "car insurance",
      amount: "293.67",
      date: new Date(2021, 2, 28),
    },
    {
      title: "Coffee",
      amount: "2",
      date: new Date(2021, 2, 28),
    },
    {
      title: "gift",
      amount: "87",
      date: new Date(2021, 2, 28),
    },
  ];

  const addExpenseHandler = (expenseData) => {
    console.log("expense data from app", expenseData);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
