import React from "react";
import "./IncomeExpense.scss";
export default function IncomeCard({
  iD,
  item,
  amount,
  totalIncome,
  deleteIncome,
}) {
  return (
    <div key={iD} className="incomeTransact">
      <p className="transactionItem">{item}</p>
      <div className="row">
        <div className="col-6">
          <p className="transactionDetail">{`₦${amount.toLocaleString()}`}</p>
        </div>
        <div className="col">
          <p className="incomePercentage">{`${(
            (amount / totalIncome) *
            100
          ).toFixed(2)}%`}</p>
        </div>
        <div className="col">
          <button
            className="delButton-income"
            onClick={deleteIncome}
            value={iD}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
