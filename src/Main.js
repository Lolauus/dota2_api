import GetMatches from "./Matches/GetMatches";
import GetPlayerHeroes from "./Players/GetPlayerHeroes";
import GetPlayers from "./Players/GetPlayers";
import { GlobalStyle } from "./Styling/GlobalStyle";

//För att hålla App.js ren så skapade jag en main som sen APP renderar

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
