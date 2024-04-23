import { useState, useEffect, useRef } from "react";

export default function GetMatches() {
  const [matchId, setMatchId] = useState("");
  const [inputValue, setInputValue] = useState("");

  // const id = " 7700432060";
  const fetchMatches = async () => {
    if (matchId.length < 10) {
    } else {
      const response = await fetch(
        `https://api.opendota.com/api/matches/${matchId}`
      );
      const data = await response.json();
      console.log(data);
      setInputValue(data);
    }
  };

  const onClickHandler = (e) => {
    console.log(inputValue);
    setInputValue(matchId);
    fetchMatches();
    setMatchId("");
  };
  const onChangeHandler = (e) => {
    setMatchId(e.target.value);
  };

  return (
    <>
      <input
        placeholder="Enter MatchID"
        value={matchId}
        onChange={onChangeHandler}
      ></input>
      <button onClick={onClickHandler}>Search Match</button>
      <pre>{JSON.stringify(inputValue, null, 2)}</pre>
    </>
  );
}
