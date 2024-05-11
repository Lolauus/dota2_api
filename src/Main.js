import GetMatches from "./Matches/GetMatches";
import GetPlayerHeroes from "./Players/GetPlayerHeroes";
import GetPlayers from "./Players/GetPlayers";

export default function Main() {
  return (
    <>
      <GetMatches />
      <GetPlayers />
      <GetPlayerHeroes />
    </>
  );
}
