import renderScores from "./scores.js";

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
  .then((result) => result)
};

const gameID = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9tYKHUEMS6t9KX9YbJHc/scores/';

async function getScores() {
  const gameScores = await (await fetch(gameID)).json()
  const scores = gameScores.result;
  renderScores(scores);
}

export { getGameID, getScores };
