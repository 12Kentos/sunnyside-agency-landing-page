"use strict";

const headerNavMobileEl = document.querySelector(".header-nav__mobile");
const headerNavMenuEl = document.querySelector(".header-nav__menu");

console.log(headerNavMobileEl);
console.log(headerNavMenuEl);

headerNavMobileEl.addEventListener("click", () => {
  headerNavMenuEl.classList.toggle("active");
  headerNavMobileEl.classList.toggle("active-mobile");
});
