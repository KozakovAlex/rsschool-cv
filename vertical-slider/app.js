const leftSlider = document.querySelector('.left-slider');
const rightSlider = document.querySelector('.right-slider');
const leftSliderItems = document.querySelectorAll('.left-slider__item');
let currentPos = 0;
let slidesCount = leftSliderItems.length;
// console.log(slidesCount);


const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');

upButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (currentPos == 3) {
    currentPos = 0;
    rightSlider.style.transform = `translateY(-${currentPos * 100}vh)`;
    leftSlider.style.transform = `translateY(${-300 + currentPos * 100}vh)`;
    return;
  }
  currentPos += 1;
  rightSlider.style.transform = `translateY(-${currentPos * 100}vh)`;
  leftSlider.style.transform = `translateY(${-300 + currentPos * 100}vh)`;
});

downButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (currentPos == 0) {
    currentPos = 3;
    rightSlider.style.transform = `translateY(-${currentPos * 100}vh)`;
    leftSlider.style.transform = `translateY(${-300 + currentPos * 100}vh)`;
    return;
  }
  currentPos -= 1;
  rightSlider.style.transform = `translateY(-${currentPos * 100}vh)`;
  leftSlider.style.transform = `translateY(${-300 + currentPos * 100}vh)`;
});
