import React, { useContext } from "react";
import style from "./details.module.css";
import { TransContext } from "../TransContext/transContext";

const Details = () => {
  const { transaction } = useContext(TransContext);
  let income = 0;
  let expense = 0;
  let totalBalance = transaction.map((amt) => amt.amount);
  for (let i = 0; i < totalBalance.length; i++) {
    if (totalBalance[i] < 0) {
      expense += Number(totalBalance[i]);
    } else {
      income += Number(totalBalance[i]);
    }
  }
  return (
    <div className={style.mainDiv}>
      <div className={style.income}>
        <h3>Income</h3>
        <h1>{income}$</h1>
      </div>
      <hr />
      <div className={style.expense}>
        <h3>Expense</h3>
        <h1>{expense}$</h1>
      </div>
    </div>
  );
};

export default Details;
