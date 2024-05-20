import { useState, useCallback } from "react";
import { InputField, InputButton } from "./Styling/InputContainer";
import { GlobalStyle } from "./Styling/GlobalStyle";
import GetMatches from "./Matches/GetMatches";
import GetPlayers from "./Players/GetPlayers";

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
      <InputButton onClick={onClickHandler}>Search</InputButton>
      {searchTerm ? (
        <>
          <GetMatches searchTerm={searchTerm} />
          <GetPlayers searchTerm={searchTerm} />
        </>
      ) : null}
    </div>
  );
}
