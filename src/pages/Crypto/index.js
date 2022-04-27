import React, { useState, useEffect } from "react";

function Crypto() {
  const [cryptos, setCryptos] = useState([]);

  const handleGetCryptos = async () => {
    const res = await fetch("http://localhost:3004/cryptoCurrency", {
      method: "GET",
    });

    const resJson = await res.json();
    console.log("[debug]", resJson);
    setCryptos(resJson);
  };

  const handleAddCrypto = async () => {
    await fetch("http://localhost:3004/cryptoCurrency", {
      method: "POST",
      body: JSON.stringify({ name: "s", rank: 10 }),
    });

    await handleGetCryptos();
  };

  useEffect(() => {
    handleGetCryptos();
  }, []);

  return (
    <div>
      <p>Crypto</p>
      <div>
        <input placeholder="Add crypto" />
        <input type={"submit"} onClick={handleAddCrypto} />
      </div>
      {cryptos.map((crypto) => (
        <p>{crypto.name}</p>
      ))}
    </div>
  );
}

export default Crypto;
