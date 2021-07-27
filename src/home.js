const root = document.getElementById('root');

const header = `
<header>
<h1 class="title">Leaderboard</h1>
</header>
`;

const main = `
<main>
<section id="scores-section">
  <h2 class="section-title">Recent scores</h2>
  <button type="button" class="refresh-btn">Refresh</button>
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
};

export default renderHome;