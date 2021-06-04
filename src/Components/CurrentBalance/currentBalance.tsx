import React, { useContext } from "react";
import style from "./currentBalance.module.css";
import { TransContext } from "../TransContext/transContext";

const CurrentBalance = () => {
  const { transaction } = useContext(TransContext);
  let totalBalance = transaction.map((amt) => amt.amount);
  let sum = 0;
  for (let i = 0; i < totalBalance.length; i++) {
    sum += Number(totalBalance[i]);
  }

  return (
    <div>
      <h2 className={style.mainHeading}>Expense Tracker by Bilal Ahmad</h2>
      <p className={style.balanceHeading}>Current Balance</p>
      <p className={style.currentBalance}>{sum}$</p>
    </div>
  );
};

export default CurrentBalance;
