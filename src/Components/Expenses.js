import { useState } from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesFilter from "./NewExpense/ExpenseFilter.js";
import ExpenseChart from "./NewExpense/ExpenseChart"; 

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
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </div>
    </div>
  );
}

export default Expenses;
