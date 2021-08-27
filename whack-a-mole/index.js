const gameSquare = document.querySelector('.game-square');
const scoreResult = document.querySelector('.score__result');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

const btnStart = document.querySelector('.btn-start');


function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) {
      peep();
    }
  }, time);
}

function startGame() {
  gameSquare.classList.add('my-cursor');
  score = 0;
  scoreResult.textContent = score;
  timeUp = false;
  peep();
  setTimeout(() => {
    timeUp = true;
  }, 5000)
}

btnStart.addEventListener('click', startGame);

function bonk(evt) {
  if(!evt.isTrusted) return;
  score++;
  scoreResult.textContent = score;
  this.parentNode.classList.remove('up');
}

for (let mole of moles) {
  mole.addEventListener('click', bonk)
};


