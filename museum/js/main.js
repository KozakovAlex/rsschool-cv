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