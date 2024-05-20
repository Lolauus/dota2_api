export default function ShowMatchResult({ matchData, processedPlayers }) {
  matchData.success ? (
    processedPlayers.map((player, index) => (
      <div key={index}>{JSON.stringify(player)}</div>
    ))
  ) : (
    <div>{matchData.success}</div>
  );

  return (
    <>
      Match Result:
      <pre>{JSON.stringify(matchData, null, 2)}</pre>
    </>
  );
}
