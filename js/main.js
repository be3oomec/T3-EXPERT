"use strict";

// ---------------------- MOBILE BURGER ---------------------
if (document.querySelector('.burger')) {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.header__megamenu');
  burger.addEventListener('click', function (e) {
    menu.classList.add('active');
    document.body.classList.add('lock');
  });

  if (document.querySelector(".button-close")) {
    var btnClose = document.querySelector(".button-close");
    btnClose.addEventListener("click", function () {
      menu.classList.remove("active");
      document.body.classList.remove("lock");
    });
  }
} // ---------------------- MOBILE BURGER ---------------------
"use strict";

// =============================== \\
// ========== FIXED MENU ========= \\
// =============================== \\
if (document.querySelector("#hero")) {
  var header = document.querySelector(".header__bottom");
  var hero = document.querySelector("#hero");
  var headerHeight = header === null || header === void 0 ? void 0 : header.offsetHeight;
  var heroHeight = hero === null || hero === void 0 ? void 0 : hero.offsetHeight;
  window.addEventListener("scroll", function () {
    var scrollDistance = window.scrollY;

    if (scrollDistance >= heroHeight + headerHeight) {
      header.classList.add("header--fixed");
      hero.style.marginTop = "".concat(headerHeight, "px");
    } else {
      header.classList.remove("header--fixed");
      hero.style.marginTop = null;
    }
  });
}
"use strict";

// =========================== \\
// ======== MASK PHONE ======= \\
// ======= npm i imask ======= \\
// =========================== \\
if (document.querySelector('[type="tel"]')) {
  document.querySelectorAll('[type="tel"]').forEach(function (el) {
    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    var mask = IMask(el, maskOptions);
  });
}
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal(options) {
    _classCallCheck(this, Modal);

    var defaultOptions = {
      isOpen: function isOpen() {},
      isClose: function isClose() {}
    };
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.modal');
    this.speed = false;
    this.animation = false;
    this.isOpen = false;
    this.modalContainer = false;
    this.previousActiveElement = false;
    this.fixBlocks = document.querySelectorAll('.fix-block');
    this.focusElements = ['a[href]', 'input', 'button', 'select', 'textarea', '[tabindex]'];
    this.events();
  }

  _createClass(Modal, [{
    key: "events",
    value: function events() {
      if (this.modal) {
        document.addEventListener('click', function (e) {
          var clickedElement = e.target.closest('[data-path]');

          if (clickedElement) {
            var target = clickedElement.dataset.path;
            var animation = clickedElement.dataset.animation;
            var speed = clickedElement.dataset.speed;
            this.animation = animation ? animation : 'fade';
            this.speed = speed ? parseInt(speed) : 300;
            this.modalContainer = document.querySelector("[data-target=\"".concat(target, "\"]"));
            this.open();
            return;
          }

          if (e.target.closest('.modal__btn-close')) {
            this.close();
            return;
          }
        }.bind(this));
        window.addEventListener('keydown', function (e) {
          if (e.keyCode == 27) {
            if (this.isOpen) {
              this.close();
            }
          }

          if (e.keyCode == 9 && this.isOpen) {
            this.focusCatch(e);
            return;
          }
        }.bind(this));
        this.modal.addEventListener('click', function (e) {
          if (!e.target.classList.contains('modal__container') && !e.target.closest('.modal__container') && this.isOpen) {
            this.close();
          }
        }.bind(this));
      }
    }
  }, {
    key: "open",
    value: function open() {
      var _this = this;

      this.previousActiveElement = document.activeElement;
      this.modal.style.setProperty('--transition-time', "".concat(this.speed / 1000, "s"));
      this.modal.classList.add('is-open');
      this.disableScroll();
      this.modalContainer.classList.add('modal-open');
      this.modalContainer.classList.add(this.animation);
      setTimeout(function () {
        _this.options.isOpen(_this);

        _this.modalContainer.classList.add('animate-open');

        _this.isOpen = true;

        _this.focusTrap();
      }, this.speed);
    }
  }, {
    key: "close",
    value: function close() {
      if (this.modalContainer) {
        this.modalContainer.classList.remove('animate-open');
        this.modalContainer.classList.remove(this.animation);
        this.modal.classList.remove('is-open');
        this.modalContainer.classList.remove('modal-open');
        this.enableScroll();
        this.options.isClose(this);
        this.isOpen = false;
        this.focusTrap();
      }
    }
  }, {
    key: "focusCatch",
    value: function focusCatch(e) {
      var focusable = this.modalContainer.querySelectorAll(this.focusElements);
      var focusArray = Array.prototype.slice.call(focusable);
      var focusedIndex = focusArray.indexOf(document.activeElement);

      if (e.shiftKey && focusedIndex === 0) {
        focusArray[focusArray.length - 1].focus();
        e.preventDefault();
      }

      if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
        focusArray[0].focus();
        e.preventDefault();
      }
    }
  }, {
    key: "focusTrap",
    value: function focusTrap() {
      var focusable = this.modalContainer.querySelectorAll(this.focusElements);

      if (this.isOpen) {
        focusable[0].focus();
      } else {
        this.previousActiveElement.focus();
      }
    }
  }, {
    key: "disableScroll",
    value: function disableScroll() {
      var pagePosition = window.scrollY;
      this.lockPadding();
      document.body.classList.add('lock');
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
    }
  }, {
    key: "enableScroll",
    value: function enableScroll() {
      var pagePosition = parseInt(document.body.dataset.position, 10);
      this.unlockPadding();
      document.body.style.top = 'auto';
      document.body.classList.remove('lock');
      window.scroll({
        top: pagePosition,
        left: 0
      });
      document.body.removeAttribute('data-position');
    }
  }, {
    key: "lockPadding",
    value: function lockPadding() {
      var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      this.fixBlocks.forEach(function (el) {
        el.style.paddingRight = paddingOffset;
      });
      document.body.style.paddingRight = paddingOffset;
    }
  }, {
    key: "unlockPadding",
    value: function unlockPadding() {
      this.fixBlocks.forEach(function (el) {
        el.style.paddingRight = '0px';
      });
      document.body.style.paddingRight = '0px';
    }
  }]);

  return Modal;
}();

var modal = new Modal({
  isOpen: function isOpen(modal) {
    console.log(modal);
    console.log('opened');
  },
  isClose: function isClose() {
    console.log('closed');
  }
});
// const body = document.querySelector('body'),
//   popupLinks = document.querySelectorAll('.popup-link'),
//   lockPadding = document.querySelectorAll('.lock-padding'),
//   popupCloseIcon = document.querySelectorAll('.close-popup');
// let unlock = true;
// const timeout = 300;
// if (popupLinks.length > 0) {
//   for (let index = 0; index < popupLinks.length; index++) {
//     const popupLink = popupLinks[index];
//     popupLink.addEventListener('click', function (e) {
//       const popupName = popupLink.getAttribute('href').replace('#', ''),
//         curentPopup = document.getElementById(popupName);
//       popupOpen(curentPopup);
//       e.preventDefault();
//     });
//   }
// }
// if (popupCloseIcon.length > 0) {
//   for (let index = 0; index < popupCloseIcon.length; index++) {
//     const el = popupCloseIcon[index];
//     el.addEventListener('click', function (e) {
//       popupClose(el.closest('.popup'));
//       e.preventDefault();
//     });
//   }
// }
// function popupOpen(curentPopup) {
//   if (curentPopup && unlock) {
//     const popupActive = document.querySelector('.popup.open');
//     if (popupActive) {
//       popupClose(popupActive, false);
//     } else {
//       bodyLock();
//     }
//     curentPopup.classList.add('open');
//     curentPopup.addEventListener('click', function (e) {
//       if (!e.target.closest('.popup__content')) {
//         popupClose(e.target.closest('.popup'));
//       }
//     });
//   }
// }
// function popupClose(popupActive, doUnlock = true) {
//   if (unlock) {
//     popupActive.classList.remove('open');
//     if (doUnlock) {
//       bodyUnlock();
//     }
//   }
// }
// function bodyLock() {
//   const lockPaddingValue = window.innerWidth - document.querySelector('.page').offsetWidth + 'px';
//   if (lockPadding.length > 0) {
//     for (let index = 0; index < lockPadding.length; index++) {
//       const el = lockPadding[index];
//       el.style.paddingRight = lockPaddingValue;
//     }
//   }
//   body.style.paddingRight = lockPaddingValue;
//   body.classList.add('lock');
//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeout);
// }
// function bodyUnlock() {
//   setTimeout(function () {
//     if (lockPadding.length > 0) {
//       for (let index = 0; index < lockPadding.length; index++) {
//         const el = lockPadding[index];
//         el.style.paddingRight = '0px';
//       }
//     }
//     body.style.paddingRight = '0px';
//     body.classList.remove('lock');
//   }, timeout);
//   unlock = false;
//   setTimeout(() => {
//     unlock = true;
//   }, timeout);
// }
// document.addEventListener('keydown', function (e) {
//   if (e.key === 27) {
//     const popupActive = document.querySelector('.popup.open');
//     popupClose(popupActive);
//   }
// });
"use strict";
"use strict";

if (document.querySelector('#selCases')) {
  // Находим селект и контент табов
  var select = document.getElementById("selCases");
  var tabsContent = document.querySelectorAll(".tabs__content > .tabs__panel");

  if (select) {
    // Вижн информации при переключении опшинов в селекте
    var toggleHidden = function toggleHidden() {
      // Пробегаемся по псевдомассиву табов с контентом
      tabsContent.forEach(function (div) {
        // Если таб имеет класс совпадающий с value в селекте => вкл/выкл вижн
        if (div.classList.contains("tabs__".concat(select.value))) {
          div.classList.remove("hidden");
          div.classList.add("tabs__panel--active");
        } else {
          div.classList.add("hidden");
          div.classList.remove("tabs__panel--active");
        }
      });
    }; // Следим за изменением селекта


    select.addEventListener("change", toggleHidden);
    toggleHidden();
  }
}
"use strict";

if (document.querySelector('.seo__text')) {
  var button = document.querySelector(".seo__btn");
  var text = document.querySelector('.seo__text');

  if (button) {
    button.addEventListener('click', function (e) {
      if (text.classList.contains('open')) {
        text.classList.remove('open');
        button.innerHTML = 'Показать полностью';
      } else {
        text.classList.add('open');
        button.innerHTML = 'Скрыть';
      }
    });
  }
}

;
"use strict";

var sliders = document.querySelectorAll('.tabs-slider');
sliders.forEach(function (el) {
  var casesSlider = new Swiper(el, {
    // option
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    // pagination
    pagination: {
      el: el.querySelector('.tabs__pagination'),
      type: 'bullets',
      clickable: true
    },
    // Navigation arrows
    navigation: {
      nextEl: el.parentNode.querySelectorAll('.tabs__arrow--next')[0],
      prevEl: el.parentNode.querySelectorAll('.tabs__arrow--prev')[0]
    }
  });
});
"use strict";

var companySlider = new Swiper('.company__slider', {
  // option
  slidesPerView: 2,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.company__btn--prev',
    prevEl: '.company__btn--next'
  },
  // pagination
  pagination: {
    el: '.company__pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    321: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    769: {
      slidesPerView: 2
    }
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
  // pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    321: {
      slidesPerView: 1.5
    },
    600: {
      slidesPerView: 2.5
    },
    993: {
      slidesPerView: 4
    }
  }
});
"use strict";

var situationSlider = new Swiper('.subservices-situations__slider', {
  // option
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.subservices-situations__next',
    prevEl: '.subservices-situations__prev'
  },
  // pagination
  pagination: {
    el: '.subservices-situations__pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }
});
"use strict";

if (document.querySelector('.tabs')) {
  var tabs1 = new GraphTabs('tab', {
    isChanged: function isChanged(tabs) {
      console.log(tabs);
    }
  });
}
"use strict";

if (document.getElementById("selCases")) {
  NiceSelect.bind(document.getElementById("selCases"));
}

baguetteBox.run('.gallery');
//# sourceMappingURL=main.js.map
