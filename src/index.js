import './style.css';
import './build.html';

//
const div = document.getElementById('names');
const ul = document.createElement('ul');
for (let i = 0; i < 8; i++) {
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.innerText = '100';
  li.appendChild(p);
  ul.appendChild(li);
}
div.appendChild(ul);