if (document.querySelector('.cases__tabs')) {
  const casesSlider = new Swiper('.tabs-slider', {
    // option
    slidesPerView: 1,
    grabCursor: true,
    loop: true,

    // pagination
    pagination: {
      el: '.tabs__pagination',
      type: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.tabs__arrow--next',
      prevEl: '.tabs__arrow--prev',
    },

    observer: true,
		observeParents: true,
    observeSlideChildren: true,
  });
}