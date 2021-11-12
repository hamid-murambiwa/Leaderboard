const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xJG2mdwj5m9C9rOtT2IJ/scores/';
const ul = document.getElementById('names');
const foot = document.getElementById('footer');

const displayScores = (list) => {
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
    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateTime = `<p>${date}</p> <p>|</p> <p>${time}</p>`;

    foot.innerHTML = dateTime;
  });
};

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