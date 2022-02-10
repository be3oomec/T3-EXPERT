const companySlider = new Swiper('.company__slider', {
  // option
  slidesPerView: 2,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.company__btn--prev',
    prevEl: '.company__btn--next',
  },

  // pagination
  pagination: {
    el: '.company__pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    321: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 2,
    },
  },
});