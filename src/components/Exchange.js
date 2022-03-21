import React, { useState } from "react";

export const Exchange = () => {
  const [amount, setAmount] = useState("");
  const [text, setText] = useState(" ");
  return (
    <div className="from">
      <from>
        <ul>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="1"
          />
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.018"
          />
          <input type="number" value={text} placeholder="DR Peso" />
          <input type="text" value={amount} placeholder="USA Dollar." />
        </ul>
      </from>
    </div>
  );
};
