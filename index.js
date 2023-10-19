const hamburger = document.querySelector(".header__nav-sm");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
const logo = document.querySelector(".header__logo");
const jre = document.querySelectorAll(".jre");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("mobile-menu-animation");
});

closeBtn.addEventListener("click", () => {
    setTimeout(() => {
        mobileMenu.classList.remove("mobile-menu-animation");
    }, 0);
});

const swiper2 = new Swiper(".swiper", {
    effect: "coverflow",
    themeColor: "#ffffff",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    breakpoints: {
        640: {
            slidesPerView: "auto",
        },
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 150,
        scale: 0.8,
        depth: 50,
        modifier: 1,
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

let darkMode = true;

logo.addEventListener("click", () => {
    if (darkMode) {
        document.body.classList.add("light-mode");
        jre.forEach((j) => {
            j.style.fill = "#000";
        });

        darkMode = false;
    } else {
        document.body.classList.remove("light-mode");
        jre.forEach((j) => {
            j.style.fill = "#fff";
        });
        darkMode = true;
    }
});

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showPopup() {
    await wait(3000);
    document.body.style.overflow = "hidden";
    const popup = document.getElementById("overlay");
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const left = (screenWidth - popupWidth) / 2;
    const top = (screenHeight - popupHeight) / 2;
    popup.style.left = left + "px";
    popup.style.top = top + "px";
    popup.style.display = "block";
    window.removeEventListener("scroll", showPopup);
}

window.addEventListener("scroll", showPopup);

function closePopup() {
    document.body.style.overflow = "auto";
    document.getElementById("overlay").style.display = "none";
}

function claimDiscount() {
    closePopup();
}

document.getElementById("close-button").addEventListener("click", closePopup);
