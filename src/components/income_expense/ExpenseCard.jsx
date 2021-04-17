import React from "react";
import "./IncomeExpense.scss";
export default function ExpenseCard({
  id,
  item,
  amount,
  income,
  deleteExpense,
  balance,
}) {
  return (
    <div key={id} className="expenseTransact">
      <p className="transactionItem">{item}</p>
      <div className="row">
        <div className="col-6">
          <p className="transactionDetail">{`₦${amount.toLocaleString()}`}</p>
        </div>
        <div className="col">
          <p className="expensePercentage">{`${
            balance > 0 ? ((amount / income) * 100).toFixed(2) : "--"
          }%`}</p>
        </div>
        <div className="col">
          <button
            className="delButton-expense"
            onClick={deleteExpense}
            value={id}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
