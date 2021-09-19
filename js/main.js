const mainHeader = document.querySelector('.main-header');
const mainHeaderWrapper = document.querySelector('.main-header__wrapper');
const upButton = document.querySelector('.up-button');

(function () {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      mainHeader.classList.add('main-header_active');
      mainHeaderWrapper.classList.add('main-header__wrapper_active');
      upButton.classList.add('up-button_active');
    } else {
      mainHeader.classList.remove('main-header_active');
      mainHeaderWrapper.classList.remove('main-header__wrapper_active');
      upButton.classList.remove('up-button_active');
    }
  })
})();

upButton.addEventListener('click', () => {
  window.scrollTo(0, 0);
})

