import { useEffect, useMemo, useState } from "react";
import { Container } from "../Styling/Container";
import PlayerInfo from "./PlayerInfo";

export default function GetPlayers({ searchTerm }) {
  const [playerData, setPlayerData] = useState({
    success: false,
    playerInfo: {},
    playerHeroes: {},
    status: "",
  });

  useEffect(() => {
    async function fetchData(searchTerm) {
      const data = await fetchPlayerInfo(searchTerm);
      setPlayerData(data);
    }

    fetchData(searchTerm);
  }, [searchTerm]);

  const processedData = useMemo(() => {
    if (playerData.success) {
      return playerData;
    }

    return [];
  }, [playerData]);

  return (
    <Container>
      {playerData.success ? (
        <PlayerInfo info={playerData.playerInfo} />
      ) : (
        <div>{playerData.status}</div>
      )}
      {playerData.success ? (
        processedData.playerHeroes.map((player, index) => (
          <div key={index}>{JSON.stringify(player)}</div>
        ))
      ) : (
        <div>{playerData.status}</div>
      )}
    </Container>
  );
}

const fetchPlayerInfo = async (searchTerm) => {
  const data = {
    success: false,
    playerInfo: {},
    playerHeroes: {},
    status: "",
  };

  const playersInfoResponse = await fetch(
    `https://api.opendota.com/api/players/${searchTerm}`
  );

  const playerHeroesResponse = await fetch(
    `https://api.opendota.com/api/players/${searchTerm}/heroes`
  );

  const playerInfo = await playersInfoResponse.json();
  const playerHeroes = await playerHeroesResponse.json();

  if (playerInfo.error || playerHeroes.error) {
    data.success = false;
    data.status = playerHeroes.error ?? playerInfo.error;
  } else {
    data.success = true;
    data.playerInfo = playerInfo;
    data.playerHeroes = playerHeroes;
    data.status = "success";
  }

  return data;
};
