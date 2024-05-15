import { useState } from "react";
import { Container } from "../Styling/Container";
import { InputButton, InputField } from "../Styling/InputContainer";

export default function GetPlayerHeroes() {
  const [accountId, setAccountId] = useState("");
  const [heroes, setHeroes] = useState();
  //playerID = "49317728";
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
    <div>
      <InputField
        value={accountId}
        placeholder="Enter playerID"
        onChange={onChangeHandler}
      ></InputField>
      <InputButton onClick={onClickHandler}>Search bitches</InputButton>
      <Container>{JSON.stringify(heroes, null, 2)}</Container>
    </div>
  );
}
