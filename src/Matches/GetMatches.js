import { useEffect, useMemo, useState } from "react";
import { Container } from "../Styling/Container";
//Matchid = " 7700432060";
export default function GetMatches({ searchTerm }) {
  const [matchData, setMatchData] = useState({
    success: false,
    players: [],
    status: "",
  });

  useEffect(() => {
    async function fetchData(searchTerm) {
      const data = await fetchMatches(searchTerm);
      setMatchData(data);
    }

    fetchData(searchTerm);
  }, [searchTerm]);

  const processedPlayers = useMemo(() => {
    if (matchData.success) {
      return matchData.players;
    }

    return [];
  }, [matchData]);

  return (
    <Container>
      {matchData.success ? (
        processedPlayers.map((player, index) => (
          <div key={index}>{JSON.stringify(player)}</div>
        ))
      ) : (
        <div>{matchData.status}</div>
      )}
    </Container>
  );
}

const fetchMatches = async (searchTerm) => {
  const players = [];

  try {
    const response = await fetch(
      `https://api.opendota.com/api/matches/${searchTerm}`
    );

    const data = await response.json();

    if (data?.players?.length) {
      data.players.forEach((player) => {
        players.push({
          player_slot: player["player_slot"],
          team_number: player["team_number"],
          kda: player["kda"],
        });
      });

      return {
        success: true,
        players: players,
        status: "successfully fetched match",
      };
    } else if (data.error) {
      return {
        success: false,
        players: [],
        status: data.error,
      };
    } else {
      return {
        success: true,
        players: [],
        status: "Could not find match with id: " + searchTerm,
      };
    }
  } catch (error) {
    return {
      success: false,
      players: [],
      status: JSON.stringify(error),
    };
  }
};
