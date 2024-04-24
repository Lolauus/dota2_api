import { useState } from "react";

export default function GetPlayers() {
  const [accountId, setAccountId] = useState("");
  const [player, setPlayer] = useState("");
  //   const playerID = "49317728";

  const fetchPlayers = async () => {
    try {
      if (accountId.length >= 8) {
        const response = await fetch(
          `https://api.opendota.com/api/players/${accountId}`
        );
        const data = await response.json();
        setAccountId("");
        setPlayer(data);
        if (!response.ok) {
          throw new Error("To many requests");
        }
      }
    } catch (error) {
      console.error("Error", error);
      setPlayer("Error, To Many Requests");
    }
  };
  const onClickHandler = () => {
    fetchPlayers();
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
      <button onClick={onClickHandler}>Search playerID</button>
      <pre>{JSON.stringify(player, null, 2)}</pre>
    </>
  );
}
