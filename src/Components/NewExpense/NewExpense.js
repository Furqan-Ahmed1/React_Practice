import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);
  const expenseFormResultHandler = (newExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...newExpenseData
    };

    props.onAddNewExpense(expenseData);
  };

  const showForm = () => {
    setFormVisibility(true);
  };

  const hideForm = () => {
    setFormVisibility(false);
  };

  return (
    <div className="new-expense">
      {!formVisibility && <button onClick={showForm}>Add New Expense</button>}
      {formVisibility && <ExpenseForm onExpenseFormResult={expenseFormResultHandler} hideForm={hideForm}/>}
    </div>
  );
};

export default NewExpense;
