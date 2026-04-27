const menu = document.querySelector("[data-menu]");
const openBtn = document.querySelector(".menu-open-btn");
const closeBtn = document.querySelector("[data-menu-close]");
const menuLinks = document.querySelectorAll(".mobile-menu-link");

openBtn.addEventListener("click", () => {
  menu.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("is-open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
  });
});