import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (expenses) => {
  const [selectedFilter, setSelectedFilter] = useState("2020");

  let filterInfoText = "2019, 2021 & 2022";
  if (selectedFilter === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (selectedFilter === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else {
    filterInfoText = "2019, 2020 & 2021";
  }

  const fiterValueHandler = (expenseYear) => {
    setSelectedFilter(expenseYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onExpenseFilterChange={fiterValueHandler}
          value={selectedFilter}
        />
        <p>Data for years {filterInfoText} is hidden</p>
        <ExpenseItem
          title={expenses.expenses[0].title}
          amount={expenses.expenses[0].amount}
          date={expenses.expenses[0].date}
        />
        <ExpenseItem
          title={expenses.expenses[1].title}
          amount={expenses.expenses[1].amount}
          date={expenses.expenses[1].date}
        />
        <ExpenseItem
          title={expenses.expenses[2].title}
          amount={expenses.expenses[2].amount}
          date={expenses.expenses[2].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
