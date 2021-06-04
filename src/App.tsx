import React from "react";
import "./App.css";
import AddnewTrans from "./Components/AddNewTrans/addNewTrans";
import CurrentBalance from "./Components/CurrentBalance/currentBalance";
import Details from "./Components/Details/details";
import History from "./Components/History/history";
// import { TransProvider } from "./Components/TransContext/transContext";

function App() {
  return (
    // <TransProvider>
      <div className="main-container">
        <CurrentBalance />
        <Details />
        <History />
        <AddnewTrans />
      </div>
    // </TransProvider>
  );
}

export default App;
