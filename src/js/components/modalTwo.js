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