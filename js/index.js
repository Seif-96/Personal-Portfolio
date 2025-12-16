// toggleBtn bage mode
let html = document.documentElement;
let toggleBtn = document.querySelector("#theme-toggle-button");

toggleBtn.addEventListener("click", function () {
  html.classList.toggle("dark");
});
// mobileMenuBtn
let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
let navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
// nav-links active
window.addEventListener("scroll", function () {
  // nav links
  let links = document.querySelectorAll(".nav-links a");
  links.forEach((link) => {
    let section = document.querySelector(link.getAttribute("href"));
    if (
      window.scrollY >= section.offsetTop - 100 &&
      window.scrollY < section.offsetTop + section.offsetHeight
    ) {
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});
// btn scroll-to-top
let btnScrollToTop = document.querySelector("#scroll-to-top");
// //  show btn
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    btnScrollToTop.classList.remove("opacity-0");
    btnScrollToTop.classList.remove("invisible");
  } else {
    btnScrollToTop.classList.add("opacity-0");
    btnScrollToTop.classList.add("invisible");
  }
});
// ScrollToTop
btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// settings-toggle
let settingsToggle = document.querySelector("#settings-toggle");
let settingsSidebar = document.querySelector("#settings-sidebar");
// open settings Toggle
settingsToggle.addEventListener("click", function () {
  settingsSidebar.classList.remove("translate-x-full");
  // settingsToggle.classList.add("translate-x-[-100%]");
});
// close settingsToggle
let closeSettings = document.querySelector("#close-settings");
closeSettings.addEventListener("click", function () {
  settingsSidebar.classList.add("translate-x-full");
});