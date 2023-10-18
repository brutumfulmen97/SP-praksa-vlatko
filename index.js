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
    speed: 400,
    spaceBetween: 100,
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

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
