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
  settingsToggle.classList.add("hidden");
});

// close settingsToggle
let closeSettings = document.querySelector("#close-settings");
// closeSettings
closeSettings.addEventListener("click", function () {
  settingsSidebar.classList.add("translate-x-full");
  settingsToggle.classList.remove("hidden");
});
// fonts
let alexandriaFont = document.querySelector("#alexandriaFont");
let tajawalFont = document.querySelector("#tajawalFont");
let cairoFont = document.querySelector("#cairoFont");
// tajawalFont
tajawalFont.addEventListener("click", tajawal);
// tajawal
function tajawal() {
  document.body.classList.add("font-tajawal");
  document.body.classList.remove("font-alexandria");
  document.body.classList.remove("font-cairo");
  tajawalFont.classList.add("active");
  alexandriaFont.classList.remove("active");
  cairoFont.classList.remove("active");
}
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
// theme-colors-grid
let themeColors = document.querySelectorAll(".theme-colors");
let themeColorsArray = Array.from(themeColors);
// theme style
for (let i = 0; i < themeColorsArray.length; i++) {
  themeColorsArray[i].style.cssText = `
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  cursor: pointer;
  outline: 0.125rem solid;
  display: flex;
  justify-content: center;
  align-items: center;`;
}
// call all themes
let themeOne = document.querySelector("#themeOne");
let themeTwo = document.querySelector("#themeTwo");
let themeThree = document.querySelector("#themeThree");
let themeFour = document.querySelector("#themeFour");
let themeFive = document.querySelector("#themeFive");
let themeSix = document.querySelector("#themeSix");
// theme colors
themeOne.style.background = "linear-gradient(135deg, #6366f1, #8b5cf6)";
themeTwo.style.background = "linear-gradient(135deg, #ec4899, #f97316)";
themeThree.style.background = "linear-gradient(135deg, #10b981, #059669)";
themeFour.style.background = "linear-gradient(135deg, #3b82f6, #06b6d4)";
themeFive.style.background = "linear-gradient(135deg, #ef4444, #f43f5e)";
themeSix.style.background = "linear-gradient(135deg, #f59e0b, #ea580c)";
//themeOne
themeOne.addEventListener("click", defTheme);
function defTheme() {
  document.documentElement.style.setProperty("--color-primary", "#6366f1");
  document.documentElement.style.setProperty("--color-secondary", "#8b5cf6");
  document.documentElement.style.setProperty("--color-accent", "#a855f7");
}
//themeTwo
themeTwo.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-primary", "#ec4899");
  document.documentElement.style.setProperty("--color-secondary", "#f97316");
  document.documentElement.style.setProperty("--color-accent", "#fb923c");
});
//themeThree
themeThree.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-primary", "#10b981");
  document.documentElement.style.setProperty("--color-secondary", "#059669");
  document.documentElement.style.setProperty("--color-accent", "#34d399");
});
//themeFour
themeFour.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-primary", "#3b82f6");
  document.documentElement.style.setProperty("--color-secondary", "#06b6d4");
  document.documentElement.style.setProperty("--color-accent", "#22d3ee");
});
//themeFive
themeFive.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-primary", "#ef4444");
  document.documentElement.style.setProperty("--color-secondary", "#f43f5e");
  document.documentElement.style.setProperty("--color-accent", "#fb7185");
});
//themeSix
themeSix.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-primary", "#f59e0b");
  document.documentElement.style.setProperty("--color-secondary", "#ea580c");
  document.documentElement.style.setProperty("--color-accent", "#fbbf24");
});
// resetSettings
let resetSettings = document.querySelector("#reset-settings");
resetSettings.addEventListener("click", function () {
  tajawal();
  defTheme();
});

// // form
// // customSelectWrapper
// let customSelectWrapper = document.querySelector("#customSelectWrapper");
// // chevronDown
// let chevronDown = document.querySelector("#chevronDownOne");
// // listbox
// let listbox = document.querySelector('[role="listbox"]');
// // open listbox
// customSelectWrapper.addEventListener("click", function () {
//   listbox.classList.toggle("hidden");
//   chevronDown.classList.toggle("rotate-180");
// });
// // close listbox
// document.addEventListener("click", function (e) {
//   if (!customSelectWrapper.contains(e.target)) {
//     listbox.classList.add("hidden");
//     chevronDown.classList.remove("rotate-180");
//   }
// });
// // options
// // let selectedText = customSelectWrapper.querySelector(".selected-text");
// // let options = listbox.querySelectorAll(".custom-option");
// // options.forEach((option) => {
// //   option.addEventListener("click", function () {
// //     let value = this.dataset.value;
// //     selectedText.textContent = value;
// //     listbox.classList.add("hidden");
// //     chevronDown.classList.remove("rotate-180");
// //   });
// // });
// // // customSelectWrapperTwo
// // let customSelectWrapperTwo = document.querySelector("#customSelectWrapperTwo");
// // // chevronDown
// // let chevronDownTwo = document.querySelector("#chevronDownTwo");
// // // listboxTwo
// // let listboxTwo = document.querySelector("#listboxTwo");
// // // open listboxTwo
// // customSelectWrapperTwo.addEventListener("click", function () {
// //   listboxTwo.classList.toggle("hidden");
// //   chevronDownTwo.classList.toggle("rotate-180");
// // });
// // // close listboxTwo
// // document.addEventListener("click", function (e) {
// //   if (!customSelectWrapperTwo.contains(e.target)) {
// //     listboxTwo.classList.toggle("hidden");
// //     chevronDownTwo.classList.remove("rotate-180");
// //   }
// // });
