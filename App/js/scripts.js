const hamburger = document.querySelector(".hero__menu img");
const mobileMenu = document.querySelector(".mobile__menu");

const btnClickHandler = () => {
  console.log("working...");

  if (hamburger.classList.contains("change")) {
    hamburger.classList.toggle("change");
    hamburger.setAttribute("src", "./images/icon-hamburger.svg");
    mobileMenu.classList.remove("mobile-active");
  } else {
    hamburger.classList.toggle("change");
    hamburger.setAttribute("src", "./images/icon-close.svg");
    hamburger.setAttribute("alt", "close button");
    mobileMenu.classList.add("mobile-active");
  }
};

hamburger.addEventListener("click", () => btnClickHandler());
