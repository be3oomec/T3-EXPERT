"use strict";

// ================================== \\
// ============ ACCORDION =========== \\
// ================================== \\
var accordions = document.querySelectorAll('.megamenu__col');
accordions.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var self = e.currentTarget;
    var control = self.querySelector('.megamenu__heading');
    var content = self.querySelector('.megamenu__list');
    self.classList.toggle('open'); // если открыт аккордеон

    if (self.classList.contains('open')) {
      control.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      control.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);
      content.style.maxHeight = null;
    }
  });
});
"use strict";

// ================================== \\
// ========== MOBILE BURGER ========= \\
// ================================== \\
var burger = document.querySelector('.burger');
var menu = document.querySelector('.header__megamenu');

if (burger) {
  burger.addEventListener('click', function (e) {
    menu.classList.toggle('active');
    burger.classList.toggle('burger-active');
    document.body.classList.toggle('lock');
  });
}
"use strict";

// =============================== \\
// ========== FIXED MENU ========= \\
// =============================== \\
var header = document.querySelector('.header__bottom');
var hero = document.querySelector('.hero');
var headerHeight = header.offsetHeight;
var heroHeight = hero.offsetHeight;
window.addEventListener('scroll', function () {
  var scrollDistance = window.scrollY;

  if (scrollDistance >= heroHeight + headerHeight) {
    header.classList.add('header--fixed');
    hero.style.marginTop = "".concat(headerHeight, "px");
  } else {
    header.classList.remove('header--fixed');
    hero.style.marginTop = null;
  }
});
"use strict";

// =========================== \\
// ======== MASK PHONE ======= \\
// ======= npm i imask ======= \\
// =========================== \\
var element = document.getElementById('phone');
var element2 = document.getElementById('phone2');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask1 = IMask(element, maskOptions);
var mask2 = IMask(element2, maskOptions);
"use strict";

var swiperOne = new Swiper('.tabs-swiper-one', {
  // option
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: '.swiper-one-pagination',
    type: 'bullets'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-one-b-next',
    prevEl: '.swiper-one-b-prev'
  }
});
var swiperTwo = new Swiper('.tabs-swiper-two', {
  // option
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: '.swiper-two-pagination',
    type: 'bullets'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-two-b-next',
    prevEl: '.swiper-two-b-prev'
  }
});
var swiperThree = new Swiper('.tabs-swiper-three', {
  // option
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: '.swiper-three-pagination',
    type: 'bullets'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-three-b-next',
    prevEl: '.swiper-three-b-prev'
  }
});
var swiperFour = new Swiper('.tabs-swiper-four', {
  // option
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: '.swiper-four-pagination',
    type: 'bullets'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-four-b-next',
    prevEl: '.swiper-four-b-prev'
  }
});
var swiperFive = new Swiper('.tabs-swiper-five', {
  // option
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: '.swiper-five-pagination',
    type: 'bullets'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-five-b-next',
    prevEl: '.swiper-five-b-prev'
  }
});
"use strict";

var swiper = new Swiper('.reviews__slider', {
  // option
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    321: {
      slidesPerView: 2
    },
    600: {
      slidesPerView: 3
    },
    993: {
      slidesPerView: 4
    }
  }
});
"use strict";

// ================================ \\
// ======== SMOOTH SCROLL ========= \\
// == a add data-goto="selector" == \\
// ================================ \\
var menuLinks = document.querySelectorAll('.header__link[data-goto]');

if (menuLinks.length > 0) {
  var onMenuLinkClick = function onMenuLinkClick(e) {
    var menuLink = e.target;

    if (menuLink.dataset["goto"] && document.querySelector(menuLink.dataset["goto"])) {
      var gotoBlock = document.querySelector(menuLink.dataset["goto"]);
      var gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (burger.classList.contains('burger-active')) {
        menu.classList.remove('active');
        burger.classList.remove('burger-active');
        document.body.classList.remove('lock');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  };

  menuLinks.forEach(function (menuLinks) {
    menuLinks.addEventListener('click', onMenuLinkClick);
  });
}
"use strict";

var tabs1 = new GraphTabs('tab', {
  isChanged: function isChanged(tabs) {
    console.log(tabs);
  }
});
"use strict";
//# sourceMappingURL=main.js.map
