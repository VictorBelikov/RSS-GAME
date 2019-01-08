export default class LocalStorageHandler {
  static getData() {
    const fullDataString = localStorage.getItem('scoreboard');

    if (fullDataString) {
      const arr = JSON.parse(localStorage.getItem('scoreboard'));
      return arr
        .sort((a, b) => b.kills - a.kills) // first 11 places
        .slice(0, 11);
    }
    return null;
  }

  static addPlayer(player) {
    if (player) {
      const fullScoreboard = localStorage.getItem('scoreboard');
      if (!fullScoreboard) {
        const arr = [];
        arr.push(player);
        localStorage.setItem('scoreboard', JSON.stringify(arr));
      } else {
        const fullScoreboardJson = JSON.parse(fullScoreboard);
        fullScoreboardJson.push(player);
        localStorage.setItem('scoreboard', JSON.stringify(fullScoreboardJson));
      }
    }
  }
}
