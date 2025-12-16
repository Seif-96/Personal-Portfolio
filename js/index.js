let html = document.documentElement;
let toggleBtn = document.querySelector("#theme-toggle-button");

toggleBtn.addEventListener("click", function () {
  html.classList.toggle("dark");
});

let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
let navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
