import { useState } from "react";
// import GetMatches from "./Matches/GetMatches";
// import GetPlayerHeroes from "./Players/GetPlayerHeroes";
// import GetPlayers from "./Players/GetPlayers";
// import { GlobalStyle } from "./Styling/GlobalStyle";
import ApiHandler from "./DataHandler/ApiHandler";
import { InputField, InputButton } from "./Styling/InputContainer";
import { Container } from "./Styling/Container";

//För att hålla App.js ren så skapade jag en main som sen APP

export default function Main() {
  const [value, setValue] = useState("");

  const onClickHandler = () => {
    ApiHandler({ value });
  };
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <InputField
        value={value}
        placeholder="Enter MatchiD"
        onChange={onChangeHandler}
      ></InputField>
      <InputButton onClick={onClickHandler}>Search match</InputButton>
      <Container>{JSON.stringify(value, null, 2)}</Container>
      {/* <GlobalStyle />
      <GetMatches 
      <GetPlayers />
    <GetPlayerHeroes /> */}
    </div>
  );
}
