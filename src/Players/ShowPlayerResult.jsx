import React from "react";

export default function PlayerInfo({ playerData, processedData }) {
  playerData.success ? (
    processedData.playerHeroes.map((player, index) => (
      <div key={index}>{JSON.stringify(player)}</div>
    ))
  ) : (
    <div>{playerData.status}</div>
  );
  return (
    <>
      Player result:
      <pre>{JSON.stringify(playerData, null, 2)}</pre>
    </>
  );
}
