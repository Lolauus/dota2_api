export default async function ApiHandler({ value }) {
  async function getMatchData(value) {
    const matchResult = {
      players: [],
    };

    const response = await fetch(
      `https://api.opendota.com/api/matches/${value}`
    );

    const data = await response.json();

    if (data.players.length) {
      data.players.forEach((player) => {
        matchResult.players.push({
          player_slot: player["player_slot"],
          team_number: player["team_number"],
          kda: player["kda"],
        });
      });
    }
    return matchResult.players;
  }

  async function getPlayerData(value) {
    const playerData = {
      playerInfo: {},
      playerHeroes: {},
    };

    const playersInfoResponse = await fetch(
      `https://api.opendota.com/api/players/${value}`
    );

    const playerHeroesResponse = await fetch(
      `https://api.opendota.com/api/players/${value}/heroes`
    );

    const playerInfo = await playersInfoResponse.json();
    const playerHeroes = await playerHeroesResponse.json();

    playerData.playerInfo = playerInfo;
    playerData.playerHeroes = playerHeroes;

    return playerData;
  }
}
