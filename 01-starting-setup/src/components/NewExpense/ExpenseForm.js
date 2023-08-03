import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("$0");
  const [enteredDate, setEnteredDate] = useState("2019/01/01");
  // const [useInput, setUsetInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enterDate: "",
  // });

  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value);
  // };

  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  // };

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // };

  const inputChangeHnadler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHnadler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHnadler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={(event) => inputChangeHnadler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
