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
// closeSettings
closeSettings.addEventListener("click", function () {
  settingsSidebar.classList.add("translate-x-full");
});
// fonts
let alexandriaFont = document.querySelector("#alexandriaFont");
let tajawalFont = document.querySelector("#tajawalFont");
let cairoFont = document.querySelector("#cairoFont");
// tajawalFont
tajawalFont.addEventListener("click", function () {
  document.body.classList.add("font-tajawal");
  document.body.classList.remove("font-alexandria");
  document.body.classList.remove("font-cairo");
  tajawalFont.classList.add("active");
  alexandriaFont.classList.remove("active");
  cairoFont.classList.remove("active");
});
// alexandriaFont
alexandriaFont.addEventListener("click", function () {
  document.body.classList.add("font-alexandria");
  document.body.classList.remove("font-tajawal");
  document.body.classList.remove("font-cairo");
  alexandriaFont.classList.add("active");
  tajawalFont.classList.remove("active");
  cairoFont.classList.remove("active");
});
// cairoFont
cairoFont.addEventListener("click", function () {
  document.body.classList.add("font-cairo");
  document.body.classList.remove("font-tajawal");
  document.body.classList.remove("font-alexandria");
  cairoFont.classList.add("active");
  alexandriaFont.classList.remove("active");
  tajawalFont.classList.remove("active");
});
// form
// customSelectWrapper
let customSelectWrapper = document.querySelector("#customSelectWrapper");
// chevronDown
let chevronDown = document.querySelector("#chevronDownOne");
// listbox
let listbox = document.querySelector('[role="listbox"]');
// open listbox
customSelectWrapper.addEventListener("click", function () {
  listbox.classList.toggle("hidden");
  chevronDown.classList.toggle("rotate-180");
});
// close listbox
document.addEventListener("click", function (e) {
  if (!customSelectWrapper.contains(e.target)) {
    listbox.classList.add("hidden");
    chevronDown.classList.remove("rotate-180");
  }
});
// options
let selectedText = customSelectWrapper.querySelector(".selected-text");
let options = listbox.querySelectorAll(".custom-option");
options.forEach((option) => {
  option.addEventListener("click", function () {
    let value = this.dataset.value;
    selectedText.textContent = value;
    listbox.classList.add("hidden");
    chevronDown.classList.remove("rotate-180");
  });
});
// // customSelectWrapperTwo
// let customSelectWrapperTwo = document.querySelector("#customSelectWrapperTwo");
// // chevronDown
// let chevronDownTwo = document.querySelector("#chevronDownTwo");
// // listboxTwo
// let listboxTwo = document.querySelector("#listboxTwo");
// // open listboxTwo
// customSelectWrapperTwo.addEventListener("click", function () {
//   listboxTwo.classList.toggle("hidden");
//   chevronDownTwo.classList.toggle("rotate-180");
// });
// // close listboxTwo
// document.addEventListener("click", function (e) {
//   if (!customSelectWrapperTwo.contains(e.target)) {
//     listboxTwo.classList.toggle("hidden");
//     chevronDownTwo.classList.remove("rotate-180");
//   }
// });
