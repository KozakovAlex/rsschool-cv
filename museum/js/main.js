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