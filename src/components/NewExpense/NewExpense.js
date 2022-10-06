import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [form, setFormVisible] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  };

  if (form) {
    return (
      <div className="new-expense">
        <ExpenseForm
          showForm={setFormVisible}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      </div>
    );
  }
  return (
    <div className="new-expense">
      <button
        onClick={() => {
          setFormVisible(true);
        }}
      >
        Add New Expense
      </button>
    </div>
  );
};

export default NewExpense;
