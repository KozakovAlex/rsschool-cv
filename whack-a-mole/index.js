const gameSquare = document.querySelector('.game-square');

const lastResult = document.querySelector('.last-score__result');
lastResult.textContent = localStorage.getItem('lastResult');

const scoreResult = document.querySelector('.cur-score__result');
const levelElem = document.querySelector('.level');
const levelNumber = document.querySelector('.level__number');
const timeLeftElem = document.querySelector('.time__left');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
let lastHole;
let score = 0;
scoreResult.textContent = score;
let currentLevel = 1;
levelNumber.textContent = currentLevel;
let timeLeftinSec = 10;
const minTime = 200;
const maxTime = 1000;
let rateTime = 1;

const molesPictures = {
  1: 'url(./img/clipart_1.png)',
  2: 'url(./img/clipart_2.png)',
  3: 'url(./img/clipart_3.png)',
  4: 'url(./img/clipart_4.png)',
  5: 'url(./img/clipart_5.png)',
  6: 'url(./img/clipart_6.png)',
}

const btnStart = document.querySelector('.btn-start');

function setTime(timeLeftinSec) {
  timeLeftElem.textContent = `${timeLeftinSec}`;
  if (timeLeftinSec < 10) {
    timeLeftElem.textContent = `0${timeLeftinSec}`;
  }
}

function decreaseTime() {
  if (timeLeftinSec == 0) {
    timeLeftinSec = 10;
    nextLevel();
    console.log('NEXT LEVEL');
    return;
  };
  let currentTime = --timeLeftinSec;
  setTime(currentTime);
  setTimeout(decreaseTime, 1000);
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  moles[index].style.backgroundImage = molesPictures[Math.floor(Math.random() * moles.length)];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(minTime * rateTime, maxTime * rateTime);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if(timeLeftinSec > 0) {
      peep();
    } else return;
  }, time);
  console.log('runnig peep');
}

function startGame() {
  btnStart.disabled = true;
  gameSquare.classList.add('my-cursor');
  timeLeftinSec = 10;
  peep();
  setTime(timeLeftinSec);
  setTimeout(decreaseTime, 1000);
}

function nextLevel() {
  currentLevel++;
  if (currentLevel == 4) {
    console.log('END GAME');
    localStorage.setItem('lastResult', score);
    lastResult.textContent = localStorage.getItem('lastResult');
    return;
  }
  levelElem.classList.add('change-level');
  setTimeout(() => {
    levelElem.classList.remove('change-level')
  }, 3000);

  rateTime = rateTime * 0.8;
  
  levelNumber.textContent = currentLevel;
  timeLeftinSec = 10;
  peep();
  setTime(timeLeftinSec);
  setTimeout(decreaseTime, 1000);
}

btnStart.addEventListener('click', startGame);

function bonk(evt) {
  if(!evt.isTrusted) return;
  const audio = new Audio();
  audio.src = 'sound/shoot.wav';
  audio.play();
  score++;
  scoreResult.textContent = score;  
  this.parentNode.classList.remove('up');
}

for (let mole of moles) {
  mole.addEventListener('click', bonk)
};


