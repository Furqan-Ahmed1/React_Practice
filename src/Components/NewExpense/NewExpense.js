import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const expenseFormResultHandler = (newExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...newExpenseData
    };

    props.onAddNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseFormResult={expenseFormResultHandler} />
    </div>
  );
};

export default NewExpense;
