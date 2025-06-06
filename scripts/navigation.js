//Link the sidebar links to the section and highlight the link of the corresponding section showing
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const menuSidebar = {
    hero: document.querySelector(".home"),
    projects: document.querySelector(".projects"),
    skills: document.querySelector(".skills"),
    contact: document.querySelector(".contact"),
  };

  function callbackFunction(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document
          .querySelector("#menu-sidebar .active")
          .classList.remove("active");
        menuSidebar[entry.target.id].classList.add("active");
      }
    });
  }

  const option = {
    rootMargin: "0px",
    threshold: 0.3,
  };

  const observer = new IntersectionObserver(callbackFunction, option);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Open and close the menu sidebar
function hamToggle() {
  sidebar.classList.toggle("opened");
}
function clodeSidebar() {
  sidebar.classList.remove("opened");
}

// Close the sidebar if the click is outside of it and not on the hamburger icon
document.addEventListener("click", (event2) => {
  if (
    !event2.target.closest("#sidebar") &&
    !event2.target.closest(".hamburger-toggler")
  ) {
    sidebar.classList.remove("opened");
  }
});

// Hide the sidebar and the settings panel on scroll
document.addEventListener("scroll", () => {
  if (sidebar.classList.contains("opened")) {
    sidebar.classList.remove("opened");
  }
  if (settingContainer.classList.contains("show-settings")) {
    settingContainer.classList.remove("show-settings");
  }
});

// Dark mode
const moon = document.querySelector(".theme-btn .moon-icon");
const sun = document.querySelector(".theme-btn .sun-icon");
const body = document.querySelector("body");
// Toggle dark mode when the button is clicked
function activateDarkMode() {
  sun.classList.toggle("showed");
  moon.classList.toggle("showed");
  body.classList.toggle("dark-mode");
  localStorage.setItem("darkTheme", body.classList.contains("dark-mode"));
}
document.addEventListener("DOMContentLoaded", () => {
  const darkTheme = localStorage.getItem("darkTheme");
  if (darkTheme === "true") {
    body.classList.add("dark-mode");
    sun.classList.add("showed");
  } else {
    body.classList.remove("dark-mode");
    moon.classList.add("showed");
  }
});

// Toggle the settings button
const settingContainer = document.querySelector(".block-settings-content");
function settingsToggler() {
  settingContainer.classList.toggle("show-settings");
}

// Close the settings block when the user click anywhere on the page appart from inside the settings block
document.addEventListener("click", (event1) => {
  if (!event1.target.closest(".block-settings")) {
    settingContainer.classList.remove("show-settings");
  }
});

// Blue and gold theme
document.addEventListener("DOMContentLoaded", () => {
  body.classList.add("gold-theme");
  const themeColor = localStorage.getItem("themeColor");
  if (themeColor === "") {
    localStorage.setItem("themeColor", "gold-theme");
  }
  if (themeColor === "gold-theme") {
    body.classList.add("gold-theme");
  }
  if (themeColor === "blue-theme") {
    body.classList.add("blue-theme");
  }
});

function activateGoldTheme() {
  if (
    !body.classList.contains("gold-theme") ||
    body.classList.contains("blue-theme")
  ) {
    body.classList.remove("blue-theme");
    body.classList.add("gold-theme");
    localStorage.setItem("themeColor", "gold-theme");
  }
}
function activateBlueTheme() {
  if (
    !body.classList.contains("blue-theme") ||
    body.classList.contains("gold-theme")
  ) {
    body.classList.remove("gold-theme");
    body.classList.add("blue-theme");
    localStorage.setItem("themeColor", "blue-theme");
  }
}
