if (document.querySelector('.tabs-swiper-one')) {
  const swiperOne = new Swiper('.tabs-swiper-one', {
    // option
    slidesPerView: 1,
    grabCursor: true,
    loop: true,

    pagination: {
      el: '.swiper-one-pagination',
      type: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-one-b-next',
      prevEl: '.swiper-one-b-prev',
    },
  });
}

if (document.querySelector('.tabs-swiper-two')) {
  const swiperTwo = new Swiper('.tabs-swiper-two', {
    // option
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: '.swiper-two-pagination',
      type: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-two-b-next',
      prevEl: '.swiper-two-b-prev',
    },

  });
}

if (document.querySelector('.tabs-swiper-three')) {
  const swiperThree = new Swiper('.tabs-swiper-three', {
    // option
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: '.swiper-three-pagination',
      type: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-three-b-next',
      prevEl: '.swiper-three-b-prev',
    },

  });
}

if (document.querySelector('.tabs-swiper-four')) {
  const swiperFour = new Swiper('.tabs-swiper-four', {
    // option
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: '.swiper-four-pagination',
      type: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-four-b-next',
      prevEl: '.swiper-four-b-prev',
    },

  });
}

if (document.querySelector('.tabs-swiper-five')) {
  const swiperFive = new Swiper('.tabs-swiper-five', {
    // option
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: '.swiper-five-pagination',
      type: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-five-b-next',
      prevEl: '.swiper-five-b-prev',
    },

  });
}