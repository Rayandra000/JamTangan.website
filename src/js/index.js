/* 
NOTES:
to make this asynchronous test work, you need to change parameters in the HTML file. 
take a look at click listener on the button, you will see "babypack".
change it to "starterpack". 
done!
*/

console.log("javascript ready...");

//! Responsive Navigation BAR 🎉
const showMobileNav = () => {
  var navbar = document.getElementById("navbar");
  navbar.className === "navibar" ? (navbar.className += " responsive") : (navbar.className = "navibar");
};

//! Notification Bell
const notification = (pack) => {
  alert("notification checking..., please click OK to continue");
  return new Promise((success, failed) => {
    if (pack != "starterpack") failed("your pack is not starterpack, please read the notes on js file");
    setTimeout(() => {
      success("Notification Success! 👏");
    }, 1200);
  });
};

//! asynchronous trigger for notification bell
async function showPopup(params) {
  try {
    const popup = await notification(params);
    alert(popup);
  } catch (err) {
    alert(err);
  }
}

const navbarNav = document.querySelector(".navbar-nav");
const faColor = document.querySelector("#fa-color");
document.querySelector(".fa-color").onclick = () => {
  navbarNav.classList.toggle("active");
  faColor.classList.add("fa-color1");
};
const header = document.getElementById("header");
document.querySelector(".header").onclick = () => {
  header.classList.add("scrol-navbar");
};

// swiper
const swiperWatches = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      rotate: [0, 0, 15],
      opacity: 0,
    },
    next: {
      translate: [100, 0, -500],
      rotate: [0, 0, -15],
      opacity: 0,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// testi swiper
let testimonialSwiper = new Swiper(".testimonial-swiper", {
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// new
var newSwiper = new Swiper(".newSwiper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// scroll header bg
const scrollHeader = () => {
  const faColor = document.getElementById("fa-color");
  const header = document.getElementById("header");

  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add("scrol-navbar") + faColor.classList.add("fa-color1") : header.classList.remove("scrol-navbar") + faColor.classList.remove("fa-color1");
};
window.addEventListener("scroll", scrollHeader);
