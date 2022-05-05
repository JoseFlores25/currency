import React, { useState, useEffect } from "react";

function Crypto() {
  const [cryptos, setCryptos] = useState([]);

  const handleGetCryptos = async () => {
    const res = await fetch("http://localhost:3000/cryptoCurrency", {
      method: "GET",
    });

    const resJson = await res.json();
    console.log("[debug]", resJson);
    setCryptos(resJson);
  };

  const handleAddCrypto = async () => {
    await fetch("http://localhost:3000/cryptoCurrency", {
      method: "POST",
      body: JSON.stringify({ name: "s", rank: 10 }),
    });

    await handleGetCryptos();
  };

  useEffect(() => {
    handleGetCryptos();
  }, []);

  return (
    <form>
      <p>Crypto</p>
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
