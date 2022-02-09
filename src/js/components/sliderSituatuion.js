const situationSlider = new Swiper('.services-situations__slider', {
  // option
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.services-situations__btn-next',
    prevEl: '.services-situations__btn-prev',
  },

  // pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  // },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    321: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    993: {
      slidesPerView: 3,
    },
  },
});