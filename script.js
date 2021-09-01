const bodyEl = document.querySelector("body");
const menuBtn = document.querySelector(".header_menu");
const navEl = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    bodyEl.classList.toggle("menu-opened");
    menuBtn.classList.toggle("closed");
    navEl.classList.toggle("closed");
});