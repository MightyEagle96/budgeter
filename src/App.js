import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import ExpenseCard from "./components/income_expense/ExpenseCard";
import IncomeCard from "./components/income_expense/IncomeCard";
import InputField from "./components/Inputs/InputField";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
      amount: "",
      incomes: [],
      expenses: [],
      transactionType: "income",
      balance: "0.00",
      totalIncome: "0.00",
      totalExpense: "0.00",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    //
  };
  getTransaction = (e) => {
    this.setState({ transactionType: e.target.value });
  };
  totalAmount = (array) => {
    var totalAmount = 0;
    for (let i = 0; i < array.length; i++) {
      totalAmount += array[i].amount;
    }
    return totalAmount;
  };
  addTransaction = (e) => {
    const newTransaction = {
      id: Date.now(),
      item: this.state.item,
      amount: Number.parseInt(this.state.amount),
    };

    if (this.state.transactionType === "income") {
      this.state.incomes.push(newTransaction);
    } else this.state.expenses.push(newTransaction);

    this.setState({ amount: "", item: "" });
    this.setState({
      totalIncome: this.totalAmount(this.state.incomes),
      totalExpense: this.totalAmount(this.state.expenses),
      balance:
        this.totalAmount(this.state.incomes) -
        this.totalAmount(this.state.expenses),
    });
    this.item.value = "";
    this.amount.value = "";
  };
  deleteExpense = (e) => {
    const expense = this.state.expenses[
      this.state.expenses.findIndex(
        (expense) => expense.id.toString() === e.target.value
      )
    ];

    const newExpenses = this.state.expenses.filter((expense) => {
      return expense.id.toString() !== e.target.value.toString();
    });
    this.setState({
      expenses: newExpenses,
      totalExpense: this.totalAmount(newExpenses),
      balance: this.state.balance + expense.amount,
    });
  };
  deleteIncome = (e) => {
    const income = this.state.incomes[
      this.state.incomes.findIndex(
        (income) => income.id.toString() === e.target.value
      )
    ];

    const newincomes = this.state.incomes.filter((income) => {
      return income.id.toString() !== e.target.value.toString();
    });
    this.setState({
      incomes: newincomes,
      totalIncome: this.state.totalIncome - income.amount,
      balance: this.state.balance - income.amount,
    });
  };
  render() {
    const expenses = this.state.expenses.map(({ id, item, amount }) => {
      return (
        <ExpenseCard
          id={id}
          item={item}
          amount={amount}
          income={this.state.totalIncome}
          deleteExpense={this.deleteExpense}
          balance={this.state.balance}
        />
      );
    });

    const incomes = this.state.incomes.map(({ id, item, amount }) => {
      return (
        <IncomeCard
          iD={id}
          item={item}
          amount={amount}
          totalIncome={this.state.totalIncome}
          deleteIncome={this.deleteIncome}
        />
      );
    });

    return (
      <div>
        <HeaderComponent state={this.state} />

        <div className="transactionPanel form-inline">
          <InputField
            type="text"
            placeHolder="Item"
            name="item"
            handleChange={this.handleChange}
            refProp={(el) => (this.item = el)}
          />
          <InputField
            type="number"
            placeHolder="Amount"
            name="amount"
            handleChange={this.handleChange}
            refProp={(el) => (this.amount = el)}
          />

          <select
            name="type"
            onChange={this.getTransaction}
            className="form-control spaceOut"
          >
            <option value="income">+</option>
            <option value="expense">-</option>
          </select>
          <button onClick={this.addTransaction} className="myButton spaceOut">
            Add Transaction
          </button>
        </div>

        <div className=" ">
          <div className="row">
            <div className="col-sm">
              <div className="container ">
                <h2 className="moveRight">Incomes</h2>
                {incomes}
              </div>
            </div>
            <div className="col-sm">
              <div className="container">
                <h2>Expenses</h2>
                {expenses}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
