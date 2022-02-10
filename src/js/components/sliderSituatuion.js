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
  pagination: {
    el: '.services-situations__pagination',
    type: 'bullets',
    clickable: true,
  },

  // breakpoints: {
  //   767: {
  //     slidesPerView: 2,
  //   },
  // },
});