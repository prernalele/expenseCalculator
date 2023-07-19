import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      title: "car insurance",
      amount: "293.67",
      date: new Date(2021, 2, 28)    
    },
    {
      title: "Coffee",
      amount: "2",
      date: new Date(2021, 2, 28)    
    },
    {
      title: "gift",
      amount: "87",
      date: new Date(2021, 2, 28)
    
    },
  ]
  return (
    <div className="expenses">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
