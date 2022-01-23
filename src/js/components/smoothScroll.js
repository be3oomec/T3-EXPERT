// ================================ \\
// ======== SMOOTH SCROLL ========= \\
// == a add data-goto="selector" == \\
// ================================ \\

const menuLinks = document.querySelectorAll('.header__link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (burger.classList.contains('burger-active')) {
        menu.classList.remove('active');
        burger.classList.remove('burger-active');
        document.body.classList.remove('lock');
      }

      window.scrollTo ({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}
