function readMore() {
  const spolerMore = document.querySelector('.seo__spoler-more');
  const spolerBtnMore = document.querySelector('.seo__spoler-btn-more');

  function hideSpoler() {
    spolerMore.classList.add('hidden');
    spolerBtnMore.innerHTML = 'Показать полностью';
  }
  function visionSpoler() {
    spolerMore.classList.remove('hidden');
    spolerBtnMore.innerHTML = 'Скрыть';
  }

  if (spolerBtnMore) {
    spolerBtnMore.addEventListener('click', function() {
      if (spolerMore.classList.contains('hidden')) {
        visionSpoler();
      } else {
        hideSpoler();
      }
    });
  }
}

readMore();