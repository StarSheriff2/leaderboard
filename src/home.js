import { refresh, saveScore } from './api.js';

const root = document.getElementById('root');

const header = `
<header>
<h1 class="title">Leaderboard</h1>
</header>
`;

const main = `
<main>
<section id="scores-section" class="scores-section">
  <h2 class="section-title">Recent scores</h2>
  <button type="button" id="refresh-btn" class="refresh-btn">Refresh</button>
</section>
<section id="form-section" class="form-section">
  <form id="form" class="form">
    <h2 class="section-title">Add your score</h2>
    <input type="text" id="name" name="name" placeholder="Name" required>
    <input type="text" id="score" name="score" placeholder="Score" required>
    <input type="submit" value="Submit">
  </form>
</section>
</main>
`;

const renderHome = () => {
  root.insertAdjacentHTML('beforeend', header);
  root.insertAdjacentHTML('beforeend', main);

  const refreshButton = document.getElementById('refresh-btn');
  refreshButton.addEventListener('click', refresh);

  const addScoreForm = document.getElementById('form');
  addScoreForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const scoreName = addScoreForm[0].value;
    const scoreValue = addScoreForm[1].value;
    saveScore(scoreName, scoreValue);
  });
};

export default renderHome;