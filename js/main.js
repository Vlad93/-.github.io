const swiper = new Swiper('.swiper-head .swiper-container', {  
  loop: true,
  speed: 300,  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
});

const swiperPopular = new Swiper('.popular-swiper .swiper-container', {  
  loop: true,
  speed: 300,  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 23
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }, 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
});
const swiperExamples = new Swiper('.examples-swiper .swiper-container', {  
  loop: true,
  speed: 300,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 23
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
});

// Sticky menu
window.onscroll = function() {
    checkMarginToTop();
};
var head = document.getElementById("head");
var sticky = head.offsetTop;
function checkMarginToTop() {
        if (window.pageYOffset > sticky+300) {
        head.classList.add("sticky");
    } else {
        head.classList.remove("sticky");
    }
}

// Mobile-menu
var mobileMenu = document.getElementById("mobile-menu");
var menu = document.getElementById("menu");
mobileMenu.onclick = function() {
    this.classList.toggle("active");
    menu.classList.toggle("show");
};
document.addEventListener('click', function(event) {  
  if (!mobileMenu.contains(event.target) && !menu.contains(event.target)){
    mobileMenu.classList.remove("active");
    menu.classList.remove("show");
  };
});