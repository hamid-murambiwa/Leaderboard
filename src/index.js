import './style.css';
import './build.html';
import { getScores, addScore } from './API.js';

getScores();

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
});

document.getElementById('refresh').addEventListener('click', (e) => {
  e.preventDefault();
  getScores();
});