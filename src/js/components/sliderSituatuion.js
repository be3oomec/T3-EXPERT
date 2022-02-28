const situationSlider = new Swiper('.subservices-situations__slider', {
  // option
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.subservices-situations__next',
    prevEl: '.subservices-situations__prev',
  },

  // pagination
  pagination: {
    el: '.subservices-situations__pagination',
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