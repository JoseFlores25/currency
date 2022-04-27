import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import { Home } from "./pages/Home";
import { About } from "./components/About";
import Crypto from "./pages/Crypto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
