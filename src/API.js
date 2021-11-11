const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xJG2mdwj5m9C9rOtT2IJ/scores/';
const ul = document.getElementById('names');
function displayScores(list) {
  ul.textContent = '';
  list.forEach((score) => {
    const li = document.createElement('li');
    const userName = document.createElement('span');
    const userScore = document.createElement('span');
    userName.innerText = `${score.user} :`;
    userScore.innerText = score.score;
    userName.className = 'span';
    userScore.className = 'span';
    li.append(userName, userScore);
    ul.appendChild(li);
  });
}
const getScores = async () => {
  const response = await fetch(url);
  const scores = await response.json();
  displayScores(scores.result);
};

const addScore = async () => {
  (await fetch(url, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: document.querySelector('#name').value,
      score: document.querySelector('#score').value,
    }),
  })).json();

  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
};
export { getScores, displayScores, addScore };