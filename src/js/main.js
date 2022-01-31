
const btnClose = document.querySelector('.button-close');
const megaMenu = document.querySelector('.header__megamenu');

if (btnClose) {
  btnClose.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.classList.remove('lock');
  })
}

// -----------------------------------------------

NiceSelect.bind(document.getElementById("selCases"));
