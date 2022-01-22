// =========================== \\
// ========== SWIPER ========= \\
// ======= npm i swiper ====== \\
// =========================== \\

const swiper = new Swiper('.accesories__slider', {
  // option
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  mousewheel: true,
  grabCursor: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Pagination, dots
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});