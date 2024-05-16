import { Container } from "../Styling/Container";

//en alterativ lösning istället för separata API-calls likt "getmatches/Getplayers... separat"

export default function ApiHandler({ value }) {
  if (value.length === 10) {
    const fetchMatches = async () => {
      const response = await fetch(
        `https://api.opendota.com/api/matches/${value}`
      );
      const data = await response.json();
      console.log(data);
      return (
        <>
          <Container>{JSON.stringify(data, null, 2)}</Container>
        </>
      );
    };
    fetchMatches();
  }
  if (value.length === 8) {
    const fetchPlayers = async () => {
      const response = await fetch(
        `https://api.opendota.com/api/players/${value}`
      );
      const data = await response.json();
      console.log(data);
      return (
        <>
          <Container>{JSON.stringify(data, null, 2)}</Container>
        </>
      );
    };
    fetchPlayers();
  } else {
    const fetchHeroes = async () => {
      const response = await fetch(
        `https://api.opendota.com/api/players/${value}/heroes`
      );
      const data = await response.json();
      return (
        <>
          <Container>{JSON.stringify(data, null, 2)}</Container>
        </>
      );
    };
    fetchHeroes();
  }
}
