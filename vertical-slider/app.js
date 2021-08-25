const mainContainer = document.querySelector('.main-container');
const height = mainContainer.clientHeight;

const leftSlider = document.querySelector('.left-slider');
const leftSliderItems = document.querySelectorAll('.left-slider__item');
const slidesCount = leftSliderItems.length;
const firstLeftSlide = leftSliderItems[0];
const lastLeftSlide = leftSliderItems[slidesCount - 1];
const firstLeftSlideClone = firstLeftSlide.cloneNode(true);
const lastLeftSlideClone = lastLeftSlide.cloneNode(true);
leftSlider.appendChild(firstLeftSlideClone);
leftSlider.insertBefore(lastLeftSlideClone, firstLeftSlide);


const rightSlider = document.querySelector('.right-slider');
const rightSliderItems = document.querySelectorAll('.right-slider__item');
const firstRightSlide = rightSliderItems[0];
const lastRightSlide = rightSliderItems[slidesCount - 1];
const firstRightSlideClone = firstRightSlide.cloneNode(true);
const lastRightSlideClone = lastRightSlide.cloneNode(true);
rightSlider.appendChild(firstRightSlideClone);
rightSlider.insertBefore(lastRightSlideClone, firstRightSlide);



let currentPos = 0;
leftSlider.style.top = `${-(slidesCount) * height}px`;
rightSlider.style.top = `${-1 * height}px`;

function slidesMove() {
  leftSlider.style.transform = `translateY(${currentPos * height}px)`;
  rightSlider.style.transform = `translateY(${-currentPos * height}px)`;
}

function turnOnTransition() {
  leftSlider.classList.add('transitioned');
  rightSlider.classList.add('transitioned');
}

function turnOffTransition() {
  leftSlider.classList.remove('transitioned');
  rightSlider.classList.remove('transitioned');
}

const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');

upButton.addEventListener('click', () => {
  changeSlides('up');
});
downButton.addEventListener('click', () => {
  changeSlides('down');
});


function changeSlides (direction) {
  turnOnTransition();

  if (direction === 'up') {
    if (currentPos === slidesCount) {
      return;
    }
    currentPos++;
  } else if (direction === 'down') {
    if (currentPos < 0) {
      return;
    }
    currentPos--;
  }
  slidesMove();
}

mainContainer.addEventListener('wheel', (event) => {
  turnOnTransition();

  if (event.deltaY < 0) {
    if (currentPos === slidesCount) {
      return;
    }
    currentPos++;
  } else if (event.deltaY > 0) {
    if (currentPos < 0) {
      return;
    }
    currentPos--;
  }
  slidesMove();
});


mainContainer.addEventListener('transitionend', () => {
  if (currentPos === slidesCount) {
    turnOffTransition();
    currentPos = 0;
    slidesMove();
  }
  if (currentPos < 0) {
    turnOffTransition();
    currentPos = slidesCount - 1;
    slidesMove();
  }
});


