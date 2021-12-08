const mainSlider = new Swiper(".main-slider__swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

});

var swiper = new Swiper(".services-swiper", {
  loop: false,
  spaceBetween: 10,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 6,
      spaceBetween: 10
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

var swiper2 = new Swiper(".services-swiper2", {
  loop: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: swiper
  },
  
});

