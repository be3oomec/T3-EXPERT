if (document.querySelector('.seo__text')) {
  const button = document.querySelector(".seo__btn");
  const text = document.querySelector('.seo__text');


  if (button) {
    button.addEventListener('click', function (e) {
      if (text.classList.contains('open')) {
        text.classList.remove('open');
        button.innerHTML = 'Показать полностью';
      } else {
        text.classList.add('open');
        button.innerHTML = 'Скрыть';
      }
    });
  }
};