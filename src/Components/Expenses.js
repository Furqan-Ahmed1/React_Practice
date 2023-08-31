import { useState } from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesFilter from "./NewExpense/ExpenseFilter.js";

function Expenses(props) {
  const [year, setYear] = useState("2020");
  
  const changeYearHandler = (newYear) => {
    setYear(newYear);
  };

  const filteredExpenses = props.expenses.filter(exp => {
    return exp.date.getFullYear().toString() === year;
  });

  

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter selectedYear={year} onChangeYear={changeYearHandler} />
        <ExpenseList items={filteredExpenses}/>
      </div>
    </div>
  );
}

export default Expenses;
