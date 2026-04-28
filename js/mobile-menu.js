const openBtn = document.querySelector("[data-menu-open]");
const closeBtn = document.querySelector("[data-menu-close]");
const menu = document.querySelector("[data-menu]");
const menuLinks = document.querySelectorAll(".mobile-menu-link");
const body = document.body;
const html = document.documentElement;

let scrollPosition = 0;

const openMenu = () => {
  scrollPosition = window.scrollY;

  menu.classList.add("is-open");
  body.classList.add("no-scroll");
  html.classList.add("no-scroll");

  body.style.position = "fixed";
  body.style.top = `-${scrollPosition}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
};

const closeMenu = () => {
  menu.classList.remove("is-open");
  body.classList.remove("no-scroll");
  html.classList.remove("no-scroll");

  body.style.position = "";
  body.style.top = "";
  body.style.left = "";
  body.style.right = "";
  body.style.width = "";

  window.scrollTo(0, scrollPosition);
};

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});