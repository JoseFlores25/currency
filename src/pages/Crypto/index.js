import React, { useState, useEffect } from "react";

function Crypto() {
  const [cryptos, setCryptos] = useState([]);
  const [name, setName] = useState("");

  const handleGetCryptos = async () => {
    const res = await fetch("http://localhost:3001/cryptoCurrency", {
      method: "GET",
    });

    const resJson = await res.json();
    console.log("[debug]", resJson);
    setCryptos(resJson);
  };

  const handleAddCrypto = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/cryptoCurrency", {
      method: "POST",
      body: JSON.stringify({ name, rank: 0 }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
    });

    setName("");
    await handleGetCryptos();
  };

  useEffect(() => {
    handleGetCryptos();
  }, []);

  return (
    <form>
      <p>Crypto Top 10</p>
      <label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="type"
          placeholder="Top rank"
        />
        <button onClick={handleAddCrypto}> Submit</button>
      </label>
      {cryptos.map((crypto) => (
        <p key={`unique + ${crypto.id}`}>{crypto.name}</p>
      ))}
    </form>
  );
}

export default Crypto;
