
var swiper1 = new Swiper(".swiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    
    pagination: { 
        el: ".swiper-pagination",
        type: "custom", 
        clickable: true, 
      },


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });