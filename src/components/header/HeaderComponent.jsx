import React from "react";
import "./Header-styles.scss";

export default function HeaderComponent({ state }) {
  return (
    <div className="budgetHeader">
      <p className="budgetBalance">{`Balance: ₦${state.balance.toLocaleString()}`}</p>
      <p className="incExp">{`Total Income: ₦${state.totalIncome.toLocaleString()}`}</p>
      <p className="incExp">{`Total Expense: ₦${state.totalExpense.toLocaleString()}`}</p>
    </div>
  );
}
