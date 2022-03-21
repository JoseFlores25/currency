import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Exchange } from "./components/Exchange";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Exchange />
      </div>
    </div>
  );
}

export default App;
