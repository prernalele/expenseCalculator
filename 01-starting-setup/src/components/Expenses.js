import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(expenses) {
  return (
    <div>
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
    </div>
  );
}

export default Expenses;
