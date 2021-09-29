const buttonsMinus = document.querySelectorAll('.btn_minus');
const buttonsPlus = document.querySelectorAll('.btn_plus');

for(let buttonMinus of buttonsMinus) {
  buttonMinus.addEventListener('click', function() {
    this.nextElementSibling.stepDown();
  })
}

for(let buttonPlus of buttonsPlus) {
  buttonPlus.addEventListener('click', function() {
    this.previousElementSibling.stepUp();
  })
}

const mainHeader = document.querySelector('.main-header');
(function () {
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      mainHeader.classList.add('main-header_active');
    } else {
      mainHeader.classList.remove('main-header_active');
    }
  }
}());


const picturesSrc = [
  './img/galery/galery1.jpg',
  './img/galery/galery2.jpg',
  './img/galery/galery3.jpg',
  './img/galery/galery4.jpg',
  './img/galery/galery5.jpg',
  './img/galery/galery6.jpg',
  './img/galery/galery7.jpg',
  './img/galery/galery8.jpg',
  './img/galery/galery9.jpg',
  './img/galery/galery10.jpg',
  './img/galery/galery11.jpg',
  './img/galery/galery12.jpg',
  './img/galery/galery13.jpg',
  './img/galery/galery14.jpg',
  './img/galery/galery15.jpg'
];
const shufflepicturesSrc = shuffle(picturesSrc);

const galleryPictures = document.querySelectorAll('.gallery__pictures-pic');
for (let i = 0; i < galleryPictures.length; i++) {
  galleryPictures[i].src = shufflepicturesSrc[i];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}