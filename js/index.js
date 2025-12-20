// toggleBtn bage mode
let html = document.documentElement;
let toggleBtn = document.querySelector("#theme-toggle-button");
toggleBtn.addEventListener("click", function () {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    localStorage.setItem("themeMode", "dark");
  } else {
    localStorage.setItem("themeMode", "light");
  }
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
// localStorage

// settings-toggle
let settingsToggle = document.querySelector("#settings-toggle");
let settingsSidebar = document.querySelector("#settings-sidebar");
// open settings Toggle
settingsToggle.addEventListener("click", function () {
  settingsSidebar.classList.remove("translate-x-full");
  settingsToggle.style.transform = "translateX(-20rem)";
});
// close settingsToggle
let closeSettings = document.querySelector("#close-settings");
// closeSettings
closeSettings.addEventListener("click", function () {
  settingsSidebar.classList.add("translate-x-full");
  settingsToggle.style.transform = "translateX(0rem)";
});
// move btn of settings
document.addEventListener("click", (e) => {
  if (
    !settingsSidebar.contains(e.target) &&
    !settingsToggle.contains(e.target)
  ) {
    settingsSidebar.classList.add("translate-x-full");
    settingsToggle.style.transform = "translateX(0rem)";
  }
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
  localStorage.setItem("selectedFont", "tajawal"); // save font
}
// alexandriaFont
alexandriaFont.addEventListener("click", function () {
  document.body.classList.add("font-alexandria");
  document.body.classList.remove("font-tajawal");
  document.body.classList.remove("font-cairo");
  alexandriaFont.classList.add("active");
  tajawalFont.classList.remove("active");
  cairoFont.classList.remove("active");
  localStorage.setItem("selectedFont", "alexandria");
});
// cairoFont
cairoFont.addEventListener("click", function () {
  document.body.classList.add("font-cairo");
  document.body.classList.remove("font-tajawal");
  document.body.classList.remove("font-alexandria");
  cairoFont.classList.add("active");
  alexandriaFont.classList.remove("active");
  tajawalFont.classList.remove("active");
  localStorage.setItem("selectedFont", "cairo");
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
  display: flex;
  justify-content: center;
  border: 0.125rem solid #222e4bff;
  align-items: center;`;
  // hove
  themeColorsArray[i].classList.add(
    "theme-colors",
    "transition-transform",
    "duration-300",
    "ease-in-out",
    "hover:scale-110"
  );
  // for outline
  themeColorsArray[0].style.outline = "0.125rem solid #7263F3";
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
  localStorage.setItem("selectedTheme", "themeOne"); // save site color
  // for outline
  themeColorsArray.forEach((el) => (el.style.outline = "0"));
  themeOne.style.outline = "0.125rem solid #7263F3";
}
//themeTwo
themeTwo.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-primary", "#ec4899");
  document.documentElement.style.setProperty("--color-secondary", "#f97316");
  document.documentElement.style.setProperty("--color-accent", "#fb923c");
  // for outline
  themeColorsArray.forEach((el) => (el.style.outline = "0"));
  themeTwo.style.outline = "0.125rem solid #F35E55";
  localStorage.setItem("selectedTheme", "themeTwo"); // save site color
});
//themeThree
themeThree.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-primary", "#10b981");
  document.documentElement.style.setProperty("--color-secondary", "#059669");
  document.documentElement.style.setProperty("--color-accent", "#34d399");
  // for outline
  themeColorsArray.forEach((el) => (el.style.outline = "0"));
  themeThree.style.outline = "0.125rem solid #0AA775";
  localStorage.setItem("selectedTheme", "themeThree"); // save site color
});
//themeFour
themeFour.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-primary", "#3b82f6");
  document.documentElement.style.setProperty("--color-secondary", "#06b6d4");
  document.documentElement.style.setProperty("--color-accent", "#22d3ee");
  // for outline
  themeColorsArray.forEach((el) => (el.style.outline = "0"));
  themeFour.style.outline = "0.125rem solid #18A5E0";
  localStorage.setItem("selectedTheme", "themeFour"); // save site color
});
//themeFive
themeFive.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-primary", "#ef4444");
  document.documentElement.style.setProperty("--color-secondary", "#f43f5e");
  document.documentElement.style.setProperty("--color-accent", "#fb7185");
  // for outline
  themeColorsArray.forEach((el) => (el.style.outline = "0"));
  themeFive.style.outline = "0.125rem solid #F14152";
  localStorage.setItem("selectedTheme", "themeFive"); // save site color
});
//themeSix
themeSix.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-primary", "#f59e0b");
  document.documentElement.style.setProperty("--color-secondary", "#ea580c");
  document.documentElement.style.setProperty("--color-accent", "#fbbf24");
  // for outline
  themeColorsArray.forEach((el) => (el.style.outline = "0"));
  themeSix.style.outline = "0.125rem solid #EF770B";
  localStorage.setItem("selectedTheme", "themeSix"); // save site color
});
// localStorage
window.addEventListener("DOMContentLoaded", () => {
  // savedMode
  const savedMode = localStorage.getItem("themeMode");
  if (savedMode === "light") {
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
  }
  // font
  const savedFont = localStorage.getItem("selectedFont");
  if (savedFont) {
    if (savedFont === "tajawal") tajawal();
    if (savedFont === "alexandria") alexandriaFont.click();
    if (savedFont === "cairo") cairoFont.click();
  }
  // color
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    document.querySelector(`#${savedTheme}`).click();
  }
});

// resetSettings
let resetSettings = document.querySelector("#reset-settings");
resetSettings.addEventListener("click", function () {
  tajawal();
  defTheme();
  localStorage.removeItem("themeMode");
  localStorage.removeItem("selectedFont");
  localStorage.removeItem("selectedTheme");
  html.classList.add("dark");
});
// nav & tab
const filters = document.querySelectorAll(".portfolio-filter");
const items = document.querySelectorAll(".portfolio-item");
// btn all
const defaultBtn = document.querySelector('[data-filter="all"]');
// save btn style
const defaultStyle = window.getComputedStyle(defaultBtn);
// change btn style
function applyActiveStyle(btn) {
  btn.style.background = defaultStyle.background;
  btn.style.color = defaultStyle.color;
  btn.style.boxShadow = defaultStyle.boxShadow;
  btn.style.border = defaultStyle.border;
}
// deff byn style
function resetStyle(btn) {
  btn.style.background = "";
  btn.style.color = "";
  btn.style.boxShadow = "";
  btn.style.border = "";
}
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    // btn all style
    filters.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
      resetStyle(b);
    });
    // play btn
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");
    applyActiveStyle(btn);
    const filterValue = btn.dataset.filter;
    // show styl
    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "scale(0.8)";
      setTimeout(() => {
        if (filterValue === "all" || item.dataset.category === filterValue) {
          item.style.display = "block";
          requestAnimationFrame(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          });
        } else {
          item.style.display = "none";
        }
      }, 200);
    });
  });
});
// the slider
let btnCards = document.querySelectorAll(".portfolio-filter");
let Cards = document.querySelectorAll(".portfolio-item");
let carouselCards = document.querySelector("#testimonials-carousel");
let cards = document.querySelectorAll(".testimonial-card");
let prev = document.querySelector("#prev-testimonial");
let next = document.querySelector("#next-testimonial");
let dots = document.querySelectorAll(".carousel-indicator");
let current = 0;
// next
next.addEventListener("click", function () {
  let i = getVisibleCards();
  current++;
  if (current > cards.length - i) {
    current = 0;
  }
  move();
});
// prev
prev.addEventListener("click", function () {
  let i = getVisibleCards();
  current--;
  if (current < 0) {
    current = cards.length - i;
  }
  move();
});
// move translateX
function move() {
  let i = getVisibleCards();
  carouselCards.style.transform = "translateX(" + current * (100 / i) + "%)";
  updateActiveDot();
}
// update Active Dot style
function updateActiveDot() {
  dots.forEach(function (dot) {
    dot.classList.remove(
      "bg-accent",
      "bg-slate-400",
      "bg-slate-500",
      "dark:bg-slate-600",
      "scale-125"
    );
    dot.classList.add("bg-slate-400");
  });
  dots[current].classList.remove("bg-slate-400", "dark:bg-slate-600");
  dots[current].classList.add("bg-accent", "scale-125");
}
// dots
dots.forEach(function (dot, i) {
  dot.addEventListener("click", function () {
    current = i;
    move();
  });
});
function getVisibleCards() {
  if (window.innerWidth < 640) {
    return 1; // موبايل
  } else if (window.innerWidth < 1024) {
    return 2; // تابلت
  } else {
    return 3; // لاب
  }
}
// form
// allcustom selects
const customSelects = document.querySelectorAll(".custom-select-wrapper");
customSelects.forEach((wrapper) => {
  const select = wrapper.querySelector(".custom-select");
  const options = wrapper.querySelector(".custom-options");
  const icon = select.querySelector("i");
  const selectedText = select.querySelector(".selected-text");
  // open custom-options
  select.addEventListener("click", () => {
    const isOpen = !options.classList.contains("hidden");
    // close author custom-options
    document.querySelectorAll(".custom-options").forEach((opt) => {
      opt.classList.add("hidden");
    });
    // rotate icon
    document.querySelectorAll(".custom-select i").forEach((ic) => {
      ic.style.transform = "rotate(0deg)";
    });
    if (!isOpen) {
      options.classList.remove("hidden");
      icon.style.transform = "rotate(180deg)";
    } else {
      options.classList.add("hidden");
      icon.style.transform = "rotate(0deg)";
    }
  });
  // chose option
  options.querySelectorAll(".custom-option").forEach((option) => {
    option.addEventListener("click", () => {
      selectedText.textContent = option.dataset.value;
      if (html.classList.contains("dark")) {
        selectedText.style.color = "#ffffff";
      } else {
        selectedText.style.color = "black";
      }
      options.classList.add("hidden");
      icon.style.transform = "rotate(0deg)";
    });
  });
});
// close custom Selects
document.addEventListener("click", (e) => {
  customSelects.forEach((wrapper) => {
    const select = wrapper.querySelector(".custom-select");
    const options = wrapper.querySelector(".custom-options");
    const icon = select.querySelector("i");
    if (!wrapper.contains(e.target)) {
      options.classList.add("hidden");
      icon.style.transform = "rotate(0deg)";
    }
  });
});
