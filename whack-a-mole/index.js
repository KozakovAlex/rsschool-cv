const scoreResult = document.querySelector('.score__result');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');

const btnStart = document.querySelector('.btn-start');

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

console.log(randTime(200, 1000));