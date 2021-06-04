import React, { useContext } from "react";
import style from "./history.module.css";
import { TransContext } from "../TransContext/transContext";

const History = () => {
  const { transaction, delTrans } = useContext(TransContext);

  return (
    <div>
      <h2>Transaction History</h2>
      <hr />
      {transaction.map((details, ind) => {
        return (
          <div
            key={ind}
            className={`${
              details.amount > 0 ? style.mainDivIncome : style.mainDivExpense
            }`}
          >
            <div>
              <p>{details.desc}</p>
            </div>
            <div>
              <p>{details.amount}$</p>
            </div>
            <button
              className={style.delBtn}
              onClick={() => {
                delTrans(details.id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default History;
