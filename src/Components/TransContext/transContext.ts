import { createContext, useReducer } from "react";
let initialTransaction = {
  transaction: [],
};
const TransContext = createContext(initialTransaction);

let TransReducer = (state: { transaction: any[]; }, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case "ADD_TRANS":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };
    case "DEL_TRANS":
      return {
        ...state,
        transaction: state.transaction.filter(
          (trans: { id: any; }) => trans.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const TransProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransReducer, initialTransaction);

  function addTransaction(transObj: { id: any; desc: any; amount: any; }) {
    dispatch({
      type: "ADD_TRANS",
      payload: {
        id: transObj.id,
        desc: transObj.desc,
        amount: transObj.amount,
      },
    });
  }

  function delTrans(id: any) {
    dispatch({
      type: "DEL_TRANS",
      payload: id,
    });
  }
  return (
    <TransContext.Provider
      value={{
        transaction: state.transaction,
        addTransaction,
        delTrans,
      }}
    >
      {children}
    </TransContext.Provider>
  );
};

export { TransContext, TransProvider };
