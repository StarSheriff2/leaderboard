import './style.css';

let scores = [
  {
    name: 'Name 1',
    score: 300,
  },
  {
    name: 'Name 2',
    score: 600,
  },
  {
    name: 'Name 3',
    score: 900,
  },
  {
    name: 'Name 4',
    score: 1200,
  },
  {
    name: 'Name 5',
    score: 1500,
  },
  {
    name: 'Name 6',
    score: 1800,
  },
];

const scoresSection = document.getElementById('scores-section');

if (scores.length > 1) {
  const list = document.createElement('ul');
  list.className = 'scores-list'
  scoresSection.appendChild(list);

  for (let i = 0; i < scores.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.textContent = `${scores[i].name}: ${scores[i].score}`;
    list.appendChild(listItem);
  }
}