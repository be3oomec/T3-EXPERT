
// ---------------------- MOBILE BURGER ---------------------
if (document.querySelector('.burger')) {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__megamenu');

  burger.addEventListener('click', function(e) {
    menu.classList.add('active');
    document.body.classList.add('lock');
  });
  
  if (document.querySelector(".button-close")) {
    const btnClose = document.querySelector(".button-close");

    btnClose.addEventListener("click", function () {
      menu.classList.remove("active");
      document.body.classList.remove("lock");
    });
  }
}

// ---------------------- MOBILE BURGER ---------------------
