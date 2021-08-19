const container = document.querySelector('.container');

const leftSlider = document.querySelector('.left-slider');
const rightSlider = document.querySelector('.right-slider');
const leftSliderItems = document.querySelectorAll('.left-slider__item');
let currentPos = 0;
let slidesCount = leftSliderItems.length;

leftSlider.style.top = `${-(slidesCount - 1) * 100}vh`;
// console.log(slidesCount);


const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');

upButton.addEventListener('click', () => {
  changeSlides('up');
});

downButton.addEventListener('click', () => {
  changeSlides('down');
});

function changeSlides (direction) {
  if (direction === 'up') {
    currentPos++;
    if (currentPos === slidesCount) {
      currentPos = 0;
    }
  } else if (direction === 'down') {
    currentPos--;
    if (currentPos < 0) {
      currentPos = slidesCount - 1;
    }
  }

  rightSlider.style.transform = `translateY(-${currentPos * 100}vh)`;
  leftSlider.style.transform = `translateY(${currentPos * 100}vh)`;

}
