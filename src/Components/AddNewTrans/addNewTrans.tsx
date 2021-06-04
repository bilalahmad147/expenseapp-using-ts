import React, { useContext, useState } from "react";
import { TransContext } from "../TransContext/transContext";
import style from "./newTrans.module.css";

const AddnewTrans = () => {
  let [desc, setDesc] = useState("");
  let [amount, setAmount] = useState("");
  let { addTransaction } = useContext(TransContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: new Date().getTime(),
      desc: desc,
      amount: amount,
    });
    setDesc("");
    setAmount("");
  };
  return (
    <div>
      <h2>Add New Transaction</h2>
      <hr />
      <form className={style.descForm} onSubmit={handleSubmit}>
        <label htmlFor="description">
          Add Description: <br />
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
            placeholder="Detail of transaction"
          />
        </label>
        <br />
        <label htmlFor="amount">
          Transaction Amount: <br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            placeholder="Expanse value (-), Income value (+)"
          />
        </label>
        <br />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddnewTrans;
