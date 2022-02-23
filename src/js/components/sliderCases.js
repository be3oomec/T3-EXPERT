document.addEventListener('DOMContentLoaded', function () {
  const sliders = document.querySelectorAll('.tabs-slider');

  sliders.forEach(el => {
    const casesSlider = new Swiper(el, {
      // option
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,

      // pagination
      pagination: {
        el: el.querySelector('.tabs__pagination'),
        type: 'bullets',
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: el.parentNode.querySelectorAll('.tabs__arrow--next')[0],
        prevEl: el.parentNode.querySelectorAll('.tabs__arrow--prev')[0],
      },
    });
    // casesSlider.update();
    // casesSlider.navigation.update();
  });
});