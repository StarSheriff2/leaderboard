const renderScores = (scores) => {
  const scoresSection = document.getElementById('scores-section');
  const list = document.createElement('ul');
  list.className = 'scores-list';
  scoresSection.appendChild(list);

  for (let i = 0; i < scores.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.textContent = `${scores[i].user}: ${scores[i].score}`;
    list.appendChild(listItem);
  }
};

export default renderScores;
