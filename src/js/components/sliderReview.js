const swiper = new Swiper('.reviews__slider', {
  // option
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },


  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    321: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    993: {
      slidesPerView: 4,
    },
  },
});