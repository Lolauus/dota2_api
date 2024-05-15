import GetMatches from "./Matches/GetMatches";
import GetPlayerHeroes from "./Players/GetPlayerHeroes";
import GetPlayers from "./Players/GetPlayers";
import { GlobalStyle } from "./Styling/GlobalStyle";

export default function Main() {
  return (
    <>
      <GlobalStyle />
      <GetMatches />
      <GetPlayers />
      <GetPlayerHeroes />
    </>
  );
}
