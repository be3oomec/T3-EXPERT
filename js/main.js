"use strict";var accordions=document.querySelectorAll(".megamenu__col");accordions.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget,i=t.querySelector(".megamenu__heading"),r=t.querySelector(".megamenu__list");t.classList.toggle("open"),t.classList.contains("open")?(i.setAttribute("aria-expanded",!0),r.setAttribute("aria-hidden",!1),r.style.maxHeight=r.scrollHeight+"px"):(i.setAttribute("aria-expanded",!1),r.setAttribute("aria-hidden",!0),r.style.maxHeight=null)}))}));var burger=document.querySelector(".burger"),menu=document.querySelector(".header__megamenu");burger&&burger.addEventListener("click",(function(e){menu.classList.add("active"),document.body.classList.add("lock")}));var header=document.querySelector(".header__bottom"),hero=document.querySelector("#hero"),headerHeight=header.offsetHeight,heroHeight=hero.offsetHeight;window.addEventListener("scroll",(function(){window.scrollY>=heroHeight+headerHeight?(header.classList.add("header--fixed"),hero.style.marginTop="".concat(headerHeight,"px")):(header.classList.remove("header--fixed"),hero.style.marginTop=null)}));var select=document.getElementById("selCases"),tabsContent=document.querySelectorAll(".tabs__content > .tabs__panel");if(select){var toggleHidden=function(){tabsContent.forEach((function(e){e.classList.contains("tabs__".concat(select.value))?(e.classList.remove("hidden"),e.classList.add("tabs__panel--active")):(e.classList.add("hidden"),e.classList.remove("tabs__panel--active"))}))};select.addEventListener("change",toggleHidden),toggleHidden()}var swiperOne=new Swiper(".tabs-swiper-one",{slidesPerView:1,grabCursor:!0,pagination:{el:".swiper-one-pagination",type:"bullets"},navigation:{nextEl:".swiper-one-b-next",prevEl:".swiper-one-b-prev"}}),swiperTwo=new Swiper(".tabs-swiper-two",{slidesPerView:1,grabCursor:!0,pagination:{el:".swiper-two-pagination",type:"bullets"},navigation:{nextEl:".swiper-two-b-next",prevEl:".swiper-two-b-prev"}}),swiperThree=new Swiper(".tabs-swiper-three",{slidesPerView:1,grabCursor:!0,pagination:{el:".swiper-three-pagination",type:"bullets"},navigation:{nextEl:".swiper-three-b-next",prevEl:".swiper-three-b-prev"}}),swiperFour=new Swiper(".tabs-swiper-four",{slidesPerView:1,grabCursor:!0,pagination:{el:".swiper-four-pagination",type:"bullets"},navigation:{nextEl:".swiper-four-b-next",prevEl:".swiper-four-b-prev"}}),swiperFive=new Swiper(".tabs-swiper-five",{slidesPerView:1,grabCursor:!0,pagination:{el:".swiper-five-pagination",type:"bullets"},navigation:{nextEl:".swiper-five-b-next",prevEl:".swiper-five-b-prev"}}),companySlider=new Swiper(".company__slider",{slidesPerView:2,grabCursor:!0,loop:!0,navigation:{nextEl:".company__btn--prev",prevEl:".company__btn--next"}}),swiper=new Swiper(".reviews__slider",{slidesPerView:4,spaceBetween:20,grabCursor:!0,loop:!0,navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},pagination:{el:".swiper-pagination",type:"bullets"},breakpoints:{0:{slidesPerView:1},321:{slidesPerView:2},600:{slidesPerView:3},993:{slidesPerView:4}}}),situationSlider=new Swiper(".services-situations__slider",{slidesPerView:3,spaceBetween:20,grabCursor:!0,loop:!0,navigation:{nextEl:".services-situations__btn-next",prevEl:".services-situations__btn-prev"}}),menuLinks=document.querySelectorAll("a[data-goto]");if(menuLinks.length>0){var onMenuLinkClick=function(e){var t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){var i=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight;burger.classList.contains("burger-active")&&(menu.classList.remove("active"),burger.classList.remove("burger-active"),document.body.classList.remove("lock")),window.scrollTo({top:i,behavior:"smooth"}),e.preventDefault()}};menuLinks.forEach((function(e){e.addEventListener("click",onMenuLinkClick)}))}var tabs1=new GraphTabs("tab",{isChanged:function(e){console.log(e)}}),btnClose=document.querySelector(".button-close"),megaMenu=document.querySelector(".header__megamenu");btnClose&&btnClose.addEventListener("click",(function(){menu.classList.remove("active"),document.body.classList.remove("lock")})),NiceSelect.bind(document.getElementById("selCases"));