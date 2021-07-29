import renderScores from './scores.js';

const getGameID = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Alonso\' game',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((result) => result);
};

const gameID = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/caXNXmFoFPQU79jDKop8/scores/';

async function getScores() {
  const gameScores = await (await fetch(gameID)).json();
  const scores = gameScores.result;
  renderScores(scores);
}

const refresh = () => {
  window.location.reload();
};

async function saveScore(scoreName, scoreValue) {
  const newScore = await fetch(gameID, {
    method: 'POST',
    body: JSON.stringify({
      user: scoreName,
      score: scoreValue,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  if (newScore.ok) {
    refresh();
  }
}

export {
  getGameID,
  getScores,
  refresh,
  saveScore,
};
