// import { useState } from "react";
// import Container from "../Styling/Container";
// //en alterativ lösning istället för separata API-calls likt "getmatches/Getplayers... separat"
// export default function ApiHandler(props) {
//   const [apiData, setApiData] = useState("");
//   const fetchMatches = async () => {
//     const response = await fetch(
//       `https://api.opendota.com/api/matches/${props}`
//     );
//     const data = await response.json();
//     setApiData(data);
//     return <>{data}</>;
//   };
//   const fetchPlayers = async () => {
//     const response = await fetch(
//       `https://api.opendota.com/api/players/${props}`
//     );
//     const data = await response.json();
//     setApiData(data);
//     return <>{data}</>;
//   };

//   const fetchHeroes = async () => {
//     const response = await fetch(
//       `https://api.opendota.com/api/players/${props}/heroes`
//     );
//     const data = await response.json();
//     setApiData(data);
//     return <>{data}</>;
//   };
//   return (
//     <>
//       <Container>{JSON.stringify(apiData, null, 2)}</Container>
//     </>
//   );
// }
