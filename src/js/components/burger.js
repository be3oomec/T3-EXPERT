// ================================== \\
// ========== MOBILE BURGER ========= \\
// ================================== \\

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__list');

if (burger) {
  burger.addEventListener('click', function(e) {
    menu.classList.toggle('active');
    burger.classList.toggle('burger-active');
    document.body.classList.toggle('lock');
  });
}
