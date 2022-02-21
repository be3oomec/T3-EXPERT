const situationSlider = new Swiper('.services-situations__slider', {
  // option
  slidesPerView: 3,
  spaceBetween: 20,
  // grabCursor: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.services-situations__btn-next',
    prevEl: '.services-situations__btn-prev',
  },

  // pagination
  pagination: {
    el: '.services-situations__pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});