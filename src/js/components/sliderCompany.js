const companySlider = new Swiper('.company__slider', {
  // option
  slidesPerView: 2,
  grabCursor: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.company__btn--prev',
    prevEl: '.company__btn--next',
  },

  // pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  // },

  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //   },
  //   321: {
  //     slidesPerView: 2,
  //   },
  // },
});