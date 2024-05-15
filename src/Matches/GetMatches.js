import { useMemo, useState } from "react";
import { Container } from "../Styling/Container";
import { InputButton, InputField } from "../Styling/InputContainer";

export default function GetMatches() {
  const [matchId, setMatchId] = useState("");
  const [matchResponse, setMatchResponse] = useState();
  const [loading, setLoading] = useState("");
  //Matchid = " 7700432060";
  const fetchMatches = useMemo(
    () => async () => {
      try {
        if (matchId.length === 10) {
          setLoading("Loading...MatchID: ");
          const response = await fetch(
            `https://api.opendota.com/api/matches/${matchId}`
          );
          const data = await response.json();
          setMatchResponse(data);

          if (!response.ok) {
            throw new Error("To many requests");
          }
        }
      } catch (error) {
        console.error("Error", error);
        setMatchResponse("Error, To many Messages");
      }
    },
    [matchId]
  );

  const onClickHandler = () => {
    fetchMatches();
  };
  const onChangeHandler = (e) => {
    setMatchId(e.target.value);
  };

  return (
    <div>
      <InputField
        placeholder="Enter MatchID"
        value={matchId}
        onChange={onChangeHandler}
      />
      <InputButton onClick={onClickHandler}>SearchMatch</InputButton>
      <Container>
        {loading}
        {JSON.stringify(matchResponse, null, 2)}
      </Container>
    </div>
  );
}
