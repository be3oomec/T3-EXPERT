
// <--------- MOBILE BURGER --------> \\

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__megamenu');

if (burger) {
  burger.addEventListener('click', function(e) {
    menu.classList.add('active');
    document.body.classList.add('lock');
  });
}
