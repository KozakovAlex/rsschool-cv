const mainHeader = document.querySelector('.main-header');
const mainHeaderWrapper = document.querySelector('.main-header__wrapper');
const upButton = document.querySelector('.up-button');
const codeTitleButton = document.querySelector('.code-title-button');
const codeExample = document.querySelector('.code-example');
const mainHeaderBurger = document.querySelector('.main-header__burger');
const burgerLineTop = document.querySelector('.burger-line-top');
const burgerLineMiddle = document.querySelector('.burger-line-middle');
const burgerLineBottom = document.querySelector('.burger-line-bottom');
const mainHeaderMenuBurger = document.querySelector('.main-header__menu-burger');


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

codeTitleButton.addEventListener('click', () => {
  codeExample.classList.toggle('code-example_disabled');
  codeExample.classList.toggle('code-example_active');
})

mainHeaderBurger.addEventListener('click', () => {
  burgerLineTop.classList.toggle('burger-line-top_active');
  burgerLineMiddle.classList.toggle('burger-line-middle_active');
  burgerLineBottom.classList.toggle('burger-line-bottom_active');
  mainHeaderMenuBurger.classList.toggle('main-header__menu-burger_active');
})

