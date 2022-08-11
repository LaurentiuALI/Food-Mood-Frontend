import React from "react";
import meal from "./ListOfMeals";
import Books from "./Books";
import CurrencyButtons from "./CurrencyButtons";
import { CurrencyProvider } from "./CartContext";

const App = () => {
  return (
    <CurrencyProvider>
      <CurrencyButtons />
      <Books list={meal} />
    </CurrencyProvider>
  );
};

export default App;
