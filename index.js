const hamburger = document.querySelector(".header__nav-sm");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const jre = document.querySelector(".jre");
const logoDivs = document.querySelectorAll(".logo-div");

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
    slideShadows: true,
    themeColor: "#ffffff",
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 50,
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
    direction: "horizontal",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

AOS.init();

const paralax = document.getElementsByClassName("paralax");
new simpleParallax(paralax, {
    maxTransition: 100,
    orientation: "down",
    scale: 1.8,
    overflow: true,
});

let darkMode = true;

darkModeToggle.addEventListener("change", () => {
    if (darkMode) {
        document.body.classList.add("light-mode");
        jre.attributes.src.value = "./assets/jre2.svg";
        logoDivs.forEach((img) => {
            img.attributes.src.value = "./assets/logo-div2.svg";
        });

        darkMode = false;
    } else {
        document.body.classList.remove("light-mode");
        jre.attributes.src.value = "./assets/jre.svg";
        logoDivs.forEach((img) => {
            img.attributes.src.value = "./assets/logo-div.svg";
        });
        darkMode = true;
    }
});

let debounceTimer;
const debounce = (callback, time) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(callback, time);
};

function showPopup() {
    setTimeout(() => {
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
    }, 3000);
    window.removeEventListener("scroll", debouncedShowPopup);
}

function debouncedShowPopup() {
    debounce(showPopup, 500);
}

// window.addEventListener("scroll", debouncedShowPopup);

function closePopup() {
    document.body.style.overflow = "auto";
    document.getElementById("overlay").style.display = "none";
}

function claimDiscount() {
    closePopup();
}

document.getElementById("close-button").addEventListener("click", closePopup);
