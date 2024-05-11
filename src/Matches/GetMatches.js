import { useState, useEffect, useRef } from "react";

export default function GetMatches() {
  const [matchId, setMatchId] = useState("");
  const [matchResponse, setMatchResponse] = useState("");
  const [loading, setLoading] = useState("");
  const InputRef = useRef();

  // const Matchid = " 7700432060";
  const fetchMatches = async () => {
    try {
      if (matchId.length < 10) {
      } else {
        setLoading("Loading...MatchID: ");
        const response = await fetch(
          `https://api.opendota.com/api/matches/${matchId}`
        );
        const data = await response.json();
        setLoading("");
        setMatchId("");
        setMatchResponse(data);

        if (!response.ok) {
          throw new Error("To many requests");
        }
      }
    } catch (error) {
      console.error("Error", error);
      setMatchResponse("Error, To many Messages");
    }
  };
  useEffect(() => {
    InputRef.current.focus();
  });

  const onClickHandler = () => {
    fetchMatches();
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
        {JSON.stringify(matchResponse, null, 2)}
      </pre>
    </>
  );
}
