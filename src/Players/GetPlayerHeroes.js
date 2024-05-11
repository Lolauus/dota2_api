import { useState } from "react";

export default function GetPlayerHeroes() {
  const [accountId, setAccountId] = useState("");
  const [heroes, setHeroes] = useState();

  const fetchHeroes = async () => {
    try {
      if (accountId.length === 8) {
        const response = await fetch(
          `https://api.opendota.com/api/players/${accountId}/heroes`
        );
        const data = await response.json();
        setAccountId("");
        setHeroes(data);
        if (!response.ok) {
          throw new Error("To many requests");
        }
      }
    } catch (error) {
      console.error("Error", error);
      setHeroes("Error, To Many Requests");
    }
  };
  const onClickHandler = () => {
    fetchHeroes();
  };
  const onChangeHandler = (e) => {
    setAccountId(e.target.value);
  };
  return (
    <>
      <input
        value={accountId}
        placeholder="Enter playerID"
        onChange={onChangeHandler}
      ></input>
      <button onClick={onClickHandler}>Search bitches</button>
      <pre>{JSON.stringify(heroes, null, 2)}</pre>
    </>
  );
}
