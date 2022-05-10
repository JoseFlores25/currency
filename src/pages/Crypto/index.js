import React, { useState, useEffect } from "react";

function Crypto() {
  const [cryptos, setCryptos] = useState([]);

  const handleGetCryptos = async () => {
    const res = await fetch("http://localhost:3001/cryptoCurrency", {
      method: "GET",
    });

    const resJson = await res.json();
    console.log("[debug]", resJson);
    setCryptos(resJson);
  };

  const handleAddCrypto = async () => {
    await fetch("http://localhost:3001/cryptoCurrency", {
      method: "POST",
      // body: JSON.stringify({ name: " ", rank: 0 }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    await handleGetCryptos();
  };

  useEffect(() => {
    handleGetCryptos();
  }, []);

  return (
    <form>
      <p>Crypto Top 10</p>
      <label>
        <input type="text" placeholder="Add crypto" />
        <input type={"submit"} onSubmit={handleAddCrypto} />
      </label>
      {cryptos.map((crypto) => (
        <p>{crypto.name}</p>
      ))}
    </form>
  );
}

export default Crypto;
