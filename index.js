const hamburger = document.querySelector(".header__nav-sm");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("mobile-menu-animation");
});

closeBtn.addEventListener("click", () => {
    setTimeout(() => {
        mobileMenu.classList.remove("mobile-menu-animation");
    }, 0);
});

const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 150,
        scale: 0.8,
        depth: 50,
        modifier: 1,
        slideShadows: true,
    },
    speed: 400,
    // spaceBetween: 100,
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

AOS.init();

const rellax = new Rellax(".relax", {});
