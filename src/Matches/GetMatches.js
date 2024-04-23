import { useState, useEffect, useRef } from "react";

export default function GetMatches() {
  const [matchId, setMatchId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState("");
  const InputRef = useRef();

  // const id = " 7700432060";
  const fetchMatches = async () => {
    if (matchId.length < 10) {
    } else {
      setLoading("Loading...MatchID: ");
      const response = await fetch(
        `https://api.opendota.com/api/matches/${matchId}`
      );
      const data = await response.json();
      setLoading("");
      console.log(data);
      setInputValue(data);
    }
  };
  useEffect(() => {
    InputRef.current.focus();
  });

  const onClickHandler = () => {
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
        ref={InputRef}
      ></input>
      <button onClick={onClickHandler}>Search Match</button>

      <pre>
        {loading}
        {JSON.stringify(inputValue, null, 2)}
      </pre>
    </>
  );
}
