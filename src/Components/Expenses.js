import { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import ExpensesFilter from "./NewExpense/ExpenseFilter.js";

function Expenses(props) {
  const [year, setYear] = useState("2020");
  const changeYearHandler = (newYear) => {
    setYear(newYear);
  };

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter selectedYear={year} onChangeYear={changeYearHandler} />
        {
          props.expenses.filter(exp => {
            return exp.date.getFullYear().toString() === year;
          }).map((exp) => (
            <ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date} />
          ))
        }
      </div>
    </div>
  );
}

export default Expenses;
