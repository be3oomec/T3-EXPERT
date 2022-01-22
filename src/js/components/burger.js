// ================================== \\
// ========== MOBILE BURGER ========= \\
// ================================== \\

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');

if (burger) {
  burger.addEventListener('click', function(e) {
    menu.classList.toggle('active');
    burger.classList.toggle('burger-active');
    document.body.classList.toggle('lock');
  });
}
