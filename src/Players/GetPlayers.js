import { useState } from "react";
import { Container } from "../Styling/Container";
import { InputButton, InputField } from "../Styling/InputContainer";
import ApiHandler from "../DataHandler/ApiHandler";

export default function GetPlayers() {
  const [accountId, setAccountId] = useState("");
  const [player, setPlayer] = useState();
  //playerID = "49317728";

  // Vill man ha en separat state för load?
  const fetchPlayers = async () => {
    try {
      if (accountId.length === 8) {
        setPlayer("Loading...");
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
      if (accountId.length === 10) {
        ApiHandler(accountId);
      }
    } catch (error) {
      console.error("Error", error);
      setPlayer("Error loading page");
    }
  };
  const onClickHandler = () => {
    fetchPlayers();
  };
  const onChangeHandler = (e) => {
    setAccountId(e.target.value);
  };
  return (
    <div>
      <InputField
        value={accountId}
        placeholder="Enter playerID"
        onChange={onChangeHandler}
      />
      <InputButton onClick={onClickHandler}>Search PlayerID</InputButton>
      <Container>{JSON.stringify(player, null, 2)}</Container>
    </div>
  );
}
