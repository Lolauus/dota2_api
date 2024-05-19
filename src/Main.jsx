import { useState, useCallback } from "react";
import GetPlayers from "./Players/GetPlayers";
import { InputField, InputButton } from "./Styling/InputContainer";
import { GlobalStyle } from "./Styling/GlobalStyle";
import GetMatches from "./Matches/GetMatches";

//För att hålla App.js ren så skapade jag en main som sen APP

export default function Main() {
  const [value, setValue] = useState("");
  const [searchTerm, setSearchTerm] = useState();

  const onClickHandler = useCallback(async () => {
    setSearchTerm(value);
  }, [value]);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <GlobalStyle />
      <InputField
        value={value}
        placeholder="Enter Player or MatchID"
        onChange={onChangeHandler}
      ></InputField>
      <InputButton onClick={onClickHandler}>Search match</InputButton>
      {/* <Container></Container> */}
      {searchTerm ? (
        <>
          <GetMatches searchTerm={searchTerm} />
          <GetPlayers searchTerm={searchTerm} />
        </>
      ) : null}
      {/* <GlobalStyle />
      <GetMatches 
      <GetPlayers />
    <GetPlayerHeroes /> */}
    </div>
  );
}
