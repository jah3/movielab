var swiper = new Swiper(".mySwiper", {
    autoplay : {
      delay:5000,
      disableOnInteraction: false,
    },

    breakpoints: {
      600: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
    },
    });