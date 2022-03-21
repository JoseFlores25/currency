import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Exchange } from "./components/Exchange";

const BASE_URL =
  "http://api.exchangeratesapi.io/v1/latest?access_key=e733ef71b9752811e01c874478bccdcb";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const currency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency;
      });
  }, []);

  return (
    <>
      <Header />

      <Exchange currencyOptions={currencyOptions} />
      <div className="equals">= </div>
      <Exchange currencyOptions={currencyOptions} />
    </>
  );
}

export default App;
