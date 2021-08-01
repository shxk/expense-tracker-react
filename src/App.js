import "./App.css";
import { Header } from "./components/Header.js";
import { Balance } from "./components/Balance.js";
import { IncomeExpense } from "./components/IncomeExpense.js";
import { TransactionContainer } from "./components/TransactionContainer.js";
import { AddTransaction } from "./components/AddTransaction.js";

import {  GlobalProvider } from "./context/GlobalState"




function App() {
  return (
    <GlobalProvider>
      <Header title="Expense Tracker" />
      <div className="container">
        <Balance />
        <IncomeExpense/>
        <TransactionContainer />
        <AddTransaction/>
      </div>
      
    </GlobalProvider>
  );
}

export default App;
